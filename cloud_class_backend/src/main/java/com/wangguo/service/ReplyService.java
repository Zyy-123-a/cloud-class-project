package com.wangguo.service;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wangguo.entity.Reply;
import java.util.List;

public interface ReplyService extends IService<Reply> {
    void addReply(Reply reply);
    List<Reply> listByTid(Long tid);
    void deleteReply(Long rid);
}