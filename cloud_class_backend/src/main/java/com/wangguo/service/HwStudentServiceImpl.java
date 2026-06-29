package com.wangguo.service;

import com.wangguo.entity.Attachment;
import com.wangguo.entity.Swork;
import com.wangguo.entity.Student;
import com.wangguo.mapper.HwAttachmentMapper;
import com.wangguo.mapper.HwStudentMapper;
import com.wangguo.mapper.StudentMapper;
import com.wangguo.util.HomeworkFilePath;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HwStudentServiceImpl implements HwStudentService {

    @Autowired
    private HwStudentMapper hwStudentMapper;
    @Autowired
    private HwAttachmentMapper hwAttachmentMapper;
    @Autowired
    private StudentMapper studentMapper;

    private static final SimpleDateFormat DATE_FMT = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public List<Map<String, Object>> listByCourse(String cid, String sphone) {
        Map<String, Object> params = new HashMap<>();
        params.put("cid", cid);
        params.put("sphone", sphone);
        return hwStudentMapper.listWorksWithStatus(params);
    }

    @Override
    public Map<String, Object> getDetail(String twid, String sphone) {
        Map<String, Object> params = new HashMap<>();
        params.put("twid", twid);
        params.put("sphone", sphone);
        Map<String, Object> detail = hwStudentMapper.getWorkDetail(params);
        if (detail == null) {
            return null;
        }
        Student student = studentMapper.findByPhone(sphone);
        enrichDetail(detail, student.getSid());
        return detail;
    }

    @Override
    public Map<String, Object> submit(JSONObject info) {
        Map<String, Object> result = new HashMap<>();
        String twid = info.getString("twid");
        String sphone = info.getString("sphone");
        String scontent = info.getString("scontent");

        Map<String, Object> workDetail = getDetail(twid, sphone);
        if (workDetail == null) {
            result.put("result", 0);
            result.put("msg", "作业不存在");
            return result;
        }
        if (!isBeforeDeadline(workDetail.get("deadline"))) {
            result.put("result", 0);
            result.put("msg", "已过截止时间，无法提交");
            return result;
        }

        Student student = studentMapper.findByPhone(sphone);
        String sid = student.getSid();
        String today = DATE_FMT.format(new Date());

        Map<String, Object> findParams = new HashMap<>();
        findParams.put("twid", twid);
        findParams.put("sid", sid);
        Map<String, Object> existing = hwStudentMapper.findSubmission(findParams);

        if (existing == null || existing.get("swid") == null) {
            Swork swork = new Swork();
            swork.setSwid(new Date().getTime() + "");
            swork.setTwid(twid);
            swork.setSid(sid);
            swork.setScontent(scontent);
            swork.setSpublish(today);
            swork.setCorrect("0");
            swork.setScore("0");
            swork.setCorrection("");
            hwStudentMapper.insertSubmission(swork);
            result.put("swid", swork.getSwid());
        } else {
            Map<String, Object> updateParams = new HashMap<>();
            updateParams.put("swid", existing.get("swid").toString());
            updateParams.put("scontent", scontent);
            updateParams.put("spublish", today);
            // 重新提交时重置批改状态为未批改
            updateParams.put("correct", "0");
            hwStudentMapper.updateSubmission(updateParams);
            result.put("swid", existing.get("swid").toString());
        }
        result.put("result", 1);
        result.put("msg", "提交成功");
        return result;
    }

    @Override
    public Map<String, Object> uploadFile(MultipartFile file, String twid, String sphone) {
        Map<String, Object> result = new HashMap<>();
        Map<String, Object> workDetail = getDetail(twid, sphone);
        if (workDetail == null) {
            result.put("result", 0);
            result.put("msg", "作业不存在");
            return result;
        }
        if (!isBeforeDeadline(workDetail.get("deadline"))) {
            result.put("result", 0);
            result.put("msg", "已过截止时间，无法上传");
            return result;
        }

        Student student = studentMapper.findByPhone(sphone);
        String sid = student.getSid();
        String originalName = file.getOriginalFilename();
        // 磁盘文件名：时间戳_原始文件名，保证唯一且可读
        String storedName = new Date().getTime() + "_" + originalName;
        File dir = new File(HomeworkFilePath.HOMEWORK_DIR);
        if (!dir.exists()) {
            boolean created = dir.mkdirs();
            if (!created) {
                System.err.println("无法创建目录: " + dir.getAbsolutePath());
                result.put("result", 0);
                result.put("msg", "文件保存失败：无法创建目录 " + dir.getAbsolutePath());
                return result;
            }
        }
        File target = new File(dir, storedName);
        System.out.println("保存文件到: " + target.getAbsolutePath());
        try {
            file.transferTo(target);
        } catch (Exception e) {
            System.err.println("文件保存失败: " + e.getMessage());
            e.printStackTrace();
            result.put("result", 0);
            result.put("msg", "文件保存失败: " + e.getMessage());
            return result;
        }

        // 检查是否已上传过同名文件，避免重复
        Map<String, Object> checkParams = new HashMap<>();
        checkParams.put("twid", twid);
        checkParams.put("sid", sid);
        checkParams.put("type", "1");
        List<Map<String, Object>> existingFiles = hwAttachmentMapper.findByTwidAndSid(checkParams);
        for (Map<String, Object> existing : existingFiles) {
            String existName = existing.get("filename") != null ? existing.get("filename").toString() : "";
            if (existName.endsWith("_" + originalName)) {
                result.put("result", 1);
                result.put("aid", existing.get("aid"));
                result.put("filename", existName);
                return result;
            }
        }

        Attachment attachment = new Attachment();
        attachment.setAid(new Date().getTime() + "");
        attachment.setTwid(twid);
        attachment.setTsid(sid);
        attachment.setTid(null);
        attachment.setFilename(storedName);
        attachment.setType("1");
        hwAttachmentMapper.insert(attachment);

        result.put("result", 1);
        result.put("aid", attachment.getAid());
        result.put("filename", originalName);
        result.put("storedName", storedName);
        return result;
    }

    @Override
    public Map<String, Object> deleteFile(String aid, String sphone) {
        Map<String, Object> result = new HashMap<>();
        Attachment attachment = hwAttachmentMapper.findByAid(aid);
        if (attachment == null) {
            result.put("result", 0);
            result.put("msg", "附件不存在");
            return result;
        }
        Student student = studentMapper.findByPhone(sphone);
        if (!student.getSid().equals(attachment.getTsid())) {
            result.put("result", 0);
            result.put("msg", "无权删除");
            return result;
        }
        File file = new File(HomeworkFilePath.HOMEWORK_DIR, attachment.getFilename());
        if (file.exists()) {
            file.delete();
        }
        hwAttachmentMapper.deleteByAid(aid);
        result.put("result", 1);
        result.put("msg", "删除成功");
        return result;
    }

    @Override
    public List<Map<String, Object>> getAttachments(String twid, String sphone) {
        Student student = studentMapper.findByPhone(sphone);
        Map<String, Object> params = new HashMap<>();
        params.put("twid", twid);
        params.put("sid", student.getSid());
        params.put("type", "1");
        return hwAttachmentMapper.findByTwidAndSid(params);
    }

    private void enrichDetail(Map<String, Object> detail, String sid) {
        detail.put("canSubmit", isBeforeDeadline(detail.get("deadline")));
        detail.put("teacherAttachments", hwAttachmentMapper.findTeacherAttachments(detail.get("twid").toString()));
        Map<String, Object> params = new HashMap<>();
        params.put("twid", detail.get("twid").toString());
        params.put("sid", sid);
        params.put("type", "1");
        detail.put("studentAttachments", hwAttachmentMapper.findByTwidAndSid(params));
    }

    private boolean isBeforeDeadline(Object deadline) {
        if (deadline == null) {
            return true;
        }
        try {
            Date deadlineDate = DATE_FMT.parse(deadline.toString().substring(0, 10));
            Date today = DATE_FMT.parse(DATE_FMT.format(new Date()));
            return !today.after(deadlineDate);
        } catch (Exception e) {
            return true;
        }
    }
}
