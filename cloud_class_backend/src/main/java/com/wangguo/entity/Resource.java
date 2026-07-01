package com.wangguo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Resource {
    private String rid;
    private String cid;
    private String tid;
    private String rname;
    private String rcategory;
    private String rfilename;
    private String roriginalname;
    private Long rsize;
    private String rdate;
    private String rlink;
    private String rtype;
    private String fid;
    private Integer rsort;
}
