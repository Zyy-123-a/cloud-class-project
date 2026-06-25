import React, {useState, useEffect, useContext} from 'react';
import {AnswerContext} from "./detailContext";
import {Button, Col, Collapse, Divider, Input, message, Row, Typography} from "antd";
import marked from "marked";
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';
import {RealAxios} from "../../config";
import cookie from 'react-cookies';

const Correction = () => {
    const answer = useContext(AnswerContext);
    const [realAnswer, setRealAnswer] = useState({swid:"1",twid:"1",sid:"1",snum:"1",sname:"张强",scontent:"1",
        spublish:"2020/06/05",correct:"1",score:"2",correction:"不错"});
    const [attachments, setAttachments] = useState([]);
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
    useEffect(()=>{
        setRealAnswer(answer);
        // 加载学生附件（使用 answer 参数直接获取数据，避免异步状态更新问题）
        loadAttachments(answer);
    },[answer])

    // 加载学生附件（使用老师端接口）
    const loadAttachments = (data) => {
        if (data && data.swid) {
            console.log("=== 加载学生附件 ===");
            console.log("swid:", data.swid);
            RealAxios({
                method: 'post',
                url: '/hwTeacher/submissionDetail',
                data: { swid: data.swid },
            }).then((response) => {
                console.log("=== 附件响应 ===");
                console.log("响应数据:", response.data);
                if (response.data.result === 1) {
                    setAttachments(response.data.data.studentAttachments || []);
                    console.log("附件列表:", response.data.data.studentAttachments);
                }
            }).catch((error) => {
                console.log('加载附件失败:', error);
            });
        }
    };

    // 下载附件
    const downloadAttachment = (aid, filename) => {
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
    const updateCorrection = ()=>{
        RealAxios({
            method:"post",
            url:'/swork/updateCorrection',
            data:{
                id:realAnswer.swid,
                correction: realAnswer.correction
            }
        }).then(response=>{
            if (response.data.result != 0){
                message.success("修改成功");
            }
        }).catch(error=>{
            message.error("修改失败");
            console.log(error);
        })
    }
    const head = () => {
        return (
            <Row justify="space-around">
                <Col>
                    {realAnswer.snum}
                </Col>
                <Col>
                    {realAnswer.sname}
                </Col>
                <Col>
                    <Typography.Paragraph editable={{
                        onChange: (str) => {
                            const newAnswer = JSON.parse(JSON.stringify(realAnswer));
                            newAnswer.score = str;
                            setRealAnswer(newAnswer);
                        }
                    }}>
                        {realAnswer.score}
                    </Typography.Paragraph>
                </Col>
                <Col>
                    {realAnswer.spublish}
                </Col>
            </Row>
        )
    }
    return (
            <div>
                <Row>
                    回答：
                </Row>
                <Row>
                    <div dangerouslySetInnerHTML={{__html: marked(realAnswer.scontent)}}></div>
                </Row>
                {/* 学生附件 */}
                {attachments.length > 0 && (
                    <div>
                        <Row>附件：</Row>
                        <Row>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {attachments.map((item) => (
                                    <li key={item.aid} style={{ marginBottom: 8 }}>
                                        <button
                                            onClick={() => downloadAttachment(item.aid, item.filename)}
                                            style={{ color: '#1890ff', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                                        >
                                            {item.filename}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </Row>
                    </div>
                )}
                <Row>评语：</Row>
                <Row>
                    <Input.TextArea value={realAnswer.correction}
                                    rows={5}
                                    onChange={(e) => {
                        const newAnswer = JSON.parse(JSON.stringify(realAnswer));
                        newAnswer.correction = e.target.value;
                        setRealAnswer(newAnswer);
                    }}></Input.TextArea>
                </Row>
                <Divider/>
                <Row gutter={[10,0]}>
                    <Col><Button type='primary' onClick={() => {
                        updateCorrection();
                    }}>修改</Button>
                    </Col>
                </Row>
            </div>
    )
}
export default Correction;