package com.wangguo.controller;

import com.wangguo.entity.StudyCourse;
import com.wangguo.service.CourseService;
import com.wangguo.service.StudentService;
import com.wangguo.service.StudyCourseService;
import com.wangguo.util.CourseCode;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * @author 郭伟
 * @date 2020/6/11
 */
@Controller
@RequestMapping("sc")
@CrossOrigin    //允许跨域
@Slf4j
public class StudyController {
    @Autowired
    private StudyCourseService studyCourseService;
    @Autowired
    private StudentService studentService;
    @Autowired
    private CourseService courseService;

    @PostMapping("/findArchiveCourse")
    @ResponseBody
    public List<Map> findArchiveCourse(@RequestBody JSONObject info, HttpServletRequest request) {
        String phone = info.getString("phone");
        String sid = studentService.getInfo(phone).getSid();
        return studyCourseService.selectArchiveCourse(sid);
    }

    @PostMapping("/deleteCourse")
    @ResponseBody
    public String deleteCourse(@RequestBody JSONObject info, HttpServletRequest request) {
        String scid = info.getString("scid");
        return studyCourseService.deleteCourse(scid) >= 1 ? "success" : "failed";
    }

    @PostMapping("/archiveCourse")
    @ResponseBody
    public String archiveCourse(@RequestBody JSONObject info, HttpServletRequest request) {
        String scid = info.getString("scid");
        Integer archive = info.getInt("archive");
        return studyCourseService.archiveCourse(scid, archive) >= 1 ? "success" : "failed";
    }

    @PostMapping("/getCourse")
    @ResponseBody
    public List<Map> getCourseByStudent(@RequestBody JSONObject info, HttpServletRequest request) {
        String phone = info.getString("phone");
        String sid = studentService.getInfo(phone).getSid();
        return studyCourseService.getCourseByStudent(sid);
    }

    @PostMapping("/addStudyCourse")
    @ResponseBody
    public String addStudyCourse(@RequestBody JSONObject scInfo) {
        String inviteCode = scInfo.getString("invite");
        String sid = scInfo.getString("sid");
        // 根据邀请码查询课程
        com.wangguo.entity.Course targetCourse = courseService.getCourseByInvite(inviteCode);
        if (targetCourse == null) {
            return "not_exist_error";
        }
        // 课程已归档，禁止加入
        if (targetCourse.getArchive() != 0) {
            return "illegal_error";
        }
        // 学生已加入该课程
        String cid = targetCourse.getCid();
        if (studyCourseService.getInfoByCidAndSid(cid, sid) != null) {
            return "existed_error";
        }

        StudyCourse sc = new StudyCourse();
        sc.setCid(cid);
        sc.setSid(sid);
        sc.setGrade("-1");
        sc.setSort(studyCourseService.sizeBySid(sid) + 1);
        sc.setSarchive(0);

        // 生成唯一scid
        String scId;
        while (true) {
            scId = CourseCode.getRandomNum(15);
            if (studyCourseService.getInfoById(scId) == null) {
                sc.setScid(scId);
                break;
            }
        }
        return studyCourseService.insert(sc) >= 1 ? "success" : "failed";
    }

    @PostMapping("/updateSort")
    @ResponseBody
    public String updateSort(@RequestBody JSONObject info, HttpServletRequest request) {
        List<Map<String, Object>> sortList = (List<Map<String, Object>>) info.get("sortList");
        if (sortList == null || sortList.isEmpty()) {
            return "failed";
        }
        int successCount = 0;
        for (Map<String, Object> item : sortList) {
            String scid = (String) item.get("scid");
            Integer sort = (Integer) item.get("sort");
            successCount += studyCourseService.updateSort(scid, sort);
        }
        return successCount >= sortList.size() ? "success" : "failed";
    }
}