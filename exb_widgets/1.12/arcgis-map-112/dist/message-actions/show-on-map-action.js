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

/***/ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsOnlyOneDs": () => (/* binding */ checkIsOnlyOneDs),
/* harmony export */   "checkOutActionConfig": () => (/* binding */ checkOutActionConfig),
/* harmony export */   "getDsByWidgetId": () => (/* binding */ getDsByWidgetId),
/* harmony export */   "getMessageCarryDataByWidgetId": () => (/* binding */ getMessageCarryDataByWidgetId),
/* harmony export */   "getUseDataSourceInfo": () => (/* binding */ getUseDataSourceInfo),
/* harmony export */   "initOutputDataSources": () => (/* binding */ initOutputDataSources),
/* harmony export */   "isUseOutputDataSources": () => (/* binding */ isUseOutputDataSources)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");


function isUseOutputDataSources(wId, messageType) {
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    return messageCarryData === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource;
}
function getMessageCarryDataByWidgetId(wId, messageType) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const publishMessages = (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _b === void 0 ? void 0 : _b.publishMessages;
    let messageCarryData = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource;
    publishMessages === null || publishMessages === void 0 ? void 0 : publishMessages.forEach(el => {
        const publishMessageProperty = el;
        if ((publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData) && (publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageType) === messageType) {
            messageCarryData = publishMessageProperty === null || publishMessageProperty === void 0 ? void 0 : publishMessageProperty.messageCarryData;
        }
    });
    return messageCarryData;
}
function checkOutActionConfig(actionConfig, messageWidgetId, messageType) {
    const config = getAppConfig();
    //const messageWidgetJson = config.widgets[messageWidgetId]
    let useDataSource = null;
    const useDataSources = [];
    if (!actionConfig.useDataSource) {
        const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
        //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources.length > 0) {
        if (messageWidgetUseDataSources.length > 0) {
            messageWidgetUseDataSources.forEach((useDS, index) => {
                const dsJson = config.dataSources[useDS.dataSourceId];
                let tempUseDataSource;
                if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
                    tempUseDataSource = null;
                }
                else {
                    tempUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                        dataSourceId: useDS.dataSourceId,
                        mainDataSourceId: useDS.mainDataSourceId,
                        rootDataSourceId: useDS.rootDataSourceId,
                        dataViewId: useDS.dataViewId
                    });
                    if (!useDataSource) {
                        useDataSource = tempUseDataSource;
                    }
                    useDataSources.push(tempUseDataSource);
                }
            });
        }
    }
    else {
        useDataSource = checkOutUseDataSource(messageWidgetId, actionConfig.useDataSource, messageType);
        if (actionConfig.useDataSources) {
            actionConfig.useDataSources.forEach(useDS => {
                const tempUseDataSource = checkOutUseDataSource(messageWidgetId, useDS, messageType);
                tempUseDataSource && useDataSources.push(tempUseDataSource);
            });
        }
    }
    return {
        useDataSource: useDataSource,
        useDataSources: useDataSources
    };
}
function checkOutUseDataSource(messageWidgetId, oldUseDataSource, messageType) {
    var _a, _b, _c, _d;
    const config = getAppConfig();
    //const widgetJson = config.widgets[messageWidgetId]
    const messageWidgetUseDataSources = getDsByWidgetId(messageWidgetId, messageType);
    let initUseDataSource = null;
    let isMapDs = false;
    const dsId = messageWidgetUseDataSources && messageWidgetUseDataSources[0] && messageWidgetUseDataSources[0].dataSourceId;
    if (!dsId) {
        return null;
    }
    const dsJson = config.dataSources[dsId];
    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene))) {
        isMapDs = true;
    }
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    const isoldUseDataSourceIsOutputDs = (_b = (_a = dsM.getDataSource(oldUseDataSource.dataSourceId)) === null || _a === void 0 ? void 0 : _a.getDataSourceJson()) === null || _b === void 0 ? void 0 : _b.isOutputFromWidget;
    if (isMapDs) {
        // webmap or webscene ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                if (messageWidgetUseDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            initUseDataSource = null;
        }
    }
    else {
        // featurelayer ds
        let isUseOldDs = false;
        if (messageWidgetUseDataSources) {
            for (let i = 0; i < messageWidgetUseDataSources.length; i++) {
                const oldUseDataSourceId = isoldUseDataSourceIsOutputDs ? oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.mainDataSourceId : oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.dataSourceId;
                const currentUseDataSourceId = isoldUseDataSourceIsOutputDs ? (_c = messageWidgetUseDataSources[i]) === null || _c === void 0 ? void 0 : _c.mainDataSourceId : (_d = messageWidgetUseDataSources[i]) === null || _d === void 0 ? void 0 : _d.dataSourceId;
                // support data view
                if (currentUseDataSourceId === oldUseDataSourceId) {
                    isUseOldDs = true;
                    break;
                }
            }
        }
        if (isUseOldDs) {
            initUseDataSource = oldUseDataSource;
        }
        else {
            if (messageWidgetUseDataSources && messageWidgetUseDataSources.length === 1) {
                initUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    dataSourceId: messageWidgetUseDataSources[0].dataSourceId,
                    mainDataSourceId: messageWidgetUseDataSources[0].mainDataSourceId,
                    rootDataSourceId: messageWidgetUseDataSources[0].rootDataSourceId
                });
            }
            else {
                initUseDataSource = null;
            }
        }
    }
    return initUseDataSource;
}
function getUseDataSourceInfo(widgetId, useDataSource, useDataSources, messageType) {
    var _a;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[widgetId];
    let isReadOnly = false;
    const dsRootIds = getDsRootIdsByWidgetId(widgetId);
    //if (dsRootIds && dsRootIds.length === 0 && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    //if (!dsRootIds && (widgetJson && widgetJson.useDataSources && widgetJson.useDataSources.length === 1)) {
    //  isReadOnly = true
    //}
    if (!dsRootIds || (dsRootIds === null || dsRootIds === void 0 ? void 0 : dsRootIds.length) === 0) {
        isReadOnly = checkIsOnlyOneDs(widgetJson, messageType, dsRootIds);
    }
    const fromDsIds = dsRootIds ? undefined : getDsIdsByWidgetId(widgetId, messageType);
    const dsSelectorSource = {
        isReadOnly: isReadOnly,
        useDataSource: useDataSource,
        useDataSources: useDataSources || [],
        fromRootDsIds: dsRootIds,
        fromDsIds: fromDsIds
    };
    return dsSelectorSource;
}
function getDsByWidgetId(wId, messageType) {
    var _a;
    const messageCarryData = getMessageCarryDataByWidgetId(wId, messageType);
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const useDataSources = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const outputDataSources = initOutputDataSources(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
    const bothDatasource = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.asMutable({ deep: true }).concat(outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.asMutable({ deep: true }));
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return outputDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return useDataSources;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(bothDatasource);
    }
}
function initOutputDataSources(outputDataSources) {
    var _a;
    const ds = (_a = outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.map(dsId => {
        return {
            dataSourceId: dsId,
            mainDataSourceId: dsId,
            rootDataSourceId: null
        };
    })) !== null && _a !== void 0 ? _a : [];
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ds);
}
function checkIsOnlyOneDs(widgetJson, messageType, dsRootIds) {
    const messageCarryData = getMessageCarryDataByWidgetId(widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.id, messageType);
    const outputDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.outputDataSources) || [];
    const useDs = (widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) || [];
    if (dsRootIds) {
        return false;
    }
    switch (messageCarryData) {
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.OutputDataSource:
            return (outputDs === null || outputDs === void 0 ? void 0 : outputDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.UseDataSource:
            return (useDs === null || useDs === void 0 ? void 0 : useDs.length) === 1;
        case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageCarryData.BothDataSource:
            const dsLength = outputDs.length + useDs.length;
            return dsLength === 1;
    }
}
function getAppConfig() {
    var _a, _b, _c;
    return window.jimuConfig.isBuilder ? (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig : (_c = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _c === void 0 ? void 0 : _c.appConfig;
}
function getDsRootIdsByWidgetId(wId) {
    var _a, _b;
    const appConfig = getAppConfig();
    const widgetJson = (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _a === void 0 ? void 0 : _a[wId];
    const rootIds = [];
    const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
    (_b = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _b === void 0 ? void 0 : _b.forEach((useDS) => {
        const ds = dsM.getDataSource(useDS.dataSourceId);
        if ((ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebMap || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ArcGISDataSourceTypes.WebScene) { // is root ds
            rootIds.push(useDS.dataSourceId);
        }
    });
    return rootIds.length > 0 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rootIds) : undefined;
}
function getDsIdsByWidgetId(wId, messageType) {
    var _a;
    const messageWidgetUseDataSources = getDsByWidgetId(wId, messageType);
    return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_a = messageWidgetUseDataSources.map((useDS) => {
        const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        const ds = dsM.getDataSource(useDS.dataSourceId);
        let resultDs;
        if (ds && ds.isDataView) {
            // support data view
            resultDs = ds === null || ds === void 0 ? void 0 : ds.getMainDataSource();
        }
        else {
            resultDs = ds;
        }
        return resultDs === null || resultDs === void 0 ? void 0 : resultDs.id;
    })) !== null && _a !== void 0 ? _a : []);
}


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
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/show-on-map-action.ts ***!
  \******************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShowOnMapAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");



class ShowOnMapAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange) {
            const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_2__.getDsByWidgetId)(messageDescription.widgetId, messageDescription.messageType);
            return messageWidgetUseDataSources.some(useDataSource => {
                var _a;
                const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId);
                return !!((_a = ds.getDataSourceJson()) === null || _a === void 0 ? void 0 : _a.geometryType);
            });
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
        const showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
        const newShowOnMapDatas = {};
        Object.entries(showOnMapDatas).forEach(entry => {
            var _a;
            if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) !== messageWidgetId) {
                newShowOnMapDatas[entry[0]] = entry[1];
            }
        });
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', newShowOnMapDatas);
    }
    //getSettingComponentUri (messageType: MessageType, messageWidgetId?: string): string {
    //  return 'message-actions/show-on-map-action-setting'
    //}
    onExecute(message, actionConfig) {
        var _a;
        const activeViewId = this._getActiveViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const defaultViewId = this._getDefaultViewId(this.widgetId, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().jimuMapViewsInfo);
        const jimuMapViewId = activeViewId || defaultViewId;
        let showOnMapDatas = ((_a = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.widgetId])) === null || _a === void 0 ? void 0 : _a.showOnMapDatas) || {};
        if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
            message.dataRecordSets.forEach(dataRecordSet => {
                const idBase = this._getIdBase(dataRecordSet.name);
                const idTemporary = `${idBase}???`;
                const id = activeViewId ? `${idBase}${activeViewId}` : idTemporary;
                if (defaultViewId && defaultViewId === activeViewId) {
                    // allow to add data using a temporary id, temporary id data will be deleted if can get activeViewId
                    // handle situation:
                    //   if the map widget has not been loaded in another page and the map widget has two views (view1 and view2),
                    //   the view id is unknown at this time, so ues a temporary view id to add data first, until the page is
                    //   loaded and add data again, delete the data corresponding to this temporary view id and use crrrent
                    //   active view id to add data.
                    delete showOnMapDatas[idTemporary];
                }
                showOnMapDatas[id] = {
                    mapWidgetId: this.widgetId,
                    messageWidgetId: message.widgetId,
                    // Set jimuMapViewId to null means the data will be shared between all jimuMapViews of one mapWidget
                    jimuMapViewId: jimuMapViewId,
                    dataSet: dataRecordSet,
                    type: jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.ActionType.MessageAction,
                    // use code to maintain compatibility here
                    // for 'symbolOption', the difference between the values 'undefined' and 'null':
                    //   undefined: app was created before online10.1 (inlcude 10.1), use default symbol;
                    //   null: app was created or saved after online10.1, use default renderer of layer.
                    // eslint-disable-next-line
                    symbolOption: (actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) ? actionConfig.symbolOption : ((actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.isUseCustomSymbol) === false ? null : undefined),
                    title: id // 'Show on map message ...'
                };
            });
        }
        else if (message.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Remove) {
            message.dataRecordSetNames.forEach(dataRecordSetName => {
                const idBase = this._getIdBase(dataRecordSetName);
                // delete showOnMapDatas[id]
                const newShowOnMapDatas = {};
                Object.entries(showOnMapDatas).forEach(entry => {
                    if (entry[0].indexOf(idBase) !== 0) {
                        newShowOnMapDatas[entry[0]] = entry[1];
                    }
                });
                showOnMapDatas = newShowOnMapDatas;
            });
        }
        // save action data
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'showOnMapDatas', showOnMapDatas);
        return Promise.resolve(true);
    }
    _getIdBase(dataRecordSetName) {
        return `${jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.SHOW_ON_MAP_DATA_ID_PREFIX}messageAction_${this.widgetId}_${dataRecordSetName}_`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJMO0FBQ3hJO0FBRTVDLFNBQVMsc0JBQXNCLENBQUUsR0FBVyxFQUFFLFdBQXdCO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxPQUFPLGdCQUFnQixLQUFLLHdFQUFpQztBQUMvRCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ2xGLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxHQUFHLENBQUM7SUFDNUMsTUFBTSxlQUFlLEdBQUcsZ0JBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLDBDQUFFLGVBQWU7SUFDN0QsSUFBSSxnQkFBZ0IsR0FBRyxxRUFBOEI7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFO1lBQ25HLGdCQUFnQixHQUFHLHNCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQjtTQUM1RDtJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFPTSxTQUFTLG9CQUFvQixDQUFFLFlBQXFELEVBQUUsZUFBdUIsRUFBRSxX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QStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztRQUNuRyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFTyxVQUFVLENBQUUsaUJBQXlCO1FBQzNDLE9BQU8sR0FBRyxtRUFBMEIsaUJBQWlCLElBQUksQ0FBQyxRQUFRLElBQUksaUJBQWlCLEdBQUc7SUFDNUYsQ0FBQztJQUVPLGdCQUFnQixDQUFFLFdBQW1CLEVBQUUsS0FBb0U7UUFDakgsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3JILENBQUM7SUFFTyxpQkFBaUIsQ0FBRSxXQUFtQixFQUFFLEtBQW9FO1FBQ2xILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7SUFDM0YsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xyXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXHJcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcclxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG5cclxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXHJcbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXHJcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxyXG5cclxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgaWYgKCFkc0lkKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICBpc01hcERzID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG5cclxuICBpZiAoaXNNYXBEcykge1xyXG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXHJcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXHJcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0pID8/IFtdXHJcbiAgcmV0dXJuIEltbXV0YWJsZShkcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cclxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXHJcbiAgaWYgKGRzUm9vdElkcykge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcclxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xyXG4gIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc1Jvb3RJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCByb290SWRzID0gW11cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcclxuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIEltbXV0YWJsZShtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubWFwKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBsZXQgcmVzdWx0RHNcclxuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgIHJlc3VsdERzID0gZHM/LmdldE1haW5EYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERzID0gZHNcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHREcz8uaWRcclxuICB9KSA/PyBbXSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbiwgTWVzc2FnZVR5cGUsIHR5cGUgTWVzc2FnZSwgdHlwZSBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgTXV0YWJsZVN0b3JlTWFuYWdlcixcclxuICBnZXRBcHBTdG9yZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgSmltdU1hcFZpZXdJbmZvLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvbiwgRGF0YVNvdXJjZU1hbmFnZXJcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IFNIT1dfT05fTUFQX0RBVEFfSURfUFJFRklYLCBBY3Rpb25UeXBlLCB0eXBlIFNob3dPbk1hcERhdGFzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IHR5cGUgSU1Db25maWcgfSBmcm9tICcuL3Nob3ctb24tbWFwLWFjdGlvbi1zZXR0aW5nJ1xyXG5pbXBvcnQgeyBnZXREc0J5V2lkZ2V0SWQgfSBmcm9tICcuL2FjdGlvbi11dGlscydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dPbk1hcEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSkge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VEZXNjcmlwdGlvbi53aWRnZXRJZCwgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIHJldHVybiAhIWRzLmdldERhdGFTb3VyY2VKc29uKCk/Lmdlb21ldHJ5VHlwZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVMaXN0ZW4gKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBzaG93T25NYXBEYXRhczogU2hvd09uTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5zaG93T25NYXBEYXRhcyB8fCB7fVxyXG4gICAgY29uc3QgbmV3U2hvd09uTWFwRGF0YXMgPSB7fVxyXG4gICAgT2JqZWN0LmVudHJpZXMoc2hvd09uTWFwRGF0YXMpLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICBpZiAoZW50cnlbMV0/Lm1lc3NhZ2VXaWRnZXRJZCAhPT0gbWVzc2FnZVdpZGdldElkKSB7XHJcbiAgICAgICAgbmV3U2hvd09uTWFwRGF0YXNbZW50cnlbMF1dID0gZW50cnlbMV1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIG5ld1Nob3dPbk1hcERhdGFzKVxyXG4gIH1cclxuXHJcbiAgLy9nZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gIHJldHVybiAnbWVzc2FnZS1hY3Rpb25zL3Nob3ctb24tbWFwLWFjdGlvbi1zZXR0aW5nJ1xyXG4gIC8vfVxyXG5cclxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IERhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLCBhY3Rpb25Db25maWc/OiBJTUNvbmZpZyk6IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXdJZCA9IHRoaXMuX2dldEFjdGl2ZVZpZXdJZCh0aGlzLndpZGdldElkLCBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuamltdU1hcFZpZXdzSW5mbylcclxuICAgIGNvbnN0IGRlZmF1bHRWaWV3SWQgPSB0aGlzLl9nZXREZWZhdWx0Vmlld0lkKHRoaXMud2lkZ2V0SWQsIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5qaW11TWFwVmlld3NJbmZvKVxyXG4gICAgY29uc3QgamltdU1hcFZpZXdJZCA9IGFjdGl2ZVZpZXdJZCB8fCBkZWZhdWx0Vmlld0lkXHJcbiAgICBsZXQgc2hvd09uTWFwRGF0YXMgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy53aWRnZXRJZF0pPy5zaG93T25NYXBEYXRhcyB8fCB7fVxyXG5cclxuICAgIGlmIChtZXNzYWdlLmNoYW5nZVR5cGUgPT09IFJlY29yZFNldENoYW5nZVR5cGUuQ3JlYXRlVXBkYXRlKSB7XHJcbiAgICAgIG1lc3NhZ2UuZGF0YVJlY29yZFNldHMuZm9yRWFjaChkYXRhUmVjb3JkU2V0ID0+IHtcclxuICAgICAgICBjb25zdCBpZEJhc2UgPSB0aGlzLl9nZXRJZEJhc2UoZGF0YVJlY29yZFNldC5uYW1lKVxyXG4gICAgICAgIGNvbnN0IGlkVGVtcG9yYXJ5ID0gYCR7aWRCYXNlfT8/P2BcclxuICAgICAgICBjb25zdCBpZCA9IGFjdGl2ZVZpZXdJZCA/IGAke2lkQmFzZX0ke2FjdGl2ZVZpZXdJZH1gIDogaWRUZW1wb3JhcnlcclxuXHJcbiAgICAgICAgaWYgKGRlZmF1bHRWaWV3SWQgJiYgZGVmYXVsdFZpZXdJZCA9PT0gYWN0aXZlVmlld0lkKSB7XHJcbiAgICAgICAgICAvLyBhbGxvdyB0byBhZGQgZGF0YSB1c2luZyBhIHRlbXBvcmFyeSBpZCwgdGVtcG9yYXJ5IGlkIGRhdGEgd2lsbCBiZSBkZWxldGVkIGlmIGNhbiBnZXQgYWN0aXZlVmlld0lkXHJcbiAgICAgICAgICAvLyBoYW5kbGUgc2l0dWF0aW9uOlxyXG4gICAgICAgICAgLy8gICBpZiB0aGUgbWFwIHdpZGdldCBoYXMgbm90IGJlZW4gbG9hZGVkIGluIGFub3RoZXIgcGFnZSBhbmQgdGhlIG1hcCB3aWRnZXQgaGFzIHR3byB2aWV3cyAodmlldzEgYW5kIHZpZXcyKSxcclxuICAgICAgICAgIC8vICAgdGhlIHZpZXcgaWQgaXMgdW5rbm93biBhdCB0aGlzIHRpbWUsIHNvIHVlcyBhIHRlbXBvcmFyeSB2aWV3IGlkIHRvIGFkZCBkYXRhIGZpcnN0LCB1bnRpbCB0aGUgcGFnZSBpc1xyXG4gICAgICAgICAgLy8gICBsb2FkZWQgYW5kIGFkZCBkYXRhIGFnYWluLCBkZWxldGUgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGlzIHRlbXBvcmFyeSB2aWV3IGlkIGFuZCB1c2UgY3JycmVudFxyXG4gICAgICAgICAgLy8gICBhY3RpdmUgdmlldyBpZCB0byBhZGQgZGF0YS5cclxuICAgICAgICAgIGRlbGV0ZSBzaG93T25NYXBEYXRhc1tpZFRlbXBvcmFyeV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNob3dPbk1hcERhdGFzW2lkXSA9IHtcclxuICAgICAgICAgIG1hcFdpZGdldElkOiB0aGlzLndpZGdldElkLFxyXG4gICAgICAgICAgbWVzc2FnZVdpZGdldElkOiBtZXNzYWdlLndpZGdldElkLFxyXG4gICAgICAgICAgLy8gU2V0IGppbXVNYXBWaWV3SWQgdG8gbnVsbCBtZWFucyB0aGUgZGF0YSB3aWxsIGJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBqaW11TWFwVmlld3Mgb2Ygb25lIG1hcFdpZGdldFxyXG4gICAgICAgICAgamltdU1hcFZpZXdJZDogamltdU1hcFZpZXdJZCwgLy8gYWN0aXZlVmlld0lkLFxyXG4gICAgICAgICAgZGF0YVNldDogZGF0YVJlY29yZFNldCxcclxuICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuTWVzc2FnZUFjdGlvbixcclxuICAgICAgICAgIC8vIHVzZSBjb2RlIHRvIG1haW50YWluIGNvbXBhdGliaWxpdHkgaGVyZVxyXG4gICAgICAgICAgLy8gZm9yICdzeW1ib2xPcHRpb24nLCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB2YWx1ZXMgJ3VuZGVmaW5lZCcgYW5kICdudWxsJzpcclxuICAgICAgICAgIC8vICAgdW5kZWZpbmVkOiBhcHAgd2FzIGNyZWF0ZWQgYmVmb3JlIG9ubGluZTEwLjEgKGlubGN1ZGUgMTAuMSksIHVzZSBkZWZhdWx0IHN5bWJvbDtcclxuICAgICAgICAgIC8vICAgbnVsbDogYXBwIHdhcyBjcmVhdGVkIG9yIHNhdmVkIGFmdGVyIG9ubGluZTEwLjEsIHVzZSBkZWZhdWx0IHJlbmRlcmVyIG9mIGxheWVyLlxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICBzeW1ib2xPcHRpb246IGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPyBhY3Rpb25Db25maWcuc3ltYm9sT3B0aW9uIDogKGFjdGlvbkNvbmZpZz8uaXNVc2VDdXN0b21TeW1ib2wgPT09IGZhbHNlID8gbnVsbCA6IHVuZGVmaW5lZCksXHJcbiAgICAgICAgICB0aXRsZTogaWQgLy8gJ1Nob3cgb24gbWFwIG1lc3NhZ2UgLi4uJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jaGFuZ2VUeXBlID09PSBSZWNvcmRTZXRDaGFuZ2VUeXBlLlJlbW92ZSkge1xyXG4gICAgICBtZXNzYWdlLmRhdGFSZWNvcmRTZXROYW1lcy5mb3JFYWNoKGRhdGFSZWNvcmRTZXROYW1lID0+IHtcclxuICAgICAgICBjb25zdCBpZEJhc2UgPSB0aGlzLl9nZXRJZEJhc2UoZGF0YVJlY29yZFNldE5hbWUpXHJcblxyXG4gICAgICAgIC8vIGRlbGV0ZSBzaG93T25NYXBEYXRhc1tpZF1cclxuICAgICAgICBjb25zdCBuZXdTaG93T25NYXBEYXRhcyA9IHt9XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc2hvd09uTWFwRGF0YXMpLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVudHJ5WzBdLmluZGV4T2YoaWRCYXNlKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBuZXdTaG93T25NYXBEYXRhc1tlbnRyeVswXV0gPSBlbnRyeVsxXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2hvd09uTWFwRGF0YXMgPSBuZXdTaG93T25NYXBEYXRhc1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNhdmUgYWN0aW9uIGRhdGFcclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdzaG93T25NYXBEYXRhcycsIHNob3dPbk1hcERhdGFzKVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0SWRCYXNlIChkYXRhUmVjb3JkU2V0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHtTSE9XX09OX01BUF9EQVRBX0lEX1BSRUZJWH1tZXNzYWdlQWN0aW9uXyR7dGhpcy53aWRnZXRJZH1fJHtkYXRhUmVjb3JkU2V0TmFtZX1fYFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0QWN0aXZlVmlld0lkIChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Pik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkICYmIGluZm9zW3ZpZXdJZF0uaXNBY3RpdmUpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXREZWZhdWx0Vmlld0lkIChtYXBXaWRnZXRJZDogc3RyaW5nLCBpbmZvczogSW1tdXRhYmxlT2JqZWN0PHsgW2ppbXVNYXBWaWV3SWQ6IHN0cmluZ106IEppbXVNYXBWaWV3SW5mbyB9Pik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaW5mb3MgfHwge30pLmZpbmQodmlld0lkID0+IGluZm9zW3ZpZXdJZF0ubWFwV2lkZ2V0SWQgPT09IG1hcFdpZGdldElkKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=