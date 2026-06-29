package com.wangguo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResourceFolder {
    private String fid;
    private String cid;
    private String fname;
    private String parentFid;
    private Integer fsort;
}
