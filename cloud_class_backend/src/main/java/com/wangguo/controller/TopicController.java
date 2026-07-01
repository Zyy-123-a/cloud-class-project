package com.wangguo.controller;

import com.wangguo.entity.Topic;
import com.wangguo.entity.TopicSortDTO;
import com.wangguo.service.TopicService;
import com.wangguo.service.CourseService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/topic")
public class TopicController {
    @Resource
    private TopicService topicService;
    @Resource
    private CourseService courseService;

    // 创建话题
    @PostMapping("/create")
    public String create(@RequestBody Topic topic) {
        try {
            if (topic.getRole() == null || topic.getRole().isEmpty()) {
                topic.setRole("student");
            }
            if (topic.getIsAnonym() == null) {
                topic.setIsAnonym(0);
            }
            if (topic.getIsTop() == null) {
                topic.setIsTop(0);
            }
            if (topic.getIsEssence() == null) {
                topic.setIsEssence(0);
            }
            if (topic.getAuthorName() == null || topic.getAuthorName().isEmpty()) {
                topic.setAuthorName(topic.getUid());
            }
            topicService.createTopic(topic);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 更新话题
    @PostMapping("/update")
    public String update(@RequestBody Topic topic) {
        try {
            topicService.updateTopic(topic);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 查询话题列表
    @PostMapping("/list")
    public List<Topic> list(@RequestBody Map<String, Object> params) {
        try {
            Long cid = Long.valueOf(params.get("cid").toString());
            String type = params.get("type").toString();
            return topicService.listTopic(cid, type);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // ========== 新增：查询话题详情 ==========
    @PostMapping("/detail")
    public Topic detail(@RequestBody Map<String, Object> params) {
        try {
            Long tid = Long.valueOf(params.get("tid").toString());
            System.out.println("查询话题详情，tid: " + tid);
            Topic topic = topicService.getTopicById(tid);
            System.out.println("查询结果: " + topic);
            return topic;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    // ========== 新增结束 ==========

    // 置顶/取消置顶
    @PostMapping("/setTop")
    public String setTop(@RequestBody Map<String, Object> params) {
        try {
            Long tid = Long.valueOf(params.get("tid").toString());
            Integer isTop = Integer.valueOf(params.get("isTop").toString());
            topicService.setTop(tid, isTop);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 删除话题
    @PostMapping("/delete")
    public String delete(@RequestBody Map<String, Object> params) {
        try {
            Long tid = Long.valueOf(params.get("tid").toString());
            topicService.deleteTopic(tid);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 批量删除话题
    @PostMapping("/batchDelete")
    public String batchDelete(@RequestBody Map<String, Object> params) {
        try {
            List<Long> tids = (List<Long>) params.get("tids");
            if (tids == null || tids.isEmpty()) {
                return "error: 请选择要删除的话题";
            }
            topicService.batchDeleteTopics(tids);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 批量排序
    @PostMapping("/updateSort")
    public String updateSort(@RequestBody List<TopicSortDTO> list) {
        try {
            topicService.batchSort(list);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 开关禁止学生发言
    @PostMapping("/setStudentDisable")
    public String setStudentDisable(@RequestBody Map<String, Object> params) {
        try {
            String cid = params.get("cid").toString();
            Integer isDisable = Integer.valueOf(params.get("isDisable").toString());
            courseService.updateTalkStatus(cid, isDisable);
            return "success";
        } catch (Exception e) {
            e.printStackTrace();
            return "error: " + e.getMessage();
        }
    }

    // 下载全部话题
    @PostMapping("/downloadAll")
    public String downloadAll(@RequestBody Map<String, Object> params) {
        return "success";
    }
}