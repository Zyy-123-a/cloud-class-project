import React, {useState, useEffect, useContext} from 'react';
import {Button, Col, List, Row, Tabs, Upload, message, Modal, Input, Popconfirm, Space, Empty, Dropdown, Menu} from 'antd';
import {UploadOutlined, DownloadOutlined, DeleteOutlined, FileOutlined, LinkOutlined, EditOutlined, MenuOutlined, MoreOutlined} from '@ant-design/icons';
import {ResourceContext} from "./detailContext";
import {RealAxios} from "../../config";

const {TabPane} = Tabs;

const TeacherResource = () => {
    const {cid} = useContext(ResourceContext);
    const [resources, setResources] = useState([]);
    const [activeTab, setActiveTab] = useState('file');
    const [uploading, setUploading] = useState(false);
    const [dragIndex, setDragIndex] = useState(null);
    // 外链弹窗
    const [linkModalVisible, setLinkModalVisible] = useState(false);
    const [linkName, setLinkName] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    // 重命名
    const [renameModalVisible, setRenameModalVisible] = useState(false);
    const [renameRid, setRenameRid] = useState('');
    const [renameName, setRenameName] = useState('');

    const loadResources = () => {
        RealAxios({method: 'post', url: '/resource/list', data: {cid, rtype: activeTab}})
            .then(r => setResources(r.data || []))
            .catch(e => console.log(e));
    };

    useEffect(() => { if (cid) loadResources(); }, [cid, activeTab]);

    // ========== 拖拽排序 ==========
    const handleDragStart = (e, index) => {
        setDragIndex(index);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.opacity = '0.4';
    };
    const handleDragOver = (e) => { e.preventDefault(); };
    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
        setDragIndex(null);
    };
    const handleDrop = (e, dropIndex) => {
        e.preventDefault();
        if (dragIndex === null || dragIndex === dropIndex) return;
        const newResources = [...resources];
        const [draggedItem] = newResources.splice(dragIndex, 1);
        newResources.splice(dropIndex, 0, draggedItem);
        setResources(newResources);
        setDragIndex(null);
        const sortData = newResources.map((item, i) => ({rid: item.rid, rsort: i}));
        RealAxios({method: 'post', url: '/resource/sort', data: {sortList: sortData}})
            .catch(() => message.error('排序保存失败'));
    };

    // ========== 资源操作 ==========
    const customRequest = ({file, onSuccess, onError}) => {
        const formData = new FormData();
        formData.append('file', file); formData.append('cid', cid); formData.append('rname', file.name);
        setUploading(true);
        RealAxios({method: 'post', url: '/resource/upload', data: formData, headers: {'Content-Type': 'multipart/form-data'}})
            .then((response) => {
                if (response.data && response.data !== 0) { message.success('上传成功'); onSuccess(response.data, file); loadResources(); }
                else { message.error('上传失败'); onError(new Error()); }
            }).catch(e => { message.error('上传失败'); onError(e); })
            .finally(() => setUploading(false));
    };

    const openResource = (item) => {
        if (item.rtype === 'link') { window.open(item.rlink, '_blank'); return; }
        RealAxios({method: 'post', url: '/resource/download', data: {rid: item.rid}})
            .then((response) => {
                const data = response.data;
                if (data && data.available && data.base64) {
                    const byteCharacters = atob(data.base64);
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) byteNumbers[i] = byteCharacters.charCodeAt(i);
                    const blob = new Blob([new Uint8Array(byteNumbers)]);
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = data.roriginalname || 'download'; link.click();
                    message.success('下载成功');
                } else message.error('文件不存在');
            }).catch(() => message.error('下载失败'));
    };

    const deleteResource = (rid) => {
        RealAxios({method: 'post', url: '/resource/delete', data: {rid}})
            .then(r => { if (r.data) { message.success('已删除'); loadResources(); } })
            .catch(() => message.error('删除失败'));
    };

    const openRenameResource = (item) => {
        setRenameRid(item.rid); setRenameName(item.roriginalname || item.rname); setRenameModalVisible(true);
    };
    const doRenameResource = () => {
        if (!renameName.trim()) { message.warning('请输入名称'); return; }
        RealAxios({method: 'post', url: '/resource/rename', data: {rid: renameRid, rname: renameName}})
            .then(r => { if (r.data) { message.success('已重命名'); setRenameModalVisible(false); loadResources(); } })
            .catch(() => message.error('重命名失败'));
    };

    const addLink = () => {
        if (!linkName.trim() || !linkUrl.trim()) { message.warning('请填写名称和链接'); return; }
        RealAxios({method: 'post', url: '/resource/addLink', data: {cid, rname: linkName, rlink: linkUrl}})
            .then(r => { if (r.data) { message.success('添加成功'); setLinkModalVisible(false); setLinkName(''); setLinkUrl(''); loadResources(); } })
            .catch(() => message.error('添加失败'));
    };

    const formatSize = (size) => size < 1024 ? size + ' B' : size < 1024*1024 ? (size/1024).toFixed(1)+' KB' : (size/(1024*1024)).toFixed(1)+' MB';

    return (
        <div>
            <div style={{color: '#999', fontSize: 12, marginBottom: 4}}>💡 拖拽左侧手柄可排序</div>

            <Tabs activeKey={activeTab} onChange={setActiveTab}>
                <TabPane tab="附件资源" key="file">
                    <Row justify="space-between" align="middle" style={{marginBottom: 12}}>
                        <Col><span style={{color: '#999'}}>共 {resources.length} 个文件</span></Col>
                        <Col>
                            <Upload name="file" customRequest={customRequest} showUploadList={false}>
                                <Button type="primary" icon={<UploadOutlined/>} loading={uploading}>上传文件</Button>
                            </Upload>
                        </Col>
                    </Row>
                    <List dataSource={resources} split={false}
                          locale={{emptyText: <Empty description="暂无附件" />}}
                          renderItem={(item, index) => (
                              <div key={item.rid} draggable
                                   onDragStart={(e) => handleDragStart(e, index)}
                                   onDragOver={handleDragOver} onDragEnd={handleDragEnd}
                                   onDrop={(e) => handleDrop(e, index)}
                                   style={{padding: '8px 12px', marginBottom: 4, backgroundColor: '#fafafa',
                                       borderRadius: 6, cursor: 'default', display: 'flex', alignItems: 'center'}}>
                                  <span style={{cursor: 'grab', color: '#bbb', marginRight: 8, fontSize: 14}}><MenuOutlined /></span>
                                  <FileOutlined style={{fontSize: 16, color: '#1890ff', marginRight: 8, flexShrink: 0}}/>
                                  <span style={{flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
                                        onClick={() => openResource(item)}><a>{item.roriginalname || item.rname}</a></span>
                                  <span style={{color: '#999', fontSize: 12, margin: '0 12px', whiteSpace: 'nowrap'}}>{formatSize(item.rsize)}</span>
                                  <span style={{color: '#999', fontSize: 12, marginRight: 12, whiteSpace: 'nowrap'}}>{item.rdate}</span>
                                  <span onClick={e => e.stopPropagation()}>
                                      <Dropdown overlay={
                                          <Menu>
                                              <Menu.Item icon={<DownloadOutlined/>} onClick={() => openResource(item)}>下载</Menu.Item>
                                              <Menu.Item icon={<EditOutlined/>} onClick={() => openRenameResource(item)}>重命名</Menu.Item>
                                              <Menu.Item danger icon={<DeleteOutlined/>} onClick={() => deleteResource(item.rid)}>删除</Menu.Item>
                                          </Menu>
                                      } trigger={['click']}><Button type="text" size="small" icon={<MoreOutlined/>}/></Dropdown>
                                  </span>
                              </div>
                          )}/>
                </TabPane>
                <TabPane tab="外链资源" key="link">
                    <Row justify="space-between" align="middle" style={{marginBottom: 12}}>
                        <Col><span style={{color: '#999'}}>共 {resources.length} 个链接</span></Col>
                        <Col>
                            <Button type="primary" icon={<LinkOutlined/>}
                                    onClick={() => { setLinkName(''); setLinkUrl(''); setLinkModalVisible(true); }}>添加链接</Button>
                        </Col>
                    </Row>
                    <List dataSource={resources} split={false}
                          locale={{emptyText: <Empty description="暂无外链" />}}
                          renderItem={(item, index) => (
                              <div key={item.rid} draggable
                                   onDragStart={(e) => handleDragStart(e, index)}
                                   onDragOver={handleDragOver} onDragEnd={handleDragEnd}
                                   onDrop={(e) => handleDrop(e, index)}
                                   style={{padding: '8px 12px', marginBottom: 4, backgroundColor: '#fafafa',
                                       borderRadius: 6, cursor: 'default', display: 'flex', alignItems: 'center'}}>
                                  <span style={{cursor: 'grab', color: '#bbb', marginRight: 8, fontSize: 14}}><MenuOutlined /></span>
                                  <LinkOutlined style={{fontSize: 16, color: '#52c41a', marginRight: 8, flexShrink: 0}}/>
                                  <span style={{flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                                      <a onClick={() => window.open(item.rlink, '_blank')}>{item.rname}</a></span>
                                  <span style={{color: '#999', fontSize: 12, marginRight: 12, whiteSpace: 'nowrap'}}>{item.rdate}</span>
                                  <span onClick={e => e.stopPropagation()}>
                                      <Dropdown overlay={
                                          <Menu>
                                              <Menu.Item icon={<LinkOutlined/>} onClick={() => window.open(item.rlink, '_blank')}>打开链接</Menu.Item>
                                              <Menu.Item icon={<EditOutlined/>} onClick={() => openRenameResource(item)}>重命名</Menu.Item>
                                              <Menu.Item danger icon={<DeleteOutlined/>} onClick={() => deleteResource(item.rid)}>删除</Menu.Item>
                                          </Menu>
                                      } trigger={['click']}><Button type="text" size="small" icon={<MoreOutlined/>}/></Dropdown>
                                  </span>
                              </div>
                          )}/>
                </TabPane>
            </Tabs>

            {/* 外链弹窗 */}
            <Modal title="添加外链资源" visible={linkModalVisible} onOk={addLink} onCancel={() => setLinkModalVisible(false)} okText="添加">
                <div style={{marginBottom: 12}}><div style={{marginBottom: 4}}>链接名称</div>
                    <Input value={linkName} onChange={e => setLinkName(e.target.value)} placeholder="如：课程参考网站" /></div>
                <div><div style={{marginBottom: 4}}>链接地址</div>
                    <Input value={linkUrl} onChange={e => setLinkUrl(e.target.value)} placeholder="如：https://example.com" /></div>
            </Modal>

            {/* 重命名弹窗 */}
            <Modal title="重命名" visible={renameModalVisible} onOk={doRenameResource}
                   onCancel={() => setRenameModalVisible(false)} okText="确定">
                <Input value={renameName} onChange={e => setRenameName(e.target.value)} placeholder="资源名称" />
            </Modal>
        </div>
    );
};

export default TeacherResource;
