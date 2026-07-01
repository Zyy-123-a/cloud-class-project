package com.wangguo.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wangguo.entity.Topic;
import com.wangguo.entity.TopicSortDTO;
import com.wangguo.mapper.TopicMapper;
import com.wangguo.service.TopicService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;

@Service
public class TopicServiceImpl extends ServiceImpl<TopicMapper, Topic> implements TopicService {
    @Resource
    private TopicMapper topicMapper;

    @Override
    public void createTopic(Topic topic) {
        save(topic);
    }

    @Override
    public void updateTopic(Topic topic) {
        updateById(topic);
    }

    @Override
    public List<Topic> listTopic(Long cid, String type) {
        LambdaQueryWrapper<Topic> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(Topic::getCid, cid)
                .orderByDesc(Topic::getIsTop)
                .orderByDesc(Topic::getCreateTime);
        if ("essence".equals(type)) {
            wrapper.eq(Topic::getIsEssence, 1);
        }
        return list(wrapper);
    }

    @Override
    public void setTop(Long tid, Integer isTop) {
        Topic topic = getById(tid);
        if (topic != null) {
            topic.setIsTop(isTop);
            updateById(topic);
        }
    }

    @Override
    public void deleteTopic(Long tid) {
        removeById(tid);
    }

    @Override
    public void batchDeleteTopics(List<Long> tids) {
        removeByIds(tids);
    }

    // ========== 新增：根据ID查询话题 ==========
    @Override
    public Topic getTopicById(Long tid) {
        return getById(tid);
    }
    // ========== 新增结束 ==========

    @Override
    public void batchSort(List<TopicSortDTO> list) {
        topicMapper.batchUpdateSort(list);
    }
}