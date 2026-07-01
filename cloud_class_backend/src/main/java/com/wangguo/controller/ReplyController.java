package com.wangguo.controller;

import com.wangguo.entity.Reply;
import com.wangguo.service.ReplyService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Resource
    private ReplyService replyService;

    // 新增回复 - 返回 simple string
    @PostMapping("/create")
    public String create(@RequestBody Reply reply) {
        try {
            if (reply.getRole() == null || reply.getRole().isEmpty()) {
                reply.setRole("student");
            }
            if (reply.getIsAnonym() == null) {
                reply.setIsAnonym(0);
            }
            if (reply.getUserName() == null || reply.getUserName().isEmpty()) {
                reply.setUserName(reply.getUid());
            }
            replyService.addReply(reply);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 查询话题下所有回复
    @PostMapping("/list")
    public List<Reply> list(@RequestBody Map<String, Object> params) {
        try {
            Long tid = Long.valueOf(params.get("tid").toString());
            return replyService.listByTid(tid);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 删除回复
    @PostMapping("/delete")
    public String delete(@RequestBody Map<String, Object> params) {
        try {
            Long rid = Long.valueOf(params.get("rid").toString());
            replyService.deleteReply(rid);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }
}