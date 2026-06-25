package com.wangguo.service;

import net.sf.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

public interface HwStudentService {
    List<Map<String, Object>> listByCourse(String cid, String sphone);

    Map<String, Object> getDetail(String twid, String sphone);

    Map<String, Object> submit(JSONObject info);

    Map<String, Object> uploadFile(MultipartFile file, String twid, String sphone);

    Map<String, Object> deleteFile(String aid, String sphone);

    List<Map<String, Object>> getAttachments(String twid, String sphone);
}
