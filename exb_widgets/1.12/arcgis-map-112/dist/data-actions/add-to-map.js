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
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/data-actions/add-to-map.ts ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMap)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class AddToMap extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    constructor() {
        super(...arguments);
        this._viewManager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance();
    }
    isSupported(dataSet) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const dataSource = dataSet === null || dataSet === void 0 ? void 0 : dataSet.dataSource;
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return false;
            }
            else {
                return (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo) &&
                    (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo()) &&
                    !!(dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource) &&
                    !dataSource.isInAppConfig() &&
                    ((_b = dataSet.records) === null || _b === void 0 ? void 0 : _b.length) === 0;
            }
        });
    }
    onExecute(dataSet, actionConfig) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
            const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
            const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl();
            const dataSetName = dataSet.name || '';
            const name = intl.formatMessage({ id: 'action_addedData', defaultMessage: jimu_core__WEBPACK_IMPORTED_MODULE_0__.defaultMessages.action_addedData }, { label: dataSetName });
            // save action data
            const id = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}dataAction_${jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.getUUID()}`;
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                jimuMapViewId: activeViewId,
                dataSourceId: dataSet.dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.DataAction,
                dataChangeType: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: name
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
            const jimuMapView = this._viewManager.getJimuMapViewById(activeViewId);
            if (jimuMapView) {
                (_b = dataSet.dataSource) === null || _b === void 0 ? void 0 : _b.createJSAPILayerByDataSource().then(layer => {
                    jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.zoomToUtils.zoomTo(jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view, layer, {
                        padding: {
                            left: 50,
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L2RhdGEtYWN0aW9ucy9hZGQtdG8tbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGtCO0FBQ2dIO0FBRW5ILE1BQU0sUUFBUyxTQUFRLHlEQUFrQjtJQUF4RDs7UUFDbUIsaUJBQVksR0FBRyxtRUFBMEIsRUFBRTtJQWdFOUQsQ0FBQztJQTlETyxXQUFXLENBQUUsT0FBc0I7OztZQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsVUFBMEM7WUFDdEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ3BHLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLGdFQUF5QixFQUFFO2dCQUN2RSxPQUFPLEtBQUs7YUFDYjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLGlFQUEwQixJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssbUVB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SCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7U0FDbEc7UUFDRCxPQUFPLFlBQVk7SUFDckIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvZGF0YS1hY3Rpb25zL2FkZC10by1tYXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdERhdGFBY3Rpb24sIHR5cGUgRGF0YVJlY29yZFNldCwgZ2V0QXBwU3RvcmUsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIEppbXVNYXBWaWV3SW5mbywgZGVmYXVsdE1lc3NhZ2VzLFxyXG4gIE11dGFibGVTdG9yZU1hbmFnZXIsIHV0aWxzLCBpMThuLCB0eXBlIEpTQVBJTGF5ZXJNaXhpbiwgdHlwZSBEYXRhU291cmNlLCBEYXRhU291cmNlVHlwZXMsIERhdGFTb3VyY2VTdGF0dXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IE1hcFZpZXdNYW5hZ2VyLCBBRERfVE9fTUFQX0RBVEFfSURfUFJFRklYLCBBY3Rpb25UeXBlLCBEYXRhQ2hhbmdlVHlwZSwgRGF0YUNoYW5nZVN0YXR1cywgem9vbVRvVXRpbHMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvTWFwIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IF92aWV3TWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuXHJcbiAgYXN5bmMgaXNTdXBwb3J0ZWQgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkYXRhU2V0Py5kYXRhU291cmNlIGFzIERhdGFTb3VyY2UgJiBKU0FQSUxheWVyTWl4aW5cclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5fdmlld01hbmFnZXIuZ2V0SmltdU1hcFZpZXdCeUlkKGFjdGl2ZVZpZXdJZClcclxuICAgIGlmICghZGF0YVNvdXJjZSB8fCBkYXRhU291cmNlLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyIHx8IGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lU2VydmljZSkgJiYgamltdU1hcFZpZXc/LnZpZXc/LnR5cGUgPT09ICcyZCcpIHtcclxuICAgICAgLy8gYWRkIGEgc2NlbmUgbGF5ZXIgdG8gYSAyZCBtYXBcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YVNvdXJjZT8uc3VwcG9ydFNwYXRpYWxJbmZvICYmXHJcbiAgICAgICAgICAgICBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8oKSAmJlxyXG4gICAgICAgICAgICAgISFkYXRhU291cmNlPy5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlICYmXHJcbiAgICAgICAgICAgICAhZGF0YVNvdXJjZS5pc0luQXBwQ29uZmlnKCkgJiZcclxuICAgICAgICAgICAgIGRhdGFTZXQucmVjb3Jkcz8ubGVuZ3RoID09PSAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkV4ZWN1dGUgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgYWN0aXZlVmlld0lkID0gdGhpcy5fZ2V0QWN0aXZlVmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxyXG4gICAgY29uc3QgYWRkVG9NYXBEYXRhcyA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLndpZGdldElkXSk/LmFkZFRvTWFwRGF0YXMgfHwge31cclxuICAgIGNvbnN0IGludGwgPSBpMThuLmdldEludGwoKVxyXG4gICAgY29uc3QgZGF0YVNldE5hbWUgPSBkYXRhU2V0Lm5hbWUgfHwgJydcclxuICAgIGNvbnN0IG5hbWUgPSBpbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ2FjdGlvbl9hZGRlZERhdGEnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLmFjdGlvbl9hZGRlZERhdGEgfSwgeyBsYWJlbDogZGF0YVNldE5hbWUgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIGNvbnN0IGlkID0gYCR7QUREX1RPX01BUF9EQVRBX0lEX1BSRUZJWH1kYXRhQWN0aW9uXyR7dXRpbHMuZ2V0VVVJRCgpfWBcclxuICAgIGFkZFRvTWFwRGF0YXNbaWRdID0ge1xyXG4gICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcclxuICAgICAgamltdU1hcFZpZXdJZDogYWN0aXZlVmlld0lkLFxyXG4gICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZS5pZCxcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5EYXRhQWN0aW9uLFxyXG4gICAgICBkYXRhQ2hhbmdlVHlwZTogRGF0YUNoYW5nZVR5cGUuQ3JlYXRlLFxyXG4gICAgICBkYXRhQ2hhbmdlU3RhdHVzOiBEYXRhQ2hhbmdlU3RhdHVzLlBlbmRpbmcsXHJcbiAgICAgIHRpdGxlOiBuYW1lXHJcbiAgICB9XHJcbiAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnYWRkVG9NYXBEYXRhcycsIGFkZFRvTWFwRGF0YXMpXHJcblxyXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLl92aWV3TWFuYWdlci5nZXRKaW11TWFwVmlld0J5SWQoYWN0aXZlVmlld0lkKVxyXG4gICAgaWYgKGppbXVNYXBWaWV3KSB7XHJcbiAgICAgIChkYXRhU2V0LmRhdGFTb3VyY2UgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW4pPy5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKCkudGhlbihsYXllciA9PiB7XHJcbiAgICAgICAgem9vbVRvVXRpbHMuem9vbVRvKGppbXVNYXBWaWV3Py52aWV3LCBsYXllciwge1xyXG4gICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBib3R0b206IDUwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xyXG4gICAgbGV0IGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZCAmJiBpbmZvc1t2aWV3SWRdLmlzQWN0aXZlKVxyXG4gICAgLy8gdXNpbmcgYSBkZWZhdWx0IG1hcCB2aWV3IGFzIGFjdGl2ZSBtYXAgdmlldyBpZiB0aGUgd2lkZ2V0IGhhc24ndCBiZWVuIGxvYWRlZC5cclxuICAgIGlmICghYWN0aXZlVmlld0lkKSB7XHJcbiAgICAgIGFjdGl2ZVZpZXdJZCA9IE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZClcclxuICAgIH1cclxuICAgIHJldHVybiBhY3RpdmVWaWV3SWRcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9