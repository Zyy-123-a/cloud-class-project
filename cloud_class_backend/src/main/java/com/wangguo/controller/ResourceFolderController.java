package com.wangguo.controller;

import com.wangguo.service.ResourceFolderServiceImpl;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/resourceFolder")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@Slf4j
public class ResourceFolderController {

    @Autowired
    ResourceFolderServiceImpl resourceFolderService;

    @PostMapping("/list")
    @ResponseBody
    public List<Map<String, Object>> getFolderTree(@RequestBody JSONObject info) {
        return resourceFolderService.getFolderTree(info.getString("cid"));
    }

    @PostMapping("/create")
    @ResponseBody
    public Integer createFolder(@RequestBody JSONObject info) {
        return resourceFolderService.createFolder(info);
    }

    @PostMapping("/rename")
    @ResponseBody
    public Integer renameFolder(@RequestBody JSONObject info) {
        return resourceFolderService.renameFolder(info);
    }

    @PostMapping("/delete")
    @ResponseBody
    public Integer deleteFolder(@RequestBody JSONObject info) {
        return resourceFolderService.deleteFolder(info.getString("fid"));
    }

    @PostMapping("/move")
    @ResponseBody
    public Integer moveFolder(@RequestBody JSONObject info) {
        return resourceFolderService.moveFolder(
                info.getString("fid"),
                info.has("parentFid") ? info.getString("parentFid") : null
        );
    }

    @PostMapping("/sort")
    @ResponseBody
    public Integer sortFolders(@RequestBody JSONObject info) {
        return resourceFolderService.sortFolders(
                (List<Map<String, Object>>) info.getJSONArray("sortList")
        );
    }
}
