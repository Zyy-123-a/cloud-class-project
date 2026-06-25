package com.wangguo.mapper;

import com.wangguo.entity.Swork;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface HwStudentMapper {
    List<Map<String, Object>> listWorksWithStatus(Map<String, Object> params);

    Map<String, Object> getWorkDetail(Map<String, Object> params);

    Map<String, Object> findSubmission(Map<String, Object> params);

    Integer insertSubmission(Swork swork);

    Integer updateSubmission(Map<String, Object> params);

    Integer updateSubmissionTime(Map<String, Object> params);
}
