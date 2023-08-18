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
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/add-to-map-action.ts ***!
  \*****************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddToMapAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


class AddToMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else {
            return false;
        }
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        var _a;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        const newAddToMapDatas = {};
        Object.entries(addToMapDatas).forEach(entry => {
            var _a;
            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {
                newAddToMapDatas[entry[0]] = entry[1]; //*********
            }
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', newAddToMapDatas);
    }
    //getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    //  return 'message-actions/show-on-map-action-setting'
    //}
    onExecute(message, actionConfig) {
        var _a;
        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const jimuMapViewId = activeViewId || defaultViewId;
        const addToMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.addToMapDatas) || {};
        message.dataSources.forEach(dataSourceParam => {
            var _a;
            const dataSource = dataSourceParam;
            if (!dataSource.supportSpatialInfo || !dataSource.supportSpatialInfo()) {
                return;
            }
            const jimuMapView = activeViewId && jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.MapViewManager.getInstance().getJimuMapViewById(activeViewId);
            if ((dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneLayer || dataSource.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SceneService) && ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.type) === '2d') {
                // add a scene layer to a 2d map
                return;
            }
            const idBase = `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${dataSource.id}_`;
            const idTemporary = `${idBase}???`;
            const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;
            if (defaultViewId && defaultViewId === activeViewId) {
                // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
                if (addToMapDatas[idTemporary]) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, `addToMapDatas.${idTemporary}.dataChangeType`, jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove);
                }
            }
            addToMapDatas[id] = {
                mapWidgetId: this.widgetId,
                messageWidgetId: message.widgetId,
                // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
                jimuMapViewId: jimuMapViewId,
                dataSourceId: dataSource.id,
                type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.MessageAction,
                dataChangeType: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Remove : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeType.Create,
                dataChangeStatus: message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Remove ? jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Fulfilled : jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.DataChangeStatus.Pending,
                title: id // 'add to map message ...'
            };
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'addToMapDatas', addToMapDatas);
        return Promise.resolve(true);
    }
    _getActiveViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId && infos[viewId].isActive);
    }
    _getDefaultViewId(mapWidgetId, infos) {
        return Object.keys(infos || {}).find(viewId => infos[viewId].mapWidgetId === mapWidgetId);
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9hZGQtdG8tbWFwLWFjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUN1SDtBQUUxSCxNQUFNLGNBQWUsU0FBUSw0REFBcUI7SUFDL0Qsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELElBQUksa0JBQWtCLENBQUMsV0FBVyxLQUFLLG9FQUE2QixFQUFFO1lBQ3BFLE9BQU8sSUFBSTtTQUNaO2FBQU07WUFDTCxPQUFPLEtBQUs7U0FDYjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELGNBQWMsQ0FBRSxXQUF3QixFQUFFLGVBQXdCOztRQUNoRSxNQUFNLGFBQWEsR0FBa0IsNkVBQStCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsMENBQUUsYUFBYSxLQUFJLEVBQUU7UUFDMUgsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztZQUM1QyxJQUFJLFlBQUssQ0FBQyxDQUFDLENBQUMsMENBQUUsZUFBZSxNQUFLLGVBQWUs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N0gsS0FBSyxFQUFFLEVBQUUsQ0FBQywyQkFBMkI7YUFDdEM7UUFDSCxDQUFDLENBQUM7UUFFRixtQkFBbUI7UUFDbkIsc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7UUFDakcsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU8sZ0JBQWdCLENBQUUsV0FBbUIsRUFBRSxLQUFvRTtRQUNqSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDckgsQ0FBQztJQUVPLGlCQUFpQixDQUFFLFdBQW1CLEVBQUUsS0FBb0U7UUFDbEgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztJQUMzRixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWRkLXRvLW1hcC1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIHR5cGUgRGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlc0NoYW5nZVR5cGUsIE11dGFibGVTdG9yZU1hbmFnZXIsXHJcbiAgZ2V0QXBwU3RvcmUsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIEppbXVNYXBWaWV3SW5mbywgdHlwZSBNZXNzYWdlRGVzY3JpcHRpb24sIHR5cGUgRGF0YVNvdXJjZSwgRGF0YVNvdXJjZVR5cGVzLCB0eXBlIEpTQVBJTGF5ZXJNaXhpblxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQUREX1RPX01BUF9EQVRBX0lEX1BSRUZJWCwgQWN0aW9uVHlwZSwgdHlwZSBBZGRUb01hcERhdGFzLCBEYXRhQ2hhbmdlVHlwZSwgRGF0YUNoYW5nZVN0YXR1cywgTWFwVmlld01hbmFnZXIgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZFRvTWFwQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcclxuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XHJcbiAgICBpZiAobWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlc0NoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVMaXN0ZW4gKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhZGRUb01hcERhdGFzOiBBZGRUb01hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uYWRkVG9NYXBEYXRhcyB8fCB7fVxyXG4gICAgY29uc3QgbmV3QWRkVG9NYXBEYXRhcyA9IHt9XHJcbiAgICBPYmplY3QuZW50cmllcyhhZGRUb01hcERhdGFzKS5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgaWYgKGVudHJ5WzFdPy5tZXNzYWdlV2lkZ2V0SWQgIT09IG1lc3NhZ2VXaWRnZXRJZCkge1xyXG4gICAgICAgIG5ld0FkZFRvTWFwRGF0YXNbZW50cnlbMF1dID0gZW50cnlbMV0gLy8qKioqKioqKipcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdhZGRUb01hcERhdGFzJywgbmV3QWRkVG9NYXBEYXRhcylcclxuICB9XHJcblxyXG4gIC8vZ2V0U2V0dGluZ0NvbXBvbmVudFVyaSAobWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBtZXNzYWdlV2lkZ2V0SWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vICByZXR1cm4gJ21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZydcclxuICAvL31cclxuXHJcbiAgb25FeGVjdXRlIChtZXNzYWdlOiBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IGRlZmF1bHRWaWV3SWQgPSB0aGlzLl9nZXREZWZhdWx0Vmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxyXG4gICAgY29uc3QgamltdU1hcFZpZXdJZCA9IGFjdGl2ZVZpZXdJZCB8fCBkZWZhdWx0Vmlld0lkXHJcbiAgICBjb25zdCBhZGRUb01hcERhdGFzID0gTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFN0YXRlVmFsdWUoW3RoaXMud2lkZ2V0SWRdKT8uYWRkVG9NYXBEYXRhcyB8fCB7fVxyXG5cclxuICAgIG1lc3NhZ2UuZGF0YVNvdXJjZXMuZm9yRWFjaChkYXRhU291cmNlUGFyYW0gPT4ge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNvdXJjZVBhcmFtIGFzIERhdGFTb3VyY2UgJiBKU0FQSUxheWVyTWl4aW5cclxuICAgICAgaWYgKCFkYXRhU291cmNlLnN1cHBvcnRTcGF0aWFsSW5mbyB8fCAhZGF0YVNvdXJjZS5zdXBwb3J0U3BhdGlhbEluZm8oKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gYWN0aXZlVmlld0lkICYmIE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0SmltdU1hcFZpZXdCeUlkKGFjdGl2ZVZpZXdJZClcclxuICAgICAgaWYgKChkYXRhU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyIHx8IGRhdGFTb3VyY2UudHlwZSA9PT0gRGF0YVNvdXJjZVR5cGVzLlNjZW5lU2VydmljZSkgJiYgamltdU1hcFZpZXc/LnZpZXc/LnR5cGUgPT09ICcyZCcpIHtcclxuICAgICAgICAvLyBhZGQgYSBzY2VuZSBsYXllciB0byBhIDJkIG1hcFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGlkQmFzZSA9IGAke0FERF9UT19NQVBfREFUQV9JRF9QUkVGSVh9bWVzc2FnZUFjdGlvbl8ke3RoaXMud2lkZ2V0SWR9XyR7ZGF0YVNvdXJjZS5pZH1fYFxyXG4gICAgICBjb25zdCBpZFRlbXBvcmFyeSA9IGAke2lkQmFzZX0/Pz9gXHJcbiAgICAgIGNvbnN0IGlkID0gYWN0aXZlVmlld0lkID8gYCR7aWRCYXNlfSR7YWN0aXZlVmlld0lkfWAgOiBpZFRlbXBvcmFyeVxyXG5cclxuICAgICAgaWYgKGRlZmF1bHRWaWV3SWQgJiYgZGVmYXVsdFZpZXdJZCA9PT0gYWN0aXZlVmlld0lkKSB7XHJcbiAgICAgICAgLy8gYWxsb3cgdG8gYWRkIGRhdGEgdXNpbmcgYSB0ZW1wb3JhcnkgaWQsIHRlbXBvcmFyeSBpZCBkYXRhIHdpbGwgYmUgZGVsZXRlZCBpZiBjYW4gZ2V0IGFjdGl2ZVZpZXdJZFxyXG4gICAgICAgIGlmIChhZGRUb01hcERhdGFzW2lkVGVtcG9yYXJ5XSkge1xyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYGFkZFRvTWFwRGF0YXMuJHtpZFRlbXBvcmFyeX0uZGF0YUNoYW5nZVR5cGVgLCBEYXRhQ2hhbmdlVHlwZS5SZW1vdmUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBhZGRUb01hcERhdGFzW2lkXSA9IHtcclxuICAgICAgICBtYXBXaWRnZXRJZDogdGhpcy53aWRnZXRJZCxcclxuICAgICAgICBtZXNzYWdlV2lkZ2V0SWQ6IG1lc3NhZ2Uud2lkZ2V0SWQsXHJcbiAgICAgICAgLy8gU2V0IGppbXVNYXBWaWV3SWQgdG8gbnVsbCBtZWFucyB0aGUgZGF0YSB3aWxsIGJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBqaW11TWFwVmlld3Mgb2Ygb25lIG1hcFdpZGdldFxyXG4gICAgICAgIGppbXVNYXBWaWV3SWQ6IGppbXVNYXBWaWV3SWQsIC8vIGFjdGl2ZVZpZXdJZCxcclxuICAgICAgICBkYXRhU291cmNlSWQ6IGRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5NZXNzYWdlQWN0aW9uLFxyXG4gICAgICAgIGRhdGFDaGFuZ2VUeXBlOiBtZXNzYWdlLmNoYW5nZVR5cGUgPT09IERhdGFTb3VyY2VzQ2hhbmdlVHlwZS5SZW1vdmUgPyBEYXRhQ2hhbmdlVHlwZS5SZW1vdmUgOiBEYXRhQ2hhbmdlVHlwZS5DcmVhdGUsXHJcbiAgICAgICAgZGF0YUNoYW5nZVN0YXR1czogbWVzc2FnZS5jaGFuZ2VUeXBlID09PSBEYXRhU291cmNlc0NoYW5nZVR5cGUuUmVtb3ZlID8gRGF0YUNoYW5nZVN0YXR1cy5GdWxmaWxsZWQgOiBEYXRhQ2hhbmdlU3RhdHVzLlBlbmRpbmcsXHJcbiAgICAgICAgdGl0bGU6IGlkIC8vICdhZGQgdG8gbWFwIG1lc3NhZ2UgLi4uJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdhZGRUb01hcERhdGFzJywgYWRkVG9NYXBEYXRhcylcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEFjdGl2ZVZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZCAmJiBpbmZvc1t2aWV3SWRdLmlzQWN0aXZlKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0RGVmYXVsdFZpZXdJZCAobWFwV2lkZ2V0SWQ6IHN0cmluZywgaW5mb3M6IEltbXV0YWJsZU9iamVjdDx7IFtqaW11TWFwVmlld0lkOiBzdHJpbmddOiBKaW11TWFwVmlld0luZm8gfT4pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGluZm9zIHx8IHt9KS5maW5kKHZpZXdJZCA9PiBpbmZvc1t2aWV3SWRdLm1hcFdpZGdldElkID09PSBtYXBXaWRnZXRJZClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9