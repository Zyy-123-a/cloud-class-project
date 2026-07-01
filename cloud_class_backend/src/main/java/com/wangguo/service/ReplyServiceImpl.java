package com.wangguo.service.impl;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.wangguo.entity.Reply;
import com.wangguo.mapper.ReplyMapper;
import com.wangguo.service.ReplyService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;

@Service
public class ReplyServiceImpl extends ServiceImpl<ReplyMapper, Reply> implements ReplyService {
    @Resource
    private ReplyMapper replyMapper;

    @Override
    public void addReply(Reply reply) {
        save(reply);
    }

    @Override
    public List<Reply> listByTid(Long tid) {
        LambdaQueryWrapper<Reply> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(Reply::getTid, tid).orderByAsc(Reply::getCreateTime);
        return list(wrapper);
    }

    @Override
    public void deleteReply(Long rid) {
        removeById(rid);
    }
}