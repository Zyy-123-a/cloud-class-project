package com.wangguo.controller;

import com.wangguo.service.ResourceServiceImpl;
import com.wangguo.util.DefaultInfo;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/resource")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@Slf4j
public class ResourceController {

    @Autowired
    ResourceServiceImpl resourceService;

    @PostMapping("/list")
    @ResponseBody
    public List<Map<String, Object>> getResourceList(@RequestBody JSONObject info) {
        return resourceService.getResourceList(
                info.getString("cid"),
                info.has("rtype") ? info.getString("rtype") : "",
                info.has("fid") ? info.getString("fid") : null
        );
    }

    @PostMapping("/upload")
    @ResponseBody
    public Integer uploadResource(HttpServletRequest request,
                                  @RequestParam("file") MultipartFile file) {
        String cid = request.getParameter("cid");
        String rname = request.getParameter("rname");
        String fid = request.getParameter("fid");

        String originalName = file.getOriginalFilename();
        String newName = new Date().getTime() +
                originalName.substring(originalName.lastIndexOf("."));

        File destDir = new File(DefaultInfo.RESOURCE_FILE);
        if (!destDir.exists()) {
            destDir.mkdirs();
        }

        try {
            File destFile = new File(destDir, newName);
            file.transferTo(destFile);
        } catch (IOException e) {
            e.printStackTrace();
            return 0;
        }

        JSONObject info = new JSONObject();
        info.put("cid", cid);
        info.put("rname", rname);
        info.put("rfilename", newName);
        info.put("roriginalname", originalName);
        info.put("rsize", file.getSize());
        info.put("fid", fid != null ? fid : "");

        return resourceService.uploadResource(info);
    }

    @PostMapping("/addLink")
    @ResponseBody
    public Integer addLink(@RequestBody JSONObject info) {
        return resourceService.addLink(info);
    }

    @PostMapping("/delete")
    @ResponseBody
    public Integer deleteResource(@RequestBody JSONObject info) {
        return resourceService.deleteResource(info.getString("rid"));
    }

    @PostMapping("/move")
    @ResponseBody
    public Integer moveResource(@RequestBody JSONObject info) {
        return resourceService.moveResource(
                info.getString("rid"),
                info.has("fid") ? info.getString("fid") : ""
        );
    }

    @PostMapping("/rename")
    @ResponseBody
    public Integer renameResource(@RequestBody JSONObject info) {
        return resourceService.renameResource(
                info.getString("rid"),
                info.getString("rname")
        );
    }

    @PostMapping("/sort")
    @ResponseBody
    public Integer sortResources(@RequestBody JSONObject info) {
        return resourceService.sortResources(
                (List<Map<String, Object>>) info.getJSONArray("sortList")
        );
    }

    @PostMapping("/download")
    @ResponseBody
    public Map<String, Object> downloadResource(@RequestBody JSONObject info) {
        return resourceService.downloadResource(info.getString("rid"));
    }
}
