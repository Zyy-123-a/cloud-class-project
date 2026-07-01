import {Input, Button, Checkbox, Row, message} from "antd";
import {useState} from "react";
import {RealAxios} from "../../config";

export default function ReplyInput({tid, uid, refresh, disabled=false, role="student"}){
    const [content, setContent] = useState("")
    const [isAnonym, setIsAnonym] = useState(false)
    const [loading, setLoading] = useState(false)

    const submit = async ()=>{
        if(!content.trim()) {
            message.warning("请输入回复内容");
            return;
        }
        setLoading(true);
        try {
            const res = await RealAxios.post("/reply/create", {
                tid: Number(tid),
                uid: uid,
                role: role,
                content: content.trim(),
                isAnonym: isAnonym ? 1 : 0,
                userName: ""
            });
            console.log("回复响应:", res.data);

            if (res.data === "success") {
                setContent("");
                message.success("回复成功");
                refresh();
            } else {
                message.error("回复失败: " + res.data);
            }
        } catch (err) {
            console.error("发布回复失败", err);
            message.error("发布回复失败: " + (err.response?.data || err.message));
        } finally {
            setLoading(false);
        }
    }

    return (
        <Row gutter={12} align="middle" style={{marginTop: 16}}>
            <Checkbox checked={isAnonym} onChange={(e)=>setIsAnonym(e.target.checked)} disabled={disabled}>
                匿名回复
            </Checkbox>
            <Input.TextArea
                value={content}
                onChange={e=>setContent(e.target.value)}
                disabled={disabled}
                placeholder={disabled ? "教师已关闭讨论功能" : "请输入回复内容"}
                rows={2}
                style={{flex: 1, marginLeft: 12}}
            />
            <Button
                type="primary"
                onClick={submit}
                loading={loading}
                disabled={disabled || !content.trim()}
            >
                提交回复
            </Button>
        </Row>
    )
}