package com.wangguo.mapper;

import com.wangguo.entity.Attachment;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface HwAttachmentMapper {
    Integer insert(Attachment attachment);

    Integer deleteByAid(String aid);

    Attachment findByAid(String aid);

    List<Map<String, Object>> findByTwidAndSid(Map<String, Object> params);

    List<Map<String, Object>> findTeacherAttachments(String twid);
}
