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
/*!*********************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/flash-action-setting.tsx ***!
  \*********************************************************************************************/
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
class _FlashActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
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
                //if (messageWidgetJson && messageWidgetJson.useDataSources && messageWidgetJson.useDataSources[0] && messageWidgetJson.useDataSources.length === 1) {
                const useDataSources = _action_utils__WEBPACK_IMPORTED_MODULE_8__.getDsByWidgetId(messageWidgetId, this.props.messageType);
                if ((useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0]) && (useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources.length) === 1) {
                    const dsJson = config.dataSources[useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId];
                    if (dsJson && ((dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebMap) || (dsJson.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.ArcGISDataSourceTypes.WebScene))) {
                        messageUseDataSource = null;
                    }
                    else {
                        messageUseDataSource = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                            dataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataSourceId,
                            mainDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].mainDataSourceId,
                            dataViewId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].dataViewId,
                            rootDataSourceId: useDataSources === null || useDataSources === void 0 ? void 0 : useDataSources[0].rootDataSourceId
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
                            dataViewId: actionWidgetJson.useDataSources[0].dataViewId,
                            mainDataSourceId: actionWidgetJson.useDataSources[0].mainDataSourceId,
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
_FlashActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        messageUseDataSource: null,
        actionUseDataSource: null,
        sqlExprObj: null,
        enabledDataRelationShip: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_FlashActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJMO0FBQ3hJO0FBRTVDLFNBQVMsc0JBQXNCLENBQUUsR0FBVyxFQUFFLFdBQXdCO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxPQUFPLGdCQUFnQixLQUFLLHdFQUFpQztBQUMvRCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ2xGLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxHQUFHLENBQUM7SUFDNUMsTUFBTSxlQUFlLEdBQUcsZ0JBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLDBDQUFFLGVBQWU7SUFDN0QsSUFBSSxnQkFBZ0IsR0FBRyxxRUFBOEI7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFO1lBQ25HLGdCQUFnQixHQUFHLHNCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQjtTQUM1RDtJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FBQ3pC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QUFFLGNBQWMsRUFBRSw2RkFBdUMsRUFBRSxDQUFDLENBQ3pILENBQ0ssQ0FDRSxDQUNmLENBQ1A7SUFDSCxDQUFDOztBQXZkTSxnQ0FBWSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSxvREFBUyxDQUFDO1FBQ2hCLG9CQUFvQixFQUFFLElBQUk7UUFDMUIsbUJBQW1CLEVBQUUsSUFBSTtRQUN6QixVQUFVLEVBQUUsSUFBSTtRQUNoQix1QkFBdUIsRUFBRSxJQUFJO0tBQzlCLENBQUM7Q0FDSDtBQW1kSCxpRUFBZSxxREFBUyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtdWkvbGliL2ljb25zL2xpbmstY29tYmluZWQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2FjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zcWwtZXhwcmVzc2lvbi1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMiA0MFxcXCI+PHBhdGggZmlsbD1cXFwiI0E4QThBOFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNiAzMHYxMEgwdi0xaDV2LTloMVpNMy4xNjIgMTguNTgyYS41LjUgMCAwIDEgMCAuNzFsLTEuNDE2IDEuNDIxYTIuNDk3IDIuNDk3IDAgMCAwLS4wMDMgMy41NDVjLjk4My45ODMgMi41Ni45OCAzLjU0NC0uMDAzbDEuNDItMS40MmEuNTA0LjUwNCAwIDAgMSAuNzEyLjcxM0w2IDI0Ljk2OGEzLjUwMiAzLjUwMiAwIDAgMS00Ljk2NyAwIDMuNTAxIDMuNTAxIDAgMCAxIDAtNC45NjdsMS40MTYtMS40MjJhLjUwNC41MDQgMCAwIDEgLjcxMy4wMDNabTQuOTY3LS43MWEuNS41IDAgMCAxIDAgLjcxTDQuNTggMjIuMTI5YS41MDQuNTA0IDAgMCAxLS43MTMtLjcxMmwzLjU0OC0zLjU0OGEuNTA0LjUwNCAwIDAgMSAuNzEzLjAwM1ptMi44MzgtMi44MzhhMy41MDEgMy41MDEgMCAwIDEgMCA0Ljk2N2wtMS40MiAxLjQxOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMS40MjMtMS40MTdhMi41IDIuNSAwIDAgMCAwLTMuNTQ3IDIuNTAyIDIuNTAyIDAgMCAwLTMuNTQ3IDBsLTEuNDIgMS40MTlhLjUwNC41MDQgMCAwIDEtLjcxMy0uNzEybDEuNDItMS40MmEzLjUwNiAzLjUwNiAwIDAgMSA0Ljk3LjAwM1pNNiAwdjEwSDVWMUgwVjBoNlpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEltbXV0YWJsZUFycmF5LCB0eXBlIElNV2lkZ2V0SnNvbiB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VPdXRwdXREYXRhU291cmNlcyAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhID09PSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogTWVzc2FnZUNhcnJ5RGF0YSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHB1Ymxpc2hNZXNzYWdlcyA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5wdWJsaXNoTWVzc2FnZXNcclxuICBsZXQgbWVzc2FnZUNhcnJ5RGF0YSA9IE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZVxyXG4gIHB1Ymxpc2hNZXNzYWdlcz8uZm9yRWFjaChlbCA9PiB7XHJcbiAgICBjb25zdCBwdWJsaXNoTWVzc2FnZVByb3BlcnR5ID0gZWwgYXMgYW55XHJcbiAgICBpZiAocHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YSAmJiBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlVHlwZSA9PT0gbWVzc2FnZVR5cGUpIHtcclxuICAgICAgbWVzc2FnZUNhcnJ5RGF0YSA9IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGFcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBtZXNzYWdlQ2FycnlEYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uQ29uZmlnIHtcclxuICB1c2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgdXNlRGF0YVNvdXJjZXM/OiBVc2VEYXRhU291cmNlW11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrT3V0QWN0aW9uQ29uZmlnIChhY3Rpb25Db25maWc6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8QWN0aW9uQ29uZmlnPiwgbWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCBtZXNzYWdlV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuXHJcbiAgbGV0IHVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBjb25zdCB1c2VEYXRhU291cmNlczogSU1Vc2VEYXRhU291cmNlW10gPSBbXVxyXG4gIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gICAgLy9pZiAobWVzc2FnZVdpZGdldEpzb24gJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5mb3JFYWNoKCh1c2VEUywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRFMuZGF0YVNvdXJjZUlkXVxyXG4gICAgICAgIGxldCB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiB1c2VEUy5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHVzZURTLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHVzZURTLnJvb3REYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURTLmRhdGFWaWV3SWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBpZiAoIXVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZSA9IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlLCBtZXNzYWdlVHlwZSlcclxuICAgIGlmIChhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLmZvckVhY2godXNlRFMgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBVc2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgdXNlRFMsIG1lc3NhZ2VUeXBlKVxyXG4gICAgICAgIHRlbXBVc2VEYXRhU291cmNlICYmIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tPdXRVc2VEYXRhU291cmNlIChtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgb2xkVXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IHdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgbGV0IGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGxldCBpc01hcERzID0gZmFsc2VcclxuXHJcbiAgY29uc3QgZHNJZCA9IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0gJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gIGlmICghZHNJZCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1tkc0lkXVxyXG4gIGlmIChkc0pzb24gJiYgKChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCkgfHwgKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpKSkge1xyXG4gICAgaXNNYXBEcyA9IHRydWVcclxuICB9XHJcblxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuXHJcbiAgaWYgKGlzTWFwRHMpIHtcclxuICAgIC8vIHdlYm1hcCBvciB3ZWJzY2VuZSBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGZlYXR1cmVsYXllciBkc1xyXG4gICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/Lm1haW5EYXRhU291cmNlSWQgOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGluaXRVc2VEYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VEYXRhU291cmNlSW5mbyAod2lkZ2V0SWQ6IHN0cmluZywgdXNlRGF0YVNvdXJjZTogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPiwgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZS5JbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgbGV0IGlzUmVhZE9ubHkgPSBmYWxzZVxyXG4gIGNvbnN0IGRzUm9vdElkcyA9IGdldERzUm9vdElkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXHJcbiAgLy9pZiAoZHNSb290SWRzICYmIGRzUm9vdElkcy5sZW5ndGggPT09IDAgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgLy9pZiAoIWRzUm9vdElkcyAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICBpZiAoIWRzUm9vdElkcyB8fCBkc1Jvb3RJZHM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgaXNSZWFkT25seSA9IGNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGUsIGRzUm9vdElkcylcclxuICB9XHJcblxyXG4gIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IGdldERzSWRzQnlXaWRnZXRJZCh3aWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHtcclxuICAgIGlzUmVhZE9ubHk6IGlzUmVhZE9ubHksXHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzIHx8IFtdLFxyXG4gICAgZnJvbVJvb3REc0lkczogZHNSb290SWRzLFxyXG4gICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcclxuICB9XHJcblxyXG4gIHJldHVybiBkc1NlbGVjdG9yU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IG91dHB1dERhdGFTb3VyY2VzID0gaW5pdE91dHB1dERhdGFTb3VyY2VzKHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzKSB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3QgYm90aERhdGFzb3VyY2UgPSB1c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KS5jb25jYXQob3V0cHV0RGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkpXHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURhdGFTb3VyY2VzXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBJbW11dGFibGUoYm90aERhdGFzb3VyY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE91dHB1dERhdGFTb3VyY2VzIChvdXRwdXREYXRhU291cmNlcyk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgIHJvb3REYXRhU291cmNlSWQ6IG51bGxcclxuICAgIH1cclxuICB9KSA/PyBbXVxyXG4gIHJldHVybiBJbW11dGFibGUoZHMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzT25seU9uZURzICh3aWRnZXRKc29uOiBJTVdpZGdldEpzb24sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgZHNSb290SWRzOiBJbW11dGFibGVBcnJheTxzdHJpbmc+KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdpZGdldEpzb24/LmlkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBvdXRwdXREcyA9IHdpZGdldEpzb24/Lm91dHB1dERhdGFTb3VyY2VzIHx8IFtdXHJcbiAgY29uc3QgdXNlRHMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBbXVxyXG4gIGlmIChkc1Jvb3RJZHMpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuQm90aERhdGFTb3VyY2U6XHJcbiAgICAgIGNvbnN0IGRzTGVuZ3RoID0gb3V0cHV0RHMubGVuZ3RoICsgdXNlRHMubGVuZ3RoXHJcbiAgICAgIHJldHVybiBkc0xlbmd0aCA9PT0gMVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBwQ29uZmlnICgpIHtcclxuICByZXR1cm4gd2luZG93LmppbXVDb25maWcuaXNCdWlsZGVyID8gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBDb25maWdcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3Qgcm9vdElkcyA9IFtdXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBpZiAoZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfHwgZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkgeyAvLyBpcyByb290IGRzXHJcbiAgICAgIHJvb3RJZHMucHVzaCh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gcm9vdElkcy5sZW5ndGggPiAwID8gSW1tdXRhYmxlKHJvb3RJZHMpIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzSWRzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIHJldHVybiBJbW11dGFibGUobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLm1hcCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgbGV0IHJlc3VsdERzXHJcbiAgICBpZiAoZHMgJiYgZHMuaXNEYXRhVmlldykge1xyXG4gICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICByZXN1bHREcyA9IGRzPy5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHREcyA9IGRzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0RHM/LmlkXHJcbiAgfSkgPz8gW10pXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNvdXJjZUxhYmVsOiAnU291cmNlJyxcclxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXHJcbiAgc2VsZWN0VGhpcmRNYXBIaW50OiAnUGxlYXNlIHVuc2VsZWN0IGEgbWFwIG9yIHNjZW5lIGJlZm9yZSB5b3UgY2hvb3NlIGFub3RoZXIgb25lLiBVcCB0byB0d28gYXJlIHN1cHBvcnRlZC4nLFxyXG4gIGluaXRpYWxNYXA6ICdJbml0aWFsIG1hcCcsXHJcbiAgaW5pdGlhbE1hcFZpZXc6ICdJbml0aWFsIHZpZXcnLFxyXG4gIHNlbGVjdE1hcDogJ1NlbGVjdCBtYXAnLFxyXG4gIHNldE1hcFZpZXc6ICdNb2RpZnkgaW5pdGlhbCB2aWV3JyxcclxuICBkZWZhdWx0VmlldzogJ0RlZmF1bHQnLFxyXG4gIGRlZmF1bHRWaWV3VGlwOiAnSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFwIGluaGVyaXRlZCBmcm9tIHRoZSB3ZWIgbWFwIG9yIHdlYiBzY2VuZScsXHJcbiAgY3VzdG9tVmlldzogJ0N1c3RvbScsXHJcbiAgY3VzdG9tVmlld1RpcDogJ0NyZWF0ZSBhIG5ldyBwb3NpdGlvbiBvZiB0aGUgbWFwJyxcclxuICBjdXN0b21WaWV3U2V0OiAnTW9kaWZ5JyxcclxuICB0b29sTGFiZWw6ICdUb29scycsXHJcbiAgb3B0aW9uczogJ09wdGlvbnMnLFxyXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXHJcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcclxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcclxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxyXG4gIHNjZW5lUXVhbGl0eU1vZGU6ICdTY2VuZSBxdWFsaXR5IG1vZGUnLFxyXG4gIGNob29zZUFMYXllcjogJ1NlbGVjdCBhIGxheWVyJyxcclxuICBkYXRhUmVsYXRpb25TaGlwOiAnRGF0YSByZWxhdGlvbnNoaXAnLFxyXG4gIG1hcE5vbmU6ICdub25lJyxcclxuICBtZXNzYWdlRmllbGQ6ICdNZXNzYWdlIGZpZWxkJyxcclxuICBtYXBMYXlvdXQ6ICdUb29scyBsYXlvdXQnLFxyXG4gIG1hcExheW91dF9MYXJnZUFuZE1lZGl1bTogJ0xhcmdlIGFuZCBtZWRpdW0gc2l6ZScsXHJcbiAgbWFwTGF5b3V0X1NtYWxsOiAnU21hbGwgc2l6ZScsXHJcblxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXI6ICdUcmlnZ2VyIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9TZXREYXRhOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcclxuICBtYXBBY3Rpb25fQ29uZGl0aW9uczogJ0NvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlOiAnVHJpZ2dlciAvIGFjdGlvbiBjb25uZWN0aW9uJyxcclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTm9uZTogJ25vbmUnLFxyXG4gIG1hcEFjdGlvbl9FcXVhbHM6ICdlcXVhbHMnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX01vcmVDb25kaXRpb25zOiAnTW9yZSBjb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbjogJ1BsZWFzZSBzZXQgeW91ciBleHByZXNzaW9uIGZpcnN0LicsXHJcbiAgbWFwQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BdXRvQmluZDogJ0F1dG8gYm91bmQuJyxcclxuICBtYXBBY3Rpb25fTm9MYXllcjogJ05vIGRhdGEuJyxcclxuICBtYXBBY3Rpb25fUG9pbnQ6ICdQb2ludCcsXHJcbiAgbWFwQWN0aW9uX1BvbHlsaW5lOiAnUG9seWxpbmUnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5Z29uOiAnUG9seWdvbicsXHJcbiAgbWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHM6ICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyxcclxuICBtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9sczogJ1VzZSBjdXN0b20gc3ltYm9scycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZTogJ1pvb20gc2NhbGUnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWM6ICdBdXRvbWF0aWMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9DdXN0b206ICdDdXN0b20nLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGU6ICdUeXBlIGEgc2NhbGUnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NxbF9leHByZXNzaW9uX2J1aWxkZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBjc3MsIGpzeCwgdHlwZSBBY3Rpb25TZXR0aW5nUHJvcHMsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgdHlwZSBJbW11dGFibGVPYmplY3QsIHR5cGUgRGF0YVNvdXJjZSxcclxuICB0eXBlIElNVGhlbWVWYXJpYWJsZXMsIHBvbGlzaGVkLCBnZXRBcHBTdG9yZSwgSW1tdXRhYmxlLFxyXG4gIHR5cGUgVXNlRGF0YVNvdXJjZSwgRGF0YVNvdXJjZUNvbXBvbmVudCwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIHR5cGUgSU1GaWVsZFNjaGVtYSwgdHlwZSBJTVNxbEV4cHJlc3Npb24sXHJcbiAgZGF0YVNvdXJjZVV0aWxzLCBEYXRhU291cmNlTWFuYWdlciwgTWVzc2FnZVR5cGUsIFNxbEV4cHJlc3Npb25Nb2RlLCB0eXBlIEltbXV0YWJsZUFycmF5LCBBbGxEYXRhU291cmNlVHlwZXNcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgU3dpdGNoLCBDb2xsYXBzZSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEZpZWxkU2VsZWN0b3IsIERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InXHJcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xyXG5cclxuaW1wb3J0IHsgU3FsRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc3FsLWV4cHJlc3Npb24tYnVpbGRlcidcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25VdGlscyBmcm9tICcuL2FjdGlvbi11dGlscydcclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXHJcbiAgY3VycmVudExheWVyVHlwZTogJ3RyaWdnZXInIHwgJ2FjdGlvbidcclxuICBpc1NxbEV4cHJTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcge1xyXG4gIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgYWN0aW9uVXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHNxbEV4cHJPYmo/OiBJTVNxbEV4cHJlc3Npb25cclxuXHJcbiAgZW5hYmxlZERhdGFSZWxhdGlvblNoaXA/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuXHJcbmNvbnN0IERTU2VsZWN0b3JUeXBlcyA9IEltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgQWxsRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXJdKVxyXG5cclxuY2xhc3MgX0ZsYXNoQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCBibGFjaydcclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRMYXllclR5cGU6IG51bGwsXHJcbiAgICAgIGlzU3FsRXhwclNob3c6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbnVsbCxcclxuICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogbnVsbCxcclxuICAgICAgc3FsRXhwck9iajogbnVsbCxcclxuICAgICAgZW5hYmxlZERhdGFSZWxhdGlvblNoaXA6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpbml0T3V0cHV0RGF0YVNvdXJjZXMgPSAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiA9PiB7XHJcbiAgICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9KSA/PyBbXVxyXG4gICAgcmV0dXJuIEltbXV0YWJsZShkcylcclxuICB9XHJcblxyXG4gIGdldEluaXRDb25maWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SWQgPSB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZFxyXG4gICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyLmFwcENvbmZpZ1xyXG5cclxuICAgIGxldCBtZXNzYWdlVXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgbGV0IGFjdGlvblVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuXHJcbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKSB7XHJcbiAgICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IGFjdGlvblV0aWxzLmdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcz8uWzBdICYmIHVzZURhdGFTb3VyY2VzPy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRGF0YVNvdXJjZXM/LlswXS5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbldpZGdldElkID0gdGhpcy5wcm9wcy53aWRnZXRJZFxyXG4gICAgY29uc3QgYWN0aW9uV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW2FjdGlvbldpZGdldElkXVxyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBpZiAoYWN0aW9uV2lkZ2V0SnNvbiAmJiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0gJiYgYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhVmlld0lkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGlvblVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBjb25zdCBuZXdBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSBhY3Rpb25Vc2VEYXRhU291cmNlICYmIGFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBpZiAobmV3QWN0aW9uVXNlRGF0YVNvdXJjZUlkICE9PSBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbWVzc2FnZVVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogYWN0aW9uVXNlRGF0YVNvdXJjZSxcclxuICAgICAgICBzcWxFeHByT2JqOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2U6IG1lc3NhZ2VVc2VEYXRhU291cmNlLFxyXG4gICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2U6IGFjdGlvblVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgc3FsRXhwck9iajogdGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9ialxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlID0gKHdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWdcclxuICAgIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIGxldCBpc01hcERzID0gZmFsc2VcclxuXHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKHdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG4gICAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzWzBdICYmIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgaWYgKCFkc0lkKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgaXNNYXBEcyA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNNYXBEcykge1xyXG4gICAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgICBpZiAodXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZlYXR1cmVsYXllciBkc1xyXG4gICAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IHVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogdXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXM/Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGNvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkuc2V0KCdzcWxFeHByT2JqJywgaW5pdENvbmZpZy5zcWxFeHByT2JqKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN0eWxlICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgxMCl9ICR7cG9saXNoZWQucmVtKDE2KX0gJHtwb2xpc2hlZC5yZW0oMCl9ICR7cG9saXNoZWQucmVtKDE2KX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcWwtZXhwci1kaXNwbGF5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wYWxldHRlLmRhcmtbMzAwXX07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5saWdodFs1MDBdfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlbGF0ZS1wYW5lbC1sZWZ0IHtcclxuICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgIC5hY3Rpb24tc2VsZWN0LWNob29zZXIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogJHtwb2xpc2hlZC5yZW0oMTIpfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllckNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkKHVzZURhdGFTb3VyY2VzWzBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvclRyaWdnZXJMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVBY3Rpb25MYXllckNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICBpZiAodXNlRGF0YVNvdXJjZXMgJiYgdXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmhhbmRsZUFjdGlvbkxheWVyU2VsZWN0ZWQodXNlRGF0YVNvdXJjZXNbMF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlVHJpZ2dlckxheWVyU2VsZWN0ZWQgPSAoY3VycmVudFNlbGVjdGVkRHM6IFVzZURhdGFTb3VyY2UpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZUFjdGlvbkxheWVyU2VsZWN0ZWQgPSAoY3VycmVudFNlbGVjdGVkRHM6IFVzZURhdGFTb3VyY2UpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdhY3Rpb25Vc2VEYXRhU291cmNlJywgY3VycmVudFNlbGVjdGVkRHMpLnNldCgnc3FsRXhwck9iaicsIG51bGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlTGF5ZXJGb3JUcmlnZ2VyTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnbWVzc2FnZVVzZURhdGFTb3VyY2UnLCBudWxsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUxheWVyRm9yQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIG51bGwpLnNldCgnc3FsRXhwck9iaicsIG51bGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd1NxbEV4cHJQb3B1cCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NxbEV4cHJTaG93OiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICB0b2dnbGVTcWxFeHByUG9wdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogIXRoaXMuc3RhdGUuaXNTcWxFeHByU2hvdyB9KVxyXG4gIH1cclxuXHJcbiAgb25TcWxFeHByQnVpbGRlckNoYW5nZSA9IChzcWxFeHByT2JqOiBJTVNxbEV4cHJlc3Npb24pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzcWxFeHByT2JqJywgc3FsRXhwck9iailcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbk1lc3NhZ2VGaWVsZFNlbGVjdGVkID0gKGFsbFNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnbWVzc2FnZVVzZURhdGFTb3VyY2UnLCB7XHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICBkYXRhVmlld0lkOiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkLFxyXG4gICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQsXHJcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uQWN0aW9uRmllbGRTZWxlY3RlZCA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2FjdGlvblVzZURhdGFTb3VyY2UnLCB7XHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgZGF0YVZpZXdJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5kYXRhVmlld0lkLFxyXG4gICAgICAgIHJvb3REYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICBmaWVsZHM6IGFsbFNlbGVjdGVkRmllbGRzLm1hcChmID0+IGYuamltdU5hbWUpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3dpY3RoRW5hYmxlZERhdGFSZWxhdGlvblNoaXAgPSAoY2hlY2tlZCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2VuYWJsZWREYXRhUmVsYXRpb25TaGlwJywgY2hlY2tlZClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjaGVja1RyaWdlckxheWVySXNTYW1lVG9BY3Rpb25MYXllciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkID09PSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgPSAod0lkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICAgIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcclxuICAgICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG4gIH1cclxuXHJcbiAgZ2V0RHNJZHNCeVdpZGdldElkID0gKHdJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IGFjdGlvblV0aWxzLmdldERzQnlXaWRnZXRJZCh3SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICByZXR1cm4gSW1tdXRhYmxlKHVzZURhdGFTb3VyY2VzPy5tYXAoKHVzZURTOiBJbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHVzZURTPy5tYWluRGF0YVNvdXJjZUlkKSA/PyBbXSlcclxuICB9XHJcblxyXG4gIGdldERzU2VsZWN0b3JTb3VyY2VEYXRhID0gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZ1xyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gICAgY29uc3QgZHNSb290SWRzID0gdGhpcy5nZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gICAgY29uc3QgaXNSZWFkT25seSA9IGFjdGlvblV0aWxzLmNoZWNrSXNPbmx5T25lRHMod2lkZ2V0SnNvbiwgdGhpcy5wcm9wcy5tZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG5cclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gKHVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXHJcbiAgICAgID8gSW1tdXRhYmxlKFt1c2VEYXRhU291cmNlXSlcclxuICAgICAgOiBJbW11dGFibGUoW10pXHJcblxyXG4gICAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogdGhpcy5nZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQpXHJcbiAgICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxyXG4gICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMsXHJcbiAgICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcclxuICAgICAgZnJvbURzSWRzOiBmcm9tRHNJZHNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc0Rpc2FibGVEYXRhVmlldyA9ICh3aWRnZXRJZDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICAgIGlmICh3aWRnZXRKc29uKSB7XHJcbiAgICAgIGNvbnN0IHdpZGdldExhYmVsID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LmxhYmVsXHJcbiAgICAgIGlmICh3aWRnZXRMYWJlbCA9PT0gJ01hcCcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2UgPSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmXHJcbiAgICAgIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZSh0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZClcclxuXHJcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEgPSB0aGlzLmdldERzU2VsZWN0b3JTb3VyY2VEYXRhKHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSlcclxuICAgIGNvbnN0IGFjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhID0gdGhpcy5nZXREc1NlbGVjdG9yU291cmNlRGF0YSh0aGlzLnByb3BzLndpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY3NzPXt0aGlzLmdldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfT5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVHJpZ2dlckxheWVyJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVHJpZ2dlckxheWVyIH0pfT5cclxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgdHlwZXM9e0RTU2VsZWN0b3JUeXBlc31cclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgZnJvbVJvb3REc0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Sb290RHNJZHN9XHJcbiAgICAgICAgICAgIGZyb21Ec0lkcz17dHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Ec0lkc31cclxuICAgICAgICAgICAgY2xvc2VEYXRhU291cmNlTGlzdE9uQ2hhbmdlXHJcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IHRyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgICAgICBkaXNhYmxlRGF0YVNvdXJjZUxpc3Q9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxyXG4gICAgICAgICAgICBoaWRlVHlwZURyb3Bkb3duXHJcbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRyaWdnZXJMYXllckNoYW5nZX1cclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMubWVzc2FnZVdpZGdldElkfVxyXG4gICAgICAgICAgICBkaXNhYmxlRGF0YVZpZXdcclxuICAgICAgICAgICAgaGlkZURhdGFWaWV3PXt0aGlzLmNoZWNrSXNEaXNhYmxlRGF0YVZpZXcodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQpfVxyXG4gICAgICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQWN0aW9uTGF5ZXIgfSl9PlxyXG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxyXG4gICAgICAgICAgICB0eXBlcz17RFNTZWxlY3RvclR5cGVzfVxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgIGZyb21Sb290RHNJZHM9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Sb290RHNJZHN9XHJcbiAgICAgICAgICAgIGZyb21Ec0lkcz17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEuZnJvbURzSWRzfVxyXG4gICAgICAgICAgICBjbG9zZURhdGFTb3VyY2VMaXN0T25DaGFuZ2VcclxuICAgICAgICAgICAgZGlzYWJsZVJlbW92ZT17KCkgPT4gYWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cclxuICAgICAgICAgICAgZGlzYWJsZURhdGFTb3VyY2VMaXN0PXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5pc1JlYWRPbmx5fVxyXG4gICAgICAgICAgICBoaWRlQWRkRGF0YUJ1dHRvblxyXG4gICAgICAgICAgICBoaWRlVHlwZURyb3Bkb3duXHJcbiAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdGlvbkxheWVyQ2hhbmdlfVxyXG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH1cclxuICAgICAgICAgICAgaGlkZURhdGFWaWV3XHJcbiAgICAgICAgICAgIGVuYWJsZVRvU2VsZWN0T3V0cHV0RHNGcm9tU2VsZj17dHJ1ZX1cclxuICAgICAgICAgIC8vIG9uU2VsZWN0PXt0aGlzLmhhbmRsZUFjdGlvbkxheWVyU2VsZWN0ZWR9XHJcbiAgICAgICAgICAvLyBvblJlbW92ZT17dGhpcy5oYW5kbGVSZW1vdmVMYXllckZvckFjdGlvbkxheWVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmXHJcbiAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQ29uZGl0aW9ucycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0NvbmRpdGlvbnMgfSl9PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9SZWxhdGVNZXNzYWdlJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUmVsYXRlTWVzc2FnZSB9KX0+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcH0gb25DaGFuZ2U9e2V2dCA9PiB7IHRoaXMuc3dpY3RoRW5hYmxlZERhdGFSZWxhdGlvblNoaXAoZXZ0LnRhcmdldC5jaGVja2VkKSB9fSAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e3RoaXMucHJvcHMuY29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwfSBjbGFzc05hbWU9J3ctMTAwJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLmNoZWNrVHJpZ2VyTGF5ZXJJc1NhbWVUb0FjdGlvbkxheWVyKCkgJiZcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGJvcmRlciBwLTEgbXItMic+e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fQXV0b0JpbmQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9BdXRvQmluZCB9KX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuY2hlY2tUcmlnZXJMYXllcklzU2FtZVRvQWN0aW9uTGF5ZXIoKSAmJiA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gcmVsYXRlLXBhbmVsLWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShbdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1lc3NhZ2VGaWVsZFNlbGVjdGVkfSB1c2VEcm9wZG93biBpc1NlYXJjaElucHV0SGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogSW1tdXRhYmxlKFtdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTAwIGFjdGlvbi1zZWxlY3QtY2hvb3NlcidcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e0ltbXV0YWJsZShbdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZT8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KV0pfSBpc0RhdGFTb3VyY2VEcm9wRG93bkhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BY3Rpb25GaWVsZFNlbGVjdGVkfSB1c2VEcm9wZG93biBpc1NlYXJjaElucHV0SGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpZWxkcz17dGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogSW1tdXRhYmxlKFtdKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdmbGV4LW5vbmUnIHdpZHRoPXsxMn0gaGVpZ2h0PXs0MH0gY29sb3I9e3RoZW1lLmNvbG9ycy5kYXJrWzQwMF19IGljb249e3JlcXVpcmUoJ2ppbXUtdWkvbGliL2ljb25zL2xpbmstY29tYmluZWQuc3ZnJyl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J2xpbmsnIGRpc2FibGVkPXshdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZX0gY2xhc3NOYW1lPSd3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0JyBvbkNsaWNrPXt0aGlzLnNob3dTcWxFeHByUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIHRleHQtdHJ1bmNhdGUnIHN0eWxlPXt7IHRleHRBbGlnbjogJ3N0YXJ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9ucyB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIDxEYXRhU291cmNlQ29tcG9uZW50IHVzZURhdGFTb3VyY2U9e3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9PnsoZHMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTcWxFeHByZXNzaW9uQnVpbGRlclBvcHVwXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZHN9IG1vZGU9e1NxbEV4cHJlc3Npb25Nb2RlLlNpbXBsZX1cclxuICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNTcWxFeHByU2hvd30gdG9nZ2xlPXt0aGlzLnRvZ2dsZVNxbEV4cHJQb3B1cH1cclxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uPXt0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqfSBvbkNoYW5nZT17KHNxbEV4cHJPYmopID0+IHsgdGhpcy5vblNxbEV4cHJCdWlsZGVyQ2hhbmdlKHNxbEV4cHJPYmopIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA8L0RhdGFTb3VyY2VDb21wb25lbnQ+fVxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcWwtZXhwci1kaXNwbGF5Jz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5zcWxFeHByT2JqICYmIGFjdGlvblVzZURhdGFTb3VyY2VJbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgICA/IGRhdGFTb3VyY2VVdGlscy5nZXRBcmNHSVNTUUwodGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9iaiwgYWN0aW9uVXNlRGF0YVNvdXJjZUluc3RhbmNlKS5kaXNwbGF5U1FMXHJcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9TZXRFeHByZXNzaW9uJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fU2V0RXhwcmVzc2lvbiB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKF9GbGFzaEFjdGlvblNldHRpbmcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==