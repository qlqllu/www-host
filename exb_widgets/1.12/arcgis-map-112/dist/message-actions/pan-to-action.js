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

/***/ "./your-extensions/widgets/arcgis-map-112/src/runtime/utils.ts":
/*!*********************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/runtime/utils.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsLive": () => (/* binding */ checkIsLive),
/* harmony export */   "createNewFeaturelayer": () => (/* binding */ createNewFeaturelayer),
/* harmony export */   "filterFeaturesByQuery": () => (/* binding */ filterFeaturesByQuery),
/* harmony export */   "flashFeaturesByQuery": () => (/* binding */ flashFeaturesByQuery),
/* harmony export */   "getJimuMapViewId": () => (/* binding */ getJimuMapViewId),
/* harmony export */   "getLayersFromDataSourceIds": () => (/* binding */ getLayersFromDataSourceIds),
/* harmony export */   "getMapBaseRestoreData": () => (/* binding */ getMapBaseRestoreData),
/* harmony export */   "goToTargetImmediately": () => (/* binding */ goToTargetImmediately),
/* harmony export */   "goToViewpointImmediately": () => (/* binding */ goToViewpointImmediately),
/* harmony export */   "handleFeature": () => (/* binding */ handleFeature),
/* harmony export */   "isNeedProjectSpatialReference": () => (/* binding */ isNeedProjectSpatialReference),
/* harmony export */   "isNeedProjectViewpoint": () => (/* binding */ isNeedProjectViewpoint),
/* harmony export */   "isTwoWidgetsMutuallyExtentChange": () => (/* binding */ isTwoWidgetsMutuallyExtentChange),
/* harmony export */   "isWidgetSendZoomToActionToAnother": () => (/* binding */ isWidgetSendZoomToActionToAnother),
/* harmony export */   "mapPanto": () => (/* binding */ mapPanto),
/* harmony export */   "processZoomToFeatures": () => (/* binding */ processZoomToFeatures),
/* harmony export */   "projectGeometries": () => (/* binding */ projectGeometries),
/* harmony export */   "projectViewpoint": () => (/* binding */ projectViewpoint),
/* harmony export */   "restoreMapBase": () => (/* binding */ restoreMapBase),
/* harmony export */   "selectFeature": () => (/* binding */ selectFeature),
/* harmony export */   "updateFeaturelayer": () => (/* binding */ updateFeaturelayer)
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
/* eslint-disable prefer-const */


function createNewFeaturelayer(mapBaseView, newFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLayerPromises = [];
        newFeatureSetValue && Object.keys(newFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                console.warn('the feature layer is already created');
                return;
            }
            newLayerPromises.push(addFeatureSetToMap(mapBaseView, newFeatureSetValue[layerId], layerId));
        });
        if (newLayerPromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(newLayerPromises);
        }
    });
}
function updateFeaturelayer(mapBaseView, changedFeatureSetValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatePromises = [];
        changedFeatureSetValue && Object.keys(changedFeatureSetValue).forEach(layerId => {
            const layer = mapBaseView.map.layers.find(layer => layer.id === layerId);
            if (layer) {
                mapBaseView.map.remove(layer);
                updatePromises.push(addFeatureSetToMap(mapBaseView, changedFeatureSetValue[layerId], layerId));
            }
        });
        if (updatePromises.length === 0) {
            return null;
        }
        else {
            return Promise.all(updatePromises);
        }
    });
}
function addFeatureSetToMap(mapBaseView, featureSet, layerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((resolve, reject) => {
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer'
            ]).then(modules => {
                if (featureSet.features.length < 1) {
                    resolve(null);
                }
                else {
                    // let FeatureSet: typeof  __esri.FeatureSet;
                    let FeatureLayer;
                    // eslint-disable-next-line
                    [FeatureLayer] = modules;
                    const layerFromFeatureSet = featureSet.features[0].layer;
                    const fieldsInFeaturelayer = [];
                    const fieldMap = {};
                    for (let i = 0; i < layerFromFeatureSet.fields.length; i++) {
                        const fieldsItem = getReasonableField(layerFromFeatureSet.fields[i]);
                        fieldMap[layerFromFeatureSet.fields[i].name] = fieldsItem.name;
                        fieldsInFeaturelayer.push(fieldsItem);
                    }
                    const fieldsInPopupTemplate = [];
                    for (const key in featureSet.features[0].attributes) {
                        if (fieldMap[key]) {
                            const fieldsItem = {
                                fieldName: fieldMap[key],
                                label: key
                            };
                            fieldsInPopupTemplate.push(fieldsItem);
                        }
                    }
                    const sourceFeatures = [];
                    featureSet.features.forEach((feature, index) => {
                        const tempFeature = feature;
                        if (tempFeature.attributes) {
                            for (const key in tempFeature.attributes) {
                                tempFeature.attributes[fieldMap[key]] = tempFeature.attributes[key];
                            }
                            tempFeature.attributes.exbfid = index;
                        }
                        else {
                            tempFeature.attributes = {
                                exbfid: index
                            };
                        }
                        sourceFeatures.push(tempFeature);
                    });
                    const layer = new FeatureLayer({
                        id: layerId,
                        title: layerFromFeatureSet.title,
                        source: sourceFeatures,
                        fields: fieldsInFeaturelayer,
                        outFields: ['*'],
                        objectIdField: 'exbfid',
                        renderer: layerFromFeatureSet.renderer,
                        popupEnabled: true,
                        popupTemplate: {
                            title: 'information',
                            content: [{
                                    type: 'fields',
                                    fieldInfos: fieldsInPopupTemplate
                                }]
                        }
                    });
                    mapBaseView.map.add(layer);
                    layer.on('layerview-create', event => {
                        resolve(null);
                    });
                }
            });
        });
    });
}
function getReasonableField(field) {
    // the function is supported to normalize the field.name
    const fieldName = field.name;
    return {
        name: fieldName.replace(/\./g, '_').replace(/\(/g, '_').replace(/\)/g, '_'),
        alias: field.alias,
        type: field.type
    };
}
function selectFeature(mapBaseView, target, layerId) {
    // In this function, we assume that features come from the same layer
    let featureLayerId = layerId;
    let featureLayerView = null;
    let tempFeature = null;
    // if layerId doesn't exist, we get layerId by feature
    if (!featureLayerId) {
        if (target instanceof Array) {
            tempFeature = target[0];
        }
        else {
            tempFeature = target;
        }
        if (tempFeature) {
            featureLayerId = tempFeature.layer && tempFeature.layer.id;
        }
    }
    if (featureLayerId) {
        const layerViews = mapBaseView.allLayerViews;
        for (let i = 0; i < layerViews.length; i++) {
            if (layerViews.getItemAt(i).layer.id === featureLayerId) {
                featureLayerView = layerViews.getItemAt(i);
            }
        }
        if (featureLayerView) {
            return {
                layerId: featureLayerId,
                handle: featureLayerView.highlight(target)
            };
        }
        else {
            return null;
        }
    }
}
function goToTargetImmediately(view, _target) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const geometries = yield projectGeometries([_target], viewSR);
        if (geometries && geometries.length > 0) {
            const target = geometries[0];
            view.goTo(target, { animate: false });
        }
    });
}
function goToViewpointImmediately(view, _viewpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const viewSR = view.spatialReference;
        const viewpoint = yield projectViewpoint(_viewpoint, viewSR);
        // view.goTo(viewpoint, { animate: false })
        view.viewpoint = viewpoint;
    });
}
function isNeedProjectViewpoint(viewpoint, viewSR) {
    var _a, _b, _c;
    const sr1 = (_a = viewpoint.targetGeometry) === null || _a === void 0 ? void 0 : _a.spatialReference;
    if (sr1 && isNeedProjectSpatialReference(sr1, viewSR)) {
        return true;
    }
    const sr2 = (_c = (_b = viewpoint.camera) === null || _b === void 0 ? void 0 : _b.position) === null || _c === void 0 ? void 0 : _c.spatialReference;
    if (sr2 && isNeedProjectSpatialReference(sr2, viewSR)) {
        return true;
    }
    return false;
}
function isNeedProjectSpatialReference(sr1, sr2) {
    const isSame = sr1.wkid === sr2.wkid || sr1.equals(sr2);
    //  In JS API 4.x, the view can handle WebMercator and WGS84 spatialReference auto
    const isLike = (sr1.isWebMercator || sr1.isWGS84) && (sr2.isWebMercator || sr2.isWGS84);
    return !isSame && !isLike;
}
function projectViewpoint(_viewpoint, viewSR) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const viewpoint = _viewpoint.clone();
        const targetGeometry = viewpoint.targetGeometry;
        const cameraPositon = (_a = viewpoint.camera) === null || _a === void 0 ? void 0 : _a.position;
        const toProjectGeometries = [];
        let isProjectTargetGeometry = false;
        let isProjectCameraPosition = false;
        if (targetGeometry && isNeedProjectSpatialReference(targetGeometry.spatialReference, viewSR)) {
            isProjectTargetGeometry = true;
            toProjectGeometries.push(targetGeometry);
        }
        if (cameraPositon && isNeedProjectSpatialReference(cameraPositon.spatialReference, viewSR)) {
            isProjectCameraPosition = true;
            toProjectGeometries.push(cameraPositon);
        }
        if (toProjectGeometries.length > 0) {
            const projectedGeometries = yield projectGeometries(toProjectGeometries, viewSR);
            if (isProjectTargetGeometry) {
                viewpoint.targetGeometry = projectedGeometries[0];
            }
            if (isProjectCameraPosition) {
                viewpoint.camera.position = projectedGeometries[projectedGeometries.length - 1];
            }
        }
        return viewpoint;
    });
}
function mapPanto(mapBaseView, target) {
    return __awaiter(this, void 0, void 0, function* () {
        const panToTarget = target;
        const tempBaseMapView = mapBaseView;
        if (panToTarget instanceof Array) {
            if (panToTarget.length === 0) {
                yield Promise.resolve();
                return;
            }
            if (panToTarget[0].geometry) {
                const geometryArr = [];
                for (let i = 0; i < panToTarget.length; i++) {
                    geometryArr.push(panToTarget[i].geometry);
                }
                yield getGeometriesExtent(geometryArr).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
            else {
                return getGeometriesExtent(panToTarget).then((extent) => {
                    return goTo(tempBaseMapView, extent.center);
                });
            }
        }
        else {
            if (panToTarget.geometry) {
                const getmetry = panToTarget.geometry;
                return goTo(tempBaseMapView, getCenterPoint(getmetry));
            }
            else {
                return goTo(tempBaseMapView, getCenterPoint(panToTarget));
            }
        }
    });
}
function goTo(view, target) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // delay before updating of view turns true, 400ms is a temporary solution.
            setTimeout(() => {
                //// there is a conflict for paning when the layer view is updating, such as 'pan to' and 'filter'.
                //// this is a temporary solution, it can reduce the frequency of the problem rather than solve it completely.
                //if (view.updating) {
                //  const handler = view.watch('updating', value => {
                //    if (!value) {
                //      view.goTo(target).then(() => resolve()).catch(() => reject())
                //      handler.remove()
                //    }
                //  })
                //} else {
                //  view.goTo(target).then(() => resolve()).catch(() => reject())
                //}
                view.goTo(target).then(() => { resolve(); }).catch(() => { reject(); });
            }, 400);
        });
    });
}
function getGeometriesExtent(geometries) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/geometry/Extent'
        ]).then((modules) => __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line
            let Extent;
            [Extent] = modules;
            if (!geometries || !geometries.length) {
                return yield Promise.resolve(null);
            }
            let fullExtent = null;
            let index;
            const numGeometries = geometries.length;
            for (index = 0; index < numGeometries; index++) {
                const geometry = geometries[index];
                if (!geometry) {
                    continue;
                }
                let extent = geometry.extent;
                if (!extent && geometry.type === 'point') {
                    const pointGeometry = geometry;
                    if (pointGeometry.x && pointGeometry.y) {
                        extent = new Extent({
                            xmax: pointGeometry.x,
                            xmin: pointGeometry.x,
                            ymax: pointGeometry.y,
                            ymin: pointGeometry.y,
                            zmax: pointGeometry.z,
                            zmin: pointGeometry.z,
                            spatialReference: pointGeometry.spatialReference
                        });
                    }
                }
                if (!extent) {
                    continue;
                }
                if (fullExtent) {
                    fullExtent = fullExtent.union(extent);
                }
                else {
                    fullExtent = extent;
                }
            }
            if (fullExtent.width < 0 && fullExtent.height < 0) {
                return yield Promise.resolve(null);
            }
            return yield Promise.resolve(fullExtent);
        }));
    });
}
function filterFeaturesByQuery(jimuMapView, actionLayerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!actionLayerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionLayerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer && (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer || jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer)) {
            jimuLayerView.setDefinitionExpression(querySQL);
        }
    });
}
function queryFeatures(layerObject, querySQL) {
    return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/rest/support/Query'
    ]).then(modules => {
        let Query;
        [Query] = modules;
        const query = new Query();
        query.where = querySQL;
        query.outFields = ['*'];
        query.returnGeometry = true;
        return layerObject.queryFeatures(query).then(featureSet => {
            return featureSet;
        });
    });
}
function flashOnFeatureLayer(jimuMapView, querySQL, tempJimuLayerView) {
    if ((tempJimuLayerView).view) {
        let featureLayerView = (tempJimuLayerView).view;
        if (featureLayerView) {
            queryFeatures(featureLayerView.layer, querySQL).then(featureSet => {
                if (featureSet && featureSet.features && featureSet.features.length > 0) {
                    const symbol = getFlashSymbol(featureLayerView.layer.geometryType);
                    startFlash(jimuMapView.view, featureSet.features, symbol);
                }
            });
        }
        else {
            return null;
        }
    }
    else {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
            'esri/layers/FeatureLayer'
        ]).then(modules => {
            let FeatureLayer;
            [FeatureLayer] = modules;
            let tempFeatureLayer = new FeatureLayer({
                url: jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getUrlByLayer(tempJimuLayerView.layer)
            });
            tempFeatureLayer.load().then(() => {
                queryFeatures(tempFeatureLayer, querySQL).then(featureSet => {
                    if (featureSet && featureSet.features && featureSet.features.length > 0) {
                        const symbol = getFlashSymbol(featureSet.features[0].geometry.type);
                        startFlash(jimuMapView.view, featureSet.features, symbol);
                    }
                });
            });
        });
    }
}
let sceneHightlightHandle = null;
function flashOnSceneLayer(jimuMapView, querySQL, tempJimuLayerView) {
    var _a;
    if ((tempJimuLayerView).view) {
        let sceneLayerView = (tempJimuLayerView).view;
        // @ts-expect-error
        queryFeatures((_a = sceneLayerView === null || sceneLayerView === void 0 ? void 0 : sceneLayerView.layer) === null || _a === void 0 ? void 0 : _a.associatedLayer, querySQL).then(featureSet => {
            if (featureSet && featureSet.features && featureSet.features.length > 0) {
                const objectIdField = sceneLayerView.layer.objectIdField;
                const objectIds = featureSet.features.map(feature => feature.attributes[objectIdField]);
                let i = 0;
                const maxFlashCount = 6;
                let highlightColor = [255, 255, 0, 0.8];
                const originalHighlightOptions = jimuMapView.view.highlightOptions;
                const flash = function () {
                    if (i < maxFlashCount) {
                        i++;
                        if (highlightColor) {
                            highlightColor = null;
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: [0, 0, 0, 0] };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        else {
                            highlightColor = [255, 255, 0, 0.8];
                            // @ts-expect-error
                            jimuMapView.view.highlightOptions = { color: highlightColor };
                            sceneHightlightHandle && sceneHightlightHandle.remove();
                            sceneHightlightHandle = sceneLayerView.highlight(objectIds);
                        }
                        setTimeout(flash, 500);
                    }
                    else {
                        jimuMapView.view.highlightOptions = originalHighlightOptions;
                        sceneHightlightHandle && sceneHightlightHandle.remove();
                    }
                };
                setTimeout(flash, 500);
            }
        });
    }
}
function flashFeaturesByQuery(jimuMapView, layerDataSourceId, querySQL) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!layerDataSourceId) {
            return;
        }
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(layerDataSourceId);
        if (!dataSource) {
            return;
        }
        let jimuLayerView = null;
        try {
            jimuLayerView = yield jimuMapView.whenJimuLayerViewLoadedByDataSource(dataSource);
        }
        catch (err) {
            jimuLayerView = null;
            console.error('can\'t get jimuLayerView by dataSource', dataSource, err);
        }
        if (jimuLayerView && jimuLayerView.layer) {
            if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer) {
                flashOnFeatureLayer(jimuMapView, querySQL, jimuLayerView);
            }
            else if (jimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer) {
                flashOnSceneLayer(jimuMapView, querySQL, jimuLayerView);
            }
        }
    });
}
function startFlash(mapBaseView, features, symbol) {
    (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
        'esri/Graphic'
    ]).then(modules => {
        // eslint-disable-next-line
        let Graphic;
        [Graphic] = modules;
        const flashFeatures = function (features, maxFlashCount) {
            const graphics = [];
            let flashCount = 0;
            for (let i = 0; i < features.length; i++) {
                const tempGraphic = new Graphic({
                    geometry: features[i].geometry,
                    symbol: symbol,
                    attributes: features[i].attributes
                });
                graphics.push(tempGraphic);
            }
            const singleFlash = function () {
                mapBaseView.graphics.addMany(graphics);
                setTimeout(() => {
                    mapBaseView.graphics.removeMany(graphics);
                    flashCount = flashCount + 1;
                    if (flashCount < maxFlashCount) {
                        setTimeout(() => {
                            singleFlash();
                        }, 500);
                    }
                }, 500);
            };
            singleFlash();
        };
        flashFeatures(features, 3);
    });
}
function getFlashSymbol(geometryType) {
    if (['point', 'multipoint'].includes(geometryType)) {
        return {
            type: 'simple-marker',
            style: 'circle',
            color: [255, 255, 0, 0.8],
            size: '16px',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['polyline'].includes(geometryType)) {
        return {
            type: 'simple-line',
            color: [255, 255, 0, 0.8],
            width: 3,
            style: 'solid'
        };
    }
    else if (['polygon', 'extent'].includes(geometryType)) {
        return {
            type: 'simple-fill',
            color: [255, 255, 0, 0.5],
            style: 'solid',
            outline: {
                color: [255, 255, 0, 0.8],
                width: 3
            }
        };
    }
    else if (['mesh'].includes(geometryType)) {
        return {
            type: 'mesh-3d',
            symbolLayers: [{
                    type: 'fill',
                    material: { color: [255, 255, 0, 0.8] }
                }]
        };
    }
    else {
        return null;
    }
}
function getCenterPoint(geometry) {
    // point | multipoint | polyline | polygon | extent | mesh
    switch (geometry.type) {
        case 'point':
            return geometry;
        case 'extent':
            return geometry.center;
        case 'polygon':
            return geometry.centroid;
        case 'polyline':
            return geometry.extent.center;
        default:
            return geometry && geometry.extent ? geometry.extent.center : undefined;
        // todo
    }
}
function handleFeature(feature, Graphic) {
    let tempFeature = null;
    if (feature.clone) {
        tempFeature = feature.clone();
    }
    else {
        tempFeature = Graphic.fromJSON(Object.assign({}, feature));
        tempFeature.attributes = Object.assign({}, feature.attributes);
    }
    return tempFeature;
}
function projectGeometries(geometries, spatialReference) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!geometries || geometries.length === 0 || !geometries[0] ||
            spatialReference.wkid === geometries[0].spatialReference.wkid || (spatialReference.equals(geometries[0].spatialReference))) {
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWebMercator && geometries[0].spatialReference.isWGS84) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else if (spatialReference.isWGS84 && geometries[0].spatialReference.isWebMercator) {
            // In js api 4.x, the view can handle WebMercator and WGS84 spatialReference auto
            return yield Promise.resolve(geometries);
        }
        else {
            return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.geometryUtils.projectToSpatialReference(geometries, spatialReference);
        }
    });
}
function processZoomToFeatures(mapBaseView, layer, features) {
    return __awaiter(this, void 0, void 0, function* () {
        if (mapBaseView && mapBaseView.type === '3d' && layer && layer.queryFeatures && features) {
            return yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/rest/support/Query'
            ]).then((modules) => {
                const [Query] = modules;
                const query = new Query();
                query.returnGeometry = true;
                query.outFields = ['*'];
                query.objectIds = features.map(feature => feature.attributes[layer.objectIdField]);
                return layer.queryFeatures(query).then((result) => __awaiter(this, void 0, void 0, function* () {
                    if (result && result.features && result.features.length === features.length) {
                        return yield Promise.resolve(result.features);
                    }
                    else {
                        return yield Promise.resolve(features);
                    }
                }), () => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(features);
                }));
            });
        }
        else {
            return yield Promise.resolve(features);
        }
    });
}
function checkIsLive(appMode) {
    if (window.jimuConfig.isInBuilder) {
        if (appMode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}
function getLayersFromDataSourceIds(dataSourceIds) {
    const layerPromises = [];
    dataSourceIds.forEach(dataSourceId => {
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dataSourceId);
        let layerPromise;
        if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.layer) {
            layerPromise = Promise.resolve(dataSource.layer);
        }
        else if (dataSource === null || dataSource === void 0 ? void 0 : dataSource.createJSAPILayerByDataSource) {
            layerPromise = dataSource.createJSAPILayerByDataSource();
        }
        else {
            layerPromise = Promise.resolve(null);
        }
        layerPromises.push(layerPromise);
    });
    return Promise.all(layerPromises);
}
function getJimuMapViewId(widgetId, dataSourceId) {
    // If dataSourceId is null, make sure it converts to empty string.
    const dsId = dataSourceId || '';
    return `${widgetId}-${dsId}`;
}
function getMapBaseRestoreData(mapInstance) {
    const { mapContainer, state, Geometry, InitialViewProperties, TileLayer, Basemap, MapView, SceneView, Extent, Viewpoint, PortalItem, Portal, WebMap, WebScene, Color, expectedDataSourceInfo, mapCreatingInfo, view, lastUpdateViewConfig, mapDs, dsManager, isFirstReceiveMessage } = mapInstance;
    return {
        mapContainer,
        state,
        Geometry,
        InitialViewProperties,
        TileLayer,
        Basemap,
        MapView,
        SceneView,
        Extent,
        Viewpoint,
        PortalItem,
        Portal,
        WebMap,
        WebScene,
        Color,
        expectedDataSourceInfo,
        mapCreatingInfo,
        view,
        lastUpdateViewConfig,
        mapDs,
        dsManager,
        isFirstReceiveMessage
    };
}
function restoreMapBase(mapInstance, restoreData) {
    const keys = Object.keys(restoreData);
    for (const key of keys) {
        mapInstance[key] = restoreData[key];
    }
}
function isTwoWidgetsMutuallyExtentChange(widgetId1, widgetId2) {
    if (widgetId1 && widgetId2) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['panTo', 'zoomToFeature'];
            const messageType = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange;
            if (isWidgetSendActionsToAnother(widgetId1, widgetId2, messageConfigs, messageType, actionNames) &&
                isWidgetSendActionsToAnother(widgetId2, widgetId1, messageConfigs, messageType, actionNames)) {
                return true;
            }
        }
    }
    return false;
}
function isWidgetSendZoomToActionToAnother(sendMessageWidgetId, actionWidgetId, messageType) {
    if (sendMessageWidgetId && actionWidgetId) {
        const messageConfigs = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.messageConfigs;
        if (messageConfigs) {
            const actionNames = ['zoomToFeature'];
            return isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames);
        }
    }
    return false;
}
function isWidgetSendActionsToAnother(sendMessageWidgetId, actionWidgetId, messageConfigs, messageType, actionNames) {
    if (messageConfigs) {
        const messageJsonArray = Object.values(messageConfigs);
        for (let i = 0; i < messageJsonArray.length; i++) {
            const messageJson = messageJsonArray[i];
            if (messageJson.widgetId === sendMessageWidgetId && messageJson.messageType === messageType) {
                const actions = messageJson.actions;
                for (let j = 0; j < actions.length; j++) {
                    const action = actions[j];
                    if (action.widgetId === actionWidgetId) {
                        if (actionNames.includes(action.actionName)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
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
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/pan-to-action.ts ***!
  \*************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanToAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./your-extensions/widgets/arcgis-map-112/src/runtime/utils.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");




class PanToAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.NoLockTriggerLayerWidgets = ['Map'];
    }
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange) {
            return true;
        }
        else if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange) {
            return true;
        }
        else if (messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange &&
            messageDescription.messageType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return false;
        }
        else {
            const dataSourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
            const messageWidgetUseDataSources = (0,_action_utils__WEBPACK_IMPORTED_MODULE_3__.getDsByWidgetId)(messageDescription.widgetId, messageDescription.messageType);
            return messageWidgetUseDataSources.some(useDataSource => {
                var _a;
                const ds = dataSourceManager.getDataSource(useDataSource.dataSourceId);
                if (ds.type === 'WEB_MAP' || ds.type === 'WEB_SCENE') {
                    return true;
                }
                else {
                    return !!((_a = ds.getDataSourceJson()) === null || _a === void 0 ? void 0 : _a.geometryType);
                }
            });
        }
    }
    filterMessage(message) {
        return true;
    }
    getSettingComponentUri(messageType, messageWidgetId) {
        //const config = getAppStore().getState().appStateInBuilder ? getAppStore().getState().appStateInBuilder.appConfig : getAppStore().getState().appConfig
        //const messageWidgetJson = config.widgets[messageWidgetId]
        if (messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange ||
            messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return 'message-actions/pan-to-action-setting';
        }
        else {
            return null;
        }
    }
    onExecute(message, actionConfig) {
        // message.widgetId is message sender, this.widgetId is message receiver
        return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
            var _a;
            let Graphic = null;
            [Graphic] = modules;
            switch (message.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataRecordSetChangeMessage = message;
                    if (dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
                        const geometries = [];
                        dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
                            if (dataRecordSet && dataRecordSet.records) {
                                for (let i = 0; i < dataRecordSet.records.length; i++) {
                                    const dataRecordFeature = dataRecordSet.records[i].feature;
                                    if (dataRecordFeature) {
                                        geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(dataRecordFeature, Graphic).geometry);
                                    }
                                }
                            }
                        });
                        const panToValue = {
                            type: 'pan-to-geometries',
                            geometries: geometries
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    }
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    const messageWidgetJson = config.widgets[message.widgetId];
                    const messageWidgetLabel = messageWidgetJson.manifest.label;
                    const dataRecordsSelectionChangeMessage = message;
                    const geometries = [];
                    if (dataRecordsSelectionChangeMessage.records) {
                        if (dataRecordsSelectionChangeMessage.records[0]) {
                            //if (!actionConfig.useDataSource || (dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource().id !== actionConfig.useDataSource.mainDataSourceId)) {
                            //  break
                            //}
                            if (this.NoLockTriggerLayerWidgets.includes(messageWidgetLabel)) {
                                const mainDataSourceOfSelection = dataRecordsSelectionChangeMessage.records[0].dataSource.getMainDataSource();
                                if (!((_a = actionConfig === null || actionConfig === void 0 ? void 0 : actionConfig.useDataSources) === null || _a === void 0 ? void 0 : _a.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === mainDataSourceOfSelection.id))) {
                                    break;
                                }
                            }
                            else {
                                const selectionChangeDS = dataRecordsSelectionChangeMessage.records[0].dataSource;
                                const selectionChangeMainDS = selectionChangeDS === null || selectionChangeDS === void 0 ? void 0 : selectionChangeDS.getMainDataSource();
                                // check dsId of mainDS currently, will support view in the future.
                                if (!actionConfig.useDataSources.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.mainDataSourceId) === selectionChangeMainDS.id)) {
                                    break;
                                }
                            }
                        }
                        for (let i = 0; i < dataRecordsSelectionChangeMessage.records.length; i++) {
                            const dataRecordFeature = dataRecordsSelectionChangeMessage.records[i].feature;
                            if (dataRecordFeature) {
                                geometries.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(dataRecordFeature, Graphic).geometry);
                            }
                        }
                    }
                    const panToValue = {
                        type: 'pan-to-geometries',
                        geometries: geometries
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        // isWidgetSendZoomToActionToAnother() can only handle simple panTo and zoomTo conflict.
                        // To avoid more complicated panTo and zoomTo conflict cases, we do it in handleActionForPanToActionValue of mapbase.
                        break;
                    }
                    const extentChangeMessage = message;
                    const relatedWidgetIds = extentChangeMessage.getRelatedWidgetIds();
                    if (relatedWidgetIds.includes(this.widgetId)) {
                        break;
                    }
                    const extentValue = {
                        type: 'pan-to-extent',
                        geometries: [extentChangeMessage.extent],
                        stationary: extentChangeMessage.stationary,
                        publishTime: extentChangeMessage.publishTime,
                        publishWidgetId: extentChangeMessage.widgetId
                    };
                    const panToFeatureActionValue = {
                        value: extentValue,
                        relatedWidgets: relatedWidgetIds
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue', panToFeatureActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const filterChangeMessage = message;
                    // support view.
                    if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === dataSourceId))) {
                        break;
                    }
                    const filterChangeActionValue = {
                        type: 'pan-to-query-params',
                        dataSourceIds: filterChangeMessage.dataSourceIds,
                        useDataSources: actionConfig.useDataSources || []
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', filterChangeActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange:
                    if ((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.isWidgetSendZoomToActionToAnother)(message.widgetId, this.widgetId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange)) {
                        // message.widgetId sends both panTo and zoomTo actions to this.widgetId, we should not execute panTo action to avoid conflict with zoomTo action.
                        break;
                    }
                    const dataSourcesChangeMessage = message;
                    if (dataSourcesChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Create) {
                        const dataSourceIds = [];
                        dataSourcesChangeMessage.dataSources.forEach(dataSource => {
                            dataSourceIds.push(dataSource.id);
                        });
                        const panToFeatureActionValueForLayers = {
                            type: 'pan-to-layers',
                            dataSourceIds: dataSourceIds
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToFeatureActionValueForLayers);
                    }
                    break;
            }
            return true;
        });
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9wYW4tdG8tYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FBT00sU0FBUyxvQkFBb0IsQ0FBRSxZQUFxRCxFQUFFLGVBQXVCLEVBQUUsV0FBd0I7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O3dCQUNELHNFQUErQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxnQ0FBZ0MsQ0FBQztxQkFDOUg7b0JBQ0QsTUFBSzthQUNSO1lBQ0QsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9tZXNzYWdlLWFjdGlvbnMvcGFuLXRvLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlVHlwZSwgTWVzc2FnZUNhcnJ5RGF0YSwgdHlwZSBVc2VEYXRhU291cmNlLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgSW1tdXRhYmxlLCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBJbW11dGFibGVBcnJheSwgdHlwZSBJTVdpZGdldEpzb24gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEFyY0dJU0RhdGFTb3VyY2VUeXBlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXNlT3V0cHV0RGF0YVNvdXJjZXMgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YSA9PT0gTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IE1lc3NhZ2VDYXJyeURhdGEge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCBwdWJsaXNoTWVzc2FnZXMgPSB3aWRnZXRKc29uPy5tYW5pZmVzdD8ucHVibGlzaE1lc3NhZ2VzXHJcbiAgbGV0IG1lc3NhZ2VDYXJyeURhdGEgPSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2VcclxuICBwdWJsaXNoTWVzc2FnZXM/LmZvckVhY2goZWwgPT4ge1xyXG4gICAgY29uc3QgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eSA9IGVsIGFzIGFueVxyXG4gICAgaWYgKHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VDYXJyeURhdGEgJiYgcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgIG1lc3NhZ2VDYXJyeURhdGEgPSBwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gbWVzc2FnZUNhcnJ5RGF0YVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkNvbmZpZyB7XHJcbiAgdXNlRGF0YVNvdXJjZTogVXNlRGF0YVNvdXJjZVxyXG4gIHVzZURhdGFTb3VyY2VzPzogVXNlRGF0YVNvdXJjZVtdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja091dEFjdGlvbkNvbmZpZyAoYWN0aW9uQ29uZmlnOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PEFjdGlvbkNvbmZpZz4sIG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlV2lkZ2V0SWRdXHJcblxyXG4gIGxldCB1c2VEYXRhU291cmNlOiBJTVVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXM6IElNVXNlRGF0YVNvdXJjZVtdID0gW11cclxuICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICAgIC8vaWYgKG1lc3NhZ2VXaWRnZXRKc29uICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMuZm9yRWFjaCgodXNlRFMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW3VzZURTLmRhdGFTb3VyY2VJZF1cclxuICAgICAgICBsZXQgdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgICAgICAgIHRlbXBVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IEltbXV0YWJsZSh7XHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogdXNlRFMuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBtYWluRGF0YVNvdXJjZUlkOiB1c2VEUy5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiB1c2VEUy5yb290RGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICBkYXRhVmlld0lkOiB1c2VEUy5kYXRhVmlld0lkXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2UgPSB0ZW1wVXNlRGF0YVNvdXJjZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSwgbWVzc2FnZVR5cGUpXHJcbiAgICBpZiAoYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURTID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVXNlRGF0YVNvdXJjZSA9IGNoZWNrT3V0VXNlRGF0YVNvdXJjZShtZXNzYWdlV2lkZ2V0SWQsIHVzZURTLCBtZXNzYWdlVHlwZSlcclxuICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSAmJiB1c2VEYXRhU291cmNlcy5wdXNoKHRlbXBVc2VEYXRhU291cmNlKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrT3V0VXNlRGF0YVNvdXJjZSAobWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIG9sZFVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgLy9jb25zdCB3aWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG4gIGNvbnN0IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyA9IGdldERzQnlXaWRnZXRJZChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGxldCBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICBsZXQgaXNNYXBEcyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0IGRzSWQgPSBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuICBpZiAoIWRzSWQpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc0pzb24gPSBjb25maWcuZGF0YVNvdXJjZXNbZHNJZF1cclxuICBpZiAoZHNKc29uICYmICgoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJNYXApIHx8IChkc0pzb24udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSkpIHtcclxuICAgIGlzTWFwRHMgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgY29uc3QgaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA9IGRzTS5nZXREYXRhU291cmNlKG9sZFVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKT8uZ2V0RGF0YVNvdXJjZUpzb24oKT8uaXNPdXRwdXRGcm9tV2lkZ2V0XHJcblxyXG4gIGlmIChpc01hcERzKSB7XHJcbiAgICAvLyB3ZWJtYXAgb3Igd2Vic2NlbmUgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldLmRhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBmZWF0dXJlbGF5ZXIgZHNcclxuICAgIGxldCBpc1VzZU9sZERzID0gZmFsc2VcclxuICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvbGRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gb2xkVXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA6IG9sZFVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VEYXRhU291cmNlSWQgPSBpc29sZFVzZURhdGFTb3VyY2VJc091dHB1dERzID8gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5tYWluRGF0YVNvdXJjZUlkIDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzW2ldPy5kYXRhU291cmNlSWRcclxuICAgICAgICAvLyBzdXBwb3J0IGRhdGEgdmlld1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlRGF0YVNvdXJjZUlkID09PSBvbGRVc2VEYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgIGlzVXNlT2xkRHMgPSB0cnVlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1VzZU9sZERzKSB7XHJcbiAgICAgIGluaXRVc2VEYXRhU291cmNlID0gb2xkVXNlRGF0YVNvdXJjZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLm1haW5EYXRhU291cmNlSWQsXHJcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0ucm9vdERhdGFTb3VyY2VJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBpbml0VXNlRGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlRGF0YVNvdXJjZUluZm8gKHdpZGdldElkOiBzdHJpbmcsIHVzZURhdGFTb3VyY2U6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4sIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGUuSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4sIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dpZGdldElkXVxyXG4gIGxldCBpc1JlYWRPbmx5ID0gZmFsc2VcclxuICBjb25zdCBkc1Jvb3RJZHMgPSBnZXREc1Jvb3RJZHNCeVdpZGdldElkKHdpZGdldElkKVxyXG4gIC8vaWYgKGRzUm9vdElkcyAmJiBkc1Jvb3RJZHMubGVuZ3RoID09PSAwICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIC8vaWYgKCFkc1Jvb3RJZHMgJiYgKHdpZGdldEpzb24gJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkpIHtcclxuICAvLyAgaXNSZWFkT25seSA9IHRydWVcclxuICAvL31cclxuXHJcbiAgaWYgKCFkc1Jvb3RJZHMgfHwgZHNSb290SWRzPy5sZW5ndGggPT09IDApIHtcclxuICAgIGlzUmVhZE9ubHkgPSBjaGVja0lzT25seU9uZURzKHdpZGdldEpzb24sIG1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBmcm9tRHNJZHMgPSBkc1Jvb3RJZHMgPyB1bmRlZmluZWQgOiBnZXREc0lkc0J5V2lkZ2V0SWQod2lkZ2V0SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGRzU2VsZWN0b3JTb3VyY2UgPSB7XHJcbiAgICBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5LFxyXG4gICAgdXNlRGF0YVNvdXJjZTogdXNlRGF0YVNvdXJjZSxcclxuICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlcyB8fCBbXSxcclxuICAgIGZyb21Sb290RHNJZHM6IGRzUm9vdElkcyxcclxuICAgIGZyb21Ec0lkczogZnJvbURzSWRzXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZHNTZWxlY3RvclNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3SWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBvdXRwdXREYXRhU291cmNlcyA9IGluaXRPdXRwdXREYXRhU291cmNlcyh3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcykgfHwgSW1tdXRhYmxlKFtdKVxyXG4gIGNvbnN0IGJvdGhEYXRhc291cmNlID0gdXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkuY29uY2F0KG91dHB1dERhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pKVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLlVzZURhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiB1c2VEYXRhU291cmNlc1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gSW1tdXRhYmxlKGJvdGhEYXRhc291cmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPdXRwdXREYXRhU291cmNlcyAob3V0cHV0RGF0YVNvdXJjZXMpOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPiB7XHJcbiAgY29uc3QgZHMgPSBvdXRwdXREYXRhU291cmNlcz8ubWFwKGRzSWQgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICBtYWluRGF0YVNvdXJjZUlkOiBkc0lkLFxyXG4gICAgICByb290RGF0YVNvdXJjZUlkOiBudWxsXHJcbiAgICB9XHJcbiAgfSkgPz8gW11cclxuICByZXR1cm4gSW1tdXRhYmxlKGRzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc09ubHlPbmVEcyAod2lkZ2V0SnNvbjogSU1XaWRnZXRKc29uLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIGRzUm9vdElkczogSW1tdXRhYmxlQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VDYXJyeURhdGEgPSBnZXRNZXNzYWdlQ2FycnlEYXRhQnlXaWRnZXRJZCh3aWRnZXRKc29uPy5pZCwgbWVzc2FnZVR5cGUpXHJcbiAgY29uc3Qgb3V0cHV0RHMgPSB3aWRnZXRKc29uPy5vdXRwdXREYXRhU291cmNlcyB8fCBbXVxyXG4gIGNvbnN0IHVzZURzID0gd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXMgfHwgW11cclxuICBpZiAoZHNSb290SWRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcbiAgc3dpdGNoIChtZXNzYWdlQ2FycnlEYXRhKSB7XHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIG91dHB1dERzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRHM/Lmxlbmd0aCA9PT0gMVxyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLkJvdGhEYXRhU291cmNlOlxyXG4gICAgICBjb25zdCBkc0xlbmd0aCA9IG91dHB1dERzLmxlbmd0aCArIHVzZURzLmxlbmd0aFxyXG4gICAgICByZXR1cm4gZHNMZW5ndGggPT09IDFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcENvbmZpZyAoKSB7XHJcbiAgcmV0dXJuIHdpbmRvdy5qaW11Q29uZmlnLmlzQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwU3RhdGVJbkJ1aWxkZXI/LmFwcENvbmZpZyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKT8uYXBwQ29uZmlnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERzUm9vdElkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nKSB7XHJcbiAgY29uc3QgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICBjb25zdCB3aWRnZXRKc29uID0gYXBwQ29uZmlnPy53aWRnZXRzPy5bd0lkXVxyXG4gIGNvbnN0IHJvb3RJZHMgPSBbXVxyXG4gIGNvbnN0IGRzTSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcz8uZm9yRWFjaCgodXNlRFM6IEltbXV0YWJsZS5JbW11dGFibGVPYmplY3Q8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IGRzID0gZHNNLmdldERhdGFTb3VyY2UodXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgaWYgKGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwIHx8IGRzPy50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViU2NlbmUpIHsgLy8gaXMgcm9vdCBkc1xyXG4gICAgICByb290SWRzLnB1c2godXNlRFMuZGF0YVNvdXJjZUlkKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJvb3RJZHMubGVuZ3RoID4gMCA/IEltbXV0YWJsZShyb290SWRzKSA6IHVuZGVmaW5lZFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc0lkc0J5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICByZXR1cm4gSW1tdXRhYmxlKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlcy5tYXAoKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGxldCByZXN1bHREc1xyXG4gICAgaWYgKGRzICYmIGRzLmlzRGF0YVZpZXcpIHtcclxuICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgcmVzdWx0RHMgPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0RHMgPSBkc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdERzPy5pZFxyXG4gIH0pID8/IFtdKVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xyXG5pbXBvcnQge1xyXG4gIEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSlNBUElMYXllck1peGluLCBnZW9tZXRyeVV0aWxzLFxyXG4gIGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VzSnNvbiwgdHlwZSBJbW11dGFibGVPYmplY3QsIE1lc3NhZ2VUeXBlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEhpZ2hMaWdodEhhbmRsZSwgdHlwZSBNYXBiYXNlUmVzdG9yZURhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHR5cGUgTWFwQmFzZSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHsgdHlwZSBJRmVhdHVyZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3RmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cclxuICBuZXdGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMobmV3RmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKCd0aGUgZmVhdHVyZSBsYXllciBpcyBhbHJlYWR5IGNyZWF0ZWQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG5ld0xheWVyUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgfSlcclxuXHJcbiAgaWYgKG5ld0xheWVyUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3TGF5ZXJQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXHJcbiAgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VkRmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgbWFwQmFzZVZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEZlYXR1cmVTZXRUb01hcCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZVNldDogX19lc3JpLkZlYXR1cmVTZXQsIGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XHJcbiAgICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xyXG5cclxuICAgICAgICBjb25zdCBsYXllckZyb21GZWF0dXJlU2V0ID0gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5sYXllciBhcyBhbnlcclxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXHJcbiAgICAgICAgY29uc3QgZmllbGRNYXAgPSB7fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0gZ2V0UmVhc29uYWJsZUZpZWxkKGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldKVxyXG4gICAgICAgICAgZmllbGRNYXBbbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0ubmFtZV0gPSBmaWVsZHNJdGVtLm5hbWVcclxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGRNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGRNYXBba2V5XSxcclxuICAgICAgICAgICAgICBsYWJlbDoga2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzSW5Qb3B1cFRlbXBsYXRlLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUZlYXR1cmVzID0gW11cclxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmVcclxuICAgICAgICAgIGlmICh0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkTWFwW2tleV1dID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMuZXhiZmlkID0gaW5kZXhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgZXhiZmlkOiBpbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzb3VyY2VGZWF0dXJlcy5wdXNoKHRlbXBGZWF0dXJlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICBpZDogbGF5ZXJJZCxcclxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxyXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VGZWF0dXJlcyxcclxuICAgICAgICAgIGZpZWxkczogZmllbGRzSW5GZWF0dXJlbGF5ZXIsXHJcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ2V4YmZpZCcsXHJcbiAgICAgICAgICByZW5kZXJlcjogbGF5ZXJGcm9tRmVhdHVyZVNldC5yZW5kZXJlcixcclxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpZWxkcycsXHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvczogZmllbGRzSW5Qb3B1cFRlbXBsYXRlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWFwQmFzZVZpZXcubWFwLmFkZChsYXllcilcclxuXHJcbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFzb25hYmxlRmllbGQgKGZpZWxkOiBfX2VzcmkuRmllbGQpOiBfX2VzcmkuRmllbGQge1xyXG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXHJcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXHJcbiAgICBhbGlhczogZmllbGQuYWxpYXMsXHJcbiAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgfSBhcyBhbnlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcclxuICAvLyBJbiB0aGlzIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBmZWF0dXJlcyBjb21lIGZyb20gdGhlIHNhbWUgbGF5ZXJcclxuICBsZXQgZmVhdHVyZUxheWVySWQgPSBsYXllcklkXHJcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG5cclxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcclxuICBpZiAoIWZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0IGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBGZWF0dXJlKSB7XHJcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgY29uc3QgbGF5ZXJWaWV3cyA9IG1hcEJhc2VWaWV3LmFsbExheWVyVmlld3NcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSkubGF5ZXIuaWQgPT09IGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICAgICAgZmVhdHVyZUxheWVyVmlldyA9IGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxheWVySWQ6IGZlYXR1cmVMYXllcklkLFxyXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9UYXJnZXRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICBjb25zdCBnZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXMoW190YXJnZXRdLCB2aWV3U1IpXHJcblxyXG4gIGlmIChnZW9tZXRyaWVzICYmIGdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2VvbWV0cmllc1swXVxyXG4gICAgdmlldy5nb1RvKHRhcmdldCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9WaWV3cG9pbnRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgY29uc3Qgdmlld3BvaW50ID0gYXdhaXQgcHJvamVjdFZpZXdwb2ludChfdmlld3BvaW50LCB2aWV3U1IpXHJcbiAgLy8gdmlldy5nb1RvKHZpZXdwb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIHZpZXcudmlld3BvaW50ID0gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0Vmlld3BvaW50ICh2aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBzcjEgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnk/LnNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgaWYgKHNyMSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjEsIHZpZXdTUikpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBzcjIgPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvbj8uc3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBpZiAoc3IyICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHNyMiwgdmlld1NSKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UgKHNyMTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UsIHNyMjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBpc1NhbWUgPSBzcjEud2tpZCA9PT0gc3IyLndraWQgfHwgc3IxLmVxdWFscyhzcjIpXHJcbiAgLy8gIEluIEpTIEFQSSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gIGNvbnN0IGlzTGlrZSA9IChzcjEuaXNXZWJNZXJjYXRvciB8fCBzcjEuaXNXR1M4NCkgJiYgKHNyMi5pc1dlYk1lcmNhdG9yIHx8IHNyMi5pc1dHUzg0KVxyXG4gIHJldHVybiAhaXNTYW1lICYmICFpc0xpa2VcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RWaWV3cG9pbnQgKF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5WaWV3cG9pbnQ+IHtcclxuICBjb25zdCB2aWV3cG9pbnQgPSBfdmlld3BvaW50LmNsb25lKClcclxuICBjb25zdCB0YXJnZXRHZW9tZXRyeSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeVxyXG4gIGNvbnN0IGNhbWVyYVBvc2l0b24gPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvblxyXG5cclxuICBjb25zdCB0b1Byb2plY3RHZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgbGV0IGlzUHJvamVjdFRhcmdldEdlb21ldHJ5OiBib29sZWFuID0gZmFsc2VcclxuICBsZXQgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBpZiAodGFyZ2V0R2VvbWV0cnkgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UodGFyZ2V0R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xyXG4gICAgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkgPSB0cnVlXHJcbiAgICB0b1Byb2plY3RHZW9tZXRyaWVzLnB1c2godGFyZ2V0R2VvbWV0cnkpXHJcbiAgfVxyXG5cclxuICBpZiAoY2FtZXJhUG9zaXRvbiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShjYW1lcmFQb3NpdG9uLnNwYXRpYWxSZWZlcmVuY2UsIHZpZXdTUikpIHtcclxuICAgIGlzUHJvamVjdENhbWVyYVBvc2l0aW9uID0gdHJ1ZVxyXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKGNhbWVyYVBvc2l0b24pXHJcbiAgfVxyXG5cclxuICBpZiAodG9Qcm9qZWN0R2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ZWRHZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXModG9Qcm9qZWN0R2VvbWV0cmllcywgdmlld1NSKVxyXG5cclxuICAgIGlmIChpc1Byb2plY3RUYXJnZXRHZW9tZXRyeSkge1xyXG4gICAgICB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSBwcm9qZWN0ZWRHZW9tZXRyaWVzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJvamVjdENhbWVyYVBvc2l0aW9uKSB7XHJcbiAgICAgIHZpZXdwb2ludC5jYW1lcmEucG9zaXRpb24gPSBwcm9qZWN0ZWRHZW9tZXRyaWVzW3Byb2plY3RlZEdlb21ldHJpZXMubGVuZ3RoIC0gMV0gYXMgX19lc3JpLlBvaW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXBQYW50byAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkgfCBfX2VzcmkuR2VvbWV0cnlbXSB8XHJcbl9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IF9fZXNyaS5FeHRlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxyXG4gIGNvbnN0IHRlbXBCYXNlTWFwVmlldyA9IG1hcEJhc2VWaWV3IGFzIGFueVxyXG4gIGlmIChwYW5Ub1RhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSB7IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpOyByZXR1cm4gfVxyXG5cclxuICAgIGlmIChwYW5Ub1RhcmdldFswXS5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhblRvVGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ2VvbWV0cnlBcnIucHVzaChwYW5Ub1RhcmdldFtpXS5nZW9tZXRyeSlcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgZ2V0R2VvbWV0cmllc0V4dGVudChnZW9tZXRyeUFycikudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XHJcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQoZ2V0bWV0cnkpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIGRlbGF5IGJlZm9yZSB1cGRhdGluZyBvZiB2aWV3IHR1cm5zIHRydWUsIDQwMG1zIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vLy8gdGhlcmUgaXMgYSBjb25mbGljdCBmb3IgcGFuaW5nIHdoZW4gdGhlIGxheWVyIHZpZXcgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3BhbiB0bycgYW5kICdmaWx0ZXInLlxyXG4gICAgICAvLy8vIHRoaXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24sIGl0IGNhbiByZWR1Y2UgdGhlIGZyZXF1ZW5jeSBvZiB0aGUgcHJvYmxlbSByYXRoZXIgdGhhbiBzb2x2ZSBpdCBjb21wbGV0ZWx5LlxyXG4gICAgICAvL2lmICh2aWV3LnVwZGF0aW5nKSB7XHJcbiAgICAgIC8vICBjb25zdCBoYW5kbGVyID0gdmlldy53YXRjaCgndXBkYXRpbmcnLCB2YWx1ZSA9PiB7XHJcbiAgICAgIC8vICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgLy8gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vICAgICAgaGFuZGxlci5yZW1vdmUoKVxyXG4gICAgICAvLyAgICB9XHJcbiAgICAgIC8vICB9KVxyXG4gICAgICAvL30gZWxzZSB7XHJcbiAgICAgIC8vICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vfVxyXG4gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHsgcmVzb2x2ZSgpIH0pLmNhdGNoKCgpID0+IHsgcmVqZWN0KCkgfSlcclxuICAgIH0sIDQwMClcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9tZXRyaWVzRXh0ZW50IChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSk6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xyXG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcclxuICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudDtcclxuICAgIFtFeHRlbnRdID0gbW9kdWxlc1xyXG5cclxuICAgIGlmICghZ2VvbWV0cmllcyB8fCAhZ2VvbWV0cmllcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmdWxsRXh0ZW50OiBfX2VzcmkuRXh0ZW50ID0gbnVsbFxyXG4gICAgbGV0IGluZGV4XHJcbiAgICBjb25zdCBudW1HZW9tZXRyaWVzID0gZ2VvbWV0cmllcy5sZW5ndGhcclxuXHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF1cclxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuXHJcbiAgICAgIGlmICghZXh0ZW50ICYmIGdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XHJcblxyXG4gICAgICAgIGlmIChwb2ludEdlb21ldHJ5LnggJiYgcG9pbnRHZW9tZXRyeS55KSB7XHJcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcclxuICAgICAgICAgICAgeG1heDogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB4bWluOiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgeW1pbjogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB6bWF4OiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFleHRlbnQpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZnVsbEV4dGVudCkge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBmdWxsRXh0ZW50LnVuaW9uKGV4dGVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZXh0ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnVsbEV4dGVudC53aWR0aCA8IDAgJiYgZnVsbEV4dGVudC5oZWlnaHQgPCAwKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbHRlckZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBhY3Rpb25MYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFhY3Rpb25MYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyICYmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xyXG4gICAgKGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLnNldERlZmluaXRpb25FeHByZXNzaW9uKHF1ZXJ5U1FMKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlGZWF0dXJlcyAobGF5ZXJPYmplY3QsIHF1ZXJ5U1FMKSB7XHJcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XHJcbiAgICBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxyXG4gICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIHJldHVybiBmZWF0dXJlU2V0XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IGZlYXR1cmVMYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICBxdWVyeUZlYXR1cmVzKGZlYXR1cmVMYXllclZpZXcubGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcclxuICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xyXG5cclxuICAgICAgbGV0IHRlbXBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRlbXBGZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxubGV0IHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IG51bGxcclxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBzY2VuZUxheWVyVmlldzogX19lc3JpLlNjZW5lTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBxdWVyeUZlYXR1cmVzKHNjZW5lTGF5ZXJWaWV3Py5sYXllcj8uYXNzb2NpYXRlZExheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxyXG4gICAgICAgIGNvbnN0IG9iamVjdElkcyA9IGZlYXR1cmVTZXQuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdKVxyXG5cclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBjb25zdCBtYXhGbGFzaENvdW50ID0gNlxyXG4gICAgICAgIGxldCBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xyXG5cclxuICAgICAgICBjb25zdCBmbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IFswLCAwLCAwLCAwXSB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogaGlnaGxpZ2h0Q29sb3IgfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9uc1xyXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyKSB7XHJcbiAgICBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xyXG4gICAgICBmbGFzaE9uRmVhdHVyZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldylcclxuICAgIH0gZWxzZSBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcclxuICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Rmxhc2ggKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBzeW1ib2wpIHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL0dyYXBoaWMnXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYztcclxuICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICBjb25zdCBmbGFzaEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBtYXhGbGFzaENvdW50OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXVxyXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlbXBHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxyXG4gICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlc1tpXS5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBncmFwaGljcy5wdXNoKHRlbXBHcmFwaGljKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaW5nbGVGbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5hZGRNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MucmVtb3ZlTWFueShncmFwaGljcylcclxuICAgICAgICAgIGZsYXNoQ291bnQgPSBmbGFzaENvdW50ICsgMVxyXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfVxyXG5cclxuICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZsYXNoRmVhdHVyZXMoZmVhdHVyZXMsIDMpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XHJcbiAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICBzaXplOiAnMTZweCcsXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWxpbmUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICB3aWR0aDogMyxcclxuICAgICAgc3R5bGU6ICdzb2xpZCdcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcclxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydtZXNoJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ21lc2gtM2QnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IE1lc2hTeW1ib2wzRCgpXHJcbiAgICAgIHN5bWJvbExheWVyczogW3tcclxuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxyXG4gICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0gfVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xyXG4gIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcclxuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcclxuICAgIGNhc2UgJ3BvaW50JzpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgY2FzZSAnZXh0ZW50JzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcclxuICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZFxyXG4gICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcclxuICAgIC8vIHRvZG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGZWF0dXJlIChmZWF0dXJlOiBJRmVhdHVyZSB8IF9fZXNyaS5HcmFwaGljLCBHcmFwaGljOiBfX2VzcmkuR3JhcGhpY0NvbnN0cnVjdG9yKTogX19lc3JpLkdyYXBoaWMge1xyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuICBpZiAoKGZlYXR1cmUgYXMgYW55KS5jbG9uZSkge1xyXG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcEZlYXR1cmUgPSBHcmFwaGljLmZyb21KU09OKE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUpKVxyXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcclxuICB9XHJcbiAgcmV0dXJuIHRlbXBGZWF0dXJlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0R2VvbWV0cmllcyAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10sIHNwYXRpYWxSZWZlcmVuY2U6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuR2VvbWV0cnlbXT4ge1xyXG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZS53a2lkID09PSBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2Uud2tpZCB8fCAoc3BhdGlhbFJlZmVyZW5jZS5lcXVhbHMoZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlKSkpIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VvbWV0cnlVdGlscy5wcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKGdlb21ldHJpZXMsIHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1pvb21Ub0ZlYXR1cmVzIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBsYXllcjogYW55LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSk6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xyXG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcclxuICAgIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxyXG4gICAgICBxdWVyeS5vYmplY3RJZHMgPSBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbbGF5ZXIub2JqZWN0SWRGaWVsZF0pXHJcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWF0dXJlcyAmJiByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSBmZWF0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0LmZlYXR1cmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XHJcbiAgICBpZiAoYXBwTW9kZSA9PT0gQXBwTW9kZS5EZXNpZ24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0Zyb21EYXRhU291cmNlSWRzIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgZGF0YVNvdXJjZUlkcy5mb3JFYWNoKGRhdGFTb3VyY2VJZCA9PiB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW5cclxuICAgIGxldCBsYXllclByb21pc2VcclxuICAgIGlmIChkYXRhU291cmNlPy5sYXllcikge1xyXG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGF0YVNvdXJjZS5sYXllcilcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSkge1xyXG4gICAgICBsYXllclByb21pc2UgPSBkYXRhU291cmNlLmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcbiAgICBsYXllclByb21pc2VzLnB1c2gobGF5ZXJQcm9taXNlKVxyXG4gIH0pXHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKGxheWVyUHJvbWlzZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRKaW11TWFwVmlld0lkICh3aWRnZXRJZDogc3RyaW5nLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gSWYgZGF0YVNvdXJjZUlkIGlzIG51bGwsIG1ha2Ugc3VyZSBpdCBjb252ZXJ0cyB0byBlbXB0eSBzdHJpbmcuXHJcbiAgY29uc3QgZHNJZCA9IGRhdGFTb3VyY2VJZCB8fCAnJ1xyXG4gIHJldHVybiBgJHt3aWRnZXRJZH0tJHtkc0lkfWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEJhc2VSZXN0b3JlRGF0YSAobWFwSW5zdGFuY2U6IE1hcEJhc2UpOiBNYXBiYXNlUmVzdG9yZURhdGEge1xyXG4gIGNvbnN0IHtcclxuICAgIG1hcENvbnRhaW5lcixcclxuICAgIHN0YXRlLFxyXG4gICAgR2VvbWV0cnksXHJcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXHJcbiAgICBUaWxlTGF5ZXIsXHJcbiAgICBCYXNlbWFwLFxyXG4gICAgTWFwVmlldyxcclxuICAgIFNjZW5lVmlldyxcclxuICAgIEV4dGVudCxcclxuICAgIFZpZXdwb2ludCxcclxuICAgIFBvcnRhbEl0ZW0sXHJcbiAgICBQb3J0YWwsXHJcbiAgICBXZWJNYXAsXHJcbiAgICBXZWJTY2VuZSxcclxuICAgIENvbG9yLFxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG4gICAgZHNNYW5hZ2VyLFxyXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXHJcbiAgfSA9IG1hcEluc3RhbmNlXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZSxcclxuXHJcbiAgICBHZW9tZXRyeSxcclxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcclxuICAgIFRpbGVMYXllcixcclxuICAgIEJhc2VtYXAsXHJcbiAgICBNYXBWaWV3LFxyXG4gICAgU2NlbmVWaWV3LFxyXG4gICAgRXh0ZW50LFxyXG4gICAgVmlld3BvaW50LFxyXG4gICAgUG9ydGFsSXRlbSxcclxuICAgIFBvcnRhbCxcclxuICAgIFdlYk1hcCxcclxuICAgIFdlYlNjZW5lLFxyXG4gICAgQ29sb3IsXHJcblxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG5cclxuICAgIGRzTWFuYWdlcixcclxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IE1hcGJhc2VSZXN0b3JlRGF0YSk6IHZvaWQge1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN0b3JlRGF0YSlcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgbWFwSW5zdGFuY2Vba2V5XSA9IHJlc3RvcmVEYXRhW2tleV1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1R3b1dpZGdldHNNdXR1YWxseUV4dGVudENoYW5nZSAod2lkZ2V0SWQxOiBzdHJpbmcsIHdpZGdldElkMjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpZGdldElkMSAmJiB3aWRnZXRJZDIpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3BhblRvJywgJ3pvb21Ub0ZlYXR1cmUnXVxyXG4gICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZVxyXG5cclxuICAgICAgaWYgKGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQxLCB3aWRnZXRJZDIsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpICYmXHJcbiAgICAgICAgIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQyLCB3aWRnZXRJZDEsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIgKHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgYWN0aW9uV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3pvb21Ub0ZlYXR1cmUnXVxyXG5cclxuICAgICAgcmV0dXJuIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIoc2VuZE1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uV2lkZ2V0SWQsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlciAoXHJcbiAgc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLFxyXG4gIGFjdGlvbldpZGdldElkOiBzdHJpbmcsXHJcbiAgbWVzc2FnZUNvbmZpZ3M6IEltbXV0YWJsZU9iamVjdDxNZXNzYWdlc0pzb24+LFxyXG4gIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSxcclxuICBhY3Rpb25OYW1lczogc3RyaW5nW11cclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlSnNvbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhtZXNzYWdlQ29uZmlncylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VKc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVzc2FnZUpzb24gPSBtZXNzYWdlSnNvbkFycmF5W2ldXHJcblxyXG4gICAgICBpZiAobWVzc2FnZUpzb24ud2lkZ2V0SWQgPT09IHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgbWVzc2FnZUpzb24ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG1lc3NhZ2VKc29uLmFjdGlvbnNcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhY3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2pdXHJcblxyXG4gICAgICAgICAgaWYgKGFjdGlvbi53aWRnZXRJZCA9PT0gYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWVzLmluY2x1ZGVzKGFjdGlvbi5hY3Rpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XHJcbiAgQWJzdHJhY3RNZXNzYWdlQWN0aW9uLCBNZXNzYWdlVHlwZSwgdHlwZSBNZXNzYWdlLCBnZXRBcHBTdG9yZSwgdHlwZSBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgdHlwZSBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZSxcclxuICB0eXBlIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgdHlwZSBFeHRlbnRDaGFuZ2VNZXNzYWdlLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkIGFzIEZlYXR1cmVRdWVyeURhdGFSZWNvcmQsIE11dGFibGVTdG9yZU1hbmFnZXIsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIE1lc3NhZ2VEZXNjcmlwdGlvbixcclxuICB0eXBlIERhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZSwgRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgSW1tdXRhYmxlQXJyYXlcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgRmVhdHVyZURhdGFSZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZCwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBoYW5kbGVGZWF0dXJlLCBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi9wYW4tdG8tYWN0aW9uLXNldHRpbmcnXHJcbmltcG9ydCB7IGdldERzQnlXaWRnZXRJZCB9IGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAncGFuLXRvLWdlb21ldHJpZXMnXHJcbiAgZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0V4dGVudEludGVybmFsVmFsdWUge1xyXG4gIHR5cGU6ICdwYW4tdG8tZXh0ZW50J1xyXG4gIGdlb21ldHJpZXM6IFtfX2VzcmkuRXh0ZW50XVxyXG4gIHN0YXRpb25hcnk6IGJvb2xlYW5cclxuICBwdWJsaXNoVGltZTogbnVtYmVyXHJcbiAgcHVibGlzaFdpZGdldElkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub1F1ZXJ5UGFyYW1zSW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3Bhbi10by1xdWVyeS1wYXJhbXMnXHJcbiAgZGF0YVNvdXJjZUlkczogc3RyaW5nW11cclxuICB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0xheWVySW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3Bhbi10by1sYXllcidcclxuICBkYXRhU291cmNlSWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhblRvTGF5ZXJzSW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3Bhbi10by1sYXllcnMnXHJcbiAgZGF0YVNvdXJjZUlkczogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5Ub0FjdGlvblZhbHVlIHtcclxuICB2YWx1ZTogUGFuVG9HZW9tZXRyaWVzSW50ZXJuYWxWYWx1ZSB8IFBhblRvRXh0ZW50SW50ZXJuYWxWYWx1ZSB8IFBhblRvUXVlcnlQYXJhbXNJbnRlcm5hbFZhbHVlIHwgUGFuVG9MYXllckludGVybmFsVmFsdWUgfCBQYW5Ub0xheWVyc0ludGVybmFsVmFsdWVcclxuICByZWxhdGVkV2lkZ2V0czogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuVG9BY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xyXG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXHJcblxyXG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcclxuICAgIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VzQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSAmJlxyXG4gICAgICAgIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UgJiZcclxuICAgICAgICBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VEZXNjcmlwdGlvbi53aWRnZXRJZCwgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGlmIChkcy50eXBlID09PSAnV0VCX01BUCcgfHwgZHMudHlwZSA9PT0gJ1dFQl9TQ0VORScpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAhIWRzLmdldERhdGFTb3VyY2VKc29uKCk/Lmdlb21ldHJ5VHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvL2NvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlciA/IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnXHJcbiAgICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG4gICAgaWYgKG1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZSB8fFxyXG4gICAgICAgICAgbWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuICdtZXNzYWdlLWFjdGlvbnMvcGFuLXRvLWFjdGlvbi1zZXR0aW5nJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICAvLyBtZXNzYWdlLndpZGdldElkIGlzIG1lc3NhZ2Ugc2VuZGVyLCB0aGlzLndpZGdldElkIGlzIG1lc3NhZ2UgcmVjZWl2ZXJcclxuXHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlOlxyXG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlKSkge1xyXG4gICAgICAgICAgICAvLyBtZXNzYWdlLndpZGdldElkIHNlbmRzIGJvdGggcGFuVG8gYW5kIHpvb21UbyBhY3Rpb25zIHRvIHRoaXMud2lkZ2V0SWQsIHdlIHNob3VsZCBub3QgZXhlY3V0ZSBwYW5UbyBhY3Rpb24gdG8gYXZvaWQgY29uZmxpY3Qgd2l0aCB6b29tVG8gYWN0aW9uLlxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZVxyXG4gICAgICAgICAgaWYgKGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLmNoYW5nZVR5cGUgPT09IFJlY29yZFNldENoYW5nZVR5cGUuQ3JlYXRlVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgICAgICAgICAgZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuZGF0YVJlY29yZFNldHMuZm9yRWFjaChkYXRhUmVjb3JkU2V0ID0+IHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldCAmJiBkYXRhUmVjb3JkU2V0LnJlY29yZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJlY29yZFNldC5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRGZWF0dXJlID0gKGRhdGFSZWNvcmRTZXQucmVjb3Jkc1tpXSBhc1xyXG4gICAgICAgICAgICAgICAgICAgIChGZWF0dXJlUXVlcnlEYXRhUmVjb3JkIHwgRmVhdHVyZUxheWVyRGF0YVJlY29yZCkpLmZlYXR1cmVcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRGZWF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGhhbmRsZUZlYXR1cmUoZGF0YVJlY29yZEZlYXR1cmUsIEdyYXBoaWMpLmdlb21ldHJ5KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBwYW5Ub1ZhbHVlOiBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlID0ge1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tZ2VvbWV0cmllcycsXHJcbiAgICAgICAgICAgICAgZ2VvbWV0cmllczogZ2VvbWV0cmllc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgcGFuVG9WYWx1ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcclxuICAgICAgICAgIGlmIChpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIobWVzc2FnZS53aWRnZXRJZCwgdGhpcy53aWRnZXRJZCwgTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2Uud2lkZ2V0SWQgc2VuZHMgYm90aCBwYW5UbyBhbmQgem9vbVRvIGFjdGlvbnMgdG8gdGhpcy53aWRnZXRJZCwgd2Ugc2hvdWxkIG5vdCBleGVjdXRlIHBhblRvIGFjdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIHpvb21UbyBhY3Rpb24uXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlLndpZGdldElkXVxyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldExhYmVsID0gbWVzc2FnZVdpZGdldEpzb24ubWFuaWZlc3QubGFiZWxcclxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcblxyXG4gICAgICAgICAgY29uc3QgZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gICAgICAgICAgaWYgKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXSkge1xyXG4gICAgICAgICAgICAgIC8vaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSB8fCAoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpLmlkICE9PSBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgIC8vICBicmVha1xyXG4gICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgIGlmICh0aGlzLk5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMuaW5jbHVkZXMobWVzc2FnZVdpZGdldExhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbkRhdGFTb3VyY2VPZlNlbGVjdGlvbiA9IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UuZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb25Db25maWc/LnVzZURhdGFTb3VyY2VzPy5zb21lKHVzZURhdGFTb3VyY2UgPT4gdXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA9PT0gbWFpbkRhdGFTb3VyY2VPZlNlbGVjdGlvbi5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hhbmdlRFMgPSBkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXS5kYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGFuZ2VNYWluRFMgPSBzZWxlY3Rpb25DaGFuZ2VEUz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZHNJZCBvZiBtYWluRFMgY3VycmVudGx5LCB3aWxsIHN1cHBvcnQgdmlldyBpbiB0aGUgZnV0dXJlLlxyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuc29tZSh1c2VEYXRhU291cmNlID0+IHVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgPT09IHNlbGVjdGlvbkNoYW5nZU1haW5EUy5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhUmVjb3JkRmVhdHVyZSA9IChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1tpXSBhc1xyXG4gICAgICAgICAgICAgICAgKEZlYXR1cmVRdWVyeURhdGFSZWNvcmQgfCBGZWF0dXJlTGF5ZXJEYXRhUmVjb3JkKSkuZmVhdHVyZVxyXG4gICAgICAgICAgICAgIGlmIChkYXRhUmVjb3JkRmVhdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgZ2VvbWV0cmllcy5wdXNoKGhhbmRsZUZlYXR1cmUoZGF0YVJlY29yZEZlYXR1cmUsIEdyYXBoaWMpLmdlb21ldHJ5KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHBhblRvVmFsdWU6IFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYW4tdG8tZ2VvbWV0cmllcycsXHJcbiAgICAgICAgICAgIGdlb21ldHJpZXM6IGdlb21ldHJpZXNcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZS52YWx1ZScsIHBhblRvVmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxyXG4gICAgICAgICAgaWYgKGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcihtZXNzYWdlLndpZGdldElkLCB0aGlzLndpZGdldElkLCBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2Uud2lkZ2V0SWQgc2VuZHMgYm90aCBwYW5UbyBhbmQgem9vbVRvIGFjdGlvbnMgdG8gdGhpcy53aWRnZXRJZCwgd2Ugc2hvdWxkIG5vdCBleGVjdXRlIHBhblRvIGFjdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIHpvb21UbyBhY3Rpb24uXHJcbiAgICAgICAgICAgIC8vIGlzV2lkZ2V0U2VuZFpvb21Ub0FjdGlvblRvQW5vdGhlcigpIGNhbiBvbmx5IGhhbmRsZSBzaW1wbGUgcGFuVG8gYW5kIHpvb21UbyBjb25mbGljdC5cclxuICAgICAgICAgICAgLy8gVG8gYXZvaWQgbW9yZSBjb21wbGljYXRlZCBwYW5UbyBhbmQgem9vbVRvIGNvbmZsaWN0IGNhc2VzLCB3ZSBkbyBpdCBpbiBoYW5kbGVBY3Rpb25Gb3JQYW5Ub0FjdGlvblZhbHVlIG9mIG1hcGJhc2UuXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZXh0ZW50Q2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRXh0ZW50Q2hhbmdlTWVzc2FnZVxyXG4gICAgICAgICAgY29uc3QgcmVsYXRlZFdpZGdldElkcyA9IGV4dGVudENoYW5nZU1lc3NhZ2UuZ2V0UmVsYXRlZFdpZGdldElkcygpXHJcblxyXG4gICAgICAgICAgaWYgKHJlbGF0ZWRXaWRnZXRJZHMuaW5jbHVkZXModGhpcy53aWRnZXRJZCkpIHtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zdCBleHRlbnRWYWx1ZTogUGFuVG9FeHRlbnRJbnRlcm5hbFZhbHVlID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAncGFuLXRvLWV4dGVudCcsXHJcbiAgICAgICAgICAgIGdlb21ldHJpZXM6IFtleHRlbnRDaGFuZ2VNZXNzYWdlLmV4dGVudF0sXHJcbiAgICAgICAgICAgIHN0YXRpb25hcnk6IGV4dGVudENoYW5nZU1lc3NhZ2Uuc3RhdGlvbmFyeSxcclxuICAgICAgICAgICAgcHVibGlzaFRpbWU6IGV4dGVudENoYW5nZU1lc3NhZ2UucHVibGlzaFRpbWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hXaWRnZXRJZDogZXh0ZW50Q2hhbmdlTWVzc2FnZS53aWRnZXRJZFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHBhblRvRmVhdHVyZUFjdGlvblZhbHVlOiBQYW5Ub0FjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogZXh0ZW50VmFsdWUsXHJcbiAgICAgICAgICAgIHJlbGF0ZWRXaWRnZXRzOiByZWxhdGVkV2lkZ2V0SWRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZScsIHBhblRvRmVhdHVyZUFjdGlvblZhbHVlKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2U6XHJcbiAgICAgICAgICBpZiAoaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyKG1lc3NhZ2Uud2lkZ2V0SWQsIHRoaXMud2lkZ2V0SWQsIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2Uud2lkZ2V0SWQgc2VuZHMgYm90aCBwYW5UbyBhbmQgem9vbVRvIGFjdGlvbnMgdG8gdGhpcy53aWRnZXRJZCwgd2Ugc2hvdWxkIG5vdCBleGVjdXRlIHBhblRvIGFjdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIHpvb21UbyBhY3Rpb24uXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZmlsdGVyQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgIC8vIHN1cHBvcnQgdmlldy5cclxuICAgICAgICAgIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiBmaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMuc29tZShkYXRhU291cmNlSWQgPT4gdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkID09PSBkYXRhU291cmNlSWQpKSkge1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZUFjdGlvblZhbHVlOiBQYW5Ub1F1ZXJ5UGFyYW1zSW50ZXJuYWxWYWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3Bhbi10by1xdWVyeS1wYXJhbXMnLFxyXG4gICAgICAgICAgICBkYXRhU291cmNlSWRzOiBmaWx0ZXJDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VJZHMsXHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzOiBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMgfHwgKFtdIGFzIHVua25vd24gYXMgSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3BhblRvQWN0aW9uVmFsdWUudmFsdWUnLCBmaWx0ZXJDaGFuZ2VBY3Rpb25WYWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlc0NoYW5nZTpcclxuICAgICAgICAgIGlmIChpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIobWVzc2FnZS53aWRnZXRJZCwgdGhpcy53aWRnZXRJZCwgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgIC8vIG1lc3NhZ2Uud2lkZ2V0SWQgc2VuZHMgYm90aCBwYW5UbyBhbmQgem9vbVRvIGFjdGlvbnMgdG8gdGhpcy53aWRnZXRJZCwgd2Ugc2hvdWxkIG5vdCBleGVjdXRlIHBhblRvIGFjdGlvbiB0byBhdm9pZCBjb25mbGljdCB3aXRoIHpvb21UbyBhY3Rpb24uXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhU291cmNlc0NoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgIGlmIChkYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLkNyZWF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU291cmNlSWRzID0gW11cclxuICAgICAgICAgICAgZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VzLmZvckVhY2goZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkcy5wdXNoKGRhdGFTb3VyY2UuaWQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHBhblRvRmVhdHVyZUFjdGlvblZhbHVlRm9yTGF5ZXJzOiBQYW5Ub0xheWVyc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3Bhbi10by1sYXllcnMnLFxyXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2VJZHM6IGRhdGFTb3VyY2VJZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZS52YWx1ZScsIHBhblRvRmVhdHVyZUFjdGlvblZhbHVlRm9yTGF5ZXJzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9