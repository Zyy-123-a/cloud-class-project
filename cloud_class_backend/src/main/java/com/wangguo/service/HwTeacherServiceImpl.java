package com.wangguo.service;

import com.wangguo.mapper.HwAttachmentMapper;
import com.wangguo.mapper.HwAttachmentMapper;
import com.wangguo.mapper.HwTeacherMapper;
import com.wangguo.mapper.MessageMapper;
import com.wangguo.mapper.TworkMapper;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HwTeacherServiceImpl implements HwTeacherService {

    @Autowired
    private HwTeacherMapper hwTeacherMapper;
    @Autowired
    private HwAttachmentMapper hwAttachmentMapper;
    @Autowired
    private MessageMapper messageMapper;
    @Autowired
    private TworkMapper tworkMapper;

    private static final SimpleDateFormat DATE_FMT = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public Map<String, Object> getDetail(String twid) {
        Map<String, Object> work = hwTeacherMapper.getWorkByTwid(twid);
        if (work == null) {
            return null;
        }
        Map<String, Object> result = new HashMap<>(work);
        result.put("stats", hwTeacherMapper.getSubmissionStats(twid));
        return result;
    }

    @Override
    public List<Map<String, Object>> getSubmissionList(String twid, String filter) {
        Map<String, Object> params = new HashMap<>();
        params.put("twid", twid);
        if (filter == null || filter.isEmpty() || "all".equals(filter)) {
            params.put("filter", null);
        } else {
            params.put("filter", filter);
        }
        return hwTeacherMapper.listSubmissions(params);
    }

    @Override
    public Map<String, Object> grade(String swid, String score, String correction) {
        Map<String, Object> result = new HashMap<>();
        Map<String, Object> params = new HashMap<>();
        params.put("swid", swid);
        params.put("score", score);
        params.put("correction", correction == null ? "" : correction);
        int rows = hwTeacherMapper.updateGrade(params);
        result.put("result", rows);
        result.put("msg", rows > 0 ? "批改成功" : "批改失败");
        return result;
    }

    @Override
    public Map<String, Object> remindOne(JSONObject info) {
        Map<String, Object> result = new HashMap<>();
        String twid = info.getString("twid");
        String cid = info.getString("cid");
        String sid = info.getString("sid");
        String mpublish = info.containsKey("mpublish") ? info.getString("mpublish") : DATE_FMT.format(new Date());
        int count = sendReminder(twid, cid, sid, mpublish);
        result.put("result", count);
        result.put("msg", count > 0 ? "催交成功" : "催交失败");
        return result;
    }

    @Override
    public Map<String, Object> remindAll(JSONObject info) {
        Map<String, Object> result = new HashMap<>();
        String twid = info.getString("twid");
        String cid = info.getString("cid");
        String mpublish = info.containsKey("mpublish") ? info.getString("mpublish") : DATE_FMT.format(new Date());
        List<Map<String, Object>> unsubmitted = hwTeacherMapper.listUnsubmittedStudents(twid);
        int total = 0;
        for (Map<String, Object> student : unsubmitted) {
            total += sendReminder(twid, cid, student.get("sid").toString(), mpublish);
        }
        result.put("result", total);
        result.put("count", unsubmitted.size());
        result.put("msg", "已向 " + unsubmitted.size() + " 名学生发送催交通知");
        return result;
    }

    @Override
    public Map<String, Object> getSubmissionDetail(String swid) {
        Map<String, Object> detail = hwTeacherMapper.getSubmissionBySwid(swid);
        if (detail != null) {
            // 获取学生提交的附件
            Map<String, Object> params = new HashMap<>();
            params.put("twid", detail.get("twid"));
            params.put("sid", detail.get("sid"));
            params.put("type", "1");
            detail.put("studentAttachments", hwAttachmentMapper.findByTwidAndSid(params));
        }
        return detail;
    }

    private int sendReminder(String twid, String cid, String sid, String mpublish) {
        String wtitle = tworkMapper.findWorkByTwid(twid).get("wtitle").toString();
        String mid = new Date().getTime() + "";
        Map<String, Object> message = new HashMap<>();
        message.put("mid", mid);
        message.put("cid", cid);
        message.put("mtitle", wtitle + "催交通知");
        message.put("mcontent", "你该提交" + wtitle + "的作业了，请及时提交");
        message.put("mpublish", mpublish);
        message.put("mnum", "1");
        int result = messageMapper.insertMassage(message);
        Map<String, Object> sm = new HashMap<>();
        sm.put("rid", new Date().getTime() + sid);
        sm.put("sid", sid);
        sm.put("mid", mid);
        sm.put("isread", "0");
        result += messageMapper.insertSM(sm);
        return result;
    }
}