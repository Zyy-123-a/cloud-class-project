package com.wangguo.mapper;

import com.wangguo.entity.Course;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface CourseMapper {
    List<Map> selectCourseGrade(String cid);

    List<Map> selectCourseTeacher(String cid);

    List<Map> selectCourseSelect(String cid);

    Integer coursePeopleDel(String cid);

    Integer coursePeopleAdd(String cid);

    Integer updateCourse(@Param("cid") String cid, @Param("cname") String cname, @Param("cdate") String cdate);

    Integer deleteCourse(@Param("cid") String cid);

    Integer archiveCourse(@Param("cid") String cid, @Param("archive") Integer archive);

    Integer insert(Course course);

    Course findByInvite(@Param("courseCode") String courseCode);

    List<Map> getCourseByStudent(@Param("sid") String sid);

    List<Map> getCourseByTeacher(@Param("tid") String tid);

    Integer updateNameById(HashMap info);

    // 更新禁止学生讨论状态
    Integer updateTalkStatus(@Param("cid") String cid, @Param("disable") Integer disable);

    // 根据cid查询课程
    Course findById(@Param("cid") String cid);
}