package com.wangguo.service;

import com.wangguo.entity.Topic;
import com.wangguo.entity.TopicSortDTO;
import java.util.List;

public interface TopicService {
    void createTopic(Topic topic);
    void updateTopic(Topic topic);
    List<Topic> listTopic(Long cid, String type);
    void setTop(Long tid, Integer isTop);
    void deleteTopic(Long tid);
    void batchDeleteTopics(List<Long> tids);
    Topic getTopicById(Long tid);  // 新增：根据ID查询话题
    void batchSort(List<TopicSortDTO> list);
}