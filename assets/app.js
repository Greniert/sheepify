/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test.js */ "./src/js/components/test.js");
/* harmony import */ var _components_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll.js */ "./src/js/components/scroll.js");
/* harmony import */ var _components_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_scroll_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_behaviours_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/behaviours.js */ "./src/js/components/behaviours.js");
/* harmony import */ var _components_behaviours_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_behaviours_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart.js */ "./src/js/components/cart.js");
/* harmony import */ var _components_cart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_cart_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/components/behaviours.js":
/*!*****************************************!*\
  !*** ./src/js/components/behaviours.js ***!
  \*****************************************/
/***/ (() => {

var zoneDown = document.querySelector('.zone-down');
var cart = document.querySelector('#cart');
function addActiveClassOnHover(element) {
  element.addEventListener('click', function () {
    cart.classList.toggle('active');
    element.classList.toggle('!hidden');
  });
}
addActiveClassOnHover(zoneDown);

/***/ }),

/***/ "./src/js/components/cart.js":
/*!***********************************!*\
  !*** ./src/js/components/cart.js ***!
  \***********************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var VariantSelector = /*#__PURE__*/function (_HTMLElement) {
  _inherits(VariantSelector, _HTMLElement);
  function VariantSelector() {
    var _this;
    _classCallCheck(this, VariantSelector);
    _this = _callSuper(this, VariantSelector);
    _this.addEventListener("change", _this.onVariantChange);
    return _this;
  }
  _createClass(VariantSelector, [{
    key: "onVariantChange",
    value: function onVariantChange() {
      this.getSelectedOptions();
      this.getSelectedVariant();
      if (this.currentVariant) {
        this.updateUrl();
        this.updateFormId();
        this.updatePrice();
      }
    }
  }, {
    key: "getSelectedOptions",
    value: function getSelectedOptions() {
      this.options = Array.from(this.querySelectorAll("select"), function (select) {
        return select.value;
      });
      console.log(this.options);
    }
  }, {
    key: "getVariantJson",
    value: function getVariantJson() {
      this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
      return this.variantData;
    }
  }, {
    key: "getSelectedVariant",
    value: function getSelectedVariant() {
      var _this2 = this;
      this.currentVariant = this.getVariantJson().find(function (variant) {
        var findings = !variant.options.map(function (option, index) {
          return _this2.options[index] === option;
        }).includes(false);
        if (findings) return variant;
      });
      console.log(this.currentVariant);
    }
  }, {
    key: "updateUrl",
    value: function updateUrl() {
      if (!this.currentVariant) return;
      window.history.replaceState({}, "", "".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id));
    }
  }, {
    key: "updateFormId",
    value: function updateFormId() {
      var form_input = document.querySelector('#product-form').querySelector('input[name="id"]');
      form_input.value = this.currentVariant.id;
    }
  }, {
    key: "updatePrice",
    value: function updatePrice() {
      var _this3 = this;
      fetch("".concat(this.dataset.url, "?variant=").concat(this.currentVariant.id, "&section_id=").concat(this.dataset.section)).then(function (response) {
        return response.text();
      }).then(function (responseText) {
        var id = "price-".concat(_this3.dataset.section);
        var parser = new DOMParser().parseFromString(responseText, "text/html");
        var oldPrice = document.getElementById(id);
        var newPrice = parser.getElementById(id);
        if (oldPrice && newPrice) oldPrice.innerHTML = newPrice.innerHTML;
      });
    }
  }]);
  return VariantSelector;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("variant-selector", VariantSelector);

/***/ }),

/***/ "./src/js/components/scroll.js":
/*!*************************************!*\
  !*** ./src/js/components/scroll.js ***!
  \*************************************/
/***/ (() => {

var body = document.body;
var lastScroll = 0;
window.addEventListener('scroll', function () {
  var currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up');
  }
  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down');
  }
  if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down');
    body.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

/***/ }),

/***/ "./src/js/components/test.js":
/*!***********************************!*\
  !*** ./src/js/components/test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var atropos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! atropos */ "./node_modules/atropos/atropos.mjs");
console.log('test.js');

// import Atropos library


// Initialize

document.querySelectorAll('.my-atropos').forEach(function (element) {
  (0,atropos__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // pass unique element here

    el: element,
    rotateXMax: 5,
    shadow: false,
    highlight: false

    // rest of parameters
  });
});

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/atropos/atropos.mjs":
/*!******************************************!*\
  !*** ./node_modules/atropos/atropos.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Atropos: () => (/* binding */ Atropos),
/* harmony export */   "default": () => (/* binding */ Atropos),
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
/**
 * Atropos 2.0.2
 * Touch-friendly 3D parallax hover effects
 * https://atroposjs.com
 *
 * Copyright 2021-2023 
 *
 * Released under the MIT License
 *
 * Released on: July 4, 2023
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint-disable no-restricted-globals */
var $ = function $(el, sel) {
  return el.querySelector(sel);
};
var $$ = function $$(el, sel) {
  return el.querySelectorAll(sel);
};
var removeUndefinedProps = function removeUndefinedProps(obj) {
  if (obj === void 0) {
    obj = {};
  }
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (typeof obj[key] !== 'undefined') result[key] = obj[key];
  });
  return result;
};
var defaults = {
  alwaysActive: false,
  activeOffset: 50,
  shadowOffset: 50,
  shadowScale: 1,
  duration: 300,
  rotate: true,
  rotateTouch: true,
  rotateXMax: 15,
  rotateYMax: 15,
  rotateXInvert: false,
  rotateYInvert: false,
  stretchX: 0,
  stretchY: 0,
  stretchZ: 0,
  commonOrigin: true,
  shadow: true,
  highlight: true
};
function Atropos(originalParams) {
  if (originalParams === void 0) {
    originalParams = {};
  }
  var _originalParams = originalParams,
    el = _originalParams.el,
    eventsEl = _originalParams.eventsEl;
  var _originalParams2 = originalParams,
    isComponent = _originalParams2.isComponent;
  var childrenRootEl;
  var self = {
    __atropos__: true,
    params: _extends({}, defaults, {
      onEnter: null,
      onLeave: null,
      onRotate: null
    }, removeUndefinedProps(originalParams || {})),
    destroyed: false,
    isActive: false
  };
  var params = self.params;
  var rotateEl;
  var scaleEl;
  var innerEl;
  var elBoundingClientRect;
  var eventsElBoundingClientRect;
  var shadowEl;
  var highlightEl;
  var isScrolling;
  var clientXStart;
  var clientYStart;
  var queue = [];
  var queueFrameId;
  var purgeQueue = function purgeQueue() {
    queueFrameId = requestAnimationFrame(function () {
      queue.forEach(function (data) {
        if (typeof data === 'function') {
          data();
        } else {
          var element = data.element,
            prop = data.prop,
            value = data.value;
          element.style[prop] = value;
        }
      });
      queue.splice(0, queue.length);
      purgeQueue();
    });
  };
  purgeQueue();
  var $setDuration = function $setDuration(element, value) {
    queue.push({
      element: element,
      prop: 'transitionDuration',
      value: value
    });
  };
  var $setEasing = function $setEasing(element, value) {
    queue.push({
      element: element,
      prop: 'transitionTimingFunction',
      value: value
    });
  };
  var $setTransform = function $setTransform(element, value) {
    queue.push({
      element: element,
      prop: 'transform',
      value: value
    });
  };
  var $setOpacity = function $setOpacity(element, value) {
    queue.push({
      element: element,
      prop: 'opacity',
      value: value
    });
  };
  var $setOrigin = function $setOrigin(element, value) {
    queue.push({
      element: element,
      prop: 'transformOrigin',
      value: value
    });
  };
  var $on = function $on(element, event, handler, props) {
    return element.addEventListener(event, handler, props);
  };
  var $off = function $off(element, event, handler, props) {
    return element.removeEventListener(event, handler, props);
  };
  var createShadow = function createShadow() {
    var created;
    shadowEl = $(el, '.atropos-shadow');
    if (!shadowEl) {
      shadowEl = document.createElement('span');
      shadowEl.classList.add('atropos-shadow');
      created = true;
    }
    $setTransform(shadowEl, "translate3d(0,0,-" + params.shadowOffset + "px) scale(" + params.shadowScale + ")");
    if (created) {
      rotateEl.appendChild(shadowEl);
    }
  };
  var createHighlight = function createHighlight() {
    var created;
    highlightEl = $(el, '.atropos-highlight');
    if (!highlightEl) {
      highlightEl = document.createElement('span');
      highlightEl.classList.add('atropos-highlight');
      created = true;
    }
    $setTransform(highlightEl, "translate3d(0,0,0)");
    if (created) {
      innerEl.appendChild(highlightEl);
    }
  };
  var setChildrenOffset = function setChildrenOffset(_ref) {
    var _ref$rotateXPercentag = _ref.rotateXPercentage,
      rotateXPercentage = _ref$rotateXPercentag === void 0 ? 0 : _ref$rotateXPercentag,
      _ref$rotateYPercentag = _ref.rotateYPercentage,
      rotateYPercentage = _ref$rotateYPercentag === void 0 ? 0 : _ref$rotateYPercentag,
      duration = _ref.duration,
      opacityOnly = _ref.opacityOnly,
      easeOut = _ref.easeOut;
    var getOpacity = function getOpacity(element) {
      if (element.dataset.atroposOpacity && typeof element.dataset.atroposOpacity === 'string') {
        return element.dataset.atroposOpacity.split(';').map(function (v) {
          return parseFloat(v);
        });
      }
      return undefined;
    };
    $$(childrenRootEl, '[data-atropos-offset], [data-atropos-opacity]').forEach(function (childEl) {
      $setDuration(childEl, duration);
      $setEasing(childEl, easeOut ? 'ease-out' : '');
      var elementOpacity = getOpacity(childEl);
      if (rotateXPercentage === 0 && rotateYPercentage === 0) {
        if (!opacityOnly) $setTransform(childEl, "translate3d(0, 0, 0)");
        if (elementOpacity) $setOpacity(childEl, elementOpacity[0]);
      } else {
        var childElOffset = parseFloat(childEl.dataset.atroposOffset) / 100;
        if (!Number.isNaN(childElOffset) && !opacityOnly) {
          $setTransform(childEl, "translate3d(" + -rotateYPercentage * -childElOffset + "%, " + rotateXPercentage * -childElOffset + "%, 0)");
        }
        if (elementOpacity) {
          var min = elementOpacity[0],
            max = elementOpacity[1];
          var rotatePercentage = Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage));
          $setOpacity(childEl, min + (max - min) * rotatePercentage / 100);
        }
      }
    });
  };
  var setElements = function setElements(clientX, clientY) {
    var isMultiple = el !== eventsEl;
    if (!elBoundingClientRect) {
      elBoundingClientRect = el.getBoundingClientRect();
    }
    if (isMultiple && !eventsElBoundingClientRect) {
      eventsElBoundingClientRect = eventsEl.getBoundingClientRect();
    }
    if (typeof clientX === 'undefined' && typeof clientY === 'undefined') {
      var rect = isMultiple ? eventsElBoundingClientRect : elBoundingClientRect;
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    }
    var rotateX = 0;
    var rotateY = 0;
    var _elBoundingClientRect = elBoundingClientRect,
      top = _elBoundingClientRect.top,
      left = _elBoundingClientRect.left,
      width = _elBoundingClientRect.width,
      height = _elBoundingClientRect.height;
    var transformOrigin;
    if (!isMultiple) {
      var centerX = width / 2;
      var centerY = height / 2;
      var coordX = clientX - left;
      var coordY = clientY - top;
      rotateY = params.rotateYMax * (coordX - centerX) / (width / 2) * -1;
      rotateX = params.rotateXMax * (coordY - centerY) / (height / 2);
    } else {
      var _eventsElBoundingClie = eventsElBoundingClientRect,
        parentTop = _eventsElBoundingClie.top,
        parentLeft = _eventsElBoundingClie.left,
        parentWidth = _eventsElBoundingClie.width,
        parentHeight = _eventsElBoundingClie.height;
      var offsetLeft = left - parentLeft;
      var offsetTop = top - parentTop;
      var _centerX = width / 2 + offsetLeft;
      var _centerY = height / 2 + offsetTop;
      var _coordX = clientX - parentLeft;
      var _coordY = clientY - parentTop;
      rotateY = params.rotateYMax * (_coordX - _centerX) / (parentWidth - width / 2) * -1;
      rotateX = params.rotateXMax * (_coordY - _centerY) / (parentHeight - height / 2);
      transformOrigin = clientX - left + "px " + (clientY - top) + "px";
    }
    rotateX = Math.min(Math.max(-rotateX, -params.rotateXMax), params.rotateXMax);
    if (params.rotateXInvert) rotateX = -rotateX;
    rotateY = Math.min(Math.max(-rotateY, -params.rotateYMax), params.rotateYMax);
    if (params.rotateYInvert) rotateY = -rotateY;
    var rotateXPercentage = rotateX / params.rotateXMax * 100;
    var rotateYPercentage = rotateY / params.rotateYMax * 100;
    var stretchX = (isMultiple ? rotateYPercentage / 100 * params.stretchX : 0) * (params.rotateYInvert ? -1 : 1);
    var stretchY = (isMultiple ? rotateXPercentage / 100 * params.stretchY : 0) * (params.rotateXInvert ? -1 : 1);
    var stretchZ = isMultiple ? Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) / 100 * params.stretchZ : 0;
    $setTransform(rotateEl, "translate3d(" + stretchX + "%, " + -stretchY + "%, " + -stretchZ + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    if (transformOrigin && params.commonOrigin) {
      $setOrigin(rotateEl, transformOrigin);
    }
    if (highlightEl) {
      $setDuration(highlightEl, params.duration + "ms");
      $setEasing(highlightEl, 'ease-out');
      $setTransform(highlightEl, "translate3d(" + -rotateYPercentage * 0.25 + "%, " + rotateXPercentage * 0.25 + "%, 0)");
      $setOpacity(highlightEl, Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) / 100);
    }
    setChildrenOffset({
      rotateXPercentage: rotateXPercentage,
      rotateYPercentage: rotateYPercentage,
      duration: params.duration + "ms",
      easeOut: true
    });
    if (typeof params.onRotate === 'function') params.onRotate(rotateX, rotateY);
  };
  var activate = function activate() {
    queue.push(function () {
      return el.classList.add('atropos-active');
    });
    $setDuration(rotateEl, params.duration + "ms");
    $setEasing(rotateEl, 'ease-out');
    $setTransform(scaleEl, "translate3d(0,0, " + params.activeOffset + "px)");
    $setDuration(scaleEl, params.duration + "ms");
    $setEasing(scaleEl, 'ease-out');
    if (shadowEl) {
      $setDuration(shadowEl, params.duration + "ms");
      $setEasing(shadowEl, 'ease-out');
    }
    self.isActive = true;
  };
  var onPointerEnter = function onPointerEnter(e) {
    isScrolling = undefined;
    if (e.type === 'pointerdown' && e.pointerType === 'mouse') return;
    if (e.type === 'pointerenter' && e.pointerType !== 'mouse') return;
    if (e.type === 'pointerdown') {
      e.preventDefault();
    }
    clientXStart = e.clientX;
    clientYStart = e.clientY;
    if (params.alwaysActive) {
      elBoundingClientRect = undefined;
      eventsElBoundingClientRect = undefined;
      return;
    }
    activate();
    if (typeof params.onEnter === 'function') params.onEnter();
  };
  var onTouchMove = function onTouchMove(e) {
    if (isScrolling === false && e.cancelable) {
      e.preventDefault();
    }
  };
  var onPointerMove = function onPointerMove(e) {
    if (!params.rotate || !self.isActive) return;
    if (e.pointerType !== 'mouse') {
      if (!params.rotateTouch) return;
      e.preventDefault();
    }
    var clientX = e.clientX,
      clientY = e.clientY;
    var diffX = clientX - clientXStart;
    var diffY = clientY - clientYStart;
    if (typeof params.rotateTouch === 'string' && (diffX !== 0 || diffY !== 0) && typeof isScrolling === 'undefined') {
      if (diffX * diffX + diffY * diffY >= 25) {
        var touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        isScrolling = params.rotateTouch === 'scroll-y' ? touchAngle > 45 : 90 - touchAngle > 45;
      }
      if (isScrolling === false) {
        el.classList.add('atropos-rotate-touch');
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    }
    if (e.pointerType !== 'mouse' && isScrolling) {
      return;
    }
    setElements(clientX, clientY);
  };
  var onPointerLeave = function onPointerLeave(e) {
    elBoundingClientRect = undefined;
    eventsElBoundingClientRect = undefined;
    if (!self.isActive) return;
    if (e && e.type === 'pointerup' && e.pointerType === 'mouse') return;
    if (e && e.type === 'pointerleave' && e.pointerType !== 'mouse') return;
    if (typeof params.rotateTouch === 'string' && isScrolling) {
      el.classList.remove('atropos-rotate-touch');
    }
    if (params.alwaysActive) {
      setElements();
      if (typeof params.onRotate === 'function') params.onRotate(0, 0);
      if (typeof params.onLeave === 'function') params.onLeave();
      return;
    }
    queue.push(function () {
      return el.classList.remove('atropos-active');
    });
    $setDuration(scaleEl, params.duration + "ms");
    $setEasing(scaleEl, '');
    $setTransform(scaleEl, "translate3d(0,0, " + 0 + "px)");
    if (shadowEl) {
      $setDuration(shadowEl, params.duration + "ms");
      $setEasing(shadowEl, '');
    }
    if (highlightEl) {
      $setDuration(highlightEl, params.duration + "ms");
      $setEasing(highlightEl, '');
      $setTransform(highlightEl, "translate3d(0, 0, 0)");
      $setOpacity(highlightEl, 0);
    }
    $setDuration(rotateEl, params.duration + "ms");
    $setEasing(rotateEl, '');
    $setTransform(rotateEl, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)");
    setChildrenOffset({
      duration: params.duration + "ms"
    });
    self.isActive = false;
    if (typeof params.onRotate === 'function') params.onRotate(0, 0);
    if (typeof params.onLeave === 'function') params.onLeave();
  };
  var onDocumentClick = function onDocumentClick(e) {
    var clickTarget = e.target;
    if (!eventsEl.contains(clickTarget) && clickTarget !== eventsEl && self.isActive) {
      onPointerLeave();
    }
  };
  var initDOM = function initDOM() {
    if (typeof el === 'string') {
      el = $(document, el);
    }
    if (!el) return;

    // eslint-disable-next-line
    if (el.__atropos__) return;
    if (typeof eventsEl !== 'undefined') {
      if (typeof eventsEl === 'string') {
        eventsEl = $(document, eventsEl);
      }
    } else {
      eventsEl = el;
    }
    childrenRootEl = isComponent ? el.parentNode.host : el;
    Object.assign(self, {
      el: el
    });
    rotateEl = $(el, '.atropos-rotate');
    scaleEl = $(el, '.atropos-scale');
    innerEl = $(el, '.atropos-inner');

    // eslint-disable-next-line
    el.__atropos__ = self;
  };
  var init = function init() {
    initDOM();
    if (!el || !eventsEl) return;
    if (params.shadow) {
      createShadow();
    }
    if (params.highlight) {
      createHighlight();
    }
    if (params.rotateTouch) {
      if (typeof params.rotateTouch === 'string') {
        el.classList.add("atropos-rotate-touch-" + params.rotateTouch);
      } else {
        el.classList.add('atropos-rotate-touch');
      }
    }
    if ($(childrenRootEl, '[data-atropos-opacity]')) {
      setChildrenOffset({
        opacityOnly: true
      });
    }
    $on(document, 'click', onDocumentClick);
    $on(eventsEl, 'pointerdown', onPointerEnter);
    $on(eventsEl, 'pointerenter', onPointerEnter);
    $on(eventsEl, 'pointermove', onPointerMove);
    $on(eventsEl, 'touchmove', onTouchMove);
    $on(eventsEl, 'pointerleave', onPointerLeave);
    $on(eventsEl, 'pointerup', onPointerLeave);
    $on(eventsEl, 'lostpointercapture', onPointerLeave);
    if (params.alwaysActive) {
      activate();
      setElements();
    }
  };
  var destroy = function destroy() {
    self.destroyed = true;
    cancelAnimationFrame(queueFrameId);
    $off(document, 'click', onDocumentClick);
    $off(eventsEl, 'pointerdown', onPointerEnter);
    $off(eventsEl, 'pointerenter', onPointerEnter);
    $off(eventsEl, 'pointermove', onPointerMove);
    $off(eventsEl, 'touchmove', onTouchMove);
    $off(eventsEl, 'pointerleave', onPointerLeave);
    $off(eventsEl, 'pointerup', onPointerLeave);
    $off(eventsEl, 'lostpointercapture', onPointerLeave);
    // eslint-disable-next-line
    delete el.__atropos__;
  };
  self.destroy = destroy;
  init();

  // eslint-disable-next-line
  return self;
}


//# sourceMappingURL=atropos.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/app": 0,
/******/ 			"assets/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkelizabeht"] = self["webpackChunkelizabeht"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;