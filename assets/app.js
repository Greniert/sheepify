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
/* harmony import */ var _components_draggable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/draggable.js */ "./src/js/components/draggable.js");






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

/***/ "./src/js/components/draggable.js":
/*!****************************************!*\
  !*** ./src/js/components/draggable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_draggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/draggable */ "./node_modules/@shopify/draggable/build/esm/index.mjs");

var handle_element = document.querySelectorAll('.handle');
var swappable = new _shopify_draggable__WEBPACK_IMPORTED_MODULE_0__.Swappable(document.querySelectorAll('ul'), {
  draggable: 'li',
  handle: handle_element
});

// swappable.on('swappable:start', () => console.log('swappable:start'));
// swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
// swappable.on('swappable:stop', () => console.log('swappable:stop'));

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

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragEvent: () => (/* binding */ DragEvent),
/* harmony export */   DragMoveEvent: () => (/* binding */ DragMoveEvent),
/* harmony export */   DragOutContainerEvent: () => (/* binding */ DragOutContainerEvent),
/* harmony export */   DragOutEvent: () => (/* binding */ DragOutEvent),
/* harmony export */   DragOverContainerEvent: () => (/* binding */ DragOverContainerEvent),
/* harmony export */   DragOverEvent: () => (/* binding */ DragOverEvent),
/* harmony export */   DragPressureEvent: () => (/* binding */ DragPressureEvent),
/* harmony export */   DragStartEvent: () => (/* binding */ DragStartEvent),
/* harmony export */   DragStopEvent: () => (/* binding */ DragStopEvent),
/* harmony export */   DragStoppedEvent: () => (/* binding */ DragStoppedEvent),
/* harmony export */   isDragOverEvent: () => (/* binding */ isDragOverEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DragEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get mirror() {
    return this.data.mirror;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

DragEvent.type = 'drag';
class DragStartEvent extends DragEvent {}

DragStartEvent.type = 'drag:start';
DragStartEvent.cancelable = true;
class DragMoveEvent extends DragEvent {}

DragMoveEvent.type = 'drag:move';

class DragOverEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}
DragOverEvent.type = 'drag:over';
DragOverEvent.cancelable = true;
function isDragOverEvent(event) {
  return event.type === DragOverEvent.type;
}

class DragOutEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }

  get over() {
    return this.data.over;
  }
}

DragOutEvent.type = 'drag:out';

class DragOverContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOverContainerEvent.type = 'drag:over:container';

class DragOutContainerEvent extends DragEvent {

  get overContainer() {
    return this.data.overContainer;
  }
}

DragOutContainerEvent.type = 'drag:out:container';

class DragPressureEvent extends DragEvent {

  get pressure() {
    return this.data.pressure;
  }
}

DragPressureEvent.type = 'drag:pressure';
class DragStopEvent extends DragEvent {}

DragStopEvent.type = 'drag:stop';
DragStopEvent.cancelable = true;
class DragStoppedEvent extends DragEvent {}
DragStoppedEvent.type = 'drag:stopped';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Draggable),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Plugins_Focusable_Focusable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plugins/Focusable/Focusable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs");
/* harmony import */ var _Plugins_Mirror_Mirror_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plugins/Mirror/Mirror.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs");
/* harmony import */ var _Plugins_Scrollable_Scrollable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugins/Scrollable/Scrollable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs");
/* harmony import */ var _Emitter_Emitter_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emitter/Emitter.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs");
/* harmony import */ var _Sensors_MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sensors/MouseSensor/MouseSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs");
/* harmony import */ var _Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");












const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onDragPressure = Symbol('onDragPressure');
const dragStop = Symbol('dragStop');

const defaultAnnouncements = {
  'drag:start': event => `Picked up ${event.source.textContent.trim() || event.source.id || 'draggable element'}`,
  'drag:stop': event => `Released ${event.source.textContent.trim() || event.source.id || 'draggable element'}`
};
const defaultClasses = {
  'container:dragging': 'draggable-container--is-dragging',
  'source:dragging': 'draggable-source--is-dragging',
  'source:placed': 'draggable-source--placed',
  'container:placed': 'draggable-container--placed',
  'body:dragging': 'draggable--is-dragging',
  'draggable:over': 'draggable--over',
  'container:over': 'draggable-container--over',
  'source:original': 'draggable--original',
  mirror: 'draggable-mirror'
};
const defaultOptions = {
  draggable: '.draggable-source',
  handle: null,
  delay: {},
  distance: 0,
  placedTimeout: 800,
  plugins: [],
  sensors: [],
  exclude: {
    plugins: [],
    sensors: []
  }
};

class Draggable {

  constructor(containers = [document.body], options = {}) {

    if (containers instanceof NodeList || containers instanceof Array) {
      this.containers = [...containers];
    } else if (containers instanceof HTMLElement) {
      this.containers = [containers];
    } else {
      throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
    }
    this.options = {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      },
      exclude: {
        plugins: options.exclude && options.exclude.plugins || [],
        sensors: options.exclude && options.exclude.sensors || []
      }
    };

    this.emitter = new _Emitter_Emitter_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]();

    this.dragging = false;

    this.plugins = [];

    this.sensors = [];
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragPressure] = this[onDragPressure].bind(this);
    this[dragStop] = this[dragStop].bind(this);
    document.addEventListener('drag:start', this[onDragStart], true);
    document.addEventListener('drag:move', this[onDragMove], true);
    document.addEventListener('drag:stop', this[onDragStop], true);
    document.addEventListener('drag:pressure', this[onDragPressure], true);
    const defaultPlugins = Object.values(Draggable.Plugins).filter(Plugin => !this.options.exclude.plugins.includes(Plugin));
    const defaultSensors = Object.values(Draggable.Sensors).filter(sensor => !this.options.exclude.sensors.includes(sensor));
    this.addPlugin(...[...defaultPlugins, ...this.options.plugins]);
    this.addSensor(...[...defaultSensors, ...this.options.sensors]);
    const draggableInitializedEvent = new _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__.DraggableInitializedEvent({
      draggable: this
    });
    this.on('mirror:created', ({
      mirror
    }) => this.mirror = mirror);
    this.on('mirror:destroy', () => this.mirror = null);
    this.trigger(draggableInitializedEvent);
  }

  destroy() {
    document.removeEventListener('drag:start', this[onDragStart], true);
    document.removeEventListener('drag:move', this[onDragMove], true);
    document.removeEventListener('drag:stop', this[onDragStop], true);
    document.removeEventListener('drag:pressure', this[onDragPressure], true);
    const draggableDestroyEvent = new _DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_9__.DraggableDestroyEvent({
      draggable: this
    });
    this.trigger(draggableDestroyEvent);
    this.removePlugin(...this.plugins.map(plugin => plugin.constructor));
    this.removeSensor(...this.sensors.map(sensor => sensor.constructor));
  }

  addPlugin(...plugins) {
    const activePlugins = plugins.map(Plugin => new Plugin(this));
    activePlugins.forEach(plugin => plugin.attach());
    this.plugins = [...this.plugins, ...activePlugins];
    return this;
  }

  removePlugin(...plugins) {
    const removedPlugins = this.plugins.filter(plugin => plugins.includes(plugin.constructor));
    removedPlugins.forEach(plugin => plugin.detach());
    this.plugins = this.plugins.filter(plugin => !plugins.includes(plugin.constructor));
    return this;
  }

  addSensor(...sensors) {
    const activeSensors = sensors.map(Sensor => new Sensor(this.containers, this.options));
    activeSensors.forEach(sensor => sensor.attach());
    this.sensors = [...this.sensors, ...activeSensors];
    return this;
  }

  removeSensor(...sensors) {
    const removedSensors = this.sensors.filter(sensor => sensors.includes(sensor.constructor));
    removedSensors.forEach(sensor => sensor.detach());
    this.sensors = this.sensors.filter(sensor => !sensors.includes(sensor.constructor));
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
    this.sensors.forEach(sensor => sensor.addContainer(...containers));
    return this;
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
    this.sensors.forEach(sensor => sensor.removeContainer(...containers));
    return this;
  }

  on(type, ...callbacks) {
    this.emitter.on(type, ...callbacks);
    return this;
  }

  off(type, callback) {
    this.emitter.off(type, callback);
    return this;
  }

  trigger(event) {
    this.emitter.trigger(event);
    return this;
  }

  getClassNameFor(name) {
    return this.getClassNamesFor(name)[0];
  }

  getClassNamesFor(name) {
    const classNames = this.options.classes[name];
    if (classNames instanceof Array) {
      return classNames;
    } else if (typeof classNames === 'string' || classNames instanceof String) {
      return [classNames];
    } else {
      return [];
    }
  }

  isDragging() {
    return Boolean(this.dragging);
  }

  getDraggableElements() {
    return this.containers.reduce((current, container) => {
      return [...current, ...this.getDraggableElementsForContainer(container)];
    }, []);
  }

  getDraggableElementsForContainer(container) {
    const allDraggableElements = container.querySelectorAll(this.options.draggable);
    return [...allDraggableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror;
    });
  }

  cancel() {
    this[dragStop]();
  }

  [onDragStart](event) {
    const sensorEvent = getSensorEvent(event);
    const {
      target,
      container,
      originalSource
    } = sensorEvent;
    if (!this.containers.includes(container)) {
      return;
    }
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      sensorEvent.cancel();
      return;
    }
    this.originalSource = originalSource;
    this.sourceContainer = container;
    if (this.lastPlacedSource && this.lastPlacedContainer) {
      clearTimeout(this.placedTimeoutID);
      this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
    }
    this.source = this.originalSource.cloneNode(true);
    this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
    this.originalSource.style.display = 'none';
    const dragStartEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStartEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (dragStartEvent.canceled()) {
      this.source.remove();
      this.originalSource.style.display = null;
      return;
    }
    this.originalSource.classList.add(...this.getClassNamesFor('source:original'));
    this.source.classList.add(...this.getClassNamesFor('source:dragging'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:dragging'));
    document.body.classList.add(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, 'none');
    requestAnimationFrame(() => {
      const oldSensorEvent = getSensorEvent(event);
      const newSensorEvent = oldSensorEvent.clone({
        target: this.source
      });
      this[onDragMove]({
        ...event,
        detail: newSensorEvent
      });
    });
  }

  [onDragMove](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const {
      container
    } = sensorEvent;
    let target = sensorEvent.target;
    const dragMoveEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragMoveEvent({
      source: this.source,
      originalSource: this.originalSource,
      sourceContainer: container,
      sensorEvent
    });
    this.trigger(dragMoveEvent);
    if (dragMoveEvent.canceled()) {
      sensorEvent.cancel();
    }
    target = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    const withinCorrectContainer = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sensorEvent.target, this.containers);
    const overContainer = sensorEvent.overContainer || withinCorrectContainer;
    const isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
    const isLeavingDraggable = this.currentOver && target !== this.currentOver;
    const isOverContainer = overContainer && this.currentOverContainer !== overContainer;
    const isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;
    if (isLeavingDraggable) {
      const dragOutEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOutEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        over: this.currentOver,
        overContainer: this.currentOverContainer
      });
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
      this.currentOver = null;
      this.trigger(dragOutEvent);
    }
    if (isLeavingContainer) {
      const dragOutContainerEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOutContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer: this.currentOverContainer
      });
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
      this.currentOverContainer = null;
      this.trigger(dragOutContainerEvent);
    }
    if (isOverContainer) {
      overContainer.classList.add(...this.getClassNamesFor('container:over'));
      const dragOverContainerEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOverContainerEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer
      });
      this.currentOverContainer = overContainer;
      this.trigger(dragOverContainerEvent);
    }
    if (isOverDraggable) {
      target.classList.add(...this.getClassNamesFor('draggable:over'));
      const dragOverEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragOverEvent({
        source: this.source,
        originalSource: this.originalSource,
        sourceContainer: container,
        sensorEvent,
        overContainer,
        over: target
      });
      this.currentOver = target;
      this.trigger(dragOverEvent);
    }
  }

  [dragStop](event) {
    if (!this.dragging) {
      return;
    }
    this.dragging = false;
    const dragStopEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStopEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStopEvent);
    if (!dragStopEvent.canceled()) this.source.parentNode.insertBefore(this.originalSource, this.source);
    this.source.remove();
    this.originalSource.style.display = '';
    this.source.classList.remove(...this.getClassNamesFor('source:dragging'));
    this.originalSource.classList.remove(...this.getClassNamesFor('source:original'));
    this.originalSource.classList.add(...this.getClassNamesFor('source:placed'));
    this.sourceContainer.classList.add(...this.getClassNamesFor('container:placed'));
    this.sourceContainer.classList.remove(...this.getClassNamesFor('container:dragging'));
    document.body.classList.remove(...this.getClassNamesFor('body:dragging'));
    applyUserSelect(document.body, '');
    if (this.currentOver) {
      this.currentOver.classList.remove(...this.getClassNamesFor('draggable:over'));
    }
    if (this.currentOverContainer) {
      this.currentOverContainer.classList.remove(...this.getClassNamesFor('container:over'));
    }
    this.lastPlacedSource = this.originalSource;
    this.lastPlacedContainer = this.sourceContainer;
    this.placedTimeoutID = setTimeout(() => {
      if (this.lastPlacedSource) {
        this.lastPlacedSource.classList.remove(...this.getClassNamesFor('source:placed'));
      }
      if (this.lastPlacedContainer) {
        this.lastPlacedContainer.classList.remove(...this.getClassNamesFor('container:placed'));
      }
      this.lastPlacedSource = null;
      this.lastPlacedContainer = null;
    }, this.options.placedTimeout);
    const dragStoppedEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragStoppedEvent({
      source: this.source,
      originalSource: this.originalSource,
      sensorEvent: event ? event.sensorEvent : null,
      sourceContainer: this.sourceContainer
    });
    this.trigger(dragStoppedEvent);
    this.source = null;
    this.originalSource = null;
    this.currentOverContainer = null;
    this.currentOver = null;
    this.sourceContainer = null;
  }

  [onDragStop](event) {
    this[dragStop](event);
  }

  [onDragPressure](event) {
    if (!this.dragging) {
      return;
    }
    const sensorEvent = getSensorEvent(event);
    const source = this.source || (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sensorEvent.originalEvent.target, this.options.draggable);
    const dragPressureEvent = new _DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_10__.DragPressureEvent({
      sensorEvent,
      source,
      pressure: sensorEvent.pressure
    });
    this.trigger(dragPressureEvent);
  }
}

Draggable.Plugins = {
  Announcement: _Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
  Focusable: _Plugins_Focusable_Focusable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
  Mirror: _Plugins_Mirror_Mirror_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
  Scrollable: _Plugins_Scrollable_Scrollable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]
};

Draggable.Sensors = {
  MouseSensor: _Sensors_MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
  TouchSensor: _Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__["default"]
};
function getSensorEvent(event) {
  return event.detail;
}
function applyUserSelect(element, value) {
  element.style.webkitUserSelect = value;
  element.style.mozUserSelect = value;
  element.style.msUserSelect = value;
  element.style.oUserSelect = value;
  element.style.userSelect = value;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DraggableDestroyEvent: () => (/* binding */ DraggableDestroyEvent),
/* harmony export */   DraggableEvent: () => (/* binding */ DraggableEvent),
/* harmony export */   DraggableInitializedEvent: () => (/* binding */ DraggableInitializedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DraggableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get draggable() {
    return this.data.draggable;
  }
}

DraggableEvent.type = 'draggable';
class DraggableInitializedEvent extends DraggableEvent {}

DraggableInitializedEvent.type = 'draggable:initialize';
class DraggableDestroyEvent extends DraggableEvent {}
DraggableDestroyEvent.type = 'draggable:destroy';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Emitter/Emitter.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Emitter)
/* harmony export */ });
class Emitter {
  constructor() {
    this.callbacks = {};
  }

  on(type, ...callbacks) {
    if (!this.callbacks[type]) {
      this.callbacks[type] = [];
    }
    this.callbacks[type].push(...callbacks);
    return this;
  }

  off(type, callback) {
    if (!this.callbacks[type]) {
      return null;
    }
    const copy = this.callbacks[type].slice(0);
    for (let i = 0; i < copy.length; i++) {
      if (callback === copy[i]) {
        this.callbacks[type].splice(i, 1);
      }
    }
    return this;
  }

  trigger(event) {
    if (!this.callbacks[event.type]) {
      return null;
    }
    const callbacks = [...this.callbacks[event.type]];
    const caughtErrors = [];
    for (let i = callbacks.length - 1; i >= 0; i--) {
      const callback = callbacks[i];
      try {
        callback(event);
      } catch (error) {
        caughtErrors.push(error);
      }
    }
    if (caughtErrors.length) {

      console.error(`Draggable caught errors while triggering '${event.type}'`, caughtErrors);

    }

    return this;
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Announcement),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');
const announceEvent = Symbol('announceEvent');
const announceMessage = Symbol('announceMessage');
const ARIA_RELEVANT = 'aria-relevant';
const ARIA_ATOMIC = 'aria-atomic';
const ARIA_LIVE = 'aria-live';
const ROLE = 'role';

const defaultOptions = {
  expire: 7000
};

class Announcement extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.originalTriggerMethod = this.draggable.trigger;
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]);
  }

  detach() {
    this.draggable.off('draggable:destroy', this[onDestroy]);
  }

  getOptions() {
    return this.draggable.options.announcements || {};
  }

  [announceEvent](event) {
    const message = this.options[event.type];
    if (message && typeof message === 'string') {
      this[announceMessage](message);
    }
    if (message && typeof message === 'function') {
      this[announceMessage](message(event));
    }
  }

  [announceMessage](message) {
    announce(message, {
      expire: this.options.expire
    });
  }

  [onInitialize]() {

    this.draggable.trigger = event => {
      try {
        this[announceEvent](event);
      } finally {

        this.originalTriggerMethod.call(this.draggable, event);
      }
    };
  }

  [onDestroy]() {
    this.draggable.trigger = this.originalTriggerMethod;
  }
}

const liveRegion = createRegion();

function announce(message, {
  expire
}) {
  const element = document.createElement('div');
  element.textContent = message;
  liveRegion.appendChild(element);
  return setTimeout(() => {
    liveRegion.removeChild(element);
  }, expire);
}

function createRegion() {
  const element = document.createElement('div');
  element.setAttribute('id', 'draggable-live-region');
  element.setAttribute(ARIA_RELEVANT, 'additions');
  element.setAttribute(ARIA_ATOMIC, 'true');
  element.setAttribute(ARIA_LIVE, 'assertive');
  element.setAttribute(ROLE, 'log');
  element.style.position = 'fixed';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.top = '-1px';
  element.style.overflow = 'hidden';
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(liveRegion);
});




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Focusable/Focusable.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Focusable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onInitialize = Symbol('onInitialize');
const onDestroy = Symbol('onDestroy');

const defaultOptions = {};

class Focusable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };
    this[onInitialize] = this[onInitialize].bind(this);
    this[onDestroy] = this[onDestroy].bind(this);
  }

  attach() {
    this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
  }

  detach() {
    this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);

    this[onDestroy]();
  }

  getOptions() {
    return this.draggable.options.focusable || {};
  }

  getElements() {
    return [...this.draggable.containers, ...this.draggable.getDraggableElements()];
  }

  [onInitialize]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => decorateElement(element));
    });
  }

  [onDestroy]() {

    requestAnimationFrame(() => {
      this.getElements().forEach(element => stripElement(element));
    });
  }
}

const elementsWithMissingTabIndex = [];

function decorateElement(element) {
  const hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);
  if (hasMissingTabIndex) {
    elementsWithMissingTabIndex.push(element);
    element.tabIndex = 0;
  }
}

function stripElement(element) {
  const tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);
  if (tabIndexElementPosition !== -1) {
    element.tabIndex = -1;
    elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/Mirror.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mirror),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   getAppendableContainer: () => (/* binding */ getAppendableContainer),
/* harmony export */   onDragMove: () => (/* binding */ onDragMove),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDragStop: () => (/* binding */ onDragStop),
/* harmony export */   onMirrorCreated: () => (/* binding */ onMirrorCreated),
/* harmony export */   onMirrorMove: () => (/* binding */ onMirrorMove),
/* harmony export */   onScroll: () => (/* binding */ onScroll)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");



const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorMove = Symbol('onMirrorMove');
const onScroll = Symbol('onScroll');
const getAppendableContainer = Symbol('getAppendableContainer');

const defaultOptions = {
  constrainDimensions: false,
  xAxis: true,
  yAxis: true,
  cursorOffsetX: null,
  cursorOffsetY: null,
  thresholdX: null,
  thresholdY: null
};

class Mirror extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.scrollOffset = {
      x: 0,
      y: 0
    };

    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorMove] = this[onMirrorMove].bind(this);
    this[onScroll] = this[onScroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
  }

  getOptions() {
    return this.draggable.options.mirror || {};
  }
  [onDragStart](dragEvent) {
    if (dragEvent.canceled()) {
      return;
    }
    if ('ontouchstart' in window) {
      document.addEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: window.scrollX,
      y: window.scrollY
    };
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;

    this.lastMirrorMovedClient = {
      x: sensorEvent.clientX,
      y: sensorEvent.clientY
    };
    const mirrorCreateEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorCreateEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorCreateEvent);
    if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
      return;
    }
    const appendableContainer = this[getAppendableContainer](source) || sourceContainer;
    this.mirror = source.cloneNode(true);
    const mirrorCreatedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorCreatedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    const mirrorAttachedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorAttachedEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror
    });
    this.draggable.trigger(mirrorCreatedEvent);
    appendableContainer.appendChild(this.mirror);
    this.draggable.trigger(mirrorAttachedEvent);
  }
  [onDragMove](dragEvent) {
    if (!this.mirror || dragEvent.canceled()) {
      return;
    }
    const {
      source,
      originalSource,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    let passedThreshX = true;
    let passedThreshY = true;
    if (this.options.thresholdX || this.options.thresholdY) {
      const {
        x: lastX,
        y: lastY
      } = this.lastMirrorMovedClient;
      if (Math.abs(lastX - sensorEvent.clientX) < this.options.thresholdX) {
        passedThreshX = false;
      } else {
        this.lastMirrorMovedClient.x = sensorEvent.clientX;
      }
      if (Math.abs(lastY - sensorEvent.clientY) < this.options.thresholdY) {
        passedThreshY = false;
      } else {
        this.lastMirrorMovedClient.y = sensorEvent.clientY;
      }
      if (!passedThreshX && !passedThreshY) {
        return;
      }
    }
    const mirrorMoveEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorMoveEvent({
      source,
      originalSource,
      sourceContainer,
      sensorEvent,
      dragEvent,
      mirror: this.mirror,
      passedThreshX,
      passedThreshY
    });
    this.draggable.trigger(mirrorMoveEvent);
  }
  [onDragStop](dragEvent) {
    if ('ontouchstart' in window) {
      document.removeEventListener('scroll', this[onScroll], true);
    }
    this.initialScrollOffset = {
      x: 0,
      y: 0
    };
    this.scrollOffset = {
      x: 0,
      y: 0
    };
    if (!this.mirror) {
      return;
    }
    const {
      source,
      sourceContainer,
      sensorEvent
    } = dragEvent;
    const mirrorDestroyEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorDestroyEvent({
      source,
      mirror: this.mirror,
      sourceContainer,
      sensorEvent,
      dragEvent
    });
    this.draggable.trigger(mirrorDestroyEvent);
    if (!mirrorDestroyEvent.canceled()) {
      this.mirror.remove();
    }
  }
  [onScroll]() {
    this.scrollOffset = {
      x: window.scrollX - this.initialScrollOffset.x,
      y: window.scrollY - this.initialScrollOffset.y
    };
  }

  [onMirrorCreated]({
    mirror,
    source,
    sensorEvent
  }) {
    const mirrorClasses = this.draggable.getClassNamesFor('mirror');
    const setState = ({
      mirrorOffset,
      initialX,
      initialY,
      ...args
    }) => {
      this.mirrorOffset = mirrorOffset;
      this.initialX = initialX;
      this.initialY = initialY;
      this.lastMovedX = initialX;
      this.lastMovedY = initialY;
      return {
        mirrorOffset,
        initialX,
        initialY,
        ...args
      };
    };
    mirror.style.display = 'none';
    const initialState = {
      mirror,
      source,
      sensorEvent,
      mirrorClasses,
      scrollOffset: this.scrollOffset,
      options: this.options,
      passedThreshX: true,
      passedThreshY: true
    };
    return Promise.resolve(initialState)

    .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({
      initial: true
    })).then(removeMirrorID).then(setState);
  }

  [onMirrorMove](mirrorEvent) {
    if (mirrorEvent.canceled()) {
      return null;
    }
    const setState = ({
      lastMovedX,
      lastMovedY,
      ...args
    }) => {
      this.lastMovedX = lastMovedX;
      this.lastMovedY = lastMovedY;
      return {
        lastMovedX,
        lastMovedY,
        ...args
      };
    };
    const triggerMoved = args => {
      const mirrorMovedEvent = new _MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.MirrorMovedEvent({
        source: mirrorEvent.source,
        originalSource: mirrorEvent.originalSource,
        sourceContainer: mirrorEvent.sourceContainer,
        sensorEvent: mirrorEvent.sensorEvent,
        dragEvent: mirrorEvent.dragEvent,
        mirror: this.mirror,
        passedThreshX: mirrorEvent.passedThreshX,
        passedThreshY: mirrorEvent.passedThreshY
      });
      this.draggable.trigger(mirrorMovedEvent);
      return args;
    };
    const initialState = {
      mirror: mirrorEvent.mirror,
      sensorEvent: mirrorEvent.sensorEvent,
      mirrorOffset: this.mirrorOffset,
      options: this.options,
      initialX: this.initialX,
      initialY: this.initialY,
      scrollOffset: this.scrollOffset,
      passedThreshX: mirrorEvent.passedThreshX,
      passedThreshY: mirrorEvent.passedThreshY,
      lastMovedX: this.lastMovedX,
      lastMovedY: this.lastMovedY
    };
    return Promise.resolve(initialState).then(positionMirror({
      raf: true
    })).then(setState).then(triggerMoved);
  }

  [getAppendableContainer](source) {
    const appendTo = this.options.appendTo;
    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo);
    } else if (appendTo instanceof HTMLElement) {
      return appendTo;
    } else if (typeof appendTo === 'function') {
      return appendTo(source);
    } else {
      return source.parentNode;
    }
  }
}

function computeMirrorDimensions({
  source,
  ...args
}) {
  return withPromise(resolve => {
    const sourceRect = source.getBoundingClientRect();
    resolve({
      source,
      sourceRect,
      ...args
    });
  });
}

function calculateMirrorOffset({
  sensorEvent,
  sourceRect,
  options,
  ...args
}) {
  return withPromise(resolve => {
    const top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
    const left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;
    const mirrorOffset = {
      top,
      left
    };
    resolve({
      sensorEvent,
      sourceRect,
      mirrorOffset,
      options,
      ...args
    });
  });
}

function resetMirror({
  mirror,
  source,
  options,
  ...args
}) {
  return withPromise(resolve => {
    let offsetHeight;
    let offsetWidth;
    if (options.constrainDimensions) {
      const computedSourceStyles = getComputedStyle(source);
      offsetHeight = computedSourceStyles.getPropertyValue('height');
      offsetWidth = computedSourceStyles.getPropertyValue('width');
    }
    mirror.style.display = null;
    mirror.style.position = 'fixed';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = 0;
    mirror.style.left = 0;
    mirror.style.margin = 0;
    if (options.constrainDimensions) {
      mirror.style.height = offsetHeight;
      mirror.style.width = offsetWidth;
    }
    resolve({
      mirror,
      source,
      options,
      ...args
    });
  });
}

function addMirrorClasses({
  mirror,
  mirrorClasses,
  ...args
}) {
  return withPromise(resolve => {
    mirror.classList.add(...mirrorClasses);
    resolve({
      mirror,
      mirrorClasses,
      ...args
    });
  });
}

function removeMirrorID({
  mirror,
  ...args
}) {
  return withPromise(resolve => {
    mirror.removeAttribute('id');
    delete mirror.id;
    resolve({
      mirror,
      ...args
    });
  });
}

function positionMirror({
  withFrame = false,
  initial = false
} = {}) {
  return ({
    mirror,
    sensorEvent,
    mirrorOffset,
    initialY,
    initialX,
    scrollOffset,
    options,
    passedThreshX,
    passedThreshY,
    lastMovedX,
    lastMovedY,
    ...args
  }) => {
    return withPromise(resolve => {
      const result = {
        mirror,
        sensorEvent,
        mirrorOffset,
        options,
        ...args
      };
      if (mirrorOffset) {
        const x = passedThreshX ? Math.round((sensorEvent.clientX - mirrorOffset.left - scrollOffset.x) / (options.thresholdX || 1)) * (options.thresholdX || 1) : Math.round(lastMovedX);
        const y = passedThreshY ? Math.round((sensorEvent.clientY - mirrorOffset.top - scrollOffset.y) / (options.thresholdY || 1)) * (options.thresholdY || 1) : Math.round(lastMovedY);
        if (options.xAxis && options.yAxis || initial) {
          mirror.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        } else if (options.xAxis && !options.yAxis) {
          mirror.style.transform = `translate3d(${x}px, ${initialY}px, 0)`;
        } else if (options.yAxis && !options.xAxis) {
          mirror.style.transform = `translate3d(${initialX}px, ${y}px, 0)`;
        }
        if (initial) {
          result.initialX = x;
          result.initialY = y;
        }
        result.lastMovedX = x;
        result.lastMovedY = y;
      }
      resolve(result);
    }, {
      frame: withFrame
    });
  };
}

function withPromise(callback, {
  raf = false
} = {}) {
  return new Promise((resolve, reject) => {
    if (raf) {
      requestAnimationFrame(() => {
        callback(resolve, reject);
      });
    } else {
      callback(resolve, reject);
    }
  });
}

function isNativeDragEvent(sensorEvent) {
  return /^drag/.test(sensorEvent.originalEvent.type);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MirrorAttachedEvent: () => (/* binding */ MirrorAttachedEvent),
/* harmony export */   MirrorCreateEvent: () => (/* binding */ MirrorCreateEvent),
/* harmony export */   MirrorCreatedEvent: () => (/* binding */ MirrorCreatedEvent),
/* harmony export */   MirrorDestroyEvent: () => (/* binding */ MirrorDestroyEvent),
/* harmony export */   MirrorEvent: () => (/* binding */ MirrorEvent),
/* harmony export */   MirrorMoveEvent: () => (/* binding */ MirrorMoveEvent),
/* harmony export */   MirrorMovedEvent: () => (/* binding */ MirrorMovedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class MirrorEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get source() {
    return this.data.source;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get sourceContainer() {
    return this.data.sourceContainer;
  }

  get sensorEvent() {
    return this.data.sensorEvent;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }

  get originalEvent() {
    if (this.sensorEvent) {
      return this.sensorEvent.originalEvent;
    }
    return null;
  }
}

class MirrorCreateEvent extends MirrorEvent {}
MirrorCreateEvent.type = 'mirror:create';

class MirrorCreatedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorCreatedEvent.type = 'mirror:created';

class MirrorAttachedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorAttachedEvent.type = 'mirror:attached';

class MirrorMoveEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMoveEvent.type = 'mirror:move';
MirrorMoveEvent.cancelable = true;

class MirrorMovedEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }

  get passedThreshX() {
    return this.data.passedThreshX;
  }

  get passedThreshY() {
    return this.data.passedThreshY;
  }
}
MirrorMovedEvent.type = 'mirror:moved';

class MirrorDestroyEvent extends MirrorEvent {

  get mirror() {
    return this.data.mirror;
  }
}
MirrorDestroyEvent.type = 'mirror:destroy';
MirrorDestroyEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Scrollable/Scrollable.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollable),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions),
/* harmony export */   onDragMove: () => (/* binding */ onDragMove),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart),
/* harmony export */   onDragStop: () => (/* binding */ onDragStop),
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");



const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const scroll = Symbol('scroll');

const defaultOptions = {
  speed: 6,
  sensitivity: 50,
  scrollableElements: []
};

class Scrollable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.currentMousePosition = null;

    this.scrollAnimationFrame = null;

    this.scrollableElement = null;

    this.findScrollableElementFrame = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[scroll] = this[scroll].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getOptions() {
    return this.draggable.options.scrollable || {};
  }

  getScrollableElement(target) {
    if (this.hasDefinedScrollableElements()) {
      return (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(target, this.options.scrollableElements) || document.documentElement;
    } else {
      return closestScrollableElement(target);
    }
  }

  hasDefinedScrollableElements() {
    return Boolean(this.options.scrollableElements.length !== 0);
  }

  [onDragStart](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.source);
    });
  }

  [onDragMove](dragEvent) {
    this.findScrollableElementFrame = requestAnimationFrame(() => {
      this.scrollableElement = this.getScrollableElement(dragEvent.sensorEvent.target);
    });
    if (!this.scrollableElement) {
      return;
    }
    const sensorEvent = dragEvent.sensorEvent;
    const scrollOffset = {
      x: 0,
      y: 0
    };
    if ('ontouchstart' in window) {
      scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
    this.currentMousePosition = {
      clientX: sensorEvent.clientX - scrollOffset.x,
      clientY: sensorEvent.clientY - scrollOffset.y
    };
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }

  [onDragStop]() {
    cancelAnimationFrame(this.scrollAnimationFrame);
    cancelAnimationFrame(this.findScrollableElementFrame);
    this.scrollableElement = null;
    this.scrollAnimationFrame = null;
    this.findScrollableElementFrame = null;
    this.currentMousePosition = null;
  }

  [scroll]() {
    if (!this.scrollableElement || !this.currentMousePosition) {
      return;
    }
    cancelAnimationFrame(this.scrollAnimationFrame);
    const {
      speed,
      sensitivity
    } = this.options;
    const rect = this.scrollableElement.getBoundingClientRect();
    const bottomCutOff = rect.bottom > window.innerHeight;
    const topCutOff = rect.top < 0;
    const cutOff = topCutOff || bottomCutOff;
    const documentScrollingElement = getDocumentScrollingElement();
    const scrollableElement = this.scrollableElement;
    const clientX = this.currentMousePosition.clientX;
    const clientY = this.currentMousePosition.clientY;
    if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
      const {
        offsetHeight,
        offsetWidth
      } = scrollableElement;
      if (rect.top + offsetHeight - clientY < sensitivity) {
        scrollableElement.scrollTop += speed;
      } else if (clientY - rect.top < sensitivity) {
        scrollableElement.scrollTop -= speed;
      }
      if (rect.left + offsetWidth - clientX < sensitivity) {
        scrollableElement.scrollLeft += speed;
      } else if (clientX - rect.left < sensitivity) {
        scrollableElement.scrollLeft -= speed;
      }
    } else {
      const {
        innerHeight,
        innerWidth
      } = window;
      if (clientY < sensitivity) {
        documentScrollingElement.scrollTop -= speed;
      } else if (innerHeight - clientY < sensitivity) {
        documentScrollingElement.scrollTop += speed;
      }
      if (clientX < sensitivity) {
        documentScrollingElement.scrollLeft -= speed;
      } else if (innerWidth - clientX < sensitivity) {
        documentScrollingElement.scrollLeft += speed;
      }
    }
    this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
  }
}

function hasOverflow(element) {
  const overflowRegex = /(auto|scroll)/;
  const computedStyles = getComputedStyle(element, null);
  const overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');
  return overflowRegex.test(overflow);
}

function isStaticallyPositioned(element) {
  const position = getComputedStyle(element).getPropertyValue('position');
  return position === 'static';
}

function closestScrollableElement(element) {
  if (!element) {
    return getDocumentScrollingElement();
  }
  const position = getComputedStyle(element).getPropertyValue('position');
  const excludeStaticParents = position === 'absolute';
  const scrollableElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(element, parent => {
    if (excludeStaticParents && isStaticallyPositioned(parent)) {
      return false;
    }
    return hasOverflow(parent);
  });
  if (position === 'fixed' || !scrollableElement) {
    return getDocumentScrollingElement();
  } else {
    return scrollableElement;
  }
}

function getDocumentScrollingElement() {
  return document.scrollingElement || document.documentElement;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DragSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");




const onMouseDown = Symbol('onMouseDown');
const onMouseUp = Symbol('onMouseUp');
const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragEnd = Symbol('onDragEnd');
const onDrop = Symbol('onDrop');
const reset = Symbol('reset');

class DragSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.draggableElement = null;

    this.nativeDraggableElement = null;
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragEnd] = this[onDragEnd].bind(this);
    this[onDrop] = this[onDrop].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onDragStart](event) {

    event.dataTransfer.setData('text', '');
    event.dataTransfer.effectAllowed = this.options.type;
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const originalSource = this.draggableElement;
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      originalSource,
      container: this.currentContainer,
      originalEvent: event
    });

    setTimeout(() => {
      this.trigger(this.currentContainer, dragStartEvent);
      if (dragStartEvent.canceled()) {
        this.dragging = false;
      } else {
        this.dragging = true;
      }
    }, 0);
  }

  [onDragOver](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragMoveEvent);
    if (!dragMoveEvent.canceled()) {
      event.preventDefault();
      event.dataTransfer.dropEffect = this.options.type;
    }
  }

  [onDragEnd](event) {
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp], true);
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = this.currentContainer;
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragStopEvent);
    this.dragging = false;
    this.startEvent = null;
    this[reset]();
  }

  [onDrop](event) {
    event.preventDefault();
  }

  [onMouseDown](event) {

    if (event.target && (event.target.form || event.target.contenteditable)) {
      return;
    }
    const target = event.target;
    this.currentContainer = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.containers);
    if (!this.currentContainer) {
      return;
    }
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const nativeDraggableElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, element => element.draggable);
    if (nativeDraggableElement) {
      nativeDraggableElement.draggable = false;
      this.nativeDraggableElement = nativeDraggableElement;
    }
    document.addEventListener('mouseup', this[onMouseUp], true);
    document.addEventListener('dragstart', this[onDragStart], false);
    document.addEventListener('dragover', this[onDragOver], false);
    document.addEventListener('dragend', this[onDragEnd], false);
    document.addEventListener('drop', this[onDrop], false);
    this.startEvent = event;
    this.mouseDownTimeout = setTimeout(() => {
      originalSource.draggable = true;
      this.draggableElement = originalSource;
    }, this.delay.drag);
  }

  [onMouseUp]() {
    this[reset]();
  }

  [reset]() {
    clearTimeout(this.mouseDownTimeout);
    document.removeEventListener('mouseup', this[onMouseUp], true);
    document.removeEventListener('dragstart', this[onDragStart], false);
    document.removeEventListener('dragover', this[onDragOver], false);
    document.removeEventListener('dragend', this[onDragEnd], false);
    document.removeEventListener('drop', this[onDrop], false);
    if (this.nativeDraggableElement) {
      this.nativeDraggableElement.draggable = true;
      this.nativeDraggableElement = null;
    }
    if (this.draggableElement) {
      this.draggableElement.draggable = false;
      this.draggableElement = null;
    }
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForceTouchSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");




const onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
const onMouseForceDown = Symbol('onMouseForceDown');
const onMouseDown = Symbol('onMouseDown');
const onMouseForceChange = Symbol('onMouseForceChange');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

class ForceTouchSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mightDrag = false;
    this[onMouseForceWillBegin] = this[onMouseForceWillBegin].bind(this);
    this[onMouseForceDown] = this[onMouseForceDown].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseForceChange] = this[onMouseForceChange].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
  }

  attach() {
    for (const container of this.containers) {
      container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.addEventListener('mousedown', this[onMouseDown], true);
      container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.addEventListener('mousemove', this[onMouseMove]);
    document.addEventListener('mouseup', this[onMouseUp]);
  }

  detach() {
    for (const container of this.containers) {
      container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
      container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
      container.removeEventListener('mousedown', this[onMouseDown], true);
      container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
    }
    document.removeEventListener('mousemove', this[onMouseMove]);
    document.removeEventListener('mouseup', this[onMouseUp]);
  }

  [onMouseForceWillBegin](event) {
    event.preventDefault();
    this.mightDrag = true;
  }

  [onMouseForceDown](event) {
    if (this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const container = event.currentTarget;
    if (this.options.handle && target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStartSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalSource,
      originalEvent: event
    });
    this.trigger(container, dragStartEvent);
    this.currentContainer = container;
    this.dragging = !dragStartEvent.canceled();
    this.mightDrag = false;
  }

  [onMouseUp](event) {
    if (!this.dragging) {
      return;
    }
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target: null,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.mightDrag = false;
  }

  [onMouseDown](event) {
    if (!this.mightDrag) {
      return;
    }

    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseForceChange](event) {
    if (this.dragging) {
      return;
    }
    const target = event.target;
    const container = event.currentTarget;
    const dragPressureEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container,
      originalEvent: event
    });
    this.trigger(container, dragPressureEvent);
  }

  [onMouseForceGlobalChange](event) {
    if (!this.dragging) {
      return;
    }
    const target = event.target;
    const dragPressureEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.DragPressureSensorEvent({
      pressure: event.webkitForce,
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragPressureEvent);
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MouseSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/distance/distance.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");





const onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
const onMouseDown = Symbol('onMouseDown');
const onMouseMove = Symbol('onMouseMove');
const onMouseUp = Symbol('onMouseUp');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

class MouseSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.mouseDownTimeout = null;

    this.pageX = null;

    this.pageY = null;
    this[onContextMenuWhileDragging] = this[onContextMenuWhileDragging].bind(this);
    this[onMouseDown] = this[onMouseDown].bind(this);
    this[onMouseMove] = this[onMouseMove].bind(this);
    this[onMouseUp] = this[onMouseUp].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('mousedown', this[onMouseDown], true);
  }

  detach() {
    document.removeEventListener('mousedown', this[onMouseDown], true);
  }

  [onMouseDown](event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey) {
      return;
    }
    const container = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = event;
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onMouseDownAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('mouseup', this[onMouseUp]);
    document.addEventListener('dragstart', preventNativeDragStart);
    document.addEventListener('mousemove', this[onDistanceChange]);
    this.mouseDownTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        pageX: this.pageX,
        pageY: this.pageY
      });
    }, delay.mouse);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const originalSource = this.originalSource;
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragStartSensorEvent({
      clientX: startEvent.clientX,
      clientY: startEvent.clientY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('contextmenu', this[onContextMenuWhileDragging], true);
      document.addEventListener('mousemove', this[onMouseMove]);
    }
  }

  [onDistanceChange](event) {
    const {
      pageX,
      pageY
    } = event;
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    Object.assign(this, {
      pageX,
      pageY
    });
    if (!this.currentContainer) {
      return;
    }
    const timeElapsed = Date.now() - this.onMouseDownAt;
    const distanceTravelled = (0,_shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(startEvent.pageX, startEvent.pageY, pageX, pageY) || 0;
    clearTimeout(this.mouseDownTimeout);
    if (timeElapsed < delay.mouse) {

      document.removeEventListener('mousemove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('mousemove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onMouseMove](event) {
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragMoveSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onMouseUp](event) {
    clearTimeout(this.mouseDownTimeout);
    if (event.button !== 0) {
      return;
    }
    document.removeEventListener('mouseup', this[onMouseUp]);
    document.removeEventListener('dragstart', preventNativeDragStart);
    document.removeEventListener('mousemove', this[onDistanceChange]);
    if (!this.dragging) {
      return;
    }
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_3__.DragStopSensorEvent({
      clientX: event.clientX,
      clientY: event.clientY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    document.removeEventListener('contextmenu', this[onContextMenuWhileDragging], true);
    document.removeEventListener('mousemove', this[onMouseMove]);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }

  [onContextMenuWhileDragging](event) {
    event.preventDefault();
  }
}
function preventNativeDragStart(event) {
  event.preventDefault();
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sensor)
/* harmony export */ });
const defaultDelay = {
  mouse: 0,
  drag: 0,
  touch: 100
};

class Sensor {

  constructor(containers = [], options = {}) {

    this.containers = [...containers];

    this.options = {
      ...options
    };

    this.dragging = false;

    this.currentContainer = null;

    this.originalSource = null;

    this.startEvent = null;

    this.delay = calcDelay(options.delay);
  }

  attach() {
    return this;
  }

  detach() {
    return this;
  }

  addContainer(...containers) {
    this.containers = [...this.containers, ...containers];
  }

  removeContainer(...containers) {
    this.containers = this.containers.filter(container => !containers.includes(container));
  }

  trigger(element, sensorEvent) {
    const event = document.createEvent('Event');
    event.detail = sensorEvent;
    event.initEvent(sensorEvent.type, true, true);
    element.dispatchEvent(event);
    this.lastEvent = sensorEvent;
    return sensorEvent;
  }
}

function calcDelay(optionsDelay) {
  const delay = {};
  if (optionsDelay === undefined) {
    return {
      ...defaultDelay
    };
  }
  if (typeof optionsDelay === 'number') {
    for (const key in defaultDelay) {
      if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
        delay[key] = optionsDelay;
      }
    }
    return delay;
  }
  for (const key in defaultDelay) {
    if (Object.prototype.hasOwnProperty.call(defaultDelay, key)) {
      if (optionsDelay[key] === undefined) {
        delay[key] = defaultDelay[key];
      } else {
        delay[key] = optionsDelay[key];
      }
    }
  }
  return delay;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragMoveSensorEvent: () => (/* binding */ DragMoveSensorEvent),
/* harmony export */   DragPressureSensorEvent: () => (/* binding */ DragPressureSensorEvent),
/* harmony export */   DragStartSensorEvent: () => (/* binding */ DragStartSensorEvent),
/* harmony export */   DragStopSensorEvent: () => (/* binding */ DragStopSensorEvent),
/* harmony export */   SensorEvent: () => (/* binding */ SensorEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SensorEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get originalEvent() {
    return this.data.originalEvent;
  }

  get clientX() {
    return this.data.clientX;
  }

  get clientY() {
    return this.data.clientY;
  }

  get target() {
    return this.data.target;
  }

  get container() {
    return this.data.container;
  }

  get originalSource() {
    return this.data.originalSource;
  }

  get pressure() {
    return this.data.pressure;
  }
}

class DragStartSensorEvent extends SensorEvent {}

DragStartSensorEvent.type = 'drag:start';
class DragMoveSensorEvent extends SensorEvent {}

DragMoveSensorEvent.type = 'drag:move';
class DragStopSensorEvent extends SensorEvent {}

DragStopSensorEvent.type = 'drag:stop';
class DragPressureSensorEvent extends SensorEvent {}
DragPressureSensorEvent.type = 'drag:pressure';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TouchSensor)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/distance/distance.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs");
/* harmony import */ var _shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utils/touchCoords/touchCoords.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs");
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");






const onTouchStart = Symbol('onTouchStart');
const onTouchEnd = Symbol('onTouchEnd');
const onTouchMove = Symbol('onTouchMove');
const startDrag = Symbol('startDrag');
const onDistanceChange = Symbol('onDistanceChange');

let preventScrolling = false;

window.addEventListener('touchmove', event => {
  if (!preventScrolling) {
    return;
  }

  event.preventDefault();
}, {
  passive: false
});

class TouchSensor extends _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, options);

    this.currentScrollableParent = null;

    this.tapTimeout = null;

    this.touchMoved = false;

    this.pageX = null;

    this.pageY = null;
    this[onTouchStart] = this[onTouchStart].bind(this);
    this[onTouchEnd] = this[onTouchEnd].bind(this);
    this[onTouchMove] = this[onTouchMove].bind(this);
    this[startDrag] = this[startDrag].bind(this);
    this[onDistanceChange] = this[onDistanceChange].bind(this);
  }

  attach() {
    document.addEventListener('touchstart', this[onTouchStart]);
  }

  detach() {
    document.removeEventListener('touchstart', this[onTouchStart]);
  }

  [onTouchStart](event) {
    const container = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.containers);
    if (!container) {
      return;
    }
    if (this.options.handle && event.target && !(0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.handle)) {
      return;
    }
    const originalSource = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.target, this.options.draggable);
    if (!originalSource) {
      return;
    }
    const {
      distance = 0
    } = this.options;
    const {
      delay
    } = this;
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    Object.assign(this, {
      pageX,
      pageY
    });
    this.onTouchStartAt = Date.now();
    this.startEvent = event;
    this.currentContainer = container;
    this.originalSource = originalSource;
    document.addEventListener('touchend', this[onTouchEnd]);
    document.addEventListener('touchcancel', this[onTouchEnd]);
    document.addEventListener('touchmove', this[onDistanceChange]);
    container.addEventListener('contextmenu', onContextMenu);
    if (distance) {
      preventScrolling = true;
    }
    this.tapTimeout = window.setTimeout(() => {
      this[onDistanceChange]({
        touches: [{
          pageX: this.pageX,
          pageY: this.pageY
        }]
      });
    }, delay.touch);
  }

  [startDrag]() {
    const startEvent = this.startEvent;
    const container = this.currentContainer;
    const touch = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(startEvent);
    const originalSource = this.originalSource;
    const dragStartEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragStartSensorEvent({
      clientX: touch.pageX,
      clientY: touch.pageY,
      target: startEvent.target,
      container,
      originalSource,
      originalEvent: startEvent
    });
    this.trigger(this.currentContainer, dragStartEvent);
    this.dragging = !dragStartEvent.canceled();
    if (this.dragging) {
      document.addEventListener('touchmove', this[onTouchMove]);
    }
    preventScrolling = this.dragging;
  }

  [onDistanceChange](event) {
    const {
      distance: distance$1
    } = this.options;
    const {
      startEvent,
      delay
    } = this;
    const start = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(startEvent);
    const current = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const timeElapsed = Date.now() - this.onTouchStartAt;
    const distanceTravelled = (0,_shared_utils_distance_distance_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(start.pageX, start.pageY, current.pageX, current.pageY);
    Object.assign(this, current);
    clearTimeout(this.tapTimeout);
    if (timeElapsed < delay.touch) {

      document.removeEventListener('touchmove', this[onDistanceChange]);
    } else if (distanceTravelled >= distance$1) {
      document.removeEventListener('touchmove', this[onDistanceChange]);
      this[startDrag]();
    }
  }

  [onTouchMove](event) {
    if (!this.dragging) {
      return;
    }
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    const dragMoveEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragMoveSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragMoveEvent);
  }

  [onTouchEnd](event) {
    clearTimeout(this.tapTimeout);
    preventScrolling = false;
    document.removeEventListener('touchend', this[onTouchEnd]);
    document.removeEventListener('touchcancel', this[onTouchEnd]);
    document.removeEventListener('touchmove', this[onDistanceChange]);
    if (this.currentContainer) {
      this.currentContainer.removeEventListener('contextmenu', onContextMenu);
    }
    if (!this.dragging) {
      return;
    }
    document.removeEventListener('touchmove', this[onTouchMove]);
    const {
      pageX,
      pageY
    } = (0,_shared_utils_touchCoords_touchCoords_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(event);
    const target = document.elementFromPoint(pageX - window.scrollX, pageY - window.scrollY);
    event.preventDefault();
    const dragStopEvent = new _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.DragStopSensorEvent({
      clientX: pageX,
      clientY: pageY,
      target,
      container: this.currentContainer,
      originalEvent: event
    });
    this.trigger(this.currentContainer, dragStopEvent);
    this.currentContainer = null;
    this.dragging = false;
    this.startEvent = null;
  }
}
function onContextMenu(event) {
  event.preventDefault();
  event.stopPropagation();
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragMoveSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragMoveSensorEvent),
/* harmony export */   DragPressureSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragPressureSensorEvent),
/* harmony export */   DragSensor: () => (/* reexport safe */ _DragSensor_DragSensor_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DragStartSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragStartSensorEvent),
/* harmony export */   DragStopSensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.DragStopSensorEvent),
/* harmony export */   ForceTouchSensor: () => (/* reexport safe */ _ForceTouchSensor_ForceTouchSensor_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   MouseSensor: () => (/* reexport safe */ _MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Sensor: () => (/* reexport safe */ _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SensorEvent: () => (/* reexport safe */ _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__.SensorEvent),
/* harmony export */   TouchSensor: () => (/* reexport safe */ _TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Sensor_Sensor_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sensor/Sensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/Sensor/Sensor.mjs");
/* harmony import */ var _MouseSensor_MouseSensor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MouseSensor/MouseSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/MouseSensor/MouseSensor.mjs");
/* harmony import */ var _TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _DragSensor_DragSensor_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DragSensor/DragSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/DragSensor/DragSensor.mjs");
/* harmony import */ var _ForceTouchSensor_ForceTouchSensor_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ForceTouchSensor/ForceTouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/ForceTouchSensor/ForceTouchSensor.mjs");
/* harmony import */ var _SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");








/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Droppable)
/* harmony export */ });
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DroppableEvent/DroppableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs");










const onDragStart = Symbol('onDragStart');
const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const dropInDropzone = Symbol('dropInDropZone');
const returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
const closestDropzone = Symbol('closestDropzone');
const getDropzones = Symbol('getDropzones');

function onDroppableDroppedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Dropped ${sourceText} into ${dropzoneText}`;
}

function onDroppableReturnedDefaultAnnouncement({
  dragEvent,
  dropzone
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
  const dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';
  return `Returned ${sourceText} from ${dropzoneText}`;
}

const defaultAnnouncements = {
  'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
  'droppable:returned': onDroppableReturnedDefaultAnnouncement
};
const defaultClasses = {
  'droppable:active': 'draggable-dropzone--active',
  'droppable:occupied': 'draggable-dropzone--occupied'
};
const defaultOptions = {
  dropzone: '.draggable-droppable'
};

class Droppable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...defaultOptions,
      ...options,
      classes: {
        ...defaultClasses,
        ...(options.classes || {})
      },
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.dropzones = null;

    this.lastDropzone = null;

    this.initialDropzone = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.dropzones = [...this[getDropzones]()];
    const dropzone = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(event.sensorEvent.target, this.options.dropzone);
    if (!dropzone) {
      event.cancel();
      return;
    }
    const droppableStartEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableStartEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableStartEvent);
    if (droppableStartEvent.canceled()) {
      event.cancel();
      return;
    }
    this.initialDropzone = dropzone;
    for (const dropzoneElement of this.dropzones) {
      if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
        continue;
      }
      dropzoneElement.classList.add(...this.getClassNamesFor('droppable:active'));
    }
  }

  [onDragMove](event) {
    if (event.canceled()) {
      return;
    }
    const dropzone = this[closestDropzone](event.sensorEvent.target);
    const overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));
    if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
      this.lastDropzone = dropzone;
    } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
      this[returnToOriginalDropzone](event);
      this.lastDropzone = null;
    }
  }

  [onDragStop](event) {
    const droppableStopEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableStopEvent({
      dragEvent: event,
      dropzone: this.lastDropzone || this.initialDropzone
    });
    this.trigger(droppableStopEvent);
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    for (const dropzone of this.dropzones) {
      dropzone.classList.remove(...this.getClassNamesFor('droppable:active'));
    }
    if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
      this.initialDropzone.classList.remove(...occupiedClasses);
    }
    this.dropzones = null;
    this.lastDropzone = null;
    this.initialDropzone = null;
  }

  [dropInDropzone](event, dropzone) {
    const droppableDroppedEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableDroppedEvent({
      dragEvent: event,
      dropzone
    });
    this.trigger(droppableDroppedEvent);
    if (droppableDroppedEvent.canceled()) {
      return false;
    }
    const occupiedClasses = this.getClassNamesFor('droppable:occupied');
    if (this.lastDropzone) {
      this.lastDropzone.classList.remove(...occupiedClasses);
    }
    dropzone.appendChild(event.source);
    dropzone.classList.add(...occupiedClasses);
    return true;
  }

  [returnToOriginalDropzone](event) {
    const droppableReturnedEvent = new _DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_8__.DroppableReturnedEvent({
      dragEvent: event,
      dropzone: this.lastDropzone
    });
    this.trigger(droppableReturnedEvent);
    if (droppableReturnedEvent.canceled()) {
      return;
    }
    this.initialDropzone.appendChild(event.source);
    this.lastDropzone.classList.remove(...this.getClassNamesFor('droppable:occupied'));
  }

  [closestDropzone](target) {
    if (!this.dropzones) {
      return null;
    }
    return (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(target, this.dropzones);
  }

  [getDropzones]() {
    const dropzone = this.options.dropzone;
    if (typeof dropzone === 'string') {
      return document.querySelectorAll(dropzone);
    } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
      return dropzone;
    } else if (typeof dropzone === 'function') {
      return dropzone();
    } else {
      return [];
    }
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DroppableDroppedEvent: () => (/* binding */ DroppableDroppedEvent),
/* harmony export */   DroppableEvent: () => (/* binding */ DroppableEvent),
/* harmony export */   DroppableReturnedEvent: () => (/* binding */ DroppableReturnedEvent),
/* harmony export */   DroppableStartEvent: () => (/* binding */ DroppableStartEvent),
/* harmony export */   DroppableStopEvent: () => (/* binding */ DroppableStopEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class DroppableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
DroppableEvent.type = 'droppable';

class DroppableStartEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStartEvent.type = 'droppable:start';
DroppableStartEvent.cancelable = true;

class DroppableDroppedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableDroppedEvent.type = 'droppable:dropped';
DroppableDroppedEvent.cancelable = true;

class DroppableReturnedEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableReturnedEvent.type = 'droppable:returned';
DroppableReturnedEvent.cancelable = true;

class DroppableStopEvent extends DroppableEvent {

  get dropzone() {
    return this.data.dropzone;
  }
}
DroppableStopEvent.type = 'droppable:stop';
DroppableStopEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collidable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/utils/closest/closest.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs");
/* harmony import */ var _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollidableEvent/CollidableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs");




const onDragMove = Symbol('onDragMove');
const onDragStop = Symbol('onDragStop');
const onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

class Collidable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.currentlyCollidingElement = null;

    this.lastCollidingElement = null;

    this.currentAnimationFrame = null;
    this[onDragMove] = this[onDragMove].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onRequestAnimationFrame] = this[onRequestAnimationFrame].bind(this);
  }

  attach() {
    this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
  }

  detach() {
    this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
  }

  getCollidables() {
    const collidables = this.draggable.options.collidables;
    if (typeof collidables === 'string') {
      return Array.prototype.slice.call(document.querySelectorAll(collidables));
    } else if (collidables instanceof NodeList || collidables instanceof Array) {
      return Array.prototype.slice.call(collidables);
    } else if (collidables instanceof HTMLElement) {
      return [collidables];
    } else if (typeof collidables === 'function') {
      return collidables();
    } else {
      return [];
    }
  }

  [onDragMove](event) {
    const target = event.sensorEvent.target;
    this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));
    if (this.currentlyCollidingElement) {
      event.cancel();
    }
    const collidableInEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableInEvent({
      dragEvent: event,
      collidingElement: this.currentlyCollidingElement
    });
    const collidableOutEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableOutEvent({
      dragEvent: event,
      collidingElement: this.lastCollidingElement
    });
    const enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
    const leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);
    if (enteringCollidable) {
      if (this.lastCollidingElement) {
        this.draggable.trigger(collidableOutEvent);
      }
      this.draggable.trigger(collidableInEvent);
    } else if (leavingCollidable) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = this.currentlyCollidingElement;
  }

  [onDragStop](event) {
    const lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
    const collidableOutEvent = new _CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__.CollidableOutEvent({
      dragEvent: event,
      collidingElement: lastCollidingElement
    });
    if (lastCollidingElement) {
      this.draggable.trigger(collidableOutEvent);
    }
    this.lastCollidingElement = null;
    this.currentlyCollidingElement = null;
  }

  [onRequestAnimationFrame](target) {
    return () => {
      const collidables = this.getCollidables();
      this.currentlyCollidingElement = (0,_shared_utils_closest_closest_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(target, element => collidables.includes(element));
    };
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollidableEvent: () => (/* binding */ CollidableEvent),
/* harmony export */   CollidableInEvent: () => (/* binding */ CollidableInEvent),
/* harmony export */   CollidableOutEvent: () => (/* binding */ CollidableOutEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class CollidableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
CollidableEvent.type = 'collidable';

class CollidableInEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableInEvent.type = 'collidable:in';

class CollidableOutEvent extends CollidableEvent {

  get collidingElement() {
    return this.data.collidingElement;
  }
}
CollidableOutEvent.type = 'collidable:out';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResizeMirror),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.mjs */ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/decorators/AutoBind.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs");
/* harmony import */ var _shared_utils_requestNextAnimationFrame_requestNextAnimationFrame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");






var _initProto, _class;

const defaultOptions = {};

class ResizeMirror extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.lastWidth = 0;

    this.lastHeight = 0;

    this.mirror = null;
  }

  attach() {
    this.draggable.on('mirror:created', this.onMirrorCreated).on('drag:over', this.onDragOver).on('drag:over:container', this.onDragOver);
  }

  detach() {
    this.draggable.off('mirror:created', this.onMirrorCreated).off('mirror:destroy', this.onMirrorDestroy).off('drag:over', this.onDragOver).off('drag:over:container', this.onDragOver);
  }

  getOptions() {
    return this.draggable.options.resizeMirror || {};
  }

  onMirrorCreated({
    mirror
  }) {
    this.mirror = mirror;
  }

  onMirrorDestroy() {
    this.mirror = null;
  }

  onDragOver(dragEvent) {
    this.resize(dragEvent);
  }

  resize(dragEvent) {
    requestAnimationFrame(() => {
      let over = null;
      const {
        overContainer
      } = dragEvent;
      if (this.mirror == null || this.mirror.parentNode == null) {
        return;
      }
      if (this.mirror.parentNode !== overContainer) {
        overContainer.appendChild(this.mirror);
      }
      if ((0,_Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_4__.isDragOverEvent)(dragEvent)) {
        over = dragEvent.over;
      }
      const overElement = over || this.draggable.getDraggableElementsForContainer(overContainer)[0];
      if (!overElement) {
        return;
      }
      (0,_shared_utils_requestNextAnimationFrame_requestNextAnimationFrame_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
        const overRect = overElement.getBoundingClientRect();
        if (this.mirror == null || this.lastHeight === overRect.height && this.lastWidth === overRect.width) {
          return;
        }
        this.mirror.style.width = `${overRect.width}px`;
        this.mirror.style.height = `${overRect.height}px`;
        this.lastWidth = overRect.width;
        this.lastHeight = overRect.height;
      });
    });
  }
}
_class = ResizeMirror;
[_initProto] = (0,_virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__.applyDecs2305)(_class, [[_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onMirrorCreated"], [_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onMirrorDestroy"], [_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onDragOver"]], [], 0, void 0, _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin).e;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Snappable)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SnappableEvent/SnappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs");



const onDragStart = Symbol('onDragStart');
const onDragStop = Symbol('onDragStop');
const onDragOver = Symbol('onDragOver');
const onDragOut = Symbol('onDragOut');
const onMirrorCreated = Symbol('onMirrorCreated');
const onMirrorDestroy = Symbol('onMirrorDestroy');

class Snappable extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.firstSource = null;

    this.mirror = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragOut] = this[onDragOut].bind(this);
    this[onMirrorCreated] = this[onMirrorCreated].bind(this);
    this[onMirrorDestroy] = this[onMirrorDestroy].bind(this);
  }

  attach() {
    this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
  }

  detach() {
    this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
  }

  [onDragStart](event) {
    if (event.canceled()) {
      return;
    }
    this.firstSource = event.source;
  }

  [onDragStop]() {
    this.firstSource = null;
  }

  [onDragOver](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    if (source === this.firstSource) {
      this.firstSource = null;
      return;
    }
    const snapInEvent = new _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.SnapInEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapInEvent);
    if (snapInEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = 'none';
    }
    source.classList.remove(...this.draggable.getClassNamesFor('source:dragging'));
    source.classList.add(...this.draggable.getClassNamesFor('source:placed'));

    setTimeout(() => {
      source.classList.remove(...this.draggable.getClassNamesFor('source:placed'));
    }, this.draggable.options.placedTimeout);
  }

  [onDragOut](event) {
    if (event.canceled()) {
      return;
    }
    const source = event.source || event.dragEvent.source;
    const snapOutEvent = new _SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__.SnapOutEvent({
      dragEvent: event,
      snappable: event.over || event.droppable
    });
    this.draggable.trigger(snapOutEvent);
    if (snapOutEvent.canceled()) {
      return;
    }
    if (this.mirror) {
      this.mirror.style.display = '';
    }
    source.classList.add(...this.draggable.getClassNamesFor('source:dragging'));
  }

  [onMirrorCreated]({
    mirror
  }) {
    this.mirror = mirror;
  }

  [onMirrorDestroy]() {
    this.mirror = null;
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnapEvent: () => (/* binding */ SnapEvent),
/* harmony export */   SnapInEvent: () => (/* binding */ SnapInEvent),
/* harmony export */   SnapOutEvent: () => (/* binding */ SnapOutEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SnapEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  get dragEvent() {
    return this.data.dragEvent;
  }

  get snappable() {
    return this.data.snappable;
  }
}

SnapEvent.type = 'snap';
class SnapInEvent extends SnapEvent {}

SnapInEvent.type = 'snap:in';
SnapInEvent.cancelable = true;
class SnapOutEvent extends SnapEvent {}
SnapOutEvent.type = 'snap:out';
SnapOutEvent.cancelable = true;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortAnimation),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");


const onSortableSorted = Symbol('onSortableSorted');
const onSortableSort = Symbol('onSortableSort');

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out'
};

class SortAnimation extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractPlugin {

  constructor(draggable) {
    super(draggable);

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
    this.lastElements = [];
    this[onSortableSorted] = this[onSortableSorted].bind(this);
    this[onSortableSort] = this[onSortableSort].bind(this);
  }

  attach() {
    this.draggable.on('sortable:sort', this[onSortableSort]);
    this.draggable.on('sortable:sorted', this[onSortableSorted]);
  }

  detach() {
    this.draggable.off('sortable:sort', this[onSortableSort]);
    this.draggable.off('sortable:sorted', this[onSortableSorted]);
  }

  getOptions() {
    return this.draggable.options.sortAnimation || {};
  }

  [onSortableSort]({
    dragEvent
  }) {
    const {
      sourceContainer
    } = dragEvent;
    const elements = this.draggable.getDraggableElementsForContainer(sourceContainer);
    this.lastElements = Array.from(elements).map(el => {
      return {
        domEl: el,
        offsetTop: el.offsetTop,
        offsetLeft: el.offsetLeft
      };
    });
  }

  [onSortableSorted]({
    oldIndex,
    newIndex
  }) {
    if (oldIndex === newIndex) {
      return;
    }
    const effectedElements = [];
    let start;
    let end;
    let num;
    if (oldIndex > newIndex) {
      start = newIndex;
      end = oldIndex - 1;
      num = 1;
    } else {
      start = oldIndex + 1;
      end = newIndex;
      num = -1;
    }
    for (let i = start; i <= end; i++) {
      const from = this.lastElements[i];
      const to = this.lastElements[i + num];
      effectedElements.push({
        from,
        to
      });
    }
    cancelAnimationFrame(this.lastAnimationFrame);

    this.lastAnimationFrame = requestAnimationFrame(() => {
      effectedElements.forEach(element => animate(element, this.options));
    });
  }
}

function animate({
  from,
  to
}, {
  duration,
  easingFunction
}) {
  const domEl = from.domEl;
  const x = from.offsetLeft - to.offsetLeft;
  const y = from.offsetTop - to.offsetTop;
  domEl.style.pointerEvents = 'none';
  domEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  requestAnimationFrame(() => {
    domEl.addEventListener('transitionend', resetElementOnTransitionEnd);
    domEl.style.transition = `transform ${duration}ms ${easingFunction}`;
    domEl.style.transform = '';
  });
}

function resetElementOnTransitionEnd(event) {
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SwapAnimation),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });
/* harmony import */ var _virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_virtual/_rollupPluginBabelHelpers.mjs */ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/decorators/AutoBind.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs");




var _initProto, _class;

const defaultOptions = {
  duration: 150,
  easingFunction: 'ease-in-out',
  horizontal: false
};

class SwapAnimation extends _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin {

  constructor(draggable) {
    _initProto(super(draggable));

    this.options = {
      ...defaultOptions,
      ...this.getOptions()
    };

    this.lastAnimationFrame = null;
  }

  attach() {
    this.draggable.on('sortable:sorted', this.onSortableSorted);
  }

  detach() {
    this.draggable.off('sortable:sorted', this.onSortableSorted);
  }

  getOptions() {
    return this.draggable.options.swapAnimation || {};
  }

  onSortableSorted({
    oldIndex,
    newIndex,
    dragEvent
  }) {
    const {
      source,
      over
    } = dragEvent;
    if (this.lastAnimationFrame) {
      cancelAnimationFrame(this.lastAnimationFrame);
    }

    this.lastAnimationFrame = requestAnimationFrame(() => {
      if (oldIndex >= newIndex) {
        animate(source, over, this.options);
      } else {
        animate(over, source, this.options);
      }
    });
  }
}

_class = SwapAnimation;
[_initProto] = (0,_virtual_rollupPluginBabelHelpers_mjs__WEBPACK_IMPORTED_MODULE_0__.applyDecs2305)(_class, [[_shared_utils_decorators_AutoBind_mjs__WEBPACK_IMPORTED_MODULE_2__.AutoBind, 2, "onSortableSorted"]], [], 0, void 0, _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin).e;
function animate(from, to, {
  duration,
  easingFunction,
  horizontal
}) {
  for (const element of [from, to]) {
    element.style.pointerEvents = 'none';
  }
  if (horizontal) {
    const width = from.offsetWidth;
    from.style.transform = `translate3d(${width}px, 0, 0)`;
    to.style.transform = `translate3d(-${width}px, 0, 0)`;
  } else {
    const height = from.offsetHeight;
    from.style.transform = `translate3d(0, ${height}px, 0)`;
    to.style.transform = `translate3d(0, -${height}px, 0)`;
  }
  requestAnimationFrame(() => {
    for (const element of [from, to]) {
      element.addEventListener('transitionend', resetElementOnTransitionEnd);
      element.style.transition = `transform ${duration}ms ${easingFunction}`;
      element.style.transform = '';
    }
  });
}

function resetElementOnTransitionEnd(event) {
  if (event.target == null || !isHTMLElement(event.target)) {
    return;
  }
  event.target.style.transition = '';
  event.target.style.pointerEvents = '';
  event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
}
function isHTMLElement(eventTarget) {
  return Boolean('style' in eventTarget);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collidable: () => (/* reexport safe */ _Collidable_Collidable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ResizeMirror: () => (/* reexport safe */ _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Snappable: () => (/* reexport safe */ _Snappable_Snappable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   SortAnimation: () => (/* reexport safe */ _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SwapAnimation: () => (/* reexport safe */ _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   defaultResizeMirrorOptions: () => (/* reexport safe */ _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__.defaultOptions),
/* harmony export */   defaultSortAnimationOptions: () => (/* reexport safe */ _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__.defaultOptions),
/* harmony export */   defaultSwapAnimationOptions: () => (/* reexport safe */ _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__.defaultOptions)
/* harmony export */ });
/* harmony import */ var _Collidable_Collidable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collidable/Collidable.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/Collidable.mjs");
/* harmony import */ var _Collidable_CollidableEvent_CollidableEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collidable/CollidableEvent/CollidableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Collidable/CollidableEvent/CollidableEvent.mjs");
/* harmony import */ var _ResizeMirror_ResizeMirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeMirror/ResizeMirror.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/ResizeMirror/ResizeMirror.mjs");
/* harmony import */ var _Snappable_Snappable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Snappable/Snappable.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/Snappable.mjs");
/* harmony import */ var _Snappable_SnappableEvent_SnappableEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Snappable/SnappableEvent/SnappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/Snappable/SnappableEvent/SnappableEvent.mjs");
/* harmony import */ var _SwapAnimation_SwapAnimation_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SwapAnimation/SwapAnimation.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/SwapAnimation/SwapAnimation.mjs");
/* harmony import */ var _SortAnimation_SortAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SortAnimation/SortAnimation.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/SortAnimation/SortAnimation.mjs");









/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sortable)
/* harmony export */ });
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SortableEvent/SortableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs");









const onDragStart = Symbol('onDragStart');
const onDragOverContainer = Symbol('onDragOverContainer');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSortableSortedDefaultAnnouncement({
  dragEvent
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';
  if (dragEvent.over) {
    const overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
    const isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;
    if (isFollowing) {
      return `Placed ${sourceText} after ${overText}`;
    } else {
      return `Placed ${sourceText} before ${overText}`;
    }
  } else {

    return `Placed ${sourceText} into a different container`;
  }
}

const defaultAnnouncements = {
  'sortable:sorted': onSortableSortedDefaultAnnouncement
};

class Sortable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.startIndex = null;

    this.startContainer = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOverContainer] = this[onDragOverContainer].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over:container', this[onDragOverContainer]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
  }

  index(element) {
    return this.getSortableElementsForContainer(element.parentNode).indexOf(element);
  }

  getSortableElementsForContainer(container) {
    const allSortableElements = container.querySelectorAll(this.options.draggable);
    return [...allSortableElements].filter(childElement => {
      return childElement !== this.originalSource && childElement !== this.mirror && childElement.parentNode === container;
    });
  }

  [onDragStart](event) {
    this.startContainer = event.source.parentNode;
    this.startIndex = this.index(event.source);
    const sortableStartEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableStartEvent({
      dragEvent: event,
      startIndex: this.startIndex,
      startContainer: this.startContainer
    });
    this.trigger(sortableStartEvent);
    if (sortableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOverContainer](event) {
    if (event.canceled()) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getSortableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(event.source);
    const sortableSortedEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source) {
      return;
    }
    const {
      source,
      over,
      overContainer
    } = event;
    const oldIndex = this.index(source);
    const sortableSortEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortEvent({
      dragEvent: event,
      currentIndex: oldIndex,
      source,
      over
    });
    this.trigger(sortableSortEvent);
    if (sortableSortEvent.canceled()) {
      return;
    }
    const children = this.getDraggableElementsForContainer(overContainer);
    const moves = move({
      source,
      over,
      overContainer,
      children
    });
    if (!moves) {
      return;
    }
    const {
      oldContainer,
      newContainer
    } = moves;
    const newIndex = this.index(source);
    const sortableSortedEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableSortedEvent({
      dragEvent: event,
      oldIndex,
      newIndex,
      oldContainer,
      newContainer
    });
    this.trigger(sortableSortedEvent);
  }

  [onDragStop](event) {
    const sortableStopEvent = new _SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SortableStopEvent({
      dragEvent: event,
      oldIndex: this.startIndex,
      newIndex: this.index(event.source),
      oldContainer: this.startContainer,
      newContainer: event.source.parentNode
    });
    this.trigger(sortableStopEvent);
    this.startIndex = null;
    this.startContainer = null;
  }
}
function index(element) {
  return Array.prototype.indexOf.call(element.parentNode.children, element);
}
function move({
  source,
  over,
  overContainer,
  children
}) {
  const emptyOverContainer = !children.length;
  const differentContainer = source.parentNode !== overContainer;
  const sameContainer = over && source.parentNode === over.parentNode;
  if (emptyOverContainer) {
    return moveInsideEmptyContainer(source, overContainer);
  } else if (sameContainer) {
    return moveWithinContainer(source, over);
  } else if (differentContainer) {
    return moveOutsideContainer(source, over, overContainer);
  } else {
    return null;
  }
}
function moveInsideEmptyContainer(source, overContainer) {
  const oldContainer = source.parentNode;
  overContainer.appendChild(source);
  return {
    oldContainer,
    newContainer: overContainer
  };
}
function moveWithinContainer(source, over) {
  const oldIndex = index(source);
  const newIndex = index(over);
  if (oldIndex < newIndex) {
    source.parentNode.insertBefore(source, over.nextElementSibling);
  } else {
    source.parentNode.insertBefore(source, over);
  }
  return {
    oldContainer: source.parentNode,
    newContainer: source.parentNode
  };
}
function moveOutsideContainer(source, over, overContainer) {
  const oldContainer = source.parentNode;
  if (over) {
    over.parentNode.insertBefore(source, over);
  } else {

    overContainer.appendChild(source);
  }
  return {
    oldContainer,
    newContainer: source.parentNode
  };
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableEvent: () => (/* binding */ SortableEvent),
/* harmony export */   SortableSortEvent: () => (/* binding */ SortableSortEvent),
/* harmony export */   SortableSortedEvent: () => (/* binding */ SortableSortedEvent),
/* harmony export */   SortableStartEvent: () => (/* binding */ SortableStartEvent),
/* harmony export */   SortableStopEvent: () => (/* binding */ SortableStopEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SortableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}
SortableEvent.type = 'sortable';

class SortableStartEvent extends SortableEvent {

  get startIndex() {
    return this.data.startIndex;
  }

  get startContainer() {
    return this.data.startContainer;
  }
}
SortableStartEvent.type = 'sortable:start';
SortableStartEvent.cancelable = true;

class SortableSortEvent extends SortableEvent {

  get currentIndex() {
    return this.data.currentIndex;
  }

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.dragEvent.overContainer;
  }
}
SortableSortEvent.type = 'sortable:sort';
SortableSortEvent.cancelable = true;

class SortableSortedEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableSortedEvent.type = 'sortable:sorted';

class SortableStopEvent extends SortableEvent {

  get oldIndex() {
    return this.data.oldIndex;
  }

  get newIndex() {
    return this.data.newIndex;
  }

  get oldContainer() {
    return this.data.oldContainer;
  }

  get newContainer() {
    return this.data.newContainer;
  }
}
SortableStopEvent.type = 'sortable:stop';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Swappable)
/* harmony export */ });
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_SensorEvent_SensorEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Draggable/Sensors/SensorEvent/SensorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/SensorEvent/SensorEvent.mjs");
/* harmony import */ var _Draggable_Sensors_TouchSensor_TouchSensor_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Draggable/Sensors/TouchSensor/TouchSensor.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/TouchSensor/TouchSensor.mjs");
/* harmony import */ var _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SwappableEvent/SwappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs");









const onDragStart = Symbol('onDragStart');
const onDragOver = Symbol('onDragOver');
const onDragStop = Symbol('onDragStop');

function onSwappableSwappedDefaultAnnouncement({
  dragEvent,
  swappedElement
}) {
  const sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
  const overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';
  return `Swapped ${sourceText} with ${overText}`;
}

const defaultAnnouncements = {
  'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
};

class Swappable extends _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {

  constructor(containers = [], options = {}) {
    super(containers, {
      ...options,
      announcements: {
        ...defaultAnnouncements,
        ...(options.announcements || {})
      }
    });

    this.lastOver = null;
    this[onDragStart] = this[onDragStart].bind(this);
    this[onDragOver] = this[onDragOver].bind(this);
    this[onDragStop] = this[onDragStop].bind(this);
    this.on('drag:start', this[onDragStart]).on('drag:over', this[onDragOver]).on('drag:stop', this[onDragStop]);
  }

  destroy() {
    super.destroy();
    this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
  }

  [onDragStart](event) {
    const swappableStartEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableStartEvent({
      dragEvent: event
    });
    this.trigger(swappableStartEvent);
    if (swappableStartEvent.canceled()) {
      event.cancel();
    }
  }

  [onDragOver](event) {
    if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
      return;
    }
    const swappableSwapEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableSwapEvent({
      dragEvent: event,
      over: event.over,
      overContainer: event.overContainer
    });
    this.trigger(swappableSwapEvent);
    if (swappableSwapEvent.canceled()) {
      return;
    }

    if (this.lastOver && this.lastOver !== event.over) {
      swap(this.lastOver, event.source);
    }
    if (this.lastOver === event.over) {
      this.lastOver = null;
    } else {
      this.lastOver = event.over;
    }
    swap(event.source, event.over);
    const swappableSwappedEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableSwappedEvent({
      dragEvent: event,
      swappedElement: event.over
    });
    this.trigger(swappableSwappedEvent);
  }

  [onDragStop](event) {
    const swappableStopEvent = new _SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_7__.SwappableStopEvent({
      dragEvent: event
    });
    this.trigger(swappableStopEvent);
    this.lastOver = null;
  }
}
function withTempElement(callback) {
  const tmpElement = document.createElement('div');
  callback(tmpElement);
  tmpElement.remove();
}
function swap(source, over) {
  const overParent = over.parentNode;
  const sourceParent = source.parentNode;
  withTempElement(tmpElement => {
    sourceParent.insertBefore(tmpElement, source);
    overParent.insertBefore(source, over);
    sourceParent.insertBefore(over, tmpElement);
  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwappableEvent: () => (/* binding */ SwappableEvent),
/* harmony export */   SwappableStartEvent: () => (/* binding */ SwappableStartEvent),
/* harmony export */   SwappableStopEvent: () => (/* binding */ SwappableStopEvent),
/* harmony export */   SwappableSwapEvent: () => (/* binding */ SwappableSwapEvent),
/* harmony export */   SwappableSwappedEvent: () => (/* binding */ SwappableSwappedEvent)
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");


class SwappableEvent extends _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent {

  constructor(data) {
    super(data);
    this.data = data;
  }

  get dragEvent() {
    return this.data.dragEvent;
  }
}

SwappableEvent.type = 'swappable';
class SwappableStartEvent extends SwappableEvent {}
SwappableStartEvent.type = 'swappable:start';
SwappableStartEvent.cancelable = true;

class SwappableSwapEvent extends SwappableEvent {

  get over() {
    return this.data.over;
  }

  get overContainer() {
    return this.data.overContainer;
  }
}
SwappableSwapEvent.type = 'swappable:swap';
SwappableSwapEvent.cancelable = true;

class SwappableSwappedEvent extends SwappableEvent {

  get swappedElement() {
    return this.data.swappedElement;
  }
}

SwappableSwappedEvent.type = 'swappable:swapped';
class SwappableStopEvent extends SwappableEvent {}
SwappableStopEvent.type = 'swappable:stop';




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/_virtual/_rollupPluginBabelHelpers.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDecs2305: () => (/* binding */ _applyDecs2305),
/* harmony export */   checkInRHS: () => (/* binding */ _checkInRHS)
/* harmony export */ });
function createAddInitializerMethod(e, t) {
  return function (r) {
    assertNotFinished(t, "addInitializer"), assertCallable(r, "An initializer"), e.push(r);
  };
}
function assertInstanceIfPrivate(e, t) {
  if (!e(t)) throw new TypeError("Attempted to access private element on non-instance");
}
function memberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f;
  switch (i) {
    case 1:
      f = "accessor";
      break;
    case 2:
      f = "method";
      break;
    case 3:
      f = "getter";
      break;
    case 4:
      f = "setter";
      break;
    default:
      f = "field";
  }
  var d,
    p,
    h = {
      kind: f,
      name: o ? "#" + r : r,
      static: s,
      private: o,
      metadata: u
    },
    v = {
      v: !1
    };
  if (0 !== i && (h.addInitializer = createAddInitializerMethod(n, v)), o || 0 !== i && 2 !== i) {
    if (2 === i) d = function (e) {
      return assertInstanceIfPrivate(l, e), a.value;
    };else {
      var y = 0 === i || 1 === i;
      (y || 3 === i) && (d = o ? function (e) {
        return assertInstanceIfPrivate(l, e), a.get.call(e);
      } : function (e) {
        return a.get.call(e);
      }), (y || 4 === i) && (p = o ? function (e, t) {
        assertInstanceIfPrivate(l, e), a.set.call(e, t);
      } : function (e, t) {
        a.set.call(e, t);
      });
    }
  } else d = function (e) {
    return e[r];
  }, 0 === i && (p = function (e, t) {
    e[r] = t;
  });
  var m = o ? l.bind() : function (e) {
    return r in e;
  };
  h.access = d && p ? {
    get: d,
    set: p,
    has: m
  } : d ? {
    get: d,
    has: m
  } : {
    set: p,
    has: m
  };
  try {
    return e.call(t, c, h);
  } finally {
    v.v = !0;
  }
}
function assertNotFinished(e, t) {
  if (e.v) throw new Error("attempted to call " + t + " after decoration was finished");
}
function assertCallable(e, t) {
  if ("function" != typeof e) throw new TypeError(t + " must be a function");
}
function assertValidReturnValue(e, t) {
  var r = typeof t;
  if (1 === e) {
    if ("object" !== r || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== t.get && assertCallable(t.get, "accessor.get"), void 0 !== t.set && assertCallable(t.set, "accessor.set"), void 0 !== t.init && assertCallable(t.init, "accessor.init");
  } else if ("function" !== r) {
    var a;
    throw a = 0 === e ? "field" : 5 === e ? "class" : "method", new TypeError(a + " decorators must return a function or void 0");
  }
}
function curryThis1(e) {
  return function () {
    return e(this);
  };
}
function curryThis2(e) {
  return function (t) {
    e(this, t);
  };
}
function applyMemberDec(e, t, r, a, n, i, s, o, c, l, u) {
  var f,
    d,
    p,
    h,
    v,
    y,
    m = r[0];
  a || Array.isArray(m) || (m = [m]), o ? f = 0 === i || 1 === i ? {
    get: curryThis1(r[3]),
    set: curryThis2(r[4])
  } : 3 === i ? {
    get: r[3]
  } : 4 === i ? {
    set: r[3]
  } : {
    value: r[3]
  } : 0 !== i && (f = Object.getOwnPropertyDescriptor(t, n)), 1 === i ? p = {
    get: f.get,
    set: f.set
  } : 2 === i ? p = f.value : 3 === i ? p = f.get : 4 === i && (p = f.set);
  for (var g = a ? 2 : 1, b = m.length - 1; b >= 0; b -= g) {
    var I;
    if (void 0 !== (h = memberDec(m[b], a ? m[b - 1] : void 0, n, f, c, i, s, o, p, l, u))) assertValidReturnValue(i, h), 0 === i ? I = h : 1 === i ? (I = h.init, v = h.get || p.get, y = h.set || p.set, p = {
      get: v,
      set: y
    }) : p = h, void 0 !== I && (void 0 === d ? d = I : "function" == typeof d ? d = [d, I] : d.push(I));
  }
  if (0 === i || 1 === i) {
    if (void 0 === d) d = function (e, t) {
      return t;
    };else if ("function" != typeof d) {
      var w = d;
      d = function (e, t) {
        for (var r = t, a = w.length - 1; a >= 0; a--) r = w[a].call(e, r);
        return r;
      };
    } else {
      var M = d;
      d = function (e, t) {
        return M.call(e, t);
      };
    }
    e.push(d);
  }
  0 !== i && (1 === i ? (f.get = p.get, f.set = p.set) : 2 === i ? f.value = p : 3 === i ? f.get = p : 4 === i && (f.set = p), o ? 1 === i ? (e.push(function (e, t) {
    return p.get.call(e, t);
  }), e.push(function (e, t) {
    return p.set.call(e, t);
  })) : 2 === i ? e.push(p) : e.push(function (e, t) {
    return p.call(e, t);
  }) : Object.defineProperty(t, n, f));
}
function applyMemberDecs(e, t, r, a) {
  for (var n, i, s, o = [], c = new Map(), l = new Map(), u = 0; u < t.length; u++) {
    var f = t[u];
    if (Array.isArray(f)) {
      var d,
        p,
        h = f[1],
        v = f[2],
        y = f.length > 3,
        m = 16 & h,
        g = !!(8 & h),
        b = r;
      if (h &= 7, g ? (d = e, 0 !== h && (p = i = i || []), y && !s && (s = function (t) {
        return _checkInRHS(t) === e;
      }), b = s) : (d = e.prototype, 0 !== h && (p = n = n || [])), 0 !== h && !y) {
        var I = g ? l : c,
          w = I.get(v) || 0;
        if (!0 === w || 3 === w && 4 !== h || 4 === w && 3 !== h) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + v);
        I.set(v, !(!w && h > 2) || h);
      }
      applyMemberDec(o, d, f, m, v, h, g, y, p, b, a);
    }
  }
  return pushInitializers(o, n), pushInitializers(o, i), o;
}
function pushInitializers(e, t) {
  t && e.push(function (e) {
    for (var r = 0; r < t.length; r++) t[r].call(e);
    return e;
  });
}
function applyClassDecs(e, t, r, a) {
  if (t.length) {
    for (var n = [], i = e, s = e.name, o = r ? 2 : 1, c = t.length - 1; c >= 0; c -= o) {
      var l = {
        v: !1
      };
      try {
        var u = t[c].call(r ? t[c - 1] : void 0, i, {
          kind: "class",
          name: s,
          addInitializer: createAddInitializerMethod(n, l),
          metadata: a
        });
      } finally {
        l.v = !0;
      }
      void 0 !== u && (assertValidReturnValue(5, u), i = u);
    }
    return [defineMetadata(i, a), function () {
      for (var e = 0; e < n.length; e++) n[e].call(i);
    }];
  }
}
function defineMetadata(e, t) {
  return Object.defineProperty(e, Symbol.metadata || Symbol.for("Symbol.metadata"), {
    configurable: !0,
    enumerable: !0,
    value: t
  });
}
function _applyDecs2305(e, t, r, a, n, i) {
  if (arguments.length >= 6) var s = i[Symbol.metadata || Symbol.for("Symbol.metadata")];
  var o = Object.create(void 0 === s ? null : s),
    c = applyMemberDecs(e, t, n, o);
  return r.length || defineMetadata(e, o), {
    e: c,
    get c() {
      return applyClassDecs(e, r, a, o);
    }
  };
}
function _checkInRHS(e) {
  if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? typeof e : "null"));
  return e;
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseEvent: () => (/* reexport safe */ _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__.AbstractEvent),
/* harmony export */   BasePlugin: () => (/* reexport safe */ _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__.AbstractPlugin),
/* harmony export */   Draggable: () => (/* reexport safe */ _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Droppable: () => (/* reexport safe */ _Droppable_Droppable_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Plugins: () => (/* reexport module object */ _Plugins_index_mjs__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   Sensors: () => (/* reexport module object */ _Draggable_Sensors_index_mjs__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   Sortable: () => (/* reexport safe */ _Sortable_Sortable_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Swappable: () => (/* reexport safe */ _Swappable_Swappable_mjs__WEBPACK_IMPORTED_MODULE_11__["default"])
/* harmony export */ });
/* harmony import */ var _shared_AbstractEvent_AbstractEvent_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/AbstractEvent/AbstractEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs");
/* harmony import */ var _shared_AbstractPlugin_AbstractPlugin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/AbstractPlugin/AbstractPlugin.mjs */ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs");
/* harmony import */ var _Draggable_Sensors_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Draggable/Sensors/index.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Sensors/index.mjs");
/* harmony import */ var _Plugins_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Plugins/index.mjs */ "./node_modules/@shopify/draggable/build/esm/Plugins/index.mjs");
/* harmony import */ var _Draggable_Draggable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable/Draggable.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Draggable.mjs");
/* harmony import */ var _Draggable_DragEvent_DragEvent_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Draggable/DragEvent/DragEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DragEvent/DragEvent.mjs");
/* harmony import */ var _Draggable_DraggableEvent_DraggableEvent_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Draggable/DraggableEvent/DraggableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/DraggableEvent/DraggableEvent.mjs");
/* harmony import */ var _Draggable_Plugins_Announcement_Announcement_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Draggable/Plugins/Announcement/Announcement.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Announcement/Announcement.mjs");
/* harmony import */ var _Draggable_Plugins_Mirror_MirrorEvent_MirrorEvent_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Draggable/Plugins/Mirror/MirrorEvent/MirrorEvent.mjs");
/* harmony import */ var _Droppable_Droppable_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Droppable/Droppable.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/Droppable.mjs");
/* harmony import */ var _Droppable_DroppableEvent_DroppableEvent_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Droppable/DroppableEvent/DroppableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Droppable/DroppableEvent/DroppableEvent.mjs");
/* harmony import */ var _Swappable_Swappable_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Swappable/Swappable.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/Swappable.mjs");
/* harmony import */ var _Swappable_SwappableEvent_SwappableEvent_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Swappable/SwappableEvent/SwappableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Swappable/SwappableEvent/SwappableEvent.mjs");
/* harmony import */ var _Sortable_Sortable_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sortable/Sortable.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/Sortable.mjs");
/* harmony import */ var _Sortable_SortableEvent_SortableEvent_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sortable/SortableEvent/SortableEvent.mjs */ "./node_modules/@shopify/draggable/build/esm/Sortable/SortableEvent/SortableEvent.mjs");



















/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/AbstractEvent/AbstractEvent.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractEvent: () => (/* binding */ AbstractEvent)
/* harmony export */ });
class AbstractEvent {

  constructor(data) {

    this._canceled = false;
    this.data = data;
  }

  get type() {
    return this.constructor.type;
  }

  get cancelable() {
    return this.constructor.cancelable;
  }

  cancel() {
    this._canceled = true;
  }

  canceled() {
    return this._canceled;
  }

  clone(data) {
    return new this.constructor({
      ...this.data,
      ...data
    });
  }
}

AbstractEvent.type = 'event';

AbstractEvent.cancelable = false;




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/AbstractPlugin/AbstractPlugin.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractPlugin: () => (/* binding */ AbstractPlugin)
/* harmony export */ });
class AbstractPlugin {

  constructor(draggable) {
    this.draggable = draggable;
  }

  attach() {
    throw new Error('Not Implemented');
  }

  detach() {
    throw new Error('Not Implemented');
  }
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/closest/closest.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ closest)
/* harmony export */ });
function closest(node, value) {
  if (node == null) {
    return null;
  }
  function conditionFn(currentNode) {
    if (currentNode == null || value == null) {
      return false;
    } else if (isSelector(value)) {
      return Element.prototype.matches.call(currentNode, value);
    } else if (isNodeList(value)) {
      return [...value].includes(currentNode);
    } else if (isElement(value)) {
      return value === currentNode;
    } else if (isFunction(value)) {
      return value(currentNode);
    } else {
      return false;
    }
  }
  let current = node;
  do {
    current = current.correspondingUseElement || current.correspondingElement || current;
    if (conditionFn(current)) {
      return current;
    }
    current = current?.parentNode || null;
  } while (current != null && current !== document.body && current !== document);
  return null;
}
function isSelector(value) {
  return Boolean(typeof value === 'string');
}
function isNodeList(value) {
  return Boolean(value instanceof NodeList || value instanceof Array);
}
function isElement(value) {
  return Boolean(value instanceof Node);
}
function isFunction(value) {
  return Boolean(typeof value === 'function');
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/decorators/AutoBind.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoBind: () => (/* binding */ AutoBind)
/* harmony export */ });
function AutoBind(originalMethod, {
  name,
  addInitializer
}) {
  addInitializer(function () {

    this[name] = originalMethod.bind(this);

  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/distance/distance.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ distance)
/* harmony export */ });
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/requestNextAnimationFrame/requestNextAnimationFrame.mjs ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requestNextAnimationFrame)
/* harmony export */ });
function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}




/***/ }),

/***/ "./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/@shopify/draggable/build/esm/shared/utils/touchCoords/touchCoords.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ touchCoords)
/* harmony export */ });
function touchCoords(event) {
  const {
    touches,
    changedTouches
  } = event;
  return touches && touches[0] || changedTouches && changedTouches[0];
}




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