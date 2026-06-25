import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    },
    gfm: true,
    breaks: false,
});

export const renderMarkdown = (content) => {
    if (!content) return '<p>暂无内容</p>';
    return marked(content);
};

export const STATUS_MAP = {
    '0': { text: '未提交', color: 'orange' },
    '1': { text: '已提交', color: 'blue' },
    '2': { text: '已批阅', color: 'green' },
};

export const getStatusTag = (status) => STATUS_MAP[status] || STATUS_MAP['0'];

export const FILTER_OPTIONS = [
    { key: 'all', label: '全部' },
    { key: 'submitted', label: '已提交' },
    { key: 'unsubmitted', label: '未提交' },
    { key: 'graded', label: '已批阅' },
    { key: 'ungraded', label: '待批阅' },
];
