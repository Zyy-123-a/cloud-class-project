import React, {useState,useEffect, useContext} from 'react'
import {Affix, Col, Menu, Row} from 'antd'
import Sculpture from "../../components/student/sculpture";
import "../../public/style/head.css"
import Link from "next/link";
import Head from "next/head";
import {PageContext} from "./Context";

const Header = () => {
    const page = useContext(PageContext);
    const [top, setTop] = useState(0);
    useEffect(() => {}, []);
    return (
        <Affix offsetTop={top}>
            <Head>
                <title>云课堂</title>
                <meta charSet='utf-8' />
            </Head>
            <div id='header-wrap'>
                <Col span={18} offset={3} style={{height: "50px"}}>
                    <Row type='flex' align='bottom' style={{height: '50px'}}>
                        <Col span={4}>
                            <div id='logo-text'>CloudClass</div>
                        </Col>
                        <Col span={10}>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={[page]}
                            >
                                <Menu.Item key='index'>
                                    <Link href='/student'><a>首页</a></Link>
                                </Menu.Item>
                                <Menu.Item key='topic'>
                                    <Link href="/student/topic"><a>讨论区</a></Link>
                                </Menu.Item>
                                <Menu.Item key='homework'>
                                    <Link href='/student/homework-list'><a>作业</a></Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={2} offset={8} style={{height: '100%', paddingTop: "5px"}}>
                            <Sculpture/>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Affix>
    )
};

export default Header;