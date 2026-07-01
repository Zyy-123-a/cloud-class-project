package com.wangguo.service;

import net.sf.json.JSONObject;

import java.util.List;
import java.util.Map;

public interface ResourceFolderService {
    List<Map<String, Object>> getFolderTree(String cid);

    Integer createFolder(JSONObject info);

    Integer renameFolder(JSONObject info);

    Integer deleteFolder(String fid);

    Integer moveFolder(String fid, String targetParentFid);

    Integer sortFolders(List<Map<String, Object>> sortList);
}
