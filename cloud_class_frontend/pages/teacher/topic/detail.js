import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import {Row, Col, Card, Button, message, Avatar, Tag, Space, Divider, Input, Dropdown} from 'antd';
import {ArrowLeftOutlined, UserOutlined, MessageOutlined, MoreOutlined, DeleteOutlined, PushpinOutlined} from '@ant-design/icons';
import cookie from 'react-cookies';
import Header from '../../../components/teacher/header';
import {PageContext} from '../../../components/teacher/Context';
import {RealAxios} from '../../../components/config';

const { TextArea } = Input;

export default function TeacherTopicDetail() {
    const router = useRouter();
    const { tid } = router.query;
    const [topic, setTopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState('');
    const [replyLoading, setReplyLoading] = useState(false);
    const [isAnonym, setIsAnonym] = useState(false);
    const [userAvatars, setUserAvatars] = useState({});

    const teacherId = cookie.load("tid") || cookie.load("id");

    useEffect(() => {
        if (tid) {
            loadTopicDetail();
            loadReplies();
        }
    }, [tid]);

    // 加载话题详情
    const loadTopicDetail = async () => {
        try {
            const res = await RealAxios.post('/topic/detail', { tid: Number(tid) });
            setTopic(res.data);
            if (res.data && res.data.isAnonym !== 1) {
                loadUserAvatar(res.data.uid);
            }
        } catch (err) {
            console.error('加载话题详情失败:', err);
            message.error('加载话题详情失败');
        } finally {
            setLoading(false);
        }
    };

    // 加载用户头像（教师端使用教师头像接口）
    const loadUserAvatar = async (uid) => {
        if (!uid || userAvatars[uid]) return;
        try {
            // 教师端使用 /teacher/getHeaderImg
            const res = await RealAxios.post('/teacher/getHeaderImg', { phone: uid });
            if (res.data && res.data.image) {
                setUserAvatars(prev => ({
                    ...prev,
                    [uid]: 'data:image/png;base64,' + res.data.image
                }));
            }
        } catch (err) {
            console.error('加载头像失败:', err);
        }
    };

    // 加载回复列表
    const loadReplies = async () => {
        try {
            const res = await RealAxios.post('/reply/list', { tid: Number(tid) });
            const replyData = res.data || [];
            setReplies(replyData);

            replyData.forEach(reply => {
                if (reply.isAnonym !== 1 && reply.uid) {
                    loadUserAvatar(reply.uid);
                }
            });
        } catch (err) {
            console.error('加载回复失败:', err);
            setReplies([]);
        }
    };

    // 提交回复
    const handleSubmitReply = async () => {
        if (!replyContent.trim()) {
            message.warning('请输入回复内容');
            return;
        }

        setReplyLoading(true);
        try {
            const res = await RealAxios.post('/reply/create', {
                tid: Number(tid),
                uid: teacherId,
                role: 'teacher',
                content: replyContent.trim(),
                isAnonym: isAnonym ? 1 : 0,
                userName: ''
            });

            if (res.data === 'success') {
                message.success('回复成功');
                setReplyContent('');
                setIsAnonym(false);
                loadReplies();
            } else {
                message.error('回复失败: ' + res.data);
            }
        } catch (err) {
            console.error('提交回复失败:', err);
            message.error('提交回复失败');
        } finally {
            setReplyLoading(false);
        }
    };

    // 删除回复
    const handleDeleteReply = async (rid) => {
        try {
            const res = await RealAxios.post('/reply/delete', { rid });
            if (res.data === 'success') {
                message.success('删除成功');
                loadReplies();
            } else {
                message.error('删除失败');
            }
        } catch (err) {
            console.error('删除回复失败:', err);
            message.error('删除失败');
        }
    };

    // 删除话题
    const handleDeleteTopic = async () => {
        try {
            const res = await RealAxios.post('/topic/delete', { tid: Number(tid) });
            if (res.data === 'success') {
                message.success('删除成功');
                router.push('/teacher/topic');
            } else {
                message.error('删除失败');
            }
        } catch (err) {
            console.error('删除话题失败:', err);
            message.error('删除失败');
        }
    };

    // 置顶/取消置顶
    const handleTopTopic = async () => {
        try {
            const res = await RealAxios.post('/topic/setTop', {
                tid: Number(tid),
                isTop: topic.isTop === 1 ? 0 : 1
            });
            if (res.data === 'success') {
                message.success(topic.isTop === 1 ? '已取消置顶' : '已置顶');
                loadTopicDetail();
            } else {
                message.error('操作失败');
            }
        } catch (err) {
            console.error('操作失败:', err);
            message.error('操作失败');
        }
    };

    if (loading) {
        return (
            <Col span={24}>
                <PageContext.Provider value={"topic"}>
                    <Header />
                </PageContext.Provider>
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    加载中...
                </div>
            </Col>
        );
    }

    if (!topic) {
        return (
            <Col span={24}>
                <PageContext.Provider value={"topic"}>
                    <Header />
                </PageContext.Provider>
                <div style={{ textAlign: 'center', padding: '50px 0' }}>
                    <h2>话题不存在或已被删除</h2>
                    <Button onClick={() => router.push('/teacher/topic')}>返回讨论区</Button>
                </div>
            </Col>
        );
    }

    const menuItems = [
        {
            key: 'top',
            label: topic.isTop === 1 ? '取消置顶' : '置顶',
            icon: <PushpinOutlined />,
            onClick: handleTopTopic
        },
        {
            key: 'delete',
            label: '删除话题',
            icon: <DeleteOutlined />,
            danger: true,
            onClick: () => {
                if (confirm('确定要删除这个话题吗？此操作不可恢复！')) {
                    handleDeleteTopic();
                }
            }
        }
    ];

    return (
        <Col span={24}>
            <PageContext.Provider value={"topic"}>
                <Header />
            </PageContext.Provider>
            <Row style={{ padding: '20px 0' }}>
                <Col span={16} offset={4}>
                    <Button
                        icon={<ArrowLeftOutlined />}
                        onClick={() => router.push('/teacher/topic')}
                        style={{ marginBottom: 16 }}
                    >
                        返回讨论区
                    </Button>

                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ marginBottom: 8 }}>
                                    {topic.isTop === 1 && (
                                        <Tag color="red" style={{ marginRight: 8 }}>置顶</Tag>
                                    )}
                                    {topic.isEssence === 1 && (
                                        <Tag color="gold" style={{ marginRight: 8 }}>精华</Tag>
                                    )}
                                    {topic.title}
                                </h2>
                                <Space style={{ marginBottom: 16 }}>
                                    <Avatar
                                        src={topic.isAnonym === 1 ? null : (userAvatars[topic.uid] || null)}
                                        icon={topic.isAnonym === 1 ? <UserOutlined /> : (!userAvatars[topic.uid] ? <UserOutlined /> : undefined)}
                                        style={{ backgroundColor: topic.isAnonym === 1 ? '#d9d9d9' : undefined }}
                                    />
                                    <span style={{ fontWeight: 500 }}>
                                        {topic.authorName || topic.uid}
                                    </span>
                                    {topic.isAnonym === 1 && <Tag color="default">匿名</Tag>}
                                    <span style={{ color: '#999' }}>{topic.createTime}</span>
                                </Space>
                            </div>
                            <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                                <Button icon={<MoreOutlined />}>管理</Button>
                            </Dropdown>
                        </div>
                        <Divider style={{ margin: '12px 0' }} />
                        <div style={{
                            padding: '8px 0',
                            whiteSpace: 'pre-wrap',
                            fontSize: 15,
                            lineHeight: 1.8
                        }}>
                            {topic.content}
                        </div>
                    </Card>

                    <div style={{ marginTop: 24 }}>
                        <h3 style={{ marginBottom: 16 }}>
                            <MessageOutlined /> 全部回复 ({replies.length})
                        </h3>

                        <Card size="small" style={{ marginBottom: 16 }}>
                            <TextArea
                                rows={3}
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                placeholder="请输入回复内容..."
                                maxLength={500}
                            />
                            <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label style={{ cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        checked={isAnonym}
                                        onChange={(e) => setIsAnonym(e.target.checked)}
                                        style={{ marginRight: 4 }}
                                    />
                                    匿名回复
                                </label>
                                <Button
                                    type="primary"
                                    onClick={handleSubmitReply}
                                    loading={replyLoading}
                                    disabled={!replyContent.trim()}
                                >
                                    提交回复
                                </Button>
                            </div>
                        </Card>

                        {replies.length === 0 ? (
                            <div style={{ textAlign: 'center', padding: '30px 0', color: '#999' }}>
                                暂无回复
                            </div>
                        ) : (
                            replies.map((reply, index) => (
                                <Card
                                    key={reply.rid || index}
                                    size="small"
                                    style={{ marginBottom: 8 }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Space>
                                            <Avatar
                                                src={reply.isAnonym === 1 ? null : (userAvatars[reply.uid] || null)}
                                                icon={reply.isAnonym === 1 ? <UserOutlined /> : (!userAvatars[reply.uid] ? <UserOutlined /> : undefined)}
                                                size="small"
                                                style={{ backgroundColor: reply.isAnonym === 1 ? '#d9d9d9' : undefined }}
                                            />
                                            <span><strong>{reply.userName || reply.uid}</strong></span>
                                            {reply.isAnonym === 1 && <Tag color="default">匿名</Tag>}
                                            <span style={{ color: '#999', fontSize: 12 }}>{reply.createTime}</span>
                                        </Space>
                                        <Button
                                            type="link"
                                            size="small"
                                            danger
                                            onClick={() => {
                                                if (confirm('确定要删除这条回复吗？')) {
                                                    handleDeleteReply(reply.rid);
                                                }
                                            }}
                                        >
                                            删除
                                        </Button>
                                    </div>
                                    <div style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>
                                        {reply.content}
                                    </div>
                                </Card>
                            ))
                        )}
                    </div>
                </Col>
            </Row>
        </Col>
    );
}