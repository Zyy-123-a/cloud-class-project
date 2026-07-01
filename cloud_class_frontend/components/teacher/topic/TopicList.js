import {Table, Button, Space, Tag, Popconfirm, message, Dropdown, Checkbox, Avatar} from "antd";
import {DeleteOutlined, EditOutlined, MoreOutlined, EyeOutlined, PushpinOutlined, UserOutlined} from "@ant-design/icons";
import {useState, useEffect} from "react";
import {RealAxios} from "../../config";

export default function TeacherTopicList({
                                             topics = [],
                                             loading = false,
                                             onRefresh,
                                             onEdit,
                                             onViewDetail,
                                             isTeacher = true,
                                             currentUserId = '',
                                             selectedRowKeys = [],
                                             onSelectChange,
                                             batchLoading = false,
                                             showCheckbox = true,
                                             showActions = true
                                         }) {
    const [userAvatars, setUserAvatars] = useState({});

    // 加载用户头像（教师端使用 /teacher/getHeaderImg）
    const loadUserAvatar = async (uid) => {
        if (!uid || userAvatars[uid]) return;
        try {
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

    useEffect(() => {
        topics.forEach(topic => {
            if (topic.isAnonym !== 1 && topic.uid) {
                loadUserAvatar(topic.uid);
            }
        });
    }, [topics]);

    const handleDelete = async (tid, title) => {
        try {
            const res = await RealAxios.post("/topic/delete", {tid});
            if (res.data === "success") {
                message.success(`已删除话题: ${title}`);
                if (onRefresh) onRefresh();
            } else {
                message.error("删除失败: " + res.data);
            }
        } catch (err) {
            console.error("删除失败:", err);
            message.error("删除失败");
        }
    };

    const handleTop = async (tid, isTop) => {
        try {
            const res = await RealAxios.post("/topic/setTop", {
                tid,
                isTop: isTop ? 0 : 1
            });
            if (res.data === "success") {
                message.success(isTop ? "已取消置顶" : "已置顶");
                if (onRefresh) onRefresh();
            } else {
                message.error("操作失败");
            }
        } catch (err) {
            console.error("操作失败:", err);
            message.error("操作失败");
        }
    };

    const canEditTopic = (record) => {
        return isTeacher || record.uid === currentUserId;
    };

    const canDeleteTopic = (record) => {
        return isTeacher || record.uid === currentUserId;
    };

    const columns = [
        ...(showCheckbox ? [{
            title: () => (
                <Checkbox
                    checked={selectedRowKeys.length === topics.length && topics.length > 0}
                    indeterminate={selectedRowKeys.length > 0 && selectedRowKeys.length < topics.length}
                    onChange={(e) => {
                        if (onSelectChange) {
                            if (e.target.checked) {
                                onSelectChange(topics.map(t => t.tid));
                            } else {
                                onSelectChange([]);
                            }
                        }
                    }}
                    disabled={batchLoading}
                />
            ),
            dataIndex: 'selected',
            key: 'selected',
            width: 50,
            render: (_, record) => {
                return (
                    <Checkbox
                        checked={selectedRowKeys.includes(record.tid)}
                        onChange={(e) => {
                            if (onSelectChange) {
                                if (e.target.checked) {
                                    onSelectChange([...selectedRowKeys, record.tid]);
                                } else {
                                    onSelectChange(selectedRowKeys.filter(id => id !== record.tid));
                                }
                            }
                        }}
                        disabled={batchLoading}
                    />
                );
            }
        }] : []),
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <div>
                    {record.isTop === 1 && (
                        <Tag color="red" style={{marginRight: 4}}>置顶</Tag>
                    )}
                    {record.isEssence === 1 && (
                        <Tag color="gold" style={{marginRight: 4}}>精华</Tag>
                    )}
                    <span
                        style={{cursor: 'pointer', color: '#1890ff'}}
                        onClick={() => onViewDetail && onViewDetail(record)}
                    >
                        {text}
                    </span>
                </div>
            )
        },
        {
            title: '作者',
            dataIndex: 'authorName',
            key: 'authorName',
            render: (text, record) => (
                <Space>
                    <Avatar
                        src={record.isAnonym === 1 ? null : (userAvatars[record.uid] || null)}
                        icon={record.isAnonym === 1 ? <UserOutlined /> : (!userAvatars[record.uid] ? <UserOutlined /> : undefined)}
                        size="small"
                        style={{ backgroundColor: record.isAnonym === 1 ? '#d9d9d9' : undefined }}
                    />
                    <span>
                        {text || record.uid}
                        {record.isAnonym === 1 && (
                            <Tag color="default" style={{marginLeft: 4}}>匿名</Tag>
                        )}
                    </span>
                </Space>
            )
        },
        {
            title: '分类',
            dataIndex: 'category',
            key: 'category',
            render: (text) => {
                const map = {
                    'question': <Tag color="blue">问题求助</Tag>,
                    'share': <Tag color="green">经验分享</Tag>,
                    'notice': <Tag color="orange">课程通知</Tag>,
                    'general': <Tag color="default">综合讨论</Tag>
                };
                return map[text] || map['general'];
            }
        },
        {
            title: '回复数',
            dataIndex: 'replyCount',
            key: 'replyCount',
            render: (count) => count || 0
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime'
        },
        ...(showActions ? [{
            title: '操作',
            key: 'action',
            width: 220,
            render: (_, record) => {
                const canEdit = canEditTopic(record);
                const canDelete = canDeleteTopic(record);

                const menuItems = [
                    {
                        key: 'view',
                        label: '查看详情',
                        icon: <EyeOutlined />,
                        onClick: () => onViewDetail && onViewDetail(record)
                    },
                    {
                        key: 'top',
                        label: record.isTop === 1 ? '取消置顶' : '置顶',
                        icon: <PushpinOutlined />,
                        onClick: () => handleTop(record.tid, record.isTop === 1)
                    }
                ];

                if (canEdit) {
                    menuItems.push({
                        key: 'edit',
                        label: '编辑',
                        icon: <EditOutlined />,
                        onClick: () => onEdit && onEdit(record)
                    });
                }

                if (canDelete) {
                    menuItems.push({
                        key: 'delete',
                        label: '删除',
                        icon: <DeleteOutlined />,
                        danger: true,
                        onClick: () => handleDelete(record.tid, record.title)
                    });
                }

                return (
                    <Space size="small">
                        {canEdit && (
                            <Button
                                type="link"
                                size="small"
                                icon={<EditOutlined />}
                                onClick={() => onEdit && onEdit(record)}
                            >
                                编辑
                            </Button>
                        )}
                        {canDelete && (
                            <Popconfirm
                                title={`确定要删除 "${record.title}" 吗？`}
                                description="此操作不可恢复！"
                                onConfirm={() => handleDelete(record.tid, record.title)}
                                okText="确认删除"
                                okButtonProps={{danger: true}}
                                cancelText="取消"
                            >
                                <Button
                                    type="link"
                                    danger
                                    size="small"
                                    icon={<DeleteOutlined />}
                                >
                                    删除
                                </Button>
                            </Popconfirm>
                        )}
                        <Dropdown menu={{items: menuItems}} trigger={["click"]}>
                            <Button type="link" size="small" icon={<MoreOutlined />} />
                        </Dropdown>
                    </Space>
                );
            }
        }] : [])
    ];

    return (
        <Table
            columns={columns}
            dataSource={topics}
            rowKey="tid"
            loading={loading}
            pagination={{
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total) => `共 ${total} 条话题`,
                defaultPageSize: 10,
                pageSizeOptions: ['10', '20', '50']
            }}
        />
    );
}