/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action.ts":
/*!****************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowOnMapAction)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n\n\nclass ShowOnMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {\n    filterMessageType(messageType, messageWidgetId) {\n        return messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange;\n    }\n    filterMessage(message) {\n        return true;\n    }\n    onRemoveListen(messageType, messageWidgetId) {\n        var _a;\n        const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};\n        const newShowOnMapDatas = {};\n        Object.entries(showOnMapDatas).forEach(entry => {\n            var _a;\n            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {\n                newShowOnMapDatas[entry[0]] = entry[1];\n            }\n        });\n        // save action data\n        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', newShowOnMapDatas);\n    }\n    onExecute(message, actionConfig) {\n        var _a, _b, _c;\n        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);\n        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);\n        const jimuMapViewId = activeViewId || defaultViewId;\n        let showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};\n        const idBase = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${message.dataRecordSetId}_`;\n        const idTemporary = `${idBase}???`;\n        const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;\n        if (defaultViewId && defaultViewId === activeViewId) {\n            // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId\n            delete showOnMapDatas[idTemporary];\n        }\n        if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Create || message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Update) {\n            showOnMapDatas[id] = {\n                mapWidgetId: this.widgetId,\n                messageWidgetId: message.widgetId,\n                // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget\n                jimuMapViewId: jimuMapViewId,\n                dataSource: (_b = message.dataRecordSet) === null || _b === void 0 ? void 0 : _b.dataSource,\n                records: (_c = message.dataRecordSet) === null || _c === void 0 ? void 0 : _c.records,\n                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ShowOnMapDataType.MessageAction,\n                title: id // 'Show on map message ...'\n            };\n        }\n        else if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Remove) {\n            // delete showOnMapDatas[id]\n            const newShowOnMapDatas = {};\n            Object.entries(showOnMapDatas).forEach(entry => {\n                if (entry[0].indexOf(idBase) !== 0) {\n                    newShowOnMapDatas[entry[0]] = entry[1];\n                }\n            });\n            showOnMapDatas = newShowOnMapDatas;\n        }\n        // save action data\n        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);\n        return Promise.resolve(true);\n    }\n    _getActiveViewId(mapWidgetId, infos) {\n        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);\n    }\n    _getDefaultViewId(mapWidgetId, infos) {\n        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24udHM/NGZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCBNZXNzYWdlLCBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgTXV0YWJsZVN0b3JlTWFuYWdlcixcbiAgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZU9iamVjdCwgSmltdU1hcFZpZXdJbmZvXG59IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IFNIT1dfT05fTUFQX0RBVEFfSURfUFJFRklYLCBTaG93T25NYXBEYXRhVHlwZSwgU2hvd09uTWFwRGF0YXMgfSBmcm9tICdqaW11LWFyY2dpcydcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi9wYW4tdG8tYWN0aW9uLXNldHRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dPbk1hcEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XG4gIGZpbHRlck1lc3NhZ2VUeXBlIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZVxuICB9XG5cbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBvblJlbW92ZUxpc3RlbiAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBzaG93T25NYXBEYXRhczogU2hvd09uTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5zaG93T25NYXBEYXRhcyB8fCB7fVxuICAgIGNvbnN0IG5ld1Nob3dPbk1hcERhdGFzID0ge31cbiAgICBPYmplY3QuZW50cmllcyhzaG93T25NYXBEYXRhcykuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBpZiAoZW50cnlbMV0/Lm1lc3NhZ2VXaWRnZXRJZCAhPT0gbWVzc2FnZVdpZGdldElkKSB7XG4gICAgICAgIG5ld1Nob3dPbk1hcERhdGFzW2VudHJ5WzBdXSA9IGVudHJ5WzFdXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3Nob3dPbk1hcERhdGFzJywgbmV3U2hvd09uTWFwRGF0YXMpXG4gIH1cblxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IERhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBJTUNvbmZpZyk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVWaWV3SWQgPSB0aGlzLl9nZXRBY3RpdmVWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgZGVmYXVsdFZpZXdJZCA9IHRoaXMuX2dldERlZmF1bHRWaWV3SWQodGhpcy53aWRnZXRJZCwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmppbXVNYXBWaWV3c0luZm8pXG4gICAgY29uc3QgamltdU1hcFZpZXdJZCA9IGFjdGl2ZVZpZXdJZCB8fCBkZWZhdWx0Vmlld0lkXG4gICAgbGV0IHNob3dPbk1hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uc2hvd09uTWFwRGF0YXMgfHwge31cbiAgICBjb25zdCBpZEJhc2UgPSBgJHtTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWH1tZXNzYWdlQWN0aW9uXyR7dGhpcy53aWRnZXRJZH1fJHttZXNzYWdlLmRhdGFSZWNvcmRTZXRJZH1fYFxuICAgIGNvbnN0IGlkVGVtcG9yYXJ5ID0gYCR7aWRCYXNlfT8/P2BcbiAgICBjb25zdCBpZCA9IGFjdGl2ZVZpZXdJZCA/IGAke2lkQmFzZX0ke2FjdGl2ZVZpZXdJZH1gIDogaWRUZW1wb3JhcnlcblxuICAgIGlmIChkZWZhdWx0Vmlld0lkICYmIGRlZmF1bHRWaWV3SWQgPT09IGFjdGl2ZVZpZXdJZCkge1xuICAgICAgLy8gYWxsb3cgdG8gYWRkIGRhdGEgdXNpbmcgYSB0ZW1wb3JhcnkgaWQsIHRlbXBvcmFyeSBpZCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBpZiBjYW4gZ2V0IGFjdGl2ZVZpZXdJZFxuICAgICAgZGVsZXRlIHNob3dPbk1hcERhdGFzW2lkVGVtcG9yYXJ5XVxuICAgIH1cblxuICAgIGlmIChtZXNzYWdlLmNoYW5nZVR5cGUgPT09IFJlY29yZFNldENoYW5nZVR5cGUuQ3JlYXRlIHx8IG1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5VcGRhdGUpIHtcbiAgICAgIHNob3dPbk1hcERhdGFzW2lkXSA9IHtcbiAgICAgICAgbWFwV2lkZ2V0SWQ6IHRoaXMud2lkZ2V0SWQsXG4gICAgICAgIG1lc3NhZ2VXaWRnZXRJZDogbWVzc2FnZS53aWRnZXRJZCxcbiAgICAgICAgLy8gU2V0IGppbXVNYXBWaWV3SWQgdG8gbnVsbCBtZWFucyB0aGUgZGF0YSB3aWxsIGJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBqaW11TWFwVmlld3Mgb2Ygb25lIG1hcFdpZGdldFxuICAgICAgICBqaW11TWFwVmlld0lkOiBqaW11TWFwVmlld0lkLCAvLyBhY3RpdmVWaWV3SWQsXG4gICAgICAgIGRhdGFTb3VyY2U6IG1lc3NhZ2UuZGF0YVJlY29yZFNldD8uZGF0YVNvdXJjZSxcbiAgICAgICAgcmVjb3JkczogbWVzc2FnZS5kYXRhUmVjb3JkU2V0Py5yZWNvcmRzLFxuICAgICAgICB0eXBlOiBTaG93T25NYXBEYXRhVHlwZS5NZXNzYWdlQWN0aW9uLFxuICAgICAgICB0aXRsZTogaWQgLy8gJ1Nob3cgb24gbWFwIG1lc3NhZ2UgLi4uJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jaGFuZ2VUeXBlID09PSBSZWNvcmRTZXRDaGFuZ2VUeXBlLlJlbW92ZSkge1xuICAgICAgLy8gZGVsZXRlIHNob3dPbk1hcERhdGFzW2lkXVxuICAgICAgY29uc3QgbmV3U2hvd09uTWFwRGF0YXMgPSB7fVxuICAgICAgT2JqZWN0LmVudHJpZXMoc2hvd09uTWFwRGF0YXMpLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnlbMF0uaW5kZXhPZihpZEJhc2UpICE9PSAwKSB7XG4gICAgICAgICAgbmV3U2hvd09uTWFwRGF0YXNbZW50cnlbMF1dID0gZW50cnlbMV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNob3dPbk1hcERhdGFzID0gbmV3U2hvd09uTWFwRGF0YXNcbiAgICB9XG4gICAgLy8gc2F2ZSBhY3Rpb24gZGF0YVxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIHNob3dPbk1hcERhdGFzKVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7W2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mb30+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkICYmIGluZm9zW3ZpZXdJZF0uaXNBY3RpdmUpXG4gIH1cblxuICBwcml2YXRlIF9nZXREZWZhdWx0Vmlld0lkIChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHtbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvfT4pOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhpbmZvcyB8fCB7fSkuZmluZCh2aWV3SWQgPT4gaW5mb3Nbdmlld0lkXS5tYXBXaWRnZXRJZCA9PT0gbWFwV2lkZ2V0SWQpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action.ts\n");

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});