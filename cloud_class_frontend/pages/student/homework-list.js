import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import cookie from 'react-cookies';
import Router from 'next/router';
import { Col, Card, Tag } from 'antd';
import Header from '../../components/student/header';
import { PageContext } from '../../components/student/Context';
import HomeworkListPanel from '../../components/student/homework/HomeworkListPanel';
import { RealAxios } from '../../components/config';
import '../../public/style/student/homework.css';

const HomeworkList = ({ router }) => {
    const [courses, setCourses] = useState([]);
    const cid = router.query.cid;

    useEffect(() => {
        if (cookie.load('identify') !== 'student' || !cookie.load('id')) {
            Router.push('/student/login');
        }
        if (!cid) {
            RealAxios({
                method: 'post',
                url: '/course/getCourseByStudent',
                data: { phone: cookie.load('id') }
            }).then((response) => {
                setCourses(response.data || []);
            }).catch(() => {});
        }
    }, []);

    return (
        <div className="hw-page">
            <PageContext.Provider value="error">
                <Header />
            </PageContext.Provider>
            <Col span={18} offset={3} style={{ padding: '20px 0' }}>
                {cid ? (
                    <HomeworkListPanel cid={cid} />
                ) : (
                    <div>
                        <h2>我的课程</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '20px' }}>
                            {courses.map((course) => (
                                <Card 
                                    key={course.cid} 
                                    hoverable
                                    style={{ width: 300, cursor: 'pointer' }}
                                    onClick={() => Router.push(`/student/homework-list?cid=${course.cid}`)}
                                >
                                    <div>
                                        <h3>{course.cname}</h3>
                                        <Tag color="blue">点击查看作业</Tag>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </Col>
        </div>
    );
};

export default withRouter(HomeworkList);