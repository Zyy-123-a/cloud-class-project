package com.wangguo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@TableName("reply")
public class Reply {
    @TableId(type = IdType.AUTO)
    private Long rid;
    private Long tid;
    private String uid;
    private String role;
    private String content;
    private Integer isAnonym;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private String userName;
}