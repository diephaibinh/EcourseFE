import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
export var MockResponse = /*#__PURE__*/function () {
  function MockResponse(data) {
    var _this = this;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _classCallCheck(this, MockResponse);
    _defineProperty(this, "controller", void 0);
    _defineProperty(this, "encoder", new TextEncoder());
    _defineProperty(this, "stream", void 0);
    _defineProperty(this, "error", void 0);
    this.data = data;
    this.delay = delay;
    this.error = error;
    this.stream = new ReadableStream({
      start: function start(controller) {
        _this.controller = controller;
        if (!_this.error) {
          // 如果不是错误情况，则开始推送数据
          setTimeout(function () {
            return _this.pushData();
          }, _this.delay); // 延迟开始推送数据
        }
      },
      cancel: function cancel(reason) {
        console.log('Stream canceled', reason);
      }
    });
  }
  _createClass(MockResponse, [{
    key: "pushData",
    value: function pushData() {
      var _this2 = this;
      if (this.data.length === 0) {
        this.controller.close();
        return;
      }
      var characters = Array.from(this.data);
      if (characters.length === 0) {
        this.controller.close();
        return;
      }
      var chunk = characters.shift();
      this.data = characters.join('');
      this.controller.enqueue(this.encoder.encode(chunk));
      if (this.data.length > 0) {
        setTimeout(function () {
          return _this2.pushData();
        }, this.delay);
      } else {
        // 数据全部发送完毕后关闭流
        setTimeout(function () {
          return _this2.controller.close();
        }, this.delay);
      }
    }
  }, {
    key: "getResponse",
    value: function getResponse() {
      var _this3 = this;
      return new Promise(function (resolve) {
        // 使用setTimeout来模拟网络延迟
        setTimeout(function () {
          if (_this3.error) {
            var errorResponseOptions = {
              status: 500,
              statusText: 'Internal Server Error'
            };

            // 返回模拟的网络错误响应，这里我们使用500状态码作为示例
            resolve(new Response(null, errorResponseOptions));
          } else {
            resolve(new Response(_this3.stream));
          }
        }, _this3.delay); // 使用构造函数中设置的delay值作为延迟时间
      });
    }
  }]);
  return MockResponse;
}();