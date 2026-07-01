import React, {useState, useEffect, useContext} from 'react';
import {Col, List, Row, Tabs, Empty, message} from 'antd';
import {DownloadOutlined, FileOutlined, LinkOutlined} from '@ant-design/icons';
import {ResourceContext} from "./detailContext";
import {RealAxios} from "../../config";

const {TabPane} = Tabs;

const StudentResource = () => {
    const {cid} = useContext(ResourceContext);
    const [resources, setResources] = useState([]);
    const [activeTab, setActiveTab] = useState('file');

    const loadResources = () => {
        RealAxios({method: 'post', url: '/resource/list', data: {cid, rtype: activeTab}})
            .then(r => setResources(r.data || []))
            .catch(e => console.log(e));
    };

    useEffect(() => { if (cid) loadResources(); }, [cid, activeTab]);

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

    const formatSize = (size) => size < 1024 ? size + ' B' : size < 1024*1024 ? (size/1024).toFixed(1)+' KB' : (size/(1024*1024)).toFixed(1)+' MB';

    return (
        <div>
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
                <TabPane tab="附件资源" key="file">
                    <Row style={{marginBottom: 12}}><Col><span style={{color: '#999'}}>共 {resources.length} 个文件</span></Col></Row>
                    <List dataSource={resources} split={false}
                          locale={{emptyText: <Empty description="暂无附件" />}}
                          renderItem={item => (
                              <List.Item key={item.rid} style={{padding: '10px 16px', marginBottom: 4, backgroundColor: '#fafafa', borderRadius: 6}}>
                                  <Row justify="space-between" align="middle" style={{width: '100%'}}>
                                      <Col flex="auto">
                                          <FileOutlined style={{fontSize: 16, color: '#1890ff', marginRight: 8}}/>
                                          <a onClick={() => openResource(item)}>{item.roriginalname || item.rname}</a>
                                          <span style={{color: '#999', fontSize: 12, marginLeft: 12}}>{formatSize(item.rsize)}</span>
                                      </Col>
                                      <Col><span style={{color: '#999', fontSize: 12, marginRight: 16}}>{item.rdate}</span></Col>
                                      <Col><a onClick={() => openResource(item)}><DownloadOutlined /> 下载</a></Col>
                                  </Row>
                              </List.Item>)}/>
                </TabPane>
                <TabPane tab="外链资源" key="link">
                    <Row style={{marginBottom: 12}}><Col><span style={{color: '#999'}}>共 {resources.length} 个链接</span></Col></Row>
                    <List dataSource={resources} split={false}
                          locale={{emptyText: <Empty description="暂无外链" />}}
                          renderItem={item => (
                              <List.Item key={item.rid} style={{padding: '10px 16px', marginBottom: 4, backgroundColor: '#fafafa', borderRadius: 6}}>
                                  <Row justify="space-between" align="middle" style={{width: '100%'}}>
                                      <Col flex="auto">
                                          <LinkOutlined style={{fontSize: 16, color: '#52c41a', marginRight: 8}}/>
                                          <a onClick={() => window.open(item.rlink, '_blank')}>{item.rname}</a>
                                      </Col>
                                      <Col><span style={{color: '#999', fontSize: 12, marginRight: 16}}>{item.rdate}</span></Col>
                                      <Col><a onClick={() => window.open(item.rlink, '_blank')}><LinkOutlined /> 打开链接</a></Col>
                                  </Row>
                              </List.Item>)}/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default StudentResource;
