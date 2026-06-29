import React, { useState } from 'react';
import { Button, Col, Input, InputNumber, message, Modal, Row } from 'antd';
import { RealAxios } from '../../config';
import { renderMarkdown } from './utils';

// 下载附件
const downloadAttachment = (RealAxios, aid, filename) => {
    RealAxios({
        method: 'post',
        url: '/hwStudent/downloadFile',
        data: { aid },
    }).then((response) => {
        if (response.data.result === 1) {
            const byteCharacters = atob(response.data.data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const blob = new Blob([new Uint8Array(byteNumbers)]);
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename || response.data.filename;
            link.click();
        }
    }).catch(() => message.error('下载失败'));
};

const { TextArea } = Input;

const GradeModal = ({ visible, submission, onClose, onSuccess }) => {
    const [score, setScore] = useState(0);
    const [correction, setCorrection] = useState('');
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (submission) {
            setScore(parseFloat(submission.score) || 0);
            setCorrection(submission.correction || '');
        }
    }, [submission]);

    const handleGrade = () => {
        if (!submission || !submission.swid) {
            message.warning('该学生尚未提交，无法批改');
            return;
        }
        setLoading(true);
        RealAxios({
            method: 'post',
            url: '/hwTeacher/grade',
            data: { swid: submission.swid, score: String(score), correction },
        }).then((response) => {
            if (response.data.result > 0) {
                message.success('批改成功');
                onSuccess();
                onClose();
            } else {
                message.error('批改失败');
            }
        }).catch(() => message.error('批改失败'))
            .finally(() => setLoading(false));
    };

    if (!submission) return null;

    return (
        <Modal
            title={'批改 - ' + submission.sname + ' (' + submission.snum + ')'}
            visible={visible}
            onCancel={onClose}
            width={720}
            footer={[
                <Button key="cancel" onClick={onClose}>取消</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleGrade}
                        disabled={!submission.swid}>保存批改</Button>,
            ]}
        >
            {submission.swid ? (
                <>
                    <h4>学生提交内容</h4>
                    <div className="hw-markdown"
                         dangerouslySetInnerHTML={{ __html: renderMarkdown(submission.scontent) }} />
                    <p>提交时间：{submission.spublish}</p>
                    {/* 学生附件 */}
                    {(submission.studentAttachments && submission.studentAttachments.length > 0) && (
                        <div style={{ marginTop: 16 }}>
                            <h4>附件</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {submission.studentAttachments.map((item) => (
                                    <li key={item.aid} style={{ marginBottom: 8 }}>
                                        <button
                                            onClick={() => downloadAttachment(RealAxios, item.aid, item.filename)}
                                            style={{ color: '#1890ff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                        >
                                            {item.filename}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="hw-grade-panel">
                        <Row gutter={16} align="middle">
                            <Col>评分：</Col>
                            <Col>
                                <InputNumber min={0} max={100} value={score}
                                             onChange={(v) => setScore(v)} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 12 }}>
                            <Col span={24}>评语：</Col>
                            <Col span={24} style={{ marginTop: 8 }}>
                                <TextArea rows={4} value={correction}
                                          onChange={(e) => setCorrection(e.target.value)}
                                          placeholder="请输入评语（支持 Markdown）" />
                            </Col>
                        </Row>
                    </div>
                </>
            ) : (
                <p style={{ color: '#faad14' }}>该学生尚未提交作业</p>
            )}
        </Modal>
    );
};

export default GradeModal;