import React from 'react'
import { Button, Row, Col } from 'antd'
import '../public/style/index.css'
import Router from 'next/router'

const Home = () => {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: '100vh',
                margin: 0,
                background: '#f7faff'
            }}
        >
            <Col xs={22} md={10} lg={8}>
                <div
                    className="dowebok"
                    style={{
                        background: '#fff',
                        padding: '100px 40px',
                        borderRadius: '24px',
                        boxShadow: '0 2px 20px rgba(22, 93, 255, 0.05)',
                        textAlign: 'center'
                    }}
                >
                    {/* 标题区域 */}
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: 600,
                        color: '#111',
                        margin: '0 0 80px 0'
                    }}>选择身份</h1>

                    {/* 学生按钮 */}
                    <Button
                        type="primary"
                        size="large"
                        className="button"
                        onClick={() => Router.push('/student/login')}
                        style={{
                            width: '100%',
                            height: '80px',
                            fontSize: '24px',
                            background: '#165DFF',
                            border: 'none',
                            borderRadius: '16px',
                            marginBottom: '40px',
                            // 清除多余蓝色凸起核心样式
                            boxShadow: 'none',
                            overflow: 'hidden'
                        }}
                        // 清除点击active底部蓝色块
                        onMouseDown={(e) => e.target.style.background = '#0f4cd8'}
                        onMouseUp={(e) => e.target.style.background = '#165DFF'}
                        onMouseLeave={(e) => e.target.style.background = '#165DFF'}
                    >
                        我是学生
                    </Button>

                    {/* 教师按钮 */}
                    <Button
                        type="primary"
                        size="large"
                        className="button"
                        onClick={() => Router.push('/teacher/login')}
                        style={{
                            width: '100%',
                            height: '80px',
                            fontSize: '24px',
                            background: '#165DFF',
                            border: 'none',
                            borderRadius: '16px',
                            boxShadow: 'none',
                            overflow: 'hidden'
                        }}
                        onMouseDown={(e) => e.target.style.background = '#0f4cd8'}
                        onMouseUp={(e) => e.target.style.background = '#165DFF'}
                        onMouseLeave={(e) => e.target.style.background = '#165DFF'}
                    >
                        我是教师
                    </Button>
                </div>
            </Col>
        </Row>
    )
};

export default Home;