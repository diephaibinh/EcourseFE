import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import BackBottom from "../../BackBottom";
import { createStyles } from 'antd-style';
import RcResizeObserver from 'rc-resize-observer';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { ConfigProvider } from 'antd';
import ChatList from "../components/ChatList";
import ChatInputArea from "../components/InputArea";
import ChatScrollAnchor from "../components/ScrollAnchor";
import useProChatLocale from "../hooks/useProChatLocale";
import { useOverrideStyles } from "./OverrideStyle";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    stylish = _ref.stylish;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    overflow: hidden scroll;\n    height: 100%;\n    ", " {\n      ", "\n      width: 100%;\n    }\n  "])), responsive.mobile, stylish.noScrollbar);
});

/**
 * 对话组件的属性接口
 */

var App = /*#__PURE__*/memo(function (_ref2) {
  var _areaHtml$current;
  var renderInputArea = _ref2.renderInputArea,
    inputAreaRender = _ref2.inputAreaRender,
    className = _ref2.className,
    style = _ref2.style,
    showTitle = _ref2.showTitle,
    chatRef = _ref2.chatRef,
    itemShouldUpdate = _ref2.itemShouldUpdate,
    inputRender = _ref2.inputRender,
    chatItemRenderConfig = _ref2.chatItemRenderConfig,
    backToBottomConfig = _ref2.backToBottomConfig,
    renderErrorMessages = _ref2.renderErrorMessages,
    sendButtonRender = _ref2.sendButtonRender,
    onScroll = _ref2.onScroll,
    markdownProps = _ref2.markdownProps;
  var ref = useRef(null);
  var areaHtml = useRef(null);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    cx = _useStyles.cx;
  var _useOverrideStyles = useOverrideStyles(),
    override = _useOverrideStyles.styles;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isRender = _useState2[0],
    setIsRender = _useState2[1];
  var _useState3 = useState('100%'),
    _useState4 = _slicedToArray(_useState3, 2),
    height = _useState4[0],
    setHeight = _useState4[1];
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useProChatLocale = useProChatLocale(),
    localeObject = _useProChatLocale.localeObject;
  useEffect(function () {
    // 保证 ref 永远存在
    setIsRender(true);
    if (chatRef !== null && chatRef !== void 0 && chatRef.current) {
      chatRef.current.scrollToBottom = function () {
        var _current, _ref$current;
        ref === null || ref === void 0 || (_current = ref.current) === null || _current === void 0 || _current.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollHeight) || 99999
        });
      };
    }
  }, []);
  var prefixClass = getPrefixCls('pro-chat');
  return /*#__PURE__*/_jsx(RcResizeObserver, {
    onResize: function onResize(e) {
      if (e.height !== height) {
        setHeight(e.height);
      }
    },
    children: /*#__PURE__*/_jsxs(Flexbox, {
      className: cx(override.container, className, "".concat(prefixClass, "-container")),
      style: _objectSpread({
        maxHeight: '100vh',
        height: '100%'
      }, style),
      children: [/*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsxs("div", {
          ref: ref,
          className: cx("".concat(prefixClass, "-chat-list-container"), styles),
          style: {
            height: height - (((_areaHtml$current = areaHtml.current) === null || _areaHtml$current === void 0 ? void 0 : _areaHtml$current.clientHeight) || 0) || '100%'
          },
          children: [/*#__PURE__*/_jsx(ChatList, {
            showTitle: showTitle,
            itemShouldUpdate: itemShouldUpdate,
            chatItemRenderConfig: chatItemRenderConfig,
            markdownProps: markdownProps,
            renderErrorMessages: renderErrorMessages
          }), (ref === null || ref === void 0 ? void 0 : ref.current) && /*#__PURE__*/_jsx(ChatScrollAnchor, {
            target: ref
          })]
        }), isRender && ref !== null && ref !== void 0 && ref.current ? /*#__PURE__*/_jsx(BackBottom, _objectSpread({
          style: {
            bottom: 138
          },
          onScroll: onScroll,
          target: ref,
          text: localeObject.backToBottom
        }, backToBottomConfig)) : null]
      }), renderInputArea !== null && inputAreaRender !== null && /*#__PURE__*/_jsx("div", {
        ref: areaHtml,
        children: /*#__PURE__*/_jsx(ChatInputArea, {
          sendButtonRender: sendButtonRender,
          inputAreaRender: inputAreaRender || renderInputArea,
          inputRender: inputRender
        })
      })]
    })
  });
});
export default App;