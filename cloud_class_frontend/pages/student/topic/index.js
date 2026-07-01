import React, {useState, useEffect, useReducer, useContext} from 'react'
import {Col, Row, Button, message, Space} from 'antd'
import cookie from "react-cookies";
import { useRouter } from "next/router";
import Header from "../../../components/student/header";
import {PageContext, TopicDisableContext} from "../../../components/student/Context";
import "../../../public/style/student/topic.css";
import TopicTab from "../../../components/student/topic/TopicTab";
import CreateTopicModal from "../../../components/student/topic/CreateTopicModal";
import TopicList from "../../../components/student/topic/TopicList";
import {RealAxios} from "../../../components/config";

const reducer = (state, action) => {
    switch (action.type) {
        case "refresh":
            return action.list
        default:
            return state
    }
}

const StudentTopic = () => {
    const router = useRouter();
    const [topicList, dispatch] = useReducer(reducer, []);
    const [currentCid, setCurrentCid] = useState("");
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editData, setEditData] = useState(null);
    const [tabType, setTabType] = useState("all");
    const [disableStudentTalk, setDisableStudentTalk] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [batchLoading, setBatchLoading] = useState(false);

    const studentId = cookie.load("sid") || cookie.load("id");
    const identify = cookie.load("identify");

    const getCourseTalkStatus = async (cid) => {
        try {
            const res = await RealAxios.post("/course/getTalkStatus", {cid})
            setDisableStudentTalk(res.data?.disableStudentTalk ?? 0)
        } catch (err) {
            console.error("获取发言状态接口异常", err)
            setDisableStudentTalk(0)
        }
    }

    const loadTopicList = async (cid, type) => {
        try {
            const res = await RealAxios.post("/topic/list", {cid, type})
            const data = res.data ?? []
            dispatch({type: "refresh", list: data})
            setSelectedRowKeys([])
        } catch (err) {
            console.error("加载话题列表失败", err)
            dispatch({type: "refresh", list: []})
        }
    }

    const onCreateSuccess = () => {
        setShowCreateModal(false);
        setShowEditModal(false);
        setEditData(null);
        loadTopicList(currentCid, tabType);
    }

    const handleEdit = (record) => {
        if (record.uid !== studentId) {
            message.warning("只能编辑自己的话题");
            return;
        }
        setEditData(record);
        setShowEditModal(true);
    }

    const handleViewDetail = (record) => {
        // 跳转到话题详情页
        router.push(`/student/topic/detail?tid=${record.tid}`);
    }

    const handleSelectChange = (keys) => {
        setSelectedRowKeys(keys);
    }

    const handleBatchDelete = async () => {
        if (selectedRowKeys.length === 0) {
            message.warning("请先选择要删除的话题");
            return;
        }

        const selectedTopics = topicList.filter(t => selectedRowKeys.includes(t.tid));
        const hasOthers = selectedTopics.some(t => t.uid !== studentId);
        if (hasOthers) {
            message.error("只能删除自己创建的话题");
            return;
        }

        setBatchLoading(true);
        try {
            const res = await RealAxios.post("/topic/batchDelete", {
                tids: selectedRowKeys,
                cid: currentCid
            });
            if (res.data === "success") {
                message.success(`成功删除 ${selectedRowKeys.length} 个话题`);
                loadTopicList(currentCid, tabType);
            } else {
                message.error("批量删除失败: " + res.data);
            }
        } catch (err) {
            console.error("批量删除失败:", err);
            message.error("批量删除失败");
        } finally {
            setBatchLoading(false);
        }
    };

    useEffect(() => {
        console.log("学生页调试：identify=", identify, "studentId=", studentId)
        if (identify !== "student" || !studentId) {
            console.log("学生端：未登录，跳转登录页")
            router.push("/student/login")
            return;
        }

        let cid = router.query.cid;
        if (!cid) {
            cid = localStorage.getItem("currentCid");
        }
        if (!cid) {
            cid = cookie.load("currentCid");
        }

        if (cid) {
            setCurrentCid(cid);
            localStorage.setItem("currentCid", cid);
            loadTopicList(cid, tabType);
            getCourseTalkStatus(cid);
            setLoading(false);
        } else {
            message.warning("请从课程列表进入讨论区");
            setLoading(false);
        }
    }, [router.query.cid]);

    useEffect(() => {
        if (currentCid) {
            loadTopicList(currentCid, tabType);
        }
    }, [tabType]);

    if (loading) {
        return <Col span={24} style={{textAlign: 'center', padding: '50px 0'}}>加载中...</Col>
    }

    const myTopicsCount = topicList.filter(t => t.uid === studentId).length;

    return (
        <Col span={24}>
            <PageContext.Provider value={"topic"}>
                <Header/>
            </PageContext.Provider>
            <Row gutter={[0,24]} style={{padding: "20px 0"}}>
                <Col span={20} offset={2}>
                    {/* 顶部操作栏 */}
                    <div className="topic-top-bar" style={{
                        marginBottom: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px'
                    }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                            <Button
                                type="primary"
                                onClick={() => {
                                    console.log("发起新话题按钮被点击");
                                    console.log("currentCid:", currentCid);
                                    console.log("disableStudentTalk:", disableStudentTalk);
                                    if (!currentCid) {
                                        message.error("请先选择课程");
                                        return;
                                    }
                                    if (disableStudentTalk === 1) {
                                        message.error("教师已关闭讨论功能");
                                        return;
                                    }
                                    setShowCreateModal(true);
                                }}
                                disabled={disableStudentTalk === 1}
                            >
                                发起新话题
                            </Button>
                            {disableStudentTalk === 1 && (
                                <span style={{color:"#f5222d"}}>教师已关闭学生讨论功能</span>
                            )}
                            {selectedRowKeys.length > 0 && (
                                <Button
                                    danger
                                    onClick={handleBatchDelete}
                                    loading={batchLoading}
                                >
                                    批量删除 ({selectedRowKeys.length})
                                </Button>
                            )}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                            {myTopicsCount > 0 && (
                                <span style={{color: '#999', fontSize: 13}}>
                                    我的话题: {myTopicsCount} 个
                                </span>
                            )}
                            {selectedRowKeys.length > 0 && (
                                <span style={{color: '#1890ff', fontSize: 13}}>
                                    已选择 {selectedRowKeys.length} 个话题
                                </span>
                            )}
                        </div>
                    </div>

                    <TopicTab active={tabType} onChange={setTabType}/>

                    <TopicDisableContext.Provider value={disableStudentTalk}>
                        <div className="topic-list-wrap">
                            {topicList.length === 0 ? (
                                <div style={{textAlign: 'center', padding: '30px 0', color: '#999'}}>
                                    {disableStudentTalk === 1
                                        ? "教师已关闭讨论功能，暂无话题"
                                        : "暂无话题，快来发起第一个话题吧！"}
                                </div>
                            ) : (
                                <TopicList
                                    topics={topicList}
                                    loading={loading}
                                    onRefresh={() => loadTopicList(currentCid, tabType)}
                                    onEdit={handleEdit}
                                    onViewDetail={handleViewDetail}
                                    isTeacher={false}
                                    currentUserId={studentId}
                                    selectedRowKeys={selectedRowKeys}
                                    onSelectChange={handleSelectChange}
                                    batchLoading={batchLoading}
                                    showCheckbox={true}
                                    showActions={true}
                                />
                            )}
                        </div>
                    </TopicDisableContext.Provider>
                </Col>
            </Row>

            {/* 创建话题弹窗 */}
            <CreateTopicModal
                visible={showCreateModal}
                onClose={() => {
                    console.log("关闭创建弹窗");
                    setShowCreateModal(false);
                }}
                cid={currentCid}
                uid={studentId}
                role="student"
                onCreate={onCreateSuccess}
            />

            {/* 编辑话题弹窗 */}
            <CreateTopicModal
                visible={showEditModal}
                onClose={() => {
                    console.log("关闭编辑弹窗");
                    setShowEditModal(false);
                    setEditData(null);
                }}
                cid={currentCid}
                uid={studentId}
                role="student"
                onCreate={onCreateSuccess}
                editData={editData}
            />
        </Col>
    )
}

export default StudentTopic;