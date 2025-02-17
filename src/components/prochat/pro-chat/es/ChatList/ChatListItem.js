import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["renderMessagesExtra", "showTitle", "onActionsClick", "onMessageChange", "originData", "type", "text", "renderMessages", "renderErrorMessages", "renderActions", "loading", "groupNav", "renderItems", "chatItemRenderConfig", "chatItemClassName", "markdownProps"];
import { App } from 'antd';
import copy from 'copy-to-clipboard';
import { useMemo, useState } from 'react';
import ChatItem from "../ChatItem";
import { useRefFunction } from "../ProChat/hooks/useRefFunction";
import ActionsBar from "./ActionsBar";

/**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */

/**
 * 聊天列表项的属性。
 * @template T 聊天列表项的额外数据类型。
 */
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 聊天列表项组件。
 * @param props 组件属性。
 * @returns 聊天列表项组件。
 */
var ChatListItem = function ChatListItem(props) {
  var renderMessagesExtra = props.renderMessagesExtra,
    showTitle = props.showTitle,
    onActionsClick = props.onActionsClick,
    onMessageChange = props.onMessageChange,
    originData = props.originData,
    type = props.type,
    text = props.text,
    renderMessages = props.renderMessages,
    renderErrorMessages = props.renderErrorMessages,
    renderActions = props.renderActions,
    loading = props.loading,
    groupNav = props.groupNav,
    renderItems = props.renderItems,
    chatItemRenderConfig = props.chatItemRenderConfig,
    chatItemClassName = props.chatItemClassName,
    markdownProps = props.markdownProps,
    item = _objectWithoutProperties(props, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    editing = _useState2[0],
    setEditing = _useState2[1];
  var _App$useApp = App.useApp(),
    message = _App$useApp.message;

  /**
   * 渲染列表项的函数。
   * @returns 渲染列表项的函数。
   */
  var RenderItem = useMemo(function () {
    if (!renderItems || !(item !== null && item !== void 0 && item.role)) return;
    var renderFunction;
    if (renderItems !== null && renderItems !== void 0 && renderItems[item.role]) renderFunction = renderItems[item.role];
    if (!renderFunction && renderItems !== null && renderItems !== void 0 && renderItems['default']) renderFunction = renderItems['default'];
    if (!renderFunction) return;
    return renderFunction;
  }, [renderItems === null || renderItems === void 0 ? void 0 : renderItems[item.role]]);

  /**
   * 渲染消息的函数。
   * @param editableContent 可编辑的内容。
   * @param data 聊天消息的数据。
   * @returns 渲染消息的组件。
   */
  var RenderMessage = useRefFunction(function (_ref) {
    var editableContent = _ref.editableContent,
      data = _ref.data;
    if (!renderMessages || !(item !== null && item !== void 0 && item.role)) return;
    var RenderFunction;
    if (renderMessages !== null && renderMessages !== void 0 && renderMessages[item.role]) RenderFunction = renderMessages[item.role];
    if (!RenderFunction && renderMessages !== null && renderMessages !== void 0 && renderMessages['default']) RenderFunction = renderMessages['default'];
    if (!RenderFunction) return;
    return /*#__PURE__*/_jsx(RenderFunction, _objectSpread(_objectSpread({}, data), {}, {
      editableContent: editableContent
    }));
  });

  /**
   * 渲染消息额外内容的函数。
   * @param data 聊天消息的数据。
   * @returns 渲染消息额外内容的组件。
   */
  var MessageExtra = useRefFunction(function (_ref2) {
    var data = _ref2.data;
    if (!renderMessagesExtra || !(item !== null && item !== void 0 && item.role)) return;
    var RenderFunction;
    if (renderMessagesExtra !== null && renderMessagesExtra !== void 0 && renderMessagesExtra[item.role]) RenderFunction = renderMessagesExtra[item.role];
    if (renderMessagesExtra !== null && renderMessagesExtra !== void 0 && renderMessagesExtra['default']) RenderFunction = renderMessagesExtra['default'];
    if (!RenderFunction && !RenderFunction) return;
    return /*#__PURE__*/_jsx(RenderFunction, _objectSpread({}, data));
  });

  /**
   * 渲染操作按钮的函数。
   * @param data 聊天消息的数据。
   * @returns 渲染操作按钮的组件。
   */
  var Actions = useRefFunction(function (_ref3) {
    var data = _ref3.data;
    if (!renderActions || !(item !== null && item !== void 0 && item.role)) return;
    var RenderFunction;
    if (renderActions !== null && renderActions !== void 0 && renderActions[item.role]) RenderFunction = renderActions[item.role];
    if (renderActions !== null && renderActions !== void 0 && renderActions['default']) RenderFunction = renderActions['default'];
    if (!RenderFunction) RenderFunction = ActionsBar;
    var handleActionClick = function handleActionClick(action, data) {
      switch (action.key) {
        case 'copy':
          {
            copy(data.content);
            message.success((text === null || text === void 0 ? void 0 : text.copySuccess) || 'Copy Success');
            break;
          }
        case 'edit':
          {
            setEditing(true);
          }
      }
      onActionsClick === null || onActionsClick === void 0 || onActionsClick(action, data);
    };
    return /*#__PURE__*/_jsx(RenderFunction, _objectSpread(_objectSpread({}, data), {}, {
      onActionClick: function onActionClick(actionKey) {
        return handleActionClick === null || handleActionClick === void 0 ? void 0 : handleActionClick(actionKey, data);
      },
      text: text
    }));
  });

  /**
   * 错误信息。
   * @returns 错误信息对象。
   */
  var error = useMemo(function () {
    if (!item.error) return;
    return item.error;
  }, [item.error]);

  /**
   * @description memoize the chat item
   */
  var memoItem = useMemo(function () {
    var dom = /*#__PURE__*/_jsx(ChatItem, {
      className: chatItemClassName,
      "data-id": item.id,
      actions: /*#__PURE__*/_jsx(Actions, {
        data: item
      }),
      avatar: item.meta,
      avatarAddon: groupNav,
      editing: editing,
      originData: originData,
      error: error,
      renderErrorMessages: renderErrorMessages,
      loading: loading,
      message: item.content,
      messageExtra: /*#__PURE__*/_jsx(MessageExtra, {
        data: item
      }),
      onChange: function onChange(value) {
        return onMessageChange === null || onMessageChange === void 0 ? void 0 : onMessageChange(item.id, value);
      },
      onDoubleClick: function onDoubleClick(e) {
        if (item.id === 'default' || item.error) return;
        if (item.role && ['assistant', 'user'].includes(item.role) && e.altKey) {
          setEditing(true);
        }
      },
      onEditingChange: setEditing,
      placement: type === 'chat' ? item.role === 'user' ? 'right' : 'left' : 'left',
      primary: item.role === 'user',
      renderMessage: function renderMessage(editableContent) {
        return /*#__PURE__*/_jsx(RenderMessage, {
          data: item,
          editableContent: editableContent
        });
      },
      showTitle: showTitle,
      text: text,
      time: item.updateAt || item.createAt,
      type: type === 'chat' ? 'block' : 'pure',
      chatItemRenderConfig: chatItemRenderConfig,
      markdownProps: markdownProps
    });
    return dom;
  }, [props.content, props.loading, props.id, item.meta, item.error, item.updateAt || item.createAt, editing]);
  if (RenderItem) return /*#__PURE__*/_jsx(RenderItem, _objectSpread({}, props), item.id);
  return memoItem;
};
export default ChatListItem;