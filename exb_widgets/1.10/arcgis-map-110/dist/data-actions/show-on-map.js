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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts ***!
  \**********************************************************************************/
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
    showOnMapData: 'Show on map data'
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
/*!******************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map.ts ***!
  \******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/translations/default.ts");
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
            const { records } = dataSet;
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
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ShowOnMapDataType.DataAction,
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
                jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, featureSet.features, null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsS0FBSztJQUNuQiwrQkFBK0IsRUFBRSxxQkFBcUI7SUFDdEQsbUJBQW1CLEVBQUUsUUFBUTtJQUM3QiwyQkFBMkIsRUFBRSxTQUFTO0lBQ3RDLDJCQUEyQixFQUFFLGdCQUFnQjtJQUM3QyxtQkFBbUIsRUFBRSxPQUFPO0lBQzVCLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsdUJBQXVCLEVBQUUsYUFBYTtJQUN0QyxhQUFhLEVBQUUsa0JBQWtCO0NBQ2xDOzs7Ozs7Ozs7OztBQ1ZEOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUNvRztBQUN6RDtBQUU5QyxNQUFNLFNBQVUsU0FBUSx5REFBa0I7SUFBekQ7O1FBQ21CLGlCQUFZLEdBQUcsbUVBQTBCLEVBQUU7SUE2QzlELENBQUM7SUEzQ08sV0FBVyxDQUFFLE9BQXNCOztZQUN2QyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTztZQUMzQixtQkFBbUI7WUFDbkIsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQUMsbUJB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YXJjZ2lzLW1hcC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvZGF0YS1hY3Rpb25zL3Nob3ctb24tbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdNYXAnLFxyXG4gIF9hY3Rpb25fZGlzcGxheUZlYXR1cmVTZXRfbGFiZWw6ICdEaXNwbGF5IGZlYXR1cmUgc2V0JyxcclxuICBfYWN0aW9uX3BhblRvX2xhYmVsOiAnUGFuIHRvJyxcclxuICBfYWN0aW9uX3pvb21Ub0ZlYXR1cmVfbGFiZWw6ICdab29tIHRvJyxcclxuICBfYWN0aW9uX3NlbGVjdEZlYXR1cmVfbGFiZWw6ICdTZWxlY3QgZmVhdHVyZScsXHJcbiAgX2FjdGlvbl9mbGFzaF9sYWJlbDogJ0ZsYXNoJyxcclxuICBfYWN0aW9uX2ZpbHRlcl9sYWJlbDogJ0ZpbHRlcicsXHJcbiAgX2FjdGlvbl9zaG93T25NYXBfbGFiZWw6ICdTaG93IG9uIG1hcCcsXHJcbiAgc2hvd09uTWFwRGF0YTogJ1Nob3cgb24gbWFwIGRhdGEnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdERhdGFBY3Rpb24sIERhdGFSZWNvcmRTZXQsIGdldEFwcFN0b3JlLCBJbW11dGFibGVPYmplY3QsIEppbXVNYXBWaWV3SW5mbyxcclxuICBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB1dGlscywgaTE4blxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgTWFwVmlld01hbmFnZXIsIFNIT1dfT05fTUFQX0RBVEFfSURfUFJFRklYLCBTaG93T25NYXBEYXRhVHlwZSwgem9vbVRvVXRpbHMsIGZlYXR1cmVVdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93T25NYXAgZXh0ZW5kcyBBYnN0cmFjdERhdGFBY3Rpb24ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX3ZpZXdNYW5hZ2VyID0gTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG5cclxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldDogRGF0YVJlY29yZFNldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25FeGVjdXRlIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0LCBhY3Rpb25Db25maWc/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IHNob3dPbk1hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uc2hvd09uTWFwRGF0YXMgfHwge31cclxuICAgIGNvbnN0IGludGwgPSBpMThuLmdldEludGwoKVxyXG4gICAgY29uc3QgbmFtZSA9IGRhdGFTZXQubmFtZSB8fCBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ3Nob3dPbk1hcERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLnNob3dPbk1hcERhdGEgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIGNvbnN0IGlkID0gYCR7U0hPV19PTl9NQVBfREFUQV9JRF9QUkVGSVh9ZGF0YUFjdGlvbl8ke3V0aWxzLmdldFVVSUQoKX1gXHJcbiAgICBzaG93T25NYXBEYXRhc1tpZF0gPSB7XHJcbiAgICAgIG1hcFdpZGdldElkOiB0aGlzLndpZGdldElkLFxyXG4gICAgICBqaW11TWFwVmlld0lkOiBhY3RpdmVWaWV3SWQsXHJcbiAgICAgIGRhdGFTZXQsXHJcbiAgICAgIHR5cGU6IFNob3dPbk1hcERhdGFUeXBlLkRhdGFBY3Rpb24sXHJcbiAgICAgIC8vIHVzZSBjb2RlIHRvIG1haW50YWluIGNvbXBhdGliaWxpdHkgaGVyZVxyXG4gICAgICAvLyBmb3IgJ3N5bWJvbE9wdGlvbicsIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHZhbHVlcyAndW5kZWZpbmVkJyBhbmQgJ251bGwnOlxyXG4gICAgICAvLyAgIHVuZGVmaW5lZDogYXBwIHdhcyBjcmVhdGVkIGJlZm9yZSBvbmxpbmUxMC4xIChpbmxjdWRlIDEwLjEpLCB1c2UgZGVmYXVsdCBzeW1ib2w7XHJcbiAgICAgIC8vICAgbnVsbDogYXBwIHdhcyBjcmVhdGVkIG9yIHNhdmVkIGFmdGVyIG9ubGluZTEwLjEsIHVzZSBkZWZhdWx0IHJlbmRlcmVyIG9mIGxheWVyLlxyXG4gICAgICBzeW1ib2xPcHRpb246IGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uIDogKGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlID8gbnVsbCA6IHVuZGVmaW5lZCksXHJcbiAgICAgIHRpdGxlOiBuYW1lXHJcbiAgICB9XHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnc2hvd09uTWFwRGF0YXMnLCBzaG93T25NYXBEYXRhcylcclxuXHJcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuX3ZpZXdNYW5hZ2VyLmdldEppbXVNYXBWaWV3QnlJZChhY3RpdmVWaWV3SWQpXHJcbiAgICBjb25zdCBmZWF0dXJlU2V0ID0gYXdhaXQgZmVhdHVyZVV0aWxzLmNvbnZlcnREYXRhUmVjb3JkU2V0VG9GZWF0dXJlU2V0KGRhdGFTZXQpXHJcbiAgICBpZiAoamltdU1hcFZpZXcgJiYgZmVhdHVyZVNldD8uZmVhdHVyZXM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgem9vbVRvVXRpbHMuem9vbVRvKGppbXVNYXBWaWV3Py52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBudWxsKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0QWN0aXZlVmlld0lkIChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHtbamltdU1hcFZpZXdJZDogc3RyaW5nXTogSmltdU1hcFZpZXdJbmZvfT4pOiBzdHJpbmcge1xyXG4gICAgbGV0IGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZCAmJiBpbmZvc1t2aWV3SWRdLmlzQWN0aXZlKVxyXG4gICAgLy8gdXNpbmcgYSBkZWZhdWx0IG1hcCB2aWV3IGFzIGFjdGl2ZSBtYXAgdmlldyBpZiB0aGUgd2lkZ2V0IGhhc24ndCBiZWVuIGxvYWRlZC5cclxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XHJcbiAgICAgIGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZClcclxuICAgIH1cclxuICAgIHJldHVybiBhY3RpdmVWaWV3SWRcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9