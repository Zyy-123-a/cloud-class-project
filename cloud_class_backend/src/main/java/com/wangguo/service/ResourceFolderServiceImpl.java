package com.wangguo.service;

import com.wangguo.mapper.ResourceFolderMapper;
import com.wangguo.mapper.ResourceMapper;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ResourceFolderServiceImpl implements ResourceFolderService {
    @Autowired
    ResourceFolderMapper resourceFolderMapper;
    @Autowired
    ResourceMapper resourceMapper;

    @Override
    public List<Map<String, Object>> getFolderTree(String cid) {
        List<Map<String, Object>> allFolders = resourceFolderMapper.getFolderList(cid);
        return buildTree(allFolders, null);
    }

    private List<Map<String, Object>> buildTree(List<Map<String, Object>> allFolders, String parentFid) {
        List<Map<String, Object>> tree = new ArrayList<>();
        for (Map<String, Object> folder : allFolders) {
            String fParent = (String) folder.get("parentFid");
            if ((parentFid == null && fParent == null)
                    || (parentFid != null && parentFid.equals(fParent))) {
                Map<String, Object> node = new HashMap<>(folder);
                node.put("children", buildTree(allFolders, (String) folder.get("fid")));
                tree.add(node);
            }
        }
        return tree;
    }

    @Override
    public Integer createFolder(JSONObject info) {
        Map<String, Object> folder = new HashMap<>();
        folder.put("fid", new Date().getTime() + "");
        folder.put("cid", info.getString("cid"));
        folder.put("fname", info.getString("fname"));
        folder.put("parent_fid", info.has("parentFid") ? info.getString("parentFid") : null);
        folder.put("fsort", 0);
        return resourceFolderMapper.insertFolder(folder);
    }

    @Override
    public Integer renameFolder(JSONObject info) {
        Map<String, Object> params = new HashMap<>();
        params.put("fid", info.getString("fid"));
        params.put("fname", info.getString("fname"));
        return resourceFolderMapper.updateFolder(params);
    }

    @Override
    public Integer deleteFolder(String fid) {
        // 级联删除子文件夹
        List<Map<String, Object>> children = resourceFolderMapper.getChildFolders(fid);
        for (Map<String, Object> child : children) {
            deleteFolder((String) child.get("fid"));
        }
        // 删除该文件夹下的所有资源
        resourceMapper.deleteByFid(fid);
        // 删除文件夹自身
        return resourceFolderMapper.deleteFolder(fid);
    }

    @Override
    public Integer moveFolder(String fid, String targetParentFid) {
        Map<String, Object> params = new HashMap<>();
        params.put("fid", fid);
        params.put("parent_fid", targetParentFid);
        return resourceFolderMapper.moveFolder(params);
    }

    @Override
    public Integer sortFolders(List<Map<String, Object>> sortList) {
        Integer result = 0;
        for (Map<String, Object> item : sortList) {
            Map<String, Object> params = new HashMap<>();
            params.put("fid", item.get("fid"));
            params.put("fsort", item.get("fsort"));
            result += resourceFolderMapper.updateSort(params);
        }
        return result;
    }
}
