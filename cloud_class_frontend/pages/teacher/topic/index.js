import React, {useState, useEffect, useReducer, useContext} from 'react'
import {Col, Row, Button, message, Space} from 'antd'
import cookie from "react-cookies";
import { useRouter } from "next/router";
import Header from "../../../components/teacher/header";
import {PageContext, TopicDisableContext} from "../../../components/teacher/Context";
import "../../../public/style/teacher/topic.css";
import TopicTab from "../../../components/teacher/topic/TopicTab";
import CreateTopicModal from "../../../components/teacher/topic/CreateTopicModal";
import TopicList from "../../../components/teacher/topic/TopicList";
import TopicManageBar from "../../../components/teacher/topic/TopicManageBar";
import {RealAxios} from "../../../components/config";

const reducer = (state, action) => {
    switch (action.type) {
        case "refresh":
            return action.list
        default:
            return state
    }
}

const TeacherTopic = () => {
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
    const [teacherCourses, setTeacherCourses] = useState([]);

    const teacherId = cookie.load("tid") || cookie.load("id");
    const identify = cookie.load("identify");
    const phone = cookie.load("phone");

    // 获取教师课程列表
    const getTeacherCourses = async () => {
        try {
            const res = await RealAxios.post("/course/getCourseByTeacher", {phone: phone || teacherId})
            const courses = res.data || []
            setTeacherCourses(courses)
            return courses
        } catch (err) {
            console.error("获取课程列表失败", err)
            setTeacherCourses([])
            return []
        }
    }

    // 获取课程发言开关状态
    const getCourseTalkStatus = async (cid) => {
        try {
            const res = await RealAxios.post("/course/getTalkStatus", {cid})
            setDisableStudentTalk(res.data?.disableStudentTalk ?? 0)
        } catch (err) {
            console.error("获取讨论开关失败", err)
            setDisableStudentTalk(0)
        }
    }

    // 加载话题列表
    const loadTopicList = async (cid, type) => {
        if (!cid) {
            dispatch({type: "refresh", list: []})
            return
        }
        try {
            const res = await RealAxios.post("/topic/list", {cid, type})
            dispatch({type: "refresh", list: res.data ?? []})
            setSelectedRowKeys([])
        } catch (err) {
            console.error("加载话题列表失败", err)
            dispatch({type: "refresh", list: []})
        }
    }

    // 新建话题成功回调
    const onCreateSuccess = () => {
        setShowCreateModal(false);
        setShowEditModal(false);
        setEditData(null);
        if (currentCid) {
            loadTopicList(currentCid, tabType);
        }
    }

    // 切换禁止学生发言
    const toggleDisableTalk = async (checked) => {
        if (!currentCid) {
            message.warning("请先选择课程");
            return;
        }
        try {
            await RealAxios.post("/topic/setStudentDisable", {cid: currentCid, isDisable: checked ? 1 : 0})
            setDisableStudentTalk(checked)
            message.success(checked ? "已禁止学生发言" : "已允许学生发言")
        } catch (err) {
            console.error("切换发言权限失败", err)
            message.error("操作失败")
        }
    }

    // 编辑话题
    const handleEdit = (record) => {
        setEditData(record);
        setShowEditModal(true);
    }

    // 查看话题详情
    const handleViewDetail = (record) => {
        router.push(`/teacher/topic/detail?tid=${record.tid}`);
    }

    // 选择变化
    const handleSelectChange = (keys) => {
        setSelectedRowKeys(keys);
    }

    // 批量删除
    const handleBatchDelete = async () => {
        if (selectedRowKeys.length === 0) {
            message.warning("请先选择要删除的话题");
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
                setSelectedRowKeys([]);
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

    // 切换课程
    const handleCourseChange = (cid) => {
        setCurrentCid(cid);
        localStorage.setItem("currentCid", cid);
        loadTopicList(cid, tabType);
        getCourseTalkStatus(cid);
    };

    useEffect(() => {
        console.log("教师端调试：identify=", identify, "teacherId=", teacherId)
        if (identify !== "teacher" || !teacherId) {
            console.log("教师端：未登录，跳转登录页")
            router.push("/teacher/login")
            return;
        }

        const initPage = async () => {
            const cidFromUrl = router.query.cid;
            const cidFromStorage = localStorage.getItem("currentCid");

            // 如果有 URL 参数中的 cid
            if (cidFromUrl) {
                setCurrentCid(cidFromUrl);
                localStorage.setItem("currentCid", cidFromUrl);
                loadTopicList(cidFromUrl, tabType);
                getCourseTalkStatus(cidFromUrl);
                setLoading(false);
                return;
            }

            // 获取教师的课程列表
            const courses = await getTeacherCourses();

            // 如果有存储的 cid 且该课程存在
            if (cidFromStorage && courses.some(c => (c.cid || c.Cid) === cidFromStorage)) {
                setCurrentCid(cidFromStorage);
                loadTopicList(cidFromStorage, tabType);
                getCourseTalkStatus(cidFromStorage);
                setLoading(false);
                return;
            }

            // 如果有课程，使用第一个
            if (courses.length > 0) {
                const firstCid = courses[0].cid || courses[0].Cid;
                if (firstCid) {
                    setCurrentCid(firstCid);
                    localStorage.setItem("currentCid", firstCid);
                    loadTopicList(firstCid, tabType);
                    getCourseTalkStatus(firstCid);
                    setLoading(false);
                    return;
                }
            }

            // 没有课程 - 正常显示页面
            setCurrentCid("");
            setLoading(false);
        };

        initPage();
    }, [router.query.cid]);

    useEffect(() => {
        if (currentCid) {
            loadTopicList(currentCid, tabType);
        }
    }, [tabType]);

    if (loading) {
        return <Col span={24} style={{textAlign: 'center', padding: '50px 0'}}>加载中...</Col>
    }

    const hasCourses = teacherCourses.length > 0;
    const myTopicsCount = topicList.filter(t => t.uid === teacherId).length;

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
                                    if (!currentCid) {
                                        message.error("请先选择课程");
                                        return;
                                    }
                                    setShowCreateModal(true);
                                }}
                                disabled={!currentCid}
                            >
                                发起新话题
                            </Button>
                            {!currentCid && (
                                <span style={{color: '#faad14'}}>请先选择课程</span>
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
                            {currentCid && (
                                <span style={{color: '#999', fontSize: 13}}>
                                    课程ID: {currentCid}
                                </span>
                            )}
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

                    {/* 课程选择器 */}
                    {hasCourses && (
                        <div style={{
                            marginBottom: 16,
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '8px',
                            padding: '8px 12px',
                            background: '#fafafa',
                            borderRadius: 8
                        }}>
                            <span style={{fontWeight: 500, marginRight: 8}}>切换课程：</span>
                            {teacherCourses.map(course => (
                                <Button
                                    key={course.cid || course.Cid}
                                    type={currentCid === (course.cid || course.Cid) ? "primary" : "default"}
                                    size="small"
                                    onClick={() => handleCourseChange(course.cid || course.Cid)}
                                >
                                    {course.cname || course.Cname}
                                </Button>
                            ))}
                        </div>
                    )}

                    {/* 没有课程时的提示 */}
                    {!hasCourses && (
                        <div style={{
                            marginBottom: 16,
                            padding: '12px 16px',
                            background: '#f6ffed',
                            border: '1px solid #b7eb8f',
                            borderRadius: 8
                        }}>
                            <span>📚 你还没有创建课程，</span>
                            <Button
                                type="link"
                                onClick={() => router.push('/teacher/course')}
                                style={{padding: 0, height: 'auto'}}
                            >
                                点击去创建课程
                            </Button>
                            <span style={{color: '#999', fontSize: 13, marginLeft: 8}}>
                                （创建课程后即可发布话题）
                            </span>
                        </div>
                    )}

                    {/* 管理栏 */}
                    {hasCourses && currentCid && (
                        <TopicManageBar
                            disableStudentTalk={disableStudentTalk}
                            toggleDisableTalk={toggleDisableTalk}
                            cid={currentCid}
                            selectedRowKeys={selectedRowKeys}
                            onBatchDelete={handleBatchDelete}
                            hasSelected={selectedRowKeys.length > 0}
                            batchLoading={batchLoading}
                        />
                    )}

                    <TopicTab active={tabType} onChange={setTabType}/>

                    <TopicDisableContext.Provider value={disableStudentTalk}>
                        <div className="topic-list-wrap">
                            {!currentCid ? (
                                <div style={{textAlign: 'center', padding: '40px 0', color: '#999'}}>
                                    <div style={{fontSize: 48, marginBottom: 16}}>📖</div>
                                    <h3>{hasCourses ? '请选择一门课程' : '请先创建课程'}</h3>
                                    <p>{hasCourses ? '选择上方课程查看话题' : '创建课程后即可发布话题'}</p>
                                </div>
                            ) : topicList.length === 0 ? (
                                <div style={{textAlign: 'center', padding: '30px 0', color: '#999'}}>
                                    <div style={{fontSize: 36, marginBottom: 12}}>💬</div>
                                    <p>暂无话题，点击 "发起新话题" 创建第一个话题！</p>
                                </div>
                            ) : (
                                <TopicList
                                    topics={topicList}
                                    loading={loading}
                                    onRefresh={() => currentCid && loadTopicList(currentCid, tabType)}
                                    onEdit={handleEdit}
                                    onViewDetail={handleViewDetail}
                                    isTeacher={true}
                                    currentUserId={teacherId}
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
                uid={teacherId}
                role="teacher"
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
                uid={teacherId}
                role="teacher"
                onCreate={onCreateSuccess}
                editData={editData}
            />
        </Col>
    )
}

export default TeacherTopic;