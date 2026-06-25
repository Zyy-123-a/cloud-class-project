package com.wangguo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Attachment {
    private String aid;
    private String twid;
    private String tsid;
    private String tid;
    private String filename;
    private String type;
}
