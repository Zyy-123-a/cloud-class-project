package com.wangguo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface ResourceMapper {
    List<Map<String, Object>> getResourceList(Map<String, Object> info);

    Integer insertResource(Map<String, Object> resource);

    Integer deleteResource(String rid);

    Integer deleteByFid(String fid);

    Map<String, Object> getResourceById(String rid);

    String getTidByCid(String cid);

    Integer moveResource(Map<String, Object> params);

    Integer renameResource(Map<String, Object> params);

    Integer sortResource(Map<String, Object> params);
}
