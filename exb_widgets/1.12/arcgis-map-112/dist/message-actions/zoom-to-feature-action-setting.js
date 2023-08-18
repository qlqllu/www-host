System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
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

/***/ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Source',
    sourceDescript: 'A web map or web scene, or any combination of the two.',
    selectThirdMapHint: 'Please unselect a map or scene before you choose another one. Up to two are supported.',
    initialMap: 'Initial map',
    initialMapView: 'Initial view',
    selectMap: 'Select map',
    setMapView: 'Modify initial view',
    defaultView: 'Default',
    defaultViewTip: 'Initial position of the map inherited from the web map or web scene',
    customView: 'Custom',
    customViewTip: 'Create a new position of the map',
    customViewSet: 'Modify',
    toolLabel: 'Tools',
    options: 'Options',
    selectionHighlightColor: 'Selection highlight',
    featureSelectionColor: 'Feature selection colors',
    featureHighlightFill: 'Highlight fill',
    featureHighlightOutline: 'Highlight outline',
    disableScrollZoom: 'Disable scroll zooming',
    enableScrollZoom: 'Enable scroll zooming',
    disablePopUp: 'Disable pop-up',
    enablePopUp: 'Enable pop-up',
    sceneQualityMode: 'Scene quality mode',
    chooseALayer: 'Select a layer',
    dataRelationShip: 'Data relationship',
    mapNone: 'none',
    messageField: 'Message field',
    mapLayout: 'Tools layout',
    mapLayout_LargeAndMedium: 'Large and medium size',
    mapLayout_Small: 'Small size',
    mapAction_TriggerLayer: 'Trigger data',
    mapAction_SetData: 'Select data',
    mapAction_ActionLayer: 'Action data',
    mapAction_Conditions: 'Conditions',
    mapAction_RelateMessage: 'Trigger / action connection',
    mapAction_TriggerLayerField: 'Select a trigger field',
    mapAction_None: 'none',
    mapAction_Equals: 'equals',
    mapAction_ActionLayerField: 'Select an action field',
    mapAction_MoreConditions: 'More conditions',
    mapAction_SetExpression: 'Please set your expression first.',
    mapAction_ChooseLayer: 'Select data',
    mapAction_AutoBind: 'Auto bound.',
    mapAction_NoLayer: 'No data.',
    mapAction_Point: 'Point',
    mapAction_Polyline: 'Polyline',
    mapAction_Polygon: 'Polygon',
    mapAction_UseLayerDefinedSymbols: 'Use layer-defined symbols',
    mapAction_UseCustomSymbols: 'Use custom symbols',
    mapZoomToAction_ZoomScale: 'Zoom scale',
    mapZoomToAction_Automatic: 'Automatic',
    mapZoomToAction_Custom: 'Custom',
    mapZoomToAction_TypeScale: 'Type a scale'
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

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*******************************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/zoom-to-feature-action-setting.tsx ***!
  \*******************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");
/** @jsx jsx */







const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _ZoomToFeatureActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.NoLockTriggerLayerWidgets = ['Map'];
        this.modalStyle = {
            position: 'absolute',
            top: '0',
            bottom: '0',
            width: '259px',
            height: 'auto',
            borderRight: '',
            borderBottom: '',
            paddingBottom: '1px'
        };
        this.handleTriggerLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleTriggerLayerSelected(useDataSources);
            }
            else {
                this.handleRemoveLayerForTriggerLayer();
            }
        };
        this.handleTriggerLayerSelected = (currentSelectedDs) => {
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            // supports data view
            let finalSelectedDs;
            if (this.checkIsDisableDataView(this.props.messageWidgetId)) {
                finalSelectedDs = currentSelectedDs;
            }
            else {
                finalSelectedDs = messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                    const dataSource = currentSelectedDs.find(ds => {
                        var _a;
                        if ((!ds.dataViewId || ds.dataViewId === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.OUTPUT_DATA_VIEW_ID) && !((_a = this.props.config.useDataSources) === null || _a === void 0 ? void 0 : _a.find(preDs => ds.mainDataSourceId === preDs.mainDataSourceId))) {
                            // select ds from ds list
                            return ds.mainDataSourceId === messageWidgetUseDataSource.mainDataSourceId;
                        }
                        else {
                            // select ds from data view check box
                            return ds.dataSourceId === messageWidgetUseDataSource.dataSourceId;
                        }
                    });
                    if (dataSource) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            }
            let config = this.props.config.set('useDataSource', finalSelectedDs[0]);
            // supports multiple trigger
            config = config.set('useDataSources', finalSelectedDs);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleRemoveLayerForTriggerLayer = () => {
            let config = this.props.config.set('useDataSource', null);
            // supports multiple trigger
            config = config.set('useDataSources', []);
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: config
            });
        };
        this.handleIsUseCustomZoomToOption = (isUseCustomZoomToOption) => {
            if (isUseCustomZoomToOption) {
                if (!this.props.config.zoomToOption || !this.props.config.zoomToOption.scale) {
                    this.props.onSettingChange({
                        actionId: this.props.actionId,
                        config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption).setIn(['zoomToOption', 'scale'], 5000)
                    });
                    return;
                }
            }
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('isUseCustomZoomToOption', isUseCustomZoomToOption)
            });
        };
        this.handleSetCustomZoomScale = (value) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.setIn(['zoomToOption', 'scale'], value)
            });
        };
        this.getTriggerLayerContent = () => {
            //const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources)
            const triggerDsSelectorSourceData = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getUseDataSourceInfo)(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources, this.props.messageType);
            let useDataSources;
            if (this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId) || triggerDsSelectorSourceData.useDataSources) {
                useDataSources = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(triggerDsSelectorSourceData.useDataSources);
            }
            else {
                useDataSources = triggerDsSelectorSourceData.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([triggerDsSelectorSourceData.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            }
            const isDisableDataView = this.checkIsDisableDataView(this.props.messageWidgetId);
            const isDisableDataSourceList = triggerDsSelectorSourceData.isReadOnly && isDisableDataView;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, disableRemove: () => triggerDsSelectorSourceData.isReadOnly, disableDataSourceList: isDisableDataSourceList, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: false, hideDataView: ((dataViewJson, mainDataSourceId) => {
                    const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
                    return !messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                        return messageWidgetUseDataSource.mainDataSourceId === mainDataSourceId;
                    }).find(messageWidgetUseDataSource => {
                        let messageWidgetUseDataSourceDataViewId;
                        if (messageWidgetUseDataSource.dataViewId) {
                            messageWidgetUseDataSourceDataViewId = messageWidgetUseDataSource.dataViewId;
                        }
                        else {
                            messageWidgetUseDataSourceDataViewId = jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_DATA_VIEW_ID;
                        }
                        return messageWidgetUseDataSourceDataViewId === dataViewJson.id;
                    });
                }), isMultiple: this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId), isMultipleDataView: true, hideCreateViewButton: true, enableToSelectOutputDsFromSelf: true }));
        };
        this.checkIsSupportMultipleTriggerDataSources = (widgetId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            const widgetLabel = (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _d === void 0 ? void 0 : _d.label;
            if (widgetLabel === 'Map') {
                return true;
            }
            else {
                if (messageWidgetUseDataSources.length > 1) {
                    return this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange || this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
                }
                else {
                    return false;
                }
            }
        };
        this.checkIsDisableDataView = (widgetId) => {
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            //const appConfig = getAppStore().getState()?.appStateInBuilder?.appConfig
            //const widgetJson = appConfig?.widgets?.[widgetId]
            //if (widgetJson) {
            //  const widgetLabel = widgetJson?.manifest?.label
            //  if (widgetLabel === 'Map') {
            //    return true
            //  } else {
            //    return false
            //  }
            //} else {
            //  return false
            //}
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false,
            disableDataTrigger: props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange
        };
    }
    componentDidMount() {
        //const initConfig = this.getInitConfig()
        const initConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_6__.checkOutActionConfig)(this.props.config, this.props.messageWidgetId, this.props.messageType);
        let config = this.props.config.set('useDataSource', initConfig.useDataSource);
        config = config.set('useDataSources', initConfig.useDataSources);
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: config
        });
    }
    getStyle(theme) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      .setting-header {
        padding: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(10)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(0)} ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `;
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            !this.state.disableDataTrigger && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_TriggerLayer }) }, this.getTriggerLayerContent()),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapZoomToAction_ZoomScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_ZoomScale }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(false); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Automatic', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Automatic }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomZoomToOption, onChange: () => { this.handleIsUseCustomZoomToOption(true); } }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Custom', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Custom }))))),
                this.props.config.isUseCustomZoomToOption && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { className: 'w-100', placeholder: this.props.intl.formatMessage({ id: 'mapZoomToAction_TypeScale', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_TypeScale }), value: this.props.config.zoomToOption && this.props.config.zoomToOption.scale, onChange: this.handleSetCustomZoomScale })))));
    }
}
_ZoomToFeatureActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        useDataSource: null
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_ZoomToFeatureActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FBT00sU0FBUyxvQkFBb0IsQ0FBRSxZQUFxRCxFQUFFLGVBQXVCLEVBQUUsV0FBd0I7SUFDNUksTUFBTSxNQUFNLEdBQUcsWUFBWSxFQUFFO0lBQzdCLDJEQUEyRDtJQUUzRCxJQUFJLGFBQWEsR0FBb0IsSUFBSTtJQUN6QyxNQUFNLGNBQWMsR0FBc0IsRUFBRTtJQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtRQUMvQixNQUFNLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO1FBQ2pGLDZHQUE2RztRQUM3RyxJQUFJLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELElBQUksaUJBQWlCO2dCQUNyQixJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxxRUFBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyx1RUFBOEIsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xILGlCQUFpQixHQUFHLElBQUk7aUJBQ3pCO3FCQUFNO29CQUNMLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7d0JBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTt3QkFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO3FCQUM3QixDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLGFBQWEsR0FBRyxpQkFBaUI7cUJBQ2xDO29CQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtTQUFNO1FBQ0wsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUMvRixJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUU7WUFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7Z0JBQ3BGLGlCQUFpQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDN0QsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU87UUFDTCxhQUFhLEVBQUUsYUFBYTtRQUM1QixjQUFjLEVBQUUsY0FBYztLQUMvQjtBQUNILENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUFFLGVBQXVCLEVBQUUsZ0JBQTBELEVBQUUsV0FBd0I7O0lBQzNJLE1BQU0sTUFBTSxHQUFHLFlBQVksRUFBRTtJQUM3QixvREFBb0Q7SUFDcEQsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztJQUNqRixJQUFJLGlCQUFpQixHQUFHLElBQUk7SUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSztJQUVuQixNQUFNLElBQUksR0FBRywyQkFBMkIsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO0lBQ3pILElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUk7S0FDWjtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHFFQUE0QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHVFQUE4QixDQUFDLENBQUMsRUFBRTtRQUNsSCxPQUFPLEdBQUcsSUFBSTtLQUNmO0lBRUQsTUFBTSxHQUFHLEdBQUcsb0VBQTZCLEVBQUU7SUFDM0MsTUFBTSw0QkFBNEIsR0FBRyxlQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQywwQ0FBRSxpQkFBaUIsRUFBRSwwQ0FBRSxrQkFBa0I7SUFFOUgsSUFBSSxPQUFPLEVBQUU7UUFDWCx3QkFBd0I7UUFDeEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELElBQUksMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFO29CQUNyRixVQUFVLEdBQUcsSUFBSTtvQkFDakIsTUFBSztpQkFDTjthQUNGO1NBQ0Y7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLGlCQUFpQixHQUFHLGdCQUFnQjtTQUNyQzthQUFNO1lBQ0wsaUJBQWlCLEdBQUcsSUFBSTtTQUN6QjtLQUNGO1NBQU07UUFDTCxrQkFBa0I7UUFDbEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELE1BQU0sa0JBQWtCLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxZQUFZO2dCQUM3SCxNQUFNLHNCQUFzQixHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxpQ0FBMkIsQ0FBQyxDQUFDLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGlDQUEyQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxZQUFZO2dCQUM3SixvQkFBb0I7Z0JBQ3BCLElBQUksc0JBQXNCLEtBQUssa0JBQWtCLEVBQUU7b0JBQ2pELFVBQVUsR0FBRyxJQUFJO29CQUNqQixNQUFLO2lCQUNOO2FBQ0Y7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsaUJBQWlCLEdBQUcsZ0JBQWdCO1NBQ3JDO2FBQU07WUFDTCxJQUFJLDJCQUEyQixJQUFJLDJCQUEyQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNFLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7b0JBQzVCLFlBQVksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUN6RCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7b0JBQ2pFLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDbEUsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLGlCQUFpQixHQUFHLElBQUk7YUFDekI7U0FDRjtLQUNGO0lBRUQsT0FBTyxpQkFBaUI7QUFDMUIsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUUsUUFBZ0IsRUFBRSxhQUF1RCxFQUFFLGNBQXVELEVBQUUsV0FBd0I7O0lBQ2hNLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxRQUFRLENBQUM7SUFDakQsSUFBSSxVQUFVLEdBQUcsS0FBSztJQUN0QixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDbEQsbUlBQW1JO0lBQ25JLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsMEdBQTBHO0lBQzFHLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSxNQUFLLENBQUMsRUFBRTtRQUN6QyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7S0FDbEU7SUFFRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGNBQWMsRUFBRSxjQUFjLElBQUksRUFBRTtRQUNwQyxhQUFhLEVBQUUsU0FBUztRQUN4QixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUVELE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ3BFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sY0FBYyxHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxjQUFjLEtBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsTUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLENBQUMsSUFBSSxvREFBUyxDQUFDLEVBQUUsQ0FBQztJQUMvRixNQUFNLGNBQWMsR0FBRyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNySCxRQUFRLGdCQUFnQixFQUFFO1FBQ3hCLEtBQUssd0VBQWlDO1lBQ3BDLE9BQU8saUJBQWlCO1FBQzFCLEtBQUsscUVBQThCO1lBQ2pDLE9BQU8sY0FBYztRQUN2QixLQUFLLHNFQUErQjtZQUNsQyxPQUFPLG9EQUFTLENBQUMsY0FBYyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVNLFNBQVMscUJBQXFCLENBQUUsaUJBQWlCOztJQUN0RCxNQUFNLEVBQUUsR0FBRyx1QkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtJQUNILENBQUMsQ0FBQyxtQ0FBSSxFQUFFO0lBQ1IsT0FBTyxvREFBUyxDQUFDLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxnQkFBZ0IsQ0FBRSxVQUF3QixFQUFFLFdBQXdCLEVBQUUsU0FBaUM7SUFDckgsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLFFBQVEsR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLEtBQUksRUFBRTtJQUNwRCxNQUFNLEtBQUssR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYyxLQUFJLEVBQUU7SUFDOUMsSUFBSSxTQUFTLEVBQUU7UUFDYixPQUFPLEtBQUs7S0FDYjtJQUNELFFBQVEsZ0JBQWdCLEVBQUU7UUFDeEIsS0FBSyx3RUFBaUM7WUFDcEMsT0FBTyxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDL0IsS0FBSyxxRUFBOEI7WUFDakMsT0FBTyxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDNUIsS0FBSyxzRUFBK0I7WUFDbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtZQUMvQyxPQUFPLFFBQVEsS0FBSyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWTs7SUFDbkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxpQkFBaUIsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw0REFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLDBDQUFFLFNBQVM7QUFDbkksQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUUsR0FBVzs7SUFDMUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO0lBQzNDLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxLQUErQyxFQUFFLEVBQUU7UUFDdEYsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksR0FBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLElBQUksTUFBSyxxRUFBNEIsSUFBSSxHQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsSUFBSSxNQUFLLHVFQUE4QixFQUFFLEVBQUUsYUFBYTtZQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDakM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDaEUsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUNyRSxPQUFPLG9EQUFTLENBQUMsaUNBQTJCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBK0MsRUFBRSxFQUFFO1FBQ25HLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO1FBQzNDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLFFBQVE7UUFDWixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLG9CQUFvQjtZQUNwQixRQUFRLEdBQUcsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLGlCQUFpQixFQUFFO1NBQ25DO2FBQU07WUFDTCxRQUFRLEdBQUcsRUFBRTtTQUNkO1FBQ0QsT0FBTyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsRUFBRTtJQUNyQixDQUFDLENBQUMsbUNBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDelBELGlFQUFlO0lBQ2IsV0FBVyxFQUFFLFFBQVE7SUFDckIsY0FBYyxFQUFFLHdEQUF3RDtJQUN4RSxrQkFBa0IsRUFBRSx3RkFBd0Y7SUFDNUcsVUFBVSxFQUFFLGFBQWE7SUFDekIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUVBQXFFO0lBQ3JGLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsdUJBQXVCLEVBQUUscUJBQXFCO0lBQzlDLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzVDLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixnQkFBZ0IsRUFBRSxvQkFBb0I7SUFDdEMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsT0FBTyxFQUFFLE1BQU07SUFDZixZQUFZLEVBQUUsZUFBZTtJQUM3QixTQUFTLEVBQUUsY0FBYztJQUN6Qix3QkFBd0IsRUFBRSx1QkFBdUI7SUFDakQsZUFBZSxFQUFFLFlBQVk7SUFFN0Isc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxpQkFBaUIsRUFBRSxhQUFhO0lBQ2hDLHFCQUFxQixFQUFFLGFBQWE7SUFDcEMsb0JBQW9CLEVBQUUsWUFBWTtJQUNsQyx1QkFBdUIsRUFBRSw2QkFBNkI7SUFDdEQsMkJBQTJCLEVBQUUsd0JBQXdCO0lBQ3JELGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsMEJBQTBCLEVBQUUsd0JBQXdCO0lBQ3BELHdCQUF3QixFQUFFLGlCQUFpQjtJQUMzQyx1QkFBdUIsRUFBRSxtQ0FBbUM7SUFDNUQscUJBQXFCLEVBQUUsYUFBYTtJQUNwQyxrQkFBa0IsRUFBRSxhQUFhO0lBQ2pDLGlCQUFpQixFQUFFLFVBQVU7SUFDN0IsZUFBZSxFQUFFLE9BQU87SUFDeEIsa0JBQWtCLEVBQUUsVUFBVTtJQUM5QixpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLGdDQUFnQyxFQUFFLDJCQUEyQjtJQUM3RCwwQkFBMEIsRUFBRSxvQkFBb0I7SUFDaEQseUJBQXlCLEVBQUUsWUFBWTtJQUN2Qyx5QkFBeUIsRUFBRSxXQUFXO0lBQ3RDLHNCQUFzQixFQUFFLFFBQVE7SUFDaEMseUJBQXlCLEVBQUUsY0FBYztDQUMxQzs7Ozs7Ozs7Ozs7QUN2REQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsZUFBZTtBQUlHO0FBQzJCO0FBQ21DO0FBQ2dCO0FBQ25DO0FBQ3ZCO0FBQ3lFO0FBc0IvRyxNQUFNLGVBQWUsR0FBRyxvREFBUyxDQUFDLENBQUMsc0VBQStCLEVBQUUsb0VBQTZCLENBQUMsQ0FBQztBQUVuRyxNQUFNLDJCQUE0QixTQUFRLDBEQUFzRTtJQWM5RyxZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQWRkLDhCQUF5QixHQUFHLENBQUMsS0FBSyxDQUFDO1FBRW5DLGVBQVUsR0FBUTtZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUFrREQsNkJBQXdCLEdBQUcsQ0FBQyxjQUErQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9DLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdDQUFnQyxFQUFFO2FBQ3hDO1FBQ0gsQ0FBQztRQUVELCtCQUEwQixHQUFHLENBQUMsaUJBQWtDLEVBQUUsRUFBRTtZQUNsRSxNQUFNLDJCQUEyQixHQUFHLDhEQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDdkcscUJBQXFCO1lBQ3JCLElBQUksZUFBZTtZQUNuQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUMzRCxlQUFlLEdBQUcsaUJBQWlCO2FBQ3BDO2lCQUFNO2dCQUNMLGVBQWUsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsRUFBRTtvQkFDaEYsTUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFOzt3QkFDN0MsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsVUFBVSxLQUFLLG9FQUE2QixDQUFDLElBQUksQ0FBQyxXQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLDBDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRTs0QkFDM0sseUJBQXlCOzRCQUN6QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsS0FBSywwQkFBMEIsQ0FBQyxnQkFBZ0I7eUJBQzNFOzZCQUFNOzRCQUNMLHFDQUFxQzs0QkFDckMsT0FBTyxFQUFFLENBQUMsWUFBWSxLQUFLLDBCQUEwQixDQUFDLFlBQVk7eUJBQ25FO29CQUNILENBQUMsQ0FBQztvQkFDRixJQUFJLFVBQVUsRUFBRTt3QkFDZCxPQUFPLElBQUk7cUJBQ1o7eUJBQU07d0JBQ0wsT0FBTyxLQUFLO3FCQUNiO2dCQUNILENBQUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsNEJBQTRCO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDN0IsTUFBTSxFQUFFLE1BQU07YUFDZixDQUFDO1FBQ0osQ0FBQztRQUVELHFDQUFnQyxHQUFHLEdBQUcsRUFBRTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztZQUN6RCw0QkFBNEI7WUFDNUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3QixNQUFNLEVBQUUsTUFBTTthQUNmLENBQUM7UUFDSixDQUFDO1FBRUQsa0NBQTZCLEdBQUcsQ0FBQyx1QkFBZ0MsRUFBRSxFQUFFO1lBQ25FLElBQUksdUJBQXVCLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO29CQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzt3QkFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTt3QkFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUM7cUJBQ3pILENBQUM7b0JBQ0YsT0FBTTtpQkFDUDthQUNGO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsdUJBQXVCLENBQUM7YUFDbEYsQ0FBQztRQUNKLENBQUM7UUFFRCw2QkFBd0IsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQzthQUNsRSxDQUFDO1FBQ0osQ0FBQztRQUVELDJCQUFzQixHQUFHLEdBQUcsRUFBRTtZQUM1QixpS0FBaUs7WUFDakssTUFBTSwyQkFBMkIsR0FBRyxtRUFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBRS9LLElBQUksY0FBYztZQUNsQixJQUFJLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLGNBQWMsRUFBRTtnQkFDM0gsY0FBYyxHQUFHLG9EQUFTLENBQUMsMkJBQTJCLENBQUMsY0FBYyxDQUFDO2FBQ3ZFO2lCQUFNO2dCQUNMLGNBQWMsR0FBRywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLG9EQUFTLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBUyxDQUFDLEVBQUUsQ0FBQzthQUNwSTtZQUNELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ2pGLE1BQU0sdUJBQXVCLEdBQUcsMkJBQTJCLENBQUMsVUFBVSxJQUFJLGlCQUFpQjtZQUMzRixPQUFPLENBQ0wsK0NBQUMscUZBQWtCLElBQ2pCLEtBQUssRUFBRSxlQUFlLEVBQ3RCLGNBQWMsRUFBRSxjQUFjLEVBQzlCLGFBQWEsRUFBRSwyQkFBMkIsQ0FBQyxhQUFhLEVBQ3hELFNBQVMsRUFBRSwyQkFBMkIsQ0FBQyxTQUFTLEVBQ2hELGlCQUFpQixRQUNqQixnQkFBZ0IsUUFDaEIsaUJBQWlCLFFBQ2pCLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEVBQzNELHFCQUFxQixFQUFFLHVCQUF1QixFQUM5QyxRQUFRLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixFQUN2QyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQ3BDLGVBQWUsRUFBRSxLQUFLLEVBQ3RCLFlBQVksRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLEVBQUU7b0JBQ2hELE1BQU0sMkJBQTJCLEdBQUcsOERBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztvQkFDdkcsT0FBTyxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO3dCQUN0RSxPQUFPLDBCQUEwQixDQUFDLGdCQUFnQixLQUFLLGdCQUFnQjtvQkFDekUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7d0JBQ25DLElBQUksb0NBQW9DO3dCQUN4QyxJQUFJLDBCQUEwQixDQUFDLFVBQVUsRUFBRTs0QkFDekMsb0NBQW9DLEdBQUcsMEJBQTBCLENBQUMsVUFBVTt5QkFDN0U7NkJBQU07NEJBQ0wsb0NBQW9DLEdBQUcsdUZBQW9CO3lCQUM1RDt3QkFDRCxPQUFPLG9DQUFvQyxLQUFLLFlBQVksQ0FBQyxFQUFFO29CQUNqRSxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxFQUFFLElBQUksQ0FBQyx3Q0FBd0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUNyRixrQkFBa0IsRUFBRSxJQUFJLEVBQ3hCLG9CQUFvQixRQUNwQiw4QkFBOEIsRUFBRSxJQUFJLEdBQ3BDLENBQ0g7UUFDSCxDQUFDO1FBRUQsNkNBQXdDLEdBQUcsQ0FBQyxRQUFnQixFQUFXLEVBQUU7O1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLGtFQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsMENBQUUsaUJBQWlCLDBDQUFFLFNBQVM7WUFDeEUsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsUUFBUSxDQUFDO1lBQ2pELE1BQU0sMkJBQTJCLEdBQUcsOERBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUN2RyxNQUFNLFdBQVcsR0FBRyxnQkFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsS0FBSztZQUMvQyxJQUFJLFdBQVcsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSTthQUNaO2lCQUFNO2dCQUNMLElBQUksMkJBQTJCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDMUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyx5RUFBa0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyw2RUFBc0M7aUJBQzFJO3FCQUFNO29CQUNMLE9BQU8sS0FBSztpQkFDYjthQUNGO1FBQ0gsQ0FBQztRQUVELDJCQUFzQixHQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFO1lBQ3JELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEtBQUssNkVBQXNDLEVBQUU7Z0JBQ3JFLE9BQU8sSUFBSTthQUNaO1lBQ0QsMEVBQTBFO1lBQzFFLG1EQUFtRDtZQUNuRCxtQkFBbUI7WUFDbkIsbURBQW1EO1lBQ25ELGdDQUFnQztZQUNoQyxpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixLQUFLO1lBQ0wsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixHQUFHO1FBQ0wsQ0FBQztRQXpNQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxpQkFBaUI7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsaUJBQWlCO1FBRWhELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxlQUFlLEVBQUUsS0FBSztZQUN0QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLHNFQUErQjtTQUMxRTtJQUNILENBQUM7SUFRRCxpQkFBaUI7UUFDZix5Q0FBeUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsbUVBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFFOUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzdFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFFaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM3QixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFFLEtBQXVCO1FBQy9CLE9BQU8sMENBQUc7O21CQUVLLG1EQUFZLENBQUMsRUFBRSxDQUFDLElBQUksbURBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxtREFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1EQUFZLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7OztLQVd6RjtJQUNILENBQUM7SUFnS0QsTUFBTTtRQUNKLE9BQU8sQ0FDTCx3REFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN0QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLElBQUksK0NBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLHdCQUF3QixFQUFFLGNBQWMsRUFBRSw0RkFBc0MsRUFBRSxDQUFDLElBQzlLLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUNmO1lBQ2pCLCtDQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxjQUFjLEVBQUUsK0ZBQXlDLEVBQUUsQ0FBQztnQkFDbEosK0NBQUMsMkVBQVU7b0JBQ1Qsd0RBQUssU0FBUyxFQUFDLHlEQUF5RDt3QkFDdEUsd0RBQUssU0FBUyxFQUFDLDJCQUEyQjs0QkFDeEMsK0NBQUMsMENBQUssSUFDSixLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQ2pGLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxHQUM3RDs0QkFDRiwwREFBTyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLGNBQWMsRUFBRSwrRkFBeUMsRUFBRSxDQUFDLENBQ3hILENBQ0osQ0FDRixDQUNLO2dCQUNiLCtDQUFDLDJFQUFVO29CQUNULHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7d0JBQ3RFLHdEQUFLLFNBQVMsRUFBQywyQkFBMkI7NEJBQ3hDLCtDQUFDLDBDQUFLLElBQ0osS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFDaEYsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQzVEOzRCQUNGLDBEQUFPLFNBQVMsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsd0JBQXdCLEVBQUUsY0FBYyxFQUFFLDRGQUFzQyxFQUFFLENBQUMsQ0FDbEgsQ0FDSixDQUNGLENBQ0s7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLElBQUksK0NBQUMsMkVBQVU7b0JBQ3ZELCtDQUFDLGlEQUFZLElBQ1gsU0FBUyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLDJCQUEyQixFQUFFLGNBQWMsRUFBRSwrRkFBeUMsRUFBRSxDQUFDLEVBQzVKLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFDN0UsUUFBUSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsR0FDdkMsQ0FDUyxDQUNFLENBQ2IsQ0FDUDtJQUNILENBQUM7O0FBN09NLHdDQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEIsQ0FBQztDQUNIO0FBNE9ILGlFQUFlLHFEQUFTLENBQUMsMkJBQTJCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL21lc3NhZ2UtYWN0aW9ucy9hY3Rpb24tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlVHlwZSwgTWVzc2FnZUNhcnJ5RGF0YSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJTVdpZGdldEpzb24gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlT3V0cHV0RGF0YVNvdXJjZXMgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YSA9PT0gTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IE1lc3NhZ2VDYXJyeURhdGEge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCBwdWJsaXNoTWVzc2FnZXMgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ucHVibGlzaE1lc3NhZ2VzXHJcbiAgbGV0IG1lc3NhZ2VDYXJyeURhdGEgPSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2VcclxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eSA9IGVsIGFzIGFueVxyXG4gICAgaWYgKHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGEgJiYgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja091dEFjdGlvbkNvbmZpZyAoYWN0aW9uQ29uZmlnOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PEFjdGlvbkNvbmZpZz4sIG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcblxyXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXM6IElNVXNlRGF0YVNvdXJjZVtdID0gW11cclxuICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURTLmRhdGFTb3VyY2VJZF1cclxuICAgICAgICBsZXQgdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRFMuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEUy5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEUy5kYXRhVmlld0lkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2UgPSB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSwgbWVzc2FnZVR5cGUpXHJcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURTID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIHVzZURTLCBtZXNzYWdlVHlwZSlcclxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrT3V0VXNlRGF0YVNvdXJjZSAobWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCB3aWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBsZXQgaXNNYXBEcyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuICBpZiAoIWRzSWQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cclxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgIGlzTWFwRHMgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XHJcblxyXG4gIGlmIChpc01hcERzKSB7XHJcbiAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvbGRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gb2xkVXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA6IG9sZFVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcclxuICAgICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcclxuICBjb25zdCBkc1Jvb3RJZHMgPSBnZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gIC8vaWYgKGRzUm9vdElkcyAmJiBkc1Jvb3RJZHMubGVuZ3RoID09PSAwICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgaWYgKCFkc1Jvb3RJZHMgfHwgZHNSb290SWRzPy5sZW5ndGggPT09IDApIHtcclxuICAgIGlzUmVhZE9ubHkgPSBjaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIG1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiBnZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XHJcbiAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcclxuICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcclxuICAgIGZyb21Ec0lkczogZnJvbURzSWRzXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBvdXRwdXREYXRhU291cmNlcyA9IGluaXRPdXRwdXREYXRhU291cmNlcyh3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcykgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IGJvdGhEYXRhc291cmNlID0gdXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkuY29uY2F0KG91dHB1dERhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdXRwdXREYXRhU291cmNlcyAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXHJcbiAgICB9XHJcbiAgfSkgPz8gW11cclxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3aWRnZXRKc29uPy5pZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3Qgb3V0cHV0RHMgPSB3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcyB8fCBbXVxyXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cclxuICBpZiAoZHNSb290SWRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICBjb25zdCBkc0xlbmd0aCA9IG91dHB1dERzLmxlbmd0aCArIHVzZURzLmxlbmd0aFxyXG4gICAgICByZXR1cm4gZHNMZW5ndGggPT09IDFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGxldCByZXN1bHREc1xyXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcclxuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RHMgPSBkc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxyXG4gIH0pID8/IFtdKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXHJcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxyXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcclxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxyXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcclxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXHJcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcclxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxyXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxyXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXHJcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXHJcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxyXG4gIG9wdGlvbnM6ICdPcHRpb25zJyxcclxuICBzZWxlY3Rpb25IaWdobGlnaHRDb2xvcjogJ1NlbGVjdGlvbiBoaWdobGlnaHQnLFxyXG4gIGZlYXR1cmVTZWxlY3Rpb25Db2xvcjogJ0ZlYXR1cmUgc2VsZWN0aW9uIGNvbG9ycycsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodEZpbGw6ICdIaWdobGlnaHQgZmlsbCcsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodE91dGxpbmU6ICdIaWdobGlnaHQgb3V0bGluZScsXHJcbiAgZGlzYWJsZVNjcm9sbFpvb206ICdEaXNhYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBlbmFibGVTY3JvbGxab29tOiAnRW5hYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBkaXNhYmxlUG9wVXA6ICdEaXNhYmxlIHBvcC11cCcsXHJcbiAgZW5hYmxlUG9wVXA6ICdFbmFibGUgcG9wLXVwJyxcclxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcclxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXHJcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcclxuICBtYXBOb25lOiAnbm9uZScsXHJcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXHJcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcclxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxyXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxyXG5cclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcclxuICBtYXBBY3Rpb25fU2V0RGF0YTogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXI6ICdBY3Rpb24gZGF0YScsXHJcbiAgbWFwQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZTogJ1RyaWdnZXIgLyBhY3Rpb24gY29ubmVjdGlvbicsXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkOiAnU2VsZWN0IGEgdHJpZ2dlciBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX05vbmU6ICdub25lJyxcclxuICBtYXBBY3Rpb25fRXF1YWxzOiAnZXF1YWxzJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1NldEV4cHJlc3Npb246ICdQbGVhc2Ugc2V0IHlvdXIgZXhwcmVzc2lvbiBmaXJzdC4nLFxyXG4gIG1hcEFjdGlvbl9DaG9vc2VMYXllcjogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXHJcbiAgbWFwQWN0aW9uX05vTGF5ZXI6ICdObyBkYXRhLicsXHJcbiAgbWFwQWN0aW9uX1BvaW50OiAnUG9pbnQnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5bGluZTogJ1BvbHlsaW5lJyxcclxuICBtYXBBY3Rpb25fUG9seWdvbjogJ1BvbHlnb24nLFxyXG4gIG1hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzOiAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycsXHJcbiAgbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHM6ICdVc2UgY3VzdG9tIHN5bWJvbHMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGU6ICdab29tIHNjYWxlJyxcclxuICBtYXBab29tVG9BY3Rpb25fQXV0b21hdGljOiAnQXV0b21hdGljJyxcclxuICBtYXBab29tVG9BY3Rpb25fQ3VzdG9tOiAnQ3VzdG9tJyxcclxuICBtYXBab29tVG9BY3Rpb25fVHlwZVNjYWxlOiAnVHlwZSBhIHNjYWxlJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBjc3MsIGpzeCwgdHlwZSBBY3Rpb25TZXR0aW5nUHJvcHMsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgdHlwZSBJbW11dGFibGVPYmplY3QsXHJcbiAgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZSwgdHlwZSBVc2VEYXRhU291cmNlLCBNZXNzYWdlVHlwZSwgQ09OU1RBTlRTLCBBbGxEYXRhU291cmNlVHlwZXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IFJhZGlvLCBOdW1lcmljSW5wdXQgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IsIERFRkFVTFRfREFUQV9WSUVXX0lEIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xyXG5pbXBvcnQgeyB0eXBlIEFjdGlvbkNvbmZpZywgY2hlY2tPdXRBY3Rpb25Db25maWcsIGdldFVzZURhdGFTb3VyY2VJbmZvLCBnZXREc0J5V2lkZ2V0SWQgfSBmcm9tICcuL2FjdGlvbi11dGlscydcclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXHJcbiAgZGlzYWJsZURhdGFUcmlnZ2VyOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcgZXh0ZW5kcyBBY3Rpb25Db25maWcge1xyXG4gIC8vdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIC8vdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxuICBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbj86IGJvb2xlYW5cclxuICB6b29tVG9PcHRpb24/OiB7XHJcbiAgICBzY2FsZTogbnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcclxuXHJcbmNsYXNzIF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXHJcblxyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCBibGFjaydcclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIGRpc2FibGVEYXRhVHJpZ2dlcjogcHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maWc6IEltbXV0YWJsZSh7XHJcbiAgICAgIHVzZURhdGFTb3VyY2U6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAvL2NvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxyXG4gICAgY29uc3QgaW5pdENvbmZpZyA9IGNoZWNrT3V0QWN0aW9uQ29uZmlnKHRoaXMucHJvcHMuY29uZmlnLCB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuXHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlKVxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBpbml0Q29uZmlnLnVzZURhdGFTb3VyY2VzKVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAuc2V0dGluZy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDEwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfSAke3BvbGlzaGVkLnJlbSgwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgIC8vIHN1cHBvcnRzIGRhdGEgdmlld1xyXG4gICAgbGV0IGZpbmFsU2VsZWN0ZWREc1xyXG4gICAgaWYgKHRoaXMuY2hlY2tJc0Rpc2FibGVEYXRhVmlldyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCkpIHtcclxuICAgICAgZmluYWxTZWxlY3RlZERzID0gY3VycmVudFNlbGVjdGVkRHNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbmFsU2VsZWN0ZWREcyA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5maWx0ZXIobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBjdXJyZW50U2VsZWN0ZWREcy5maW5kKGRzID0+IHtcclxuICAgICAgICAgIGlmICgoIWRzLmRhdGFWaWV3SWQgfHwgZHMuZGF0YVZpZXdJZCA9PT0gQ09OU1RBTlRTLk9VVFBVVF9EQVRBX1ZJRVdfSUQpICYmICF0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlcz8uZmluZChwcmVEcyA9PiBkcy5tYWluRGF0YVNvdXJjZUlkID09PSBwcmVEcy5tYWluRGF0YVNvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAvLyBzZWxlY3QgZHMgZnJvbSBkcyBsaXN0XHJcbiAgICAgICAgICAgIHJldHVybiBkcy5tYWluRGF0YVNvdXJjZUlkID09PSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzZWxlY3QgZHMgZnJvbSBkYXRhIHZpZXcgY2hlY2sgYm94XHJcbiAgICAgICAgICAgIHJldHVybiBkcy5kYXRhU291cmNlSWQgPT09IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgZmluYWxTZWxlY3RlZERzWzBdKVxyXG4gICAgLy8gc3VwcG9ydHMgbXVsdGlwbGUgdHJpZ2dlclxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBmaW5hbFNlbGVjdGVkRHMpXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZScsIG51bGwpXHJcbiAgICAvLyBzdXBwb3J0cyBtdWx0aXBsZSB0cmlnZ2VyXHJcbiAgICBjb25maWcgPSBjb25maWcuc2V0KCd1c2VEYXRhU291cmNlcycsIFtdKVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiBjb25maWdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVJc1VzZUN1c3RvbVpvb21Ub09wdGlvbiA9IChpc1VzZUN1c3RvbVpvb21Ub09wdGlvbjogYm9vbGVhbikgPT4ge1xyXG4gICAgaWYgKGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKSB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuem9vbVRvT3B0aW9uIHx8ICF0aGlzLnByb3BzLmNvbmZpZy56b29tVG9PcHRpb24uc2NhbGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdpc1VzZUN1c3RvbVpvb21Ub09wdGlvbicsIGlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKS5zZXRJbihbJ3pvb21Ub09wdGlvbicsICdzY2FsZSddLCA1MDAwKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21ab29tVG9PcHRpb24nLCBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZXRDdXN0b21ab29tU2NhbGUgPSAodmFsdWUpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWyd6b29tVG9PcHRpb24nLCAnc2NhbGUnXSwgdmFsdWUpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VHJpZ2dlckxheWVyQ29udGVudCA9ICgpID0+IHtcclxuICAgIC8vY29uc3QgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhID0gdGhpcy5nZXREc1NlbGVjdG9yU291cmNlRGF0YSh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXMpXHJcbiAgICBjb25zdCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEgPSBnZXRVc2VEYXRhU291cmNlSW5mbyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZSwgdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXMsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcblxyXG4gICAgbGV0IHVzZURhdGFTb3VyY2VzXHJcbiAgICBpZiAodGhpcy5jaGVja0lzU3VwcG9ydE11bHRpcGxlVHJpZ2dlckRhdGFTb3VyY2VzKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKSB8fCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgdXNlRGF0YVNvdXJjZXMgPSBJbW11dGFibGUodHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXNlRGF0YVNvdXJjZXMgPSB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZSA/IEltbXV0YWJsZShbdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VdKSA6IEltbXV0YWJsZShbXSlcclxuICAgIH1cclxuICAgIGNvbnN0IGlzRGlzYWJsZURhdGFWaWV3ID0gdGhpcy5jaGVja0lzRGlzYWJsZURhdGFWaWV3KHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKVxyXG4gICAgY29uc3QgaXNEaXNhYmxlRGF0YVNvdXJjZUxpc3QgPSB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seSAmJiBpc0Rpc2FibGVEYXRhVmlld1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgIGZyb21Sb290RHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxyXG4gICAgICAgIGZyb21Ec0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Ec0lkc31cclxuICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxyXG4gICAgICAgIGhpZGVUeXBlRHJvcGRvd25cclxuICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgIGRpc2FibGVEYXRhU291cmNlTGlzdD17aXNEaXNhYmxlRGF0YVNvdXJjZUxpc3R9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxyXG4gICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZH1cclxuICAgICAgICBkaXNhYmxlRGF0YVZpZXc9e2ZhbHNlfVxyXG4gICAgICAgIGhpZGVEYXRhVmlldz17KChkYXRhVmlld0pzb24sIG1haW5EYXRhU291cmNlSWQpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgICAgICAgIHJldHVybiAhbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZpbHRlcihtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBtYWluRGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KS5maW5kKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZFxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UuZGF0YVZpZXdJZCkge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFWaWV3SWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWQgPSBERUZBVUxUX0RBVEFfVklFV19JRFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWQgPT09IGRhdGFWaWV3SnNvbi5pZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KX1cclxuICAgICAgICBpc011bHRpcGxlPXt0aGlzLmNoZWNrSXNTdXBwb3J0TXVsdGlwbGVUcmlnZ2VyRGF0YVNvdXJjZXModGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpfVxyXG4gICAgICAgIGlzTXVsdGlwbGVEYXRhVmlldz17dHJ1ZX1cclxuICAgICAgICBoaWRlQ3JlYXRlVmlld0J1dHRvblxyXG4gICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNoZWNrSXNTdXBwb3J0TXVsdGlwbGVUcmlnZ2VyRGF0YVNvdXJjZXMgPSAod2lkZ2V0SWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICBjb25zdCB3aWRnZXRMYWJlbCA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5sYWJlbFxyXG4gICAgaWYgKHdpZGdldExhYmVsID09PSAnTWFwJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UgfHwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIC8vY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICAvL2NvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICAgIC8vaWYgKHdpZGdldEpzb24pIHtcclxuICAgIC8vICBjb25zdCB3aWRnZXRMYWJlbCA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5sYWJlbFxyXG4gICAgLy8gIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcclxuICAgIC8vICAgIHJldHVybiB0cnVlXHJcbiAgICAvLyAgfSBlbHNlIHtcclxuICAgIC8vICAgIHJldHVybiBmYWxzZVxyXG4gICAgLy8gIH1cclxuICAgIC8vfSBlbHNlIHtcclxuICAgIC8vICByZXR1cm4gZmFsc2VcclxuICAgIC8vfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY3NzPXt0aGlzLmdldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfT5cclxuICAgICAgICB7IXRoaXMuc3RhdGUuZGlzYWJsZURhdGFUcmlnZ2VyICYmIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxyXG4gICAgICAgICAge3RoaXMuZ2V0VHJpZ2dlckxheWVyQ29udGVudCgpfVxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+fVxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGUnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGUgfSl9PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17IXRoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uKGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBab29tVG9BY3Rpb25fQXV0b21hdGljJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBab29tVG9BY3Rpb25fQXV0b21hdGljIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHsgdGhpcy5oYW5kbGVJc1VzZUN1c3RvbVpvb21Ub09wdGlvbih0cnVlKSB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBab29tVG9BY3Rpb25fQ3VzdG9tJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBab29tVG9BY3Rpb25fQ3VzdG9tIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb24gJiYgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxOdW1lcmljSW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJyBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGUnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGUgfSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbiAmJiB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9PcHRpb24uc2NhbGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2V0Q3VzdG9tWm9vbVNjYWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93Pn1cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShfWm9vbVRvRmVhdHVyZUFjdGlvblNldHRpbmcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==