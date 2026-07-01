package com.wangguo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@TableName("topic")
public class Topic {
    @TableId(type = IdType.AUTO)
    private Long tid;
    private Long cid;
    private String uid;
    private String role;
    private String title;
    private String content;
    private Integer isAnonym;
    private Integer isTop;
    private Integer isEssence;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;

    @TableField(value = "author_name")
    private String authorName;
}