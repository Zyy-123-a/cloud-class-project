package com.wangguo.service;

import net.sf.json.JSONObject;

import java.util.List;
import java.util.Map;

public interface ResourceService {
    List<Map<String, Object>> getResourceList(String cid, String rtype, String fid);

    Integer uploadResource(JSONObject info);

    Integer addLink(JSONObject info);

    Integer deleteResource(String rid);

    Integer moveResource(String rid, String fid);

    Integer renameResource(String rid, String rname);

    Integer sortResources(List<Map<String, Object>> sortList);

    Map<String, Object> downloadResource(String rid);
}
