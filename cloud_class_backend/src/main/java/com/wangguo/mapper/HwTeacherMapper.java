package com.wangguo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface HwTeacherMapper {
    Map<String, Object> getWorkByTwid(String twid);

    Map<String, Object> getSubmissionStats(String twid);

    List<Map<String, Object>> listSubmissions(Map<String, Object> params);

    Map<String, Object> getSubmissionBySwid(String swid);

    Integer updateGrade(Map<String, Object> params);

    List<Map<String, Object>> listUnsubmittedStudents(String twid);
}
