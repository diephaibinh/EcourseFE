import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { merge, template } from 'lodash-es';
import { LOADING_FLAT } from "../const/message";
import { fetchSSE } from "../utils/fetch";
import { isFunctionMessage } from "../utils/message";
import { setNamespace } from "../utils/storeDebug";
import { nanoid } from "../utils/uuid";
import { initialModelConfig } from "./initialState";
import { getSlicedMessagesWithConfig } from "../utils/message";
import { messagesReducer } from "./reducers/message";
import { chatSelectors } from "./selectors";
var t = setNamespace('chat/message');

/**
 * 聊天操作
 */

export var chatAction = function chatAction(set, get) {
  return {
    clearMessage: function () {
      var _clearMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _get, dispatchMessage, onResetMessage;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _get = get(), dispatchMessage = _get.dispatchMessage, onResetMessage = _get.onResetMessage; // 重置消息，清空聊天记录，等待 onResetMessage 完成后再清空
              if (!onResetMessage) {
                _context.next = 4;
                break;
              }
              _context.next = 4;
              return onResetMessage();
            case 4:
              dispatchMessage({
                type: 'resetMessages'
              });

              // TODO: need callback after reset
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function clearMessage() {
        return _clearMessage.apply(this, arguments);
      }
      return clearMessage;
    }(),
    deleteMessage: function deleteMessage(id) {
      get().dispatchMessage({
        id: id,
        type: 'deleteMessage'
      });
    },
    updateMessageContent: function () {
      var _updateMessageContent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, content) {
        var _get2, dispatchMessage, updateMessageContent;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _get2 = get(), dispatchMessage = _get2.dispatchMessage, updateMessageContent = _get2.updateMessageContent;
              dispatchMessage({
                id: id,
                key: 'content',
                type: 'updateMessage',
                value: content
              });
              updateMessageContent(id, content);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function updateMessageContent(_x, _x2) {
        return _updateMessageContent.apply(this, arguments);
      }
      return updateMessageContent;
    }(),
    dispatchMessage: function dispatchMessage(payload) {
      var _get3 = get(),
        chats = _get3.chats,
        onChatsChange = _get3.onChatsChange;
      var nextChats = messagesReducer(chats, payload);
      set({
        chats: nextChats
      }, false, t('dispatchMessage'));
      onChatsChange === null || onChatsChange === void 0 || onChatsChange(nextChats);
    },
    generateMessage: function () {
      var _generateMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(messages, assistantId) {
        var _get4, dispatchMessage, toggleChatLoading, config, defaultModelFetcher, createSmoothMessage, transformToChatMessage, updateMessageContent, abortController, slicedMessages, compilerMessages, postMessages, fetcher, output, isFunctionCall, _createSmoothMessage, startAnimation, stopAnimation, outputQueue, isAnimationActive, timeoutId, checkAndToggleChatLoading;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _get4 = get(), dispatchMessage = _get4.dispatchMessage, toggleChatLoading = _get4.toggleChatLoading, config = _get4.config, defaultModelFetcher = _get4.defaultModelFetcher, createSmoothMessage = _get4.createSmoothMessage, transformToChatMessage = _get4.transformToChatMessage, updateMessageContent = _get4.updateMessageContent;
              abortController = toggleChatLoading(true, assistantId, t('generateMessage(start)', {
                assistantId: assistantId,
                messages: messages
              })); // ========================== //
              //   对 messages 做统一预处理    //
              // ========================== //
              // 1. 按参数设定截断长度
              slicedMessages = getSlicedMessagesWithConfig(messages, config); // 2. 替换 inputMessage 模板
              compilerMessages = function compilerMessages(slicedMessages) {
                var compiler = template(config.inputTemplate, {
                  interpolate: /{{([\S\s]+?)}}/g
                });
                return slicedMessages.map(function (m) {
                  if (m.role === 'user') {
                    try {
                      return _objectSpread(_objectSpread({}, m), {}, {
                        content: compiler({
                          text: m.content
                        })
                      });
                    } catch (error) {
                      console.error(error);
                      return m;
                    }
                  }
                  return m;
                });
              };
              postMessages = !config.inputTemplate ? slicedMessages : compilerMessages(slicedMessages); // 3. 添加 systemRole
              if (config.systemRole) {
                postMessages.unshift({
                  content: config.systemRole,
                  role: 'system'
                });
              }
              fetcher = function fetcher() {
                return defaultModelFetcher(_objectSpread({
                  messages: postMessages,
                  model: config.model
                }, config.params), {
                  signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal
                });
              };
              output = '';
              isFunctionCall = false;
              _createSmoothMessage = createSmoothMessage(assistantId), startAnimation = _createSmoothMessage.startAnimation, stopAnimation = _createSmoothMessage.stopAnimation, outputQueue = _createSmoothMessage.outputQueue, isAnimationActive = _createSmoothMessage.isAnimationActive;
              _context6.next = 12;
              return fetchSSE(fetcher, {
                onErrorHandle: function onErrorHandle(error) {
                  dispatchMessage({
                    id: assistantId,
                    key: 'error',
                    type: 'updateMessage',
                    value: error
                  });
                },
                onAbort: function () {
                  var _onAbort = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          stopAnimation();
                        case 1:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3);
                  }));
                  function onAbort() {
                    return _onAbort.apply(this, arguments);
                  }
                  return onAbort;
                }(),
                onFinish: function () {
                  var _onFinish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(content) {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          stopAnimation();
                          if (!(outputQueue.length > 0 && !isFunctionCall)) {
                            _context4.next = 4;
                            break;
                          }
                          _context4.next = 4;
                          return startAnimation(15);
                        case 4:
                          _context4.next = 6;
                          return updateMessageContent(assistantId, content);
                        case 6:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  function onFinish(_x5) {
                    return _onFinish.apply(this, arguments);
                  }
                  return onFinish;
                }(),
                onMessageHandle: function () {
                  var _onMessageHandle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(text) {
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          output += text;
                          if (!isAnimationActive && !isFunctionCall) startAnimation();
                          if (!(abortController !== null && abortController !== void 0 && abortController.signal.aborted)) {
                            _context5.next = 6;
                            break;
                          }
                          return _context5.abrupt("return");
                        case 6:
                          _context5.t0 = outputQueue;
                          if (!transformToChatMessage) {
                            _context5.next = 13;
                            break;
                          }
                          _context5.next = 10;
                          return transformToChatMessage(text, output);
                        case 10:
                          _context5.t1 = _context5.sent;
                          _context5.next = 14;
                          break;
                        case 13:
                          _context5.t1 = text;
                        case 14:
                          _context5.t2 = _context5.t1;
                          _context5.t0.push.call(_context5.t0, _context5.t2);
                        case 16:
                          // TODO: need a function call judge callback
                          // 如果是 function call
                          if (isFunctionMessage(output)) {
                            isFunctionCall = true;
                          }
                        case 17:
                        case "end":
                          return _context5.stop();
                      }
                    }, _callee5);
                  }));
                  function onMessageHandle(_x6) {
                    return _onMessageHandle.apply(this, arguments);
                  }
                  return onMessageHandle;
                }()
              });
            case 12:
              // 用于存储轮询队列的计时器id
              checkAndToggleChatLoading = function checkAndToggleChatLoading() {
                clearTimeout(timeoutId); // 清除任何现有的计时器
                // 等待队列内容输出完毕
                if (outputQueue === undefined || outputQueue.length === 0 || outputQueue.toString() === '') {
                  // 当队列为空时
                  toggleChatLoading(false, undefined, t('generateMessage(end)'));
                  clearTimeout(timeoutId);
                } else {
                  // 如果队列不为空，则设置一个延迟或者使用某种形式的轮询来再次检查队列
                  timeoutId = setTimeout(checkAndToggleChatLoading, 30); // CHECK_INTERVAL 是毫秒数，代表检查间隔时间
                }
              };
              checkAndToggleChatLoading();
              return _context6.abrupt("return", {
                isFunctionCall: isFunctionCall
              });
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function generateMessage(_x3, _x4) {
        return _generateMessage.apply(this, arguments);
      }
      return generateMessage;
    }(),
    realFetchAIResponse: function () {
      var _realFetchAIResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(messages, userMessageId) {
        var _get5, dispatchMessage, generateMessage, config, getMessageId, mid;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _get5 = get(), dispatchMessage = _get5.dispatchMessage, generateMessage = _get5.generateMessage, config = _get5.config, getMessageId = _get5.getMessageId; // 添加一个空的信息用于放置 ai 响应，注意顺序不能反
              // 因为如果顺序反了，messages 中将包含新增的 ai message
              _context7.next = 3;
              return getMessageId(messages, userMessageId);
            case 3:
              mid = _context7.sent;
              dispatchMessage({
                id: mid,
                message: LOADING_FLAT,
                parentId: userMessageId,
                role: 'assistant',
                type: 'addMessage'
              });

              // TODO: need a callback before generate message

              // 为模型添加 fromModel 的额外信息
              // TODO: 此处需要model 信息
              dispatchMessage({
                id: mid,
                key: 'fromModel',
                type: 'updateMessageExtra',
                value: config.model
              });

              // 生成 ai message
              _context7.next = 8;
              return generateMessage(messages, mid);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function realFetchAIResponse(_x7, _x8) {
        return _realFetchAIResponse.apply(this, arguments);
      }
      return realFetchAIResponse;
    }(),
    resendMessage: function () {
      var _resendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(messageId) {
        var chats, currentIndex, currentMessage, contextMessages, userId, userIndex, _get6, realFetchAIResponse, latestMsg;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // 1. 构造所有相关的历史记录
              chats = chatSelectors.currentChats(get());
              currentIndex = chats.findIndex(function (c) {
                return c.id === messageId;
              });
              if (!(currentIndex < 0)) {
                _context8.next = 4;
                break;
              }
              return _context8.abrupt("return");
            case 4:
              currentMessage = chats[currentIndex];
              contextMessages = [];
              _context8.t0 = currentMessage.role;
              _context8.next = _context8.t0 === 'function' ? 9 : _context8.t0 === 'user' ? 9 : _context8.t0 === 'assistant' ? 11 : 15;
              break;
            case 9:
              contextMessages = chats.slice(0, currentIndex + 1);
              return _context8.abrupt("break", 15);
            case 11:
              // 消息是 AI 发出的因此需要找到它的 user 消息
              userId = currentMessage.parentId;
              userIndex = chats.findIndex(function (c) {
                return c.id === userId;
              }); // 如果消息没有 parentId，那么同 user/function 模式
              contextMessages = chats.slice(0, userIndex < 0 ? currentIndex + 1 : userIndex + 1);
              return _context8.abrupt("break", 15);
            case 15:
              if (!(contextMessages.length <= 0)) {
                _context8.next = 17;
                break;
              }
              return _context8.abrupt("return");
            case 17:
              _get6 = get(), realFetchAIResponse = _get6.realFetchAIResponse;
              latestMsg = contextMessages.filter(function (s) {
                return s.role === 'user';
              }).at(-1);
              if (latestMsg) {
                _context8.next = 21;
                break;
              }
              return _context8.abrupt("return");
            case 21:
              _context8.next = 23;
              return realFetchAIResponse(contextMessages, latestMsg.id);
            case 23:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function resendMessage(_x9) {
        return _resendMessage.apply(this, arguments);
      }
      return resendMessage;
    }(),
    sendMessage: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(message) {
        var _get7, dispatchMessage, realFetchAIResponse, userId, messages;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _get7 = get(), dispatchMessage = _get7.dispatchMessage, realFetchAIResponse = _get7.realFetchAIResponse;
              if (message) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");
            case 3:
              userId = nanoid();
              dispatchMessage({
                id: userId,
                message: message,
                role: 'user',
                type: 'addMessage'
              });

              // Todo: need a callback before send message

              // Get the current messages to generate AI response
              messages = chatSelectors.currentChats(get());
              _context9.next = 8;
              return realFetchAIResponse(messages, userId);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function sendMessage(_x10) {
        return _sendMessage.apply(this, arguments);
      }
      return sendMessage;
    }(),
    stopGenerateMessage: function stopGenerateMessage() {
      var _get8 = get(),
        abortController = _get8.abortController,
        toggleChatLoading = _get8.toggleChatLoading,
        chatLoadingId = _get8.chatLoadingId,
        chats = _get8.chats,
        dispatchMessage = _get8.dispatchMessage;
      // 如果当前 最后一条为 chatLoadingId 停止前需要清空
      if (chats && chats.length > 0) {
        var lastChat = chats[chats.length - 1];
        if (lastChat.content === LOADING_FLAT) {
          dispatchMessage({
            id: chatLoadingId,
            key: 'content',
            type: 'updateMessage',
            value: ''
          });
        }
      }
      if (!abortController) return;
      abortController.abort();
      toggleChatLoading(false);
    },
    toggleChatLoading: function toggleChatLoading(loading, id, action) {
      if (loading) {
        var _abortController = new AbortController();
        set({
          abortController: _abortController,
          chatLoadingId: id
        }, false, action);
        return _abortController;
      } else {
        set({
          abortController: undefined,
          chatLoadingId: undefined
        }, false, action);
      }
    },
    defaultModelFetcher: function defaultModelFetcher(params, options) {
      var _get9 = get(),
        request = _get9.request;
      var payload = merge(_objectSpread({
        model: initialModelConfig.model,
        stream: true
      }, initialModelConfig.params), params);
      if (typeof request === 'function') return request(payload.messages, payload, options === null || options === void 0 ? void 0 : options.signal);
      var url = typeof request === 'string' ? request : '/api/openai/chat';
      return fetch(url, {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        signal: options === null || options === void 0 ? void 0 : options.signal
      });
    },
    getMessageId: function () {
      var _getMessageId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(messages, parentId) {
        var _get10, genMessageId;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _get10 = get(), genMessageId = _get10.genMessageId;
              if (!(typeof genMessageId === 'function')) {
                _context10.next = 3;
                break;
              }
              return _context10.abrupt("return", genMessageId(messages, parentId));
            case 3:
              return _context10.abrupt("return", nanoid());
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function getMessageId(_x11, _x12) {
        return _getMessageId.apply(this, arguments);
      }
      return getMessageId;
    }(),
    createSmoothMessage: function createSmoothMessage(id) {
      var _get11 = get(),
        dispatchMessage = _get11.dispatchMessage;
      var buffer = '';
      // why use queue: https://shareg.pt/GLBrjpK
      var outputQueue = [];

      // eslint-disable-next-line no-undef
      var animationTimeoutId = null;
      var isAnimationActive = false;

      // when you need to stop the animation, call this function
      var stopAnimation = function stopAnimation() {
        isAnimationActive = false;
        if (animationTimeoutId !== null) {
          clearTimeout(animationTimeoutId);
          animationTimeoutId = null;
        }
      };

      // define startAnimation function to display the text in buffer smooth
      // when you need to start the animation, call this function
      var startAnimation = function startAnimation() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        return new Promise(function (resolve) {
          if (isAnimationActive) {
            resolve();
            return;
          }
          isAnimationActive = true;
          var updateText = function updateText() {
            // 如果动画已经不再激活，则停止更新文本
            if (!isAnimationActive) {
              clearTimeout(animationTimeoutId);
              animationTimeoutId = null;
              resolve();
            }

            // 如果还有文本没有显示
            // 检查队列中是否有字符待显示
            if (outputQueue.length > 0) {
              // 从队列中获取前两个字符（如果存在）
              var charsToAdd = outputQueue.splice(0, speed).join('');
              buffer += charsToAdd;

              // 更新消息内容，这里可能需要结合实际情况调整
              dispatchMessage({
                id: id,
                key: 'content',
                type: 'updateMessage',
                value: buffer
              });

              // 设置下一个字符的延迟
              animationTimeoutId = setTimeout(updateText, 16); // 16 毫秒的延迟模拟打字机效果
            } else {
              // 当所有字符都显示完毕时，清除动画状态
              isAnimationActive = false;
              animationTimeoutId = null;
              resolve();
            }
          };
          updateText();
        });
      };
      return {
        startAnimation: startAnimation,
        stopAnimation: stopAnimation,
        outputQueue: outputQueue,
        isAnimationActive: isAnimationActive
      };
    },
    getChatLoadingId: function getChatLoadingId() {
      var _get12 = get(),
        chatLoadingId = _get12.chatLoadingId;
      return chatLoadingId;
    }
  };
};