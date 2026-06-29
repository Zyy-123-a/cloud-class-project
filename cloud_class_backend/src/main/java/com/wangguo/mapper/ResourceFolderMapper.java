package com.wangguo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface ResourceFolderMapper {
    List<Map<String, Object>> getFolderList(String cid);

    Integer insertFolder(Map<String, Object> folder);

    Integer updateFolder(Map<String, Object> folder);

    Integer deleteFolder(String fid);

    Integer moveFolder(Map<String, Object> params);

    Integer updateSort(Map<String, Object> params);

    List<Map<String, Object>> getChildFolders(String fid);

    Integer updateChildrenParent(Map<String, Object> params);
}
