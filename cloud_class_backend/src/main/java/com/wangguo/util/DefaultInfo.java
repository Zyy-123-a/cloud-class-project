package com.wangguo.util;

import java.lang.reflect.Field;
import java.util.HashMap;

/**
 * @author 王游
 * @date 2020/6/2
 */
public class DefaultInfo {
    private static final String BASE = System.getProperty("user.dir") + java.io.File.separator + "upload" + java.io.File.separator + "header";
    public static final String TEACHER_IMG = BASE + java.io.File.separator + "teacher";
    public static final String STUDENT_IMG = BASE + java.io.File.separator + "student";

    public static HashMap<String, Object> convertToMap(Object obj)
            throws Exception {

        HashMap<String, Object> map = new HashMap<String, Object>();
        Field[] fields = obj.getClass().getDeclaredFields();
        for (int i = 0, len = fields.length; i < len; i++) {
            String varName = fields[i].getName();
            boolean accessFlag = fields[i].isAccessible();
            fields[i].setAccessible(true);
            Object o = fields[i].get(obj);
            if (o != null)
                map.put(varName, o.toString());

            fields[i].setAccessible(accessFlag);
        }

        return map;
    }
}
