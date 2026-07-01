package com.wangguo.controller;

import com.wangguo.entity.Student;
import com.wangguo.service.StudentService;
import com.wangguo.util.CreateImageCode;
import com.wangguo.util.DefaultInfo;
import com.wangguo.util.MD5;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.Base64Utils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author 王游
 * @date 2020/6/2
 */
@Controller
@RequestMapping("/student")
@CrossOrigin    //允许跨域
@Slf4j
public class StudentController {
    @Autowired
    private StudentService studentService;

    /**
     * @author 王游
     * @date 2020/6/5
     * @action 上传图片
     * @param request
     * @param file
     * @return
     */
    @PostMapping("/uploadImg")
    @ResponseBody
    public Map<String, String> fileUpdate(HttpServletRequest request, @RequestParam("avatar") MultipartFile file) {
        Map<String, String> result = new HashMap<>();
        String phone = request.getParameter("phone");
        // 表示获得服务器的绝对路径
        String str = DefaultInfo.STUDENT_IMG;
        // 得到上传时的文件名字
        String originalname = file.getOriginalFilename();
        // substring(originalname.lastIndexOf(".")截取图片名后缀
        String newName = originalname.substring(originalname.lastIndexOf("."));
        // 利用UUidUtil工具类生成新的文件名字
        newName = new Date().getTime() + newName;
        File newFile = new File(str, newName);

        // 获得文件目录，判断是否存在
        if (!newFile.getParentFile().exists()) {
            // 如果path路径不存在，创建一个文件夹，存在则使用当前文件夹
            newFile.getParentFile().mkdirs();
        }
        try {
            // 保存文件到指定路径之中
            file.transferTo(newFile);
            Student student = studentService.getInfo(phone);
            student.setSimage(newName);
            studentService.update(student);
            result.put("code", "200");
            result.put("message", "success");
            result.put("path", str + "\\" + newName);
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
            result.put("code", "500");
            result.put("message", e.getMessage());
        }
        log.info("phone:" + phone + "newName:" + newName);
        return result;
    }

    /**
     * @author 王游
     * @date 2020/6/4
     * @action 获取学生信息
     * @param info
     * @return
     * @throws Exception
     */
    @PostMapping("getInfo")
    @ResponseBody
    public Map<String, Object> getInfo(@RequestBody JSONObject info) throws Exception {
        Map<String, Object> result = new HashMap<>();
        result = DefaultInfo.convertToMap(studentService.getInfo(info.getString("phone")));
        return result;
    }

    /**
     * @author 王游
     * @date 2020/6/4
     * @action 更新学生信息
     * @param info
     * @return
     */
    @PostMapping("update")
    @ResponseBody
    public Integer update(@RequestBody JSONObject info) {
        Integer result = null;
        Student student = (Student) JSONObject.toBean(info, Student.class);
        if (student.getSpassword().equals("******")) {
            student.setSpassword(studentService.getInfo(student.getSphone()).getSpassword());
        } else {
            student.setSpassword(MD5.getInstance().getMD5(student.getSpassword()));
        }
        student.setSimage(studentService.getInfo(student.getSphone()).getSimage());
        result = studentService.update(student);
        return result;
    }


    /**
     * @author 王游
     * @date 2020/6/1
     * @action 登录
     * @param info
     * @param request
     * @param response
     * @return
     */
    @PostMapping("login")
    @ResponseBody
    public Map<String, String> login(@RequestBody JSONObject info, HttpServletRequest request, HttpServletResponse response) {
        Map<String, String> result = new HashMap<>();
        log.info("登录用户：" + info.get("sPhone"));
        log.info("接收到的验证码是" + info.getString("code"));

        String phone = info.getString("sPhone");
        String password = MD5.getInstance().getMD5(info.getString("sPassword"));
        String answer = studentService.checkLogin(phone, password);
        log.info("登录结果: " + answer);

        // 登录成功设置Cookie
        if ("ok".equals(answer)) {
            try {
                Student s = studentService.getInfo(phone);
                if (s != null) {
                    // 设置学生ID Cookie
                    Cookie sidCookie = new Cookie("sid", s.getSid());
                    sidCookie.setPath("/");
                    sidCookie.setMaxAge(60 * 60 * 24 * 7); // 7天
                    response.addCookie(sidCookie);
                    log.info("已设置 sid Cookie: " + s.getSid());

                    // 设置身份标识 Cookie
                    Cookie identifyCookie = new Cookie("identify", "student");
                    identifyCookie.setPath("/");
                    identifyCookie.setMaxAge(60 * 60 * 24 * 7);
                    response.addCookie(identifyCookie);
                    log.info("已设置 identify Cookie: student");

                    // 设置手机号 Cookie（方便调试）
                    Cookie phoneCookie = new Cookie("phone", phone);
                    phoneCookie.setPath("/");
                    phoneCookie.setMaxAge(60 * 60 * 24 * 7);
                    response.addCookie(phoneCookie);
                    log.info("已设置 phone Cookie: " + phone);

                    log.info("学生登录成功，sid=" + s.getSid());
                }
            } catch (Exception e) {
                log.error("设置Cookie失败", e);
            }
        }

        result.put("msg", answer);
        return result;
    }

    /**
     * @author 王游
     * @date 2020/5/31
     * @action 注册
     * @param info
     * @param request
     * @return
     */
    @PostMapping("register")
    @ResponseBody
    public Map<String, String> register(@RequestBody JSONObject info, HttpServletRequest request) {
        Map<String, String> result = new HashMap<>();
        log.info("注册用户：" + info.get("sPhone"));
        log.info("接收到的验证码是" + info.getString("code"));
        Student student = new Student();
        student.setSid(new Date().getTime() + "");
        student.setSphone(info.getString("sPhone"));
        student.setSpassword(MD5.getInstance().getMD5(info.getString("sPassword")));
        student.setSnum(info.getString("sNum"));
        student.setSemail(info.getString("sEmail"));
        student.setScollege(info.getString("sCollege"));
        student.setSname(info.getString("sName"));
        String answer = studentService.register(student);
        result.put("msg", answer);
        log.info(answer);
        return result;
    }

    /**
     * @author 王游
     * @date 2020/5/31
     * @action 生成验证码
     * @param request
     * @return
     */
    @GetMapping("getSecurityCode")
    @ResponseBody
    public Map<String, String> getCode(HttpServletRequest request) throws IOException {
        Map<String, String> result = new HashMap<>();
        CreateImageCode createImageCode = new CreateImageCode();
        // 获取验证码
        String securityCode = createImageCode.getCode();
        log.info("生成验证码: " + securityCode);
        // 生成图片
        BufferedImage image = createImageCode.getBuffImg();
        // 进行base64编码
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(image, "png", bos);
        String string = Base64Utils.encodeToString(bos.toByteArray());
        result.put("image", string);
        result.put("code", securityCode);
        return result;
    }

    /**
     * @author 王游
     * @date 2020/6/2
     * @action 返回头像
     * @param info
     * @param request
     * @return
     * @throws IOException
     */
    @PostMapping("getHeaderImg")
    @ResponseBody
    public Map<String, String> getHeaderImg(@RequestBody JSONObject info, HttpServletRequest request) throws IOException {
        Map<String, String> result = new HashMap<>();
        String name = studentService.getImg(info.getString("phone"));
        if (name == null) {
            name = "error.png";
        }
        File imgFile = new File(DefaultInfo.STUDENT_IMG, name);
        log.info(info.getString("phone") + ":" + imgFile.getPath());
        if (imgFile.exists()) {
            BufferedImage image = ImageIO.read(imgFile);
            if (image != null) {
                ByteArrayOutputStream bos = new ByteArrayOutputStream();
                ImageIO.write(image, "png", bos);
                String imgString = Base64Utils.encodeToString(bos.toByteArray());
                result.put("image", imgString);
            }
        }
        if (!result.containsKey("image")) {
            result.put("image", "");
        }
        result.put("type", "png");
        return result;
    }
}