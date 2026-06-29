package com.wangguo.service;

import com.wangguo.mapper.ResourceMapper;
import com.wangguo.util.DefaultInfo;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ResourceServiceImpl implements ResourceService {
    @Autowired
    ResourceMapper resourceMapper;

    @Override
    public List<Map<String, Object>> getResourceList(String cid, String rtype, String fid) {
        Map<String, Object> info = new HashMap<>();
        info.put("cid", cid);
        info.put("rtype", rtype);
        info.put("fid", fid);
        return resourceMapper.getResourceList(info);
    }

    @Override
    public Integer uploadResource(JSONObject info) {
        String rid = new Date().getTime() + "";
        String tid = resourceMapper.getTidByCid(info.getString("cid"));
        Map<String, Object> resource = new HashMap<>();
        resource.put("rid", rid);
        resource.put("cid", info.getString("cid"));
        resource.put("tid", tid);
        resource.put("rname", info.getString("rname"));
        resource.put("rfilename", info.getString("rfilename"));
        resource.put("roriginalname", info.getString("roriginalname"));
        resource.put("rsize", info.getLong("rsize"));
        resource.put("rdate", new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
        resource.put("rlink", null);
        resource.put("rtype", "file");
        resource.put("fid", info.has("fid") && !info.getString("fid").isEmpty() ? info.getString("fid") : null);
        return resourceMapper.insertResource(resource);
    }

    @Override
    public Integer addLink(JSONObject info) {
        String rid = new Date().getTime() + "";
        String tid = resourceMapper.getTidByCid(info.getString("cid"));
        Map<String, Object> resource = new HashMap<>();
        resource.put("rid", rid);
        resource.put("cid", info.getString("cid"));
        resource.put("tid", tid);
        resource.put("rname", info.getString("rname"));
        resource.put("rfilename", null);
        resource.put("roriginalname", null);
        resource.put("rsize", 0L);
        resource.put("rdate", new SimpleDateFormat("yyyy/MM/dd").format(new Date()));
        resource.put("rlink", info.getString("rlink"));
        resource.put("rtype", "link");
        resource.put("fid", info.has("fid") && !info.getString("fid").isEmpty() ? info.getString("fid") : null);
        return resourceMapper.insertResource(resource);
    }

    @Override
    public Integer deleteResource(String rid) {
        Map<String, Object> resource = resourceMapper.getResourceById(rid);
        if (resource != null && resource.get("rfilename") != null) {
            String filePath = DefaultInfo.RESOURCE_FILE + File.separator + resource.get("rfilename").toString();
            try {
                Files.deleteIfExists(Paths.get(filePath));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return resourceMapper.deleteResource(rid);
    }

    @Override
    public Integer moveResource(String rid, String fid) {
        Map<String, Object> params = new HashMap<>();
        params.put("rid", rid);
        params.put("fid", fid.isEmpty() ? null : fid);
        return resourceMapper.moveResource(params);
    }

    @Override
    public Integer renameResource(String rid, String rname) {
        Map<String, Object> params = new HashMap<>();
        params.put("rid", rid);
        params.put("rname", rname);
        return resourceMapper.renameResource(params);
    }

    @Override
    public Integer sortResources(List<Map<String, Object>> sortList) {
        Integer result = 0;
        for (Map<String, Object> item : sortList) {
            Map<String, Object> params = new HashMap<>();
            params.put("rid", item.get("rid"));
            params.put("rsort", item.get("rsort"));
            result += resourceMapper.sortResource(params);
        }
        return result;
    }

    @Override
    public Map<String, Object> downloadResource(String rid) {
        Map<String, Object> resource = resourceMapper.getResourceById(rid);
        if (resource != null && resource.get("rfilename") != null) {
            String filePath = DefaultInfo.RESOURCE_FILE + File.separator + resource.get("rfilename").toString();
            try {
                File file = new File(filePath);
                if (file.exists()) {
                    byte[] fileBytes = Files.readAllBytes(Paths.get(filePath));
                    String base64 = Base64.getEncoder().encodeToString(fileBytes);
                    resource.put("base64", base64);
                    resource.put("available", true);
                } else {
                    resource.put("available", false);
                }
            } catch (IOException e) {
                e.printStackTrace();
                resource.put("available", false);
            }
        } else {
            resource.put("available", false);
        }
        return resource;
    }
}
