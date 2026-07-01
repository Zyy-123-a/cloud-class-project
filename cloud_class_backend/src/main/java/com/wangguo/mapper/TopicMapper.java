package com.wangguo.mapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.wangguo.entity.Topic;
import com.wangguo.entity.TopicSortDTO;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Update;
import java.util.List;

public interface TopicMapper extends BaseMapper<Topic> {
    @Update("<script>" +
            "<foreach collection='list' item='item' separator=';' >" +
            "UPDATE topic SET tsort=#{item.tsort} WHERE tid=#{item.tid}" +
            "</foreach>" +
            "</script>")
    int batchUpdateSort(@Param("list") List<TopicSortDTO> list);
}