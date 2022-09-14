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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts":
/*!******************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowOnMap)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ \"jimu-arcgis\");\n/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ \"./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass ShowOnMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {\n    constructor() {\n        super(...arguments);\n        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();\n    }\n    isSupported(dataSource, records) {\n        return __awaiter(this, void 0, void 0, function* () {\n            // @ts-expect-error\n            return records.length > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });\n        });\n    }\n    onExecute(dataSource, records, name, actionConfig) {\n        var _a;\n        return __awaiter(this, void 0, void 0, function* () {\n            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);\n            const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};\n            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();\n            // save action data\n            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;\n            showOnMapDatas[id] = {\n                mapWidgetId: this.widgetId,\n                jimuMapViewId: activeViewId,\n                dataSource,\n                records,\n                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ShowOnMapDataType.DataAction,\n                title: name || intl.formatMessage({ id: 'showOnMapData', defaultMessage: _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showOnMapData })\n            };\n            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);\n            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);\n            if (jimuMapView) {\n                const graphics = yield jimuMapView.getGraphicsFromRecords(dataSource, records);\n                if ((graphics === null || graphics === void 0 ? void 0 : graphics.length) > 0) {\n                    jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, graphics, null);\n                }\n            }\n            return yield Promise.resolve(true);\n        });\n    }\n    _getActiveViewId(mapWidgetId, infos) {\n        let activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);\n        // using a default map view as active map view if the widget hasn't been loaded.\n        if (!activeViewId) {\n            activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);\n        }\n        return activeViewId;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBRUE7QUFBQTs7QUFDQTtBQXlDQTtBQXZDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC50cz8yZjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFic3RyYWN0RGF0YUFjdGlvbiwgRGF0YVNvdXJjZSwgRGF0YVJlY29yZCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZU9iamVjdCwgSmltdU1hcFZpZXdJbmZvLFxuICBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB1dGlscywgaTE4blxufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBNYXBWaWV3TWFuYWdlciwgU0hPV19PTl9NQVBfREFUQV9JRF9QUkVGSVgsIFNob3dPbk1hcERhdGFUeXBlLCB6b29tVG9VdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93T25NYXAgZXh0ZW5kcyBBYnN0cmFjdERhdGFBY3Rpb24ge1xuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3TWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClcblxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZSwgcmVjb3JkczogRGF0YVJlY29yZFtdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHJldHVybiByZWNvcmRzLmxlbmd0aCA+IDAgJiYgcmVjb3Jkcy5zb21lKHJlY29yZCA9PiByZWNvcmQuZmVhdHVyZT8uZ2VvbWV0cnkpXG4gIH1cblxuICBhc3luYyBvbkV4ZWN1dGUgKGRhdGFTb3VyY2U6IERhdGFTb3VyY2UsIHJlY29yZHM6IERhdGFSZWNvcmRbXSwgbmFtZSwgYWN0aW9uQ29uZmlnKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgYWN0aXZlVmlld0lkID0gdGhpcy5fZ2V0QWN0aXZlVmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxuICAgIGNvbnN0IHNob3dPbk1hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uc2hvd09uTWFwRGF0YXMgfHwge31cbiAgICBjb25zdCBpbnRsID0gaTE4bi5nZXRJbnRsKClcbiAgICAvLyBzYXZlIGFjdGlvbiBkYXRhXG4gICAgY29uc3QgaWQgPSBgJHtTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWH1kYXRhQWN0aW9uXyR7dXRpbHMuZ2V0VVVJRCgpfWBcbiAgICBzaG93T25NYXBEYXRhc1tpZF0gPSB7XG4gICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcbiAgICAgIGppbXVNYXBWaWV3SWQ6IGFjdGl2ZVZpZXdJZCxcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICByZWNvcmRzLFxuICAgICAgdHlwZTogU2hvd09uTWFwRGF0YVR5cGUuRGF0YUFjdGlvbixcbiAgICAgIHRpdGxlOiBuYW1lIHx8IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnc2hvd09uTWFwRGF0YScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMuc2hvd09uTWFwRGF0YSB9KVxuICAgIH1cbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnc2hvd09uTWFwRGF0YXMnLCBzaG93T25NYXBEYXRhcylcblxuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5fdmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKGFjdGl2ZVZpZXdJZClcbiAgICBpZiAoamltdU1hcFZpZXcpIHtcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gYXdhaXQgamltdU1hcFZpZXcuZ2V0R3JhcGhpY3NGcm9tUmVjb3JkcyhkYXRhU291cmNlLCByZWNvcmRzKVxuICAgICAgaWYgKGdyYXBoaWNzPy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHpvb21Ub1V0aWxzLnpvb21UbyhqaW11TWFwVmlldz8udmlldywgZ3JhcGhpY3MsIG51bGwpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7W2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mb30+KTogc3RyaW5nIHtcbiAgICBsZXQgYWN0aXZlVmlld0lkID0gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkICYmIGluZm9zW3ZpZXdJZF0uaXNBY3RpdmUpXG4gICAgLy8gdXNpbmcgYSBkZWZhdWx0IG1hcCB2aWV3IGFzIGFjdGl2ZSBtYXAgdmlldyBpZiB0aGUgd2lkZ2V0IGhhc24ndCBiZWVuIGxvYWRlZC5cbiAgICBpZiAoIWFjdGl2ZVZpZXdJZCkge1xuICAgICAgYWN0aXZlVmlld0lkID0gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkKVxuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlVmlld0lkXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts\n");

/***/ }),

/***/ "./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: 'Map',\n    _action_displayFeatureSet_label: 'Display feature set',\n    _action_panTo_label: 'Pan to',\n    _action_zoomToFeature_label: 'Zoom to',\n    _action_selectFeature_label: 'Select feature',\n    _action_flash_label: 'Flash',\n    _action_filter_label: 'Filter',\n    _action_showOnMap_label: 'Show on map',\n    showOnMapData: 'Show on map data'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzP2M2ODYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdNYXAnLFxuICBfYWN0aW9uX2Rpc3BsYXlGZWF0dXJlU2V0X2xhYmVsOiAnRGlzcGxheSBmZWF0dXJlIHNldCcsXG4gIF9hY3Rpb25fcGFuVG9fbGFiZWw6ICdQYW4gdG8nLFxuICBfYWN0aW9uX3pvb21Ub0ZlYXR1cmVfbGFiZWw6ICdab29tIHRvJyxcbiAgX2FjdGlvbl9zZWxlY3RGZWF0dXJlX2xhYmVsOiAnU2VsZWN0IGZlYXR1cmUnLFxuICBfYWN0aW9uX2ZsYXNoX2xhYmVsOiAnRmxhc2gnLFxuICBfYWN0aW9uX2ZpbHRlcl9sYWJlbDogJ0ZpbHRlcicsXG4gIF9hY3Rpb25fc2hvd09uTWFwX2xhYmVsOiAnU2hvdyBvbiBtYXAnLFxuICBzaG93T25NYXBEYXRhOiAnU2hvdyBvbiBtYXAgZGF0YSdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});