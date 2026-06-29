import React, { useState, useEffect } from 'react';
import { Button, Col, List, message, Row, Select, Tag } from 'antd';
import cookie from 'react-cookies';
import Router from 'next/router';
import { RealAxios } from '../../config';
import { getStatusTag, renderMarkdown, FILTER_OPTIONS } from './utils';
import GradeModal from './GradeModal';

const { Option } = Select;

const HomeworkDetailPanel = ({ twid, cid }) => {
    const [detail, setDetail] = useState(null);
    const [submissions, setSubmissions] = useState([]);
    const [filter, setFilter] = useState('all');
    const [gradeTarget, setGradeTarget] = useState(null);
    const [gradeVisible, setGradeVisible] = useState(false);
    const [reminding, setReminding] = useState(false);

    const loadDetail = () => {
        RealAxios({
            method: 'post',
            url: '/hwTeacher/detail',
            data: { twid },
        }).then((response) => {
            if (response.data.result === 1) {
                setDetail(response.data.data);
            }
        });
    };

    const loadSubmissions = () => {
        RealAxios({
            method: 'post',
            url: '/hwTeacher/submissionList',
            data: { twid, filter },
        }).then((response) => {
            setSubmissions(response.data || []);
        });
    };

    useEffect(() => {
        if (twid) {
            loadDetail();
            loadSubmissions();
        }
    }, [twid, filter]);

    const handleRemindAll = () => {
        setReminding(true);
        RealAxios({
            method: 'post',
            url: '/hwTeacher/remindAll',
            data: { twid, cid, mpublish: new Date().toLocaleDateString() },
        }).then((response) => {
            message.success(response.data.msg || '催交成功');
        }).catch(() => message.error('催交失败'))
            .finally(() => setReminding(false));
    };

    const handleRemindOne = (sid) => {
        RealAxios({
            method: 'post',
            url: '/hwTeacher/remindOne',
            data: { twid, cid, sid, mpublish: new Date().toLocaleDateString() },
        }).then((response) => {
            if (response.data.result > 0) {
                message.success('催交成功');
            } else {
                message.error('催交失败');
            }
        });
    };

    const openGrade = (item) => {
        setGradeTarget(item);
        setGradeVisible(true);
    };

    if (!detail) return <div>加载中...</div>;

    const stats = detail.stats || {};

    return (
        <div>
            <div className="hw-back-link" onClick={() => Router.push('/teacher/detail?id=' + cid)}>
                ← 返回课程详情
            </div>

            <div className="hw-card">
                <h2>{detail.wtitle}</h2>
                <Row gutter={[16, 8]}>
                    <Col>发布：{detail.tpublish}</Col>
                    <Col>截止：{detail.deadline}</Col>
                    <Col>占比：{detail.scale}</Col>
                </Row>
                <div className="hw-stats" style={{ marginTop: 16 }}>
                    <div className="hw-stat-item"><div className="hw-stat-num">{stats.total || 0}</div>总人数</div>
                    <div className="hw-stat-item"><div className="hw-stat-num">{stats.submitted || 0}</div>已提交</div>
                    <div className="hw-stat-item"><div className="hw-stat-num">{stats.unsubmitted || 0}</div>未提交</div>
                    <div className="hw-stat-item"><div className="hw-stat-num">{stats.graded || 0}</div>已批阅</div>
                </div>
            </div>

            <div className="hw-card">
                <h3>作业要求</h3>
                <div className="hw-markdown" dangerouslySetInnerHTML={{ __html: renderMarkdown(detail.tcontent) }} />
            </div>

            <div className="hw-card">
                <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
                    <Col>
                        <h3 style={{ margin: 0 }}>提交列表</h3>
                    </Col>
                    <Col>
                        <Select value={filter} style={{ width: 120, marginRight: 8 }}
                                onChange={(v) => setFilter(v)}>
                            {FILTER_OPTIONS.map((o) => (
                                <Option key={o.key} value={o.key}>{o.label}</Option>
                            ))}
                        </Select>
                        <Button type="primary" danger loading={reminding} onClick={handleRemindAll}>
                            一键催交未交学生
                        </Button>
                    </Col>
                </Row>
                <List
                    dataSource={submissions}
                    locale={{ emptyText: '暂无数据' }}
                    renderItem={(item) => {
                        const statusInfo = getStatusTag(item.status);
                        return (
                            <List.Item
                                actions={[
                                    item.status === '0' ? (
                                        <Button key="remind" size="small" onClick={() => handleRemindOne(item.sid)}>
                                            催交
                                        </Button>
                                    ) : (
                                        <Button key="grade" size="small" type="primary" onClick={() => openGrade(item)}>
                                            {item.status === '2' ? '查看/修改批改' : '在线批改'}
                                        </Button>
                                    ),
                                ]}
                            >
                                <List.Item.Meta
                                    title={
                                        <Row gutter={8}>
                                            <Col>{item.snum} - {item.sname}</Col>
                                            <Col><Tag color={statusInfo.color}>{statusInfo.text}</Tag></Col>
                                            {item.score !== undefined && item.status !== '0' && (
                                                <Col>得分：{item.score}</Col>
                                            )}
                                        </Row>
                                    }
                                    description={item.spublish ? '提交时间：' + item.spublish : '尚未提交'}
                                />
                            </List.Item>
                        );
                    }}
                />
            </div>

            <GradeModal
                visible={gradeVisible}
                submission={gradeTarget}
                onClose={() => setGradeVisible(false)}
                onSuccess={() => { loadDetail(); loadSubmissions(); }}
            />
        </div>
    );
};

export default HomeworkDetailPanel;
