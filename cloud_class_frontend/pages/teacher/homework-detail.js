import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import cookie from 'react-cookies';
import Router from 'next/router';
import { Col } from 'antd';
import Header from '../../components/teacher/header';
import { PageContext } from '../../components/teacher/Context';
import HomeworkDetailPanel from '../../components/teacher/homework/HomeworkDetailPanel';
import '../../public/style/teacher/homework.css';

const HomeworkDetail = ({ router }) => {
    useEffect(() => {
        if (cookie.load('identify') !== 'teacher' || !cookie.load('id')) {
            Router.push('/teacher/login');
        }
    }, []);

    const { twid, cid } = router.query;

    return (
        <div className="hw-page">
            <PageContext.Provider value="error">
                <Header />
            </PageContext.Provider>
            <Col span={18} offset={3} style={{ padding: '20px 0' }}>
                {twid && cid && <HomeworkDetailPanel twid={twid} cid={cid} />}
            </Col>
        </div>
    );
};

export default withRouter(HomeworkDetail);
