System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-core/react","jimu-ui/basic/sql-expression-runtime"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/react-window/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-window/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedSizeGrid": () => (/* binding */ FixedSizeGrid),
/* harmony export */   "FixedSizeList": () => (/* binding */ FixedSizeList),
/* harmony export */   "VariableSizeGrid": () => (/* binding */ VariableSizeGrid),
/* harmony export */   "VariableSizeList": () => (/* binding */ VariableSizeList),
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "shouldComponentUpdate": () => (/* binding */ shouldComponentUpdate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount = /*#__PURE__*/new WeakSet();
    devWarningsOverscanRowsColumnsCount = /*#__PURE__*/new WeakSet();
    devWarningsTagName = /*#__PURE__*/new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _class;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (true) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection = /*#__PURE__*/new WeakSet();
    devWarningsTagName$1 = /*#__PURE__*/new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _class = /*#__PURE__*/function (_PureComponent) {
    (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = (0,memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var _this$props2 = this.props,
          itemCount = _this$props2.itemCount,
          layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1)); // The scrollbar size should be considered when scrolling an item into view, to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.
      // This is an edge case for lists; normally they only scroll in the dominant direction.

      var scrollbarSize = 0;

      if (this._outerRef) {
        var outerRef = this._outerRef;

        if (layout === 'vertical') {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }

      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          initialScrollOffset = _this$props3.initialScrollOffset,
          layout = _this$props3.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props,
          direction = _this$props4.direction,
          layout = _this$props4.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          className = _this$props5.className,
          direction = _this$props5.direction,
          height = _this$props5.height,
          innerRef = _this$props5.innerRef,
          innerElementType = _this$props5.innerElementType,
          innerTagName = _this$props5.innerTagName,
          itemCount = _this$props5.itemCount,
          itemData = _this$props5.itemData,
          _this$props5$itemKey = _this$props5.itemKey,
          itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey,
          layout = _this$props5.layout,
          outerElementType = _this$props5.outerElementType,
          outerTagName = _this$props5.outerTagName,
          style = _this$props5.style,
          useIsScrolling = _this$props5.useIsScrolling,
          width = _this$props5.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    } // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.
    ;

    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props,
          itemCount = _this$props6.itemCount,
          overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react__WEBPACK_IMPORTED_MODULE_3__.PureComponent), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size + scrollbarSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (true) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid = /*#__PURE__*/createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList = /*#__PURE__*/createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize + scrollbarSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (true) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

var _excluded = ["style"],
    _excluded2 = ["style"];
// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps, _excluded);

  var nextStyle = nextProps.style,
      nextRest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(nextProps, _excluded2);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./jimu-icons/svg/outlined/brand/widget-filter.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/brand/widget-filter.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M18.5.995c0-.55-.43-.995-.96-.995H2.46a.94.94 0 0 0-.605.223 1.02 1.02 0 0 0-.14 1.4L6.5 7.72c.122.156.196.347.212.548l.835 10.815c.007.092.027.183.058.27a.951.951 0 0 0 1.237.582l2.112-.82a.99.99 0 0 0 .615-.797l1.325-10.062c.025-.193.105-.374.228-.52l5.141-6.087c.154-.181.238-.414.238-.655ZM2.5 1h14.999l-5.141 6.09-.117.153a2.016 2.016 0 0 0-.34.883l-1.325 10.062-2.035.792-.833-10.788-.02-.169a2.012 2.012 0 0 0-.402-.92L2.502 1.006 2.5 1Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/brand/widget-list.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/brand/widget-list.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M6 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4Zm0 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z\" clip-rule=\"evenodd\"></path><path fill=\"#000\" d=\"M10.5 2a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9ZM10 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M6 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4Zm0 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z\" clip-rule=\"evenodd\"></path><path fill=\"#000\" d=\"M10 14.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5ZM10.5 17a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-left.svg":
/*!************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-left.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/down.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/down.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .538.538 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.538.538 0 0 1 0-.738Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/left.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/left.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/up.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/up.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .538.538 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.538.538 0 0 1 0 .738Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/menu.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/menu.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M.438 1C.196 1 0 1.224 0 1.5s.196.5.438.5h15.124c.242 0 .438-.224.438-.5s-.196-.5-.438-.5H.438ZM0 7.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 8 0 7.776 0 7.5ZM0 13.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 14 0 13.776 0 13.5Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/reset.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/reset.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M14.938 8A7 7 0 0 1 1.01 9H0a8.001 8.001 0 0 0 15.938-1A8 8 0 0 0 1.02 3.98L1 .702a.5.5 0 1 0-1 .006L.031 5.9l5.128-.826a.5.5 0 0 0-.16-.987L1.819 4.6A7 7 0 0 1 14.938 8Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/search.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/search.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/show-selection--rtl.svg":
/*!****************************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/show-selection--rtl.svg ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M15.88 2.825a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.707l1.265 1.265a1 1 0 0 0 1.466-.056l2.323-2.71Zm0 8a.5.5 0 0 0-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 1 0-.707.708l1.265 1.264a1 1 0 0 0 1.466-.056l2.323-2.71ZM9 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5ZM8.5 13a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1h8Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/show-selection.svg":
/*!***********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/show-selection.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 4.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5ZM16 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5ZM5.146 2.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 4.327a.5.5 0 0 1 .708-.707l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055ZM5.146 10.12a.5.5 0 0 1 .055.705l-2.324 2.71a1 1 0 0 1-1.466.057L.146 12.328a.5.5 0 1 1 .708-.708l1.264 1.265 2.323-2.71a.5.5 0 0 1 .705-.055Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/sync-off.svg":
/*!*****************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/sync-off.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"m2.116 1.5.969 1.678H1.05v3H0l1.5 2 1.5-2h-.951v-2h1.614l4.618 8H2.049v-2H1.05v3h7.809l1.257 2.178.866-.5L2.982 1l-.866.5Zm9.982 8.678h.95v2h-2.611l.576 1h3.036v-3h1.05l-1.501-2-1.5 2Zm.951-4v-2H5.817l-.578-1h8.81v3h-1Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/sync-on.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/sync-on.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M1.049 6V3h13v3h-1V4h-11v2H3L1.5 7.999 0 6h1.049Zm12 4h-.952l1.5-2 1.5 2h-1.049v3H1.05v-3h1v2h11v-2Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/trash-check.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/trash-check.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"m11.366 7.841-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66 3.875-4.15Z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 0 1 0 1H14l-.929 11.077a1 1 0 0 1-.997.923H3.926a1 1 0 0 1-.997-.923L2 4H.5a.5.5 0 0 1 0-1h4ZM3.003 4h9.994l-.923 11H3.926L3.003 4ZM10.5 1v2h-5V1c0-.04 5-.04 5 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/warning.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/warning.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/assets/icon.svg":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/assets/icon.svg ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path fill=\"#FFF\" fill-rule=\"nonzero\" d=\"M2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2H7Zm0-1h7a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4Zm0 7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2H7Zm0-1h7a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4Zm0 7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2H7Zm0-1h7a2 2 0 1 1 0 4H7a2 2 0 1 1 0-4ZM2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/brand/widget-filter.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/brand/widget-filter.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetFilterOutlined": () => (/* binding */ WidgetFilterOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_brand_widget_filter_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/brand/widget-filter.svg */ "./jimu-icons/svg/outlined/brand/widget-filter.svg");
/* harmony import */ var _svg_outlined_brand_widget_filter_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_brand_widget_filter_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const WidgetFilterOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_brand_widget_filter_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/arrow-left.tsx":
/*!********************************************************!*\
  !*** ./jimu-icons/outlined/directional/arrow-left.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowLeftOutlined": () => (/* binding */ ArrowLeftOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/arrow-left.svg */ "./jimu-icons/svg/outlined/directional/arrow-left.svg");
/* harmony import */ var _svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const ArrowLeftOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/down.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/down.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownOutlined": () => (/* binding */ DownOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/down.svg */ "./jimu-icons/svg/outlined/directional/down.svg");
/* harmony import */ var _svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const DownOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_down_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/left.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/left.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftOutlined": () => (/* binding */ LeftOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/left.svg */ "./jimu-icons/svg/outlined/directional/left.svg");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const LeftOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/right.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/directional/right.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightOutlined": () => (/* binding */ RightOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/right.svg */ "./jimu-icons/svg/outlined/directional/right.svg");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const RightOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/up.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/directional/up.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpOutlined": () => (/* binding */ UpOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/up.svg */ "./jimu-icons/svg/outlined/directional/up.svg");
/* harmony import */ var _svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const UpOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_up_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/close.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/close.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseOutlined": () => (/* binding */ CloseOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const CloseOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/menu.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/menu.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuOutlined": () => (/* binding */ MenuOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/menu.svg */ "./jimu-icons/svg/outlined/editor/menu.svg");
/* harmony import */ var _svg_outlined_editor_menu_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_menu_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const MenuOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_menu_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/reset.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/reset.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetOutlined": () => (/* binding */ ResetOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/reset.svg */ "./jimu-icons/svg/outlined/editor/reset.svg");
/* harmony import */ var _svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const ResetOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_reset_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/search.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/search.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchOutlined": () => (/* binding */ SearchOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/search.svg */ "./jimu-icons/svg/outlined/editor/search.svg");
/* harmony import */ var _svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const SearchOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_search_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/show-selection.tsx":
/*!*******************************************************!*\
  !*** ./jimu-icons/outlined/editor/show-selection.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowSelectionOutlined": () => (/* binding */ ShowSelectionOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_show_selection_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/show-selection.svg */ "./jimu-icons/svg/outlined/editor/show-selection.svg");
/* harmony import */ var _svg_outlined_editor_show_selection_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_show_selection_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_outlined_editor_show_selection_rtl_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/editor/show-selection--rtl.svg */ "./jimu-icons/svg/outlined/editor/show-selection--rtl.svg");
/* harmony import */ var _svg_outlined_editor_show_selection_rtl_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_show_selection_rtl_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const ShowSelectionOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component has-rtl-svg', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_show_selection_svg__WEBPACK_IMPORTED_MODULE_1___default()), srcRTL: (_svg_outlined_editor_show_selection_rtl_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/sync-off.tsx":
/*!*************************************************!*\
  !*** ./jimu-icons/outlined/editor/sync-off.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncOffOutlined": () => (/* binding */ SyncOffOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_sync_off_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/sync-off.svg */ "./jimu-icons/svg/outlined/editor/sync-off.svg");
/* harmony import */ var _svg_outlined_editor_sync_off_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_sync_off_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const SyncOffOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_sync_off_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/sync-on.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/editor/sync-on.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncOnOutlined": () => (/* binding */ SyncOnOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_sync_on_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/sync-on.svg */ "./jimu-icons/svg/outlined/editor/sync-on.svg");
/* harmony import */ var _svg_outlined_editor_sync_on_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_sync_on_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const SyncOnOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_sync_on_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/trash-check.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/editor/trash-check.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrashCheckOutlined": () => (/* binding */ TrashCheckOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/trash-check.svg */ "./jimu-icons/svg/outlined/editor/trash-check.svg");
/* harmony import */ var _svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const TrashCheckOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_trash_check_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/warning.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/suggested/warning.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarningOutlined": () => (/* binding */ WarningOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/warning.svg */ "./jimu-icons/svg/outlined/suggested/warning.svg");
/* harmony import */ var _svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const WarningOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_warning_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/config.ts":
/*!********************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/config.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignType": () => (/* binding */ AlignType),
/* harmony export */   "BOTTOM_TOOL_H": () => (/* binding */ BOTTOM_TOOL_H),
/* harmony export */   "BOTTOM_TOOL_TOP_PADDING": () => (/* binding */ BOTTOM_TOOL_TOP_PADDING),
/* harmony export */   "COMMON_PADDING": () => (/* binding */ COMMON_PADDING),
/* harmony export */   "DEFAULT_CARD_SIZE": () => (/* binding */ DEFAULT_CARD_SIZE),
/* harmony export */   "DEFAULT_SPACE": () => (/* binding */ DEFAULT_SPACE),
/* harmony export */   "DS_TOOL_BOTTOM_PADDING": () => (/* binding */ DS_TOOL_BOTTOM_PADDING),
/* harmony export */   "DS_TOOL_H": () => (/* binding */ DS_TOOL_H),
/* harmony export */   "DirectionType": () => (/* binding */ DirectionType),
/* harmony export */   "HoverType": () => (/* binding */ HoverType),
/* harmony export */   "ItemStyle": () => (/* binding */ ItemStyle),
/* harmony export */   "LIST_CARD_MIN_SIZE": () => (/* binding */ LIST_CARD_MIN_SIZE),
/* harmony export */   "LIST_CARD_PADDING": () => (/* binding */ LIST_CARD_PADDING),
/* harmony export */   "LIST_TOOL_MIN_SIZE_DATA_ACTION": () => (/* binding */ LIST_TOOL_MIN_SIZE_DATA_ACTION),
/* harmony export */   "LIST_TOOL_MIN_SIZE_NO_DATA_ACTION": () => (/* binding */ LIST_TOOL_MIN_SIZE_NO_DATA_ACTION),
/* harmony export */   "ListLayout": () => (/* binding */ ListLayout),
/* harmony export */   "ListLayoutType": () => (/* binding */ ListLayoutType),
/* harmony export */   "PageStyle": () => (/* binding */ PageStyle),
/* harmony export */   "PageTransitonType": () => (/* binding */ PageTransitonType),
/* harmony export */   "SCROLL_BAR_WIDTH": () => (/* binding */ SCROLL_BAR_WIDTH),
/* harmony export */   "SelectedStyle": () => (/* binding */ SelectedStyle),
/* harmony export */   "SelectionModeType": () => (/* binding */ SelectionModeType),
/* harmony export */   "SettingCollapseType": () => (/* binding */ SettingCollapseType),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
const LIST_CARD_PADDING = 0;
const LIST_CARD_MIN_SIZE = 20;
const DS_TOOL_H = 42;
const BOTTOM_TOOL_H = 40;
const COMMON_PADDING = 0;
const DS_TOOL_BOTTOM_PADDING = 14;
const BOTTOM_TOOL_TOP_PADDING = 14;
const LIST_TOOL_MIN_SIZE_NO_DATA_ACTION = 175;
const LIST_TOOL_MIN_SIZE_DATA_ACTION = 220;
const DEFAULT_CARD_SIZE = 200;
const DEFAULT_SPACE = 10;
const SCROLL_BAR_WIDTH = 8;
var SettingCollapseType;
(function (SettingCollapseType) {
    SettingCollapseType["None"] = "NONE";
    SettingCollapseType["Arrangement"] = "ARRANGEMENT";
    SettingCollapseType["States"] = "STATES";
    SettingCollapseType["Tools"] = "TOOLS";
})(SettingCollapseType || (SettingCollapseType = {}));
var ListLayout;
(function (ListLayout) {
    ListLayout["AUTO"] = "Auto";
    ListLayout["CUSTOM"] = "Custom";
})(ListLayout || (ListLayout = {}));
var SelectionModeType;
(function (SelectionModeType) {
    SelectionModeType["None"] = "NONE";
    SelectionModeType["Single"] = "SINGLE";
    SelectionModeType["Multiple"] = "MULTIPLE";
})(SelectionModeType || (SelectionModeType = {}));
var PageStyle;
(function (PageStyle) {
    PageStyle["Scroll"] = "SCROLL";
    PageStyle["MultiPage"] = "MULTIPAGE";
})(PageStyle || (PageStyle = {}));
var AlignType;
(function (AlignType) {
    AlignType["Start"] = "FLEX-START";
    AlignType["Center"] = "CENTER";
    AlignType["End"] = "FLEX-END";
})(AlignType || (AlignType = {}));
var DirectionType;
(function (DirectionType) {
    DirectionType["Horizon"] = "HORIZON";
    DirectionType["Vertical"] = "VERTICAL";
})(DirectionType || (DirectionType = {}));
var ListLayoutType;
(function (ListLayoutType) {
    ListLayoutType["Row"] = "ROW";
    ListLayoutType["Column"] = "COLUMN";
    ListLayoutType["GRID"] = "GRID";
})(ListLayoutType || (ListLayoutType = {}));
var PageTransitonType;
(function (PageTransitonType) {
    PageTransitonType["Glide"] = "GLIDE";
    PageTransitonType["Fade"] = "FADE";
    PageTransitonType["Float"] = "FLOAT";
})(PageTransitonType || (PageTransitonType = {}));
var HoverType;
(function (HoverType) {
    HoverType["Hover0"] = "HOVER0";
    HoverType["Hover1"] = "HOVER1";
    HoverType["Hover2"] = "HOVER2";
    HoverType["Hover3"] = "HOVER3";
})(HoverType || (HoverType = {}));
var SelectedStyle;
(function (SelectedStyle) {
    SelectedStyle["Style0"] = "STYLE0";
    SelectedStyle["Style1"] = "STYLE1";
    SelectedStyle["Style2"] = "STYLE2";
    SelectedStyle["Style3"] = "STYLE3";
})(SelectedStyle || (SelectedStyle = {}));
var ItemStyle;
(function (ItemStyle) {
    ItemStyle["Style0"] = "STYLE0";
    ItemStyle["Style1"] = "STYLE1";
    ItemStyle["Style2"] = "STYLE2";
    ItemStyle["Style3"] = "STYLE3";
    ItemStyle["Style4"] = "STYLE4";
    ItemStyle["Style5"] = "STYLE5";
    ItemStyle["Style6"] = "STYLE6";
    ItemStyle["Style7"] = "STYLE7";
    ItemStyle["Style8"] = "STYLE8";
    ItemStyle["Style9"] = "STYLE9";
})(ItemStyle || (ItemStyle = {}));
var Status;
(function (Status) {
    Status["Regular"] = "REGULAR";
    Status["Selected"] = "SELECTED";
    Status["Hover"] = "HOVER";
})(Status || (Status = {}));


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/bottom-tools.tsx":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/bottom-tools.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListBottomTools": () => (/* binding */ ListBottomTools)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/directional/left */ "./jimu-icons/outlined/directional/left.tsx");
/* harmony import */ var jimu_icons_outlined_directional_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/directional/up */ "./jimu-icons/outlined/directional/up.tsx");
/* harmony import */ var jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/directional/right */ "./jimu-icons/outlined/directional/right.tsx");
/* harmony import */ var jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/directional/down */ "./jimu-icons/outlined/directional/down.tsx");







function ListBottomTools(props) {
    const { isRTL, totalPage, pageStyle, currentPage, scrollStatus, isScrollEnd, isEditing, showLoading, layoutType, handleScrollDown, handleScrollUp, handleSwitchPage, formatMessage } = props;
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'bottom-tools w-100 d-flex align-items-center justify-content-center pl-2 pr-2' },
        pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.MultiPage
            ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Pagination, { size: 'sm', totalPage: totalPage, current: currentPage, onChangePage: handleSwitchPage, disabled: showLoading }))
            : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex scroll-navigator' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: formatMessage('previous'), disabled: scrollStatus === 'start', type: 'secondary', size: 'sm', icon: true, onClick: handleScrollUp }, layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_3__.LeftOutlined, { size: 12 }) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_up__WEBPACK_IMPORTED_MODULE_4__.UpOutlined, { size: 12 })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { title: formatMessage('next'), disabled: scrollStatus === 'end' || isScrollEnd, type: 'secondary', size: 'sm', style: isRTL
                        ? { marginRight: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10) }
                        : { marginLeft: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10) }, icon: true, onClick: handleScrollDown }, layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_5__.RightOutlined, null) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_down__WEBPACK_IMPORTED_MODULE_6__.DownOutlined, null)))),
        window.jimuConfig.isInBuilder && isEditing && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'editing-mask-bottom-tool' }))));
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/filter-picker.tsx":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/filter-picker.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterPicker)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_icons_outlined_brand_widget_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/brand/widget-filter */ "./jimu-icons/outlined/brand/widget-filter.tsx");
/* harmony import */ var jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/reset */ "./jimu-icons/outlined/editor/reset.tsx");
/** @jsx jsx */






const popperOffset = [0, 5];
const popperModifiers = [
    {
        name: 'flip',
        options: {
            boundary: document.body,
            fallbackPlacements: ['bottom-start', 'right-end', 'top-start', 'left-start']
        }
    }
];
class FilterPicker extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.formatMessage = (id, values) => {
            return this.props.formatMessage(id, values);
        };
        this.onPopperToggle = evt => {
            const { filter } = this.props;
            const { isOpen } = this.state;
            if (!isOpen) {
                // will open
                this.setState({
                    currentFilter: filter
                });
            }
            this.setState({ isOpen: !isOpen });
        };
        this.onItemClick = (evt, item) => {
            this.setState({ isOpen: false });
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.handleFilterChange = (sqlExprObj) => {
            this.setState({
                currentFilter: sqlExprObj
            });
        };
        this.handleApplyClick = evt => {
            const { currentFilter } = this.state;
            const { handleFilterApplyChange, handleFilterChange } = this.props;
            handleFilterChange(currentFilter);
            handleFilterApplyChange(true);
            this.setState({
                isOpen: false
            });
        };
        this.handleResetClick = evt => {
            const { handleFilterApplyChange, handleFilterChange } = this.props;
            handleFilterApplyChange(false);
            handleFilterChange(this.props.filterInConfig);
            this.setState({
                currentFilter: this.props.filterInConfig
            });
        };
        this.handleClearClick = evt => {
            const { handleFilterApplyChange } = this.props;
            handleFilterApplyChange(false);
            this.setState({
                isOpen: false
            });
        };
        this.getStyle = () => {
            const { theme } = this.props;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      position: relative;
      .dot {
        position: absolute;
        width: 6px;
        height: 6px;
        right: -2px;
        top: 0px;
        .dot-bottom {
          width: 6px;
          height: 6px;
          background-color: transparent;
          .dot-top {
            width: 4px;
            height: 4px;
            background-color: ${theme.colors.palette.dark[600]};
          }
        }
      }
      :hover {
        .dot-top {
          background-color: ${theme.colors.palette.primary[500]};
        }
      }
      & .active {
        .dot-top {
          background-color: ${theme.colors.white};
        }
        :hover {
          .dot-top {
            background-color: ${theme.colors.white};
          }
        }
      }
    `;
        };
        this.getPopperStyle = () => {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      .filter-button-con  {
        & {
          text-align: right;
        }
        button {
          max-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(92)};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        button svg {
          margin-right: 0 !important;
        }
        .reset-button {
          padding-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)};
          padding-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(5)};
        }
      }
      .clear-button, .reset-button {
        margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)};
      }
    `;
        };
        this.toggleRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.state = {
            isOpen: false,
            currentFilter: props.filter
        };
    }
    componentDidUpdate(preProps) {
        const { filter, appMode } = this.props;
        if (filter !== preProps.filter) {
            this.setState({
                currentFilter: filter
            });
        }
        if (appMode !== preProps.appMode) {
            if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design) {
                this.setState({
                    isOpen: false
                });
            }
        }
    }
    render() {
        const { filter, selectedDs, widgetId, title, applied } = this.props;
        const { isOpen, currentFilter } = this.state;
        const isHadApply = applied && (filter === null || filter === void 0 ? void 0 : filter.sql) === (currentFilter === null || currentFilter === void 0 ? void 0 : currentFilter.sql);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { css: this.getStyle(), size: 'sm', type: 'tertiary', icon: true, title: title, ref: this.toggleRef, onClick: this.onPopperToggle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_brand_widget_filter__WEBPACK_IMPORTED_MODULE_4__.WidgetFilterOutlined, { size: 16 }),
                applied && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'dot align-items-center justify-content-center' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'dot-bottom rounded-circle' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'dot-top rounded-circle' }))))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { placement: 'bottom-start', reference: this.toggleRef.current, offset: popperOffset, toggle: this.onPopperToggle, css: this.getPopperStyle(), open: isOpen, modifiers: popperModifiers },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { padding: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(20), width: jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(250) } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_2__.SqlExpressionRuntime, { widgetId: widgetId, dataSource: selectedDs, expression: currentFilter, onChange: this.handleFilterChange })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 mt-3 filter-button-con' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { disabled: isHadApply, onClick: this.handleApplyClick, type: 'primary', title: this.formatMessage('apply'), size: 'sm' }, this.formatMessage('apply')),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { disabled: !applied, onClick: this.handleClearClick, title: this.formatMessage('commonModalCancel'), className: "clear-button", size: 'sm' }, this.formatMessage('commonModalCancel')),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: this.handleResetClick, title: this.formatMessage('resetFilters'), className: "reset-button", size: 'sm' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_reset__WEBPACK_IMPORTED_MODULE_5__.ResetOutlined, { size: 's' })))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/list-card-base.tsx":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/list-card-base.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListCard)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/** @jsx jsx */

class ListCard extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Component {
    constructor() {
        super(...arguments);
        this.getNewProviderData = () => {
            const { widgetId, datasourceId, index, record } = this.props;
            return {
                widgetId: widgetId,
                dataSourceId: datasourceId,
                recordIndex: index,
                record: record
            };
        };
        this.shouldComponentUpdateExcept = (nextProps, nextStats, exceptPropKeys, exceptStatKeys = []) => {
            let shouldUpdate = false;
            this.props &&
                Object.keys(this.props).some(key => {
                    if (exceptPropKeys.includes(key))
                        return false;
                    if (this.props[key] !== nextProps[key]) {
                        // console.log(`props has changed: ${key}`)
                        shouldUpdate = true;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            this.state &&
                Object.keys(this.state).some(key => {
                    if (exceptStatKeys.includes(key))
                        return false;
                    if (this.state[key] !== nextStats[key]) {
                        // console.log(`states has changed: ${key}`)
                        shouldUpdate = true;
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            return shouldUpdate;
        };
        this.isProviderEqual = (providerData, oldProviderData) => {
            let isEqual = true;
            if (providerData) {
                Object.keys(providerData).some(key => {
                    if (!oldProviderData) {
                        isEqual = false;
                        return true;
                    }
                    const data = providerData[key];
                    const oldData = oldProviderData[key];
                    if (data !== oldData) {
                        isEqual = false;
                        return true;
                    }
                    return false;
                });
            }
            else if (oldProviderData) {
                return false;
            }
            return isEqual;
        };
        this.formatMessage = (id, values) => {
            return this.props.formatMessage(id, values);
        };
        this.getStyle = (status) => {
            const { widgetId, selectable, appMode } = this.props;
            const isBackgroundTransparent = this.checkIsBackgroundTransparent(status);
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      ${'&.list-card-' + widgetId} {
        padding: 0;
        border: 0;
        background-color: transparent;
        .list-card-content {
          width: 100%;
          height: 100%;
        }
      }
      &.surface-1 {
        border: none !important;
        background: ${isBackgroundTransparent && 'none !important'};
      }
      .list-clear-background {
        background: transparent !important;
      }
      .list-link {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
      }
      .list-item-con {
        overflow: hidden;
      }
      ${'&.list-card-' + widgetId}:hover {
        ${(!window.jimuConfig.isInBuilder || appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) &&
                selectable
                ? 'cursor: pointer;'
                : ''}
      }
      .card-editor-mask {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
      .jimu-link {
        text-align: left;
      }
    `;
        };
    }
    checkIsBackgroundTransparent(status) {
        var _a, _b, _c;
        const { cardConfigs } = this.props;
        return ((_c = (_b = (_a = cardConfigs === null || cardConfigs === void 0 ? void 0 : cardConfigs[status]) === null || _a === void 0 ? void 0 : _a.backgroundStyle) === null || _b === void 0 ? void 0 : _b.background) === null || _c === void 0 ? void 0 : _c.color) === 'rgba(0,0,0,0)';
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/list-card-editor.tsx":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/list-card-editor.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _list_card_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-card-base */ "./your-extensions/widgets/list-112/src/runtime/components/list-card-base.tsx");
/* harmony import */ var jimu_icons_outlined_editor_sync_on__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/editor/sync-on */ "./jimu-icons/outlined/editor/sync-on.tsx");
/* harmony import */ var jimu_icons_outlined_editor_sync_off__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-icons/outlined/editor/sync-off */ "./jimu-icons/outlined/editor/sync-off.tsx");
/** @jsx jsx */







const cornerSize = 12;
const cornerPosition = -10;
const sideSize = 16;
const sidePosition = -10;
const zindexHandle = 20;
const statesPopperOffset = [0, 5];
const statesModifiers = [
    {
        name: 'flip',
        options: {
            boundary: document.body,
            fallbackPlacements: ['right-start', 'left-start', 'bottom-start', 'top-end', 'top-start']
        }
    }
];
const applyPopperModifiers = [
    {
        name: 'offset',
        options: {
            offset: [0, 10]
        }
    },
    {
        name: 'arrow',
        enabled: true
    }
];
class _ListCardEditor extends _list_card_base__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(props) {
        super(props);
        this.lastResizeCall = null;
        this.getNewCardSize = (rect, isResizing = false) => {
            const { keepAspectRatio, layoutType, gridItemSizeRatio, horizontalSpace, isWidthPercentage } = this.props;
            let newCardSize;
            let width = rect.right - rect.left;
            if (!isResizing && isWidthPercentage) {
                width = rect.right - rect.left + horizontalSpace;
            }
            if (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID && keepAspectRatio) {
                newCardSize = {
                    width: width,
                    height: width * gridItemSizeRatio
                };
            }
            else {
                newCardSize = {
                    width: width,
                    height: rect.bottom - rect.top
                };
            }
            return newCardSize;
        };
        this.handleItemClick = evt => {
            const { selectCard } = this.props;
            if (evt) {
                evt.stopPropagation();
            }
            selectCard();
        };
        this.handleCopyTo = (evt, status, selectedLayoutItem, linked) => {
            if (!selectedLayoutItem)
                return;
            const { layouts, builderSupportModules, browserSizeMode, builderStatus } = this.props;
            const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            const appConfig = action.appConfig;
            const originLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[builderStatus], browserSizeMode, appConfig.mainSizeMode);
            const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[status], browserSizeMode, appConfig.mainSizeMode);
            if (linked) {
                const searchUtils = builderSupportModules.widgetModules.searchUtils;
                const layoutItem = searchUtils.getContainerLayoutItem(appConfig.layouts[desLayoutId], selectedLayoutItem.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget);
                !!layoutItem &&
                    action.removeLayoutItem({ layoutId: desLayoutId, layoutItemId: layoutItem.id }, false);
            }
            action.duplicateLayoutItem(originLayoutId, desLayoutId, selectedLayoutItem.id, false, linked);
            //After `duplicateLayoutItems`, the structure of the layout is wrong, we need to call the `buildLayoutStructure` method again to reconstruct it
            action.clearLayoutStructure(desLayoutId, browserSizeMode, true);
            action.buildLayoutStructure(desLayoutId, browserSizeMode, true);
            action.exec();
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.editStatus = (name, value) => {
            const { dispatch, widgetId } = this.props;
            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(widgetId, name, value));
        };
        this.handleBreakLink = evt => {
            const { builderSupportModules, browserSizeMode, selection, builderStatus, dispatch, widgetId } = this.props;
            const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            const appConfig = action.appConfig;
            const selectedLayoutItem = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutItem(appConfig, selection);
            if (!selectedLayoutItem)
                return;
            const currentLayoutId = appConfig.widgets[widgetId].layouts[builderStatus][browserSizeMode];
            action.duplicateLayoutItem(currentLayoutId, currentLayoutId, selectedLayoutItem.id, true);
            action.removeLayoutItem({ layoutId: currentLayoutId, layoutItemId: selectedLayoutItem.id }, false);
            //After `duplicateLayoutItems`, the structure of the layout is wrong, we need to call the `buildLayoutStructure` method again to reconstruct it
            const listLayouts = appConfig.widgets[widgetId].layouts;
            for (const status in listLayouts) {
                const layoutId = listLayouts[status][browserSizeMode];
                action.clearLayoutStructure(layoutId, browserSizeMode, true);
                action.buildLayoutStructure(layoutId, browserSizeMode, true);
            }
            action.exec();
            if (selection.layoutId === currentLayoutId &&
                selection.layoutItemId === selectedLayoutItem.id) {
                dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.selectionChanged(null));
            }
            const content = action.appConfig.layouts[currentLayoutId].content;
            const newItemKey = Object.keys(content)[Object.keys(content).length - 1];
            if (newItemKey) {
                const newItem = content[newItemKey];
                dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.selectionChanged({
                    layoutId: currentLayoutId,
                    layoutItemId: newItem.id
                }));
                const ItemWidgetJson = action.appConfig.widgets[newItem.widgetId];
                //When breaking link, the parent of the newly generated widget still has another layout,
                //which is wrong. Currently, the widget needs to handle it by itself.
                const newItemWidgetJson = this.initParentOfNewWidgetAfterIsolate(ItemWidgetJson, currentLayoutId);
                action
                    .editWidget(newItemWidgetJson)
                    .exec();
            }
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.initParentOfNewWidgetAfterIsolate = (widgetJson, currentLayoutId) => {
            const { browserSizeMode } = this.props;
            const parent = widgetJson.parent;
            const newItemCurrentParent = parent[browserSizeMode];
            const newParent = newItemCurrentParent === null || newItemCurrentParent === void 0 ? void 0 : newItemCurrentParent.filter(layout => layout.layoutId === currentLayoutId);
            return widgetJson.setIn(['parent', browserSizeMode], newParent);
        };
        this.getCopyDropdownItems = (showBreak) => {
            var _a, _b;
            const { cardConfigs, layouts, browserSizeMode, selection, builderStatus, builderSupportModules } = this.props;
            const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            const appConfig = action.appConfig;
            const selectedLayoutItem = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutItem(appConfig, selection);
            if (!selection || !selectedLayoutItem || !window.jimuConfig.isInBuilder) {
                return {
                    items: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]),
                    title: ''
                };
            }
            const items = [];
            let title = '';
            let linkedToRegular = true;
            let linkedToSelect = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None;
            let linkedToHover = !!cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover].enable;
            const isWidgetInLayout = (layoutId, widgetId) => {
                const searchUtils = builderSupportModules.widgetModules.searchUtils;
                const widgets = searchUtils.getContentsInLayoutWithRecrusiveLayouts(appConfig, layoutId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget, browserSizeMode);
                return widgets.indexOf(widgetId) > -1;
            };
            const isShowApplyToHover = ((_a = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover]) === null || _a === void 0 ? void 0 : _a.listLayout) !== (_config__WEBPACK_IMPORTED_MODULE_2__.ListLayout === null || _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout === void 0 ? void 0 : _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO);
            const isShowApplyToSelected = ((_b = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected]) === null || _b === void 0 ? void 0 : _b.listLayout) !== (_config__WEBPACK_IMPORTED_MODULE_2__.ListLayout === null || _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout === void 0 ? void 0 : _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO);
            const syncToHover = () => {
                if (cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover].enable) {
                    const layoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover], browserSizeMode, appConfig.mainSizeMode);
                    if (!isWidgetInLayout(layoutId, appConfig.layouts[selection.layoutId].content[selection.layoutItemId].widgetId)) {
                        linkedToHover = false;
                    }
                    items.push({
                        label: this.formatMessage('applyTo', {
                            status: this.formatMessage('hover').toLocaleLowerCase()
                        }),
                        event: evt => {
                            this.handleCopyTo(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover, selectedLayoutItem, linkedToHover);
                        }
                    });
                }
            };
            const syncToSelected = () => {
                if (cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None) {
                    const layoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected], browserSizeMode, appConfig.mainSizeMode);
                    if (!isWidgetInLayout(layoutId, appConfig.layouts[selection.layoutId].content[selection.layoutItemId].widgetId)) {
                        linkedToSelect = false;
                    }
                    items.push({
                        label: this.formatMessage('applyTo', {
                            status: this.formatMessage('selected').toLocaleLowerCase()
                        }),
                        event: evt => {
                            this.handleCopyTo(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected, selectedLayoutItem, linkedToSelect);
                        }
                    });
                }
            };
            const syncToRegular = () => {
                const layoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular], browserSizeMode, appConfig.mainSizeMode);
                if (!isWidgetInLayout(layoutId, appConfig.layouts[selection.layoutId].content[selection.layoutItemId]
                    .widgetId)) {
                    linkedToRegular = false;
                }
                items.push({
                    label: this.formatMessage('applyTo', {
                        status: this.formatMessage('default').toLocaleLowerCase()
                    }),
                    event: evt => {
                        this.handleCopyTo(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular, selectedLayoutItem, linkedToRegular);
                    }
                });
            };
            if (builderStatus === _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular) {
                isShowApplyToHover && syncToHover();
                isShowApplyToSelected && syncToSelected();
                if (linkedToHover && linkedToSelect) {
                    title = this.formatMessage('linkedToAnd', {
                        where1: this.formatMessage('selected').toLocaleLowerCase(),
                        where2: this.formatMessage('hover').toLocaleLowerCase()
                    });
                }
                else if (linkedToHover) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('hover').toLocaleLowerCase()
                    });
                }
                else if (linkedToSelect) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('selected').toLocaleLowerCase()
                    });
                }
            }
            else if (builderStatus === _config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover) {
                syncToRegular();
                syncToSelected();
                if (linkedToRegular && linkedToSelect) {
                    title = this.formatMessage('linkedToAnd', {
                        where1: this.formatMessage('default').toLocaleLowerCase(),
                        where2: this.formatMessage('selected').toLocaleLowerCase()
                    });
                }
                else if (linkedToRegular) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('default').toLocaleLowerCase()
                    });
                }
                else if (linkedToSelect) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('selected').toLocaleLowerCase()
                    });
                }
            }
            else {
                syncToRegular();
                syncToHover();
                if (linkedToRegular && linkedToHover) {
                    title = this.formatMessage('linkedToAnd', {
                        where1: this.formatMessage('default').toLocaleLowerCase(),
                        where2: this.formatMessage('hover').toLocaleLowerCase()
                    });
                }
                else if (linkedToRegular) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('default').toLocaleLowerCase()
                    });
                }
                else if (linkedToHover) {
                    title = this.formatMessage('linkedTo', {
                        where: this.formatMessage('hover').toLocaleLowerCase()
                    });
                }
            }
            if (showBreak) {
                items.push({
                    label: this.formatMessage('isolate'),
                    event: this.handleBreakLink
                });
            }
            else {
                title = this.formatMessage('isolate');
            }
            return {
                items: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(items),
                title: title
            };
        };
        this._renderAction = () => {
            const handlers = [];
            const { theme, layoutType, keepAspectRatio } = this.props;
            const sideHandle = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      box-shadow: none;

      &:after {
        position: absolute;
        content: '';
        width: ${cornerSize}px;
        height: ${cornerSize}px;
        background-color: ${theme.colors.palette.primary[500]};
        border: 2px solid ${theme.colors.white};
        border-radius: 50%;
        z-index: ${zindexHandle};
      }
    `;
            const bottomSideLine = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      box-shadow: none;
      height: ${sideSize}px;
      left: 0px;
      right: 0px;
      bottom: ${-1 * (sideSize / 2)}px;
      &:after {
        position: absolute;
        content: '';
        bottom: 50%;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${theme.colors.palette.primary[300]};
        z-index: ${zindexHandle};
      }
    `;
            const rightSideLine = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      box-shadow: none;
      width: ${sideSize}px;
      top: 0px;
      bottom: 0px;
      right: ${-1 * (sideSize / 2)}px;
      &:after {
        position: absolute;
        content: '';
        right: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: ${theme.colors.palette.primary[300]};
        z-index: ${zindexHandle};
      }
    `;
            const handle = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      position: absolute;
    `;
            const rightSideCursor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      width: ${sideSize}px;
      top: ${-1 * sidePosition}px;
      bottom: ${-1 * sidePosition}px;
      right: ${-1 * (sideSize / 2)}px;

      &:after {
        top: 50%;
        right: 50%;
        margin-top: ${cornerPosition / 2}px;
        margin-right: ${cornerPosition / 2}px;
      }
    `;
            const bottomSideCursor = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      height: ${sideSize}px;
      left: ${-1 * sidePosition}px;
      right: ${-1 * sidePosition}px;
      bottom: ${-1 * (sideSize / 2)}px;

      &:after {
        left: 50%;
        bottom: 50%;
        margin-left: ${cornerPosition / 2}px;
        margin-bottom: ${cornerPosition / 2}px;
      }
    `;
            switch (layoutType) {
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column:
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '10', className: 'list-card-rnd-resize-left-line', css: [handle, rightSideLine] }));
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '4', className: 'list-card-rnd-resize-right', css: [handle, sideHandle, rightSideCursor] }));
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row:
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '9', className: 'list-card-rnd-resize-bottom-line', css: [handle, bottomSideLine] }));
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '6', className: 'list-card-rnd-resize-bottom', css: [handle, sideHandle, bottomSideCursor] }));
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID:
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '10', className: 'list-card-rnd-resize-left-line', css: [handle, rightSideLine] }));
                    handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '4', className: 'list-card-rnd-resize-right', css: [handle, sideHandle, rightSideCursor] }));
                    if (!keepAspectRatio) {
                        handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '9', className: 'list-card-rnd-resize-bottom-line', css: [handle, bottomSideLine] }));
                        handlers.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { key: '6', className: 'list-card-rnd-resize-bottom', css: [handle, sideHandle, bottomSideCursor] }));
                    }
                    break;
            }
            return handlers;
        };
        this.getCardToolsStyle = (theme) => {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      width: 100%;
      .btn {
        width: 100%;
      }
      .dropdown-toggle {
        justify-content: center;
      }
    `;
        };
        this.renderCardTools = () => {
            const { index } = this.props;
            const isInBuilder = window.jimuConfig.isInBuilder;
            if (!isInBuilder || index > 0)
                return;
            const { cardConfigs, appMode, builderSupportModules, datasourceId, selectionIsInList, selectionIsList, hideCardTool } = this.props;
            let showTools = true;
            const { BuilderPopper, GLOBAL_RESIZING_CLASS_NAME, GLOBAL_H5_DRAGGING_CLASS_NAME, GLOBAL_DRAGGING_CLASS_NAME } = builderSupportModules.widgetModules;
            const isInList = selectionIsInList;
            const isSelf = selectionIsList;
            if ((!isInList && !isSelf) ||
                appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run ||
                hideCardTool ||
                !datasourceId) {
                showTools = false;
            }
            return (showTools &&
                this.props.isEditing &&
                (cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover].enable ||
                    cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !==
                        _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(BuilderPopper, { placement: 'left-start', trapFocus: false, autoFocus: false, css: jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
            .${GLOBAL_DRAGGING_CLASS_NAME} &,
            .${GLOBAL_RESIZING_CLASS_NAME} &,
            .${GLOBAL_H5_DRAGGING_CLASS_NAME} & {
              &.popper {
                display: none;
              }
            }
          `, reference: this.resizeRef.current, offset: statesPopperOffset, modifiers: statesModifiers, open: showTools }, this.getCardMenuElement())));
        };
        this.getCardMenuElement = () => {
            var _a;
            const { index } = this.props;
            const isInBuilder = window.jimuConfig.isInBuilder;
            if (!isInBuilder || index > 0)
                return;
            const { cardConfigs, selection, widgetId, builderSupportModules, browserSizeMode, builderStatus, selectionIsList } = this.props;
            const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            const appConfig = action.appConfig;
            const { searchUtils, BuilderDropDown, BuilderButton, withBuilderTheme } = builderSupportModules.widgetModules;
            const isSelf = selectionIsList;
            const showBreak = !isSelf &&
                selection &&
                searchUtils &&
                searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, selection, widgetId, browserSizeMode).length > 1;
            const { items: syncItems, title: syncTitle } = this.getCopyDropdownItems(showBreak);
            const showSync = syncItems && syncItems.length > 0;
            const listLayout = ((_a = cardConfigs[builderStatus]) === null || _a === void 0 ? void 0 : _a.listLayout) || _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.CUSTOM;
            const isShowSyncOrBreak = showSync || showBreak;
            const isShowCopyPopper = !isSelf && isShowSyncOrBreak && listLayout === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.CUSTOM;
            const CardMenu = withBuilderTheme(theme => {
                return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'status-group d-flex flex-column align-items-center p-2', css: this.getCardToolsStyle(theme) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(BuilderButton, { active: builderStatus === _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular, onClick: evt => { this.handleBuilderStatusChange(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular); } }, this.formatMessage('default')),
                    cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover].enable && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(BuilderButton, { active: builderStatus === _config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover, className: 'mt-1', onClick: evt => { this.handleBuilderStatusChange(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover); } }, this.formatMessage('hover'))),
                    cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !==
                        _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(BuilderButton, { active: builderStatus === _config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected, className: 'mt-1', onClick: evt => { this.handleBuilderStatusChange(evt, _config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected); } }, this.formatMessage('selected'))),
                    isShowCopyPopper && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(BuilderDropDown, { className: 'mt-1 w-100', toggleIsIcon: true, toggleTitle: syncTitle, toggleType: 'default', direction: 'left', toggleArrow: false, toggleContent: theme => (showBreak ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_sync_on__WEBPACK_IMPORTED_MODULE_5__.SyncOnOutlined, { size: 16 }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_sync_off__WEBPACK_IMPORTED_MODULE_6__.SyncOffOutlined, { size: 16 })), modifiers: applyPopperModifiers, items: syncItems }))));
            });
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardMenu, null));
        };
        this.isItemAccept = (item, isPlaceholder) => {
            var _a, _b;
            if (!item)
                return false;
            const { isEditing } = this.props;
            const supportRepeat = (_b = (_a = item.manifest) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.supportRepeat;
            // if(!supportRepeat && item.itemType === LayoutItemType.Widget && !item.id){//support placeholder
            //   supportRepeat = true;
            // }
            const { builderSupportModules, widgetId } = this.props;
            const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            const appConfig = action.appConfig;
            const selectionInList = builderSupportModules.widgetModules.selectionInList;
            return (isEditing &&
                supportRepeat &&
                (!item.layoutInfo ||
                    (item.layoutInfo &&
                        selectionInList(item.layoutInfo, widgetId, appConfig, false))));
        };
        this.getEditorStyle = () => {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      &.list-card-content {
        .fixed-layout {
          border: 0 !important;
        }
      }
    `;
        };
        this.state = {
            didMount: false
        };
        this.resizeRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.providerData = this.getNewProviderData();
    }
    shouldComponentUpdate(nextProps, nextStats) {
        let shouldUpdate = this.shouldComponentUpdateExcept(nextProps, nextStats, [
            'listStyle',
            'selection'
        ]);
        shouldUpdate =
            shouldUpdate ||
                !jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(this.props.listStyle, nextProps.listStyle);
        if (!shouldUpdate) {
            const { selectionIsInList, selectionIsList } = this.props;
            if (selectionIsList || selectionIsInList) {
                shouldUpdate = !jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(this.props.selection, nextProps.selection);
            }
        }
        return shouldUpdate;
    }
    componentDidUpdate(preProps) {
        const { selectionIsInList, isEditing, layoutType, isRTL, lockItemRatio, keepAspectRatio, index } = this.props;
        if (window.jimuConfig.isInBuilder && index === 0) {
            if (this.interactable) {
                if (isEditing && !selectionIsInList) {
                    if (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                        this.interactable.resizable({
                            edges: {
                                top: false,
                                left: isRTL,
                                bottom: !keepAspectRatio,
                                right: !isRTL
                            }
                        });
                        this.interactable.resizable(true);
                    }
                    else {
                        if (!lockItemRatio) {
                            this.interactable.resizable({
                                edges: {
                                    top: false,
                                    left: layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column && isRTL,
                                    bottom: layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row,
                                    right: layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column && !isRTL
                                }
                            });
                            this.interactable.resizable(true);
                        }
                        else {
                            this.interactable.resizable(false);
                        }
                    }
                }
                else {
                    this.interactable.resizable(false);
                }
            }
        }
    }
    componentDidMount() {
        const { index, layoutType, updateCardToolPosition, keepAspectRatio } = this.props;
        if (index === 0 &&
            window.jimuConfig.isInBuilder &&
            this.resizeRef.current) {
            const { interact, handleResizeCard, isRTL, lockItemRatio } = this.props;
            this.interactable = interact(this.resizeRef.current).resizable({
                // resize from all edges and corners
                edges: {
                    top: false,
                    left: (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column || layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) && isRTL,
                    bottom: ((layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row && !lockItemRatio) || (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID && !keepAspectRatio)),
                    right: ((layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column && !lockItemRatio) || layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) && !isRTL
                },
                modifiers: [
                    // keep the edges inside the parent
                    interact.modifiers.restrictEdges({
                        endOnly: true
                    }),
                    // minimum size
                    interact.modifiers.restrictSize({
                        min: { width: _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE, height: _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE }
                    })
                ],
                inertia: false,
                onstart: (event) => {
                    const { changeIsResizingCard } = this.props;
                    if (changeIsResizingCard) {
                        changeIsResizingCard(true);
                    }
                    event.stopPropagation();
                },
                onmove: (event) => {
                    event.stopPropagation();
                    if (this.lastResizeCall) {
                        cancelAnimationFrame(this.lastResizeCall);
                    }
                    const rect = event.rect;
                    const newCardSize = this.getNewCardSize(rect, true);
                    updateCardToolPosition();
                    this.lastResizeCall = requestAnimationFrame(() => {
                        const edges = {}; // event.interaction.edges;
                        handleResizeCard(newCardSize, false, edges.top, edges.left);
                    });
                },
                onend: (event) => {
                    event.stopPropagation();
                    if (this.lastResizeCall) {
                        cancelAnimationFrame(this.lastResizeCall);
                    }
                    this.lastResizeCall = requestAnimationFrame(() => {
                        const rect = event.rect;
                        const newCardSize = this.getNewCardSize(rect);
                        handleResizeCard(newCardSize, true);
                        const { changeIsResizingCard } = this.props;
                        if (changeIsResizingCard) {
                            changeIsResizingCard(false);
                        }
                    });
                }
            });
        }
        this.setState({
            didMount: true
        });
    }
    componentWillUnMount() {
        if (this.lastResizeCall) {
            cancelAnimationFrame(this.lastResizeCall);
        }
        if (this.interactable) {
            this.interactable.unset();
            this.interactable = null;
        }
    }
    handleBuilderStatusChange(evt, status) {
        this.editStatus('showCardSetting', status);
        this.editStatus('builderStatus', status);
        const { selectCard } = this.props;
        selectCard();
        evt.stopPropagation();
        evt.nativeEvent.stopImmediatePropagation();
    }
    render() {
        var _a;
        const { selectable, active, cardConfigs, LayoutEntry, selectionIsInList, isEditing, widgetId, listStyle, lockItemRatio, builderStatus, layouts, layoutType } = this.props;
        const { didMount } = this.state;
        const layout = layouts[builderStatus];
        const listLayout = ((_a = cardConfigs[builderStatus]) === null || _a === void 0 ? void 0 : _a.listLayout) || _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.CUSTOM;
        const regularLayout = layouts[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular];
        const showLayout = listLayout === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO ? regularLayout : layout;
        const bgStyle = cardConfigs[builderStatus].backgroundStyle;
        const isShowMask = listLayout === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO && builderStatus !== _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular;
        const mergedStyle = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(bgStyle || {}));
        const cardContentStyle = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle({
            borderRadius: (bgStyle === null || bgStyle === void 0 ? void 0 : bgStyle.borderRadius) || 0
        } || {}));
        const newProviderData = this.getNewProviderData();
        if (!this.isProviderEqual(newProviderData, this.providerData)) {
            this.providerData = newProviderData;
        }
        const isLockItemRatio = layoutType !== _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID && lockItemRatio;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.RepeatedDataSourceProvider, { data: this.providerData },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ListGroupItem, { active: selectable && active, css: this.getStyle(builderStatus), style: Object.assign(Object.assign({}, cardContentStyle), listStyle), className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('surface-1', `list-card-${widgetId}`), onClick: this.handleItemClick, role: 'listCardEditor' },
                isShowMask && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'card-editor-mask position-absolute' }),
                didMount && this.renderCardTools(),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-card-content d-flex', style: mergedStyle, css: this.getEditorStyle(), ref: this.resizeRef },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(LayoutEntry, { isItemAccepted: this.isItemAccept, isRepeat: true, layouts: showLayout, isInWidget: true }),
                    isEditing &&
                        !selectionIsInList &&
                        !isLockItemRatio &&
                        this._renderAction()))));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactRedux.connect((state, props) => {
    var _a;
    const { selectionIsList, builderSupportModules, appMode, widgetId, browserSizeMode } = props;
    if (!window.jimuConfig.isInBuilder || appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
        return {
            selection: undefined,
            showBreak: false
        };
    }
    const searchUtils = (_a = builderSupportModules === null || builderSupportModules === void 0 ? void 0 : builderSupportModules.widgetModules) === null || _a === void 0 ? void 0 : _a.searchUtils;
    const action = builderSupportModules.jimuForBuilderLib.getAppConfigAction();
    const appConfig = action.appConfig;
    const selection = props.index === 0 &&
        props.selectionIsInList &&
        state &&
        state.appRuntimeInfo &&
        state.appRuntimeInfo.selection;
    const showBreak = !selectionIsList &&
        selection &&
        searchUtils &&
        searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, selection, widgetId, browserSizeMode).length > 1;
    return {
        selection,
        showBreak
    };
})(_ListCardEditor));


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/list-card-viewer.tsx":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/list-card-viewer.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListCardViewer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var _list_card_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-card-base */ "./your-extensions/widgets/list-112/src/runtime/components/list-card-base.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */






class ListCardViewer extends _list_card_base__WEBPACK_IMPORTED_MODULE_4__["default"] {
    constructor(props) {
        super(props);
        this.updateExpressionRecords = () => {
            var _a, _b;
            this.expressionRecords = {};
            if (((_a = this.providerData) === null || _a === void 0 ? void 0 : _a.dataSourceId) && ((_b = this.providerData) === null || _b === void 0 ? void 0 : _b.record)) {
                this.expressionRecords[this.providerData.dataSourceId] = this.providerData.record;
            }
        };
        this.onUrlExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ url: result.value });
            }
            else {
                const res = '';
                // const errorCode = result.value
                // if (errorCode === ExpressionResolverErrorCode.Failed) {
                // }
                this.setState({ url: res });
            }
        };
        // componentDidUpdate(preProps, preState){
        //   Object.keys(this.props).forEach(key => {
        //     if(this.props[key] !== preProps[key])
        //       console.log(`props has changed: ${key}`)
        //   })
        // }
        this.handleItemClick = evt => {
            const { onChange, active } = this.props;
            const { providerData, linkRef } = this;
            const tagName = (evt.target && evt.target.tagName) || '';
            if (!(tagName.toLowerCase() === 'a' ||
                tagName.toLowerCase() === 'button' ||
                evt.exbEventType === 'linkClick') &&
                !active) {
                if (linkRef.current) {
                    // Must stopPropagation from link click, or this method will be called twice.
                    linkRef.current.click();
                }
            }
            // if click sub widget event, don't un select
            if (active) {
                const tagName = (evt.target && evt.target.tagName) || '';
                if (!(tagName.toLowerCase() === 'a' ||
                    tagName.toLowerCase() === 'button' ||
                    evt.exbEventType === 'linkClick')) {
                    onChange(providerData && providerData.record);
                }
            }
            else {
                onChange(providerData && providerData.record);
            }
            if (evt.exbEventType === 'linkClick') {
                delete evt.exbEventType;
            }
        };
        this.handleItemKeyDown = evt => {
            if (evt.key === 'Enter' || evt.key === ' ') {
                this.handleItemClick(evt);
            }
        };
        this.handleLinkClick = evt => {
            evt.stopPropagation();
        };
        this.state = {
            url: ''
        };
        this.providerData = this.getNewProviderData();
        this.updateExpressionRecords();
        this.layoutRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.linkRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    }
    shouldComponentUpdate(nextProps, nextStats) {
        let shouldUpdate = this.shouldComponentUpdateExcept(nextProps, nextStats, [
            'listStyle'
        ]);
        shouldUpdate =
            shouldUpdate ||
                !jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(this.props.listStyle, nextProps.listStyle);
        return shouldUpdate;
    }
    render() {
        var _a;
        const { selectable, active, cardConfigs, widgetId, listStyle, layouts, hoverLayoutOpen, appMode, isHover, linkParam, useDataSources, itemIdex, handleListMouseLeave, handleListMouseMove } = this.props;
        let { queryObject } = this.props;
        const { url } = this.state;
        let currentStatus = _config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular;
        const isInBuilder = window.jimuConfig.isInBuilder;
        let layout;
        let bgStyle;
        let target;
        let linkTo;
        if (isInBuilder && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
            bgStyle = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular].backgroundStyle;
            layout = layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular];
        }
        else {
            layout = layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular];
            bgStyle = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular].backgroundStyle;
            if (linkParam && linkParam.linkType) {
                target = linkParam.openType;
                linkTo = {
                    linkType: linkParam.linkType
                };
                if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                    linkTo.value = url;
                    queryObject = undefined;
                }
                else {
                    linkTo.value = linkParam.value;
                }
            }
            if (hoverLayoutOpen && isHover && layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover]) {
                currentStatus = _config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover;
                layout = layouts === null || layouts === void 0 ? void 0 : layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover];
                bgStyle = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover].backgroundStyle;
            }
            if (selectable && active && layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected]) {
                currentStatus = _config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected;
                layout = layouts === null || layouts === void 0 ? void 0 : layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected];
                bgStyle = cardConfigs[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected].backgroundStyle;
                queryObject = undefined;
                linkTo = undefined;
                target = undefined;
            }
        }
        const currentLayoutType = ((_a = cardConfigs[currentStatus]) === null || _a === void 0 ? void 0 : _a.listLayout) || _config__WEBPACK_IMPORTED_MODULE_3__.ListLayout.CUSTOM;
        const regularLayout = layouts[_config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular];
        const showLayout = currentLayoutType === _config__WEBPACK_IMPORTED_MODULE_3__.ListLayout.AUTO ? regularLayout : layout;
        const mergedStyle = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle(bgStyle || {}));
        const cardContentStyle = Object.assign({}, jimu_ui__WEBPACK_IMPORTED_MODULE_1__.styleUtils.toCSSStyle({
            borderRadius: (bgStyle === null || bgStyle === void 0 ? void 0 : bgStyle.borderRadius) || 0
        } || {}));
        const newProviderData = this.getNewProviderData();
        if (!this.isProviderEqual(newProviderData, this.providerData)) {
            this.providerData = newProviderData;
            this.updateExpressionRecords();
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.RepeatedDataSourceProvider, { data: this.providerData },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ListGroupItem, { active: selectable && active, css: this.getStyle(currentStatus), style: Object.assign(Object.assign({}, listStyle), cardContentStyle), tabIndex: 0, className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('surface-1 jimu-outline-inside', `list-card-${widgetId}`), onClick: this.handleItemClick, role: 'option', onKeyDown: this.handleItemKeyDown, "aria-describedby": 'describeByMessage', "aria-selected": selectable && active },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-card-content d-flex', onMouseLeave: handleListMouseLeave, onMouseMove: () => { handleListMouseMove(itemIdex); }, style: mergedStyle },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'position-relative h-100 w-100' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__._Link, { className: 'p-0 w-100 h-100 border-0 list-clear-background list-link', ref: this.linkRef, to: linkTo, target: target, tabIndex: -1, queryObject: queryObject, onClick: this.handleLinkClick }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 h-100 list-item-con', ref: this.layoutRef },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.LayoutEntry, { layouts: showLayout }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: useDataSources, expression: linkParam === null || linkParam === void 0 ? void 0 : linkParam.expression, 
                    /* records={this.expressionRecords}  */ onChange: this.onUrlExpResolveChange, widgetId: this.props.widgetId }))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDropDown)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


class MyDropDown extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onDropDownToggle = evt => {
            evt.stopPropagation();
            const { isDropDownOpen, onDropDownOpenChange } = this.props;
            if (isDropDownOpen !== undefined) {
                onDropDownOpenChange && onDropDownOpenChange(!isDropDownOpen);
            }
            else {
                const { isOpen } = this.state;
                this.setState({ isOpen: !isOpen });
            }
        };
        this.onItemClick = (evt, item) => {
            const { isDropDownOpen, onDropDownOpenChange } = this.props;
            if (isDropDownOpen !== undefined) {
                onDropDownOpenChange && onDropDownOpenChange(false);
            }
            else {
                this.setState({ isOpen: false });
            }
            item.event(evt, item);
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.onDropDownMouseClick = evt => {
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.getStyle = () => {
            var _a, _b, _c, _d, _e, _f;
            const { theme } = this.props;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      & button {
        padding: 0;
      }
      .list-toggle-button {
        background: ${(_c = (_b = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.light) === null || _c === void 0 ? void 0 : _c[500]};
        border: none;
        &:hover, &[aria-expanded="true"] {
          background: ${(_f = (_e = (_d = theme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.light) === null || _f === void 0 ? void 0 : _f[800]};
        }
      }
    `;
        };
        this.state = {
            isOpen: false
        };
        const { withBuilderStyle } = props;
        this.MyDropdown = withBuilderStyle ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown) : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown;
        this.MyDropdownButton = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton;
        this.MyDropdownMenu = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu;
        this.MyDropdownItem = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem;
    }
    render() {
        const { items, toggleContent, caret, toggleType, toggleArrow, menuContent, appMode, modifiers, toggleIsIcon, theme, isDropDownOpen, size, appendToBody, toggleTitle, direction, menuCss, className, showActive, activeLabel, fluid } = this.props;
        let { isOpen } = this.state;
        isOpen = isDropDownOpen === undefined ? isOpen : isDropDownOpen;
        const { MyDropdown, MyDropdownButton, MyDropdownMenu, MyDropdownItem } = this;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdown, { size: size, toggle: this.onDropDownToggle, direction: direction, fluid: fluid, isOpen: isOpen && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design, className: `my-dropdown ${className}`, css: this.getStyle() },
            toggleContent && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownButton, { icon: toggleIsIcon, title: toggleTitle, size: size, type: toggleType, caret: caret, className: 'list-toggle-button', arrow: toggleArrow }, toggleContent && toggleContent(theme))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownMenu, { appendToBody: appendToBody, modifiers: modifiers, css: menuCss && menuCss(theme) }, menuContent
                ? menuContent(theme)
                : items &&
                    items.asMutable().map((item, i) => {
                        return (!item.hide && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownItem, { key: i, className: 'no-user-select', title: item.label, active: showActive && item.label === activeLabel, onClick: evt => { this.onItemClick(evt, item); } }, item.label)));
                    }))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/components/search-box.tsx":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/search-box.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/search */ "./jimu-icons/outlined/editor/search.tsx");
/* harmony import */ var jimu_icons_outlined_directional_arrow_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-icons/outlined/directional/arrow-left */ "./jimu-icons/outlined/directional/arrow-left.tsx");
/** @jsx jsx */





const Sanitizer = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.Sanitizer;
const sanitizer = new Sanitizer();
class SearchBox extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = searchText => {
            this.setState({
                searchText: searchText,
                isShowSuggestion: (searchText === null || searchText === void 0 ? void 0 : searchText.length) > 2
            }, () => {
                const { onSearchTextChange } = this.props;
                if (onSearchTextChange) {
                    onSearchTextChange(searchText);
                }
            });
        };
        this.handleSubmit = (value, isEnter = false) => {
            const { onSubmit } = this.props;
            if (onSubmit) {
                onSubmit(value, isEnter);
            }
        };
        this.onKeyUp = evt => {
            if (!evt || !evt.target)
                return;
            const { isShowSuggestion } = this.state;
            if (evt.key === 'Enter') {
                this.setState({
                    isShowSuggestion: false
                });
                this.handleSubmit(evt.target.value, true);
            }
            if (isShowSuggestion) {
                const items = this.getMenuItems() || [];
                const itemLength = (items === null || items === void 0 ? void 0 : items.length) - 1;
                if (evt.key === 'ArrowUp') {
                    setTimeout(() => {
                        var _a;
                        (_a = items[itemLength]) === null || _a === void 0 ? void 0 : _a.focus();
                    });
                }
                else if (evt.key === 'ArrowDown') {
                    setTimeout(() => {
                        var _a, _b;
                        (_a = this.containerRef) === null || _a === void 0 ? void 0 : _a.focus();
                        (_b = items[0]) === null || _b === void 0 ? void 0 : _b.focus();
                    });
                }
            }
        };
        this.onSuggestionConfirm = suggestion => {
            this.setState({
                searchText: suggestion,
                isShowSuggestion: false
            }, () => {
                var _a;
                this.handleSubmit(suggestion);
                (_a = this.props) === null || _a === void 0 ? void 0 : _a.toggleSearchBoxVisible(true);
            });
        };
        this.handleClear = evt => {
            this.setState({
                searchText: ''
            });
            evt.stopPropagation();
        };
        this.getStyle = () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const { theme } = this.props;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      position: relative;
      .search-input {
        margin-bottom: -1px;
        padding-left: 3px;
        border: 0;
        // border-bottom-width: 1px;
        // border-bottom-style: solid;
        // border-color: ${theme.colors.primary};
        background: transparent;
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(26)};
        min-width: 0;
        .input-wrapper {
          background: transparent;
          border: none;
          padding: 0;
          height: 100%;
        }
      }
      .search-input:focus {
        background: transparent;
      }
      .search-loading-con {
        @keyframes loading {
          0% {transform: rotate(0deg); };
          100% {transform: rotate(360deg)};
        }
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
        min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
        border: 2px solid ${(_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.secondary) === null || _c === void 0 ? void 0 : _c[300]};
        border-radius: 50%;
        border-top: 2px solid ${(_f = (_e = (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.primary) === null || _f === void 0 ? void 0 : _f[500]};
        box-sizing: border-box;
        animation:loading 2s infinite linear;
        margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
      }
      .clear-search, .search-back {
        cursor: pointer;
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
        background: none;
        border: none;
        color: ${(_j = (_h = (_g = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _g === void 0 ? void 0 : _g.palette) === null || _h === void 0 ? void 0 : _h.dark) === null || _j === void 0 ? void 0 : _j[800]}
      }
      .search-back {
        margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-6)};
      }
      .clear-search:hover {
        background: none;
      }
    `;
        };
        this.getSuggestionListStyle = () => {
            const { suggestionWidth } = this.props;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      & {
        max-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(300)};
        min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(suggestionWidth)};
        overflow: auto;
      }
      button {
        display: block;
        width: 100%;
        text-align: left;
        border: none;
        border-radius: 0;
      }
      .suggestion-item:focus {
        background: var(--primary-500);
        color: var(--white);
      }
      button:hover {
        border: none;
      }
    `;
        };
        this.clearSearchText = () => {
            const { searchText } = this.state;
            if (searchText) {
                this.handleChange('');
                this.setState({
                    isShowSuggestion: false
                });
            }
        };
        this.getMenuItems = () => {
            return this.containerRef ? Array.prototype.slice.call(this.containerRef.querySelectorAll('[role="button"]')).filter(item => !item.disabled) : [];
        };
        this.getTextInputSuffixElement = () => {
            const { theme, showLoading, formatMessage } = this.props;
            const { searchText } = this.state;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center' },
                showLoading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'search-loading-con' }),
                searchText && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { color: 'tertiary', className: 'clear-search', icon: true, size: 'sm', onClick: this.clearSearchText, title: formatMessage('clearSearch') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, { size: 14, color: theme.colors.palette.dark[800] })))));
        };
        this.getTextInputPrefixElement = () => {
            const { theme, formatMessage } = this.props;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', icon: true, size: 'sm', title: formatMessage('SearchLabel'), onClick: evt => { this.handleSubmit(this.state.searchText); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_3__.SearchOutlined, { size: 16, color: theme.colors.palette.light[800] })));
        };
        this.handlePopperKeyDown = (e) => {
            const { isShowSuggestion } = this.state;
            if (!isShowSuggestion) {
                return;
            }
            const isTargetMenuItem = e.target.getAttribute('role') === 'button';
            if (!['Tab', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
                return;
            }
            if (((e.which >= 48) && (e.which <= 90)) || e.key === 'Tab') {
                e.preventDefault();
            }
            if (isShowSuggestion && isTargetMenuItem) {
                if (e.key === 'Escape') {
                    this.handleEscEvent(e);
                }
                else if (['ArrowUp', 'ArrowDown'].includes(e.key) || (['n', 'p'].includes(e.key) && e.ctrlKey)) {
                    const $menuitems = this.getMenuItems();
                    let index = $menuitems.indexOf(e.target);
                    let isArrowUp = false;
                    if (e.key === 'ArrowUp' || (e.key === 'p' && e.ctrlKey)) {
                        index = index !== 0 ? index - 1 : $menuitems.length - 1;
                        isArrowUp = true;
                    }
                    else if (e.key === 'ArrowDown' || (e.key === 'n' && e.ctrlKey)) {
                        isArrowUp = false;
                        index = index === $menuitems.length - 1 ? 0 : index + 1;
                    }
                    const isArrowUpToInput = (index === 0 && !isArrowUp);
                    const isArrowDownToInput = (index === $menuitems.length - 1 && isArrowUp);
                    clearTimeout(this.focusTimeout);
                    if (isArrowUpToInput || isArrowDownToInput) {
                        this.focusTimeout = setTimeout(() => {
                            var _a;
                            (_a = this.searchInputRef) === null || _a === void 0 ? void 0 : _a.focus();
                        });
                    }
                    else {
                        this.focusTimeout = setTimeout(() => {
                            var _a;
                            (_a = this.containerRef) === null || _a === void 0 ? void 0 : _a.focus();
                            $menuitems[index].focus();
                        });
                    }
                }
                else if (e.key === 'End') {
                    const $menuitems = this.getMenuItems();
                    $menuitems[$menuitems.length - 1].focus();
                }
                else if (e.key === 'Home') {
                    const $menuitems = this.getMenuItems();
                    $menuitems[0].focus();
                }
                else if ((e.which >= 48) && (e.which <= 90)) {
                    const $menuitems = this.getMenuItems();
                    const charPressed = String.fromCharCode(e.which).toLowerCase();
                    for (let i = 0; i < $menuitems.length; i += 1) {
                        const firstLetter = $menuitems[i].textContent && $menuitems[i].textContent[0].toLowerCase();
                        if (firstLetter === charPressed) {
                            $menuitems[i].focus();
                            break;
                        }
                    }
                }
            }
        };
        this.handleEscEvent = (e) => {
            var _a;
            const { isShowSuggestion } = this.state;
            e.preventDefault();
            this.setState({ isShowSuggestion: !isShowSuggestion });
            (_a = this.searchInputRef) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.setInputRef = (ref) => {
            const { inputRef } = this.props;
            this.searchInputRef = ref;
            inputRef && inputRef(ref);
        };
        this.state = {
            searchText: props.searchText || '',
            isShowSuggestion: false
        };
    }
    componentDidUpdate(preProps) {
        var _a;
        if (this.props.searchText !== preProps.searchText &&
            this.props.searchText !== this.state.searchText) {
            const { searchText } = this.props;
            this.setState({
                searchText: searchText
            });
        }
        if (((_a = this.props) === null || _a === void 0 ? void 0 : _a.appMode) === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design && this.state.isShowSuggestion) {
            this.setState({
                isShowSuggestion: false,
                searchText: ''
            });
        }
    }
    render() {
        const { placeholder, className, showClear, hideSearchIcon, onFocus, onBlur, theme, searchSuggestion, formatMessage, isShowBackButton } = this.props;
        const { searchText, isShowSuggestion } = this.state;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref => (this.reference = ref) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(), className: `d-flex align-items-center ${className}` },
                isShowBackButton && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { color: 'tertiary', className: 'search-back', icon: true, size: 'sm', onClick: evt => {
                        var _a;
                        (_a = this.props) === null || _a === void 0 ? void 0 : _a.toggleSearchBoxVisible(false);
                    }, title: formatMessage('topToolBack') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_arrow_left__WEBPACK_IMPORTED_MODULE_4__.ArrowLeftOutlined, { size: 20, color: theme.colors.palette.dark[800] }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { className: 'search-input flex-grow-1', ref: ref => { this.setInputRef(ref); }, placeholder: placeholder, onChange: e => { this.handleChange(e.target.value); }, onBlur: onBlur, onFocus: onFocus, title: searchText || placeholder, value: searchText || '', onKeyDown: e => { this.onKeyUp(e); }, prefix: (!hideSearchIcon && !isShowBackButton) && this.getTextInputPrefixElement(), suffix: this.getTextInputSuffixElement() }),
                showClear && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { id: 'test-focus', color: 'tertiary', icon: true, size: 'sm', onClick: this.handleSubmit },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, { size: 12, color: theme.colors.palette.dark[800] })))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { css: this.getSuggestionListStyle(), placement: 'bottom-start', reference: this.reference, offset: [0, 8], open: isShowSuggestion, autoFocus: false, toggle: e => {
                        this.setState({ isShowSuggestion: !isShowSuggestion });
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref => (this.containerRef = ref), onKeyDown: this.handlePopperKeyDown }, searchSuggestion.map((suggestion, index) => {
                        const suggestionHtml = sanitizer.sanitize(suggestion.suggestionHtml);
                        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { key: index, type: 'secondary', size: 'sm', role: 'button', title: suggestion === null || suggestion === void 0 ? void 0 : suggestion.suggestion, className: 'suggestion-item', onClick: () => {
                                this.onSuggestionConfirm(suggestion.suggestion);
                            }, dangerouslySetInnerHTML: { __html: suggestionHtml } }));
                    }))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/styles/style.tsx":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/styles/style.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchToolStyle": () => (/* binding */ getSearchToolStyle),
/* harmony export */   "getStyle": () => (/* binding */ getStyle),
/* harmony export */   "getToolsPopperStyle": () => (/* binding */ getToolsPopperStyle),
/* harmony export */   "getTopToolStyle": () => (/* binding */ getTopToolStyle),
/* harmony export */   "listStyle": () => (/* binding */ listStyle)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");


const listStyle = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.memoize(function (options) {
    const { showTopTools, bottomToolH, topRightToolW, hasRecords, currentCardSize, pageStyle, scrollBarOpen, appMode, theme, isHeightAuto, isWidthAuto, listTemplateDefaultCardSize, layoutType, listLeftPadding } = options;
    const topToolsH = showTopTools ? _config__WEBPACK_IMPORTED_MODULE_1__.DS_TOOL_H : 0;
    const direction = layoutType === _config__WEBPACK_IMPORTED_MODULE_1__.ListLayoutType.Column ? _config__WEBPACK_IMPORTED_MODULE_1__.DirectionType.Horizon : _config__WEBPACK_IMPORTED_MODULE_1__.DirectionType.Vertical;
    const isHorizon = layoutType === _config__WEBPACK_IMPORTED_MODULE_1__.ListLayoutType.Column;
    const flexDirection = layoutType === _config__WEBPACK_IMPORTED_MODULE_1__.ListLayoutType.Column ? 'column' : 'row';
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    &.list-container {
      /* position: ${isHeightAuto ? 'absolute' : 'relative'}; */
      position: relative;
      z-index: 0;
      overflow: hidden;
      .bottom-boundary {
        height: 2px;
        width: 2px;
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0;
      }
      ${direction === _config__WEBPACK_IMPORTED_MODULE_1__.DirectionType.Horizon
        ? `
          margin-left: ${_config__WEBPACK_IMPORTED_MODULE_1__.LIST_CARD_PADDING + 'px'};
          height: ${isHeightAuto ? 'auto' : 'calc(100% - 1px)'};
          width: ${isWidthAuto ? 'auto' : `calc(100% - ${_config__WEBPACK_IMPORTED_MODULE_1__.LIST_CARD_PADDING + 'px'})`};
        `
        : `
          margin-top: ${_config__WEBPACK_IMPORTED_MODULE_1__.LIST_CARD_PADDING + 'px'};
          width: ${isWidthAuto ? 'auto' : 'calc(100% - 1px)'};
          height: ${isHeightAuto ? 'auto' : `calc(100% - ${_config__WEBPACK_IMPORTED_MODULE_1__.LIST_CARD_PADDING + 'px'})`};
        `}

      .editing-mask-con {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: ${topToolsH}px;
          z-index: 10;
          height: ${currentCardSize.height}px;
          width: ${listLeftPadding}px;
          background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0.2)};
        }
        .editing-mask-list-grid {
          position: absolute;
          left: ${currentCardSize.width + listLeftPadding}px;
          top: ${topToolsH}px;
          right: 0;
          z-index: 10;
          height: ${currentCardSize.height}px;
          background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0.2)};
        }
      }
      .editing-mask-list {
        position: absolute;
        top: ${layoutType !== _config__WEBPACK_IMPORTED_MODULE_1__.ListLayoutType.Column && hasRecords
        ? currentCardSize.height + topToolsH
        : topToolsH}px;
        left: ${layoutType === _config__WEBPACK_IMPORTED_MODULE_1__.ListLayoutType.Column && hasRecords
        ? currentCardSize.width
        : 0}px;
        bottom: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(bottomToolH)};
        right: 0;
        z-index: 10;
        background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0.2)};
      }

      .editing-mask-ds-tool {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0.2)};
      }

      .editing-mask-bottom-tool {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0.2)};
      }

      .empty-con {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        z-index: 10;
        transform: translateY(-50%);
        padding-top: ${topToolsH}px;
        .jimu-icon {
          color: ${theme.colors.palette.warning[900]};
        }
        .discribtion {
          margin: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(9)} 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)} 0;
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
          color: ${theme.colors.black}
        }
        .clear-message-action-button {
          width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(65)};
        }
      }

      .datasource-tools {
        position: relative;
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(topToolsH)};
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.DS_TOOL_BOTTOM_PADDING)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
        .list-sort-con {
          margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
        }
        .sort-fields-input {
          width: 200px;
          margin-left: 8px;
          margin-right: 16px;
        }

        .tool-row {
          height: ${_config__WEBPACK_IMPORTED_MODULE_1__.DS_TOOL_H - _config__WEBPACK_IMPORTED_MODULE_1__.DS_TOOL_BOTTOM_PADDING}px;
        }
        .ds-tools-line {
          width: 100%;
          height: 1px;
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
          background-color: ${theme.colors.palette.light[500]};
        }
        .ds-tools-line-blue {
          background-color: ${theme.colors.palette.info[500]};
        }
        .list-search-div {
          width: calc(100% - ${topRightToolW}px);
          .list-search {
            margin-bottom: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-4)};
            width: 100%;
          }
        }

      }
      .tools-menu {
        color: ${theme.colors.palette.light[800]};
      }
      .tools-menu:hover {
        color: ${theme.colors.palette.info[500]};
      }
      .bottom-tools {
        position: relative;
        padding-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_TOOL_TOP_PADDING)};
        min-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_TOOL_H)};
        .scroll-navigator {
          .btn {
            border-radius: ${theme.borderRadiuses.circle};
          }
        }
      }

      .widget-list-list:focus {
        outline: none;
      }
      .widget-list-list {
        & {
          padding: 0;
          position: relative;
          padding-left: ${`${listLeftPadding}px`};
        }
        &>div {
          position: relative;
          flex: 1;
          box-sizing: content-box;
        }
        /* box-sizing: border-box; */
        ${!window.jimuConfig.isInBuilder || appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run
        ? `overflow-${isHorizon ? 'y' : 'x'}: hidden !important;`
        : 'overflow: hidden !important;'}
        height: ${isHeightAuto
        ? 'auto'
        : `calc(100% - ${topToolsH}px - ${bottomToolH}px)`} !important;
        width: ${isWidthAuto ? 'auto' : '100%'} !important;
        display: flex;
        ${`flex-direction: ${flexDirection}`};
        ${isHeightAuto && `min-height: ${listTemplateDefaultCardSize.height}px;`};
        ${isWidthAuto && `min-width: ${listTemplateDefaultCardSize.width}px;`};
        ${isHorizon
        ? `
              ${`max-width: ${options.mexSize.maxWidth}`};
            `
        : `
              ${`max-height: calc(${options.mexSize.maxHeight} - ${topToolsH}px - ${bottomToolH}px)`};
            `}
      }
      .hide-list {
        overflow: hidden !important;
      }
      ${pageStyle === _config__WEBPACK_IMPORTED_MODULE_1__.PageStyle.Scroll && !scrollBarOpen
        ? `
          .widget-list-list::-webkit-scrollbar {
            display: none; //Safari and Chrome
          }
          .widget-list-list {
              -ms-overflow-style: none; //IE 10+
              overflow: -moz-scrollbars-none; //Firefox
              scrollbar-width: none; /* Firefox */
          }
        `
        : ''}
      .placeholder-alert-con {
        position: absolute;
        bottom: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)};
        right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)};
        z-index: 11;
      }
    }
  `;
});
function getStyle(props, isEditing, showBottomTool) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { config, id, appMode, isHeightAuto, isWidthAuto, theme } = props;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    ${'&.list-widget-' + id} {
      overflow: visible;
      background-color: transparent;
      border: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.COMMON_PADDING)} solid ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, window.jimuConfig.isInBuilder && isEditing ? 0.2 : 0)};
      height: ${isHeightAuto ? 'auto' : '100%'};
      width: ${isWidthAuto ? 'auto' : '100%'};
      .list-with-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(theme.colors.black, 0)};
        z-index: 1;
      }
      .list-toggle-button {
        background: none;
      }
      .list-loading-con {
        min-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(120)};
        min-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(160)};
      }
      .list-error-con {
        .alert-panel {
          border-radius: 0;
          text-align: left;
          left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
          right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
          bottom: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
          width: auto;
        }
      }
      .refresh-loading-con {
        right: 0;
        bottom:${showBottomTool ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_TOOL_H) : 0};
        align-items: center;
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(24)};
        .auto-refresh-loading {
          background: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba((_c = (_b = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.dark) === null || _c === void 0 ? void 0 : _c[100], 0.2)};
          color: ${(_d = theme.colors) === null || _d === void 0 ? void 0 : _d.black};
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
          line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(24)};
          padding: 0 ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(7)};
        }
        &.horizon-loading {
          bottom:${showBottomTool ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(_config__WEBPACK_IMPORTED_MODULE_1__.BOTTOM_TOOL_H + 6) : jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
        }
        &.vertical-loading {
          right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)};
        }
      }
      .loading-con {
        @keyframes loading {
          0% {transform: rotate(0deg); };
          100% {transform: rotate(360deg)};
        }
        width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
        border: 1px solid ${(_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.palette) === null || _f === void 0 ? void 0 : _f.dark) === null || _g === void 0 ? void 0 : _g[100]};
        border-radius: 50%;
        border-top: 1px solid ${(_k = (_j = (_h = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _h === void 0 ? void 0 : _h.palette) === null || _j === void 0 ? void 0 : _j.dark) === null || _k === void 0 ? void 0 : _k[800]};
        box-sizing: border-box;
        animation:loading 2s infinite linear;
        margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
      }
      .widget-list {
        overflow: ${window.jimuConfig.isInBuilder && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run
        ? 'hidden'
        : 'auto'};
        height: ${isHeightAuto ? 'auto' : '100%'};
        width: ${isWidthAuto ? 'auto' : '100%'};
        /* align-items: ${config.alignType};
        justify-content: ${config.alignType}; */
        ${config.direction === _config__WEBPACK_IMPORTED_MODULE_1__.DirectionType.Horizon
        ? `
            overflow-y: hidden;
          `
        : `
            overflow-x: hidden;
          `}
      }
    }

  `;
}
function getToolsPopperStyle(props) {
    const { theme } = props;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    & {
      padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(6)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(11)};
      height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(40)};
    }
    .list-toggle-button {
      background: none;
    }
    .list-sort-con, .list-search-icon {
      margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
    }
    .ds-tools-line {
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.palette.light[500]};
    }
    .ds-tools-line-blue {
      background-color: ${theme.colors.palette.info[500]};
    }
    .close-search {
      margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-6)};
    }
  `;
}
function getSearchToolStyle(props) {
    const { theme } = props;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    .close-search {
      border: 1px solid ${theme.colors.palette.light[500]};
      box-sizing: border-box;
      background-color: ${theme.colors.white};
    }
    .search-box-content {
      flex-direction: column;
      align-items: flex-start;
    }
  `;
}
function getTopToolStyle(props, showTopTools) {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    .list-data-action {
      & {
        padding-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
        border-left: 1px solid ${showTopTools ? 'var(--light-400)' : 'transparent'}
      }
    }
    .m-left {
      margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
    }
  `;
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/translations/default.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/translations/default.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'List',
    _widgetDescription: 'A widget to display data in a list view.',
    _action_filter_label: 'Filter',
    _layout_REGULAR_label: 'Regular',
    _layout_HOVER_label: 'Hover',
    _layout_SELECTED_label: 'Selected',
    applyTo: 'Apply to {status}',
    listLoading: 'Loading',
    pleaseSelect: 'Please select',
    listNoData: 'No data',
    selectSortFields: 'Select sorting fields',
    clearFilter: 'Clear filter',
    isolate: 'Isolate',
    linkedToAnd: 'Linked to {where1} and {where2}',
    linkedTo: 'Linked to {where}',
    placeHolderTip: 'Please select a list template.',
    showSelected: 'Show selected',
    clearSelected: 'Clear selected',
    listSorting: 'Sorting',
    listSort: 'Sort',
    // guide
    guideStep2Title: 'Template',
    guideStep2Content: 'Click on a template and click start.',
    guideStep3Title: 'Data',
    guideStep3Content: 'Click on select data to add a data source.',
    guideStep4Title: 'Add new data',
    guideStep4Content: 'Click add new data to select a web map.',
    guideStep5Title: 'Select data',
    guideStep5Content: 'Click the feature layer in the select data panel and close the panel.',
    guideStep6Title: 'Data',
    guideStep6Content: 'Specifies the data source, allows you to filter the data and limit the number of features that appear in the list.',
    guideStep7Title: 'Arrangement',
    guideStep7Content: 'Click the expand icon to explore the Arrangement section. In here, it allows you to define the direction, height, spacing, and paging style for your list.',
    guideStep8Title: 'States',
    guideStep8Content: 'Click the expand icon to explore the available States. In this section, it provides a visual representation to communicate the state of the list items. There are three states: regular, selected, and hover. By default, the selected state is always on.',
    guideStep9Title: 'Tools',
    guideStep9Content: 'Click the expand icon to explore the available Tools. In here, you can include search, sort, filter, and show selected tools in your list.',
    guideStep10Title: 'Select image',
    guideStep10Content: 'Click the image widget to configure it in the content panel.',
    guideStep10Title2: 'Image settings',
    guideStep10Content2: 'Allows you to select the image source and other settings for your widget.',
    guideStep11Title: 'Select text',
    guideStep11Content: 'Click the text widget to add attributes in the widget toolbar.',
    guideStep11Title2: 'Text settings',
    guideStep11Content2: 'Provides the configurations and style, including adding dynamic content from the widget toolbar. ',
    guideStep12Title: 'End of tour',
    guideStep12Content: 'Add other widgets to enhance your experience.',
    clearSearch: 'Clear search',
    minimize: 'Minimize',
    topToolBack: 'Back',
    showAllListRecords: 'Show all records',
    listDataActionLabel: '{layer} list selection',
    searchResult: 'Search result',
    describeMessage: 'List item'
});


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/utils/list-service.tsx":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/utils/list-service.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compareQueryOptionsExceptPaging": () => (/* binding */ compareQueryOptionsExceptPaging),
/* harmony export */   "fetchSuggestionRecords": () => (/* binding */ fetchSuggestionRecords),
/* harmony export */   "getQueryOptions": () => (/* binding */ getQueryOptions)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function getQueryOptions(state, props, pageSize) {
    var _a, _b;
    const options = {
        returnGeometry: true
    };
    const { config, useDataSources } = props;
    const { sortOptionName, searchText, currentFilter, filterApplied, datasource } = state;
    const useDS = useDataSources && useDataSources[0];
    if (!datasource || !useDS)
        return null;
    if (!datasource.query) {
        // not queryiable data source, return
        return null;
    }
    // sort
    let sortOption;
    if (config.sortOpen && config.sorts) {
        sortOption = config.sorts.find((sort) => sort.ruleOptionName === sortOptionName);
        sortOption = sortOption || config.sorts[0];
        if (!((_b = (_a = sortOption === null || sortOption === void 0 ? void 0 : sortOption.rule) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.jimuFieldName)) {
            sortOption = undefined;
        }
        if (sortOption) {
            const orderBys = [];
            sortOption.rule.forEach(sortData => {
                if (sortData.jimuFieldName) {
                    orderBys.push(`${sortData.jimuFieldName} ${sortData.order}`);
                }
            });
            options.orderByFields = orderBys;
        }
    }
    // filter
    if (config.filterOpen &&
        filterApplied &&
        config.filter &&
        currentFilter &&
        currentFilter.sql) {
        options.where = currentFilter.sql;
        options.sqlExpression = currentFilter;
    }
    // search
    if (config.searchOpen && config.searchFields && searchText) {
        const sqlExpr = getSQL(searchText, config, datasource);
        if (options.where) { // has filter
            const mergedExpr = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getMergedSQLExpressions([options.sqlExpression.asMutable({ deep: true }), sqlExpr], datasource);
            options.where = mergedExpr.sql;
            options.sqlExpression = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(mergedExpr);
        }
        else {
            options.where = sqlExpr.sql;
            options.sqlExpression = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(sqlExpr);
        }
    }
    // paging
    if (pageSize > 0) {
        options.page = state.page;
        options.pageSize = pageSize;
    }
    // Compare if query changed except paging
    const newQuery = options;
    return newQuery;
}
function fetchSuggestionRecords(searchText, config, datasource) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchFields = config.searchFields.split(',');
        const queryParams = {
            page: 1,
            pageSize: 10,
            outFields: searchFields,
            returnDistinctValues: true,
            orderByFields: null
        };
        if (config.searchOpen && config.searchFields) {
            const sqlExpr = getSQL(searchText, config, datasource, true);
            queryParams.where = sqlExpr.sql;
            queryParams.sqlExpression = sqlExpr;
        }
        const searchReg = new RegExp(`(${escapeRegex(searchText)})`, 'gi');
        return queryRecords(queryParams, datasource).then((records) => __awaiter(this, void 0, void 0, function* () {
            let searchSuggestion = [];
            searchFields.forEach(attrName => {
                records.forEach(el => {
                    var _a;
                    const suggestionItem = (_a = el === null || el === void 0 ? void 0 : el.feature) === null || _a === void 0 ? void 0 : _a.attributes[attrName];
                    if (suggestionItem &&
                        !searchSuggestion.includes(suggestionItem) &&
                        suggestionItem.match(searchReg)) {
                        const suggestion = {
                            suggestionHtml: getSuggestionItem(suggestionItem, searchText),
                            suggestion: suggestionItem
                        };
                        searchSuggestion.push(suggestion);
                    }
                });
            });
            searchSuggestion = uniqueJson(searchSuggestion, 'suggestion');
            return Promise.resolve(searchSuggestion);
        }));
    });
}
function escapeRegex(string) {
    return string.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
}
function uniqueJson(jsonArr, key) {
    const result = jsonArr[0] ? [jsonArr[0]] : [];
    for (let i = 1; i < jsonArr.length; i++) {
        const item = jsonArr[i];
        let repeat = false;
        for (let j = 0; j < result.length; j++) {
            if (item[key] === result[j][key]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            result.push(item);
        }
    }
    return result;
}
function getSQL(searchText, config, datasource, fetchSuggestion = false) {
    const searchFields = config.searchFields.split(',');
    const searchExact = fetchSuggestion ? false : config.searchExact;
    const clauseOperator = searchExact ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.ClauseOperator.StringOperatorIs : jimu_core__WEBPACK_IMPORTED_MODULE_0__.ClauseOperator.StringOperatorContains;
    if (config.searchOpen && config.searchFields) {
        const clauses = searchFields.map(field => {
            let newSearchText = searchText;
            const codedValues = datasource === null || datasource === void 0 ? void 0 : datasource.getFieldCodedValueList(field);
            if (codedValues) {
                codedValues === null || codedValues === void 0 ? void 0 : codedValues.forEach(item => {
                    if (newSearchText === (item === null || item === void 0 ? void 0 : item.label)) {
                        newSearchText = item === null || item === void 0 ? void 0 : item.value;
                    }
                });
            }
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createSQLClause(field, clauseOperator, newSearchText);
        });
        const clauseSet = jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createSQLClauseSet(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ClauseLogic.Or, clauses);
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.createSQLExpression(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ClauseLogic.And, [clauseSet], datasource);
    }
}
function getSuggestionItem(suggestion, searchText) {
    if (!searchText)
        return suggestion;
    const replaceReg = new RegExp(`(${escapeRegex(searchText)})`, 'gi');
    return suggestion.replace(replaceReg, '<strong >$1</strong>');
}
function queryRecords(q, ds) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ds)
            return yield Promise.resolve([]);
        return yield ds
            .query(q, { scope: jimu_core__WEBPACK_IMPORTED_MODULE_0__.QueryScope.InRuntimeView })
            .then((queryResult) => __awaiter(this, void 0, void 0, function* () { return yield queryRecordsResult(q, queryResult); }));
    });
}
function queryRecordsResult(q, queryResult) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.resolve((queryResult === null || queryResult === void 0 ? void 0 : queryResult.records) || []);
    });
}
function compareQueryOptionsExceptPaging(query1, query2, datasource) {
    // const isEqual = true;
    if (!datasource)
        return false;
    query1 = datasource.getRealQueryParams(query1, 'query');
    query2 = datasource.getRealQueryParams(query2, 'query');
    if (!query1 || !query2) {
        return false;
    }
    delete query1.page;
    delete query1.pageSize;
    delete query1.resultOffset;
    delete query1.resultRecordCount;
    delete query2.page;
    delete query2.pageSize;
    delete query2.resultOffset;
    delete query2.resultRecordCount;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.isDeepEqual(query1, query2);
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/runtime/utils/utils.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/utils/utils.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsShowDataAction": () => (/* binding */ checkIsShowDataAction),
/* harmony export */   "checkIsShowListToolsOnly": () => (/* binding */ checkIsShowListToolsOnly),
/* harmony export */   "createOutputDs": () => (/* binding */ createOutputDs),
/* harmony export */   "getBottomToolH": () => (/* binding */ getBottomToolH),
/* harmony export */   "getCardSizeConfig": () => (/* binding */ getCardSizeConfig),
/* harmony export */   "getCardSizeNumberInConfig": () => (/* binding */ getCardSizeNumberInConfig),
/* harmony export */   "getCardSizeWidthUnitInConfig": () => (/* binding */ getCardSizeWidthUnitInConfig),
/* harmony export */   "getDefaultMinListSize": () => (/* binding */ getDefaultMinListSize),
/* harmony export */   "getListHeight": () => (/* binding */ getListHeight),
/* harmony export */   "getPageSize": () => (/* binding */ getPageSize),
/* harmony export */   "initCardSize": () => (/* binding */ initCardSize),
/* harmony export */   "intersectionObserver": () => (/* binding */ intersectionObserver),
/* harmony export */   "isDsConfigured": () => (/* binding */ isDsConfigured),
/* harmony export */   "isEqualCardSizeByListLayout": () => (/* binding */ isEqualCardSizeByListLayout),
/* harmony export */   "isEqualNumber": () => (/* binding */ isEqualNumber),
/* harmony export */   "isScrollStart": () => (/* binding */ isScrollStart),
/* harmony export */   "showBottomTools": () => (/* binding */ showBottomTools),
/* harmony export */   "showClearSelected": () => (/* binding */ showClearSelected),
/* harmony export */   "showDisplaySelectedOnly": () => (/* binding */ showDisplaySelectedOnly),
/* harmony export */   "showFilter": () => (/* binding */ showFilter),
/* harmony export */   "showSearch": () => (/* binding */ showSearch),
/* harmony export */   "showSort": () => (/* binding */ showSort),
/* harmony export */   "showTopTools": () => (/* binding */ showTopTools)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");



function isScrollStart(listDiv, lastScrollOffset) {
    if (!listDiv)
        return true;
    const scrollTOrL = lastScrollOffset;
    const isStart = scrollTOrL < 2;
    return isStart;
}
function isEqualCardSizeByListLayout(cardSize1, cardSize2, layoutType) {
    if (layoutType === _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.Column) {
        return isEqualNumber(cardSize1.width, cardSize2.width);
    }
    else if (layoutType === _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.Row) {
        return isEqualNumber(cardSize1.height, cardSize2.height);
    }
    else {
        return isEqualNumber(cardSize1.width, cardSize2.width) && isEqualNumber(cardSize1.height, cardSize2.height);
    }
}
function isEqualNumber(num1, num2) {
    if (Math.abs(num1 - num2) < 0.0001) {
        return true;
    }
    else {
        return false;
    }
}
function createOutputDs(records, outputDsId, useDs) {
    if (!outputDsId || !useDs)
        return;
    const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance();
    if (dsManager.getDataSource(outputDsId)) {
        if (dsManager.getDataSource(outputDsId).getDataSourceJson()
            .originDataSources[0].dataSourceId !== useDs.dataSourceId) {
            dsManager.destroyDataSource(outputDsId);
            dsManager.createDataSource(outputDsId).then(ods => {
                ods.setRecords(records);
            });
        }
        else {
            const ods = dsManager.getDataSource(outputDsId);
            ods.setRecords(records);
        }
    }
    else {
        dsManager.createDataSource(outputDsId).then(ods => {
            ods.setRecords(records);
        });
    }
}
function getCardSizeNumberInConfig(props, widgetRect) {
    const { config } = props;
    const cardSizeInConfig = getCardSizeConfig(props);
    const widthLinearUnit = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.width);
    let width = initCardSize(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.width), widgetRect.width + config.horizontalSpace - _config__WEBPACK_IMPORTED_MODULE_0__.SCROLL_BAR_WIDTH);
    //The width in percentage includes space, the width in px does not include
    if (widthLinearUnit.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE) {
        width = (width - config.horizontalSpace) > 0 ? width - config.horizontalSpace : _config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE;
    }
    let height = initCardSize(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.height), widgetRect.height);
    if (config.keepAspectRatio && (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.GRID) {
        height = width * (config === null || config === void 0 ? void 0 : config.gridItemSizeRatio);
    }
    const cardSize = {
        width: width,
        height: height
    };
    return cardSize;
}
function getCardSizeConfig(props) {
    var _a;
    const { config, builderStatus, browserSizeMode } = props;
    let cardConfigs = config === null || config === void 0 ? void 0 : config.asMutable({ deep: true }).cardConfigs[builderStatus];
    if (!cardConfigs || !cardConfigs.cardSize) {
        cardConfigs = config === null || config === void 0 ? void 0 : config.asMutable({ deep: true }).cardConfigs[_config__WEBPACK_IMPORTED_MODULE_0__.Status.Regular];
    }
    let cardSizeInConfig = (_a = cardConfigs === null || cardConfigs === void 0 ? void 0 : cardConfigs.cardSize) === null || _a === void 0 ? void 0 : _a[browserSizeMode];
    if (!cardSizeInConfig) {
        cardSizeInConfig = cardConfigs.cardSize[Object.keys(cardConfigs.cardSize)[0]];
    }
    return cardSizeInConfig;
}
function getDefaultMinListSize(props) {
    const cardSizeInConfig = getCardSizeConfig(props);
    const listMinSize = {
        width: _config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE,
        height: _config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE
    };
    const cardSizeUnit = {
        width: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.width),
        height: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.height)
    };
    if (cardSizeUnit.width.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE) {
        listMinSize.width = (_config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE + 30) / cardSizeUnit.width.distance * 100;
    }
    if (cardSizeUnit.height.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE) {
        listMinSize.height = (_config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE + 30) / cardSizeUnit.height.distance * 100;
    }
    return listMinSize;
}
function getCardSizeWidthUnitInConfig(props) {
    const { config } = props;
    const cardSizeInConfig = getCardSizeConfig(props);
    const width = jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.width);
    if (width.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE) {
        width.distance = (width.distance - config.horizontalSpace) > 0 ? width.distance - config.horizontalSpace : _config__WEBPACK_IMPORTED_MODULE_0__.LIST_CARD_MIN_SIZE;
    }
    const cardSizeWidthUnit = {
        width: width,
        height: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.utils.toLinearUnit(cardSizeInConfig.height)
    };
    return cardSizeWidthUnit;
}
function initCardSize(sizeUnit, widgetSize) {
    if (sizeUnit.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.DistanceUnits.PERCENTAGE) {
        return (sizeUnit.distance / 100) * widgetSize;
    }
    else {
        return sizeUnit.distance;
    }
}
function getPageSize(widgetRect, listHeight, props, columnCount) {
    const cardSize = getCardSizeNumberInConfig(props, widgetRect);
    const { config, isHeightAuto, isWidthAuto } = props;
    let pageSize;
    if (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_0__.PageStyle.Scroll) {
        if (!widgetRect) {
            return 0;
        }
        switch (config === null || config === void 0 ? void 0 : config.layoutType) {
            case _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.Row:
                if (widgetRect.height === 0)
                    return 0;
                if (isHeightAuto) {
                    listHeight = document.body.scrollHeight;
                }
                pageSize = Math.ceil((listHeight + config.space) / (cardSize.height + config.space)) + 1;
                break;
            case _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.Column:
                if (widgetRect.width === 0)
                    return 0;
                let listWidth = widgetRect.width;
                if (isWidthAuto) {
                    listWidth = document.body.scrollWidth;
                }
                pageSize = Math.ceil((listWidth + config.space) / (cardSize.width + config.space)) + 1;
                break;
            case _config__WEBPACK_IMPORTED_MODULE_0__.ListLayoutType.GRID:
                if (widgetRect.height === 0)
                    return 0;
                if (isHeightAuto) {
                    listHeight = document.body.scrollHeight;
                }
                pageSize = Math.ceil((listHeight + (config === null || config === void 0 ? void 0 : config.verticalSpace)) / (cardSize.height + config.space)) * columnCount;
                break;
        }
        if (config.navigatorOpen) {
            pageSize = Math.max(pageSize, config.scrollStep);
        }
    }
    else {
        pageSize = config.itemsPerPage;
    }
    return pageSize;
}
function getBottomToolH(paginatorDiv, showBottomTools) {
    let bottomToolH = _config__WEBPACK_IMPORTED_MODULE_0__.BOTTOM_TOOL_H;
    if (paginatorDiv) {
        bottomToolH = paginatorDiv.clientHeight;
    }
    bottomToolH = showBottomTools ? bottomToolH : 0;
    return bottomToolH;
}
function getListHeight(widgetRect, bottomToolH, showTopTool) {
    const dsToolH = showTopTool ? _config__WEBPACK_IMPORTED_MODULE_0__.DS_TOOL_H : 0;
    if (!widgetRect)
        return 0;
    const height = widgetRect.height - dsToolH - bottomToolH;
    return height < 0 ? 0 : height;
}
function showBottomTools(props, state) {
    const { config } = props;
    const { datasource } = state;
    return (!!datasource &&
        !(config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_0__.PageStyle.Scroll && !config.navigatorOpen));
}
function showTopTools(props) {
    return (checkIsShowListToolsOnly(props) || checkIsShowDataAction(props));
}
function checkIsShowListToolsOnly(props) {
    return (showSort(props) ||
        showDisplaySelectedOnly(props) ||
        showClearSelected(props) ||
        showFilter(props) ||
        showSearch(props));
}
function isDsConfigured(props) {
    const { useDataSources } = props;
    return !!useDataSources && !!useDataSources[0];
}
function checkIsShowDataAction(props) {
    var _a, _b, _c;
    const { id } = props;
    const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.appConfig;
    const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[id];
    const enableDataAction = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.enableDataAction) === undefined ? true : widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.enableDataAction;
    return enableDataAction && isDsConfigured(props);
}
function showSort(props) {
    const { config } = props;
    if (!config.sortOpen || !config.sorts || config.sorts.length < 1)
        return false;
    const sorts = config.sorts;
    let isValid = false;
    sorts.some((sort) => {
        sort.rule &&
            sort.rule.some(sortData => {
                if (sortData && !!sortData.jimuFieldName) {
                    isValid = true;
                }
                return isValid;
            });
        return isValid;
    });
    return isValid;
}
function showSearch(props) {
    const { config } = props;
    return config.searchOpen && config.searchFields && config.searchFields !== '';
}
function showFilter(props) {
    const { config } = props;
    return config.filterOpen && !!config.filter;
}
function showDisplaySelectedOnly(props) {
    const { config } = props;
    return (config.showSelectedOnlyOpen &&
        config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_0__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_0__.SelectionModeType.None);
}
function showClearSelected(props) {
    const { config } = props;
    return (config.showClearSelected &&
        config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_0__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_0__.SelectionModeType.None);
}
function intersectionObserver(ref, rootElement, onChange, options) {
    const option = options || { root: rootElement };
    const callback = function (entries, observer) {
        const isIn = entries[0].intersectionRatio > 0;
        onChange && onChange(isIn);
    };
    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref);
    return observer;
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/version-manager.ts":
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/version-manager.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "versionManager": () => (/* binding */ versionManager)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./your-extensions/widgets/list-112/src/config.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const getDs = function (filter, widgetId) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        let ds;
        const dataSource = (_d = (_c = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets[widgetId]) === null || _c === void 0 ? void 0 : _c.useDataSources) === null || _d === void 0 ? void 0 : _d[0];
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        if (filter && dataSource) {
            ds = dsManager.createDataSourceByUseDataSource(Object.assign({}, dataSource, {
                mainDataSourceId: dataSource.mainDataSourceId
            }), 'localId');
        }
        return yield Promise.resolve(ds);
    });
};
const checkIsShowAutoRefreshSetting = (datasource) => {
    if (!datasource)
        return false;
    const interval = (datasource === null || datasource === void 0 ? void 0 : datasource.getAutoRefreshInterval()) || 0;
    return interval > 0;
};
class VersionManager extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.BaseVersionManager {
    constructor() {
        super(...arguments);
        this.versions = [
            {
                version: '1.1.0',
                description: '',
                upgrader: (oldConfig, id) => __awaiter(this, void 0, void 0, function* () {
                    const filter = oldConfig.filter;
                    return yield getDs(filter, id).then(ds => {
                        let newConfig = oldConfig;
                        const newFItems = filter
                            ? (0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_1__.updateSQLExpressionByVersion)(filter, '1.1.0', ds)
                            : null;
                        newConfig = newConfig.set('filter', newFItems);
                        return newConfig;
                    });
                })
            },
            {
                version: '1.5.0',
                description: '1.5.0',
                upgrader: (oldConfig, id) => __awaiter(this, void 0, void 0, function* () {
                    const filter = oldConfig.filter;
                    return yield getDs(filter, id).then(ds => {
                        let newConfig = oldConfig;
                        if (typeof (oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig.isShowAutoRefresh) !== 'boolean') {
                            const isShowAutoRefresh = checkIsShowAutoRefreshSetting(ds);
                            newConfig = newConfig.set('isShowAutoRefresh', isShowAutoRefresh);
                        }
                        return newConfig;
                    });
                })
            },
            {
                version: '1.8.0',
                description: '1.8.0',
                upgrader: (oldConfig, id) => __awaiter(this, void 0, void 0, function* () {
                    let newConfig = oldConfig;
                    if ((oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig.direction) && !(oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig.layoutType)) {
                        const layoutType = (oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig.direction) === _config__WEBPACK_IMPORTED_MODULE_2__.DirectionType.Horizon ? _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column : _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row;
                        newConfig = newConfig.set('layoutType', layoutType).set('keepAspectRatio', false);
                    }
                    return newConfig;
                })
            }
        ];
    }
}
const versionManager = new VersionManager();


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/basic/sql-expression-runtime":
/*!*******************************************************!*\
  !*** external "jimu-ui/basic/sql-expression-runtime" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

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
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/widget.tsx ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget),
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _utils_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/list-service */ "./your-extensions/widgets/list-112/src/runtime/utils/list-service.tsx");
/* harmony import */ var _styles_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style */ "./your-extensions/widgets/list-112/src/runtime/styles/style.tsx");
/* harmony import */ var _components_list_card_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-card-editor */ "./your-extensions/widgets/list-112/src/runtime/components/list-card-editor.tsx");
/* harmony import */ var _components_list_card_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-card-viewer */ "./your-extensions/widgets/list-112/src/runtime/components/list-card-viewer.tsx");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/list-112/src/runtime/translations/default.ts");
/* harmony import */ var _components_search_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/search-box */ "./your-extensions/widgets/list-112/src/runtime/components/search-box.tsx");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_my_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/my-dropdown */ "./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx");
/* harmony import */ var _components_filter_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/filter-picker */ "./your-extensions/widgets/list-112/src/runtime/components/filter-picker.tsx");
/* harmony import */ var _components_bottom_tools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bottom-tools */ "./your-extensions/widgets/list-112/src/runtime/components/bottom-tools.tsx");
/* harmony import */ var _version_manager__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../version-manager */ "./your-extensions/widgets/list-112/src/version-manager.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/utils */ "./your-extensions/widgets/list-112/src/runtime/utils/utils.tsx");
/* harmony import */ var jimu_icons_outlined_editor_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jimu-icons/outlined/editor/menu */ "./jimu-icons/outlined/editor/menu.tsx");
/* harmony import */ var jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jimu-icons/outlined/editor/search */ "./jimu-icons/outlined/editor/search.tsx");
/* harmony import */ var jimu_icons_outlined_editor_show_selection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jimu-icons/outlined/editor/show-selection */ "./jimu-icons/outlined/editor/show-selection.tsx");
/* harmony import */ var jimu_icons_outlined_editor_trash_check__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jimu-icons/outlined/editor/trash-check */ "./jimu-icons/outlined/editor/trash-check.tsx");
/* harmony import */ var jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jimu-icons/outlined/suggested/warning */ "./jimu-icons/outlined/suggested/warning.tsx");
/* harmony import */ var jimu_icons_svg_outlined_brand_widget_list_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jimu-icons/svg/outlined/brand/widget-list.svg */ "./jimu-icons/svg/outlined/brand/widget-list.svg");
/* harmony import */ var jimu_icons_svg_outlined_brand_widget_list_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_brand_widget_list_svg__WEBPACK_IMPORTED_MODULE_21__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/** @jsx jsx */























const defaultRecordsItem = { fake: true };
const MESSAGES = Object.assign({}, _translations_default__WEBPACK_IMPORTED_MODULE_8__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_1__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
const { SELECTION_DATA_VIEW_ID } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS;
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.isFirstLoad = true;
        this.isHasScrolled = false; /* Whether the List has scrolled */
        this.isHasRenderList = false;
        this.isHasPublishMessageAction = false;
        this.isSetlayout = false;
        this.resetTimeout = null;
        this.isHasInitCurrentCardSize = false;
        this.needAutoScrollToSelectedItemWhenLoadPage = false;
        this.autoScrollIndex = null;
        this.isScrollToNextStep = false;
        this.updateWidgetRectTimeout = undefined;
        this.updatePageWhenPrePageSizeChange = (preConfig) => {
            var _a, _b;
            if (!((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.itemsPerPage)) {
                return false;
            }
            if ((preConfig === null || preConfig === void 0 ? void 0 : preConfig.itemsPerPage) !== ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.itemsPerPage)) {
                this.setState({
                    page: 1
                });
            }
        };
        this.checkIsRecordsChange = (records, preRecords) => {
            var _a;
            const recordsId = (records === null || records === void 0 ? void 0 : records.map(record => record === null || record === void 0 ? void 0 : record.getId())) || [];
            const preRecordsId = (preRecords === null || preRecords === void 0 ? void 0 : preRecords.map(record => record === null || record === void 0 ? void 0 : record.getId())) || [];
            if ((recordsId === null || recordsId === void 0 ? void 0 : recordsId.length) !== preRecordsId) {
                return true;
            }
            else {
                return ((_a = recordsId === null || recordsId === void 0 ? void 0 : recordsId.filter(id => !(preRecordsId === null || preRecordsId === void 0 ? void 0 : preRecordsId.includes(id)))) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }
        };
        this.resetAfterIndices = () => {
            var _a, _b, _c, _d;
            ((_b = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.resetAfterIndices) && ((_d = (_c = this.listRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.resetAfterIndices({
                columnIndex: 0,
                rowIndex: 0,
                shouldForceUpdate: false
            }));
        };
        this.setListLayoutInWidgetState = () => {
            const { layoutId, layoutItemId, id, selectionIsSelf } = this.props;
            if (layoutId && id && layoutItemId && !this.isSetlayout && selectionIsSelf) {
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, 'layoutInfo', {
                    layoutId,
                    layoutItemId
                }));
                this.isSetlayout = true;
            }
        };
        this.setListParentSizeInWidgetState = () => {
            const { browserSizeMode, id, parentSize, layoutId } = this.props;
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            const viewportSize = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.findViewportSize(appConfig, browserSizeMode);
            const selector = `div.layout[data-layoutid=${layoutId}]`;
            const parentElement = document.querySelector(selector);
            const newParentSize = {
                width: (parentElement === null || parentElement === void 0 ? void 0 : parentElement.clientWidth) || viewportSize.width,
                height: (parentElement === null || parentElement === void 0 ? void 0 : parentElement.clientHeight) || viewportSize.height
            };
            if (!parentSize || parentSize.height !== newParentSize.height || parentSize.width !== newParentSize.width) {
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, 'parentSize', newParentSize));
            }
        };
        this.getBodySize = () => {
            this.bodySize = {
                scrollWidth: document.documentElement.scrollWidth,
                scrollHeight: document.documentElement.scrollHeight,
                clientWidth: document.documentElement.clientWidth,
                clientHeight: document.documentElement.clientHeight
            };
        };
        this.updateListInBuilder = (preProps, preState) => {
            var _a;
            const { config } = this.props;
            if (!window.jimuConfig.isInBuilder) {
                return false;
            }
            const currentCardSize = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(this.props, (_a = this.state) === null || _a === void 0 ? void 0 : _a.widgetRect);
            // listen layout properties change and then update list
            let hideCardTool = this.layoutPropertiesChange(preProps, preState);
            this.updateScrollContentSize(preProps.config);
            // listen paging type change
            this.pageTypeChange(preProps);
            // listen useDatasources change
            this.useDatasourcesChange(preProps);
            // listening listDiv size's change
            hideCardTool = this.listDivSizeChange(preProps, preState, currentCardSize, hideCardTool);
            if (hideCardTool) {
                this.updateCardToolPosition();
            }
            // listen sort change
            this.listSortChange(preProps);
            // listen filter change
            this.listFilterChange(preProps);
            const isSelectionModeChange = config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !==
                preProps.config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode;
            if (isSelectionModeChange) {
                this.selectRecords([]);
            }
        };
        this.layoutPropertiesChange = (preProps, preState) => {
            var _a, _b;
            const { config, top, left } = this.props;
            let hideCardTool = false;
            if (!window.jimuConfig.isInBuilder) {
                return false;
            }
            let refreshList = false;
            // listen layout properties change and then update list
            const currentCardSize = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(this.props, this.state.widgetRect);
            const oldCardSize = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(preProps, preState === null || preState === void 0 ? void 0 : preState.widgetRect);
            this.updateScrollContentSize(preProps.config);
            const isWidgetPositionChange = top !== preProps.top || left !== preProps.left;
            const isListLayoutChange = (config === null || config === void 0 ? void 0 : config.layoutType) !== preProps.config.layoutType;
            const isEqualCardSizeByListLayout = !_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualCardSizeByListLayout(oldCardSize, currentCardSize, config.layoutType); // for change template
            if (isListLayoutChange ||
                isEqualCardSizeByListLayout ||
                isWidgetPositionChange) {
                hideCardTool = true;
                if (isEqualCardSizeByListLayout) {
                    const newState = {
                        currentCardSize
                    };
                    refreshList = true;
                    this.setState(newState, () => {
                        if (refreshList)
                            this.refreshList();
                    });
                }
                else if (isListLayoutChange) {
                    this.handleResizeCard(this.state.currentCardSize, true, false, false, true);
                }
            }
            if (!refreshList) {
                const isSpaceNotChange = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID
                    ? _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config === null || config === void 0 ? void 0 : config.horizontalSpace, (_a = preProps.config) === null || _a === void 0 ? void 0 : _a.horizontalSpace) && _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config === null || config === void 0 ? void 0 : config.verticalSpace, (_b = preProps.config) === null || _b === void 0 ? void 0 : _b.verticalSpace)
                    : _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config.space, preProps.config.space);
                if (!isSpaceNotChange || config.layoutType !== preProps.config.layoutType) {
                    refreshList = true;
                    this.refreshList();
                }
            }
            return hideCardTool;
        };
        this.listDivSizeChange = (preProps, preState, currentCardSize, hideCardTool) => {
            var _a;
            const { config, isHeightAuto } = this.props;
            const { listDivSize } = this.state;
            const showBT = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            const oldShowBT = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(preProps, preState);
            const showDS = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            const oldShowDS = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(preProps);
            if (showBT !== oldShowBT || showDS !== oldShowDS) {
                if (!isHeightAuto) {
                    if (config.layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column) {
                        let cardH = ((_a = this.state.widgetRect) === null || _a === void 0 ? void 0 : _a.height) || (listDivSize === null || listDivSize === void 0 ? void 0 : listDivSize.clientHeight);
                        cardH -=
                            _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBT) +
                                (showDS ? 1 : 0) * _config__WEBPACK_IMPORTED_MODULE_2__.DS_TOOL_H;
                        if (cardH < _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE)
                            return;
                        const cardSize = {
                            height: cardH,
                            width: currentCardSize.width
                        };
                        this.handleResizeCard(cardSize, true, false, false, true);
                    }
                }
                else {
                    hideCardTool = true;
                }
            }
            return hideCardTool;
        };
        this.appModeChange = preProps => {
            const { appMode, selectionIsSelf, selectionStatus, builderStatus } = this.props;
            if (preProps.appMode !== appMode) {
                if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
                    this.editBuilderAndSettingStatus(_config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular);
                }
                else {
                    if (selectionStatus !== builderStatus) {
                        // change status by toc
                        if (!selectionStatus) {
                            if (!selectionIsSelf) {
                                this.editBuilderAndSettingStatus(_config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular);
                            }
                        }
                        else {
                            this.editBuilderAndSettingStatus(selectionStatus);
                        }
                    }
                    this.setState({
                        showSelectionOnly: false,
                        searchText: undefined,
                        filterApplied: false,
                        hoverIndex: -1
                    }, () => {
                        this.scrollToIndex(0);
                    });
                }
            }
        };
        this.pageTypeChange = preProps => {
            const { pageStyle } = this.props.config;
            const oldPageStyle = preProps.config.pageStyle;
            if (pageStyle !== oldPageStyle) {
                this.setState({
                    page: 1
                });
            }
        };
        this.useDatasourcesChange = preProps => {
            const { useDataSources } = this.props;
            const oldUseDataSources = preProps.useDataSources;
            if (useDataSources && useDataSources[0]) {
                const oldUseDataSource = oldUseDataSources && oldUseDataSources[0];
                if (!oldUseDataSource ||
                    oldUseDataSource.dataSourceId !== useDataSources[0].dataSourceId) {
                    // reset querysStart
                    this.setState({
                        page: 1
                    });
                }
            }
            else {
                // remove ds maybe
                this.setState({
                    datasource: undefined
                });
            }
        };
        this.listSortChange = preProps => {
            const { config } = this.props;
            if (config.sortOpen) {
                const sorts = config.sorts;
                const oldSorts = preProps.config.sorts;
                if (sorts !== oldSorts) {
                    this.setState({
                        sortOptionName: undefined
                    });
                }
            }
        };
        this.listFilterChange = preProps => {
            const { config } = this.props;
            if (config.filterOpen) {
                const filter = config.filter;
                const oldFilter = preProps.config.filter;
                if (filter !== oldFilter) {
                    this.setState({
                        currentFilter: undefined,
                        filterApplied: false
                    });
                }
            }
        };
        this.setSelectionStatus = () => {
            const { id, selectionIsInSelf } = this.props;
            this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, 'selectionIsInSelf', selectionIsInSelf));
        };
        this.updateScrollContentSize = preConfig => {
            const { config } = this.props;
            const isSpaceNotChange = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID
                ? _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config === null || config === void 0 ? void 0 : config.horizontalSpace, preConfig === null || preConfig === void 0 ? void 0 : preConfig.horizontalSpace) && _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config === null || config === void 0 ? void 0 : config.verticalSpace, preConfig === null || preConfig === void 0 ? void 0 : preConfig.verticalSpace)
                : _utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(config.space, preConfig.space);
            if (config.layoutType !== preConfig.layoutType || !isSpaceNotChange) {
                this.setScrollContentSize();
            }
        };
        this.scrollToSelectedItems = (datasource) => {
            var _a;
            const selectedRecordIds = datasource.getSelectedRecordIds();
            if (this.isMySelected) {
                this.isMySelected = false;
                this.lastSelectedRecordIds = selectedRecordIds || [];
                return;
            }
            const isSelectedRecordsChange = this.checkIsSelectRecordsChange(datasource);
            if (selectedRecordIds && selectedRecordIds.length > 0 && isSelectedRecordsChange) {
                if (isSelectedRecordsChange || this.needScroll) {
                    const newAddedSelectedRecordsId = this.getNewAddedSelectedRecordsId(datasource);
                    const neewScrollToSelectedRecordsId = (newAddedSelectedRecordsId === null || newAddedSelectedRecordsId === void 0 ? void 0 : newAddedSelectedRecordsId.length) > 0 ? newAddedSelectedRecordsId : selectedRecordIds;
                    let index = -1;
                    (_a = this === null || this === void 0 ? void 0 : this.records) === null || _a === void 0 ? void 0 : _a.find((record, i) => {
                        var _a;
                        if (!(record === null || record === void 0 ? void 0 : record.getId)) {
                            return false;
                        }
                        const recordId = (_a = record === null || record === void 0 ? void 0 : record.getId) === null || _a === void 0 ? void 0 : _a.call(record);
                        if (neewScrollToSelectedRecordsId === null || neewScrollToSelectedRecordsId === void 0 ? void 0 : neewScrollToSelectedRecordsId.includes(recordId)) {
                            index = i;
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    if (index === -1) {
                        // Can't find it, need to search in all records again
                        const records = datasource.getRecords();
                        records &&
                            records.find((record, i) => {
                                var _a;
                                if (((_a = record.getId) === null || _a === void 0 ? void 0 : _a.call(record)) === selectedRecordIds[0]) {
                                    index = i;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            });
                        if (index > -1) {
                            const newPage = Math.ceil((index + 1) / this.getPageSize());
                            this.needScroll = true;
                            this.setState({
                                page: newPage
                            });
                        }
                    }
                    else {
                        this.scrollToIndex(index);
                        this.needScroll = false;
                        //loadMore may be triggered during scrollToItem, and the scrollToIndex logic in handleScrollDown will be triggered at this time,
                        //but this logic is not needed when automatically jumping to the currently selected records
                        this.autoScrollIndex = index;
                        this.needAutoScrollToSelectedItemWhenLoadPage = true;
                        this.lastSelectedRecordIds = selectedRecordIds || [];
                    }
                }
            }
        };
        this.checkIsSelectRecordsChange = (datasource) => {
            var _a;
            const selectedRecordIds = (datasource === null || datasource === void 0 ? void 0 : datasource.getSelectedRecordIds()) || [];
            const lastSelectedRecordIds = (this === null || this === void 0 ? void 0 : this.lastSelectedRecordIds) || [];
            if ((selectedRecordIds === null || selectedRecordIds === void 0 ? void 0 : selectedRecordIds.length) !== (lastSelectedRecordIds === null || lastSelectedRecordIds === void 0 ? void 0 : lastSelectedRecordIds.length)) {
                return true;
            }
            else {
                return ((_a = selectedRecordIds === null || selectedRecordIds === void 0 ? void 0 : selectedRecordIds.filter(id => !(lastSelectedRecordIds === null || lastSelectedRecordIds === void 0 ? void 0 : lastSelectedRecordIds.includes(id)))) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }
        };
        this.getNewAddedSelectedRecordsId = (datasource) => {
            const lastSelectedRecordIds = this.lastSelectedRecordIds || [];
            const selectedRecordIds = datasource.getSelectedRecordIds() || [];
            const newAddedSelectedRecords = selectedRecordIds === null || selectedRecordIds === void 0 ? void 0 : selectedRecordIds.filter(id => {
                return !(lastSelectedRecordIds === null || lastSelectedRecordIds === void 0 ? void 0 : lastSelectedRecordIds.includes(id));
            });
            return newAddedSelectedRecords;
        };
        this.onDSCreated = (ds) => {
            this.setState({
                datasource: ds,
                createDataSourceFailed: false
            });
        };
        this.onResize = (width, height) => {
            const newWidgetRect = {
                width,
                height
            };
            const { config } = this.props;
            const { isResizingCard, currentCardSize } = this.state;
            if (isResizingCard) {
                return;
            }
            const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
            const showTopTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            const listH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getListHeight(newWidgetRect, bottomToolH, showTopTool);
            const oldCardSize = this.getOldCardSizeWhenResize(newWidgetRect);
            const newDefaultCardSize = config.layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(this.props, newWidgetRect) : currentCardSize;
            const cardSize = {
                width: newDefaultCardSize.width,
                height: newDefaultCardSize.height
            };
            let needRefreshList = !_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(currentCardSize === null || currentCardSize === void 0 ? void 0 : currentCardSize.width, newDefaultCardSize === null || newDefaultCardSize === void 0 ? void 0 : newDefaultCardSize.width) || !_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(currentCardSize === null || currentCardSize === void 0 ? void 0 : currentCardSize.height, newDefaultCardSize === null || newDefaultCardSize === void 0 ? void 0 : newDefaultCardSize.height);
            if (config.lockItemRatio && config.layoutType !== _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                const ratio = cardSize.width / cardSize.height;
                switch (config === null || config === void 0 ? void 0 : config.layoutType) {
                    case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column:
                        cardSize.height = listH;
                        cardSize.width = listH * ratio;
                        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(cardSize.width, oldCardSize.width)) {
                            needRefreshList = true;
                        }
                        break;
                    case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row:
                        cardSize.height = width / ratio;
                        cardSize.width = width;
                        if (!_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isEqualNumber(cardSize.height, oldCardSize.height)) {
                            needRefreshList = true;
                        }
                        break;
                }
            }
            else {
                switch (config === null || config === void 0 ? void 0 : config.layoutType) {
                    case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column:
                        cardSize.height = listH;
                        break;
                    case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row:
                        cardSize.width = width;
                        break;
                }
            }
            const notResetCardSize = cardSize.width < _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE || cardSize.height < _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE || newWidgetRect.width === 0 || newWidgetRect.height === 0;
            if (notResetCardSize) {
                return;
            }
            this.setState({
                widgetRect: newWidgetRect,
                currentCardSize: cardSize
            }, () => {
                this.isHasInitCurrentCardSize = true;
                this.editListSizeInRunTime(newWidgetRect);
                if (needRefreshList) {
                    this.refreshList();
                }
            });
            if (this.resizeTimeout) {
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = undefined;
            }
            if (config.lockItemRatio) {
                this.resizeTimeout = setTimeout(() => {
                    this.handleResizeCard(cardSize, true, false, false, true);
                }, 500);
            }
            this.updateCardToolPosition();
            this.setListDivSize();
        };
        this.getOldCardSizeWhenResize = (newWidgetRect) => {
            //When the width and height are percentages, the Onresize method will be automatically called once when the List is loaded. At this time, the current List size should be used to obtain the oldCardSize
            const { currentCardSize } = this.state;
            if (!this.isHasInitCurrentCardSize) {
                return _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(this.props, newWidgetRect);
            }
            else {
                return currentCardSize;
            }
        };
        this.updateCardToolPosition = () => {
            const { selectionIsSelf } = this.props;
            const { hideCardTool } = this.state;
            if (!selectionIsSelf || hideCardTool)
                return;
            this.setState({
                hideCardTool: true
            });
            if (this.updateCardToolTimeout) {
                clearTimeout(this.updateCardToolTimeout);
                this.updateCardToolTimeout = undefined;
            }
            this.updateCardToolTimeout = setTimeout(() => {
                this.setState({
                    hideCardTool: false
                });
            }, 500);
        };
        this.refreshList = (shouldForceUpdate = true) => {
            var _a, _b, _c, _d, _e;
            if (this.listRef.current) {
                if (((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                    //VariableSizeGrid caches offsets and measurements for each item for performance purposes.
                    //This method clears that cached data for all items after (and including) the specified indices. It should be called whenever an items size changes.
                    //https://react-window.vercel.app/#/api/VariableSizeGrid
                    this.resetAfterIndices();
                }
                else {
                    //VariableSizeList caches offsets and measurements for each index for performance purposes.
                    //This method clears that cached data for all items after (and including) the specified index. It should be called whenever a item's size changes.
                    ((_c = (_b = this.listRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.resetAfterIndex) && ((_e = (_d = this.listRef) === null || _d === void 0 ? void 0 : _d.current) === null || _e === void 0 ? void 0 : _e.resetAfterIndex(0, shouldForceUpdate));
                }
            }
        };
        this.isDsConfigured = () => {
            const { useDataSources } = this.props;
            return !!useDataSources && !!useDataSources[0];
        };
        this.selectRecords = (records) => {
            const { datasource } = this.state;
            if (datasource) {
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.props.id, records));
                if (records) {
                    this.isMySelected = true;
                    this.isHasPublishMessageAction = true;
                    datasource.selectRecordsByIds(records.map(record => record.getId()));
                    const outputDs = this.getOutputDs();
                    outputDs &&
                        outputDs.selectRecordsByIds(records.map(record => record.getId()));
                }
                else {
                    this.isHasPublishMessageAction = false;
                }
            }
        };
        this.formatMessage = (id, values) => {
            return this.props.intl.formatMessage({ id: id, defaultMessage: MESSAGES[id] }, values);
        };
        // call exec manuly
        this.editStatus = (name, value) => {
            const { dispatch, id } = this.props;
            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, name, value));
        };
        this.editWidgetConfig = newConfig => {
            if (!window.jimuConfig.isInBuilder)
                return;
            const appConfigAction = this.props.builderSupportModules.jimuForBuilderLib.getAppConfigAction();
            appConfigAction.editWidgetConfig(this.props.id, newConfig).exec();
        };
        this.scrollToIndex = (index, type = 'start') => {
            const { config } = this.props;
            if (this.listRef.current) {
                if ((config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                    const columnCount = this.getItemColumnCount();
                    const rowIndex = Math.floor(index / columnCount);
                    this.listRef.current.scrollToItem({
                        columnIndex: index - rowIndex * columnCount,
                        rowIndex: rowIndex,
                        align: type
                    });
                }
                else {
                    this.listRef.current.scrollToItem(index, type);
                }
            }
        };
        this.isEditing = () => {
            const { appMode, config, selectionIsSelf, selectionIsInSelf } = this.props;
            if (!window.jimuConfig.isInBuilder)
                return false;
            return ((selectionIsSelf || selectionIsInSelf) &&
                window.jimuConfig.isInBuilder &&
                appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run &&
                config.isItemStyleConfirm);
        };
        this.handleItemChange = (itemRecord) => {
            const { config } = this.props;
            const { datasource } = this.state;
            if (!datasource || !itemRecord)
                return;
            let selectedRecords = datasource.getSelectedRecords() || [];
            if (config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode &&
                config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !==
                    _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None) {
                const recordId = itemRecord === null || itemRecord === void 0 ? void 0 : itemRecord.getId();
                const record = selectedRecords.find(record => record.getId() === recordId);
                if (config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode ===
                    _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.Single) {
                    if (record) {
                        this.selectRecords([]);
                        this.setState({ showSelectionOnly: false });
                    }
                    else {
                        this.selectRecords([itemRecord]);
                    }
                }
                else {
                    if (record) {
                        selectedRecords = selectedRecords.filter(record => record.getId() !== recordId);
                    }
                    else {
                        selectedRecords = [itemRecord].concat(selectedRecords);
                    }
                    this.selectRecords(selectedRecords);
                }
            }
        };
        this.handleListPointerDown = evt => {
            this.setState({
                forceShowMask: true
            });
            if (this.mouseClickTimeout) {
                clearTimeout(this.mouseClickTimeout);
                this.mouseClickTimeout = undefined;
            }
            this.mouseClickTimeout = setTimeout(() => {
                this.setState({
                    forceShowMask: false
                });
            }, 200);
        };
        this.handleScrollUp = e => {
            if (e) {
                this.isScrollToNextStep = true;
            }
            const scrollStep = this.getScrollStep();
            const listVisibleStartIndex = this.getListVisibleStartIndex();
            let toIndex = listVisibleStartIndex - scrollStep;
            if (toIndex < 0) {
                toIndex = 0;
            }
            this.scrollToIndex(toIndex, 'start');
            this.isScrollToNextStep = false;
        };
        this.handleScrollDown = e => {
            let listVisibleEndIndex = 0;
            if (e) {
                //Click the Next Button to trigger, after clicking, jump according to the last visible line
                listVisibleEndIndex = this.getListVisibleEndIndex();
                this.isScrollToNextStep = true;
            }
            else {
                //Execute after Record load, jump according to the first visible line
                listVisibleEndIndex = this.getListVisibleStartIndex();
            }
            const scrollStep = this.getScrollStep();
            const { listVisibleStopIndex } = this;
            if (listVisibleStopIndex + scrollStep >= this.records.length - 1 &&
                this.records.length < this.getTotalCount()) {
                this.isSwitchPage = true;
                this.setState({
                    page: this.state.page + 1
                });
            }
            else {
                if (this.needAutoScrollToSelectedItemWhenLoadPage) {
                    this.scrollToIndex(this.autoScrollIndex);
                }
                else {
                    this.scrollToIndex(listVisibleEndIndex + scrollStep, 'start');
                }
            }
        };
        this.getScrollStep = () => {
            const { scrollStep, layoutType } = this.props.config;
            const step = this.isScrollToNextStep ? scrollStep : 0;
            const columnCount = this.getItemColumnCount();
            return layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? step * columnCount : step;
        };
        this.handleSwitchPage = (pageNum) => {
            const totalPages = this.getTotalPage();
            if (pageNum < 1 || pageNum > totalPages)
                return;
            if (pageNum !== this.state.page) {
                this.isSwitchPage = true;
                this.lastQueryStart = this.state.page;
                this.setState({
                    page: pageNum
                });
            }
        };
        this.handleListMouseLeave = () => {
            if (this.isEditing())
                return;
            this.setState({
                hoverIndex: -1
            });
        };
        this.handleListMouseMove = (itemIndex) => {
            if (this.isEditing())
                return;
            if (itemIndex === this.state.hoverIndex)
                return;
            this.setState({
                hoverIndex: itemIndex
            });
        };
        this.lastScrollOffset = 0;
        this.handleListScroll = ({ scrollDirection, scrollOffset, scrollTop, scrollUpdateWasRequested }) => {
            var _a, _b;
            const { appMode, config } = this.props;
            const listDiv = this.listOutDivRef;
            const { datasource, scrollStatus } = this.state;
            this.lastScrollOffset = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? scrollTop : scrollOffset;
            if (!listDiv || ((_b = (_a = this.records) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) < 1)
                return;
            if (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.Scroll &&
                this.queryStatus !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading &&
                datasource &&
                (!window.jimuConfig.isInBuilder || appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run)) {
                this.isHasScrolled = true;
                if (_utils_utils__WEBPACK_IMPORTED_MODULE_15__.isScrollStart(listDiv, this.lastScrollOffset)) {
                    if (scrollStatus !== 'start') {
                        this.setState({
                            scrollStatus: 'start'
                        });
                    }
                }
                else {
                    if (scrollStatus !== 'mid') {
                        this.setState({
                            scrollStatus: 'mid'
                        });
                    }
                }
            }
        };
        this.getTotalPage = () => {
            const { totalCount } = this;
            const { config } = this.props;
            const total = totalCount;
            const totalPage = Math.floor(total / config.itemsPerPage);
            const mode = total % config.itemsPerPage;
            return mode === 0 ? totalPage : totalPage + 1;
        };
        this.getListVisibleStartIndex = () => {
            const { lastScrollOffset } = this;
            const { config } = this.props;
            const itemSize = this.itemSize(0);
            const base = (lastScrollOffset * 1.0) / itemSize;
            let index = Math.floor(base);
            const mo = (base - index) * itemSize;
            const space = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? config === null || config === void 0 ? void 0 : config.verticalSpace : config === null || config === void 0 ? void 0 : config.space;
            const columnCount = this.getItemColumnCount();
            index = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? index * columnCount : index;
            if (mo > itemSize - space) {
                index = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? index + columnCount : index + 1;
            }
            return index;
        };
        this.getListVisibleEndIndex = () => {
            const { lastScrollOffset } = this;
            const { config } = this.props;
            const itemSize = this.itemSize(0);
            const isHorizon = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column;
            const listItemContentSize = this.getListSize();
            const contentSize = isHorizon ? listItemContentSize.width : listItemContentSize.height;
            const base = ((lastScrollOffset + contentSize) * 1.0) / itemSize;
            let index = Math.floor(base);
            const mo = (base - index) * itemSize;
            const space = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? config === null || config === void 0 ? void 0 : config.verticalSpace : config === null || config === void 0 ? void 0 : config.space;
            const columnCount = this.getItemColumnCount();
            index = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? index * columnCount - 1 : index;
            if (index < 0) {
                index = 0;
            }
            if (mo > itemSize - space) {
                index = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? index + columnCount : index + 1;
            }
            return index;
        };
        this.handleSortOptionChange = (evt, item) => {
            this.setState({
                sortOptionName: item.label,
                page: 1
            }, () => {
                // this.selectRecords([])
            });
        };
        this.handleSearchTextChange = searchText => {
            if (searchText === '' || !searchText) {
                this.handleSearchSubmit(undefined);
            }
            this.setState({
                searchSuggestion: []
            });
            clearTimeout(this.suggestionsQueryTimeout);
            this.suggestionsQueryTimeout = setTimeout(() => {
                this.getSearchSuggestions(searchText);
            }, 200);
        };
        this.getSearchSuggestions = searchText => {
            const { config } = this.props;
            const { datasource } = this.state;
            if ((searchText === null || searchText === void 0 ? void 0 : searchText.length) < 3) {
                return false;
            }
            (0,_utils_list_service__WEBPACK_IMPORTED_MODULE_4__.fetchSuggestionRecords)(searchText, config, datasource).then(searchSuggestion => {
                this.setState({
                    searchSuggestion: searchSuggestion
                });
            });
        };
        this.handleSearchSubmit = (searchText, isEnter = false) => {
            const oldSearchText = this.state.searchText;
            if (oldSearchText === searchText && !isEnter) {
                return;
            }
            this.setState({
                searchText: searchText,
                page: 1
            }, () => {
                // this.selectRecords([])
            });
        };
        this.initNewCardSize = (newCardSize) => {
            const { config } = this.props;
            //If the original width and height are percentages, px will be converted to percentages during resize, and then set to config
            const { widgetRect } = this.state;
            let cardSize = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newCardSize);
            const cardSizeWidthUnit = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeWidthUnitInConfig(this.props);
            if (cardSizeWidthUnit.width.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE) {
                cardSize = cardSize.set('width', `${(newCardSize.width * 100) / (widgetRect.width + (config === null || config === void 0 ? void 0 : config.horizontalSpace) - _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_BAR_WIDTH)}%`);
            }
            if (cardSizeWidthUnit.height.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE) {
                cardSize = cardSize.set('height', `${newCardSize.height * 100 / widgetRect.height}%`);
            }
            return cardSize === null || cardSize === void 0 ? void 0 : cardSize.asMutable({ deep: true });
        };
        this.handleFilterChange = (sqlExprObj) => {
            this.setState({
                currentFilter: sqlExprObj,
                page: 1
            }, () => {
                // this.selectRecords([])
            });
        };
        this.handleFilterApplyChange = (applied) => {
            const alterState = {
                filterApplied: applied,
                queryStart: 0
            };
            if (!applied) {
                // alterState.currentFilter = undefined
            }
            this.setState(alterState, () => {
                // this.selectRecords([])
            });
        };
        this.handleShowSelectionClick = evt => {
            const { showSelectionOnly } = this.state;
            this.setState({ showSelectionOnly: !showSelectionOnly });
        };
        this.handleClearSelectionClick = () => {
            this.setState({ showSelectionOnly: false });
            this.selectRecords([]);
        };
        this.resetShowSelectionStatus = () => {
            const { showSelectionOnly } = this.state;
            if (showSelectionOnly) {
                this.setState({ showSelectionOnly: false });
            }
        };
        this._getCurrentPage = () => {
            return this.state.page;
        };
        this.getTotalCount = () => {
            const total = this.totalCount || 0;
            return total;
        };
        this.selectCard = () => {
            const { selectionIsInSelf } = this.props;
            if (selectionIsInSelf) {
                this.selectSelf();
            }
        };
        this.editBuilderAndSettingStatus = (status) => {
            this.editStatus('showCardSetting', status);
            this.editStatus('builderStatus', status);
        };
        this.editListSizeInRunTime = (widgetRect) => {
            const { id, dispatch } = this.props;
            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, 'widgetRect', widgetRect));
        };
        this.getSortItems = () => {
            const { config } = this.props;
            const options = [];
            if (config.sorts) {
                config.sorts.forEach(sort => {
                    sort.rule &&
                        sort.rule.forEach(sortData => {
                            if (sortData && !!sortData.jimuFieldName) {
                                options.push({
                                    label: sort.ruleOptionName,
                                    event: this.handleSortOptionChange
                                });
                            }
                        });
                });
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(options);
        };
        this.renderListTopTools = (ds, queryStatus, selectRecords) => {
            const { widgetRect, isSearchBoxVisible, isOpenTopToolsPopper } = this.state;
            const listWidth = (widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.width) || 620;
            const isShowDataAction = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.checkIsShowDataAction(this.props);
            const isShowListToolsOnly = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.checkIsShowListToolsOnly(this.props);
            const dataName = this.formatMessage('listDataActionLabel', { layer: (ds === null || ds === void 0 ? void 0 : ds.getLabel()) || '' });
            const LIST_TOOL_MIN_SIZE = isShowDataAction ? _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_DATA_ACTION : _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_NO_DATA_ACTION;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'datasource-tools w-100', css: (0,_styles_style__WEBPACK_IMPORTED_MODULE_5__.getTopToolStyle)(this.props, isShowListToolsOnly) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "d-flex align-items-center" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-grow-1 tool-row" }, isShowListToolsOnly && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        listWidth >= LIST_TOOL_MIN_SIZE && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tool-row row1 d-flex align-items-center w-100 justify-content-between' },
                            this.renderSearchTools(ds, queryStatus),
                            (!isSearchBoxVisible || listWidth >= 360) &&
                                this.renderTopRightTools(ds, queryStatus))),
                        listWidth < LIST_TOOL_MIN_SIZE && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'float-right', ref: ref => (this.reference = ref) },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', icon: true, size: 'sm', className: 'tools-menu', title: this.formatMessage('guideStep9Title'), onClick: evt => {
                                    this.setState({ isOpenTopToolsPopper: !isOpenTopToolsPopper });
                                } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_menu__WEBPACK_IMPORTED_MODULE_16__.MenuOutlined, { size: 16 })),
                            this.renderListTopToolsInPoper(ds, queryStatus))))),
                    (ds && isShowDataAction) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('list-data-action position-relative', { 'm-left': listWidth < LIST_TOOL_MIN_SIZE }), "data-testid": "data-action" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DataActionDropDown, { type: 'tertiary', widgetId: this.props.id, dataSet: { dataSource: ds, records: selectRecords, name: dataName }, size: "sm" }))),
                window.jimuConfig.isInBuilder && this.isEditing() && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'editing-mask-ds-tool' }))));
        };
        this.renderListTopToolsInPoper = (ds, queryStatus) => {
            const { widgetRect, isSearchBoxVisible, isOpenTopToolsPopper } = this.state;
            const toolsDisabled = this.isEditing();
            const listWidth = (widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.width) || 620;
            const LIST_TOOL_MIN_SIZE = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.checkIsShowDataAction(this.props) ? _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_DATA_ACTION : _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_NO_DATA_ACTION;
            const isOpen = listWidth < LIST_TOOL_MIN_SIZE && isOpenTopToolsPopper && !toolsDisabled;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Popper, { placement: 'bottom-start', reference: this.reference, offset: [-10, 0], open: isOpen, showArrow: true, toggle: e => {
                        this.setState({ isOpenTopToolsPopper: !isOpen });
                    } },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'tool-row row1 d-flex align-items-end justify-content-between', css: (0,_styles_style__WEBPACK_IMPORTED_MODULE_5__.getToolsPopperStyle)(this.props) },
                        this.renderSearchTools(ds, queryStatus),
                        !isSearchBoxVisible && this.renderTopRightTools(ds, queryStatus)))));
        };
        this.renderSearchTools = (ds, queryStatus) => {
            const toolsDisabled = this.isEditing() || !ds || queryStatus !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded;
            const { searchText, widgetRect, isSearchBoxVisible, showLoading } = this.state;
            const listWidth = (widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.width) || 620;
            const { theme, config, appMode } = this.props;
            const toolLineClassName = listWidth < 360 ? 'ds-tools-line-blue' : '';
            const placeholder = (config === null || config === void 0 ? void 0 : config.searchHint) || this.formatMessage('search');
            const isShowBackButton = listWidth < 360 && isSearchBoxVisible;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-search-div flex-grow-1', css: (0,_styles_style__WEBPACK_IMPORTED_MODULE_5__.getSearchToolStyle)(this.props) }, _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showSearch(this.props) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex search-box-content' },
                (listWidth >= 360 || isSearchBoxVisible) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 w-100' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_search_box__WEBPACK_IMPORTED_MODULE_9__["default"], { theme: theme, placeholder: placeholder, searchText: searchText, onSearchTextChange: this.handleSearchTextChange, onSubmit: this.handleSearchSubmit, disabled: toolsDisabled, searchSuggestion: this.state.searchSuggestion, suggestionWidth: listWidth, showLoading: showLoading, formatMessage: this.formatMessage, isShowBackButton: isShowBackButton, toggleSearchBoxVisible: this.toggleSearchBoxVisible, className: 'list-search ', appMode: appMode }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('ds-tools-line', toolLineClassName) }))),
                listWidth < 360 && !isSearchBoxVisible && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'tertiary', icon: true, size: 'sm', onClick: evt => {
                        this.toggleSearchBoxVisible(true);
                    }, className: 'list-search-icon', title: this.formatMessage('search') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_search__WEBPACK_IMPORTED_MODULE_17__.SearchOutlined, { size: 16, color: theme.colors.palette.light[800] })))))));
        };
        this.toggleSearchBoxVisible = (isVisible = false) => {
            const { widgetRect } = this.state;
            this.setState({
                isSearchBoxVisible: isVisible
            });
            const LIST_TOOL_MIN_SIZE = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.checkIsShowDataAction(this.props) ? _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_DATA_ACTION : _config__WEBPACK_IMPORTED_MODULE_2__.LIST_TOOL_MIN_SIZE_NO_DATA_ACTION;
            const listWidth = (widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.width) || 620;
            if (listWidth < LIST_TOOL_MIN_SIZE) {
                clearTimeout(this.showPopperTimeOut);
                this.showPopperTimeOut = setTimeout(() => {
                    this.setState({
                        isOpenTopToolsPopper: true
                    });
                });
            }
        };
        this.getPageSize = () => {
            const { widgetRect } = this.state;
            const { config } = this.props;
            const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
            const showTopTools = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            const listHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getListHeight(widgetRect, bottomToolH, showTopTools) || 1;
            const columnCount = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemColumnCount() : null;
            const recordSizePerPage = Math.max(_utils_utils__WEBPACK_IMPORTED_MODULE_15__.getPageSize(widgetRect, listHeight, this.props, columnCount), 1);
            return recordSizePerPage;
        };
        this.renderTopRightTools = (ds, queryStatus) => {
            const { sortOptionName, showSelectionOnly, currentFilter, filterApplied } = this.state;
            const { config, theme, id, appMode } = this.props;
            const sortItems = this.getSortItems();
            const selectedRecords = ds && ds.getSelectedRecords();
            const hasSelection = selectedRecords && selectedRecords.length > 0;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center mr-1', ref: this.listTopRightToolsDiv },
                _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showSort(this.props) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-sort-con' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_dropdown__WEBPACK_IMPORTED_MODULE_11__["default"], { theme: theme, items: sortItems, appMode: appMode, toggleType: 'tertiary', toggleArrow: true, toggleContent: theme => sortOptionName || (sortItems && sortItems[0].label), size: 'sm', caret: true, showActive: true, toggleTitle: this.formatMessage('listSort'), activeLabel: sortOptionName || (sortItems && sortItems[0].label) }))),
                _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showFilter(this.props) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_filter_picker__WEBPACK_IMPORTED_MODULE_12__["default"], { filter: currentFilter || config.filter, filterInConfig: config.filter, appMode: appMode, applied: filterApplied, title: this.formatMessage('filter'), selectedDs: this.state.datasource, handleFilterChange: this.handleFilterChange, handleFilterApplyChange: this.handleFilterApplyChange, formatMessage: this.formatMessage, theme: theme, widgetId: id })),
                _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showDisplaySelectedOnly(this.props) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { disabled: !hasSelection, type: 'tertiary', title: showSelectionOnly
                        ? this.formatMessage('showAll')
                        : this.formatMessage('showSelection'), icon: true, size: 'sm', onClick: this.handleShowSelectionClick }, showSelectionOnly ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_menu__WEBPACK_IMPORTED_MODULE_16__.MenuOutlined, { size: 16 }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_show_selection__WEBPACK_IMPORTED_MODULE_18__.ShowSelectionOutlined, { size: 16 }))),
                _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showClearSelected(this.props) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { disabled: !hasSelection, type: 'tertiary', title: this.formatMessage('clearSelection'), icon: true, size: 'sm', onClick: this.handleClearSelectionClick },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_trash_check__WEBPACK_IMPORTED_MODULE_19__.TrashCheckOutlined, { size: 16 })))));
        };
        this.getListSize = () => {
            const { widgetRect } = this.state;
            const showTopTools = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            //get list tool`s show status
            const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            //get list bottom tool`s height
            const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
            //get list size
            const listHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getListHeight(widgetRect, bottomToolH, showTopTools) || 1;
            const listWidth = (widgetRect && widgetRect.width) || _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE;
            return {
                width: listWidth,
                height: listHeight
            };
        };
        this.renderList = (ds, dsInfo) => {
            const { widgetRect, isMount, currentCardSize } = this.state;
            const { config, isRTL } = this.props;
            const queryStatus = dsInfo === null || dsInfo === void 0 ? void 0 : dsInfo.status;
            this.queryStatus = queryStatus;
            this.isHasRenderList = true;
            if (!isMount) {
                return false;
            }
            //get total count
            if (queryStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Unloaded) {
                ds = undefined;
            }
            this.getDsTotalCount(ds, queryStatus);
            //get loading status
            const showLoading = this.getLoadingStatus(ds, queryStatus);
            const interval = (ds === null || ds === void 0 ? void 0 : ds.getAutoRefreshInterval()) || 0;
            //toggle auto refresh loading status
            this.toggleAutoRefreshLoading(ds, showLoading);
            //get list tool`s show status
            const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            const showTopTools = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            //get list bottom tool`s height
            const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
            //get list size
            const listHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getListHeight(widgetRect, bottomToolH, showTopTools) || 1;
            const listWidth = (widgetRect && widgetRect.width) || _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE;
            const overscanCount = this.getOverscanCount(listHeight);
            // get new records
            const selectRecords = this.getDsSelectRecords(ds);
            const records = this.getDsRecords(ds, showLoading, listHeight);
            this.isFirstLoad = false;
            // when record.length == 0, should reset show selection button status in list top tools
            if (records.length === 0) {
                // this.scrollToIndex(0, 'start');
                this.resetShowSelectionStatus();
            }
            this.getlistInnerElementType();
            const listStyles = this.getListStyle();
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": 'listContainer', className: 'list-container animation', css: listStyles, onKeyDown: this.handleListKeyDown },
                showTopTools && this.renderListTopTools(ds, queryStatus, selectRecords),
                ((config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_22__.VariableSizeGrid, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-list-list', { 'hide-list': !records || (records === null || records === void 0 ? void 0 : records.length) === 0 }), ref: this.listRef, useIsScrolling: true, outerRef: this.setListOutDivRef, direction: isRTL ? 'rtl' : 'ltr', itemCount: this.records.length, overscanCount: overscanCount, itemKey: this.gridItemIndex, columnCount: this.getItemColumnCount(), columnWidth: index => this.columnWidth(index, currentCardSize.width, config === null || config === void 0 ? void 0 : config.horizontalSpace), rowCount: this.getItemRowCount(), rowHeight: index => this.rowHeight(index, currentCardSize.height, config === null || config === void 0 ? void 0 : config.verticalSpace), width: listWidth, height: listHeight, onItemsRendered: this.onItemsRendered, itemData: this.getItemsByRecords(this.records), innerElementType: this.innerElementType, onScroll: this.handleListScroll, role: 'listbox' }, this.itemRender),
                ((config === null || config === void 0 ? void 0 : config.layoutType) !== _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_22__.VariableSizeList, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('widget-list-list', { 'hide-list': !records || (records === null || records === void 0 ? void 0 : records.length) === 0 }), ref: this.listRef, useIsScrolling: true, outerRef: this.setListOutDivRef, direction: isRTL ? 'rtl' : 'ltr', role: 'listbox', layout: config.layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column
                        ? 'horizontal'
                        : 'vertical', itemCount: this.records.length, overscanCount: overscanCount, itemKey: this.itemKey, width: listWidth, height: listHeight, onItemsRendered: this.onItemsRendered, itemData: this.getItemsByRecords(this.records), innerElementType: this.innerElementType, itemSize: this.itemSize, onScroll: this.handleListScroll }, this.itemRender),
                this.checkIsShowListMask(showLoading, records) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'editing-mask-con' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'editing-mask-list' }),
                    (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'editing-mask-list-grid' }))),
                showBottomTool && this.renderBottomTools(showLoading),
                this.renderEmptyElement(showLoading),
                queryStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady && this.renderNotReadyTips(ds),
                (showLoading || interval > 0) && this.renderLoading(showLoading, interval),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: 'describeByMessage', className: 'sr-only' }, this.formatMessage('describeMessage')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'sr-only', tabIndex: 0, ref: ref => { this.jumpOutNodeOfList = ref; } })));
        };
        this.handleListKeyDown = (e) => {
            if (e.key === 'Escape') {
                this.jumpOutNodeOfList.focus();
            }
        };
        this.renderEmptyElement = (showLoading) => {
            var _a;
            const isNoData = !this.records || this.records.length < 1;
            const noDataMessage = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.noDataMessage) || this.formatMessage('noData');
            // const isShowClearActionButton = isNoData && this.isHasPublishMessageAction
            return (!showLoading && isNoData) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'empty-con text-center' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_20__.WarningOutlined, { size: 16 }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "discribtion" }, noDataMessage)));
        };
        this.clearMessageAction = () => {
            this.handleClearSelectionClick();
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageManager.getInstance().publishMessage(new jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataRecordsSelectionChangeMessage(this.props.id, []));
        };
        this.renderLoading = (showLoading, interval) => {
            const { autoRefreshLoadingString } = this.state;
            const { config } = this.props;
            let isShowAutoRefresh = config === null || config === void 0 ? void 0 : config.isShowAutoRefresh;
            if (typeof (isShowAutoRefresh) !== 'boolean') {
                isShowAutoRefresh = true;
            }
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('position-absolute refresh-loading-con d-flex align-items-center', this.getRefreshLoadingClass()) },
                showLoading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'loading-con' }),
                (interval > 0 && isShowAutoRefresh) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 auto-refresh-loading' }, autoRefreshLoadingString))));
        };
        this.renderNotReadyTips = (ds) => {
            var _a, _b, _c, _d, _e;
            const dataSourceLabel = ds === null || ds === void 0 ? void 0 : ds.getLabel();
            const outputDsWidgetId = jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils === null || jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils === void 0 ? void 0 : jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.getWidgetIdByOutputDataSource((_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.useDataSources) === null || _b === void 0 ? void 0 : _b[0]);
            const appConfig = (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appConfig;
            const widgetLabel = (_e = (_d = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _d === void 0 ? void 0 : _d[outputDsWidgetId]) === null || _e === void 0 ? void 0 : _e.label;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'placeholder-alert-con' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: 'tooltip', size: 'small', type: 'warning', text: this.formatMessage('outputDataIsNotGenerated', { outputDsLabel: dataSourceLabel, sourceWidgetName: widgetLabel }) })));
        };
        this.renderBottomTools = (showLoading) => {
            const { scrollStatus, isScrollEnd } = this.state;
            const { config, isRTL } = this.props;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: this.paginatorDiv },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_bottom_tools__WEBPACK_IMPORTED_MODULE_13__.ListBottomTools, { isRTL: isRTL, totalPage: this.getTotalPage(), currentPage: this._getCurrentPage(), isEditing: this.isEditing(), isScrollEnd: isScrollEnd, pageStyle: config.pageStyle, layoutType: config === null || config === void 0 ? void 0 : config.layoutType, scrollStatus: scrollStatus, handleScrollUp: this.handleScrollUp, handleScrollDown: this.handleScrollDown, handleSwitchPage: this.handleSwitchPage, formatMessage: this.formatMessage, showLoading: showLoading })));
        };
        this.getDsTotalCount = (ds, queryStatus) => {
            const count = ds === null || ds === void 0 ? void 0 : ds.count;
            this.queryStatus = queryStatus;
            // total count
            if (queryStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loaded && count !== null) {
                if (this.totalCount !== count) {
                    this.setPageTimeout = setTimeout(() => {
                        this.setState({
                            page: 1
                        });
                    }, 1);
                }
                this.totalCount = count;
            }
        };
        this.getLoadingStatus = (ds, queryStatus) => {
            const { LayoutEntry } = this.state;
            const { showLoading: mustLoading } = this.props;
            // loading
            let showLoading = false;
            if (mustLoading ||
                (window.jimuConfig.isInBuilder && !LayoutEntry) ||
                (ds && queryStatus === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading)) {
                showLoading = true;
            }
            return showLoading;
        };
        this.toggleAutoRefreshLoading = (ds, showLoading) => {
            const interval = (ds === null || ds === void 0 ? void 0 : ds.getAutoRefreshInterval()) || 0;
            this.resetAutoRefreshTimes(interval, showLoading);
            if (interval > 0) {
                this.setRefreshLoadingString(showLoading);
            }
        };
        this.setListOutDivRef = current => {
            if (!current)
                return;
            const bottomBoundaryId = `bottomBoundary${this.props.id}`;
            this.listOutDivRef = current;
            this.setListDivSize();
            const bottomBoundary = document.createElement('div');
            bottomBoundary.id = bottomBoundaryId;
            bottomBoundary.className = 'bottom-boundary';
            const listScrollContent = this.listOutDivRef.getElementsByTagName('div')[0];
            this.setScrollContentSize();
            listScrollContent.appendChild(bottomBoundary);
            _utils_utils__WEBPACK_IMPORTED_MODULE_15__.intersectionObserver(document.getElementById(bottomBoundaryId), this.listOutDivRef, this.intersectionObserverCallback);
        };
        this.getDsRecords = (ds, showLoading, listHeight) => {
            const { showSelectionOnly, widgetRect } = this.state;
            const { config, appMode } = this.props;
            const columnCount = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemColumnCount() : null;
            const recordSizePerPage = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getPageSize(widgetRect, listHeight, this.props, columnCount);
            const defaultRecords = this.getDefaultRecords(recordSizePerPage);
            // get new records
            let records = defaultRecords;
            const selectRecords = this.getDsSelectRecords(ds);
            if (ds && config.isItemStyleConfirm) {
                const isSelectionView = (ds === null || ds === void 0 ? void 0 : ds.dataViewId) === SELECTION_DATA_VIEW_ID;
                if (isSelectionView) {
                    records =
                        (ds &&
                            (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.Scroll
                                ? ds.getRecordsByPage(1, recordSizePerPage * this.state.page)
                                : ds.getRecordsByPage(this.state.page, recordSizePerPage))) ||
                            [];
                }
                else {
                    records =
                        (ds &&
                            (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.Scroll
                                ? ds.getRecordsByPageWithSelection(1, recordSizePerPage * this.state.page)
                                : ds.getRecordsByPageWithSelection(this.state.page, recordSizePerPage))) ||
                            [];
                }
                if (showSelectionOnly) {
                    records = selectRecords;
                }
            }
            if (window.jimuConfig.isInBuilder &&
                appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run &&
                !showLoading &&
                records.length < 1) {
                records = defaultRecords;
            }
            if (!showLoading || this.isFirstLoad) {
                // this.resetListAfterRecordChange(records)
                this.records = records;
            }
            return records;
        };
        this.resetGridListAfterRowIndex = (newRecords) => {
            var _a, _b, _c, _d, _e;
            if ((this === null || this === void 0 ? void 0 : this.records) && (((_a = this.records) === null || _a === void 0 ? void 0 : _a.length) !== (newRecords === null || newRecords === void 0 ? void 0 : newRecords.length))) {
                let preRowNumber = this.getItemRowCount() - 1;
                preRowNumber = preRowNumber > -1 ? preRowNumber : 0;
                ((_c = (_b = this.listRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.resetAfterIndices) && ((_e = (_d = this.listRef) === null || _d === void 0 ? void 0 : _d.current) === null || _e === void 0 ? void 0 : _e.resetAfterRowIndex(preRowNumber, true));
            }
        };
        this.resetListAfterRecordChange = (newRecords) => {
            var _a, _b, _c, _d, _e, _f;
            //When loading again, the same records are not necessarily the same index.
            //For example, when the extent of the map changes, the record of the list changes. The original first record may
            //change to the fifth of the new records, so all can only be reset. A list guarantees an update to the list size
            if ((this === null || this === void 0 ? void 0 : this.records) && (((_a = this.records) === null || _a === void 0 ? void 0 : _a.length) !== (newRecords === null || newRecords === void 0 ? void 0 : newRecords.length))) {
                if (this.listRef.current) {
                    if (((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                        //VariableSizeGrid caches offsets and measurements for each item for performance purposes.
                        //This method clears that cached data for all items after (and including) the specified indices. It should be called whenever an items size changes.
                        //https://react-window.vercel.app/#/api/VariableSizeGrid
                        // this.resetGridListAfterRowIndex(newRecords)
                        ((_d = (_c = this.listRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.resetAfterIndices) && ((_f = (_e = this.listRef) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.resetAfterRowIndex(0, true));
                    }
                    else {
                        //VariableSizeList caches offsets and measurements for each index for performance purposes.
                        //This method clears that cached data for all items after (and including) the specified index. It should be called whenever a item's size changes.
                        // let restStartIndex = newRecords?.length - 1
                        // restStartIndex = restStartIndex < 0 ? 0 : restStartIndex
                        //
                        this.resetTimeout && clearTimeout(this.resetTimeout);
                        this.resetTimeout = setTimeout(() => {
                            var _a, _b, _c, _d;
                            ((_b = (_a = this.listRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.resetAfterIndex) && ((_d = (_c = this.listRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.resetAfterIndex(0, false));
                        }, 300);
                    }
                }
            }
        };
        this.getDefaultRecords = (pageSize = 3) => {
            pageSize = (pageSize && pageSize > 1) ? pageSize : 3;
            const defaultRecords = [];
            for (let i = 0; i < pageSize; i++) {
                defaultRecords.push(defaultRecordsItem);
            }
            return defaultRecords;
        };
        this.getDsSelectRecords = (ds) => {
            const { config } = this.props;
            // get select records
            let selectRecords;
            if (ds && config.isItemStyleConfirm) {
                selectRecords = ds.getSelectedRecords();
            }
            return selectRecords;
        };
        this.getlistInnerElementType = () => {
            const { config } = this.props;
            const space = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? config === null || config === void 0 ? void 0 : config.verticalSpace : config === null || config === void 0 ? void 0 : config.space;
            if (this.lastSpace !== space) {
                this.lastSpace = space;
                this.innerElementType = (0,react__WEBPACK_IMPORTED_MODULE_10__.forwardRef)((_a, ref) => {
                    var { style } = _a, rest = __rest(_a, ["style"]);
                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", Object.assign({ ref: ref, style: Object.assign(Object.assign({}, style), { height: `${parseFloat(style.height) -
                                (config.layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column
                                    ? 0
                                    : space)}px`, width: `${parseFloat(style.width) -
                                (config.layoutType !== _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column
                                    ? 0
                                    : space)}px` }) }, rest)));
                });
            }
        };
        this.getListStyle = () => {
            var _a, _b;
            const { toolsDivWidth, currentCardSize, widgetRect } = this.state;
            const { config, appMode, theme, isHeightAuto, isWidthAuto } = this.props;
            const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
            const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
            const showTopTools = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
            const listTemplateDefaultCardSize = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(this.props, widgetRect);
            const listStyleOption = {
                pageStyle: config === null || config === void 0 ? void 0 : config.pageStyle,
                scrollBarOpen: config === null || config === void 0 ? void 0 : config.scrollBarOpen,
                direction: config === null || config === void 0 ? void 0 : config.direction,
                appMode: appMode,
                theme: theme,
                isHeightAuto: isHeightAuto,
                isWidthAuto: isWidthAuto,
                currentCardSize: currentCardSize,
                listTemplateDefaultCardSize: listTemplateDefaultCardSize,
                showTopTools: showTopTools,
                bottomToolH: bottomToolH,
                topRightToolW: toolsDivWidth,
                hasRecords: ((_b = (_a = this.records) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0,
                mexSize: this.getListMaxSize(),
                layoutType: config === null || config === void 0 ? void 0 : config.layoutType,
                listLeftPadding: this.getListContentLeftPadding()
            };
            return (0,_styles_style__WEBPACK_IMPORTED_MODULE_5__.listStyle)(listStyleOption);
        };
        this.checkIsShowListMask = (showLoading, records) => {
            const { isInBuilder } = window.jimuConfig;
            const isEditing = this.isEditing();
            const isNoData = !records || records.length < 1;
            const isDataLoadedAndHasData = !(!showLoading && isNoData);
            return isInBuilder && isEditing && isDataLoadedAndHasData;
        };
        this.getOverscanCount = (listHeight) => {
            const { widgetRect } = this.state;
            const { appMode, config } = this.props;
            const columnCount = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemColumnCount() : null;
            const recordSizePerPage = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getPageSize(widgetRect, listHeight, this.props, columnCount);
            const overscanCount = window.jimuConfig.isInBuilder && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run
                ? 0
                : recordSizePerPage;
            return overscanCount;
        };
        this.setScrollContentSize = () => {
            var _a;
            if (!this.listOutDivRef)
                return;
            const { layoutType } = (_a = this.props) === null || _a === void 0 ? void 0 : _a.config;
            const listScrollContent = this.listOutDivRef.getElementsByTagName('div')[0];
            if (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column) {
                listScrollContent.style.height = '100%';
            }
            else {
                listScrollContent.style.width = '100%';
            }
        };
        this.intersectionObserverCallback = (isScrollEnd) => {
            var _a, _b;
            const { appMode, config } = this.props;
            const listDiv = this.listOutDivRef;
            const { datasource } = this.state;
            this.setState({
                isScrollEnd: isScrollEnd
            });
            if (!listDiv || ((_b = (_a = this.records) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) < 1)
                return;
            if (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.Scroll &&
                this.queryStatus !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.Loading &&
                datasource &&
                (!window.jimuConfig.isInBuilder ||
                    (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run && isScrollEnd)) &&
                this.isHasScrolled) {
                if (this.records.length < this.getTotalCount()) {
                    this.setState({
                        page: this.state.page + 1
                    });
                    this.isSwitchPage = true;
                }
                else {
                    if (isScrollEnd) {
                        this.setState({
                            scrollStatus: 'end'
                        });
                    }
                }
            }
        };
        this.setListDivSize = () => {
            var _a;
            const listDiv = this.listOutDivRef;
            const clientWidth = (listDiv === null || listDiv === void 0 ? void 0 : listDiv.clientWidth) || null;
            const clientHeight = (listDiv === null || listDiv === void 0 ? void 0 : listDiv.clientHeight) || null;
            const toolsDivWidth = ((_a = this.listTopRightToolsDiv.current) === null || _a === void 0 ? void 0 : _a.clientWidth) || 0;
            const listDivBoundRect = (listDiv === null || listDiv === void 0 ? void 0 : listDiv.getBoundingClientRect()) || null;
            const listDivSize = {
                clientWidth: clientWidth,
                clientHeight: clientHeight
            };
            this.setState({
                listDivSize: listDivSize,
                toolsDivWidth: toolsDivWidth,
                listDivBoundRect: listDivBoundRect
            });
        };
        this.getContentLayout = () => {
            const { layoutId, browserSizeMode } = this.props;
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            const contentWidgetId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.getWidgetIdThatUseTheLayoutId(appConfig, layoutId);
            const contentLayoutsInfo = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.getContentLayoutInfosInOneSizeMode(appConfig, contentWidgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutItemType.Widget, browserSizeMode);
            return contentLayoutsInfo;
        };
        this.getContentLayoutSetting = () => {
            var _a, _b, _c, _d, _e;
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            const { layouts } = appConfig;
            const contentLayoutsInfo = this.getContentLayout();
            const contentLayoutId = (_a = contentLayoutsInfo === null || contentLayoutsInfo === void 0 ? void 0 : contentLayoutsInfo[0]) === null || _a === void 0 ? void 0 : _a.layoutId;
            const contentLayoutItemId = (_b = contentLayoutsInfo === null || contentLayoutsInfo === void 0 ? void 0 : contentLayoutsInfo[0]) === null || _b === void 0 ? void 0 : _b.layoutItemId;
            const setting = (_e = (_d = (_c = layouts === null || layouts === void 0 ? void 0 : layouts[contentLayoutId]) === null || _c === void 0 ? void 0 : _c.content) === null || _d === void 0 ? void 0 : _d[contentLayoutItemId]) === null || _e === void 0 ? void 0 : _e.setting;
            return setting;
        };
        this.getListMaxSize = () => {
            var _a, _b, _c, _d, _e;
            const { boundingBox, heightLayoutItemSizeModes, layoutId, appMode, pageMode } = this.props;
            const isListHeightCustom = heightLayoutItemSizeModes === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Custom && (boundingBox === null || boundingBox === void 0 ? void 0 : boundingBox.height);
            const setting = this.getContentLayoutSetting();
            const isContentWidthAuto = ((_a = setting === null || setting === void 0 ? void 0 : setting.autoProps) === null || _a === void 0 ? void 0 : _a.width) === 'auto' || (setting === null || setting === void 0 ? void 0 : setting.widthMode) === 'auto';
            const isContentHeightAuto = ((_b = setting === null || setting === void 0 ? void 0 : setting.autoProps) === null || _b === void 0 ? void 0 : _b.height) === 'auto' || (setting === null || setting === void 0 ? void 0 : setting.heightMode) === 'auto' || !setting;
            // const isUse600 = (pageMode === PageMode.AutoScroll && (isContentHeightAuto || !setting?.autoProps?.width))
            const DESIGN_SIZE = (pageMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.PageMode.AutoScroll && isContentHeightAuto) ? 600 : this.bodySize.clientHeight;
            const bodyHeight = appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design ? DESIGN_SIZE : this.bodySize.clientHeight;
            const maxheight = isListHeightCustom ? boundingBox === null || boundingBox === void 0 ? void 0 : boundingBox.height : bodyHeight;
            const isListHeightCustomUnitPX = isListHeightCustom && !(((_c = boundingBox === null || boundingBox === void 0 ? void 0 : boundingBox.height) === null || _c === void 0 ? void 0 : _c.includes) && ((_d = boundingBox === null || boundingBox === void 0 ? void 0 : boundingBox.height) === null || _d === void 0 ? void 0 : _d.includes('%')));
            let maxSize = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                maxWidth: this.bodySize.scrollWidth,
                maxHeight: maxheight
            });
            const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
            const { layouts } = appConfig;
            const type = (_e = layouts[layoutId]) === null || _e === void 0 ? void 0 : _e.type;
            if (type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutType.ColumnLayout && isContentWidthAuto) {
                maxSize = maxSize.set('maxWidth', this.bodySize.clientWidth);
            }
            if (type === 'ROW' && isContentHeightAuto && !isListHeightCustomUnitPX) {
                const maxHeight = appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design ? DESIGN_SIZE : this.bodySize.clientHeight;
                maxSize = maxSize.set('maxHeight', maxHeight);
            }
            maxSize = maxSize.set('maxHeight', this.initElementSize(maxSize.maxHeight));
            maxSize = maxSize.set('maxWidth', this.initElementSize(maxSize.maxWidth));
            return maxSize;
        };
        this.initElementSize = (size) => {
            if (Number(size)) {
                return `${size}px`;
            }
            else if (typeof (size) === 'string') {
                if ((size === null || size === void 0 ? void 0 : size.includes('px')) || (size === null || size === void 0 ? void 0 : size.includes('rem'))) {
                    return size;
                }
                else if (size === null || size === void 0 ? void 0 : size.includes('%')) {
                    return '100%';
                }
            }
            else {
                return size;
            }
        };
        this.getRefreshLoadingClass = () => {
            const { config, appMode } = this.props;
            const { scrollBarOpen, layoutType } = config;
            const isEditor = window.jimuConfig.isInBuilder && appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design;
            if (!scrollBarOpen || isEditor) {
                return '';
            }
            if (layoutType === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column) {
                return 'horizon-loading';
            }
            else {
                return 'vertical-loading';
            }
        };
        this.resetAutoRefreshTimes = (interval, showLoading = false) => {
            clearTimeout(this.resetAutoRefreshTime);
            if (interval <= 0) {
                clearInterval(this.autoRefreshLoadingTime);
            }
            this.resetAutoRefreshTime = setTimeout(() => {
                if (showLoading && interval > 0) {
                    this.setState({
                        autoRefreshLoadingString: this.formatMessage('lastUpdateAFewTime')
                    });
                }
                this.setState({
                    showLoading: showLoading
                });
            }, 0);
        };
        this.setRefreshLoadingString = (showLoading = false) => {
            if (!showLoading) {
                return false;
            }
            let time = 0;
            clearInterval(this.autoRefreshLoadingTime);
            this.autoRefreshLoadingTime = setInterval(() => {
                time++;
                this.setState({
                    autoRefreshLoadingString: this.getLoadingString(time)
                });
            }, 60000);
        };
        this.getLoadingString = (time) => {
            let loadingString = this.formatMessage('lastUpdateAFewTime');
            if (time > 1 && time <= 2) {
                loadingString = this.formatMessage('lastUpdateAMinute');
            }
            else if (time > 2) {
                loadingString = this.formatMessage('lastUpdateTime', { updateTime: time });
            }
            return loadingString;
        };
        this.onItemsRendered = ({ overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex }) => {
            const { config } = this.props;
            // All index params are numbers.
            this.listVisibleStartIndex = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemIndexByRowAndColumnIndex(visibleRowStartIndex, visibleColumnStartIndex) : visibleStartIndex;
            this.listVisibleStopIndex = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemIndexByRowAndColumnIndex(visibleRowStopIndex, visibleColumnStopIndex) : visibleStopIndex;
            if (this.needRefreshListOnListRendered) {
                this.needRefreshListOnListRendered = false;
                this.refreshList();
            }
            if (this.isSwitchPage) {
                if (config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_2__.PageStyle.Scroll) {
                    if (this.records.length > this.listVisibleStopIndex + 1) {
                        this.isSwitchPage = false;
                        this.onItemsRenderedTimeout = setTimeout(() => {
                            this.handleScrollDown(null);
                            if (this.isScrollToNextStep) {
                                this.isScrollToNextStep = false;
                            }
                        }, 500);
                    }
                }
                else {
                    this.isSwitchPage = false;
                }
            }
        };
        this.getItemIndexByRowAndColumnIndex = (rowIndex, columnIndex) => {
            const columnCount = this.getItemColumnCount();
            return rowIndex * columnCount + columnIndex;
        };
        this.itemSize = index => {
            const { config } = this.props;
            const { currentCardSize } = this.state;
            const isHorizon = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column;
            const space = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? config === null || config === void 0 ? void 0 : config.verticalSpace : config === null || config === void 0 ? void 0 : config.space;
            const itemWidth = currentCardSize.width + space;
            const itemHeight = currentCardSize.height + space;
            const size = isHorizon ? itemWidth : itemHeight;
            return size;
        };
        this.columnWidth = (index, cardWidth, space = 0) => {
            return cardWidth + space;
        };
        this.rowHeight = (rowIndex, cardHeight, space = 0) => {
            return cardHeight + space;
        };
        this.getItemsByRecords = records => {
            const { config, selectionIsInSelf, selectionIsSelf, builderStatus, appMode, queryObject, useDataSources } = this.props;
            const { datasource, hoverIndex } = this.state;
            const selectedRecordIds = (!datasource || !config.isItemStyleConfirm
                ? []
                : datasource.getSelectedRecordIds()).map(v => v + '');
            return (records &&
                records.map((record, index) => {
                    const isEditor = index === 0 &&
                        window.jimuConfig.isInBuilder &&
                        appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design;
                    const editProps = isEditor
                        ? {
                            hideCardTool: this.state.hideCardTool,
                            selectionIsList: selectionIsSelf,
                            selectionIsInList: selectionIsInSelf,
                            isEditing: this.isEditing(),
                            builderStatus: builderStatus,
                            lockItemRatio: config.lockItemRatio,
                            changeIsResizingCard: this.changeIsResizingCard
                        }
                        : {
                            linkParam: config.linkParam,
                            queryObject: queryObject,
                            useDataSources
                        };
                    return Object.assign(Object.assign({ index, isHover: hoverIndex === index, record: config.isItemStyleConfirm ? record : undefined, active: !record.fake &&
                            config.isItemStyleConfirm &&
                            datasource &&
                            selectedRecordIds.includes(record.getId()) }, this.getOtherProps()), editProps);
                }));
        };
        this.getOtherProps = () => {
            var _a, _b;
            const { config, theme, id, appMode, builderSupportModules, layouts, browserSizeMode, dispatch, isRTL } = this.props;
            const { datasource } = this.state;
            const isWidthPercentage = ((_b = (_a = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeWidthUnitInConfig(this.props)) === null || _a === void 0 ? void 0 : _a.width) === null || _b === void 0 ? void 0 : _b.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DistanceUnits.PERCENTAGE;
            return {
                browserSizeMode: browserSizeMode,
                space: config.space,
                isRTL: isRTL,
                builderSupportModules: builderSupportModules,
                formatMessage: this.formatMessage,
                dispatch: dispatch,
                widgetId: id,
                interact: window.jimuConfig.isInBuilder &&
                    builderSupportModules.widgetModules.interact,
                selectCard: this.selectCard,
                handleResizeCard: this.handleResizeCard,
                appMode: appMode,
                onChange: this.handleItemChange,
                hoverLayoutOpen: config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Hover].enable,
                selectable: config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !==
                    _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None,
                direction: config.direction,
                theme: theme,
                LayoutEntry: this.state.LayoutEntry,
                layouts: layouts,
                layoutType: config === null || config === void 0 ? void 0 : config.layoutType,
                keepAspectRatio: config === null || config === void 0 ? void 0 : config.keepAspectRatio,
                gridItemSizeRatio: config === null || config === void 0 ? void 0 : config.gridItemSizeRatio,
                cardConfigs: config.cardConfigs,
                datasourceId: datasource && datasource.id,
                updateCardToolPosition: this.updateCardToolPosition,
                isWidthPercentage: isWidthPercentage,
                horizontalSpace: config === null || config === void 0 ? void 0 : config.horizontalSpace
            };
        };
        this.itemRender = props => {
            var _a;
            const { appMode, config } = this.props;
            let style = props.style;
            const columnIndex = (props === null || props === void 0 ? void 0 : props.columnIndex) || 0;
            const rowIndex = (props === null || props === void 0 ? void 0 : props.rowIndex) || 0;
            const rowCount = this.getItemRowCount();
            const columnCount = this.getItemColumnCount();
            const index = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemIndexByRowAndColumnIndex(rowIndex, columnIndex) : props.index;
            const items = props.data;
            const recordLength = ((_a = this.records) === null || _a === void 0 ? void 0 : _a.length) || 0;
            const isLastItem = recordLength - 1 === index;
            let listItemStyle;
            switch (config === null || config === void 0 ? void 0 : config.layoutType) {
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column:
                    listItemStyle = {
                        width: `${parseFloat(style.width) - config.space}px`,
                        height: '100%'
                    };
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row:
                    listItemStyle = {
                        width: '100%',
                        height: `${parseFloat(style.height) - config.space}px`
                    };
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID:
                    listItemStyle = {
                        height: `${parseFloat(style.height) - (config === null || config === void 0 ? void 0 : config.verticalSpace)}px`,
                        width: `${parseFloat(style === null || style === void 0 ? void 0 : style.width) - (config === null || config === void 0 ? void 0 : config.horizontalSpace)}px`
                    };
                    break;
            }
            //The size of list item content
            switch (config === null || config === void 0 ? void 0 : config.layoutType) {
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Column:
                    style = Object.assign(Object.assign({}, style), { width: isLastItem ? `${parseFloat(style.width) - config.space}px` : `${parseFloat(style.width)}px` });
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.Row:
                    style = Object.assign(Object.assign({}, style), { height: isLastItem ? `${parseFloat(style.height) - config.space}px` : `${parseFloat(style.height)}px` });
                    break;
                case _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID:
                    style = Object.assign(Object.assign({}, style), { height: rowCount === (rowIndex + 1) ? `${parseFloat(style.height) - (config === null || config === void 0 ? void 0 : config.verticalSpace)}px` : `${parseFloat(style.height)}px`, width: columnCount === (columnIndex + 1) ? `${parseFloat(style === null || style === void 0 ? void 0 : style.width) - (config === null || config === void 0 ? void 0 : config.horizontalSpace)}px` : `${parseFloat(style === null || style === void 0 ? void 0 : style.width)}px` });
                    break;
            }
            const isEditor = index === 0 && window.jimuConfig.isInBuilder && appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design;
            const ListCard = isEditor ? _components_list_card_editor__WEBPACK_IMPORTED_MODULE_6__["default"] : _components_list_card_viewer__WEBPACK_IMPORTED_MODULE_7__["default"];
            if ((items === null || items === void 0 ? void 0 : items.length) < index + 1)
                return null;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: style },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListCard, Object.assign({ listStyle: listItemStyle, widgetId: this.props.id }, items[index], { handleListMouseMove: this.handleListMouseMove, handleListMouseLeave: this.handleListMouseLeave, itemIdex: index }))));
        };
        this.itemKey = index => {
            const item = this.records[index];
            return `${((item === null || item === void 0 ? void 0 : item.getId) && (item === null || item === void 0 ? void 0 : item.getId())) || index}`;
        };
        this.gridItemIndex = indexOption => {
            const { columnIndex, rowIndex } = indexOption;
            const index = this.getItemIndexByRowAndColumnIndex(rowIndex, columnIndex);
            const item = this.records[index];
            return `${((item === null || item === void 0 ? void 0 : item.getId) && (item === null || item === void 0 ? void 0 : item.getId())) || index + 100}`;
        };
        this.getItemColumnCount = () => {
            const { widgetRect, currentCardSize } = this.state;
            const { config } = this.props;
            let listWidth = (widgetRect && widgetRect.width) || _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE;
            listWidth = listWidth - _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_BAR_WIDTH;
            const cardWidth = currentCardSize.width + (config === null || config === void 0 ? void 0 : config.horizontalSpace);
            //The actual width of the last column is currentCardSize.width
            //'listWidth-4' is for the width of the scroll bar
            //The space in the last column should be removed
            return Math.floor((listWidth - currentCardSize.width) / cardWidth + 1) || 1;
            // return Math.floor((listWidth + config?.horizontalSpace) / (currentCardSize.width + config?.horizontalSpace)) || 1
        };
        this.getItemRowCount = () => {
            return Math.ceil(this.records.length / this.getItemColumnCount()) || 1;
        };
        this.getListContentLeftPadding = () => {
            const { widgetRect, currentCardSize } = this.state;
            const { config } = this.props;
            const listWidth = (widgetRect && widgetRect.width) || _config__WEBPACK_IMPORTED_MODULE_2__.LIST_CARD_MIN_SIZE;
            const rowWidth = this.getItemColumnCount() * (currentCardSize.width + (config === null || config === void 0 ? void 0 : config.horizontalSpace)) - (config === null || config === void 0 ? void 0 : config.horizontalSpace);
            let padding;
            switch (config === null || config === void 0 ? void 0 : config.gridAlignment) {
                case jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.LEFT:
                    padding = 0;
                    break;
                case jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextAlignValue.RIGHT:
                    padding = listWidth - rowWidth - _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_BAR_WIDTH;
                    break;
                default:
                    padding = (listWidth - rowWidth - _config__WEBPACK_IMPORTED_MODULE_2__.SCROLL_BAR_WIDTH) / 2;
                    break;
            }
            if ((config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID) {
                return padding > 0 ? padding : 0;
            }
            else {
                return 0;
            }
        };
        this.onCreateDataSourceFailed = (err) => {
            this.setState({
                createDataSourceFailed: true
            });
        };
        this.renderWidgetPlaceholder = () => {
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.WidgetPlaceholder, { icon: (jimu_icons_svg_outlined_brand_widget_list_svg__WEBPACK_IMPORTED_MODULE_21___default()), widgetId: this.props.id, message: '' });
        };
        this.onListContainerMouseMove = () => {
            if (this.needAutoScrollToSelectedItemWhenLoadPage && this.records) {
                this.needAutoScrollToSelectedItemWhenLoadPage = false;
            }
        };
        const { config } = props;
        this.paginatorDiv = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.listTopRightToolsDiv = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        const stateObj = {
            LayoutEntry: null,
            page: 1,
            sortOptionName: config.sorts && config.sorts[0] && config.sorts[0].ruleOptionName,
            currentCardSize: _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getCardSizeNumberInConfig(props, _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getDefaultMinListSize(props)),
            forceShowMask: false,
            widgetRect: _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getDefaultMinListSize(props),
            showList: true,
            searchText: '',
            currentFilter: undefined,
            filterApplied: false,
            showSelectionOnly: false,
            hideCardTool: false,
            scrollStatus: 'start',
            datasource: undefined,
            hoverIndex: -1,
            isScrolling: false,
            isScrollSpeedOver: false,
            isResizingCard: false,
            searchSuggestion: [],
            isSearchBoxVisible: false,
            isOpenTopToolsPopper: false,
            latestUpdateTime: 0,
            showLoading: false,
            autoRefreshLoadingString: '',
            listDivSize: {
                clientWidth: null,
                clientHeight: null
            },
            toolsDivWidth: null,
            listDivBoundRect: null,
            isScrollEnd: false,
            isMount: false,
            createDataSourceFailed: false
        };
        this.selectSelf = this.selectSelf.bind(this);
        this.handleResizeCard = this.handleResizeCard.bind(this);
        this.listRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        if (window.jimuConfig.isInBuilder) {
            stateObj.LayoutEntry = this.props.builderSupportModules.LayoutEntry;
        }
        else {
            stateObj.LayoutEntry = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutEntry;
        }
        this.state = stateObj;
        this.onResize = this.onResize.bind(this);
        this.changeIsResizingCard = this.changeIsResizingCard.bind(this);
        this.setRefreshLoadingString = this.setRefreshLoadingString.bind(this);
        this.resetAutoRefreshTimes = this.resetAutoRefreshTimes.bind(this);
        this.debounceOnResize = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce((width, height) => { this.onResize(width, height); }, 200);
        this.debounceResetAfterIndices = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce(() => { this.resetAfterIndices(); }, 200);
    }
    componentDidMount() {
        this.setState({
            isMount: true
        });
        this.getBodySize();
        window.addEventListener('resize', this.getBodySize);
        // const {outputDataSources, useDataSources} = this.props
        // if(this.records != defaultRecords){
        //   listUtils.createOutputDs(this.records, outputDataSources?.[0], useDataSources?.[0]);
        // }
    }
    componentWillUnmount() {
        clearTimeout(this.resizeTimeout);
        clearTimeout(this.updateCardToolTimeout);
        clearTimeout(this.mouseClickTimeout);
        clearTimeout(this.suggestionsQueryTimeout);
        clearTimeout(this.showPopperTimeOut);
        clearTimeout(this.resetAutoRefreshTime);
        clearTimeout(this.setPageTimeout);
        clearTimeout(this.onItemsRenderedTimeout);
        clearInterval(this.autoRefreshLoadingTime);
    }
    componentDidUpdate(preProps, preState) {
        var _a;
        const { config, appMode } = this.props;
        const { datasource } = this.state;
        if (!window.jimuConfig.isInBuilder || appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run) {
            const isOpenSelectionMode = config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_2__.SelectionModeType.None;
            // Listen selected records change from outside
            if (datasource && isOpenSelectionMode) {
                this.scrollToSelectedItems(datasource);
            }
        }
        // updade list in builder
        this.updateListInBuilder(preProps, preState);
        // listen appMode change
        this.appModeChange(preProps);
        if ((preProps === null || preProps === void 0 ? void 0 : preProps.selectionIsInSelf) !== ((_a = this.props) === null || _a === void 0 ? void 0 : _a.selectionIsInSelf)) {
            this.setSelectionStatus();
        }
        this.setListLayoutInWidgetState();
        this.setListParentSizeInWidgetState();
        this.updatePageWhenPrePageSizeChange(preProps.config);
        // update output ds
        // if(this.records != defaultRecords){
        //   listUtils.createOutputDs(this.records, outputDataSources?.[0], useDataSources?.[0]);
        // }
    }
    changeIsResizingCard(isResizingCard) {
        this.setState({
            isResizingCard: isResizingCard
        });
    }
    handleResizeCard(newCardSize, resizeEnd = false, isTop, isLeft, isReplace = false) {
        if (resizeEnd) {
            const cardSize = this.initNewCardSize(newCardSize);
            window.jimuConfig.isInBuilder &&
                this.props.builderSupportModules.widgetModules.handleResizeCard(this.props, cardSize, isTop, isLeft, resizeEnd, isReplace);
        }
        else {
            this.setState({
                currentCardSize: newCardSize
            }, () => {
                this.refreshList(false);
            });
        }
    }
    selectSelf() {
        window.jimuConfig.isInBuilder &&
            this.props.builderSupportModules.widgetModules.selectSelf(this.props);
    }
    getOutputDs() {
        const outputDsId = this.props.outputDataSources && this.props.outputDataSources[0];
        const useDs = this.props.useDataSources && this.props.useDataSources[0];
        if (!outputDsId || !useDs)
            return;
        const dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        return dsManager.getDataSource(outputDsId);
    }
    render() {
        const { config, id, appMode, browserSizeMode, selectionIsInSelf, selectionIsSelf, useDataSources, builderStatus, layouts } = this.props;
        const appConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
        const { forceShowMask, datasource, widgetRect, page, createDataSourceFailed } = this.state;
        const isInBuilder = window.jimuConfig.isInBuilder;
        const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-widget', 'widget-list', 'list-widget-' + id);
        if (!config.itemStyle) {
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.WidgetPlaceholder, { widgetId: this.props.id, icon: __webpack_require__(/*! ./assets/icon.svg */ "./your-extensions/widgets/list-112/src/runtime/assets/icon.svg"), message: this.formatMessage('placeHolderTip') }));
        }
        const showBottomTool = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showBottomTools(this.props, this.state);
        const bottomToolH = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getBottomToolH(this.paginatorDiv.current, showBottomTool);
        const showTopTools = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.showTopTools(this.props);
        const listHeight = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getListHeight(widgetRect, bottomToolH, showTopTools);
        const columnCount = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayoutType.GRID ? this.getItemColumnCount() : null;
        const pageSize = _utils_utils__WEBPACK_IMPORTED_MODULE_15__.getPageSize(widgetRect, listHeight, this.props, columnCount);
        this.pageSize = pageSize;
        const queryPageSize = pageSize;
        let query = (0,_utils_list_service__WEBPACK_IMPORTED_MODULE_4__.getQueryOptions)(this.state, this.props, queryPageSize);
        if (!(0,_utils_list_service__WEBPACK_IMPORTED_MODULE_4__.compareQueryOptionsExceptPaging)(query, this.lastQuery, datasource) && datasource) {
            const temp = query;
            if (page !== 1) {
                query = this.lastQuery;
                this.lastQuery = temp;
                this.setState({
                    page: 1
                });
            }
            else {
                this.lastQuery = temp;
            }
        }
        const currentLayout = appConfig === null || appConfig === void 0 ? void 0 : appConfig.layouts[jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[builderStatus], browserSizeMode, appConfig.mainSizeMode)];
        const currentLayoutType = currentLayout && currentLayout.type;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classes, css: (0,_styles_style__WEBPACK_IMPORTED_MODULE_5__.getStyle)(this.props, this.isEditing(), showBottomTool), onPointerDown: evt => {
                isInBuilder &&
                    appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run &&
                    !selectionIsSelf &&
                    !selectionIsInSelf &&
                    this.handleListPointerDown(evt);
            } },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-list d-flex', onMouseMove: this.onListContainerMouseMove },
                this.isDsConfigured()
                    ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { query: datasource ? query : null, useDataSource: useDataSources && useDataSources[0], onDataSourceCreated: this.onDSCreated, onCreateDataSourceFailed: this.onCreateDataSourceFailed, widgetId: this.props.id, queryCount: true }, this.renderList))
                    : (this.renderList()),
                (!this.isHasRenderList && !createDataSourceFailed) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-loading-con w-100 h-100' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-secondary-loading' }))),
                createDataSourceFailed && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-error-con position-relative w-100 h-100' },
                    this.renderWidgetPlaceholder(),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { className: 'position-absolute', type: 'warning', withIcon: true, text: this.formatMessage('dataSourceCreateError') }))),
            isInBuilder &&
                appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Run &&
                (forceShowMask ||
                    (!selectionIsInSelf && !selectionIsSelf) ||
                    (!config.isItemStyleConfirm && currentLayoutType)) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-with-mask' })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: this.debounceOnResize })));
    }
}
Widget.versionManager = _version_manager__WEBPACK_IMPORTED_MODULE_14__.versionManager;
Widget.mapExtraStateProps = (state, props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const appConfig = state && state.appConfig;
    const { layouts, layoutId, layoutItemId, builderSupportModules, id } = props;
    const browserSizeMode = state && state.browserSizeMode;
    const builderStatus = (state &&
        state.widgetsState &&
        state.widgetsState[props.id] &&
        state.widgetsState[props.id].builderStatus) ||
        _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular;
    let subLayoutType;
    if (appConfig) {
        const subLayout = appConfig &&
            state.appConfig.layouts &&
            state.appConfig.layouts[jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[builderStatus], browserSizeMode, appConfig.mainSizeMode)];
        subLayoutType = subLayout && subLayout.type;
    }
    const layout = (_a = appConfig.layouts) === null || _a === void 0 ? void 0 : _a[layoutId];
    const layoutSetting = (_c = (_b = layout === null || layout === void 0 ? void 0 : layout.content) === null || _b === void 0 ? void 0 : _b[layoutItemId]) === null || _c === void 0 ? void 0 : _c.setting;
    const isHeightAuto = ((_d = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _d === void 0 ? void 0 : _d.height) === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Auto ||
        ((_e = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _e === void 0 ? void 0 : _e.height) === true;
    const isWidthAuto = ((_f = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _f === void 0 ? void 0 : _f.width) === jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.LayoutItemSizeModes.Auto ||
        ((_g = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _g === void 0 ? void 0 : _g.width) === true;
    let widgetPosition;
    if (window.jimuConfig.isInBuilder) {
        const bbox = (_l = (_k = (_j = (_h = appConfig.layouts) === null || _h === void 0 ? void 0 : _h[layoutId]) === null || _j === void 0 ? void 0 : _j.content) === null || _k === void 0 ? void 0 : _k[layoutItemId]) === null || _l === void 0 ? void 0 : _l.bbox;
        widgetPosition = bbox && {
            left: bbox.left,
            top: bbox.top
        };
    }
    const selection = state && state.appRuntimeInfo && state.appRuntimeInfo.selection;
    const selectionIsInSelf = selection &&
        builderSupportModules &&
        builderSupportModules.widgetModules &&
        builderSupportModules.widgetModules.selectionInList(selection, id, appConfig, false);
    let selectionStatus;
    if (selectionIsInSelf) {
        selectionStatus = Object.keys(layouts).find(status => jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_3__.searchUtils.findLayoutId(layouts[status], browserSizeMode, appConfig.mainSizeMode) === selection.layoutId);
    }
    const selectionIsSelf = !!(selection &&
        selection.layoutId === layoutId &&
        selection.layoutItemId === layoutItemId);
    const currentPageId = (_m = state === null || state === void 0 ? void 0 : state.appRuntimeInfo) === null || _m === void 0 ? void 0 : _m.currentPageId;
    const pageMode = (_q = (_p = (_o = state === null || state === void 0 ? void 0 : state.appConfig) === null || _o === void 0 ? void 0 : _o.pages) === null || _p === void 0 ? void 0 : _p[currentPageId]) === null || _q === void 0 ? void 0 : _q.mode;
    return {
        selectionIsSelf: selectionIsSelf,
        selectionIsInSelf: !!selectionIsInSelf,
        selectionStatus,
        appMode: (_r = state === null || state === void 0 ? void 0 : state.appRuntimeInfo) === null || _r === void 0 ? void 0 : _r.appMode,
        browserSizeMode: state && state.browserSizeMode,
        builderStatus: (state &&
            state.widgetsState &&
            state.widgetsState[props.id] &&
            state.widgetsState[props.id].builderStatus) ||
            _config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular,
        showLoading: (_t = (_s = state === null || state === void 0 ? void 0 : state.widgetsState) === null || _s === void 0 ? void 0 : _s[props.id]) === null || _t === void 0 ? void 0 : _t.showLoading,
        isRTL: state && state.appContext && state.appContext.isRTL,
        subLayoutType,
        left: widgetPosition && widgetPosition.left,
        top: widgetPosition && widgetPosition.top,
        isHeightAuto,
        isWidthAuto,
        queryObject: state.queryObject,
        boundingBox: (_v = (_u = layout === null || layout === void 0 ? void 0 : layout.content) === null || _u === void 0 ? void 0 : _u[layoutItemId]) === null || _v === void 0 ? void 0 : _v.bbox,
        heightLayoutItemSizeModes: (_w = layoutSetting === null || layoutSetting === void 0 ? void 0 : layoutSetting.autoProps) === null || _w === void 0 ? void 0 : _w.height,
        parentSize: ((_x = state.widgetsState[props.id]) === null || _x === void 0 ? void 0 : _x.parentSize) || null,
        pageMode: pageMode
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});