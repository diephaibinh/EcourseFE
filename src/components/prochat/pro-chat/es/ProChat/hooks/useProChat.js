import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useMemo } from 'react';
import { useStoreApi } from "../store";
import { chatSelectors } from "../store/selectors";
import { useRefFunction } from "./useRefFunction";
export var useProChat = function useProChat() {
  var storeApi = useStoreApi();
  var _storeApi$getState = storeApi.getState(),
    resendMessage = _storeApi$getState.resendMessage,
    sendMessage = _storeApi$getState.sendMessage,
    stopGenerateMessage = _storeApi$getState.stopGenerateMessage,
    deleteMessage = _storeApi$getState.deleteMessage,
    clearMessage = _storeApi$getState.clearMessage,
    dispatchMessage = _storeApi$getState.dispatchMessage,
    getChatLoadingId = _storeApi$getState.getChatLoadingId;
  var getChats = useRefFunction(function () {
    return storeApi.getState().chats;
  });
  var pushChat = useRefFunction(function (chat) {
    return dispatchMessage(_objectSpread(_objectSpread({}, chat), {}, {
      type: 'addMessage',
      message: chat === null || chat === void 0 ? void 0 : chat.content
    }));
  });
  var getChatMessages = useRefFunction(function () {
    return chatSelectors.currentChats(storeApi.getState());
  });
  var setMessageContent = useRefFunction(function (id, content) {
    dispatchMessage({
      type: 'updateMessage',
      id: id,
      key: 'content',
      value: content
    });
  });
  var setMessageValue = useRefFunction(function (id, key, value) {
    dispatchMessage({
      type: 'updateMessage',
      id: id,
      key: key,
      value: value
    });
  });
  return useMemo(function () {
    return {
      getChats: getChats,
      pushChat: pushChat,
      getChatMessages: getChatMessages,
      resendMessage: resendMessage,
      sendMessage: sendMessage,
      getChatLoadingId: getChatLoadingId,
      stopGenerateMessage: stopGenerateMessage,
      deleteMessage: deleteMessage,
      clearMessage: clearMessage,
      setMessageContent: setMessageContent,
      setMessageValue: setMessageValue
    };
  }, []);
};