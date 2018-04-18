(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://shjie047.github.io/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownToStr = markdownToStr;
exports.markdownToHTML = markdownToHTML;
exports.sliceStrByCharNumber = sliceStrByCharNumber;
exports.markdownToText = markdownToText;
exports.backtop = backtop;
exports.isEn = isEn;
exports.normalizeTagName = normalizeTagName;

var _markdown = __webpack_require__(39);

function markdownToStr() {
  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return markdownToHTML(body).replace(/<(?!\/?(?=>|\s.*>))\/?.*?>/g, '');
}

function markdownToHTML() {
  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return _markdown.markdown.toHTML(body);
}

function sliceStrByCharNumber(str, size) {
  var chars = [];
  var realLength = 0,
      len = str.length,
      charCode = -1;

  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;

    chars.push(str[i]);
    if (realLength >= size) break;
  }

  return chars.join('') + '...';
}

// markdown字符串
function markdownToText() {
  var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // size: 字符个数
  return function () {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 140;

    var str = _markdown.markdown.toHTML(body).replace(/<(?!\/?(?=>|\s.*>))\/?.*?>/g, '');
    var chars = [];
    var realLength = 0,
        len = str.length,
        charCode = -1;

    for (var i = 0; i < len; i++) {
      charCode = str.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) realLength += 1;else realLength += 2;

      chars.push(str[i]);
      if (realLength >= size) break;
    }

    return chars.join('') + '...';
  };
}

function backtop(e) {
  window.scroll(0, 0);
  // Remove hash from URL:
  history.pushState("", document.title, window.location.pathname + window.location.search);
  e.preventDefault();
}

function isEn(str) {
  return !~escape(str).indexOf('%u');
}

function normalizeTagName(name) {
  return ('' + name[0].toUpperCase() + name.slice(1)).replace(/\s/g, '');
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .post-nav {\n    top: -1px;\n    position: relative;\n    padding-bottom: 16px\n    display: flex\n    line-height: 20px;\n    > div {\n      font-weight: 400;\n      font-style: normal;\n      font-size: 1.4rem;\n      line-height: 20px;\n      transform: translateY(1.8px);\n      letter-spacing: .06rem;\n      text-transform: uppercase;\n      color: rgba(0,0,0,.76);\n      border-top: 2px solid rgba(0,0,0,.84);\n      padding-top: 8px;\n    }\n  }\n\n  p {\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .title-wrap {\n    color: rgba(0, 0, 0, .84);\n    font-weight: 500;\n    width: 100%;\n    &:hover {\n      color: rgba(0, 0, 0, .84);\n    }\n  }\n\n  .summary-wrap {\n    color: rgba(0, 0, 0, .54);\n    font-weight: 400;\n    &:hover {\n      color: rgba(0, 0, 0, .54);\n    }\n  }\n\n  .title {\n    line-height: 24px;\n    font-size: 18px;\n  }\n\n  .summary {\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 4px;\n  }\n\n  .title-summary {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    overflow: hidden;\n  }\n\n  @media screen and (max-width: 1383px) {\n    .summary-title {\n      max-height: 88px;\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    .summary-title {\n      max-height: 100px;\n    }\n  }\n\n  &.small {\n    .title {\n      font-size: 16px;\n      line-height: 20px;\n      color: rgba(0, 0, 0, .84);\n      font-weight: 600;\n    }\n  }\n\n  &.large {\n    .title-summary {\n      margin-bottom: 16px;\n    }\n\n    p {\n      -webkit-line-clamp: 3;\n    }\n\n    .title {\n      line-height: 28px;\n      font-size: 20px;\n      max-height: 84px;\n      margin-bottom: 8px;\n    }\n\n    .summary {\n      font-size: 16px;\n      line-height: 24px;\n      max-height: 72px;\n    }\n\n    @media screen and (max-width: 1383px) {\n      .title-summary {\n        max-height: 120px;\n      }\n    }\n\n    @media screen and (max-width: 1031px) {\n      .title-summary {\n        max-height: 80px;\n      }\n    }\n\n    @media screen and (max-width: 855px) {\n      .title-summary {\n        max-height: 80px;\n      }\n    }\n\n    @media screen and (max-width: 767px) {\n      .title {\n        max-height: 72px;\n        font-size: 20px;\n        line-height: 24px;\n      }\n    }\n  }\n'], ['\n  .post-nav {\n    top: -1px;\n    position: relative;\n    padding-bottom: 16px\n    display: flex\n    line-height: 20px;\n    > div {\n      font-weight: 400;\n      font-style: normal;\n      font-size: 1.4rem;\n      line-height: 20px;\n      transform: translateY(1.8px);\n      letter-spacing: .06rem;\n      text-transform: uppercase;\n      color: rgba(0,0,0,.76);\n      border-top: 2px solid rgba(0,0,0,.84);\n      padding-top: 8px;\n    }\n  }\n\n  p {\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  .title-wrap {\n    color: rgba(0, 0, 0, .84);\n    font-weight: 500;\n    width: 100%;\n    &:hover {\n      color: rgba(0, 0, 0, .84);\n    }\n  }\n\n  .summary-wrap {\n    color: rgba(0, 0, 0, .54);\n    font-weight: 400;\n    &:hover {\n      color: rgba(0, 0, 0, .54);\n    }\n  }\n\n  .title {\n    line-height: 24px;\n    font-size: 18px;\n  }\n\n  .summary {\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 4px;\n  }\n\n  .title-summary {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    overflow: hidden;\n  }\n\n  @media screen and (max-width: 1383px) {\n    .summary-title {\n      max-height: 88px;\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    .summary-title {\n      max-height: 100px;\n    }\n  }\n\n  &.small {\n    .title {\n      font-size: 16px;\n      line-height: 20px;\n      color: rgba(0, 0, 0, .84);\n      font-weight: 600;\n    }\n  }\n\n  &.large {\n    .title-summary {\n      margin-bottom: 16px;\n    }\n\n    p {\n      -webkit-line-clamp: 3;\n    }\n\n    .title {\n      line-height: 28px;\n      font-size: 20px;\n      max-height: 84px;\n      margin-bottom: 8px;\n    }\n\n    .summary {\n      font-size: 16px;\n      line-height: 24px;\n      max-height: 72px;\n    }\n\n    @media screen and (max-width: 1383px) {\n      .title-summary {\n        max-height: 120px;\n      }\n    }\n\n    @media screen and (max-width: 1031px) {\n      .title-summary {\n        max-height: 80px;\n      }\n    }\n\n    @media screen and (max-width: 855px) {\n      .title-summary {\n        max-height: 80px;\n      }\n    }\n\n    @media screen and (max-width: 767px) {\n      .title {\n        max-height: 72px;\n        font-size: 20px;\n        line-height: 24px;\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postCaption = __webpack_require__(46);

var _postCaption2 = _interopRequireDefault(_postCaption);

var _reactStatic = __webpack_require__(2);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var caption = _ref.caption,
      title = _ref.title,
      summary = _ref.summary,
      large = _ref.large,
      small = _ref.small,
      className = _ref.className,
      _ref$url = _ref.url,
      url = _ref$url === undefined ? '#' : _ref$url;
  return _react2.default.createElement(
    Root,
    {
      className: (0, _classnames2.default)(_defineProperty({ small: small, large: large }, className, className))
    },
    caption.featured && _react2.default.createElement(
      'div',
      { className: 'post-nav' },
      _react2.default.createElement(
        'div',
        null,
        '\u7CBE\u9009\u6587\u7AE0'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'title-summary' },
      _react2.default.createElement(
        _reactStatic.Link,
        { to: url, className: 'title-wrap' },
        _react2.default.createElement(
          'p',
          { className: 'title' },
          title
        )
      ),
      summary && _react2.default.createElement(
        _reactStatic.Link,
        { to: url, className: 'summary-wrap' },
        _react2.default.createElement(
          'p',
          { className: 'summary' },
          summary
        )
      )
    ),
    _react2.default.createElement(_postCaption2.default, caption)
  );
};

var Root = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(32);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(33);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(34);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 3rem;\n  h1 {\n    font-size: 26px;\n    text-align: center;\n  }\n'], ['\n  padding: 3rem;\n  h1 {\n    font-size: 26px;\n    text-align: center;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function () {
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      'h1',
      null,
      '\u54E6\u54E6~~ \u8FD9\u4E2A\u9875\u9762\u8FD8\u6CA1\u5EFA\u597D\u54E6~~ '
    )
  );
};

var Root = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'This is what we\'re all about.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'React, static sites, performance, speed. It\'s the stuff that makes us tick.'
    )
  );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tag_name_map = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 3rem;\n\n  h3 {\n    font-size: 16px;\n    font-weight: 400!important;\n  }\n\n  ul {\n    font-weight: 300!important;\n    margin: 0;\n    padding: 0;\n    font-size: 12px;\n    padding-left: 3rem;\n    padding-top: .2rem;\n  }\n\n  li {\n    max-width: 160px;\n  }\n'], ['\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 3rem;\n\n  h3 {\n    font-size: 16px;\n    font-weight: 400!important;\n  }\n\n  ul {\n    font-weight: 300!important;\n    margin: 0;\n    padding: 0;\n    font-size: 12px;\n    padding-left: 3rem;\n    padding-top: .2rem;\n  }\n\n  li {\n    max-width: 160px;\n  }\n']);

exports.chineseToEnglish = chineseToEnglish;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactMarkdown = __webpack_require__(35);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _reactUniversalComponent = __webpack_require__(10);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

var _post = __webpack_require__(36);

var _post2 = _interopRequireDefault(_post);

__webpack_require__(37);

__webpack_require__(38);

var _highlight = __webpack_require__(15);

var _highlight2 = _interopRequireDefault(_highlight);

var _reactHelmet = __webpack_require__(16);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _util = __webpack_require__(3);

var _afterRender = __webpack_require__(40);

var _afterRender2 = _interopRequireDefault(_afterRender);

var _codeBlock = __webpack_require__(41);

var _codeBlock2 = _interopRequireDefault(_codeBlock);

var _linkBlock = __webpack_require__(42);

var _linkBlock2 = _interopRequireDefault(_linkBlock);

var _imageBlock = __webpack_require__(43);

var _imageBlock2 = _interopRequireDefault(_imageBlock);

var _paragraphBlock = __webpack_require__(44);

var _paragraphBlock2 = _interopRequireDefault(_paragraphBlock);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

_moment2.default.locale('zh-cn');

var tag_name_map = exports.tag_name_map = {
  '前端': 'frontend',
  '后端': 'backend',
  '开发': 'development',
  '移动端': 'mobile',
  '跨平台': 'CrossPlatform'
};

function chineseToEnglish(name) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(tag_name_map)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      name = name.replace(key, value);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return name;
}

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var post = _ref.post;

  var description = (0, _util.sliceStrByCharNumber)(post.summary, 160);
  return _react2.default.createElement(
    _post2.default,
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement('meta', { property: 'og:description', content: description }),
      _react2.default.createElement('meta', { property: 'og:title', content: post.title }),
      _react2.default.createElement('meta', { property: 'og:type', content: 'article' }),
      _react2.default.createElement('meta', { name: 'description', content: description }),
      _react2.default.createElement('meta', { name: 'keywords', content: post.tags.join(',') })
    ),
    _react2.default.createElement(
      'header',
      { className: 'post-header' },
      _react2.default.createElement(
        'h1',
        { className: 'post-title' },
        post.title
      ),
      _react2.default.createElement(
        'section',
        { className: 'post-meta ' },
        post.author && _react2.default.createElement(
          'a',
          null,
          post.author
        ),
        _react2.default.createElement(
          'time',
          {
            className: (0, _classnames2.default)('post-date', {
              'has-author': post.author
            }),
            dateTime: post.date },
          (0, _moment2.default)(post.date).format('l')
        ),
        _react2.default.createElement(
          'span',
          null,
          ', '
        ),
        _react2.default.createElement(
          'span',
          null,
          post.tags.map(function (tag, i) {
            return _react2.default.createElement(
              'span',
              { key: tag },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/tags/' + chineseToEnglish(tag).toLowerCase() },
                tag
              ),
              i !== post.tags.length - 1 && _react2.default.createElement(
                'span',
                null,
                ', '
              )
            );
          })
        )
      ),
      _react2.default.createElement(
        'div',
        {
          style: {
            maxWidth: 1000,
            maxHeight: 667,
            margin: '3rem 0'
          }
        },
        _react2.default.createElement('img', { style: {
            width: '100%', height: '100%',
            left: 0, top: 0,
            margin: 'auto'
          }, className: 'cover', src: post.cover, alt: '' })
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'post-content markdown-body' },
      _react2.default.createElement(_reactMarkdown2.default, {
        source: post.body,
        transformImageUri: function transformImageUri(uri) {
          return uri.indexOf('http') !== 0 ? 'http://p6jqy6mfr.bkt.clouddn.com/' + uri : uri;
        },
        renderers: { code: _codeBlock2.default, link: _linkBlock2.default, image: _imageBlock2.default, paragraph: _paragraphBlock2.default }
      })
    ),
    _react2.default.createElement('section', { className: 'post-footer' }),
    post.relatives && post.relatives.length && _react2.default.createElement(
      Relatives,
      null,
      _react2.default.createElement(
        'h3',
        null,
        '\u76F8\u5173\u9605\u8BFB:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        post.relatives.map(function (_ref2, i) {
          var title = _ref2.title,
              url = _ref2.url;
          return _react2.default.createElement(
            'li',
            { key: i },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: url },
              title
            )
          );
        })
      )
    )
  );
});


var Relatives = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: grid;\n  max-width: 1384px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 12px;\n  height: 548px;\n  grid-gap: 24px;\n  grid-auto-columns: 64px;\n  grid-auto-rows: 28px;\n\n  .lg {\n    display: grid;\n    grid-area: lg;\n    grid-template-columns: repeat(7, 64px);\n    grid-template-rows: max-content 1fr;\n    grid-column-gap: 24px;\n    height: 100%;\n    .grid-post-image {\n      width: auto;\n      height: 100%;\n      flex: 0 0 auto;\n    }\n  }\n\n  .s {\n    flex-grow: 1;\n    height: auto;\n  }\n\n  .s1 {\n    grid-area: s1;\n  }\n\n  .s2 {\n    grid-area: s2;\n  }\n\n  .cp {\n    grid-area: cp;\n    .border-top {\n      border-top: 2px solid rgba(0, 0, 0, .84);\n    }\n  }\n\n  .md {\n    grid-area: md;\n  }\n\n  .s3 {\n    grid-area: s3;\n  }\n\n  @media screen and (max-width: 1383px) {\n    max-width: 1208px;\n    grid-template-columns: repeat(12, 64px);\n    grid-template-rows: repeat(11, 28px);\n    grid-template-areas: "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3";\n\n    .lg {\n      grid-template-columns: repeat(6, 64px);\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    max-width: 1032px;\n    grid-template-rows: repeat(11, 28px);\n    grid-template-areas: "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3";\n  }\n\n  @media screen and (max-width: 1031px) {\n    max-width: 856px;\n    grid-template-rows: repeat(13, 28px);\n    grid-template-columns: repeat(10, 64px);\n    grid-template-areas: "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp";\n    height: auto;\n\n    .lg {\n      grid-template-columns: repeat(10, 64px);\n    }\n\n    .s1, .s2 {\n      display: flex;\n      height: 100%;\n    }\n  }\n\n  @media screen and (max-width: 855px) {\n    max-width: 680px;\n    grid-template-columns: repeat(8, 1fr);\n    grid-auto-rows: 28px;\n    height: auto;\n    grid-template-rows: repeat(10, 28px);\n    grid-template-areas: "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2";\n    .cp, .md, .s3 {\n      display: none;\n    }\n\n    .lg {\n      grid-template-columns: repeat(8, 1fr);\n      max-width: 100%;\n    }\n\n    .s3, .cp, .md {\n      display: none;\n    }\n\n    .s1, .s2 {\n      flex-direction: column;\n    }\n  }\n'], ['\n  display: grid;\n  max-width: 1384px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 12px;\n  height: 548px;\n  grid-gap: 24px;\n  grid-auto-columns: 64px;\n  grid-auto-rows: 28px;\n\n  .lg {\n    display: grid;\n    grid-area: lg;\n    grid-template-columns: repeat(7, 64px);\n    grid-template-rows: max-content 1fr;\n    grid-column-gap: 24px;\n    height: 100%;\n    .grid-post-image {\n      width: auto;\n      height: 100%;\n      flex: 0 0 auto;\n    }\n  }\n\n  .s {\n    flex-grow: 1;\n    height: auto;\n  }\n\n  .s1 {\n    grid-area: s1;\n  }\n\n  .s2 {\n    grid-area: s2;\n  }\n\n  .cp {\n    grid-area: cp;\n    .border-top {\n      border-top: 2px solid rgba(0, 0, 0, .84);\n    }\n  }\n\n  .md {\n    grid-area: md;\n  }\n\n  .s3 {\n    grid-area: s3;\n  }\n\n  @media screen and (max-width: 1383px) {\n    max-width: 1208px;\n    grid-template-columns: repeat(12, 64px);\n    grid-template-rows: repeat(11, 28px);\n    grid-template-areas: "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s1 s2 s2 s2 s2" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3" "lg lg lg lg lg lg cp cp md md md s3 s3 s3";\n\n    .lg {\n      grid-template-columns: repeat(6, 64px);\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    max-width: 1032px;\n    grid-template-rows: repeat(11, 28px);\n    grid-template-areas: "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "lg lg lg lg lg lg s1 s1 s1 s2 s2 s2" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3" "md md md md md md cp cp cp s3 s3 s3";\n  }\n\n  @media screen and (max-width: 1031px) {\n    max-width: 856px;\n    grid-template-rows: repeat(13, 28px);\n    grid-template-columns: repeat(10, 64px);\n    grid-template-areas: "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg lg lg" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "s1 s1 s1 s1 s1 s2 s2 s2 s2 s2" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp" "md md md md s3 s3 s3 cp cp cp";\n    height: auto;\n\n    .lg {\n      grid-template-columns: repeat(10, 64px);\n    }\n\n    .s1, .s2 {\n      display: flex;\n      height: 100%;\n    }\n  }\n\n  @media screen and (max-width: 855px) {\n    max-width: 680px;\n    grid-template-columns: repeat(8, 1fr);\n    grid-auto-rows: 28px;\n    height: auto;\n    grid-template-rows: repeat(10, 28px);\n    grid-template-areas: "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "lg lg lg lg lg lg lg lg" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2" "s1 s1 s1 s1 s2 s2 s2 s2";\n    .cp, .md, .s3 {\n      display: none;\n    }\n\n    .lg {\n      grid-template-columns: repeat(8, 1fr);\n      max-width: 100%;\n    }\n\n    .s3, .cp, .md {\n      display: none;\n    }\n\n    .s1, .s2 {\n      flex-direction: column;\n    }\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  background-size: cover;\n\n  &.under-s {\n    height: 104px;\n  }\n\n  &.under-s1, &.under-s2 {\n    @media screen and (max-width: 1031px) {\n      width: 152px;\n      height: 100%;\n      flex: 0 0 auto;\n    }\n\n    @media screen and (max-width: 855px) {\n      margin: 0;\n      order: -1;\n      height: 104px;\n      width: 100%;\n    }\n  }\n\n  &.under-md,\n  &.under-s3 {\n    @media screen and (max-width: 1383px) {\n      height: 140px;\n      flex: 0 0 auto;\n    }\n  }\n\n  &.under-lg {\n    height: 100%;\n    flex: 0 0 auto;\n    grid-column-start: 1;\n    grid-column-end: 8;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    @media screen and (max-width: 1383px) {\n      grid-column-start: 1;\n      grid-column-end: 7;\n    }\n\n    @media screen and (max-width: 1207px) {\n      grid-area: 1/4/5/7;\n    }\n\n    @media screen and (max-width: 1031px) {\n      grid-area: 1/6/5/11;\n    }\n\n    @media screen and (max-width: 855px) {\n      grid-area: 1/5/5/9;\n      height: 100%;\n    }\n  }\n'], ['\n  display: block;\n  background-size: cover;\n\n  &.under-s {\n    height: 104px;\n  }\n\n  &.under-s1, &.under-s2 {\n    @media screen and (max-width: 1031px) {\n      width: 152px;\n      height: 100%;\n      flex: 0 0 auto;\n    }\n\n    @media screen and (max-width: 855px) {\n      margin: 0;\n      order: -1;\n      height: 104px;\n      width: 100%;\n    }\n  }\n\n  &.under-md,\n  &.under-s3 {\n    @media screen and (max-width: 1383px) {\n      height: 140px;\n      flex: 0 0 auto;\n    }\n  }\n\n  &.under-lg {\n    height: 100%;\n    flex: 0 0 auto;\n    grid-column-start: 1;\n    grid-column-end: 8;\n    grid-row-start: 2;\n    grid-row-end: 3;\n\n    @media screen and (max-width: 1383px) {\n      grid-column-start: 1;\n      grid-column-end: 7;\n    }\n\n    @media screen and (max-width: 1207px) {\n      grid-area: 1/4/5/7;\n    }\n\n    @media screen and (max-width: 1031px) {\n      grid-area: 1/6/5/11;\n    }\n\n    @media screen and (max-width: 855px) {\n      grid-area: 1/5/5/9;\n      height: 100%;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  line-height: 20px;\n  font-size: 16px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  a { font-weight: 400; }\n\n  a > span {\n    vertical-align: middle;\n    transform: translateY(-1.33px);\n    display: inline-block;\n    line-height: 0;\n  }\n\n'], ['\n  line-height: 20px;\n  font-size: 16px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  a { font-weight: 400; }\n\n  a > span {\n    vertical-align: middle;\n    transform: translateY(-1.33px);\n    display: inline-block;\n    line-height: 0;\n  }\n\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  min-height: 100vh!important;\n'], ['\n  min-height: 100vh!important;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  max-width: 1032px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 3rem;\n  display: flex;\n\n  @media screen and (max-width: 1031px) {\n    padding: 16px;\n  }\n'], ['\n  max-width: 1032px;\n  width: 100%;\n  margin: 0 auto;\n  margin-top: 3rem;\n  display: flex;\n\n  @media screen and (max-width: 1031px) {\n    padding: 16px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  max-width: 680px;\n  width: 100%;\n  padding-right: 24px;\n  @media screen and (max-width: 855px) {\n    max-width: 100%;\n    padding: 0;\n  }\n'], ['\n  max-width: 680px;\n  width: 100%;\n  padding-right: 24px;\n  @media screen and (max-width: 855px) {\n    max-width: 100%;\n    padding: 0;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  width: 328px;\n  > div {\n    width: 328px;\n    &.fixed {\n      position: fixed;\n      top: 50px;\n    }\n  }\n\n  .sidebar > div{\n    margin-bottom: 40px;\n  }\n\n  aside.popular {\n    line-height: 20px;\n    font-size: 16px;\n\n    a div {\n      padding-bottom: 16px;\n      margin-right: 32px;\n      margin-left: 32px;\n      justify-content: space-between;\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid rgba(0,0,0,.15);\n      h3 {\n        margin: 0;\n        padding-top: 20px;\n        color: rgba(0,0,0,.84);\n        letter-spacing: -.02em;\n        font-weight: 700;\n        font-size: 20px;\n        line-height: 28px;\n        transform: translateY(-.72px);\n        letter-spacing: -.42px;\n        font-weight: 600;\n      }\n    }\n\n    ol {\n      padding: 32px;\n    }\n  }\n'], ['\n  flex: 0 0 auto;\n  width: 328px;\n  > div {\n    width: 328px;\n    &.fixed {\n      position: fixed;\n      top: 50px;\n    }\n  }\n\n  .sidebar > div{\n    margin-bottom: 40px;\n  }\n\n  aside.popular {\n    line-height: 20px;\n    font-size: 16px;\n\n    a div {\n      padding-bottom: 16px;\n      margin-right: 32px;\n      margin-left: 32px;\n      justify-content: space-between;\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid rgba(0,0,0,.15);\n      h3 {\n        margin: 0;\n        padding-top: 20px;\n        color: rgba(0,0,0,.84);\n        letter-spacing: -.02em;\n        font-weight: 700;\n        font-size: 20px;\n        line-height: 28px;\n        transform: translateY(-.72px);\n        letter-spacing: -.42px;\n        font-weight: 600;\n      }\n    }\n\n    ol {\n      padding: 32px;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactDom = __webpack_require__(6);

var _gridPost = __webpack_require__(45);

var _gridPost2 = _interopRequireDefault(_gridPost);

var _featuredItem = __webpack_require__(47);

var _featuredItem2 = _interopRequireDefault(_featuredItem);

var _listItem = __webpack_require__(48);

var _listItem2 = _interopRequireDefault(_listItem);

var _popularItem = __webpack_require__(49);

var _popularItem2 = _interopRequireDefault(_popularItem);

var _shuffleArray = __webpack_require__(50);

var _shuffleArray2 = _interopRequireDefault(_shuffleArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// 分页文章数
var page_size = 15;

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var others = _ref.others,
      featured = _ref.featured,
      posts = _ref.posts;
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Featured,
        null,
        _react2.default.createElement(
          'div',
          { className: 'lg' },
          _react2.default.createElement(_gridPost2.default, {
            lg: true,
            img: true,
            post: featured[0]
          }),
          _react2.default.createElement(GridImage, {
            className: 'grid-post-image under-lg',
            style: {
              backgroundImage: 'url(' + featured[0].cover + ')',
              backgroundPosition: '50% 39%'
            },
            to: featured[0].url
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 's1 s' },
          _react2.default.createElement(GridImage, { className: 'grid-post-image under-s under-s1',
            style: {
              backgroundImage: 'url(' + featured[1].cover + ')',
              backgroundPosition: '37% 38%'
            },
            to: featured[1].url
          }),
          _react2.default.createElement(_gridPost2.default, {
            s: true,
            s1: true,
            img: true,
            post: featured[1]
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 's2 s' },
          _react2.default.createElement(GridImage, { className: 'grid-post-image under-s under-s2',
            style: {
              backgroundImage: 'url(' + featured[2].cover + ')',
              backgroundPosition: '67% 50%'
            },
            to: featured[2].url
          }),
          _react2.default.createElement(_gridPost2.default, {
            s: true,
            s2: true,
            img: true,
            post: featured[2]
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 's3 s' },
          _react2.default.createElement(GridImage, { className: 'grid-post-image under-s under-s3',
            style: {
              backgroundImage: 'url(' + featured[3].cover + ')',
              backgroundPosition: '67% 50%'
            },
            to: featured[3].url
          }),
          _react2.default.createElement(_gridPost2.default, {
            s: true,
            s3: true,
            img: true,
            post: featured[3]
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'cp' },
          _react2.default.createElement('div', { className: 'border-top' }),
          featured.slice(5, 7).filter(function (v) {
            return v;
          }).map(function (v, i) {
            return _react2.default.createElement(_featuredItem2.default, {
              key: i,
              post: v
            });
          }),
          _react2.default.createElement(
            SeeAll,
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u67E5\u770B\u6240\u6709\u7CBE\u9009',
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                  'svg',
                  { width: '19', height: '19', viewBox: '0 0 19 19' },
                  _react2.default.createElement('path', { d: 'M7.6 5.138L12.03 9.5 7.6 13.862l-.554-.554L10.854 9.5 7.046 5.692', fillRule: 'evenodd' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'md' },
          _react2.default.createElement(GridImage, { className: 'grid-post-image under-s under-md',
            style: {
              backgroundImage: 'url(' + featured[4].cover + ')',
              backgroundPosition: '67% 50%'
            },
            to: featured[4].url
          }),
          _react2.default.createElement(_gridPost2.default, {
            s: true,
            md: true,
            img: true,
            post: featured[4]
          })
        )
      )
    ),
    _react2.default.createElement('div', { style: { marginBottom: 60 } }),
    _react2.default.createElement(
      FeedContainer,
      null,
      _react2.default.createElement(
        Feeds,
        null,
        _react2.default.createElement(
          ListWrapper,
          null,
          others.map(function (v, i) {
            return _react2.default.createElement(_listItem2.default, {
              key: i,
              post: v
            });
          })
        ),
        _react2.default.createElement(
          SidebarWrapper,
          null,
          _react2.default.createElement(
            'div',
            { className: 'sidebar-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'sidebar' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'aside',
                  { className: 'popular' },
                  _react2.default.createElement(
                    'a',
                    { href: '' },
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'h3',
                        null,
                        '\u70ED\u95E8\u6587\u7AE0'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'ol',
                    null,
                    (0, _shuffleArray2.default)(posts).slice(0, 4).map(function (v, i) {
                      return _react2.default.createElement(_popularItem2.default, { key: i, post: v, index: i + 1 });
                    })
                  )
                )
              )
            ),
            _react2.default.createElement('footer', null)
          )
        )
      )
    )
  );
});


var Root = _styledComponents2.default.div(_templateObject);

var Featured = _styledComponents2.default.section(_templateObject2);

var GridImage = (0, _styledComponents2.default)(_reactStatic.Link)(_templateObject3);

var SeeAll = _styledComponents2.default.div(_templateObject4);

var FeedContainer = _styledComponents2.default.div(_templateObject5);
var Feeds = _styledComponents2.default.section(_templateObject6);

var ListWrapper = _styledComponents2.default.div(_templateObject7);

var SidebarWrapper = _styledComponents2.default.div(_templateObject8);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  margin: 2.3rem;\n  @media only screen and (max-width: 825px) {\n    margin: 2.3rem 0;\n  }\n'], ['\n  margin: 2.3rem;\n  @media only screen and (max-width: 825px) {\n    margin: 2.3rem 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-bottom: 6rem;\n\n  > header {\n    margin-bottom: 3rem;\n  }\n\n  header h3 {\n    font-size: 3.2rem;\n    color: rgb(154, 154, 154);\n    letter-spacing: 0.15rem;\n    font-weight: 300;\n  }\n'], ['\n  margin-bottom: 6rem;\n\n  > header {\n    margin-bottom: 3rem;\n  }\n\n  header h3 {\n    font-size: 3.2rem;\n    color: rgb(154, 154, 154);\n    letter-spacing: 0.15rem;\n    font-weight: 300;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  box-shadow: 2px 3px 7px rgba(0,0,0,.1);\n  padding: 1rem;\n  transition: box-shadow .2s ease;\n  header h4 {\n    font-size: 1.8rem; \n    color: #4a4a4a;\n    font-weight: 500;\n    margin: 0;\n  }\n\n  .post-content {\n    color: #a0a0a0;\n    font-weight: normal;\n    font-size: 1.4rem;\n  }\n\n  &:hover {\n    box-shadow: 3px 5px 10px rgba(0,0,0,.25);\n    header h4 {\n      color: #333;\n    }\n  }\n'], ['\n  box-shadow: 2px 3px 7px rgba(0,0,0,.1);\n  padding: 1rem;\n  transition: box-shadow .2s ease;\n  header h4 {\n    font-size: 1.8rem; \n    color: #4a4a4a;\n    font-weight: 500;\n    margin: 0;\n  }\n\n  .post-content {\n    color: #a0a0a0;\n    font-weight: normal;\n    font-size: 1.4rem;\n  }\n\n  &:hover {\n    box-shadow: 3px 5px 10px rgba(0,0,0,.25);\n    header h4 {\n      color: #333;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  justify-content: center;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n\n  @media only screen and (max-width: 1035px) {\n    grid-template-columns: repeat(2, 360px);\n  }\n\n  @media only screen and (max-width: 825px) {\n    grid-template-columns: 80%;\n  }\n'], ['\n  display: grid;\n  grid-template-columns: repeat(3, 300px);\n  justify-content: center;\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n\n  @media only screen and (max-width: 1035px) {\n    grid-template-columns: repeat(2, 360px);\n  }\n\n  @media only screen and (max-width: 825px) {\n    grid-template-columns: 80%;\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _lodash = __webpack_require__(51);

var _lodash2 = _interopRequireDefault(_lodash);

var _util = __webpack_require__(3);

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts;

  posts = posts.map(function (p) {
    return _extends({}, p, { d: p.date.split('-')[0] });
  });
  var grouped = (0, _lodash2.default)(posts, 'd');
  return _react2.default.createElement(
    Root,
    null,
    Object.keys(grouped).reverse().map(function (date) {
      return _react2.default.createElement(
        Wrapper,
        { key: date },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'h3',
            null,
            date
          )
        ),
        _react2.default.createElement(
          List,
          null,
          grouped[date].map(function (post) {
            return _react2.default.createElement(
              Post,
              {
                to: post.url,
                key: post.basename
              },
              _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                  'h4',
                  null,
                  post.title
                )
              )
            );
          })
        )
      );
    })
  );
});


var Root = _styledComponents2.default.div(_templateObject);

var Wrapper = _styledComponents2.default.div(_templateObject2);

var Post = (0, _styledComponents2.default)(_reactStatic.Link)(_templateObject3);
var List = _styledComponents2.default.section(_templateObject4);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 80%;\n  max-width: 1000px;\n  margin: 3rem auto;\n\n  > div {\n    margin-bottom: 3rem;\n  }\n\n'], ['\n  width: 80%;\n  max-width: 1000px;\n  margin: 3rem auto;\n\n  > div {\n    margin-bottom: 3rem;\n  }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 30px 0;\n  margin: 30px 0;\n  border-bottom: 1px solid #e1e1e1;\n'], ['\n  padding: 30px 0;\n  margin: 30px 0;\n  border-bottom: 1px solid #e1e1e1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: minmax(auto, 400px) minmax(auto, 400px);\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n  justify-content: space-between;\n'], ['\n  display: grid;\n  grid-template-columns: minmax(auto, 400px) minmax(auto, 400px);\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n  justify-content: space-between;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

var _util = __webpack_require__(3);

var _lodash = __webpack_require__(52);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var tag_name_map = (0, _lodash2.default)({
  '前端': 'frontend',
  '后端': 'backend',
  '开发': 'development',
  '移动端': 'mobile',
  '跨平台': 'cross platform'
});

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts,
      tag = _ref.tag;

  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      Tag,
      null,
      _react2.default.createElement(
        'h2',
        null,
        (0, _util.isEn)(tag) ? tag_name_map[tag] || '' + tag[0].toUpperCase() + tag.slice(1) : tag
      )
    ),
    _react2.default.createElement(
      List,
      null,
      posts.map(function (v, i) {
        return _react2.default.createElement(_postContent2.default, {
          key: i,
          caption: {
            readingtime: v.readingtime,
            date: v.date
          },
          title: v.title,
          summary: (0, _util.sliceStrByCharNumber)(v.summary, 320),
          url: v.url
        });
      })
    )
  );
});


var Root = _styledComponents2.default.div(_templateObject);

var Tag = _styledComponents2.default.div(_templateObject2);

var List = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 80%;\n  max-width: 1000px;\n  margin: 3rem auto;\n\n  > div {\n    margin-bottom: 3rem;\n  }\n\n'], ['\n  width: 80%;\n  max-width: 1000px;\n  margin: 3rem auto;\n\n  > div {\n    margin-bottom: 3rem;\n  }\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: minmax(auto, 400px) minmax(auto, 400px);\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n  justify-content: space-between;\n'], ['\n  display: grid;\n  grid-template-columns: minmax(auto, 400px) minmax(auto, 400px);\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n  justify-content: space-between;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _reactStatic.withRouteData)(function (_ref) {
  var posts = _ref.posts,
      cate = _ref.cate;

  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      List,
      null,
      posts.map(function (v, i) {
        return _react2.default.createElement(_postContent2.default, {
          key: i,
          caption: {
            readingtime: v.readingtime,
            date: v.date
          },
          title: v.title,
          summary: (0, _util.sliceStrByCharNumber)(v.summary, 320),
          url: v.url,
          large: true
        });
      })
    )
  );
});


var Root = _styledComponents2.default.div(_templateObject);

var List = _styledComponents2.default.div(_templateObject2);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function () {
  return _react2.default.createElement(
    Root,
    null,
    'search'
  );
};

var Root = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.2b22c228.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/codemore_white.2439fcc8.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(25);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\n  &::after {\n    content: \'\';\n    display: table;\n  }\n\n  @media screen and (max-width: 717px) {\n    padding: 1rem;\n  }\n'], ['\n  &::after {\n    content: \'\';\n    display: table;\n  }\n\n  @media screen and (max-width: 717px) {\n    padding: 1rem;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  0% {\n    width: 0px;\n    padding: 4px 0;\n  }\n\n  100% {\n    width: 160px;\n    padding: 4px 5px;\n  }\n'], ['\n  0% {\n    width: 0px;\n    padding: 4px 0;\n  }\n\n  100% {\n    width: 160px;\n    padding: 4px 5px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  font-size: 1.4rem;\n\n  &::before {\n    content: \'\';\n    height: 2.1rem;\n    width: 1px;\n    background-color: #00000038;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  > i {\n    display: inline-block;\n    padding: 1rem;\n    color: #fff;\n    font-weight: normal;\n    transition: color .3s ease;\n  }\n\n  a {\n    font-size: 1.4rem;\n    font-weight: normal;\n    line-height: 1;\n    display: block;\n    padding: 1.2rem 3rem 1.2rem 1rem;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    /*\n    background-color: #108db8;\n    */\n    display: none;\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  ul.show {\n    display: inline-block;\n  }\n\n  @media only screen and (max-width: 920px) {\n    display: inline;\n  }\n'], ['\n  display: none;\n  padding: 0;\n  margin: 0;\n  position: relative;\n  font-size: 1.4rem;\n\n  &::before {\n    content: \'\';\n    height: 2.1rem;\n    width: 1px;\n    background-color: #00000038;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n  > i {\n    display: inline-block;\n    padding: 1rem;\n    color: #fff;\n    font-weight: normal;\n    transition: color .3s ease;\n  }\n\n  a {\n    font-size: 1.4rem;\n    font-weight: normal;\n    line-height: 1;\n    display: block;\n    padding: 1.2rem 3rem 1.2rem 1rem;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    /*\n    background-color: #108db8;\n    */\n    display: none;\n    width: 120px;\n    padding: 10px 0;\n  }\n\n  ul.show {\n    display: inline-block;\n  }\n\n  @media only screen and (max-width: 920px) {\n    display: inline;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 50%;\n  top: 50%;\n  color: #fff;\n  transform: translate(-50%,-50%);\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  width: 10rem;\n  height: 2.5rem\n'], ['\n  position: absolute;\n  top: 0;\n  left: 50%;\n  top: 50%;\n  color: #fff;\n  transform: translate(-50%,-50%);\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  width: 10rem;\n  height: 2.5rem\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactHotLoader = __webpack_require__(26);

var _reactStaticRoutes = __webpack_require__(27);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

__webpack_require__(53);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHeadroom = __webpack_require__(54);

var _reactHeadroom2 = _interopRequireDefault(_reactHeadroom);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactHelmet = __webpack_require__(16);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactTooltip = __webpack_require__(55);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _util = __webpack_require__(3);

var _reactClickOutside = __webpack_require__(56);

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _logo = __webpack_require__(22);

var _logo2 = _interopRequireDefault(_logo);

var _codemore_white = __webpack_require__(23);

var _codemore_white2 = _interopRequireDefault(_codemore_white);

var _header = __webpack_require__(57);

var _header2 = _interopRequireDefault(_header);

var _Nav = __webpack_require__(58);

var _Nav2 = _interopRequireDefault(_Nav);

var _favicon = __webpack_require__(59);

var _favicon2 = _interopRequireDefault(_favicon);

var _search = __webpack_require__(60);

var _search2 = _interopRequireDefault(_search);

var _lodash = __webpack_require__(61);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(62);

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var is_mobile = function is_mobile() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
};

var description = '\u8FD9\u662F\u4E00\u4E2A\u4E92\u8054\u7F51\u76F8\u5173\u7684\u6280\u672F\u7C7B\u535A\u5BA2\u3001\u5F00\u53D1\u7B14\u8BB0\uFF0C\u63D0\u4F9B\u5168\u9762\u7684\u3001\u524D\u6CBF\u7684\u8BA1\u7B97\u673A\u524D\u7AEF\u3001\u540E\u7AEF\u6559\u7A0B\uFF0C\u5305\u62EC\u6700\u65B0\u7684\u56FD\u5916\u6280\u672F\u6587\u7AE0\uFF0C\u638C\u63E1\u6700\u65B0\u7684\u4E92\u8054\u7F51\u6280\u672F\u8D44\u8BAF\u3001\u8D8B\u52BF';
var keywords = ['前端', '后端', 'Java', 'Javascript', 'js', '开发', '教程', '技术'];
var title = '\u4EE3\u7801\u62FE\u9057 - \u66F4\u61C2\u4EE3\u7801\u7684\u5A92\u4F53';
var type = '\u6587\u7AE0';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMobile: false,
      showSearch: false,
      pin: false,
      search_match_tags: null,
      search_active_index: null
    }, _this.bindEscClose = function (e) {
      var len = _this.state.search_match_tags && _this.state.search_match_tags.length;
      var search_active_index = _this.state.search_active_index;


      if (e.which === 27) _this.handleSearch();

      if (!len) return;

      // up
      else if (e.which === 38) {
          if (search_active_index === null) return;else if (search_active_index > 0) {
            _this.setState(function (prev) {
              return _extends({}, prev, {
                search_active_index: search_active_index - 1
              });
            });
          }
        }
        // down
        else if (e.which === 40) {
            if (search_active_index === null) {
              _this.setState({
                search_active_index: 0
              });
            } else if (search_active_index === len - 1) return;else {
              _this.setState(function (prev) {
                return _extends({}, prev, {
                  search_active_index: search_active_index + 1
                });
              });
            }
          }
    }, _this.handleKeyPress = function (e) {
      if (e.which === 13) {
        console.log(_this.props);
      }
    }, _this.handleSearch = function () {
      _this.setState({
        showSearch: !_this.state.showSearch
      });

      if (!_this.state.showSearch) {
        document.addEventListener('keyup', _this.bindEscClose);
        document.body.classList.add('no-scroll');
      } else {
        document.removeEventListener('keyup', _this.bindEscClose);
        document.body.classList.remove('no-scroll');
        _this.setState({
          search_match_tags: null
        });
      }
    }, _this.handleSearchByKeyword = function (keyword) {
      console.log('search by keyword: ' + keyword);
    }, _this.handleSearchByTag = function (tag) {
      console.log('search by tag: ' + tag);
    }, _this.handleSearchInputChange = (0, _lodash2.default)(function (value, tags) {
      var search_match_tags = value ? tags.filter(function (tag) {
        return tag.match(new RegExp(value.trim(), 'i'));
      }) : null;

      _this.setState({
        search_match_tags: search_match_tags
      });
    }, 600), _this.handleSearchInputKeyUp = function (e, navigateTagPage, navigateSearchPage) {
      // delete
      if (e.which === 8) {
        _this.setState({
          search_active_index: 0
        });
      }

      // enter
      else if (e.which === 13) {
          if (!(0, _lodash4.default)(_this.state.search_match_tags)) {
            navigateTagPage();
            _this.setState(function (prev) {
              return _extends({}, prev, {
                search_active_index: 0
              });
            });
          } else {
            var value = e.target.value;

            if (value) {
              navigateSearchPage();
            }
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'toggleSearch',
    value: function toggleSearch() {
      this.setState({
        showSearch: !this.state.showSearch
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (is_mobile()) {
        this.setState({
          isMobile: true
        });
      } else {
        this.setState({
          isPc: true
        });
      }

      var mainNav = void 0;
      var navParent = void 0;
      var nav_fixed = void 0;
      var sidebar_fixed = void 0;
      var sidebar = void 0;
      var fixed_x = void 0;
      var sidebar_top = void 0;
      var nav_top = void 0;

      setTimeout(function () {
        window.addEventListener('scroll', function () {
          if (mainNav || (mainNav = document.querySelector('.main-nav'))) {
            nav_top = mainNav.getBoundingClientRect().top;
            navParent = navParent || mainNav.parentNode;

            if (nav_top <= 0 && !nav_fixed) {
              navParent.classList.add('fixed');
              nav_fixed = true;
            }

            if (window.scrollY === 0 && nav_fixed) {
              navParent.classList.remove('fixed');
              nav_fixed = false;
            }
          }

          if (sidebar = document.querySelector('.sidebar-wrapper')) {
            sidebar_top = sidebar.getBoundingClientRect().top;

            if (sidebar_top <= 50 && !sidebar_fixed) {
              sidebar.classList.add('fixed');
              sidebar_fixed = true;
            }

            if (window.scrollY <= fixed_x && sidebar_fixed) {
              sidebar.classList.remove('fixed');
              sidebar_fixed = false;
              fixed_x = undefined;
            }

            if (sidebar_fixed && !fixed_x) {
              fixed_x = window.scrollY;
            }
          }
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          Root,
          { className: (0, _classnames2.default)({
              'is-mobile': this.state.isMobile,
              'is-pc': this.state.isPc
            }) },
          _react2.default.createElement(
            _reactHelmet2.default,
            null,
            _react2.default.createElement('meta', { property: 'og:description', content: description }),
            _react2.default.createElement('meta', { property: 'og:title', content: title }),
            _react2.default.createElement('meta', { property: 'og:type', content: type }),
            _react2.default.createElement('meta', { name: 'title', content: title }),
            _react2.default.createElement('meta', { name: 'description', content: description }),
            _react2.default.createElement('meta', { name: 'keywords', content: keywords.join(',') }),
            _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: _favicon2.default }),
            _react2.default.createElement(
              'title',
              null,
              title
            )
          ),
          _react2.default.createElement(
            _header2.default,
            null,
            _react2.default.createElement(
              'div',
              { style: { maxWidth: 1000, margin: '0 auto', background: '#fff', height: 65, position: 'relative' } },
              _react2.default.createElement(Title, { className: 'logo' })
            ),
            _react2.default.createElement(_Nav2.default, { ref: 'nav', onSearch: this.handleSearch })
          ),
          _react2.default.createElement('div', { style: { height: 115 } }),
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(_reactStaticRoutes2.default, null)
          ),
          !is_mobile() && [_react2.default.createElement(_reactTooltip2.default, { key: 'tip-one', effect: 'solid', place: 'left', id: 'tip-one' }), _react2.default.createElement(_reactTooltip2.default, { key: 'tip-two', effect: 'solid', place: 'top', id: 'tip-two' })],
          this.state.showSearch && _react2.default.createElement(_search2.default, {
            close: this.handleSearch,
            onSearchInputChange: this.handleSearchInputChange,
            searchByTag: this.handleSearchByTag,
            searchByKeyword: this.handleSearchByKeyword,
            search_match_tags: this.state.search_match_tags,
            activeItem: this.state.search_active_index,
            onSearchInputKeyUp: this.handleSearchInputKeyUp
          })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);


var Root = _styledComponents2.default.div(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2);

var SlideRightIn = (0, _styledComponents.keyframes)(_templateObject3);
var ToggledPopular = _styledComponents2.default.span(_templateObject4);

var Title = _styledComponents2.default.div(_templateObject5);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(28);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(29);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(30);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(31);

var _reactUniversalComponent = __webpack_require__(10);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Post',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 14)), (0, _importCss3.default)('src/containers/Post', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(14);
  },
  chunkName: function chunkName() {
    return 'src/containers/Post';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Blog',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Blog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/Blog';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Archives',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/containers/Archives', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Archives');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/containers/Archives';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Tag',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/containers/Tag', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Tag');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/containers/Tag';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Cate',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/containers/Cate', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Cate');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/containers/Cate';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Search',
  file: '/Users/shjie047/Project/blog/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/containers/Search', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Search');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/containers/Search';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 0

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(11);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 80%;\n  max-width: 740px;\n  margin: 4rem auto;\n  padding-bottom: 4rem;\n  border-bottom: 1px solid #ebf2f6;\n  word-wrap: break-word\n\n  &::after {\n    display: block;\n    content: "";\n    width: 7px;\n    height: 7px;\n    border: 1px solid #e7eef2;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #fff;\n    border-radius: 100%;\n    box-shadow: 0 0 0 5px #fff\n  }\n\n  .read-more {\n    text-decoration: none;\n  }\n\n  .author-thumb {\n    width: 24px;\n    height: 24px;\n    float: left;\n    margin-right: 9px;\n    border-radius: 100%;\n  }\n\n  .post-header {\n    margin-bottom: 3.4rem;\n  }\n\n  .post-title a {\n    text-decoration: none\n  }\n\n  .post-meta {\n    display: block;\n    margin: 1.75rem 0 0;\n    font-family: Open Sans,sans-serif;\n    font-size: 1.5rem;\n    line-height: 2.2rem;\n    color: #9eabb3\n  }\n\n  .post-excerpt p {\n    margin: 0;\n    font-size: .9em;\n    line-height: 1.7em\n  }\n\n  .post-meta a {\n    color: #9eabb3;\n    text-decoration: none\n  }\n\n  .post-meta a:hover {\n    color: #9eabb3;\n    text-decoration: underline\n  }\n\n  .post-date {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    &.has-author {\n      margin-left: 8px;\n      padding-left: 12px;\n      border-left: 1px solid #d5dbde;\n    }\n  }\n\n  @media only screen and (max-width: 900px) {\n    font-size:.95em\n  }\n\n  @media only screen and (max-width: 500px) {\n    width:auto;\n    margin: 2rem 16px;\n    padding-bottom: 2rem;\n    line-height: 1.65em;\n\n    .post-excerpt p {\n      font-size: .85em;\n    }\n\n    .post-meta {\n        font-size: 1.3rem;\n        margin-top: 1rem\n    }\n\n    pre {\n      padding: 0!important;\n    }\n  }\n\n  pre {\n    padding: 1.2rem;\n    > code {\n      overflow-x: auto;\n      box-shadow: 0 0 15px rgba(0,0,0,.35);\n      padding: 1.5rem;\n    }\n  }\n\n  blockquote {\n    border-left: 3px solid #061e35!important;\n    margin-left: -23px!important;\n    padding-bottom: 2px!important;\n    padding-left: 20px!important;\n    color: #24292e!important;\n    p {\n      color: #24292e!important;\n    }\n    a {\n      color: #061e35!important;\n    }\n  }\n'], ['\n  position: relative;\n  width: 80%;\n  max-width: 740px;\n  margin: 4rem auto;\n  padding-bottom: 4rem;\n  border-bottom: 1px solid #ebf2f6;\n  word-wrap: break-word\n\n  &::after {\n    display: block;\n    content: "";\n    width: 7px;\n    height: 7px;\n    border: 1px solid #e7eef2;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    margin-left: -5px;\n    background: #fff;\n    border-radius: 100%;\n    box-shadow: 0 0 0 5px #fff\n  }\n\n  .read-more {\n    text-decoration: none;\n  }\n\n  .author-thumb {\n    width: 24px;\n    height: 24px;\n    float: left;\n    margin-right: 9px;\n    border-radius: 100%;\n  }\n\n  .post-header {\n    margin-bottom: 3.4rem;\n  }\n\n  .post-title a {\n    text-decoration: none\n  }\n\n  .post-meta {\n    display: block;\n    margin: 1.75rem 0 0;\n    font-family: Open Sans,sans-serif;\n    font-size: 1.5rem;\n    line-height: 2.2rem;\n    color: #9eabb3\n  }\n\n  .post-excerpt p {\n    margin: 0;\n    font-size: .9em;\n    line-height: 1.7em\n  }\n\n  .post-meta a {\n    color: #9eabb3;\n    text-decoration: none\n  }\n\n  .post-meta a:hover {\n    color: #9eabb3;\n    text-decoration: underline\n  }\n\n  .post-date {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    &.has-author {\n      margin-left: 8px;\n      padding-left: 12px;\n      border-left: 1px solid #d5dbde;\n    }\n  }\n\n  @media only screen and (max-width: 900px) {\n    font-size:.95em\n  }\n\n  @media only screen and (max-width: 500px) {\n    width:auto;\n    margin: 2rem 16px;\n    padding-bottom: 2rem;\n    line-height: 1.65em;\n\n    .post-excerpt p {\n      font-size: .85em;\n    }\n\n    .post-meta {\n        font-size: 1.3rem;\n        margin-top: 1rem\n    }\n\n    pre {\n      padding: 0!important;\n    }\n  }\n\n  pre {\n    padding: 1.2rem;\n    > code {\n      overflow-x: auto;\n      box-shadow: 0 0 15px rgba(0,0,0,.35);\n      padding: 1.5rem;\n    }\n  }\n\n  blockquote {\n    border-left: 3px solid #061e35!important;\n    margin-left: -23px!important;\n    padding-bottom: 2px!important;\n    padding-left: 20px!important;\n    color: #24292e!important;\n    p {\n      color: #24292e!important;\n    }\n    a {\n      color: #061e35!important;\n    }\n  }\n']);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.article(_templateObject);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("markdown");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.render((0, _reactDom.findDOMNode)(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _highlight = __webpack_require__(15);

var _highlight2 = _interopRequireDefault(_highlight);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeBlock = function (_React$PureComponent) {
  _inherits(CodeBlock, _React$PureComponent);

  function CodeBlock(props) {
    _classCallCheck(this, CodeBlock);

    var _this = _possibleConstructorReturn(this, (CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(CodeBlock, [{
    key: 'setRef',
    value: function setRef(el) {
      this.codeEl = el;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.highlightCode();
    }
  }, {
    key: 'highlightCode',
    value: function highlightCode() {
      _highlight2.default.highlightBlock(this.codeEl);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'pre',
        null,
        _react2.default.createElement(
          'code',
          { ref: this.setRef, className: 'language-' + this.props.language },
          this.props.value
        )
      );
    }
  }]);

  return CodeBlock;
}(_react2.default.PureComponent);

CodeBlock.defaultProps = {
  language: ''
};

CodeBlock.propTypes = {
  value: _propTypes2.default.string.isRequired,
  language: _propTypes2.default.string
};

exports.default = CodeBlock;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      href = _ref.href;
  return _react2.default.createElement(
    "a",
    { href: href, target: "_blank" },
    children
  );
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPos = function getPos(src) {
  return src.split('#')[1] || 'center';
};
var getStyle = function getStyle(pos) {
  return {
    display: 'block',
    margin: '0 ' + (pos === 'center' ? 'auto' : '0'),
    marginTop: '4rem',
    cursor: 'zoom-in'
  };
};

exports.default = function (_ref) {
  var src = _ref.src;
  return _react2.default.createElement('img', { onClick: function onClick(e) {
      return showImage(src);
    }, style: getStyle(getPos(src)), src: src });
};

function showImage(src) {
  var el = document.createElement('div');
  el.style.zIndex = '9999';
  el.style.position = 'fixed';
  el.style.left = '0';
  el.style.top = '0';
  el.style.bottom = '0';
  el.style.right = '0';
  el.style.backgroundColor = '#fff';

  var img = new Image();
  img.src = src;
  img.style.position = 'absolute';
  img.style.transform = 'translate(-50%, -50%)';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.maxHeight = '100%';
  img.style.maxWidth = '100%';

  img.style.cursor = 'zoom-out';
  el.appendChild(img);

  el.onclick = remove;

  document.body.appendChild(el);
  document.addEventListener('scroll', remove);

  function remove() {
    document.body.removeChild(el);
    document.removeEventListener('scroll', remove);
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var str = props.children[0];

  if (typeof str === 'string') {
    var _str$split = str.split('_#_'),
        _str$split2 = _slicedToArray(_str$split, 2),
        content = _str$split2[0],
        align = _str$split2[1];

    if (align) {
      return _react2.default.createElement(
        'p',
        { style: { textAlign: align } },
        content
      );
    }
  }

  return _react2.default.createElement(
    'p',
    null,
    props.children
  );
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 12px 0;\n\n  &.lg-post {\n    flex: 1 1 504px;\n    grid-column-start: 2;\n    grid-column-end: 8;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    padding: 0 0 24px 0;\n    margin-right: 0;\n  }\n\n  &.s1-post, &.s2-post {\n    @media screen and (max-width: 1031px) {\n      padding: 0 0 0 24px;\n    }\n  }\n\n  @media screen and (max-width: 1383px) {\n    &.lg-post {\n      grid-column-start: 1;\n      grid-column-end: 7;\n      .title-wrap {\n        max-height: 120px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    &.lg-post {\n      grid-area: 1/1/5/4;\n      padding: 0;\n    }\n  }\n\n  @media screen and (max-width: 1031px) {\n    &.lg-post {\n      grid-area: 1/1/5/6;\n      padding: 0;\n    }\n  }\n\n  @media screen and (max-width: 855px) {\n    &.lg-post {\n      grid-area: 1/1/5/5;\n      padding: 0 12px;\n    }\n\n    &.s1-post, &.s2-post {\n      width: 100%;\n      padding: 12px;\n    }\n  }\n}\n'], ['\n  padding: 12px 0;\n\n  &.lg-post {\n    flex: 1 1 504px;\n    grid-column-start: 2;\n    grid-column-end: 8;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    padding: 0 0 24px 0;\n    margin-right: 0;\n  }\n\n  &.s1-post, &.s2-post {\n    @media screen and (max-width: 1031px) {\n      padding: 0 0 0 24px;\n    }\n  }\n\n  @media screen and (max-width: 1383px) {\n    &.lg-post {\n      grid-column-start: 1;\n      grid-column-end: 7;\n      .title-wrap {\n        max-height: 120px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 1207px) {\n    &.lg-post {\n      grid-area: 1/1/5/4;\n      padding: 0;\n    }\n  }\n\n  @media screen and (max-width: 1031px) {\n    &.lg-post {\n      grid-area: 1/1/5/6;\n      padding: 0;\n    }\n  }\n\n  @media screen and (max-width: 855px) {\n    &.lg-post {\n      grid-area: 1/1/5/5;\n      padding: 0 12px;\n    }\n\n    &.s1-post, &.s2-post {\n      width: 100%;\n      padding: 12px;\n    }\n  }\n}\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var s = _ref.s,
      md = _ref.md,
      s1 = _ref.s1,
      s2 = _ref.s2,
      s3 = _ref.s3,
      lg = _ref.lg,
      img = _ref.img,
      _ref$post = _ref.post,
      post = _ref$post === undefined ? {} : _ref$post;

  return _react2.default.createElement(
    Root,
    {
      className: (0, _classnames2.default)({
        's3-post': s3,
        's1-post': s1,
        's2-post': s2,
        's-post': s,
        'lg-post': lg,
        'md-post': md,
        'no-image': !img
      })
    },
    _react2.default.createElement(_postContent2.default, {
      caption: {
        author: post.author,
        featured: !!lg,
        star: !lg,
        readingtime: 9,
        date: post.date
      },
      title: post.title,
      summary: (0, _util.sliceStrByCharNumber)(post.summary, 150),
      large: !!lg,
      url: post.url
    })
  );
};

var Root = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: ', 'px;\n  line-height: 20px;\n  color: rgba(0, 0, 0, .54);\n  fill: rgba(0, 0, 0, .54);\n  font-weight: ', ';\n\n  > div {\n    display: flex;\n    align-items: center;\n  }\n\n  span {\n    display: inline-block;\n  }\n\n  a {\n    font-weight: ', ';\n    font-size: 14px;\n    color: rgba(0, 0, 0, .54);\n  }\n\n  .comma {\n    margin-right: 4px;\n  }\n\n  div.cate {\n    margin-top: 12px;\n  }\n\n  .cate,\n  .cate a {\n    color: rgba(0, 0, 0, .84);\n  }\n\n  /*\n  .cate-name {\n    color: rgb(57, 111, 176)!important;\n  }\n  */\n\n  .dot {\n    ::after {\n      content: \'\0B7\';\n    }\n\n    padding: 0 0.5rem;\n  }\n\n  .star {\n    margin-right: 4px;\n    display: flex;\n  }\n\n  .readingtime {\n    white-space: nowrap;\n    ::after {\n      content: attr(title);\n    }\n  }\n'], ['\n  font-size: ', 'px;\n  line-height: 20px;\n  color: rgba(0, 0, 0, .54);\n  fill: rgba(0, 0, 0, .54);\n  font-weight: ', ';\n\n  > div {\n    display: flex;\n    align-items: center;\n  }\n\n  span {\n    display: inline-block;\n  }\n\n  a {\n    font-weight: ', ';\n    font-size: 14px;\n    color: rgba(0, 0, 0, .54);\n  }\n\n  .comma {\n    margin-right: 4px;\n  }\n\n  div.cate {\n    margin-top: 12px;\n  }\n\n  .cate,\n  .cate a {\n    color: rgba(0, 0, 0, .84);\n  }\n\n  /*\n  .cate-name {\n    color: rgb(57, 111, 176)!important;\n  }\n  */\n\n  .dot {\n    ::after {\n      content: \'\\00B7\';\n    }\n\n    padding: 0 0.5rem;\n  }\n\n  .star {\n    margin-right: 4px;\n    display: flex;\n  }\n\n  .readingtime {\n    white-space: nowrap;\n    ::after {\n      content: attr(title);\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStatic = __webpack_require__(2);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(9);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function getCateLink(cate) {
  return cate === '前端' ? '/tags/frontend' : cate === '后端' ? '/tags/backend' : cate === '移动端' ? 'tags/mobile' : 'tags/others';
}

exports.default = function (_ref) {
  var author = _ref.author,
      readingtime = _ref.readingtime,
      featured = _ref.featured,
      cate = _ref.cate,
      star = _ref.star,
      _ref$date = _ref.date,
      date = _ref$date === undefined ? (0, _moment2.default)().format('YYYY-MM-DD') : _ref$date;
  return _react2.default.createElement(
    Root,
    null,
    cate && author && _react2.default.createElement(
      'div',
      { className: 'cate' },
      _react2.default.createElement(
        'a',
        null,
        _react2.default.createElement(
          'span',
          null,
          author
        )
      ),
      _react2.default.createElement(
        'span',
        { style: { padding: '0 5px' } },
        '\u53D1\u8868\u5728'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: getCateLink(cate), className: 'cate-name' },
        _react2.default.createElement(
          'span',
          null,
          cate
        )
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      (!author || author && cate) && [_react2.default.createElement(
        'span',
        { 'data-for': 'tip-two', 'data-tip': '\u66F4\u65B0\u65F6\u95F4', key: 'date' },
        date
      ), _react2.default.createElement('span', { className: 'dot', key: 'dot' })],
      author && !cate && [_react2.default.createElement(
        'a',
        { key: 'author' },
        _react2.default.createElement(
          'span',
          null,
          author
        )
      ), _react2.default.createElement('span', { className: 'dot', key: 'dot' })],
      (featured || star) && _react2.default.createElement(
        'span',
        { className: 'star' },
        _react2.default.createElement(
          'svg',
          { width: '15', height: '15' },
          _react2.default.createElement('path', {
            d: 'M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z'
          })
        )
      ),
      readingtime && !star && _react2.default.createElement('span', { title: readingtime + '\u5206\u949F\u9605\u8BFB', className: 'readingtime' }),
      cate && !author && [_react2.default.createElement(
        'span',
        { key: 'comma', className: 'comma' },
        ','
      ), _react2.default.createElement(
        _reactStatic.Link,
        { to: getCateLink(cate), key: 'cate', className: 'cate cate-name' },
        _react2.default.createElement(
          'span',
          null,
          cate
        )
      )]
    )
  );
};

var fontSize = 14;
var fontWeight = 400;

var Root = _styledComponents2.default.div(_templateObject, fontSize, fontWeight, fontWeight);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 12px;\n  &::after {\n    content: \'\';\n    display: block;\n    border-top: 1px solid rgba(0, 0, 0, .15);\n    width: 64px;\n    margin-top: 12px;\n  }\n'], ['\n  padding-top: 12px;\n  &::after {\n    content: \'\';\n    display: block;\n    border-top: 1px solid rgba(0, 0, 0, .15);\n    width: 64px;\n    margin-top: 12px;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(Root, {
    caption: {
      author: post.author,
      star: true
    },
    title: post.title,
    small: true,
    url: post.url
  });
};

var Root = (0, _styledComponents2.default)(_postContent2.default)(_templateObject);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: stretch;\n  flex: 1 1 auto;\n  max-width: 680px;\n  width: 100%;\n  line-height: 20px;\n  font-size: 16px;\n  margin-bottom: 48px;\n\n  .summary-wrap {\n    margin-top: 2px;\n  }\n\n  @media screen and (max-width: 855px) {\n    max-width: 100%;\n  }\n\n  .post {\n    margin-right: 24px;\n    flex: 1;\n  }\n\n  .image {\n    width: 152px;\n    flex: 0 0 auto;\n    a {\n      background-position: center;\n      background-origin: border-box;\n      background-size: cover;\n      background-position: 50% 50%;\n      width: 100%;\n      height: 100%;\n      display: block;\n    }\n  }\n'], ['\n  display: flex;\n  align-items: stretch;\n  flex: 1 1 auto;\n  max-width: 680px;\n  width: 100%;\n  line-height: 20px;\n  font-size: 16px;\n  margin-bottom: 48px;\n\n  .summary-wrap {\n    margin-top: 2px;\n  }\n\n  @media screen and (max-width: 855px) {\n    max-width: 100%;\n  }\n\n  .post {\n    margin-right: 24px;\n    flex: 1;\n  }\n\n  .image {\n    width: 152px;\n    flex: 0 0 auto;\n    a {\n      background-position: center;\n      background-origin: border-box;\n      background-size: cover;\n      background-position: 50% 50%;\n      width: 100%;\n      height: 100%;\n      display: block;\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var post = _ref.post;
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(_postContent2.default, {
      caption: {
        author: post.author,
        readingtime: post.readingtime,
        cate: post.tags.includes('Frontend') ? '前端' : post.tags.includes('Backend') ? '后端' : post.tags.includes('Mobile') ? '移动端' : '其他',
        date: post.date
      },
      title: post.title,
      summary: (0, _util.sliceStrByCharNumber)(post.summary, 150),
      className: 'post',
      url: post.url
    }),
    _react2.default.createElement(
      'div',
      { className: 'image' },
      _react2.default.createElement(_reactStatic.Link, { to: post.url, style: {
          backgroundImage: 'url(' + post.cover + ')'
        } })
    )
  );
};

var Root = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  margin-bottom: 24px;\n\n  .title {\n    max-height: 60px;\n    -webkit-line-clamp: 3;\n  }\n\n  .post {\n    margin-left: 16px;\n  }\n\n  .left {\n    margin-top: 4px;\n    color: rgba(0,0,0,.15);\n    font-size: 34px;\n  }\n\n  .right {\n    flex: 1 1 auto;\n    margin-left: 16px;\n    min-width: 200px;\n    > a {\n      flex: 0 0 auto;\n      overflow: hidden;\n      width: 100%;\n      color: rgba(0,0,0,.84);\n      h3 {\n        margin-bottom: 4px;\n        color: rgba(0,0,0,.84);\n        letter-spacing: -.02em;\n        font-weight: 600;\n        font-size: 16px;\n        line-height: 20px;\n        transform: translateY(.96px);\n        letter-spacing: -.17px;\n        overflow: hidden;\n        max-height: 60px;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  margin-bottom: 24px;\n\n  .title {\n    max-height: 60px;\n    -webkit-line-clamp: 3;\n  }\n\n  .post {\n    margin-left: 16px;\n  }\n\n  .left {\n    margin-top: 4px;\n    color: rgba(0,0,0,.15);\n    font-size: 34px;\n  }\n\n  .right {\n    flex: 1 1 auto;\n    margin-left: 16px;\n    min-width: 200px;\n    > a {\n      flex: 0 0 auto;\n      overflow: hidden;\n      width: 100%;\n      color: rgba(0,0,0,.84);\n      h3 {\n        margin-bottom: 4px;\n        color: rgba(0,0,0,.84);\n        letter-spacing: -.02em;\n        font-weight: 600;\n        font-size: 16px;\n        line-height: 20px;\n        transform: translateY(.96px);\n        letter-spacing: -.17px;\n        overflow: hidden;\n        max-height: 60px;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _postContent = __webpack_require__(5);

var _postContent2 = _interopRequireDefault(_postContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = function (_ref) {
  var index = _ref.index,
      post = _ref.post;
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      'div',
      { className: 'left' },
      '0',
      index
    ),
    _react2.default.createElement(_postContent2.default, {
      caption: {
        readingtime: post.readingtime,
        author: post.author,
        cate: post.tags.includes('Frontend') ? '前端' : post.tags.includes('Backend') ? '后端' : post.tags.includes('Mobile') ? '移动端' : '其他',
        date: post.date
      },
      title: post.title,
      small: true,
      className: 'post',
      url: post.url
    })
  );
};

var Root = _styledComponents2.default.li(_templateObject);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("shuffle-array");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("lodash.groupby");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("lodash.invert");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("react-headroom");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-click-outside");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  width: 100%;\n  &.fixed {\n    position: fixed;\n    background: #fff;\n    top: -65px;\n    z-index: 800;\n    border-bottom: 1px solid #e1e1e1;\n  }\n\n  .logo {\n    background-image: url(', ');\n  }\n\n  &.frontend, &.frontend > * {\n    background-color: #108db8!important;\n  }\n\n  &.backend, &.backend > * {\n    background-color: rgba(0, 100, 0, 1)!important;\n  }\n\n  &.mobile, &.mobile > * {\n    background-color: rgb(219,112,147)!important;\n  }\n\n  &.mobile nav a,\n  &.frontend nav a,\n  &.backend nav a {\n    color: #fff;\n  }\n\n  &.mobile .logo,\n  &.frontend .logo,\n  &.backend .logo {\n    background-image: url(', ');\n  }\n'], ['\n  position: absolute;\n  width: 100%;\n  &.fixed {\n    position: fixed;\n    background: #fff;\n    top: -65px;\n    z-index: 800;\n    border-bottom: 1px solid #e1e1e1;\n  }\n\n  .logo {\n    background-image: url(', ');\n  }\n\n  &.frontend, &.frontend > * {\n    background-color: #108db8!important;\n  }\n\n  &.backend, &.backend > * {\n    background-color: rgba(0, 100, 0, 1)!important;\n  }\n\n  &.mobile, &.mobile > * {\n    background-color: rgb(219,112,147)!important;\n  }\n\n  &.mobile nav a,\n  &.frontend nav a,\n  &.backend nav a {\n    color: #fff;\n  }\n\n  &.mobile .logo,\n  &.frontend .logo,\n  &.backend .logo {\n    background-image: url(', ');\n  }\n']);

var _reactStatic = __webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _logo = __webpack_require__(22);

var _logo2 = _interopRequireDefault(_logo);

var _codemore_white = __webpack_require__(23);

var _codemore_white2 = _interopRequireDefault(_codemore_white);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCustomClassName(pathname) {
  var matched = void 0;
  if (matched = pathname.match(/\/cates\/([^\/]*)/)) {
    matched = matched[1];
    return _defineProperty({}, matched, matched);
  }

  return {};
}

var Header = function Header(_ref2) {
  var children = _ref2.children,
      location = _ref2.location;
  return _react2.default.createElement(
    Root,
    { className: (0, _classnames2.default)(getCustomClassName(location.pathname)) },
    children
  );
};

exports.default = (0, _reactStatic.withRouter)(Header);


var Root = _styledComponents2.default.div(_templateObject, _logo2.default, _codemore_white2.default);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &.fixed {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    border-bottom: 1px solid #f1f1f1;\n  }\n\n  height: 50px;\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n\n  &.showBorder {\n    border-bottom: 1px solid #e7e7e7;\n  }\n\n  @media only screen and (max-width: 400px) {\n    padding: 0 20px;\n  }\n\n  a {\n    font-size: 1.6rem;\n    font-weight: normal;\n  }\n\n  .icon-link {\n    font-size: 1.8rem;\n  }\n\n  .icon-btn {\n    -webkit-apparance: none;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    color: #fff;\n    cursor: pointer;\n  }\n'], ['\n  &.fixed {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    border-bottom: 1px solid #f1f1f1;\n  }\n\n  height: 50px;\n  max-width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n\n  &.showBorder {\n    border-bottom: 1px solid #e7e7e7;\n  }\n\n  @media only screen and (max-width: 400px) {\n    padding: 0 20px;\n  }\n\n  a {\n    font-size: 1.6rem;\n    font-weight: normal;\n  }\n\n  .icon-link {\n    font-size: 1.8rem;\n  }\n\n  .icon-btn {\n    -webkit-apparance: none;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    color: #fff;\n    cursor: pointer;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @media only screen and (max-width: 920px) {\n    display: none;\n  }\n\n  a {\n    font-size: 1.5rem;\n  }\n\n  &::before {\n    content: \'\';\n    height: 2.1rem;\n    width: 1px;\n    background-color: #00000038;\n    display: inline-block;\n    vertical-align: middle;\n  }\n'], ['\n  @media only screen and (max-width: 920px) {\n    display: none;\n  }\n\n  a {\n    font-size: 1.5rem;\n  }\n\n  &::before {\n    content: \'\';\n    height: 2.1rem;\n    width: 1px;\n    background-color: #00000038;\n    display: inline-block;\n    vertical-align: middle;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n\n  .search {\n    cursor: pointer;\n    margin-left: 10px;\n    i { font-size: 20px; }\n  }\n'], ['\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n\n  .search {\n    cursor: pointer;\n    margin-left: 10px;\n    i { font-size: 20px; }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _reactStatic.withRouter)(function (_ref) {
  var pathname = _ref.location.pathname,
      onSearch = _ref.onSearch;

  var matchCate = pathname.match(/\/cates\/([^\/]*)/);
  if (matchCate) matchCate = matchCate[1];

  return _react2.default.createElement(
    Root,
    { className: 'main-nav' },
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/', className: 'icon-link' },
      _react2.default.createElement('i', { className: 'iconfont icon-home' })
    ),
    matchCate === 'frontend' ? _react2.default.createElement(
      Popular,
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/html' },
        'HTML'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/javascript' },
        'JS'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/css' },
        'CSS'
      )
    ) : matchCate === 'backend' ? _react2.default.createElement(
      Popular,
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/java' },
        'Java'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/go' },
        'Go'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/nodejs' },
        'NodeJS'
      )
    ) : matchCate === 'mobile' ? _react2.default.createElement(
      Popular,
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/flutter' },
        'Flutter'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/react_native' },
        'ReactNative'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/tags/swift' },
        'Swift'
      )
    ) : _react2.default.createElement(
      Popular,
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/cates/frontend' },
        '\u524D\u7AEF'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/cates/backend' },
        '\u540E\u7AEF'
      ),
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/cates/mobile' },
        '\u79FB\u52A8\u7AEF'
      )
    ),
    _react2.default.createElement(
      Right,
      null,
      _react2.default.createElement(
        _reactStatic.Link,
        { 'data-tip': '\u5F52\u6863', 'data-for': 'tip-one', className: 'archive icon-link', to: '/archives' },
        _react2.default.createElement('i', { className: 'iconfont icon-archive' })
      ),
      _react2.default.createElement(
        'a',
        { className: 'search', onClick: onSearch },
        _react2.default.createElement('i', { className: 'iconfont icon-search' })
      )
    )
  );
});


var Root = _styledComponents2.default.nav(_templateObject);

var Popular = _styledComponents2.default.span(_templateObject2);

var Right = _styledComponents2.default.div(_templateObject3);

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAABe3PX/Y972/2nf9v9v4Pb/cuD3/3bh9/954fj/e+L4/3ri+f954fj/duH3/3Lg9/9u4Pb/ad/1/2Td9v9d3PX/ZN32/2rf9v9w4Pf/duH3/3vi+P9/4/f/geT4/4Pk+P+C5Pj/guT4/3/j+P964vj/duH4/3Hg9/9r3/b/ZN32/2re9v9x4Pb/d+H4/37j+P+D5fb/h+b2/4vm9/+M5vf/jOb3/4vm9v+H5vb/g+X3/37j9/944ff/ceD2/2nf9/9v4Pb/deH3/37j9/+F5fj/i+X5/4/n+P+U5/n/luj5/5bo+f+V6Pj/j+b4/4vl+P+F5Pj/fuP4/3Xh9/9v4Pf/cuD2/3vi+P+C5Pj/iub4/5Hn+P+Y6fn/nOn6/5/p+/+f6vr/nen6/5no+v+S5vn/iuT4/4Pk+f954/f/ceD3/3fh9/+A4/j/iOX4/5Dm9v+Y6fr/nun5/6Pr+f+m6fj/p+v6/6Pp+P+e6fn/mOv6/5Hp+f+I5ff/gOP3/3bh9/954ff/g+T3/4rk9/+Y7fv/nOf2/6fu+/+x8Pn/ufj9/7Px+f+y9f3/qfP//5fh7/+N3+//jej5/4Lk9/964fj/eeH4/4Pj9v+Q7f//g8fW/2qWn/98qbP/aoWM/3OQl/9tiI7/cY+X/2OCif+Iv8n/ebXD/5Hv//+C4vb/eeH5/3rh+P+D4vX/k/L//3Ssuv9ihY7/d5+p/2eEiv92lJr/VGdp/2yMkf9ffIL/jcrW/3y9y/+P7P7/g+P3/3ri+P954fj/guT3/4rl+P+V6vr/f7zJ/5zc5f+w8f3/vvv//5LByv+p5/D/qvT//5/s+/+U6fv/i+X4/4Hk+P944fj/d+H3/4Dj+P+H5ff/j+b4/57z//+h7vv/o+r5/6bp+P+u9P7/puz6/57o+f+X6Pn/j+b4/4fl+P9/4/j/duH3/3Lg9/984vj/hOT4/4rm+P+Q5fb/l+j4/5zq+v+f6vr/nen4/5zp+f+Y6fn/kef4/4rm+P+D5ff/e+P3/3Pg9v9v3/b/duH3/37j+P+F5Pj/iuX6/4/m+f+U6Pj/luj5/5bp+f+T6Pj/kOb4/4vl+P+E5fj/feP4/3bh+P9v3/f/ad/2/3Dg9/934ff/fuP3/4Tk9/+I5ff/iuX4/4zl+f+N5fr/iuX4/4fl+P+E5Pj/f+P3/3fi9/9w4Pb/ad/2/2Pe9v9q3/b/cOD3/3Xh9/974vf/gOP3/4Lk+P+D5Pj/hOT4/4Lk+P9/4/j/e+L3/3bh9/9x4Pf/at/2/2Td9v9e3PX/Zd32/2re9v9u4Pb/cuD3/3fh9/954fj/euH4/3nh+P944fj/deH3/3Ph9v9v3/f/at72/2Td9v9d3Pb/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n    bottom: 100%;\n  }\n\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n'], ['\n  0% {\n    opacity: 0;\n    bottom: 100%;\n  }\n\n  100% {\n    opacity: 1;\n    bottom: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: fixed;\n  background-color: rgba(255, 255, 255, .82);\n  z-index: 1500;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  animation: ', ' .35s ease;\n\n  .iconfont {\n    font-size: 24px;\n  }\n\n  .input {\n    margin: 10rem auto;\n    width: 80%;\n    max-width: 900px;\n    border-bottom: 2px solid #333;\n    display: flex;\n    align-items: center;\n    position: relative;\n  }\n\n  input {\n    flex: 1;\n    background-color: transparent;\n    -webkit-appearance: none;\n    outline: none;\n    border: none;\n    height: 54px;\n    font-size: 20px;\n    padding: 0 1rem;\n  }\n\n  .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    -webkit-appearance: none;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    width: 54px;\n    height: 54px;\n    right: 2.4rem;\n    top: 2.4rem;\n    cursor: pointer;\n    i {\n      font-size: 40px;\n    }\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    background-color: #fff;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    left: 0;\n    right: 0;\n    margin-top: 1px;\n    max-height: calc(100vh - 10rem - 54px - 15px);\n    overflow-y: auto;\n\n    li {\n      margin: 0;\n      &.active,\n      &:hover {\n        background-color: rgba(204, 204, 204, .4);\n      }\n\n      a {\n        display: block;\n        padding: 10px 35px;\n      }\n    }\n  }\n'], ['\n  position: fixed;\n  background-color: rgba(255, 255, 255, .82);\n  z-index: 1500;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow-y: auto;\n  animation: ', ' .35s ease;\n\n  .iconfont {\n    font-size: 24px;\n  }\n\n  .input {\n    margin: 10rem auto;\n    width: 80%;\n    max-width: 900px;\n    border-bottom: 2px solid #333;\n    display: flex;\n    align-items: center;\n    position: relative;\n  }\n\n  input {\n    flex: 1;\n    background-color: transparent;\n    -webkit-appearance: none;\n    outline: none;\n    border: none;\n    height: 54px;\n    font-size: 20px;\n    padding: 0 1rem;\n  }\n\n  .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    -webkit-appearance: none;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    width: 54px;\n    height: 54px;\n    right: 2.4rem;\n    top: 2.4rem;\n    cursor: pointer;\n    i {\n      font-size: 40px;\n    }\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    background-color: #fff;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n    left: 0;\n    right: 0;\n    margin-top: 1px;\n    max-height: calc(100vh - 10rem - 54px - 15px);\n    overflow-y: auto;\n\n    li {\n      margin: 0;\n      &.active,\n      &:hover {\n        background-color: rgba(204, 204, 204, .4);\n      }\n\n      a {\n        display: block;\n        padding: 10px 35px;\n      }\n    }\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Search = function Search(_ref) {
  var close = _ref.close,
      searchByTag = _ref.searchByTag,
      searchByKeyword = _ref.searchByKeyword,
      tags = _ref.tags,
      onSearchInputChange = _ref.onSearchInputChange,
      search_match_tags = _ref.search_match_tags,
      activeItem = _ref.activeItem,
      onSearchInputKeyUp = _ref.onSearchInputKeyUp,
      history = _ref.history;
  return _react2.default.createElement(
    Root,
    null,
    _react2.default.createElement(
      'div',
      { className: 'input' },
      _react2.default.createElement('i', { className: 'iconfont icon-search' }),
      _react2.default.createElement('input', {
        type: 'text',
        placeholder: '\u8F93\u5165\u5173\u952E\u5B57..',
        autoFocus: true,
        onChange: function onChange(e) {
          return onSearchInputChange(e.target.value, tags);
        },
        onKeyUp: function onKeyUp(e) {
          return onSearchInputKeyUp(e, function () {
            close();
            history.push('/tags/' + search_match_tags[activeItem]);
          }, function () {
            close();
            history.push('/search?q=' + e.target.value.trim());
          });
        }
      }),
      search_match_tags && _react2.default.createElement(
        'ul',
        null,
        search_match_tags.map(function (v, i) {
          return _react2.default.createElement(
            'li',
            {
              key: i,
              onClick: close,
              className: (0, _classnames2.default)({
                active: activeItem === i
              })
            },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/tags/' + v },
              v
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      'button',
      { className: 'close', onClick: close },
      _react2.default.createElement('i', { className: 'iconfont icon-close' })
    )
  );
};

exports.default = function () {
  return _react2.default.createElement('div', null);
};
// export default withRouter(withRouteData(Search))

var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var Root = _styledComponents2.default.div(_templateObject2, fadeIn);

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("lodash.throttle");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.759ba3c3.js.map