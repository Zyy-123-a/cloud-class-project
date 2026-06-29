import React, { useState, useEffect } from 'react';
import { Button, Col, List, message, Row, Tag } from 'antd';
import cookie from 'react-cookies';
import Router from 'next/router';
import { RealAxios } from '../../config';
import { getStatusTag } from './utils';

const HomeworkListPanel = ({ cid }) => {
    const [works, setWorks] = useState([]);

    const loadWorks = () => {
        RealAxios({
            method: 'post',
            url: '/hwStudent/listByCourse',
            data: { cid, sphone: cookie.load('id') },
        }).then((response) => {
            setWorks(response.data || []);
        }).catch(() => message.error('加载作业列表失败'));
    };

    useEffect(() => {
        if (cid) loadWorks();
    }, [cid]);

    return (
        <div>
            <div className="hw-back-link" onClick={() => Router.push('/student/detail?id=' + cid)}>
                ← 返回课程详情
            </div>
            <div className="hw-card">
                <h2>课程作业</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={works}
                    locale={{ emptyText: '暂无作业' }}
                    renderItem={(item) => {
                        const statusInfo = getStatusTag(item.status);
                        return (
                            <List.Item
                                actions={[
                                    <Button key="view" type="link"
                                            onClick={() => Router.push('/student/homework-detail?twid=' + item.twid + '&cid=' + cid)}>
                                        查看详情
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta
                                    title={
                                        <Row gutter={8}>
                                            <Col>{item.wtitle}</Col>
                                            <Col><Tag color={statusInfo.color}>{statusInfo.text}</Tag></Col>
                                        </Row>
                                    }
                                    description={
                                        <span>截止：{item.deadline} | 发布：{item.tpublish}
                                            {item.status === '2' && ' | 得分：' + item.score}
                                        </span>
                                    }
                                />
                            </List.Item>
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default HomeworkListPanel;
