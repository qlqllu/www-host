System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
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
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/pan-to-action-setting.tsx ***!
  \**********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");
/** @jsx jsx */


//import { ArcGISDataSourceTypes } from 'jimu-arcgis'




const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _PanToActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
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
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_5__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
            // supports data view
            let finalSelectedDs;
            if (this.checkIsDisableDataView()) {
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
        this.checkIsSupportMultipleTriggerDataSources = (widgetId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_5__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
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
        this.checkIsDisableDataView = () => {
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            else {
                return false;
            }
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false
        };
    }
    componentDidMount() {
        //const initConfig = this.getInitConfig()
        const initConfig = (0,_action_utils__WEBPACK_IMPORTED_MODULE_5__.checkOutActionConfig)(this.props.config, this.props.messageWidgetId, this.props.messageType);
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
        //const triggerRootIds = this.getDsRootIdsByWidgetId(this.props.messageWidgetId)
        const triggerDsSelectorSourceData = (0,_action_utils__WEBPACK_IMPORTED_MODULE_5__.getUseDataSourceInfo)(this.props.messageWidgetId, this.props.config.useDataSource, this.props.config.useDataSources, this.props.messageType);
        let useDataSources;
        if (this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId) || triggerDsSelectorSourceData.useDataSources) {
            useDataSources = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(triggerDsSelectorSourceData.useDataSources);
        }
        else {
            useDataSources = triggerDsSelectorSourceData.useDataSource ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([triggerDsSelectorSourceData.useDataSource]) : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].mapAction_TriggerLayer }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: false, 
                    //hideDataView={this.checkIsDisableDataView()}
                    hideDataView: ((dataViewJson, mainDataSourceId) => {
                        const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_5__.getDsByWidgetId)(this.props.messageWidgetId, this.props.messageType);
                        return !messageWidgetUseDataSources.filter(messageWidgetUseDataSource => {
                            return messageWidgetUseDataSource.mainDataSourceId === mainDataSourceId;
                        }).find(messageWidgetUseDataSource => {
                            let messageWidgetUseDataSourceDataViewId;
                            if (messageWidgetUseDataSource.dataViewId) {
                                messageWidgetUseDataSourceDataViewId = messageWidgetUseDataSource.dataViewId;
                            }
                            else {
                                messageWidgetUseDataSourceDataViewId = jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_DATA_VIEW_ID;
                            }
                            return messageWidgetUseDataSourceDataViewId === dataViewJson.id;
                        });
                    }), isMultiple: this.checkIsSupportMultipleTriggerDataSources(this.props.messageWidgetId), isMultipleDataView: true, hideCreateViewButton: true, enableToSelectOutputDsFromSelf: true }))));
    }
}
_PanToActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        useDataSource: null
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_4__.withTheme)(_PanToActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9wYW4tdG8tYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJMO0FBQ3hJO0FBRTVDLFNBQVMsc0JBQXNCLENBQUUsR0FBVyxFQUFFLFdBQXdCO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxPQUFPLGdCQUFnQixLQUFLLHdFQUFpQztBQUMvRCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ2xGLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxHQUFHLENBQUM7SUFDNUMsTUFBTSxlQUFlLEdBQUcsZ0JBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLDBDQUFFLGVBQWU7SUFDN0QsSUFBSSxnQkFBZ0IsR0FBRyxxRUFBOEI7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFO1lBQ25HLGdCQUFnQixHQUFHLHNCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQjtTQUM1RDtJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFPTSxTQUFTLG9CQUFvQixDQUFF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O1FBQ2hCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUM7Q0FDSDtBQWdLSCxpRUFBZSxxREFBUyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL3Bhbi10by1hY3Rpb24tc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xyXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXHJcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcclxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG5cclxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXHJcbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXHJcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxyXG5cclxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgaWYgKCFkc0lkKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICBpc01hcERzID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG5cclxuICBpZiAoaXNNYXBEcykge1xyXG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXHJcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXHJcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0pID8/IFtdXHJcbiAgcmV0dXJuIEltbXV0YWJsZShkcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cclxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXHJcbiAgaWYgKGRzUm9vdElkcykge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcclxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xyXG4gIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc1Jvb3RJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCByb290SWRzID0gW11cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcclxuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIEltbXV0YWJsZShtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubWFwKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBsZXQgcmVzdWx0RHNcclxuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgIHJlc3VsdERzID0gZHM/LmdldE1haW5EYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERzID0gZHNcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHREcz8uaWRcclxuICB9KSA/PyBbXSlcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc291cmNlTGFiZWw6ICdTb3VyY2UnLFxyXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcclxuICBzZWxlY3RUaGlyZE1hcEhpbnQ6ICdQbGVhc2UgdW5zZWxlY3QgYSBtYXAgb3Igc2NlbmUgYmVmb3JlIHlvdSBjaG9vc2UgYW5vdGhlciBvbmUuIFVwIHRvIHR3byBhcmUgc3VwcG9ydGVkLicsXHJcbiAgaW5pdGlhbE1hcDogJ0luaXRpYWwgbWFwJyxcclxuICBpbml0aWFsTWFwVmlldzogJ0luaXRpYWwgdmlldycsXHJcbiAgc2VsZWN0TWFwOiAnU2VsZWN0IG1hcCcsXHJcbiAgc2V0TWFwVmlldzogJ01vZGlmeSBpbml0aWFsIHZpZXcnLFxyXG4gIGRlZmF1bHRWaWV3OiAnRGVmYXVsdCcsXHJcbiAgZGVmYXVsdFZpZXdUaXA6ICdJbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBtYXAgaW5oZXJpdGVkIGZyb20gdGhlIHdlYiBtYXAgb3Igd2ViIHNjZW5lJyxcclxuICBjdXN0b21WaWV3OiAnQ3VzdG9tJyxcclxuICBjdXN0b21WaWV3VGlwOiAnQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIG9mIHRoZSBtYXAnLFxyXG4gIGN1c3RvbVZpZXdTZXQ6ICdNb2RpZnknLFxyXG4gIHRvb2xMYWJlbDogJ1Rvb2xzJyxcclxuICBvcHRpb25zOiAnT3B0aW9ucycsXHJcbiAgc2VsZWN0aW9uSGlnaGxpZ2h0Q29sb3I6ICdTZWxlY3Rpb24gaGlnaGxpZ2h0JyxcclxuICBmZWF0dXJlU2VsZWN0aW9uQ29sb3I6ICdGZWF0dXJlIHNlbGVjdGlvbiBjb2xvcnMnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRGaWxsOiAnSGlnaGxpZ2h0IGZpbGwnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRPdXRsaW5lOiAnSGlnaGxpZ2h0IG91dGxpbmUnLFxyXG4gIGRpc2FibGVTY3JvbGxab29tOiAnRGlzYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZW5hYmxlU2Nyb2xsWm9vbTogJ0VuYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZGlzYWJsZVBvcFVwOiAnRGlzYWJsZSBwb3AtdXAnLFxyXG4gIGVuYWJsZVBvcFVwOiAnRW5hYmxlIHBvcC11cCcsXHJcbiAgc2NlbmVRdWFsaXR5TW9kZTogJ1NjZW5lIHF1YWxpdHkgbW9kZScsXHJcbiAgY2hvb3NlQUxheWVyOiAnU2VsZWN0IGEgbGF5ZXInLFxyXG4gIGRhdGFSZWxhdGlvblNoaXA6ICdEYXRhIHJlbGF0aW9uc2hpcCcsXHJcbiAgbWFwTm9uZTogJ25vbmUnLFxyXG4gIG1lc3NhZ2VGaWVsZDogJ01lc3NhZ2UgZmllbGQnLFxyXG4gIG1hcExheW91dDogJ1Rvb2xzIGxheW91dCcsXHJcbiAgbWFwTGF5b3V0X0xhcmdlQW5kTWVkaXVtOiAnTGFyZ2UgYW5kIG1lZGl1bSBzaXplJyxcclxuICBtYXBMYXlvdXRfU21hbGw6ICdTbWFsbCBzaXplJyxcclxuXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXHJcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXHJcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcclxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxyXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxyXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcclxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXHJcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcclxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllci1kZWZpbmVkIHN5bWJvbHMnLFxyXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcclxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdGhlbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsIGNzcywganN4LCB0eXBlIEFjdGlvblNldHRpbmdQcm9wcywgdHlwZSBTZXJpYWxpemVkU3R5bGVzLCB0eXBlIEltbXV0YWJsZU9iamVjdCxcclxuICB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIHBvbGlzaGVkLCBJbW11dGFibGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgTWVzc2FnZVR5cGUsIGdldEFwcFN0b3JlLCBDT05TVEFOVFMsIEFsbERhdGFTb3VyY2VUeXBlc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuLy9pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgRGF0YVNvdXJjZVNlbGVjdG9yLCBERUZBVUxUX0RBVEFfVklFV19JRCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuaW1wb3J0IHsgdHlwZSBBY3Rpb25Db25maWcsIGNoZWNrT3V0QWN0aW9uQ29uZmlnLCBnZXRVc2VEYXRhU291cmNlSW5mbywgZ2V0RHNCeVdpZGdldElkIH0gZnJvbSAnLi9hY3Rpb24tdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XHJcbiAgdGhlbWU/OiBJTVRoZW1lVmFyaWFibGVzXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZXMge1xyXG4gIGlzU2hvd0xheWVyTGlzdDogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+XHJcblxyXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcclxuXHJcbmNsYXNzIF9QYW5Ub0FjdGlvblNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFjdGlvblNldHRpbmdQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBTdGF0ZXM+IHtcclxuICBtb2RhbFN0eWxlOiBhbnkgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzAnLFxyXG4gICAgYm90dG9tOiAnMCcsXHJcbiAgICB3aWR0aDogJzI1OXB4JyxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgYm9yZGVyUmlnaHQ6ICcnLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnJyxcclxuICAgIHBhZGRpbmdCb3R0b206ICcxcHgnXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJSaWdodCA9ICcxcHggc29saWQgYmxhY2snXHJcbiAgICB0aGlzLm1vZGFsU3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCBibGFjaydcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc1Nob3dMYXllckxpc3Q6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICB1c2VEYXRhU291cmNlOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgLy9jb25zdCBpbml0Q29uZmlnID0gdGhpcy5nZXRJbml0Q29uZmlnKClcclxuICAgIGNvbnN0IGluaXRDb25maWcgPSBjaGVja091dEFjdGlvbkNvbmZpZyh0aGlzLnByb3BzLmNvbmZpZywgdGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcblxyXG4gICAgbGV0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldCgndXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcudXNlRGF0YVNvdXJjZSlcclxuICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2VzJywgaW5pdENvbmZpZy51c2VEYXRhU291cmNlcylcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgxMCl9ICR7cG9saXNoZWQucmVtKDE2KX0gJHtwb2xpc2hlZC5yZW0oMCl9ICR7cG9saXNoZWQucmVtKDE2KX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllckNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkKHVzZURhdGFTb3VyY2VzKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCA9IChjdXJyZW50U2VsZWN0ZWREczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICAvLyBzdXBwb3J0cyBkYXRhIHZpZXdcclxuICAgIGxldCBmaW5hbFNlbGVjdGVkRHNcclxuICAgIGlmICh0aGlzLmNoZWNrSXNEaXNhYmxlRGF0YVZpZXcoKSkge1xyXG4gICAgICBmaW5hbFNlbGVjdGVkRHMgPSBjdXJyZW50U2VsZWN0ZWREc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmluYWxTZWxlY3RlZERzID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZpbHRlcihtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGN1cnJlbnRTZWxlY3RlZERzLmZpbmQoZHMgPT4ge1xyXG4gICAgICAgICAgaWYgKCghZHMuZGF0YVZpZXdJZCB8fCBkcy5kYXRhVmlld0lkID09PSBDT05TVEFOVFMuT1VUUFVUX0RBVEFfVklFV19JRCkgJiYgIXRoaXMucHJvcHMuY29uZmlnLnVzZURhdGFTb3VyY2VzPy5maW5kKHByZURzID0+IGRzLm1haW5EYXRhU291cmNlSWQgPT09IHByZURzLm1haW5EYXRhU291cmNlSWQpKSB7XHJcbiAgICAgICAgICAgIC8vIHNlbGVjdCBkcyBmcm9tIGRzIGxpc3RcclxuICAgICAgICAgICAgcmV0dXJuIGRzLm1haW5EYXRhU291cmNlSWQgPT09IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWRcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHNlbGVjdCBkcyBmcm9tIGRhdGEgdmlldyBjaGVjayBib3hcclxuICAgICAgICAgICAgcmV0dXJuIGRzLmRhdGFTb3VyY2VJZCA9PT0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2UnLCBmaW5hbFNlbGVjdGVkRHNbMF0pXHJcbiAgICAvLyBzdXBwb3J0cyBtdWx0aXBsZSB0cmlnZ2VyXHJcbiAgICBjb25maWcgPSBjb25maWcuc2V0KCd1c2VEYXRhU291cmNlcycsIGZpbmFsU2VsZWN0ZWREcylcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlTGF5ZXJGb3JUcmlnZ2VyTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0KCd1c2VEYXRhU291cmNlJywgbnVsbClcclxuICAgIC8vIHN1cHBvcnRzIG11bHRpcGxlIHRyaWdnZXJcclxuICAgIGNvbmZpZyA9IGNvbmZpZy5zZXQoJ3VzZURhdGFTb3VyY2VzJywgW10pXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IGNvbmZpZ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNoZWNrSXNTdXBwb3J0TXVsdGlwbGVUcmlnZ2VyRGF0YVNvdXJjZXMgPSAod2lkZ2V0SWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICBjb25zdCB3aWRnZXRMYWJlbCA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5sYWJlbFxyXG4gICAgaWYgKHdpZGdldExhYmVsID09PSAnTWFwJykge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UgfHwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgLy9jb25zdCB0cmlnZ2VyUm9vdElkcyA9IHRoaXMuZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZClcclxuICAgIGNvbnN0IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YSA9IGdldFVzZURhdGFTb3VyY2VJbmZvKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlLCB0aGlzLnByb3BzLmNvbmZpZy51c2VEYXRhU291cmNlcywgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgIGxldCB1c2VEYXRhU291cmNlc1xyXG4gICAgaWYgKHRoaXMuY2hlY2tJc1N1cHBvcnRNdWx0aXBsZVRyaWdnZXJEYXRhU291cmNlcyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCkgfHwgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gSW1tdXRhYmxlKHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlcylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVzZURhdGFTb3VyY2VzID0gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2UgPyBJbW11dGFibGUoW3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlXSkgOiBJbW11dGFibGUoW10pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjc3M9e3RoaXMuZ2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxyXG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICB0eXBlcz17RFNTZWxlY3RvclR5cGVzfVxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgIGZyb21Sb290RHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxyXG4gICAgICAgICAgICBmcm9tRHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XHJcbiAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXHJcbiAgICAgICAgICAgIGhpZGVUeXBlRHJvcGRvd25cclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxyXG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWR9XHJcbiAgICAgICAgICAgIGRpc2FibGVEYXRhVmlldz17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8vaGlkZURhdGFWaWV3PXt0aGlzLmNoZWNrSXNEaXNhYmxlRGF0YVZpZXcoKX1cclxuICAgICAgICAgICAgaGlkZURhdGFWaWV3PXsoKGRhdGFWaWV3SnNvbiwgbWFpbkRhdGFTb3VyY2VJZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgICAgICAgICAgICByZXR1cm4gIW1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5maWx0ZXIobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgPT09IG1haW5EYXRhU291cmNlSWRcclxuICAgICAgICAgICAgICB9KS5maW5kKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZURhdGFWaWV3SWRcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlLmRhdGFWaWV3SWRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlRGF0YVZpZXdJZCA9IERFRkFVTFRfREFUQV9WSUVXX0lEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VEYXRhVmlld0lkID09PSBkYXRhVmlld0pzb24uaWRcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgaXNNdWx0aXBsZT17dGhpcy5jaGVja0lzU3VwcG9ydE11bHRpcGxlVHJpZ2dlckRhdGFTb3VyY2VzKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKX1cclxuICAgICAgICAgICAgaXNNdWx0aXBsZURhdGFWaWV3PXt0cnVlfVxyXG4gICAgICAgICAgICBoaWRlQ3JlYXRlVmlld0J1dHRvblxyXG4gICAgICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XHJcbiAgICAgICAgICAvLyBvblNlbGVjdD17dGhpcy5oYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZH1cclxuICAgICAgICAgIC8vIG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShfUGFuVG9BY3Rpb25TZXR0aW5nKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=