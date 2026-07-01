import React, {useEffect, useState} from 'react';
import {Button, Col, Input, message, Row, Tabs} from "antd";
import {RealAxios} from "../../components/config";
import cookie from "react-cookies";
import Router from "next/router";
import {
    BackSvg,
    CollegeSvg,
    EmailSvg,
    NameSvg,
    PasswordSvg,
    SecurityCodeSvg,
    StudentNumSvg,
    UserSvg
} from "../../components/Svg";
import Head from "next/head";



const {TabPane} = Tabs;
const {Password} = Input;
const Login = ()=>{
    const [action,setAction] = useState('login');
    const [sPhone, setSPhone] = useState('');
    const [sPassword,setSPassword] = useState('');
    const [sNum,setSNum] = useState("");
    const [sEmail,setSEmail] = useState('');
    const [sName,setSName] = useState('');
    const [sCollege,setSCollege] = useState('');
    const [security, setSecurity] = useState('');
    const [image,setImage] = useState('');
    const [code, setCode] = useState('');

    const changeCode = ()=>{
        setSecurity("");
        // 修复：添加 / 前缀
        RealAxios.get("/student/getSecurityCode?time="+new Date().getTime())
            .then((response)=>{
                setImage('data:image/png;base64,'+response.data.image);
                setCode(response.data.code);
            })
            .catch((error)=>{
                console.error("获取验证码失败:", error);
                message.warning("获取验证码失败，请点击重试");
            });
    };

    useEffect(()=>{
        changeCode();
    },[]);

    const login = ()=>{
        if (!sPhone || !sPassword) {
            message.warning("请输入手机号和密码");
            return;
        }
        if (security.toLowerCase() != code.toString().toLowerCase()){
            message.error("验证码错误");
            changeCode();
            return;
        }
        RealAxios({
            method:'post',
            url:'/student/login',
            data:{
                'code':security,
                'sPhone':sPhone,
                'sPassword':sPassword,
            }
        }).then((response)=>{
            if (response.data.msg == "errorPassword"){
                message.error("密码错误");
                setSPassword("");
                changeCode();
            }else if (response.data.msg=="noStudent"){
                message.error("没有该用户");
                setAction("sign");
                changeCode();
            }else if (response.data.msg == 'ok'){
                // 保存登录信息
                cookie.save("identify","student",{path:"/"});
                cookie.save("sid", sPhone, {path:"/"});
                cookie.save("id", sPhone, {path:"/"});
                message.success("登录成功");
                Router.push("/student");
            }
        }).catch((error)=>{
            console.log(error);
            message.error("登录失败，请重试");
            changeCode();
        })
    };

    const signUp = ()=>{
        if (security.toLowerCase() != code.toString().toLowerCase()){
            message.error("验证码错误");
            changeCode();
            return;
        }
        RealAxios({
            method:'post',
            url:'/student/register',
            data:{
                'code':security,
                'sPhone':sPhone,
                'sPassword':sPassword,
                'sNum':sNum,
                'sEmail':sEmail,
                'sName':sName,
                'sCollege':sCollege
            }
        }).then((response)=>{
            if (response.data.msg == "ok"){
                message.success("注册成功");
                setAction("login");
                changeCode();
            } else if (response.data.msg == "haveStudent"){
                message.error("用户已存在");
                setAction("login");
                changeCode();
            } else {
                message.error("未知错误");
                changeCode();
            }
        }).catch((error)=>{
            console.log(error);
            message.error("注册失败，请重试");
        })
    };

    return (
        <Row id="login" justify='center' align='middle' style={{paddingTop: 50 + "px"}}>
            <Head>
                <title>云课堂</title>
                <meta charSet='utf-8' />
            </Head>
            <Col span={6}>
                <div className='wrap'>
                    <Row gutter={[16, 0]}>
                        <Col onClick={()=>{Router.push('/login')}} style={{
                            display:'flex',justifyContent:'center', cursor:'pointer'
                        }}><BackSvg/>选择身份</Col>
                    </Row>
                    <Row>
                        <Tabs activeKey={action} size='large' style={{width:'100%'}} onTabClick={(key,event)=>{
                            setAction(key);
                        }}>
                            <TabPane key='login' tab={
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    登录
                                </div>
                            }>
                                <Row style={{margin:"10px"}}>
                                    <Input size="large" type='text' placeholder='手机号' prefix={<UserSvg />} value={sPhone} onChange={(e)=>{setSPhone(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:"10px"}}>
                                    <Password size='large' placeholder='密码' prefix={<PasswordSvg/>} value={sPassword} onChange={(e)=>{setSPassword(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:"10px"}} justify='space-between'>
                                    <Col span={11}>
                                        <Input type='text' size='large' placeholder='验证码' prefix={<SecurityCodeSvg/>} value={security} onChange={(e)=>{setSecurity(e.target.value)}}/>
                                    </Col>
                                    <Col span={11} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        <img src={image} onClick={changeCode} style={{cursor:'pointer', height:40, width:'100%', objectFit:'contain'}} alt="验证码"/>
                                    </Col>
                                </Row>
                                <Row style={{margin:"10px"}}>
                                    <Button size='large' type='primary' style={{width:'100%'}} onClick={login}>登录</Button>
                                </Row>
                            </TabPane>
                            <TabPane tab={
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    注册
                                </div>
                            } key='sign'>
                                <Row style={{margin:"10px"}}>
                                    <Input size="large" type='text' placeholder='手机号' prefix={<UserSvg />} value={sPhone} onChange={(e)=>{setSPhone(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:"10px"}}>
                                    <Password size='large' placeholder='密码' prefix={<PasswordSvg/>} value={sPassword} onChange={(e)=>{setSPassword(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:"10px"}}>
                                    <Input size='large' placeholder='学号' prefix={<StudentNumSvg/>} value={sNum} onChange={(e)=>{setSNum(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:'10px'}}>
                                    <Input size='large' placeholder='电子邮箱' prefix={<EmailSvg/>} value={sEmail} onChange={(e)=>{setSEmail(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:'10px'}}>
                                    <Input size='large' placeholder='姓名' prefix={<NameSvg/>} value={sName} onChange={(e)=>{setSName(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:'10px'}}>
                                    <Input size='large' placeholder='学院' prefix={<CollegeSvg/>} value={sCollege} onChange={(e)=>{setSCollege(e.target.value)}}/>
                                </Row>
                                <Row style={{margin:"10px"}} justify='space-between'>
                                    <Col span={11}>
                                        <Input type='text' size='large' placeholder='验证码' prefix={<SecurityCodeSvg/>} value={security} onChange={(e)=>{setSecurity(e.target.value)}}/>
                                    </Col>
                                    <Col span={11} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                        <img src={image} onClick={changeCode} style={{cursor:'pointer', height:40, width:'100%', objectFit:'contain'}} alt="验证码"/>
                                    </Col>
                                </Row>
                                <Row style={{margin:"10px"}}>
                                    <Button size='large' type='primary' style={{width:'100%'}} onClick={signUp}>注册</Button>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};
export default Login;