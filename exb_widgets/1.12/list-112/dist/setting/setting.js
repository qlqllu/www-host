System.register(["jimu-core","jimu-for-builder","jimu-layouts/layout-runtime","jimu-ui/advanced/setting-components","jimu-ui/advanced/style-setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-core/react","jimu-ui/advanced/sql-expression-builder","jimu-ui/basic/sql-expression-runtime"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__[key] = module[key];
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

/***/ "./jimu-icons/svg/outlined/application/click.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/click.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/desktop.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/desktop.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M5 13H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-4l.78 2.342a.5.5 0 0 1-.474.658H4.694a.5.5 0 0 1-.475-.658L5 13ZM1 3h14v9H1V3Zm5.054 10-.667 2h5.226l-.667-2H6.054Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/mobile.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/mobile.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M7.5 13a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm1 0h6v10H5V5Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/tablet.svg":
/*!********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/tablet.svg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M3.04 2a.242.242 0 0 0-.04.143v12.714c0 .073.023.12.04.143h9.92a.241.241 0 0 0 .04-.143V2.143A.241.241 0 0 0 12.96 2H3.04ZM3 1c-.552 0-1 .512-1 1.143v12.714C2 15.488 2.448 16 3 16h10c.552 0 1-.512 1-1.143V2.143C14 1.512 13.552 1 13 1H3Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/arrow-left.svg":
/*!************************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/arrow-left.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M15 7.5a.522.522 0 0 1-.516.527H2.976L6.473 11.6a.535.535 0 0 1 0 .746.508.508 0 0 1-.73 0L1 7.5l4.743-4.846a.508.508 0 0 1 .73 0 .535.535 0 0 1 0 .746L2.976 6.973h11.508c.285 0 .516.236.516.527Z\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/lock.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/lock.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M7.5 0A3.5 3.5 0 0 1 11 3.5V6h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V3.5A3.5 3.5 0 0 1 7.5 0ZM5 6h5V3.5a2.5 2.5 0 0 0-2.336-2.495L7.5 1a2.5 2.5 0 0 0-2.495 2.336L5 3.5V6Zm6 1H3v8h9V7h-1Zm-3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/unlock.svg":
/*!***************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/unlock.svg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M16 3.5a3.5 3.5 0 1 0-7 0V6H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3.5l.005-.164A2.5 2.5 0 0 1 12.5 1l.164.005A2.5 2.5 0 0 1 15 3.5a.5.5 0 0 0 1 0ZM9 7H3v8h9V7H9Zm-1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/info.svg":
/*!****************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/info.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" d=\"M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z\"></path><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/suggested/warning.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/suggested/warning.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M8 2.125 14.334 14H1.667L8 2.125Zm-.882-.47a1 1 0 0 1 1.765 0l6.333 11.874A1 1 0 0 1 14.334 15H1.667a1 1 0 0 1-.882-1.47L7.118 1.653ZM8 4.874a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0L8.9 5.87a.905.905 0 0 0-.9-.995Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/click.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/application/click.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickOutlined": () => (/* binding */ ClickOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/click.svg */ "./jimu-icons/svg/outlined/application/click.svg");
/* harmony import */ var _svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const ClickOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_click_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/desktop.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/desktop.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesktopOutlined": () => (/* binding */ DesktopOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_desktop_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/desktop.svg */ "./jimu-icons/svg/outlined/application/desktop.svg");
/* harmony import */ var _svg_outlined_application_desktop_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_desktop_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const DesktopOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_desktop_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/mobile.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/application/mobile.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileOutlined": () => (/* binding */ MobileOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_mobile_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/mobile.svg */ "./jimu-icons/svg/outlined/application/mobile.svg");
/* harmony import */ var _svg_outlined_application_mobile_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_mobile_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const MobileOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_mobile_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/tablet.tsx":
/*!****************************************************!*\
  !*** ./jimu-icons/outlined/application/tablet.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabletOutlined": () => (/* binding */ TabletOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_tablet_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/tablet.svg */ "./jimu-icons/svg/outlined/application/tablet.svg");
/* harmony import */ var _svg_outlined_application_tablet_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_tablet_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const TabletOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_tablet_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./jimu-icons/outlined/editor/lock.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/lock.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockOutlined": () => (/* binding */ LockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/lock.svg */ "./jimu-icons/svg/outlined/editor/lock.svg");
/* harmony import */ var _svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const LockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_lock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/unlock.tsx":
/*!***********************************************!*\
  !*** ./jimu-icons/outlined/editor/unlock.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockOutlined": () => (/* binding */ UnlockOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/unlock.svg */ "./jimu-icons/svg/outlined/editor/unlock.svg");
/* harmony import */ var _svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const UnlockOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_unlock_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/suggested/info.tsx":
/*!************************************************!*\
  !*** ./jimu-icons/outlined/suggested/info.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoOutlined": () => (/* binding */ InfoOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/suggested/info.svg */ "./jimu-icons/svg/outlined/suggested/info.svg");
/* harmony import */ var _svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const InfoOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_suggested_info_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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

/***/ "./your-extensions/widgets/list-112/src/common-builder-support.tsx":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/common-builder-support.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleResizeCard": () => (/* binding */ handleResizeCard),
/* harmony export */   "selectSelf": () => (/* binding */ selectSelf)
/* harmony export */ });
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./your-extensions/widgets/list-112/src/config.ts");




function selectSelf(props, fromPage) {
    const { id, dispatch, browserSizeMode } = props;
    const appConfig = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)().appConfig;
    const layoutInfos = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getContentLayoutInfosInOneSizeMode(appConfig, id, jimu_core__WEBPACK_IMPORTED_MODULE_1__.LayoutItemType.Widget, browserSizeMode);
    if (layoutInfos) {
        if (layoutInfos.length > 1) {
            const widgetId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getWidgetIdThatUseTheLayoutId(appConfig, layoutInfos[0].layoutId);
            if (widgetId) {
                const widgetJson = appConfig.widgets[widgetId];
                if (widgetJson &&
                    widgetJson.manifest &&
                    widgetJson.manifest.name &&
                    widgetJson.manifest.name === 'list') {
                    const currentStatus = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState[widgetJson.id] &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState[widgetJson.id].builderStatus;
                    if (currentStatus) {
                        const currentLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(widgetJson.layouts[currentStatus], browserSizeMode, appConfig.mainSizeMode);
                        const layoutInfo = layoutInfos.find(lInfo => lInfo.layoutId === currentLayoutId);
                        if (fromPage) {
                            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.selectionChanged(layoutInfo));
                        }
                        else {
                            jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.builderAppSync.publishChangeSelectionToApp(layoutInfo);
                        }
                    }
                }
            }
        }
        else if (layoutInfos.length > 0) {
            if (fromPage) {
                dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.selectionChanged(layoutInfos[0]));
            }
            else {
                jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.builderAppSync.publishChangeSelectionToApp(layoutInfos[0]);
            }
        }
    }
}
function handleResizeCard(props, newCardSize, widgetConfig, isTop = false, isLeft = false, isEnd = false, appConfig = undefined) {
    const { id, browserSizeMode } = props;
    if (!appConfig) {
        appConfig = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)().appConfig;
    }
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)(appConfig);
    action.editWidgetConfig(id, widgetConfig
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular, 'cardSize', browserSizeMode], newCardSize)
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover, 'cardSize', browserSizeMode], newCardSize)
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected, 'cardSize', browserSizeMode], newCardSize));
    return action;
}
// export function handleResizeCardForStyleChange(id, config, appConfig: IMAppConfig = undefined): AppConfigAction{
//   const space = config.space;
//   const newCardSize = config.cardSize;
//   const layoutInfos = appConfigUtils.getContentLayoutInfosInOneSizeMode(appConfig, id, LayoutItemType.Widget, browserSizeMode);
//   let layoutInfo = undefined;
//   if(layoutInfos){
//     if(layoutInfos.length > 1){
//       const widgetId = appConfigUtils.getWidgetIdThatUseTheLayoutId(appConfig, layoutInfos[0].layoutId);
//       if(widgetId){
//         const widgetJson = appConfig.widgets[widgetId];
//         if(widgetJson && widgetJson.manifest && widgetJson.manifest.name && widgetJson.manifest.name === 'list'){
//           const currentStatus = getAppStore().getState().widgetsState && getAppStore().getState().widgetsState[widgetJson.id] &&
//                                   getAppStore().getState().widgetsState[widgetJson.id]['builderStatus'];
//           if(currentStatus){
//             const currentLayoutId = utils.findLayoutId(widgetJson.layouts[currentStatus], getAppStore().getState().browserSizeMode, appConfig.mainSizeMode);
//             layoutInfo = layoutInfos.find(lInfo => lInfo.layoutId === currentLayoutId);
//           }
//         }
//       }
//     }else if(layoutInfos.length > 0){
//       layoutInfo = layoutInfos[0];
//     }
//   }
//   if(!layoutInfo){
//     return;
//   }
//   const layoutItem = appConfig.layouts[layoutInfo.layoutId].content && appConfig.layouts[layoutInfo.layoutId].content[layoutInfo.layoutItemId];
//   if(!layoutItem)return;
//   const action = getAppConfigAction(appConfig);
//   if(layoutItem){
//     let bbox = Immutable(layoutItem.bbox || {});
//     if(config.direction === DirectionType.Vertical){
//       bbox = bbox.set('width', `${newCardSize.width + LIST_CARD_PADDING * 2}px`);
//       bbox = bbox.set('height', `${newCardSize.height * 2 + space * 2 + LIST_CARD_PADDING}px`);
//     }else{
//       bbox = bbox.set('width', `${newCardSize.width * 2 + space * 2  + LIST_CARD_PADDING}px`);
//       bbox = bbox.set('height', `${newCardSize.height + LIST_CARD_PADDING * 2}px`);
//     }
//     action.editLayoutItemBBox(layoutInfo, bbox)
//   }
//   return action;
// }
// function _getNumberFromStyle(style: string){
//   style = (style && style.toString()) || '';
//   const remIndex = style && style.toLowerCase().indexOf('rem');
//   const pxIndex = style && style.toLowerCase().indexOf('px');
//   if(remIndex > -1){
//     style = style.substr(0, remIndex);
//   }else if(pxIndex > -1){
//     style = style.substring(0, pxIndex);
//   }
//   return parseInt(style);
// }


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

/***/ "./your-extensions/widgets/list-112/src/setting/components/my-input.tsx":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/components/my-input.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyNumericInput": () => (/* binding */ MyNumericInput)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class MyNumericInput extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onTextInputChange = () => {
            this.props.onAcceptValue(this.state.value);
        };
        this.state = {
            value: props.value
        };
    }
    componentDidUpdate(preProps) {
        if (this.props.value !== preProps.value) {
            const { value } = this.props;
            this.setState({
                value: value
            });
        }
    }
    render() {
        const { min, max, className, style, disabled, title } = this.props;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(className, 'my-input'), value: this.state.value, min: min, max: max, title: title, style: style, disabled: disabled, precision: 0, type: 'number', size: 'sm', onChange: value => {
                this.setState({ value: value });
            }, onAcceptValue: value => { this.onTextInputChange(); } }));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/components/switch-layout.tsx":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/components/switch-layout.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translations/default */ "./your-extensions/widgets/list-112/src/setting/translations/default.ts");
/* harmony import */ var jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-icons/outlined/suggested/warning */ "./jimu-icons/outlined/suggested/warning.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utils */ "./your-extensions/widgets/list-112/src/setting/utils/utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/** @jsx jsx */









const LayoutSetting = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { id, listLayout, status, browserSizeMode, layouts, mainSizeMode, config, appConfig } = props;
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [reminderTitle, setReminderTitle] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const [reminderText, setReminderText] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const [reminderBottomText, setReminderBottomText] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);
    const layout = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(listLayout);
    const oldLayout = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useRef(listLayout);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
        layout.current = props.listLayout;
        oldLayout.current = props.listLayout;
    }, [status, props]);
    const STYLE = jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
    .jimu-radio {
      cursor: pointer;
    }
  `;
    const handleToggle = () => {
        setIsOpen(!isOpen);
        layout.current = oldLayout.current;
    };
    const handleConfirm = () => {
        const regularLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_6__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_2__.Status.Regular], browserSizeMode, mainSizeMode);
        const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_6__.searchUtils.findLayoutId(layouts[status], browserSizeMode, mainSizeMode);
        const option = {
            layout: layout.current,
            config: config,
            widgetId: id,
            appConfig: appConfig,
            status: status,
            regularLayoutId: regularLayoutId,
            desLayoutId: desLayoutId,
            label: nls(status.toLowerCase())
        };
        if (layout.current === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO) {
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.setLayoutAuto)(option);
        }
        else {
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.setLayoutCustom)(option);
        }
        setIsOpen(false);
        oldLayout.current = layout.current;
    };
    const handleLayoutChange = (newLayout) => {
        if (oldLayout.current === newLayout)
            return;
        if (newLayout === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO) {
            setReminderTitle(nls('remindAutoLayoutTitle'));
            setReminderText(nls('remindAutoLayoutText'));
            setReminderBottomText('');
        }
        else {
            setReminderTitle(nls('remindCustomLayoutTitle'));
            setReminderText(nls('remindCustomLayoutText'));
            setReminderBottomText(nls('remindCustomLayoutBottomText'));
        }
        setIsOpen(true);
        layout.current = newLayout;
    };
    const renderRemindModel = () => {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, { isOpen: isOpen, toggle: handleToggle, centered: true },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, { toggle: handleToggle },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_warning__WEBPACK_IMPORTED_MODULE_5__.WarningOutlined, { className: 'mr-2', size: 16 }),
                reminderTitle),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalBody, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, reminderText),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-2' }, reminderBottomText)),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { title: nls('cancel'), onClick: () => { setIsOpen(false); } }, nls('cancel')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { title: nls('ok'), type: 'primary', onClick: handleConfirm }, nls('ok')))));
    };
    const nls = jimu_core__WEBPACK_IMPORTED_MODULE_0__.hooks.useTranslation(_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages, jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages);
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: STYLE, role: 'group', "aria-label": nls('layout') },
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: nls('layout'), flow: 'wrap' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Radio, { title: nls('auto'), checked: ((_b = (_a = config === null || config === void 0 ? void 0 : config.cardConfigs) === null || _a === void 0 ? void 0 : _a[status]) === null || _b === void 0 ? void 0 : _b.listLayout) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO, onChange: () => { handleLayoutChange(_config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.AUTO); }, className: 'mr-2' }),
            " ",
            nls('auto')),
        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Radio, { title: nls('custom'), checked: ((_d = (_c = config === null || config === void 0 ? void 0 : config.cardConfigs) === null || _c === void 0 ? void 0 : _c[status]) === null || _d === void 0 ? void 0 : _d.listLayout) === _config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.CUSTOM || !((_f = (_e = config === null || config === void 0 ? void 0 : config.cardConfigs) === null || _e === void 0 ? void 0 : _e[status]) === null || _f === void 0 ? void 0 : _f.listLayout), onChange: () => { handleLayoutChange(_config__WEBPACK_IMPORTED_MODULE_2__.ListLayout.CUSTOM); }, className: 'mr-2' }),
            " ",
            nls('custom')),
        renderRemindModel()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSetting);


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/translations/default.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/translations/default.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _action_query_label: 'Query by extent',
    listSource: 'List Source',
    maxItems: 'Maximum items',
    itemPerPage: 'Items per page',
    selectMode: 'Select mode',
    verticalAlignment: 'Vertical alignment',
    horizontalAlignment: 'Horizontal alignment',
    verticalSpacing: 'Vertical spacing',
    horizontalSpacing: 'Horizontal spacing',
    differentOddEvenItems: 'Different odd & even items',
    mouseOverStyle: 'Mouseover style',
    selectedStyle: 'Selected style',
    pagingStyle: 'Paging style',
    scroll: 'Scroll',
    multiPage: 'Multi-page',
    pageTransition: 'Page transition',
    off: 'Off',
    on: 'On',
    chooseTemplateTip: 'Select a template',
    listUseGuide: "To customize the list design, change the layout of widgets in the first list item by moving default widgets' positions and drag-and-drop new widgets from the Insert widget pane. Once the List widget data is selected, widgets in the first item will inherit the same data and configure the theme individually to populate text or images.",
    customListDesign: 'or customize your list design',
    resettingTheTemplate: 'Select another template ',
    emptyTemplate: 'Empty template',
    waitingForDatasource: 'Waiting for data source',
    zeroHint: 'Zero is infinite',
    selectSortFields: 'Select sorting fields',
    sortSelected: '{selectedCount} items selected',
    chooseSearchingFields: 'Select searching fields',
    listSelectSearchFields: 'Select searching fields',
    searchSelected: '{selectedCount} items selected',
    scrollBar: 'Scroll bar',
    navigator: 'Navigator',
    itemHeight: 'Item height',
    itemWidth: 'Item width',
    lockItemRatio: 'Lock width / height ratio',
    listStep: 'Step',
    listShowSelectedOnly: 'Show selected',
    enableStatus: 'Enable {status}',
    itemStyle: 'Item style',
    outputDsLabel: '{label} loaded features',
    clearSelected: 'Clear selected',
    listAnimation: 'Animation',
    listTransition: 'Transition',
    // action setting
    triggerLayer: 'Trigger data',
    actionLayer: 'Action data',
    conditions: 'Conditions',
    relateMessage: 'Trigger / action connection',
    autoBind: 'Auto bound',
    triggerLayerField: 'Select a trigger field',
    equals: 'Equals',
    actionLayerField: 'Select an action field',
    moreConditions: 'More conditions',
    queryWithCurrentExtent: 'Query by current extent',
    setExprTip: 'Please set your expressions first',
    setLayer: 'Select data',
    noLayer: 'No data',
    noDataMessage: 'No data message',
    // template
    textPlaceholder: 'Double click to edit text',
    buttonText: 'Button',
    contentTextPlaceholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod',
    searctHint: 'Hint',
    listBlankStatus: 'Click the "{ButtonString}" button to add data source to this widget.',
    remindCustomLayoutTitle: 'Are you sure you want to use custom layout?',
    remindAutoLayoutTitle: 'Are you sure you want to use auto layout?',
    remindCustomLayoutText: 'By using custom layout, you can manually arrange widgets for this state.',
    remindCustomLayoutBottomText: 'However, widgets added in the regular state will not be automatically added here. Alternatively, you can manually select the widget on the regular state, click on the link button and apply that widget here.',
    remindAutoLayoutText: 'By using auto layout, widgets wil be synced with those on the regular state and arranged automatically.',
    lastUpdateText: 'Last update text',
    emptyTemplateCheckboxString: 'Remove default widgets from template',
    layoutRow: 'Row',
    layoutColumn: 'Column',
    layoutGrid: 'Grid',
    sizeAspectRatio: 'Aspect ratio',
    listKeepAspectRatio: 'Keep aspect ratio',
    listAligment: 'Aligment',
    gridItemSize: 'Item size',
    listRowTemplateTitle: 'Row template {index}',
    listColumuTemplateTitle: 'Column template {index}',
    listGridTemplateTitle: 'Grid template {index}'
});


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/utils/utils.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/utils/utils.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWidgetJsonById": () => (/* binding */ getWidgetJsonById),
/* harmony export */   "setLayoutAuto": () => (/* binding */ setLayoutAuto),
/* harmony export */   "setLayoutCustom": () => (/* binding */ setLayoutCustom)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");


const setLayoutAuto = (option) => {
    const { layout, desLayoutId, config, widgetId, appConfig, status } = option;
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
    const widgetJson = getWidgetJsonById(appConfig, widgetId);
    action.removeLayout(desLayoutId, false);
    const newConfig = config.setIn(['cardConfigs', status, 'listLayout'], layout);
    let udpateWidgetJson = widgetJson.setIn(['layouts', status], {});
    udpateWidgetJson = udpateWidgetJson.setIn(['config'], newConfig);
    action.editWidget(udpateWidgetJson === null || udpateWidgetJson === void 0 ? void 0 : udpateWidgetJson.asMutable({ deep: true })).exec();
};
const setLayoutCustom = (option) => {
    const { layout, regularLayoutId, config, widgetId, appConfig, status, label } = option;
    const browserSizeMode = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.browserSizeMode;
    const widgetJson = getWidgetJsonById(appConfig, widgetId);
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
    const newLayoutJson = action.duplicateLayout(regularLayoutId, false);
    action.editLayoutLabel({ layoutId: newLayoutJson.id }, label);
    const preLayoutId = appConfig.widgets[widgetId].layouts[status][browserSizeMode];
    preLayoutId && action.removeLayout(preLayoutId, true);
    const newConfig = config.setIn(['cardConfigs', status, 'listLayout'], layout);
    let udpateWidgetJson = widgetJson.setIn(['layouts', status, browserSizeMode], newLayoutJson.id);
    udpateWidgetJson = udpateWidgetJson.setIn(['config'], newConfig);
    action.editWidget(udpateWidgetJson === null || udpateWidgetJson === void 0 ? void 0 : udpateWidgetJson.asMutable({ deep: true }));
    //After `duplicateLayoutItems`, the parent of the layout need to update,
    //we need to call the `buildLayoutStructure` method again to reconstruct it
    action.clearLayoutStructure(newLayoutJson.id, browserSizeMode, true);
    action.buildLayoutStructure(newLayoutJson.id, browserSizeMode, true);
    action.exec();
};
const getWidgetJsonById = (appConfig, widgetId) => {
    const widgets = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets;
    const widgetJson = widgets === null || widgets === void 0 ? void 0 : widgets[widgetId];
    return widgetJson;
};


/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/column.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/column.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAwCAYAAADab77TAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7dGxDYAwEARBm3Jd0LcLDRARodVMeNFJu8859/qRmdlvu5/fXIs0geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEjnsAMWMKnWC8ndoAAAAASUVORK5CYII="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/grid.png":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/grid.png ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAAwCAYAAADEpo5gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7dohEoAwDADBluf2Qf0uKGawCBA3uy4q4kxE5lrrHD/Ye8/nbO+3jkGSsFHCRgkbJWyUsFHCRgkbJWyUsFHCRgkbJWyUsFHCRgkbJWyUsFHCRgkbJSwAwAvTR35r781VHCVslLBRwkYJGyVslLBRwkYJGyVslLBRwkYJGyVslLBRwkYJGyVslLBRwkYJG3UBOBkc0V7p4QQAAAAASUVORK5CYII="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/row.png":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/row.png ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAyCAYAAACXpx/YAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgB7dqxEQAgEMMwYNzfv4cpaHzSCm5SZM/MXWSdRZrAcQLHCRwncJzAcQLHCRwncJzAcQLHCRwnMADAB9ujo82KjhM4TuA4geMEjhM4TuA4geMEjhM4TuA4geMEBgD4wKMjzoqOEzhO4DiB4wSOEzhO4DiB4wSOEzhO4DiB4wSOeyI1Bwm44c5ZAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style1.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style1.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style2.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style2.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAYAAACr+O9WAAAAAXNSR0IArs4c6QAABRVJREFUeAHtmz1PFEEYxwcwB5WNR4ESNPEDaKLmChtKGyN+AOmFkECCjbGgsCSh4MWeLyBWFLxETEg4BIINBYQgBIXiJEBC4h0B/D94hwvs4dzd7O6z5D/JhtnZmXme+f2Z3Xk7YxhIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIAASqrguFjo6OB0dHRy1ozyNct+Wqqqq6dXJy8gvxn/lrvqamZqS/v/8b7mMbYi0ahLoJUbpxteK6a6sCxFzHNYyrFwLu25bTki+WovX09CQymczr4+PjdwCZrABmprq6+n0ymfyAOnMV1BNq0diJ1tXVdSeXy42gZz12RQo9bi6RSLT09fX9cFVnkPXESrT29vYUxPoIIA0BQNmCeC8HBwfTAdTttMrYiJYX7DNaX+eUwPnKfkO4Zu3CVZ/3WeedvBLzPSxIwaTxdWJH7Okk8dcr9aLJoCObzX6Cu0G8Ev20aZBvptj1e6ghTb1oMkoEKJl7hRZkkJO3G5rNUgyp/qbJPAwT5lU0qJJhfSk8vHkzmIjf1ziPU93TMA97E5FgIl4SPa7bq6KWuGrRAOlVlKAgWmuU9ovZVitaW1vbQ0CzXpoq1kBJxyv2qsdFn4l9WdMsmiGiB2pFA48XrphMTk6atbW1sqrLL0KXVTaoQppFczJiXF5eNisrK0aEOzg4KIejEz/KMVysjGbRZHulpLCxsWHkKoT9/X0zNTV1eou5npmYmDB45RUe2/4t2Q/bisvNd21E29vbM2NjY6eXxDHyNOPj4+bw8PCMzebmpllcXDy7t4yoE+2GpeOhZ8MaoGxgWtkVYUZHR430JgkSb2pqMtvb25fKp9Np09jYaOrr6y8980sQP/zSo0xT29MgmOw4WwX5Xu3s7JzllXixHiU9UHqktweeFfSJlOKHT/FAktSKhtbKEYH/hoWFBbO6Kosm9mF3d9dMT0/bFrDyw7YyF/liLZoMOmZmZsrisLS0ZDsNUCea2m8alJjH9fwqReS7hUn4VVlcPBM/VAW1PU1OTWkgpcUPLwvVq/zYrf6OgYCTpSxvo23jGDmuYxf7nm3+sPKp7WkCANCGwwLhZydq+34+SZp20XrhY6aY8wGnZyCa2FcXatR55HFodnY2m0qlcnhFPvMkhxLFeci3AwMDX0IxVqIR1T1N2iIHSfEfP1diuyrKLvbEbkWVBFhY9UCk0G45HYUlqq+4D+Nwz1Ztbe0TzQdXYyGaiMdzj4V/YeUDkX9uGiMHSPHaakbaljfdYVxOGKs/qCrtVf9N84oiwsmry/U3TuqTeqV+rz2t8ViJJhDlW4NtlacY3XXittLpgPxqplPq0/wNu/jPE5tv2kXH5Z6/T/OjEqM0Ob0Fd+UwkJzpkN1m31+CIv3T0NBQydvXKMdAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAroIBLo1g5V3u98q6WLi3BvsKjjlHLtNUOdEY1ghRaNoMSQQQ5fZ0yhaDAnQZRIgARIgARIggcgIOJ2pB9GKKFdVXK9kuOLDIb8rkiHWQ9FChO3KFEVzRTLEeihaiLBdmaJorkiyHhIgARIgARIgARIgARIgARIgARIgARIggQAJRLqfFuVemUumYe+7ce3RpXqsiwRIgARIgARIgASuO4FIh/w2cKOcFoQ9lLfhIXk45LclxXwkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkoI3AH1TsgHSvPXgNAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style3.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style3.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAYAAACr+O9WAAAAAXNSR0IArs4c6QAAA9BJREFUeAHtnb1OWzEUgJ2kazt16RP0BSrIUilv0q0DiLFLpT5BRxAvUHXKxIaiSAVlS8JIhmSrFAFCYgBBJGiS+kS4ahICxql67rn5LF1Z98ec4++LHd8M2DkKBCAAAQhAAAIQgAAEIAABCEAAAhBYNQKF2A5vbGyMY5/luTQCu7u7UT6KaX+eVpoEkKZJPzE20hLBaTZDmib9xNhISwSn2QxpmvQTYyMtEZxmM6Rp0k+MjbREcJrNkKZJPzE20hLBaTZDmib9xNhISwSn2QxpmvQTYyMtEZxmM6Rp0k+MjbREcJrNkKZJPzE20hLBaTZDmib9xNgrIa3dbruTk5NERNlrlntpIqvVarl6ve5ub2+zZyAho9xIG41Gc90XSSJrPB67q6srd3h4OPeMxQu5kDYcDt3e3p7r9/tTDkSSyAql1+u5brcbTs3WuZDWaDQm31m1Wu2PJJEjkmaLiLy8vJy9bOrcvLTj42PX6XQm0AeDgdvf33cXFxcLp8K7u7vJlPnQdGrFnGlpp6enTkbZ3+X8/NxVq1UnchYVaScrSqvFrLTr6+vJqHpoxMh33FPl6OjI7GuASWkiRabBm5ubp9wsvC8rSquvASalyZR4dna2UEjsDauvAS9iO5il5yqVipNjVYvJkbaqskK/kRZIGKqRZkhWSBVpgYShGmmGZIVUkRZIGKqRZkhWSBVpgYShGmmGZIVUkRZIGKqRZkhWSBVpgYShGmmGZIVUkRZIGKqRZkhWSBVpgYShGmmGZIVUkRZIGKqRZkhWSBVpgYShGmmGZJEqBCAAAQhAAAIQUCcQteOCZMkOGPOuYnesmG+53BWW/MvxU2mNNBXsywVF2nL8VFojTQX7ckGRthw/WkMAAhCAAAQgAIHVIpCbn7G0flLS+Liw5NegTkwIQAACEIAABCYEMr96XKVVYexnktVjLCmegwAEIAABCEAAAhCAAAQg8H8IRL9ch3S2trbe+3+x/smfv/PHm3A9w7XswdUulUpft7e3p3deyHDSj6VWeuzm7L3Nzc3PfvOCb/76W3+8nL2f0XPJU/L9sLa29stvy2VeXPRIkxHmhR34TQjM/opSKBRGxWKxYn3ERQuQKdGyMJkFJP/7qV1OzZZoab6H8h2Wh2K+H8+RlgdhuejDc6TZ3btqWpX5fkRLkyWzfJFP99/WmeQv/bCV9Xy20Uv+ZrP5c319XTYmq/gjetU5H1Lnyv0H7svOzs53nQz+XdRoaRLSi2uUy+UffhX22p++8oeFdzV5uT7wI+xjHoT5vlAgAAEIQAACEICAHoHf4pTzNTQ3MGIAAAAASUVORK5CYII="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style4.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style4.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABtCAYAAACr+O9WAAAAAXNSR0IArs4c6QAAAzlJREFUeAHt3L1rWlEYx/H4QunkWMgQsGOXZqmDQu3UvyKdM/iGOKfg36AoXQt1Edq1U6E4FFQ6lK6dzOgWJ9/7HFAQuS9quO3zJN9A0HvOuddzP7/c43MNydkZXwgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCBgXSBh/QSOmX+xWLzJZrOLfr9/e8x+2sbGtE0oqvlUKpXcYrHoyfFvE4nEZbPZvIvqtaI+bjzqF9Bw/HK5nJLAOjIXt7KkV6tVW8O8Tp3DowhtE1J6i7Rer69KpdK77ba1R9Oh1ev1ZBh4oVC4ciHtj5O2lgT3fL/dwrbZ0CSwJ+Px+JssfW/8oKvVajoWi3kuhRJaSq7AT91u11wxZjY0Cawp8Pnlctmt1WoX+8G5MGazWceFs9+3s53r9Xrvd7ZNPDUZmixr1xLG9Ub42XQ6/SJX3tNd8U0Yud02r+dytd24ytKrT2ubudDkXisrgTV3QWX7lVx5H7ZtLgQXxnY75DHhKktXYYaMU9Nt6j5N3qPOZcn7KXrnXoLxeLwi72EfZcn8Jf1przF+bbJfp9VqmagozbwJu8JjMpl8FfQXfvDS/lausLw8XgaM8et6mclk/gyHw99+A7S0m1keN4VHNghOlkl3C/A6aExQn6s0XcUZNEZDn4nQ9gqPyNwk9JSrOLXfBqhfHl3hISl15ftfzfViNBqtB4PB98h+Ou55YNWFSFjhcc9zD9p9mUwm841G40fQoP/Vp3Z5dIXHfD7/LDCelWLEYKpvA9SGdkjhEXFw5n8bELEPh0cAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBA4TeCov5qR/8mxPu1l2CtMoN1uH5yF2j/ACDvJx9xPaAbTJzRCMyhgcMpcaYRmUIApI4AAAgg8FIGD78LdCT+UT0SO+fRBY9BUjxpTCZkToYUAaewmNI2phMyJ0EKANHYTmsZUmBMCCCCAAAIIIIAAAggggAACCEQr8BeAyN98eFkLQQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style5.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style5.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAABGCAYAAADcgzhoAAAAAXNSR0IArs4c6QAAA3VJREFUeAHtm8FqwkAURafSDxPEvd/hB/kTrtyJuBGX6lIXuhYVd4oKitpOIKW2sYWJybyZdwaKGDvJe+f2NMmoxjAgAAExBN5sJc1m8y6mIgGFtFqthIuAUihBGYGKsn5pFwKiCSCk6HgoThsBhNSWOP2KJoCQouOhOG0EEFJb4vQrmgBCio6H4rQRQEhtidOvaAIIKToeitNGACG1JU6/ogkgpOh4KE4bAYTUljj9iiaAkKLjoThtBBBSW+L0K5oAQoqOh+K0EUBIbYnTr2gCCCk6HorTRuBdW8Ov7Jcvdj/S5IvdjzxcnnGGdKHGHAgURAAhCwLLbiHgQgAhXagxBwIFEUDIgsCyWwi4EEBIF2rMgUBBBFhlzQGWVcUc8JiaSYAzZCYWNkLADwGE9MOdo0IgkwBCZmJhIwT8EEBIP9w5KgQyCSBkJhY2QsAPAZFCjsdjs1qt/BDhqBDwSECckFbE0Whk+v2+OZ/PHtFwaAiUT8CbkLfb7Ve3VkAr4v1+N/v93gwGg1+/wwYIxEzAi5DX69V0Oh2zXC4f2FoBrYjpWCwWZj6fp095hED0BLwIORwOk3vEXq/3JaAVzwr4c1hJd7vdz808h0CUBEr/6Nx0OjWz2SyBeTqdTLfbNbVa7enl6eVySS5jG42GqVS8/P94GjxfUH6Khhc+Cbh8tLLUv/D1em3s2fH72G63pt1uGyves2Hn2ZVXBgRiJ1CakIfDITkbZi3m2HvK/8ZkMuGtkP8g8XrwBEoR0gpnL02Px6MzMLvyylshzviYGAiBUu4h7WXqZrPJjSR9K6Rer+fe1yt24HKP8Irjso94CZQiZLVaNfaHAQEI/E2glEvWv0vgVQhAICWAkCkJHiEggABCCgiBEiCQEkDIlASPEBBAoJRFHQF9FlICn9QpBGs0O3VZhecMGU38NBIDAYSMIUV6iIYAQkYTJY3EQIB7yBwputwj5DgcUxUQ4AypIGRaDIcAQoaTFZUqIICQCkKmxXAIIGQ4WVGpAgIIqSBkWgyHAEKGkxWVKiCAkApCpsVwCCBkOFlRqQICCKkgZFoMhwBChpMVlSoggJAKQqbFcAggZDhZUakCAgipIGRaDIcAQoaTFZUqIICQCkKmxXAIIGQ4WVGpAgIIqSBkWgyHAEKGkxWVKiCAkApCpkUIQAACEHAg8AHK360+CmaefwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style6.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style6.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style7.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style7.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAwCAYAAAAB+Na0AAAAAXNSR0IArs4c6QAAAxBJREFUeAHt3D2LGkEYwPHxEhvTCCpC2kA6wSLY5EtcAuJHELQ2XGkZsAwKfonkSkHsxMazUiQgYhd8K+wEIzHzhFW8i7v4MnOc+h+425eZeXb9ycPsze6eUhQEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIGXI+B7jlMpl8v+drt9u1qtbvXxPuift85xf+nlg8/nu4/FYvfpdPq3s58FAlcpYD0hs9nsJy1b0Mn4zktYJ2Vf1+eKxeIPr3bUIXDJAtYSMp/P30wmk686EXOHAOrELEQikTvd/88h/WiLwCUIvLb1IY5JRjkXSWDdV1a/yC8KAtckYGWElMtUnVjfT4HUI+VnLl9PEaTvOQrcmD5pmcDRMQsG4hacWAZCEQKB8xAwnpDObKrnBM4+NDIJJLH2aUsbBC5FwHhC6kTaK4mWy6Xq9XqejvvG8gxCJQJnJGBjUkfuM+4si8VCSSIGAgHVaDRUt9tVwWBQ6VnVne31TtdYbh3Yj8A5C9hIyPVN/0cuerRTtVpNzedzFY/HVafT+VdfrVZVMplUfr/86flf2Rlru1Umk1ltb7OOwHMJlEol45Oixi9Z3TBarZYaDAZqOByqSqWyaTabzVS9Xt9ss4LANQvYGCHlcbj326jT6VT1+30VCoW2d2/Wx+OxGo1GKhqNbvY5KxKLgsDVCNhIyAet9yghw+GwSqVSx6BKLM9i47LB84BUImBRwPglqzwobup8TcYydU7EQcCmgPGElLc2dCLJg+InFYkhsU4KQmcEzkzAeEI6r1Ad9EC5i1mO17FcZNh9sQKvbHyyZrP5M5FIvNGxPx4TX4+OBf0c67dj+tIHgXMWMD5CrjHkFSpJrPX2vkvpI333bU87BC5JwPiNzac4vKD8VIRtBNwFrCekHJp/4eH+BVCDAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIvVeAvrbu/6yYU+xUAAAAASUVORK5CYII="

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style8.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style8.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/assets/style9.png":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/assets/style9.png ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADaCAYAAADAHVzbAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPVSURBVHgB7dwxSixZAEbh6zAmGmig0JmJBgaamGhibOxC3YmLcAfuwKEEwXHU1/Oefaoavg8EEdPDvfV3Uzur1eplABv11wA2TmgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhLbFLi8vx97e3mD5hLalTk5Oxunp6bi6uhosn9C20HSKnZ+fv/5+fHw8Li4uBssmtC10fX39ryvj2dnZODo6GiyX0LbMdJIdHh7+5+/TFXJ3d3ewTEJbgHUDeX9l/Gh/f/91HGGZhDazg4ODcXd398v1cIrx9vb22/95G0hYHqHNaIrr5ubmNaLpueu7k23dKX868Uz+yyO0Gb0fNabnrq+uftNJNf2sY4rV5L88QpvJFNXHUeOzq993z2VfMfkvj9BmMMX01bPUFOD7qf7jlL8uk/+yCC02jR+/Wgen57a3k+yzKX9dJv/l2FmtVi+DxBTPtByuc0I9Pz//UWRvnp6exuPj42BeTrTQ/7kG/kRkE5P/Mggt8tn4UTH5z09oge/Gj4LJf35C27B1xo+CyX9eQtugt29+LIXJfz5C26Df/Qxsk0z+8xDahsw5fnzHt/zn4XM0CDjRICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDgNAg8Pf4Yff39wO23cPDw/hJTjQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAkKDwM5qtXoZwEY50SAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0C3uu4MD/9PkGWwYkGAaFBQGgQEBoEhAYBoUFAaBAQGgSEBgGhQUBoEPBeRwg40SAgNAgIDQJCg4DQICA0CAgNAkKDgNAgIDQICA0CQoOA0CAgNAgIDQJCg4DQICA0CAgNAv8A0Wg6GLxUa3gAAAAASUVORK5CYII="

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

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

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

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/advanced/sql-expression-builder":
/*!**********************************************************!*\
  !*** external "jimu-ui/advanced/sql-expression-builder" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__;

/***/ }),

/***/ "jimu-ui/advanced/style-setting-components":
/*!************************************************************!*\
  !*** external "jimu-ui/advanced/style-setting-components" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_style_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/sql-expression-runtime":
/*!*******************************************************!*\
  !*** external "jimu-ui/basic/sql-expression-runtime" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_sql_expression_runtime__;

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style0.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style0.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_4":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"top":"14.65%","width":"96px","height":"96px","left":"50%"},"widgetId":"widget_2","setting":{"lockParent":true,"vCenter":false,"hCenter":true,"widthMode":"ratio","aspectRatio":1,"autoProps":{"left":false,"right":true}},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"14.65%","top":"175px","width":"158px","height":"10.99%","right":"14.65%","bottom":"8.79%"},"widgetId":"widget_3","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":true,"top":true}},"isPending":false},"3":{"type":"WIDGET","bbox":{"left":"7.58%","top":"53.11%","width":"154px","height":"50px","right":"7.58%","bottom":"25.64%"},"widgetId":"widget_4","setting":{"lockParent":true,"autoProps":{"width":true,"height":true},"vCenter":false}}},"order":["0","2","3"],"label":"Regular"}},"widgets":{"widget_x":{"config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE0","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"HORIZON","layoutType":"COLUMN","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":200,"height":275}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"filters":null,"sqlExprObj":null,"sortFields":null},"layouts":{"REGULAR":{"LARGE":"layout_4"}}},"widget_2":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{"cropParam":{"cropShape":"circle","svgPath":"M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z","svgViewBox":"0 0 28 28"}}},"styleConfig":{}}},"widget_3":{"uri":"widgets/common/button/","config":{"functionConfig":{"text":"${buttonText}","toolTip":"","linkParam":{}},"styleConfig":{"name":"Default","themeStyle":{},"customStyle":{"regular":{},"hover":{},"clicked":{}}}}},"widget_4":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p style=\\"text-align: center;\\"><span style=\\"font-size: 16px;color: var(--dark-800);\\">${textPlaceholder}</span></p>","style":{"verticalAlign":"start","wrap":true}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style1.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style1.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_5":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"top":"14.65%","width":"96px","height":"96px","left":"50%"},"widgetId":"widget_7","setting":{"lockParent":true,"vCenter":false,"hCenter":true,"heightMode":"ratio","aspectRatio":1,"autoProps":{"left":false,"right":true}},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"5.05%","top":"69.60%","width":"196px","height":"70px","right":"5.05%","bottom":"7.33%"},"widgetId":"widget_5","setting":{"lockParent":true,"autoProps":{"width":true,"top":false,"height":true}}},"3":{"type":"WIDGET","bbox":{"left":"5.56%","top":"53.11%","width":"176px","height":"20.51%","right":"5.56%"},"widgetId":"widget_6","setting":{"lockParent":true,"autoProps":{"width":true},"vCenter":false}}},"order":["0","2","3"],"label":"Regular"}},"widgets":{"widget_x":{"config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE1","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"HORIZON","layoutType":"COLUMN","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":200,"height":275}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"}},"layouts":{"REGULAR":{"LARGE":"layout_5"}}},"widget_5":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p style=\\"text-align: center;\\"><span style=\\"font-size: 13px;color: var(--dark-800);\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum </span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_6":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p style=\\"text-align: center;\\"><span style=\\"font-size: 16px;color: var(--dark-800);\\">${textPlaceholder}</span></p>","style":{"verticalAlign":"start","wrap":true}}},"widget_7":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{"cropParam":{"cropShape":"circle","svgPath":"M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z","svgViewBox":"0 0 28 28"}}},"styleConfig":{}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style2.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style2.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_6":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"5.05%","top":"3.66%","width":"76px","height":"43.96%","right":"5.05%"},"widgetId":"widget_8","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":true}},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"3.54%","top":"62.27%","width":"174px","height":"50px","right":"3.54%","bottom":"18.32%"},"widgetId":"widget_9","setting":{"lockParent":true,"autoProps":{"width":true,"height":true},"vCenter":false,"hCenter":false},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"5.05%","top":"210px","width":"196px","height":"10.99%","right":"5.05%","bottom":"3.66%"},"widgetId":"widget_11","setting":{"lockParent":true,"autoProps":{"width":true,"top":true}}},"3":{"type":"WIDGET","bbox":{"left":"3.54%","top":"52.75%","width":"180px","height":"10.99%","right":"3.54%"},"widgetId":"widget_10","setting":{"lockParent":true,"autoProps":{"width":true},"vCenter":false}}},"order":["0","1","2","3"],"label":"Regular"}},"widgets":{"widget_x":{"config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE2","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"HORIZON","layoutType":"COLUMN","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":200,"height":275}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"}},"layouts":{"REGULAR":{"LARGE":"layout_6"}}},"widget_8":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{}},"styleConfig":{}}},"widget_9":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p><span style=\\"font-size: 13px;color: var(--dark-800);\\">Lorem ipsum dolor sit amet, consectetur  adipiscing elit</span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_10":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p><span style=\\"font-size: 16px;color: var(--dark-800);\\">${textPlaceholder}</span></p>","style":{"verticalAlign":"start","wrap":true}}},"widget_11":{"uri":"widgets/common/button/","config":{"functionConfig":{"text":"${buttonText}","toolTip":"","linkParam":{}},"styleConfig":{"name":"Default","themeStyle":{},"customStyle":{"regular":{},"hover":{},"clicked":{}}}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style3.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style3.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_7":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"0.00%","top":"0.00%","width":"76px","height":"133px","right":"0.00%","bottom":"0.00%"},"widgetId":"widget_12","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":true,"height":true}},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"3.54%","top":"150px","width":"156px","height":"12%","right":"3.54%","bottom":"20.15%"},"widgetId":"widget_13","setting":{"lockParent":true,"autoProps":{"width":true,"top":true},"vCenter":false,"hCenter":false},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"3.54%","top":"225px","width":"176px","height":"18.32%","bottom":"1.83%","right":"3.54%"},"widgetId":"widget_14","setting":{"lockParent":true,"autoProps":{"top":true,"width":true},"vCenter":false}}},"order":["0","1","2"],"label":"Regular"}},"widgets":{"widget_x":{"config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE3","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"HORIZON","layoutType":"COLUMN","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":200,"height":275}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":200,"height":275}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"}},"layouts":{"REGULAR":{"LARGE":"layout_7"}}},"widget_12":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{}},"styleConfig":{}}},"widget_13":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<h5><span style=\\"font-size: 15px;color: var(--dark-800);\\">${textPlaceholder}</span></h5>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_14":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p><span style=\\"font-size: 13px;color: var(--dark-800);\\">Lorem ipsum dolor sit amet, consectetur adipiscing</span></p>","style":{"verticalAlign":"start","wrap":true}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style4.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style4.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_26":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"0.00%","top":"0.00%","width":"180.00px","height":"133px","right":"2.79%","bottom":"0.00%"},"widgetId":"widget_23","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":false,"height":true}},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"205.00px","top":"10.00%","width":"465px","height":"30%","right":"20.00px"},"widgetId":"widget_24","setting":{"lockParent":true,"autoProps":{"width":true},"vCenter":false,"hCenter":false},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"205.00px","top":"38.00%","width":"214px","height":"57px","right":"20.00px","bottom":"5.00%"},"widgetId":"widget_25","setting":{"lockParent":true,"hCenter":false,"vCenter":false,"autoProps":{"width":true,"height":true,"right":false,"bottom":false},"order":0,"lockLayout":false},"isPending":false}},"order":["0","1","2"],"label":"Regular"}},"widgets":{"widget_x":{"uri":"widgets/common/list/","config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"layoutType":"ROW","itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE4","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"VERTICAL","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":360.52,"height":110}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":360.52,"height":110}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":360.52,"height":110}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"isCheckEmptyTemplate":false,"searchFields":null,"filters":null,"sorts":null,"isShowAutoRefresh":false,"keepAspectRatio":false},"layouts":{"REGULAR":{"LARGE":"layout_26"},"SELECTED":{},"HOVER":{}}},"widget_23":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{}},"styleConfig":{}}},"widget_24":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<h5><span style=\\"font-size: 15px;color: var(--dark-800);\\">${textPlaceholder}</span></h5>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_25":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p ><span style=\\"font-size: 13px;color: var(--dark-800);\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style5.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style5.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_20":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"22px","top":"50%","width":"50px","height":"50px","right":"87.7%","bottom":"22.0%"},"widgetId":"widget_15","setting":{"lockParent":true,"vCenter":true,"hCenter":false,"autoProps":{"width":"CUSTOM","height":"CUSTOM","top":false,"bottom":true,"left":false,"right":true},"heightMode":"ratio","aspectRatio":1},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"85.00px","width":"36.5%","height":"40px","right":"170.00px","top":"50%","bottom":"5.00px"},"widgetId":"widget_16","setting":{"lockParent":true,"autoProps":{"width":true,"height":"CUSTOM","top":false,"bottom":true},"vCenter":true,"hCenter":false},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":400,"top":"50%","width":"120.00px","height":"34.88%","right":"30.00px","bottom":"28.4944%"},"widgetId":"widget_17","setting":{"lockParent":true,"autoProps":{"width":false,"height":false,"left":true,"right":false,"top":false,"bottom":true},"vCenter":true,"hCenter":false}}},"order":["0","1","2"],"label":"Regular"}},"widgets":{"widget_x":{"uri":"widgets/common/list/","config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE5","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"VERTICAL","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":660,"height":88}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":660,"height":88}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":660,"height":88}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"isCheckEmptyTemplate":false,"searchFields":null,"filters":null,"sorts":null,"isShowAutoRefresh":false,"layoutType":"ROW","keepAspectRatio":false},"layouts":{"REGULAR":{"LARGE":"layout_20"},"SELECTED":{},"HOVER":{}}},"widget_15":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{"cropParam":{"cropShape":"circle","svgPath":"M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z","svgViewBox":"0 0 28 28"}}},"styleConfig":{}}},"widget_16":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p><span style=\\"font-size: 16px;color: var(--dark-800);\\">${textPlaceholder}</span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_17":{"uri":"widgets/common/button/","config":{"functionConfig":{"text":"${buttonText}","toolTip":"","linkParam":{}},"styleConfig":{"name":"Default","themeStyle":{},"customStyle":{"regular":{},"hover":{},"clicked":{}}}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style6.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style6.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_32":{"type":"FIXED","content":{"2":{"type":"WIDGET","bbox":{"left":"36px","top":"50%","width":"352px","height":"100.00%","right":"24px","bottom":"0.00%"},"widgetId":"widget_31","setting":{"lockParent":true,"hCenter":false,"vCenter":true,"autoProps":{"width":true,"height":false,"top":false,"bottom":true}},"isPending":false},"3":{"type":"WIDGET","bbox":{"left":"10px","top":"50%","width":"22.00px","height":"22px","right":"0.00%","bottom":"18.75%"},"widgetId":"widget_32","setting":{"lockParent":true,"autoProps":{"height":"CUSTOM","width":"CUSTOM","top":false,"bottom":true},"vCenter":true,"heightMode":"ratio","aspectRatio":1}}},"order":["2","3"],"label":"Regular"}},"widgets":{"widget_x":{"uri":"widgets/common/list/","config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE6","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"VERTICAL","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":360,"height":32}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":360,"height":32}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":360,"height":32}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"isCheckEmptyTemplate":false,"searchFields":null,"filters":null,"sorts":null,"isShowAutoRefresh":false,"layoutType":"ROW","keepAspectRatio":false},"layouts":{"REGULAR":{"LARGE":"layout_32"},"SELECTED":{},"HOVER":{}}},"widget_31":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p><span style=\\"font-size: 13px;color: var(--dark-800);\\">Lorem ipsum dolor sit amet</span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_32":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{"cropParam":{"cropShape":"circle","svgPath":"M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14z","svgViewBox":"0 0 28 28"}}},"styleConfig":{}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style7.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style7.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"widgets":{"widget_x":{}}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style8.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style8.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_11":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"0.00%","top":"0.00%","width":"37.7358%","height":"133px","right":"2.79%","bottom":"0.00%"},"widgetId":"widget_5","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":false,"height":true}},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"40.0%","top":"7.7%","width":"181px","height":"26.2%","right":"3.2%","bottom":"66.1%"},"widgetId":"widget_6","setting":{"lockParent":true,"autoProps":{"width":true,"right":false,"left":true,"top":false,"bottom":true},"vCenter":false,"hCenter":false},"isPending":false},"2":{"type":"WIDGET","bbox":{"left":"40.7%","top":"29.3%","width":"178px","height":"84px","right":"3.3%","bottom":"17.8%"},"widgetId":"widget_7","setting":{"lockParent":true,"hCenter":false,"vCenter":false,"autoProps":{"width":true,"height":true,"right":false,"bottom":false,"left":true,"top":true},"order":0,"lockLayout":false},"isPending":false},"3":{"type":"WIDGET","bbox":{"left":"76.1%","right":"5.0%","top":"78.5%","bottom":"5.1%","width":"60px","height":"26px"},"widgetId":"widget_8","setting":{"lockParent":true,"autoProps":{"right":false,"left":true,"top":true,"bottom":false},"vCenter":false,"hCenter":false},"isPending":false}},"order":["0","1","2","3"],"label":"Regular"}},"widgets":{"widget_x":{"uri":"widgets/common/list/","config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"layoutType":"GRID","gridAlignment":"center","itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE8","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"VERTICAL","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":"50%","height":"160px"}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":"50%","height":"160px"}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":"50%","height":"160px"}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"isCheckEmptyTemplate":false,"filters":null,"isShowAutoRefresh":false,"sqlExprObj":null,"sortFields":null},"layouts":{"REGULAR":{"LARGE":"layout_11"},"SELECTED":{},"HOVER":{}},"outputDataSources":[]},"widget_5":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{}},"styleConfig":{}}},"widget_6":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<h5><span style=\\"font-size: 15px;color: var(--dark-800);\\">${textPlaceholder}</span></h5>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_7":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<p ><span style=\\"font-size: 13px;color: var(--dark-800);\\">${contentTextPlaceholder}</span></p>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}},"widget_8":{"uri":"widgets/common/button/","config":{"functionConfig":{},"styleConfig":{"themeStyle":{"quickStyleType":"primary"},"useCustom":false,"customStyle":{"regular":{"iconProps":{"color":"#fff","size":14}},"hover":{"iconProps":{"size":14}}}}}}},"views":{},"sections":{}}}');

/***/ }),

/***/ "./your-extensions/widgets/list-112/src/setting/template/card-style9.json":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/template/card-style9.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"widgetId":"widget_x","config":{"layouts":{"layout_17":{"type":"FIXED","content":{"0":{"type":"WIDGET","bbox":{"left":"0.0%","top":"0.0%","width":"100.0%","height":"198px","right":"-0.0%","bottom":"0.0%"},"widgetId":"widget_17","setting":{"lockParent":true,"vCenter":false,"hCenter":false,"autoProps":{"width":false,"height":true,"right":false,"left":true,"top":true,"bottom":false}},"isPending":false},"1":{"type":"WIDGET","bbox":{"left":"3.2%","top":"75.6%","width":"183px","height":"17.5%","right":"4.5%","bottom":"14px"},"widgetId":"widget_18","setting":{"lockParent":true,"autoProps":{"width":true,"left":false,"right":true,"top":true,"bottom":false},"vCenter":false,"hCenter":false},"isPending":false}},"order":["0","1"],"label":"Regular"}},"widgets":{"widget_x":{"uri":"widgets/common/list/","config":{"maxItems":100,"space":10,"verticalSpace":10,"horizontalSpace":10,"layoutType":"GRID","gridAlignment":"center","itemsPerPage":10,"isItemStyleConfirm":false,"isInitialed":false,"pageStyle":"SCROLL","itemStyle":"STYLE9","hoverType":"HOVER0","selectedStyle":"STYLE0","differentOddEven":false,"scrollBarOpen":true,"direction":"VERTICAL","alignType":"CENTER","scrollStep":2,"cardConfigs":{"REGULAR":{"cardSize":{"LARGE":{"width":"33%","height":"160px"}},"enable":true,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Custom"},"HOVER":{"cardSize":{"LARGE":{"width":"48.2%","height":"200px"}},"enable":false,"backgroundStyle":{"border":{"type":"solid","color":"var(--light-400)","width":"1px"}},"listLayout":"Auto"},"SELECTED":{"cardSize":{"LARGE":{"width":"48.2%","height":"200px"}},"backgroundStyle":{"border":{"type":"solid","color":"var(--primary-500)","width":"1px"}},"selectionMode":"SINGLE","listLayout":"Auto"}},"style":{"id":"default"},"isCheckEmptyTemplate":false,"filters":null,"isShowAutoRefresh":false,"sqlExprObj":null,"sortFields":null},"layouts":{"REGULAR":{"LARGE":"layout_17"},"SELECTED":{},"HOVER":{}},"outputDataSources":[]},"widget_17":{"uri":"widgets/common/image/","config":{"functionConfig":{"altText":"","toolTip":"","linkParam":{},"scale":"Fit","imageParam":{}},"styleConfig":{}}},"widget_18":{"uri":"widgets/common/text/","config":{"text":"","placeholder":"<h5><span style=\\"font-size: 15px;color: var(--dark-800);\\">${textPlaceholder}</span></h5>","style":{"verticalAlign":"start","wrap":true,"overflow":"scroll","padding":"p-1"}}}},"views":{},"sections":{}}}');

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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/setting/setting.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/advanced/style-setting-components */ "jimu-ui/advanced/style-setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/list-112/src/config.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/utils */ "./your-extensions/widgets/list-112/src/setting/utils/utils.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/list-112/src/setting/translations/default.ts");
/* harmony import */ var _components_switch_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/switch-layout */ "./your-extensions/widgets/list-112/src/setting/components/switch-layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jimu-ui/advanced/sql-expression-builder */ "jimu-ui/advanced/sql-expression-builder");
/* harmony import */ var _common_builder_support__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common-builder-support */ "./your-extensions/widgets/list-112/src/common-builder-support.tsx");
/* harmony import */ var jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jimu-ui/basic/sql-expression-runtime */ "jimu-ui/basic/sql-expression-runtime");
/* harmony import */ var _components_my_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-input */ "./your-extensions/widgets/list-112/src/setting/components/my-input.tsx");
/* harmony import */ var jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jimu-icons/outlined/suggested/info */ "./jimu-icons/outlined/suggested/info.tsx");
/* harmony import */ var jimu_icons_outlined_application_desktop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jimu-icons/outlined/application/desktop */ "./jimu-icons/outlined/application/desktop.tsx");
/* harmony import */ var jimu_icons_outlined_application_tablet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jimu-icons/outlined/application/tablet */ "./jimu-icons/outlined/application/tablet.tsx");
/* harmony import */ var jimu_icons_outlined_application_mobile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jimu-icons/outlined/application/mobile */ "./jimu-icons/outlined/application/mobile.tsx");
/* harmony import */ var jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jimu-icons/outlined/directional/right */ "./jimu-icons/outlined/directional/right.tsx");
/* harmony import */ var jimu_icons_outlined_application_click__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jimu-icons/outlined/application/click */ "./jimu-icons/outlined/application/click.tsx");
/* harmony import */ var jimu_icons_outlined_directional_arrow_left__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jimu-icons/outlined/directional/arrow-left */ "./jimu-icons/outlined/directional/arrow-left.tsx");
/* harmony import */ var jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jimu-icons/outlined/editor/lock */ "./jimu-icons/outlined/editor/lock.tsx");
/* harmony import */ var jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jimu-icons/outlined/editor/unlock */ "./jimu-icons/outlined/editor/unlock.tsx");
/** @jsx jsx */

























const prefix = 'jimu-widget-';
const originAllStyles = {
    STYLE0: __webpack_require__(/*! ./template/card-style0.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style0.json"),
    STYLE1: __webpack_require__(/*! ./template/card-style1.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style1.json"),
    STYLE2: __webpack_require__(/*! ./template/card-style2.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style2.json"),
    STYLE3: __webpack_require__(/*! ./template/card-style3.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style3.json"),
    STYLE4: __webpack_require__(/*! ./template/card-style4.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style4.json"),
    STYLE5: __webpack_require__(/*! ./template/card-style5.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style5.json"),
    STYLE6: __webpack_require__(/*! ./template/card-style6.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style6.json"),
    STYLE7: __webpack_require__(/*! ./template/card-style7.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style7.json"),
    STYLE8: __webpack_require__(/*! ./template/card-style8.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style8.json"),
    STYLE9: __webpack_require__(/*! ./template/card-style9.json */ "./your-extensions/widgets/list-112/src/setting/template/card-style9.json")
};
const defaultCardSize = {
    STYLE0: {
        width: 200,
        height: 275
    },
    STYLE1: {
        width: 200,
        height: 275
    },
    STYLE2: {
        width: 200,
        height: 275
    },
    STYLE3: {
        width: 200,
        height: 275
    },
    STYLE4: {
        width: 360.52,
        height: 110
    },
    STYLE5: {
        width: 320,
        height: 88
    },
    STYLE6: {
        width: 360,
        height: 32
    },
    STYLE7: {
        width: 360.52,
        height: 110
    },
    STYLE8: {
        width: '50%',
        height: 160
    },
    STYLE9: {
        width: '33%',
        height: 160
    }
};
const defaultCardLayout = {
    STYLE0: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column,
    STYLE1: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column,
    STYLE2: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column,
    STYLE3: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column,
    STYLE4: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row,
    STYLE5: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row,
    STYLE6: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row,
    STYLE7: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row,
    STYLE8: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID,
    STYLE9: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID
};
let AllStyles;
const MESSAGES = Object.assign({}, _translations_default__WEBPACK_IMPORTED_MODULE_9__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_5__.defaultMessages, jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.defaultMessages);
function initStyles(widgetId) {
    if (AllStyles) {
        return AllStyles;
    }
    AllStyles = {};
    Object.keys(originAllStyles).forEach(style => {
        AllStyles[style] = jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.templateUtils.processForTemplate(originAllStyles[style], widgetId, MESSAGES);
    });
}
const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer,
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer
]);
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.lastHoverLayout = {
            layout: [],
            widgets: {}
        };
        this.lastSelectedLayout = {
            layout: [],
            widgets: {}
        };
        this.onPropertyChange = (name, value) => {
            const { config } = this.props;
            if (value === config[name]) {
                return;
            }
            if (name === 'sorts' || name === 'filter' || name === 'searchFields') {
                this.needUpdateFields = true;
            }
            const newConfig = config.set(name, value);
            this.onConfigChange(newConfig);
        };
        this.changeUsedFields = () => {
            const { useDataSources } = this.props;
            if (useDataSources && useDataSources[0]) {
                const useDS = useDataSources[0].asMutable({ deep: true });
                useDS.fields = this.getAllFields();
                const alterProps = {
                    id: this.props.id,
                    useDataSources: [useDS]
                };
                this.props.onSettingChange(alterProps);
            }
        };
        this.onConfigChange = newConfig => {
            const alterProps = {
                id: this.props.id,
                config: newConfig
            };
            this.props.onSettingChange(alterProps);
        };
        this.onBackgroundStyleChange = (status, key, value) => {
            let { config } = this.props;
            config = config.setIn(['cardConfigs', status, 'backgroundStyle', key], value);
            this.onConfigChange(config);
        };
        this.onSelectionModeChange = evt => {
            const value = evt.target.value;
            this.changeSelectionMode(value);
        };
        this.changeSelectionMode = (value) => {
            const { id, layouts, browserSizeMode, appConfig } = this.props;
            let { config } = this.props;
            const selectionMode = config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode;
            const listLayout = config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].listLayout || _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.CUSTOM;
            if (selectionMode === value) {
                return;
            }
            let action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
            config = config.setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected, 'selectionMode'], value);
            if (selectionMode !== _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None && value === _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None) {
                if (listLayout === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.CUSTOM) {
                    // remove selected layout
                    const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected], browserSizeMode, appConfig.mainSizeMode);
                    action = action.resetLayout(desLayoutId, true);
                }
                action.editWidgetConfig(id, config).exec();
                this.changeBuilderStatus(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular);
            }
            else if (selectionMode === _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None && value !== _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None) {
                this.setLayoutAuto(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected, config);
                this.changeBuilderStatus(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected);
            }
            else if (selectionMode !== _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None && value !== _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None) {
                action.editWidgetConfig(id, config).exec();
            }
        };
        this.onSelectionSwitch = evt => {
            const selected = evt.target.checked;
            if (selected) {
                this.changeSelectionMode(_config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.Single);
            }
            else {
                this.changeSelectionMode(_config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None);
            }
        };
        this.onHoverLayoutOpenChange = evt => {
            var _a, _b;
            const { config, id, layouts, browserSizeMode, appConfig } = this.props;
            const listLayout = ((_b = (_a = config === null || config === void 0 ? void 0 : config.cardConfigs) === null || _a === void 0 ? void 0 : _a[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover]) === null || _b === void 0 ? void 0 : _b.listLayout) || _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.CUSTOM;
            const value = evt.target.checked;
            if (config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable === value)
                return;
            let action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
            let newConfig = config.setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover, 'enable'], value);
            newConfig = newConfig.setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover, 'listLayout'], _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.AUTO);
            if (config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable && !value) {
                if (listLayout === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.CUSTOM) {
                    // remove hover layout
                    const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover], browserSizeMode, appConfig.mainSizeMode);
                    action = action.resetLayout(desLayoutId, true);
                }
                this.changeBuilderStatus(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular);
                action.editWidgetConfig(id, newConfig).exec();
            }
            else if (!config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable && value) {
                this.setLayoutAuto(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover, newConfig);
                this.changeBuilderStatus(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover);
            }
        };
        this.setLayoutAuto = (status, newConfig) => {
            const { layouts, browserSizeMode, appConfig, id } = this.props;
            const regularLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(layouts[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular], browserSizeMode, appConfig.mainSizeMode);
            const desLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(layouts[status], browserSizeMode, appConfig.mainSizeMode);
            const option = {
                layout: _config__WEBPACK_IMPORTED_MODULE_7__.ListLayout.AUTO,
                config: newConfig,
                widgetId: id,
                appConfig: appConfig,
                status: status,
                regularLayoutId: regularLayoutId,
                desLayoutId: desLayoutId
            };
            (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__.setLayoutAuto)(option);
        };
        this.onOpenCardSetting = evt => {
            const status = evt.currentTarget.dataset.value;
            this.changeCardSettingAndBuilderStatus(status);
        };
        // Export list template, use it in a single fullscreen page
        this.onExportClick = evt => {
            const { appConfig, layouts, id, browserSizeMode } = this.props;
            const currentPageId = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder
                .appRuntimeInfo.currentPageId;
            const pageJson = appConfig.pages[currentPageId === 'default' ? 'home' : currentPageId];
            const widgets = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(appConfig.widgets.without(id)).set('widget_x', appConfig.widgets[id]);
            const pageTemplates = [
                {
                    widgetId: id,
                    config: {
                        layouts: appConfig.layouts.without(pageJson.layout[browserSizeMode], layouts[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected][browserSizeMode], layouts[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover][browserSizeMode]),
                        widgets: widgets,
                        views: appConfig.views,
                        sections: appConfig.sections
                    }
                }
            ];
            const template0 = pageTemplates[0];
            template0.config.layouts &&
                Object.keys(template0.config.layouts).forEach(layoutId => {
                    let layoutJson = template0.config.layouts[layoutId].without('id');
                    layoutJson.content &&
                        Object.keys(layoutJson.content).forEach(lEId => {
                            const lEJson = layoutJson.content[lEId]
                                .without('id', 'parentId', 'layoutId')
                                .setIn(['setting', 'lockParent'], true);
                            layoutJson = layoutJson.setIn(['content', lEId], lEJson);
                        });
                    template0.config.layouts = template0.config.layouts.set(layoutId, layoutJson);
                });
            template0.config.widgets &&
                Object.keys(template0.config.widgets).forEach((wId, index) => {
                    const wJson = template0.config.widgets[wId];
                    template0.config.widgets = template0.config.widgets.set(wId, wJson.without('context', 'icon', 'label', 'manifest', '_originManifest', 'version', 'id', 'useDataSourcesEnabled', 'useDataSources'));
                });
            template0.config.sections &&
                Object.keys(template0.config.sections).forEach((sId, index) => {
                    const sJson = template0.config.sections[sId];
                    template0.config.sections = template0.config.sections.set(sId, sJson.without('id', 'label'));
                });
            template0.config.views &&
                Object.keys(template0.config.views).forEach((vId, index) => {
                    const vJson = template0.config.views[vId];
                    template0.config.views = template0.config.views.set(vId, vJson.without('id', 'label'));
                });
            console.log(JSON.stringify(pageTemplates[0]));
            // const wJson = appConfig.widgets[this.props.id];
            // let embedLayoutJson = appConfig.layouts[wJson.layouts[Status.Regular].LARGE]
            // const template = {
            //   cardSize: config.cardSize,
            //   cardSpace: config.space,
            //   layout: [],
            //   widgets: {}
            // }
            // Object.keys(embedLayoutJson).forEach((key) => {
            //   if(key === 'id' || key === 'ROOT_ID')return;
            //   let layoutEle = embedLayoutJson[key];
            //   if (layoutEle.type === LayoutItemType.Widget && layoutEle.widgetId){
            //     template.widgets[layoutEle.widgetId] = appConfig.widgets[layoutEle.widgetId].without('context', 'icon', 'label', 'manifest', '_originManifest', 'version', 'useDataSources');
            //     template.layout.push(layoutEle);
            //   }
            // });
            // console.log(JSON.stringify(template));
        };
        this.onCardSettingReturnBackClick = evt => {
            const { showCardSetting } = this.props;
            this.changeCardSettingAndBuilderStatus(_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular);
            setTimeout(() => {
                var _a;
                if (showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover) {
                    this.toHoverSettingButtonRef.focus();
                }
                if (showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected) {
                    (_a = this.toSelectedSettingButtonRef) === null || _a === void 0 ? void 0 : _a.focus();
                }
            }, 100);
        };
        this.showSqlExprPopup = () => {
            this.setState({ isSqlExprShow: true });
        };
        this.toggleSqlExprPopup = () => {
            const { isSqlExprShow } = this.state;
            this.setState({ isSqlExprShow: !isSqlExprShow });
        };
        this.onSqlExprBuilderChange = (sqlExprObj) => {
            this.onPropertyChange('filter', sqlExprObj);
        };
        this.changeCardSettingAndBuilderStatus = (status) => {
            const { id, config } = this.props;
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({
                widgetId: id,
                propKey: 'showCardSetting',
                value: status
            });
            if (status === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular ||
                (status === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover && config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable) ||
                (status === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected &&
                    config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode !==
                        _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None)) {
                this.changeBuilderStatus(status);
            }
        };
        this.switchLoading = (show) => {
            const { id } = this.props;
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({
                widgetId: id,
                propKey: 'showLoading',
                value: show
            });
        };
        this.changeBuilderStatus = (status) => {
            const { id } = this.props;
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.builderAppSync.publishChangeWidgetStatePropToApp({
                widgetId: id,
                propKey: 'builderStatus',
                value: status
            });
        };
        this.onItemStyleChanged = (style, isCheckEmptyTemplate = false, updatedAppConfig = undefined) => {
            // if(this.props.appMode === AppMode.Run) return;
            this.switchLoading(true);
            const { id } = this.props;
            let { appConfig } = this.props;
            if (updatedAppConfig) {
                appConfig = updatedAppConfig;
            }
            let styleTemp = AllStyles[style];
            if (isCheckEmptyTemplate) {
                styleTemp = this.getEmptyTemplate(style);
            }
            jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.templateUtils.updateWidgetByTemplate(appConfig, styleTemp, id, styleTemp.widgetId, {}, _translations_default__WEBPACK_IMPORTED_MODULE_9__["default"])
                .then(newAppConfig => {
                this._onItemStyleChange(newAppConfig, style, isCheckEmptyTemplate);
                this.switchLoading(false);
            });
        };
        this.getEmptyTemplate = (style) => {
            var _a, _b;
            const styleTemp = AllStyles[style];
            const layouts = ((_a = styleTemp === null || styleTemp === void 0 ? void 0 : styleTemp.config) === null || _a === void 0 ? void 0 : _a.layouts) || {};
            const widgets = ((_b = styleTemp === null || styleTemp === void 0 ? void 0 : styleTemp.config) === null || _b === void 0 ? void 0 : _b.widgets) || {};
            let newStyle = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(AllStyles[style]);
            let newLayouts = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(layouts);
            for (const layoutId in layouts) {
                newLayouts = newLayouts.setIn([layoutId, 'content'], {});
                newLayouts = newLayouts.setIn([layoutId, 'order'], []);
            }
            newStyle = newStyle.setIn(['config', 'layouts'], newLayouts);
            newStyle = newStyle.setIn(['config', 'widgets'], {
                widget_x: widgets === null || widgets === void 0 ? void 0 : widgets.widget_x
            });
            return newStyle === null || newStyle === void 0 ? void 0 : newStyle.asMutable({ deep: true });
        };
        this.getCardSizeUnit = (props) => {
            props = props || this.props;
            const { config, builderStatus, browserSizeMode } = props;
            let cardConfigs = config.cardConfigs[builderStatus];
            if (!cardConfigs || !cardConfigs.cardSize) {
                cardConfigs = config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular];
            }
            let cardSize = cardConfigs.cardSize[browserSizeMode];
            if (!cardSize) {
                cardSize = cardConfigs.cardSize[Object.keys(cardConfigs.cardSize)[0]];
            }
            return {
                width: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.toLinearUnit(cardSize.width),
                height: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.toLinearUnit(cardSize.height)
            };
        };
        this.handleFormChange = evt => {
            const target = evt.currentTarget;
            if (!target)
                return;
            const field = target.dataset.field;
            const type = target.type;
            let value;
            switch (type) {
                case 'checkbox':
                    value = target.checked;
                    break;
                case 'select':
                    value = target.value;
                    break;
                case 'range':
                    value = parseFloat(target.value);
                    break;
                case 'number':
                    const numbertype = target.dataset.numbertype;
                    const parseNumber = numbertype === 'float' ? parseFloat : parseInt;
                    const minValue = !!target.min && parseNumber(target.min);
                    const maxValue = !!target.max && parseNumber(target.max);
                    value = evt.target.value;
                    if (!value || value === '')
                        return;
                    value = parseNumber(evt.target.value);
                    if (!!minValue && value < minValue) {
                        value = minValue;
                    }
                    if (!!maxValue && value > maxValue) {
                        value = maxValue;
                    }
                    break;
                default:
                    value = target.value;
                    break;
            }
            this.onPropertyChange(field, value);
        };
        this.handleCheckboxChange = (dataField) => {
            var _a;
            if (!dataField)
                return false;
            const currentCheckboxValue = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a[dataField];
            this.onPropertyChange(dataField, !currentCheckboxValue);
        };
        this.handleItemsPerPageChange = value => {
            if (!value || value === '') {
                value = '1';
            }
            let valueInt = parseInt(value);
            if (valueInt < 0)
                valueInt = 1;
            this.onPropertyChange('itemsPerPage', valueInt);
        };
        this.handleScrollStepChange = (valueInt) => {
            if (valueInt < 0)
                valueInt = 1;
            this.onPropertyChange('scrollStep', valueInt);
        };
        this.handleSpaceChange = (valueFloat) => {
            if (!valueFloat && valueFloat !== 0) {
                this.onPropertyChange('space', 0);
            }
            this.onPropertyChange('space', valueFloat);
        };
        this.handleHorizontalSpaceChange = (valueFloat) => {
            if (!valueFloat && valueFloat !== 0) {
                this.onPropertyChange('horizontalSpace', 0);
            }
            this.onPropertyChange('horizontalSpace', valueFloat);
        };
        this.handleVerticalSpaceChange = (valueFloat) => {
            if (!valueFloat && valueFloat !== 0) {
                this.onPropertyChange('verticalSpace', 0);
            }
            this.onPropertyChange('verticalSpace', valueFloat);
        };
        this.handleItemSizeChange = (valueInt) => {
            const { config } = this.props;
            const isHorizon = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column || config.direction === _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType.Horizon;
            const oldCardSize = this.getCardSizeUnit(this.props);
            const ratio = oldCardSize.width.distance / oldCardSize.height.distance;
            const newCardSize = this.getCardSize();
            valueInt = valueInt < _config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE ? _config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE : valueInt;
            if (isHorizon) {
                newCardSize.width = `${valueInt}px`;
                if (config.lockItemRatio) {
                    newCardSize.height = `${valueInt / ratio}px`;
                }
            }
            else {
                newCardSize.height = `${valueInt}px`;
                if (config.lockItemRatio) {
                    newCardSize.width = `${valueInt * ratio}px`;
                }
            }
            (0,_common_builder_support__WEBPACK_IMPORTED_MODULE_13__.handleResizeCard)(this.props, newCardSize, config).exec();
        };
        this.getCardSize = () => {
            const oldCardSize = this.getCardSizeUnit(this.props);
            return {
                width: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(oldCardSize.width),
                height: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(oldCardSize.height)
            };
        };
        this.onSettingSortChange = (sortData, index) => {
            this.onPropertyChange('sorts', sortData);
        };
        this._onItemStyleChange = (appConfig, style, isCheckEmptyTemplate = false) => {
            const { id, config: oldConfig, browserSizeMode } = this.props;
            const appConfigAction = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)(appConfig);
            let wJson = appConfig.widgets[id];
            const template = AllStyles[style];
            const templateWidgetJson = template.config.widgets[template.widgetId];
            wJson.layouts &&
                Object.keys(wJson.layouts).forEach(name => {
                    wJson.layouts[name] &&
                        Object.keys(wJson.layouts[name]).forEach(device => {
                            var _a, _b, _c, _d;
                            if (((_b = (_a = templateWidgetJson === null || templateWidgetJson === void 0 ? void 0 : templateWidgetJson.layouts) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b[device]) ||
                                !(templateWidgetJson === null || templateWidgetJson === void 0 ? void 0 : templateWidgetJson.layouts)) {
                                return;
                            }
                            const config = wJson.config;
                            // Judge if layout is empty
                            let sizeLayouts = templateWidgetJson.layouts[name];
                            if (!sizeLayouts) {
                                const layoutKeys = Object.keys(templateWidgetJson.layouts);
                                sizeLayouts = wJson.layouts[layoutKeys[layoutKeys.length - 1]];
                            }
                            else {
                                sizeLayouts = wJson.layouts[name];
                            }
                            const length = Object.keys(sizeLayouts).length;
                            let embedLayoutJson;
                            for (const key in sizeLayouts) {
                                if (key === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Large) {
                                    embedLayoutJson = appConfig.layouts[sizeLayouts[key]];
                                }
                            }
                            if (!embedLayoutJson) {
                                embedLayoutJson =
                                    appConfig.layouts[sizeLayouts[Object.keys(sizeLayouts)[length - 1]]];
                            }
                            if (!(embedLayoutJson === null || embedLayoutJson === void 0 ? void 0 : embedLayoutJson.content)) {
                                return;
                            }
                            const desLayoutId = wJson.layouts[name][device];
                            let newDesLayout;
                            if (name === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover) {
                                if ((_c = config[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover]) === null || _c === void 0 ? void 0 : _c.enable) {
                                    appConfigAction.removeLayout(desLayoutId, true);
                                    newDesLayout = appConfigAction.duplicateLayout(embedLayoutJson.id, false);
                                }
                            }
                            else if (name === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected) {
                                if ((_d = config[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected]) === null || _d === void 0 ? void 0 : _d.enable) {
                                    appConfigAction.removeLayout(desLayoutId, true);
                                    newDesLayout = appConfigAction.duplicateLayout(embedLayoutJson.id, false);
                                }
                            }
                            else {
                                appConfigAction.removeLayout(desLayoutId, true);
                                newDesLayout = appConfigAction.duplicateLayout(embedLayoutJson.id, false);
                            }
                            //Update new layout
                            if (newDesLayout) {
                                wJson = wJson.setIn(['layouts', name, device], newDesLayout.id);
                                //Because the new layout is the layout of the layoutduplicate in Large, the parent of the sub-widget still points to the widget of Large, so the layout structure needs to be reconstructed
                                appConfigAction.clearLayoutStructure(newDesLayout.id, browserSizeMode, true);
                                appConfigAction.buildLayoutStructure(newDesLayout.id, browserSizeMode, true);
                            }
                        });
                });
            // process inherit properties
            if (wJson.useDataSources && wJson.useDataSources.length > 0) {
                appConfigAction.copyUseDataSourceToAllChildWidgets(wJson.set('useDataSources', null), wJson);
            }
            this.editListLayoutSize(appConfigAction, style);
            const config = wJson.config
                .set('itemStyle', style)
                .set('isItemStyleConfirm', false)
                .set('isInitialed', true)
                .set('isCheckEmptyTemplate', isCheckEmptyTemplate);
            appConfigAction
                .editWidgetProperty(wJson.id, 'config', config)
                .editWidgetProperty(wJson.id, 'layouts', wJson.layouts)
                .exec(!oldConfig.isInitialed);
            // selectSelf(this.props);
        };
        this.editListLayoutSize = (appConfigAction, style) => {
            var _a;
            const { layoutInfo, appConfig } = this.props;
            const templateSize = this.getTemplateSize();
            const listSize = templateSize[style];
            const layoutType = this.getLayoutType();
            if (layoutType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LayoutType.FixedLayout) {
                const { layoutId, layoutItemId } = layoutInfo;
                const layout = appConfig.layouts[layoutId];
                const layoutItem = (_a = layout === null || layout === void 0 ? void 0 : layout.content) === null || _a === void 0 ? void 0 : _a[layoutItemId];
                const bbox = layoutItem.bbox.set('width', `${listSize.width}%`).set('height', `${listSize.height}%`);
                appConfigAction
                    .editLayoutItemBBox(layoutInfo, bbox)
                    .exec();
            }
        };
        this.getTemplateSize = () => {
            const { parentSize } = this.props;
            const columnRowTemplateWidth = 620;
            const columnRowTemplateHeight = 275;
            const parentWidth = (parentSize === null || parentSize === void 0 ? void 0 : parentSize.width) || 1280;
            const parentHeight = (parentSize === null || parentSize === void 0 ? void 0 : parentSize.height) || 800;
            const templateWidth = this.checkTemplateDefaultSize((columnRowTemplateWidth * 100) / parentWidth);
            const templateHeight = this.checkTemplateDefaultSize((columnRowTemplateHeight * 100) / parentHeight);
            const templateSize = {
                STYLE0: { width: templateWidth, height: templateHeight },
                STYLE1: { width: templateWidth, height: templateHeight },
                STYLE2: { width: templateWidth, height: templateHeight },
                STYLE3: { width: templateWidth, height: templateHeight },
                STYLE4: { width: templateWidth, height: templateHeight },
                STYLE5: { width: templateWidth, height: templateHeight },
                STYLE6: { width: templateWidth, height: templateHeight },
                STYLE7: { width: templateWidth, height: templateHeight },
                STYLE8: { width: this.checkTemplateDefaultSize(65400 / parentWidth), height: this.checkTemplateDefaultSize(33500 / parentHeight) },
                STYLE9: { width: this.checkTemplateDefaultSize(50000 / parentWidth), height: this.checkTemplateDefaultSize(50000 / parentHeight) }
            };
            return templateSize;
        };
        this.checkTemplateDefaultSize = (size) => {
            if (size > 100) {
                return 100;
            }
            else {
                return size;
            }
        };
        this.getLayoutType = () => {
            var _a, _b;
            const { layoutInfo, appConfig } = this.props;
            const layoutId = layoutInfo === null || layoutInfo === void 0 ? void 0 : layoutInfo.layoutId;
            const layoutType = (_b = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.layouts) === null || _a === void 0 ? void 0 : _a[layoutId]) === null || _b === void 0 ? void 0 : _b.type;
            return layoutType;
        };
        this.setDatasource = (ds) => {
            this.setState({
                datasource: ds
            }, () => {
                const isShowAutoRefresh = this.checkIsDsAutoRefreshSettingOpen(ds);
                this.isPreDataSourceRefreshOpen = isShowAutoRefresh;
                this.initIsShowAutoRefresh(ds);
            });
        };
        this.initIsShowAutoRefresh = (ds) => {
            const { config } = this.props;
            if (typeof (config === null || config === void 0 ? void 0 : config.isShowAutoRefresh) !== 'boolean') {
                const isShowAutoRefresh = this.checkIsDsAutoRefreshSettingOpen(ds);
                const newConfig = config.set('isShowAutoRefresh', isShowAutoRefresh);
                this.onConfigChange(newConfig);
            }
        };
        this.getSelectModeOptions = () => {
            return [
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.Single, value: _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.Single }, this.formatMessage('single')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.Multiple, value: _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.Multiple }, this.formatMessage('multiple'))
            ];
        };
        this.getSearchingFields = (isSearch) => {
            const { datasource } = this.state;
            if (datasource) {
                const scheme = datasource.getSchema();
                if (scheme && scheme.fields) {
                    const res = [];
                    Object.keys(scheme.fields).forEach(fieldKey => {
                        const field = scheme.fields[fieldKey];
                        if (isSearch) {
                            if (field.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.String) {
                                res.push({
                                    value: fieldKey,
                                    label: scheme.fields[fieldKey].alias || scheme.fields[fieldKey].name
                                });
                            }
                        }
                        else {
                            res.push({
                                value: fieldKey,
                                label: scheme.fields[fieldKey].alias || scheme.fields[fieldKey].name
                            });
                        }
                    });
                    return res;
                }
            }
            return [];
        };
        this.getPageStyleOptions = () => {
            return [
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.Scroll, value: _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.Scroll }, this.formatMessage('scroll')),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { key: _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.MultiPage, value: _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.MultiPage }, this.formatMessage('multiPage'))
            ];
        };
        this.onDsCreate = ds => {
            this.setDatasource(ds);
        };
        this.onDataSourceInfoChange = (info) => {
            if (!info || !this.state.datasource) {
                return;
            }
            const { config } = this.props;
            const isDsAutoRefreshSettingOpen = this.checkIsDsAutoRefreshSettingOpen(this.state.datasource);
            if (isDsAutoRefreshSettingOpen && !this.isPreDataSourceRefreshOpen) {
                const newConfig = config.set('isShowAutoRefresh', isDsAutoRefreshSettingOpen);
                this.onConfigChange(newConfig);
            }
            this.isPreDataSourceRefreshOpen = isDsAutoRefreshSettingOpen;
        };
        this.getStyle = (theme) => {
            var _a;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      &.jimu-widget-list-setting {
        .no-bottom-border {
          border-bottom: 0;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .list-layout-select-con {
          box-sizing: border-box;
          button, button:hover, button.active {
            background: ${(_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette.light[200]};
          }
          button {
            padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(4)};
            border-width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)};
            border-color: transparent;
          }
        }
        .list-guide-tip-button svg{
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-4)};
          margin-right: 0;
        }
        .style-setting--base-unit-input {
          .dropdown-button {
            border: none;
          }
        }
        .clear-padding {
          padding-left: 0;
          padding-right: 0;
        }
        .card-setting-con {
          padding-top: 0;
        }
        .clear-border {
          border: none;
        }
        .clear-padding-bottom {
          padding-bottom: 0;
        }
        .sort-container {
          margin-top: 12px;
          .sort-multi-select {
            width: 100%;
          }
        }
        .lock-item-ratio-label {
          margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(8)};
        }
        .search-container {
          margin-top: 12px;
          .search-multi-select {
            width: 100%;
          }
        }
        .lock-item-ratio {
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(3)};
        }

        .resetting-template {
          cursor: pointer;
          color: ${theme.colors.palette.primary[700]};
          vertical-align: middle;
          padding: 0;
          margin: 0;
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
        }
        .resetting-template:hover {
          cursor: pointer;
          color: ${theme.colors.palette.primary[800]};
        }
        .setting-next {
          width: auto;
          max-width: 50%;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: end;
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(13)};
          padding: 0;
          &:focus {
            outline: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)} solid ${theme.colors.palette.primary[700]};
            outline-offset: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(2)};
          }
          svg {
            margin: 0;
          }
        }
        .card-setting-return {
          cursor: pointer;
          font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
          padding: 0;
        }

        .search-placeholder {
          & {
            background: ${theme.colors.palette.light[200]};
            color: ${theme.colors.black};
            border: none;
            outline: none;
            box-sizing: border-box;
            border-radius: 2px;
            font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
          }
          &:focus {
            border: 1px solid ${theme.colors.palette.primary[700]};
          }
        }
        .style-group {
          button {
            padding: 0;
          }
          .template-icon-margin-r {
            margin-right: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)};
          }
          .style-img {
            cursor: pointer;
            width: 100%;
            height: 70px;
            border: 1px solid ${theme.colors.palette.light[500]};
            background-color: ${theme.colors.white};
            margin-right: 0;
            &.active {
              border: 2px solid ${theme.colors.primary};
            }
            &.style-img-h {
              width: 109px;
              height: 109px;
            }
            &.low {
              height: 48px;
            }
            &.empty {
              height: 40px;
              line-height: 40px;
              color: ${theme.colors.palette.dark[200]};
            }
          }
        }
        .vertical-space {
          height: 10px;
        }
        .list-size-edit {
          width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(120)};
        }
        .datasource-placeholder {
          & {
            color: ${theme.colors.palette.dark[200]};
          }
          p {
            color: ${theme.colors.palette.dark[500]};
            font-size: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(14)};
            margin: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)} auto 0;
            line-height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(19)};
            width: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(228)};
          }
        }
      }
    `;
        };
        this.getAllFields = () => {
            var _a, _b, _c, _d;
            const { config, useDataSources } = this.props;
            const useDS = useDataSources && useDataSources[0];
            if (!useDS)
                return [];
            const usedFields = {};
            if (config.sortOpen && config.sorts) {
                config.sorts.forEach(sort => {
                    sort.rule.forEach(sortData => {
                        sortData.jimuFieldName && (usedFields[sortData.jimuFieldName] = 0);
                    });
                });
            }
            // if (useDS.query && useDS.query.orderBy && useDS.query.orderBy.length > 0) {
            //   useDS.query.orderBy.forEach(sortData => {
            //     sortData.jimuFieldName && (usedFields[sortData.jimuFieldName] = 0);
            //   })
            // }
            // if (useDS.query && useDS.query.where) {
            //   (getJimuFieldNamesBySqlExpression(useDS.query.where) || []).forEach(field => usedFields[field] = 0)
            // }
            if (config.filter) {
                ;
                ((0,jimu_ui_basic_sql_expression_runtime__WEBPACK_IMPORTED_MODULE_14__.getJimuFieldNamesBySqlExpression)(config.filter) || []).forEach(field => (usedFields[field] = 0));
            }
            if (config.searchOpen && config.searchFields) {
                ;
                (config.searchFields.split(',') || []).forEach(field => (usedFields[field] = 0));
            }
            if ((_a = config === null || config === void 0 ? void 0 : config.linkParam) === null || _a === void 0 ? void 0 : _a.expression) {
                const linkSettingDss = jimu_core__WEBPACK_IMPORTED_MODULE_0__.expressionUtils.getUseDataSourceFromExpParts((_b = config.linkParam.expression) === null || _b === void 0 ? void 0 : _b.parts, this.props.useDataSources);
                (_d = (_c = linkSettingDss === null || linkSettingDss === void 0 ? void 0 : linkSettingDss[0]) === null || _c === void 0 ? void 0 : _c.fields) === null || _d === void 0 ? void 0 : _d.forEach(field => (usedFields[field] = 0));
            }
            return (usedFields && Object.keys(usedFields)) || [];
        };
        this.formatMessage = (id, values) => {
            return this.props.intl.formatMessage({ id: id, defaultMessage: MESSAGES[id] }, values);
        };
        this.getWhetherDsInUseDataSources = (ds, useDataSources) => {
            if (!ds || !useDataSources) {
                return false;
            }
            return useDataSources.some(u => u.dataSourceId === ds.dataSourceId);
        };
        this.getOutputDataSourceJson = (useDataSources) => {
            // outputDataSourceJson should bind widget instance, such as MapviewDataSource
            const dsJson = {
                id: `${this.props.id}-output`,
                label: this.formatMessage('outputDsLabel', { label: this.props.label }),
                type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer,
                originDataSources: useDataSources
            };
            return dsJson;
        };
        this.onFilterChange = (sqlExprObj, dsId) => {
            const { useDataSources } = this.props;
            if (!useDataSources ||
                !useDataSources[0] ||
                useDataSources[0].dataSourceId !== dsId) {
                return;
            }
            this.needUpdateFields = true;
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: [
                    useDataSources[0]
                        .setIn(['query', 'where'], sqlExprObj)
                        .asMutable({ deep: true })
                ]
            });
        };
        this.onSettingLinkConfirm = (linkResult) => {
            let { config } = this.props;
            if (!linkResult) {
                return;
            }
            config = config.set('linkParam', linkResult);
            if (linkResult.expression) {
                this.needUpdateFields = true;
            }
            this.onConfigChange(config);
        };
        this.onDSSelectorSortChange = (sortData, dsId) => {
            const { useDataSources } = this.props;
            if (!useDataSources ||
                !useDataSources[0] ||
                useDataSources[0].dataSourceId !== dsId) {
                return;
            }
            this.needUpdateFields = true;
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: [
                    useDataSources[0]
                        .setIn(['query', 'orderBy'], sortData)
                        .asMutable({ deep: true })
                ]
            });
        };
        this.onDataChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.onDataSelect(useDataSources[0]);
            }
            else {
                this.onDataRemove(this.props.useDataSources[0].asMutable({ deep: true }));
            }
        };
        this.onDataSelect = (currentSelectedDs) => {
            const widgets = this.props.appConfig && this.props.appConfig.widgets;
            const widgetJson = widgets[this.props.id];
            const udpateWidgetJson = { id: this.props.id };
            const appConfigAction = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
            let useDataSources;
            let singleUsedDs;
            if (this.getWhetherDsInUseDataSources(currentSelectedDs, widgetJson.useDataSources)) {
                useDataSources = widgetJson.useDataSources.asMutable({ deep: true });
            }
            else {
                singleUsedDs = currentSelectedDs;
                useDataSources = [singleUsedDs];
                udpateWidgetJson.config = widgetJson.config
                    .set('searchFields', null)
                    .set('filters', null)
                    .set('sorts', null);
            }
            // Instead of function onSettingChange, use action to change widget json, which can avoid conflict.
            // Because editing widget json in builder needs pub-sub and pub-sub is async.
            udpateWidgetJson.useDataSources = useDataSources;
            appConfigAction.editWidget(udpateWidgetJson).exec();
            // outputdatasource
            // const outputDataSourceJson = this.getOutputDataSourceJson(useDataSources)
            // if (outputDataSourceJson) {
            //   const outputDataSources = [outputDataSourceJson]
            //   appConfigAction.editWidget(udpateWidgetJson, outputDataSources).exec();
            // } else {
            //   appConfigAction.editWidget(udpateWidgetJson).exec();
            // }
            this.needUpdateFields = true;
        };
        this.onDataRemove = (currentRemovedDs) => {
            const widgets = this.props.appConfig && this.props.appConfig.widgets;
            const widgetJson = widgets[this.props.id];
            const updateWidgetJson = { id: this.props.id };
            const appConfigAction = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)();
            const useDataSources = widgetJson.useDataSources.filter(usedDs => usedDs.dataSourceId !== currentRemovedDs.dataSourceId);
            // Instead of function onSettingChange, use action to change widget json, which can avoid conflict.
            // Because editing widget json in builder needs pub-sub and pub-sub is async.
            updateWidgetJson.config = widgetJson.config
                .set('sqlExprObj', null)
                .set('searchFields', null)
                .set('filters', null)
                .set('sortFields', null);
            updateWidgetJson.useDataSources = useDataSources;
            appConfigAction.editWidget(updateWidgetJson, []).exec();
            this.needUpdateFields = true;
        };
        this.handleItemStyleConfirmClick = evt => {
            this.onPropertyChange('isItemStyleConfirm', true);
        };
        this.handleResetItemstyleClick = evt => {
            this.onPropertyChange('isItemStyleConfirm', false);
            this.updateStartButtonPosition();
        };
        this.handleItemStyleImageClick = evt => {
            const style = evt.currentTarget.dataset.value;
            const { config } = this.props;
            if (config.itemStyle === style)
                return;
            this.onItemStyleChanged(style, config === null || config === void 0 ? void 0 : config.isCheckEmptyTemplate);
        };
        this.handleCheckEmptyTemplateChange = () => {
            const { config, appConfig, id } = this.props;
            const newIsCheckEmptyTemplate = !(config === null || config === void 0 ? void 0 : config.isCheckEmptyTemplate);
            const newConfig = config.set('isCheckEmptyTemplate', newIsCheckEmptyTemplate);
            const newAppConfig = appConfig.setIn(['widgets', id, 'config'], newConfig);
            this.onItemStyleChanged(config.itemStyle, newIsCheckEmptyTemplate, newAppConfig);
        };
        this.openSettingCollapse = (settingCollapse) => {
            this.setState({
                settingCollapse: settingCollapse
            });
        };
        this.closeSettingCollapse = () => {
            this.setState({
                settingCollapse: _config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.None
            });
        };
        this.handlePageStyleChange = evt => {
            var _a;
            const value = (_a = evt === null || evt === void 0 ? void 0 : evt.target) === null || _a === void 0 ? void 0 : _a.value;
            this.onPropertyChange('pageStyle', value);
        };
        this.handleChooseSearchingFieldsChange = (evt, value, values) => {
            this.onPropertyChange('searchFields', values.join(','));
        };
        this.displaySelectedFields = values => {
            return this.formatMessage('numSelected', {
                number: values.length
            });
        };
        this.onSearchPlaceholderChange = (e) => {
            var _a, _b;
            const searctHint = e.target.value;
            const preSearctHint = (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.searchHint;
            if (preSearctHint === searctHint)
                return;
            this.onPropertyChange('searchHint', searctHint);
        };
        this.getIsScrollAndWidthOfTemplateCon = () => {
            var _a, _b, _c, _d, _e;
            const templateConHeight = ((_a = this.templatesContain) === null || _a === void 0 ? void 0 : _a.clientHeight) || 0;
            const templateConWidth = ((_b = this.templatesContain) === null || _b === void 0 ? void 0 : _b.clientWidth) || 0;
            const templateConParentHeight = ((_e = (_d = (_c = this.templatesContain) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.clientHeight) || 0;
            const isStartButtonAbsolute = templateConParentHeight < templateConHeight;
            this.setState({
                isTemplateContainScroll: isStartButtonAbsolute,
                templateConWidth: templateConWidth
            });
        };
        this.updateStartButtonPosition = () => {
            clearTimeout(this.updatePositionTimeout);
            this.updatePositionTimeout = setTimeout(() => {
                this.getIsScrollAndWidthOfTemplateCon();
            }, 500);
        };
        this.setTemplatesContain = (ref) => {
            const preTemplatesContain = this.templatesContain;
            if (ref) {
                this.templatesContain = ref;
            }
            if (!preTemplatesContain) {
                this.getIsScrollAndWidthOfTemplateCon();
            }
        };
        this.checkIsDsAutoRefreshSettingOpen = (datasource) => {
            if (!datasource)
                return false;
            const interval = (datasource === null || datasource === void 0 ? void 0 : datasource.getAutoRefreshInterval()) || 0;
            return interval > 0;
        };
        this.onNoDataMessageChange = (value) => {
            this.onPropertyChange('noDataMessage', value);
        };
        this.renderTemplate = () => {
            const { config } = this.props;
            const { isTemplateContainScroll } = this.state;
            const startButtonClass = isTemplateContainScroll
                ? 'position-absolute position-absolute-con'
                : 'position-relative-con';
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: ref => { this.setTemplatesContain(ref); } },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: this.formatMessage('chooseTemplateTip') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', role: 'group', "aria-label": this.formatMessage('layoutRow'), label: this.formatMessage('layoutRow') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style5, onClick: this.handleItemStyleImageClick, type: 'tertiary', title: this.formatMessage('listRowTemplateTitle', {
                                    index: 1
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img ${config.itemStyle === _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style5 &&
                                        'active'}`, icon: __webpack_require__(/*! ./assets/style6.png */ "./your-extensions/widgets/list-112/src/setting/assets/style6.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'vertical-space' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style4, onClick: this.handleItemStyleImageClick, type: 'tertiary', title: this.formatMessage('listRowTemplateTitle', {
                                    index: 2
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img ${config.itemStyle === _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style4 &&
                                        'active'}`, icon: __webpack_require__(/*! ./assets/style5.png */ "./your-extensions/widgets/list-112/src/setting/assets/style5.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'vertical-space' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style6, onClick: this.handleItemStyleImageClick, type: 'tertiary', className: 'w-100', title: this.formatMessage('listRowTemplateTitle', {
                                    index: 3
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img low ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style6 && 'active'}`, icon: __webpack_require__(/*! ./assets/style7.png */ "./your-extensions/widgets/list-112/src/setting/assets/style7.png") })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', role: 'group', "aria-label": this.formatMessage('layoutColumn'), label: this.formatMessage('layoutColumn') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100 style-img d-flex justify-content-between w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style0, onClick: this.handleItemStyleImageClick, type: 'tertiary', className: 'template-icon-margin-r', title: this.formatMessage('listColumuTemplateTitle', {
                                    index: 1
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: `style-img style-img-h ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style0 && 'active'}`, icon: __webpack_require__(/*! ./assets/style1.png */ "./your-extensions/widgets/list-112/src/setting/assets/style1.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style1, onClick: this.handleItemStyleImageClick, type: 'tertiary', title: this.formatMessage('listColumuTemplateTitle', {
                                    index: 2
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: `style-img style-img-h ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style1 && 'active'}`, icon: __webpack_require__(/*! ./assets/style2.png */ "./your-extensions/widgets/list-112/src/setting/assets/style2.png") }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'vertical-space w-100' }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100 d-flex justify-content-between w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style2, onClick: this.handleItemStyleImageClick, type: 'tertiary', className: 'template-icon-margin-r', title: this.formatMessage('listColumuTemplateTitle', {
                                    index: 3
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img style-img-h ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style2 && 'active'}`, icon: __webpack_require__(/*! ./assets/style3.png */ "./your-extensions/widgets/list-112/src/setting/assets/style3.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style3, onClick: this.handleItemStyleImageClick, type: 'tertiary', title: this.formatMessage('listColumuTemplateTitle', {
                                    index: 4
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img style-img-h ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style3 && 'active'}`, icon: __webpack_require__(/*! ./assets/style4.png */ "./your-extensions/widgets/list-112/src/setting/assets/style4.png") })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', role: 'group', "aria-label": this.formatMessage('layoutGrid'), label: this.formatMessage('layoutGrid') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style8, onClick: this.handleItemStyleImageClick, type: 'tertiary', className: 'w-100', title: this.formatMessage('listGridTemplateTitle', {
                                    index: 1
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img ${config.itemStyle === _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style8 &&
                                        'active'}`, icon: __webpack_require__(/*! ./assets/style8.png */ "./your-extensions/widgets/list-112/src/setting/assets/style8.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'vertical-space' })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'vertical-space' }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100 d-flex justify-content-between w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style9, onClick: this.handleItemStyleImageClick, type: 'tertiary', className: 'template-icon-margin-r', title: this.formatMessage('listGridTemplateTitle', {
                                    index: 2
                                }) },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { autoFlip: true, className: `style-img style-img-h ${config.itemStyle ===
                                        _config__WEBPACK_IMPORTED_MODULE_7__.ItemStyle.Style9 && 'active'}`, icon: __webpack_require__(/*! ./assets/style9.png */ "./your-extensions/widgets/list-112/src/setting/assets/style9.png") })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'style-group w-100' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { title: this.formatMessage('emptyTemplateCheckboxString'), "aria-label": this.formatMessage('emptyTemplateCheckboxString'), className: 'd-flex w-100 cursor-pointer', style: { paddingLeft: 0, paddingRight: 0 }, onClick: () => { this.handleCheckEmptyTemplateChange(); } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox, { title: this.formatMessage('emptyTemplateCheckboxString'), className: 'lock-item-ratio', "data-field": 'isCheckEmptyTemplate', checked: (config === null || config === void 0 ? void 0 : config.isCheckEmptyTemplate) || false, "aria-label": this.formatMessage('emptyTemplateCheckboxString') }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'lock-item-ratio-label text-left' }, this.formatMessage('emptyTemplateCheckboxString'))))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'start-con w-100', css: this.getStartButtonStyle() },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: startButtonClass },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: "w-100", type: 'primary', onClick: this.handleItemStyleConfirmClick }, this.formatMessage('start'))))))));
        };
        this.getStartButtonStyle = () => {
            const { theme } = this.props;
            const { templateConWidth } = this.state;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      &.start-con {
        & {
          height: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(64)};
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-16)};
        }
        .position-absolute-con, .position-relative-con {
          margin-left: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(-16)};
        }
        div{
          padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)};
          background: ${theme.colors.palette.light[300]};
          left: 1rem;
          bottom: 0;
          width: ${templateConWidth ? `${templateConWidth}px` : '100%'}
        }
      }
    `;
        };
        this.renderDataSetting = () => {
            var _a;
            const { datasource } = this.state;
            const { useDataSources, selectionIsInSelf, config } = this.props;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(!this.state.datasource ? 'no-bottom-border' : '') },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 overflow-hidden align-middle d-flex align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1 w-100 overflow-hidden' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: 'tertiary', className: 'resetting-template align-middle', onClick: this.handleResetItemstyleClick, title: this.formatMessage('resettingTheTemplate') }, this.formatMessage('resettingTheTemplate')),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: 'align-middle' }, this.formatMessage('customListDesign'))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { title: this.formatMessage('listUseGuide'), showArrow: true, placement: 'left' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: 'list-guide-tip-button', type: 'tertiary', "aria-label": this.formatMessage('listUseGuide') },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_suggested_info__WEBPACK_IMPORTED_MODULE_16__.InfoOutlined, null))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.formatMessage('data'), "aria-label": this.formatMessage('data') }, !selectionIsInSelf && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_6__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: useDataSources, mustUseDataSource: true, onChange: this.onDataChange, widgetId: this.props.id, "aria-describedby": 'list-empty-tip' }))),
                ((_a = this.state) === null || _a === void 0 ? void 0 : _a.datasource) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.formatMessage('noDataMessage'), "aria-label": this.formatMessage('noDataMessage') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.TextInput, { size: 'sm', className: 'w-100', "aria-label": this.formatMessage('noDataMessage'), placeholder: this.formatMessage('noData'), defaultValue: (config === null || config === void 0 ? void 0 : config.noDataMessage) || '', onAcceptValue: this.onNoDataMessageChange })),
                this.checkIsDsAutoRefreshSettingOpen(datasource) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('lastUpdateText'), role: 'group', "aria-label": this.formatMessage('lastUpdateText') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.isShowAutoRefresh, "data-field": 'isShowAutoRefresh', onChange: this.handleFormChange, title: this.formatMessage('lastUpdateText') }))));
        };
        this.handleLayoutChange = (layoutType) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            const { config, browserSizeMode, widgetRect } = this.props;
            let newConfig = config.set('layoutType', layoutType).set('horizontalSpace', _config__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_SPACE).set('verticalSpace', _config__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_SPACE);
            const cardSize = this.getCardSizeUnit(this.props);
            const itemStyle = defaultCardLayout[config.itemStyle];
            let newCardSize;
            const direction = layoutType === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column ? _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType === null || _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType === void 0 ? void 0 : _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType.Horizon : _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType.Vertical;
            if (itemStyle === layoutType) {
                newCardSize = defaultCardSize[config.itemStyle];
            }
            else {
                switch (layoutType) {
                    case _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID:
                        newCardSize = {
                            width: '25%',
                            height: `${_config__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_CARD_SIZE}px`
                        };
                        break;
                    case _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column:
                        newCardSize = {
                            width: '320px',
                            height: ((_a = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _a === void 0 ? void 0 : _a.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE ? `${widgetRect.height * ((_b = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _b === void 0 ? void 0 : _b.distance) / 100}px` : `${(_c = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _c === void 0 ? void 0 : _c.distance}px`
                        };
                        break;
                    case _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row:
                        newCardSize = {
                            width: ((_d = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _d === void 0 ? void 0 : _d.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE ? `${widgetRect.width * ((_e = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _e === void 0 ? void 0 : _e.distance) / 100}px` : `${(_f = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _f === void 0 ? void 0 : _f.distance}px`,
                            height: '200px'
                        };
                        break;
                    default:
                        newCardSize = {
                            width: ((_g = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _g === void 0 ? void 0 : _g.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE ? `${widgetRect.width * ((_h = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _h === void 0 ? void 0 : _h.distance) / 100}px` : `${(_j = cardSize === null || cardSize === void 0 ? void 0 : cardSize.width) === null || _j === void 0 ? void 0 : _j.distance}px`,
                            height: ((_k = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _k === void 0 ? void 0 : _k.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE ? `${widgetRect.height * ((_l = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _l === void 0 ? void 0 : _l.distance) / 100}px` : `${(_m = cardSize === null || cardSize === void 0 ? void 0 : cardSize.height) === null || _m === void 0 ? void 0 : _m.distance}px`
                        };
                        break;
                }
            }
            newConfig = newConfig.setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular, 'cardSize', browserSizeMode], newCardSize).setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover, 'cardSize', browserSizeMode], newCardSize).setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected, 'cardSize', browserSizeMode], newCardSize).setIn(['direction'], direction);
            this.onConfigChange(newConfig);
        };
        this.handleKeepAspectRatioChange = () => {
            var _a, _b, _c, _d;
            const { config } = this.props;
            const cardSize = this.getCardSizeUnit(this.props);
            const widthPx = this.getCardPxWidthFormCardSize();
            const gridItemSizeRatio = cardSize.height.distance / widthPx;
            let newConfig = config.set('keepAspectRatio', !((_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.keepAspectRatio));
            if (!((_d = (_c = this.props) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.keepAspectRatio)) {
                newConfig = newConfig.set('gridItemSizeRatio', gridItemSizeRatio);
            }
            this.onConfigChange(newConfig);
        };
        this.handleGridItemSizeRatioChange = (value) => {
            const ratio = Number(value === null || value === void 0 ? void 0 : value.split(':')[1]) / Number(value === null || value === void 0 ? void 0 : value.split(':')[0]);
            const { config } = this.props;
            const oldCardSize = this.getCardSizeInGridByRatio(ratio);
            const newCardSize = {
                width: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(oldCardSize.width),
                height: jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(oldCardSize.height)
            };
            (0,_common_builder_support__WEBPACK_IMPORTED_MODULE_13__.handleResizeCard)(this.props, newCardSize, config.set('gridItemSizeRatio', ratio)).exec();
        };
        this.getCardSizeInGridByRatio = (ratio) => {
            const oldCardSize = this.getCardSizeUnit(this.props);
            const pxWidth = this.getCardPxWidthFormCardSize();
            oldCardSize.height.distance = ratio * pxWidth;
            return oldCardSize;
        };
        this.getCardPxWidthFormCardSize = () => {
            const { config } = this.props;
            const cardSize = this.getCardSizeUnit(this.props);
            if (cardSize.width.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE) {
                const listContentWidth = this.getListActualContentPxWidth();
                //The space in the last column should be removed
                return cardSize.width.distance * listContentWidth / 100 - (config === null || config === void 0 ? void 0 : config.horizontalSpace);
            }
            else {
                return cardSize.width.distance;
            }
        };
        this.handleGridItemSizeChange = (valueInt, isHeight = false) => {
            const { config, widgetRect } = this.props;
            const oldCardSizeUnit = this.getCardSizeUnit(this.props);
            const oldSize = isHeight ? oldCardSizeUnit === null || oldCardSizeUnit === void 0 ? void 0 : oldCardSizeUnit.height : oldCardSizeUnit === null || oldCardSizeUnit === void 0 ? void 0 : oldCardSizeUnit.width;
            const listConSize = isHeight ? widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.height : this.getListActualContentPxWidth();
            const newCardSize = this.getCardSize();
            let minSize = _config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE;
            if ((valueInt === null || valueInt === void 0 ? void 0 : valueInt.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE) {
                minSize = isHeight ? (_config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE * 100) / listConSize : ((_config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE + (config === null || config === void 0 ? void 0 : config.horizontalSpace)) * 100) / listConSize;
            }
            const isDistanceUnitsChange = this.checkIsDistanceUnitsChange(valueInt, isHeight);
            if (isDistanceUnitsChange && !isHeight) {
                if (valueInt.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PIXEL) {
                    valueInt.distance = oldSize.distance * listConSize / 100 - (config === null || config === void 0 ? void 0 : config.horizontalSpace);
                }
                if (valueInt.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE) {
                    valueInt.distance = ((oldSize.distance + (config === null || config === void 0 ? void 0 : config.horizontalSpace)) * 100) / listConSize;
                }
            }
            const value = valueInt.distance < minSize ? minSize : valueInt.distance;
            valueInt.distance = value;
            if (isHeight) {
                newCardSize.height = jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(valueInt);
            }
            else {
                newCardSize.width = jimu_ui__WEBPACK_IMPORTED_MODULE_5__.utils.stringOfLinearUnit(valueInt);
                const widthPx = (valueInt === null || valueInt === void 0 ? void 0 : valueInt.unit) === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE ? (value * listConSize / 100) : value;
                if (config === null || config === void 0 ? void 0 : config.keepAspectRatio) {
                    const height = widthPx * (config === null || config === void 0 ? void 0 : config.gridItemSizeRatio);
                    newCardSize.height = `${height}px`;
                }
            }
            (0,_common_builder_support__WEBPACK_IMPORTED_MODULE_13__.handleResizeCard)(this.props, newCardSize, config).exec();
        };
        this.getListActualContentPxWidth = () => {
            const { config, widgetRect } = this.props;
            return ((widgetRect === null || widgetRect === void 0 ? void 0 : widgetRect.width) + (config === null || config === void 0 ? void 0 : config.horizontalSpace) - _config__WEBPACK_IMPORTED_MODULE_7__.SCROLL_BAR_WIDTH) || 0;
        };
        this.checkIsDistanceUnitsChange = (valueInt, isHeight) => {
            const oldCardSizeUnit = this.getCardSizeUnit(this.props);
            const size = isHeight ? oldCardSizeUnit === null || oldCardSizeUnit === void 0 ? void 0 : oldCardSizeUnit.height : oldCardSizeUnit === null || oldCardSizeUnit === void 0 ? void 0 : oldCardSizeUnit.width;
            if (valueInt.unit === size.unit) {
                return false;
            }
            else if (!size.unit && valueInt.unit === jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PIXEL) {
                return false;
            }
            else {
                return true;
            }
        };
        this.renderArrangementSetting = () => {
            const { config } = this.props;
            const { settingCollapse } = this.state;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.CollapsablePanel, { label: this.formatMessage('arrangement'), isOpen: settingCollapse === _config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.Arrangement, onRequestOpen: () => { this.openSettingCollapse(_config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.Arrangement); }, onRequestClose: this.closeSettingCollapse, "aria-label": this.formatMessage('arrangement') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: "mt-2", flow: 'wrap', label: this.formatMessage('layout'), role: 'group', "aria-label": this.formatMessage('layout') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex align-items-center w-100 list-layout-select-con' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { icon: true, title: this.formatMessage('layoutRow'), "aria-label": this.formatMessage('layoutRow'), active: (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row, onClick: () => { this.handleLayoutChange(_config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row); }, className: 'flex-sm-grow-1', size: 'lg' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: 'style-img w-100 h-100', icon: __webpack_require__(/*! ./assets/row.png */ "./your-extensions/widgets/list-112/src/setting/assets/row.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { icon: true, title: this.formatMessage('layoutColumn'), "aria-label": this.formatMessage('layoutColumn'), active: (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column, onClick: () => { this.handleLayoutChange(_config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Column); }, className: 'ml-2 flex-sm-grow-1', size: 'lg' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: 'style-img w-100 h-100', icon: __webpack_require__(/*! ./assets/column.png */ "./your-extensions/widgets/list-112/src/setting/assets/column.png") })),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { icon: true, title: this.formatMessage('layoutGrid'), "aria-label": this.formatMessage('layoutGrid'), active: (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID, onClick: () => { this.handleLayoutChange(_config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID); }, className: 'ml-2 flex-sm-grow-1', size: 'lg' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: 'style-img w-100 h-100', icon: __webpack_require__(/*! ./assets/grid.png */ "./your-extensions/widgets/list-112/src/setting/assets/grid.png") })))),
                    (config === null || config === void 0 ? void 0 : config.layoutType) !== _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID ? this.renderRowColumnLayoutSetting() : this.renderGridLayoutSetting(),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('pagingStyle'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('pagingStyle') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { style: { width: '100%' }, value: config.pageStyle, onChange: this.handlePageStyleChange, size: 'sm' }, this.getPageStyleOptions())),
                    config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.Scroll && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('scrollBar'), "aria-label": this.formatMessage('scrollBar') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.scrollBarOpen, "data-field": 'scrollBarOpen', onChange: this.handleFormChange, title: this.formatMessage('scrollBar') })))),
                    config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.Scroll && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('navigator'), "aria-label": this.formatMessage('navigator') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.navigatorOpen, "data-field": 'navigatorOpen', onChange: this.handleFormChange, title: this.formatMessage('navigator') })))),
                    config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.Scroll && config.navigatorOpen && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('listStep'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('listStep') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { value: config.scrollStep, style: { width: '100%' }, min: 1, onAcceptValue: this.handleScrollStepChange }))),
                    config.pageStyle === _config__WEBPACK_IMPORTED_MODULE_7__.PageStyle.MultiPage && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('itemPerPage'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('itemPerPage') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { value: config.itemsPerPage, style: { width: '100%' }, min: 1, onAcceptValue: this.handleItemsPerPageChange }))))));
        };
        this.handleAlignmentChange = (alignment) => {
            this.onPropertyChange('gridAlignment', alignment);
        };
        this.renderGridLayoutSetting = () => {
            const { config } = this.props;
            const cardSize = this.getCardSizeUnit(this.props);
            const availableUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PIXEL, jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PERCENTAGE];
            const heightAvailableUnits = [jimu_ui__WEBPACK_IMPORTED_MODULE_5__.DistanceUnits.PIXEL];
            const inputStyle = { width: '7.5rem' };
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-3' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.getItemSizeLabel(), flow: 'wrap' }),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('width') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-size-edit' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.SizeEditor, { disableModeSelect: true, label: 'W', mode: jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.LayoutItemSizeModes.Custom, value: cardSize === null || cardSize === void 0 ? void 0 : cardSize.width, availableUnits: availableUnits, onChange: value => { this.handleGridItemSizeChange(value); } }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'ml-3 d-flex', css: jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
            .icon {
              cursor: pointer;
              width: 12px;
            }
          ` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { title: this.formatMessage('listKeepAspectRatio'), placement: 'bottom' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'icon', onClick: this.handleKeepAspectRatioChange }, (config === null || config === void 0 ? void 0 : config.keepAspectRatio) ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_lock__WEBPACK_IMPORTED_MODULE_23__.LockOutlined, { size: 's' }) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_unlock__WEBPACK_IMPORTED_MODULE_24__.UnlockOutlined, { size: 's' })))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('height') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-size-edit' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.SizeEditor, { label: 'H', disableModeSelect: true, mode: jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.LayoutItemSizeModes.Custom, value: cardSize === null || cardSize === void 0 ? void 0 : cardSize.height, availableUnits: heightAvailableUnits, onChange: value => { this.handleGridItemSizeChange(value, true); }, disabled: config === null || config === void 0 ? void 0 : config.keepAspectRatio }))),
                (config === null || config === void 0 ? void 0 : config.keepAspectRatio) &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('sizeAspectRatio') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.InputRatio, { style: inputStyle, value: config.gridItemSizeRatio, onChange: this.debounceGridItemSizeRatioChange })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('alignment') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.TextAlignment, { textAlign: (config === null || config === void 0 ? void 0 : config.gridAlignment) || jimu_ui__WEBPACK_IMPORTED_MODULE_5__.TextAlignValue.CENTER, onChange: this.handleAlignmentChange })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: `${this.formatMessage('horizontalSpacing')} (px)`, role: 'group', "aria-label": `${this.formatMessage('horizontalSpacing')} (px)` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Slider, { style: { width: '60%' }, "data-field": 'horizontalSpace', onChange: this.handleFormChange, value: (config === null || config === void 0 ? void 0 : config.horizontalSpace) || 0, title: '0-50', size: 'sm', min: 0, max: 50 }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { style: { width: '25%' }, value: (config === null || config === void 0 ? void 0 : config.horizontalSpace) || 0, min: 0, max: 50, title: '0-50', onAcceptValue: this.handleHorizontalSpaceChange }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: `${this.formatMessage('verticalSpacing')} (px)`, role: 'group', "aria-label": `${this.formatMessage('verticalSpacing')} (px)` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Slider, { style: { width: '60%' }, "data-field": 'verticalSpace', onChange: this.handleFormChange, value: (config === null || config === void 0 ? void 0 : config.verticalSpace) || 0, title: '0-50', size: 'sm', min: 0, max: 50 }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { style: { width: '25%' }, value: config.verticalSpace || 0, min: 0, max: 50, title: '0-50', onAcceptValue: this.handleVerticalSpaceChange })))));
        };
        this.renderRowColumnLayoutSetting = () => {
            const { config } = this.props;
            const cardSize = this.getCardSizeUnit(this.props);
            const isVertical = (config === null || config === void 0 ? void 0 : config.layoutType) ? (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row : config.direction === _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType.Vertical;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'mt-3' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.getItemSizeLabel(), role: 'group', "aria-label": (isVertical ? this.formatMessage('itemHeight') : this.formatMessage('itemWidth')) + ' (px)' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { style: { width: '100%' }, value: parseFloat((isVertical ? cardSize.height.distance : cardSize.width.distance).toFixed(0)), min: _config__WEBPACK_IMPORTED_MODULE_7__.LIST_CARD_MIN_SIZE, disabled: config.lockItemRatio, onAcceptValue: this.handleItemSizeChange })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: '' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { title: this.formatMessage('lockItemRatio'), className: 'd-flex w-100 align-items-center cursor-pointer', "aria-label": this.formatMessage('lockItemRatio'), style: { paddingLeft: 0, paddingRight: 0 }, onClick: () => { this.handleCheckboxChange('lockItemRatio'); } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox, { className: 'lock-item-ratio', "data-field": 'lockItemRatio', checked: config.lockItemRatio, "aria-label": this.formatMessage('lockItemRatio') }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'lock-item-ratio-label text-left' }, this.formatMessage('lockItemRatio')))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: (isVertical ? this.formatMessage('verticalSpacing') : this.formatMessage('horizontalSpacing')) + ' (px)', role: 'group', "aria-label": (isVertical ? this.formatMessage('verticalSpacing') : this.formatMessage('horizontalSpacing')) + ' (px)' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Slider, { style: { width: '60%' }, "data-field": 'space', onChange: this.handleFormChange, value: config.space || 0, title: '0-50', size: 'sm', min: 0, max: 50 }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_my_input__WEBPACK_IMPORTED_MODULE_15__.MyNumericInput, { style: { width: '25%' }, value: config.space || 0, min: 0, max: 50, title: '0-50', onAcceptValue: this.handleSpaceChange })))));
        };
        this.getItemSizeLabel = () => {
            const { config } = this.props;
            const isVertical = (config === null || config === void 0 ? void 0 : config.layoutType) ? (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.Row : config.direction === _config__WEBPACK_IMPORTED_MODULE_7__.DirectionType.Vertical;
            const isGrid = (config === null || config === void 0 ? void 0 : config.layoutType) === _config__WEBPACK_IMPORTED_MODULE_7__.ListLayoutType.GRID;
            let labelString;
            if (isGrid) {
                labelString = this.formatMessage('gridItemSize');
            }
            else {
                labelString = isVertical ? `${this.formatMessage('itemHeight')} (px)` : `${this.formatMessage('itemWidth')} (px)`;
            }
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'flex-grow-1' }, labelString),
                this.getBrowserIcons(12));
        };
        this.getBrowserIcons = (iconSize) => {
            const { showCardSetting, browserSizeMode, layouts } = this.props;
            const currentLayout = layouts[showCardSetting];
            const autoMedium = !currentLayout[jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Medium];
            const autoMobile = !currentLayout[jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small];
            const isDesktop = this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Large || !currentLayout[browserSizeMode];
            const isPad = (this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Large && autoMedium) ||
                this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Medium ||
                (this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small && autoMedium && autoMobile);
            const isMobile = (this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Large && autoMobile) ||
                (this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Medium && autoMedium && autoMobile) ||
                this.props.browserSizeMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small;
            const color = this.props.theme.colors.palette.dark[200];
            const desktopLabel = this.formatMessage('applyToLargeScreen');
            const padLabel = this.formatMessage('applyToMediumScreen');
            const mobileLabel = this.formatMessage('applyToSmallScreen');
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between align-items-center' },
                isDesktop && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_desktop__WEBPACK_IMPORTED_MODULE_17__.DesktopOutlined, { size: iconSize, color: color, title: desktopLabel, "aria-label": desktopLabel }),
                isPad && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_tablet__WEBPACK_IMPORTED_MODULE_18__.TabletOutlined, { size: iconSize, color: color, className: isDesktop ? 'ml-1' : '', title: padLabel, "aria-label": padLabel }),
                isMobile && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_mobile__WEBPACK_IMPORTED_MODULE_19__.MobileOutlined, { size: iconSize, color: color, className: isDesktop || isPad ? 'ml-1' : '', title: mobileLabel, "aria-label": mobileLabel })));
        };
        this.renderStatsSetting = () => {
            const { config } = this.props;
            const { settingCollapse } = this.state;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.CollapsablePanel, { label: this.formatMessage('states'), isOpen: settingCollapse === _config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.States, onRequestOpen: () => { this.openSettingCollapse(_config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.States); }, onRequestClose: this.closeSettingCollapse, "aria-label": this.formatMessage('states') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: "mt-2" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.LinkSelector, { onSettingConfirm: this.onSettingLinkConfirm, linkParam: config.linkParam, useDataSources: this.props.useDataSources, widgetId: this.props.id })),
                    this.rednerBgSetting(),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('hover'), role: 'group', "aria-label": this.formatMessage('hover') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: 'setting-next d-flex text-break', "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover, onClick: this.onOpenCardSetting, type: 'tertiary', title: this.getToHoverSettingText(), size: 'sm', ref: ref => { this.toHoverSettingButtonRef = ref; } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, this.getToHoverSettingText()),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_20__.RightOutlined, { autoFlip: true, style: { flex: 'none' }, size: 12 }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('selected'), role: 'group', "aria-label": this.formatMessage('selected') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: 'setting-next d-flex text-break', "data-value": _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected, onClick: this.onOpenCardSetting, type: 'tertiary', title: this.getToSelectedSettingText(), size: 'sm', ref: ref => { this.toSelectedSettingButtonRef = ref; } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null, this.getToSelectedSettingText()),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_20__.RightOutlined, { autoFlip: true, style: { flex: 'none' }, size: 12 }))))));
        };
        this.getToHoverSettingText = () => {
            const { config } = this.props;
            return config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable ? this.formatMessage('on') : this.formatMessage('off');
        };
        this.getToSelectedSettingText = () => {
            const { config } = this.props;
            return config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode !== _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None ? this.formatMessage('on') : this.formatMessage('off');
        };
        this.renderToolSetting = () => {
            const { config, useDataSources } = this.props;
            const { settingCollapse } = this.state;
            const searchHint = config === null || config === void 0 ? void 0 : config.searchHint;
            const buttonProps = { showDynamicTitle: true };
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.CollapsablePanel, { label: this.formatMessage('tools'), isOpen: settingCollapse === _config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.Tools, onRequestOpen: () => { this.openSettingCollapse(_config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.Tools); }, onRequestClose: this.closeSettingCollapse },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: "mt-2", label: this.formatMessage('search'), "aria-label": this.formatMessage('search') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.searchOpen, "data-field": 'searchOpen', onChange: this.handleFormChange, title: this.formatMessage('search') }))),
                    config.searchOpen && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.formatMessage('chooseSearchingFields'), role: 'group', "aria-label": this.formatMessage('chooseSearchingFields') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex w-100 search-container', style: { zIndex: 3 } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.MultiSelect, { items: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.getSearchingFields(true)), values: config.searchFields &&
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(config.searchFields.split(',')), className: 'search-multi-select', fluid: true, size: 'sm', placeholder: this.formatMessage('listSelectSearchFields'), onClickItem: this.handleChooseSearchingFieldsChange, displayByValues: this.displaySelectedFields, buttonProps: buttonProps })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { title: this.formatMessage('exactMatch'), "aria-label": this.formatMessage('exactMatch'), className: 'd-flex align-items-center cursor-pointer', style: { marginTop: '10px', paddingLeft: 0, paddingRight: 0 }, onClick: () => { this.handleCheckboxChange('searchExact'); } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox, { "data-field": 'searchExact', checked: config.searchExact, "aria-label": this.formatMessage('exactMatch') }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'text-truncate lock-item-ratio-label' }, this.formatMessage('exactMatch'))))),
                    config.searchOpen && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.formatMessage('searctHint'), role: 'group', "aria-label": this.formatMessage('searctHint') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.TextInput, { size: 'sm', className: 'search-placeholder w-100', placeholder: this.formatMessage('search'), value: searchHint || '', onChange: this.onSearchPlaceholderChange }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('sort'), "aria-label": this.formatMessage('sort') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.sortOpen, "data-field": 'sortOpen', onChange: this.handleFormChange, title: this.formatMessage('sort') }))),
                    config.sortOpen && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SortSetting, { onChange: this.onSettingSortChange, useDataSource: useDataSources && useDataSources[0], value: config.sorts || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) }))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('filter'), "aria-label": this.formatMessage('filter') },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.filterOpen, "data-field": 'filterOpen', onChange: this.handleFormChange, title: this.formatMessage('filter') }))),
                    config.filterOpen && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: 'w-100 text-dark set-link-btn', color: !this.state.datasource ? 'secondary' : 'primary', disabled: !this.state.datasource, onClick: this.showSqlExprPopup, title: this.formatMessage('setFilters') }, this.formatMessage('setFilters')))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_12__.SqlExpressionBuilderPopup, { dataSource: this.state.datasource, isOpen: this.state.isSqlExprShow, toggle: this.toggleSqlExprPopup, expression: config.filter, onChange: this.onSqlExprBuilderChange })))),
                    config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode !==
                        _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('showSelection'), "aria-label": this.formatMessage('showSelection') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.showSelectedOnlyOpen, "data-field": 'showSelectedOnlyOpen', onChange: this.handleFormChange, title: this.formatMessage('showSelection') })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('clearSelection'), "aria-label": this.formatMessage('clearSelection') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: config.showClearSelected, "data-field": 'showClearSelected', onChange: this.handleFormChange, title: this.formatMessage('clearSelection') })))))));
        };
        this.renderRegularSetting = () => {
            const { datasource } = this.state;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-list-setting h-100 d-flex flex-column' },
                this.renderDataSetting(),
                this.renderDatasourcePlaceholder(),
                datasource && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, null,
                    this.renderArrangementSetting(),
                    this.renderStatsSetting(),
                    this.renderToolSetting()))));
        };
        this.renderDatasourcePlaceholder = () => {
            const { datasource } = this.state;
            const dsSelectString = this.formatMessage('setDataSource');
            return !datasource
                ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 text-center datasource-placeholder flex-grow-1 d-flex flex-column justify-content-center align-items-center' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_application_click__WEBPACK_IMPORTED_MODULE_21__.ClickOutlined, { size: 48 }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: 'text-Secondary', id: 'list-empty-tip' }, this.formatMessage('listBlankStatus', {
                            ButtonString: dsSelectString
                        })))))
                : null;
        };
        this.renderListCardSetting = () => {
            var _a;
            const statusIntl = {};
            statusIntl[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover] = this.formatMessage('hover');
            statusIntl[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected] = this.formatMessage('selected');
            statusIntl[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular] = this.formatMessage('regular');
            const { showCardSetting, config, id, browserSizeMode, layouts, appConfig, onSettingChange } = this.props;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'list-card-setting' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: 'd-flex text-truncate align-items-center card-setting-return', onClick: this.onCardSettingReturnBackClick, type: 'tertiary', size: 'sm', title: this.formatMessage('back') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_directional_arrow_left__WEBPACK_IMPORTED_MODULE_22__.ArrowLeftOutlined, { className: 'mr-1', autoFlip: true }),
                            statusIntl[showCardSetting]) }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('enableStatus', {
                            status: statusIntl[showCardSetting].toLocaleLowerCase()
                        }), "aria-label": this.formatMessage('enableStatus', { status: statusIntl[showCardSetting].toLocaleLowerCase() }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Switch, { checked: showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover
                                ? config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable
                                : config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode !==
                                    _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None, onChange: showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover
                                ? this.onHoverLayoutOpenChange
                                : this.onSelectionSwitch, title: this.formatMessage('enableStatus', { status: statusIntl[showCardSetting].toLocaleLowerCase() }) }))),
                ((showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected &&
                    config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode !==
                        _config__WEBPACK_IMPORTED_MODULE_7__.SelectionModeType.None) ||
                    (showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover &&
                        config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Hover].enable)) && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'card-setting-con' },
                    showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'clear-padding' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { flow: 'wrap', label: this.formatMessage('selectMode'), role: 'group', "aria-label": this.formatMessage('selectMode') },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { value: config.cardConfigs[_config__WEBPACK_IMPORTED_MODULE_7__.Status.Selected].selectionMode, onChange: this.onSelectionModeChange }, this.getSelectModeOptions())))),
                    this.rednerBgSetting(false),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'clear-padding' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_switch_layout__WEBPACK_IMPORTED_MODULE_10__["default"], { id: id, onSettingChange: onSettingChange, listLayout: (_a = config.cardConfigs[showCardSetting]) === null || _a === void 0 ? void 0 : _a.listLayout, status: showCardSetting, browserSizeMode: browserSizeMode, mainSizeMode: appConfig.mainSizeMode, layouts: layouts, config: config, appConfig: appConfig }))))));
        };
        initStyles(props.id);
        this.state = {
            datasource: null,
            isTextExpPopupOpen: false,
            currentTextInput: '',
            isTipExpPopupOpen: false,
            isSqlExprShow: false,
            isTemplateContainScroll: false,
            templateConWidth: 0,
            settingCollapse: _config__WEBPACK_IMPORTED_MODULE_7__.SettingCollapseType.None
        };
        this.listUseTipRef = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        this.debounceGridItemSizeRatioChange = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce((value) => { this.handleGridItemSizeRatioChange(value); }, 200);
    }
    componentDidMount() {
        const { config, id, useDataSourcesEnabled } = this.props;
        let { appConfig } = this.props;
        if (!config.isInitialed) {
            if (!useDataSourcesEnabled) {
                appConfig = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)().editWidget(appConfig.widgets[id].set('useDataSourcesEnabled', true)).appConfig;
            }
            this.onItemStyleChanged(config.itemStyle, config === null || config === void 0 ? void 0 : config.isCheckEmptyTemplate, appConfig);
        }
        window.addEventListener('resize', this.updateStartButtonPosition);
    }
    componentWillUnmount() {
        const { dispatch, id } = this.props;
        dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(id, 'settingPanelChange', null));
        clearTimeout(this.updatePositionTimeout);
    }
    componentDidUpdate(preProps) {
        var _a, _b;
        const { useDataSources, config, settingPanelChange } = this.props;
        // if fields will change in componentDidUpdate
        let fieldsWillChange = false;
        if (useDataSources !== preProps.useDataSources) {
            const old = (_a = preProps.useDataSources) === null || _a === void 0 ? void 0 : _a[0];
            const now = (_b = this.props.useDataSources) === null || _b === void 0 ? void 0 : _b[0];
            if (!now || !old || (old === null || old === void 0 ? void 0 : old.dataSourceId) !== (now === null || now === void 0 ? void 0 : now.dataSourceId)) {
                this.onConfigChange(config
                    .set('sorts', undefined)
                    .set('searchFields', undefined)
                    .set('filter', undefined));
                fieldsWillChange = true;
                if (!this.needUpdateFields) {
                    this.needUpdateFields = true;
                }
                if (old && !now) {
                    // remove from ds manager
                    this.setDatasource(undefined);
                }
            }
            if (!useDataSources ||
                useDataSources.length < 1 ||
                !preProps.useDataSources ||
                preProps.useDataSources.length < 1 ||
                preProps.useDataSources[0].dataSourceId !==
                    useDataSources[0].dataSourceId) {
                this.onConfigChange(config
                    .set('sorts', undefined)
                    .set('searchFields', undefined)
                    .set('filter', undefined));
                fieldsWillChange = true;
                if (!this.needUpdateFields) {
                    this.needUpdateFields = true;
                }
            }
        }
        if (this.needUpdateFields && !fieldsWillChange) {
            this.needUpdateFields = false;
            this.changeUsedFields();
        }
        if (preProps.settingPanelChange !== 'content' && settingPanelChange === 'content') {
            this.updateStartButtonPosition();
        }
    }
    getIndexForPickerData(value, data) {
        let index = -1;
        data.some((d, i) => {
            if (value === d.value) {
                index = i;
                return true;
            }
            else {
                return false;
            }
        });
        return index;
    }
    rednerBgSetting(isClearBorder = true) {
        const { config, showCardSetting } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, null,
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: `clear-padding ${isClearBorder && 'clear-border clear-padding-bottom'}` },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('background'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('background') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.BackgroundSetting, { background: config.cardConfigs[showCardSetting].backgroundStyle.background, onChange: value => { this.onBackgroundStyleChange(showCardSetting, 'background', value); } }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: `clear-padding ${isClearBorder && 'clear-border'}` },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('border'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('border') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.BorderSetting, { value: config.cardConfigs[showCardSetting].backgroundStyle.border, onChange: value => { this.onBackgroundStyleChange(showCardSetting, 'border', value); } })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.formatMessage('borderRadius'), flow: 'wrap', role: 'group', "aria-label": this.formatMessage('borderRadius') },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_style_setting_components__WEBPACK_IMPORTED_MODULE_4__.BorderRadiusSetting, { value: config.cardConfigs[showCardSetting].backgroundStyle.borderRadius, onChange: value => {
                            this.onBackgroundStyleChange(showCardSetting, 'borderRadius', value);
                        } })))));
    }
    render() {
        const { config, showCardSetting, selectionIsInSelf } = this.props;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)(`${prefix}list-setting`, `${prefix}setting`), css: this.getStyle(this.props.theme) }, !selectionIsInSelf && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'h-100' },
            !config.isItemStyleConfirm
                ? (this.renderTemplate())
                : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_11__.Fragment, null,
                    showCardSetting === _config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular && this.renderRegularSetting(),
                    showCardSetting !== _config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular && this.renderListCardSetting())),
            this.props.useDataSources &&
                this.props.useDataSources[0] &&
                this.props.useDataSources[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'waiting-for-database' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.useDataSources[0], onDataSourceCreated: this.onDsCreate, onDataSourceInfoChange: this.onDataSourceInfoChange }))))));
    }
}
Setting.mapExtraStateProps = (state, props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const { id } = props;
    return {
        appConfig: state && state.appStateInBuilder && state.appStateInBuilder.appConfig,
        appMode: state &&
            state.appStateInBuilder &&
            state.appStateInBuilder.appRuntimeInfo &&
            state.appStateInBuilder.appRuntimeInfo.appMode,
        browserSizeMode: state &&
            state.appStateInBuilder &&
            state.appStateInBuilder.browserSizeMode,
        showCardSetting: (state &&
            state.appStateInBuilder &&
            state.appStateInBuilder.widgetsState &&
            state.appStateInBuilder.widgetsState[id] &&
            state.appStateInBuilder.widgetsState[id].showCardSetting) ||
            _config__WEBPACK_IMPORTED_MODULE_7__.Status.Regular,
        selectionIsInSelf: (_b = (_a = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _a === void 0 ? void 0 : _a.widgetsState[id]) === null || _b === void 0 ? void 0 : _b.selectionIsInSelf,
        settingPanelChange: (_d = (_c = state === null || state === void 0 ? void 0 : state.widgetsState) === null || _c === void 0 ? void 0 : _c[props.id]) === null || _d === void 0 ? void 0 : _d.settingPanelChange,
        layoutInfo: (_f = (_e = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _e === void 0 ? void 0 : _e.widgetsState[id]) === null || _f === void 0 ? void 0 : _f.layoutInfo,
        widgetRect: (_h = (_g = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _g === void 0 ? void 0 : _g.widgetsState[id]) === null || _h === void 0 ? void 0 : _h.widgetRect,
        parentSize: (_k = (_j = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _j === void 0 ? void 0 : _j.widgetsState[id]) === null || _k === void 0 ? void 0 : _k.parentSize,
        viewportSize: jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.findViewportSize((_l = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _l === void 0 ? void 0 : _l.appConfig, (_m = state === null || state === void 0 ? void 0 : state.appStateInBuilder) === null || _m === void 0 ? void 0 : _m.browserSizeMode)
    };
};
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9saXN0LTExMi9kaXN0L3NldHRpbmcvc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRWE7QUFFbkQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDeEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNEVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWU7QUFFckQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsOEVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWM7QUFFcEQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNkVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWM7QUFFcEQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNkVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWtCO0FBRXhELE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDNUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsaUZBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWE7QUFFbkQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDeEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNEVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRU87QUFFN0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsc0VBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRVM7QUFFL0MsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDekQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsd0VBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRVU7QUFFaEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUseUVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWE7QUFFbkQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNEVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdCO0FBQzREO0FBQzVCO0FBQ1Q7QUFFekMsU0FBUyxVQUFVLENBQUUsS0FBSyxFQUFFLFFBQWtCO0lBQ25ELE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7SUFDL0MsTUFBTSxTQUFTLEdBQUcsb0VBQWtCLEVBQUUsQ0FBQyxTQUFTO0lBQ2hELE1BQU0sV0FBVyxHQUFHLHVHQUE4QyxDQUNoRSxTQUFTLEVBQ1QsRUFBRSxFQUNGLDREQUFxQixFQUNyQixlQUFlLENBQ2hCO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sUUFBUSxHQUFHLGtHQUF5QyxDQUN4RCxTQUFTLEVBQ1QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDeEI7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsSUFDRSxVQUFVO29CQUNWLFVBQVUsQ0FBQyxRQUFRO29CQUNuQixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDbkM7b0JBQ0EsTUFBTSxhQUFhLEdBQ2pCLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZO3dCQUNyQyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ3BELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWE7b0JBQ3BFLElBQUksYUFBYSxFQUFFO3dCQUNqQixNQUFNLGVBQWUsR0FBRyxpRkFBd0IsQ0FDOUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFDakMsZUFBZSxFQUNmLFNBQVMsQ0FBQyxZQUFZLENBQ3ZCO3dCQUNELE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQ2pDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQzVDO3dCQUNELElBQUksUUFBUSxFQUFFOzRCQUNaLFFBQVEsQ0FBQyxrRUFBMkIsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDbEQ7NkJBQU07NEJBQ0wsd0ZBQTBDLENBQUMsVUFBVSxDQUFDO3lCQUN2RDtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7YUFBTSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLElBQUksUUFBUSxFQUFFO2dCQUNaLFFBQVEsQ0FBQyxrRUFBMkIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCx3RkFBMEMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7U0FDRjtLQUNGO0FBQ0gsQ0FBQztBQUVNLFNBQVMsZ0JBQWdCLENBQzlCLEtBQUssRUFDTCxXQUFXLEVBQ1gsWUFBc0IsRUFDdEIsUUFBaUIsS0FBSyxFQUN0QixTQUFrQixLQUFLLEVBQ3ZCLFFBQWlCLEtBQUssRUFDdEIsWUFBeUIsU0FBUztJQUVsQyxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7SUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLFNBQVMsR0FBRyxvRUFBa0IsRUFBRSxDQUFDLFNBQVM7S0FDM0M7SUFDRCxNQUFNLE1BQU0sR0FBRyxvRUFBa0IsQ0FBQyxTQUFTLENBQUM7SUFFNUMsTUFBTSxDQUFDLGdCQUFnQixDQUNyQixFQUFFLEVBQ0YsWUFBWTtTQUNULEtBQUssQ0FDSixDQUFDLGFBQWEsRUFBRSxtREFBYyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsRUFDNUQsV0FBVyxDQUNaO1NBQ0EsS0FBSyxDQUNKLENBQUMsYUFBYSxFQUFFLGlEQUFZLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxFQUMxRCxXQUFXLENBQ1o7U0FDQSxLQUFLLENBQ0osQ0FBQyxhQUFhLEVBQUUsb0RBQWUsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLEVBQzdELFdBQVcsQ0FDWixDQUNKO0lBRUQsT0FBTyxNQUFNO0FBQ2YsQ0FBQztBQUVELG1IQUFtSDtBQUNuSCxnQ0FBZ0M7QUFDaEMseUNBQXlDO0FBQ3pDLGtJQUFrSTtBQUNsSSxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQywyR0FBMkc7QUFDM0csc0JBQXNCO0FBQ3RCLDBEQUEwRDtBQUMxRCxvSEFBb0g7QUFDcEgsbUlBQW1JO0FBQ25JLDJHQUEyRztBQUMzRywrQkFBK0I7QUFDL0IsK0pBQStKO0FBQy9KLDBGQUEwRjtBQUMxRixjQUFjO0FBQ2QsWUFBWTtBQUNaLFVBQVU7QUFDVix3Q0FBd0M7QUFDeEMscUNBQXFDO0FBQ3JDLFFBQVE7QUFDUixNQUFNO0FBQ04scUJBQXFCO0FBQ3JCLGNBQWM7QUFDZCxNQUFNO0FBQ04sa0pBQWtKO0FBQ2xKLDJCQUEyQjtBQUMzQixrREFBa0Q7QUFDbEQsb0JBQW9CO0FBQ3BCLG1EQUFtRDtBQUVuRCx1REFBdUQ7QUFDdkQsb0ZBQW9GO0FBQ3BGLGtHQUFrRztBQUNsRyxhQUFhO0FBQ2IsaUdBQWlHO0FBQ2pHLHNGQUFzRjtBQUN0RixRQUFRO0FBQ1Isa0RBQWtEO0FBQ2xELE1BQU07QUFDTixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0Msa0VBQWtFO0FBQ2xFLGdFQUFnRTtBQUNoRSx1QkFBdUI7QUFDdkIseUNBQXlDO0FBQ3pDLDRCQUE0QjtBQUM1QiwyQ0FBMkM7QUFDM0MsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SEcsTUFBTSxpQkFBaUIsR0FBRyxDQUFDO0FBQzNCLE1BQU0sa0JBQWtCLEdBQUcsRUFBRTtBQUM3QixNQUFNLFNBQVMsR0FBRyxFQUFFO0FBQ3BCLE1BQU0sYUFBYSxHQUFHLEVBQUU7QUFDeEIsTUFBTSxjQUFjLEdBQUcsQ0FBQztBQUN4QixNQUFNLHNCQUFzQixHQUFHLEVBQUU7QUFDakMsTUFBTSx1QkFBdUIsR0FBRyxFQUFFO0FBQ2xDLE1BQU0saUNBQWlDLEdBQUcsR0FBRztBQUM3QyxNQUFNLDhCQUE4QixHQUFHLEdBQUc7QUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHO0FBQzdCLE1BQU0sYUFBYSxHQUFHLEVBQUU7QUFDeEIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDO0FBRWpDLElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUM3QixvQ0FBYTtJQUNiLGtEQUEyQjtJQUMzQix3Q0FBaUI7SUFDakIsc0NBQWU7QUFDakIsQ0FBQyxFQUxXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFLOUI7QUFpQ0QsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLDJCQUFhO0lBQ2IsK0JBQWlCO0FBQ25CLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjtBQUVELElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQixrQ0FBYTtJQUNiLHNDQUFpQjtJQUNqQiwwQ0FBcUI7QUFDdkIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIsOEJBQWlCO0lBQ2pCLG9DQUF1QjtBQUN6QixDQUFDLEVBSFcsU0FBUyxLQUFULFNBQVMsUUFHcEI7QUFFRCxJQUFZLFNBSVg7QUFKRCxXQUFZLFNBQVM7SUFDbkIsaUNBQW9CO0lBQ3BCLDhCQUFpQjtJQUNqQiw2QkFBZ0I7QUFDbEIsQ0FBQyxFQUpXLFNBQVMsS0FBVCxTQUFTLFFBSXBCO0FBRUQsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLG9DQUFtQjtJQUNuQixzQ0FBcUI7QUFDdkIsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLDZCQUFXO0lBQ1gsbUNBQWlCO0lBQ2pCLCtCQUFhO0FBQ2YsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCO0FBRUQsSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLG9DQUFlO0lBQ2Ysa0NBQWE7SUFDYixvQ0FBZTtBQUNqQixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiw4QkFBaUI7SUFDakIsOEJBQWlCO0lBQ2pCLDhCQUFpQjtJQUNqQiw4QkFBaUI7QUFDbkIsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBRUQsSUFBWSxhQUtYO0FBTEQsV0FBWSxhQUFhO0lBQ3ZCLGtDQUFpQjtJQUNqQixrQ0FBaUI7SUFDakIsa0NBQWlCO0lBQ2pCLGtDQUFpQjtBQUNuQixDQUFDLEVBTFcsYUFBYSxLQUFiLGFBQWEsUUFLeEI7QUFFRCxJQUFZLFNBV1g7QUFYRCxXQUFZLFNBQVM7SUFDbkIsOEJBQWlCO0lBQ2pCLDhCQUFpQjtJQUNqQiw4QkFBaUI7SUFDakIsOEJBQWlCO0lBQ2pCLDhCQUFpQjtJQUNqQiw4QkFBaUI7SUFDakIsOEJBQWlCO0lBQ2pCLDhCQUFpQjtJQUNqQiw4QkFBaUI7SUFDakIsOEJBQWlCO0FBQ25CLENBQUMsRUFYVyxTQUFTLEtBQVQsU0FBUyxRQVdwQjtBQUVELElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNoQiw2QkFBbUI7SUFDbkIsK0JBQXFCO0lBQ3JCLHlCQUFlO0FBQ2pCLENBQUMsRUFKVyxNQUFNLEtBQU4sTUFBTSxRQUlqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeko0QztBQUNQO0FBaUIvQixNQUFNLGNBQWUsU0FBUSwwREFBaUM7SUFDbkUsWUFBYSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFnQmQsc0JBQWlCLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVDLENBQUM7UUFoQkMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztTQUNuQjtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBRSxRQUFRO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN2QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7U0FDSDtJQUNILENBQUM7SUFNRCxNQUFNO1FBQ0osTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDbEUsT0FBTyxDQUNMLDJEQUFDLGlEQUFZLElBQ1gsU0FBUyxFQUFFLHFEQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUM1QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsR0FBRyxFQUFFLEdBQUcsRUFDUixLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFFBQVEsRUFDbEIsU0FBUyxFQUFFLENBQUMsRUFDWixJQUFJLEVBQUMsUUFBUSxFQUNiLElBQUksRUFBQyxJQUFJLEVBQ1QsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ2pDLENBQUMsRUFDRCxhQUFhLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxDQUFDLEdBQ3BELENBQ0g7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REQsZUFBZTtBQUNzSDtBQUVyRTtBQUNBO0FBQzJEO0FBQ3ZFO0FBQ21CO0FBQ2Q7QUFDbUI7QUFDakM7QUFhM0MsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF5QixFQUFFLEVBQUU7O0lBQ2xELE1BQU0sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSztJQUNuRyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsR0FBRywrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN4RCxNQUFNLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xFLE1BQU0sTUFBTSxHQUFHLG1EQUFZLENBQWEsVUFBVSxDQUFDO0lBQ25ELE1BQU0sU0FBUyxHQUFHLG1EQUFZLENBQWEsVUFBVSxDQUFDO0lBRXRELGdEQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVTtRQUNqQyxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVO0lBQ3RDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVuQixNQUFNLEtBQUssR0FBRywwQ0FBRzs7OztHQUloQjtJQUVELE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtRQUN4QixTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsT0FBTztJQUNwQyxDQUFDO0lBRUQsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO1FBQ3pCLE1BQU0sZUFBZSxHQUFHLGlGQUF3QixDQUFDLE9BQU8sQ0FBQyxtREFBYyxDQUFDLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztRQUN4RyxNQUFNLFdBQVcsR0FBRyxpRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFlBQVksQ0FBQztRQUM1RixNQUFNLE1BQU0sR0FBVztZQUNyQixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFLE1BQU07WUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNaLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsZUFBZSxFQUFFLGVBQWU7WUFDaEMsV0FBVyxFQUFFLFdBQVc7WUFDeEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssb0RBQWUsRUFBRTtZQUN0QywyREFBYSxDQUFDLE1BQU0sQ0FBQztTQUN0QjthQUFNO1lBQ0wsNkRBQWUsQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2hCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87SUFDcEMsQ0FBQztJQUVELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxTQUFxQixFQUFFLEVBQUU7UUFDbkQsSUFBSSxTQUFTLENBQUMsT0FBTyxLQUFLLFNBQVM7WUFBRSxPQUFNO1FBQzNDLElBQUksU0FBUyxLQUFLLG9EQUFlLEVBQUU7WUFDakMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDOUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzVDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDaEQsZUFBZSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzlDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNmLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUztJQUM1QixDQUFDO0lBRUQsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLEVBQUU7UUFDN0IsT0FBTyxDQUNMLCtDQUFDLDBDQUFLLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFFBQVE7WUFDbkQsK0NBQUMsZ0RBQVcsSUFBQyxNQUFNLEVBQUUsWUFBWTtnQkFDL0IsK0NBQUMsa0ZBQWUsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxFQUFFLEdBQUc7Z0JBQzVDLGFBQWEsQ0FDRjtZQUNkLCtDQUFDLDhDQUFTO2dCQUNSLDREQUFNLFlBQVksQ0FBTztnQkFDekIsd0RBQUssU0FBUyxFQUFDLE1BQU0sSUFBRSxrQkFBa0IsQ0FBTyxDQUN0QztZQUNaLCtDQUFDLGdEQUFXO2dCQUNWLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsSUFBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQVU7Z0JBQzNGLCtDQUFDLDJDQUFNLElBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRSxhQUFhLElBQzVELEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FDSCxDQUNHLENBQ1IsQ0FDVDtJQUNILENBQUM7SUFFRCxNQUFNLEdBQUcsR0FBRywyREFBb0IsQ0FBQyw2REFBYyxFQUFFLG9EQUFtQixFQUFFLHNEQUFzQixDQUFDO0lBRTdGLE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxPQUFPLGdCQUFhLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDckQsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNO1lBQzNDLCtDQUFDLDBDQUFLLElBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxXQUFXLDBDQUFHLE1BQU0sQ0FBQywwQ0FBRSxVQUFVLE1BQUssb0RBQWUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsb0RBQWUsQ0FBQyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsTUFBTSxHQUFFOztZQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDaEw7UUFDYiwrQ0FBQywyRUFBVTtZQUNULCtDQUFDLDBDQUFLLElBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxXQUFXLDBDQUFHLE1BQU0sQ0FBQywwQ0FBRSxVQUFVLE1BQUssc0RBQWlCLElBQUksQ0FBQyxtQkFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsMENBQUcsTUFBTSxDQUFDLDBDQUFFLFVBQVUsR0FBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsa0JBQWtCLENBQUMsc0RBQWlCLENBQUMsRUFBQyxDQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU0sR0FBRTs7WUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQ3RPO1FBQ1osaUJBQWlCLEVBQUUsQ0FDaEIsQ0FDUDtBQUNILENBQUM7QUFFRCxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDekg1QixpRUFBZTtJQUNiLG1CQUFtQixFQUFFLGlCQUFpQjtJQUN0QyxVQUFVLEVBQUUsYUFBYTtJQUN6QixRQUFRLEVBQUUsZUFBZTtJQUN6QixXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLGlCQUFpQixFQUFFLG9CQUFvQjtJQUN2QyxtQkFBbUIsRUFBRSxzQkFBc0I7SUFDM0MsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxpQkFBaUIsRUFBRSxvQkFBb0I7SUFDdkMscUJBQXFCLEVBQUUsNEJBQTRCO0lBQ25ELGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixXQUFXLEVBQUUsY0FBYztJQUMzQixNQUFNLEVBQUUsUUFBUTtJQUNoQixTQUFTLEVBQUUsWUFBWTtJQUN2QixjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLEdBQUcsRUFBRSxLQUFLO0lBQ1YsRUFBRSxFQUFFLElBQUk7SUFDUixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsWUFBWSxFQUFFLGdWQUFnVjtJQUM5VixnQkFBZ0IsRUFBRSwrQkFBK0I7SUFDakQsb0JBQW9CLEVBQUUsMEJBQTBCO0lBQ2hELGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0Isb0JBQW9CLEVBQUUseUJBQXlCO0lBQy9DLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsZ0JBQWdCLEVBQUUsdUJBQXVCO0lBQ3pDLFlBQVksRUFBRSxnQ0FBZ0M7SUFDOUMscUJBQXFCLEVBQUUseUJBQXlCO0lBQ2hELHNCQUFzQixFQUFFLHlCQUF5QjtJQUNqRCxjQUFjLEVBQUUsZ0NBQWdDO0lBQ2hELFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLFVBQVUsRUFBRSxhQUFhO0lBQ3pCLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLGFBQWEsRUFBRSwyQkFBMkI7SUFDMUMsUUFBUSxFQUFFLE1BQU07SUFDaEIsb0JBQW9CLEVBQUUsZUFBZTtJQUNyQyxZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFNBQVMsRUFBRSxZQUFZO0lBQ3ZCLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixhQUFhLEVBQUUsV0FBVztJQUMxQixjQUFjLEVBQUUsWUFBWTtJQUU1QixpQkFBaUI7SUFDakIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsYUFBYSxFQUFFLDZCQUE2QjtJQUM1QyxRQUFRLEVBQUUsWUFBWTtJQUN0QixpQkFBaUIsRUFBRSx3QkFBd0I7SUFDM0MsTUFBTSxFQUFFLFFBQVE7SUFDaEIsZ0JBQWdCLEVBQUUsd0JBQXdCO0lBQzFDLGNBQWMsRUFBRSxpQkFBaUI7SUFDakMsc0JBQXNCLEVBQUUseUJBQXlCO0lBQ2pELFVBQVUsRUFBRSxtQ0FBbUM7SUFDL0MsUUFBUSxFQUFFLGFBQWE7SUFDdkIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsYUFBYSxFQUFFLGlCQUFpQjtJQUVoQyxXQUFXO0lBQ1gsZUFBZSxFQUFFLDJCQUEyQjtJQUM1QyxVQUFVLEVBQUUsUUFBUTtJQUNwQixzQkFBc0IsRUFBRSx5RUFBeUU7SUFDakcsVUFBVSxFQUFFLE1BQU07SUFDbEIsZUFBZSxFQUFFLHNFQUFzRTtJQUV2Rix1QkFBdUIsRUFBRSw2Q0FBNkM7SUFDdEUscUJBQXFCLEVBQUUsMkNBQTJDO0lBQ2xFLHNCQUFzQixFQUFFLDBFQUEwRTtJQUNsRyw0QkFBNEIsRUFBRSxnTkFBZ047SUFDOU8sb0JBQW9CLEVBQUUseUdBQXlHO0lBQy9ILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEMsMkJBQTJCLEVBQUUsc0NBQXNDO0lBQ25FLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLGVBQWUsRUFBRSxjQUFjO0lBQy9CLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxZQUFZLEVBQUUsVUFBVTtJQUN4QixZQUFZLEVBQUUsV0FBVztJQUN6QixvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsdUJBQXVCLEVBQUUseUJBQXlCO0lBQ2xELHFCQUFxQixFQUFFLHVCQUF1QjtDQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRitGO0FBQzNDO0FBWTlDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDOUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTTtJQUMzRSxNQUFNLE1BQU0sR0FBRyxvRUFBa0IsRUFBRTtJQUNuQyxNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3pELE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztJQUN2QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsRUFBRSxNQUFNLENBQUM7SUFDN0UsSUFBSSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNoRSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUM7SUFDaEUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUN2RSxDQUFDO0FBRU0sTUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUNoRCxNQUFNLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTTtJQUN0RixNQUFNLGVBQWUsR0FBRyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsaUJBQWlCLENBQUMsZUFBZTtJQUNsRixNQUFNLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQ3pELE1BQU0sTUFBTSxHQUFHLG9FQUFrQixFQUFFO0lBRW5DLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztJQUNwRSxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUM7SUFFN0QsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ2hGLFdBQVcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7SUFFckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEVBQUUsTUFBTSxDQUFDO0lBQzdFLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQztJQUUvRixnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLENBQUM7SUFDaEUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5RCx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUM7SUFDcEUsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQztJQUNwRSxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ2YsQ0FBQztBQUVNLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxTQUFzQixFQUFFLFFBQWdCLEVBQStCLEVBQUU7SUFDekcsTUFBTSxPQUFPLEdBQUcsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU87SUFDbEMsTUFBTSxVQUFVLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFHLFFBQVEsQ0FBQztJQUN0QyxPQUFPLFVBQVU7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7QUNwREQsaUNBQWlDOzs7Ozs7Ozs7O0FDQWpDLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDOzs7Ozs7Ozs7O0FDQWpDLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDOzs7Ozs7Ozs7O0FDQWpDLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDOzs7Ozs7Ozs7O0FDQWpDLGlDQUFpQzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUM7Ozs7Ozs7Ozs7O0FDQWpDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObkQsZUFBZTtBQWtDRztBQU1PO0FBS1c7QUFRUTtBQVFNO0FBa0JsQztBQUc4QjtBQWtCNUI7QUFDd0M7QUFDTjtBQUNFO0FBQ3RCO0FBQ21EO0FBQ3ZCO0FBQzJCO0FBQ2pDO0FBRVc7QUFDUTtBQUNGO0FBQ0E7QUFDRjtBQUNBO0FBQ1M7QUFDaEI7QUFDSTtBQUNsRSxNQUFNLE1BQU0sR0FBRyxjQUFjO0FBRTdCLE1BQU0sZUFBZSxHQUFnQztJQUNuRCxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztJQUM5QyxNQUFNLEVBQUUsbUJBQU8sQ0FBQyw2R0FBNkIsQ0FBQztDQUMvQztBQUVELE1BQU0sZUFBZSxHQUFnQztJQUNuRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ1g7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxHQUFHO0tBQ1o7Q0FDRjtBQUVELE1BQU0saUJBQWlCLEdBQXNDO0lBQzNELE1BQU0sRUFBRSwwREFBcUI7SUFDN0IsTUFBTSxFQUFFLDBEQUFxQjtJQUM3QixNQUFNLEVBQUUsMERBQXFCO0lBQzdCLE1BQU0sRUFBRSwwREFBcUI7SUFDN0IsTUFBTSxFQUFFLHVEQUFrQjtJQUMxQixNQUFNLEVBQUUsdURBQWtCO0lBQzFCLE1BQU0sRUFBRSx1REFBa0I7SUFDMUIsTUFBTSxFQUFFLHVEQUFrQjtJQUMxQixNQUFNLEVBQUUsd0RBQW1CO0lBQzNCLE1BQU0sRUFBRSx3REFBbUI7Q0FDNUI7QUFFRCxJQUFJLFNBQXNDO0FBQzFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzVCLEVBQUUsRUFDRiw2REFBZSxFQUNmLG9EQUFxQixFQUNyQix3RUFBMEIsQ0FDM0I7QUFFRCxTQUFTLFVBQVUsQ0FBRSxRQUFnQjtJQUNuQyxJQUFJLFNBQVMsRUFBRTtRQUNiLE9BQU8sU0FBUztLQUNqQjtJQUNELFNBQVMsR0FBRyxFQUFFO0lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDM0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLDhFQUFnQyxDQUNqRCxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQ3RCLFFBQVEsRUFDUixRQUFRLENBQ1Q7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBOEJELE1BQU0sZUFBZSxHQUFHLG9EQUFTLENBQUM7SUFDaEMsc0VBQStCO0lBQy9CLG9FQUE2QjtDQUM5QixDQUFDO0FBRWEsTUFBTSxPQUFRLFNBQVEsMERBR3BDO0lBcURDLFlBQWEsS0FBSztRQUNoQixLQUFLLENBQUMsS0FBSyxDQUFDO1FBN0NkLG9CQUFlLEdBQUc7WUFDaEIsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBRUQsdUJBQWtCLEdBQUc7WUFDbkIsTUFBTSxFQUFFLEVBQUU7WUFDVixPQUFPLEVBQUUsRUFBRTtTQUNaO1FBK0VELHFCQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUU3QixJQUFJLEtBQUssS0FBSyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLE9BQU07YUFDUDtZQUNELElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxjQUFjLEVBQUU7Z0JBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJO2FBQzdCO1lBQ0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3JDLElBQUksY0FBYyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDekQsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNsQyxNQUFNLFVBQVUsR0FBRztvQkFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsY0FBYyxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7YUFDdkM7UUFDSCxDQUFDO1FBRUQsbUJBQWMsR0FBRyxTQUFTLENBQUMsRUFBRTtZQUMzQixNQUFNLFVBQVUsR0FBRztnQkFDakIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLFNBQVM7YUFDbEI7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDeEMsQ0FBQztRQUVELDRCQUF1QixHQUFHLENBQUMsTUFBYyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2RCxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDM0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQ25CLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLENBQUMsRUFDL0MsS0FBSyxDQUNOO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUVELDBCQUFxQixHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUM7UUFFZ0Isd0JBQW1CLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDbEUsTUFBTSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzlELElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUMzQixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLG9EQUFlLENBQUMsQ0FBQyxhQUFhO1lBQ3ZFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0RBQWUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxzREFBaUI7WUFDdEYsSUFBSSxhQUFhLEtBQUssS0FBSyxFQUFFO2dCQUMzQixPQUFNO2FBQ1A7WUFDRCxJQUFJLE1BQU0sR0FBRyxvRUFBa0IsRUFBRTtZQUNqQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxvREFBZSxFQUFFLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUMvRSxJQUFJLGFBQWEsS0FBSywyREFBc0IsSUFBSSxLQUFLLEtBQUssMkRBQXNCLEVBQUU7Z0JBQ2hGLElBQUksVUFBVSxLQUFLLHNEQUFpQixFQUFFO29CQUNwQyx5QkFBeUI7b0JBQ3pCLE1BQU0sV0FBVyxHQUFHLGlGQUF3QixDQUMxQyxPQUFPLENBQUMsb0RBQWUsQ0FBQyxFQUN4QixlQUFlLEVBQ2YsU0FBUyxDQUFDLFlBQVksQ0FDdkI7b0JBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztpQkFDL0M7Z0JBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtREFBYyxDQUFDO2FBQ3pDO2lCQUFNLElBQUksYUFBYSxLQUFLLDJEQUFzQixJQUFJLEtBQUssS0FBSywyREFBc0IsRUFBRTtnQkFDdkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvREFBZSxFQUFFLE1BQU0sQ0FBQztnQkFDM0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9EQUFlLENBQUM7YUFDMUM7aUJBQU0sSUFBSSxhQUFhLEtBQUssMkRBQXNCLElBQUksS0FBSyxLQUFLLDJEQUFzQixFQUFFO2dCQUN2RixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRTthQUMzQztRQUNILENBQUM7UUFFRCxzQkFBaUIsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDbkMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLDZEQUF3QixDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxtQkFBbUIsQ0FBQywyREFBc0IsQ0FBQzthQUNqRDtRQUNILENBQUM7UUFFRCw0QkFBdUIsR0FBRyxHQUFHLENBQUMsRUFBRTs7WUFDOUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUN0RSxNQUFNLFVBQVUsR0FBRyxtQkFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsMENBQUcsaURBQVksQ0FBQywwQ0FBRSxVQUFVLEtBQUksc0RBQWlCO1lBQ3ZGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNoQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsaURBQVksQ0FBQyxDQUFDLE1BQU0sS0FBSyxLQUFLO2dCQUFFLE9BQU07WUFDN0QsSUFBSSxNQUFNLEdBQUcsb0VBQWtCLEVBQUU7WUFDakMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxpREFBWSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUM1RSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxpREFBWSxFQUFFLFlBQVksQ0FBQyxFQUFFLG9EQUFlLENBQUM7WUFDekYsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLGlEQUFZLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JELElBQUksVUFBVSxLQUFLLHNEQUFpQixFQUFFO29CQUNwQyxzQkFBc0I7b0JBQ3RCLE1BQU0sV0FBVyxHQUFHLGlGQUF3QixDQUMxQyxPQUFPLENBQUMsaURBQVksQ0FBQyxFQUNyQixlQUFlLEVBQ2YsU0FBUyxDQUFDLFlBQVksQ0FDdkI7b0JBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztpQkFDL0M7Z0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG1EQUFjLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFO2FBQzlDO2lCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlEQUFZLENBQUMsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO2dCQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLGlEQUFZLEVBQUUsU0FBUyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaURBQVksQ0FBQzthQUN2QztRQUNILENBQUM7UUFFRCxrQkFBYSxHQUFHLENBQUMsTUFBYyxFQUFFLFNBQW1CLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDOUQsTUFBTSxlQUFlLEdBQUcsaUZBQXdCLENBQUMsT0FBTyxDQUFDLG1EQUFjLENBQUMsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQztZQUNsSCxNQUFNLFdBQVcsR0FBRyxpRkFBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUM7WUFDdEcsTUFBTSxNQUFNLEdBQVc7Z0JBQ3JCLE1BQU0sRUFBRSxvREFBZTtnQkFDdkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLFdBQVc7YUFDekI7WUFDRCwyREFBYSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBRUQsc0JBQWlCLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM5QyxJQUFJLENBQUMsaUNBQWlDLENBQUMsTUFBTSxDQUFDO1FBQ2hELENBQUM7UUFFRCwyREFBMkQ7UUFDM0Qsa0JBQWEsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDOUQsTUFBTSxhQUFhLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGlCQUFpQjtpQkFDN0QsY0FBYyxDQUFDLGFBQWE7WUFDL0IsTUFBTSxRQUFRLEdBQ1osU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN2RSxNQUFNLE9BQU8sR0FBRyxvREFBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9GLE1BQU0sYUFBYSxHQUFHO2dCQUNwQjtvQkFDRSxRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUU7d0JBQ04sT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUNoQyxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUNoQyxPQUFPLENBQUMsb0RBQWUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUN6QyxPQUFPLENBQUMsaURBQVksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUN2Qzt3QkFDRCxPQUFPLEVBQUUsT0FBTzt3QkFDaEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO3dCQUN0QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7cUJBQzdCO2lCQUNGO2FBQ0Y7WUFFRCxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDdkQsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztvQkFDakUsVUFBVSxDQUFDLE9BQU87d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDN0MsTUFBTSxNQUFNLEdBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQVM7aUNBQzdDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztpQ0FDckMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQzs0QkFDekMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDO3dCQUMxRCxDQUFDLENBQUM7b0JBQ0osU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUNyRCxRQUFRLEVBQ1IsVUFBVSxDQUNYO2dCQUNILENBQUMsQ0FBQztZQUVKLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDM0QsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO29CQUMzQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQ3JELEdBQUcsRUFDSCxLQUFLLENBQUMsT0FBTyxDQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sT0FBTyxFQUNQLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULElBQUksRUFDSix1QkFBdUIsRUFDdkIsZ0JBQWdCLENBQ2pCLENBQ0Y7Z0JBQ0gsQ0FBQyxDQUFDO1lBRUosU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUM1RCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7b0JBQzVDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdkQsR0FBRyxFQUNILEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUM3QjtnQkFDSCxDQUFDLENBQUM7WUFFSixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3pELE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztvQkFDekMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNqRCxHQUFHLEVBQ0gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQzdCO2dCQUNILENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU3QyxrREFBa0Q7WUFDbEQsK0VBQStFO1lBRS9FLHFCQUFxQjtZQUNyQiwrQkFBK0I7WUFDL0IsNkJBQTZCO1lBQzdCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsSUFBSTtZQUNKLGtEQUFrRDtZQUNsRCxpREFBaUQ7WUFDakQsMENBQTBDO1lBQzFDLHlFQUF5RTtZQUN6RSxvTEFBb0w7WUFDcEwsdUNBQXVDO1lBQ3ZDLE1BQU07WUFDTixNQUFNO1lBQ04seUNBQXlDO1FBQzNDLENBQUM7UUFFRCxpQ0FBNEIsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNuQyxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLG1EQUFjLENBQUM7WUFDdEQsVUFBVSxDQUFDLEdBQUcsRUFBRTs7Z0JBQ2QsSUFBSSxlQUFlLEtBQUssaURBQVksRUFBRTtvQkFDcEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRTtpQkFDckM7Z0JBQ0QsSUFBSSxlQUFlLEtBQUssb0RBQWUsRUFBRTtvQkFDdkMsVUFBSSxDQUFDLDBCQUEwQiwwQ0FBRSxLQUFLLEVBQUU7aUJBQ3pDO1lBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNULENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRUQsdUJBQWtCLEdBQUcsR0FBRyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEQsQ0FBQztRQUVELDJCQUFzQixHQUFHLENBQUMsVUFBMkIsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO1FBQzdDLENBQUM7UUFFZ0Isc0NBQWlDLEdBQUcsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0RSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2pDLDhGQUFnRCxDQUFDO2dCQUMvQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsTUFBTTthQUNkLENBQUM7WUFDRixJQUNFLE1BQU0sS0FBSyxtREFBYztnQkFDekIsQ0FBQyxNQUFNLEtBQUssaURBQVksSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLGlEQUFZLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BFLENBQUMsTUFBTSxLQUFLLG9EQUFlO29CQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDLG9EQUFlLENBQUMsQ0FBQyxhQUFhO3dCQUMvQywyREFBc0IsQ0FBQyxFQUMzQjtnQkFDQSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQztRQUVnQixrQkFBYSxHQUFHLENBQUMsSUFBYSxFQUFFLEVBQUU7WUFDakQsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3pCLDhGQUFnRCxDQUFDO2dCQUMvQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDO1FBQ0osQ0FBQztRQUVnQix3QkFBbUIsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3hELE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUN6Qiw4RkFBZ0QsQ0FBQztnQkFDL0MsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQztRQUNKLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxDQUFDLEtBQWdCLEVBQUUsb0JBQW9CLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixHQUFHLFNBQVMsRUFBRSxFQUFFO1lBQ3BHLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN4QixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDekIsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzlCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLFNBQVMsR0FBRyxnQkFBZ0I7YUFDN0I7WUFDRCxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ3pDO1lBQ0Qsa0ZBQ3lCLENBQ3JCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsRUFBRSxFQUNGLFNBQVMsQ0FBQyxRQUFRLEVBQ2xCLEVBQUUsRUFDRiw2REFBZSxDQUNoQjtpQkFDQSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixDQUFDO2dCQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUMzQixDQUFDLENBQUM7UUFDTixDQUFDO1FBRUQscUJBQWdCLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUU7O1lBQ3RDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDbEMsTUFBTSxPQUFPLEdBQUcsZ0JBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxNQUFNLDBDQUFFLE9BQU8sS0FBSSxFQUFFO1lBQ2hELE1BQU0sT0FBTyxHQUFHLGdCQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSwwQ0FBRSxPQUFPLEtBQUksRUFBRTtZQUNoRCxJQUFJLFFBQVEsR0FBRyxvREFBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxJQUFJLFVBQVUsR0FBRyxvREFBUyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtnQkFDOUIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4RCxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDdkQ7WUFDRCxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRSxVQUFVLENBQUM7WUFDNUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUU7Z0JBQy9DLFFBQVEsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsUUFBUTthQUM1QixDQUFDO1lBQ0YsT0FBTyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7UUFFZ0Isb0JBQWUsR0FBRyxDQUFDLEtBQUssRUFBbUIsRUFBRTtZQUM1RCxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQzNCLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7WUFDeEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3pDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLG1EQUFjLENBQUM7YUFDakQ7WUFDRCxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO1lBQ0QsT0FBTztnQkFDTCxLQUFLLEVBQUUsdURBQW9CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDM0MsTUFBTSxFQUFFLHVEQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDOUM7UUFDSCxDQUFDO1FBRUQscUJBQWdCLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWE7WUFDaEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTTtZQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDbEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUk7WUFDeEIsSUFBSSxLQUFLO1lBQ1QsUUFBUSxJQUFJLEVBQUU7Z0JBQ1osS0FBSyxVQUFVO29CQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTztvQkFDdEIsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO29CQUNwQixNQUFLO2dCQUNQLEtBQUssT0FBTztvQkFDVixLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLE1BQUs7Z0JBQ1AsS0FBSyxRQUFRO29CQUNYLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVTtvQkFDNUMsTUFBTSxXQUFXLEdBQUcsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUNsRSxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDeEQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ3hELEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3hCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLEVBQUU7d0JBQUUsT0FBTTtvQkFDbEMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDckMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQ2xDLEtBQUssR0FBRyxRQUFRO3FCQUNqQjtvQkFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxHQUFHLFFBQVEsRUFBRTt3QkFDbEMsS0FBSyxHQUFHLFFBQVE7cUJBQ2pCO29CQUNELE1BQUs7Z0JBQ1A7b0JBQ0UsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLO29CQUNwQixNQUFLO2FBQ1I7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUNyQyxDQUFDO1FBRUQseUJBQW9CLEdBQUcsQ0FBQyxTQUFpQixFQUFFLEVBQUU7O1lBQzNDLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sS0FBSztZQUM1QixNQUFNLG9CQUFvQixHQUFHLFVBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRyxTQUFTLENBQUM7WUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELENBQUM7UUFFRCw2QkFBd0IsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssR0FBRyxHQUFHO2FBQ1o7WUFDRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksUUFBUSxHQUFHLENBQUM7Z0JBQUUsUUFBUSxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7UUFDakQsQ0FBQztRQUVELDJCQUFzQixHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQzVDLElBQUksUUFBUSxHQUFHLENBQUM7Z0JBQUUsUUFBUSxHQUFHLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUM7UUFDL0MsQ0FBQztRQUVELHNCQUFpQixHQUFHLENBQUMsVUFBa0IsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDbEM7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUM1QyxDQUFDO1FBRUQsZ0NBQTJCLEdBQUcsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztRQUN0RCxDQUFDO1FBRUQsOEJBQXlCLEdBQUcsQ0FBQyxVQUFrQixFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUMxQztZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDO1FBQ3BELENBQUM7UUFFRCx5QkFBb0IsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUMxQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSxTQUFTLEdBQUcsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsTUFBSywwREFBcUIsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLDBEQUFxQjtZQUM1RyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQ3RFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEMsUUFBUSxHQUFHLFFBQVEsR0FBRyx1REFBa0IsQ0FBQyxDQUFDLENBQUMsdURBQWtCLENBQUMsQ0FBQyxDQUFDLFFBQVE7WUFDeEUsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsV0FBVyxDQUFDLEtBQUssR0FBRyxHQUFHLFFBQVEsSUFBSTtnQkFDbkMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO29CQUN4QixXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxHQUFHLEtBQUssSUFBSTtpQkFDN0M7YUFDRjtpQkFBTTtnQkFDTCxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxJQUFJO2dCQUNwQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7b0JBQ3hCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxRQUFRLEdBQUcsS0FBSyxJQUFJO2lCQUM1QzthQUNGO1lBQ0QsMEVBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzFELENBQUM7UUFFRCxnQkFBVyxHQUFHLEdBQWEsRUFBRTtZQUMzQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEQsT0FBTztnQkFDTCxLQUFLLEVBQUUsNkRBQTBCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDcEQsTUFBTSxFQUFFLDZEQUEwQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDdkQ7UUFDSCxDQUFDO1FBMERELHdCQUFtQixHQUFHLENBQUMsUUFBNkIsRUFBRSxLQUFjLEVBQUUsRUFBRTtZQUN0RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUMxQyxDQUFDO1FBRWdCLHVCQUFrQixHQUFHLENBQUMsU0FBc0IsRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDcEcsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzdELE1BQU0sZUFBZSxHQUFHLG9FQUFrQixDQUFDLFNBQVMsQ0FBQztZQUNyRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLFFBQVEsR0FBYSxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQzNDLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNyRSxLQUFLLENBQUMsT0FBTztnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO3dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7OzRCQUNoRCxJQUNFLCtCQUFrQixhQUFsQixrQkFBa0IsdUJBQWxCLGtCQUFrQixDQUFFLE9BQU8sMENBQUcsSUFBSSxDQUFDLDBDQUFHLE1BQU0sQ0FBQztnQ0FDN0MsQ0FBQyxtQkFBa0IsYUFBbEIsa0JBQWtCLHVCQUFsQixrQkFBa0IsQ0FBRSxPQUFPLEdBQzVCO2dDQUNBLE9BQU07NkJBQ1A7NEJBRUQsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU07NEJBQzNCLDJCQUEyQjs0QkFDM0IsSUFBSSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDbEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDaEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0NBQzFELFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUMvRDtpQ0FBTTtnQ0FDTCxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7NkJBQ2xDOzRCQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTTs0QkFDOUMsSUFBSSxlQUFlOzRCQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLFdBQVcsRUFBRTtnQ0FDN0IsSUFBSSxHQUFHLEtBQUssNERBQXFCLEVBQUU7b0NBQ2pDLGVBQWUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQ0FDdEQ7NkJBQ0Y7NEJBRUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQ0FDcEIsZUFBZTtvQ0FDZixTQUFTLENBQUMsT0FBTyxDQUNmLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUNsRDs2QkFDRjs0QkFFRCxJQUFJLENBQUMsZ0JBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLEdBQUU7Z0NBQzdCLE9BQU07NkJBQ1A7NEJBQ0QsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7NEJBQy9DLElBQUksWUFBWTs0QkFFaEIsSUFBSSxJQUFJLEtBQUssaURBQVksRUFBRTtnQ0FDekIsSUFBSSxZQUFNLENBQUMsaURBQVksQ0FBQywwQ0FBRSxNQUFNLEVBQUU7b0NBQ2hDLGVBQWUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztvQ0FDL0MsWUFBWSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7aUNBQzFFOzZCQUNGO2lDQUFNLElBQUksSUFBSSxLQUFLLG9EQUFlLEVBQUU7Z0NBQ25DLElBQUksWUFBTSxDQUFDLG9EQUFlLENBQUMsMENBQUUsTUFBTSxFQUFFO29DQUNuQyxlQUFlLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7b0NBQy9DLFlBQVksR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO2lDQUMxRTs2QkFDRjtpQ0FBTTtnQ0FDTCxlQUFlLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7Z0NBQy9DLFlBQVksR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDOzZCQUMxRTs0QkFFRCxtQkFBbUI7NEJBQ25CLElBQUksWUFBWSxFQUFFO2dDQUNoQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQ0FDL0QsMkxBQTJMO2dDQUMzTCxlQUFlLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDO2dDQUM1RSxlQUFlLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxDQUFDOzZCQUM3RTt3QkFDSCxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDO1lBRUosNkJBQTZCO1lBQzdCLElBQUksS0FBSyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNELGVBQWUsQ0FBQyxrQ0FBa0MsQ0FDaEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFDakMsS0FBSyxDQUNOO2FBQ0Y7WUFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztZQUMvQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtpQkFDeEIsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7aUJBQ3ZCLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUM7aUJBQ2hDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO2lCQUN4QixHQUFHLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUM7WUFDcEQsZUFBZTtpQkFDWixrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7aUJBQzlDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3RELElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0IsMEJBQTBCO1FBQzVCLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFnQixFQUFFLEVBQUU7O1lBQ3pELE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDNUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMzQyxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkMsSUFBSSxVQUFVLEtBQUssNkRBQXNCLEVBQUU7Z0JBQ3pDLE1BQU0sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEdBQUcsVUFBVTtnQkFDN0MsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQzFDLE1BQU0sVUFBVSxHQUFHLFlBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxPQUFPLDBDQUFHLFlBQVksQ0FBQztnQkFDbEQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEcsZUFBZTtxQkFDWixrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO3FCQUNwQyxJQUFJLEVBQUU7YUFDVjtRQUNILENBQUM7UUFFRCxvQkFBZSxHQUFHLEdBQUcsRUFBRTtZQUNyQixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDakMsTUFBTSxzQkFBc0IsR0FBRyxHQUFHO1lBQ2xDLE1BQU0sdUJBQXVCLEdBQUcsR0FBRztZQUNuQyxNQUFNLFdBQVcsR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxLQUFJLElBQUk7WUFDN0MsTUFBTSxZQUFZLEdBQUcsV0FBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLE1BQU0sS0FBSSxHQUFHO1lBQzlDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUNqRyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDcEcsTUFBTSxZQUFZLEdBQUc7Z0JBQ25CLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtnQkFDeEQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO2dCQUN4RCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUU7Z0JBQ3hELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtnQkFDeEQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO2dCQUN4RCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUU7Z0JBQ3hELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtnQkFDeEQsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFO2dCQUN4RCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsRUFBRTtnQkFDbEksTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEVBQUU7YUFDbkk7WUFDRCxPQUFPLFlBQVk7UUFDckIsQ0FBQztRQUVELDZCQUF3QixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO2dCQUNkLE9BQU8sR0FBRzthQUNYO2lCQUFNO2dCQUNMLE9BQU8sSUFBSTthQUNaO1FBQ0gsQ0FBQztRQUVELGtCQUFhLEdBQUcsR0FBZSxFQUFFOztZQUMvQixNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzVDLE1BQU0sUUFBUSxHQUFHLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRO1lBQ3JDLE1BQU0sVUFBVSxHQUFHLHFCQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxRQUFRLENBQUMsMENBQUUsSUFBSTtZQUN2RCxPQUFPLFVBQVU7UUFDbkIsQ0FBQztRQUVELGtCQUFhLEdBQUcsQ0FBQyxFQUFjLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLFVBQVUsRUFBRSxFQUFFO2FBQ2YsRUFBRSxHQUFHLEVBQUU7Z0JBQ04sTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsRUFBRSxDQUFDO2dCQUNsRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsaUJBQWlCO2dCQUNuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRCwwQkFBcUIsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixJQUFJLE9BQU8sQ0FBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsaUJBQWlCLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3BELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLCtCQUErQixDQUFDLEVBQUUsQ0FBQztnQkFDbEUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDL0I7UUFDSCxDQUFDO1FBZUQseUJBQW9CLEdBQUcsR0FBa0IsRUFBRTtZQUN6QyxPQUFPO2dCQUNMLDJEQUFRLEdBQUcsRUFBRSw2REFBd0IsRUFBRSxLQUFLLEVBQUUsNkRBQXdCLElBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3RCO2dCQUNULDJEQUNFLEdBQUcsRUFBRSwrREFBMEIsRUFDL0IsS0FBSyxFQUFFLCtEQUEwQixJQUVoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUN4QjthQUNWO1FBQ0gsQ0FBQztRQUVELHVCQUFrQixHQUFHLENBQUMsUUFBaUIsRUFBcUIsRUFBRTtZQUM1RCxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDakMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDM0IsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQzVDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxJQUFJLFFBQVEsRUFBRTs0QkFDWixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssMkRBQW9CLEVBQUU7Z0NBQ3ZDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0NBQ1AsS0FBSyxFQUFFLFFBQVE7b0NBQ2YsS0FBSyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSTtpQ0FDaEUsQ0FBQzs2QkFDSDt5QkFDRjs2QkFBTTs0QkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDO2dDQUNQLEtBQUssRUFBRSxRQUFRO2dDQUNmLEtBQUssRUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7NkJBQ2hFLENBQUM7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDO29CQUNGLE9BQU8sR0FBRztpQkFDWDthQUNGO1lBQ0QsT0FBTyxFQUFFO1FBQ1gsQ0FBQztRQUVELHdCQUFtQixHQUFHLEdBQWtCLEVBQUU7WUFDeEMsT0FBTztnQkFDTCwyREFBUSxHQUFHLEVBQUUscURBQWdCLEVBQUUsS0FBSyxFQUFFLHFEQUFnQixJQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUN0QjtnQkFDVCwyREFBUSxHQUFHLEVBQUUsd0RBQW1CLEVBQUUsS0FBSyxFQUFFLHdEQUFtQixJQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUN6QjthQUNWO1FBQ0gsQ0FBQztRQUVELGVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQsMkJBQXNCLEdBQUcsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUNuQyxPQUFNO2FBQ1A7WUFDRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDOUYsSUFBSSwwQkFBMEIsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtnQkFDbEUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBQztnQkFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7YUFDL0I7WUFDRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsMEJBQTBCO1FBQzlELENBQUM7UUFFRCxhQUFRLEdBQUcsQ0FBQyxLQUF1QixFQUFvQixFQUFFOztZQUN2RCxPQUFPLDBDQUFHOzs7Ozs7Ozs7OzswQkFXWSxXQUFLLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7O3VCQUduQyxtREFBWSxDQUFDLENBQUMsQ0FBQzs0QkFDVixtREFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7d0JBS25CLG1EQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBNEJmLG1EQUFZLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7d0JBU2hCLG1EQUFZLENBQUMsQ0FBQyxDQUFDOzs7OzttQkFLcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7Ozt1QkFJN0IsbURBQVksQ0FBQyxFQUFFLENBQUM7Ozs7bUJBSXBCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozt1QkFTN0IsbURBQVksQ0FBQyxFQUFFLENBQUM7Ozt1QkFHaEIsbURBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDOzhCQUNuRCxtREFBWSxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7dUJBUXRCLG1EQUFZLENBQUMsRUFBRSxDQUFDOzs7Ozs7MEJBTWIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLOzs7Ozt5QkFLZCxtREFBWSxDQUFDLEVBQUUsQ0FBQzs7O2dDQUdULEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7OzRCQVFyQyxtREFBWSxDQUFDLEVBQUUsQ0FBQzs7Ozs7O2dDQU1aLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0NBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7O2tDQUdoQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozt1QkFZL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7bUJBUWxDLG1EQUFZLENBQUMsR0FBRyxDQUFDOzs7O3FCQUlmLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7OztxQkFHOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDMUIsbURBQVksQ0FBQyxFQUFFLENBQUM7c0JBQ25CLG1EQUFZLENBQUMsRUFBRSxDQUFDOzJCQUNYLG1EQUFZLENBQUMsRUFBRSxDQUFDO3FCQUN0QixtREFBWSxDQUFDLEdBQUcsQ0FBQzs7OztLQUlqQztRQUNILENBQUM7UUFFRCxpQkFBWSxHQUFHLEdBQWEsRUFBRTs7WUFDNUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QyxNQUFNLEtBQUssR0FBRyxjQUFjLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLEVBQUU7WUFFckIsTUFBTSxVQUFVLEdBQUcsRUFBRTtZQUNyQixJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUMzQixRQUFRLENBQUMsYUFBYSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3BFLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUM7YUFDSDtZQUNELDhFQUE4RTtZQUM5RSw4Q0FBOEM7WUFDOUMsMEVBQTBFO1lBQzFFLE9BQU87WUFDUCxJQUFJO1lBRUosMENBQTBDO1lBQzFDLHdHQUF3RztZQUN4RyxJQUFJO1lBRUosSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNqQixDQUFDO2dCQUFBLENBQUMsdUdBQWdDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FDOUQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDakM7YUFDRjtZQUVELElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUM1QyxDQUFDO2dCQUFBLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUM3QyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNqQzthQUNGO1lBRUQsSUFBSSxZQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUywwQ0FBRSxVQUFVLEVBQUU7Z0JBQ2pDLE1BQU0sY0FBYyxHQUFHLG1GQUE0QyxDQUNqRSxZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsMENBQUUsS0FBSyxFQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FDMUI7Z0JBQ0QsMEJBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRyxDQUFDLENBQUMsMENBQUUsTUFBTSwwQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2RTtZQUNELE9BQU8sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDdEQsQ0FBQztRQUVELGtCQUFhLEdBQUcsQ0FBQyxFQUFVLEVBQUUsTUFBK0IsRUFBVSxFQUFFO1lBQ3RFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUNsQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUN4QyxNQUFNLENBQ1A7UUFDSCxDQUFDO1FBRUQsaUNBQTRCLEdBQUcsQ0FDN0IsRUFBaUIsRUFDakIsY0FBNkMsRUFDcEMsRUFBRTtZQUNYLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQzFCLE9BQU8sS0FBSzthQUNiO1lBQ0QsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3JFLENBQUM7UUFFRCw0QkFBdUIsR0FBRyxDQUN4QixjQUErQixFQUNmLEVBQUU7WUFDbEIsOEVBQThFO1lBQzlFLE1BQU0sTUFBTSxHQUFtQjtnQkFDN0IsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVM7Z0JBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2RSxJQUFJLEVBQUUsc0VBQStCO2dCQUNyQyxpQkFBaUIsRUFBRSxjQUFjO2FBQ2xDO1lBRUQsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQUVELG1CQUFjLEdBQUcsQ0FBQyxVQUF5QixFQUFFLElBQVksRUFBRSxFQUFFO1lBQzNELE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUNyQyxJQUNFLENBQUMsY0FBYztnQkFDZixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUN2QztnQkFDQSxPQUFNO2FBQ1A7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsY0FBYyxFQUFFO29CQUNkLGNBQWMsQ0FBQyxDQUFDLENBQUM7eUJBQ2QsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQzt5QkFDckMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUM3QjthQUNGLENBQUM7UUFDSixDQUFDO1FBRUQseUJBQW9CLEdBQUcsQ0FBQyxVQUF1QixFQUFFLEVBQUU7WUFDakQsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzNCLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTTthQUNQO1lBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUU1QyxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUVELDJCQUFzQixHQUFHLENBQUMsUUFBeUIsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUNuRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDckMsSUFDRSxDQUFDLGNBQWM7Z0JBQ2YsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksRUFDdkM7Z0JBQ0EsT0FBTTthQUNQO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUk7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pCLGNBQWMsRUFBRTtvQkFDZCxjQUFjLENBQUMsQ0FBQyxDQUFDO3lCQUNkLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxRQUFRLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDN0I7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUVELGlCQUFZLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDakQsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDMUU7UUFDSCxDQUFDO1FBRUQsaUJBQVksR0FBRyxDQUFDLGlCQUFnQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTztZQUVwRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDekMsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBUztZQUNyRCxNQUFNLGVBQWUsR0FBRyxvRUFBa0IsRUFBRTtZQUM1QyxJQUFJLGNBQStCO1lBQ25DLElBQUksWUFBMkI7WUFDL0IsSUFDRSxJQUFJLENBQUMsNEJBQTRCLENBQy9CLGlCQUFpQixFQUNqQixVQUFVLENBQUMsY0FBYyxDQUMxQixFQUNEO2dCQUNBLGNBQWMsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCxZQUFZLEdBQUcsaUJBQWlCO2dCQUNoQyxjQUFjLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTTtxQkFDeEMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7cUJBQ3pCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDO3FCQUNwQixHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzthQUN0QjtZQUNELG1HQUFtRztZQUNuRyw2RUFBNkU7WUFDN0UsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLGNBQWM7WUFDaEQsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksRUFBRTtZQUNuRCxtQkFBbUI7WUFDbkIsNEVBQTRFO1lBQzVFLDhCQUE4QjtZQUM5QixxREFBcUQ7WUFDckQsNEVBQTRFO1lBQzVFLFdBQVc7WUFDWCx5REFBeUQ7WUFDekQsSUFBSTtZQUNKLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJO1FBQzlCLENBQUM7UUFFRCxpQkFBWSxHQUFHLENBQUMsZ0JBQStCLEVBQUUsRUFBRTtZQUNqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1lBQ3BFLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLGdCQUFnQixHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFTO1lBQ3JELE1BQU0sZUFBZSxHQUFHLG9FQUFrQixFQUFFO1lBQzVDLE1BQU0sY0FBYyxHQUFrQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FDcEYsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxLQUFLLGdCQUFnQixDQUFDLFlBQVksQ0FDaEU7WUFFRCxtR0FBbUc7WUFDbkcsNkVBQTZFO1lBQzdFLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTTtpQkFDeEMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7aUJBQ3ZCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDO2lCQUN6QixHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQztpQkFDcEIsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7WUFDMUIsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLGNBQWM7WUFDaEQsZUFBZSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUk7UUFDOUIsQ0FBQztRQWdERCxnQ0FBMkIsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDO1FBQ25ELENBQUM7UUFFRCw4QkFBeUIsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDO1lBQ2xELElBQUksQ0FBQyx5QkFBeUIsRUFBRTtRQUNsQyxDQUFDO1FBRUQsOEJBQXlCLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDaEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM3QyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUs7Z0JBQUUsT0FBTTtZQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxvQkFBb0IsQ0FBQztRQUM5RCxDQUFDO1FBRUQsbUNBQThCLEdBQUcsR0FBRyxFQUFFO1lBQ3BDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzVDLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxPQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsb0JBQW9CO1lBQzdELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUM7WUFDN0UsTUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsU0FBUyxDQUFDO1lBQzFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHVCQUF1QixFQUFFLFlBQVksQ0FBQztRQUNsRixDQUFDO1FBRUQsd0JBQW1CLEdBQUcsQ0FBQyxlQUFvQyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDWixlQUFlLEVBQUUsZUFBZTthQUNqQyxDQUFDO1FBQ0osQ0FBQztRQUVELHlCQUFvQixHQUFHLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLGVBQWUsRUFBRSw2REFBd0I7YUFDMUMsQ0FBQztRQUNKLENBQUM7UUFFRCwwQkFBcUIsR0FBRyxHQUFHLENBQUMsRUFBRTs7WUFDNUIsTUFBTSxLQUFLLEdBQUcsU0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sMENBQUUsS0FBSztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQztRQUMzQyxDQUFDO1FBRUQsc0NBQWlDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsMEJBQXFCLEdBQUcsTUFBTSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ3RCLENBQUM7UUFDSixDQUFDO1FBRUQsOEJBQXlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7WUFDaEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2pDLE1BQU0sYUFBYSxHQUFHLGdCQUFJLENBQUMsS0FBSywwQ0FBRSxNQUFNLDBDQUFFLFVBQVU7WUFDcEQsSUFBSSxhQUFhLEtBQUssVUFBVTtnQkFBRSxPQUFNO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO1FBQ2pELENBQUM7UUFFRCxxQ0FBZ0MsR0FBRyxHQUFHLEVBQUU7O1lBQ3RDLE1BQU0saUJBQWlCLEdBQUcsV0FBSSxDQUFDLGdCQUFnQiwwQ0FBRSxZQUFZLEtBQUksQ0FBQztZQUNsRSxNQUFNLGdCQUFnQixHQUFHLFdBQUksQ0FBQyxnQkFBZ0IsMENBQUUsV0FBVyxLQUFJLENBQUM7WUFDaEUsTUFBTSx1QkFBdUIsR0FDM0IsdUJBQUksQ0FBQyxnQkFBZ0IsMENBQUUsYUFBYSwwQ0FBRSxhQUFhLDBDQUFFLFlBQVksS0FBSSxDQUFDO1lBQ3hFLE1BQU0scUJBQXFCLEdBQUcsdUJBQXVCLEdBQUcsaUJBQWlCO1lBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osdUJBQXVCLEVBQUUscUJBQXFCO2dCQUM5QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7YUFDbkMsQ0FBQztRQUNKLENBQUM7UUFFRCw4QkFBeUIsR0FBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN4QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO1lBQ3pDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxDQUFDO1FBRUQsd0JBQW1CLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0I7WUFDakQsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUc7YUFDNUI7WUFDRCxJQUFJLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTthQUN4QztRQUNILENBQUM7UUFFRCxvQ0FBK0IsR0FBRyxDQUFDLFVBQVUsRUFBVyxFQUFFO1lBQ3hELElBQUksQ0FBQyxVQUFVO2dCQUFFLE9BQU8sS0FBSztZQUM3QixNQUFNLFFBQVEsR0FBRyxDQUFDLFVBQWtDLGFBQWxDLFVBQVUsdUJBQVYsVUFBVSxDQUEwQixzQkFBc0IsRUFBRSxLQUFJLENBQUM7WUFDbkYsT0FBTyxRQUFRLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBRUQsMEJBQXFCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUMvQyxDQUFDO1FBRUQsbUJBQWMsR0FBRyxHQUFHLEVBQUU7WUFDcEIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzdCLE1BQU0sRUFBRSx1QkFBdUIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzlDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCO2dCQUM5QyxDQUFDLENBQUMseUNBQXlDO2dCQUMzQyxDQUFDLENBQUMsdUJBQXVCO1lBQzNCLE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztnQkFDaEQsK0NBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDNUQsK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO3dCQUN0SCx3REFBSyxTQUFTLEVBQUMsbUJBQW1COzRCQUNoQywrQ0FBQywyQ0FBTSxrQkFDTyxxREFBZ0IsRUFDNUIsT0FBTyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFDdkMsSUFBSSxFQUFDLFVBQVUsRUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRTtvQ0FDaEQsS0FBSyxFQUFFLENBQUM7aUNBQ1QsQ0FBQztnQ0FFRiwrQ0FBQyx5Q0FBSSxJQUNILFFBQVEsUUFDUixTQUFTLEVBQUUsYUFBYSxNQUFNLENBQUMsU0FBUyxLQUFLLHFEQUFnQjt3Q0FDM0QsUUFBUSxFQUFFLEVBQ1osSUFBSSxFQUFFLG1CQUFPLENBQUMsNkZBQXFCLENBQUMsR0FDcEMsQ0FDSzs0QkFDVCx3REFBSyxTQUFTLEVBQUMsZ0JBQWdCLEdBQUc7NEJBRWxDLCtDQUFDLDJDQUFNLGtCQUNPLHFEQUFnQixFQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN2QyxJQUFJLEVBQUMsVUFBVSxFQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFO29DQUNoRCxLQUFLLEVBQUUsQ0FBQztpQ0FDVCxDQUFDO2dDQUVGLCtDQUFDLHlDQUFJLElBQ0gsUUFBUSxRQUNSLFNBQVMsRUFBRSxhQUFhLE1BQU0sQ0FBQyxTQUFTLEtBQUsscURBQWdCO3dDQUMzRCxRQUFRLEVBQUUsRUFDWixJQUFJLEVBQUUsbUJBQU8sQ0FBQyw2RkFBcUIsQ0FBQyxHQUNwQyxDQUNLOzRCQUNULHdEQUFLLFNBQVMsRUFBQyxnQkFBZ0IsR0FBRzs0QkFFbEMsK0NBQUMsMkNBQU0sa0JBQ08scURBQWdCLEVBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQ3ZDLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLE9BQU8sRUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUU7b0NBQ2hELEtBQUssRUFBRSxDQUFDO2lDQUNULENBQUM7Z0NBRUYsK0NBQUMseUNBQUksSUFDSCxRQUFRLFFBQ1IsU0FBUyxFQUFFLGlCQUFpQixNQUFNLENBQUMsU0FBUzt3Q0FDMUMscURBQWdCLElBQUksUUFBUSxFQUFFLEVBQ2hDLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQ3BDLENBQ0ssQ0FDTCxDQUNLO29CQUdiLCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQzt3QkFDNUgsd0RBQUssU0FBUyxFQUFDLGtFQUFrRTs0QkFDL0UsK0NBQUMsMkNBQU0sa0JBQ08scURBQWdCLEVBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQ3ZDLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLHdCQUF3QixFQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsRUFBRTtvQ0FDbkQsS0FBSyxFQUFFLENBQUM7aUNBQ1QsQ0FBQztnQ0FFRiwrQ0FBQyx5Q0FBSSxJQUNILFNBQVMsRUFBRSx5QkFBeUIsTUFBTSxDQUFDLFNBQVM7d0NBQ2xELHFEQUFnQixJQUFJLFFBQVEsRUFBRSxFQUNoQyxJQUFJLEVBQUUsbUJBQU8sQ0FBQyw2RkFBcUIsQ0FBQyxHQUNwQyxDQUNLOzRCQUNULCtDQUFDLDJDQUFNLGtCQUNPLHFEQUFnQixFQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN2QyxJQUFJLEVBQUMsVUFBVSxFQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixFQUFFO29DQUNuRCxLQUFLLEVBQUUsQ0FBQztpQ0FDVCxDQUFDO2dDQUVGLCtDQUFDLHlDQUFJLElBQ0gsU0FBUyxFQUFFLHlCQUF5QixNQUFNLENBQUMsU0FBUzt3Q0FDbEQscURBQWdCLElBQUksUUFBUSxFQUFFLEVBQ2hDLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQ3BDLENBQ0ssQ0FDTDt3QkFDTix3REFBSyxTQUFTLEVBQUMsc0JBQXNCLEdBQUc7d0JBQ3hDLHdEQUFLLFNBQVMsRUFBQyx3REFBd0Q7NEJBQ3JFLCtDQUFDLDJDQUFNLGtCQUNPLHFEQUFnQixFQUM1QixPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN2QyxJQUFJLEVBQUMsVUFBVSxFQUNmLFNBQVMsRUFBQyx3QkFBd0IsRUFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUU7b0NBQ25ELEtBQUssRUFBRSxDQUFDO2lDQUNULENBQUM7Z0NBRUYsK0NBQUMseUNBQUksSUFDSCxRQUFRLFFBQ1IsU0FBUyxFQUFFLHlCQUF5QixNQUFNLENBQUMsU0FBUzt3Q0FDbEQscURBQWdCLElBQUksUUFBUSxFQUFFLEVBQ2hDLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQ3BDLENBQ0s7NEJBQ1QsK0NBQUMsMkNBQU0sa0JBQ08scURBQWdCLEVBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQ3ZDLElBQUksRUFBQyxVQUFVLEVBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMseUJBQXlCLEVBQUU7b0NBQ25ELEtBQUssRUFBRSxDQUFDO2lDQUNULENBQUM7Z0NBRUYsK0NBQUMseUNBQUksSUFDSCxRQUFRLFFBQ1IsU0FBUyxFQUFFLHlCQUF5QixNQUFNLENBQUMsU0FBUzt3Q0FDbEQscURBQWdCLElBQUksUUFBUSxFQUFFLEVBQ2hDLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQ3BDLENBQ0ssQ0FDTCxDQUNLO29CQUViLCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzt3QkFDeEgsd0RBQUssU0FBUyxFQUFDLG1CQUFtQjs0QkFDaEMsK0NBQUMsMkNBQU0sa0JBQ08scURBQWdCLEVBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQ3ZDLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLE9BQU8sRUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUU7b0NBQ2pELEtBQUssRUFBRSxDQUFDO2lDQUNULENBQUM7Z0NBRUYsK0NBQUMseUNBQUksSUFDSCxRQUFRLFFBQ1IsU0FBUyxFQUFFLGFBQWEsTUFBTSxDQUFDLFNBQVMsS0FBSyxxREFBZ0I7d0NBQzNELFFBQVEsRUFBRSxFQUNaLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQ3BDLENBQ0s7NEJBQ1Qsd0RBQUssU0FBUyxFQUFDLGdCQUFnQixHQUFHLENBQzlCO3dCQUNOLHdEQUFLLFNBQVMsRUFBQyxnQkFBZ0IsR0FBRzt3QkFDbEMsd0RBQUssU0FBUyxFQUFDLHdEQUF3RDs0QkFDckUsK0NBQUMsMkNBQU0sa0JBQ08scURBQWdCLEVBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQ3ZDLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLHdCQUF3QixFQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRTtvQ0FDakQsS0FBSyxFQUFFLENBQUM7aUNBQ1QsQ0FBQztnQ0FFRiwrQ0FBQyx5Q0FBSSxJQUNILFFBQVEsUUFDUixTQUFTLEVBQUUseUJBQXlCLE1BQU0sQ0FBQyxTQUFTO3dDQUNsRCxxREFBZ0IsSUFBSSxRQUFRLEVBQUUsRUFDaEMsSUFBSSxFQUFFLG1CQUFPLENBQUMsNkZBQXFCLENBQUMsR0FDcEMsQ0FDSyxDQUNMLENBQ0s7b0JBRWIsK0NBQUMsMkVBQVU7d0JBQ1Qsd0RBQUssU0FBUyxFQUFDLG1CQUFtQjs0QkFDaEMsd0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsZ0JBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFLFNBQVMsRUFBQyw2QkFBNkIsRUFBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLDhCQUE4QixFQUFFLEVBQUMsQ0FBQztnQ0FDeFEsK0NBQUMsNkNBQVEsSUFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUN4RCxTQUFTLEVBQUMsaUJBQWlCLGdCQUNoQixzQkFBc0IsRUFDakMsT0FBTyxFQUFFLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxvQkFBb0IsS0FBSSxLQUFLLGdCQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLEdBQzdEO2dDQUNGLHdEQUFLLFNBQVMsRUFBQyxpQ0FBaUMsSUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxDQUM5QyxDQUNGLENBQ0YsQ0FDSztvQkFDYiwrQ0FBQywyRUFBVTt3QkFDVCx3REFBSyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRTs0QkFDOUQsd0RBQUssU0FBUyxFQUFFLGdCQUFnQjtnQ0FDOUIsK0NBQUMsMkNBQU0sSUFDTCxTQUFTLEVBQUMsT0FBTyxFQUNqQixJQUFJLEVBQUMsU0FBUyxFQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsMkJBQTJCLElBRXhDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQ3JCLENBQ0wsQ0FDRixDQUNLLENBQ0UsQ0FDYixDQUNQO1FBQ0gsQ0FBQztRQUVELHdCQUFtQixHQUFHLEdBQXFCLEVBQUU7WUFDM0MsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzVCLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3ZDLE9BQU8sMENBQUc7OztvQkFHTSxtREFBWSxDQUFDLEVBQUUsQ0FBQzt3QkFDWixtREFBWSxDQUFDLENBQUMsRUFBRSxDQUFDOzs7eUJBR2hCLG1EQUFZLENBQUMsQ0FBQyxFQUFFLENBQUM7OztxQkFHckIsbURBQVksQ0FBQyxFQUFFLENBQUM7d0JBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7O21CQUdwQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNOzs7S0FHakU7UUFDSCxDQUFDO1FBRUQsc0JBQWlCLEdBQUcsR0FBRyxFQUFFOztZQUN2QixNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDakMsTUFBTSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUNoRSxPQUFPLENBQ0wsK0NBQUMsK0VBQWMsSUFBQyxTQUFTLEVBQUUscURBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUlyRiwrQ0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNO29CQUNyQix3REFBSyxTQUFTLEVBQUMsOERBQThEO3dCQUMzRSx3REFBSyxTQUFTLEVBQUMsbUNBQW1DOzRCQUNoRCwrQ0FBQywyQ0FBTSxJQUNMLElBQUksRUFBQyxVQUFVLEVBQ2YsU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixFQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUVoRCxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQ3BDOzRCQUVULHlEQUFNLFNBQVMsRUFBQyxjQUFjLElBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFRLENBQzFFO3dCQUNOLCtDQUFDLDRDQUFPLElBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQ3pDLFNBQVMsUUFDVCxTQUFTLEVBQUMsTUFBTTs0QkFFaEIsK0NBQUMsMkNBQU0sSUFBQyxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsSUFBSSxFQUFDLFVBQVUsZ0JBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7Z0NBQ3RHLCtDQUFDLDZFQUFZLE9BQUcsQ0FDVCxDQUNELENBQ04sQ0FDSztnQkFDYiwrQ0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQzlGLENBQUMsaUJBQWlCLElBQUksQ0FDckIsK0NBQUMscUZBQWtCLElBQ2pCLEtBQUssRUFBRSxlQUFlLEVBQ3RCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGlCQUFpQixRQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxzQkFDTixnQkFBZ0IsR0FNakMsQ0FDSCxDQUNVO2dCQUNaLFdBQUksQ0FBQyxLQUFLLDBDQUFFLFVBQVUsS0FBSSwrQ0FBQywyRUFBVSxJQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO29CQUM1SSwrQ0FBQyw4Q0FBUyxJQUNSLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLE9BQU8sZ0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDL0MsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQ3pDLFlBQVksRUFBRSxPQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsYUFBYSxLQUFJLEVBQUUsRUFDekMsYUFBYSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsR0FDekMsQ0FDUztnQkFDWixJQUFJLENBQUMsK0JBQStCLENBQUMsVUFBVSxDQUFDLElBQUksK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7b0JBQ3pLLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsZ0JBQ3RCLG1CQUFtQixFQUM5QixRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUMzQyxDQUNTLENBQ0UsQ0FDbEI7UUFDSCxDQUFDO1FBRUQsdUJBQWtCLEdBQUcsQ0FBQyxVQUEwQixFQUFFLEVBQUU7O1lBQ2xELE1BQU0sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQzFELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrREFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxrREFBYSxDQUFDO1lBQzlILE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JELElBQUksV0FBVztZQUNmLE1BQU0sU0FBUyxHQUFHLFVBQVUsS0FBSywwREFBcUIsQ0FBQyxDQUFDLENBQUMsa0RBQWEsYUFBYixrREFBYSx1QkFBYiwwREFBc0IsQ0FBQyxDQUFDLENBQUMsMkRBQXNCO1lBQ3hHLElBQUksU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDNUIsV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLFFBQVEsVUFBVSxFQUFFO29CQUNsQixLQUFLLHdEQUFtQjt3QkFDdEIsV0FBVyxHQUFHOzRCQUNaLEtBQUssRUFBRSxLQUFLOzRCQUNaLE1BQU0sRUFBRSxHQUFHLHNEQUFpQixJQUFJO3lCQUNqQzt3QkFDRCxNQUFLO29CQUNQLEtBQUssMERBQXFCO3dCQUN4QixXQUFXLEdBQUc7NEJBQ1osS0FBSyxFQUFFLE9BQU87NEJBQ2QsTUFBTSxFQUFFLGVBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLDBDQUFFLElBQUksTUFBSyw2REFBd0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxJQUFHLGNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsSUFBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSwwQ0FBRSxRQUFRLElBQUk7eUJBQzlKO3dCQUNELE1BQUs7b0JBQ1AsS0FBSyx1REFBa0I7d0JBQ3JCLFdBQVcsR0FBRzs0QkFDWixLQUFLLEVBQUUsZUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssMENBQUUsSUFBSSxNQUFLLDZEQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUcsY0FBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssMENBQUUsUUFBUSxJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLDBDQUFFLFFBQVEsSUFBSTs0QkFDeEosTUFBTSxFQUFFLE9BQU87eUJBQ2hCO3dCQUNELE1BQUs7b0JBQ1A7d0JBQ0UsV0FBVyxHQUFHOzRCQUNaLEtBQUssRUFBRSxlQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSywwQ0FBRSxJQUFJLE1BQUssNkRBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFBRyxjQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsS0FBSywwQ0FBRSxRQUFRLElBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLEtBQUssMENBQUUsUUFBUSxJQUFJOzRCQUN4SixNQUFNLEVBQUUsZUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sMENBQUUsSUFBSSxNQUFLLDZEQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLElBQUcsY0FBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sMENBQUUsUUFBUSxJQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLDBDQUFFLFFBQVEsSUFBSTt5QkFDOUo7d0JBQ0QsTUFBSztpQkFDUjthQUNGO1lBQ0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQ3pCLENBQUMsYUFBYSxFQUFFLG1EQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxFQUM1RCxXQUFXLENBQ1osQ0FBQyxLQUFLLENBQ0wsQ0FBQyxhQUFhLEVBQUUsaURBQVksRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLEVBQzFELFdBQVcsQ0FDWixDQUFDLEtBQUssQ0FDTCxDQUFDLGFBQWEsRUFBRSxvREFBZSxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUMsRUFDN0QsV0FBVyxDQUNaLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxnQ0FBMkIsR0FBRyxHQUFHLEVBQUU7O1lBQ2pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ2pELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTztZQUM1RCxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQUksQ0FBQyxLQUFLLDBDQUFFLE1BQU0sMENBQUUsZUFBZSxFQUFDO1lBQ25GLElBQUksQ0FBQyxpQkFBSSxDQUFDLEtBQUssMENBQUUsTUFBTSwwQ0FBRSxlQUFlLEdBQUU7Z0JBQ3hDLFNBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQztRQUVELGtDQUE2QixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO1lBQ3hELE1BQU0sV0FBVyxHQUFHO2dCQUNsQixLQUFLLEVBQUUsNkRBQTBCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDcEQsTUFBTSxFQUFFLDZEQUEwQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7YUFDdkQ7WUFDRCwwRUFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzFGLENBQUM7UUFFRCw2QkFBd0IsR0FBRyxDQUFDLEtBQWEsRUFBbUIsRUFBRTtZQUM1RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ2pELFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPO1lBQzdDLE9BQU8sV0FBVztRQUNwQixDQUFDO1FBRUQsK0JBQTBCLEdBQUcsR0FBVyxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyw2REFBd0IsRUFBRTtnQkFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7Z0JBQzNELGdEQUFnRDtnQkFDaEQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLElBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWU7YUFDbEY7aUJBQU07Z0JBQ0wsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDL0I7UUFDSCxDQUFDO1FBRUQsNkJBQXdCLEdBQUcsQ0FBQyxRQUFvQixFQUFFLFdBQW9CLEtBQUssRUFBRSxFQUFFO1lBQzdFLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDekMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLEtBQUs7WUFDM0UsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDdEYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUV0QyxJQUFJLE9BQU8sR0FBRyx1REFBa0I7WUFDaEMsSUFBSSxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxNQUFLLDZEQUF3QixFQUFFO2dCQUMvQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVEQUFrQixHQUFHLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVEQUFrQixJQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlLEVBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxXQUFXO2FBQ3JJO1lBRUQsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztZQUNqRixJQUFJLHFCQUFxQixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssd0RBQW1CLEVBQUU7b0JBQ3pDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQUcsR0FBRyxJQUFHLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlO2lCQUNuRjtnQkFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssNkRBQXdCLEVBQUU7b0JBQzlDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsRUFBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFdBQVc7aUJBQ3ZGO2FBQ0Y7WUFFRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUN2RSxRQUFRLENBQUMsUUFBUSxHQUFHLEtBQUs7WUFFekIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osV0FBVyxDQUFDLE1BQU0sR0FBRyw2REFBMEIsQ0FBQyxRQUFRLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsV0FBVyxDQUFDLEtBQUssR0FBRyw2REFBMEIsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hELE1BQU0sT0FBTyxHQUFHLFNBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLE1BQUssNkRBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDakcsSUFBSSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZUFBZSxFQUFFO29CQUMzQixNQUFNLE1BQU0sR0FBRyxPQUFPLElBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGlCQUFpQjtvQkFDbEQsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSTtpQkFDbkM7YUFDRjtZQUNELDBFQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRTtRQUMxRCxDQUFDO1FBRUQsZ0NBQTJCLEdBQUcsR0FBVyxFQUFFO1lBQ3pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDekMsT0FBTyxDQUFDLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxLQUFLLEtBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsSUFBRyxxREFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDOUUsQ0FBQztRQUVELCtCQUEwQixHQUFHLENBQUMsUUFBb0IsRUFBRSxRQUFpQixFQUFXLEVBQUU7WUFDaEYsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3hELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLEtBQUs7WUFDeEUsSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSzthQUNiO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssd0RBQW1CLEVBQUU7Z0JBQzlELE9BQU8sS0FBSzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sSUFBSTthQUNaO1FBQ0gsQ0FBQztRQUVELDZCQUF3QixHQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBRXRDLE9BQU8sQ0FDTCwrQ0FBQywrRUFBYztnQkFDYiwrQ0FBQyxxREFBZ0IsSUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFDeEMsTUFBTSxFQUFFLGVBQWUsS0FBSyxvRUFBK0IsRUFDM0QsYUFBYSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvRUFBK0IsQ0FBQyxFQUFDLENBQUMsRUFDbEYsY0FBYyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsZ0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO29CQUU3QywrQ0FBQywyRUFBVSxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzt3QkFDakksd0RBQUssU0FBUyxFQUFDLHdEQUF3RDs0QkFDckUsK0NBQUMsMkNBQU0sSUFBQyxJQUFJLFFBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLE1BQUssdURBQWtCLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1REFBa0IsQ0FBQyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLElBQUk7Z0NBQ3ZQLCtDQUFDLHlDQUFJLElBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBRSxtQkFBTyxDQUFDLHVGQUFrQixDQUFDLEdBQUcsQ0FDckU7NEJBQ1QsK0NBQUMsMkNBQU0sSUFBQyxJQUFJLFFBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLE1BQUssMERBQXFCLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwREFBcUIsQ0FBQyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMscUJBQXFCLEVBQUMsSUFBSSxFQUFDLElBQUk7Z0NBQ3hRLCtDQUFDLHlDQUFJLElBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBRSxtQkFBTyxDQUFDLDZGQUFxQixDQUFDLEdBQUcsQ0FDeEU7NEJBQ1QsK0NBQUMsMkNBQU0sSUFBQyxJQUFJLFFBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLE1BQUssd0RBQW1CLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx3REFBbUIsQ0FBQyxFQUFDLENBQUMsRUFBRSxTQUFTLEVBQUMscUJBQXFCLEVBQUMsSUFBSSxFQUFDLElBQUk7Z0NBQ2hRLCtDQUFDLHlDQUFJLElBQUMsU0FBUyxFQUFDLHVCQUF1QixFQUFDLElBQUksRUFBRSxtQkFBTyxDQUFDLHlGQUFtQixDQUFDLEdBQUcsQ0FDdEUsQ0FDTCxDQUNLO29CQUVYLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLE1BQUssd0RBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7b0JBRW5ILCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQzt3QkFDMUgsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hCLEtBQUssRUFBRSxNQUFNLENBQUMsU0FBUyxFQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUNwQyxJQUFJLEVBQUMsSUFBSSxJQUVSLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUNwQixDQUNFO29CQUNaLE1BQU0sQ0FBQyxTQUFTLEtBQUsscURBQWdCLElBQUksQ0FDeEMsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZ0JBQWMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7d0JBQzdGLHdEQUFLLFNBQVMsRUFBQyxRQUFROzRCQUNyQiwrQ0FBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBYSxnQkFDbEIsZUFBZSxFQUMxQixRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FDdEMsQ0FDRSxDQUNLLENBQ2Q7b0JBQ0EsTUFBTSxDQUFDLFNBQVMsS0FBSyxxREFBZ0IsSUFBSSxDQUN4QywrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxnQkFBYyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQzt3QkFDN0Ysd0RBQUssU0FBUyxFQUFDLFFBQVE7NEJBQ3JCLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxhQUFhLGdCQUNsQixlQUFlLEVBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUN0QyxDQUNFLENBQ0ssQ0FDZDtvQkFDQSxNQUFNLENBQUMsU0FBUyxLQUFLLHFEQUFnQixJQUFJLE1BQU0sQ0FBQyxhQUFhLElBQUksQ0FDaEUsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUNwSCwrQ0FBQyxpRUFBYyxJQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxFQUN4QixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hCLEdBQUcsRUFBRSxDQUFDLEVBQ04sYUFBYSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsR0FDMUMsQ0FDUyxDQUNkO29CQUNBLE1BQU0sQ0FBQyxTQUFTLEtBQUssd0RBQW1CLElBQUksQ0FDM0MsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO3dCQUMxSCwrQ0FBQyxpRUFBYyxJQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxFQUMxQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQ3hCLEdBQUcsRUFBRSxDQUFDLEVBQ04sYUFBYSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsR0FDNUMsQ0FDUyxDQUNkLENBQ2dCLENBQ0osQ0FDbEI7UUFDSCxDQUFDO1FBRUQsMEJBQXFCLEdBQUcsQ0FBQyxTQUF5QixFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUM7UUFDbkQsQ0FBQztRQUVELDRCQUF1QixHQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sY0FBYyxHQUFHLENBQUMsd0RBQW1CLEVBQUUsNkRBQXdCLENBQUM7WUFDdEUsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLHdEQUFtQixDQUFDO1lBQ2xELE1BQU0sVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUN0QyxPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ25CLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBQyxNQUFNLEdBQUU7Z0JBQ3pELCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO29CQUM1Qyx3REFBSyxTQUFTLEVBQUMsZ0JBQWdCO3dCQUM3QiwrQ0FBQyxpRkFBVSxJQUNULGlCQUFpQixRQUNqQixLQUFLLEVBQUMsR0FBRyxFQUNULElBQUksRUFBRSxtRkFBMEIsRUFDaEMsS0FBSyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLEVBQ3RCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQzNELENBQ0UsQ0FDSztnQkFDYix3REFDRSxTQUFTLEVBQUMsYUFBYSxFQUN2QixHQUFHLEVBQUUsMENBQUc7Ozs7O1dBS1A7b0JBRUQsK0NBQUMsNENBQU8sSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFNBQVMsRUFBQyxRQUFRO3dCQUMzRSx3REFBSyxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsMkJBQTJCLElBQzVELE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDLCtDQUFDLDBFQUFZLElBQUMsSUFBSSxFQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQywrQ0FBQyw4RUFBYyxJQUFDLElBQUksRUFBQyxHQUFHLEdBQUcsQ0FDOUUsQ0FDRSxDQUNOO2dCQUNOLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUM3Qyx3REFBSyxTQUFTLEVBQUMsZ0JBQWdCO3dCQUM3QiwrQ0FBQyxpRkFBVSxJQUNULEtBQUssRUFBQyxHQUFHLEVBQ1QsaUJBQWlCLFFBQ2pCLElBQUksRUFBRSxtRkFBMEIsRUFDaEMsS0FBSyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxNQUFNLEVBQ3ZCLGNBQWMsRUFBRSxvQkFBb0IsRUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQ2pFLFFBQVEsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZUFBZSxHQUNqQyxDQUNFLENBQ0s7Z0JBQ1osT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWU7b0JBQ3RCLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7d0JBQ3RELCtDQUFDLGlGQUFVLElBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsK0JBQStCLEdBQUksQ0FDdkc7Z0JBQ2YsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7b0JBQ2hELCtDQUFDLG9GQUFhLElBQ1osU0FBUyxFQUFFLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxhQUFhLEtBQUksMERBQXFCLEVBQ3pELFFBQVEsRUFBRSxJQUFJLENBQUMscUJBQXFCLEdBQ3BDLENBQ1M7Z0JBQ2IsK0NBQUMsMkVBQVUsSUFDVCxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUN4RCxJQUFJLEVBQUMsT0FBTyxnQkFDQSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTztvQkFFN0Qsd0RBQUssU0FBUyxFQUFDLHlEQUF5RDt3QkFDdEUsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGdCQUNaLGlCQUFpQixFQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUMvQixLQUFLLEVBQUUsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLGVBQWUsS0FBSSxDQUFDLEVBQ25DLEtBQUssRUFBQyxNQUFNLEVBQ1osSUFBSSxFQUFDLElBQUksRUFDVCxHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxFQUFFLEdBQ1A7d0JBQ0YsK0NBQUMsaUVBQWMsSUFDYixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQ3ZCLEtBQUssRUFBRSxPQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZUFBZSxLQUFJLENBQUMsRUFDbkMsR0FBRyxFQUFFLENBQUMsRUFDTixHQUFHLEVBQUUsRUFBRSxFQUNQLEtBQUssRUFBQyxNQUFNLEVBQ1osYUFBYSxFQUFFLElBQUksQ0FBQywyQkFBMkIsR0FDL0MsQ0FDRSxDQUNLO2dCQUNiLCtDQUFDLDJFQUFVLElBQ1QsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFDdEQsSUFBSSxFQUFDLE9BQU8sZ0JBQ0EsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLE9BQU87b0JBRTNELHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7d0JBQ3RFLCtDQUFDLDJDQUFNLElBQ0wsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFDWixlQUFlLEVBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQy9CLEtBQUssRUFBRSxPQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsYUFBYSxLQUFJLENBQUMsRUFDakMsS0FBSyxFQUFDLE1BQU0sRUFDWixJQUFJLEVBQUMsSUFBSSxFQUNULEdBQUcsRUFBRSxDQUFDLEVBQ04sR0FBRyxFQUFFLEVBQUUsR0FDUDt3QkFDRiwrQ0FBQyxpRUFBYyxJQUNiLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUNoQyxHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxFQUFFLEVBQ1AsS0FBSyxFQUFDLE1BQU0sRUFDWixhQUFhLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixHQUM3QyxDQUNFLENBQ0ssQ0FDVCxDQUNQO1FBQ0gsQ0FBQztRQUVELGlDQUE0QixHQUFHLEdBQUcsRUFBRTtZQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2pELE1BQU0sVUFBVSxHQUFHLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxVQUFVLE1BQUssdURBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssMkRBQXNCO1lBQy9ILE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsTUFBTTtnQkFDbkIsK0NBQUMsMkVBQVUsSUFDVCxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDOUIsSUFBSSxFQUFDLE9BQU8sZ0JBQ0EsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxPQUFPO29CQUV2RywrQ0FBQyxpRUFBYyxJQUNiLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFDeEIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQy9GLEdBQUcsRUFBRSx1REFBa0IsRUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQzlCLGFBQWEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEdBQ3hDLENBQ1M7Z0JBQ2IsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUMsRUFBRTtvQkFDbEIsd0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUUsU0FBUyxFQUFDLGdEQUFnRCxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQzt3QkFDcFEsK0NBQUMsNkNBQVEsSUFDUCxTQUFTLEVBQUMsaUJBQWlCLGdCQUNoQixlQUFlLEVBQzFCLE9BQU8sRUFBRSxNQUFNLENBQUMsYUFBYSxnQkFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsR0FDL0M7d0JBQ0Ysd0RBQUssU0FBUyxFQUFDLGlDQUFpQyxJQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUNoQyxDQUNGLENBQ0s7Z0JBQ2IsK0NBQUMsMkVBQVUsSUFDVCxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxPQUFPLEVBQy9HLElBQUksRUFBQyxPQUFPLGdCQUNBLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLE9BQU87b0JBRXBILHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7d0JBQ3RFLCtDQUFDLDJDQUFNLElBQ0wsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFDWixPQUFPLEVBQ2xCLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQy9CLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsRUFDeEIsS0FBSyxFQUFDLE1BQU0sRUFDWixJQUFJLEVBQUMsSUFBSSxFQUNULEdBQUcsRUFBRSxDQUFDLEVBQ04sR0FBRyxFQUFFLEVBQUUsR0FDUDt3QkFDRiwrQ0FBQyxpRUFBYyxJQUNiLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDdkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUN4QixHQUFHLEVBQUUsQ0FBQyxFQUNOLEdBQUcsRUFBRSxFQUFFLEVBQ1AsS0FBSyxFQUFDLE1BQU0sRUFDWixhQUFhLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUNyQyxDQUNFLENBQ0ssQ0FDVCxDQUNQO1FBQ0gsQ0FBQztRQUVELHFCQUFnQixHQUFHLEdBQUcsRUFBRTtZQUN0QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsRUFBQyxDQUFDLENBQUMsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsTUFBSyx1REFBa0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSywyREFBc0I7WUFDL0gsTUFBTSxNQUFNLEdBQUcsT0FBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVUsTUFBSyx3REFBbUI7WUFDekQsSUFBSSxXQUFXO1lBQ2YsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU87YUFDbEg7WUFDRCxPQUFPLHdEQUFLLFNBQVMsRUFBQyxRQUFRO2dCQUM1Qix3REFBSyxTQUFTLEVBQUMsYUFBYSxJQUN6QixXQUFXLENBQ1I7Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FDckI7UUFDUixDQUFDO1FBRUQsb0JBQWUsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUNyQyxNQUFNLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUNoRSxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBRTlDLE1BQU0sVUFBVSxHQUFHLENBQUMsYUFBYSxDQUFDLDZEQUFzQixDQUFDO1lBQ3pELE1BQU0sVUFBVSxHQUFHLENBQUMsYUFBYSxDQUFDLDREQUFxQixDQUFDO1lBRXhELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLDREQUFxQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztZQUV6RyxNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLDREQUFxQixJQUFJLFVBQVUsQ0FBQztnQkFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEtBQUssNkRBQXNCO2dCQUNyRCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLDREQUFxQixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUM7WUFFcEYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsS0FBSyw0REFBcUIsSUFBSSxVQUFVLENBQUM7Z0JBQ25GLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEtBQUssNkRBQXNCLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQztnQkFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEtBQUssNERBQXFCO1lBRXRELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUV2RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDO1lBQzdELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUM7WUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RCxPQUFPLENBQ0wsd0RBQUssU0FBUyxFQUFDLG1EQUFtRDtnQkFDL0QsU0FBUyxJQUFJLCtDQUFDLHFGQUFlLElBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLGdCQUFjLFlBQVksR0FBRztnQkFDNUcsS0FBSyxJQUFJLCtDQUFDLG1GQUFjLElBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLGdCQUFjLFFBQVEsR0FBSTtnQkFDcEksUUFBUSxJQUFJLCtDQUFDLG1GQUFjLElBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxnQkFBYyxXQUFXLEdBQUksQ0FDbkosQ0FDUDtRQUNILENBQUM7UUFFRCx1QkFBa0IsR0FBRyxHQUFvQixFQUFFO1lBQ3pDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdEMsT0FBTyxDQUNMLCtDQUFDLCtFQUFjO2dCQUNiLCtDQUFDLHFEQUFnQixJQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUNuQyxNQUFNLEVBQUUsZUFBZSxLQUFLLCtEQUEwQixFQUN0RCxhQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLCtEQUEwQixDQUFDLEVBQUMsQ0FBQyxFQUM3RSxjQUFjLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7b0JBRXhDLCtDQUFDLDJFQUFVLElBQUMsU0FBUyxFQUFDLE1BQU07d0JBQzFCLCtDQUFDLDZFQUFZLElBQ1gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUMzQyxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFDM0IsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUN6QyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQ3ZCLENBQ1M7b0JBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDdkIsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUMsT0FBTyxnQkFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzt3QkFDbEcsK0NBQUMsMkNBQU0sSUFDTCxTQUFTLEVBQUMsZ0NBQWdDLGdCQUM5QixpREFBWSxFQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUMvQixJQUFJLEVBQUMsVUFBVSxFQUNmLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDbkMsSUFBSSxFQUFDLElBQUksRUFDVCxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUM7NEJBRWxELDREQUFNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFPOzRCQUN6QywrQ0FBQyxpRkFBYSxJQUFDLFFBQVEsUUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUNyRCxDQUNFO29CQUNiLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFDLE9BQU8sZ0JBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7d0JBQ3hHLCtDQUFDLDJDQUFNLElBQ0wsU0FBUyxFQUFDLGdDQUFnQyxnQkFDOUIsb0RBQWUsRUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDL0IsSUFBSSxFQUFDLFVBQVUsRUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQ3RDLElBQUksRUFBQyxJQUFJLEVBQ1QsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixHQUFHLEdBQUcsRUFBQyxDQUFDOzRCQUVyRCw0REFBTSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBTzs0QkFDNUMsK0NBQUMsaUZBQWEsSUFBQyxRQUFRLFFBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FDckQsQ0FDRSxDQUNJLENBQ0osQ0FDbEI7UUFDSCxDQUFDO1FBRUQsMEJBQXFCLEdBQUcsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsaURBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDdkcsQ0FBQztRQUVELDZCQUF3QixHQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDN0IsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLG9EQUFlLENBQUMsQ0FBQyxhQUFhLEtBQUssMkRBQXNCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVJLENBQUM7UUFFRCxzQkFBaUIsR0FBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM3QyxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDdEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFVBQVU7WUFDckMsTUFBTSxXQUFXLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUU7WUFDOUMsT0FBTyxDQUNMLCtDQUFDLCtFQUFjO2dCQUNiLCtDQUFDLHFEQUFnQixJQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUNsQyxNQUFNLEVBQUUsZUFBZSxLQUFLLDhEQUF5QixFQUNyRCxhQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLDhEQUF5QixDQUFDLEVBQUMsQ0FBQyxFQUM1RSxjQUFjLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtvQkFFekMsK0NBQUMsMkVBQVUsSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBYyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzt3QkFDeEcsd0RBQUssU0FBUyxFQUFDLFFBQVE7NEJBQ3JCLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLGdCQUNmLFlBQVksRUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQ25DLENBQ0UsQ0FDSztvQkFDWixNQUFNLENBQUMsVUFBVSxJQUFJLENBQ3BCLCtDQUFDLDJFQUFVLElBQ1QsSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUNsRCxJQUFJLEVBQUMsT0FBTyxnQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDO3dCQUV2RCx3REFDRSxTQUFTLEVBQUMsK0JBQStCLEVBQ3pDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBRXBCLCtDQUFDLGdEQUFXLElBQ1YsS0FBSyxFQUFFLG9EQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQy9DLE1BQU0sRUFDSixNQUFNLENBQUMsWUFBWTtvQ0FDbkIsb0RBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUUzQyxTQUFTLEVBQUMscUJBQXFCLEVBQy9CLEtBQUssUUFDTCxJQUFJLEVBQUMsSUFBSSxFQUNULFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQ3pELFdBQVcsRUFBRSxJQUFJLENBQUMsaUNBQWlDLEVBQ25ELGVBQWUsRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQzNDLFdBQVcsRUFBRyxXQUFXLEdBQ3pCLENBQ0U7d0JBQ04sd0RBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFDLDBDQUEwQyxFQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDOzRCQUN6USwrQ0FBQyw2Q0FBUSxrQkFDSSxhQUFhLEVBQ3hCLE9BQU8sRUFBRSxNQUFNLENBQUMsV0FBVyxnQkFDZixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUM1Qzs0QkFDRix3REFBSyxTQUFTLEVBQUMscUNBQXFDLElBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQzdCLENBQ0YsQ0FDSyxDQUNkO29CQUNBLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FDcEIsK0NBQUMsMkVBQVUsSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO3dCQUN4SCwrQ0FBQyw4Q0FBUyxJQUNSLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLDBCQUEwQixFQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDekMsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLEVBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLEdBQ3hDLENBQ1MsQ0FDZDtvQkFDRCwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxnQkFBYyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzt3QkFDbkYsd0RBQUssU0FBUyxFQUFDLFFBQVE7NEJBQ3JCLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLGdCQUNiLFVBQVUsRUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQ2pDLENBQ0UsQ0FDSztvQkFDWixNQUFNLENBQUMsUUFBUSxJQUFJLENBQ2xCLCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE1BQU07d0JBQ3JCLCtDQUFDLDRFQUFXLElBQ1YsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFDbEMsYUFBYSxFQUFFLGNBQWMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQ2xELEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLG9EQUFTLENBQUMsRUFBRSxDQUFDLEdBQ3BDLENBQ1MsQ0FDZDtvQkFDRCwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxnQkFBYyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQzt3QkFDdkYsd0RBQUssU0FBUyxFQUFDLFFBQVE7NEJBQ3JCLCtDQUFDLDJDQUFNLElBQ0wsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLGdCQUNmLFlBQVksRUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQ25DLENBQ0UsQ0FDSztvQkFDWixNQUFNLENBQUMsVUFBVSxJQUFJLENBQ3BCLCtDQUFDLDRDQUFRO3dCQUNQLCtDQUFDLDJFQUFVOzRCQUNULHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7Z0NBQ3RFLCtDQUFDLDJDQUFNLElBQ0wsU0FBUyxFQUFDLDhCQUE4QixFQUN4QyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ3ZELFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFFdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FDMUIsQ0FDTCxDQUNLO3dCQUNiLCtDQUFDLDJFQUFVLElBQUMsSUFBSSxFQUFDLE1BQU07NEJBQ3JCLCtDQUFDLCtGQUF5QixJQUN4QixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDL0IsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEdBQ3JDLENBQ1MsQ0FDSixDQUNaO29CQUNBLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0RBQWUsQ0FBQyxDQUFDLGFBQWE7d0JBQ2hELDJEQUFzQixJQUFJLENBQzFCLCtDQUFDLDRDQUFRO3dCQUNQLCtDQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGdCQUFjLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDOzRCQUNyRywrQ0FBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsb0JBQW9CLGdCQUN6QixzQkFBc0IsRUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEdBQzFDLENBQ1M7d0JBQ2IsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBYyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDOzRCQUN2RywrQ0FBQywyQ0FBTSxJQUNMLE9BQU8sRUFBRSxNQUFNLENBQUMsaUJBQWlCLGdCQUN0QixtQkFBbUIsRUFDOUIsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FDM0MsQ0FDUyxDQUNKLENBQ1osQ0FDZ0IsQ0FDSixDQUNsQjtRQUNILENBQUM7UUFFRCx5QkFBb0IsR0FBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2pDLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsNENBQTRDO2dCQUN4RCxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDbEMsVUFBVSxJQUFJLENBQ2IsK0NBQUMsNENBQVE7b0JBQ04sSUFBSSxDQUFDLHdCQUF3QixFQUFFO29CQUMvQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUNoQixDQUNaLENBQ0csQ0FDUDtRQUNILENBQUM7UUFFRCxnQ0FBMkIsR0FBRyxHQUFHLEVBQUU7WUFDakMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2pDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO1lBQzFELE9BQU8sQ0FBQyxVQUFVO2dCQUNoQixDQUFDLENBQUMsQ0FDQSx3REFBSyxTQUFTLEVBQUMsbUhBQW1IO29CQUNoSSx3REFBSyxTQUFTLEVBQUMsT0FBTzt3QkFDcEIsK0NBQUMsaUZBQWEsSUFBQyxJQUFJLEVBQUUsRUFBRSxHQUFHO3dCQUMxQixzREFBRyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixJQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFOzRCQUNyQyxZQUFZLEVBQUUsY0FBYzt5QkFDN0IsQ0FBQyxDQUNBLENBQ0EsQ0FDRixDQUNMO2dCQUNILENBQUMsQ0FBQyxJQUFJO1FBQ1YsQ0FBQztRQUVELDBCQUFxQixHQUFHLEdBQUcsRUFBRTs7WUFDM0IsTUFBTSxVQUFVLEdBQThCLEVBQUU7WUFDaEQsVUFBVSxDQUFDLGlEQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN0RCxVQUFVLENBQUMsb0RBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQzVELFVBQVUsQ0FBQyxtREFBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7WUFDMUQsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3hHLE9BQU8sQ0FDTCx3REFBSyxTQUFTLEVBQUMsbUJBQW1CO2dCQUNoQywrQ0FBQywrRUFBYztvQkFDYiwrQ0FBQywyRUFBVSxJQUNULEtBQUssRUFDSCwrQ0FBQywyQ0FBTSxJQUNMLFNBQVMsRUFBQyw2REFBNkQsRUFDdkUsT0FBTyxFQUFFLElBQUksQ0FBQyw0QkFBNEIsRUFDMUMsSUFBSSxFQUFDLFVBQVUsRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs0QkFFakMsK0NBQUMsMEZBQWlCLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxRQUFRLFNBQUU7NEJBQzdDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FDckIsR0FFWDtvQkFDRiwrQ0FBQywyRUFBVSxJQUNULEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRTs0QkFDeEMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTt5QkFDeEQsQ0FBQyxnQkFDVSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDO3dCQUUzRywrQ0FBQywyQ0FBTSxJQUNMLE9BQU8sRUFDTCxlQUFlLEtBQUssaURBQVk7Z0NBQzlCLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGlEQUFZLENBQUMsQ0FBQyxNQUFNO2dDQUN6QyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxvREFBZSxDQUFDLENBQUMsYUFBYTtvQ0FDakQsMkRBQXNCLEVBRTVCLFFBQVEsRUFDTixlQUFlLEtBQUssaURBQVk7Z0NBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCO2dDQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUU1QixLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxHQUN0RyxDQUNTLENBQ0U7Z0JBRWhCLENBQUMsQ0FBQyxlQUFlLEtBQUssb0RBQWU7b0JBQ3BDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0RBQWUsQ0FBQyxDQUFDLGFBQWE7d0JBQy9DLDJEQUFzQixDQUFDO29CQUN6QixDQUFDLGVBQWUsS0FBSyxpREFBWTt3QkFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxpREFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQywrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBQyxrQkFBa0I7b0JBQ3pDLGVBQWUsS0FBSyxvREFBZSxJQUFJLENBQUMsK0NBQUMsK0VBQWMsSUFBQyxTQUFTLEVBQUMsZUFBZTt3QkFDaEYsK0NBQUMsMkVBQVUsSUFDVCxJQUFJLEVBQUMsTUFBTSxFQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUN2QyxJQUFJLEVBQUMsT0FBTyxnQkFDQSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQzs0QkFFNUMsK0NBQUMsMkNBQU0sSUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxvREFBZSxDQUFDLENBQUMsYUFBYSxFQUN4RCxRQUFRLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixJQUVuQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FDckIsQ0FDRSxDQUNFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO29CQUM1QiwrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBQyxlQUFlO3dCQUN2QywrQ0FBQyxrRUFBYSxJQUNaLEVBQUUsRUFBRSxFQUFFLEVBQ04sZUFBZSxFQUFFLGVBQWUsRUFDaEMsVUFBVSxFQUFFLFlBQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLDBDQUFFLFVBQVUsRUFDM0QsTUFBTSxFQUFFLGVBQWUsRUFDdkIsZUFBZSxFQUFFLGVBQWUsRUFDaEMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsU0FBUyxFQUFFLFNBQVMsR0FDcEIsQ0FDYSxDQUNGLENBQ2xCLENBQ0csQ0FDUDtRQUNILENBQUM7UUE1M0VDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixhQUFhLEVBQUUsS0FBSztZQUNwQix1QkFBdUIsRUFBRSxLQUFLO1lBQzlCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsZUFBZSxFQUFFLDZEQUF3QjtTQUMxQztRQUNELElBQUksQ0FBQyxhQUFhLEdBQUcsc0RBQWUsRUFBRTtRQUN0QyxJQUFJLENBQUMsK0JBQStCLEdBQUcsc0RBQWUsQ0FDcEQsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLEVBQ3hELEdBQUcsQ0FDSjtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ3hELElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUN2QixJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzFCLFNBQVMsR0FBRyxvRUFBa0IsRUFBRSxDQUFDLFVBQVUsQ0FDekMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFRLENBQ2hFLENBQUMsU0FBUzthQUNaO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLG9CQUFvQixFQUFFLFNBQVMsQ0FBQztTQUNuRjtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ25FLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUNuQyxRQUFRLENBQ04sdUVBQWdDLENBQUMsRUFBRSxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUNqRTtRQUNELFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDMUMsQ0FBQztJQWtkRCxrQkFBa0IsQ0FDaEIsUUFBcUU7O1FBRXJFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDakUsOENBQThDO1FBQzlDLElBQUksZ0JBQWdCLEdBQUcsS0FBSztRQUM1QixJQUFJLGNBQWMsS0FBSyxRQUFRLENBQUMsY0FBYyxFQUFFO1lBQzlDLE1BQU0sR0FBRyxHQUFHLGNBQVEsQ0FBQyxjQUFjLDBDQUFHLENBQUMsQ0FBQztZQUN4QyxNQUFNLEdBQUcsR0FBRyxVQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsMENBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksSUFBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLFlBQVksT0FBSyxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsWUFBWSxHQUFFO2dCQUMzRCxJQUFJLENBQUMsY0FBYyxDQUNqQixNQUFNO3FCQUNILEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO3FCQUN2QixHQUFHLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztxQkFDOUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FDNUI7Z0JBQ0QsZ0JBQWdCLEdBQUcsSUFBSTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUk7aUJBQzdCO2dCQUNELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNmLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7aUJBQzlCO2FBQ0Y7WUFDRCxJQUNFLENBQUMsY0FBYztnQkFDZixjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3pCLENBQUMsUUFBUSxDQUFDLGNBQWM7Z0JBQ3hCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2xDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWTtvQkFDckMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFDaEM7Z0JBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FDakIsTUFBTTtxQkFDSCxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztxQkFDdkIsR0FBRyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7cUJBQzlCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQzVCO2dCQUNELGdCQUFnQixHQUFHLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJO2lCQUM3QjthQUNGO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtTQUN4QjtRQUVELElBQUksUUFBUSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7WUFDakYsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1NBQ2pDO0lBQ0gsQ0FBQztJQTRLRCxxQkFBcUIsQ0FBRSxLQUFLLEVBQUUsSUFBSTtRQUNoQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pCLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxDQUFDO2dCQUNULE9BQU8sSUFBSTthQUNaO2lCQUFNO2dCQUNMLE9BQU8sS0FBSzthQUNiO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQWliRCxlQUFlLENBQUUsZ0JBQXlCLElBQUk7UUFDNUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUU5QyxPQUFPLENBQ0wsK0NBQUMsNENBQVE7WUFDUCwrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBRSxpQkFBaUIsYUFBYSxJQUFJLG1DQUFtQyxFQUFFO2dCQUNoRywrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sZ0JBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7b0JBQ3hILCtDQUFDLHdGQUFpQixJQUNoQixVQUFVLEVBQ1IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUVoRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBQyxDQUFDLEdBQ3pGLENBQ1MsQ0FDRTtZQUNqQiwrQ0FBQywrRUFBYyxJQUFDLFNBQVMsRUFBRSxpQkFBaUIsYUFBYSxJQUFJLGNBQWMsRUFBRTtnQkFDM0UsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxPQUFPLGdCQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUNoSCwrQ0FBQyxvRkFBYSxJQUNaLEtBQUssRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQ2pFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FDckYsQ0FDUztnQkFDYiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLE9BQU8sZ0JBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7b0JBQzVILCtDQUFDLDBGQUFtQixJQUNsQixLQUFLLEVBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUVsRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7NEJBQ2hCLElBQUksQ0FBQyx1QkFBdUIsQ0FDMUIsZUFBZSxFQUNmLGNBQWMsRUFDZCxLQUFLLENBQ047d0JBQ0gsQ0FBQyxHQUNELENBQ1MsQ0FDRSxDQU1SLENBQ1o7SUFDSCxDQUFDO0lBMnJDRCxNQUFNO1FBQ0osTUFBTSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSztRQUNqRSxPQUFPLENBQ0wsd0RBQ0UsU0FBUyxFQUFFLHFEQUFVLENBQUMsR0FBRyxNQUFNLGNBQWMsRUFBRSxHQUFHLE1BQU0sU0FBUyxDQUFDLEVBQ2xFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBRW5DLENBQUMsaUJBQWlCLElBQUksd0RBQUssU0FBUyxFQUFDLE9BQU87WUFDMUMsQ0FBQyxNQUFNLENBQUMsa0JBQWtCO2dCQUN6QixDQUFDLENBQUMsQ0FDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUNBLCtDQUFDLDRDQUFRO29CQUNOLGVBQWUsS0FBSyxtREFBYyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDakUsZUFBZSxLQUFLLG1EQUFjLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQzFELENBQ1Y7WUFFSixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDaEMsd0RBQUssU0FBUyxFQUFDLHNCQUFzQjtnQkFDbkMsK0NBQUMsMERBQW1CLElBQ2xCLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFDM0MsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFDcEMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixHQUNuRCxDQUNFLENBQ1AsQ0FDRyxDQUNGLENBQ1A7SUFDSCxDQUFDOztBQW44RU0sMEJBQWtCLEdBQUcsQ0FDMUIsS0FBYyxFQUNkLEtBQXNDLEVBQ3RDLEVBQUU7O0lBQ0YsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUs7SUFDcEIsT0FBTztRQUNMLFNBQVMsRUFDUCxLQUFLLElBQUksS0FBSyxDQUFDLGlCQUFpQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTO1FBQ3ZFLE9BQU8sRUFDTCxLQUFLO1lBQ0wsS0FBSyxDQUFDLGlCQUFpQjtZQUN2QixLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxLQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDaEQsZUFBZSxFQUNiLEtBQUs7WUFDTCxLQUFLLENBQUMsaUJBQWlCO1lBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlO1FBQ3pDLGVBQWUsRUFDYixDQUFDLEtBQUs7WUFDSixLQUFLLENBQUMsaUJBQWlCO1lBQ3ZCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO1lBQ3BDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQzNELG1EQUFjO1FBQ2hCLGlCQUFpQixFQUNmLGlCQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsaUJBQWlCLDBDQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsMENBQUUsaUJBQWlCO1FBQy9ELGtCQUFrQixFQUFFLGlCQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsWUFBWSwwQ0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLDBDQUFFLGtCQUFrQjtRQUN2RSxVQUFVLEVBQUUsaUJBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxpQkFBaUIsMENBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQywwQ0FBRSxVQUFVO1FBQ2xFLFVBQVUsRUFBRSxpQkFBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGlCQUFpQiwwQ0FBRSxZQUFZLENBQUMsRUFBRSxDQUFDLDBDQUFFLFVBQVU7UUFDbEUsVUFBVSxFQUFFLGlCQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsaUJBQWlCLDBDQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsMENBQUUsVUFBVTtRQUNsRSxZQUFZLEVBQUUsNkRBQTBCLENBQUMsV0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGlCQUFpQiwwQ0FBRSxTQUFTLEVBQUUsV0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGlCQUFpQiwwQ0FBRSxlQUFlLENBQUM7S0FDekg7QUFDSCxDQUFDO0FBczZFSyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jbGljay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2Rlc2t0b3Auc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9tb2JpbGUuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi90YWJsZXQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9hcnJvdy1sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvbG9jay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci91bmxvY2suc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL3N1Z2dlc3RlZC93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jbGljay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vZGVza3RvcC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vbW9iaWxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi90YWJsZXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2Fycm93LWxlZnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvbG9jay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3VubG9jay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvc3VnZ2VzdGVkL2luZm8udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL3N1Z2dlc3RlZC93YXJuaW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL2NvbW1vbi1idWlsZGVyLXN1cHBvcnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9jb21wb25lbnRzL215LWlucHV0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvY29tcG9uZW50cy9zd2l0Y2gtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xpc3QtMTEyL3NyYy9zZXR0aW5nL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9hc3NldHMvY29sdW1uLnBuZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvYXNzZXRzL2dyaWQucG5nIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9hc3NldHMvcm93LnBuZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlMS5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xpc3QtMTEyL3NyYy9zZXR0aW5nL2Fzc2V0cy9zdHlsZTIucG5nIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9hc3NldHMvc3R5bGUzLnBuZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlNC5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xpc3QtMTEyL3NyYy9zZXR0aW5nL2Fzc2V0cy9zdHlsZTUucG5nIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9hc3NldHMvc3R5bGU2LnBuZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvYXNzZXRzL3N0eWxlNy5wbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xpc3QtMTEyL3NyYy9zZXR0aW5nL2Fzc2V0cy9zdHlsZTgucG5nIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvc2V0dGluZy9hc3NldHMvc3R5bGU5LnBuZyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWZvci1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc3R5bGUtc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL3NxbC1leHByZXNzaW9uLXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEyIDYuNWMwIC41MjctLjA3NCAxLjAzNi0uMjEyIDEuNTE4bC45MTIuNDM4YTYuNSA2LjUgMCAxIDAtNi41ODYgNC41MzNsLS4wNzctMS4wMDhBNS41IDUuNSAwIDEgMSAxMiA2LjVabS05IDBhMy41MDEgMy41MDEgMCAwIDAgMi44OCAzLjQ0NUw1LjggOC45MDFhMi41MDEgMi41MDEgMCAxIDEgMy4xOTQtMi4yMjRsLjk0OS40NTZBMy41IDMuNSAwIDEgMCAzIDYuNVpNMTUuNSAxMWwtNSAxLTMgNC0xLTkuNSA5IDQuNVptLTUuNTcuMDk0LTEuNzAyIDIuMjY5LS41NDItNS4xNTIgNC43NiAyLjM4LTIuNTE3LjUwM1pcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMTNIMWExIDEgMCAwIDEtMS0xVjNhMSAxIDAgMCAxIDEtMWgxNGExIDEgMCAwIDEgMSAxdjlhMSAxIDAgMCAxLTEgMWgtNGwuNzggMi4zNDJhLjUuNSAwIDAgMS0uNDc0LjY1OEg0LjY5NGEuNS41IDAgMCAxLS40NzUtLjY1OEw1IDEzWk0xIDNoMTR2OUgxVjNabTUuMDU0IDEwLS42NjcgMmg1LjIyNmwtLjY2Ny0ySDYuMDU0WlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTcuNSAxM2EuNS41IDAgMCAwIDAgMWgxYS41LjUgMCAwIDAgMC0xaC0xWlxcXCI+PC9wYXRoPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQgNWExIDEgMCAwIDEgMS0xaDZhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMVY1Wm0xIDBoNnYxMEg1VjVaXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zLjA0IDJhLjI0Mi4yNDIgMCAwIDAtLjA0LjE0M3YxMi43MTRjMCAuMDczLjAyMy4xMi4wNC4xNDNoOS45MmEuMjQxLjI0MSAwIDAgMCAuMDQtLjE0M1YyLjE0M0EuMjQxLjI0MSAwIDAgMCAxMi45NiAySDMuMDRaTTMgMWMtLjU1MiAwLTEgLjUxMi0xIDEuMTQzdjEyLjcxNEMyIDE1LjQ4OCAyLjQ0OCAxNiAzIDE2aDEwYy41NTIgMCAxLS41MTIgMS0xLjE0M1YyLjE0M0MxNCAxLjUxMiAxMy41NTIgMSAxMyAxSDNaXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBkPVxcXCJNMTUgNy41YS41MjIuNTIyIDAgMCAxLS41MTYuNTI3SDIuOTc2TDYuNDczIDExLjZhLjUzNS41MzUgMCAwIDEgMCAuNzQ2LjUwOC41MDggMCAwIDEtLjczIDBMMSA3LjVsNC43NDMtNC44NDZhLjUwOC41MDggMCAwIDEgLjczIDAgLjUzNS41MzUgMCAwIDEgMCAuNzQ2TDIuOTc2IDYuOTczaDExLjUwOGMuMjg1IDAgLjUxNi4yMzYuNTE2LjUyN1pcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk00LjY1MyAxMy44NTRhLjQ4NS40ODUgMCAwIDEgMC0uNzA4TDEwLjI0IDggNC42NTMgMi44NTRhLjQ4NS40ODUgMCAwIDEgMC0uNzA4LjUzOC41MzggMCAwIDEgLjczOCAwbDUuOTU2IDUuNWEuNDg1LjQ4NSAwIDAgMSAwIC43MDhsLTUuOTU2IDUuNWEuNTM4LjUzOCAwIDAgMS0uNzM4IDBaXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk03LjUgMEEzLjUgMy41IDAgMCAxIDExIDMuNVY2aDFhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xVjdhMSAxIDAgMCAxIDEtMWgxVjMuNUEzLjUgMy41IDAgMCAxIDcuNSAwWk01IDZoNVYzLjVhMi41IDIuNSAwIDAgMC0yLjMzNi0yLjQ5NUw3LjUgMWEyLjUgMi41IDAgMCAwLTIuNDk1IDIuMzM2TDUgMy41VjZabTYgMUgzdjhoOVY3aC0xWm0tMy41IDVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNaXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNiAzLjVhMy41IDMuNSAwIDEgMC03IDBWNkgzYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDlhMSAxIDAgMCAwIDEtMVY3YTEgMSAwIDAgMC0xLTFoLTJWMy41bC4wMDUtLjE2NEEyLjUgMi41IDAgMCAxIDEyLjUgMWwuMTY0LjAwNUEyLjUgMi41IDAgMCAxIDE1IDMuNWEuNS41IDAgMCAwIDEgMFpNOSA3SDN2OGg5VjdIOVptLTEuNSA1YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzWlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZD1cXFwiTTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMlpNNi41IDcuNUEuNS41IDAgMCAxIDcgN2gxLjV2NC41aDFhLjUuNSAwIDAgMSAwIDFoLTNhLjUuNSAwIDAgMSAwLTFoMVY4SDdhLjUuNSAwIDAgMS0uNS0uNVpcXFwiPjwvcGF0aD48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk04IDE2QTggOCAwIDEgMSA4IDBhOCA4IDAgMCAxIDAgMTZabTAtMUE3IDcgMCAxIDAgOCAxYTcgNyAwIDAgMCAwIDE0WlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOCAyLjEyNSAxNC4zMzQgMTRIMS42NjdMOCAyLjEyNVptLS44ODItLjQ3YTEgMSAwIDAgMSAxLjc2NSAwbDYuMzMzIDExLjg3NEExIDEgMCAwIDEgMTQuMzM0IDE1SDEuNjY3YTEgMSAwIDAgMS0uODgyLTEuNDdMNy4xMTggMS42NTNaTTggNC44NzRhLjkwNS45MDUgMCAwIDAtLjkuOTk1bC4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMCAxLjEgMEw4LjkgNS44N2EuOTA1LjkwNSAwIDAgMC0uOS0uOTk1Wm0xIDdhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwWlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NsaWNrLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlja091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2Rlc2t0b3Auc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IERlc2t0b3BPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9tb2JpbGUuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYmlsZU91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3RhYmxldC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgVGFibGV0T3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvYXJyb3ctbGVmdC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQXJyb3dMZWZ0T3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFJpZ2h0T3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL2xvY2suc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvdW5sb2NrLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBVbmxvY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mby5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgSW5mb091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL3N1Z2dlc3RlZC93YXJuaW5nLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgZ2V0QXBwQ29uZmlnQWN0aW9uLFxyXG4gIHR5cGUgQXBwQ29uZmlnQWN0aW9uLFxyXG4gIGJ1aWxkZXJBcHBTeW5jXHJcbn0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgdHlwZSBJTUFwcENvbmZpZywgTGF5b3V0SXRlbVR5cGUsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBzZWFyY2hVdGlscyB9IGZyb20gJ2ppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZSdcclxuaW1wb3J0IHsgU3RhdHVzLCB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0U2VsZiAocHJvcHMsIGZyb21QYWdlPzogYm9vbGVhbikge1xyXG4gIGNvbnN0IHsgaWQsIGRpc3BhdGNoLCBicm93c2VyU2l6ZU1vZGUgfSA9IHByb3BzXHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnQWN0aW9uKCkuYXBwQ29uZmlnXHJcbiAgY29uc3QgbGF5b3V0SW5mb3MgPSBzZWFyY2hVdGlscy5nZXRDb250ZW50TGF5b3V0SW5mb3NJbk9uZVNpemVNb2RlKFxyXG4gICAgYXBwQ29uZmlnLFxyXG4gICAgaWQsXHJcbiAgICBMYXlvdXRJdGVtVHlwZS5XaWRnZXQsXHJcbiAgICBicm93c2VyU2l6ZU1vZGVcclxuICApXHJcbiAgaWYgKGxheW91dEluZm9zKSB7XHJcbiAgICBpZiAobGF5b3V0SW5mb3MubGVuZ3RoID4gMSkge1xyXG4gICAgICBjb25zdCB3aWRnZXRJZCA9IHNlYXJjaFV0aWxzLmdldFdpZGdldElkVGhhdFVzZVRoZUxheW91dElkKFxyXG4gICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICBsYXlvdXRJbmZvc1swXS5sYXlvdXRJZFxyXG4gICAgICApXHJcbiAgICAgIGlmICh3aWRnZXRJZCkge1xyXG4gICAgICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWcud2lkZ2V0c1t3aWRnZXRJZF1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB3aWRnZXRKc29uICYmXHJcbiAgICAgICAgICB3aWRnZXRKc29uLm1hbmlmZXN0ICYmXHJcbiAgICAgICAgICB3aWRnZXRKc29uLm1hbmlmZXN0Lm5hbWUgJiZcclxuICAgICAgICAgIHdpZGdldEpzb24ubWFuaWZlc3QubmFtZSA9PT0gJ2xpc3QnXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdHVzID1cclxuICAgICAgICAgICAgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZSAmJlxyXG4gICAgICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3dpZGdldEpzb24uaWRdICYmXHJcbiAgICAgICAgICAgIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS53aWRnZXRzU3RhdGVbd2lkZ2V0SnNvbi5pZF0uYnVpbGRlclN0YXR1c1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTdGF0dXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExheW91dElkID0gc2VhcmNoVXRpbHMuZmluZExheW91dElkKFxyXG4gICAgICAgICAgICAgIHdpZGdldEpzb24ubGF5b3V0c1tjdXJyZW50U3RhdHVzXSxcclxuICAgICAgICAgICAgICBicm93c2VyU2l6ZU1vZGUsXHJcbiAgICAgICAgICAgICAgYXBwQ29uZmlnLm1haW5TaXplTW9kZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNvbnN0IGxheW91dEluZm8gPSBsYXlvdXRJbmZvcy5maW5kKFxyXG4gICAgICAgICAgICAgIGxJbmZvID0+IGxJbmZvLmxheW91dElkID09PSBjdXJyZW50TGF5b3V0SWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoZnJvbVBhZ2UpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChhcHBBY3Rpb25zLnNlbGVjdGlvbkNoYW5nZWQobGF5b3V0SW5mbykpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVNlbGVjdGlvblRvQXBwKGxheW91dEluZm8pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobGF5b3V0SW5mb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoZnJvbVBhZ2UpIHtcclxuICAgICAgICBkaXNwYXRjaChhcHBBY3Rpb25zLnNlbGVjdGlvbkNoYW5nZWQobGF5b3V0SW5mb3NbMF0pKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJ1aWxkZXJBcHBTeW5jLnB1Ymxpc2hDaGFuZ2VTZWxlY3Rpb25Ub0FwcChsYXlvdXRJbmZvc1swXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZUNhcmQgKFxyXG4gIHByb3BzLFxyXG4gIG5ld0NhcmRTaXplLFxyXG4gIHdpZGdldENvbmZpZzogSU1Db25maWcsXHJcbiAgaXNUb3A6IGJvb2xlYW4gPSBmYWxzZSxcclxuICBpc0xlZnQ6IGJvb2xlYW4gPSBmYWxzZSxcclxuICBpc0VuZDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGFwcENvbmZpZzogSU1BcHBDb25maWcgPSB1bmRlZmluZWRcclxuKTogQXBwQ29uZmlnQWN0aW9uIHtcclxuICBjb25zdCB7IGlkLCBicm93c2VyU2l6ZU1vZGUgfSA9IHByb3BzXHJcbiAgaWYgKCFhcHBDb25maWcpIHtcclxuICAgIGFwcENvbmZpZyA9IGdldEFwcENvbmZpZ0FjdGlvbigpLmFwcENvbmZpZ1xyXG4gIH1cclxuICBjb25zdCBhY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oYXBwQ29uZmlnKVxyXG5cclxuICBhY3Rpb24uZWRpdFdpZGdldENvbmZpZyhcclxuICAgIGlkLFxyXG4gICAgd2lkZ2V0Q29uZmlnXHJcbiAgICAgIC5zZXRJbihcclxuICAgICAgICBbJ2NhcmRDb25maWdzJywgU3RhdHVzLlJlZ3VsYXIsICdjYXJkU2l6ZScsIGJyb3dzZXJTaXplTW9kZV0sXHJcbiAgICAgICAgbmV3Q2FyZFNpemVcclxuICAgICAgKVxyXG4gICAgICAuc2V0SW4oXHJcbiAgICAgICAgWydjYXJkQ29uZmlncycsIFN0YXR1cy5Ib3ZlciwgJ2NhcmRTaXplJywgYnJvd3NlclNpemVNb2RlXSxcclxuICAgICAgICBuZXdDYXJkU2l6ZVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRJbihcclxuICAgICAgICBbJ2NhcmRDb25maWdzJywgU3RhdHVzLlNlbGVjdGVkLCAnY2FyZFNpemUnLCBicm93c2VyU2l6ZU1vZGVdLFxyXG4gICAgICAgIG5ld0NhcmRTaXplXHJcbiAgICAgIClcclxuICApXHJcblxyXG4gIHJldHVybiBhY3Rpb25cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZUNhcmRGb3JTdHlsZUNoYW5nZShpZCwgY29uZmlnLCBhcHBDb25maWc6IElNQXBwQ29uZmlnID0gdW5kZWZpbmVkKTogQXBwQ29uZmlnQWN0aW9ue1xyXG4vLyAgIGNvbnN0IHNwYWNlID0gY29uZmlnLnNwYWNlO1xyXG4vLyAgIGNvbnN0IG5ld0NhcmRTaXplID0gY29uZmlnLmNhcmRTaXplO1xyXG4vLyAgIGNvbnN0IGxheW91dEluZm9zID0gYXBwQ29uZmlnVXRpbHMuZ2V0Q29udGVudExheW91dEluZm9zSW5PbmVTaXplTW9kZShhcHBDb25maWcsIGlkLCBMYXlvdXRJdGVtVHlwZS5XaWRnZXQsIGJyb3dzZXJTaXplTW9kZSk7XHJcbi8vICAgbGV0IGxheW91dEluZm8gPSB1bmRlZmluZWQ7XHJcbi8vICAgaWYobGF5b3V0SW5mb3Mpe1xyXG4vLyAgICAgaWYobGF5b3V0SW5mb3MubGVuZ3RoID4gMSl7XHJcbi8vICAgICAgIGNvbnN0IHdpZGdldElkID0gYXBwQ29uZmlnVXRpbHMuZ2V0V2lkZ2V0SWRUaGF0VXNlVGhlTGF5b3V0SWQoYXBwQ29uZmlnLCBsYXlvdXRJbmZvc1swXS5sYXlvdXRJZCk7XHJcbi8vICAgICAgIGlmKHdpZGdldElkKXtcclxuLy8gICAgICAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnLndpZGdldHNbd2lkZ2V0SWRdO1xyXG4vLyAgICAgICAgIGlmKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi5tYW5pZmVzdCAmJiB3aWRnZXRKc29uLm1hbmlmZXN0Lm5hbWUgJiYgd2lkZ2V0SnNvbi5tYW5pZmVzdC5uYW1lID09PSAnbGlzdCcpe1xyXG4vLyAgICAgICAgICAgY29uc3QgY3VycmVudFN0YXR1cyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS53aWRnZXRzU3RhdGUgJiYgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZVt3aWRnZXRKc29uLmlkXSAmJlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZVt3aWRnZXRKc29uLmlkXVsnYnVpbGRlclN0YXR1cyddO1xyXG4vLyAgICAgICAgICAgaWYoY3VycmVudFN0YXR1cyl7XHJcbi8vICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYXlvdXRJZCA9IHV0aWxzLmZpbmRMYXlvdXRJZCh3aWRnZXRKc29uLmxheW91dHNbY3VycmVudFN0YXR1c10sIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5icm93c2VyU2l6ZU1vZGUsIGFwcENvbmZpZy5tYWluU2l6ZU1vZGUpO1xyXG4vLyAgICAgICAgICAgICBsYXlvdXRJbmZvID0gbGF5b3V0SW5mb3MuZmluZChsSW5mbyA9PiBsSW5mby5sYXlvdXRJZCA9PT0gY3VycmVudExheW91dElkKTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1lbHNlIGlmKGxheW91dEluZm9zLmxlbmd0aCA+IDApe1xyXG4vLyAgICAgICBsYXlvdXRJbmZvID0gbGF5b3V0SW5mb3NbMF07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGlmKCFsYXlvdXRJbmZvKXtcclxuLy8gICAgIHJldHVybjtcclxuLy8gICB9XHJcbi8vICAgY29uc3QgbGF5b3V0SXRlbSA9IGFwcENvbmZpZy5sYXlvdXRzW2xheW91dEluZm8ubGF5b3V0SWRdLmNvbnRlbnQgJiYgYXBwQ29uZmlnLmxheW91dHNbbGF5b3V0SW5mby5sYXlvdXRJZF0uY29udGVudFtsYXlvdXRJbmZvLmxheW91dEl0ZW1JZF07XHJcbi8vICAgaWYoIWxheW91dEl0ZW0pcmV0dXJuO1xyXG4vLyAgIGNvbnN0IGFjdGlvbiA9IGdldEFwcENvbmZpZ0FjdGlvbihhcHBDb25maWcpO1xyXG4vLyAgIGlmKGxheW91dEl0ZW0pe1xyXG4vLyAgICAgbGV0IGJib3ggPSBJbW11dGFibGUobGF5b3V0SXRlbS5iYm94IHx8IHt9KTtcclxuXHJcbi8vICAgICBpZihjb25maWcuZGlyZWN0aW9uID09PSBEaXJlY3Rpb25UeXBlLlZlcnRpY2FsKXtcclxuLy8gICAgICAgYmJveCA9IGJib3guc2V0KCd3aWR0aCcsIGAke25ld0NhcmRTaXplLndpZHRoICsgTElTVF9DQVJEX1BBRERJTkcgKiAyfXB4YCk7XHJcbi8vICAgICAgIGJib3ggPSBiYm94LnNldCgnaGVpZ2h0JywgYCR7bmV3Q2FyZFNpemUuaGVpZ2h0ICogMiArIHNwYWNlICogMiArIExJU1RfQ0FSRF9QQURESU5HfXB4YCk7XHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgYmJveCA9IGJib3guc2V0KCd3aWR0aCcsIGAke25ld0NhcmRTaXplLndpZHRoICogMiArIHNwYWNlICogMiAgKyBMSVNUX0NBUkRfUEFERElOR31weGApO1xyXG4vLyAgICAgICBiYm94ID0gYmJveC5zZXQoJ2hlaWdodCcsIGAke25ld0NhcmRTaXplLmhlaWdodCArIExJU1RfQ0FSRF9QQURESU5HICogMn1weGApO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgYWN0aW9uLmVkaXRMYXlvdXRJdGVtQkJveChsYXlvdXRJbmZvLCBiYm94KVxyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gYWN0aW9uO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBfZ2V0TnVtYmVyRnJvbVN0eWxlKHN0eWxlOiBzdHJpbmcpe1xyXG4vLyAgIHN0eWxlID0gKHN0eWxlICYmIHN0eWxlLnRvU3RyaW5nKCkpIHx8ICcnO1xyXG4vLyAgIGNvbnN0IHJlbUluZGV4ID0gc3R5bGUgJiYgc3R5bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdyZW0nKTtcclxuLy8gICBjb25zdCBweEluZGV4ID0gc3R5bGUgJiYgc3R5bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdweCcpO1xyXG4vLyAgIGlmKHJlbUluZGV4ID4gLTEpe1xyXG4vLyAgICAgc3R5bGUgPSBzdHlsZS5zdWJzdHIoMCwgcmVtSW5kZXgpO1xyXG4vLyAgIH1lbHNlIGlmKHB4SW5kZXggPiAtMSl7XHJcbi8vICAgICBzdHlsZSA9IHN0eWxlLnN1YnN0cmluZygwLCBweEluZGV4KTtcclxuLy8gICB9XHJcbi8vICAgcmV0dXJuIHBhcnNlSW50KHN0eWxlKTtcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSdcclxuaW1wb3J0IHtcclxuICB0eXBlIEltYWdlUHJvcHMsXHJcbiAgdHlwZSBGaWxsVHlwZSxcclxuICB0eXBlIEltYWdlUGFyYW0sXHJcbiAgdHlwZSBCb3JkZXJTdHlsZSxcclxuICB0eXBlIEZvdXJTaWRlc1VuaXQsXHJcbiAgdHlwZSBCb3hTaGFkb3dTdHlsZSxcclxuICB0eXBlIExpbmVhclVuaXQsXHJcbiAgdHlwZSBUZXh0QWxpZ25WYWx1ZVxyXG59IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IHR5cGUgU3FsRXhwcmVzc2lvbiB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICB0eXBlIFNvcnRTZXR0aW5nT3B0aW9uLFxyXG4gIHR5cGUgSU1MaW5rUGFyYW1cclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuXHJcbi8vIFRPRE86IG1vdmUgdG8gY29yZVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvdG9Qcm9wcyB7XHJcbiAgdmlld3M6IHN0cmluZ1tdXHJcbn1cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZXhwb3J0IGludGVyZmFjZSBnb3RvQWN0aW9uIHtcclxuICBnb3RvOiBnb3RvUHJvcHNcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcclxuICBzdWdnZXN0aW9uSHRtbDogc3RyaW5nIHwgRWxlbWVudFxyXG4gIHN1Z2dlc3Rpb246IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTElTVF9DQVJEX1BBRERJTkcgPSAwXHJcbmV4cG9ydCBjb25zdCBMSVNUX0NBUkRfTUlOX1NJWkUgPSAyMFxyXG5leHBvcnQgY29uc3QgRFNfVE9PTF9IID0gNDJcclxuZXhwb3J0IGNvbnN0IEJPVFRPTV9UT09MX0ggPSA0MFxyXG5leHBvcnQgY29uc3QgQ09NTU9OX1BBRERJTkcgPSAwXHJcbmV4cG9ydCBjb25zdCBEU19UT09MX0JPVFRPTV9QQURESU5HID0gMTRcclxuZXhwb3J0IGNvbnN0IEJPVFRPTV9UT09MX1RPUF9QQURESU5HID0gMTRcclxuZXhwb3J0IGNvbnN0IExJU1RfVE9PTF9NSU5fU0laRV9OT19EQVRBX0FDVElPTiA9IDE3NVxyXG5leHBvcnQgY29uc3QgTElTVF9UT09MX01JTl9TSVpFX0RBVEFfQUNUSU9OID0gMjIwXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBUkRfU0laRSA9IDIwMFxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TUEFDRSA9IDEwXHJcbmV4cG9ydCBjb25zdCBTQ1JPTExfQkFSX1dJRFRIID0gOFxyXG5cclxuZXhwb3J0IGVudW0gU2V0dGluZ0NvbGxhcHNlVHlwZSB7XHJcbiAgTm9uZSA9ICdOT05FJyxcclxuICBBcnJhbmdlbWVudCA9ICdBUlJBTkdFTUVOVCcsXHJcbiAgU3RhdGVzID0gJ1NUQVRFUycsXHJcbiAgVG9vbHMgPSAnVE9PTFMnXHJcbn1cclxuXHJcbmludGVyZmFjZSBXaWRnZXRIZWFkZXJUaXRsZSB7XHJcbiAgdGV4dDogc3RyaW5nXHJcbiAgLy8gQWRkIGNvbG9yLCBzaXplLCBhbGlnbm1lbnQsIGV0Yy5cclxuICAvLyBBZGQgYW4gb3B0aW9uIHRvIGJpbmQgdGV4dCB0byBhIGZpZWxkXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2lkZ2V0SGVhZGVyIHtcclxuICB0aXRsZTogSW1tdXRhYmxlT2JqZWN0PFdpZGdldEhlYWRlclRpdGxlPlxyXG4gIC8vIFRPRE86XHJcbiAgLy8gQWRkIFwiYWN0aW9uXCIgc3VjaCBhcyBmaWx0ZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0RGl2U2l6ZSB7XHJcbiAgY2xpZW50V2lkdGg6IG51bWJlclxyXG4gIGNsaWVudEhlaWdodDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBXaWRnZXRTdHlsZSB7XHJcbiAgaWQ6IHN0cmluZ1xyXG59XHJcbi8vIEVORDogVE9ET1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtQ29tcG9uZW50IHtcclxuICBmaWVsZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEl0ZW1UaXRsZUNvbXBvbmVudCBleHRlbmRzIExpc3RJdGVtQ29tcG9uZW50IHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEl0ZW1EZXNjcmlwdGlvbkNvbXBvbmVudCBleHRlbmRzIExpc3RJdGVtQ29tcG9uZW50IHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEl0ZW1TZWxlY3Rpb25Nb2RlQ29tcG9uZW50IGV4dGVuZHMgTGlzdEl0ZW1Db21wb25lbnQge31cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbUltYWdlQ29tcG9uZW50IGV4dGVuZHMgTGlzdEl0ZW1Db21wb25lbnQsIEltYWdlUHJvcHMge31cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RMYXlvdXQge1xyXG4gIEFVVE8gPSAnQXV0bycsXHJcbiAgQ1VTVE9NID0gJ0N1c3RvbSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VsZWN0aW9uTW9kZVR5cGUge1xyXG4gIE5vbmUgPSAnTk9ORScsXHJcbiAgU2luZ2xlID0gJ1NJTkdMRScsXHJcbiAgTXVsdGlwbGUgPSAnTVVMVElQTEUnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2VTdHlsZSB7XHJcbiAgU2Nyb2xsID0gJ1NDUk9MTCcsXHJcbiAgTXVsdGlQYWdlID0gJ01VTFRJUEFHRSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWxpZ25UeXBlIHtcclxuICBTdGFydCA9ICdGTEVYLVNUQVJUJyxcclxuICBDZW50ZXIgPSAnQ0VOVEVSJyxcclxuICBFbmQgPSAnRkxFWC1FTkQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvblR5cGUge1xyXG4gIEhvcml6b24gPSAnSE9SSVpPTicsXHJcbiAgVmVydGljYWwgPSAnVkVSVElDQUwnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExpc3RMYXlvdXRUeXBlIHtcclxuICBSb3cgPSAnUk9XJyxcclxuICBDb2x1bW4gPSAnQ09MVU1OJyxcclxuICBHUklEID0gJ0dSSUQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBhZ2VUcmFuc2l0b25UeXBlIHtcclxuICBHbGlkZSA9ICdHTElERScsXHJcbiAgRmFkZSA9ICdGQURFJyxcclxuICBGbG9hdCA9ICdGTE9BVCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSG92ZXJUeXBlIHtcclxuICBIb3ZlcjAgPSAnSE9WRVIwJyxcclxuICBIb3ZlcjEgPSAnSE9WRVIxJyxcclxuICBIb3ZlcjIgPSAnSE9WRVIyJyxcclxuICBIb3ZlcjMgPSAnSE9WRVIzJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZWxlY3RlZFN0eWxlIHtcclxuICBTdHlsZTAgPSAnU1RZTEUwJyxcclxuICBTdHlsZTEgPSAnU1RZTEUxJyxcclxuICBTdHlsZTIgPSAnU1RZTEUyJyxcclxuICBTdHlsZTMgPSAnU1RZTEUzJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBJdGVtU3R5bGUge1xyXG4gIFN0eWxlMCA9ICdTVFlMRTAnLFxyXG4gIFN0eWxlMSA9ICdTVFlMRTEnLFxyXG4gIFN0eWxlMiA9ICdTVFlMRTInLFxyXG4gIFN0eWxlMyA9ICdTVFlMRTMnLFxyXG4gIFN0eWxlNCA9ICdTVFlMRTQnLFxyXG4gIFN0eWxlNSA9ICdTVFlMRTUnLFxyXG4gIFN0eWxlNiA9ICdTVFlMRTYnLFxyXG4gIFN0eWxlNyA9ICdTVFlMRTcnLFxyXG4gIFN0eWxlOCA9ICdTVFlMRTgnLFxyXG4gIFN0eWxlOSA9ICdTVFlMRTknXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YXR1cyB7XHJcbiAgUmVndWxhciA9ICdSRUdVTEFSJyxcclxuICBTZWxlY3RlZCA9ICdTRUxFQ1RFRCcsXHJcbiAgSG92ZXIgPSAnSE9WRVInXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZFNpemUge1xyXG4gIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXHJcbiAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRTaXplIHtcclxuICBoZWlnaHQ6IG51bWJlclxyXG4gIHdpZHRoOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50U2l6ZVVuaXQge1xyXG4gIGhlaWdodDogTGluZWFyVW5pdFxyXG4gIHdpZHRoOiBMaW5lYXJVbml0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlQ2FyZFNpemUge1xyXG4gIFtkZXZpY2VNb2RlOiBzdHJpbmddOiBDYXJkU2l6ZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRCYWNrZ3JvdW5kU3R5bGUge1xyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGNvbG9yOiBzdHJpbmdcclxuICAgIGZpbGxUeXBlOiBGaWxsVHlwZVxyXG4gICAgaW1hZ2U6IEltYWdlUGFyYW1cclxuICB9XHJcbiAgYm9yZGVyOiBCb3JkZXJTdHlsZVxyXG4gIGJvcmRlclJhZGl1czogRm91clNpZGVzVW5pdFxyXG4gIGJveFNoYWRvdzogQm94U2hhZG93U3R5bGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkQ29uZmlnIHtcclxuICBiYWNrZ3JvdW5kU3R5bGU/OiBDYXJkQmFja2dyb3VuZFN0eWxlXHJcbiAgZW5hYmxlPzogYm9vbGVhblxyXG4gIHNlbGVjdGlvbk1vZGU/OiBTZWxlY3Rpb25Nb2RlVHlwZVxyXG4gIGNhcmRTaXplPzogRGV2aWNlQ2FyZFNpemVcclxuICBsaXN0TGF5b3V0PzogTGlzdExheW91dFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNhcmRDb25maWcgPSBJbW11dGFibGVPYmplY3Q8Q2FyZENvbmZpZz5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBwYWdlVHJhbnNpdGlvbj86IFBhZ2VUcmFuc2l0b25UeXBlXHJcbiAgaG92ZXJUeXBlPzogSG92ZXJUeXBlXHJcbiAgc2VsZWN0ZWRTdHlsZT86IFNlbGVjdGVkU3R5bGVcclxuICBkaWZmZXJlbnRPZGRFdmVuPzogYm9vbGVhblxyXG4gIGl0ZW1TdHlsZT86IEl0ZW1TdHlsZVxyXG4gIGlzQ2hlY2tFbXB0eVRlbXBsYXRlPzogYm9vbGVhblxyXG4gIGlzSXRlbVN0eWxlQ29uZmlybT86IGJvb2xlYW5cclxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb25UeXBlXHJcbiAgYWxpZ25UeXBlPzogQWxpZ25UeXBlXHJcbiAgc3BhY2U/OiBudW1iZXJcclxuICBob3Jpem9udGFsU3BhY2U/OiBudW1iZXJcclxuICB2ZXJ0aWNhbFNwYWNlPzogbnVtYmVyXHJcbiAgaXRlbXNQZXJQYWdlPzogbnVtYmVyXHJcbiAgcGFnZVN0eWxlPzogUGFnZVN0eWxlXHJcbiAgc2Nyb2xsQmFyT3Blbj86IGJvb2xlYW5cclxuICBuYXZpZ2F0b3JPcGVuPzogYm9vbGVhblxyXG4gIHNjcm9sbFN0ZXA/OiBudW1iZXJcclxuICBzdHlsZT86IEltbXV0YWJsZU9iamVjdDxXaWRnZXRTdHlsZT5cclxuICBpc0luaXRpYWxlZD86IGJvb2xlYW5cclxuICBsb2NrSXRlbVJhdGlvPzogYm9vbGVhblxyXG4gIHNob3dTZWxlY3RlZE9ubHlPcGVuPzogYm9vbGVhblxyXG4gIHNob3dDbGVhclNlbGVjdGVkPzogYm9vbGVhblxyXG4gIGdyaWRBbGlnbm1lbnQ/OiBUZXh0QWxpZ25WYWx1ZVxyXG5cclxuICAvLyBsaW5rXHJcbiAgbGlua1BhcmFtPzogSU1MaW5rUGFyYW1cclxuXHJcbiAgLy8gc2VhcmNoXHJcbiAgc2VhcmNoT3Blbj86IGJvb2xlYW5cclxuICBzZWFyY2hGaWVsZHM/OiBzdHJpbmdcclxuICBzZWFyY2hFeGFjdD86IGJvb2xlYW5cclxuICAvLyBmaWx0ZXJcclxuICBmaWx0ZXJPcGVuPzogYm9vbGVhblxyXG4gIGZpbHRlcj86IFNxbEV4cHJlc3Npb25cclxuICAvLyBzb3J0XHJcbiAgc29ydE9wZW4/OiBib29sZWFuXHJcbiAgc29ydHM/OiBTb3J0U2V0dGluZ09wdGlvbltdXHJcblxyXG4gIC8vIGNhcmQgYmFja2dyb3VuZFxyXG4gIGNhcmRDb25maWdzPzogSW1tdXRhYmxlT2JqZWN0PHsgW3N0YXR1czogc3RyaW5nXTogQ2FyZENvbmZpZyB9PlxyXG4gIHNlYXJjaEhpbnQ/OiBzdHJpbmdcclxuXHJcbiAgaXNTaG93QXV0b1JlZnJlc2g/OiBib29sZWFuXHJcbiAgbm9EYXRhTWVzc2FnZT86IHN0cmluZ1xyXG4gIGxheW91dFR5cGU/OiBMaXN0TGF5b3V0VHlwZVxyXG4gIGtlZXBBc3BlY3RSYXRpbz86IGJvb2xlYW5cclxuICBncmlkSXRlbVNpemVSYXRpbz86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBOdW1lcmljSW5wdXQgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB2YWx1ZT86IG51bWJlclxyXG4gIGRpc2FibGVkPzogYm9vbGVhblxyXG4gIG1pbj86IG51bWJlclxyXG4gIG1heD86IG51bWJlclxyXG4gIG9uQWNjZXB0VmFsdWU/OiAodmFsdWU6IG51bWJlcikgPT4gdm9pZFxyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIHN0eWxlPzogYW55XHJcbiAgdGl0bGU/OiBzdHJpbmdcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICB2YWx1ZT86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTXlOdW1lcmljSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZVByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gcHJlUHJvcHMudmFsdWUpIHtcclxuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGV4dElucHV0Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vbkFjY2VwdFZhbHVlKHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCwgY2xhc3NOYW1lLCBzdHlsZSwgZGlzYWJsZWQsIHRpdGxlIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TnVtZXJpY0lucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTmFtZSwgJ215LWlucHV0Jyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgbWF4PXttYXh9XHJcbiAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgcHJlY2lzaW9uPXswfVxyXG4gICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB2YWx1ZSB9KVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25BY2NlcHRWYWx1ZT17dmFsdWUgPT4geyB0aGlzLm9uVGV4dElucHV0Q2hhbmdlKCkgfX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBqc3gsIGNzcywgdHlwZSBCcm93c2VyU2l6ZU1vZGUsIHR5cGUgSU1BcHBDb25maWcsIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11Q29yZURlZmF1bHRNZXNzYWdlLCBob29rcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTZXR0aW5nQ2hhbmdlRnVuY3Rpb24gfSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IExpc3RMYXlvdXQsIFN0YXR1cywgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgUmFkaW8sIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsSGVhZGVyLCBNb2RhbEZvb3RlciwgQnV0dG9uLCBkZWZhdWx0TWVzc2FnZXMgYXMgamltdWlEZWZhdWx0TWVzc2FnZSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZSBmcm9tICcuLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgV2FybmluZ091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvd2FybmluZydcclxuaW1wb3J0IHsgc2VhcmNoVXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXHJcbmltcG9ydCB7IHNldExheW91dEF1dG8sIHNldExheW91dEN1c3RvbSwgdHlwZSBPcHRpb24gfSBmcm9tICcuLi91dGlscy91dGlscydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbnRlcmZhY2UgTGF5b3V0U2V0dGluZ1Byb3BzIHtcclxuICBpZDogc3RyaW5nXHJcbiAgb25TZXR0aW5nQ2hhbmdlOiBTZXR0aW5nQ2hhbmdlRnVuY3Rpb25cclxuICBsaXN0TGF5b3V0OiBMaXN0TGF5b3V0XHJcbiAgc3RhdHVzOiBTdGF0dXNcclxuICBicm93c2VyU2l6ZU1vZGU6IEJyb3dzZXJTaXplTW9kZVxyXG4gIG1haW5TaXplTW9kZTogQnJvd3NlclNpemVNb2RlXHJcbiAgbGF5b3V0czogYW55XHJcbiAgY29uZmlnOiBJTUNvbmZpZ1xyXG4gIGFwcENvbmZpZzogSU1BcHBDb25maWdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0U2V0dGluZyA9IChwcm9wczogTGF5b3V0U2V0dGluZ1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCwgbGlzdExheW91dCwgc3RhdHVzLCBicm93c2VyU2l6ZU1vZGUsIGxheW91dHMsIG1haW5TaXplTW9kZSwgY29uZmlnLCBhcHBDb25maWcgfSA9IHByb3BzXHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtyZW1pbmRlclRpdGxlLCBzZXRSZW1pbmRlclRpdGxlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3JlbWluZGVyVGV4dCwgc2V0UmVtaW5kZXJUZXh0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3JlbWluZGVyQm90dG9tVGV4dCwgc2V0UmVtaW5kZXJCb3R0b21UZXh0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgbGF5b3V0ID0gUmVhY3QudXNlUmVmPExpc3RMYXlvdXQ+KGxpc3RMYXlvdXQpXHJcbiAgY29uc3Qgb2xkTGF5b3V0ID0gUmVhY3QudXNlUmVmPExpc3RMYXlvdXQ+KGxpc3RMYXlvdXQpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsYXlvdXQuY3VycmVudCA9IHByb3BzLmxpc3RMYXlvdXRcclxuICAgIG9sZExheW91dC5jdXJyZW50ID0gcHJvcHMubGlzdExheW91dFxyXG4gIH0sIFtzdGF0dXMsIHByb3BzXSlcclxuXHJcbiAgY29uc3QgU1RZTEUgPSBjc3NgXHJcbiAgICAuamltdS1yYWRpbyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKVxyXG4gICAgbGF5b3V0LmN1cnJlbnQgPSBvbGRMYXlvdXQuY3VycmVudFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlZ3VsYXJMYXlvdXRJZCA9IHNlYXJjaFV0aWxzLmZpbmRMYXlvdXRJZChsYXlvdXRzW1N0YXR1cy5SZWd1bGFyXSwgYnJvd3NlclNpemVNb2RlLCBtYWluU2l6ZU1vZGUpXHJcbiAgICBjb25zdCBkZXNMYXlvdXRJZCA9IHNlYXJjaFV0aWxzLmZpbmRMYXlvdXRJZChsYXlvdXRzW3N0YXR1c10sIGJyb3dzZXJTaXplTW9kZSwgbWFpblNpemVNb2RlKVxyXG4gICAgY29uc3Qgb3B0aW9uOiBPcHRpb24gPSB7XHJcbiAgICAgIGxheW91dDogbGF5b3V0LmN1cnJlbnQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnLFxyXG4gICAgICB3aWRnZXRJZDogaWQsXHJcbiAgICAgIGFwcENvbmZpZzogYXBwQ29uZmlnLFxyXG4gICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgcmVndWxhckxheW91dElkOiByZWd1bGFyTGF5b3V0SWQsXHJcbiAgICAgIGRlc0xheW91dElkOiBkZXNMYXlvdXRJZCxcclxuICAgICAgbGFiZWw6IG5scyhzdGF0dXMudG9Mb3dlckNhc2UoKSlcclxuICAgIH1cclxuICAgIGlmIChsYXlvdXQuY3VycmVudCA9PT0gTGlzdExheW91dC5BVVRPKSB7XHJcbiAgICAgIHNldExheW91dEF1dG8ob3B0aW9uKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TGF5b3V0Q3VzdG9tKG9wdGlvbilcclxuICAgIH1cclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgIG9sZExheW91dC5jdXJyZW50ID0gbGF5b3V0LmN1cnJlbnRcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxheW91dENoYW5nZSA9IChuZXdMYXlvdXQ6IExpc3RMYXlvdXQpID0+IHtcclxuICAgIGlmIChvbGRMYXlvdXQuY3VycmVudCA9PT0gbmV3TGF5b3V0KSByZXR1cm5cclxuICAgIGlmIChuZXdMYXlvdXQgPT09IExpc3RMYXlvdXQuQVVUTykge1xyXG4gICAgICBzZXRSZW1pbmRlclRpdGxlKG5scygncmVtaW5kQXV0b0xheW91dFRpdGxlJykpXHJcbiAgICAgIHNldFJlbWluZGVyVGV4dChubHMoJ3JlbWluZEF1dG9MYXlvdXRUZXh0JykpXHJcbiAgICAgIHNldFJlbWluZGVyQm90dG9tVGV4dCgnJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJlbWluZGVyVGl0bGUobmxzKCdyZW1pbmRDdXN0b21MYXlvdXRUaXRsZScpKVxyXG4gICAgICBzZXRSZW1pbmRlclRleHQobmxzKCdyZW1pbmRDdXN0b21MYXlvdXRUZXh0JykpXHJcbiAgICAgIHNldFJlbWluZGVyQm90dG9tVGV4dChubHMoJ3JlbWluZEN1c3RvbUxheW91dEJvdHRvbVRleHQnKSlcclxuICAgIH1cclxuICAgIHNldElzT3Blbih0cnVlKVxyXG4gICAgbGF5b3V0LmN1cnJlbnQgPSBuZXdMYXlvdXRcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlclJlbWluZE1vZGVsID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSB0b2dnbGU9e2hhbmRsZVRvZ2dsZX0gY2VudGVyZWQ+XHJcbiAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17aGFuZGxlVG9nZ2xlfT5cclxuICAgICAgICAgIDxXYXJuaW5nT3V0bGluZWQgY2xhc3NOYW1lPSdtci0yJyBzaXplPXsxNn0vPlxyXG4gICAgICAgICAge3JlbWluZGVyVGl0bGV9XHJcbiAgICAgICAgPC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgPGRpdj57cmVtaW5kZXJUZXh0fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTInPntyZW1pbmRlckJvdHRvbVRleHR9PC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0aXRsZT17bmxzKCdjYW5jZWwnKX0gb25DbGljaz17KCkgPT4geyBzZXRJc09wZW4oZmFsc2UpIH19PntubHMoJ2NhbmNlbCcpfTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0aXRsZT17bmxzKCdvaycpfSB0eXBlPSdwcmltYXJ5JyBvbkNsaWNrPXtoYW5kbGVDb25maXJtfT5cclxuICAgICAgICAgICAge25scygnb2snKX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBubHMgPSBob29rcy51c2VUcmFuc2xhdGlvbihkZWZhdWx0TWVzc2FnZSwgamltdWlEZWZhdWx0TWVzc2FnZSwgamltdUNvcmVEZWZhdWx0TWVzc2FnZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY3NzPXtTVFlMRX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e25scygnbGF5b3V0Jyl9PlxyXG4gICAgICA8U2V0dGluZ1JvdyBsYWJlbD17bmxzKCdsYXlvdXQnKX0gZmxvdz0nd3JhcCc+XHJcbiAgICAgICAgPFJhZGlvIHRpdGxlPXtubHMoJ2F1dG8nKX0gY2hlY2tlZD17Y29uZmlnPy5jYXJkQ29uZmlncz8uW3N0YXR1c10/Lmxpc3RMYXlvdXQgPT09IExpc3RMYXlvdXQuQVVUT30gb25DaGFuZ2U9eygpID0+IHsgaGFuZGxlTGF5b3V0Q2hhbmdlKExpc3RMYXlvdXQuQVVUTykgfX0gY2xhc3NOYW1lPSdtci0yJy8+IHtubHMoJ2F1dG8nKX1cclxuICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICA8UmFkaW8gdGl0bGU9e25scygnY3VzdG9tJyl9IGNoZWNrZWQ9e2NvbmZpZz8uY2FyZENvbmZpZ3M/LltzdGF0dXNdPy5saXN0TGF5b3V0ID09PSBMaXN0TGF5b3V0LkNVU1RPTSB8fCAhY29uZmlnPy5jYXJkQ29uZmlncz8uW3N0YXR1c10/Lmxpc3RMYXlvdXR9IG9uQ2hhbmdlPXsoKSA9PiB7IGhhbmRsZUxheW91dENoYW5nZShMaXN0TGF5b3V0LkNVU1RPTSkgfX0gY2xhc3NOYW1lPSdtci0yJy8+IHtubHMoJ2N1c3RvbScpfVxyXG4gICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgIHtyZW5kZXJSZW1pbmRNb2RlbCgpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRTZXR0aW5nXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBfYWN0aW9uX3F1ZXJ5X2xhYmVsOiAnUXVlcnkgYnkgZXh0ZW50JyxcclxuICBsaXN0U291cmNlOiAnTGlzdCBTb3VyY2UnLFxyXG4gIG1heEl0ZW1zOiAnTWF4aW11bSBpdGVtcycsXHJcbiAgaXRlbVBlclBhZ2U6ICdJdGVtcyBwZXIgcGFnZScsXHJcbiAgc2VsZWN0TW9kZTogJ1NlbGVjdCBtb2RlJyxcclxuICB2ZXJ0aWNhbEFsaWdubWVudDogJ1ZlcnRpY2FsIGFsaWdubWVudCcsXHJcbiAgaG9yaXpvbnRhbEFsaWdubWVudDogJ0hvcml6b250YWwgYWxpZ25tZW50JyxcclxuICB2ZXJ0aWNhbFNwYWNpbmc6ICdWZXJ0aWNhbCBzcGFjaW5nJyxcclxuICBob3Jpem9udGFsU3BhY2luZzogJ0hvcml6b250YWwgc3BhY2luZycsXHJcbiAgZGlmZmVyZW50T2RkRXZlbkl0ZW1zOiAnRGlmZmVyZW50IG9kZCAmIGV2ZW4gaXRlbXMnLFxyXG4gIG1vdXNlT3ZlclN0eWxlOiAnTW91c2VvdmVyIHN0eWxlJyxcclxuICBzZWxlY3RlZFN0eWxlOiAnU2VsZWN0ZWQgc3R5bGUnLFxyXG4gIHBhZ2luZ1N0eWxlOiAnUGFnaW5nIHN0eWxlJyxcclxuICBzY3JvbGw6ICdTY3JvbGwnLFxyXG4gIG11bHRpUGFnZTogJ011bHRpLXBhZ2UnLFxyXG4gIHBhZ2VUcmFuc2l0aW9uOiAnUGFnZSB0cmFuc2l0aW9uJyxcclxuICBvZmY6ICdPZmYnLFxyXG4gIG9uOiAnT24nLFxyXG4gIGNob29zZVRlbXBsYXRlVGlwOiAnU2VsZWN0IGEgdGVtcGxhdGUnLFxyXG4gIGxpc3RVc2VHdWlkZTogXCJUbyBjdXN0b21pemUgdGhlIGxpc3QgZGVzaWduLCBjaGFuZ2UgdGhlIGxheW91dCBvZiB3aWRnZXRzIGluIHRoZSBmaXJzdCBsaXN0IGl0ZW0gYnkgbW92aW5nIGRlZmF1bHQgd2lkZ2V0cycgcG9zaXRpb25zIGFuZCBkcmFnLWFuZC1kcm9wIG5ldyB3aWRnZXRzIGZyb20gdGhlIEluc2VydCB3aWRnZXQgcGFuZS4gT25jZSB0aGUgTGlzdCB3aWRnZXQgZGF0YSBpcyBzZWxlY3RlZCwgd2lkZ2V0cyBpbiB0aGUgZmlyc3QgaXRlbSB3aWxsIGluaGVyaXQgdGhlIHNhbWUgZGF0YSBhbmQgY29uZmlndXJlIHRoZSB0aGVtZSBpbmRpdmlkdWFsbHkgdG8gcG9wdWxhdGUgdGV4dCBvciBpbWFnZXMuXCIsXHJcbiAgY3VzdG9tTGlzdERlc2lnbjogJ29yIGN1c3RvbWl6ZSB5b3VyIGxpc3QgZGVzaWduJyxcclxuICByZXNldHRpbmdUaGVUZW1wbGF0ZTogJ1NlbGVjdCBhbm90aGVyIHRlbXBsYXRlICcsXHJcbiAgZW1wdHlUZW1wbGF0ZTogJ0VtcHR5IHRlbXBsYXRlJyxcclxuICB3YWl0aW5nRm9yRGF0YXNvdXJjZTogJ1dhaXRpbmcgZm9yIGRhdGEgc291cmNlJyxcclxuICB6ZXJvSGludDogJ1plcm8gaXMgaW5maW5pdGUnLFxyXG4gIHNlbGVjdFNvcnRGaWVsZHM6ICdTZWxlY3Qgc29ydGluZyBmaWVsZHMnLFxyXG4gIHNvcnRTZWxlY3RlZDogJ3tzZWxlY3RlZENvdW50fSBpdGVtcyBzZWxlY3RlZCcsXHJcbiAgY2hvb3NlU2VhcmNoaW5nRmllbGRzOiAnU2VsZWN0IHNlYXJjaGluZyBmaWVsZHMnLFxyXG4gIGxpc3RTZWxlY3RTZWFyY2hGaWVsZHM6ICdTZWxlY3Qgc2VhcmNoaW5nIGZpZWxkcycsXHJcbiAgc2VhcmNoU2VsZWN0ZWQ6ICd7c2VsZWN0ZWRDb3VudH0gaXRlbXMgc2VsZWN0ZWQnLFxyXG4gIHNjcm9sbEJhcjogJ1Njcm9sbCBiYXInLFxyXG4gIG5hdmlnYXRvcjogJ05hdmlnYXRvcicsXHJcbiAgaXRlbUhlaWdodDogJ0l0ZW0gaGVpZ2h0JyxcclxuICBpdGVtV2lkdGg6ICdJdGVtIHdpZHRoJyxcclxuICBsb2NrSXRlbVJhdGlvOiAnTG9jayB3aWR0aCAvIGhlaWdodCByYXRpbycsXHJcbiAgbGlzdFN0ZXA6ICdTdGVwJyxcclxuICBsaXN0U2hvd1NlbGVjdGVkT25seTogJ1Nob3cgc2VsZWN0ZWQnLFxyXG4gIGVuYWJsZVN0YXR1czogJ0VuYWJsZSB7c3RhdHVzfScsXHJcbiAgaXRlbVN0eWxlOiAnSXRlbSBzdHlsZScsXHJcbiAgb3V0cHV0RHNMYWJlbDogJ3tsYWJlbH0gbG9hZGVkIGZlYXR1cmVzJyxcclxuICBjbGVhclNlbGVjdGVkOiAnQ2xlYXIgc2VsZWN0ZWQnLFxyXG4gIGxpc3RBbmltYXRpb246ICdBbmltYXRpb24nLFxyXG4gIGxpc3RUcmFuc2l0aW9uOiAnVHJhbnNpdGlvbicsXHJcblxyXG4gIC8vIGFjdGlvbiBzZXR0aW5nXHJcbiAgdHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcclxuICBhY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcclxuICBjb25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgcmVsYXRlTWVzc2FnZTogJ1RyaWdnZXIgLyBhY3Rpb24gY29ubmVjdGlvbicsXHJcbiAgYXV0b0JpbmQ6ICdBdXRvIGJvdW5kJyxcclxuICB0cmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIGVxdWFsczogJ0VxdWFscycsXHJcbiAgYWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxyXG4gIG1vcmVDb25kaXRpb25zOiAnTW9yZSBjb25kaXRpb25zJyxcclxuICBxdWVyeVdpdGhDdXJyZW50RXh0ZW50OiAnUXVlcnkgYnkgY3VycmVudCBleHRlbnQnLFxyXG4gIHNldEV4cHJUaXA6ICdQbGVhc2Ugc2V0IHlvdXIgZXhwcmVzc2lvbnMgZmlyc3QnLFxyXG4gIHNldExheWVyOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG5vTGF5ZXI6ICdObyBkYXRhJyxcclxuICBub0RhdGFNZXNzYWdlOiAnTm8gZGF0YSBtZXNzYWdlJyxcclxuXHJcbiAgLy8gdGVtcGxhdGVcclxuICB0ZXh0UGxhY2Vob2xkZXI6ICdEb3VibGUgY2xpY2sgdG8gZWRpdCB0ZXh0JyxcclxuICBidXR0b25UZXh0OiAnQnV0dG9uJyxcclxuICBjb250ZW50VGV4dFBsYWNlaG9sZGVyOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGV1aXNtb2QnLFxyXG4gIHNlYXJjdEhpbnQ6ICdIaW50JyxcclxuICBsaXN0QmxhbmtTdGF0dXM6ICdDbGljayB0aGUgXCJ7QnV0dG9uU3RyaW5nfVwiIGJ1dHRvbiB0byBhZGQgZGF0YSBzb3VyY2UgdG8gdGhpcyB3aWRnZXQuJyxcclxuXHJcbiAgcmVtaW5kQ3VzdG9tTGF5b3V0VGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXNlIGN1c3RvbSBsYXlvdXQ/JyxcclxuICByZW1pbmRBdXRvTGF5b3V0VGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXNlIGF1dG8gbGF5b3V0PycsXHJcbiAgcmVtaW5kQ3VzdG9tTGF5b3V0VGV4dDogJ0J5IHVzaW5nIGN1c3RvbSBsYXlvdXQsIHlvdSBjYW4gbWFudWFsbHkgYXJyYW5nZSB3aWRnZXRzIGZvciB0aGlzIHN0YXRlLicsXHJcbiAgcmVtaW5kQ3VzdG9tTGF5b3V0Qm90dG9tVGV4dDogJ0hvd2V2ZXIsIHdpZGdldHMgYWRkZWQgaW4gdGhlIHJlZ3VsYXIgc3RhdGUgd2lsbCBub3QgYmUgYXV0b21hdGljYWxseSBhZGRlZCBoZXJlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIG1hbnVhbGx5IHNlbGVjdCB0aGUgd2lkZ2V0IG9uIHRoZSByZWd1bGFyIHN0YXRlLCBjbGljayBvbiB0aGUgbGluayBidXR0b24gYW5kIGFwcGx5IHRoYXQgd2lkZ2V0IGhlcmUuJyxcclxuICByZW1pbmRBdXRvTGF5b3V0VGV4dDogJ0J5IHVzaW5nIGF1dG8gbGF5b3V0LCB3aWRnZXRzIHdpbCBiZSBzeW5jZWQgd2l0aCB0aG9zZSBvbiB0aGUgcmVndWxhciBzdGF0ZSBhbmQgYXJyYW5nZWQgYXV0b21hdGljYWxseS4nLFxyXG4gIGxhc3RVcGRhdGVUZXh0OiAnTGFzdCB1cGRhdGUgdGV4dCcsXHJcbiAgZW1wdHlUZW1wbGF0ZUNoZWNrYm94U3RyaW5nOiAnUmVtb3ZlIGRlZmF1bHQgd2lkZ2V0cyBmcm9tIHRlbXBsYXRlJyxcclxuICBsYXlvdXRSb3c6ICdSb3cnLFxyXG4gIGxheW91dENvbHVtbjogJ0NvbHVtbicsXHJcbiAgbGF5b3V0R3JpZDogJ0dyaWQnLFxyXG4gIHNpemVBc3BlY3RSYXRpbzogJ0FzcGVjdCByYXRpbycsXHJcbiAgbGlzdEtlZXBBc3BlY3RSYXRpbzogJ0tlZXAgYXNwZWN0IHJhdGlvJyxcclxuICBsaXN0QWxpZ21lbnQ6ICdBbGlnbWVudCcsXHJcbiAgZ3JpZEl0ZW1TaXplOiAnSXRlbSBzaXplJyxcclxuICBsaXN0Um93VGVtcGxhdGVUaXRsZTogJ1JvdyB0ZW1wbGF0ZSB7aW5kZXh9JyxcclxuICBsaXN0Q29sdW11VGVtcGxhdGVUaXRsZTogJ0NvbHVtbiB0ZW1wbGF0ZSB7aW5kZXh9JyxcclxuICBsaXN0R3JpZFRlbXBsYXRlVGl0bGU6ICdHcmlkIHRlbXBsYXRlIHtpbmRleH0nXHJcbn1cclxuIiwiaW1wb3J0IHsgdHlwZSBXaWRnZXRKc29uLCB0eXBlIEltbXV0YWJsZU9iamVjdCwgdHlwZSBJTUFwcENvbmZpZywgZ2V0QXBwU3RvcmUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGdldEFwcENvbmZpZ0FjdGlvbiB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7IHR5cGUgTGlzdExheW91dCwgdHlwZSBTdGF0dXMsIHR5cGUgSU1Db25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcclxuICBsYXlvdXQ6IExpc3RMYXlvdXRcclxuICBjb25maWc6IElNQ29uZmlnXHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG4gIGFwcENvbmZpZzogSU1BcHBDb25maWdcclxuICBzdGF0dXM6IFN0YXR1c1xyXG4gIHJlZ3VsYXJMYXlvdXRJZD86IHN0cmluZ1xyXG4gIGRlc0xheW91dElkPzogc3RyaW5nXHJcbiAgbGFiZWw/OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0TGF5b3V0QXV0byA9IChvcHRpb246IE9wdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgbGF5b3V0LCBkZXNMYXlvdXRJZCwgY29uZmlnLCB3aWRnZXRJZCwgYXBwQ29uZmlnLCBzdGF0dXMgfSA9IG9wdGlvblxyXG4gIGNvbnN0IGFjdGlvbiA9IGdldEFwcENvbmZpZ0FjdGlvbigpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGdldFdpZGdldEpzb25CeUlkKGFwcENvbmZpZywgd2lkZ2V0SWQpXHJcbiAgYWN0aW9uLnJlbW92ZUxheW91dChkZXNMYXlvdXRJZCwgZmFsc2UpXHJcbiAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnLnNldEluKFsnY2FyZENvbmZpZ3MnLCBzdGF0dXMsICdsaXN0TGF5b3V0J10sIGxheW91dClcclxuICBsZXQgdWRwYXRlV2lkZ2V0SnNvbiA9IHdpZGdldEpzb24uc2V0SW4oWydsYXlvdXRzJywgc3RhdHVzXSwge30pXHJcbiAgdWRwYXRlV2lkZ2V0SnNvbiA9IHVkcGF0ZVdpZGdldEpzb24uc2V0SW4oWydjb25maWcnXSwgbmV3Q29uZmlnKVxyXG4gIGFjdGlvbi5lZGl0V2lkZ2V0KHVkcGF0ZVdpZGdldEpzb24/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpLmV4ZWMoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGF5b3V0Q3VzdG9tID0gKG9wdGlvbjogT3B0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyBsYXlvdXQsIHJlZ3VsYXJMYXlvdXRJZCwgY29uZmlnLCB3aWRnZXRJZCwgYXBwQ29uZmlnLCBzdGF0dXMsIGxhYmVsIH0gPSBvcHRpb25cclxuICBjb25zdCBicm93c2VyU2l6ZU1vZGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIuYnJvd3NlclNpemVNb2RlXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGdldFdpZGdldEpzb25CeUlkKGFwcENvbmZpZywgd2lkZ2V0SWQpXHJcbiAgY29uc3QgYWN0aW9uID0gZ2V0QXBwQ29uZmlnQWN0aW9uKClcclxuXHJcbiAgY29uc3QgbmV3TGF5b3V0SnNvbiA9IGFjdGlvbi5kdXBsaWNhdGVMYXlvdXQocmVndWxhckxheW91dElkLCBmYWxzZSlcclxuICBhY3Rpb24uZWRpdExheW91dExhYmVsKHsgbGF5b3V0SWQ6IG5ld0xheW91dEpzb24uaWQgfSwgbGFiZWwpXHJcblxyXG4gIGNvbnN0IHByZUxheW91dElkID0gYXBwQ29uZmlnLndpZGdldHNbd2lkZ2V0SWRdLmxheW91dHNbc3RhdHVzXVticm93c2VyU2l6ZU1vZGVdXHJcbiAgcHJlTGF5b3V0SWQgJiYgYWN0aW9uLnJlbW92ZUxheW91dChwcmVMYXlvdXRJZCwgdHJ1ZSlcclxuXHJcbiAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnLnNldEluKFsnY2FyZENvbmZpZ3MnLCBzdGF0dXMsICdsaXN0TGF5b3V0J10sIGxheW91dClcclxuICBsZXQgdWRwYXRlV2lkZ2V0SnNvbiA9IHdpZGdldEpzb24uc2V0SW4oWydsYXlvdXRzJywgc3RhdHVzLCBicm93c2VyU2l6ZU1vZGVdLCBuZXdMYXlvdXRKc29uLmlkKVxyXG5cclxuICB1ZHBhdGVXaWRnZXRKc29uID0gdWRwYXRlV2lkZ2V0SnNvbi5zZXRJbihbJ2NvbmZpZyddLCBuZXdDb25maWcpXHJcbiAgYWN0aW9uLmVkaXRXaWRnZXQodWRwYXRlV2lkZ2V0SnNvbj8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICAvL0FmdGVyIGBkdXBsaWNhdGVMYXlvdXRJdGVtc2AsIHRoZSBwYXJlbnQgb2YgdGhlIGxheW91dCBuZWVkIHRvIHVwZGF0ZSxcclxuICAvL3dlIG5lZWQgdG8gY2FsbCB0aGUgYGJ1aWxkTGF5b3V0U3RydWN0dXJlYCBtZXRob2QgYWdhaW4gdG8gcmVjb25zdHJ1Y3QgaXRcclxuICBhY3Rpb24uY2xlYXJMYXlvdXRTdHJ1Y3R1cmUobmV3TGF5b3V0SnNvbi5pZCwgYnJvd3NlclNpemVNb2RlLCB0cnVlKVxyXG4gIGFjdGlvbi5idWlsZExheW91dFN0cnVjdHVyZShuZXdMYXlvdXRKc29uLmlkLCBicm93c2VyU2l6ZU1vZGUsIHRydWUpXHJcbiAgYWN0aW9uLmV4ZWMoKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2lkZ2V0SnNvbkJ5SWQgPSAoYXBwQ29uZmlnOiBJTUFwcENvbmZpZywgd2lkZ2V0SWQ6IHN0cmluZyk6IEltbXV0YWJsZU9iamVjdDxXaWRnZXRKc29uPiA9PiB7XHJcbiAgY29uc3Qgd2lkZ2V0cyA9IGFwcENvbmZpZz8ud2lkZ2V0c1xyXG4gIGNvbnN0IHdpZGdldEpzb24gPSB3aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgcmV0dXJuIHdpZGdldEpzb25cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIZ0FBQUF3Q0FZQUFBRGFiNzdUQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUNXU1VSQlZIZ0I3ZEd4RFlBd0VBUkJtM0pkMExjTERSQVJvZFZNZU5GSnU4ODU5L3FSbWRsdnU1L2ZYSXMwZ2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpoTTRUdUE0Z2VNRWpuc0FNV01LbldDOG5kb0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIWUFBQUF3Q0FZQUFBREVwbzVnQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUNXU1VSQlZIZ0I3ZG9oRW9Bd0RBREJsdWYyUWYwdUtHYXdDQkEzdXk0cTRreEU1bHJySEQvWWU4L25iTyszamtHU3NGSENSZ2tiSld5VXNGSENSZ2tiSld5VXNGSENSZ2tiSld5VXNGSENSZ2tiSld5VXNGSENSZ2tiSlN3QXdBdlRSMzVyNzgxVkhDVnNsTEJSd2tZSkd5VnNsTEJSd2tZSkd5VnNsTEJSd2tZSkd5VnNsTEJSd2tZSkd5VnNsTEJSd2tZSkczVUJPQmtjMFY3cDRRUUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIZ0FBQUF5Q0FZQUFBQ1hweC9ZQUFBQUNYQklXWE1BQUJZbEFBQVdKUUZKVWlUd0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUNGU1VSQlZIZ0I3ZHF4RVFBZ0VNTXdZTnpmdjRjcGFIelNDbTVTWk0vTVhXU2RSWnJBY1FMSENSd25jSnpBY1FMSENSd25jSnpBY1FMSENSd25NQURBQjl1am84MktqaE00VHVBNGdlTUVqaE00VHVBNGdlTUVqaE00VHVBNGdlTUVCZ0Q0d0tNanpvcU9FemhPNERpQjR3U09FemhPNERpQjR3U09FemhPNERpQjR3U09leUkxQndtNDRjNVpBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFIRUFBQUJ4Q0FZQUFBRGlma3pRQUFBQUFYTlNSMElBcnM0YzZRQUFCZGRKUkVGVWVBSHRuYzFQWFVVWXhnY3cwSTNkZUZsVUNacTRjS21KQ2lUR2hHVTNqZlVQc081TWhKQ1VwRzRhVFZpNHN3a0xQdHkzY1cyN1lzR0hZRVBDVndsdVdFQUlscUN3dUJJZ0laR0xnTTlUNzcyUzlzQTk5M0JtenN6bG1XVEMrWnAzNXYwOWQ4N01uQm5PTVVaQkJFUkFCRVJBQkVSQUJFUkFCRVJBQkVSQUJFUkFCRVJBQkVSQUJFUkFCRVJBQkVSQUJLd1FxTE5pTlVPalBUMDk3eDhmSDk5R0VUNUVmSk94cnE3dWpkUFQwNyt3L1djeFBtdG9hSGc4TUREd0cvYUREelVoSW9TN0RwSHVJZDVCZkR1dUtoRDNPZUpEeEFjUWREOXVPdCt1QzFyRXZyNit4bncrLy9YSnljbTNBSnU3Qk54OGZYMzk5N2xjN2tmWUxGekNUaVpKZ3hXeHQ3ZjNyVUtoOEJnMTc2TzB5S0ZHTGpRMk50N3U3Ky8vSXkyYkx1d0VLV0ozZDNjN3hQc1pnRzVZZ0xRRk1UOGZHaHFhdFdEYmlzbmdSQ3dLT0FrYTE2d1ErYy9vM3hDeU14UWg2eTJDU04wMGI2SEZHbWhUUUpiN0d2TmhmcWs3WWNGZ01DS3lFM040ZVBnRURHemNRcVBRM21DYnkzeWpUdnAwTEJnUjJRc0ZPSTc5bkFWMm1vcjVPc3N6U1VaQnRJa2NCMklBdndZSEx6T01TTUtIYWZKNE1QQ3V6K1BJSUdvaXhvSGZaQ1FnUmN5aFJ0N2pocThoQ0JFQjc0c3NBVUxFTzFubVh5bHY3MFhzNnVyNkFCQmpQMHE3eUdIY2tpODZmZTQ1NXM5bnN1ZGVrUEVKNzBVRW44L1NZalF4TVdIVzE5Y1RtU3MrVkUrVTFuYWlFRVJNcFVlNnNySmlWbGRYRFlVOE9EaEl3aldWY2lUSnVGS2FFRVRrZEZKVllXTmp3ekNXd3Y3K3ZwbWFtbnF4aTdHbUdSOGZON2hGbGs3SC9WdDFPZUlhdnV4MU5TZmkzdDZlR1IwZGZSRzVqWjZ0R1JzYk0wZEhSMlZXbTV1YlptbHBxYndmYzhOYkVWK0w2VUJtbCtFWkppZDBZK1ZQb1VaR1JneHJHd08zVzF0YnpmYjI5aXZwWjJkblRVdExpMmx1Ym43bFhOUUJsaVBxdUEvSHZLK0pFSkF6OHJFQzI3dWRuWjN5dGR3K3I4YXhockxHbnEyaDVZUVJHOVdVSXlLNTFVUGVpd2p2dWFTaVlsaGNYRFJyYTN5b0V6L3M3dTZhNmVucHVBbGlsU091c1RTdnF3a1IyWW1abVpsSnhHVjVlVG51c01OYkViMXZFNkhNTThSYkZ5bkVkZzhQQlM2NkpJMXpMSWVYd2Z1YXlGVnBQcER6cFJ4UkxJS1l4Y0JzL3Uvb1dLVHk2QzBLUXFWajZKayt4eXovTzVXdXkrcTg5eldSWUFEeFlWYUFmTWkva3UraGlQZ0FqdVFyT1dQcGZCNC9JdWJ2Yldqd3RtUm5DalkzTjNmWTN0NWV3QzMxNXBuRFRqYXhIdlgrNE9EZ3IwNHlTNWhKRURXUnZuRmhMMnJFUWtJL0V5Vmpmc3czVVdLSGlZTG8ySlI0Y1BVWkhxbk5ZOS9GWXFtdHBxYW1qME5ZU0J5VWlCUlQ2MDVMUCtuLy93WnpPeTBWbVF0NmNadnJ4UDVXNlZqS2Y3a0NQSmlGdy9ROU9CRlphQXJKVzEzYWJTVHQwUzd0TTU5UVFwQWlFaTdiS2t3amZZTGU0MTNzWG5iNHdmK0t1a3Q3SWJTQkwvKzRnbXNUWDNhQSsvci94Q2dxQVIvajZqZ1VuNHVydUNhR3MvR1IveW1NNDArR2g0ZXJudDVIT2dVUkVBRVJFQUVSRUFFUkVBRVJFQUVSRUFFUkVBRVJFQUVSRUFFUkVBRVJFQUVSRUFFUkVBRVJDSWFBazVsOVROVEcrMWZmWUxBbEt5Z21vYTN3RG5hTlRUS010WmxLSXRhQXJoS3hCa1NVQ3lJZ0FpSWdBaUlnQWlKUU13U3NERDV0ME1ueWdZR3RRWHBhbkRURVNJdGtobllrWW9idzA4cGFJcVpGVW5aRVFBUkVRQVJFUUFSRVFBUkVRQVJFUUFSRVFBUkVRQVJFb0V6QTZTd0dYaHIwS1Q2Y3hXOGg4clBxTHQ2VVdIWTBndzIrZTI0Qjd3Ny9BUi9RZkdvemYyY3ZyY1hiRWUvamd5S1A0TXg3aUsvYmRNb1QyL1NSdm43WjF0YjJ6L3o4dkRVaG5kUkUxa0FJT0lrM0IxL0pCKzU0OGQ4SjNoM1hhYXRHT29IS1craFZGWkIzQmZwZWJFYTRtM3B3SWlKS3pUYndxZ2RyREZ5SmVOVUZ0T3EvS3hHZHZvRGRLckhreHEweGNDSWl1OWxzM0pQN0gzWksrazRHdHJ4d01zVEFkeTAyOEYwTGZscTdFOUZKajlnV3NHcnRGbis4MytIYkdqOVZtemJ1OVU1RVpHRWc1Tk9Pam81ZjBGUExZZmM2WXEyUEZUblluMFFOL01xbWdNaERRUVJFUUFSRVFBUkVRQVJFUUFSRVFBUkVRQVJFUUFSRVFBUkVRQVJFUUFSRVFBUThKZkF2Rm8zQWlVV3FvUnNBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRzBBQUFCdENBWUFBQUNyK085V0FBQUFBWE5TUjBJQXJzNGM2UUFBQlJWSlJFRlVlQUh0bXoxUEZFRVl4d2N3QjVXTlI0RVNOUEVEYUtMbUNodEtHeU4rQU9tRmtFQ0NqYkdnc0NTaDRNV2VMeUJXRkx4RVRFZzRCSUlOQllRZ0JJWGlKRUJDNGgwQi9EOTRod3ZzNGR6ZDdPNno1RC9KaHRuWm1YbWUrZjJaM1hrN1l4aElnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBUklnQVJJZ0FSSWdBUklnQVJJQUFTcXJndUZqbzZPQjBkSFJ5MW96eU5jdCtXcXFxcTZkWEp5OGd2eG4vbHJ2cWFtWnFTL3YvOGI3bU1iWWkwYWhMb0pVYnB4dGVLNmE2c0N4RnpITll5ckZ3THUyNWJUa2krV292WDA5Q1F5bWN6cjQrUGpkd0NackFCbXBycTYrbjB5bWZ5QU9uTVYxQk5xMGRpSjF0WFZkU2VYeTQyZ1p6MTJSUW85Ymk2UlNMVDA5Zlg5Y0ZWbmtQWEVTclQyOXZZVXhQb0lJQTBCUU5tQ2VDOEhCd2ZUQWRUdHRNcllpSllYN0ROYVgrZVV3UG5LZmtPNFp1M0NWWi8zV2VlZHZCTHpQU3hJd2FUeGRXSkg3T2trOGRjcjlhTEpvQ09ielg2Q3UwRzhFdjIwYVpCdnB0ajFlNmdoVGIxb01rb0VLSmw3aFJaa2tKTzNHNXJOVWd5cC9xYkpQQXdUNWxVMHFKSmhmU2s4dkhrem1JamYxemlQVTkzVE1BOTdFNUZnSWw0U1BhN2JxNktXdUdyUkFPbFZsS0FnV211VTlvdlpWaXRhVzF2YlEwQ3pYcG9xMWtCSnh5djJxc2RGbjRsOVdkTXNtaUdpQjJwRkE0OFhycGhNVGs2YXRiVzFzcXJMTDBLWFZUYW9RcHBGY3pKaVhGNWVOaXNySzBhRU96ZzRLSWVqRXovS01WeXNqR2JSWkh1bHBMQ3hzV0hrS29UOS9YMHpOVFYxZW91NW5wbVltREI0NVJVZTIvNHQyUS9iaXN2TmQyMUUyOXZiTTJOalk2ZVh4REh5Tk9QajQrYnc4UENNemVibXBsbGNYRHk3dDR5b0UrMkdwZU9oWjhNYW9HeGdXdGtWWVVaSFI0MzBKZ2tTYjJwcU10dmIyNWZLcDlOcDA5allhT3JyNnk4OTgwc1FQL3pTbzB4VDI5TWdtT3c0V3dYNVh1M3M3SnpsbFhpeEhpVTlVSHFrdHdlZUZmU0psT0tIVC9GQWt0U0todGJLRVlIL2hvV0ZCYk82S29zbTltRjNkOWRNVDAvYkZyRHl3N1l5Ri9saUxab01PbVptWnNyaXNMUzBaRHNOVUNlYTJtOGFsSmpIOWZ3cVJlUzdoVW40VlZsY1BCTS9WQVcxUFUxT1RXa2dwY1VQTHd2VnEvellyZjZPZ1lDVHBTeHZvMjNqR0RtdVl4ZjdubTMrc1BLcDdXa0NBTkNHd3dMaFp5ZHErMzQrU1pwMjBYcmhZNmFZOHdHblp5Q2EyRmNYYXRSNTVIRm9kblkybTBxbGNuaEZQdk1raHhMRmVjaTNBd01EWDBJeFZxSVIxVDFOMmlJSFNmRWZQMWRpdXlyS0x2YkVia1dWQkZoWTlVQ2swRzQ1SFlVbHFxKzREK053ejFadGJlMFR6UWRYWXlHYWlNZHpqNFYvWWVVRGtYOXVHaU1IU1BIYWFrYmFsamZkWVZ4T0dLcy9xQ3J0VmY5Tjg0b2l3c21yeS9VM1R1cVRlcVYrcnoydDhWaUpKaERsVzROdGxhY1kzWFhpdHRMcGdQeHFwbFBxMC93TnUvalBFNXR2MmtYSDVaNi9UL09qRXFNME9iMEZkK1V3a0p6cGtOMW0zMStDSXYzVDBOQlF5ZHZYS01kQUFpUkFBaVJBQWlSQUFpUkFBaVJBQWlSQUFpUkFBaVJBQWlSQUFpUkFBcm9JQkxvMWc1VjN1OThxNldMaTNCdnNLampsSEx0TlVPZEVZMWdoUmFOb01TUVFRNWZaMHloYURBblFaUklnQVJJZ0FSSWdnY2dJT0oycEI5R0tLRmRWWEs5a3VPTERJYjhya2lIV1E5RkNoTzNLRkVWelJUTEVlaWhhaUxCZG1hSm9ya2l5SGhJZ0FSSWdBUklnQVJJZ0FSSWdBUklnQVJJZ0FSSWdnUUFKUkxxZkZ1VmVtVXVtWWUrN2NlM1JwWHFzaXdSSWdBUklnQVJJZ0FTdU80RkloL3cyY0tPY0ZvUTlsTGZoSVhrNDVMY2x4WHdrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa29JM0FIMVRzZ0hTdlBYZ05BQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHMEFBQUJ0Q0FZQUFBQ3IrTzlXQUFBQUFYTlNSMElBcnM0YzZRQUFBOUJKUkVGVWVBSHRuYjFPV3pFVWdKMmthenQxNlJQMEJTcklVaWx2MHEwRGlMRkxwVDVCUnhBdlVIWEt4SWFpU0FWbFM4SklobVNyRkFGQ1lnQkJKR2lTK2tTNGFoSUN4cWw2N3JuNUxGMVo5OGVjNCsrTEhkOE0yRGtLQkNBQUFRaEFBQUlRZ0FBRUlBQUJDRUFBQWhCWU5RS0YyQTV2Ykd5TVk1L2x1VFFDdTd1N1VUNkthWCtlVnBvRWtLWkpQekUyMGhMQmFUWkRtaWI5eE5oSVN3U24yUXhwbXZRVFl5TXRFWnhtTTZScDBrK01qYlJFY0pyTmtLWkpQekUyMGhMQmFUWkRtaWI5eE5oSVN3U24yUXhwbXZRVFl5TXRFWnhtTTZScDBrK01qYlJFY0pyTmtLWkpQekUyMGhMQmFUWkRtaWI5eE5ncklhM2RicnVUazVORVJObHJsbnRwSXF2VmFybDZ2ZTV1YjIrelp5QWhvOXhJRzQxR2M5MFhTU0pyUEI2N3E2c3JkM2g0T1BlTXhRdTVrRFljRHQzZTNwN3I5L3RURGtTU3lBcWwxK3U1YnJjYlRzM1d1WkRXYURRbTMxbTFXdTJQSkpFamttYUxpTHk4dkp5OWJPcmN2TFRqNDJQWDZYUW0wQWVEZ2R2ZjMzY1hGeGNMcDhLN3U3dkpsUG5RZEdyRm5HbHBwNmVuVGtiWjMrWDgvTnhWcTFVbmNoWVZhU2NyU3F2RnJMVHI2K3ZKcUhwb3hNaDMzRlBsNk9qSTdHdUFTV2tpUmFiQm01dWJwOXdzdkM4clNxdXZBU2FseVpSNGRuYTJVRWpzRGF1dkFTOWlPNWlsNXlxVmlwTmpWWXZKa2JhcXNrSy9rUlpJR0txUlpraFdTQlZwZ1lTaEdtbUdaSVZVa1JaSUdLcVJaa2hXU0JWcGdZU2hHbW1HWklWVWtSWklHS3FSWmtoV1NCVnBnWVNoR21tR1pJVlVrUlpJR0txUlpraFdTQlZwZ1lTaEdtbUdaSVZVa1JaSUdLcVJaa2hXU0JWcGdZU2hHbW1HWkpFcUJDQUFBUWhBQUFJUVVDY1F0ZU9DWk1rT0dQT3VZbmVzbUcrNTNCV1cvTXZ4VTJtTk5CWHN5d1ZGMm5MOFZGb2pUUVg3Y2tHUnRody9Xa01BQWhDQUFBUWdBSUhWSXBDYm43RzBmbExTK0xpdzVOZWdUa3dJUUFBQ0VJQUFCQ1lFTXI5NlhLVlZZZXhua3RWakxDbWVnd0FFSUFBQkNFQUFBaENBQUFRZzhIOElSTDljaDNTMnRyYmUrMyt4L3NtZnYvUEhtM0E5dzdYc3dkVXVsVXBmdDdlM3AzZGV5SERTajZWV2V1em03TDNOemMzUGZ2T0NiLzc2VzMrOG5MMmYwWFBKVS9MOXNMYTI5c3R2eTJWZVhQUklreEhtaFIzNFRRak0vb3BTS0JSR3hXS3hZbjNFUlF1UUtkR3lNSmtGSlAvN3FWMU96WlpvYWI2SDhoMldoMksrSDgrUmxnZGh1ZWpEYzZUWjNidHFXcFg1ZmtSTGt5V3pmSkZQOTkvV21lUXYvYkNWOVh5MjBVditaclA1YzMxOVhUWW1xL2dqZXRVNUgxTG55djBIN3N2T3pzNTNuUXorWGRSb2FSTFNpMnVVeStVZmZoWDIycCsrOG9lRmR6VjV1VDd3SSt4akhvVDV2bEFnQUFFSVFBQUNFSUNBSG9IZjRwVHpOVFEzTUdJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUcwQUFBQnRDQVlBQUFDcitPOVdBQUFBQVhOU1IwSUFyczRjNlFBQUF6bEpSRUZVZUFIdDNMMXJXbEVZeC9INFF1bmtXTWdRc0dPWFpxbURRdTNVdnlLZE0vaUdPS2ZnMzZBb1hRdDFFZHExVTZFNEZGUTZsSzZkek9nV0o5LzdIRkFRdVM5cXVPM3pKTjlBMEh2T3VkZHpQNy9jNDNNTnlka1pYd2dnZ0FBQ0NDQ0FBQUlJSUlBQUFnZ2dnQUFDQ0NDQUFBSUlJSUFBQWdnZ2dBQUNDQ0NBQUFJSUlJQUFBZ2dnZ0FBQ0NDQ0FBQUlJSUlBQUFnZ2dnQUFDQ0NDQUFBSUlJSUFBQWdnZ2dBQUNDQ0JnWFNCaC9RU09tWCt4V0x6SlpyT0xmcjkvZTh4KzJzYkd0RTBvcXZsVUtwWGNZckhveWZGdkU0bkVaYlBadkl2cXRhSStianpxRjlCdy9ISzVuSkxBT2pJWHQ3S2tWNnRWVzhPOFRwM0Rvd2h0RTFKNmk3UmVyNjlLcGRLNzdiYTFSOU9oMWV2MVpCaDRvVkM0Y2lIdGo1TzJsZ1QzZkwvZHdyYlowQ1N3SitQeCtKc3NmVy84b0t2VmFqb1dpM2t1aFJKYVNxN0FUOTF1MTF3eFpqWTBDYXdwOFBubGN0bXQxV29YKzhHNU1HYXpXY2VGczkrM3M1M3I5WHJ2ZDdaTlBEVVptaXhyMXhMRzlVYjQyWFE2L1NKWDN0TmQ4VTBZdWQwMnIrZHl0ZDI0eXRLclQydWJ1ZERrWGlzcmdUVjNRV1g3bFZ4NUg3WnRMZ1FYeG5ZNzVESGhLa3RYWVlhTVU5TnQ2ajVOM3FQT1pjbjdLWHJuWG9MeGVMd2k3MkVmWmNuOEpmMXByekYrYmJKZnA5VnFtYWdvemJ3SnU4SmpNcGw4RmZRWGZ2RFMvbGF1c0x3OFhnYU04ZXQ2bWNsay9neUh3OTkrQTdTMG0xa2VONFZITmdoT2xrbDNDL0E2YUV4UW42czBYY1VaTkVaRG40blE5Z3FQeU53azlKU3JPTFhmQnFoZkhsM2hJU2wxNWZ0ZnpmVmlOQnF0QjRQQjk4aCtPdTU1WU5XRlNGamhjYzl6RDlwOW1Vd204NDFHNDBmUW9QL1ZwM1o1ZElYSGZENy9MRENlbFdMRVlLcHZBOVNHZGtqaEVYRnc1bjhiRUxFUGgwY0FBUVFRUUFBQkJCQkFBQUVFRUVBQUFRUVFRQUFCQkJCQUFBRUVFRUFBQVFRUVFBQUJCQkJBQUFFRUVFQUFBUVFRUUFBQkJCQTRUZUNvdjVxUi84bXhQdTFsMkN0TW9OMXVINXlGMmovQUNEdkp4OXhQYUFiVEp6UkNNeWhnY01wY2FZUm1VSUFwSTRBQUFnZzhGSUdENzhMZENUK1VUMFNPK2ZSQlk5QlVqeHBUQ1prVG9ZVUFhZXdtTkkycGhNeUowRUtBTkhZVG1zWlVtQk1DQ0NDQUFBSUlJSUFBQWdnZ2dBQUNDRVFyOEJlQXlOOThlRmtMUVFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9RQUFBQkdDQVlBQUFEY2d6aG9BQUFBQVhOU1IwSUFyczRjNlFBQUEzVkpSRUZVZUFIdG04RnF3a0FVUmFmU0R4UEV2ZC9oQi9rVHJ0eUp1QkdYNmxJWHVoWVZkNG9LaXRwT0lLVzJzWVdKeWJ5WmR3YUtHRHZKZStmMk5NbW94akFnQUFFeEJONXNKYzFtOHk2bUlnR0Z0RnF0aEl1QVVpaEJHWUdLc241cEZ3S2lDU0NrNkhnb1Roc0JoTlNXT1AyS0pvQ1FvdU9oT0cwRUVGSmI0dlFybWdCQ2lvNkg0clFSUUVodGlkT3ZhQUlJS1RvZWl0TkdBQ0cxSlU2L29na2dwT2g0S0U0YkFZVFVsamo5aWlhQWtLTGpvVGh0QkJCU1crTDBLNW9BUW9xT2grSzBFVUJJYlluVHIyZ0NDQ2s2SG9yVFJ1QmRXOE92N0pjdmRqL1M1SXZkanp4Y25uR0dkS0hHSEFnVVJBQWhDd0xMYmlIZ1FnQWhYYWd4QndJRkVVRElnc0N5V3dpNEVFQklGMnJNZ1VCQkJGaGx6UUdXVmNVYzhKaWFTWUF6WkNZV05rTEFEd0dFOU1PZG8wSWdrd0JDWm1KaEl3VDhFRUJJUDl3NUtnUXlDU0JrSmhZMlFzQVBBWkZDanNkanMxcXQvQkRocUJEd1NFQ2NrRmJFMFdoayt2MitPWi9QSHRGd2FBaVVUOENia0xmYjdWZTNWa0FyNHYxK04vdjkzZ3dHZzErL3d3WUl4RXpBaTVEWDY5VjBPaDJ6WEM0ZjJGb0JyWWpwV0N3V1pqNmZwMDk1aEVEMEJMd0lPUndPazN2RVhxLzNKYUFWendyNGMxaEpkN3ZkejgwOGgwQ1VCRXIvNk54ME9qV3oyU3lCZVRxZFRMZmJOYlZhN2VubDZlVnlTUzVqRzQyR3FWUzgvUDk0R2p4ZlVINktoaGMrQ2JoOHRMTFV2L0QxZW0zczJmSDcyRzYzcHQxdUd5dmVzMkhuMlpWWEJnUmlKMUNha0lmRElUa2JaaTNtMkh2Sy84WmtNdUd0a1A4ZzhYcndCRW9SMGdwbkwwMlB4Nk16TUx2eXlsc2h6dmlZR0FpQlV1NGg3V1hxWnJQSmpTUjlLNlJlcitmZTF5dDI0SEtQOElyanNvOTRDWlFpWkxWYU5mYUhBUUVJL0UyZ2xFdld2MHZnVlFoQUlDV0FrQ2tKSGlFZ2dBQkNDZ2lCRWlDUUVrRElsQVNQRUJCQW9KUkZIUUY5RmxJQ245UXBCR3MwTzNWWmhlY01HVTM4TkJJREFZU01JVVY2aUlZQVFrWVRKWTNFUUlCN3lCd3B1dHdqNURnY1V4VVE0QXlwSUdSYURJY0FRb2FURlpVcUlJQ1FDa0tteFhBSUlHUTRXVkdwQWdJSXFTQmtXZ3lIQUVLR2t4V1ZLaUNBa0FwQ3BzVndDQ0JrT0ZsUnFRSUNDS2tnWkZvTWh3QkNocE1WbFNvZ2dKQUtRcWJGY0FnZ1pEaFpVYWtDQWdpcElHUmFESWNBUW9hVEZaVXFJSUNRQ2tLbXhYQUlJR1E0V1ZHcEFnSUlxU0JrV2d5SEFFS0dreFdWS2lDQWtBcENwa1VJUUFBQ0VIQWc4QUhLMzYwK0NtYWVmd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1FBQUFCR0NBWUFBQURjZ3pob0FBQUFBWE5TUjBJQXJzNGM2UUFBQjJGSlJFRlVlQUh0blUxSUpFY1V4M3MwS0FsNzhTQ0VQZXpCVzhnMVJrTTJRWmE0UkNRNUJLS0hYSmNFdjRZMXNEbmxZSExNd3ByNFNZTEhISllWQkJPV3FFalFHTWlIZXRTRGdvY2xyaU9DZ2taRlpUVC9KejNaVVdic3JxL3VudDEvUVRFejNWWHZ2ZnJaejFkZFhWM2xlVXdrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJa1FBSWtRQUlrUUFJdlBJRlVuQVRPenM1UzZYUzY3dlQwdEJsMjFDQmZ6MldjTzB1bFVodjQvZFRQYTJWbFpZLzcrdnIrd3ZFekhHTWlnZWVPUUN3TzJkWFY5UjZjOEdQUS9CQis5Nm9LVlRoakJ1Vi9nbk9POXZmM1Q2dlVaVmtTU0RxQlNCMFNqbGlmeldhL0FaUjNMSUdaS3k4di93S08rYWNsZVJSREFyRVNpTVFodTd1N2E0Nk9qdTZqcFI4NWF1MVlaV1hsdmQ3ZTNqVkg4aW1XQkNJaDROd2hwWHVLcVBnSXJhbHkzS0lkUk1zV2RtTWRVNlo0cHdUS1hVcnY3T3pzd3IzaWo5RHhpa3M5dnV5WGNULzZTVjFkM2M3ZlNCSG9vd29Tc0U3QW1VTzJ0N2QvQ3dmNUNoYVhXYmU2dU1BeTZHeXFyYTJ0bXArZm55aGVqR2RJSUprRW5EaWtSRWJmR2VOcWRUMGk1VFlqWlZ6NHFWZVhnUFY3U1ArZVVhS1RFMmRYYUdnVzk1VHY4NTVTZ1JpTHhrN0Fxa1A2bzZrTGFKWHJBWnl3NEhZdyt2b0dSMS9ENG1LNXVBbFl2Yi96SDIwa3hSbUZiWlZ2VTl5Y3FaOEVRaEd3RmlIOWgvNS9oTklhY1NGMFhkL2k1SUdJb1ZPZEZnRnJFUktQTitUQmZ5SlRrbTFMSkRBYUZSc0JLdzRwQXprWVZiMFpXeXNDRkl0dFltTkFNWjRtZ2RnSnZHVERBbHp3TFRia3VKVGhUMmJuWkhTWGtCTWd1Nk9qNDNXWWNRZjVOdklOWEp2WGJKcUZseHYraGJ3bnlGUElJNE9EZzB0VzVac0tRNE5UZU83NEZKOUtiMjJZNmxXdEwyK0pEQXdNWE9lclc2cmtTcU44VDA5UHhkYlcxZ05ZMjRacjBVclBMNmpsdUpaT1VXYTR1cnI2YytnL0Rpb2Y1cnp4czhMdDdlMTZSSis3WVpURlhPYmE1T1RrQkNZTC9CT3pIVlJ2bVlEdmpML0FFVnNoMnRwQVpRZ3pSZGViQndjSGJ6YzNOeitjbVpuSmhxaHpaUkhqL3lSd1JubTUyRmxhV0Zqd05qYmtQV1h6NU5wV2N3c3BRWWVBUkVZNDR5MmR1amJxaUc0L09odUxNM1pJV0ZCamJFVVJBZUtJbUpQcVRVOVBlOGZIVm5vRXptd3QwZ1FlZGt6QXYyZHNjNndtalBnMjM1WXdaWXVXc1RHb0k4dHVHQ1ZFTGc4ckFGeVFJUTRvam9qL1B0N2UzcDQzT3p2ck5UWTJYaWlqOFNQUVZreUs1L0lnZVdDSGhvYWk3QUxtYVE3OTlRNnVrWXNYVCtpcTlncUtEYmlubE1Ha2JoT3BOaG9TZUpGZlpTRGVsZlRHeDhlOTlmWDFDOFhFQWNVUmMybDFkZFZiV1ZuSi9kVDlOTEpWVnluck9TVWdvNmxKU2NhMnhPNlFjM056NS9lSVUxTlQvenVnT0o0NDRPVWtUcnE3dTN2NXNNcHZPcVFLcmRJb2V5TkJaaHJiWXV5UUNOWGFYYnlscFNWdmVYbjVuT2ZoNGFFM01USGhZZFQydkh0YUNQTEp5Y2w1TjFhNnVEckp4RllkZmF4REFxb0VqQjBTL1dhdElkQk1KdU5KZE14UEdLbnlSa2RIUFhHOFlrbnF5Y2lyVHRLMVZVY1g2MFJHNEVsa21vSVZHZHRpN0pDd1VkWk5WVXI3Ky92bjBiQlFwSk43eXFDMHVMaW8reWhFMmRZZ1czZytkZ0pUc1Z2d3pBQmpXMnlNc2lwZDVPSncwalhGdzlSbnpWRDhKcjFrR1lGdGJXMzFLaW9xVkdvSDJsb0NvNG9xN1gwUnlvNmc1NVBHTldFanVHanpnZzF5SHpXaUxjQ3ZhS01SYXlwR1NEZDFjM05UcFVyQnNybEhJUVZQRmorb1pHdHhNVHlURkFMK1hOTGhCTmd6YkdOZXEzR0VsT1g5RWZXK0RBdWtvYUhCa3h4SEVsdmowRXVkYmduSVhGS01QN3lHS0huTHJhYkMwaEVkZnhVYkNwOVZPMm9jSWYyOU5tUjUvMFFuUU11SXJZazJrc1pwRVpDSjNYQ0lKdnlOQi8ydW81WWMxVXFpUzNTS2JsdVR5NjNNd3NDVW9lL3gzK2xUMVFaRldSN2dma0NYNHJNb2RWSlg5QVJLL2ZVcjR5NnJJSmVOYjlCdFRiUkRpbzNSWHg3VUdEVUIvejdPYVBwYTFEYm42N01TSVVVZzVvRCtoZzlibStqazIyamoreHhHVDkrMUlZZ3lTTUFsQWVON3lKeHhzZ3RWN252U1BwTnNXOUpZMFo1NENWaHpTSDlWdDdGNG0xTlEreGhYbkN2SWhRY1RTTUNhUTByYlpFczRmT3drcUoyeVVMTFl4RVFDSlVIQXFrUEtDdUhvSHNxQ1Y4SHozOXpqa2EwRVdyaHF1WHZRMUdDUGdQR2FPcGROd1pvMWE3SWxIQjZETkYwK0YrVnZqS3JleGFKV0Q2UFVTVjBrWUVyQXVrT0tRYkxybEd3Smg2LzFwZ1pxMXY4T3c5OWZhOVpsTlJLSWpZQVRoNVRXeVA2TXNpVWNJdVZ0L0xUYU5iNkNWbFlpSTUzeENrSThsV2dDMXA1REZtdWx2ejBkdHpRdkJvakhTU0NQZ1BQSUpmc3p5cFp3ME9ueWtjaVk2QkJkZVczalZ4SW9PUUxPSTJRK0Vka2hDeThsMzBjMzltYitjZDN2bUovNk83cW85L2ljVVpjZzZ5V05RS1FPbVd1OHZ6bFBDeHp6QTJTbExRamdoQm5rbjVFZk1TTG1pUEx6ZVNFUWkwUG00TUVaVStsMHVnNVJVMVkvcjBHV1ZlRnlXWXJKRy82NXZJWm8rTmgvM1V0N1lTMFJ5a1FDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNKRUFDSkVBQ0pFQUNpU1h3SDdrdVlNWDlJaFZlQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT1FBQUFBd0NBWUFBQUFCK05hMEFBQUFBWE5TUjBJQXJzNGM2UUFBQXhCSlJFRlVlQUh0M0QyTEdrRVl3UEh4RWh2VENDcEMya0E2d1NMWTVFdGNBdUpIRUxRMlhHa1pzQXdLZm9ua1NrSHN4TWF6VWlRZ1loZDhLK3dFSXpIemhGVzhpN3Y0TW5PYytoKzQyNWVaZVhiOXljUHN6ZTZlVWhRRUVFQUFBUVFRUUFBQkJCQkFBQUVFRUVBQUFRUVFRQUFCQkJCQUFBRUVFRUFBQVFRUVFBQUJCQkJBQUFFRUVFQUFBUVFRUUFBQkJCQkFBSUdYSStCN2psTXBsOHYrZHJ0OXUxcXRidlh4UHVpZnQ4NXhmK25sZzgvbnU0L0ZZdmZwZFBxM3M1OEZBbGNwWUQwaHM5bnNKeTFiME1uNHprdFlKMlZmMStlS3hlSVByM2JVSVhESkF0WVNNcC9QMzB3bWs2ODZFWE9IQU9yRUxFUWlrVHZkLzg4aC9XaUx3Q1VJdkxiMUlZNUpSamtYU1dEZFYxYS95QzhLQXRja1lHV0VsTXRVblZqZlQ0SFVJK1ZuTGw5UEVhVHZPUXJjbUQ1cG1jRFJNUXNHNGhhY1dBWkNFUUtCOHhBd25wRE9iS3JuQk00K05ESUpKTEgyYVVzYkJDNUZ3SGhDNmtUYUs0bVd5NlhxOVhxZWp2dkc4Z3hDSlFKbkpHQmpVa2Z1TSs0c2k4VkNTU0lHQWdIVmFEUlV0OXRWd1dCUTZWblZuZTMxVHRkWWJoM1lqOEE1QzloSXlQVk4vMGN1ZXJSVHRWcE56ZWR6RlkvSFZhZlQrVmRmclZaVk1wbFVmci84NmZsZjJSbHJ1MVVtazFsdGI3T093SE1KbEVvbDQ1T2l4aTlaM1RCYXJaWWFEQVpxT0J5cVNxV3lhVGFielZTOVh0OXNzNExBTlF2WUdDSGxjYmozMjZqVDZWVDErMzBWQ29XMmQyL1d4K094R28xR0tocU5idlk1S3hLTGdzRFZDTmhJeUFldDl5Z2h3K0d3U3FWU3g2QktMTTlpNDdMQjg0QlVJbUJSd1BnbHF6d29idXA4VGNZeWRVN0VRY0NtZ1BHRWxMYzJkQ0xKZytJbkZZa2hzVTRLUW1jRXprekFlRUk2cjFBZDlFQzVpMW1PMTdGY1pOaDlzUUt2Ykh5eVpyUDVNNUZJdk5HeFB4NFRYNCtPQmYwYzY3ZGordElIZ1hNV01ENUNyakhrRlNwSnJQWDJ2a3ZwSTMzM2JVODdCQzVKd1BpTnphYzR2S0Q4VklSdEJOd0ZyQ2VrSEpwLzRlSCtCVkNEQUFJSUlJQUFBZ2dnZ0FBQ0NDQ0FBQUlJSUlBQUFnZ2dnQUFDQ0NDQUFBSUlJSUFBQWdnZ2dBQUNDQ0NBQUFJSUlJQUFBZ2dnZ0FBQ0NDQ0FBQUl2VmVBdnJidS82eVlVK3hVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQWNnQUFBQzBDQVlBQUFBUU5yemtBQUFBQ1hCSVdYTUFBQllsQUFBV0pRRkpVaVR3QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBWFpTVVJCVkhnQjdkMnhhaFJyR01maDd4d2lnaUpheEVJYkd4dWJORnA2RlZ0NEVWN2NZcVdWblZaaVk2RVJ0TENKaFFxS0tJUUV6dUhkUXc0eC9wTnN6T3p1ek96endCQXhnY0FVK2UwNzgzMHpmejE4K1BDZkJuT2FUcWNOWUIzODNRQ0Ezd2drQUFRQ0NRQ0JRQUpBSUpBQUVBZ2tBQVFDQ1FDQlFBSkFJSkFBRUFna0FBUUNDUUNCUUFKQUlKQUFFQWdrQUFRQ0NRQ0JRQUpBSUpBQUVBZ2tBQVFDQ1FDQlFBSkFJSkFBRUFna0FBUUNDUUNCUUFKQUlKQUFFQWdrQUFRQ0NRQ0JRQUpBSUpBQUVBZ2tBQVFDQ1FEQlJvTUJtVXdtRFU0em5VNGJuSmNKRWdBQ2dRU0FRQ0FCSUJCSUFBZ0VFZ0FDZ1FTQVFDQUJJQkJJQUFnRUVnQUNnUVNBUUNBQklQQXNWZ2JGTXphQlpURkJBa0Fna0FBUUNDUUFCQUlKQUlGQUFrQWdrQUFRQ0NRQUJBSUpBSUZBQWtBZ2tBQVFDQ1FBQkFJSkFJRkFBa0Fna0FBUUNDUUFCQUlKQUlGQUFrQWdrQUFRQ0NRQUJBSUpBSUZBQWtBZ2tBQVFDQ1FBQkFJSkFJRkFBa0Fna0FBUUNDUUFCQUlKQUlGQUFrQWdrQUFRQ0NRQUJBSUpBSUZBQWtDdzBXQkFKcE5KQTliRGREcHRxMlNDQklCQUlNL2cyYk5uN2Z2Mzd3MkE4UlBJT1cxdmI3ZFhyMTYxcDArZk5nREdUeURuVUZQaml4Y3Zadi9lMmRtWlRaSUFqSnRBenVIeDQ4ZS9YRnF0U2JKQ0NjQjRDZVFwYW5MODh1WExiLzlmbDFwM2QzY2JBT08wbG9HY04yeUhMNjJtN3oxLy9yd0JNRTVydHcreXBzRkhqeDYxQnc4ZXRDdFhyaHo3Y3hYUitybVQxTUtkemMzTnRyVzExVmlPVmUrTEF0YkhXazJRTmZYVi9jU0szOEhYNDh5N3BhTW1URnMvQU1abnJRSjVlTEZOVFpMSFhTS3R5ZkR0MjdkdEhoVlpXejhBeG1kdEFsa1Q0ZEhGTmdkN0d3ODc2YjdqY1d6OUFCaWZ0UWhrUmZCb0NBOVUyQTV2MlRpNnBlTXN2OFBXRDREeEdIMGdhMm84YmJwNzh1VEovNU5qMnRJeEwxcy9BTVpqMUlFOFdKUnptb05GTzJlOXRKcCtuNjBmQU9NdzZrQ2U1WExwZVNiSHc5SjlUUUNHWjdTQlRJdHlsc1hXRDREaEcyVWdUMXFVc3d5MmZnQU0zK2dDT2MraW5HV3c5UU5nMkVZVnlIa1g1U3lMclI4QXd6V3FaN0grNlI3R1JhcExyZlhjMTRzWEx6Yk9iektaTk1iUE0zZnBnOUZNa0t0Y2xITVNXejhBaG1rMEUrVDkrL2RuQndCMHdRdVRBU0FRU0FBSUJCSUFBb0VFZ0VBZ0FTQVkxVDVJeHMvK09HQlpUSkFBRUFna0FBUUNDUUNCUUFKQUlKQUFFQWdrQUFRQ0NRQ0JRQUpBSUpBQUVBZ2tBQVFDQ1FDQlFBSkFJSkFBRUFna0FBUUNDUUNCUUFKQUlKQUFFQWdrQUFRQ0NRQ0JRQUpBSUpBQUVBZ2tBQVFDQ1FDQlFBSkFJSkFBRUd3MEFCYnV3b1VMN2ZidDIrMzY5ZXZ0MHFWTHMyTWQ3ZTN0dFcvZnZyV2RuWjNaOGZQbno5WlhBZ213UUJYQ2UvZnV0YzNOemNaL0h4VHFYTlN4dGJYVlBuejQwTjY4ZWRQTFVBb2t3SUxVeEhqbnpwMVpGTWh1M2JyVmJ0NjhPWXZrdTNmdldwOElKTUFDVkJqcjRIVDFBYUtteWZwYW9ld0xpM1FBT25Zd09YSTJkYzdxM1BXRlFBSjBxTzQ1aXVPZnEzUFhsd1ZNQWduUUlmY2N6NmZPM2QyN2Qxc2ZDQ1JBUjJyeXFVVW5uRTl0aGVuRGh3eUJCT2hJcmNha0czMjRGeW1RQUIwUnlPNzBZZCtvUUFKMDVPclZxNDF1WEw1OHVhMmFRQUoweE9LYzd2UmhKYXRBQWtBZ2tBQWQ2Zk9EdDRlbUhtcSthZ0lKMEpFZlAzNDB1dkgxNjllMmFnSUowSkhQbno4M3V2SHg0OGUyYWdJSjBKRyt2WTFpeU9wZGthc21rQUFkcWZ0bW56NTlhcHhQdlNPeUQvZHpCUktnUXk5ZnZ1ekZBcE9ocW5QWGwxZGVDU1JBaDJyeTZkTTdEWWZtOWV2WHZWa05MSkFBSGF0N2tmV0huck9wYy9iKy9mdldGeHNOZ001dGIyKzMvZjE5cjcrYVExMVc3VnNjaTBBQ0xFaE5rclVhc3lMcE5WaFpMV3FxKzdaOWZNaUNRQUlzVVAzaHJ3RFVmY2w2MjhlTkd6ZmF0V3ZYMW5hcXJQTlJEMVNvTU5iRTJPY0ZUUUlKc0FRVmhwb283WlVjRG90MEFDQVFTQUFJQkJJQUFvRUVnRUFnQVNBUVNBQUlCQklBQW9FRWdFQWdBU0FRU0FBSUJCSUFBb0VFZ0VBZ0FTQVFTQUFJQkJJQUFvRUVnRUFnQVNBUVNBQUlCQklBQW9FRWdFQWdBU0FRU0FBSUJCSUFnbjhCOU9IRmZna204QVFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTm9BQUFEYUNBWUFBQURBSFZ6YkFBQUFDWEJJV1hNQUFCWWxBQUFXSlFGSlVpVHdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFQVlNVUkJWSGdCN2R3eFNpeFpBRWJoNnpBbUdtaWcwSm1KQmdhYW1HaGliT3hDM1ltTGNBZnV3S0VFd1hIVTEvT2VmYW9hdmc4RUVkUER2ZlYzVXp1cjFlcGxBQnYxMXdBMlRtZ1FFQm9FaEFZQm9VRkFhQkFRR2dTRUJnR2hRVUJvRUJBYUJJUUdBYUZCUUdnUUVCb0VoQVlCb1VGQWFCQVFHZ1NFQmdHaFFVQm9FQkFhQklRR0FhRkJRR2dRRUJvRWhBWUJvVUZBYUJBUUdnU0VCZ0doUVVCb0VCQWFCSVFHQWFGQlFHZ1FFQm9FaEFZQm9VRkFhQkFRR2dTRUJnR2hRVUJvRUJBYUJJUUdBYUZCUUdnUUVCb0VoQVlCb1VGQWFCQVFHZ1NFQmdHaFFVQm9FQkFhQklRR0FhRkJRR2dRRUJvRWhBWUJvVUZBYUJBUUdnU0VCZ0doUVVCb0VCQWFCSVFHQWFGQlFHZ1FFQm9FaExiRkxpOHZ4OTdlM21ENWhMYWxUazVPeHVucDZiaTZ1aG9zbjlDMjBIU0tuWitmdi81K2ZIdzhMaTR1QnNzbXRDMTBmWDM5cnl2ajJkblpPRG82R2l5WDBMYk1kSklkSGg3KzUrL1RGWEozZDNld1RFSmJnSFVEZVg5bC9HaC9mLzkxSEdHWmhEYXpnNE9EY1hkMzk4djFjSXJ4OXZiMjIvOTVHMGhZSHFITmFJcnI1dWJtTmFMcHVldTdrMjNkS1g4NjhVeit5eU8wR2IwZk5hYm5ycSt1ZnROSk5mMnNZNHJWNUw4OFFwdkpGTlhIVWVPenE5OTN6MlZmTWZrdmo5Qm1NTVgwMWJQVUZPRDdxZjdqbEw4dWsvK3lDQzAyalIrL1dnZW41N2Ezayt5ektYOWRKdi9sMkZtdFZpK0R4QlRQdEJ5dWMwSTlQei8vVVdSdm5wNmV4dVBqNDJCZVRyVFEvN2tHL2tSa0U1UC9NZ2d0OHRuNFVUSDV6MDlvZ2UvR2o0TEpmMzVDMjdCMXhvK0N5WDllUXR1Z3QyOStMSVhKZno1QzI2RGYvUXhzazB6Kzh4RGFoc3c1Zm56SHQvem40WE0wQ0RqUklDQTBDQWdOQWtLRGdOQWdJRFFJQ0EwQ1FvT0EwQ0FnTkFnSURRSkNnNERRSUNBMENBZ05Ba0tEZ05BZ0lEUUlDQTBDUW9PQTBDQWdOQWdJRFFKQ2c0RFFJQ0EwQ0FnTkFrS0RnTkFnSURRSUNBMENRb09BMENBZ05BZ0lEUUpDZzREUUlDQTBDQWdOQWtLRGdOQWdJRFFJQ0EwQ1FvT0EwQ0FnTkFnSURRSkNnNERRSUNBMENBZ05Ba0tEZ05BZ0lEUUlDQTBDUW9PQTBDQWdOQWdJRFFKQ2c0RFFJQ0EwQ0FnTkFrS0RnTkFnOFBmNFlmZjM5d08yM2NQRHcvaEpUalFJQ0EwQ1FvT0EwQ0FnTkFnSURRSkNnNERRSUNBMENBZ05Ba0tEd001cXRYb1p3RVk1MFNBZ05BZ0lEUUpDZzREUUlDQTBDQWdOQWtLRGdOQWdJRFFJQ0EwQzN1dTRNRC85UGtHV3dZa0dBYUZCUUdnUUVCb0VoQVlCb1VGQWFCQVFHZ1NFQmdHaFFVQm9FUEJlUndnNDBTQWdOQWdJRFFKQ2c0RFFJQ0EwQ0FnTkFrS0RnTkFnSURRSUNBMENRb09BMENBZ05BZ0lEUUpDZzREUUlDQTBDQWdOQXY4QTBXZzZHTHhVYTNnQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc3FsX2V4cHJlc3Npb25fYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3N0eWxlX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX3NxbF9leHByZXNzaW9uX3J1bnRpbWVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIGNsYXNzTmFtZXMsXHJcbiAgSW1tdXRhYmxlLFxyXG4gIHR5cGUgRGF0YVNvdXJjZSxcclxuICB0eXBlIElNU3RhdGUsXHJcbiAgUmVhY3QsXHJcbiAgdHlwZSBJTUFwcENvbmZpZyxcclxuICB0eXBlIElNVGhlbWVWYXJpYWJsZXMsXHJcbiAgdHlwZSBTZXJpYWxpemVkU3R5bGVzLFxyXG4gIGNzcyxcclxuICBqc3gsXHJcbiAgcG9saXNoZWQsXHJcbiAgdHlwZSBBcHBNb2RlLFxyXG4gIEJyb3dzZXJTaXplTW9kZSxcclxuICB0eXBlIFVzZURhdGFTb3VyY2UsXHJcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICBnZXRBcHBTdG9yZSxcclxuICB0eXBlIEltbXV0YWJsZUFycmF5LFxyXG4gIHR5cGUgRGF0YVNvdXJjZUpzb24sXHJcbiAgSmltdUZpZWxkVHlwZSxcclxuICB0eXBlIE9yZGVyQnlPcHRpb24sXHJcbiAgdHlwZSBJTVNxbEV4cHJlc3Npb24sXHJcbiAgdHlwZSBTcWxFeHByZXNzaW9uLFxyXG4gIGV4cHJlc3Npb25VdGlscyxcclxuICBhcHBBY3Rpb25zLFxyXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSxcclxuICB0eXBlIElNRGF0YVNvdXJjZUluZm8sXHJcbiAgdHlwZSBMYXlvdXRJbmZvLFxyXG4gIExheW91dFR5cGUsXHJcbiAgdHlwZSBTaXplLFxyXG4gIGxvZGFzaCxcclxuICB1dGlscyBhcyBqaW11VXRpbHMsXHJcbiAgQWxsRGF0YVNvdXJjZVR5cGVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzLFxyXG4gIGdldEFwcENvbmZpZ0FjdGlvbixcclxuICBidWlsZGVyQXBwU3luYyxcclxuICB0ZW1wbGF0ZVV0aWxzXHJcbn0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHtcclxuICBzZWFyY2hVdGlscyxcclxuICBMYXlvdXRJdGVtU2l6ZU1vZGVzLFxyXG4gIGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11TGF5b3V0c0RlZmF1bHRNZXNzYWdlc1xyXG59IGZyb20gJ2ppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZSdcclxuaW1wb3J0IHtcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93LFxyXG4gIFNvcnRTZXR0aW5nLFxyXG4gIHR5cGUgU29ydFNldHRpbmdPcHRpb24sXHJcbiAgTGlua1NlbGVjdG9yLFxyXG4gIHR5cGUgSU1MaW5rUGFyYW1cclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICBCYWNrZ3JvdW5kU2V0dGluZyxcclxuICBCb3JkZXJTZXR0aW5nLFxyXG4gIEJvcmRlclJhZGl1c1NldHRpbmcsXHJcbiAgU2l6ZUVkaXRvcixcclxuICBJbnB1dFJhdGlvLFxyXG4gIFRleHRBbGlnbm1lbnRcclxufSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3N0eWxlLXNldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHtcclxuICBTbGlkZXIsXHJcbiAgU2VsZWN0LFxyXG4gIFN3aXRjaCxcclxuICBDaGVja2JveCxcclxuICBJY29uLFxyXG4gIEJ1dHRvbixcclxuICBNdWx0aVNlbGVjdCxcclxuICB0eXBlIE11bHRpU2VsZWN0SXRlbSxcclxuICBkZWZhdWx0TWVzc2FnZXMgYXMgamltdVVJRGVmYXVsdE1lc3NhZ2VzLFxyXG4gIFRvb2x0aXAsXHJcbiAgVGV4dElucHV0LFxyXG4gIERpc3RhbmNlVW5pdHMsXHJcbiAgdHlwZSBMaW5lYXJVbml0LFxyXG4gIFRleHRBbGlnblZhbHVlLFxyXG4gIENvbGxhcHNhYmxlUGFuZWwsXHJcbiAgdXRpbHMgYXMgdWlVdGlsc1xyXG59IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7XHJcbiAgRGF0YVNvdXJjZVNlbGVjdG9yXHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHtcclxuICB0eXBlIElNQ29uZmlnLFxyXG4gIFBhZ2VTdHlsZSxcclxuICBJdGVtU3R5bGUsXHJcbiAgRGlyZWN0aW9uVHlwZSxcclxuICBTZWxlY3Rpb25Nb2RlVHlwZSxcclxuICBTdGF0dXMsXHJcbiAgdHlwZSBDYXJkU2l6ZSxcclxuICBMSVNUX0NBUkRfTUlOX1NJWkUsXHJcbiAgTGlzdExheW91dCxcclxuICBTZXR0aW5nQ29sbGFwc2VUeXBlLFxyXG4gIExpc3RMYXlvdXRUeXBlLFxyXG4gIERFRkFVTFRfQ0FSRF9TSVpFLFxyXG4gIERFRkFVTFRfU1BBQ0UsXHJcbiAgdHlwZSBFbGVtZW50U2l6ZVVuaXQsXHJcbiAgdHlwZSBFbGVtZW50U2l6ZSxcclxuICBTQ1JPTExfQkFSX1dJRFRIXHJcbn0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBzZXRMYXlvdXRBdXRvLCB0eXBlIE9wdGlvbiB9IGZyb20gJy4vdXRpbHMvdXRpbHMnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IExheW91dFNldHRpbmcgZnJvbSAnLi9jb21wb25lbnRzL3N3aXRjaC1sYXlvdXQnXHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXAgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXInXHJcbmltcG9ydCB7IGhhbmRsZVJlc2l6ZUNhcmQgfSBmcm9tICcuLi9jb21tb24tYnVpbGRlci1zdXBwb3J0J1xyXG5pbXBvcnQgeyBnZXRKaW11RmllbGROYW1lc0J5U3FsRXhwcmVzc2lvbiB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvc3FsLWV4cHJlc3Npb24tcnVudGltZSdcclxuaW1wb3J0IHsgTXlOdW1lcmljSW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXktaW5wdXQnXHJcbmltcG9ydCB7IHR5cGUgVGVtcGxhdGUgfSBmcm9tICdqaW11LWZvci1idWlsZGVyL3RlbXBsYXRlcydcclxuaW1wb3J0IHsgSW5mb091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9zdWdnZXN0ZWQvaW5mbydcclxuaW1wb3J0IHsgRGVza3RvcE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9kZXNrdG9wJ1xyXG5pbXBvcnQgeyBUYWJsZXRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vdGFibGV0J1xyXG5pbXBvcnQgeyBNb2JpbGVPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vbW9iaWxlJ1xyXG5pbXBvcnQgeyBSaWdodE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodCdcclxuaW1wb3J0IHsgQ2xpY2tPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vY2xpY2snXHJcbmltcG9ydCB7IEFycm93TGVmdE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9hcnJvdy1sZWZ0J1xyXG5pbXBvcnQgeyBMb2NrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9sb2NrJ1xyXG5pbXBvcnQgeyBVbmxvY2tPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3VubG9jaydcclxuY29uc3QgcHJlZml4ID0gJ2ppbXUtd2lkZ2V0LSdcclxuXHJcbmNvbnN0IG9yaWdpbkFsbFN0eWxlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZSB9ID0ge1xyXG4gIFNUWUxFMDogcmVxdWlyZSgnLi90ZW1wbGF0ZS9jYXJkLXN0eWxlMC5qc29uJyksXHJcbiAgU1RZTEUxOiByZXF1aXJlKCcuL3RlbXBsYXRlL2NhcmQtc3R5bGUxLmpzb24nKSxcclxuICBTVFlMRTI6IHJlcXVpcmUoJy4vdGVtcGxhdGUvY2FyZC1zdHlsZTIuanNvbicpLFxyXG4gIFNUWUxFMzogcmVxdWlyZSgnLi90ZW1wbGF0ZS9jYXJkLXN0eWxlMy5qc29uJyksXHJcbiAgU1RZTEU0OiByZXF1aXJlKCcuL3RlbXBsYXRlL2NhcmQtc3R5bGU0Lmpzb24nKSxcclxuICBTVFlMRTU6IHJlcXVpcmUoJy4vdGVtcGxhdGUvY2FyZC1zdHlsZTUuanNvbicpLFxyXG4gIFNUWUxFNjogcmVxdWlyZSgnLi90ZW1wbGF0ZS9jYXJkLXN0eWxlNi5qc29uJyksXHJcbiAgU1RZTEU3OiByZXF1aXJlKCcuL3RlbXBsYXRlL2NhcmQtc3R5bGU3Lmpzb24nKSxcclxuICBTVFlMRTg6IHJlcXVpcmUoJy4vdGVtcGxhdGUvY2FyZC1zdHlsZTguanNvbicpLFxyXG4gIFNUWUxFOTogcmVxdWlyZSgnLi90ZW1wbGF0ZS9jYXJkLXN0eWxlOS5qc29uJylcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENhcmRTaXplOiB7IFtrZXk6IHN0cmluZ106IENhcmRTaXplIH0gPSB7XHJcbiAgU1RZTEUwOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgaGVpZ2h0OiAyNzVcclxuICB9LFxyXG4gIFNUWUxFMToge1xyXG4gICAgd2lkdGg6IDIwMCxcclxuICAgIGhlaWdodDogMjc1XHJcbiAgfSxcclxuICBTVFlMRTI6IHtcclxuICAgIHdpZHRoOiAyMDAsXHJcbiAgICBoZWlnaHQ6IDI3NVxyXG4gIH0sXHJcbiAgU1RZTEUzOiB7XHJcbiAgICB3aWR0aDogMjAwLFxyXG4gICAgaGVpZ2h0OiAyNzVcclxuICB9LFxyXG4gIFNUWUxFNDoge1xyXG4gICAgd2lkdGg6IDM2MC41MixcclxuICAgIGhlaWdodDogMTEwXHJcbiAgfSxcclxuICBTVFlMRTU6IHtcclxuICAgIHdpZHRoOiAzMjAsXHJcbiAgICBoZWlnaHQ6IDg4XHJcbiAgfSxcclxuICBTVFlMRTY6IHtcclxuICAgIHdpZHRoOiAzNjAsXHJcbiAgICBoZWlnaHQ6IDMyXHJcbiAgfSxcclxuICBTVFlMRTc6IHtcclxuICAgIHdpZHRoOiAzNjAuNTIsXHJcbiAgICBoZWlnaHQ6IDExMFxyXG4gIH0sXHJcbiAgU1RZTEU4OiB7XHJcbiAgICB3aWR0aDogJzUwJScsXHJcbiAgICBoZWlnaHQ6IDE2MFxyXG4gIH0sXHJcbiAgU1RZTEU5OiB7XHJcbiAgICB3aWR0aDogJzMzJScsXHJcbiAgICBoZWlnaHQ6IDE2MFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdENhcmRMYXlvdXQ6IHsgW2tleTogc3RyaW5nXTogTGlzdExheW91dFR5cGUgfSA9IHtcclxuICBTVFlMRTA6IExpc3RMYXlvdXRUeXBlLkNvbHVtbixcclxuICBTVFlMRTE6IExpc3RMYXlvdXRUeXBlLkNvbHVtbixcclxuICBTVFlMRTI6IExpc3RMYXlvdXRUeXBlLkNvbHVtbixcclxuICBTVFlMRTM6IExpc3RMYXlvdXRUeXBlLkNvbHVtbixcclxuICBTVFlMRTQ6IExpc3RMYXlvdXRUeXBlLlJvdyxcclxuICBTVFlMRTU6IExpc3RMYXlvdXRUeXBlLlJvdyxcclxuICBTVFlMRTY6IExpc3RMYXlvdXRUeXBlLlJvdyxcclxuICBTVFlMRTc6IExpc3RMYXlvdXRUeXBlLlJvdyxcclxuICBTVFlMRTg6IExpc3RMYXlvdXRUeXBlLkdSSUQsXHJcbiAgU1RZTEU5OiBMaXN0TGF5b3V0VHlwZS5HUklEXHJcbn1cclxuXHJcbmxldCBBbGxTdHlsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGUgfVxyXG5jb25zdCBNRVNTQUdFUyA9IE9iamVjdC5hc3NpZ24oXHJcbiAge30sXHJcbiAgZGVmYXVsdE1lc3NhZ2VzLFxyXG4gIGppbXVVSURlZmF1bHRNZXNzYWdlcyxcclxuICBqaW11TGF5b3V0c0RlZmF1bHRNZXNzYWdlc1xyXG4pXHJcblxyXG5mdW5jdGlvbiBpbml0U3R5bGVzICh3aWRnZXRJZDogc3RyaW5nKSB7XHJcbiAgaWYgKEFsbFN0eWxlcykge1xyXG4gICAgcmV0dXJuIEFsbFN0eWxlc1xyXG4gIH1cclxuICBBbGxTdHlsZXMgPSB7fVxyXG4gIE9iamVjdC5rZXlzKG9yaWdpbkFsbFN0eWxlcykuZm9yRWFjaChzdHlsZSA9PiB7XHJcbiAgICBBbGxTdHlsZXNbc3R5bGVdID0gdGVtcGxhdGVVdGlscy5wcm9jZXNzRm9yVGVtcGxhdGUoXHJcbiAgICAgIG9yaWdpbkFsbFN0eWxlc1tzdHlsZV0sXHJcbiAgICAgIHdpZGdldElkLFxyXG4gICAgICBNRVNTQUdFU1xyXG4gICAgKVxyXG4gIH0pXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgZGF0YXNvdXJjZTogRGF0YVNvdXJjZVxyXG4gIGlzVGV4dEV4cFBvcHVwT3BlbjogYm9vbGVhblxyXG4gIGN1cnJlbnRUZXh0SW5wdXQ6IHN0cmluZ1xyXG4gIGlzVGlwRXhwUG9wdXBPcGVuOiBib29sZWFuXHJcbiAgaXNTcWxFeHByU2hvdzogYm9vbGVhblxyXG4gIGlzVGVtcGxhdGVDb250YWluU2Nyb2xsOiBib29sZWFuXHJcbiAgdGVtcGxhdGVDb25XaWR0aDogbnVtYmVyXHJcbiAgc2V0dGluZ0NvbGxhcHNlOiBTZXR0aW5nQ29sbGFwc2VUeXBlXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBhcHBDb25maWc6IElNQXBwQ29uZmlnXHJcbiAgYXBwTW9kZTogQXBwTW9kZVxyXG4gIGJyb3dzZXJTaXplTW9kZTogQnJvd3NlclNpemVNb2RlXHJcbiAgc2hvd0NhcmRTZXR0aW5nOiBTdGF0dXNcclxuICBzZWxlY3Rpb25Jc0luU2VsZjogYm9vbGVhblxyXG4gIHNldHRpbmdQYW5lbENoYW5nZTogc3RyaW5nXHJcbiAgbGF5b3V0SW5mbzogTGF5b3V0SW5mb1xyXG4gIHdpZGdldFJlY3Q6IEVsZW1lbnRTaXplXHJcbiAgcGFyZW50U2l6ZTogRWxlbWVudFNpemVcclxuICB2aWV3cG9ydFNpemU/OiBTaXplXHJcbn1cclxuXHJcbmludGVyZmFjZSBDdXN0b21lUHJvcHMge1xyXG4gIHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzXHJcbn1cclxuXHJcbmNvbnN0IERTU2VsZWN0b3JUeXBlcyA9IEltbXV0YWJsZShbXHJcbiAgQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcixcclxuICBBbGxEYXRhU291cmNlVHlwZXMuU2NlbmVMYXllclxyXG5dKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzICYgQ3VzdG9tZVByb3BzLFxyXG5TdGF0ZVxyXG4+IHtcclxuICBuZWVkVXBkYXRlRmllbGRzOiBib29sZWFuXHJcbiAgbGlzdFVzZVRpcFJlZjogYW55XHJcbiAgdGVtcGxhdGVzQ29udGFpbjogSFRNTEVsZW1lbnRcclxuICB0b0hvdmVyU2V0dGluZ0J1dHRvblJlZjogSFRNTEJ1dHRvbkVsZW1lbnRcclxuICB0b1NlbGVjdGVkU2V0dGluZ0J1dHRvblJlZjogSFRNTEJ1dHRvbkVsZW1lbnRcclxuICB1cGRhdGVQb3NpdGlvblRpbWVvdXQ6IGFueVxyXG4gIGlzUHJlRGF0YVNvdXJjZVJlZnJlc2hPcGVuOiBib29sZWFuXHJcbiAgZGVib3VuY2VHcmlkSXRlbVNpemVSYXRpb0NoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcclxuICBsYXN0SG92ZXJMYXlvdXQgPSB7XHJcbiAgICBsYXlvdXQ6IFtdLFxyXG4gICAgd2lkZ2V0czoge31cclxuICB9XHJcblxyXG4gIGxhc3RTZWxlY3RlZExheW91dCA9IHtcclxuICAgIGxheW91dDogW10sXHJcbiAgICB3aWRnZXRzOiB7fVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChcclxuICAgIHN0YXRlOiBJTVN0YXRlLFxyXG4gICAgcHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHByb3BzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhcHBDb25maWc6XHJcbiAgICAgICAgc3RhdGUgJiYgc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIgJiYgc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnLFxyXG4gICAgICBhcHBNb2RlOlxyXG4gICAgICAgIHN0YXRlICYmXHJcbiAgICAgICAgc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIgJiZcclxuICAgICAgICBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlci5hcHBSdW50aW1lSW5mbyAmJlxyXG4gICAgICAgIHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyLmFwcFJ1bnRpbWVJbmZvLmFwcE1vZGUsXHJcbiAgICAgIGJyb3dzZXJTaXplTW9kZTpcclxuICAgICAgICBzdGF0ZSAmJlxyXG4gICAgICAgIHN0YXRlLmFwcFN0YXRlSW5CdWlsZGVyICYmXHJcbiAgICAgICAgc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIuYnJvd3NlclNpemVNb2RlLFxyXG4gICAgICBzaG93Q2FyZFNldHRpbmc6XHJcbiAgICAgICAgKHN0YXRlICYmXHJcbiAgICAgICAgICBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlciAmJlxyXG4gICAgICAgICAgc3RhdGUuYXBwU3RhdGVJbkJ1aWxkZXIud2lkZ2V0c1N0YXRlICYmXHJcbiAgICAgICAgICBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlci53aWRnZXRzU3RhdGVbaWRdICYmXHJcbiAgICAgICAgICBzdGF0ZS5hcHBTdGF0ZUluQnVpbGRlci53aWRnZXRzU3RhdGVbaWRdLnNob3dDYXJkU2V0dGluZykgfHxcclxuICAgICAgICBTdGF0dXMuUmVndWxhcixcclxuICAgICAgc2VsZWN0aW9uSXNJblNlbGY6XHJcbiAgICAgICAgc3RhdGU/LmFwcFN0YXRlSW5CdWlsZGVyPy53aWRnZXRzU3RhdGVbaWRdPy5zZWxlY3Rpb25Jc0luU2VsZixcclxuICAgICAgc2V0dGluZ1BhbmVsQ2hhbmdlOiBzdGF0ZT8ud2lkZ2V0c1N0YXRlPy5bcHJvcHMuaWRdPy5zZXR0aW5nUGFuZWxDaGFuZ2UsXHJcbiAgICAgIGxheW91dEluZm86IHN0YXRlPy5hcHBTdGF0ZUluQnVpbGRlcj8ud2lkZ2V0c1N0YXRlW2lkXT8ubGF5b3V0SW5mbyxcclxuICAgICAgd2lkZ2V0UmVjdDogc3RhdGU/LmFwcFN0YXRlSW5CdWlsZGVyPy53aWRnZXRzU3RhdGVbaWRdPy53aWRnZXRSZWN0LFxyXG4gICAgICBwYXJlbnRTaXplOiBzdGF0ZT8uYXBwU3RhdGVJbkJ1aWxkZXI/LndpZGdldHNTdGF0ZVtpZF0/LnBhcmVudFNpemUsXHJcbiAgICAgIHZpZXdwb3J0U2l6ZTogamltdVV0aWxzLmZpbmRWaWV3cG9ydFNpemUoc3RhdGU/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcsIHN0YXRlPy5hcHBTdGF0ZUluQnVpbGRlcj8uYnJvd3NlclNpemVNb2RlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIGluaXRTdHlsZXMocHJvcHMuaWQpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkYXRhc291cmNlOiBudWxsLFxyXG4gICAgICBpc1RleHRFeHBQb3B1cE9wZW46IGZhbHNlLFxyXG4gICAgICBjdXJyZW50VGV4dElucHV0OiAnJyxcclxuICAgICAgaXNUaXBFeHBQb3B1cE9wZW46IGZhbHNlLFxyXG4gICAgICBpc1NxbEV4cHJTaG93OiBmYWxzZSxcclxuICAgICAgaXNUZW1wbGF0ZUNvbnRhaW5TY3JvbGw6IGZhbHNlLFxyXG4gICAgICB0ZW1wbGF0ZUNvbldpZHRoOiAwLFxyXG4gICAgICBzZXR0aW5nQ29sbGFwc2U6IFNldHRpbmdDb2xsYXBzZVR5cGUuTm9uZVxyXG4gICAgfVxyXG4gICAgdGhpcy5saXN0VXNlVGlwUmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgIHRoaXMuZGVib3VuY2VHcmlkSXRlbVNpemVSYXRpb0NoYW5nZSA9IGxvZGFzaC5kZWJvdW5jZShcclxuICAgICAgKHZhbHVlKSA9PiB7IHRoaXMuaGFuZGxlR3JpZEl0ZW1TaXplUmF0aW9DaGFuZ2UodmFsdWUpIH0sXHJcbiAgICAgIDIwMFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgY29uc3QgeyBjb25maWcsIGlkLCB1c2VEYXRhU291cmNlc0VuYWJsZWQgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCB7IGFwcENvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKCFjb25maWcuaXNJbml0aWFsZWQpIHtcclxuICAgICAgaWYgKCF1c2VEYXRhU291cmNlc0VuYWJsZWQpIHtcclxuICAgICAgICBhcHBDb25maWcgPSBnZXRBcHBDb25maWdBY3Rpb24oKS5lZGl0V2lkZ2V0KFxyXG4gICAgICAgICAgYXBwQ29uZmlnLndpZGdldHNbaWRdLnNldCgndXNlRGF0YVNvdXJjZXNFbmFibGVkJywgdHJ1ZSkgYXMgYW55XHJcbiAgICAgICAgKS5hcHBDb25maWdcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uSXRlbVN0eWxlQ2hhbmdlZChjb25maWcuaXRlbVN0eWxlLCBjb25maWc/LmlzQ2hlY2tFbXB0eVRlbXBsYXRlLCBhcHBDb25maWcpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU3RhcnRCdXR0b25Qb3NpdGlvbilcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGlkIH0gPSB0aGlzLnByb3BzXHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoaWQsICdzZXR0aW5nUGFuZWxDaGFuZ2UnLCBudWxsKVxyXG4gICAgKVxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlUG9zaXRpb25UaW1lb3V0KVxyXG4gIH1cclxuXHJcbiAgb25Qcm9wZXJ0eUNoYW5nZSA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAodmFsdWUgPT09IGNvbmZpZ1tuYW1lXSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChuYW1lID09PSAnc29ydHMnIHx8IG5hbWUgPT09ICdmaWx0ZXInIHx8IG5hbWUgPT09ICdzZWFyY2hGaWVsZHMnKSB7XHJcbiAgICAgIHRoaXMubmVlZFVwZGF0ZUZpZWxkcyA9IHRydWVcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGNvbmZpZy5zZXQobmFtZSwgdmFsdWUpXHJcbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZylcclxuICB9XHJcblxyXG4gIGNoYW5nZVVzZWRGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZURhdGFTb3VyY2VzIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXNbMF0pIHtcclxuICAgICAgY29uc3QgdXNlRFMgPSB1c2VEYXRhU291cmNlc1swXS5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgICAgIHVzZURTLmZpZWxkcyA9IHRoaXMuZ2V0QWxsRmllbGRzKClcclxuICAgICAgY29uc3QgYWx0ZXJQcm9wcyA9IHtcclxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICB1c2VEYXRhU291cmNlczogW3VzZURTXVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKGFsdGVyUHJvcHMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNvbmZpZ0NoYW5nZSA9IG5ld0NvbmZpZyA9PiB7XHJcbiAgICBjb25zdCBhbHRlclByb3BzID0ge1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKGFsdGVyUHJvcHMpXHJcbiAgfVxyXG5cclxuICBvbkJhY2tncm91bmRTdHlsZUNoYW5nZSA9IChzdGF0dXM6IFN0YXR1cywga2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25maWcgPSBjb25maWcuc2V0SW4oXHJcbiAgICAgIFsnY2FyZENvbmZpZ3MnLCBzdGF0dXMsICdiYWNrZ3JvdW5kU3R5bGUnLCBrZXldLFxyXG4gICAgICB2YWx1ZVxyXG4gICAgKVxyXG4gICAgdGhpcy5vbkNvbmZpZ0NoYW5nZShjb25maWcpXHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbk1vZGVDaGFuZ2UgPSBldnQgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbk1vZGUodmFsdWUpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGNoYW5nZVNlbGVjdGlvbk1vZGUgPSAodmFsdWU6IFNlbGVjdGlvbk1vZGVUeXBlKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCBsYXlvdXRzLCBicm93c2VyU2l6ZU1vZGUsIGFwcENvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgbGV0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBzZWxlY3Rpb25Nb2RlID0gY29uZmlnLmNhcmRDb25maWdzW1N0YXR1cy5TZWxlY3RlZF0uc2VsZWN0aW9uTW9kZVxyXG4gICAgY29uc3QgbGlzdExheW91dCA9IGNvbmZpZy5jYXJkQ29uZmlnc1tTdGF0dXMuU2VsZWN0ZWRdLmxpc3RMYXlvdXQgfHwgTGlzdExheW91dC5DVVNUT01cclxuICAgIGlmIChzZWxlY3Rpb25Nb2RlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBhY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oKVxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldEluKFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuU2VsZWN0ZWQsICdzZWxlY3Rpb25Nb2RlJ10sIHZhbHVlKVxyXG4gICAgaWYgKHNlbGVjdGlvbk1vZGUgIT09IFNlbGVjdGlvbk1vZGVUeXBlLk5vbmUgJiYgdmFsdWUgPT09IFNlbGVjdGlvbk1vZGVUeXBlLk5vbmUpIHtcclxuICAgICAgaWYgKGxpc3RMYXlvdXQgPT09IExpc3RMYXlvdXQuQ1VTVE9NKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGxheW91dFxyXG4gICAgICAgIGNvbnN0IGRlc0xheW91dElkID0gc2VhcmNoVXRpbHMuZmluZExheW91dElkKFxyXG4gICAgICAgICAgbGF5b3V0c1tTdGF0dXMuU2VsZWN0ZWRdLFxyXG4gICAgICAgICAgYnJvd3NlclNpemVNb2RlLFxyXG4gICAgICAgICAgYXBwQ29uZmlnLm1haW5TaXplTW9kZVxyXG4gICAgICAgIClcclxuICAgICAgICBhY3Rpb24gPSBhY3Rpb24ucmVzZXRMYXlvdXQoZGVzTGF5b3V0SWQsIHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgYWN0aW9uLmVkaXRXaWRnZXRDb25maWcoaWQsIGNvbmZpZykuZXhlYygpXHJcbiAgICAgIHRoaXMuY2hhbmdlQnVpbGRlclN0YXR1cyhTdGF0dXMuUmVndWxhcilcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uTW9kZSA9PT0gU2VsZWN0aW9uTW9kZVR5cGUuTm9uZSAmJiB2YWx1ZSAhPT0gU2VsZWN0aW9uTW9kZVR5cGUuTm9uZSkge1xyXG4gICAgICB0aGlzLnNldExheW91dEF1dG8oU3RhdHVzLlNlbGVjdGVkLCBjb25maWcpXHJcbiAgICAgIHRoaXMuY2hhbmdlQnVpbGRlclN0YXR1cyhTdGF0dXMuU2VsZWN0ZWQpXHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbk1vZGUgIT09IFNlbGVjdGlvbk1vZGVUeXBlLk5vbmUgJiYgdmFsdWUgIT09IFNlbGVjdGlvbk1vZGVUeXBlLk5vbmUpIHtcclxuICAgICAgYWN0aW9uLmVkaXRXaWRnZXRDb25maWcoaWQsIGNvbmZpZykuZXhlYygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvblN3aXRjaCA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlU2VsZWN0aW9uTW9kZShTZWxlY3Rpb25Nb2RlVHlwZS5TaW5nbGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoYW5nZVNlbGVjdGlvbk1vZGUoU2VsZWN0aW9uTW9kZVR5cGUuTm9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSG92ZXJMYXlvdXRPcGVuQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnLCBpZCwgbGF5b3V0cywgYnJvd3NlclNpemVNb2RlLCBhcHBDb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGxpc3RMYXlvdXQgPSBjb25maWc/LmNhcmRDb25maWdzPy5bU3RhdHVzLkhvdmVyXT8ubGlzdExheW91dCB8fCBMaXN0TGF5b3V0LkNVU1RPTVxyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LmNoZWNrZWRcclxuICAgIGlmIChjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLkhvdmVyXS5lbmFibGUgPT09IHZhbHVlKSByZXR1cm5cclxuICAgIGxldCBhY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oKVxyXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZy5zZXRJbihbJ2NhcmRDb25maWdzJywgU3RhdHVzLkhvdmVyLCAnZW5hYmxlJ10sIHZhbHVlKVxyXG4gICAgbmV3Q29uZmlnID0gbmV3Q29uZmlnLnNldEluKFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuSG92ZXIsICdsaXN0TGF5b3V0J10sIExpc3RMYXlvdXQuQVVUTylcclxuICAgIGlmIChjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLkhvdmVyXS5lbmFibGUgJiYgIXZhbHVlKSB7XHJcbiAgICAgIGlmIChsaXN0TGF5b3V0ID09PSBMaXN0TGF5b3V0LkNVU1RPTSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSBob3ZlciBsYXlvdXRcclxuICAgICAgICBjb25zdCBkZXNMYXlvdXRJZCA9IHNlYXJjaFV0aWxzLmZpbmRMYXlvdXRJZChcclxuICAgICAgICAgIGxheW91dHNbU3RhdHVzLkhvdmVyXSxcclxuICAgICAgICAgIGJyb3dzZXJTaXplTW9kZSxcclxuICAgICAgICAgIGFwcENvbmZpZy5tYWluU2l6ZU1vZGVcclxuICAgICAgICApXHJcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uLnJlc2V0TGF5b3V0KGRlc0xheW91dElkLCB0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hhbmdlQnVpbGRlclN0YXR1cyhTdGF0dXMuUmVndWxhcilcclxuICAgICAgYWN0aW9uLmVkaXRXaWRnZXRDb25maWcoaWQsIG5ld0NvbmZpZykuZXhlYygpXHJcbiAgICB9IGVsc2UgaWYgKCFjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLkhvdmVyXS5lbmFibGUgJiYgdmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRMYXlvdXRBdXRvKFN0YXR1cy5Ib3ZlciwgbmV3Q29uZmlnKVxyXG4gICAgICB0aGlzLmNoYW5nZUJ1aWxkZXJTdGF0dXMoU3RhdHVzLkhvdmVyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TGF5b3V0QXV0byA9IChzdGF0dXM6IFN0YXR1cywgbmV3Q29uZmlnOiBJTUNvbmZpZykgPT4ge1xyXG4gICAgY29uc3QgeyBsYXlvdXRzLCBicm93c2VyU2l6ZU1vZGUsIGFwcENvbmZpZywgaWQgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHJlZ3VsYXJMYXlvdXRJZCA9IHNlYXJjaFV0aWxzLmZpbmRMYXlvdXRJZChsYXlvdXRzW1N0YXR1cy5SZWd1bGFyXSwgYnJvd3NlclNpemVNb2RlLCBhcHBDb25maWcubWFpblNpemVNb2RlKVxyXG4gICAgY29uc3QgZGVzTGF5b3V0SWQgPSBzZWFyY2hVdGlscy5maW5kTGF5b3V0SWQobGF5b3V0c1tzdGF0dXNdLCBicm93c2VyU2l6ZU1vZGUsIGFwcENvbmZpZy5tYWluU2l6ZU1vZGUpXHJcbiAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHtcclxuICAgICAgbGF5b3V0OiBMaXN0TGF5b3V0LkFVVE8sXHJcbiAgICAgIGNvbmZpZzogbmV3Q29uZmlnLFxyXG4gICAgICB3aWRnZXRJZDogaWQsXHJcbiAgICAgIGFwcENvbmZpZzogYXBwQ29uZmlnLFxyXG4gICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgcmVndWxhckxheW91dElkOiByZWd1bGFyTGF5b3V0SWQsXHJcbiAgICAgIGRlc0xheW91dElkOiBkZXNMYXlvdXRJZFxyXG4gICAgfVxyXG4gICAgc2V0TGF5b3V0QXV0byhvcHRpb24pXHJcbiAgfVxyXG5cclxuICBvbk9wZW5DYXJkU2V0dGluZyA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSBldnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlXHJcbiAgICB0aGlzLmNoYW5nZUNhcmRTZXR0aW5nQW5kQnVpbGRlclN0YXR1cyhzdGF0dXMpXHJcbiAgfVxyXG5cclxuICAvLyBFeHBvcnQgbGlzdCB0ZW1wbGF0ZSwgdXNlIGl0IGluIGEgc2luZ2xlIGZ1bGxzY3JlZW4gcGFnZVxyXG4gIG9uRXhwb3J0Q2xpY2sgPSBldnQgPT4ge1xyXG4gICAgY29uc3QgeyBhcHBDb25maWcsIGxheW91dHMsIGlkLCBicm93c2VyU2l6ZU1vZGUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlSWQgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXJcclxuICAgICAgLmFwcFJ1bnRpbWVJbmZvLmN1cnJlbnRQYWdlSWRcclxuICAgIGNvbnN0IHBhZ2VKc29uID1cclxuICAgICAgYXBwQ29uZmlnLnBhZ2VzW2N1cnJlbnRQYWdlSWQgPT09ICdkZWZhdWx0JyA/ICdob21lJyA6IGN1cnJlbnRQYWdlSWRdXHJcbiAgICBjb25zdCB3aWRnZXRzID0gSW1tdXRhYmxlKGFwcENvbmZpZy53aWRnZXRzLndpdGhvdXQoaWQpKS5zZXQoJ3dpZGdldF94JywgYXBwQ29uZmlnLndpZGdldHNbaWRdKVxyXG4gICAgY29uc3QgcGFnZVRlbXBsYXRlcyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHdpZGdldElkOiBpZCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIGxheW91dHM6IGFwcENvbmZpZy5sYXlvdXRzLndpdGhvdXQoXHJcbiAgICAgICAgICAgIHBhZ2VKc29uLmxheW91dFticm93c2VyU2l6ZU1vZGVdLFxyXG4gICAgICAgICAgICBsYXlvdXRzW1N0YXR1cy5TZWxlY3RlZF1bYnJvd3NlclNpemVNb2RlXSxcclxuICAgICAgICAgICAgbGF5b3V0c1tTdGF0dXMuSG92ZXJdW2Jyb3dzZXJTaXplTW9kZV1cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICB3aWRnZXRzOiB3aWRnZXRzLFxyXG4gICAgICAgICAgdmlld3M6IGFwcENvbmZpZy52aWV3cyxcclxuICAgICAgICAgIHNlY3Rpb25zOiBhcHBDb25maWcuc2VjdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZTAgPSBwYWdlVGVtcGxhdGVzWzBdXHJcbiAgICB0ZW1wbGF0ZTAuY29uZmlnLmxheW91dHMgJiZcclxuICAgICAgT2JqZWN0LmtleXModGVtcGxhdGUwLmNvbmZpZy5sYXlvdXRzKS5mb3JFYWNoKGxheW91dElkID0+IHtcclxuICAgICAgICBsZXQgbGF5b3V0SnNvbiA9IHRlbXBsYXRlMC5jb25maWcubGF5b3V0c1tsYXlvdXRJZF0ud2l0aG91dCgnaWQnKVxyXG4gICAgICAgIGxheW91dEpzb24uY29udGVudCAmJlxyXG4gICAgICAgICAgT2JqZWN0LmtleXMobGF5b3V0SnNvbi5jb250ZW50KS5mb3JFYWNoKGxFSWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsRUpzb24gPSAobGF5b3V0SnNvbi5jb250ZW50W2xFSWRdIGFzIGFueSlcclxuICAgICAgICAgICAgICAud2l0aG91dCgnaWQnLCAncGFyZW50SWQnLCAnbGF5b3V0SWQnKVxyXG4gICAgICAgICAgICAgIC5zZXRJbihbJ3NldHRpbmcnLCAnbG9ja1BhcmVudCddLCB0cnVlKVxyXG4gICAgICAgICAgICBsYXlvdXRKc29uID0gbGF5b3V0SnNvbi5zZXRJbihbJ2NvbnRlbnQnLCBsRUlkXSwgbEVKc29uKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB0ZW1wbGF0ZTAuY29uZmlnLmxheW91dHMgPSB0ZW1wbGF0ZTAuY29uZmlnLmxheW91dHMuc2V0KFxyXG4gICAgICAgICAgbGF5b3V0SWQsXHJcbiAgICAgICAgICBsYXlvdXRKc29uXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG5cclxuICAgIHRlbXBsYXRlMC5jb25maWcud2lkZ2V0cyAmJlxyXG4gICAgICBPYmplY3Qua2V5cyh0ZW1wbGF0ZTAuY29uZmlnLndpZGdldHMpLmZvckVhY2goKHdJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB3SnNvbiA9IHRlbXBsYXRlMC5jb25maWcud2lkZ2V0c1t3SWRdXHJcbiAgICAgICAgdGVtcGxhdGUwLmNvbmZpZy53aWRnZXRzID0gdGVtcGxhdGUwLmNvbmZpZy53aWRnZXRzLnNldChcclxuICAgICAgICAgIHdJZCxcclxuICAgICAgICAgIHdKc29uLndpdGhvdXQoXHJcbiAgICAgICAgICAgICdjb250ZXh0JyxcclxuICAgICAgICAgICAgJ2ljb24nLFxyXG4gICAgICAgICAgICAnbGFiZWwnLFxyXG4gICAgICAgICAgICAnbWFuaWZlc3QnLFxyXG4gICAgICAgICAgICAnX29yaWdpbk1hbmlmZXN0JyxcclxuICAgICAgICAgICAgJ3ZlcnNpb24nLFxyXG4gICAgICAgICAgICAnaWQnLFxyXG4gICAgICAgICAgICAndXNlRGF0YVNvdXJjZXNFbmFibGVkJyxcclxuICAgICAgICAgICAgJ3VzZURhdGFTb3VyY2VzJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuXHJcbiAgICB0ZW1wbGF0ZTAuY29uZmlnLnNlY3Rpb25zICYmXHJcbiAgICAgIE9iamVjdC5rZXlzKHRlbXBsYXRlMC5jb25maWcuc2VjdGlvbnMpLmZvckVhY2goKHNJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBzSnNvbiA9IHRlbXBsYXRlMC5jb25maWcuc2VjdGlvbnNbc0lkXVxyXG4gICAgICAgIHRlbXBsYXRlMC5jb25maWcuc2VjdGlvbnMgPSB0ZW1wbGF0ZTAuY29uZmlnLnNlY3Rpb25zLnNldChcclxuICAgICAgICAgIHNJZCxcclxuICAgICAgICAgIHNKc29uLndpdGhvdXQoJ2lkJywgJ2xhYmVsJylcclxuICAgICAgICApXHJcbiAgICAgIH0pXHJcblxyXG4gICAgdGVtcGxhdGUwLmNvbmZpZy52aWV3cyAmJlxyXG4gICAgICBPYmplY3Qua2V5cyh0ZW1wbGF0ZTAuY29uZmlnLnZpZXdzKS5mb3JFYWNoKCh2SWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgdkpzb24gPSB0ZW1wbGF0ZTAuY29uZmlnLnZpZXdzW3ZJZF1cclxuICAgICAgICB0ZW1wbGF0ZTAuY29uZmlnLnZpZXdzID0gdGVtcGxhdGUwLmNvbmZpZy52aWV3cy5zZXQoXHJcbiAgICAgICAgICB2SWQsXHJcbiAgICAgICAgICB2SnNvbi53aXRob3V0KCdpZCcsICdsYWJlbCcpXHJcbiAgICAgICAgKVxyXG4gICAgICB9KVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGFnZVRlbXBsYXRlc1swXSkpXHJcblxyXG4gICAgLy8gY29uc3Qgd0pzb24gPSBhcHBDb25maWcud2lkZ2V0c1t0aGlzLnByb3BzLmlkXTtcclxuICAgIC8vIGxldCBlbWJlZExheW91dEpzb24gPSBhcHBDb25maWcubGF5b3V0c1t3SnNvbi5sYXlvdXRzW1N0YXR1cy5SZWd1bGFyXS5MQVJHRV1cclxuXHJcbiAgICAvLyBjb25zdCB0ZW1wbGF0ZSA9IHtcclxuICAgIC8vICAgY2FyZFNpemU6IGNvbmZpZy5jYXJkU2l6ZSxcclxuICAgIC8vICAgY2FyZFNwYWNlOiBjb25maWcuc3BhY2UsXHJcbiAgICAvLyAgIGxheW91dDogW10sXHJcbiAgICAvLyAgIHdpZGdldHM6IHt9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBPYmplY3Qua2V5cyhlbWJlZExheW91dEpzb24pLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgLy8gICBpZihrZXkgPT09ICdpZCcgfHwga2V5ID09PSAnUk9PVF9JRCcpcmV0dXJuO1xyXG4gICAgLy8gICBsZXQgbGF5b3V0RWxlID0gZW1iZWRMYXlvdXRKc29uW2tleV07XHJcbiAgICAvLyAgIGlmIChsYXlvdXRFbGUudHlwZSA9PT0gTGF5b3V0SXRlbVR5cGUuV2lkZ2V0ICYmIGxheW91dEVsZS53aWRnZXRJZCl7XHJcbiAgICAvLyAgICAgdGVtcGxhdGUud2lkZ2V0c1tsYXlvdXRFbGUud2lkZ2V0SWRdID0gYXBwQ29uZmlnLndpZGdldHNbbGF5b3V0RWxlLndpZGdldElkXS53aXRob3V0KCdjb250ZXh0JywgJ2ljb24nLCAnbGFiZWwnLCAnbWFuaWZlc3QnLCAnX29yaWdpbk1hbmlmZXN0JywgJ3ZlcnNpb24nLCAndXNlRGF0YVNvdXJjZXMnKTtcclxuICAgIC8vICAgICB0ZW1wbGF0ZS5sYXlvdXQucHVzaChsYXlvdXRFbGUpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRlbXBsYXRlKSk7XHJcbiAgfVxyXG5cclxuICBvbkNhcmRTZXR0aW5nUmV0dXJuQmFja0NsaWNrID0gZXZ0ID0+IHtcclxuICAgIGNvbnN0IHsgc2hvd0NhcmRTZXR0aW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICB0aGlzLmNoYW5nZUNhcmRTZXR0aW5nQW5kQnVpbGRlclN0YXR1cyhTdGF0dXMuUmVndWxhcilcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoc2hvd0NhcmRTZXR0aW5nID09PSBTdGF0dXMuSG92ZXIpIHtcclxuICAgICAgICB0aGlzLnRvSG92ZXJTZXR0aW5nQnV0dG9uUmVmLmZvY3VzKClcclxuICAgICAgfVxyXG4gICAgICBpZiAoc2hvd0NhcmRTZXR0aW5nID09PSBTdGF0dXMuU2VsZWN0ZWQpIHtcclxuICAgICAgICB0aGlzLnRvU2VsZWN0ZWRTZXR0aW5nQnV0dG9uUmVmPy5mb2N1cygpXHJcbiAgICAgIH1cclxuICAgIH0sIDEwMClcclxuICB9XHJcblxyXG4gIHNob3dTcWxFeHByUG9wdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU3FsRXhwclBvcHVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpc1NxbEV4cHJTaG93IH0gPSB0aGlzLnN0YXRlXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogIWlzU3FsRXhwclNob3cgfSlcclxuICB9XHJcblxyXG4gIG9uU3FsRXhwckJ1aWxkZXJDaGFuZ2UgPSAoc3FsRXhwck9iajogSU1TcWxFeHByZXNzaW9uKSA9PiB7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ2ZpbHRlcicsIHNxbEV4cHJPYmopXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGNoYW5nZUNhcmRTZXR0aW5nQW5kQnVpbGRlclN0YXR1cyA9IChzdGF0dXM6IFN0YXR1cykgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBidWlsZGVyQXBwU3luYy5wdWJsaXNoQ2hhbmdlV2lkZ2V0U3RhdGVQcm9wVG9BcHAoe1xyXG4gICAgICB3aWRnZXRJZDogaWQsXHJcbiAgICAgIHByb3BLZXk6ICdzaG93Q2FyZFNldHRpbmcnLFxyXG4gICAgICB2YWx1ZTogc3RhdHVzXHJcbiAgICB9KVxyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0dXMgPT09IFN0YXR1cy5SZWd1bGFyIHx8XHJcbiAgICAgIChzdGF0dXMgPT09IFN0YXR1cy5Ib3ZlciAmJiBjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLkhvdmVyXS5lbmFibGUpIHx8XHJcbiAgICAgIChzdGF0dXMgPT09IFN0YXR1cy5TZWxlY3RlZCAmJlxyXG4gICAgICAgIGNvbmZpZy5jYXJkQ29uZmlnc1tTdGF0dXMuU2VsZWN0ZWRdLnNlbGVjdGlvbk1vZGUgIT09XHJcbiAgICAgICAgICBTZWxlY3Rpb25Nb2RlVHlwZS5Ob25lKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlQnVpbGRlclN0YXR1cyhzdGF0dXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHN3aXRjaExvYWRpbmcgPSAoc2hvdzogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVdpZGdldFN0YXRlUHJvcFRvQXBwKHtcclxuICAgICAgd2lkZ2V0SWQ6IGlkLFxyXG4gICAgICBwcm9wS2V5OiAnc2hvd0xvYWRpbmcnLFxyXG4gICAgICB2YWx1ZTogc2hvd1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlQnVpbGRlclN0YXR1cyA9IChzdGF0dXM6IFN0YXR1cykgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVdpZGdldFN0YXRlUHJvcFRvQXBwKHtcclxuICAgICAgd2lkZ2V0SWQ6IGlkLFxyXG4gICAgICBwcm9wS2V5OiAnYnVpbGRlclN0YXR1cycsXHJcbiAgICAgIHZhbHVlOiBzdGF0dXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkl0ZW1TdHlsZUNoYW5nZWQgPSAoc3R5bGU6IEl0ZW1TdHlsZSwgaXNDaGVja0VtcHR5VGVtcGxhdGUgPSBmYWxzZSwgdXBkYXRlZEFwcENvbmZpZyA9IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgLy8gaWYodGhpcy5wcm9wcy5hcHBNb2RlID09PSBBcHBNb2RlLlJ1bikgcmV0dXJuO1xyXG4gICAgdGhpcy5zd2l0Y2hMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzXHJcbiAgICBsZXQgeyBhcHBDb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmICh1cGRhdGVkQXBwQ29uZmlnKSB7XHJcbiAgICAgIGFwcENvbmZpZyA9IHVwZGF0ZWRBcHBDb25maWdcclxuICAgIH1cclxuICAgIGxldCBzdHlsZVRlbXAgPSBBbGxTdHlsZXNbc3R5bGVdXHJcbiAgICBpZiAoaXNDaGVja0VtcHR5VGVtcGxhdGUpIHtcclxuICAgICAgc3R5bGVUZW1wID0gdGhpcy5nZXRFbXB0eVRlbXBsYXRlKHN0eWxlKVxyXG4gICAgfVxyXG4gICAgdGVtcGxhdGVVdGlsc1xyXG4gICAgICAudXBkYXRlV2lkZ2V0QnlUZW1wbGF0ZShcclxuICAgICAgICBhcHBDb25maWcsXHJcbiAgICAgICAgc3R5bGVUZW1wLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHN0eWxlVGVtcC53aWRnZXRJZCxcclxuICAgICAgICB7fSxcclxuICAgICAgICBkZWZhdWx0TWVzc2FnZXNcclxuICAgICAgKVxyXG4gICAgICAudGhlbihuZXdBcHBDb25maWcgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uSXRlbVN0eWxlQ2hhbmdlKG5ld0FwcENvbmZpZywgc3R5bGUsIGlzQ2hlY2tFbXB0eVRlbXBsYXRlKVxyXG4gICAgICAgIHRoaXMuc3dpdGNoTG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldEVtcHR5VGVtcGxhdGUgPSAoc3R5bGU6IEl0ZW1TdHlsZSkgPT4ge1xyXG4gICAgY29uc3Qgc3R5bGVUZW1wID0gQWxsU3R5bGVzW3N0eWxlXVxyXG4gICAgY29uc3QgbGF5b3V0cyA9IHN0eWxlVGVtcD8uY29uZmlnPy5sYXlvdXRzIHx8IHt9XHJcbiAgICBjb25zdCB3aWRnZXRzID0gc3R5bGVUZW1wPy5jb25maWc/LndpZGdldHMgfHwge31cclxuICAgIGxldCBuZXdTdHlsZSA9IEltbXV0YWJsZShBbGxTdHlsZXNbc3R5bGVdKVxyXG4gICAgbGV0IG5ld0xheW91dHMgPSBJbW11dGFibGUobGF5b3V0cylcclxuICAgIGZvciAoY29uc3QgbGF5b3V0SWQgaW4gbGF5b3V0cykge1xyXG4gICAgICBuZXdMYXlvdXRzID0gbmV3TGF5b3V0cy5zZXRJbihbbGF5b3V0SWQsICdjb250ZW50J10sIHt9KVxyXG4gICAgICBuZXdMYXlvdXRzID0gbmV3TGF5b3V0cy5zZXRJbihbbGF5b3V0SWQsICdvcmRlciddLCBbXSlcclxuICAgIH1cclxuICAgIG5ld1N0eWxlID0gbmV3U3R5bGUuc2V0SW4oWydjb25maWcnLCAnbGF5b3V0cyddLCBuZXdMYXlvdXRzKVxyXG4gICAgbmV3U3R5bGUgPSBuZXdTdHlsZS5zZXRJbihbJ2NvbmZpZycsICd3aWRnZXRzJ10sIHtcclxuICAgICAgd2lkZ2V0X3g6IHdpZGdldHM/LndpZGdldF94XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG5ld1N0eWxlPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGdldENhcmRTaXplVW5pdCA9IChwcm9wcyk6IEVsZW1lbnRTaXplVW5pdCA9PiB7XHJcbiAgICBwcm9wcyA9IHByb3BzIHx8IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgY29uZmlnLCBidWlsZGVyU3RhdHVzLCBicm93c2VyU2l6ZU1vZGUgfSA9IHByb3BzXHJcbiAgICBsZXQgY2FyZENvbmZpZ3MgPSBjb25maWcuY2FyZENvbmZpZ3NbYnVpbGRlclN0YXR1c11cclxuICAgIGlmICghY2FyZENvbmZpZ3MgfHwgIWNhcmRDb25maWdzLmNhcmRTaXplKSB7XHJcbiAgICAgIGNhcmRDb25maWdzID0gY29uZmlnLmNhcmRDb25maWdzW1N0YXR1cy5SZWd1bGFyXVxyXG4gICAgfVxyXG4gICAgbGV0IGNhcmRTaXplID0gY2FyZENvbmZpZ3MuY2FyZFNpemVbYnJvd3NlclNpemVNb2RlXVxyXG4gICAgaWYgKCFjYXJkU2l6ZSkge1xyXG4gICAgICBjYXJkU2l6ZSA9IGNhcmRDb25maWdzLmNhcmRTaXplW09iamVjdC5rZXlzKGNhcmRDb25maWdzLmNhcmRTaXplKVswXV1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiB1aVV0aWxzLnRvTGluZWFyVW5pdChjYXJkU2l6ZS53aWR0aCksXHJcbiAgICAgIGhlaWdodDogdWlVdGlscy50b0xpbmVhclVuaXQoY2FyZFNpemUuaGVpZ2h0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRm9ybUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldnQuY3VycmVudFRhcmdldFxyXG4gICAgaWYgKCF0YXJnZXQpIHJldHVyblxyXG4gICAgY29uc3QgZmllbGQgPSB0YXJnZXQuZGF0YXNldC5maWVsZFxyXG4gICAgY29uc3QgdHlwZSA9IHRhcmdldC50eXBlXHJcbiAgICBsZXQgdmFsdWVcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdyYW5nZSc6XHJcbiAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHRhcmdldC52YWx1ZSlcclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgIGNvbnN0IG51bWJlcnR5cGUgPSB0YXJnZXQuZGF0YXNldC5udW1iZXJ0eXBlXHJcbiAgICAgICAgY29uc3QgcGFyc2VOdW1iZXIgPSBudW1iZXJ0eXBlID09PSAnZmxvYXQnID8gcGFyc2VGbG9hdCA6IHBhcnNlSW50XHJcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSAhIXRhcmdldC5taW4gJiYgcGFyc2VOdW1iZXIodGFyZ2V0Lm1pbilcclxuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9ICEhdGFyZ2V0Lm1heCAmJiBwYXJzZU51bWJlcih0YXJnZXQubWF4KVxyXG4gICAgICAgIHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09ICcnKSByZXR1cm5cclxuICAgICAgICB2YWx1ZSA9IHBhcnNlTnVtYmVyKGV2dC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgaWYgKCEhbWluVmFsdWUgJiYgdmFsdWUgPCBtaW5WYWx1ZSkge1xyXG4gICAgICAgICAgdmFsdWUgPSBtaW5WYWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISFtYXhWYWx1ZSAmJiB2YWx1ZSA+IG1heFZhbHVlKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IG1heFZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWVcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKGZpZWxkLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKGRhdGFGaWVsZDogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIWRhdGFGaWVsZCkgcmV0dXJuIGZhbHNlXHJcbiAgICBjb25zdCBjdXJyZW50Q2hlY2tib3hWYWx1ZSA9IHRoaXMucHJvcHMuY29uZmlnPy5bZGF0YUZpZWxkXVxyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKGRhdGFGaWVsZCwgIWN1cnJlbnRDaGVja2JveFZhbHVlKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXRlbXNQZXJQYWdlQ2hhbmdlID0gdmFsdWUgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgdmFsdWUgPSAnMSdcclxuICAgIH1cclxuICAgIGxldCB2YWx1ZUludCA9IHBhcnNlSW50KHZhbHVlKVxyXG4gICAgaWYgKHZhbHVlSW50IDwgMCkgdmFsdWVJbnQgPSAxXHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ2l0ZW1zUGVyUGFnZScsIHZhbHVlSW50KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsU3RlcENoYW5nZSA9ICh2YWx1ZUludDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodmFsdWVJbnQgPCAwKSB2YWx1ZUludCA9IDFcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnc2Nyb2xsU3RlcCcsIHZhbHVlSW50KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3BhY2VDaGFuZ2UgPSAodmFsdWVGbG9hdDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlRmxvYXQgJiYgdmFsdWVGbG9hdCAhPT0gMCkge1xyXG4gICAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ3NwYWNlJywgMClcclxuICAgIH1cclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnc3BhY2UnLCB2YWx1ZUZsb2F0KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSG9yaXpvbnRhbFNwYWNlQ2hhbmdlID0gKHZhbHVlRmxvYXQ6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZUZsb2F0ICYmIHZhbHVlRmxvYXQgIT09IDApIHtcclxuICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdob3Jpem9udGFsU3BhY2UnLCAwKVxyXG4gICAgfVxyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdob3Jpem9udGFsU3BhY2UnLCB2YWx1ZUZsb2F0KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVmVydGljYWxTcGFjZUNoYW5nZSA9ICh2YWx1ZUZsb2F0OiBudW1iZXIpID0+IHtcclxuICAgIGlmICghdmFsdWVGbG9hdCAmJiB2YWx1ZUZsb2F0ICE9PSAwKSB7XHJcbiAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgndmVydGljYWxTcGFjZScsIDApXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ3ZlcnRpY2FsU3BhY2UnLCB2YWx1ZUZsb2F0KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXRlbVNpemVDaGFuZ2UgPSAodmFsdWVJbnQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGlzSG9yaXpvbiA9IGNvbmZpZz8ubGF5b3V0VHlwZSA9PT0gTGlzdExheW91dFR5cGUuQ29sdW1uIHx8IGNvbmZpZy5kaXJlY3Rpb24gPT09IERpcmVjdGlvblR5cGUuSG9yaXpvblxyXG4gICAgY29uc3Qgb2xkQ2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgY29uc3QgcmF0aW8gPSBvbGRDYXJkU2l6ZS53aWR0aC5kaXN0YW5jZSAvIG9sZENhcmRTaXplLmhlaWdodC5kaXN0YW5jZVxyXG4gICAgY29uc3QgbmV3Q2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplKClcclxuICAgIHZhbHVlSW50ID0gdmFsdWVJbnQgPCBMSVNUX0NBUkRfTUlOX1NJWkUgPyBMSVNUX0NBUkRfTUlOX1NJWkUgOiB2YWx1ZUludFxyXG4gICAgaWYgKGlzSG9yaXpvbikge1xyXG4gICAgICBuZXdDYXJkU2l6ZS53aWR0aCA9IGAke3ZhbHVlSW50fXB4YFxyXG4gICAgICBpZiAoY29uZmlnLmxvY2tJdGVtUmF0aW8pIHtcclxuICAgICAgICBuZXdDYXJkU2l6ZS5oZWlnaHQgPSBgJHt2YWx1ZUludCAvIHJhdGlvfXB4YFxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdDYXJkU2l6ZS5oZWlnaHQgPSBgJHt2YWx1ZUludH1weGBcclxuICAgICAgaWYgKGNvbmZpZy5sb2NrSXRlbVJhdGlvKSB7XHJcbiAgICAgICAgbmV3Q2FyZFNpemUud2lkdGggPSBgJHt2YWx1ZUludCAqIHJhdGlvfXB4YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSZXNpemVDYXJkKHRoaXMucHJvcHMsIG5ld0NhcmRTaXplLCBjb25maWcpLmV4ZWMoKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZFNpemUgPSAoKTogQ2FyZFNpemUgPT4ge1xyXG4gICAgY29uc3Qgb2xkQ2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IHVpVXRpbHMuc3RyaW5nT2ZMaW5lYXJVbml0KG9sZENhcmRTaXplLndpZHRoKSxcclxuICAgICAgaGVpZ2h0OiB1aVV0aWxzLnN0cmluZ09mTGluZWFyVW5pdChvbGRDYXJkU2l6ZS5oZWlnaHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKFxyXG4gICAgcHJlUHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzICYgQ3VzdG9tZVByb3BzXHJcbiAgKSB7XHJcbiAgICBjb25zdCB7IHVzZURhdGFTb3VyY2VzLCBjb25maWcsIHNldHRpbmdQYW5lbENoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgLy8gaWYgZmllbGRzIHdpbGwgY2hhbmdlIGluIGNvbXBvbmVudERpZFVwZGF0ZVxyXG4gICAgbGV0IGZpZWxkc1dpbGxDaGFuZ2UgPSBmYWxzZVxyXG4gICAgaWYgKHVzZURhdGFTb3VyY2VzICE9PSBwcmVQcm9wcy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBjb25zdCBvbGQgPSBwcmVQcm9wcy51c2VEYXRhU291cmNlcz8uWzBdXHJcbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/LlswXVxyXG4gICAgICBpZiAoIW5vdyB8fCAhb2xkIHx8IG9sZD8uZGF0YVNvdXJjZUlkICE9PSBub3c/LmRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2UoXHJcbiAgICAgICAgICBjb25maWdcclxuICAgICAgICAgICAgLnNldCgnc29ydHMnLCB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC5zZXQoJ3NlYXJjaEZpZWxkcycsIHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLnNldCgnZmlsdGVyJywgdW5kZWZpbmVkKVxyXG4gICAgICAgIClcclxuICAgICAgICBmaWVsZHNXaWxsQ2hhbmdlID0gdHJ1ZVxyXG4gICAgICAgIGlmICghdGhpcy5uZWVkVXBkYXRlRmllbGRzKSB7XHJcbiAgICAgICAgICB0aGlzLm5lZWRVcGRhdGVGaWVsZHMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvbGQgJiYgIW5vdykge1xyXG4gICAgICAgICAgLy8gcmVtb3ZlIGZyb20gZHMgbWFuYWdlclxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhc291cmNlKHVuZGVmaW5lZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgICF1c2VEYXRhU291cmNlcyB8fFxyXG4gICAgICAgIHVzZURhdGFTb3VyY2VzLmxlbmd0aCA8IDEgfHxcclxuICAgICAgICAhcHJlUHJvcHMudXNlRGF0YVNvdXJjZXMgfHxcclxuICAgICAgICBwcmVQcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPCAxIHx8XHJcbiAgICAgICAgcHJlUHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkICE9PVxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMub25Db25maWdDaGFuZ2UoXHJcbiAgICAgICAgICBjb25maWdcclxuICAgICAgICAgICAgLnNldCgnc29ydHMnLCB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC5zZXQoJ3NlYXJjaEZpZWxkcycsIHVuZGVmaW5lZClcclxuICAgICAgICAgICAgLnNldCgnZmlsdGVyJywgdW5kZWZpbmVkKVxyXG4gICAgICAgIClcclxuICAgICAgICBmaWVsZHNXaWxsQ2hhbmdlID0gdHJ1ZVxyXG4gICAgICAgIGlmICghdGhpcy5uZWVkVXBkYXRlRmllbGRzKSB7XHJcbiAgICAgICAgICB0aGlzLm5lZWRVcGRhdGVGaWVsZHMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubmVlZFVwZGF0ZUZpZWxkcyAmJiAhZmllbGRzV2lsbENoYW5nZSkge1xyXG4gICAgICB0aGlzLm5lZWRVcGRhdGVGaWVsZHMgPSBmYWxzZVxyXG4gICAgICB0aGlzLmNoYW5nZVVzZWRGaWVsZHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmVQcm9wcy5zZXR0aW5nUGFuZWxDaGFuZ2UgIT09ICdjb250ZW50JyAmJiBzZXR0aW5nUGFuZWxDaGFuZ2UgPT09ICdjb250ZW50Jykge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN0YXJ0QnV0dG9uUG9zaXRpb24oKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZXR0aW5nU29ydENoYW5nZSA9IChzb3J0RGF0YTogU29ydFNldHRpbmdPcHRpb25bXSwgaW5kZXg/OiBudW1iZXIpID0+IHtcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnc29ydHMnLCBzb3J0RGF0YSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX29uSXRlbVN0eWxlQ2hhbmdlID0gKGFwcENvbmZpZzogSU1BcHBDb25maWcsIHN0eWxlLCBpc0NoZWNrRW1wdHlUZW1wbGF0ZSA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkLCBjb25maWc6IG9sZENvbmZpZywgYnJvd3NlclNpemVNb2RlIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBhcHBDb25maWdBY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oYXBwQ29uZmlnKVxyXG4gICAgbGV0IHdKc29uID0gYXBwQ29uZmlnLndpZGdldHNbaWRdXHJcbiAgICBjb25zdCB0ZW1wbGF0ZTogVGVtcGxhdGUgPSBBbGxTdHlsZXNbc3R5bGVdXHJcbiAgICBjb25zdCB0ZW1wbGF0ZVdpZGdldEpzb24gPSB0ZW1wbGF0ZS5jb25maWcud2lkZ2V0c1t0ZW1wbGF0ZS53aWRnZXRJZF1cclxuICAgIHdKc29uLmxheW91dHMgJiZcclxuICAgICAgT2JqZWN0LmtleXMod0pzb24ubGF5b3V0cykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICB3SnNvbi5sYXlvdXRzW25hbWVdICYmXHJcbiAgICAgICAgICBPYmplY3Qua2V5cyh3SnNvbi5sYXlvdXRzW25hbWVdKS5mb3JFYWNoKGRldmljZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZVdpZGdldEpzb24/LmxheW91dHM/LltuYW1lXT8uW2RldmljZV0gfHxcclxuICAgICAgICAgICAgICAhdGVtcGxhdGVXaWRnZXRKc29uPy5sYXlvdXRzXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSB3SnNvbi5jb25maWdcclxuICAgICAgICAgICAgLy8gSnVkZ2UgaWYgbGF5b3V0IGlzIGVtcHR5XHJcbiAgICAgICAgICAgIGxldCBzaXplTGF5b3V0cyA9IHRlbXBsYXRlV2lkZ2V0SnNvbi5sYXlvdXRzW25hbWVdXHJcbiAgICAgICAgICAgIGlmICghc2l6ZUxheW91dHMpIHtcclxuICAgICAgICAgICAgICBjb25zdCBsYXlvdXRLZXlzID0gT2JqZWN0LmtleXModGVtcGxhdGVXaWRnZXRKc29uLmxheW91dHMpXHJcbiAgICAgICAgICAgICAgc2l6ZUxheW91dHMgPSB3SnNvbi5sYXlvdXRzW2xheW91dEtleXNbbGF5b3V0S2V5cy5sZW5ndGggLSAxXV1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzaXplTGF5b3V0cyA9IHdKc29uLmxheW91dHNbbmFtZV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzaXplTGF5b3V0cykubGVuZ3RoXHJcbiAgICAgICAgICAgIGxldCBlbWJlZExheW91dEpzb25cclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc2l6ZUxheW91dHMpIHtcclxuICAgICAgICAgICAgICBpZiAoa2V5ID09PSBCcm93c2VyU2l6ZU1vZGUuTGFyZ2UpIHtcclxuICAgICAgICAgICAgICAgIGVtYmVkTGF5b3V0SnNvbiA9IGFwcENvbmZpZy5sYXlvdXRzW3NpemVMYXlvdXRzW2tleV1dXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVtYmVkTGF5b3V0SnNvbikge1xyXG4gICAgICAgICAgICAgIGVtYmVkTGF5b3V0SnNvbiA9XHJcbiAgICAgICAgICAgICAgYXBwQ29uZmlnLmxheW91dHNbXHJcbiAgICAgICAgICAgICAgICBzaXplTGF5b3V0c1tPYmplY3Qua2V5cyhzaXplTGF5b3V0cylbbGVuZ3RoIC0gMV1dXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVtYmVkTGF5b3V0SnNvbj8uY29udGVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc0xheW91dElkID0gd0pzb24ubGF5b3V0c1tuYW1lXVtkZXZpY2VdXHJcbiAgICAgICAgICAgIGxldCBuZXdEZXNMYXlvdXRcclxuXHJcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBTdGF0dXMuSG92ZXIpIHtcclxuICAgICAgICAgICAgICBpZiAoY29uZmlnW1N0YXR1cy5Ib3Zlcl0/LmVuYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwQ29uZmlnQWN0aW9uLnJlbW92ZUxheW91dChkZXNMYXlvdXRJZCwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIG5ld0Rlc0xheW91dCA9IGFwcENvbmZpZ0FjdGlvbi5kdXBsaWNhdGVMYXlvdXQoZW1iZWRMYXlvdXRKc29uLmlkLCBmYWxzZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gU3RhdHVzLlNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvbmZpZ1tTdGF0dXMuU2VsZWN0ZWRdPy5lbmFibGUpIHtcclxuICAgICAgICAgICAgICAgIGFwcENvbmZpZ0FjdGlvbi5yZW1vdmVMYXlvdXQoZGVzTGF5b3V0SWQsIHRydWUpXHJcbiAgICAgICAgICAgICAgICBuZXdEZXNMYXlvdXQgPSBhcHBDb25maWdBY3Rpb24uZHVwbGljYXRlTGF5b3V0KGVtYmVkTGF5b3V0SnNvbi5pZCwgZmFsc2UpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGFwcENvbmZpZ0FjdGlvbi5yZW1vdmVMYXlvdXQoZGVzTGF5b3V0SWQsIHRydWUpXHJcbiAgICAgICAgICAgICAgbmV3RGVzTGF5b3V0ID0gYXBwQ29uZmlnQWN0aW9uLmR1cGxpY2F0ZUxheW91dChlbWJlZExheW91dEpzb24uaWQsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1VwZGF0ZSBuZXcgbGF5b3V0XHJcbiAgICAgICAgICAgIGlmIChuZXdEZXNMYXlvdXQpIHtcclxuICAgICAgICAgICAgICB3SnNvbiA9IHdKc29uLnNldEluKFsnbGF5b3V0cycsIG5hbWUsIGRldmljZV0sIG5ld0Rlc0xheW91dC5pZClcclxuICAgICAgICAgICAgICAvL0JlY2F1c2UgdGhlIG5ldyBsYXlvdXQgaXMgdGhlIGxheW91dCBvZiB0aGUgbGF5b3V0ZHVwbGljYXRlIGluIExhcmdlLCB0aGUgcGFyZW50IG9mIHRoZSBzdWItd2lkZ2V0IHN0aWxsIHBvaW50cyB0byB0aGUgd2lkZ2V0IG9mIExhcmdlLCBzbyB0aGUgbGF5b3V0IHN0cnVjdHVyZSBuZWVkcyB0byBiZSByZWNvbnN0cnVjdGVkXHJcbiAgICAgICAgICAgICAgYXBwQ29uZmlnQWN0aW9uLmNsZWFyTGF5b3V0U3RydWN0dXJlKG5ld0Rlc0xheW91dC5pZCwgYnJvd3NlclNpemVNb2RlLCB0cnVlKVxyXG4gICAgICAgICAgICAgIGFwcENvbmZpZ0FjdGlvbi5idWlsZExheW91dFN0cnVjdHVyZShuZXdEZXNMYXlvdXQuaWQsIGJyb3dzZXJTaXplTW9kZSwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAvLyBwcm9jZXNzIGluaGVyaXQgcHJvcGVydGllc1xyXG4gICAgaWYgKHdKc29uLnVzZURhdGFTb3VyY2VzICYmIHdKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXBwQ29uZmlnQWN0aW9uLmNvcHlVc2VEYXRhU291cmNlVG9BbGxDaGlsZFdpZGdldHMoXHJcbiAgICAgICAgd0pzb24uc2V0KCd1c2VEYXRhU291cmNlcycsIG51bGwpLFxyXG4gICAgICAgIHdKc29uXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVkaXRMaXN0TGF5b3V0U2l6ZShhcHBDb25maWdBY3Rpb24sIHN0eWxlKVxyXG4gICAgY29uc3QgY29uZmlnID0gd0pzb24uY29uZmlnXHJcbiAgICAgIC5zZXQoJ2l0ZW1TdHlsZScsIHN0eWxlKVxyXG4gICAgICAuc2V0KCdpc0l0ZW1TdHlsZUNvbmZpcm0nLCBmYWxzZSlcclxuICAgICAgLnNldCgnaXNJbml0aWFsZWQnLCB0cnVlKVxyXG4gICAgICAuc2V0KCdpc0NoZWNrRW1wdHlUZW1wbGF0ZScsIGlzQ2hlY2tFbXB0eVRlbXBsYXRlKVxyXG4gICAgYXBwQ29uZmlnQWN0aW9uXHJcbiAgICAgIC5lZGl0V2lkZ2V0UHJvcGVydHkod0pzb24uaWQsICdjb25maWcnLCBjb25maWcpXHJcbiAgICAgIC5lZGl0V2lkZ2V0UHJvcGVydHkod0pzb24uaWQsICdsYXlvdXRzJywgd0pzb24ubGF5b3V0cylcclxuICAgICAgLmV4ZWMoIW9sZENvbmZpZy5pc0luaXRpYWxlZClcclxuICAgIC8vIHNlbGVjdFNlbGYodGhpcy5wcm9wcyk7XHJcbiAgfVxyXG5cclxuICBlZGl0TGlzdExheW91dFNpemUgPSAoYXBwQ29uZmlnQWN0aW9uLCBzdHlsZTogSXRlbVN0eWxlKSA9PiB7XHJcbiAgICBjb25zdCB7IGxheW91dEluZm8sIGFwcENvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgdGVtcGxhdGVTaXplID0gdGhpcy5nZXRUZW1wbGF0ZVNpemUoKVxyXG4gICAgY29uc3QgbGlzdFNpemUgPSB0ZW1wbGF0ZVNpemVbc3R5bGVdXHJcbiAgICBjb25zdCBsYXlvdXRUeXBlID0gdGhpcy5nZXRMYXlvdXRUeXBlKClcclxuICAgIGlmIChsYXlvdXRUeXBlID09PSBMYXlvdXRUeXBlLkZpeGVkTGF5b3V0KSB7XHJcbiAgICAgIGNvbnN0IHsgbGF5b3V0SWQsIGxheW91dEl0ZW1JZCB9ID0gbGF5b3V0SW5mb1xyXG4gICAgICBjb25zdCBsYXlvdXQgPSBhcHBDb25maWcubGF5b3V0c1tsYXlvdXRJZF1cclxuICAgICAgY29uc3QgbGF5b3V0SXRlbSA9IGxheW91dD8uY29udGVudD8uW2xheW91dEl0ZW1JZF1cclxuICAgICAgY29uc3QgYmJveCA9IGxheW91dEl0ZW0uYmJveC5zZXQoJ3dpZHRoJywgYCR7bGlzdFNpemUud2lkdGh9JWApLnNldCgnaGVpZ2h0JywgYCR7bGlzdFNpemUuaGVpZ2h0fSVgKVxyXG4gICAgICBhcHBDb25maWdBY3Rpb25cclxuICAgICAgICAuZWRpdExheW91dEl0ZW1CQm94KGxheW91dEluZm8sIGJib3gpXHJcbiAgICAgICAgLmV4ZWMoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VGVtcGxhdGVTaXplID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXJlbnRTaXplIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBjb2x1bW5Sb3dUZW1wbGF0ZVdpZHRoID0gNjIwXHJcbiAgICBjb25zdCBjb2x1bW5Sb3dUZW1wbGF0ZUhlaWdodCA9IDI3NVxyXG4gICAgY29uc3QgcGFyZW50V2lkdGggPSBwYXJlbnRTaXplPy53aWR0aCB8fCAxMjgwXHJcbiAgICBjb25zdCBwYXJlbnRIZWlnaHQgPSBwYXJlbnRTaXplPy5oZWlnaHQgfHwgODAwXHJcbiAgICBjb25zdCB0ZW1wbGF0ZVdpZHRoID0gdGhpcy5jaGVja1RlbXBsYXRlRGVmYXVsdFNpemUoKGNvbHVtblJvd1RlbXBsYXRlV2lkdGggKiAxMDApIC8gcGFyZW50V2lkdGgpXHJcbiAgICBjb25zdCB0ZW1wbGF0ZUhlaWdodCA9IHRoaXMuY2hlY2tUZW1wbGF0ZURlZmF1bHRTaXplKChjb2x1bW5Sb3dUZW1wbGF0ZUhlaWdodCAqIDEwMCkgLyBwYXJlbnRIZWlnaHQpXHJcbiAgICBjb25zdCB0ZW1wbGF0ZVNpemUgPSB7XHJcbiAgICAgIFNUWUxFMDogeyB3aWR0aDogdGVtcGxhdGVXaWR0aCwgaGVpZ2h0OiB0ZW1wbGF0ZUhlaWdodCB9LFxyXG4gICAgICBTVFlMRTE6IHsgd2lkdGg6IHRlbXBsYXRlV2lkdGgsIGhlaWdodDogdGVtcGxhdGVIZWlnaHQgfSxcclxuICAgICAgU1RZTEUyOiB7IHdpZHRoOiB0ZW1wbGF0ZVdpZHRoLCBoZWlnaHQ6IHRlbXBsYXRlSGVpZ2h0IH0sXHJcbiAgICAgIFNUWUxFMzogeyB3aWR0aDogdGVtcGxhdGVXaWR0aCwgaGVpZ2h0OiB0ZW1wbGF0ZUhlaWdodCB9LFxyXG4gICAgICBTVFlMRTQ6IHsgd2lkdGg6IHRlbXBsYXRlV2lkdGgsIGhlaWdodDogdGVtcGxhdGVIZWlnaHQgfSxcclxuICAgICAgU1RZTEU1OiB7IHdpZHRoOiB0ZW1wbGF0ZVdpZHRoLCBoZWlnaHQ6IHRlbXBsYXRlSGVpZ2h0IH0sXHJcbiAgICAgIFNUWUxFNjogeyB3aWR0aDogdGVtcGxhdGVXaWR0aCwgaGVpZ2h0OiB0ZW1wbGF0ZUhlaWdodCB9LFxyXG4gICAgICBTVFlMRTc6IHsgd2lkdGg6IHRlbXBsYXRlV2lkdGgsIGhlaWdodDogdGVtcGxhdGVIZWlnaHQgfSxcclxuICAgICAgU1RZTEU4OiB7IHdpZHRoOiB0aGlzLmNoZWNrVGVtcGxhdGVEZWZhdWx0U2l6ZSg2NTQwMCAvIHBhcmVudFdpZHRoKSwgaGVpZ2h0OiB0aGlzLmNoZWNrVGVtcGxhdGVEZWZhdWx0U2l6ZSgzMzUwMCAvIHBhcmVudEhlaWdodCkgfSxcclxuICAgICAgU1RZTEU5OiB7IHdpZHRoOiB0aGlzLmNoZWNrVGVtcGxhdGVEZWZhdWx0U2l6ZSg1MDAwMCAvIHBhcmVudFdpZHRoKSwgaGVpZ2h0OiB0aGlzLmNoZWNrVGVtcGxhdGVEZWZhdWx0U2l6ZSg1MDAwMCAvIHBhcmVudEhlaWdodCkgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBsYXRlU2l6ZVxyXG4gIH1cclxuXHJcbiAgY2hlY2tUZW1wbGF0ZURlZmF1bHRTaXplID0gKHNpemUpID0+IHtcclxuICAgIGlmIChzaXplID4gMTAwKSB7XHJcbiAgICAgIHJldHVybiAxMDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzaXplXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMYXlvdXRUeXBlID0gKCk6IExheW91dFR5cGUgPT4ge1xyXG4gICAgY29uc3QgeyBsYXlvdXRJbmZvLCBhcHBDb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGxheW91dElkID0gbGF5b3V0SW5mbz8ubGF5b3V0SWRcclxuICAgIGNvbnN0IGxheW91dFR5cGUgPSBhcHBDb25maWc/LmxheW91dHM/LltsYXlvdXRJZF0/LnR5cGVcclxuICAgIHJldHVybiBsYXlvdXRUeXBlXHJcbiAgfVxyXG5cclxuICBzZXREYXRhc291cmNlID0gKGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZGF0YXNvdXJjZTogZHNcclxuICAgIH0sICgpID0+IHtcclxuICAgICAgY29uc3QgaXNTaG93QXV0b1JlZnJlc2ggPSB0aGlzLmNoZWNrSXNEc0F1dG9SZWZyZXNoU2V0dGluZ09wZW4oZHMpXHJcbiAgICAgIHRoaXMuaXNQcmVEYXRhU291cmNlUmVmcmVzaE9wZW4gPSBpc1Nob3dBdXRvUmVmcmVzaFxyXG4gICAgICB0aGlzLmluaXRJc1Nob3dBdXRvUmVmcmVzaChkcylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpbml0SXNTaG93QXV0b1JlZnJlc2ggPSAoZHMpID0+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAodHlwZW9mIChjb25maWc/LmlzU2hvd0F1dG9SZWZyZXNoKSAhPT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGNvbnN0IGlzU2hvd0F1dG9SZWZyZXNoID0gdGhpcy5jaGVja0lzRHNBdXRvUmVmcmVzaFNldHRpbmdPcGVuKGRzKVxyXG4gICAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcuc2V0KCdpc1Nob3dBdXRvUmVmcmVzaCcsIGlzU2hvd0F1dG9SZWZyZXNoKVxyXG4gICAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluZGV4Rm9yUGlja2VyRGF0YSAodmFsdWUsIGRhdGEpIHtcclxuICAgIGxldCBpbmRleCA9IC0xXHJcbiAgICBkYXRhLnNvbWUoKGQsIGkpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSBkLnZhbHVlKSB7XHJcbiAgICAgICAgaW5kZXggPSBpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBpbmRleFxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0TW9kZU9wdGlvbnMgPSAoKTogSlNYLkVsZW1lbnRbXSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICA8b3B0aW9uIGtleT17U2VsZWN0aW9uTW9kZVR5cGUuU2luZ2xlfSB2YWx1ZT17U2VsZWN0aW9uTW9kZVR5cGUuU2luZ2xlfT5cclxuICAgICAgICB7dGhpcy5mb3JtYXRNZXNzYWdlKCdzaW5nbGUnKX1cclxuICAgICAgPC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uXHJcbiAgICAgICAga2V5PXtTZWxlY3Rpb25Nb2RlVHlwZS5NdWx0aXBsZX1cclxuICAgICAgICB2YWx1ZT17U2VsZWN0aW9uTW9kZVR5cGUuTXVsdGlwbGV9XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5mb3JtYXRNZXNzYWdlKCdtdWx0aXBsZScpfVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgIF1cclxuICB9XHJcblxyXG4gIGdldFNlYXJjaGluZ0ZpZWxkcyA9IChpc1NlYXJjaDogYm9vbGVhbik6IE11bHRpU2VsZWN0SXRlbVtdID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YXNvdXJjZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaWYgKGRhdGFzb3VyY2UpIHtcclxuICAgICAgY29uc3Qgc2NoZW1lID0gZGF0YXNvdXJjZS5nZXRTY2hlbWEoKVxyXG4gICAgICBpZiAoc2NoZW1lICYmIHNjaGVtZS5maWVsZHMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBbXVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNjaGVtZS5maWVsZHMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZmllbGQgPSBzY2hlbWUuZmllbGRzW2ZpZWxkS2V5XVxyXG4gICAgICAgICAgaWYgKGlzU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSBKaW11RmllbGRUeXBlLlN0cmluZykge1xyXG4gICAgICAgICAgICAgIHJlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZEtleSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOlxyXG4gICAgICAgICAgICAgICAgICBzY2hlbWUuZmllbGRzW2ZpZWxkS2V5XS5hbGlhcyB8fCBzY2hlbWUuZmllbGRzW2ZpZWxkS2V5XS5uYW1lXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnB1c2goe1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBmaWVsZEtleSxcclxuICAgICAgICAgICAgICBsYWJlbDpcclxuICAgICAgICAgICAgICAgIHNjaGVtZS5maWVsZHNbZmllbGRLZXldLmFsaWFzIHx8IHNjaGVtZS5maWVsZHNbZmllbGRLZXldLm5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdXHJcbiAgfVxyXG5cclxuICBnZXRQYWdlU3R5bGVPcHRpb25zID0gKCk6IEpTWC5FbGVtZW50W10gPT4ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgPG9wdGlvbiBrZXk9e1BhZ2VTdHlsZS5TY3JvbGx9IHZhbHVlPXtQYWdlU3R5bGUuU2Nyb2xsfT5cclxuICAgICAgICB7dGhpcy5mb3JtYXRNZXNzYWdlKCdzY3JvbGwnKX1cclxuICAgICAgPC9vcHRpb24+LFxyXG4gICAgICA8b3B0aW9uIGtleT17UGFnZVN0eWxlLk11bHRpUGFnZX0gdmFsdWU9e1BhZ2VTdHlsZS5NdWx0aVBhZ2V9PlxyXG4gICAgICAgIHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ211bHRpUGFnZScpfVxyXG4gICAgICA8L29wdGlvbj5cclxuICAgIF1cclxuICB9XHJcblxyXG4gIG9uRHNDcmVhdGUgPSBkcyA9PiB7XHJcbiAgICB0aGlzLnNldERhdGFzb3VyY2UoZHMpXHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlID0gKGluZm86IElNRGF0YVNvdXJjZUluZm8pID0+IHtcclxuICAgIGlmICghaW5mbyB8fCAhdGhpcy5zdGF0ZS5kYXRhc291cmNlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGlzRHNBdXRvUmVmcmVzaFNldHRpbmdPcGVuID0gdGhpcy5jaGVja0lzRHNBdXRvUmVmcmVzaFNldHRpbmdPcGVuKHRoaXMuc3RhdGUuZGF0YXNvdXJjZSlcclxuICAgIGlmIChpc0RzQXV0b1JlZnJlc2hTZXR0aW5nT3BlbiAmJiAhdGhpcy5pc1ByZURhdGFTb3VyY2VSZWZyZXNoT3Blbikge1xyXG4gICAgICBjb25zdCBuZXdDb25maWcgPSBjb25maWcuc2V0KCdpc1Nob3dBdXRvUmVmcmVzaCcsIGlzRHNBdXRvUmVmcmVzaFNldHRpbmdPcGVuKVxyXG4gICAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZylcclxuICAgIH1cclxuICAgIHRoaXMuaXNQcmVEYXRhU291cmNlUmVmcmVzaE9wZW4gPSBpc0RzQXV0b1JlZnJlc2hTZXR0aW5nT3BlblxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgPSAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzID0+IHtcclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgICYuamltdS13aWRnZXQtbGlzdC1zZXR0aW5nIHtcclxuICAgICAgICAubm8tYm90dG9tLWJvcmRlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1sYXlvdXQtc2VsZWN0LWNvbiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYnV0dG9uLCBidXR0b246aG92ZXIsIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycz8ucGFsZXR0ZS5saWdodFsyMDBdfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDQpfTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAke3BvbGlzaGVkLnJlbSgyKX07XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saXN0LWd1aWRlLXRpcC1idXR0b24gc3Zne1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtwb2xpc2hlZC5yZW0oLTQpfTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0eWxlLXNldHRpbmctLWJhc2UtdW5pdC1pbnB1dCB7XHJcbiAgICAgICAgICAuZHJvcGRvd24tYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xlYXItcGFkZGluZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1zZXR0aW5nLWNvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsZWFyLWJvcmRlciB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGVhci1wYWRkaW5nLWJvdHRvbSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvcnQtY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAuc29ydC1tdWx0aS1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvY2staXRlbS1yYXRpby1sYWJlbCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogJHtwb2xpc2hlZC5yZW0oOCl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgLnNlYXJjaC1tdWx0aS1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvY2staXRlbS1yYXRpbyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3BvbGlzaGVkLnJlbSgzKX07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmVzZXR0aW5nLXRlbXBsYXRlIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLnByaW1hcnlbNzAwXX07XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTIpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc2V0dGluZy10ZW1wbGF0ZTpob3ZlciB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5wcmltYXJ5WzgwMF19O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2V0dGluZy1uZXh0IHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxMyl9O1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAke3BvbGlzaGVkLnJlbSgyKX0gc29saWQgJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5wcmltYXJ5WzcwMF19O1xyXG4gICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogJHtwb2xpc2hlZC5yZW0oMil9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1zZXR0aW5nLXJldHVybiB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6ICR7cG9saXNoZWQucmVtKDE0KX07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFsyMDBdfTtcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmJsYWNrfTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtwb2xpc2hlZC5yZW0oMTQpfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLnByaW1hcnlbNzAwXX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdHlsZS1ncm91cCB7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRlbXBsYXRlLWljb24tbWFyZ2luLXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cG9saXNoZWQucmVtKDEwKX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3R5bGUtaW1nIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzUwMF19O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc3R5bGUtaW1nLWgge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDlweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubG93IHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5lbXB0eSB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbMjAwXX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnZlcnRpY2FsLXNwYWNlIHtcclxuICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3Qtc2l6ZS1lZGl0IHtcclxuICAgICAgICAgIHdpZHRoOiAke3BvbGlzaGVkLnJlbSgxMjApfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGFzb3VyY2UtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgJiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbMjAwXX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUuZGFya1s1MDBdfTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAke3BvbGlzaGVkLnJlbSgxNCl9O1xyXG4gICAgICAgICAgICBtYXJnaW46ICR7cG9saXNoZWQucmVtKDE2KX0gYXV0byAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtwb2xpc2hlZC5yZW0oMTkpfTtcclxuICAgICAgICAgICAgd2lkdGg6ICR7cG9saXNoZWQucmVtKDIyOCl9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgZ2V0QWxsRmllbGRzID0gKCk6IHN0cmluZ1tdID0+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnLCB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgdXNlRFMgPSB1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlc1swXVxyXG4gICAgaWYgKCF1c2VEUykgcmV0dXJuIFtdXHJcblxyXG4gICAgY29uc3QgdXNlZEZpZWxkcyA9IHt9XHJcbiAgICBpZiAoY29uZmlnLnNvcnRPcGVuICYmIGNvbmZpZy5zb3J0cykge1xyXG4gICAgICBjb25maWcuc29ydHMuZm9yRWFjaChzb3J0ID0+IHtcclxuICAgICAgICBzb3J0LnJ1bGUuZm9yRWFjaChzb3J0RGF0YSA9PiB7XHJcbiAgICAgICAgICBzb3J0RGF0YS5qaW11RmllbGROYW1lICYmICh1c2VkRmllbGRzW3NvcnREYXRhLmppbXVGaWVsZE5hbWVdID0gMClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gaWYgKHVzZURTLnF1ZXJ5ICYmIHVzZURTLnF1ZXJ5Lm9yZGVyQnkgJiYgdXNlRFMucXVlcnkub3JkZXJCeS5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIHVzZURTLnF1ZXJ5Lm9yZGVyQnkuZm9yRWFjaChzb3J0RGF0YSA9PiB7XHJcbiAgICAvLyAgICAgc29ydERhdGEuamltdUZpZWxkTmFtZSAmJiAodXNlZEZpZWxkc1tzb3J0RGF0YS5qaW11RmllbGROYW1lXSA9IDApO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmICh1c2VEUy5xdWVyeSAmJiB1c2VEUy5xdWVyeS53aGVyZSkge1xyXG4gICAgLy8gICAoZ2V0SmltdUZpZWxkTmFtZXNCeVNxbEV4cHJlc3Npb24odXNlRFMucXVlcnkud2hlcmUpIHx8IFtdKS5mb3JFYWNoKGZpZWxkID0+IHVzZWRGaWVsZHNbZmllbGRdID0gMClcclxuICAgIC8vIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLmZpbHRlcikge1xyXG4gICAgICA7KGdldEppbXVGaWVsZE5hbWVzQnlTcWxFeHByZXNzaW9uKGNvbmZpZy5maWx0ZXIpIHx8IFtdKS5mb3JFYWNoKFxyXG4gICAgICAgIGZpZWxkID0+ICh1c2VkRmllbGRzW2ZpZWxkXSA9IDApXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29uZmlnLnNlYXJjaE9wZW4gJiYgY29uZmlnLnNlYXJjaEZpZWxkcykge1xyXG4gICAgICA7KGNvbmZpZy5zZWFyY2hGaWVsZHMuc3BsaXQoJywnKSB8fCBbXSkuZm9yRWFjaChcclxuICAgICAgICBmaWVsZCA9PiAodXNlZEZpZWxkc1tmaWVsZF0gPSAwKVxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbmZpZz8ubGlua1BhcmFtPy5leHByZXNzaW9uKSB7XHJcbiAgICAgIGNvbnN0IGxpbmtTZXR0aW5nRHNzID0gZXhwcmVzc2lvblV0aWxzLmdldFVzZURhdGFTb3VyY2VGcm9tRXhwUGFydHMoXHJcbiAgICAgICAgY29uZmlnLmxpbmtQYXJhbS5leHByZXNzaW9uPy5wYXJ0cyxcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzXHJcbiAgICAgIClcclxuICAgICAgbGlua1NldHRpbmdEc3M/LlswXT8uZmllbGRzPy5mb3JFYWNoKGZpZWxkID0+ICh1c2VkRmllbGRzW2ZpZWxkXSA9IDApKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICh1c2VkRmllbGRzICYmIE9iamVjdC5rZXlzKHVzZWRGaWVsZHMpKSB8fCBbXVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0TWVzc2FnZSA9IChpZDogc3RyaW5nLCB2YWx1ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZShcclxuICAgICAgeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBNRVNTQUdFU1tpZF0gfSxcclxuICAgICAgdmFsdWVzXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBnZXRXaGV0aGVyRHNJblVzZURhdGFTb3VyY2VzID0gKFxyXG4gICAgZHM6IFVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cclxuICApOiBib29sZWFuID0+IHtcclxuICAgIGlmICghZHMgfHwgIXVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVzZURhdGFTb3VyY2VzLnNvbWUodSA9PiB1LmRhdGFTb3VyY2VJZCA9PT0gZHMuZGF0YVNvdXJjZUlkKVxyXG4gIH1cclxuXHJcbiAgZ2V0T3V0cHV0RGF0YVNvdXJjZUpzb24gPSAoXHJcbiAgICB1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdXHJcbiAgKTogRGF0YVNvdXJjZUpzb24gPT4ge1xyXG4gICAgLy8gb3V0cHV0RGF0YVNvdXJjZUpzb24gc2hvdWxkIGJpbmQgd2lkZ2V0IGluc3RhbmNlLCBzdWNoIGFzIE1hcHZpZXdEYXRhU291cmNlXHJcbiAgICBjb25zdCBkc0pzb246IERhdGFTb3VyY2VKc29uID0ge1xyXG4gICAgICBpZDogYCR7dGhpcy5wcm9wcy5pZH0tb3V0cHV0YCxcclxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0TWVzc2FnZSgnb3V0cHV0RHNMYWJlbCcsIHsgbGFiZWw6IHRoaXMucHJvcHMubGFiZWwgfSksXHJcbiAgICAgIHR5cGU6IEFsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsXHJcbiAgICAgIG9yaWdpbkRhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkc0pzb25cclxuICB9XHJcblxyXG4gIG9uRmlsdGVyQ2hhbmdlID0gKHNxbEV4cHJPYmo6IFNxbEV4cHJlc3Npb24sIGRzSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKFxyXG4gICAgICAhdXNlRGF0YVNvdXJjZXMgfHxcclxuICAgICAgIXVzZURhdGFTb3VyY2VzWzBdIHx8XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCAhPT0gZHNJZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5uZWVkVXBkYXRlRmllbGRzID0gdHJ1ZVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IFtcclxuICAgICAgICB1c2VEYXRhU291cmNlc1swXVxyXG4gICAgICAgICAgLnNldEluKFsncXVlcnknLCAnd2hlcmUnXSwgc3FsRXhwck9iailcclxuICAgICAgICAgIC5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblNldHRpbmdMaW5rQ29uZmlybSA9IChsaW5rUmVzdWx0OiBJTUxpbmtQYXJhbSkgPT4ge1xyXG4gICAgbGV0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAoIWxpbmtSZXN1bHQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25maWcgPSBjb25maWcuc2V0KCdsaW5rUGFyYW0nLCBsaW5rUmVzdWx0KVxyXG5cclxuICAgIGlmIChsaW5rUmVzdWx0LmV4cHJlc3Npb24pIHtcclxuICAgICAgdGhpcy5uZWVkVXBkYXRlRmllbGRzID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5vbkNvbmZpZ0NoYW5nZShjb25maWcpXHJcbiAgfVxyXG5cclxuICBvbkRTU2VsZWN0b3JTb3J0Q2hhbmdlID0gKHNvcnREYXRhOiBPcmRlckJ5T3B0aW9uW10sIGRzSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKFxyXG4gICAgICAhdXNlRGF0YVNvdXJjZXMgfHxcclxuICAgICAgIXVzZURhdGFTb3VyY2VzWzBdIHx8XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCAhPT0gZHNJZFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5uZWVkVXBkYXRlRmllbGRzID0gdHJ1ZVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IFtcclxuICAgICAgICB1c2VEYXRhU291cmNlc1swXVxyXG4gICAgICAgICAgLnNldEluKFsncXVlcnknLCAnb3JkZXJCeSddLCBzb3J0RGF0YSlcclxuICAgICAgICAgIC5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkRhdGFDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgaWYgKHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5vbkRhdGFTZWxlY3QodXNlRGF0YVNvdXJjZXNbMF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uRGF0YVJlbW92ZSh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFTZWxlY3QgPSAoY3VycmVudFNlbGVjdGVkRHM6IFVzZURhdGFTb3VyY2UpID0+IHtcclxuICAgIGNvbnN0IHdpZGdldHMgPSB0aGlzLnByb3BzLmFwcENvbmZpZyAmJiB0aGlzLnByb3BzLmFwcENvbmZpZy53aWRnZXRzXHJcblxyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IHdpZGdldHNbdGhpcy5wcm9wcy5pZF1cclxuICAgIGNvbnN0IHVkcGF0ZVdpZGdldEpzb24gPSB7IGlkOiB0aGlzLnByb3BzLmlkIH0gYXMgYW55XHJcbiAgICBjb25zdCBhcHBDb25maWdBY3Rpb24gPSBnZXRBcHBDb25maWdBY3Rpb24oKVxyXG4gICAgbGV0IHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW11cclxuICAgIGxldCBzaW5nbGVVc2VkRHM6IFVzZURhdGFTb3VyY2VcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5nZXRXaGV0aGVyRHNJblVzZURhdGFTb3VyY2VzKFxyXG4gICAgICAgIGN1cnJlbnRTZWxlY3RlZERzLFxyXG4gICAgICAgIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXNcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaW5nbGVVc2VkRHMgPSBjdXJyZW50U2VsZWN0ZWREc1xyXG4gICAgICB1c2VEYXRhU291cmNlcyA9IFtzaW5nbGVVc2VkRHNdXHJcbiAgICAgIHVkcGF0ZVdpZGdldEpzb24uY29uZmlnID0gd2lkZ2V0SnNvbi5jb25maWdcclxuICAgICAgICAuc2V0KCdzZWFyY2hGaWVsZHMnLCBudWxsKVxyXG4gICAgICAgIC5zZXQoJ2ZpbHRlcnMnLCBudWxsKVxyXG4gICAgICAgIC5zZXQoJ3NvcnRzJywgbnVsbClcclxuICAgIH1cclxuICAgIC8vIEluc3RlYWQgb2YgZnVuY3Rpb24gb25TZXR0aW5nQ2hhbmdlLCB1c2UgYWN0aW9uIHRvIGNoYW5nZSB3aWRnZXQganNvbiwgd2hpY2ggY2FuIGF2b2lkIGNvbmZsaWN0LlxyXG4gICAgLy8gQmVjYXVzZSBlZGl0aW5nIHdpZGdldCBqc29uIGluIGJ1aWxkZXIgbmVlZHMgcHViLXN1YiBhbmQgcHViLXN1YiBpcyBhc3luYy5cclxuICAgIHVkcGF0ZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgPSB1c2VEYXRhU291cmNlc1xyXG4gICAgYXBwQ29uZmlnQWN0aW9uLmVkaXRXaWRnZXQodWRwYXRlV2lkZ2V0SnNvbikuZXhlYygpXHJcbiAgICAvLyBvdXRwdXRkYXRhc291cmNlXHJcbiAgICAvLyBjb25zdCBvdXRwdXREYXRhU291cmNlSnNvbiA9IHRoaXMuZ2V0T3V0cHV0RGF0YVNvdXJjZUpzb24odXNlRGF0YVNvdXJjZXMpXHJcbiAgICAvLyBpZiAob3V0cHV0RGF0YVNvdXJjZUpzb24pIHtcclxuICAgIC8vICAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBbb3V0cHV0RGF0YVNvdXJjZUpzb25dXHJcbiAgICAvLyAgIGFwcENvbmZpZ0FjdGlvbi5lZGl0V2lkZ2V0KHVkcGF0ZVdpZGdldEpzb24sIG91dHB1dERhdGFTb3VyY2VzKS5leGVjKCk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBhcHBDb25maWdBY3Rpb24uZWRpdFdpZGdldCh1ZHBhdGVXaWRnZXRKc29uKS5leGVjKCk7XHJcbiAgICAvLyB9XHJcbiAgICB0aGlzLm5lZWRVcGRhdGVGaWVsZHMgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBvbkRhdGFSZW1vdmUgPSAoY3VycmVudFJlbW92ZWREczogVXNlRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgY29uc3Qgd2lkZ2V0cyA9IHRoaXMucHJvcHMuYXBwQ29uZmlnICYmIHRoaXMucHJvcHMuYXBwQ29uZmlnLndpZGdldHNcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSB3aWRnZXRzW3RoaXMucHJvcHMuaWRdXHJcbiAgICBjb25zdCB1cGRhdGVXaWRnZXRKc29uID0geyBpZDogdGhpcy5wcm9wcy5pZCB9IGFzIGFueVxyXG4gICAgY29uc3QgYXBwQ29uZmlnQWN0aW9uID0gZ2V0QXBwQ29uZmlnQWN0aW9uKClcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiA9IHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMuZmlsdGVyKFxyXG4gICAgICB1c2VkRHMgPT4gdXNlZERzLmRhdGFTb3VyY2VJZCAhPT0gY3VycmVudFJlbW92ZWREcy5kYXRhU291cmNlSWRcclxuICAgIClcclxuXHJcbiAgICAvLyBJbnN0ZWFkIG9mIGZ1bmN0aW9uIG9uU2V0dGluZ0NoYW5nZSwgdXNlIGFjdGlvbiB0byBjaGFuZ2Ugd2lkZ2V0IGpzb24sIHdoaWNoIGNhbiBhdm9pZCBjb25mbGljdC5cclxuICAgIC8vIEJlY2F1c2UgZWRpdGluZyB3aWRnZXQganNvbiBpbiBidWlsZGVyIG5lZWRzIHB1Yi1zdWIgYW5kIHB1Yi1zdWIgaXMgYXN5bmMuXHJcbiAgICB1cGRhdGVXaWRnZXRKc29uLmNvbmZpZyA9IHdpZGdldEpzb24uY29uZmlnXHJcbiAgICAgIC5zZXQoJ3NxbEV4cHJPYmonLCBudWxsKVxyXG4gICAgICAuc2V0KCdzZWFyY2hGaWVsZHMnLCBudWxsKVxyXG4gICAgICAuc2V0KCdmaWx0ZXJzJywgbnVsbClcclxuICAgICAgLnNldCgnc29ydEZpZWxkcycsIG51bGwpXHJcbiAgICB1cGRhdGVXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzID0gdXNlRGF0YVNvdXJjZXNcclxuICAgIGFwcENvbmZpZ0FjdGlvbi5lZGl0V2lkZ2V0KHVwZGF0ZVdpZGdldEpzb24sIFtdKS5leGVjKClcclxuICAgIHRoaXMubmVlZFVwZGF0ZUZpZWxkcyA9IHRydWVcclxuICB9XHJcblxyXG4gIHJlZG5lckJnU2V0dGluZyAoaXNDbGVhckJvcmRlcjogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHsgY29uZmlnLCBzaG93Q2FyZFNldHRpbmcgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT17YGNsZWFyLXBhZGRpbmcgJHtpc0NsZWFyQm9yZGVyICYmICdjbGVhci1ib3JkZXIgY2xlYXItcGFkZGluZy1ib3R0b20nfWB9PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnYmFja2dyb3VuZCcpfSBmbG93PSd3cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdiYWNrZ3JvdW5kJyl9PlxyXG4gICAgICAgICAgICA8QmFja2dyb3VuZFNldHRpbmdcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5jYXJkQ29uZmlnc1tzaG93Q2FyZFNldHRpbmddLmJhY2tncm91bmRTdHlsZS5iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7IHRoaXMub25CYWNrZ3JvdW5kU3R5bGVDaGFuZ2Uoc2hvd0NhcmRTZXR0aW5nLCAnYmFja2dyb3VuZCcsIHZhbHVlKSB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT17YGNsZWFyLXBhZGRpbmcgJHtpc0NsZWFyQm9yZGVyICYmICdjbGVhci1ib3JkZXInfWB9PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnYm9yZGVyJyl9IGZsb3c9J3dyYXAnIHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2JvcmRlcicpfT5cclxuICAgICAgICAgICAgPEJvcmRlclNldHRpbmdcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmNhcmRDb25maWdzW3Nob3dDYXJkU2V0dGluZ10uYmFja2dyb3VuZFN0eWxlLmJvcmRlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4geyB0aGlzLm9uQmFja2dyb3VuZFN0eWxlQ2hhbmdlKHNob3dDYXJkU2V0dGluZywgJ2JvcmRlcicsIHZhbHVlKSB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnYm9yZGVyUmFkaXVzJyl9IGZsb3c9J3dyYXAnIHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2JvcmRlclJhZGl1cycpfT5cclxuICAgICAgICAgICAgPEJvcmRlclJhZGl1c1NldHRpbmdcclxuICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICBjb25maWcuY2FyZENvbmZpZ3Nbc2hvd0NhcmRTZXR0aW5nXS5iYWNrZ3JvdW5kU3R5bGUuYm9yZGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQmFja2dyb3VuZFN0eWxlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2FyZFNldHRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICdib3JkZXJSYWRpdXMnLFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICB7LyogPFNldHRpbmdSb3cgbGFiZWw9XCJCb3ggc2hhZG93XCIgZmxvdz1cIndyYXBcIj5cclxuICAgICAgICAgIDxCb3hTaGFkb3dTZXR0aW5nXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb25maWcuY2FyZENvbmZpZ3Nbc2hvd0NhcmRTZXR0aW5nXS5iYWNrZ3JvdW5kU3R5bGUuYm94U2hhZG93fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5vbkJhY2tncm91bmRTdHlsZUNoYW5nZShzaG93Q2FyZFNldHRpbmcsICdib3hTaGFkb3cnLCB2YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PiAqL31cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGhhbmRsZUl0ZW1TdHlsZUNvbmZpcm1DbGljayA9IGV2dCA9PiB7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ2lzSXRlbVN0eWxlQ29uZmlybScsIHRydWUpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZXNldEl0ZW1zdHlsZUNsaWNrID0gZXZ0ID0+IHtcclxuICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgnaXNJdGVtU3R5bGVDb25maXJtJywgZmFsc2UpXHJcbiAgICB0aGlzLnVwZGF0ZVN0YXJ0QnV0dG9uUG9zaXRpb24oKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGljayA9IGV2dCA9PiB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGV2dC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWVcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBpZiAoY29uZmlnLml0ZW1TdHlsZSA9PT0gc3R5bGUpIHJldHVyblxyXG4gICAgdGhpcy5vbkl0ZW1TdHlsZUNoYW5nZWQoc3R5bGUsIGNvbmZpZz8uaXNDaGVja0VtcHR5VGVtcGxhdGUpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGVja0VtcHR5VGVtcGxhdGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgYXBwQ29uZmlnLCBpZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgbmV3SXNDaGVja0VtcHR5VGVtcGxhdGUgPSAhY29uZmlnPy5pc0NoZWNrRW1wdHlUZW1wbGF0ZVxyXG4gICAgY29uc3QgbmV3Q29uZmlnID0gY29uZmlnLnNldCgnaXNDaGVja0VtcHR5VGVtcGxhdGUnLCBuZXdJc0NoZWNrRW1wdHlUZW1wbGF0ZSlcclxuICAgIGNvbnN0IG5ld0FwcENvbmZpZyA9IGFwcENvbmZpZy5zZXRJbihbJ3dpZGdldHMnLCBpZCwgJ2NvbmZpZyddLCBuZXdDb25maWcpXHJcbiAgICB0aGlzLm9uSXRlbVN0eWxlQ2hhbmdlZChjb25maWcuaXRlbVN0eWxlLCBuZXdJc0NoZWNrRW1wdHlUZW1wbGF0ZSwgbmV3QXBwQ29uZmlnKVxyXG4gIH1cclxuXHJcbiAgb3BlblNldHRpbmdDb2xsYXBzZSA9IChzZXR0aW5nQ29sbGFwc2U6IFNldHRpbmdDb2xsYXBzZVR5cGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzZXR0aW5nQ29sbGFwc2U6IHNldHRpbmdDb2xsYXBzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNsb3NlU2V0dGluZ0NvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNldHRpbmdDb2xsYXBzZTogU2V0dGluZ0NvbGxhcHNlVHlwZS5Ob25lXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGFnZVN0eWxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZ0Py50YXJnZXQ/LnZhbHVlXHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ3BhZ2VTdHlsZScsIHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hvb3NlU2VhcmNoaW5nRmllbGRzQ2hhbmdlID0gKGV2dCwgdmFsdWUsIHZhbHVlcykgPT4ge1xyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdzZWFyY2hGaWVsZHMnLCB2YWx1ZXMuam9pbignLCcpKVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheVNlbGVjdGVkRmllbGRzID0gdmFsdWVzID0+IHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdE1lc3NhZ2UoJ251bVNlbGVjdGVkJywge1xyXG4gICAgICBudW1iZXI6IHZhbHVlcy5sZW5ndGhcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFBsYWNlaG9sZGVyQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjdEhpbnQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgY29uc3QgcHJlU2VhcmN0SGludCA9IHRoaXMucHJvcHM/LmNvbmZpZz8uc2VhcmNoSGludFxyXG4gICAgaWYgKHByZVNlYXJjdEhpbnQgPT09IHNlYXJjdEhpbnQpIHJldHVyblxyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdzZWFyY2hIaW50Jywgc2VhcmN0SGludClcclxuICB9XHJcblxyXG4gIGdldElzU2Nyb2xsQW5kV2lkdGhPZlRlbXBsYXRlQ29uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGVtcGxhdGVDb25IZWlnaHQgPSB0aGlzLnRlbXBsYXRlc0NvbnRhaW4/LmNsaWVudEhlaWdodCB8fCAwXHJcbiAgICBjb25zdCB0ZW1wbGF0ZUNvbldpZHRoID0gdGhpcy50ZW1wbGF0ZXNDb250YWluPy5jbGllbnRXaWR0aCB8fCAwXHJcbiAgICBjb25zdCB0ZW1wbGF0ZUNvblBhcmVudEhlaWdodCA9XHJcbiAgICAgIHRoaXMudGVtcGxhdGVzQ29udGFpbj8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8uY2xpZW50SGVpZ2h0IHx8IDBcclxuICAgIGNvbnN0IGlzU3RhcnRCdXR0b25BYnNvbHV0ZSA9IHRlbXBsYXRlQ29uUGFyZW50SGVpZ2h0IDwgdGVtcGxhdGVDb25IZWlnaHRcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc1RlbXBsYXRlQ29udGFpblNjcm9sbDogaXNTdGFydEJ1dHRvbkFic29sdXRlLFxyXG4gICAgICB0ZW1wbGF0ZUNvbldpZHRoOiB0ZW1wbGF0ZUNvbldpZHRoXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhcnRCdXR0b25Qb3NpdGlvbiA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVBvc2l0aW9uVGltZW91dClcclxuICAgIHRoaXMudXBkYXRlUG9zaXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2V0SXNTY3JvbGxBbmRXaWR0aE9mVGVtcGxhdGVDb24oKVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgc2V0VGVtcGxhdGVzQ29udGFpbiA9IChyZWYpID0+IHtcclxuICAgIGNvbnN0IHByZVRlbXBsYXRlc0NvbnRhaW4gPSB0aGlzLnRlbXBsYXRlc0NvbnRhaW5cclxuICAgIGlmIChyZWYpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZXNDb250YWluID0gcmVmXHJcbiAgICB9XHJcbiAgICBpZiAoIXByZVRlbXBsYXRlc0NvbnRhaW4pIHtcclxuICAgICAgdGhpcy5nZXRJc1Njcm9sbEFuZFdpZHRoT2ZUZW1wbGF0ZUNvbigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0lzRHNBdXRvUmVmcmVzaFNldHRpbmdPcGVuID0gKGRhdGFzb3VyY2UpOiBib29sZWFuID0+IHtcclxuICAgIGlmICghZGF0YXNvdXJjZSkgcmV0dXJuIGZhbHNlXHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IChkYXRhc291cmNlIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpPy5nZXRBdXRvUmVmcmVzaEludGVydmFsKCkgfHwgMFxyXG4gICAgcmV0dXJuIGludGVydmFsID4gMFxyXG4gIH1cclxuXHJcbiAgb25Ob0RhdGFNZXNzYWdlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLm9uUHJvcGVydHlDaGFuZ2UoJ25vRGF0YU1lc3NhZ2UnLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlclRlbXBsYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgaXNUZW1wbGF0ZUNvbnRhaW5TY3JvbGwgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uQ2xhc3MgPSBpc1RlbXBsYXRlQ29udGFpblNjcm9sbFxyXG4gICAgICA/ICdwb3NpdGlvbi1hYnNvbHV0ZSBwb3NpdGlvbi1hYnNvbHV0ZS1jb24nXHJcbiAgICAgIDogJ3Bvc2l0aW9uLXJlbGF0aXZlLWNvbidcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgcmVmPXtyZWYgPT4geyB0aGlzLnNldFRlbXBsYXRlc0NvbnRhaW4ocmVmKSB9fT5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnY2hvb3NlVGVtcGxhdGVUaXAnKX0+XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXlvdXRSb3cnKX0gbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGF5b3V0Um93Jyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3R5bGUtZ3JvdXAgdy0xMDAnPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e0l0ZW1TdHlsZS5TdHlsZTV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1TdHlsZUltYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RSb3dUZW1wbGF0ZVRpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogMVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYXV0b0ZsaXBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3R5bGUtaW1nICR7Y29uZmlnLml0ZW1TdHlsZSA9PT0gSXRlbVN0eWxlLlN0eWxlNSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICdhY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGljb249e3JlcXVpcmUoJy4vYXNzZXRzL3N0eWxlNi5wbmcnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnRpY2FsLXNwYWNlJyAvPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtJdGVtU3R5bGUuU3R5bGU0fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtU3R5bGVJbWFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdsaXN0Um93VGVtcGxhdGVUaXRsZScsIHtcclxuICAgICAgICAgICAgICAgICAgaW5kZXg6IDJcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0eWxlLWltZyAke2NvbmZpZy5pdGVtU3R5bGUgPT09IEl0ZW1TdHlsZS5TdHlsZTQgJiZcclxuICAgICAgICAgICAgICAgICAgICAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZTUucG5nJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbC1zcGFjZScgLz5cclxuXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17SXRlbVN0eWxlLlN0eWxlNn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGlja31cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RSb3dUZW1wbGF0ZVRpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogM1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYXV0b0ZsaXBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3R5bGUtaW1nIGxvdyAke2NvbmZpZy5pdGVtU3R5bGUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgSXRlbVN0eWxlLlN0eWxlNiAmJiAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZTcucG5nJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICB7LyogQ29sdW1uIHRlbXBsYXRlICovfVxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgZmxvdz0nd3JhcCcgcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGF5b3V0Q29sdW1uJyl9IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xheW91dENvbHVtbicpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0eWxlLWdyb3VwIHctMTAwIHN0eWxlLWltZyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAnPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e0l0ZW1TdHlsZS5TdHlsZTB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1TdHlsZUltYWdlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGVtcGxhdGUtaWNvbi1tYXJnaW4tcidcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RDb2x1bXVUZW1wbGF0ZVRpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogMVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3R5bGUtaW1nIHN0eWxlLWltZy1oICR7Y29uZmlnLml0ZW1TdHlsZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICBJdGVtU3R5bGUuU3R5bGUwICYmICdhY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGljb249e3JlcXVpcmUoJy4vYXNzZXRzL3N0eWxlMS5wbmcnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17SXRlbVN0eWxlLlN0eWxlMX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGlja31cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGlzdENvbHVtdVRlbXBsYXRlVGl0bGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAyXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHlsZS1pbWcgc3R5bGUtaW1nLWggJHtjb25maWcuaXRlbVN0eWxlID09PVxyXG4gICAgICAgICAgICAgICAgICAgIEl0ZW1TdHlsZS5TdHlsZTEgJiYgJ2FjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17cmVxdWlyZSgnLi9hc3NldHMvc3R5bGUyLnBuZycpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbC1zcGFjZSB3LTEwMCcgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0eWxlLWdyb3VwIHctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17SXRlbVN0eWxlLlN0eWxlMn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGlja31cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZW1wbGF0ZS1pY29uLW1hcmdpbi1yJ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGlzdENvbHVtdVRlbXBsYXRlVGl0bGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAzXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBhdXRvRmxpcFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdHlsZS1pbWcgc3R5bGUtaW1nLWggJHtjb25maWcuaXRlbVN0eWxlID09PVxyXG4gICAgICAgICAgICAgICAgICAgIEl0ZW1TdHlsZS5TdHlsZTIgJiYgJ2FjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17cmVxdWlyZSgnLi9hc3NldHMvc3R5bGUzLnBuZycpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtJdGVtU3R5bGUuU3R5bGUzfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtU3R5bGVJbWFnZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVydGlhcnknXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdsaXN0Q29sdW11VGVtcGxhdGVUaXRsZScsIHtcclxuICAgICAgICAgICAgICAgICAgaW5kZXg6IDRcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0eWxlLWltZyBzdHlsZS1pbWctaCAke2NvbmZpZy5pdGVtU3R5bGUgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgSXRlbVN0eWxlLlN0eWxlMyAmJiAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZTQucG5nJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuXHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXlvdXRHcmlkJyl9IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xheW91dEdyaWQnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdHlsZS1ncm91cCB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17SXRlbVN0eWxlLlN0eWxlOH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGlja31cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RHcmlkVGVtcGxhdGVUaXRsZScsIHtcclxuICAgICAgICAgICAgICAgICAgaW5kZXg6IDFcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9GbGlwXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0eWxlLWltZyAke2NvbmZpZy5pdGVtU3R5bGUgPT09IEl0ZW1TdHlsZS5TdHlsZTggJiZcclxuICAgICAgICAgICAgICAgICAgICAnYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9zdHlsZTgucG5nJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbC1zcGFjZScgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJ0aWNhbC1zcGFjZScgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0eWxlLWdyb3VwIHctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCc+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17SXRlbVN0eWxlLlN0eWxlOX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlSW1hZ2VDbGlja31cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZW1wbGF0ZS1pY29uLW1hcmdpbi1yJ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGlzdEdyaWRUZW1wbGF0ZVRpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogMlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgYXV0b0ZsaXBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3R5bGUtaW1nIHN0eWxlLWltZy1oICR7Y29uZmlnLml0ZW1TdHlsZSA9PT1cclxuICAgICAgICAgICAgICAgICAgICBJdGVtU3R5bGUuU3R5bGU5ICYmICdhY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGljb249e3JlcXVpcmUoJy4vYXNzZXRzL3N0eWxlOS5wbmcnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3R5bGUtZ3JvdXAgdy0xMDAnPlxyXG4gICAgICAgICAgICAgIDxkaXYgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnZW1wdHlUZW1wbGF0ZUNoZWNrYm94U3RyaW5nJyl9IGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnZW1wdHlUZW1wbGF0ZUNoZWNrYm94U3RyaW5nJyl9IGNsYXNzTmFtZT0nZC1mbGV4IHctMTAwIGN1cnNvci1wb2ludGVyJyBzdHlsZT17eyBwYWRkaW5nTGVmdDogMCwgcGFkZGluZ1JpZ2h0OiAwIH19IG9uQ2xpY2s9eygpID0+IHsgdGhpcy5oYW5kbGVDaGVja0VtcHR5VGVtcGxhdGVDaGFuZ2UoKSB9fT5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdlbXB0eVRlbXBsYXRlQ2hlY2tib3hTdHJpbmcnKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NrLWl0ZW0tcmF0aW8nXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZmllbGQ9J2lzQ2hlY2tFbXB0eVRlbXBsYXRlJ1xyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWc/LmlzQ2hlY2tFbXB0eVRlbXBsYXRlIHx8IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2VtcHR5VGVtcGxhdGVDaGVja2JveFN0cmluZycpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2NrLWl0ZW0tcmF0aW8tbGFiZWwgdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TWVzc2FnZSgnZW1wdHlUZW1wbGF0ZUNoZWNrYm94U3RyaW5nJyl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXJ0LWNvbiB3LTEwMCcgY3NzPXt0aGlzLmdldFN0YXJ0QnV0dG9uU3R5bGUoKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0YXJ0QnV0dG9uQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbVN0eWxlQ29uZmlybUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXRNZXNzYWdlKCdzdGFydCcpfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZ2V0U3RhcnRCdXR0b25TdHlsZSA9ICgpOiBTZXJpYWxpemVkU3R5bGVzID0+IHtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgdGVtcGxhdGVDb25XaWR0aCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgJi5zdGFydC1jb24ge1xyXG4gICAgICAgICYge1xyXG4gICAgICAgICAgaGVpZ2h0OiAke3BvbGlzaGVkLnJlbSg2NCl9O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtwb2xpc2hlZC5yZW0oLTE2KX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3NpdGlvbi1hYnNvbHV0ZS1jb24sIC5wb3NpdGlvbi1yZWxhdGl2ZS1jb24ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6ICR7cG9saXNoZWQucmVtKC0xNil9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgxNil9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFszMDBdfTtcclxuICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICB3aWR0aDogJHt0ZW1wbGF0ZUNvbldpZHRoID8gYCR7dGVtcGxhdGVDb25XaWR0aH1weGAgOiAnMTAwJSd9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICByZW5kZXJEYXRhU2V0dGluZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YXNvdXJjZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgeyB1c2VEYXRhU291cmNlcywgc2VsZWN0aW9uSXNJblNlbGYsIGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyghdGhpcy5zdGF0ZS5kYXRhc291cmNlID8gJ25vLWJvdHRvbS1ib3JkZXInIDogJycpfT5cclxuICAgICAgICB7LyogPFNldHRpbmdSb3cgbGFiZWw9eydleHBvcnQgc3R5bGUnfT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9uRXhwb3J0Q2xpY2t9ID5UZXN0PC9CdXR0b24+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PiAqL31cclxuICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBvdmVyZmxvdy1oaWRkZW4gYWxpZ24tbWlkZGxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1ncm93LTEgdy0xMDAgb3ZlcmZsb3ctaGlkZGVuJz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmVzZXR0aW5nLXRlbXBsYXRlIGFsaWduLW1pZGRsZSdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVzZXRJdGVtc3R5bGVDbGlja31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Jlc2V0dGluZ1RoZVRlbXBsYXRlJyl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TWVzc2FnZSgncmVzZXR0aW5nVGhlVGVtcGxhdGUnKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhbGlnbi1taWRkbGUnPnt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2N1c3RvbUxpc3REZXNpZ24nKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VG9vbHRpcFxyXG4gICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RVc2VHdWlkZScpfVxyXG4gICAgICAgICAgICAgIHNob3dBcnJvd1xyXG4gICAgICAgICAgICAgIHBsYWNlbWVudD0nbGVmdCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdsaXN0LWd1aWRlLXRpcC1idXR0b24nIHR5cGU9J3RlcnRpYXJ5JyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RVc2VHdWlkZScpfT5cclxuICAgICAgICAgICAgICAgIDxJbmZvT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnIGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2RhdGEnKX0gYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdkYXRhJyl9PlxyXG4gICAgICAgICAgeyFzZWxlY3Rpb25Jc0luU2VsZiAmJiAoXHJcbiAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgICB0eXBlcz17RFNTZWxlY3RvclR5cGVzfVxyXG4gICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YUNoYW5nZX1cclxuICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSdsaXN0LWVtcHR5LXRpcCdcclxuICAgICAgICAgICAgICAvLyBmaWx0ZXJFbmFibGVkPXt0cnVlfSBzb3J0RW5hYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvLyBzb3J0Q29uZmlnPXtJbW11dGFibGUoc29ydENvbmZpZyl9XHJcbiAgICAgICAgICAgICAgLy8gZmlsdGVyQ29uZmlnPXtJbW11dGFibGUoZmlsdGVyQ29uZmlnKX1cclxuICAgICAgICAgICAgICAvLyBvbkZpbHRlckNoYW5nZT17dGhpcy5vbkZpbHRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAvLyBvblNvcnRDaGFuZ2U9e3RoaXMub25EU1NlbGVjdG9yU29ydENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlPy5kYXRhc291cmNlICYmIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnIGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ25vRGF0YU1lc3NhZ2UnKX0gYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdub0RhdGFNZXNzYWdlJyl9PlxyXG4gICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdub0RhdGFNZXNzYWdlJyl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ25vRGF0YScpfVxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2NvbmZpZz8ubm9EYXRhTWVzc2FnZSB8fCAnJ31cclxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5vbk5vRGF0YU1lc3NhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz59XHJcbiAgICAgICAge3RoaXMuY2hlY2tJc0RzQXV0b1JlZnJlc2hTZXR0aW5nT3BlbihkYXRhc291cmNlKSAmJiA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXN0VXBkYXRlVGV4dCcpfSByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXN0VXBkYXRlVGV4dCcpfT5cclxuICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmlzU2hvd0F1dG9SZWZyZXNofVxyXG4gICAgICAgICAgICBkYXRhLWZpZWxkPSdpc1Nob3dBdXRvUmVmcmVzaCdcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGFzdFVwZGF0ZVRleHQnKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93Pn1cclxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGhhbmRsZUxheW91dENoYW5nZSA9IChsYXlvdXRUeXBlOiBMaXN0TGF5b3V0VHlwZSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcsIGJyb3dzZXJTaXplTW9kZSwgd2lkZ2V0UmVjdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZy5zZXQoJ2xheW91dFR5cGUnLCBsYXlvdXRUeXBlKS5zZXQoJ2hvcml6b250YWxTcGFjZScsIERFRkFVTFRfU1BBQ0UpLnNldCgndmVydGljYWxTcGFjZScsIERFRkFVTFRfU1BBQ0UpXHJcbiAgICBjb25zdCBjYXJkU2l6ZSA9IHRoaXMuZ2V0Q2FyZFNpemVVbml0KHRoaXMucHJvcHMpXHJcbiAgICBjb25zdCBpdGVtU3R5bGUgPSBkZWZhdWx0Q2FyZExheW91dFtjb25maWcuaXRlbVN0eWxlXVxyXG4gICAgbGV0IG5ld0NhcmRTaXplXHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBsYXlvdXRUeXBlID09PSBMaXN0TGF5b3V0VHlwZS5Db2x1bW4gPyBEaXJlY3Rpb25UeXBlPy5Ib3Jpem9uIDogRGlyZWN0aW9uVHlwZS5WZXJ0aWNhbFxyXG4gICAgaWYgKGl0ZW1TdHlsZSA9PT0gbGF5b3V0VHlwZSkge1xyXG4gICAgICBuZXdDYXJkU2l6ZSA9IGRlZmF1bHRDYXJkU2l6ZVtjb25maWcuaXRlbVN0eWxlXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3dpdGNoIChsYXlvdXRUeXBlKSB7XHJcbiAgICAgICAgY2FzZSBMaXN0TGF5b3V0VHlwZS5HUklEOlxyXG4gICAgICAgICAgbmV3Q2FyZFNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjUlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBgJHtERUZBVUxUX0NBUkRfU0laRX1weGBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBMaXN0TGF5b3V0VHlwZS5Db2x1bW46XHJcbiAgICAgICAgICBuZXdDYXJkU2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICczMjBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogY2FyZFNpemU/LmhlaWdodD8udW5pdCA9PT0gRGlzdGFuY2VVbml0cy5QRVJDRU5UQUdFID8gYCR7d2lkZ2V0UmVjdC5oZWlnaHQgKiBjYXJkU2l6ZT8uaGVpZ2h0Py5kaXN0YW5jZSAvIDEwMH1weGAgOiBgJHtjYXJkU2l6ZT8uaGVpZ2h0Py5kaXN0YW5jZX1weGBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBMaXN0TGF5b3V0VHlwZS5Sb3c6XHJcbiAgICAgICAgICBuZXdDYXJkU2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhcmRTaXplPy53aWR0aD8udW5pdCA9PT0gRGlzdGFuY2VVbml0cy5QRVJDRU5UQUdFID8gYCR7d2lkZ2V0UmVjdC53aWR0aCAqIGNhcmRTaXplPy53aWR0aD8uZGlzdGFuY2UgLyAxMDB9cHhgIDogYCR7Y2FyZFNpemU/LndpZHRoPy5kaXN0YW5jZX1weGAsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzIwMHB4J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgbmV3Q2FyZFNpemUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYXJkU2l6ZT8ud2lkdGg/LnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRSA/IGAke3dpZGdldFJlY3Qud2lkdGggKiBjYXJkU2l6ZT8ud2lkdGg/LmRpc3RhbmNlIC8gMTAwfXB4YCA6IGAke2NhcmRTaXplPy53aWR0aD8uZGlzdGFuY2V9cHhgLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhcmRTaXplPy5oZWlnaHQ/LnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRSA/IGAke3dpZGdldFJlY3QuaGVpZ2h0ICogY2FyZFNpemU/LmhlaWdodD8uZGlzdGFuY2UgLyAxMDB9cHhgIDogYCR7Y2FyZFNpemU/LmhlaWdodD8uZGlzdGFuY2V9cHhgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdDb25maWcgPSBuZXdDb25maWcuc2V0SW4oXHJcbiAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuUmVndWxhciwgJ2NhcmRTaXplJywgYnJvd3NlclNpemVNb2RlXSxcclxuICAgICAgbmV3Q2FyZFNpemVcclxuICAgICkuc2V0SW4oXHJcbiAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuSG92ZXIsICdjYXJkU2l6ZScsIGJyb3dzZXJTaXplTW9kZV0sXHJcbiAgICAgIG5ld0NhcmRTaXplXHJcbiAgICApLnNldEluKFxyXG4gICAgICBbJ2NhcmRDb25maWdzJywgU3RhdHVzLlNlbGVjdGVkLCAnY2FyZFNpemUnLCBicm93c2VyU2l6ZU1vZGVdLFxyXG4gICAgICBuZXdDYXJkU2l6ZVxyXG4gICAgKS5zZXRJbihbJ2RpcmVjdGlvbiddLCBkaXJlY3Rpb24pXHJcbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZylcclxuICB9XHJcblxyXG4gIGhhbmRsZUtlZXBBc3BlY3RSYXRpb0NoYW5nZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBjYXJkU2l6ZSA9IHRoaXMuZ2V0Q2FyZFNpemVVbml0KHRoaXMucHJvcHMpXHJcbiAgICBjb25zdCB3aWR0aFB4ID0gdGhpcy5nZXRDYXJkUHhXaWR0aEZvcm1DYXJkU2l6ZSgpXHJcbiAgICBjb25zdCBncmlkSXRlbVNpemVSYXRpbyA9IGNhcmRTaXplLmhlaWdodC5kaXN0YW5jZSAvIHdpZHRoUHhcclxuICAgIGxldCBuZXdDb25maWcgPSBjb25maWcuc2V0KCdrZWVwQXNwZWN0UmF0aW8nLCAhdGhpcy5wcm9wcz8uY29uZmlnPy5rZWVwQXNwZWN0UmF0aW8pXHJcbiAgICBpZiAoIXRoaXMucHJvcHM/LmNvbmZpZz8ua2VlcEFzcGVjdFJhdGlvKSB7XHJcbiAgICAgIG5ld0NvbmZpZyA9IG5ld0NvbmZpZy5zZXQoJ2dyaWRJdGVtU2l6ZVJhdGlvJywgZ3JpZEl0ZW1TaXplUmF0aW8pXHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ29uZmlnQ2hhbmdlKG5ld0NvbmZpZylcclxuICB9XHJcblxyXG4gIGhhbmRsZUdyaWRJdGVtU2l6ZVJhdGlvQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJhdGlvID0gTnVtYmVyKHZhbHVlPy5zcGxpdCgnOicpWzFdKSAvIE51bWJlcih2YWx1ZT8uc3BsaXQoJzonKVswXSlcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCBvbGRDYXJkU2l6ZSA9IHRoaXMuZ2V0Q2FyZFNpemVJbkdyaWRCeVJhdGlvKHJhdGlvKVxyXG4gICAgY29uc3QgbmV3Q2FyZFNpemUgPSB7XHJcbiAgICAgIHdpZHRoOiB1aVV0aWxzLnN0cmluZ09mTGluZWFyVW5pdChvbGRDYXJkU2l6ZS53aWR0aCksXHJcbiAgICAgIGhlaWdodDogdWlVdGlscy5zdHJpbmdPZkxpbmVhclVuaXQob2xkQ2FyZFNpemUuaGVpZ2h0KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlUmVzaXplQ2FyZCh0aGlzLnByb3BzLCBuZXdDYXJkU2l6ZSwgY29uZmlnLnNldCgnZ3JpZEl0ZW1TaXplUmF0aW8nLCByYXRpbykpLmV4ZWMoKVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZFNpemVJbkdyaWRCeVJhdGlvID0gKHJhdGlvOiBudW1iZXIpOiBFbGVtZW50U2l6ZVVuaXQgPT4ge1xyXG4gICAgY29uc3Qgb2xkQ2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgY29uc3QgcHhXaWR0aCA9IHRoaXMuZ2V0Q2FyZFB4V2lkdGhGb3JtQ2FyZFNpemUoKVxyXG4gICAgb2xkQ2FyZFNpemUuaGVpZ2h0LmRpc3RhbmNlID0gcmF0aW8gKiBweFdpZHRoXHJcbiAgICByZXR1cm4gb2xkQ2FyZFNpemVcclxuICB9XHJcblxyXG4gIGdldENhcmRQeFdpZHRoRm9ybUNhcmRTaXplID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgY2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgaWYgKGNhcmRTaXplLndpZHRoLnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRSkge1xyXG4gICAgICBjb25zdCBsaXN0Q29udGVudFdpZHRoID0gdGhpcy5nZXRMaXN0QWN0dWFsQ29udGVudFB4V2lkdGgoKVxyXG4gICAgICAvL1RoZSBzcGFjZSBpbiB0aGUgbGFzdCBjb2x1bW4gc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgcmV0dXJuIGNhcmRTaXplLndpZHRoLmRpc3RhbmNlICogbGlzdENvbnRlbnRXaWR0aCAvIDEwMCAtIGNvbmZpZz8uaG9yaXpvbnRhbFNwYWNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2FyZFNpemUud2lkdGguZGlzdGFuY2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUdyaWRJdGVtU2l6ZUNoYW5nZSA9ICh2YWx1ZUludDogTGluZWFyVW5pdCwgaXNIZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcsIHdpZGdldFJlY3QgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IG9sZENhcmRTaXplVW5pdCA9IHRoaXMuZ2V0Q2FyZFNpemVVbml0KHRoaXMucHJvcHMpXHJcbiAgICBjb25zdCBvbGRTaXplID0gaXNIZWlnaHQgPyBvbGRDYXJkU2l6ZVVuaXQ/LmhlaWdodCA6IG9sZENhcmRTaXplVW5pdD8ud2lkdGhcclxuICAgIGNvbnN0IGxpc3RDb25TaXplID0gaXNIZWlnaHQgPyB3aWRnZXRSZWN0Py5oZWlnaHQgOiB0aGlzLmdldExpc3RBY3R1YWxDb250ZW50UHhXaWR0aCgpXHJcbiAgICBjb25zdCBuZXdDYXJkU2l6ZSA9IHRoaXMuZ2V0Q2FyZFNpemUoKVxyXG5cclxuICAgIGxldCBtaW5TaXplID0gTElTVF9DQVJEX01JTl9TSVpFXHJcbiAgICBpZiAodmFsdWVJbnQ/LnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRSkge1xyXG4gICAgICBtaW5TaXplID0gaXNIZWlnaHQgPyAoTElTVF9DQVJEX01JTl9TSVpFICogMTAwKSAvIGxpc3RDb25TaXplIDogKChMSVNUX0NBUkRfTUlOX1NJWkUgKyBjb25maWc/Lmhvcml6b250YWxTcGFjZSkgKiAxMDApIC8gbGlzdENvblNpemVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpc0Rpc3RhbmNlVW5pdHNDaGFuZ2UgPSB0aGlzLmNoZWNrSXNEaXN0YW5jZVVuaXRzQ2hhbmdlKHZhbHVlSW50LCBpc0hlaWdodClcclxuICAgIGlmIChpc0Rpc3RhbmNlVW5pdHNDaGFuZ2UgJiYgIWlzSGVpZ2h0KSB7XHJcbiAgICAgIGlmICh2YWx1ZUludC51bml0ID09PSBEaXN0YW5jZVVuaXRzLlBJWEVMKSB7XHJcbiAgICAgICAgdmFsdWVJbnQuZGlzdGFuY2UgPSBvbGRTaXplLmRpc3RhbmNlICogbGlzdENvblNpemUgLyAxMDAgLSBjb25maWc/Lmhvcml6b250YWxTcGFjZVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh2YWx1ZUludC51bml0ID09PSBEaXN0YW5jZVVuaXRzLlBFUkNFTlRBR0UpIHtcclxuICAgICAgICB2YWx1ZUludC5kaXN0YW5jZSA9ICgob2xkU2l6ZS5kaXN0YW5jZSArIGNvbmZpZz8uaG9yaXpvbnRhbFNwYWNlKSAqIDEwMCkgLyBsaXN0Q29uU2l6ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUludC5kaXN0YW5jZSA8IG1pblNpemUgPyBtaW5TaXplIDogdmFsdWVJbnQuZGlzdGFuY2VcclxuICAgIHZhbHVlSW50LmRpc3RhbmNlID0gdmFsdWVcclxuXHJcbiAgICBpZiAoaXNIZWlnaHQpIHtcclxuICAgICAgbmV3Q2FyZFNpemUuaGVpZ2h0ID0gdWlVdGlscy5zdHJpbmdPZkxpbmVhclVuaXQodmFsdWVJbnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdDYXJkU2l6ZS53aWR0aCA9IHVpVXRpbHMuc3RyaW5nT2ZMaW5lYXJVbml0KHZhbHVlSW50KVxyXG4gICAgICBjb25zdCB3aWR0aFB4ID0gdmFsdWVJbnQ/LnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUEVSQ0VOVEFHRSA/ICh2YWx1ZSAqIGxpc3RDb25TaXplIC8gMTAwKSA6IHZhbHVlXHJcbiAgICAgIGlmIChjb25maWc/LmtlZXBBc3BlY3RSYXRpbykge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpZHRoUHggKiBjb25maWc/LmdyaWRJdGVtU2l6ZVJhdGlvXHJcbiAgICAgICAgbmV3Q2FyZFNpemUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVSZXNpemVDYXJkKHRoaXMucHJvcHMsIG5ld0NhcmRTaXplLCBjb25maWcpLmV4ZWMoKVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdEFjdHVhbENvbnRlbnRQeFdpZHRoID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgd2lkZ2V0UmVjdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuICh3aWRnZXRSZWN0Py53aWR0aCArIGNvbmZpZz8uaG9yaXpvbnRhbFNwYWNlIC0gU0NST0xMX0JBUl9XSURUSCkgfHwgMFxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc0Rpc3RhbmNlVW5pdHNDaGFuZ2UgPSAodmFsdWVJbnQ6IExpbmVhclVuaXQsIGlzSGVpZ2h0OiBib29sZWFuKTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBvbGRDYXJkU2l6ZVVuaXQgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgY29uc3Qgc2l6ZSA9IGlzSGVpZ2h0ID8gb2xkQ2FyZFNpemVVbml0Py5oZWlnaHQgOiBvbGRDYXJkU2l6ZVVuaXQ/LndpZHRoXHJcbiAgICBpZiAodmFsdWVJbnQudW5pdCA9PT0gc2l6ZS51bml0KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIGlmICghc2l6ZS51bml0ICYmIHZhbHVlSW50LnVuaXQgPT09IERpc3RhbmNlVW5pdHMuUElYRUwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQXJyYW5nZW1lbnRTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgc2V0dGluZ0NvbGxhcHNlIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDxDb2xsYXBzYWJsZVBhbmVsXHJcbiAgICAgICAgICBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdhcnJhbmdlbWVudCcpfVxyXG4gICAgICAgICAgaXNPcGVuPXtzZXR0aW5nQ29sbGFwc2UgPT09IFNldHRpbmdDb2xsYXBzZVR5cGUuQXJyYW5nZW1lbnR9XHJcbiAgICAgICAgICBvblJlcXVlc3RPcGVuPXsoKSA9PiB7IHRoaXMub3BlblNldHRpbmdDb2xsYXBzZShTZXR0aW5nQ29sbGFwc2VUeXBlLkFycmFuZ2VtZW50KSB9fVxyXG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VTZXR0aW5nQ29sbGFwc2V9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2FycmFuZ2VtZW50Jyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgY2xhc3NOYW1lPVwibXQtMlwiIGZsb3c9J3dyYXAnIGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xheW91dCcpfSByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXlvdXQnKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGxpc3QtbGF5b3V0LXNlbGVjdC1jb24nPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbiB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXlvdXRSb3cnKX0gYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsYXlvdXRSb3cnKX0gYWN0aXZlPXtjb25maWc/LmxheW91dFR5cGUgPT09IExpc3RMYXlvdXRUeXBlLlJvd30gb25DbGljaz17KCkgPT4geyB0aGlzLmhhbmRsZUxheW91dENoYW5nZShMaXN0TGF5b3V0VHlwZS5Sb3cpIH19IGNsYXNzTmFtZT0nZmxleC1zbS1ncm93LTEnIHNpemU9J2xnJz5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc3R5bGUtaW1nIHctMTAwIGgtMTAwJyBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9yb3cucG5nJyl9Lz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb24gdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGF5b3V0Q29sdW1uJyl9IGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGF5b3V0Q29sdW1uJyl9IGFjdGl2ZT17Y29uZmlnPy5sYXlvdXRUeXBlID09PSBMaXN0TGF5b3V0VHlwZS5Db2x1bW59IG9uQ2xpY2s9eygpID0+IHsgdGhpcy5oYW5kbGVMYXlvdXRDaGFuZ2UoTGlzdExheW91dFR5cGUuQ29sdW1uKSB9fSBjbGFzc05hbWU9J21sLTIgZmxleC1zbS1ncm93LTEnIHNpemU9J2xnJz5cclxuICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc3R5bGUtaW1nIHctMTAwIGgtMTAwJyBpY29uPXtyZXF1aXJlKCcuL2Fzc2V0cy9jb2x1bW4ucG5nJyl9Lz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGljb24gdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGF5b3V0R3JpZCcpfSBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xheW91dEdyaWQnKX0gYWN0aXZlPXtjb25maWc/LmxheW91dFR5cGUgPT09IExpc3RMYXlvdXRUeXBlLkdSSUR9IG9uQ2xpY2s9eygpID0+IHsgdGhpcy5oYW5kbGVMYXlvdXRDaGFuZ2UoTGlzdExheW91dFR5cGUuR1JJRCkgfX0gY2xhc3NOYW1lPSdtbC0yIGZsZXgtc20tZ3Jvdy0xJyBzaXplPSdsZyc+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3N0eWxlLWltZyB3LTEwMCBoLTEwMCcgaWNvbj17cmVxdWlyZSgnLi9hc3NldHMvZ3JpZC5wbmcnKX0vPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uZmlnPy5sYXlvdXRUeXBlICE9PSBMaXN0TGF5b3V0VHlwZS5HUklEID8gdGhpcy5yZW5kZXJSb3dDb2x1bW5MYXlvdXRTZXR0aW5nKCkgOiB0aGlzLnJlbmRlckdyaWRMYXlvdXRTZXR0aW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3BhZ2luZ1N0eWxlJyl9IGZsb3c9J3dyYXAnIHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3BhZ2luZ1N0eWxlJyl9PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWcucGFnZVN0eWxlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhZ2VTdHlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLmdldFBhZ2VTdHlsZU9wdGlvbnMoKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICB7Y29uZmlnLnBhZ2VTdHlsZSA9PT0gUGFnZVN0eWxlLlNjcm9sbCAmJiAoXHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Njcm9sbEJhcicpfSBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Njcm9sbEJhcicpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLnNjcm9sbEJhck9wZW59XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZmllbGQ9J3Njcm9sbEJhck9wZW4nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Njcm9sbEJhcicpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb25maWcucGFnZVN0eWxlID09PSBQYWdlU3R5bGUuU2Nyb2xsICYmIChcclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbmF2aWdhdG9yJyl9IGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbmF2aWdhdG9yJyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcubmF2aWdhdG9yT3Blbn1cclxuICAgICAgICAgICAgICAgICAgZGF0YS1maWVsZD0nbmF2aWdhdG9yT3BlbidcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbmF2aWdhdG9yJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbmZpZy5wYWdlU3R5bGUgPT09IFBhZ2VTdHlsZS5TY3JvbGwgJiYgY29uZmlnLm5hdmlnYXRvck9wZW4gJiYgKFxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsaXN0U3RlcCcpfSBmbG93PSd3cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdsaXN0U3RlcCcpfT5cclxuICAgICAgICAgICAgICA8TXlOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuc2Nyb2xsU3RlcH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e3RoaXMuaGFuZGxlU2Nyb2xsU3RlcENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge2NvbmZpZy5wYWdlU3R5bGUgPT09IFBhZ2VTdHlsZS5NdWx0aVBhZ2UgJiYgKFxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdpdGVtUGVyUGFnZScpfSBmbG93PSd3cmFwJyByb2xlPSdncm91cCcgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdpdGVtUGVyUGFnZScpfT5cclxuICAgICAgICAgICAgICA8TXlOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuaXRlbXNQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgbWluPXsxfVxyXG4gICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5oYW5kbGVJdGVtc1BlclBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0NvbGxhcHNhYmxlUGFuZWw+XHJcbiAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBbGlnbm1lbnRDaGFuZ2UgPSAoYWxpZ25tZW50OiBUZXh0QWxpZ25WYWx1ZSkgPT4ge1xyXG4gICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCdncmlkQWxpZ25tZW50JywgYWxpZ25tZW50KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyR3JpZExheW91dFNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgY2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgY29uc3QgYXZhaWxhYmxlVW5pdHMgPSBbRGlzdGFuY2VVbml0cy5QSVhFTCwgRGlzdGFuY2VVbml0cy5QRVJDRU5UQUdFXVxyXG4gICAgY29uc3QgaGVpZ2h0QXZhaWxhYmxlVW5pdHMgPSBbRGlzdGFuY2VVbml0cy5QSVhFTF1cclxuICAgIGNvbnN0IGlucHV0U3R5bGUgPSB7IHdpZHRoOiAnNy41cmVtJyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMyc+XHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZ2V0SXRlbVNpemVMYWJlbCgpfSBmbG93PSd3cmFwJy8+XHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnd2lkdGgnKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1zaXplLWVkaXQnPlxyXG4gICAgICAgICAgICA8U2l6ZUVkaXRvclxyXG4gICAgICAgICAgICAgIGRpc2FibGVNb2RlU2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWw9J1cnXHJcbiAgICAgICAgICAgICAgbW9kZT17TGF5b3V0SXRlbVNpemVNb2Rlcy5DdXN0b219XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhcmRTaXplPy53aWR0aH1cclxuICAgICAgICAgICAgICBhdmFpbGFibGVVbml0cz17YXZhaWxhYmxlVW5pdHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHsgdGhpcy5oYW5kbGVHcmlkSXRlbVNpemVDaGFuZ2UodmFsdWUpIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdtbC0zIGQtZmxleCdcclxuICAgICAgICAgIGNzcz17Y3NzYFxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xpc3RLZWVwQXNwZWN0UmF0aW8nKX0gcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbicgb25DbGljaz17dGhpcy5oYW5kbGVLZWVwQXNwZWN0UmF0aW9DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgIHtjb25maWc/LmtlZXBBc3BlY3RSYXRpbyA/IDxMb2NrT3V0bGluZWQgc2l6ZT0ncycgLz4gOiA8VW5sb2NrT3V0bGluZWQgc2l6ZT0ncycgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2hlaWdodCcpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LXNpemUtZWRpdCc+XHJcbiAgICAgICAgICAgIDxTaXplRWRpdG9yXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0gnXHJcbiAgICAgICAgICAgICAgZGlzYWJsZU1vZGVTZWxlY3RcclxuICAgICAgICAgICAgICBtb2RlPXtMYXlvdXRJdGVtU2l6ZU1vZGVzLkN1c3RvbX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y2FyZFNpemU/LmhlaWdodH1cclxuICAgICAgICAgICAgICBhdmFpbGFibGVVbml0cz17aGVpZ2h0QXZhaWxhYmxlVW5pdHN9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHsgdGhpcy5oYW5kbGVHcmlkSXRlbVNpemVDaGFuZ2UodmFsdWUsIHRydWUpIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NvbmZpZz8ua2VlcEFzcGVjdFJhdGlvfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIHtjb25maWc/LmtlZXBBc3BlY3RSYXRpbyAmJlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2l6ZUFzcGVjdFJhdGlvJyl9PlxyXG4gICAgICAgICAgICA8SW5wdXRSYXRpbyBzdHlsZT17aW5wdXRTdHlsZX0gdmFsdWU9e2NvbmZpZy5ncmlkSXRlbVNpemVSYXRpb30gb25DaGFuZ2U9e3RoaXMuZGVib3VuY2VHcmlkSXRlbVNpemVSYXRpb0NoYW5nZX0gLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz59XHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnYWxpZ25tZW50Jyl9PlxyXG4gICAgICAgICAgPFRleHRBbGlnbm1lbnRcclxuICAgICAgICAgICAgdGV4dEFsaWduPXtjb25maWc/LmdyaWRBbGlnbm1lbnQgfHwgVGV4dEFsaWduVmFsdWUuQ0VOVEVSfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBbGlnbm1lbnRDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgZmxvdz0nd3JhcCdcclxuICAgICAgICAgIGxhYmVsPXtgJHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2hvcml6b250YWxTcGFjaW5nJyl9IChweClgfVxyXG4gICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtgJHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2hvcml6b250YWxTcGFjaW5nJyl9IChweClgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjAlJyB9fVxyXG4gICAgICAgICAgICAgIGRhdGEtZmllbGQ9J2hvcml6b250YWxTcGFjZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWc/Lmhvcml6b250YWxTcGFjZSB8fCAwfVxyXG4gICAgICAgICAgICAgIHRpdGxlPScwLTUwJ1xyXG4gICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICBtYXg9ezUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TXlOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI1JScgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnPy5ob3Jpem9udGFsU3BhY2UgfHwgMH1cclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXs1MH1cclxuICAgICAgICAgICAgICB0aXRsZT0nMC01MCdcclxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXt0aGlzLmhhbmRsZUhvcml6b250YWxTcGFjZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgZmxvdz0nd3JhcCdcclxuICAgICAgICAgIGxhYmVsPXtgJHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3ZlcnRpY2FsU3BhY2luZycpfSAocHgpYH1cclxuICAgICAgICAgIHJvbGU9J2dyb3VwJ1xyXG4gICAgICAgICAgYXJpYS1sYWJlbD17YCR7dGhpcy5mb3JtYXRNZXNzYWdlKCd2ZXJ0aWNhbFNwYWNpbmcnKX0gKHB4KWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc2MCUnIH19XHJcbiAgICAgICAgICAgICAgZGF0YS1maWVsZD0ndmVydGljYWxTcGFjZSdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb25maWc/LnZlcnRpY2FsU3BhY2UgfHwgMH1cclxuICAgICAgICAgICAgICB0aXRsZT0nMC01MCdcclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXs1MH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE15TnVtZXJpY0lucHV0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyNSUnIH19XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy52ZXJ0aWNhbFNwYWNlIHx8IDB9XHJcbiAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgIG1heD17NTB9XHJcbiAgICAgICAgICAgICAgdGl0bGU9JzAtNTAnXHJcbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5oYW5kbGVWZXJ0aWNhbFNwYWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlclJvd0NvbHVtbkxheW91dFNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgY2FyZFNpemUgPSB0aGlzLmdldENhcmRTaXplVW5pdCh0aGlzLnByb3BzKVxyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IGNvbmZpZz8ubGF5b3V0VHlwZSA/IGNvbmZpZz8ubGF5b3V0VHlwZSA9PT0gTGlzdExheW91dFR5cGUuUm93IDogY29uZmlnLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uVHlwZS5WZXJ0aWNhbFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J210LTMnPlxyXG4gICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICBmbG93PSd3cmFwJ1xyXG4gICAgICAgICAgbGFiZWw9e3RoaXMuZ2V0SXRlbVNpemVMYWJlbCgpfVxyXG4gICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPXsoaXNWZXJ0aWNhbCA/IHRoaXMuZm9ybWF0TWVzc2FnZSgnaXRlbUhlaWdodCcpIDogdGhpcy5mb3JtYXRNZXNzYWdlKCdpdGVtV2lkdGgnKSkgKyAnIChweCknfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNeU51bWVyaWNJbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXJzZUZsb2F0KChpc1ZlcnRpY2FsID8gY2FyZFNpemUuaGVpZ2h0LmRpc3RhbmNlIDogY2FyZFNpemUud2lkdGguZGlzdGFuY2UpLnRvRml4ZWQoMCkpfVxyXG4gICAgICAgICAgICBtaW49e0xJU1RfQ0FSRF9NSU5fU0laRX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2NvbmZpZy5sb2NrSXRlbVJhdGlvfVxyXG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXt0aGlzLmhhbmRsZUl0ZW1TaXplQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9Jyc+XHJcbiAgICAgICAgICA8ZGl2IHRpdGxlPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xvY2tJdGVtUmF0aW8nKX0gY2xhc3NOYW1lPSdkLWZsZXggdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xvY2tJdGVtUmF0aW8nKX0gc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMCB9fSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuaGFuZGxlQ2hlY2tib3hDaGFuZ2UoJ2xvY2tJdGVtUmF0aW8nKSB9fT5cclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2NrLWl0ZW0tcmF0aW8nXHJcbiAgICAgICAgICAgICAgZGF0YS1maWVsZD0nbG9ja0l0ZW1SYXRpbydcclxuICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcubG9ja0l0ZW1SYXRpb31cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xvY2tJdGVtUmF0aW8nKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvY2staXRlbS1yYXRpby1sYWJlbCB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgIHt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2xvY2tJdGVtUmF0aW8nKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgIGZsb3c9J3dyYXAnXHJcbiAgICAgICAgICBsYWJlbD17KGlzVmVydGljYWwgPyB0aGlzLmZvcm1hdE1lc3NhZ2UoJ3ZlcnRpY2FsU3BhY2luZycpIDogdGhpcy5mb3JtYXRNZXNzYWdlKCdob3Jpem9udGFsU3BhY2luZycpKSArICcgKHB4KSd9XHJcbiAgICAgICAgICByb2xlPSdncm91cCdcclxuICAgICAgICAgIGFyaWEtbGFiZWw9eyhpc1ZlcnRpY2FsID8gdGhpcy5mb3JtYXRNZXNzYWdlKCd2ZXJ0aWNhbFNwYWNpbmcnKSA6IHRoaXMuZm9ybWF0TWVzc2FnZSgnaG9yaXpvbnRhbFNwYWNpbmcnKSkgKyAnIChweCknfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNjAlJyB9fVxyXG4gICAgICAgICAgICAgIGRhdGEtZmllbGQ9J3NwYWNlJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5zcGFjZSB8fCAwfVxyXG4gICAgICAgICAgICAgIHRpdGxlPScwLTUwJ1xyXG4gICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICBtYXg9ezUwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TXlOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzI1JScgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLnNwYWNlIHx8IDB9XHJcbiAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgIG1heD17NTB9XHJcbiAgICAgICAgICAgICAgdGl0bGU9JzAtNTAnXHJcbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17dGhpcy5oYW5kbGVTcGFjZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBnZXRJdGVtU2l6ZUxhYmVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBjb25maWc/LmxheW91dFR5cGUgPyBjb25maWc/LmxheW91dFR5cGUgPT09IExpc3RMYXlvdXRUeXBlLlJvdyA6IGNvbmZpZy5kaXJlY3Rpb24gPT09IERpcmVjdGlvblR5cGUuVmVydGljYWxcclxuICAgIGNvbnN0IGlzR3JpZCA9IGNvbmZpZz8ubGF5b3V0VHlwZSA9PT0gTGlzdExheW91dFR5cGUuR1JJRFxyXG4gICAgbGV0IGxhYmVsU3RyaW5nXHJcbiAgICBpZiAoaXNHcmlkKSB7XHJcbiAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5mb3JtYXRNZXNzYWdlKCdncmlkSXRlbVNpemUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGFiZWxTdHJpbmcgPSBpc1ZlcnRpY2FsID8gYCR7dGhpcy5mb3JtYXRNZXNzYWdlKCdpdGVtSGVpZ2h0Jyl9IChweClgIDogYCR7dGhpcy5mb3JtYXRNZXNzYWdlKCdpdGVtV2lkdGgnKX0gKHB4KWBcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3Jvdy0xJz5cclxuICAgICAgICB7bGFiZWxTdHJpbmd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7dGhpcy5nZXRCcm93c2VySWNvbnMoMTIpfVxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG5cclxuICBnZXRCcm93c2VySWNvbnMgPSAoaWNvblNpemU6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgeyBzaG93Q2FyZFNldHRpbmcsIGJyb3dzZXJTaXplTW9kZSwgbGF5b3V0cyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgY3VycmVudExheW91dCA9IGxheW91dHNbc2hvd0NhcmRTZXR0aW5nXVxyXG5cclxuICAgIGNvbnN0IGF1dG9NZWRpdW0gPSAhY3VycmVudExheW91dFtCcm93c2VyU2l6ZU1vZGUuTWVkaXVtXVxyXG4gICAgY29uc3QgYXV0b01vYmlsZSA9ICFjdXJyZW50TGF5b3V0W0Jyb3dzZXJTaXplTW9kZS5TbWFsbF1cclxuXHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSB0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLkxhcmdlIHx8ICFjdXJyZW50TGF5b3V0W2Jyb3dzZXJTaXplTW9kZV1cclxuXHJcbiAgICBjb25zdCBpc1BhZCA9ICh0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLkxhcmdlICYmIGF1dG9NZWRpdW0pIHx8XHJcbiAgICAgIHRoaXMucHJvcHMuYnJvd3NlclNpemVNb2RlID09PSBCcm93c2VyU2l6ZU1vZGUuTWVkaXVtIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLlNtYWxsICYmIGF1dG9NZWRpdW0gJiYgYXV0b01vYmlsZSlcclxuXHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICh0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLkxhcmdlICYmIGF1dG9Nb2JpbGUpIHx8XHJcbiAgICAgICh0aGlzLnByb3BzLmJyb3dzZXJTaXplTW9kZSA9PT0gQnJvd3NlclNpemVNb2RlLk1lZGl1bSAmJiBhdXRvTWVkaXVtICYmIGF1dG9Nb2JpbGUpIHx8XHJcbiAgICAgIHRoaXMucHJvcHMuYnJvd3NlclNpemVNb2RlID09PSBCcm93c2VyU2l6ZU1vZGUuU21hbGxcclxuXHJcbiAgICBjb25zdCBjb2xvciA9IHRoaXMucHJvcHMudGhlbWUuY29sb3JzLnBhbGV0dGUuZGFya1syMDBdXHJcblxyXG4gICAgY29uc3QgZGVza3RvcExhYmVsID0gdGhpcy5mb3JtYXRNZXNzYWdlKCdhcHBseVRvTGFyZ2VTY3JlZW4nKVxyXG4gICAgY29uc3QgcGFkTGFiZWwgPSB0aGlzLmZvcm1hdE1lc3NhZ2UoJ2FwcGx5VG9NZWRpdW1TY3JlZW4nKVxyXG4gICAgY29uc3QgbW9iaWxlTGFiZWwgPSB0aGlzLmZvcm1hdE1lc3NhZ2UoJ2FwcGx5VG9TbWFsbFNjcmVlbicpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAge2lzRGVza3RvcCAmJiA8RGVza3RvcE91dGxpbmVkIHNpemU9e2ljb25TaXplfSBjb2xvcj17Y29sb3J9IHRpdGxlPXtkZXNrdG9wTGFiZWx9IGFyaWEtbGFiZWw9e2Rlc2t0b3BMYWJlbH0vPn1cclxuICAgICAgICB7aXNQYWQgJiYgPFRhYmxldE91dGxpbmVkIHNpemU9e2ljb25TaXplfSBjb2xvcj17Y29sb3J9IGNsYXNzTmFtZT17aXNEZXNrdG9wID8gJ21sLTEnIDogJyd9IHRpdGxlPXtwYWRMYWJlbH0gYXJpYS1sYWJlbD17cGFkTGFiZWx9IC8+fVxyXG4gICAgICAgIHtpc01vYmlsZSAmJiA8TW9iaWxlT3V0bGluZWQgc2l6ZT17aWNvblNpemV9IGNvbG9yPXtjb2xvcn0gY2xhc3NOYW1lPXtpc0Rlc2t0b3AgfHwgaXNQYWQgPyAnbWwtMScgOiAnJ30gdGl0bGU9e21vYmlsZUxhYmVsfSBhcmlhLWxhYmVsPXttb2JpbGVMYWJlbH0gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3RhdHNTZXR0aW5nID0gKCk6IFJlYWN0LlJlYWN0Tm9kZSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBzZXR0aW5nQ29sbGFwc2UgfSA9IHRoaXMuc3RhdGVcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICA8Q29sbGFwc2FibGVQYW5lbFxyXG4gICAgICAgICAgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc3RhdGVzJyl9XHJcbiAgICAgICAgICBpc09wZW49e3NldHRpbmdDb2xsYXBzZSA9PT0gU2V0dGluZ0NvbGxhcHNlVHlwZS5TdGF0ZXN9XHJcbiAgICAgICAgICBvblJlcXVlc3RPcGVuPXsoKSA9PiB7IHRoaXMub3BlblNldHRpbmdDb2xsYXBzZShTZXR0aW5nQ29sbGFwc2VUeXBlLlN0YXRlcykgfX1cclxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXt0aGlzLmNsb3NlU2V0dGluZ0NvbGxhcHNlfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdzdGF0ZXMnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgIDxMaW5rU2VsZWN0b3JcclxuICAgICAgICAgICAgICBvblNldHRpbmdDb25maXJtPXt0aGlzLm9uU2V0dGluZ0xpbmtDb25maXJtfVxyXG4gICAgICAgICAgICAgIGxpbmtQYXJhbT17Y29uZmlnLmxpbmtQYXJhbX1cclxuICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHt0aGlzLnJlZG5lckJnU2V0dGluZygpfVxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnaG92ZXInKX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnaG92ZXInKX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NldHRpbmctbmV4dCBkLWZsZXggdGV4dC1icmVhaydcclxuICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtTdGF0dXMuSG92ZXJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk9wZW5DYXJkU2V0dGluZ31cclxuICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5nZXRUb0hvdmVyU2V0dGluZ1RleHQoKX1cclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMudG9Ib3ZlclNldHRpbmdCdXR0b25SZWYgPSByZWYgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+e3RoaXMuZ2V0VG9Ib3ZlclNldHRpbmdUZXh0KCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0T3V0bGluZWQgYXV0b0ZsaXAgc3R5bGU9e3sgZmxleDogJ25vbmUnIH19IHNpemU9ezEyfS8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VsZWN0ZWQnKX0gcm9sZT0nZ3JvdXAnIGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VsZWN0ZWQnKX0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NldHRpbmctbmV4dCBkLWZsZXggdGV4dC1icmVhaydcclxuICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtTdGF0dXMuU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk9wZW5DYXJkU2V0dGluZ31cclxuICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICB0aXRsZT17dGhpcy5nZXRUb1NlbGVjdGVkU2V0dGluZ1RleHQoKX1cclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICByZWY9e3JlZiA9PiB7IHRoaXMudG9TZWxlY3RlZFNldHRpbmdCdXR0b25SZWYgPSByZWYgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+e3RoaXMuZ2V0VG9TZWxlY3RlZFNldHRpbmdUZXh0KCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPFJpZ2h0T3V0bGluZWQgYXV0b0ZsaXAgc3R5bGU9e3sgZmxleDogJ25vbmUnIH19IHNpemU9ezEyfS8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvQ29sbGFwc2FibGVQYW5lbD5cclxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGdldFRvSG92ZXJTZXR0aW5nVGV4dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gY29uZmlnLmNhcmRDb25maWdzW1N0YXR1cy5Ib3Zlcl0uZW5hYmxlID8gdGhpcy5mb3JtYXRNZXNzYWdlKCdvbicpIDogdGhpcy5mb3JtYXRNZXNzYWdlKCdvZmYnKVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9TZWxlY3RlZFNldHRpbmdUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiBjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLlNlbGVjdGVkXS5zZWxlY3Rpb25Nb2RlICE9PSBTZWxlY3Rpb25Nb2RlVHlwZS5Ob25lID8gdGhpcy5mb3JtYXRNZXNzYWdlKCdvbicpIDogdGhpcy5mb3JtYXRNZXNzYWdlKCdvZmYnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyVG9vbFNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZywgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgc2V0dGluZ0NvbGxhcHNlIH0gPSB0aGlzLnN0YXRlXHJcbiAgICBjb25zdCBzZWFyY2hIaW50ID0gY29uZmlnPy5zZWFyY2hIaW50XHJcbiAgICBjb25zdCBidXR0b25Qcm9wcyA9IHsgc2hvd0R5bmFtaWNUaXRsZTogdHJ1ZSB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPENvbGxhcHNhYmxlUGFuZWxcclxuICAgICAgICAgIGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Rvb2xzJyl9XHJcbiAgICAgICAgICBpc09wZW49e3NldHRpbmdDb2xsYXBzZSA9PT0gU2V0dGluZ0NvbGxhcHNlVHlwZS5Ub29sc31cclxuICAgICAgICAgIG9uUmVxdWVzdE9wZW49eygpID0+IHsgdGhpcy5vcGVuU2V0dGluZ0NvbGxhcHNlKFNldHRpbmdDb2xsYXBzZVR5cGUuVG9vbHMpIH19XHJcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17dGhpcy5jbG9zZVNldHRpbmdDb2xsYXBzZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBjbGFzc05hbWU9XCJtdC0yXCIgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VhcmNoJyl9IGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VhcmNoJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4Jz5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuc2VhcmNoT3Blbn1cclxuICAgICAgICAgICAgICAgIGRhdGEtZmllbGQ9J3NlYXJjaE9wZW4nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VhcmNoJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICB7Y29uZmlnLnNlYXJjaE9wZW4gJiYgKFxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgICAgIGZsb3c9J3dyYXAnXHJcbiAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnY2hvb3NlU2VhcmNoaW5nRmllbGRzJyl9XHJcbiAgICAgICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdjaG9vc2VTZWFyY2hpbmdGaWVsZHMnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IHctMTAwIHNlYXJjaC1jb250YWluZXInXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDMgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e0ltbXV0YWJsZSh0aGlzLmdldFNlYXJjaGluZ0ZpZWxkcyh0cnVlKSl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlcz17XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLnNlYXJjaEZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIEltbXV0YWJsZShjb25maWcuc2VhcmNoRmllbGRzLnNwbGl0KCcsJykpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2gtbXVsdGktc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuZm9ybWF0TWVzc2FnZSgnbGlzdFNlbGVjdFNlYXJjaEZpZWxkcycpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrSXRlbT17dGhpcy5oYW5kbGVDaG9vc2VTZWFyY2hpbmdGaWVsZHNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlCeVZhbHVlcz17dGhpcy5kaXNwbGF5U2VsZWN0ZWRGaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzPSB7YnV0dG9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnZXhhY3RNYXRjaCcpfSBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2V4YWN0TWF0Y2gnKX0gY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgcGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMCB9fSBvbkNsaWNrPXsoKSA9PiB7IHRoaXMuaGFuZGxlQ2hlY2tib3hDaGFuZ2UoJ3NlYXJjaEV4YWN0JykgfX0+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgZGF0YS1maWVsZD0nc2VhcmNoRXhhY3QnXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5zZWFyY2hFeGFjdH1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdleGFjdE1hdGNoJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdHJ1bmNhdGUgbG9jay1pdGVtLXJhdGlvLWxhYmVsJz5cclxuICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TWVzc2FnZSgnZXhhY3RNYXRjaCcpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Y29uZmlnLnNlYXJjaE9wZW4gJiYgKFxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBmbG93PSd3cmFwJyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdzZWFyY3RIaW50Jyl9IHJvbGU9J2dyb3VwJyBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NlYXJjdEhpbnQnKX0+XHJcbiAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaC1wbGFjZWhvbGRlciB3LTEwMCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NlYXJjaCcpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEhpbnQgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFBsYWNlaG9sZGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdzb3J0Jyl9IGFyaWEtbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc29ydCcpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCc+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLnNvcnRPcGVufVxyXG4gICAgICAgICAgICAgICAgZGF0YS1maWVsZD0nc29ydE9wZW4nXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc29ydCcpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAge2NvbmZpZy5zb3J0T3BlbiAmJiAoXHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnPlxyXG4gICAgICAgICAgICAgIDxTb3J0U2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TZXR0aW5nU29ydENoYW5nZX1cclxuICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3VzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpZy5zb3J0cyB8fCBJbW11dGFibGUoW10pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdmaWx0ZXInKX0gYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdmaWx0ZXInKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgnPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5maWx0ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgZGF0YS1maWVsZD0nZmlsdGVyT3BlbidcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdmaWx0ZXInKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHtjb25maWcuZmlsdGVyT3BlbiAmJiAoXHJcbiAgICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAgdGV4dC1kYXJrIHNldC1saW5rLWJ0bidcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17IXRoaXMuc3RhdGUuZGF0YXNvdXJjZSA/ICdzZWNvbmRhcnknIDogJ3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5kYXRhc291cmNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd1NxbEV4cHJQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdzZXRGaWx0ZXJzJyl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXRNZXNzYWdlKCdzZXRGaWx0ZXJzJyl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGZsb3c9J3dyYXAnPlxyXG4gICAgICAgICAgICAgICAgPFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcclxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17dGhpcy5zdGF0ZS5kYXRhc291cmNlfVxyXG4gICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNTcWxFeHByU2hvd31cclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZVNxbEV4cHJQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbj17Y29uZmlnLmZpbHRlcn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TcWxFeHByQnVpbGRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHtjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLlNlbGVjdGVkXS5zZWxlY3Rpb25Nb2RlICE9PVxyXG4gICAgICAgICAgICBTZWxlY3Rpb25Nb2RlVHlwZS5Ob25lICYmIChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3Nob3dTZWxlY3Rpb24nKX0gYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdzaG93U2VsZWN0aW9uJyl9PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuc2hvd1NlbGVjdGVkT25seU9wZW59XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZmllbGQ9J3Nob3dTZWxlY3RlZE9ubHlPcGVuJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdzaG93U2VsZWN0aW9uJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdjbGVhclNlbGVjdGlvbicpfSBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ2NsZWFyU2VsZWN0aW9uJyl9PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWcuc2hvd0NsZWFyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtZmllbGQ9J3Nob3dDbGVhclNlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5mb3JtYXRNZXNzYWdlKCdjbGVhclNlbGVjdGlvbicpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQ29sbGFwc2FibGVQYW5lbD5cclxuICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlclJlZ3VsYXJTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhc291cmNlIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdC1saXN0LXNldHRpbmcgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uJz5cclxuICAgICAgICB7dGhpcy5yZW5kZXJEYXRhU2V0dGluZygpfVxyXG4gICAgICAgIHt0aGlzLnJlbmRlckRhdGFzb3VyY2VQbGFjZWhvbGRlcigpfVxyXG4gICAgICAgIHtkYXRhc291cmNlICYmIChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyQXJyYW5nZW1lbnRTZXR0aW5nKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YXRzU2V0dGluZygpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJUb29sU2V0dGluZygpfVxyXG4gICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlckRhdGFzb3VyY2VQbGFjZWhvbGRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YXNvdXJjZSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgY29uc3QgZHNTZWxlY3RTdHJpbmcgPSB0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NldERhdGFTb3VyY2UnKVxyXG4gICAgcmV0dXJuICFkYXRhc291cmNlXHJcbiAgICAgID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCB0ZXh0LWNlbnRlciBkYXRhc291cmNlLXBsYWNlaG9sZGVyIGZsZXgtZ3Jvdy0xIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgIDxDbGlja091dGxpbmVkIHNpemU9ezQ4fS8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1TZWNvbmRhcnknIGlkPSdsaXN0LWVtcHR5LXRpcCc+XHJcbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0TWVzc2FnZSgnbGlzdEJsYW5rU3RhdHVzJywge1xyXG4gICAgICAgICAgICAgICAgQnV0dG9uU3RyaW5nOiBkc1NlbGVjdFN0cmluZ1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGlzdENhcmRTZXR0aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdHVzSW50bDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XHJcbiAgICBzdGF0dXNJbnRsW1N0YXR1cy5Ib3Zlcl0gPSB0aGlzLmZvcm1hdE1lc3NhZ2UoJ2hvdmVyJylcclxuICAgIHN0YXR1c0ludGxbU3RhdHVzLlNlbGVjdGVkXSA9IHRoaXMuZm9ybWF0TWVzc2FnZSgnc2VsZWN0ZWQnKVxyXG4gICAgc3RhdHVzSW50bFtTdGF0dXMuUmVndWxhcl0gPSB0aGlzLmZvcm1hdE1lc3NhZ2UoJ3JlZ3VsYXInKVxyXG4gICAgY29uc3QgeyBzaG93Q2FyZFNldHRpbmcsIGNvbmZpZywgaWQsIGJyb3dzZXJTaXplTW9kZSwgbGF5b3V0cywgYXBwQ29uZmlnLCBvblNldHRpbmdDaGFuZ2UgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWNhcmQtc2V0dGluZyc+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3dcclxuICAgICAgICAgICAgbGFiZWw9e1xyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IHRleHQtdHJ1bmNhdGUgYWxpZ24taXRlbXMtY2VudGVyIGNhcmQtc2V0dGluZy1yZXR1cm4nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2FyZFNldHRpbmdSZXR1cm5CYWNrQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICAgIHNpemU9J3NtJ1xyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnYmFjaycpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCBjbGFzc05hbWU9J21yLTEnIGF1dG9GbGlwLz5cclxuICAgICAgICAgICAgICAgIHtzdGF0dXNJbnRsW3Nob3dDYXJkU2V0dGluZ119XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvd1xyXG4gICAgICAgICAgICBsYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdlbmFibGVTdGF0dXMnLCB7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNJbnRsW3Nob3dDYXJkU2V0dGluZ10udG9Mb2NhbGVMb3dlckNhc2UoKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy5mb3JtYXRNZXNzYWdlKCdlbmFibGVTdGF0dXMnLCB7IHN0YXR1czogc3RhdHVzSW50bFtzaG93Q2FyZFNldHRpbmddLnRvTG9jYWxlTG93ZXJDYXNlKCkgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgIHNob3dDYXJkU2V0dGluZyA9PT0gU3RhdHVzLkhvdmVyXHJcbiAgICAgICAgICAgICAgICAgID8gY29uZmlnLmNhcmRDb25maWdzW1N0YXR1cy5Ib3Zlcl0uZW5hYmxlXHJcbiAgICAgICAgICAgICAgICAgIDogY29uZmlnLmNhcmRDb25maWdzW1N0YXR1cy5TZWxlY3RlZF0uc2VsZWN0aW9uTW9kZSAhPT1cclxuICAgICAgICAgICAgICAgICAgICBTZWxlY3Rpb25Nb2RlVHlwZS5Ob25lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtcclxuICAgICAgICAgICAgICAgIHNob3dDYXJkU2V0dGluZyA9PT0gU3RhdHVzLkhvdmVyXHJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5vbkhvdmVyTGF5b3V0T3BlbkNoYW5nZVxyXG4gICAgICAgICAgICAgICAgICA6IHRoaXMub25TZWxlY3Rpb25Td2l0Y2hcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuZm9ybWF0TWVzc2FnZSgnZW5hYmxlU3RhdHVzJywgeyBzdGF0dXM6IHN0YXR1c0ludGxbc2hvd0NhcmRTZXR0aW5nXS50b0xvY2FsZUxvd2VyQ2FzZSgpIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsoKHNob3dDYXJkU2V0dGluZyA9PT0gU3RhdHVzLlNlbGVjdGVkICYmXHJcbiAgICAgICAgICBjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLlNlbGVjdGVkXS5zZWxlY3Rpb25Nb2RlICE9PVxyXG4gICAgICAgICAgICBTZWxlY3Rpb25Nb2RlVHlwZS5Ob25lKSB8fFxyXG4gICAgICAgICAgKHNob3dDYXJkU2V0dGluZyA9PT0gU3RhdHVzLkhvdmVyICYmXHJcbiAgICAgICAgICAgIGNvbmZpZy5jYXJkQ29uZmlnc1tTdGF0dXMuSG92ZXJdLmVuYWJsZSkpICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiBjbGFzc05hbWU9J2NhcmQtc2V0dGluZy1jb24nPlxyXG4gICAgICAgICAgICB7c2hvd0NhcmRTZXR0aW5nID09PSBTdGF0dXMuU2VsZWN0ZWQgJiYgKDxTZXR0aW5nU2VjdGlvbiBjbGFzc05hbWU9J2NsZWFyLXBhZGRpbmcnPlxyXG4gICAgICAgICAgICAgIDxTZXR0aW5nUm93XHJcbiAgICAgICAgICAgICAgICBmbG93PSd3cmFwJ1xyXG4gICAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuZm9ybWF0TWVzc2FnZSgnc2VsZWN0TW9kZScpfVxyXG4gICAgICAgICAgICAgICAgcm9sZT0nZ3JvdXAnXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLmZvcm1hdE1lc3NhZ2UoJ3NlbGVjdE1vZGUnKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcuY2FyZENvbmZpZ3NbU3RhdHVzLlNlbGVjdGVkXS5zZWxlY3Rpb25Nb2RlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblNlbGVjdGlvbk1vZGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLmdldFNlbGVjdE1vZGVPcHRpb25zKCl9XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+KX1cclxuICAgICAgICAgICAge3RoaXMucmVkbmVyQmdTZXR0aW5nKGZhbHNlKX1cclxuICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT0nY2xlYXItcGFkZGluZyc+XHJcbiAgICAgICAgICAgICAgPExheW91dFNldHRpbmdcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIG9uU2V0dGluZ0NoYW5nZT17b25TZXR0aW5nQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgbGlzdExheW91dD17Y29uZmlnLmNhcmRDb25maWdzW3Nob3dDYXJkU2V0dGluZ10/Lmxpc3RMYXlvdXR9XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM9e3Nob3dDYXJkU2V0dGluZ31cclxuICAgICAgICAgICAgICAgIGJyb3dzZXJTaXplTW9kZT17YnJvd3NlclNpemVNb2RlfVxyXG4gICAgICAgICAgICAgICAgbWFpblNpemVNb2RlPXthcHBDb25maWcubWFpblNpemVNb2RlfVxyXG4gICAgICAgICAgICAgICAgbGF5b3V0cz17bGF5b3V0c31cclxuICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnfVxyXG4gICAgICAgICAgICAgICAgYXBwQ29uZmlnPXthcHBDb25maWd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgeyBjb25maWcsIHNob3dDYXJkU2V0dGluZywgc2VsZWN0aW9uSXNJblNlbGYgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYCR7cHJlZml4fWxpc3Qtc2V0dGluZ2AsIGAke3ByZWZpeH1zZXR0aW5nYCl9XHJcbiAgICAgICAgY3NzPXt0aGlzLmdldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyFzZWxlY3Rpb25Jc0luU2VsZiAmJiA8ZGl2IGNsYXNzTmFtZT0naC0xMDAnPlxyXG4gICAgICAgICAgeyFjb25maWcuaXNJdGVtU3R5bGVDb25maXJtXHJcbiAgICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSgpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7c2hvd0NhcmRTZXR0aW5nID09PSBTdGF0dXMuUmVndWxhciAmJiB0aGlzLnJlbmRlclJlZ3VsYXJTZXR0aW5nKCl9XHJcbiAgICAgICAgICAgICAgICB7c2hvd0NhcmRTZXR0aW5nICE9PSBTdGF0dXMuUmVndWxhciAmJiB0aGlzLnJlbmRlckxpc3RDYXJkU2V0dGluZygpfVxyXG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJlxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2FpdGluZy1mb3ItZGF0YWJhc2UnPlxyXG4gICAgICAgICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdfVxyXG4gICAgICAgICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRzQ3JlYXRlfVxyXG4gICAgICAgICAgICAgICAgb25EYXRhU291cmNlSW5mb0NoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VJbmZvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9