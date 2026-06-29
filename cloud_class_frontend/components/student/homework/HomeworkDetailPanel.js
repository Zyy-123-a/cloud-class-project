import React, { useState, useEffect } from 'react';
import { Button, Col, Input, List, message, Row, Tag, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import cookie from 'react-cookies';
import Router from 'next/router';
import { RealAxios } from '../../config';
import { getStatusTag, renderMarkdown, downloadAttachment } from './utils';

const { TextArea } = Input;

const HomeworkDetailPanel = ({ twid, cid }) => {
    const [detail, setDetail] = useState(null);
    const [content, setContent] = useState('');
    const [attachments, setAttachments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [editing, setEditing] = useState(false);

    const loadDetail = () => {
        RealAxios({
            method: 'post',
            url: '/hwStudent/detail',
            data: { twid, sphone: cookie.load('id') },
        }).then((response) => {
            if (response.data.result === 1) {
                const data = response.data.data;
                setDetail(data);
                setContent(data.scontent || '');
                setAttachments(data.studentAttachments || []);
            }
        }).catch(() => message.error('加载失败'));
    };

    useEffect(() => {
        if (twid) loadDetail();
    }, [twid]);

    const handleSubmit = () => {
        if (!content.trim()) {
            message.warning('请填写作业内容');
            return;
        }
        setSubmitting(true);
        RealAxios({
            method: 'post',
            url: '/hwStudent/submit',
            data: { twid, sphone: cookie.load('id'), scontent: content },
        }).then((response) => {
            if (response.data.result === 1) {
                message.success('提交成功');
                setEditing(false);
                loadDetail();
            } else {
                message.error(response.data.msg || '提交失败');
            }
        }).catch(() => message.error('提交失败'))
            .finally(() => setSubmitting(false));
    };

    const uploadProps = {
        name: 'file',
        showUploadList: false,
        customRequest: ({ file, onSuccess, onError }) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('twid', twid);
            formData.append('sphone', cookie.load('id'));
            RealAxios({
                method: 'post',
                url: '/hwStudent/uploadFile',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' },
            }).then((response) => {
                if (response.data.result === 1) {
                    message.success('上传成功');
                    loadDetail();
                    onSuccess();
                } else {
                    message.error(response.data.msg);
                    onError();
                }
            }).catch(onError);
        },
    };

    const handleDeleteFile = (aid) => {
        RealAxios({
            method: 'post',
            url: '/hwStudent/deleteFile',
            data: { aid, sphone: cookie.load('id') },
        }).then((response) => {
            if (response.data.result === 1) {
                message.success('删除成功');
                loadDetail();
            }
        });
    };

    if (!detail) return <div>加载中...</div>;

    const statusInfo = getStatusTag(detail.status);
    const canSubmit = detail.canSubmit === true || detail.canSubmit === 'true';

    return (
        <div>
            <div className="hw-back-link" onClick={() => Router.push('/student/homework-list?cid=' + cid)}>
                ← 返回作业列表
            </div>
            <div className="hw-card">
                <Row justify="space-between" align="middle">
                    <Col>
                        <h2>{detail.wtitle}</h2>
                    </Col>
                    <Col>
                        <Tag color={statusInfo.color}>{statusInfo.text}</Tag>
                    </Col>
                </Row>
                <Row gutter={[16, 8]}>
                    <Col>发布日期：{detail.tpublish}</Col>
                    <Col>截止时间：{detail.deadline}</Col>
                    <Col>成绩占比：{detail.scale}</Col>
                </Row>
            </div>

            <div className="hw-card">
                <h3>作业要求</h3>
                <div className="hw-markdown" dangerouslySetInnerHTML={{ __html: renderMarkdown(detail.tcontent) }} />
            </div>

            {(detail.status === '1' || detail.status === '2') && !editing && (
                <div className="hw-card">
                    <h3>我的提交</h3>
                    <div className="hw-markdown" dangerouslySetInnerHTML={{ __html: renderMarkdown(detail.scontent) }} />
                    <p>提交时间：{detail.spublish}</p>
                    {attachments.length > 0 && (
                        <div className="hw-attachment-list">
                            <h4>附件</h4>
                            <List
                                size="small"
                                dataSource={attachments}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <a key="dl" onClick={() => downloadAttachment(RealAxios, item.aid, item.filename)}>下载</a>,
                                        ]}
                                    >
                                        {item.filename}
                                    </List.Item>
                                )}
                            />
                        </div>
                    )}
                </div>
            )}

            {detail.status === '2' && (
                <div className="hw-card">
                    <h3>教师批阅</h3>
                    <Row gutter={16}>
                        <Col><strong>评分：</strong>{detail.score}</Col>
                    </Row>
                    <div className="hw-markdown" style={{ marginTop: 8 }}
                         dangerouslySetInnerHTML={{ __html: renderMarkdown(detail.correction || '暂无评语') }} />
                </div>
            )}

            {(detail.status === '0' || editing || (canSubmit && detail.status !== '2')) && (
                <div className="hw-card hw-submit-area">
                    <h3>{detail.status === '0' ? '提交作业' : '重新提交'}</h3>
                    {!canSubmit ? (
                        <p style={{ color: '#ff4d4f' }}>已过截止时间，无法提交</p>
                    ) : (
                        <>
                            <TextArea rows={6} value={content} onChange={(e) => setContent(e.target.value)}
                                      placeholder="请输入作业答案（支持 Markdown）" />
                            <Row gutter={16} style={{ marginTop: 12 }}>
                                <Col>
                                    <Upload {...uploadProps}>
                                        <Button icon={<UploadOutlined />}>上传附件</Button>
                                    </Upload>
                                </Col>
                            </Row>
                            {attachments.length > 0 && (
                                <List
                                    size="small"
                                    style={{ marginTop: 8 }}
                                    dataSource={attachments}
                                    renderItem={(item) => (
                                        <List.Item actions={[
                                            <a key="del" onClick={() => handleDeleteFile(item.aid)}>删除</a>,
                                        ]}>
                                            {item.filename}
                                        </List.Item>
                                    )}
                                />
                            )}
                            <Row gutter={16} style={{ marginTop: 16 }}>
                                <Col>
                                    <Button type="primary" loading={submitting} onClick={handleSubmit}>提交</Button>
                                </Col>
                                {detail.status !== '0' && (
                                    <Col>
                                        <Button onClick={() => { setEditing(false); setContent(detail.scontent || ''); }}>取消</Button>
                                    </Col>
                                )}
                            </Row>
                        </>
                    )}
                </div>
            )}

            {canSubmit && detail.status !== '0' && !editing && (
                <div className="hw-card">
                    <Button type="primary" onClick={() => setEditing(true)}>重新提交</Button>
                </div>
            )}
        </div>
    );
};

export default HomeworkDetailPanel;
