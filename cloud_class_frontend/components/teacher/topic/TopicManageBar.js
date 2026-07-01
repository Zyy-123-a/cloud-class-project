import {Row, Space, Switch, Button, message, Modal} from "antd";
import {DeleteOutlined, DownloadOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import {useState} from "react";
import {RealAxios} from "../../config";

const { confirm } = Modal;

export default function TopicManageBar({
                                           disableStudentTalk,
                                           toggleDisableTalk,
                                           cid,
                                           selectedRowKeys = [],
                                           onBatchDelete,
                                           hasSelected = false,
                                           batchLoading = false
                                       }){
    const downloadAll = async () => {
        try {
            const res = await RealAxios.post("/topic/downloadAll", {cid}, {responseType: 'blob'})
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', `话题列表_${cid}_${new Date().toLocaleDateString()}.txt`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            message.success("下载成功")
        } catch (err) {
            console.error("下载失败", err)
            message.error("下载失败")
        }
    }

    const handleBatchDelete = () => {
        confirm({
            title: '确认批量删除',
            icon: <ExclamationCircleOutlined />,
            content: (
                <div>
                    <p>确定要删除选中的 <strong>{selectedRowKeys.length}</strong> 个话题吗？</p>
                    <p style={{color: '#f5222d', fontSize: 12}}>此操作不可恢复！</p>
                </div>
            ),
            okText: '确认删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: async () => {
                if (onBatchDelete) onBatchDelete();
            }
        });
    };

    return (
        <Row justify="space-between" align="middle" style={{marginBottom: 16}}>
            <Space align="center" wrap>
                <Space>
                    <span>禁止学生讨论：</span>
                    <Switch
                        checked={disableStudentTalk === 1}
                        onChange={toggleDisableTalk}
                    />
                </Space>
                <Button
                    icon={<DownloadOutlined />}
                    onClick={downloadAll}
                >
                    下载全部话题
                </Button>
                {hasSelected && (
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={handleBatchDelete}
                        loading={batchLoading}
                    >
                        批量删除 ({selectedRowKeys.length})
                    </Button>
                )}
            </Space>
        </Row>
    )
}