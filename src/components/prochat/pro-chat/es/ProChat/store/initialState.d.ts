import { ModelConfig } from "../types/config";
import { MetaData } from "../types/meta";
import { ChatMessage } from "../../types/message";
import { AutoCompleteProps } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { TextAreaRef } from 'antd/es/input/TextArea';
import { ReactNode } from 'react';
import { FlexBasicProps } from 'react-layout-kit/lib/FlexBasic';
import { Locale } from '../../locale';
import { ProChatChatReference } from '../container/StoreUpdater';
export type ChatRequest = (messages: ChatMessage[], config: ModelConfig, signal: AbortSignal | undefined) => Promise<Response>;
export interface ChatPropsState<T extends Record<string, any> = Record<string, any>> {
    /**
     * 语言模型角色设定
     */
    config: ModelConfig;
    /**
     * 聊天记录
     */
    chats: ChatMessage<T>[];
    onChatsChange?: (chats: ChatMessage<T>[]) => void;
    chatRef?: ProChatChatReference;
    displayMode: 'chat' | 'docs';
    userMeta: MetaData;
    assistantMeta: MetaData;
    /**
     * SSE 时候每一条特殊处理转换的方法，处理完后才进行拼接
     * @returns  string
     */
    transformToChatMessage?: (preChatMessage: string, currentContent: string) => Promise<string> | string;
    /**
     * 帮助消息
     */
    helloMessage?: ReactNode;
    request?: string | ChatRequest;
    /**
     * 生成消息 id
     * @param message
     * @returns message id
     */
    genMessageId?: (message: ChatMessage<T>[], parentId: string) => Promise<string>;
    /**
     * 重置消息
     * @returns
     */
    onResetMessage?: () => Promise<void>;
    /**
     * 获取自动完成列表的  request
     * @param value
     * @returns
     */
    autocompleteRequest?: (value: string) => Promise<{
        value: string;
        label?: string;
    }[]>;
    /**
     * 输入框的 placeholder
     */
    placeholder?: string;
    /**
     * 国际化
     */
    locale?: Locale;
    /**
     * 输入框的 props,优先级最高
     */
    inputAreaProps?: TextAreaProps & React.RefAttributes<TextAreaRef> & {
        autoCompleteProps?: AutoCompleteProps;
        value?: string;
        onChange?: (value: string) => void;
    };
    /**
     * 信息框额外渲染
     */
    messageItemExtraRender?: (message: ChatMessage<T>, type: 'assistant' | 'user') => React.ReactNode;
    /**
     * 信息框顶部的操作列表
     */
    actions?: {
        /**
         * 控制 input 顶部的操作区域的 flex 布局
         */
        flexConfig?: FlexBasicProps;
        /**
         * 控制 input 顶部的操作区域的操作按钮
         * @param defaultDoms
         * @returns
         */
        render?: (defaultDoms: JSX.Element[]) => JSX.Element[];
    };
}
export interface ChatState extends ChatPropsState {
    init?: boolean;
    abortController?: AbortController;
    chatLoadingId?: string;
}
export declare const initialModelConfig: ModelConfig;
export declare const initialState: ChatState;
