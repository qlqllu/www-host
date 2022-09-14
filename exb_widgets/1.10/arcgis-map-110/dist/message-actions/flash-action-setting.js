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

module.exports = "<svg viewBox=\"0 0 12 40\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 30v10H0v-1h5v-9h1ZM3.162 18.582a.5.5 0 0 1 0 .71l-1.416 1.421a2.497 2.497 0 0 0-.003 3.545c.983.983 2.56.98 3.544-.003l1.42-1.42a.504.504 0 0 1 .712.713L6 24.968a3.502 3.502 0 0 1-4.967 0 3.501 3.501 0 0 1 0-4.967l1.416-1.422a.504.504 0 0 1 .713.003Zm4.967-.71a.5.5 0 0 1 0 .71L4.58 22.129a.504.504 0 0 1-.713-.712l3.548-3.548a.504.504 0 0 1 .713.003Zm2.838-2.838a3.501 3.501 0 0 1 0 4.967l-1.42 1.419a.504.504 0 0 1-.713-.712l1.423-1.417a2.5 2.5 0 0 0 0-3.547 2.502 2.502 0 0 0-3.547 0l-1.42 1.419a.504.504 0 0 1-.713-.712l1.42-1.42a3.506 3.506 0 0 1 4.97.003ZM6 0v10H5V1H0V0h6Z\" fill=\"#A8A8A8\" fill-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts ***!
  \**********************************************************************************/
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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/*!*******************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/flash-action-setting.tsx ***!
  \*******************************************************************************************/
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
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtLO0FBQy9HO0FBRTVDLFNBQVMsc0JBQXNCLENBQUUsR0FBVyxFQUFFLFdBQXdCO0lBQzNFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxPQUFPLGdCQUFnQixLQUFLLHdFQUFpQztBQUMvRCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ2xGLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxHQUFHLENBQUM7SUFDNUMsTUFBTSxlQUFlLEdBQUcsZ0JBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLDBDQUFFLGVBQWU7SUFDN0QsSUFBSSxnQkFBZ0IsR0FBRyxxRUFBOEI7SUFDckQsZUFBZSxhQUFmLGVBQWUsdUJBQWYsZUFBZSxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM1QixNQUFNLHNCQUFzQixHQUFHLEVBQVM7UUFDeEMsSUFBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0IsS0FBSSx1QkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxXQUFXLE1BQUssV0FBVyxFQUFFO1lBQ25HLGdCQUFnQixHQUFHLHNCQUFzQixhQUF0QixzQkFBc0IsdUJBQXRCLHNCQUFzQixDQUFFLGdCQUFnQjtTQUM1RDtJQUNILENBQUMsQ0FBQztJQUNGLE9BQU8sZ0JBQWdCO0FB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QUFFLENBQUMsQ0FDekgsQ0FDSyxDQUNFLENBQ2YsQ0FDUDtJQUNILENBQUM7O0FBdmRNLGdDQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsb0JBQW9CLEVBQUUsSUFBSTtRQUMxQixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLHVCQUF1QixFQUFFLElBQUk7S0FDOUIsQ0FBQztDQUNIO0FBbWRILGlFQUFlLHFEQUFTLENBQUMsbUJBQW1CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvbGluay1jb21iaW5lZC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2FjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc3FsLWV4cHJlc3Npb24tYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLXNldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxMiA0MFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNiAzMHYxMEgwdi0xaDV2LTloMVpNMy4xNjIgMTguNTgyYS41LjUgMCAwIDEgMCAuNzFsLTEuNDE2IDEuNDIxYTIuNDk3IDIuNDk3IDAgMCAwLS4wMDMgMy41NDVjLjk4My45ODMgMi41Ni45OCAzLjU0NC0uMDAzbDEuNDItMS40MmEuNTA0LjUwNCAwIDAgMSAuNzEyLjcxM0w2IDI0Ljk2OGEzLjUwMiAzLjUwMiAwIDAgMS00Ljk2NyAwIDMuNTAxIDMuNTAxIDAgMCAxIDAtNC45NjdsMS40MTYtMS40MjJhLjUwNC41MDQgMCAwIDEgLjcxMy4wMDNabTQuOTY3LS43MWEuNS41IDAgMCAxIDAgLjcxTDQuNTggMjIuMTI5YS41MDQuNTA0IDAgMCAxLS43MTMtLjcxMmwzLjU0OC0zLjU0OGEuNTA0LjUwNCAwIDAgMSAuNzEzLjAwM1ptMi44MzgtMi44MzhhMy41MDEgMy41MDEgMCAwIDEgMCA0Ljk2N2wtMS40MiAxLjQxOWEuNTA0LjUwNCAwIDAgMS0uNzEzLS43MTJsMS40MjMtMS40MTdhMi41IDIuNSAwIDAgMCAwLTMuNTQ3IDIuNTAyIDIuNTAyIDAgMCAwLTMuNTQ3IDBsLTEuNDIgMS40MTlhLjUwNC41MDQgMCAwIDEtLjcxMy0uNzEybDEuNDItMS40MmEzLjUwNiAzLjUwNiAwIDAgMSA0Ljk3LjAwM1pNNiAwdjEwSDVWMUgwVjBoNlpcXFwiIGZpbGw9XFxcIiNBOEE4QThcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIE1lc3NhZ2VUeXBlLCBNZXNzYWdlQ2FycnlEYXRhLCBVc2VEYXRhU291cmNlLCBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIEltbXV0YWJsZUFycmF5LCBJTVdpZGdldEpzb24gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlT3V0cHV0RGF0YVNvdXJjZXMgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YSA9PT0gTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IE1lc3NhZ2VDYXJyeURhdGEge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCBwdWJsaXNoTWVzc2FnZXMgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ucHVibGlzaE1lc3NhZ2VzXHJcbiAgbGV0IG1lc3NhZ2VDYXJyeURhdGEgPSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2VcclxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eSA9IGVsIGFzIGFueVxyXG4gICAgaWYgKHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGEgJiYgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja091dEFjdGlvbkNvbmZpZyAoYWN0aW9uQ29uZmlnOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PEFjdGlvbkNvbmZpZz4sIG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcblxyXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXM6IElNVXNlRGF0YVNvdXJjZVtdID0gW11cclxuICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURTLmRhdGFTb3VyY2VJZF1cclxuICAgICAgICBsZXQgdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRFMuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEUy5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEUy5kYXRhVmlld0lkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2UgPSB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSwgbWVzc2FnZVR5cGUpXHJcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURTID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIHVzZURTLCBtZXNzYWdlVHlwZSlcclxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrT3V0VXNlRGF0YVNvdXJjZSAobWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCB3aWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBsZXQgaXNNYXBEcyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuICBpZiAoIWRzSWQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cclxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgIGlzTWFwRHMgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XHJcblxyXG4gIGlmIChpc01hcERzKSB7XHJcbiAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvbGRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gb2xkVXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA6IG9sZFVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcclxuICAgICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcclxuICBjb25zdCBkc1Jvb3RJZHMgPSBnZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gIC8vaWYgKGRzUm9vdElkcyAmJiBkc1Jvb3RJZHMubGVuZ3RoID09PSAwICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgaWYgKCFkc1Jvb3RJZHMgfHwgZHNSb290SWRzPy5sZW5ndGggPT09IDApIHtcclxuICAgIGlzUmVhZE9ubHkgPSBjaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIG1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiBnZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XHJcbiAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcclxuICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcclxuICAgIGZyb21Ec0lkczogZnJvbURzSWRzXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBvdXRwdXREYXRhU291cmNlcyA9IGluaXRPdXRwdXREYXRhU291cmNlcyh3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcykgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IGJvdGhEYXRhc291cmNlID0gdXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkuY29uY2F0KG91dHB1dERhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdXRwdXREYXRhU291cmNlcyAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXHJcbiAgICB9XHJcbiAgfSkgPz8gW11cclxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3aWRnZXRKc29uPy5pZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3Qgb3V0cHV0RHMgPSB3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcyB8fCBbXVxyXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cclxuICBpZiAoZHNSb290SWRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICBjb25zdCBkc0xlbmd0aCA9IG91dHB1dERzLmxlbmd0aCArIHVzZURzLmxlbmd0aFxyXG4gICAgICByZXR1cm4gZHNMZW5ndGggPT09IDFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGxldCByZXN1bHREc1xyXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcclxuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RHMgPSBkc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxyXG4gIH0pID8/IFtdKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzb3VyY2VMYWJlbDogJ1NvdXJjZScsXHJcbiAgc291cmNlRGVzY3JpcHQ6ICdBIHdlYiBtYXAgb3Igd2ViIHNjZW5lLCBvciBhbnkgY29tYmluYXRpb24gb2YgdGhlIHR3by4nLFxyXG4gIGluaXRpYWxNYXA6ICdJbml0aWFsIG1hcCcsXHJcbiAgaW5pdGlhbE1hcFZpZXc6ICdJbml0aWFsIHZpZXcnLFxyXG4gIHNlbGVjdE1hcDogJ1NlbGVjdCBtYXAnLFxyXG4gIHNldE1hcFZpZXc6ICdNb2RpZnkgaW5pdGlhbCB2aWV3JyxcclxuICBkZWZhdWx0VmlldzogJ0RlZmF1bHQnLFxyXG4gIGRlZmF1bHRWaWV3VGlwOiAnSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFwIGluaGVyaXRlZCBmcm9tIHRoZSB3ZWIgbWFwIG9yIHdlYiBzY2VuZScsXHJcbiAgY3VzdG9tVmlldzogJ0N1c3RvbScsXHJcbiAgY3VzdG9tVmlld1RpcDogJ0NyZWF0ZSBhIG5ldyBwb3NpdGlvbiBvZiB0aGUgbWFwJyxcclxuICBjdXN0b21WaWV3U2V0OiAnTW9kaWZ5JyxcclxuICB0b29sTGFiZWw6ICdUb29scycsXHJcbiAgb3B0aW9uczogJ09wdGlvbnMnLFxyXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXHJcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcclxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcclxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxyXG4gIHNjZW5lUXVhbGl0eU1vZGU6ICdTY2VuZSBxdWFsaXR5IG1vZGUnLFxyXG4gIGNob29zZUFMYXllcjogJ1NlbGVjdCBhIGxheWVyJyxcclxuICBkYXRhUmVsYXRpb25TaGlwOiAnRGF0YSByZWxhdGlvbnNoaXAnLFxyXG4gIG1hcE5vbmU6ICdub25lJyxcclxuICBtZXNzYWdlRmllbGQ6ICdNZXNzYWdlIGZpZWxkJyxcclxuICBtYXBMYXlvdXQ6ICdUb29scyBsYXlvdXQnLFxyXG4gIG1hcExheW91dF9MYXJnZUFuZE1lZGl1bTogJ0xhcmdlIGFuZCBtZWRpdW0gc2l6ZScsXHJcbiAgbWFwTGF5b3V0X1NtYWxsOiAnU21hbGwgc2l6ZScsXHJcblxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXI6ICdUcmlnZ2VyIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9TZXREYXRhOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcclxuICBtYXBBY3Rpb25fQ29uZGl0aW9uczogJ0NvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlOiAnVHJpZ2dlciAvIGFjdGlvbiBjb25uZWN0aW9uJyxcclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTm9uZTogJ25vbmUnLFxyXG4gIG1hcEFjdGlvbl9FcXVhbHM6ICdlcXVhbHMnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX01vcmVDb25kaXRpb25zOiAnTW9yZSBjb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbjogJ1BsZWFzZSBzZXQgeW91ciBleHByZXNzaW9uIGZpcnN0LicsXHJcbiAgbWFwQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BdXRvQmluZDogJ0F1dG8gYm91bmQuJyxcclxuICBtYXBBY3Rpb25fTm9MYXllcjogJ05vIGRhdGEuJyxcclxuICBtYXBBY3Rpb25fUG9pbnQ6ICdQb2ludCcsXHJcbiAgbWFwQWN0aW9uX1BvbHlsaW5lOiAnUG9seWxpbmUnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5Z29uOiAnUG9seWdvbicsXHJcbiAgbWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHM6ICdVc2UgbGF5ZXIgZGVmaW5lZCBzeW1ib2xzJyxcclxuICBtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9sczogJ1VzZSBjdXN0b20gc3ltYm9scycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZTogJ1pvb20gc2NhbGUnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWM6ICdBdXRvbWF0aWMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9DdXN0b206ICdDdXN0b20nLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGU6ICdUeXBlIGEgc2NhbGUnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NxbF9leHByZXNzaW9uX2J1aWxkZXJfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBjc3MsIGpzeCwgQWN0aW9uU2V0dGluZ1Byb3BzLCBTZXJpYWxpemVkU3R5bGVzLCBJbW11dGFibGVPYmplY3QsIERhdGFTb3VyY2UsXHJcbiAgVGhlbWVWYXJpYWJsZXMsIHBvbGlzaGVkLCBnZXRBcHBTdG9yZSwgSW1tdXRhYmxlLFxyXG4gIFVzZURhdGFTb3VyY2UsIERhdGFTb3VyY2VDb21wb25lbnQsIElNVXNlRGF0YVNvdXJjZSwgSU1GaWVsZFNjaGVtYSwgSU1TcWxFeHByZXNzaW9uLFxyXG4gIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIE1lc3NhZ2VUeXBlLCBTcWxFeHByZXNzaW9uTW9kZSwgSW1tdXRhYmxlQXJyYXksIEFsbERhdGFTb3VyY2VUeXBlc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBTd2l0Y2gsIENvbGxhcHNlIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgRmllbGRTZWxlY3RvciwgRGF0YVNvdXJjZVNlbGVjdG9yIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvcidcclxuaW1wb3J0IHsgQXJjR0lTRGF0YVNvdXJjZVR5cGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXHJcblxyXG5pbXBvcnQgeyBTcWxFeHByZXNzaW9uQnVpbGRlclBvcHVwIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zcWwtZXhwcmVzc2lvbi1idWlsZGVyJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCAqIGFzIGFjdGlvblV0aWxzIGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIHRoZW1lPzogVGhlbWVWYXJpYWJsZXNcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNTaG93TGF5ZXJMaXN0OiBib29sZWFuXHJcbiAgY3VycmVudExheWVyVHlwZTogJ3RyaWdnZXInIHwgJ2FjdGlvbidcclxuICBpc1NxbEV4cHJTaG93OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcge1xyXG4gIG1lc3NhZ2VVc2VEYXRhU291cmNlOiBVc2VEYXRhU291cmNlXHJcbiAgYWN0aW9uVXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHNxbEV4cHJPYmo/OiBJTVNxbEV4cHJlc3Npb25cclxuXHJcbiAgZW5hYmxlZERhdGFSZWxhdGlvblNoaXA/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuXHJcbmNvbnN0IERTU2VsZWN0b3JUeXBlcyA9IEltbXV0YWJsZShbQWxsRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllciwgQWxsRGF0YVNvdXJjZVR5cGVzLlNjZW5lTGF5ZXJdKVxyXG5cclxuY2xhc3MgX0ZsYXNoQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5tb2RhbFN0eWxlLmJvcmRlclJpZ2h0ID0gJzFweCBzb2xpZCBibGFjaydcclxuICAgIHRoaXMubW9kYWxTdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJ1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzU2hvd0xheWVyTGlzdDogZmFsc2UsXHJcbiAgICAgIGN1cnJlbnRMYXllclR5cGU6IG51bGwsXHJcbiAgICAgIGlzU3FsRXhwclNob3c6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbnVsbCxcclxuICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogbnVsbCxcclxuICAgICAgc3FsRXhwck9iajogbnVsbCxcclxuICAgICAgZW5hYmxlZERhdGFSZWxhdGlvblNoaXA6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpbml0T3V0cHV0RGF0YVNvdXJjZXMgPSAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiA9PiB7XHJcbiAgICBjb25zdCBkcyA9IG91dHB1dERhdGFTb3VyY2VzPy5tYXAoZHNJZCA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGRzSWQsXHJcbiAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9KSA/PyBbXVxyXG4gICAgcmV0dXJuIEltbXV0YWJsZShkcylcclxuICB9XHJcblxyXG4gIGdldEluaXRDb25maWcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0SWQgPSB0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZFxyXG4gICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFN0YXRlSW5CdWlsZGVyLmFwcENvbmZpZ1xyXG5cclxuICAgIGxldCBtZXNzYWdlVXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgbGV0IGFjdGlvblVzZURhdGFTb3VyY2U6IElNVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuXHJcbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKSB7XHJcbiAgICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IGFjdGlvblV0aWxzLmdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMubWVzc2FnZVR5cGUpXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcz8uWzBdICYmIHVzZURhdGFTb3VyY2VzPy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbdXNlRGF0YVNvdXJjZXM/LlswXS5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy5tZXNzYWdlV2lkZ2V0SWQsIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjdGlvbldpZGdldElkID0gdGhpcy5wcm9wcy53aWRnZXRJZFxyXG4gICAgY29uc3QgYWN0aW9uV2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW2FjdGlvbldpZGdldElkXVxyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBpZiAoYWN0aW9uV2lkZ2V0SnNvbiAmJiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0gJiYgYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3Rpb25Vc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogYWN0aW9uV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlc1swXS5kYXRhVmlld0lkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiBhY3Rpb25XaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IGFjdGlvbldpZGdldEpzb24udXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjdGlvblVzZURhdGFTb3VyY2UgPSB0aGlzLmNoZWNrQW5kR2V0SW5pdFVzZURhdGFTb3VyY2UodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBjb25zdCBuZXdBY3Rpb25Vc2VEYXRhU291cmNlSWQgPSBhY3Rpb25Vc2VEYXRhU291cmNlICYmIGFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkXHJcbiAgICBpZiAobmV3QWN0aW9uVXNlRGF0YVNvdXJjZUlkICE9PSBvbGRBY3Rpb25Vc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZXNzYWdlVXNlRGF0YVNvdXJjZTogbWVzc2FnZVVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgYWN0aW9uVXNlRGF0YVNvdXJjZTogYWN0aW9uVXNlRGF0YVNvdXJjZSxcclxuICAgICAgICBzcWxFeHByT2JqOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZVVzZURhdGFTb3VyY2U6IG1lc3NhZ2VVc2VEYXRhU291cmNlLFxyXG4gICAgICAgIGFjdGlvblVzZURhdGFTb3VyY2U6IGFjdGlvblVzZURhdGFTb3VyY2UsXHJcbiAgICAgICAgc3FsRXhwck9iajogdGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9ialxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0FuZEdldEluaXRVc2VEYXRhU291cmNlID0gKHdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWdcclxuICAgIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIGxldCBpc01hcERzID0gZmFsc2VcclxuXHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID0gZHNNLmdldERhdGFTb3VyY2Uob2xkVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpPy5nZXREYXRhU291cmNlSnNvbigpPy5pc091dHB1dEZyb21XaWRnZXRcclxuICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzID0gYWN0aW9uVXRpbHMuZ2V0RHNCeVdpZGdldElkKHdpZGdldElkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG4gICAgY29uc3QgZHNJZCA9IHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzWzBdICYmIHVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgaWYgKCFkc0lkKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgaXNNYXBEcyA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNNYXBEcykge1xyXG4gICAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgICAgbGV0IGlzVXNlT2xkRHMgPSBmYWxzZVxyXG4gICAgICBpZiAodXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXNbaV0uZGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZlYXR1cmVsYXllciBkc1xyXG4gICAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICAgIGlmICh1c2VEYXRhU291cmNlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IG9sZFVzZURhdGFTb3VyY2VJZCA9IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPyBvbGRVc2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkIDogb2xkVXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IHVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogdXNlRGF0YVNvdXJjZXNbaV0/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodXNlRGF0YVNvdXJjZXM/Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEYXRhU291cmNlcz8uWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHVzZURhdGFTb3VyY2VzPy5bMF0uZGF0YVZpZXdJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRGF0YVNvdXJjZXM/LlswXS5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGNvbnN0IGluaXRDb25maWcgPSB0aGlzLmdldEluaXRDb25maWcoKVxyXG5cclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdtZXNzYWdlVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGluaXRDb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkuc2V0KCdzcWxFeHByT2JqJywgaW5pdENvbmZpZy5zcWxFeHByT2JqKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFN0eWxlICh0aGVtZTogVGhlbWVWYXJpYWJsZXMpOiBTZXJpYWxpemVkU3R5bGVzIHtcclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgIC5zZXR0aW5nLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogJHtwb2xpc2hlZC5yZW0oMTApfSAke3BvbGlzaGVkLnJlbSgxNil9ICR7cG9saXNoZWQucmVtKDApfSAke3BvbGlzaGVkLnJlbSgxNil9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGVJY29uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGVJY29uOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3FsLWV4cHItZGlzcGxheSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMucGFsZXR0ZS5kYXJrWzMwMF19O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnBhbGV0dGUubGlnaHRbNTAwXX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZWxhdGUtcGFuZWwtbGVmdCB7XHJcbiAgICAgICAgZmxleDogYXV0bztcclxuICAgICAgICAuYWN0aW9uLXNlbGVjdC1jaG9vc2VyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cG9saXNoZWQucmVtKDEyKX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVUcmlnZ2VyTGF5ZXJDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgaWYgKHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYW5kbGVUcmlnZ2VyTGF5ZXJTZWxlY3RlZCh1c2VEYXRhU291cmNlc1swXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTGF5ZXJGb3JUcmlnZ2VyTGF5ZXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQWN0aW9uTGF5ZXJDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgaWYgKHVzZURhdGFTb3VyY2VzICYmIHVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5oYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkKHVzZURhdGFTb3VyY2VzWzBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVSZW1vdmVMYXllckZvckFjdGlvbkxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRyaWdnZXJMYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnbWVzc2FnZVVzZURhdGFTb3VyY2UnLCBjdXJyZW50U2VsZWN0ZWREcylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkID0gKGN1cnJlbnRTZWxlY3RlZERzOiBVc2VEYXRhU291cmNlKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYWN0aW9uVXNlRGF0YVNvdXJjZScsIGN1cnJlbnRTZWxlY3RlZERzKS5zZXQoJ3NxbEV4cHJPYmonLCBudWxsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUxheWVyRm9yVHJpZ2dlckxheWVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywgbnVsbClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmVMYXllckZvckFjdGlvbkxheWVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2FjdGlvblVzZURhdGFTb3VyY2UnLCBudWxsKS5zZXQoJ3NxbEV4cHJPYmonLCBudWxsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNob3dTcWxFeHByUG9wdXAgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTcWxFeHByU2hvdzogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU3FsRXhwclBvcHVwID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU3FsRXhwclNob3c6ICF0aGlzLnN0YXRlLmlzU3FsRXhwclNob3cgfSlcclxuICB9XHJcblxyXG4gIG9uU3FsRXhwckJ1aWxkZXJDaGFuZ2UgPSAoc3FsRXhwck9iajogSU1TcWxFeHByZXNzaW9uKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnc3FsRXhwck9iaicsIHNxbEV4cHJPYmopXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25NZXNzYWdlRmllbGRTZWxlY3RlZCA9IChhbGxTZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ21lc3NhZ2VVc2VEYXRhU291cmNlJywge1xyXG4gICAgICAgIGRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgZGF0YVZpZXdJZDogdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZGF0YVZpZXdJZCxcclxuICAgICAgICByb290RGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIGZpZWxkczogYWxsU2VsZWN0ZWRGaWVsZHMubWFwKGYgPT4gZi5qaW11TmFtZSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkFjdGlvbkZpZWxkU2VsZWN0ZWQgPSAoYWxsU2VsZWN0ZWRGaWVsZHM6IElNRmllbGRTY2hlbWFbXSwgZHM6IERhdGFTb3VyY2UpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdhY3Rpb25Vc2VEYXRhU291cmNlJywge1xyXG4gICAgICAgIGRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgIGRhdGFWaWV3SWQ6IHRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UuZGF0YVZpZXdJZCxcclxuICAgICAgICByb290RGF0YVNvdXJjZUlkOiB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQsXHJcbiAgICAgICAgZmllbGRzOiBhbGxTZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN3aWN0aEVuYWJsZWREYXRhUmVsYXRpb25TaGlwID0gKGNoZWNrZWQpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdlbmFibGVkRGF0YVJlbGF0aW9uU2hpcCcsIGNoZWNrZWQpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2hlY2tUcmlnZXJMYXllcklzU2FtZVRvQWN0aW9uTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCA9PT0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCA9PT0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREc1Jvb3RJZHNCeVdpZGdldElkID0gKHdJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgICBjb25zdCByb290SWRzID0gW11cclxuICAgIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgIHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzPy5mb3JFYWNoKCh1c2VEUzogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgICBpZiAoZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXAgfHwgZHM/LnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkgeyAvLyBpcyByb290IGRzXHJcbiAgICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcclxuICB9XHJcblxyXG4gIGdldERzSWRzQnlXaWRnZXRJZCA9ICh3SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSBhY3Rpb25VdGlscy5nZXREc0J5V2lkZ2V0SWQod0lkLCB0aGlzLnByb3BzLm1lc3NhZ2VUeXBlKVxyXG4gICAgcmV0dXJuIEltbXV0YWJsZSh1c2VEYXRhU291cmNlcz8ubWFwKCh1c2VEUzogSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB1c2VEUz8ubWFpbkRhdGFTb3VyY2VJZCkgPz8gW10pXHJcbiAgfVxyXG5cclxuICBnZXREc1NlbGVjdG9yU291cmNlRGF0YSA9ICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWdcclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICAgIGNvbnN0IGRzUm9vdElkcyA9IHRoaXMuZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAgIGNvbnN0IGlzUmVhZE9ubHkgPSBhY3Rpb25VdGlscy5jaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIHRoaXMucHJvcHMubWVzc2FnZVR5cGUsIGRzUm9vdElkcylcclxuXHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9ICh1c2VEYXRhU291cmNlICYmIHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICA/IEltbXV0YWJsZShbdXNlRGF0YVNvdXJjZV0pXHJcbiAgICAgIDogSW1tdXRhYmxlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZyb21Ec0lkcyA9IGRzUm9vdElkcyA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gICAgY29uc3QgZHNTZWxlY3RvclNvdXJjZSA9IHtcclxuICAgICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzLFxyXG4gICAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICAgIGZyb21Ec0lkczogZnJvbURzSWRzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxuICB9XHJcblxyXG4gIGNoZWNrSXNEaXNhYmxlRGF0YVZpZXcgPSAod2lkZ2V0SWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpPy5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXHJcbiAgICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd2lkZ2V0SWRdXHJcbiAgICBpZiAod2lkZ2V0SnNvbikge1xyXG4gICAgICBjb25zdCB3aWRnZXRMYWJlbCA9IHdpZGdldEpzb24/Lm1hbmlmZXN0Py5sYWJlbFxyXG4gICAgICBpZiAod2lkZ2V0TGFiZWwgPT09ICdNYXAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgYWN0aW9uVXNlRGF0YVNvdXJjZUluc3RhbmNlID0gdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJlxyXG4gICAgICBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5kYXRhU291cmNlSWQpXHJcblxyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgdHJpZ2dlckRzU2VsZWN0b3JTb3VyY2VEYXRhID0gdGhpcy5nZXREc1NlbGVjdG9yU291cmNlRGF0YSh0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UpXHJcbiAgICBjb25zdCBhY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YSA9IHRoaXMuZ2V0RHNTZWxlY3RvclNvdXJjZURhdGEodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNzcz17dGhpcy5nZXRTdHlsZSh0aGlzLnByb3BzLnRoZW1lKX0+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1RyaWdnZXJMYXllcicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1RyaWdnZXJMYXllciB9KX0+XHJcbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgIHR5cGVzPXtEU1NlbGVjdG9yVHlwZXN9XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEudXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgICAgIGZyb21Sb290RHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxyXG4gICAgICAgICAgICBmcm9tRHNJZHM9e3RyaWdnZXJEc1NlbGVjdG9yU291cmNlRGF0YS5mcm9tRHNJZHN9XHJcbiAgICAgICAgICAgIGNsb3NlRGF0YVNvdXJjZUxpc3RPbkNoYW5nZVxyXG4gICAgICAgICAgICBkaXNhYmxlUmVtb3ZlPXsoKSA9PiB0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cclxuICAgICAgICAgICAgZGlzYWJsZURhdGFTb3VyY2VMaXN0PXt0cmlnZ2VyRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cclxuICAgICAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cclxuICAgICAgICAgICAgaGlkZVR5cGVEcm9wZG93blxyXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUcmlnZ2VyTGF5ZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLm1lc3NhZ2VXaWRnZXRJZH1cclxuICAgICAgICAgICAgZGlzYWJsZURhdGFWaWV3XHJcbiAgICAgICAgICAgIGhpZGVEYXRhVmlldz17dGhpcy5jaGVja0lzRGlzYWJsZURhdGFWaWV3KHRoaXMucHJvcHMubWVzc2FnZVdpZGdldElkKX1cclxuICAgICAgICAgICAgZW5hYmxlVG9TZWxlY3RPdXRwdXREc0Zyb21TZWxmPXt0cnVlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9BY3Rpb25MYXllcicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX0FjdGlvbkxheWVyIH0pfT5cclxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgdHlwZXM9e0RTU2VsZWN0b3JUeXBlc31cclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICBmcm9tUm9vdERzSWRzPXthY3Rpb25Ec1NlbGVjdG9yU291cmNlRGF0YS5mcm9tUm9vdERzSWRzfVxyXG4gICAgICAgICAgICBmcm9tRHNJZHM9e2FjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmZyb21Ec0lkc31cclxuICAgICAgICAgICAgY2xvc2VEYXRhU291cmNlTGlzdE9uQ2hhbmdlXHJcbiAgICAgICAgICAgIGRpc2FibGVSZW1vdmU9eygpID0+IGFjdGlvbkRzU2VsZWN0b3JTb3VyY2VEYXRhLmlzUmVhZE9ubHl9XHJcbiAgICAgICAgICAgIGRpc2FibGVEYXRhU291cmNlTGlzdD17YWN0aW9uRHNTZWxlY3RvclNvdXJjZURhdGEuaXNSZWFkT25seX1cclxuICAgICAgICAgICAgaGlkZUFkZERhdGFCdXR0b25cclxuICAgICAgICAgICAgaGlkZVR5cGVEcm9wZG93blxyXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVBY3Rpb25MYXllckNoYW5nZX1cclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMud2lkZ2V0SWR9XHJcbiAgICAgICAgICAgIGhpZGVEYXRhVmlld1xyXG4gICAgICAgICAgICBlbmFibGVUb1NlbGVjdE91dHB1dERzRnJvbVNlbGY9e3RydWV9XHJcbiAgICAgICAgICAvLyBvblNlbGVjdD17dGhpcy5oYW5kbGVBY3Rpb25MYXllclNlbGVjdGVkfVxyXG4gICAgICAgICAgLy8gb25SZW1vdmU9e3RoaXMuaGFuZGxlUmVtb3ZlTGF5ZXJGb3JBY3Rpb25MYXllcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJlxyXG4gICAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0NvbmRpdGlvbnMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Db25kaXRpb25zIH0pfT5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2UgfSl9PlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWcuZW5hYmxlZERhdGFSZWxhdGlvblNoaXB9IG9uQ2hhbmdlPXtldnQgPT4geyB0aGlzLnN3aWN0aEVuYWJsZWREYXRhUmVsYXRpb25TaGlwKGV2dC50YXJnZXQuY2hlY2tlZCkgfX0gLz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXt0aGlzLnByb3BzLmNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcH0gY2xhc3NOYW1lPSd3LTEwMCc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5jaGVja1RyaWdlckxheWVySXNTYW1lVG9BY3Rpb25MYXllcigpICYmXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCBib3JkZXIgcC0xIG1yLTInPnt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX0F1dG9CaW5kJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQXV0b0JpbmQgfSl9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLmNoZWNrVHJpZ2VyTGF5ZXJJc1NhbWVUb0FjdGlvbkxheWVyKCkgJiYgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIHJlbGF0ZS1wYW5lbC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoW3RoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pXSl9IGlzRGF0YVNvdXJjZURyb3BEb3duSGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25NZXNzYWdlRmllbGRTZWxlY3RlZH0gdXNlRHJvcGRvd24gaXNTZWFyY2hJbnB1dEhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e3RoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEltbXV0YWJsZShbXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTEwMCBhY3Rpb24tc2VsZWN0LWNob29zZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXtJbW11dGFibGUoW3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2U/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSldKX0gaXNEYXRhU291cmNlRHJvcERvd25IaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWN0aW9uRmllbGRTZWxlY3RlZH0gdXNlRHJvcGRvd24gaXNTZWFyY2hJbnB1dEhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZHM9e3RoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UgJiYgdGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEltbXV0YWJsZShbXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nZmxleC1ub25lJyB3aWR0aD17MTJ9IGhlaWdodD17NDB9IGNvbG9yPXt0aGVtZS5jb2xvcnMuZGFya1s0MDBdfSBpY29uPXtyZXF1aXJlKCdqaW11LXVpL2xpYi9pY29ucy9saW5rLWNvbWJpbmVkLnN2ZycpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdsaW5rJyBkaXNhYmxlZD17IXRoaXMucHJvcHMuY29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2V9IGNsYXNzTmFtZT0ndy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydCcgb25DbGljaz17dGhpcy5zaG93U3FsRXhwclBvcHVwfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwMCB0ZXh0LXRydW5jYXRlJyBzdHlsZT17eyB0ZXh0QWxpZ246ICdzdGFydCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX01vcmVDb25kaXRpb25zJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSAmJiA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXt0aGlzLnByb3BzLmNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlfT57KGRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8U3FsRXhwcmVzc2lvbkJ1aWxkZXJQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RzfSBtb2RlPXtTcWxFeHByZXNzaW9uTW9kZS5TaW1wbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzU3FsRXhwclNob3d9IHRvZ2dsZT17dGhpcy50b2dnbGVTcWxFeHByUG9wdXB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbj17dGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9ian0gb25DaGFuZ2U9eyhzcWxFeHByT2JqKSA9PiB7IHRoaXMub25TcWxFeHByQnVpbGRlckNoYW5nZShzcWxFeHByT2JqKSB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPC9EYXRhU291cmNlQ29tcG9uZW50Pn1cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3FsLWV4cHItZGlzcGxheSc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuc3FsRXhwck9iaiAmJiBhY3Rpb25Vc2VEYXRhU291cmNlSW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKHRoaXMucHJvcHMuY29uZmlnLnNxbEV4cHJPYmosIGFjdGlvblVzZURhdGFTb3VyY2VJbnN0YW5jZSkuZGlzcGxheVNRTFxyXG4gICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1NldEV4cHJlc3Npb24gfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShfRmxhc2hBY3Rpb25TZXR0aW5nKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=