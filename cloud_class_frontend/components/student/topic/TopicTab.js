import {Tabs} from "antd";
export default function TopicTab({active, onChange}){
    const tabs = [
        {key:"all", label:"全部"},
        {key:"essence", label:"精华"}
    ]
    return <Tabs activeKey={active} onChange={onChange} items={tabs} style={{marginBottom:20}}/>
}