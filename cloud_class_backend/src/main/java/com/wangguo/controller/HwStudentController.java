package com.wangguo.controller;

import com.wangguo.entity.Attachment;
import com.wangguo.mapper.HwAttachmentMapper;
import com.wangguo.service.HwStudentService;
import com.wangguo.util.HomeworkFilePath;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 模块2 - 学生作业提交（独立接口，不修改原有 /swork /twork）
 */
@Controller
@RequestMapping("/hwStudent")
@CrossOrigin
@Slf4j
public class HwStudentController {

    @Autowired
    private HwStudentService hwStudentService;
    @Autowired
    private HwAttachmentMapper hwAttachmentMapper;

    @PostMapping("/listByCourse")
    @ResponseBody
    public List<Map<String, Object>> listByCourse(@RequestBody JSONObject info) {
        return hwStudentService.listByCourse(info.getString("cid"), info.getString("sphone"));
    }

    @PostMapping("/detail")
    @ResponseBody
    public Map<String, Object> detail(@RequestBody JSONObject info) {
        Map<String, Object> detail = hwStudentService.getDetail(info.getString("twid"), info.getString("sphone"));
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

    @PostMapping("/submit")
    @ResponseBody
    public Map<String, Object> submit(@RequestBody JSONObject info) {
        return hwStudentService.submit(info);
    }

    @PostMapping("/uploadFile")
    @ResponseBody
    public Map<String, Object> uploadFile(@RequestParam("file") MultipartFile file,
                                          @RequestParam("twid") String twid,
                                          @RequestParam("sphone") String sphone) {
        return hwStudentService.uploadFile(file, twid, sphone);
    }

    @PostMapping("/deleteFile")
    @ResponseBody
    public Map<String, Object> deleteFile(@RequestBody JSONObject info) {
        return hwStudentService.deleteFile(info.getString("aid"), info.getString("sphone"));
    }

    @PostMapping("/getAttachments")
    @ResponseBody
    public List<Map<String, Object>> getAttachments(@RequestBody JSONObject info) {
        return hwStudentService.getAttachments(info.getString("twid"), info.getString("sphone"));
    }

    @PostMapping("/downloadFile")
    @ResponseBody
    public Map<String, Object> downloadFile(@RequestBody JSONObject info) {
        Map<String, Object> result = new HashMap<>();
        Attachment attachment = hwAttachmentMapper.findByAid(info.getString("aid"));
        if (attachment == null) {
            result.put("result", 0);
            result.put("msg", "文件不存在");
            return result;
        }
        try {
            File file = new File(HomeworkFilePath.HOMEWORK_DIR, attachment.getFilename());
            FileInputStream fis = new FileInputStream(file);
            byte[] bytes = new byte[(int) file.length()];
            fis.read(bytes);
            fis.close();
            result.put("result", 1);
            result.put("filename", attachment.getFilename());
            result.put("data", Base64Utils.encodeToString(bytes));
        } catch (Exception e) {
            result.put("result", 0);
            result.put("msg", "文件读取失败");
        }
        return result;
    }
}
