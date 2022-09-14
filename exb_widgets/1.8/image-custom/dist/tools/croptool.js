/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/common/image/src/runtime/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: 'Image',\n    imageChooseShape: 'Shape',\n    imageCrop: 'Crop'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHM/YWNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIF93aWRnZXRMYWJlbDogJ0ltYWdlJyxcbiAgaW1hZ2VDaG9vc2VTaGFwZTogJ1NoYXBlJyxcbiAgaW1hZ2VDcm9wOiAnQ3JvcCdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/common/image/src/runtime/translations/default.ts\n");

/***/ }),

/***/ "./extensions/widgets/common/image/src/tools/croptool.tsx":
/*!****************************************************************!*\
  !*** ./extensions/widgets/common/image/src/tools/croptool.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CropTool)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var _src_runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/runtime/translations/default */ \"./extensions/widgets/common/image/src/runtime/translations/default.ts\");\n\n\n\nclass CropTool {\n    constructor() {\n        this.index = 1;\n        this.id = 'image-croptool';\n        this.classes = {};\n        this.isEmptySource = (config) => {\n            if ((!config.functionConfig.imageParam || !config.functionConfig.imageParam.url) && !config.functionConfig.srcExpression) {\n                return true;\n            }\n            else {\n                return false;\n            }\n        };\n    }\n    getGroupId() {\n        return null;\n    }\n    getTitle() {\n        const widgetId = this.widgetId;\n        const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(widgetId);\n        return intl ? intl.formatMessage({ id: 'imageCrop', defaultMessage: _src_runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].imageCrop }) : 'Crop';\n    }\n    getIcon() {\n        return __webpack_require__(/*! jimu-ui/lib/icons/tool-cut.svg */ \"./jimu-ui/lib/icons/tool-cut.svg\");\n    }\n    onClick(props) {\n        const widgetInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets[props.layoutItem.widgetId];\n        const clientRect = {\n            bottom: props.clientRect.bottom,\n            height: props.clientRect.height,\n            left: window.scrollX + props.clientRect.left,\n            right: props.clientRect.right,\n            top: window.scrollY + props.clientRect.top,\n            width: props.clientRect.width\n        };\n        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(props.layoutItem.widgetId, 'clientRect', clientRect);\n        if (widgetInfo) {\n            const widgetConfig = widgetInfo.config;\n            if (widgetConfig.functionConfig.imageParam && widgetConfig.functionConfig.imageParam.url) {\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(props.layoutItem.widgetId, true));\n            }\n        }\n    }\n    visible(props) {\n        const widgetInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets[props.layoutItem.widgetId];\n        if (widgetInfo) {\n            const widgetConfig = widgetInfo.config;\n            if (this.isEmptySource(widgetConfig)) {\n                return false;\n            }\n            if (widgetConfig.functionConfig.srcExpression) {\n                // the dynamic src from expression can't support crop\n                return false;\n            }\n            else if (widgetConfig.functionConfig.imageParam && (widgetConfig.functionConfig.imageFillMode === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageFillMode.Fit)) {\n                return false;\n            }\n            else {\n                // the static src can support crop\n                return true;\n            }\n        }\n        else {\n            return false;\n        }\n    }\n    getSettingPanel(props) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy90b29scy9jcm9wdG9vbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTJCQTtBQXBFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3Rvb2xzL2Nyb3B0b29sLnRzeD9kNTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuc2lvblNwZWMsIFJlYWN0LCBnZXRBcHBTdG9yZSwgYXBwQWN0aW9ucywgTGF5b3V0Q29udGV4dFRvb2xQcm9wcywgaTE4biwgTXV0YWJsZVN0b3JlTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEltYWdlRmlsbE1vZGUgfSBmcm9tICdqaW11LXVpJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlIGZyb20gJy4uLy4uL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wVG9vbCBpbXBsZW1lbnRzIGV4dGVuc2lvblNwZWMuQ29udGV4dFRvb2xFeHRlbnNpb24ge1xuICBpbmRleCA9IDFcbiAgaWQgPSAnaW1hZ2UtY3JvcHRvb2wnXG4gIHdpZGdldElkOiBzdHJpbmdcblxuICBjbGFzc2VzOiB7IFt3aWRnZXRJZDogc3RyaW5nXTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8dW5rbm93bj4gfSA9IHt9XG5cbiAgZ2V0R3JvdXBJZCAoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldFRpdGxlICgpIHtcbiAgICBjb25zdCB3aWRnZXRJZCA9IHRoaXMud2lkZ2V0SWRcbiAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKHdpZGdldElkKVxuICAgIHJldHVybiBpbnRsID8gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdpbWFnZUNyb3AnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2UuaW1hZ2VDcm9wIH0pIDogJ0Nyb3AnXG4gIH1cblxuICBnZXRJY29uICgpIHtcbiAgICByZXR1cm4gcmVxdWlyZSgnamltdS11aS9saWIvaWNvbnMvdG9vbC1jdXQuc3ZnJylcbiAgfVxuXG4gIG9uQ2xpY2sgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKSB7XG4gICAgY29uc3Qgd2lkZ2V0SW5mbyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcud2lkZ2V0c1twcm9wcy5sYXlvdXRJdGVtLndpZGdldElkXVxuICAgIGNvbnN0IGNsaWVudFJlY3Q6IERPTVJlY3QgPSB7XG4gICAgICBib3R0b206IHByb3BzLmNsaWVudFJlY3QuYm90dG9tLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5jbGllbnRSZWN0LmhlaWdodCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5zY3JvbGxYICsgcHJvcHMuY2xpZW50UmVjdC5sZWZ0LFxuICAgICAgcmlnaHQ6IHByb3BzLmNsaWVudFJlY3QucmlnaHQsXG4gICAgICB0b3A6IHdpbmRvdy5zY3JvbGxZICsgcHJvcHMuY2xpZW50UmVjdC50b3AsXG4gICAgICB3aWR0aDogcHJvcHMuY2xpZW50UmVjdC53aWR0aFxuICAgIH0gYXMgRE9NUmVjdFxuXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUocHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZCwgJ2NsaWVudFJlY3QnLCBjbGllbnRSZWN0KVxuXG4gICAgaWYgKHdpZGdldEluZm8pIHtcbiAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHdpZGdldEluZm8uY29uZmlnIGFzIENvbmZpZ1xuICAgICAgaWYgKHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtICYmIHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLnVybCkge1xuICAgICAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMuc2V0V2lkZ2V0SXNJbmxpbmVFZGl0aW5nU3RhdGUocHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZCwgdHJ1ZSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNFbXB0eVNvdXJjZSA9IChjb25maWc6IENvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICgoIWNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtIHx8ICFjb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS51cmwpICYmICFjb25maWcuZnVuY3Rpb25Db25maWcuc3JjRXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdmlzaWJsZSAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpIHtcbiAgICBjb25zdCB3aWRnZXRJbmZvID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy53aWRnZXRzW3Byb3BzLmxheW91dEl0ZW0ud2lkZ2V0SWRdXG4gICAgaWYgKHdpZGdldEluZm8pIHtcbiAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHdpZGdldEluZm8uY29uZmlnIGFzIENvbmZpZ1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eVNvdXJjZSh3aWRnZXRDb25maWcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAod2lkZ2V0Q29uZmlnLmZ1bmN0aW9uQ29uZmlnLnNyY0V4cHJlc3Npb24pIHtcbiAgICAgICAgLy8gdGhlIGR5bmFtaWMgc3JjIGZyb20gZXhwcmVzc2lvbiBjYW4ndCBzdXBwb3J0IGNyb3BcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtICYmICh3aWRnZXRDb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VGaWxsTW9kZSA9PT0gSW1hZ2VGaWxsTW9kZS5GaXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhlIHN0YXRpYyBzcmMgY2FuIHN1cHBvcnQgY3JvcFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBnZXRTZXR0aW5nUGFuZWwgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8dW5rbm93bj4ge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/common/image/src/tools/croptool.tsx\n");

/***/ }),

/***/ "./jimu-ui/lib/icons/tool-cut.svg":
/*!****************************************!*\
  !*** ./jimu-ui/lib/icons/tool-cut.svg ***!
  \****************************************/
/***/ ((module) => {

eval("module.exports = \"<svg viewBox=\\\"0 0 16 16\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M3 3v9.288L12.288 3H3zm0-1h10.288L15.14.146a.5.5 0 1 1 .708.708L14 2.702V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14H2V3H.5a.5.5 0 0 1 0-1H2V.5a.5.5 0 0 1 1 0V2zm10 1.702L3.702 13H13V3.702z\\\"></path></svg>\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qaW11LXVpL2xpYi9pY29ucy90b29sLWN1dC5zdmcuanMiLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvdG9vbC1jdXQuc3ZnPzE4M2UiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zIDN2OS4yODhMMTIuMjg4IDNIM3ptMC0xaDEwLjI4OEwxNS4xNC4xNDZhLjUuNSAwIDEgMSAuNzA4LjcwOEwxNCAyLjcwMlYxM2gxLjVhLjUuNSAwIDAgMSAwIDFIMTR2MS41YS41LjUgMCAwIDEtMSAwVjE0SDJWM0guNWEuNS41IDAgMCAxIDAtMUgyVi41YS41LjUgMCAwIDEgMSAwVjJ6bTEwIDEuNzAyTDMuNzAyIDEzSDEzVjMuNzAyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./jimu-ui/lib/icons/tool-cut.svg\n");

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/widgets/common/image/src/tools/croptool.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});