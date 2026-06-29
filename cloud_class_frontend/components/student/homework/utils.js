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
    if (!content) {
        return '<p>暂无内容</p>';
    }
    return marked(content);
};

export const STATUS_MAP = {
    '0': { text: '未提交', color: 'orange' },
    '1': { text: '已提交', color: 'blue' },
    '2': { text: '已批阅', color: 'green' },
};

export const getStatusTag = (status) => STATUS_MAP[status] || STATUS_MAP['0'];

export const downloadAttachment = (RealAxios, aid, filename) => {
    RealAxios({
        method: 'post',
        url: '/hwStudent/downloadFile',
        data: { aid },
    }).then((response) => {
        if (response.data.result === 1) {
            const byteCharacters = atob(response.data.data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const blob = new Blob([new Uint8Array(byteNumbers)]);
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename || response.data.filename;
            link.click();
        }
    });
};
