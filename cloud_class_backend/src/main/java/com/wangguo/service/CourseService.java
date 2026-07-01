package com.wangguo.service;

import com.wangguo.entity.Course;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface CourseService {
    public Integer updateCourse(String cid, String cname, String cdate);

    public Integer deleteCourse(String cid);

    public Integer archiveCourse(String cid, Integer archive);

    public List<Map> getCourseByTeacher(String tid);

    public List<Map> getCourseByStudent(String sid);

    public Integer insert(Course course);

    public Course getCourseByInvite(String courseCode);

    public List<Map> getCourseMember(String cid) throws IOException;

    public List<Map> getCourseStudent(String cid) throws IOException;

    public List<Map> getCourseGrade(String cid);

    public Integer updateNameById(String id, String name);

    // 根据cid更新禁止发言状态
    public Integer updateTalkStatus(String cid, Integer disable);

    // 根据cid查询课程
    public Course findById(String cid);
}