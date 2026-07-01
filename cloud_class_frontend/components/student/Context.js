import React,{createContext} from 'react';

export const PageContext = createContext("index");
export const CoursesContext = createContext({});
// 新增话题禁用状态上下文
export const TopicDisableContext = createContext();