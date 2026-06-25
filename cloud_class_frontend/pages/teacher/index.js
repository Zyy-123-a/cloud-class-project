import React, {useState, useReducer, useEffect, createContext, useContext} from 'react'
import cookie from 'react-cookies'
import Router from "next/router";
import {Col, Row, Affix, Menu, Dropdown} from 'antd';
import "../../public/style/head.css";
import "../../public/style/teacher/course.css";
import Header from "../../components/teacher/header";
import CourseModule from "../../components/teacher/index/courseModule";
import CourseAddModule from "../../components/teacher/index/courseAddModule";
import CourseAddSpan from "../../components/teacher/index/courseAddSpan";
import CourseCreateSpan from "../../components/teacher/index/courseCreateSpan";
import ArchiveCourse from "../../components/teacher/index/archiveCourse"
import AddOrCreateCourseMenu from "../../components/teacher/index/optionMenu";
import SortCourseModal from "../../components/teacher/index/sortCourseModal";
import {CoursesContext, PageContext, CourseContext} from "../../components/teacher/Context";
import {RealAxios} from "../../components/config";

const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return action.coursesInfo
        default:
            return state
    }
}

const TeacherIndex = (props) => {
    const [coursesInfo, dispatch] = useReducer(reducer, []);
    const [teacherId, setTeacherId] = useState('');
    const [sortModalVisible, setSortModalVisible] = useState(false);

    const handleSortSave = async (sortedList) => {
        // 1. 先更新前端状态，页面立即反映新顺序
        dispatch({ type: "update", coursesInfo: sortedList });

        // 2. 持久化到后端
        const sortData = sortedList.map((item, index) => ({
            tcid: item.tcid,
            tsort: index
        }));
        await RealAxios({
            method: 'post',
            url: '/tc/updateSort',
            data: { sortList: sortData }
        });
    };

    useEffect(() => {
        if (cookie.load("identify") != "teacher" || !cookie.load("id")) {
            Router.push("/teacher/login")
        }
        let result = [];
        RealAxios({
            method: 'post',
            url: '/course/getCourseByTeacher',
            data: {
                phone: cookie.load("id")
            }
        }).then((response) => {
            result = response.data;
            dispatch({type: "update", coursesInfo: result})
        }).catch((error) => {
            console.log(error)
        });
    }, []);
    return (
        <Col span={24}>
            <PageContext.Provider value={"index"}>
                <Header/>
            </PageContext.Provider>
            <Row gutter={[0,20]}>
                <Col span={18} offset={3}>
                    <div className='ktcon'>
                        <Row className='control-bar' justify='space-between'>
                            <Col style={{paddingTop: 14 + "px"}}>
                                全部课程
                            </Col>
                            <Row justify='start' gutter={[10, 0]} align='middle'>
                                <Col>
                                    <a onClick={() => setSortModalVisible(true)}>课程排序</a>
                                </Col>
                                <Col>
                                    <CoursesContext.Provider value={{coursesInfo, dispatch}}>
                                        <ArchiveCourse/>
                                    </CoursesContext.Provider>
                                </Col>
                                <Col>
                                    <CoursesContext.Provider value={{coursesInfo, dispatch}}>
                                        <Dropdown overlay={AddOrCreateCourseMenu} trigger={['click']}>
                                            <div className='course-control-btn'><span>创建/加入课程</span></div>
                                        </Dropdown>
                                    </CoursesContext.Provider>
                                </Col>
                                <Col>
                                    <div className='course-control-btn'><span>快速发布活动</span></div>
                                </Col>
                            </Row>
                        </Row>
                        <Row gutter={[21, 30]} justify='start'>
                            {coursesInfo.map((item) => (
                                <Col key={item.tcid || item.cid}>
                                    <CoursesContext.Provider value={{item, coursesInfo, dispatch}}>
                                        <CourseModule/>
                                    </CoursesContext.Provider>
                                </Col>
                            ))}
                            <Col>
                                <CoursesContext.Provider value={{coursesInfo, dispatch}}>
                                    <CourseAddModule/>
                                </CoursesContext.Provider>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <SortCourseModal
                visible={sortModalVisible}
                onClose={() => setSortModalVisible(false)}
                courses={coursesInfo}
                onSave={handleSortSave}
            />
        </Col>
    )
};

export default TeacherIndex;
