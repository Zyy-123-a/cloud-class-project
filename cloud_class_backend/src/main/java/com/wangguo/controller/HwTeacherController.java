package com.wangguo.controller;

import com.wangguo.service.HwTeacherService;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 模块2 - 教师作业详情与批改（独立接口，不修改原有 /swork /twork）
 */
@Controller
@RequestMapping("/hwTeacher")
@CrossOrigin
@Slf4j
public class HwTeacherController {

    @Autowired
    private HwTeacherService hwTeacherService;

    @PostMapping("/detail")
    @ResponseBody
    public Map<String, Object> detail(@RequestBody JSONObject info) {
        Map<String, Object> detail = hwTeacherService.getDetail(info.getString("twid"));
        Map<String, Object> result = new HashMap<>();
        if (detail == null) {
            result.put("result", 0);
            result.put("msg", "作业不存在");
        } else {
            result.put("result", 1);
            result.put("data", detail);
        }
        return result;
    }

    @PostMapping("/submissionList")
    @ResponseBody
    public List<Map<String, Object>> submissionList(@RequestBody JSONObject info) {
        String filter = info.containsKey("filter") ? info.getString("filter") : "all";
        return hwTeacherService.getSubmissionList(info.getString("twid"), filter);
    }

    @PostMapping("/grade")
    @ResponseBody
    public Map<String, Object> grade(@RequestBody JSONObject info) {
        return hwTeacherService.grade(
                info.getString("swid"),
                info.getString("score"),
                info.getString("correction")
        );
    }

    @PostMapping("/remindOne")
    @ResponseBody
    public Map<String, Object> remindOne(@RequestBody JSONObject info) {
        return hwTeacherService.remindOne(info);
    }

    @PostMapping("/remindAll")
    @ResponseBody
    public Map<String, Object> remindAll(@RequestBody JSONObject info) {
        return hwTeacherService.remindAll(info);
    }

    @PostMapping("/submissionDetail")
    @ResponseBody
    public Map<String, Object> submissionDetail(@RequestBody JSONObject info) {
        Map<String, Object> detail = hwTeacherService.getSubmissionDetail(info.getString("swid"));
        Map<String, Object> result = new HashMap<>();
        if (detail == null) {
            result.put("result", 0);
            result.put("msg", "提交记录不存在");
        } else {
            result.put("result", 1);
            result.put("data", detail);
        }
        return result;
    }
}
