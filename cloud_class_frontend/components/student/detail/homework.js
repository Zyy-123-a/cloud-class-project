import React, {useState, useContext, useEffect} from 'react'
import cookie from 'react-cookies'
import {Button, Col, DatePicker, Divider, Input, message, Popover, Row, InputNumber, Upload} from "antd";
import {UploadOutlined} from '@ant-design/icons';
import moment from 'moment';
import marked from 'marked';
import hljs  from 'highlight.js';
import 'highlight.js/styles/github.css';
import "../../../public/style/teacher/detail.css"
import "./detailContext"
import {WorkContext} from "./detailContext";
import {RealAxios, URL} from "../../config";


const HomeWork = () => {
    const info = useContext(WorkContext);
    const [realInfo, setRealInfo] = useState({
        swid: "1",
        twid: "1",
        tid: "1",
        cid: "1",
        wtitle: "1",
        tcontent: "### 你好",
        tpublish: "1",
        deadline: "1",
        scale: "1",
        scontent: "1",
        correct: "1",
        score: "2",
        correction: "不错"
    })
    const [edit, setEdit] = useState(0);
    const [attachments, setAttachments] = useState([]);

    const dateFormat = 'YYYY-MM-DD';
    useEffect(() => {
        setRealInfo(JSON.parse(JSON.stringify(info)));
        // console.log(realInfo);
    }, [info]);
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        },
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });
    // 重新加载作业详情
    const loadDetail = () => {
        RealAxios({
            method: 'post',
            url: '/hwStudent/detail',
            data: { twid: realInfo.twid, sphone: cookie.load('id') },
        }).then((response) => {
            if (response.data.result === 1) {
                const data = response.data.data;
                setRealInfo(prev => ({
                    ...prev,
                    scontent: data.scontent || '',
                    swid: data.swid || prev.swid
                }));
                setAttachments(data.studentAttachments || []);
            }
        }).catch(() => message.error('加载失败'));
    };

    // 自定义文件上传逻辑
    const customRequest = ({ file, onSuccess, onError }) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('twid', realInfo.twid);
        formData.append('sphone', cookie.load('id'));
        
        RealAxios({
            method: 'post',
            url: '/hwStudent/uploadFile',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then((response) => {
            if (response.data.result === 1) {
                message.success('文件上传成功');
                // 重新加载附件列表
                loadDetail();
                onSuccess();
            } else {
                message.error(response.data.msg || '上传失败');
                onError();
            }
        }).catch((error) => {
            console.error('文件上传错误:', error);
            message.error('上传失败：网络错误');
            onError();
        });
    };

    // 删除附件
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
        }).catch(() => message.error('删除失败'));
    };

    const update = () => {
        // 前端检查截止日期
        if (realInfo.deadline) {
            // 解析截止日期（支持 YYYY-MM-DD 格式）
            const deadlineStr = realInfo.deadline;
            const deadline = moment(deadlineStr, 'YYYY-MM-DD').endOf('day').toDate();
            const now = new Date();
            
            console.log("=== 截止日期检查 ===");
            console.log("截止日期:", deadlineStr);
            console.log("解析后的截止时间:", deadline);
            console.log("当前时间:", now);
            console.log("是否已过期:", now > deadline);
            
            if (now > deadline) {
                message.error('已过截止日期，无法提交');
                return;
            }
        }
        
        // 判断是否为新提交（swid为空、为默认值"1"或"000000"都视为新提交）
        const isNewSubmission = !realInfo.swid || realInfo.swid == "000000" || realInfo.swid == "1";
        
        // 新提交和更新都使用新接口 /hwStudent/submit
        const url = "/hwStudent/submit";
        const data = {
            twid: realInfo.twid,
            sphone: cookie.load("id"),
            scontent: realInfo.scontent,
            swid: isNewSubmission ? "000000" : realInfo.swid
        };
        
        console.log("=== 提交作业请求 ===");
        console.log("URL:", url);
        console.log("Data:", data);
        console.log("Cookie ID:", cookie.load("id"));
        console.log("twid:", realInfo.twid);
        
        RealAxios({
            method: "post",
            url: url,
            data: data
        }).then(response => {
            console.log("=== 提交作业响应 ===");
            console.log("响应数据:", response.data);
            if (response.data.result === 1) {
                message.success("提交成功");
                setEdit(0);
                // 重新加载详情，不刷新整个页面
                loadDetail();
            } else {
                // 使用 msg 字段作为错误信息（与后端接口一致）
                message.error(response.data.msg || response.data.message || "服务器处理失败");
            }
        }).catch(error => {
            console.error("提交作业错误:", error);
            message.error("提交失败：网络错误");
        })
    }
    return (
        <Row className='wrap' gutter={[10, 10]}>
            <Col span={edit == 1 ? 24 : 0}>
                <Row gutter={[10,10]}><h2>题目：</h2></Row>
                <Row gutter={[10,10]}>
                    <div dangerouslySetInnerHTML={{__html: marked(realInfo.tcontent)}}></div>
                </Row>
                <Row gutter={[10,10]}><h2>答案：</h2></Row>
                <Row gutter={[10,10]}>
                    <div dangerouslySetInnerHTML={{__html: marked(realInfo.scontent==""?"请填写答案":realInfo.scontent)}}></div>
                </Row>
                <Row gutter={[10,10]}><h2>批语：</h2></Row>
                <Row gutter={[10,10]}>
                    <div dangerouslySetInnerHTML={{__html: marked(realInfo.correction == ""?"暂无批语":realInfo.correction)}}></div>
                </Row>
                <Row gutter={[10,10]}><h2>答案：</h2></Row>
                <Row gutter={[10,10]}><Input.TextArea value={realInfo.scontent}
                                     rows={5}
                                     onChange={(e) => {
                                         const newInfo = JSON.parse(JSON.stringify(realInfo));
                                         newInfo.scontent = e.target.value;
                                         setRealInfo(newInfo);
                                     }}/></Row>
                <Row gutter={[10,10]}>
                    <Col>
                        <h2>附件：</h2>
                    </Col>
                </Row>
                <Row gutter={[10,10]}>
                    <Col>
                        <Upload
                            name="file"
                            customRequest={customRequest}
                            showUploadList={{ showPreviewIcon: false }}
                        >
                            <Button type="default" icon={<UploadOutlined />}>
                                上传附件
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                {/* 已上传文件列表 */}
                {attachments.length > 0 && (
                    <Row gutter={[10,10]}>
                        <Col>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {attachments.map((item) => (
                                    <li key={item.aid} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                                        <span style={{ flex: 1 }}>{item.filename}</span>
                                        <button
                                            onClick={() => handleDeleteFile(item.aid)}
                                            style={{ color: '#ff4d4f', background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                            删除
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                )}
                <Row gutter={[10,10]}>
                    <Col><Button type="primary" onClick={() => {
                        update();
                    }}>提交</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            setRealInfo(JSON.parse(JSON.stringify(info)));
                            setEdit(0);
                        }}>取消</Button>
                    </Col>
                </Row>
            </Col>
            <Col span={edit == 0 ? 24 : 0}>
                <Row gutter={[10, 10]} justify="space-between">
                    <Col>
                        发布日期：{realInfo.tpublish}
                    </Col>
                </Row>
                <Row gutter={[10, 10]}>
                    <Col span={18}>
                        <Row gutter={[10, 0]}>
                            <Col>
                                <h2>
                                    {realInfo.wtitle}
                                </h2>
                            </Col>
                        </Row>
                        <Row gutter={[10, 0]}>
                            <Col>
                                <div dangerouslySetInnerHTML={{__html: marked(realInfo.tcontent)}}>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={[10, 0]}>
                            <Col>截止时间：{realInfo.deadline}
                            </Col>
                            <Col>成绩占比：{realInfo.scale}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Row gutter={[10, 0]} justify="center">
                            <Col><h2>{realInfo.score==undefined?0:realInfo.score}</h2></Col>
                        </Row>
                        <Row gutter={[10, 0]} justify="center">
                            <Col>评分</Col>
                        </Row>
                        <Row gutter={[10, 0]} justify="center">
                            <Col>
                                <Button type="primary" onClick={() => {
                                    setEdit(1)
                                }}>{realInfo.swid == undefined?"待提交":<div>{realInfo.correct == 0?"未批改":"已批改"}</div>}</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};

export default HomeWork