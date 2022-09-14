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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts ***!
  \**********************************************************************************/
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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sourceLabel: 'Source',
    sourceDescript: 'A web map or web scene, or any combination of the two.',
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
    mapAction_UseLayerDefinedSymbols: 'Use layer defined symbols',
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
/*!*****************************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/zoom-to-feature-action-setting.tsx ***!
  \*****************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");
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
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomZoomToOption, onChange: () => this.handleIsUseCustomZoomToOption(false) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapZoomToAction_Automatic', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapZoomToAction_Automatic }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomZoomToOption, onChange: () => this.handleIsUseCustomZoomToOption(true) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrSztBQUMvRztBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FB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Q0FDUDtJQUNILENBQUM7O0FBN09NLHdDQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEIsQ0FBQztDQUNIO0FBNE9ILGlFQUFlLHFEQUFTLENBQUMsMkJBQTJCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIFVzZURhdGFTb3VyY2UsIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlTWFuYWdlciwgSW1tdXRhYmxlQXJyYXksIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhID09PSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogTWVzc2FnZUNhcnJ5RGF0YSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHB1Ymxpc2hNZXNzYWdlcyA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5wdWJsaXNoTWVzc2FnZXNcclxuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxyXG4gIHB1Ymxpc2hNZXNzYWdlcz8uZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCBwdWJsaXNoTWVzc2FnZVByb3BlcnR5ID0gZWwgYXMgYW55XHJcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcclxuICAgICAgbWVzc2FnZUNhcnJ5RGF0YSA9IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGFcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29uZmlnIHtcclxuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuXHJcbiAgbGV0IHVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBjb25zdCB1c2VEYXRhU291cmNlczogSU1Vc2VEYXRhU291cmNlW10gPSBbXVxyXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gICAgLy9pZiAobWVzc2FnZVdpZGdldEpzb24gJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5mb3JFYWNoKCh1c2VEUywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRFMuZGF0YVNvdXJjZUlkXVxyXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEUy5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURTLnJvb3REYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURTLmRhdGFWaWV3SWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoIXVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZSA9IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcclxuICAgIGlmIChhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLmZvckVhY2godXNlRFMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxyXG4gICAgICAgIHRlbXBVc2VEYXRhU291cmNlICYmIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IHdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgbGV0IGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGxldCBpc01hcERzID0gZmFsc2VcclxuXHJcbiAgY29uc3QgZHNJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0gJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gIGlmICghZHNJZCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxyXG4gIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgaXNNYXBEcyA9IHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuXHJcbiAgaWYgKGlzTWFwRHMpIHtcclxuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZlYXR1cmVsYXllciBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/Lm1haW5EYXRhU291cmNlSWQgOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluaXRVc2VEYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VEYXRhU291cmNlSW5mbyAod2lkZ2V0SWQ6IHN0cmluZywgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZS5JbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgbGV0IGlzUmVhZE9ubHkgPSBmYWxzZVxyXG4gIGNvbnN0IGRzUm9vdElkcyA9IGdldERzUm9vdElkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXHJcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgLy9pZiAoIWRzUm9vdElkcyAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICBpZiAoIWRzUm9vdElkcyB8fCBkc1Jvb3RJZHM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHtcclxuICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHksXHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzIHx8IFtdLFxyXG4gICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxyXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcclxuICB9XHJcblxyXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IG91dHB1dERhdGFTb3VyY2VzID0gaW5pdE91dHB1dERhdGFTb3VyY2VzKHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzKSB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBJbW11dGFibGUoYm90aERhdGFzb3VyY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE91dHB1dERhdGFTb3VyY2VzIChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIHJvb3REYXRhU291cmNlSWQ6IG51bGxcclxuICAgIH1cclxuICB9KSA/PyBbXVxyXG4gIHJldHVybiBJbW11dGFibGUoZHMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzT25seU9uZURzICh3aWRnZXRKc29uOiBJTVdpZGdldEpzb24sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgZHNSb290SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdpZGdldEpzb24/LmlkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXHJcbiAgY29uc3QgdXNlRHMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBbXVxyXG4gIGlmIChkc1Jvb3RJZHMpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIGNvbnN0IGRzTGVuZ3RoID0gb3V0cHV0RHMubGVuZ3RoICsgdXNlRHMubGVuZ3RoXHJcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBwQ29uZmlnICgpIHtcclxuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3Qgcm9vdElkcyA9IFtdXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBpZiAoZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfHwgZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkgeyAvLyBpcyByb290IGRzXHJcbiAgICAgIHJvb3RJZHMucHVzaCh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcm9vdElkcy5sZW5ndGggPiAwID8gSW1tdXRhYmxlKHJvb3RJZHMpIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzSWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBJbW11dGFibGUobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLm1hcCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgbGV0IHJlc3VsdERzXHJcbiAgICBpZiAoZHMgJiYgZHMuaXNEYXRhVmlldykge1xyXG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICByZXN1bHREcyA9IGRzPy5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHREcyA9IGRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0RHM/LmlkXHJcbiAgfSkgPz8gW10pXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNvdXJjZUxhYmVsOiAnU291cmNlJyxcclxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXHJcbiAgaW5pdGlhbE1hcDogJ0luaXRpYWwgbWFwJyxcclxuICBpbml0aWFsTWFwVmlldzogJ0luaXRpYWwgdmlldycsXHJcbiAgc2VsZWN0TWFwOiAnU2VsZWN0IG1hcCcsXHJcbiAgc2V0TWFwVmlldzogJ01vZGlmeSBpbml0aWFsIHZpZXcnLFxyXG4gIGRlZmF1bHRWaWV3OiAnRGVmYXVsdCcsXHJcbiAgZGVmYXVsdFZpZXdUaXA6ICdJbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBtYXAgaW5oZXJpdGVkIGZyb20gdGhlIHdlYiBtYXAgb3Igd2ViIHNjZW5lJyxcclxuICBjdXN0b21WaWV3OiAnQ3VzdG9tJyxcclxuICBjdXN0b21WaWV3VGlwOiAnQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIG9mIHRoZSBtYXAnLFxyXG4gIGN1c3RvbVZpZXdTZXQ6ICdNb2RpZnknLFxyXG4gIHRvb2xMYWJlbDogJ1Rvb2xzJyxcclxuICBvcHRpb25zOiAnT3B0aW9ucycsXHJcbiAgc2VsZWN0aW9uSGlnaGxpZ2h0Q29sb3I6ICdTZWxlY3Rpb24gaGlnaGxpZ2h0JyxcclxuICBmZWF0dXJlU2VsZWN0aW9uQ29sb3I6ICdGZWF0dXJlIHNlbGVjdGlvbiBjb2xvcnMnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRGaWxsOiAnSGlnaGxpZ2h0IGZpbGwnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRPdXRsaW5lOiAnSGlnaGxpZ2h0IG91dGxpbmUnLFxyXG4gIGRpc2FibGVTY3JvbGxab29tOiAnRGlzYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZW5hYmxlU2Nyb2xsWm9vbTogJ0VuYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZGlzYWJsZVBvcFVwOiAnRGlzYWJsZSBwb3AtdXAnLFxyXG4gIGVuYWJsZVBvcFVwOiAnRW5hYmxlIHBvcC11cCcsXHJcbiAgc2NlbmVRdWFsaXR5TW9kZTogJ1NjZW5lIHF1YWxpdHkgbW9kZScsXHJcbiAgY2hvb3NlQUxheWVyOiAnU2VsZWN0IGEgbGF5ZXInLFxyXG4gIGRhdGFSZWxhdGlvblNoaXA6ICdEYXRhIHJlbGF0aW9uc2hpcCcsXHJcbiAgbWFwTm9uZTogJ25vbmUnLFxyXG4gIG1lc3NhZ2VGaWVsZDogJ01lc3NhZ2UgZmllbGQnLFxyXG4gIG1hcExheW91dDogJ1Rvb2xzIGxheW91dCcsXHJcbiAgbWFwTGF5b3V0X0xhcmdlQW5kTWVkaXVtOiAnTGFyZ2UgYW5kIG1lZGl1bSBzaXplJyxcclxuICBtYXBMYXlvdXRfU21hbGw6ICdTbWFsbCBzaXplJyxcclxuXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXHJcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXHJcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcclxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxyXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxyXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcclxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXHJcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcclxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllciBkZWZpbmVkIHN5bWJvbHMnLFxyXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcclxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwgY3NzLCBqc3gsIEFjdGlvblNldHRpbmdQcm9wcywgU2VyaWFsaXplZFN0eWxlcywgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIFRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZSwgVXNlRGF0YVNvdXJjZSwgTWVzc2FnZVR5cGUsIENPTlNUQU5UUywgQWxsRGF0YVNvdXJjZVR5cGVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBSYWRpbywgTnVtZXJpY0lucHV0IH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBERUZBVUxUX0RBVEFfVklFV19JRCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuaW1wb3J0IHsgQWN0aW9uQ29uZmlnLCBjaGVja091dEFjdGlvbkNvbmZpZywgZ2V0VXNlRGF0YVNvdXJjZUluZm8sIGdldERzQnlXaWRnZXRJZCB9IGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIHRoZW1lPzogVGhlbWVWYXJpYWJsZXNcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXHJcbiAgZGlzYWJsZURhdGFUcmlnZ2VyOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcgZXh0ZW5kcyBBY3Rpb25Db25maWcge1xyXG4gIC8vdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIC8vdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxuICBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbj86IGJvb2xlYW5cclxuICB6b29tVG9PcHRpb24/OiB7XHJcbiAgICBzY2FsZTogbnVtYmVyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcclxuXHJcbmNsYXNzIF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXHJcblxyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCBibGFjaydcclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIGRpc2FibGVEYXRhVHJpZ2dlcjogcHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRTZXRDaGFuZ2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maWc6IEltbXV0YWJsZSh7XHJcbiAgICAgIHVzZURhdGFTb3VyY2U6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAvL2NvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxyXG4gICAgY29uc3QgaW5pdENvbmZpZyA9IGNoZWNrT3V0QWN0aW9uQ29uZmlnKHRoaXMucHJvcHMuY29uZmlnLCB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuXHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlKVxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBpbml0Q29uZmlnLnVzZURhdGFTb3VyY2VzKVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgxMCl9ICR7cG9saXNoZWQucmVtKDE2KX0gJHtwb2xpc2hlZC5yZW0oMCl9ICR7cG9saXNoZWQucmVtKDE2KX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllckNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkKHVzZURhdGFTb3VyY2VzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCA9IChjdXJyZW50U2VsZWN0ZWREczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICAvLyBzdXBwb3J0cyBkYXRhIHZpZXdcclxuICAgIGxldCBmaW5hbFNlbGVjdGVkRHNcclxuICAgIGlmICh0aGlzLmNoZWNrSXNEaXNhYmxlRGF0YVZpZXcodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpKSB7XHJcbiAgICAgIGZpbmFsU2VsZWN0ZWREcyA9IGN1cnJlbnRTZWxlY3RlZERzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaW5hbFNlbGVjdGVkRHMgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZmlsdGVyKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlID0gY3VycmVudFNlbGVjdGVkRHMuZmluZChkcyA9PiB7XHJcbiAgICAgICAgICBpZiAoKCFkcy5kYXRhVmlld0lkIHx8IGRzLmRhdGFWaWV3SWQgPT09IENPTlNUQU5UUy5PVVRQVVRfREFUQV9WSUVXX0lEKSAmJiAhdGhpcy5wcm9wcy5jb25maWcudXNlRGF0YVNvdXJjZXM/LmZpbmQocHJlRHMgPT4gZHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gcHJlRHMubWFpbkRhdGFTb3VyY2VJZCkpIHtcclxuICAgICAgICAgICAgLy8gc2VsZWN0IGRzIGZyb20gZHMgbGlzdFxyXG4gICAgICAgICAgICByZXR1cm4gZHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2VsZWN0IGRzIGZyb20gZGF0YSB2aWV3IGNoZWNrIGJveFxyXG4gICAgICAgICAgICByZXR1cm4gZHMuZGF0YVNvdXJjZUlkID09PSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChkYXRhU291cmNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZScsIGZpbmFsU2VsZWN0ZWREc1swXSlcclxuICAgIC8vIHN1cHBvcnRzIG11bHRpcGxlIHRyaWdnZXJcclxuICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2VzJywgZmluYWxTZWxlY3RlZERzKVxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiBjb25maWdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllciA9ICgpID0+IHtcclxuICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2UnLCBudWxsKVxyXG4gICAgLy8gc3VwcG9ydHMgbXVsdGlwbGUgdHJpZ2dlclxyXG4gICAgY29uZmlnID0gY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZXMnLCBbXSlcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXNVc2VDdXN0b21ab29tVG9PcHRpb24gPSAoaXNVc2VDdXN0b21ab29tVG9PcHRpb246IGJvb2xlYW4pID0+IHtcclxuICAgIGlmIChpc1VzZUN1c3RvbVpvb21Ub09wdGlvbikge1xyXG4gICAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbiB8fCAhdGhpcy5wcm9wcy5jb25maWcuem9vbVRvT3B0aW9uLnNjYWxlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21ab29tVG9PcHRpb24nLCBpc1VzZUN1c3RvbVpvb21Ub09wdGlvbikuc2V0SW4oWyd6b29tVG9PcHRpb24nLCAnc2NhbGUnXSwgNTAwMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2lzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uJywgaXNVc2VDdXN0b21ab29tVG9PcHRpb24pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2V0Q3VzdG9tWm9vbVNjYWxlID0gKHZhbHVlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnem9vbVRvT3B0aW9uJywgJ3NjYWxlJ10sIHZhbHVlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRyaWdnZXJMYXllckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAvL2NvbnN0IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YSA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2UsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2VzKVxyXG4gICAgY29uc3QgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhID0gZ2V0VXNlRGF0YVNvdXJjZUluZm8odGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2UsIHRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2VzLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG5cclxuICAgIGxldCB1c2VEYXRhU291cmNlc1xyXG4gICAgaWYgKHRoaXMuY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCkgfHwgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gSW1tdXRhYmxlKHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2UgPyBJbW11dGFibGUoW3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pXHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0Rpc2FibGVEYXRhVmlldyA9IHRoaXMuY2hlY2tJc0Rpc2FibGVEYXRhVmlldyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZClcclxuICAgIGNvbnN0IGlzRGlzYWJsZURhdGFTb3VyY2VMaXN0ID0gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHkgJiYgaXNEaXNhYmxlRGF0YVZpZXdcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICB0eXBlcz17RFNTZWxlY3RvclR5cGVzfVxyXG4gICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cclxuICAgICAgICBmcm9tUm9vdERzSWRzPXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuZnJvbVJvb3REc0lkc31cclxuICAgICAgICBmcm9tRHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XHJcbiAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cclxuICAgICAgICBoaWRlVHlwZURyb3Bkb3duXHJcbiAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICBkaXNhYmxlUmVtb3ZlPXsoKSA9PiB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cclxuICAgICAgICBkaXNhYmxlRGF0YVNvdXJjZUxpc3Q9e2lzRGlzYWJsZURhdGFTb3VyY2VMaXN0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRyaWdnZXJMYXllckNoYW5nZX1cclxuICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWR9XHJcbiAgICAgICAgZGlzYWJsZURhdGFWaWV3PXtmYWxzZX1cclxuICAgICAgICBoaWRlRGF0YVZpZXc9eygoZGF0YVZpZXdKc29uLCBtYWluRGF0YVNvdXJjZUlkKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICAgICAgICByZXR1cm4gIW1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5maWx0ZXIobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCA9PT0gbWFpbkRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSkuZmluZChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWRcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFWaWV3SWQpIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID0gREVGQVVMVF9EQVRBX1ZJRVdfSURcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID09PSBkYXRhVmlld0pzb24uaWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgaXNNdWx0aXBsZT17dGhpcy5jaGVja0lzU3VwcG9ydE11bHRpcGxlVHJpZ2dlckRhdGFTb3VyY2VzKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKX1cclxuICAgICAgICBpc011bHRpcGxlRGF0YVZpZXc9e3RydWV9XHJcbiAgICAgICAgaGlkZUNyZWF0ZVZpZXdCdXR0b25cclxuICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjaGVja0lzU3VwcG9ydE11bHRpcGxlVHJpZ2dlckRhdGFTb3VyY2VzID0gKHdpZGdldElkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG4gICAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcclxuICAgIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlIHx8IHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrSXNEaXNhYmxlRGF0YVZpZXcgPSAod2lkZ2V0SWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAvL2NvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xyXG4gICAgLy9jb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgICAvL2lmICh3aWRnZXRKc29uKSB7XHJcbiAgICAvLyAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcclxuICAgIC8vICBpZiAod2lkZ2V0TGFiZWwgPT09ICdNYXAnKSB7XHJcbiAgICAvLyAgICByZXR1cm4gdHJ1ZVxyXG4gICAgLy8gIH0gZWxzZSB7XHJcbiAgICAvLyAgICByZXR1cm4gZmFsc2VcclxuICAgIC8vICB9XHJcbiAgICAvL30gZWxzZSB7XHJcbiAgICAvLyAgcmV0dXJuIGZhbHNlXHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0+XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmRpc2FibGVEYXRhVHJpZ2dlciAmJiA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVHJpZ2dlckxheWVyJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVHJpZ2dlckxheWVyIH0pfT5cclxuICAgICAgICAgIHt0aGlzLmdldFRyaWdnZXJMYXllckNvbnRlbnQoKX1cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPn1cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlIH0pfT5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9eyF0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21ab29tVG9PcHRpb24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBab29tVG9BY3Rpb25fQXV0b21hdGljJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBab29tVG9BY3Rpb25fQXV0b21hdGljIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhbGlnbi1pdGVtcy1jZW50ZXIgZC1mbGV4Jz5cclxuICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21ab29tVG9PcHRpb24odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcFpvb21Ub0FjdGlvbl9DdXN0b20nLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcFpvb21Ub0FjdGlvbl9DdXN0b20gfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbiAmJiA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPE51bWVyaWNJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZSB9KX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5jb25maWcuem9vbVRvT3B0aW9uICYmIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub09wdGlvbi5zY2FsZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZXRDdXN0b21ab29tU2NhbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+fVxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKF9ab29tVG9GZWF0dXJlQWN0aW9uU2V0dGluZylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9