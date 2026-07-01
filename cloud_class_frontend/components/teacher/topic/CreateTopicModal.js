import {Modal, Input, Button, Checkbox, message, Select} from "antd";
import {useState, useEffect} from "react";
import {RealAxios} from "../../config";

const { TextArea } = Input;
const { Option } = Select;

export default function CreateTopicModal({visible, onClose, cid, uid, role, onCreate, editData = null}){
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isAnonym, setIsAnonym] = useState(false)
    const [category, setCategory] = useState("general")
    const [loading, setLoading] = useState(false)
    const isEdit = !!editData

    useEffect(() => {
        if (editData) {
            setTitle(editData.title || "")
            setContent(editData.content || "")
            setIsAnonym(editData.isAnonym === 1)
            setCategory(editData.category || "general")
        } else {
            setTitle("")
            setContent("")
            setIsAnonym(false)
            setCategory("general")
        }
    }, [editData])

    const handleClose = () => {
        if (!isEdit) {
            setTitle("")
            setContent("")
            setIsAnonym(false)
            setCategory("general")
        }
        if (onClose) onClose()
    }

    const submit = async ()=>{
        if(!title || !title.trim()){
            message.warning("请输入标题");
            return;
        }
        if(!content || !content.trim()){
            message.warning("请输入内容");
            return;
        }
        if(!cid){
            message.error("课程ID不能为空，请重新进入页面");
            return;
        }
        if(!uid){
            message.error("用户ID不能为空，请重新登录");
            return;
        }

        setLoading(true);
        try {
            const params = {
                cid: Number(cid),
                uid: String(uid),
                role: role || "student",
                title: title.trim(),
                content: content.trim(),
                isAnonym: isAnonym ? 1 : 0,
                authorName: uid
            };

            if (isEdit) {
                params.tid = editData.tid;
            }

            const url = isEdit ? "/topic/update" : "/topic/create";
            const res = await RealAxios.post(url, params);

            if(res.data === "success"){
                message.success(isEdit ? "话题更新成功！" : "话题创建成功！");
                setTitle("");
                setContent("");
                setIsAnonym(false);
                setCategory("general");
                if(onCreate) onCreate();
                if(onClose) onClose();
            } else {
                message.error("操作失败: " + (res.data || "未知错误"));
            }
        } catch (err) {
            console.error('创建话题失败:', err);
            message.error('操作失败，请检查网络连接');
        } finally {
            setLoading(false);
        }
    }

    // 调试日志
    console.log('CreateTopicModal 渲染, visible:', visible, 'isEdit:', isEdit);

    return (
        <Modal
            title={isEdit ? "编辑话题" : "发起新话题"}
            visible={visible}
            onCancel={handleClose}
            footer={null}
            destroyOnClose
            width={600}
            maskClosable={false}
        >
            <div style={{marginBottom:12}}>
                <p style={{fontWeight:500, marginBottom:4}}>标题 <span style={{color:"#f5222d"}}>*</span></p>
                <Input
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    placeholder="请输入标题（最多100字）"
                    maxLength={100}
                />
            </div>
            <div style={{marginBottom:12}}>
                <p style={{fontWeight:500, marginBottom:4}}>分类</p>
                <Select
                    value={category}
                    onChange={setCategory}
                    style={{width: '100%'}}
                >
                    <Option value="general">综合讨论</Option>
                    <Option value="question">问题求助</Option>
                    <Option value="share">经验分享</Option>
                    <Option value="notice">课程通知</Option>
                </Select>
            </div>
            <div style={{marginBottom:12}}>
                <p style={{fontWeight:500, marginBottom:4}}>内容 <span style={{color:"#f5222d"}}>*</span></p>
                <TextArea
                    rows={6}
                    value={content}
                    onChange={e=>setContent(e.target.value)}
                    placeholder="输入话题内容（最多2000字）"
                    maxLength={2000}
                />
            </div>
            <Checkbox
                checked={isAnonym}
                onChange={e=>setIsAnonym(e.target.checked)}
            >
                匿名发布
            </Checkbox>
            <div style={{textAlign:"right", marginTop:16}}>
                <Button onClick={handleClose}>取消</Button>
                <Button
                    type="primary"
                    onClick={submit}
                    loading={loading}
                    disabled={!title || !title.trim() || !content || !content.trim()}
                    style={{marginLeft:8}}
                >
                    {isEdit ? "更新" : "提交"}
                </Button>
            </div>
        </Modal>
    )
}