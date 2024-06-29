import { StateCreator } from 'zustand/vanilla';
import { ChatStore } from "./index";
import { ChatMessage } from "../../types/message";
import { ChatStreamPayload } from "../types/chat";
import { MessageDispatch } from './reducers/message';
interface FetchChatModelOptions {
    signal?: AbortSignal | undefined;
}
/**
 * 聊天操作
 */
export interface ChatAction {
    /**
     * 清除消息
     */
    clearMessage: () => void;
    /**
     * 删除消息
     * @param id - 消息 ID
     */
    deleteMessage: (id: string) => void;
    /**
     * 分发消息
     * @param payload - 消息分发参数
     */
    dispatchMessage: (payload: MessageDispatch) => void;
    /**
     * 生成消息
     * @param messages - 聊天消息数组
     * @param options - 获取 SSE 选项
     */
    generateMessage: (messages: ChatMessage[], assistantMessageId: string) => Promise<{
        isFunctionCall: boolean;
    }>;
    /**
     * 实际获取 AI 响应
     *
     * @param messages - 聊天消息数组
     * @param parentId - 父消息 ID，可选
     */
    realFetchAIResponse: (messages: ChatMessage[], parentId: string) => Promise<void>;
    /**
     * 重新发送消息
     * @param id - 消息 ID
     */
    resendMessage: (id: string) => Promise<void>;
    /**
     * 发送消息
     * @param text - 消息文本
     */
    sendMessage: (text: string) => Promise<void>;
    /**
     * 停止生成消息
     * @returns
     */
    stopGenerateMessage: () => void;
    /**
     * 切换 loading 状态
     * @param loading
     * @param id
     * @param action
     * @returns
     */
    toggleChatLoading: (loading: boolean, id?: string, action?: string) => AbortController | undefined;
    /**
     * 默认的数据请求方法
     * @param params
     * @param options
     * @returns
     */
    defaultModelFetcher: (params: Partial<ChatStreamPayload>, options?: FetchChatModelOptions) => Promise<Response>;
    /**
     * 生成消息 ID
     * @returns  消息 id
     */
    getMessageId: (messages: ChatMessage[], parentId: string) => Promise<string>;
    /**
     * SSE 时候每一条特殊处理转换的方法，处理完后才进行拼接
     * @returns  string
     */
    transformToChatMessage?: (preChatMessage: string, currentContent: string) => Promise<string> | string;
    /**
     * 用于更新一条消息的内容（目前仅用于平滑输出时候，其余情况请直接使用 dispatchMessage ）
     */
    updateMessageContent: (id: string, content: string) => Promise<void>;
    /**
     * 创建一条平滑输出的内容
     */
    createSmoothMessage: (id: string) => {
        startAnimation: (speed?: number) => Promise<void>;
        stopAnimation: () => void;
        outputQueue: string[];
        isAnimationActive: boolean;
    };
    /**
     * 获取当前 loading 生成的消息 id
     * @returns  消息 id ｜ undefined
     */
    getChatLoadingId: () => string | undefined;
}
export declare const chatAction: StateCreator<ChatStore, [['zustand/devtools', never]], [], ChatAction>;
export {};
