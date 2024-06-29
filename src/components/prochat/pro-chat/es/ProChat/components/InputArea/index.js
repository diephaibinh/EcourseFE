import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
import { SendOutlined } from '@ant-design/icons';
import { Button, ConfigProvider } from 'antd';
import { createStyles, cx } from 'antd-style';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStore } from "../../store";
import useProChatLocale from "../../hooks/useProChatLocale";
import ActionBar from "./ActionBar";
import { AutoCompleteTextArea } from "./AutoCompleteTextArea";
import StopLoadingIcon from "./StopLoading";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    responsive = _ref.responsive,
    token = _ref.token;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: sticky;\n    z-index: ", ";\n    bottom: 0;\n\n    padding-top: 12px;\n    padding-bottom: 24px;\n\n    background-image: linear-gradient(to top, ", " 88%, transparent 100%);\n\n    ", " {\n      width: 100%;\n    }\n  "])), token.zIndexPopupBase, token.colorBgLayout, responsive.mobile),
    boxShadow: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    border-radius: 8px;\n    box-shadow: ", ";\n  "])), token.boxShadowSecondary),
    input: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    border: none;\n    outline: none;\n    border-radius: 8px;\n  "]))),
    btn: css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    z-index: 10;\n    right: 8px;\n    bottom: 6px;\n\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  "])), token.colorTextTertiary, token.colorTextSecondary),
    extra: css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), token.colorTextTertiary)
  };
});
export var ChatInputArea = function ChatInputArea(props) {
  var _ref2 = props || {},
    className = _ref2.className,
    onSend = _ref2.onSend,
    inputAreaRender = _ref2.inputAreaRender,
    inputRender = _ref2.inputRender,
    sendButtonRender = _ref2.sendButtonRender;
  var _useStore = useStore(function (s) {
      return [s.sendMessage, !!s.chatLoadingId, s.placeholder, s.inputAreaProps, s.clearMessage, s.stopGenerateMessage];
    }),
    _useStore2 = _slicedToArray(_useStore, 6),
    sendMessage = _useStore2[0],
    isLoading = _useStore2[1],
    placeholder = _useStore2[2],
    inputAreaProps = _useStore2[3],
    clearMessage = _useStore2[4],
    stopGenerateMessage = _useStore2[5];
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var isChineseInput = useRef(false);
  var _useStyles = useStyles(),
    styles = _useStyles.styles,
    theme = _useStyles.theme;
  var _useProChatLocale = useProChatLocale(),
    localeObject = _useProChatLocale.localeObject;
  var _ref3 = inputAreaProps || {},
    value = _ref3.value,
    onChange = _ref3.onChange;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];

  // 兼容中文的受控输入逻辑
  useEffect(function () {
    if (!isChineseInput.current && onChange) {
      onChange(message);
    }
  }, [message]);
  useEffect(function () {
    if (value) {
      setMessage(value);
    }
  }, [value]);
  var send = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var success;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!onSend) {
              _context.next = 7;
              break;
            }
            _context.next = 3;
            return onSend(message);
          case 3:
            success = _context.sent;
            if (success) {
              sendMessage(message);
              setMessage('');
            }
            _context.next = 9;
            break;
          case 7:
            sendMessage(message);
            setMessage('');
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function send() {
      return _ref4.apply(this, arguments);
    };
  }();
  var prefixClass = getPrefixCls('pro-chat-input-area');

  /**
   * 默认的自动完成文本区域属性
   *
   * @property {string} placeholder - 输入框的占位符
   * @property {Object} inputAreaProps - 输入框的其他属性
   * @property {string} inputAreaProps.className - 输入框的类名
   * @property {string} prefixClass - 输入框的前缀类名
   * @property {string} value - 输入框的值
   * @property {function} onChange - 输入框值改变时的回调函数
   * @property {Object} autoSize - 输入框的自动调整大小配置
   * @property {number} autoSize.maxRows - 输入框的最大行数
   * @property {function} onCompositionStart - 输入法开始输入时的回调函数
   * @property {function} onCompositionEnd - 输入法结束输入时的回调函数
   * @property {function} onPressEnter - 按下回车键时的回调函数
   */

  var defaultAutoCompleteTextAreaProps = _objectSpread(_objectSpread({
    placeholder: placeholder || localeObject.placeholder
  }, inputAreaProps), {}, {
    className: cx(styles.input, inputAreaProps === null || inputAreaProps === void 0 ? void 0 : inputAreaProps.className, "".concat(prefixClass, "-component")),
    value: message,
    onChange: function onChange(e) {
      setMessage(e.target.value);
    },
    autoSize: {
      maxRows: 8
    },
    onCompositionStart: function onCompositionStart() {
      isChineseInput.current = true;
    },
    onCompositionEnd: function onCompositionEnd(e) {
      isChineseInput.current = false;
      setMessage(e.target.value);
    },
    onPressEnter: function onPressEnter(e) {
      if (!isLoading && !e.shiftKey && !isChineseInput.current) {
        e.preventDefault();
        send();
      }
    }
  });
  var defaultInput = /*#__PURE__*/_jsx(AutoCompleteTextArea, _objectSpread({}, defaultAutoCompleteTextAreaProps));

  /**
   * 支持下自定义输入框
   */
  var inputDom = inputRender ? inputRender === null || inputRender === void 0 ? void 0 : inputRender(defaultInput, function (message) {
    sendMessage(message);
  }, defaultAutoCompleteTextAreaProps) : defaultInput;

  /**
   * 根据 isLoading 状态返回默认的按钮道具。
   * 如果 isLoading 为 true，则按钮将具有文本类型，即 stopGenerateMessage 点击处理程序，
   * 和 StopLoadingIcon 作为图标。
   * 如果 isLoading 为 false，则按钮将具有文本类型、发送点击处理程序、
   * 和 SendOutlined 图标作为图标。
   * @returns The default button props.
   */
  var defaultButtonProps = useMemo(function () {
    return isLoading ? {
      type: 'text',
      className: styles.btn,
      onClick: function onClick() {
        return stopGenerateMessage();
      },
      icon: /*#__PURE__*/_jsx(StopLoadingIcon, {})
    } : {
      type: 'text',
      className: styles.btn,
      onClick: function onClick() {
        return send();
      },
      icon: /*#__PURE__*/_jsx(SendOutlined, {})
    };
  }, [isLoading, message]);
  var defaultButtonDom = /*#__PURE__*/_jsx(Button, _objectSpread({}, defaultButtonProps));
  var buttonDom = sendButtonRender ? sendButtonRender(defaultButtonDom, defaultButtonProps) : defaultButtonDom;
  var defaultInputArea = /*#__PURE__*/_jsx(ConfigProvider, {
    theme: {
      token: {
        borderRadius: 4,
        colorBgContainer: theme.colorBgElevated,
        controlHeightLG: 48,
        colorBorder: 'transparent',
        colorPrimaryHover: 'transparent'
      }
    },
    children: /*#__PURE__*/_jsxs(Flexbox, {
      gap: 8,
      padding: 16,
      className: cx(styles.container, "".concat(prefixClass), className),
      children: [/*#__PURE__*/_jsx(ActionBar, {
        className: "".concat(prefixClass, "-action-bar")
      }), /*#__PURE__*/_jsxs(Flexbox, {
        horizontal: true,
        gap: 8,
        align: 'center',
        className: cx(styles.boxShadow, "".concat(prefixClass, "-text-container")),
        children: [inputDom, buttonDom]
      })]
    })
  });
  if (inputAreaRender) {
    return inputAreaRender(defaultInputArea, function (message) {
      sendMessage(message);
    }, clearMessage);
  }
  return defaultInputArea;
};
export default ChatInputArea;