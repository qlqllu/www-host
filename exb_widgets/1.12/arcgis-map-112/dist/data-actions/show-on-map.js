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

/***/ "./your-extensions/widgets/arcgis-map-112/src/runtime/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/runtime/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Map',
    _action_displayFeatureSet_label: 'Display feature set',
    _action_panTo_label: 'Pan to',
    _action_zoomToFeature_label: 'Zoom to',
    _action_selectFeature_label: 'Select feature',
    _action_flash_label: 'Flash',
    _action_filter_label: 'Filter',
    _action_showOnMap_label: 'Show on map',
    _action_addToMap_label: 'Add to map',
    showOnMapData: 'Show on map data',
    addedData: 'added data',
    failToAddTheDataOnMap: 'Fail to add the data.',
    addToMapData: 'Add to map data'
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/data-actions/show-on-map.ts ***!
  \********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./your-extensions/widgets/arcgis-map-112/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ShowOnMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    isSupported(dataSet) {
        return __awaiter(this, void 0, void 0, function* () {
            const { records, dataSource } = dataSet;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            // @ts-expect-error
            return records.length > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });
        });
    }
    onExecute(dataSet, actionConfig) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
            const name = dataSet.name || intl.formatMessage({ id: 'showOnMapData', defaultMessage: _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].showOnMapData });
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            showOnMapDatas[id] = {
                mapWidgetId: this.widgetId,
                jimuMapViewId: activeViewId,
                dataSet,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                // use code to maintain compatibility here
                // for 'symbolOption', the difference between the values 'undefined' and 'null':
                //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
                //   null: app was created or saved after online10.1, use default renderer of layer.
                symbolOption: (actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) ? actionConfig.symbolOption : ((actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) === false ? null : undefined),
                title: name
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            const featureSet = yield jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.featureUtils.convertDataRecordSetToFeatureSet(dataSet);
            if (jimuMapView && ((_b = featureSet === null || featureSet === void 0 ? void 0 : featureSet.features) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, featureSet.features, {
                    padding: {
                        left: 50,
                        right: 50,
                        top: 50,
                        bottom: 50
                    }
                });
            }
            return yield Promise.resolve(true);
        });
    }
    _getActiveViewId(mapWidgetId, infos) {
        let activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
        // using a default map view as active map view if the widget hasn't been loaded.
        if (!activeViewId) {
            activeViewId = Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
        }
        return activeViewId;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsS0FBSztJQUNuQiwrQkFBK0IsRUFBRSxxQkFBcUI7SUFDdEQsbUJBQW1CLEVBQUUsUUFBUTtJQUM3QiwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDLDJCQUEyQixFQUFFLGdCQUFnQjtJQUM3QyxtQkFBbUIsRUFBRSxPQUFPO0lBQzVCLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsdUJBQXVCLEVBQUUsYUFBYTtJQUN0QyxzQkFBc0IsRUFBRSxZQUFZO0lBQ3BDLGFBQWEsRUFBRSxrQkFBa0I7SUFDakMsU0FBUyxFQUFFLFlBQVk7SUFDdkIscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLFlBQVksRUFBRSxpQkFBaUI7Q0FDaEM7Ozs7Ozs7Ozs7O0FDZEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGtCO0FBQzZGO0FBQ2xEO0FBRTlDLE1BQU0sU0FBVSxTQUFRLHlEQUFrQjtJQUF6RDs7UUFDbUIsaUJBQVksR0FBRyxtRUFBMEIsRUFBRTtJQXVEOUQsQ0FBQztJQXJETyxXQUFXLENBQUUsT0FBc0I7O1lBQ3ZDLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsT0FB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LENBQUMsUUFBUSxDQUFDO1FBQy9ILGdGQUFnRjtRQUNoRixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztTQUNsRztRQUNELE9BQU8sWUFBWTtJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdNYXAnLFxyXG4gIF9hY3Rpb25fZGlzcGxheUZlYXR1cmVTZXRfbGFiZWw6ICdEaXNwbGF5IGZlYXR1cmUgc2V0JyxcclxuICBfYWN0aW9uX3BhblRvX2xhYmVsOiAnUGFuIHRvJyxcclxuICBfYWN0aW9uX3pvb21Ub0ZlYXR1cmVfbGFiZWw6ICdab29tIHRvJyxcclxuICBfYWN0aW9uX3NlbGVjdEZlYXR1cmVfbGFiZWw6ICdTZWxlY3QgZmVhdHVyZScsXHJcbiAgX2FjdGlvbl9mbGFzaF9sYWJlbDogJ0ZsYXNoJyxcclxuICBfYWN0aW9uX2ZpbHRlcl9sYWJlbDogJ0ZpbHRlcicsXHJcbiAgX2FjdGlvbl9zaG93T25NYXBfbGFiZWw6ICdTaG93IG9uIG1hcCcsXHJcbiAgX2FjdGlvbl9hZGRUb01hcF9sYWJlbDogJ0FkZCB0byBtYXAnLFxyXG4gIHNob3dPbk1hcERhdGE6ICdTaG93IG9uIG1hcCBkYXRhJyxcclxuICBhZGRlZERhdGE6ICdhZGRlZCBkYXRhJyxcclxuICBmYWlsVG9BZGRUaGVEYXRhT25NYXA6ICdGYWlsIHRvIGFkZCB0aGUgZGF0YS4nLFxyXG4gIGFkZFRvTWFwRGF0YTogJ0FkZCB0byBtYXAgZGF0YSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0RGF0YUFjdGlvbiwgdHlwZSBEYXRhUmVjb3JkU2V0LCBnZXRBcHBTdG9yZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgSmltdU1hcFZpZXdJbmZvLCBEYXRhU291cmNlU3RhdHVzLFxyXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsIHV0aWxzLCBpMThuXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBNYXBWaWV3TWFuYWdlciwgU0hPV19PTl9NQVBfREFUQV9JRF9QUkVGSVgsIEFjdGlvblR5cGUsIHpvb21Ub1V0aWxzLCBmZWF0dXJlVXRpbHMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd09uTWFwIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3TWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuXHJcbiAgYXN5bmMgaXNTdXBwb3J0ZWQgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHsgcmVjb3JkcywgZGF0YVNvdXJjZSB9ID0gZGF0YVNldFxyXG4gICAgaWYgKCFkYXRhU291cmNlIHx8IGRhdGFTb3VyY2UuZ2V0U3RhdHVzKCkgPT09IERhdGFTb3VyY2VTdGF0dXMuTm90UmVhZHkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25FeGVjdXRlIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IHNob3dPbk1hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uc2hvd09uTWFwRGF0YXMgfHwge31cclxuICAgIGNvbnN0IGludGwgPSBpMThuLmdldEludGwoKVxyXG4gICAgY29uc3QgbmFtZSA9IGRhdGFTZXQubmFtZSB8fCBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Nob3dPbk1hcERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNob3dPbk1hcERhdGEgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIGNvbnN0IGlkID0gYCR7U0hPV19PTl9NQVBfREFUQV9JRF9QUkVGSVh9ZGF0YUFjdGlvbl8ke3V0aWxzLmdldFVVSUQoKX1gXHJcbiAgICBzaG93T25NYXBEYXRhc1tpZF0gPSB7XHJcbiAgICAgIG1hcFdpZGdldElkOiB0aGlzLndpZGdldElkLFxyXG4gICAgICBqaW11TWFwVmlld0lkOiBhY3RpdmVWaWV3SWQsXHJcbiAgICAgIGRhdGFTZXQsXHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuRGF0YUFjdGlvbixcclxuICAgICAgLy8gdXNlIGNvZGUgdG8gbWFpbnRhaW4gY29tcGF0aWJpbGl0eSBoZXJlXHJcbiAgICAgIC8vIGZvciAnc3ltYm9sT3B0aW9uJywgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdmFsdWVzICd1bmRlZmluZWQnIGFuZCAnbnVsbCc6XHJcbiAgICAgIC8vICAgdW5kZWZpbmVkOiBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIHVzZSBkZWZhdWx0IHN5bWJvbDtcclxuICAgICAgLy8gICBudWxsOiBhcHAgd2FzIGNyZWF0ZWQgb3Igc2F2ZWQgYWZ0ZXIgb25saW5lMTAuMSwgdXNlIGRlZmF1bHQgcmVuZGVyZXIgb2YgbGF5ZXIuXHJcbiAgICAgIHN5bWJvbE9wdGlvbjogYWN0aW9uQ29uZmlnPy5pc1VzZUN1c3RvbVN5bWJvbCA/IGFjdGlvbkNvbmZpZy5zeW1ib2xPcHRpb24gOiAoYWN0aW9uQ29uZmlnPy5pc1VzZUN1c3RvbVN5bWJvbCA9PT0gZmFsc2UgPyBudWxsIDogdW5kZWZpbmVkKSxcclxuICAgICAgdGl0bGU6IG5hbWVcclxuICAgIH1cclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIHNob3dPbk1hcERhdGFzKVxyXG5cclxuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5fdmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKGFjdGl2ZVZpZXdJZClcclxuICAgIGNvbnN0IGZlYXR1cmVTZXQgPSBhd2FpdCBmZWF0dXJlVXRpbHMuY29udmVydERhdGFSZWNvcmRTZXRUb0ZlYXR1cmVTZXQoZGF0YVNldClcclxuICAgIGlmIChqaW11TWFwVmlldyAmJiBmZWF0dXJlU2V0Py5mZWF0dXJlcz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICB6b29tVG9VdGlscy56b29tVG8oamltdU1hcFZpZXc/LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHtcclxuICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgIHJpZ2h0OiA1MCxcclxuICAgICAgICAgIHRvcDogNTAsXHJcbiAgICAgICAgICBib3R0b206IDUwXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0QWN0aXZlVmlld0lkIChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Pik6IHN0cmluZyB7XHJcbiAgICBsZXQgYWN0aXZlVmlld0lkID0gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkICYmIGluZm9zW3ZpZXdJZF0uaXNBY3RpdmUpXHJcbiAgICAvLyB1c2luZyBhIGRlZmF1bHQgbWFwIHZpZXcgYXMgYWN0aXZlIG1hcCB2aWV3IGlmIHRoZSB3aWRnZXQgaGFzbid0IGJlZW4gbG9hZGVkLlxyXG4gICAgaWYgKCFhY3RpdmVWaWV3SWQpIHtcclxuICAgICAgYWN0aXZlVmlld0lkID0gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGl2ZVZpZXdJZFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=