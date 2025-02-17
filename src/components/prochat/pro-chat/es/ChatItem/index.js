import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["avatarAddon", "onAvatarClick", "actions", "className", "primary", "loading", "message", "placement", "type", "avatar", "error", "showTitle", "time", "editing", "onChange", "onEditingChange", "messageExtra", "renderMessage", "text", "chatItemRenderConfig", "renderErrorMessages", "markdownProps", "onDoubleClick", "originData"];
import { useResponsive } from 'antd-style';
import { memo, useContext, useMemo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ConfigProvider } from 'antd';
import Actions from "./components/Actions";
import Avatar from "./components/Avatar";
import BorderSpacing from "./components/BorderSpacing";
import ErrorContent from "./components/ErrorContent";
import MessageContent from "./components/MessageContent";
import Title from "./components/Title";
import { useStyles } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var MOBILE_AVATAR_SIZE = 32;
var ChatItem = /*#__PURE__*/memo(function (props) {
  var _chatItemRenderConfig5;
  var avatarAddon = props.avatarAddon,
    onAvatarClick = props.onAvatarClick,
    actions = props.actions,
    className = props.className,
    primary = props.primary,
    loading = props.loading,
    message = props.message,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'left' : _props$placement,
    _props$type = props.type,
    type = _props$type === void 0 ? 'block' : _props$type,
    avatar = props.avatar,
    error = props.error,
    showTitle = props.showTitle,
    time = props.time,
    editing = props.editing,
    onChange = props.onChange,
    onEditingChange = props.onEditingChange,
    messageExtra = props.messageExtra,
    renderMessage = props.renderMessage,
    text = props.text,
    chatItemRenderConfig = props.chatItemRenderConfig,
    renderErrorMessages = props.renderErrorMessages,
    markdownProps = props.markdownProps,
    onDoubleClick = props.onDoubleClick,
    originData = props.originData,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useResponsive = useResponsive(),
    mobile = _useResponsive.mobile;
  var _useStyles = useStyles({
      editing: editing,
      placement: placement,
      primary: primary,
      showTitle: showTitle,
      title: avatar.title,
      type: type
    }),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixClass = getPrefixCls('pro-chat');
  var errorMessage = error === null || error === void 0 ? void 0 : error.message;
  var avatarDom = useMemo(function () {
    var _chatItemRenderConfig;
    if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.avatarRender) === false) return null;
    var dom = /*#__PURE__*/_jsx(Avatar, {
      addon: avatarAddon,
      avatar: avatar,
      loading: loading,
      onClick: onAvatarClick,
      placement: placement,
      size: mobile ? MOBILE_AVATAR_SIZE : undefined
    });
    return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig = chatItemRenderConfig.avatarRender) === null || _chatItemRenderConfig === void 0 ? void 0 : _chatItemRenderConfig.call(chatItemRenderConfig, props, dom)) || dom;
  }, [avatar, placement, mobile, loading]);
  var messageContentDom = useMemo(function () {
    var _chatItemRenderConfig2;
    if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.contentRender) === false) return null;
    var dom = error ? renderErrorMessages ? renderErrorMessages(error) : /*#__PURE__*/_jsx(ErrorContent, {
      message: errorMessage,
      placement: placement
    }) : /*#__PURE__*/_jsx(MessageContent, {
      editing: editing,
      message: message,
      className: "".concat(prefixClass, "-list-item-message-content"),
      messageExtra: messageExtra,
      onChange: onChange,
      onDoubleClick: onDoubleClick,
      onEditingChange: onEditingChange,
      placement: placement,
      primary: primary,
      renderMessage: renderMessage,
      text: text,
      type: type,
      markdownProps: markdownProps
    });
    return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig2 = chatItemRenderConfig.contentRender) === null || _chatItemRenderConfig2 === void 0 ? void 0 : _chatItemRenderConfig2.call(chatItemRenderConfig, props, dom)) || dom;
  }, [error, message, messageExtra, renderMessage, placement, primary, text, type, editing, errorMessage, originData]);
  var actionsDom = useMemo(function () {
    var _chatItemRenderConfig3;
    if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.actionsRender) === false) return null;
    if (error) return null;
    var dom = /*#__PURE__*/_jsx(Actions, {
      actions: actions,
      className: "".concat(cx(styles.actions, "".concat(prefixClass, "-list-item-actions")))
    });
    return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig3 = chatItemRenderConfig.actionsRender) === null || _chatItemRenderConfig3 === void 0 ? void 0 : _chatItemRenderConfig3.call(chatItemRenderConfig, props, dom)) || dom;
  }, [actions]);
  var titleDom = useMemo(function () {
    var _chatItemRenderConfig4;
    if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.titleRender) === false) return null;
    var dom = /*#__PURE__*/_jsx(Title, {
      className: "".concat(cx(styles.name, "".concat(prefixClass, "-list-item-title"))),
      avatar: avatar,
      placement: placement,
      showTitle: showTitle,
      time: time
    });
    return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig4 = chatItemRenderConfig.titleRender) === null || _chatItemRenderConfig4 === void 0 ? void 0 : _chatItemRenderConfig4.call(chatItemRenderConfig, props, dom)) || dom;
  }, [time, avatar]);
  if ((chatItemRenderConfig === null || chatItemRenderConfig === void 0 ? void 0 : chatItemRenderConfig.render) === false) return null;
  var itemDom = /*#__PURE__*/_jsxs(Flexbox, _objectSpread(_objectSpread({
    className: cx(styles.container, "".concat(prefixClass, "-list-item"), "".concat(prefixClass, "-list-item-").concat(placement), className),
    direction: placement === 'left' ? 'horizontal' : 'horizontal-reverse',
    gap: mobile ? 6 : 12
  }, restProps), {}, {
    children: [avatarDom, /*#__PURE__*/_jsxs(Flexbox, {
      align: placement === 'left' ? 'flex-start' : 'flex-end',
      className: cx(styles.messageContainer, "".concat(prefixClass, "-list-item-message-container")),
      children: [titleDom, /*#__PURE__*/_jsxs(Flexbox, {
        align: placement === 'left' ? 'flex-start' : 'flex-end',
        className: cx(styles.messageContent, "".concat(prefixClass, "-message-content")),
        direction: type === 'block' ? placement === 'left' ? 'horizontal' : 'horizontal-reverse' : 'vertical',
        gap: 8,
        children: [messageContentDom, actionsDom]
      })]
    }), mobile && type === 'block' && /*#__PURE__*/_jsx(BorderSpacing, {
      borderSpacing: MOBILE_AVATAR_SIZE
    })]
  }));
  return (chatItemRenderConfig === null || chatItemRenderConfig === void 0 || (_chatItemRenderConfig5 = chatItemRenderConfig.render) === null || _chatItemRenderConfig5 === void 0 ? void 0 : _chatItemRenderConfig5.call(chatItemRenderConfig, props, {
    avatar: avatarDom,
    messageContent: messageContentDom,
    actions: actionsDom,
    title: titleDom,
    itemDom: itemDom
  }, itemDom)) || itemDom;
});
export default ChatItem;