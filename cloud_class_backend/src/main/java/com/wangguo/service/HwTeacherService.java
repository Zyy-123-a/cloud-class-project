package com.wangguo.service;

import net.sf.json.JSONObject;

import java.util.List;
import java.util.Map;

public interface HwTeacherService {
    Map<String, Object> getDetail(String twid);

    List<Map<String, Object>> getSubmissionList(String twid, String filter);

    Map<String, Object> grade(String swid, String score, String correction);

    Map<String, Object> remindOne(JSONObject info);

    Map<String, Object> remindAll(JSONObject info);

    Map<String, Object> getSubmissionDetail(String swid);
}
