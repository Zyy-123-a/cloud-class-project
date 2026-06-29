package com.wangguo.util;

import java.io.File;

/**
 * 模块2：作业附件存储路径（独立配置，不修改 DefaultInfo）
 */
public class HomeworkFilePath {
    public static final String HOMEWORK_DIR = System.getProperty("user.dir") + File.separator + "upload" + File.separator + "homework";
}
