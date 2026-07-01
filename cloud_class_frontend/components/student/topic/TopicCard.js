import {Dropdown, Menu, Button, Row, message, Avatar, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import ReplyInput from "./ReplyInput";
import ReplyItem from "./ReplyItem";
import {useState, useEffect, useContext} from "react";
import {RealAxios} from "../../config";
import {TopicDisableContext} from "../../student/Context";

export default function TopicCard({topic, studentId, refresh}){
    const disableTalk = useContext(TopicDisableContext)
    const [replyList, setReplyList] = useState([])
    const [userAvatar, setUserAvatar] = useState(null)

    const loadReply = async ()=>{
        try {
            const res = await RealAxios.post("/reply/list", {tid:topic.tid})
            setReplyList(res.data || [])
        } catch (err) {
            console.error("加载回复失败", err)
            setReplyList([])
        }
    }

    // 加载用户头像（非匿名时）
    const loadUserAvatar = async () => {
        if (topic.isAnonym === 1 || !topic.uid) return;
        try {
            const res = await RealAxios.post('/student/getHeaderImg', { phone: topic.uid });
            if (res.data && res.data.image) {
                setUserAvatar('data:image/png;base64,' + res.data.image);
            }
        } catch (err) {
            console.error('加载头像失败:', err);
        }
    };

    useEffect(()=>{
        loadReply()
        loadUserAvatar()
    }, [topic.tid])

    const selfTopic = topic.uid === studentId;
    const handleDelete = async () => {
        try {
            const res = await RealAxios.post("/topic/delete", {tid:topic.tid})
            if (res.data === "success") {
                message.success("删除成功")
                refresh()
            } else {
                message.error("删除失败: " + res.data)
            }
        } catch (err) {
            console.error("删除话题失败", err)
            message.error("删除失败")
        }
    }

    const menuItems = selfTopic ? [
        {
            key: 'delete',
            label: "删除话题",
            danger: true,
            onClick: handleDelete
        }
    ] : null;

    return (
        <div className="topic-card" style={{border: '1px solid #e8e8e8', borderRadius: 8, padding: 16, marginBottom: 16}}>
            <Row justify="space-between" align="middle">
                <div style={{flex: 1}}>
                    <h3 style={{marginBottom: 8}}>{topic.title}</h3>
                    <Space style={{marginBottom: 8}}>
                        {/* 显示头像：非匿名时显示真实头像，匿名时显示默认头像 */}
                        <Avatar
                            src={topic.isAnonym === 1 ? null : userAvatar}
                            icon={topic.isAnonym === 1 ? <UserOutlined /> : (!userAvatar ? <UserOutlined /> : undefined)}
                            size="small"
                            style={{ backgroundColor: topic.isAnonym === 1 ? '#d9d9d9' : undefined }}
                        />
                        <span style={{color: '#999', fontSize: 13}}>
                            楼主：{topic.authorName} {topic.isAnonym ? "(匿名)" : ""} · {topic.createTime}
                        </span>
                    </Space>
                    <div className="topic-content" style={{marginBottom: 12}}>{topic.content}</div>
                </div>
                {menuItems && (
                    <Dropdown menu={{items: menuItems}} trigger={["click"]}>
                        <Button>操作</Button>
                    </Dropdown>
                )}
            </Row>
            <div className="reply-wrap" style={{marginTop: 12}}>
                {replyList.length === 0 ? (
                    <div style={{color: '#999', fontSize: 13, padding: '8px 0'}}>暂无回复，快来抢沙发！</div>
                ) : (
                    replyList.map(r => (
                        <ReplyItem
                            key={r.rid}
                            reply={r}
                            isTeacher={false}
                            selfUid={studentId}
                            refresh={loadReply}
                        />
                    ))
                )}
            </div>
            <ReplyInput
                tid={topic.tid}
                uid={studentId}
                role="student"
                refresh={loadReply}
                disabled={disableTalk === 1}
            />
        </div>
    )
}