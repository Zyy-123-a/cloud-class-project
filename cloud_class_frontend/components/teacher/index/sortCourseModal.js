import React, { useState, useEffect } from 'react';
import { Modal, message } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const SortCourseModal = ({ visible, onClose, courses, onSave }) => {
    const [courseList, setCourseList] = useState([]);
    const [dragIndex, setDragIndex] = useState(null);
    const [saving, setSaving] = useState(false);

    // 弹框打开时，用当前课程列表初始化
    useEffect(() => {
        if (visible && courses) {
            setCourseList([...courses]);
        }
    }, [visible, courses]);

    const handleDragStart = (e, index) => {
        setDragIndex(index);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.opacity = '0.4';
    };

    const handleDragEnd = (e) => {
        e.currentTarget.style.opacity = '1';
        setDragIndex(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, dropIndex) => {
        e.preventDefault();
        if (dragIndex === null || dragIndex === dropIndex) {
            return;
        }

        const newList = [...courseList];
        const [draggedItem] = newList.splice(dragIndex, 1);
        newList.splice(dropIndex, 0, draggedItem);

        setCourseList(newList);
        setDragIndex(null);
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await onSave(courseList);
            message.success('课程排序成功');
            onClose();
        } catch (e) {
            message.error('排序保存失败');
        } finally {
            setSaving(false);
        }
    };

    return (
        <Modal
            title='课程排序'
            visible={visible}
            onOk={handleSave}
            onCancel={onClose}
            okText='保存'
            cancelText='取消'
            confirmLoading={saving}
            destroyOnClose
        >
            <div style={{ padding: '10px 0' }}>
                <p style={{ color: '#999', marginBottom: 12, fontSize: 13 }}>
                    拖拽课程左侧图标可调整排列顺序
                </p>
                {courseList.map((item, index) => (
                    <div
                        key={item.tcid || item.scid || item.cid}
                        className={`sort-course-item ${dragIndex === index ? 'dragging' : ''}`}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnd={(e) => handleDragEnd(e)}
                        onDragOver={(e) => handleDragOver(e)}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        <MenuOutlined
                            style={{
                                marginRight: 12,
                                color: '#bbb',
                                fontSize: 16,
                                cursor: 'grab'
                            }}
                        />
                        <div
                            style={{
                                width: 32,
                                height: 32,
                                borderRadius: 4,
                                background: 'rgba(50,186,240,1)',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 12,
                                marginRight: 12,
                                flexShrink: 0
                            }}
                        >
                            {index + 1}
                        </div>
                        <span style={{ fontSize: 15, color: '#333' }}>{item.cname}</span>
                    </div>
                ))}
                {courseList.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#999', padding: 30 }}>
                        暂无课程
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default SortCourseModal;
