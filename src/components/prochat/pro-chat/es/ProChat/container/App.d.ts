import { CSSProperties } from 'react';
import { ChatListItemProps } from "../../ChatList/ChatListItem";
import { ChatInputAreaProps } from '../components/InputArea';
import { ProChatChatReference } from './StoreUpdater';
import { ProChatProps } from './index';
/**
 * 对话组件的属性接口
 */
export interface ConversationProps extends ProChatProps<any> {
    /**
     * 是否显示标题
     */
    showTitle?: boolean;
    /**
     * 样式对象
     */
    style?: CSSProperties;
    /**
     * CSS类名
     */
    className?: string;
    /**
     * 聊天引用
     */
    chatRef?: ProChatChatReference;
    /**
     * 输入区域的渲染函数
     * @param defaultDom 默认的 DOM 元素
     * @param onMessageSend 发送消息的回调函数
     * @param onClearAllHistory 清除所有历史记录的回调函数
     * @returns 渲染的 React 元素
     */
    inputAreaRender?: ChatInputAreaProps['inputAreaRender'];
    /**
     * 输入框的渲染函数
     * @param defaultDom 默认的 DOM 元素
     * @param onMessageSend 发送消息的回调函数
     * @param props 输入框的属性
     */
    inputRender: ChatInputAreaProps['inputRender'];
    /**
     * 聊天发送按钮的渲染配置
     * @param defaultDom 默认的 DOM 元素
     * @param defaultProps 默认的属性
     */
    sendButtonRender?: ChatInputAreaProps['sendButtonRender'];
    /**
     * 滚动时候的监听方法
     */
    onScroll?: (e: Event) => void;
    renderErrorMessages?: ChatListItemProps['renderErrorMessages'];
}
declare const App: import("react").NamedExoticComponent<ConversationProps>;
export default App;
