System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-arcgis","jimu-theme","jimu-ui/advanced/sql-expression-builder"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-ui/lib/icons/link-combined.svg":
/*!*********************************************!*\
  !*** ./jimu-ui/lib/icons/link-combined.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 40\"><path fill=\"#A8A8A8\" fill-rule=\"evenodd\" d=\"M6 30v10H0v-1h5v-9h1ZM3.162 18.582a.5.5 0 0 1 0 .71l-1.416 1.421a2.497 2.497 0 0 0-.003 3.545c.983.983 2.56.98 3.544-.003l1.42-1.42a.504.504 0 0 1 .712.713L6 24.968a3.502 3.502 0 0 1-4.967 0 3.501 3.501 0 0 1 0-4.967l1.416-1.422a.504.504 0 0 1 .713.003Zm4.967-.71a.5.5 0 0 1 0 .71L4.58 22.129a.504.504 0 0 1-.713-.712l3.548-3.548a.504.504 0 0 1 .713.003Zm2.838-2.838a3.501 3.501 0 0 1 0 4.967l-1.42 1.419a.504.504 0 0 1-.713-.712l1.423-1.417a2.5 2.5 0 0 0 0-3.547 2.502 2.502 0 0 0-3.547 0l-1.42 1.419a.504.504 0 0 1-.713-.712l1.42-1.42a3.506 3.506 0 0 1 4.97.003ZM6 0v10H5V1H0V0h6Z\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/advanced/sql-expression-builder":
/*!**********************************************************!*\
  !*** external "jimu-ui/advanced/sql-expression-builder" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_sql_expression_builder__;

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/filter-action-setting.tsx ***!
  \**********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-ui/advanced/sql-expression-builder */ "jimu-ui/advanced/sql-expression-builder");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");
/** @jsx jsx */









const DSSelectorTypes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.FeatureLayer, jimu_core__WEBPACK_IMPORTED_MODULE_0__.AllDataSourceTypes.SceneLayer]);
class _FilterActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
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
        this.initOutputDataSources = (outputDataSources) => {
            var _a;
            const ds = (_a = outputDataSources === null || outputDataSources === void 0 ? void 0 : outputDataSources.map(dsId => {
                return {
                    dataSourceId: dsId,
                    mainDataSourceId: dsId,
                    rootDataSourceId: null
                };
            })) !== null && _a !== void 0 ? _a : [];
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(ds);
        };
        this.getInitConfig = () => {
            const messageWidgetId = this.props.messageWidgetId;
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            let messageUseDataSource = null;
            let actionUseDataSource = null;
            if (!this.props.config.messageUseDataSource) {
                const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(messageWidgetId, this.props.messageType);
                if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) && (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                    const dsJson = config.dataSources[useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        messageUseDataSource = null;
                    }
                    else {
                        messageUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources[0].rootDataSourceId
                        });
                    }
                }
            }
            else {
                messageUseDataSource = this.checkAndGetInitUseDataSource(this.props.messageWidgetId, this.props.config.messageUseDataSource);
            }
            const actionWidgetId = this.props.widgetId;
            const actionWidgetJson = config.widgets[actionWidgetId];
            if (!this.props.config.actionUseDataSource) {
                if (actionWidgetJson && actionWidgetJson.useDataSources && actionWidgetJson.useDataSources[0] && actionWidgetJson.useDataSources.length === 1) {
                    const dsJson = config.dataSources[actionWidgetJson.useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        actionUseDataSource = null;
                    }
                    else {
                        actionUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: actionWidgetJson.useDataSources[0].dataSourceId,
                            mainDataSourceId: actionWidgetJson.useDataSources[0].mainDataSourceId,
                            dataViewId: actionWidgetJson.useDataSources[0].dataViewId,
                            rootDataSourceId: actionWidgetJson.useDataSources[0].rootDataSourceId
                        });
                    }
                }
            }
            else {
                actionUseDataSource = this.checkAndGetInitUseDataSource(this.props.widgetId, this.props.config.actionUseDataSource);
            }
            const oldActionUseDataSourceId = this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.dataSourceId;
            const newActionUseDataSourceId = actionUseDataSource && actionUseDataSource.dataSourceId;
            if (newActionUseDataSourceId !== oldActionUseDataSourceId) {
                return {
                    messageUseDataSource: messageUseDataSource,
                    actionUseDataSource: actionUseDataSource,
                    sqlExprObj: null
                };
            }
            else {
                return {
                    messageUseDataSource: messageUseDataSource,
                    actionUseDataSource: actionUseDataSource,
                    sqlExprObj: this.props.config.sqlExprObj
                };
            }
        };
        this.checkAndGetInitUseDataSource = (widgetId, oldUseDataSource) => {
            var _a, _b, _c, _d;
            const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
            let initUseDataSource = null;
            let isMapDs = false;
            const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const isoldUseDataSourceIsOutputDs = (_b = (_a = dsM.getDataSource(oldUseDataSource.dataSourceId)) === null || _a === void 0 ? void 0 : _a.getDataSourceJson()) === null || _b === void 0 ? void 0 : _b.isOutputFromWidget;
            const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(widgetId, this.props.messageType);
            const dsId = useDataSources && useDataSources[0] && useDataSources[0].dataSourceId;
            if (!dsId) {
                return null;
            }
            const dsJson = config.dataSources[dsId];
            if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                isMapDs = true;
            }
            if (isMapDs) {
                // webmap or webscene ds
                let isUseOldDs = false;
                if (useDataSources) {
                    for (let i = 0; i < useDataSources.length; i++) {
                        if (useDataSources[i].dataSourceId === oldUseDataSource.rootDataSourceId) {
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
                if (useDataSources) {
                    for (let i = 0; i < useDataSources.length; i++) {
                        const oldUseDataSourceId = isoldUseDataSourceIsOutputDs ? oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.mainDataSourceId : oldUseDataSource === null || oldUseDataSource === void 0 ? void 0 : oldUseDataSource.dataSourceId;
                        const currentUseDataSourceId = isoldUseDataSourceIsOutputDs ? (_c = useDataSources[i]) === null || _c === void 0 ? void 0 : _c.mainDataSourceId : (_d = useDataSources[i]) === null || _d === void 0 ? void 0 : _d.dataSourceId;
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
                    if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                        initUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].rootDataSourceId
                        });
                    }
                    else {
                        initUseDataSource = null;
                    }
                }
            }
            return initUseDataSource;
        };
        this.handleTriggerLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleTriggerLayerSelected(useDataSources[0]);
            }
            else {
                this.handleRemoveLayerForTriggerLayer();
            }
        };
        this.handleActionLayerChange = (useDataSources) => {
            if (useDataSources && useDataSources.length > 0) {
                this.handleActionLayerSelected(useDataSources[0]);
            }
            else {
                this.handleRemoveLayerForActionLayer();
            }
        };
        this.handleTriggerLayerSelected = (currentSelectedDs) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', currentSelectedDs)
            });
        };
        this.handleActionLayerSelected = (currentSelectedDs) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', currentSelectedDs).set('sqlExprObj', null)
            });
        };
        this.handleRemoveLayerForTriggerLayer = () => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', null)
            });
        };
        this.handleRemoveLayerForActionLayer = () => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', null).set('sqlExprObj', null)
            });
        };
        this.showSqlExprPopup = () => {
            this.setState({ isSqlExprShow: true });
        };
        this.toggleSqlExprPopup = () => {
            this.setState({ isSqlExprShow: !this.state.isSqlExprShow });
        };
        this.onSqlExprBuilderChange = (sqlExprObj) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('sqlExprObj', sqlExprObj)
            });
        };
        this.onMessageFieldSelected = (allSelectedFields, ds) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('messageUseDataSource', {
                    dataSourceId: this.props.config.messageUseDataSource.dataSourceId,
                    mainDataSourceId: this.props.config.messageUseDataSource.mainDataSourceId,
                    dataViewId: this.props.config.messageUseDataSource.dataViewId,
                    rootDataSourceId: this.props.config.messageUseDataSource.rootDataSourceId,
                    fields: allSelectedFields.map(f => f.jimuName)
                })
            });
        };
        this.onActionFieldSelected = (allSelectedFields, ds) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('actionUseDataSource', {
                    dataSourceId: this.props.config.actionUseDataSource.dataSourceId,
                    mainDataSourceId: this.props.config.actionUseDataSource.mainDataSourceId,
                    dataViewId: this.props.config.actionUseDataSource.dataViewId,
                    rootDataSourceId: this.props.config.actionUseDataSource.rootDataSourceId,
                    fields: allSelectedFields.map(f => f.jimuName)
                })
            });
        };
        this.swicthEnabledDataRelationShip = (checked) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.set('enabledDataRelationShip', checked)
            });
        };
        this.checkTrigerLayerIsSameToActionLayer = () => {
            if (this.props.config.messageUseDataSource && this.props.config.actionUseDataSource) {
                if (this.props.config.messageUseDataSource.mainDataSourceId === this.props.config.actionUseDataSource.mainDataSourceId &&
                    this.props.config.messageUseDataSource.rootDataSourceId === this.props.config.actionUseDataSource.rootDataSourceId) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        this.getDsRootIdsByWidgetId = (wId) => {
            var _a, _b, _c, _d;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[wId];
            const rootIds = [];
            const dsM = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.useDataSources) === null || _d === void 0 ? void 0 : _d.forEach((useDS) => {
                const ds = dsM.getDataSource(useDS.dataSourceId);
                if ((ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap || (ds === null || ds === void 0 ? void 0 : ds.type) === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene) { // is root ds
                    rootIds.push(useDS.dataSourceId);
                }
            });
            return rootIds.length > 0 ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(rootIds) : undefined;
        };
        this.getDsIdsByWidgetId = (wId) => {
            var _a;
            const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(wId, this.props.messageType);
            return (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)((_a = useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.map((useDS) => useDS === null || useDS === void 0 ? void 0 : useDS.mainDataSourceId)) !== null && _a !== void 0 ? _a : []);
        };
        this.getDsSelectorSourceData = (widgetId, useDataSource) => {
            var _a, _b, _c;
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            const dsRootIds = this.getDsRootIdsByWidgetId(widgetId);
            const isReadOnly = _action_utils__WEBPACK_IMPORTED_MODULE_8__.checkIsOnlyOneDs(widgetJson, this.props.messageType, dsRootIds);
            const useDataSources = (useDataSource && useDataSource.dataSourceId)
                ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([useDataSource])
                : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            const fromDsIds = dsRootIds ? undefined : this.getDsIdsByWidgetId(widgetId);
            const dsSelectorSource = {
                isReadOnly: isReadOnly,
                useDataSources: useDataSources,
                fromRootDsIds: dsRootIds,
                fromDsIds: fromDsIds
            };
            return dsSelectorSource;
        };
        this.checkIsDisableDataView = (widgetId) => {
            var _a, _b, _c, _d;
            if (this.props.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange) {
                return true;
            }
            const appConfig = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appStateInBuilder) === null || _b === void 0 ? void 0 : _b.appConfig;
            const widgetJson = (_c = appConfig === null || appConfig === void 0 ? void 0 : appConfig.widgets) === null || _c === void 0 ? void 0 : _c[widgetId];
            if (widgetJson) {
                const widgetLabel = (_d = widgetJson === null || widgetJson === void 0 ? void 0 : widgetJson.manifest) === null || _d === void 0 ? void 0 : _d.label;
                if (widgetLabel === 'Map') {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        };
        this.modalStyle.borderRight = '1px solid black';
        this.modalStyle.borderBottom = '1px solid black';
        this.state = {
            isShowLayerList: false,
            currentLayerType: null,
            isSqlExprShow: false
        };
    }
    componentDidMount() {
        const initConfig = this.getInitConfig();
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: this.props.config.set('messageUseDataSource', initConfig.messageUseDataSource)
                .set('actionUseDataSource', initConfig.actionUseDataSource).set('sqlExprObj', initConfig.sqlExprObj)
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

      .sql-expr-display {
        width: 100%;
        height: auto;
        min-height: 60px;
        line-height: 25px;
        padding: 3px 5px;
        color: ${theme.colors.palette.dark[300]};
        border: 1px solid ${theme.colors.palette.light[500]};
      }

      .relate-panel-left {
        flex: auto;
        .action-select-chooser {
          margin-top: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rem(12)};
        }
      }
    `;
    }
    render() {
        var _a, _b;
        const actionUseDataSourceInstance = this.props.config.actionUseDataSource &&
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(this.props.config.actionUseDataSource.dataSourceId);
        const { theme } = this.props;
        const triggerDsSelectorSourceData = this.getDsSelectorSourceData(this.props.messageWidgetId, this.props.config.messageUseDataSource);
        const actionDsSelectorSourceData = this.getDsSelectorSourceData(this.props.widgetId, this.props.config.actionUseDataSource);
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_TriggerLayer }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: triggerDsSelectorSourceData.useDataSources, fromRootDsIds: triggerDsSelectorSourceData.fromRootDsIds, fromDsIds: triggerDsSelectorSourceData.fromDsIds, closeDataSourceListOnChange: true, disableRemove: () => triggerDsSelectorSourceData.isReadOnly, disableDataSourceList: triggerDsSelectorSourceData.isReadOnly, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, onChange: this.handleTriggerLayerChange, widgetId: this.props.messageWidgetId, disableDataView: true, hideDataView: this.checkIsDisableDataView(this.props.messageWidgetId), enableToSelectOutputDsFromSelf: true })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_ActionLayer', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_ActionLayer }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.DataSourceSelector, { types: DSSelectorTypes, useDataSources: actionDsSelectorSourceData.useDataSources, fromRootDsIds: actionDsSelectorSourceData.fromRootDsIds, fromDsIds: actionDsSelectorSourceData.fromDsIds, closeDataSourceListOnChange: true, disableRemove: () => actionDsSelectorSourceData.isReadOnly, disableDataSourceList: actionDsSelectorSourceData.isReadOnly, hideAddDataButton: true, hideTypeDropdown: true, mustUseDataSource: true, onChange: this.handleActionLayerChange, widgetId: this.props.widgetId, hideDataView: true, enableToSelectOutputDsFromSelf: true })),
            this.props.config && this.props.config.messageUseDataSource && this.props.config.actionUseDataSource &&
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({ id: 'mapAction_Conditions', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_Conditions }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_RelateMessage', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_RelateMessage }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: this.props.config.enabledDataRelationShip, onChange: evt => { this.swicthEnabledDataRelationShip(evt.target.checked); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Collapse, { isOpen: this.props.config.enabledDataRelationShip, className: 'w-100' },
                            this.checkTrigerLayerIsSameToActionLayer() &&
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 border p-1 mr-2' }, this.props.intl.formatMessage({ id: 'mapAction_AutoBind', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_AutoBind })),
                            !this.checkTrigerLayerIsSameToActionLayer() && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 d-flex align-items-center' },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex flex-column relate-panel-left' },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { className: 'w-100', useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([(_a = this.props.config.messageUseDataSource) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true })]), isDataSourceDropDownHidden: true, placeholder: this.props.intl.formatMessage({ id: 'mapAction_TriggerLayerField', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_TriggerLayerField }), onChange: this.onMessageFieldSelected, useDropdown: true, isSearchInputHidden: true, selectedFields: this.props.config.messageUseDataSource && this.props.config.messageUseDataSource.fields
                                            ? this.props.config.messageUseDataSource.fields
                                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_3__.FieldSelector, { className: 'w-100 action-select-chooser', placeholder: this.props.intl.formatMessage({ id: 'mapAction_ActionLayerField', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_ActionLayerField }), useDataSources: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([(_b = this.props.config.actionUseDataSource) === null || _b === void 0 ? void 0 : _b.asMutable({ deep: true })]), isDataSourceDropDownHidden: true, onChange: this.onActionFieldSelected, useDropdown: true, isSearchInputHidden: true, selectedFields: this.props.config.actionUseDataSource && this.props.config.actionUseDataSource.fields
                                            ? this.props.config.actionUseDataSource.fields
                                            : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]) })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { className: 'flex-none', width: 12, height: 40, color: theme.colors.dark[400], icon: __webpack_require__(/*! jimu-ui/lib/icons/link-combined.svg */ "./jimu-ui/lib/icons/link-combined.svg") })))),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: 'link', disabled: !this.props.config.actionUseDataSource, className: 'w-100 d-flex justify-content-start', onClick: this.showSqlExprPopup },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 text-truncate', style: { textAlign: 'start' } }, this.props.intl.formatMessage({ id: 'mapAction_MoreConditions', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_MoreConditions }))),
                        this.props.config.actionUseDataSource && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { useDataSource: this.props.config.actionUseDataSource }, (ds) => {
                            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_sql_expression_builder__WEBPACK_IMPORTED_MODULE_6__.SqlExpressionBuilderPopup, { dataSource: ds, mode: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SqlExpressionMode.Simple, isOpen: this.state.isSqlExprShow, toggle: this.toggleSqlExprPopup, expression: this.props.config.sqlExprObj, onChange: (sqlExprObj) => { this.onSqlExprBuilderChange(sqlExprObj); } }));
                        })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'sql-expr-display' }, this.props.config.sqlExprObj && actionUseDataSourceInstance
                            ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(this.props.config.sqlExprObj, actionUseDataSourceInstance).displaySQL
                            : this.props.intl.formatMessage({ id: 'mapAction_SetExpression', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__["default"].mapAction_SetExpression }))))));
    }
}
_FilterActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        messageUseDataSource: null,
        actionUseDataSource: null,
        sqlExprObj: null,
        enabledDataRelationShip: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_FilterActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLXNldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6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QU0sRUFBRSxvREFBUyxDQUFDO1FBQ2hCLG9CQUFvQixFQUFFLElBQUk7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixVQUFVLEVBQUUsSUFBSTtRQUNoQix1QkFBdUIsRUFBRSxJQUFJO0tBQzlCLENBQUM7Q0FDSDtBQWlkSCxpRUFBZSxxREFBUyxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL2xpbmstY29tYmluZWQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2FjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zcWwtZXhwcmVzc2lvbi1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24tc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTIgNDBcXFwiPjxwYXRoIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTYgMzB2MTBIMHYtMWg1di05aDFaTTMuMTYyIDE4LjU4MmEuNS41IDAgMCAxIDAgLjcxbC0xLjQxNiAxLjQyMWEyLjQ5NyAyLjQ5NyAwIDAgMC0uMDAzIDMuNTQ1Yy45ODMuOTgzIDIuNTYuOTggMy41NDQtLjAwM2wxLjQyLTEuNDJhLjUwNC41MDQgMCAwIDEgLjcxMi43MTNMNiAyNC45NjhhMy41MDIgMy41MDIgMCAwIDEtNC45NjcgMCAzLjUwMSAzLjUwMSAwIDAgMSAwLTQuOTY3bDEuNDE2LTEuNDIyYS41MDQuNTA0IDAgMCAxIC43MTMuMDAzWm00Ljk2Ny0uNzFhLjUuNSAwIDAgMSAwIC43MUw0LjU4IDIyLjEyOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMy41NDgtMy41NDhhLjUwNC41MDQgMCAwIDEgLjcxMy4wMDNabTIuODM4LTIuODM4YTMuNTAxIDMuNTAxIDAgMCAxIDAgNC45NjdsLTEuNDIgMS40MTlhLjUwNC41MDQgMCAwIDEtLjcxMy0uNzEybDEuNDIzLTEuNDE3YTIuNSAyLjUgMCAwIDAgMC0zLjU0NyAyLjUwMiAyLjUwMiAwIDAgMC0zLjU0NyAwbC0xLjQyIDEuNDE5YS41MDQuNTA0IDAgMCAxLS43MTMtLjcxMmwxLjQyLTEuNDJhMy41MDYgMy41MDYgMCAwIDEgNC45Ny4wMDNaTTYgMHYxMEg1VjFIMFYwaDZaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlVHlwZSwgTWVzc2FnZUNhcnJ5RGF0YSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJTVdpZGdldEpzb24gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlT3V0cHV0RGF0YVNvdXJjZXMgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YSA9PT0gTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IE1lc3NhZ2VDYXJyeURhdGEge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCBwdWJsaXNoTWVzc2FnZXMgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ucHVibGlzaE1lc3NhZ2VzXHJcbiAgbGV0IG1lc3NhZ2VDYXJyeURhdGEgPSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2VcclxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eSA9IGVsIGFzIGFueVxyXG4gICAgaWYgKHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGEgJiYgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja091dEFjdGlvbkNvbmZpZyAoYWN0aW9uQ29uZmlnOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PEFjdGlvbkNvbmZpZz4sIG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcblxyXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXM6IElNVXNlRGF0YVNvdXJjZVtdID0gW11cclxuICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURTLmRhdGFTb3VyY2VJZF1cclxuICAgICAgICBsZXQgdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRFMuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEUy5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEUy5kYXRhVmlld0lkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2UgPSB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSwgbWVzc2FnZVR5cGUpXHJcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURTID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIHVzZURTLCBtZXNzYWdlVHlwZSlcclxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrT3V0VXNlRGF0YVNvdXJjZSAobWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCB3aWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBsZXQgaXNNYXBEcyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuICBpZiAoIWRzSWQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cclxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgIGlzTWFwRHMgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XHJcblxyXG4gIGlmIChpc01hcERzKSB7XHJcbiAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvbGRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gb2xkVXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA6IG9sZFVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcclxuICAgICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcclxuICBjb25zdCBkc1Jvb3RJZHMgPSBnZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gIC8vaWYgKGRzUm9vdElkcyAmJiBkc1Jvb3RJZHMubGVuZ3RoID09PSAwICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgaWYgKCFkc1Jvb3RJZHMgfHwgZHNSb290SWRzPy5sZW5ndGggPT09IDApIHtcclxuICAgIGlzUmVhZE9ubHkgPSBjaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIG1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiBnZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XHJcbiAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcclxuICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcclxuICAgIGZyb21Ec0lkczogZnJvbURzSWRzXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBvdXRwdXREYXRhU291cmNlcyA9IGluaXRPdXRwdXREYXRhU291cmNlcyh3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcykgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IGJvdGhEYXRhc291cmNlID0gdXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkuY29uY2F0KG91dHB1dERhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdXRwdXREYXRhU291cmNlcyAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXHJcbiAgICB9XHJcbiAgfSkgPz8gW11cclxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3aWRnZXRKc29uPy5pZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3Qgb3V0cHV0RHMgPSB3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcyB8fCBbXVxyXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cclxuICBpZiAoZHNSb290SWRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICBjb25zdCBkc0xlbmd0aCA9IG91dHB1dERzLmxlbmd0aCArIHVzZURzLmxlbmd0aFxyXG4gICAgICByZXR1cm4gZHNMZW5ndGggPT09IDFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGxldCByZXN1bHREc1xyXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcclxuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RHMgPSBkc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxyXG4gIH0pID8/IFtdKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXHJcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxyXG4gIHNlbGVjdFRoaXJkTWFwSGludDogJ1BsZWFzZSB1bnNlbGVjdCBhIG1hcCBvciBzY2VuZSBiZWZvcmUgeW91IGNob29zZSBhbm90aGVyIG9uZS4gVXAgdG8gdHdvIGFyZSBzdXBwb3J0ZWQuJyxcclxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxyXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcclxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXHJcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcclxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxyXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxyXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXHJcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXHJcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxyXG4gIG9wdGlvbnM6ICdPcHRpb25zJyxcclxuICBzZWxlY3Rpb25IaWdobGlnaHRDb2xvcjogJ1NlbGVjdGlvbiBoaWdobGlnaHQnLFxyXG4gIGZlYXR1cmVTZWxlY3Rpb25Db2xvcjogJ0ZlYXR1cmUgc2VsZWN0aW9uIGNvbG9ycycsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodEZpbGw6ICdIaWdobGlnaHQgZmlsbCcsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodE91dGxpbmU6ICdIaWdobGlnaHQgb3V0bGluZScsXHJcbiAgZGlzYWJsZVNjcm9sbFpvb206ICdEaXNhYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBlbmFibGVTY3JvbGxab29tOiAnRW5hYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBkaXNhYmxlUG9wVXA6ICdEaXNhYmxlIHBvcC11cCcsXHJcbiAgZW5hYmxlUG9wVXA6ICdFbmFibGUgcG9wLXVwJyxcclxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcclxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXHJcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcclxuICBtYXBOb25lOiAnbm9uZScsXHJcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXHJcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcclxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxyXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxyXG5cclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcclxuICBtYXBBY3Rpb25fU2V0RGF0YTogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXI6ICdBY3Rpb24gZGF0YScsXHJcbiAgbWFwQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZTogJ1RyaWdnZXIgLyBhY3Rpb24gY29ubmVjdGlvbicsXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkOiAnU2VsZWN0IGEgdHJpZ2dlciBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX05vbmU6ICdub25lJyxcclxuICBtYXBBY3Rpb25fRXF1YWxzOiAnZXF1YWxzJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1NldEV4cHJlc3Npb246ICdQbGVhc2Ugc2V0IHlvdXIgZXhwcmVzc2lvbiBmaXJzdC4nLFxyXG4gIG1hcEFjdGlvbl9DaG9vc2VMYXllcjogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXHJcbiAgbWFwQWN0aW9uX05vTGF5ZXI6ICdObyBkYXRhLicsXHJcbiAgbWFwQWN0aW9uX1BvaW50OiAnUG9pbnQnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5bGluZTogJ1BvbHlsaW5lJyxcclxuICBtYXBBY3Rpb25fUG9seWdvbjogJ1BvbHlnb24nLFxyXG4gIG1hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzOiAnVXNlIGxheWVyLWRlZmluZWQgc3ltYm9scycsXHJcbiAgbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHM6ICdVc2UgY3VzdG9tIHN5bWJvbHMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGU6ICdab29tIHNjYWxlJyxcclxuICBtYXBab29tVG9BY3Rpb25fQXV0b21hdGljOiAnQXV0b21hdGljJyxcclxuICBtYXBab29tVG9BY3Rpb25fQ3VzdG9tOiAnQ3VzdG9tJyxcclxuICBtYXBab29tVG9BY3Rpb25fVHlwZVNjYWxlOiAnVHlwZSBhIHNjYWxlJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zcWxfZXhwcmVzc2lvbl9idWlsZGVyX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwgY3NzLCBqc3gsIHR5cGUgQWN0aW9uU2V0dGluZ1Byb3BzLCB0eXBlIFNlcmlhbGl6ZWRTdHlsZXMsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCB0eXBlIERhdGFTb3VyY2UsXHJcbiAgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgZ2V0QXBwU3RvcmUsIEltbXV0YWJsZSxcclxuICB0eXBlIFVzZURhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCB0eXBlIElNRmllbGRTY2hlbWEsIHR5cGUgSU1TcWxFeHByZXNzaW9uLFxyXG4gIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIE1lc3NhZ2VUeXBlLCBTcWxFeHByZXNzaW9uTW9kZSwgdHlwZSBJbW11dGFibGVBcnJheSwgQWxsRGF0YVNvdXJjZVR5cGVzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBCdXR0b24sIEljb24sIFN3aXRjaCwgQ29sbGFwc2UgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBGaWVsZFNlbGVjdG9yLCBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuXHJcbmltcG9ydCB7IFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXAgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NxbC1leHByZXNzaW9uLWJ1aWxkZXInXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0ICogYXMgYWN0aW9uVXRpbHMgZnJvbSAnLi9hY3Rpb24tdXRpbHMnXHJcblxyXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XHJcbiAgdGhlbWU/OiBJTVRoZW1lVmFyaWFibGVzXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZXMge1xyXG4gIGlzU2hvd0xheWVyTGlzdDogYm9vbGVhblxyXG4gIGN1cnJlbnRMYXllclR5cGU6ICd0cmlnZ2VyJyB8ICdhY3Rpb24nXHJcbiAgaXNTcWxFeHByU2hvdzogYm9vbGVhblxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnIHtcclxuICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIGFjdGlvblVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICBzcWxFeHByT2JqPzogSU1TcWxFeHByZXNzaW9uXHJcblxyXG4gIGVuYWJsZWREYXRhUmVsYXRpb25TaGlwPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jb25zdCBEU1NlbGVjdG9yVHlwZXMgPSBJbW11dGFibGUoW0FsbERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsIEFsbERhdGFTb3VyY2VUeXBlcy5TY2VuZUxheWVyXSlcclxuXHJcbmNsYXNzIF9GaWx0ZXJBY3Rpb25TZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBY3Rpb25TZXR0aW5nUHJvcHM8SU1Db25maWc+ICYgRXh0cmFQcm9wcywgU3RhdGVzPiB7XHJcbiAgbW9kYWxTdHlsZTogYW55ID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwJyxcclxuICAgIGJvdHRvbTogJzAnLFxyXG4gICAgd2lkdGg6ICcyNTlweCcsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGJvcmRlclJpZ2h0OiAnJyxcclxuICAgIGJvcmRlckJvdHRvbTogJycsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnMXB4J1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLm1vZGFsU3R5bGUuYm9yZGVyUmlnaHQgPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgYmxhY2snXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNTaG93TGF5ZXJMaXN0OiBmYWxzZSxcclxuICAgICAgY3VycmVudExheWVyVHlwZTogbnVsbCxcclxuICAgICAgaXNTcWxFeHByU2hvdzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjb25maWc6IEltbXV0YWJsZSh7XHJcbiAgICAgIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBudWxsLFxyXG4gICAgICBhY3Rpb25Vc2VEYXRhU291cmNlOiBudWxsLFxyXG4gICAgICBzcWxFeHByT2JqOiBudWxsLFxyXG4gICAgICBlbmFibGVkRGF0YVJlbGF0aW9uU2hpcDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGluaXRPdXRwdXREYXRhU291cmNlcyA9IChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+ID0+IHtcclxuICAgIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0pID8/IFtdXHJcbiAgICByZXR1cm4gSW1tdXRhYmxlKGRzKVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdENvbmZpZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRJZCA9IHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkXHJcbiAgICBjb25zdCBjb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwU3RhdGVJbkJ1aWxkZXIuYXBwQ29uZmlnXHJcblxyXG4gICAgbGV0IG1lc3NhZ2VVc2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICBsZXQgYWN0aW9uVXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSBhY3Rpb25VdGlscy5nZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG4gICAgICBpZiAodXNlRGF0YVNvdXJjZXM/LlswXSAmJiB1c2VEYXRhU291cmNlcz8ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZF1cclxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgICAgIG1lc3NhZ2VVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEYXRhU291cmNlc1swXS5kYXRhVmlld0lkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbldpZGdldElkID0gdGhpcy5wcm9wcy53aWRnZXRJZFxyXG4gICAgY29uc3QgYWN0aW9uV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW2FjdGlvbldpZGdldElkXVxyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBpZiAoYWN0aW9uV2lkZ2V0SnNvbiAmJiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0gJiYgYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFWaWV3SWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGlvblVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBjb25zdCBuZXdBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSBhY3Rpb25Vc2VEYXRhU291cmNlICYmIGFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBpZiAobmV3QWN0aW9uVXNlRGF0YVNvdXJjZUlkICE9PSBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbWVzc2FnZVVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogYWN0aW9uVXNlRGF0YVNvdXJjZSxcclxuICAgICAgICBzcWxFeHByT2JqOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2U6IG1lc3NhZ2VVc2VEYXRhU291cmNlLFxyXG4gICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2U6IGFjdGlvblVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgc3FsRXhwck9iajogdGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9ialxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlID0gKHdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWdcclxuICAgIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIGxldCBpc01hcERzID0gZmFsc2VcclxuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSBhY3Rpb25VdGlscy5nZXREc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICBjb25zdCBkc0lkID0gdXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXNbMF0gJiYgdXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgICBpZiAoIWRzSWQpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cclxuICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgICBpc01hcERzID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01hcERzKSB7XHJcbiAgICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xyXG4gICAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh1c2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgICAgaWYgKHVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gdXNlRGF0YVNvdXJjZXNbaV0/Lm1haW5EYXRhU291cmNlSWQgOiB1c2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh1c2VEYXRhU291cmNlcz8ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0ubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5kYXRhVmlld0lkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgY29uc3QgaW5pdENvbmZpZyA9IHRoaXMuZ2V0SW5pdENvbmZpZygpXHJcblxyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywgaW5pdENvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcclxuICAgICAgICAuc2V0KCdhY3Rpb25Vc2VEYXRhU291cmNlJywgaW5pdENvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKS5zZXQoJ3NxbEV4cHJPYmonLCBpbml0Q29uZmlnLnNxbEV4cHJPYmopXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAuc2V0dGluZy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDEwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfSAke3BvbGlzaGVkLnJlbSgwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNxbC1leHByLWRpc3BsYXkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnBhbGV0dGUuZGFya1szMDBdfTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmxpZ2h0WzUwMF19O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVsYXRlLXBhbmVsLWxlZnQge1xyXG4gICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgLmFjdGlvbi1zZWxlY3QtY2hvb3NlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAke3BvbGlzaGVkLnJlbSgxMil9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXNbMF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUFjdGlvbkxheWVyQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgIGlmICh1c2VEYXRhU291cmNlcyAmJiB1c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uTGF5ZXJTZWxlY3RlZCh1c2VEYXRhU291cmNlc1swXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTGF5ZXJGb3JBY3Rpb25MYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCA9IChjdXJyZW50U2VsZWN0ZWREczogVXNlRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywgY3VycmVudFNlbGVjdGVkRHMpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWN0aW9uTGF5ZXJTZWxlY3RlZCA9IChjdXJyZW50U2VsZWN0ZWREczogVXNlRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2FjdGlvblVzZURhdGFTb3VyY2UnLCBjdXJyZW50U2VsZWN0ZWREcykuc2V0KCdzcWxFeHByT2JqJywgbnVsbClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIG51bGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlTGF5ZXJGb3JBY3Rpb25MYXllciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdhY3Rpb25Vc2VEYXRhU291cmNlJywgbnVsbCkuc2V0KCdzcWxFeHByT2JqJywgbnVsbClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93U3FsRXhwclBvcHVwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3FsRXhwclNob3c6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNxbEV4cHJQb3B1cCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NxbEV4cHJTaG93OiAhdGhpcy5zdGF0ZS5pc1NxbEV4cHJTaG93IH0pXHJcbiAgfVxyXG5cclxuICBvblNxbEV4cHJCdWlsZGVyQ2hhbmdlID0gKHNxbEV4cHJPYmo6IElNU3FsRXhwcmVzc2lvbikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3NxbEV4cHJPYmonLCBzcWxFeHByT2JqKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uTWVzc2FnZUZpZWxkU2VsZWN0ZWQgPSAoYWxsU2VsZWN0ZWRGaWVsZHM6IElNRmllbGRTY2hlbWFbXSwgZHM6IERhdGFTb3VyY2UpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIHtcclxuICAgICAgICBkYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIGRhdGFWaWV3SWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmRhdGFWaWV3SWQsXHJcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICBmaWVsZHM6IGFsbFNlbGVjdGVkRmllbGRzLm1hcChmID0+IGYuamltdU5hbWUpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25BY3Rpb25GaWVsZFNlbGVjdGVkID0gKGFsbFNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIHtcclxuICAgICAgICBkYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICBkYXRhVmlld0lkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFWaWV3SWQsXHJcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIGZpZWxkczogYWxsU2VsZWN0ZWRGaWVsZHMubWFwKGYgPT4gZi5qaW11TmFtZSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzd2ljdGhFbmFibGVkRGF0YVJlbGF0aW9uU2hpcCA9IChjaGVja2VkKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnZW5hYmxlZERhdGFSZWxhdGlvblNoaXAnLCBjaGVja2VkKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNoZWNrVHJpZ2VyTGF5ZXJJc1NhbWVUb0FjdGlvbkxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgPT09IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQgPT09IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RHNSb290SWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gICAgY29uc3Qgcm9vdElkcyA9IFtdXHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICAgIHJvb3RJZHMucHVzaCh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcm9vdElkcy5sZW5ndGggPiAwID8gSW1tdXRhYmxlKHJvb3RJZHMpIDogdW5kZWZpbmVkXHJcbiAgfVxyXG5cclxuICBnZXREc0lkc0J5V2lkZ2V0SWQgPSAod0lkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKHdJZCwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSlcclxuICAgIHJldHVybiBJbW11dGFibGUodXNlRGF0YVNvdXJjZXM/Lm1hcCgodXNlRFM6IEltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4gdXNlRFM/Lm1haW5EYXRhU291cmNlSWQpID8/IFtdKVxyXG4gIH1cclxuXHJcbiAgZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEgPSAod2lkZ2V0SWQ6IHN0cmluZywgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgICBjb25zdCBkc1Jvb3RJZHMgPSB0aGlzLmdldERzUm9vdElkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXHJcbiAgICBjb25zdCBpc1JlYWRPbmx5ID0gYWN0aW9uVXRpbHMuY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXHJcblxyXG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSAodXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZClcclxuICAgICAgPyBJbW11dGFibGUoW3VzZURhdGFTb3VyY2VdKVxyXG4gICAgICA6IEltbXV0YWJsZShbXSlcclxuXHJcbiAgICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiB0aGlzLmdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAgIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XHJcbiAgICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHksXHJcbiAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyxcclxuICAgICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxyXG4gICAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkc1NlbGVjdG9yU291cmNlXHJcbiAgfVxyXG5cclxuICBjaGVja0lzRGlzYWJsZURhdGFWaWV3ID0gKHdpZGdldElkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gICAgaWYgKHdpZGdldEpzb24pIHtcclxuICAgICAgY29uc3Qgd2lkZ2V0TGFiZWwgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ubGFiZWxcclxuICAgICAgaWYgKHdpZGdldExhYmVsID09PSAnTWFwJykge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IGFjdGlvblVzZURhdGFTb3VyY2VJbnN0YW5jZSA9IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcclxuICAgICAgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG5cclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YSA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKVxyXG4gICAgY29uc3QgYWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEgPSB0aGlzLmdldERzU2VsZWN0b3JTb3VyY2VEYXRhKHRoaXMucHJvcHMud2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjc3M9e3RoaXMuZ2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9PlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXIgfSl9PlxyXG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICB0eXBlcz17RFNTZWxlY3RvclR5cGVzfVxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICBmcm9tUm9vdERzSWRzPXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuZnJvbVJvb3REc0lkc31cclxuICAgICAgICAgICAgZnJvbURzSWRzPXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuZnJvbURzSWRzfVxyXG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcclxuICAgICAgICAgICAgZGlzYWJsZVJlbW92ZT17KCkgPT4gdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XHJcbiAgICAgICAgICAgIGRpc2FibGVEYXRhU291cmNlTGlzdD17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XHJcbiAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXHJcbiAgICAgICAgICAgIGhpZGVUeXBlRHJvcGRvd25cclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHJpZ2dlckxheWVyQ2hhbmdlfVxyXG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWR9XHJcbiAgICAgICAgICAgIGRpc2FibGVEYXRhVmlld1xyXG4gICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RoaXMuY2hlY2tJc0Rpc2FibGVEYXRhVmlldyh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCl9XHJcbiAgICAgICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQWN0aW9uTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9BY3Rpb25MYXllciB9KX0+XHJcbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgZnJvbVJvb3REc0lkcz17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEuZnJvbVJvb3REc0lkc31cclxuICAgICAgICAgICAgZnJvbURzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XHJcbiAgICAgICAgICAgIGNsb3NlRGF0YVNvdXJjZUxpc3RPbkNoYW5nZVxyXG4gICAgICAgICAgICBkaXNhYmxlUmVtb3ZlPXsoKSA9PiBhY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgICAgICBkaXNhYmxlRGF0YVNvdXJjZUxpc3Q9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XHJcbiAgICAgICAgICAgIGhpZGVBZGREYXRhQnV0dG9uXHJcbiAgICAgICAgICAgIGhpZGVUeXBlRHJvcGRvd25cclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWN0aW9uTGF5ZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLndpZGdldElkfVxyXG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcclxuICAgICAgICAgICAgZW5hYmxlVG9TZWxlY3RPdXRwdXREc0Zyb21TZWxmPXt0cnVlfVxyXG4gICAgICAgICAgLy8gb25TZWxlY3Q9e3RoaXMuaGFuZGxlQWN0aW9uTGF5ZXJTZWxlY3RlZH1cclxuICAgICAgICAgIC8vIG9uUmVtb3ZlPXt0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiZcclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Db25kaXRpb25zJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQ29uZGl0aW9ucyB9KX0+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2UnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlIH0pfT5cclxuICAgICAgICAgICAgICA8U3dpdGNoIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwfSBvbkNoYW5nZT17ZXZ0ID0+IHsgdGhpcy5zd2ljdGhFbmFibGVkRGF0YVJlbGF0aW9uU2hpcChldnQudGFyZ2V0LmNoZWNrZWQpIH19IC8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17dGhpcy5wcm9wcy5jb25maWcuZW5hYmxlZERhdGFSZWxhdGlvblNoaXB9IGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuY2hlY2tUcmlnZXJMYXllcklzU2FtZVRvQWN0aW9uTGF5ZXIoKSAmJlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgYm9yZGVyIHAtMSBtci0yJz57dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9BdXRvQmluZCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0F1dG9CaW5kIH0pfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHshdGhpcy5jaGVja1RyaWdlckxheWVySXNTYW1lVG9BY3Rpb25MYXllcigpICYmIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbiByZWxhdGUtcGFuZWwtbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17SW1tdXRhYmxlKFt0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZT8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KV0pfSBpc0RhdGFTb3VyY2VEcm9wRG93bkhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uTWVzc2FnZUZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzPXt0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5maWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5maWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xMDAgYWN0aW9uLXNlbGVjdC1jaG9vc2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17SW1tdXRhYmxlKFt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXSl9IGlzRGF0YVNvdXJjZURyb3BEb3duSGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFjdGlvbkZpZWxkU2VsZWN0ZWR9IHVzZURyb3Bkb3duIGlzU2VhcmNoSW5wdXRIaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzPXt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBJbW11dGFibGUoW10pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J2ZsZXgtbm9uZScgd2lkdGg9ezEyfSBoZWlnaHQ9ezQwfSBjb2xvcj17dGhlbWUuY29sb3JzLmRhcmtbNDAwXX0gaWNvbj17cmVxdWlyZSgnamltdS11aS9saWIvaWNvbnMvbGluay1jb21iaW5lZC5zdmcnKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nbGluaycgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlfSBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnIG9uQ2xpY2s9e3RoaXMuc2hvd1NxbEV4cHJQb3B1cH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgdGV4dC10cnVuY2F0ZScgc3R5bGU9e3sgdGV4dEFsaWduOiAnc3RhcnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Nb3JlQ29uZGl0aW9ucycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX01vcmVDb25kaXRpb25zIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiYgPERhdGFTb3VyY2VDb21wb25lbnQgdXNlRGF0YVNvdXJjZT17dGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZX0+eyhkcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFNxbEV4cHJlc3Npb25CdWlsZGVyUG9wdXBcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkc30gbW9kZT17U3FsRXhwcmVzc2lvbk1vZGUuU2ltcGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc1NxbEV4cHJTaG93fSB0b2dnbGU9e3RoaXMudG9nZ2xlU3FsRXhwclBvcHVwfVxyXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb249e3RoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmp9IG9uQ2hhbmdlPXsoc3FsRXhwck9iaikgPT4geyB0aGlzLm9uU3FsRXhwckJ1aWxkZXJDaGFuZ2Uoc3FsRXhwck9iaikgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIDwvRGF0YVNvdXJjZUNvbXBvbmVudD59XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NxbC1leHByLWRpc3BsYXknPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmogJiYgYWN0aW9uVXNlRGF0YVNvdXJjZUluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTCh0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2UpLmRpc3BsYXlTUUxcclxuICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1NldEV4cHJlc3Npb24nLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9TZXRFeHByZXNzaW9uIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoX0ZpbHRlckFjdGlvblNldHRpbmcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==