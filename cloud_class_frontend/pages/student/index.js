import React, {useEffect, useReducer, useState} from 'react'
import {Button, Col, Dropdown, Row} from 'antd'
import cookie from "react-cookies";
import Router from "next/router";
import Header from "../../components/student/header";
import {PageContext, CoursesContext} from "../../components/student/Context";
import "../../public/style/student/course.css";
import ArchiveCourse from "../../components/student/index/archiveCourse";
import CourseAddSpan from "../../components/student/index/courseAddSpan";
import SortCourseModal from "../../components/teacher/index/sortCourseModal";
import {RealAxios} from "../../components/config";
import CourseModule from "../../components/student/index/courseModule";
import CourseAddModule from "../../components/student/index/courseAddModule";

const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return action.coursesInfo;
        default:
            return state
    }
};

const StudentIndex = () => {
    const [coursesInfo, dispatch] = useReducer(reducer, []);
    const [sortModalVisible, setSortModalVisible] = useState(false);

    const handleSortSave = async (sortedList) => {
        // 1. 先更新前端状态，页面立即反映新顺序
        dispatch({ type: "update", coursesInfo: sortedList });

        // 2. 持久化到后端
        const sortData = sortedList.map((item, index) => ({
            scid: item.scid,
            sort: index
        }));
        await RealAxios({
            method: 'post',
            url: '/sc/updateSort',
            data: { sortList: sortData }
        });
    };

    useEffect(() => {
        if (cookie.load("identify") != "student" || !cookie.load("id")) {
            Router.push("/student/login")
        }
        let result = [];
        RealAxios({
            method: 'post',
            url: '/course/getCourseByStudent',
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
                                    <div className='course-control-btn'>
                                        <CoursesContext.Provider value={{coursesInfo, dispatch}}>
                                            <CourseAddSpan/>
                                        </CoursesContext.Provider>
                                    </div>
                                </Col>
                            </Row>
                        </Row>

                        <Row gutter={[21, 30]} justify='start'>
                            {coursesInfo.map((item) => (
                                <Col key={item.scid || item.cid}>
                                    <CoursesContext.Provider value={{item, coursesInfo, dispatch}}>
                                        <CourseModule/>
                                    </CoursesContext.Provider>
                                </Col>
                            ))}
                            <Col>
                                <CoursesContext.Provider
                                    value={{coursesInfo, dispatch}}><CourseAddModule/></CoursesContext.Provider>
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
    );
};

export default StudentIndex;
