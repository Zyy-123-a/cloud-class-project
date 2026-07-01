import {Dropdown, Menu, Button, Row, message, Avatar, Space} from "antd";
import {UserOutlined} from '@ant-design/icons';
import ReplyInput from "./ReplyInput";
import ReplyItem from "./ReplyItem";
import {useState, useEffect, useContext} from "react";
import {RealAxios} from "../../config";
import {TopicDisableContext} from "../../teacher/Context";

export default function TeacherTopicCard({topic, teacherId, refresh}){
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

    // 加载用户头像（教师端使用 /teacher/getHeaderImg）
    const loadUserAvatar = async () => {
        if (topic.isAnonym === 1 || !topic.uid) return;
        try {
            const res = await RealAxios.post('/teacher/getHeaderImg', { phone: topic.uid });
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

    const menuItems = [
        {
            key: 'top',
            label: topic.isTop ? "取消置顶" : "置顶",
            onClick: async () => {
                try {
                    await RealAxios.post("/topic/setTop", {tid: topic.tid, isTop: topic.isTop ? 0 : 1})
                    message.success(topic.isTop ? "已取消置顶" : "已置顶")
                    refresh()
                } catch (err) {
                    message.error("操作失败")
                }
            }
        },
        {
            key: 'delete',
            label: "删除话题",
            danger: true,
            onClick: async () => {
                try {
                    await RealAxios.post("/topic/delete", {tid:topic.tid})
                    message.success("删除成功")
                    refresh()
                } catch (err) {
                    message.error("删除失败")
                }
            }
        }
    ];

    return (
        <div className="topic-card" style={{border: '1px solid #e8e8e8', borderRadius: 8, padding: 16, marginBottom: 16}}>
            <Row justify="space-between" align="middle">
                <div style={{flex: 1}}>
                    <h3 style={{marginBottom: 8}}>
                        {topic.isTop ? <span style={{color: '#f5222d', marginRight: 8}}>[置顶]</span> : null}
                        {topic.title}
                    </h3>
                    <Space style={{marginBottom: 8}}>
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
                <Dropdown menu={{items: menuItems}} trigger={["click"]}>
                    <Button>管理</Button>
                </Dropdown>
            </Row>
            <div className="reply-wrap" style={{marginTop: 12}}>
                {replyList.length === 0 ? (
                    <div style={{color: '#999', fontSize: 13, padding: '8px 0'}}>暂无回复</div>
                ) : (
                    replyList.map(r => (
                        <ReplyItem
                            key={r.rid}
                            reply={r}
                            isTeacher={true}
                            selfUid={teacherId}
                            refresh={loadReply}
                        />
                    ))
                )}
            </div>
            <ReplyInput
                tid={topic.tid}
                uid={teacherId}
                role="teacher"
                refresh={loadReply}
                disabled={disableTalk === 1}
            />
        </div>
    )
}