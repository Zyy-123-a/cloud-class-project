import {Row, Button, message, Avatar, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import {useState, useEffect} from "react";
import {RealAxios} from "../../config";

export default function ReplyItem({reply, isTeacher, selfUid, refresh}){
    const canDelete = isTeacher || reply.uid === selfUid
    const [userAvatar, setUserAvatar] = useState(null)

    // 加载回复用户头像（非匿名时）
    const loadUserAvatar = async () => {
        if (reply.isAnonym === 1 || !reply.uid) return;
        try {
            const res = await RealAxios.post('/student/getHeaderImg', { phone: reply.uid });
            if (res.data && res.data.image) {
                setUserAvatar('data:image/png;base64,' + res.data.image);
            }
        } catch (err) {
            console.error('加载头像失败:', err);
        }
    };

    useEffect(() => {
        loadUserAvatar();
    }, [reply.uid]);

    const handleDel = async ()=>{
        try {
            const res = await RealAxios.post("/reply/delete", {rid:reply.rid})
            if (res.data === "success") {
                message.success("删除成功")
                refresh()
            } else {
                message.error("删除失败: " + res.data)
            }
        } catch (err) {
            console.error("删除回复失败:", err)
            message.error("删除失败")
        }
    }

    return (
        <Row justify="space-between" align="middle" className="reply-item" style={{padding:"10px 0", borderBottom:"1px solid #f5f5f5"}}>
            <Space>
                {/* 显示头像：非匿名时显示真实头像，匿名时显示默认头像 */}
                <Avatar
                    src={reply.isAnonym === 1 ? null : userAvatar}
                    icon={reply.isAnonym === 1 ? <UserOutlined /> : (!userAvatar ? <UserOutlined /> : undefined)}
                    size="small"
                    style={{ backgroundColor: reply.isAnonym === 1 ? '#d9d9d9' : undefined }}
                />
                <div>
                    <span>{reply.userName}{reply.isAnonym ? "(匿名)" : ""}：</span>
                    <span>{reply.content}</span>
                    <span style={{color:"#999", fontSize:12, marginLeft:10}}>{reply.createTime}</span>
                </div>
            </Space>
            {canDelete && <Button danger size="small" onClick={handleDel}>删除</Button>}
        </Row>
    )
}