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
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/zoom-to-feature-action.ts ***!
  \**********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomToFeatureAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./your-extensions/widgets/arcgis-map-112/src/runtime/utils.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-utils */ "./your-extensions/widgets/arcgis-map-112/src/message-actions/action-utils.ts");




class ZoomToFeatureAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
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
        if (messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange ||
            messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange ||
            messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange) {
            return 'message-actions/zoom-to-feature-action-setting';
        }
        else {
            return null;
        }
    }
    onExecute(message, actionConfig) {
        return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
            var _a;
            let Graphic = null;
            [Graphic] = modules;
            let zoomToOption = null;
            const viewPadding = {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            };
            switch (message.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange:
                    const dataRecordSetChangeMessage = message;
                    if (dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.CreateUpdate) {
                        const arrayFeatures = [];
                        dataRecordSetChangeMessage.dataRecordSets.forEach(dataRecordSet => {
                            if (dataRecordSet && dataRecordSet.records) {
                                const features = [];
                                for (let i = 0; i < dataRecordSet.records.length; i++) {
                                    if (dataRecordSet.records[i].feature) {
                                        features.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(dataRecordSet.records[i].feature, Graphic));
                                    }
                                }
                                if (features.length > 0) {
                                    arrayFeatures.push(features);
                                }
                            }
                        });
                        zoomToOption = getZoomToOptions(actionConfig, viewPadding);
                        const zoomToValue = {
                            type: 'zoom-to-array-graphics',
                            arrayFeatures: arrayFeatures,
                            zoomToOption: zoomToOption
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', zoomToValue);
                    }
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                    const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    const messageWidgetJson = config.widgets[message.widgetId];
                    const messageWidgetLabel = messageWidgetJson.manifest.label;
                    const dataRecordsSelectionChangeMessage = message;
                    const selectFeatures = [];
                    let dataSourceId = null;
                    if (dataRecordsSelectionChangeMessage.records) {
                        if (dataRecordsSelectionChangeMessage.records[0]) {
                            if (dataRecordsSelectionChangeMessage.records[0].dataSource) {
                                dataSourceId = (dataRecordsSelectionChangeMessage.records[0].dataSource).id;
                            }
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
                            if (dataRecordsSelectionChangeMessage.records[i].feature) {
                                selectFeatures.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(dataRecordsSelectionChangeMessage.records[i].feature, Graphic));
                            }
                        }
                    }
                    zoomToOption = getZoomToOptions(actionConfig, viewPadding);
                    const selectionFeatureSet = {
                        type: 'zoom-to-graphics',
                        features: selectFeatures,
                        dataSourceId: dataSourceId,
                        zoomToOption: zoomToOption
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', selectionFeatureSet);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                    const extentChangeMessage = message;
                    const relatedWidgetIds = extentChangeMessage.getRelatedWidgetIds();
                    if (relatedWidgetIds.includes(this.widgetId)) {
                        break;
                    }
                    const extentValue = {
                        type: 'zoom-to-extent',
                        extent: extentChangeMessage.extent,
                        viewpoint: extentChangeMessage.viewpoint,
                        stationary: extentChangeMessage.stationary,
                        interacive: extentChangeMessage.interacive,
                        zoomToOption: undefined,
                        publishTime: extentChangeMessage.publishTime,
                        publishWidgetId: extentChangeMessage.widgetId
                    };
                    const zoomToFeatureActionValue = {
                        value: extentValue,
                        relatedWidgets: relatedWidgetIds
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue', zoomToFeatureActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                    const filterChangeMessage = message;
                    // support data view.
                    if (!actionConfig.useDataSources.some(useDataSource => filterChangeMessage.dataSourceIds.some(dataSourceId => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === dataSourceId))) {
                        break;
                    }
                    zoomToOption = getZoomToOptions(actionConfig, viewPadding);
                    const filterChangeActionValue = {
                        type: 'zoom-to-query-params',
                        dataSourceIds: filterChangeMessage.dataSourceIds,
                        zoomToOption: zoomToOption,
                        useDataSources: actionConfig.useDataSources || []
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', filterChangeActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourcesChange:
                    const dataSourcesChangeMessage = message;
                    if (dataSourcesChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourcesChangeType.Create) {
                        const dataSourceIds = [];
                        dataSourcesChangeMessage.dataSources.forEach(dataSource => {
                            dataSourceIds.push(dataSource.id);
                        });
                        zoomToOption = getZoomToOptions(actionConfig, viewPadding);
                        const zoomToFeatureActionValueForLayers = {
                            type: 'zoom-to-layers',
                            dataSourceIds: dataSourceIds,
                            zoomToOption: zoomToOption
                        };
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', zoomToFeatureActionValueForLayers);
                    }
                    break;
            }
            return true;
        });
    }
}
function getZoomToOptions(actionConfig, padding) {
    let zoomToOptions = {};
    if (actionConfig && actionConfig.isUseCustomZoomToOption && typeof actionConfig.zoomToOption.scale === 'number') {
        zoomToOptions.scale = actionConfig.zoomToOption.scale;
    }
    if (padding) {
        zoomToOptions.padding = padding;
    }
    if (Object.keys(zoomToOptions).length === 0) {
        zoomToOptions = null;
    }
    return zoomToOptions;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyTDtBQUN4STtBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FBT00sU0FBUyxvQkFBb0IsQ0FBRSxZQUFxRCxFQUFFLGVBQXVCLEVBQUUsV0FBd0I7SUFDNUksTUFBTSxNQUFNLEdBQUcsWUFBWSxFQUFFO0lBQzdCLDJEQUEyRDtJQUUzRCxJQUFJLGFBQWEsR0FBb0IsSUFBSTtJQUN6QyxNQUFNLGNBQWMsR0FBc0IsRUFBRTtJQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtRQUMvQixNQUFNLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO1FBQ2pGLDZHQUE2RztRQUM3RyxJQUFJLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELElBQUksaUJBQWlCO2dCQUNyQixJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxxRUFBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyx1RUFBOEIsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xILGlCQUFpQixHQUFHLElBQUk7aUJBQ3pCO3FCQUFNO29CQUNMLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7d0JBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTt3QkFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO3FCQUM3QixDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLGFBQWEsR0FBRyxpQkFBaUI7cUJBQ2xDO29CQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtTQUFNO1FBQ0wsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUMvRixJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUU7WUFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7Z0JBQ3BGLGlCQUFpQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDN0QsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU87UUFDTCxhQUFhLEVBQUUsYUFBYTtRQUM1QixjQUFjLEVBQUUsY0FBYztLQUMvQjtBQUNILENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUFFLGVBQXVCLEVBQUUsZ0JBQTBELEVBQUUsV0FBd0I7O0lBQzNJLE1BQU0sTUFBTSxHQUFHLFlBQVksRUFBRTtJQUM3QixvREFBb0Q7SUFDcEQsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztJQUNqRixJQUFJLGlCQUFpQixHQUFHLElBQUk7SUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSztJQUVuQixNQUFNLElBQUksR0FBRywyQkFBMkIsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO0lBQ3pILElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUk7S0FDWjtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHFFQUE0QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHVFQUE4QixDQUFDLENBQUMsRUFBRTtRQUNsSCxPQUFPLEdBQUcsSUFBSTtLQUNmO0lBRUQsTUFBTSxHQUFHLEdBQUcsb0VBQTZCLEVBQUU7SUFDM0MsTUFBTSw0QkFBNEIsR0FBRyxlQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQywwQ0FBRSxpQkFBaUIsRUFBRSwwQ0FBRSxrQkFBa0I7SUFFOUgsSUFBSSxPQUFPLEVBQUU7UUFDWCx3QkFBd0I7UUFDeEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELElBQUksMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFO29CQUNyRixVQUFVLEdBQUcsSUFBSTtvQkFDakIsTUFBSztpQkFDTjthQUNGO1NBQ0Y7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLGlCQUFpQixHQUFHLGdCQUFnQjtTQUNyQzthQUFNO1lBQ0wsaUJBQWlCLEdBQUcsSUFBSTtTQUN6QjtLQUNGO1NBQU07UUFDTCxrQkFBa0I7UUFDbEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELE1BQU0sa0JBQWtCLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxZQUFZO2dCQUM3SCxNQUFNLHNCQUFzQixHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxpQ0FBMkIsQ0FBQyxDQUFDLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGlDQUEyQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxZQUFZO2dCQUM3SixvQkFBb0I7Z0JBQ3BCLElBQUksc0JBQXNCLEtBQUssa0JBQWtCLEVBQUU7b0JBQ2pELFVBQVUsR0FBRyxJQUFJO29CQUNqQixNQUFLO2lCQUNOO2FBQ0Y7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsaUJBQWlCLEdBQUcsZ0JBQWdCO1NBQ3JDO2FBQU07WUFDTCxJQUFJLDJCQUEyQixJQUFJLDJCQUEyQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNFLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7b0JBQzVCLFlBQVksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUN6RCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7b0JBQ2pFLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDbEUsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLGlCQUFpQixHQUFHLElBQUk7YUFDekI7U0FDRjtLQUNGO0lBRUQsT0FBTyxpQkFBaUI7QUFDMUIsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUUsUUFBZ0IsRUFBRSxhQUF1RCxFQUFFLGNBQXVELEVBQUUsV0FBd0I7O0lBQ2hNLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxRQUFRLENBQUM7SUFDakQsSUFBSSxVQUFVLEdBQUcsS0FBSztJQUN0QixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDbEQsbUlBQW1JO0lBQ25JLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsMEdBQTBHO0lBQzFHLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSxNQUFLLENBQUMsRUFBRTtRQUN6QyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7S0FDbEU7SUFFRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGNBQWMsRUFBRSxjQUFjLElBQUksRUFBRTtRQUNwQyxhQUFhLEVBQUUsU0FBUztRQUN4QixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUVELE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ3BFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sY0FBYyxHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxjQUFjLEtBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsTUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLENBQUMsSUFBSSxvREFBUyxDQUFDLEVBQUUsQ0FBQztJQUMvRixNQUFNLGNBQWMsR0FBRyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNySCxRQUFRLGdCQUFnQixFQUFFO1FBQ3hCLEtBQUssd0VBQWlDO1lBQ3BDLE9BQU8saUJBQWlCO1FBQzFCLEtBQUsscUVBQThCO1lBQ2pDLE9BQU8sY0FBYztRQUN2QixLQUFLLHNFQUErQjtZQUNsQyxPQUFPLG9EQUFTLENBQUMsY0FBYyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVNLFNBQVMscUJBQXFCLENBQUUsaUJBQWlCOztJQUN0RCxNQUFNLEVBQUUsR0FBRyx1QkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtJQUNILENBQUMsQ0FBQyxtQ0FBSSxFQUFFO0lBQ1IsT0FBTyxvREFBUyxDQUFDLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxnQkFBZ0IsQ0FBRSxVQUF3QixFQUFFLFdBQXdCLEVBQUUsU0FBaUM7SUFDckgsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLFFBQVEsR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLEtBQUksRUFBRTtJQUNwRCxNQUFNLEtBQUssR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYyxLQUFJLEVBQUU7SUFDOUMsSUFBSSxTQUFTLEVBQUU7UUFDYixPQUFPLEtBQUs7S0FDYjtJQUNELFFBQVEsZ0JBQWdCLEVBQUU7UUFDeEIsS0FBSyx3RUFBaUM7WUFDcEMsT0FBTyxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDL0IsS0FBSyxxRUFBOEI7WUFDakMsT0FBTyxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDNUIsS0FBSyxzRUFBK0I7WUFDbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtZQUMvQyxPQUFPLFFBQVEsS0FBSyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWTs7SUFDbkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxpQkFBaUIsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw0REFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLDBDQUFFLFNBQVM7QUFDbkksQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUUsR0FBVzs7SUFDMUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO0lBQzNDLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxLQUErQyxFQUFFLEVBQUU7UUFDdEYsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksR0FBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLElBQUksTUFBSyxxRUFBNEIsSUFBSSxHQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsSUFBSSxNQUFLLHVFQUE4QixFQUFFLEVBQUUsYUFBYTtZQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDakM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDaEUsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUNyRSxPQUFPLG9EQUFTLENBQUMsaUNBQTJCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBK0MsRUFBRSxFQUFFO1FBQ25HLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO1FBQzNDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLFFBQVE7UUFDWixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLG9CQUFvQjtZQUNwQixRQUFRLEdBQUcsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLGlCQUFpQixFQUFFO1NBQ25DO2FBQU07WUFDTCxRQUFRLEdBQUcsRUFBRTtTQUNkO1FBQ0QsT0FBTyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsRUFBRTtJQUNyQixDQUFDLENBQUMsbUNBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQRCxpQ0FBaUM7QUFJZjtBQUl3STtBQUVuSixTQUFlLHFCQUFxQixDQUFFLFdBQThDLEVBQUUsa0JBQTZEOztRQUN4SixNQUFNLGdCQUFnQixHQUFHLEVBQUU7UUFDM0Isa0JBQWtCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0RSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQztZQUN4RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNwRCxPQUFNO2FBQ1A7WUFDRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQztRQUVGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxPQUFPLElBQUk7U0FDWjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSxrQkFBa0IsQ0FBRSxXQUE4QyxFQUFFLHNCQUFpRTs7UUFDekosTUFBTSxjQUFjLEdBQUcsRUFBRTtRQUN6QixzQkFBc0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDO1lBQ3hFLElBQUksS0FBSyxFQUFFO2dCQUNULFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsY0FBYyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDL0Y7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSTtTQUNaO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztDQUFBO0FBRUQsU0FBZSxrQkFBa0IsQ0FBRSxXQUE4QyxFQUFFLFVBQTZCLEVBQUUsT0FBZTs7UUFDL0gsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLE9BQU8sbUVBQXNCLENBQUM7Z0JBQzVCLDBCQUEwQjthQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDZDtxQkFBTTtvQkFDTCw2Q0FBNkM7b0JBQzdDLElBQUksWUFBd0MsQ0FBQztvQkFDN0MsMkJBQTJCO29CQUMzQixDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQztvQkFFekIsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQVk7b0JBQy9ELE1BQU0sb0JBQW9CLEdBQUcsRUFBRTtvQkFDL0IsTUFBTSxRQUFRLEdBQUcsRUFBRTtvQkFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzFELE1BQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSTt3QkFDOUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDdEM7b0JBRUQsTUFBTSxxQkFBcUIsR0FBRyxFQUFFO29CQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUNuRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDakIsTUFBTSxVQUFVLEdBQUc7Z0NBQ2pCLFNBQVMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO2dDQUN4QixLQUFLLEVBQUUsR0FBRzs2QkFDWDs0QkFDRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUN2QztxQkFDRjtvQkFFRCxNQUFNLGNBQWMsR0FBRyxFQUFFO29CQUN6QixVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTt3QkFDN0MsTUFBTSxXQUFXLEdBQUcsT0FBTzt3QkFDM0IsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFOzRCQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0NBQ3hDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7NkJBQ3BFOzRCQUVELFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUs7eUJBQ3RDOzZCQUFNOzRCQUNMLFdBQVcsQ0FBQyxVQUFVLEdBQUc7Z0NBQ3ZCLE1BQU0sRUFBRSxLQUFLOzZCQUNkO3lCQUNGO3dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNsQyxDQUFDLENBQUM7b0JBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUM7d0JBQzdCLEVBQUUsRUFBRSxPQUFPO3dCQUNYLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO3dCQUNoQyxNQUFNLEVBQUUsY0FBYzt3QkFDdEIsTUFBTSxFQUFFLG9CQUFvQjt3QkFDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUNoQixhQUFhLEVBQUUsUUFBUTt3QkFDdkIsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFFBQVE7d0JBQ3RDLFlBQVksRUFBRSxJQUFJO3dCQUNsQixhQUFhLEVBQUU7NEJBQ2IsS0FBSyxFQUFFLGFBQWE7NEJBQ3BCLE9BQU8sRUFBRSxDQUFDO29DQUNSLElBQUksRUFBRSxRQUFRO29DQUNkLFVBQVUsRUFBRSxxQkFBcUI7aUNBQ2xDLENBQUM7eUJBQ0g7cUJBQ0YsQ0FBQztvQkFFRixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBRTFCLEtBQUssQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsU0FBUyxrQkFBa0IsQ0FBRSxLQUFtQjtJQUM5Qyx3REFBd0Q7SUFDeEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDNUIsT0FBTztRQUNMLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzNFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDVjtBQUNWLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBRSxXQUE4QyxFQUFFLE1BQWlFLEVBQUUsT0FBZ0I7SUFDaEsscUVBQXFFO0lBQ3JFLElBQUksY0FBYyxHQUFHLE9BQU87SUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJO0lBQzNCLElBQUksV0FBVyxHQUFHLElBQUk7SUFFdEIsc0RBQXNEO0lBQ3RELElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFtQjtTQUMxQzthQUFNO1lBQ0wsV0FBVyxHQUFHLE1BQXdCO1NBQ3ZDO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDM0Q7S0FDRjtJQUVELElBQUksY0FBYyxFQUFFO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLGNBQWMsRUFBRTtnQkFDdkQsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUVELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDM0M7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtBQUNILENBQUM7QUFFTSxTQUFlLHFCQUFxQixDQUFFLElBQXVDLEVBQUUsT0FBd0I7O1FBQzVHLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7UUFDcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUU3RCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSx3QkFBd0IsQ0FBRSxJQUF1QyxFQUFFLFVBQTRCOztRQUNuSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztRQUM1RCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzVCLENBQUM7Q0FBQTtBQUVNLFNBQVMsc0JBQXNCLENBQUUsU0FBMkIsRUFBRSxNQUErQjs7SUFDbEcsTUFBTSxHQUFHLEdBQUcsZUFBUyxDQUFDLGNBQWMsMENBQUUsZ0JBQWdCO0lBRXRELElBQUksR0FBRyxJQUFJLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNyRCxPQUFPLElBQUk7S0FDWjtJQUVELE1BQU0sR0FBRyxHQUFHLHFCQUFTLENBQUMsTUFBTSwwQ0FBRSxRQUFRLDBDQUFFLGdCQUFnQjtJQUV4RCxJQUFJLEdBQUcsSUFBSSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDckQsT0FBTyxJQUFJO0tBQ1o7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUE0QixFQUFFLEdBQTRCO0lBQ3ZHLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN2RCxrRkFBa0Y7SUFDbEYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN2RixPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTTtBQUMzQixDQUFDO0FBRU0sU0FBZSxnQkFBZ0IsQ0FBRSxVQUE0QixFQUFFLE1BQStCOzs7UUFDbkcsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRTtRQUNwQyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYztRQUMvQyxNQUFNLGFBQWEsR0FBRyxlQUFTLENBQUMsTUFBTSwwQ0FBRSxRQUFRO1FBRWhELE1BQU0sbUJBQW1CLEdBQXNCLEVBQUU7UUFDakQsSUFBSSx1QkFBdUIsR0FBWSxLQUFLO1FBQzVDLElBQUksdUJBQXVCLEdBQVksS0FBSztRQUU1QyxJQUFJLGNBQWMsSUFBSSw2QkFBNkIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDNUYsdUJBQXVCLEdBQUcsSUFBSTtZQUM5QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxhQUFhLElBQUksNkJBQTZCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFGLHVCQUF1QixHQUFHLElBQUk7WUFDOUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4QztRQUVELElBQUksbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0saUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO1lBRWhGLElBQUksdUJBQXVCLEVBQUU7Z0JBQzNCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSx1QkFBdUIsRUFBRTtnQkFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBaUI7YUFDaEc7U0FDRjtRQUVELE9BQU8sU0FBUzs7Q0FDakI7QUFFTSxTQUFlLFFBQVEsQ0FBRSxXQUE4QyxFQUFFLE1BQy9COztRQUMvQyxNQUFNLFdBQVcsR0FBRyxNQUFhO1FBQ2pDLE1BQU0sZUFBZSxHQUFHLFdBQWtCO1FBQzFDLElBQUksV0FBVyxZQUFZLEtBQUssRUFBRTtZQUNoQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUFFLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE9BQU07YUFBRTtZQUVqRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLE1BQU0sV0FBVyxHQUFzQixFQUFFO2dCQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2lCQUMxQztnQkFFRCxNQUFNLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNyRCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDdEQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLENBQUMsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQTJCO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUQ7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQWUsSUFBSSxDQUFFLElBQXVDLEVBQUUsTUFBVzs7UUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQywyRUFBMkU7WUFDM0UsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxtR0FBbUc7Z0JBQ25HLDhHQUE4RztnQkFDOUcsc0JBQXNCO2dCQUN0QixxREFBcUQ7Z0JBQ3JELG1CQUFtQjtnQkFDbkIscUVBQXFFO2dCQUNyRSx3QkFBd0I7Z0JBQ3hCLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGlFQUFpRTtnQkFDakUsR0FBRztnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxTQUFlLG1CQUFtQixDQUFFLFVBQTZCOztRQUMvRCxPQUFPLE1BQU0sbUVBQXNCLENBQUM7WUFDbEMsc0JBQXNCO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTSxPQUFPLEVBQUMsRUFBRTtZQUN0QiwyQkFBMkI7WUFDM0IsSUFBSSxNQUE0QixDQUFDO1lBQ2pDLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTztZQUVsQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ25DO1lBRUQsSUFBSSxVQUFVLEdBQWtCLElBQUk7WUFDcEMsSUFBSSxLQUFLO1lBQ1QsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU07WUFFdkMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzlDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsU0FBUTtpQkFDVDtnQkFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtnQkFFNUIsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDeEMsTUFBTSxhQUFhLEdBQUcsUUFBZTtvQkFFckMsSUFBSSxhQUFhLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQzs0QkFDbEIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLGdCQUFnQjt5QkFDakQsQ0FBQztxQkFDSDtpQkFDRjtnQkFFRCxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLFNBQVE7aUJBQ1Q7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxVQUFVLEdBQUcsTUFBTTtpQkFDcEI7YUFDRjtZQUVELElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNuQztZQUVELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDLEVBQUM7SUFDSixDQUFDO0NBQUE7QUFFTSxTQUFlLHFCQUFxQixDQUFFLFdBQXdCLEVBQUUsdUJBQStCLEVBQUUsUUFBZ0I7O1FBQ3RILElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM1QixPQUFNO1NBQ1A7UUFFRCxNQUFNLFVBQVUsR0FBRyxvRUFBNkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztRQUV6RixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTTtTQUNQO1FBRUQsSUFBSSxhQUFhLEdBQWtCLElBQUk7UUFFdkMsSUFBSTtZQUNGLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUM7U0FDbEY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWEsR0FBRyxJQUFJO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztTQUN6RTtRQUVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLGdFQUF1QixJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssOERBQXFCLENBQUMsRUFBRTtZQUMzSSxhQUEyRCxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztTQUMvRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQVMsYUFBYSxDQUFFLFdBQVcsRUFBRSxRQUFRO0lBQzNDLE9BQU8sbUVBQXNCLENBQUM7UUFDNUIseUJBQXlCO0tBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxLQUEwQixDQUFDO1FBQy9CLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN6QixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVE7UUFDdEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7UUFDM0IsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4RCxPQUFPLFVBQVU7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLGlCQUF1QztJQUMvRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDeEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZFLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO29CQUNsRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDMUQ7WUFDSCxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtTQUFNO1FBQ0wsbUVBQXNCLENBQUM7WUFDckIsMEJBQTBCO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxZQUF3QyxDQUFDO1lBQzdDLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTztZQUV4QixJQUFJLGdCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDO2dCQUN0QyxHQUFHLEVBQUUsb0VBQTZCLENBQUUsaUJBQStELENBQUMsS0FBSyxDQUFDO2FBQzNHLENBQUM7WUFDRixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbkUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7cUJBQzFEO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELElBQUkscUJBQXFCLEdBQUcsSUFBSTtBQUNoQyxTQUFTLGlCQUFpQixDQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBcUM7O0lBQzNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM1QixJQUFJLGNBQWMsR0FBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDcEUsbUJBQW1CO1FBQ25CLGFBQWEsQ0FBQyxvQkFBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLEtBQUssMENBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNoRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkUsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxhQUFhO2dCQUN4RCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXZGLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxhQUFhLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sd0JBQXdCLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBRWxFLE1BQU0sS0FBSyxHQUFHO29CQUNaLElBQUksQ0FBQyxHQUFHLGFBQWEsRUFBRTt3QkFDckIsQ0FBQyxFQUFFO3dCQUNILElBQUksY0FBYyxFQUFFOzRCQUNsQixjQUFjLEdBQUcsSUFBSTs0QkFDckIsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzNELHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRTs0QkFDdkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7eUJBQzVEOzZCQUFNOzRCQUNMLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs0QkFDbkMsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTs0QkFDN0QscUJBQXFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFOzRCQUN2RCxxQkFBcUIsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt5QkFDNUQ7d0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7cUJBQ3ZCO3lCQUFNO3dCQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCO3dCQUM1RCxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7cUJBQ3hEO2dCQUNILENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7QUFFTSxTQUFlLG9CQUFvQixDQUFFLFdBQXdCLEVBQUUsaUJBQXlCLEVBQUUsUUFBZ0I7O1FBQy9HLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixPQUFNO1NBQ1A7UUFFRCxNQUFNLFVBQVUsR0FBRyxvRUFBNkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTTtTQUNQO1FBRUQsSUFBSSxhQUFhLEdBQWtCLElBQUk7UUFFdkMsSUFBSTtZQUNGLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUM7U0FDbEY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWEsR0FBRyxJQUFJO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztTQUN6RTtRQUVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLGdFQUF1QixFQUFFO2dCQUNsRCxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQXFDLENBQUM7YUFDbEY7aUJBQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLDhEQUFxQixFQUFFO2dCQUN2RCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQW1DLENBQUM7YUFDOUU7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQVMsVUFBVSxDQUFFLFdBQThDLEVBQUUsUUFBMEIsRUFBRSxNQUFNO0lBQ3JHLG1FQUFzQixDQUFDO1FBQ3JCLGNBQWM7S0FDZixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2hCLDJCQUEyQjtRQUMzQixJQUFJLE9BQThCLENBQUM7UUFDbkMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO1FBRW5CLE1BQU0sYUFBYSxHQUFHLFVBQVUsUUFBMEIsRUFBRSxhQUFxQjtZQUMvRSxNQUFNLFFBQVEsR0FBRyxFQUFFO1lBQ25CLElBQUksVUFBVSxHQUFHLENBQUM7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDO29CQUM5QixRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQzlCLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDbkMsQ0FBQztnQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMzQjtZQUVELE1BQU0sV0FBVyxHQUFHO2dCQUNsQixXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN6QyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUM7b0JBQzNCLElBQUksVUFBVSxHQUFHLGFBQWEsRUFBRTt3QkFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTs0QkFDZCxXQUFXLEVBQUU7d0JBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztxQkFDUjtnQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQztZQUVELFdBQVcsRUFBRTtRQUNmLENBQUM7UUFFRCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUUsWUFBb0I7SUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbEQsT0FBTztZQUNMLElBQUksRUFBRSxlQUFlO1lBQ3JCLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGO0tBQ0Y7U0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzlDLE9BQU87WUFDTCxJQUFJLEVBQUUsYUFBYTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTztTQUNmO0tBQ0Y7U0FBTSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN2RCxPQUFPO1lBQ0wsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGO0tBQ0Y7U0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzFDLE9BQU87WUFDTCxJQUFJLEVBQUUsU0FBUztZQUNmLFlBQVksRUFBRSxDQUFDO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2lCQUN4QyxDQUFDO1NBQ0g7S0FDRjtTQUFNO1FBQ0wsT0FBTyxJQUFJO0tBQ1o7QUFDSCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUUsUUFBeUI7SUFDaEQsMERBQTBEO0lBQzFELFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtRQUNyQixLQUFLLE9BQU87WUFDVixPQUFPLFFBQXdCO1FBQ2pDLEtBQUssUUFBUTtZQUNYLE9BQVEsUUFBMEIsQ0FBQyxNQUFNO1FBQzNDLEtBQUssU0FBUztZQUNaLE9BQVEsUUFBMkIsQ0FBQyxRQUFRO1FBQzlDLEtBQUssVUFBVTtZQUNiLE9BQVEsUUFBNEIsQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUNwRDtZQUNFLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pFLE9BQU87S0FDUjtBQUNILENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBRSxPQUFrQyxFQUFFLE9BQWtDO0lBQ25HLElBQUksV0FBVyxHQUFHLElBQUk7SUFDdEIsSUFBSyxPQUFlLENBQUMsS0FBSyxFQUFFO1FBQzFCLFdBQVcsR0FBSSxPQUFlLENBQUMsS0FBSyxFQUFFO0tBQ3ZDO1NBQU07UUFDTCxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDL0Q7SUFDRCxPQUFPLFdBQVc7QUFDcEIsQ0FBQztBQUVNLFNBQWUsaUJBQWlCLENBQUUsVUFBNkIsRUFBRSxnQkFBeUM7O1FBQy9HLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzFELGdCQUFnQixDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUU7WUFDNUgsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNuRixpRkFBaUY7WUFDakYsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtZQUNuRixpRkFBaUY7WUFDakYsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLE1BQU0sOEVBQXVDLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1NBQ25GO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLEtBQVUsRUFBRSxRQUEwQjs7UUFDakksSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksUUFBUSxFQUFFO1lBQ3hGLE9BQU8sTUFBTSxtRUFBc0IsQ0FBQztnQkFDbEMseUJBQXlCO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU87Z0JBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7Z0JBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sTUFBTSxFQUFFLEVBQUU7b0JBQ3RELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTt3QkFDM0UsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDOUM7eUJBQU07d0JBQ0wsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEdBQUUsR0FBUyxFQUFFO29CQUNaLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxFQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUN2QztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQVMsV0FBVyxDQUFFLE9BQWdCO0lBQzNDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDakMsSUFBSSxPQUFPLEtBQUsscURBQWMsRUFBRTtZQUM5QixPQUFPLEtBQUs7U0FDYjthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtTQUFNO1FBQ0wsT0FBTyxJQUFJO0tBQ1o7QUFDSCxDQUFDO0FBRU0sU0FBUywwQkFBMEIsQ0FBRSxhQUF1QjtJQUNqRSxNQUFNLGFBQWEsR0FBRyxFQUFFO0lBQ3hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbkMsTUFBTSxVQUFVLEdBQUcsb0VBQTZCLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUErQjtRQUM1RyxJQUFJLFlBQVk7UUFDaEIsSUFBSSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxFQUFFO1lBQ3JCLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDakQ7YUFBTSxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSw0QkFBNEIsRUFBRTtZQUNuRCxZQUFZLEdBQUcsVUFBVSxDQUFDLDRCQUE0QixFQUFFO1NBQ3pEO2FBQU07WUFDTCxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDckM7UUFDRCxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ25DLENBQUM7QUFFTSxTQUFTLGdCQUFnQixDQUFFLFFBQWdCLEVBQUUsWUFBb0I7SUFDdEUsa0VBQWtFO0lBQ2xFLE1BQU0sSUFBSSxHQUFHLFlBQVksSUFBSSxFQUFFO0lBQy9CLE9BQU8sR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzlCLENBQUM7QUFFTSxTQUFTLHFCQUFxQixDQUFFLFdBQW9CO0lBQ3pELE1BQU0sRUFDSixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixxQkFBcUIsRUFDckIsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLElBQUksRUFDSixvQkFBb0IsRUFDcEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxxQkFBcUIsRUFDdEIsR0FBRyxXQUFXO0lBRWYsT0FBTztRQUNMLFlBQVk7UUFDWixLQUFLO1FBRUwsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsT0FBTztRQUNQLE9BQU87UUFDUCxTQUFTO1FBQ1QsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsS0FBSztRQUVMLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsSUFBSTtRQUNKLG9CQUFvQjtRQUNwQixLQUFLO1FBRUwsU0FBUztRQUNULHFCQUFxQjtLQUN0QjtBQUNILENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBRSxXQUFvQixFQUFFLFdBQStCO0lBQ25GLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXJDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsZ0NBQWdDLENBQUUsU0FBaUIsRUFBRSxTQUFpQjtJQUNwRixJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7UUFDMUIsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sV0FBVyxHQUFhLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUN4RCxNQUFNLFdBQVcsR0FBRywrREFBd0I7WUFFNUMsSUFBSSw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO2dCQUM3Riw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQy9GLE9BQU8sSUFBSTthQUNaO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTLGlDQUFpQyxDQUFFLG1CQUEyQixFQUFFLGNBQXNCLEVBQUUsV0FBd0I7SUFDOUgsSUFBSSxtQkFBbUIsSUFBSSxjQUFjLEVBQUU7UUFDekMsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sV0FBVyxHQUFhLENBQUMsZUFBZSxDQUFDO1lBRS9DLE9BQU8sNEJBQTRCLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ25IO0tBQ0Y7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FDbkMsbUJBQTJCLEVBQzNCLGNBQXNCLEVBQ3RCLGNBQTZDLEVBQzdDLFdBQXdCLEVBQ3hCLFdBQXFCO0lBRXJCLElBQUksY0FBYyxFQUFFO1FBQ2xCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFFdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFFdkMsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLG1CQUFtQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO2dCQUMzRixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTztnQkFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7d0JBQ3RDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQzNDLE9BQU8sSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7Ozs7Ozs7Ozs7O0FDL3lCRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmtCO0FBQ3dFO0FBQzFDO0FBRUE7QUEyQ2pDLE1BQU0sbUJBQW9CLFNBQVEsNERBQXFCO0lBQXRFOztRQUNFLDhCQUF5QixHQUFHLENBQUMsS0FBSyxDQUFDO0lBeU1yQyxDQUFDO0lBdk1DLHdCQUF3QixDQUFFLGtCQUFzQztRQUM5RCxJQUFJLGtCQUFrQixDQUFDLFdBQVcsS0FBSywrREFBd0IsRUFBRTtZQUMvRCxPQUFPLElBQUk7U0FDWjthQUFNLElBQUksa0JBQWtCLENBQUMsV0FBVyxLQUFLLG9FQUE2QixFQUFFO1lBQzNFLE9BQU8sSUFBSTtTQUNaO2FBQU0sSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssc0VBQStCO1lBQ3pFLGtCQUFrQixDQUFDLFdBQVcsS0FBSyw2RUFBc0M7WUFDekUsa0JBQWtCLENBQUMsV0FBVyxLQUFLLHlFQUFrQyxFQUFFO1lBQ3pFLE9BQU8sS0FBSztTQUNiO2FBQU07WUFDTCxNQUFNLGlCQUFpQixHQUFHLG9FQUE2QixFQUFFO1lBQ3pELE1BQU0sMkJBQTJCLEdBQUcsOERBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ2hILE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztnQkFDdEQsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3RFLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ3BELE9BQU8sSUFBSTtpQkFDWjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxTQUFFLENBQUMsaUJBQWlCLEVBQUUsMENBQUUsWUFBWTtpQkFDOUM7WUFDSCxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHNCQUFzQixDQUFFLFdBQXdCLEVBQUUsZUFBd0I7UUFDeEUsSUFBSSxXQUFXLEtBQUssNkVBQXNDO1lBQ3BELFdBQVcsS0FBSyxzRUFBK0I7WUFDL0MsV0FBVyxLQUFLLHlFQUFrQyxFQUFFO1lBQ3hELE9BQU8sZ0RBQWdEO1NBQ3hEO2FBQU07WUFDTCxPQUFPLElBQUk7U0FDWjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0IsRUFBRSxZQUF1QjtRQUNsRCxPQUFPLG1FQUFzQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBQzdELElBQUksT0FBTyxHQUE4QixJQUFJLENBQUM7WUFDOUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO1lBRW5CLElBQUksWUFBWSxHQUFrQixJQUFJO1lBQ3RDLE1BQU0sV0FBVyxHQUFnQjtnQkFDL0IsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLEVBQUU7YUFDWDtZQUVELFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSyxzRUFBK0I7b0JBQ2xDLE1BQU0sMEJBQTBCLEdBQUcsT0FBcUM7b0JBQ3hFLElBQUksMEJBQTBCLENBQUMsVUFBVSxLQUFLLHVFQUFnQyxFQUFFO3dCQUM5RSxNQUFNLGFBQWEsR0FBRyxFQUFFO3dCQUN4QiwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFOzRCQUNoRSxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFO2dDQUMxQyxNQUFNLFFBQVEsR0FBcUIsRUFBRTtnQ0FDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29DQUNyRCxJQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUF1QixDQUFDLE9BQU8sRUFBRTt3Q0FDM0QsUUFBUSxDQUFDLElBQUksQ0FBQyw2REFBYSxDQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNoQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztxQ0FDeEM7aUNBQ0Y7Z0NBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQ0FDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUNBQzdCOzZCQUNGO3dCQUNILENBQUMsQ0FBQzt3QkFFRixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzt3QkFFMUQsTUFBTSxXQUFXLEdBQXFDOzRCQUNwRCxJQUFJLEVBQUUsd0JBQXdCOzRCQUM5QixhQUFhLEVBQUUsYUFBYTs0QkFDNUIsWUFBWSxFQUFFLFlBQVk7eUJBQzNCO3dCQUVELHNFQUErQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxXQUFXLENBQUM7cUJBQ2pIO29CQUNELE1BQUs7Z0JBQ1AsS0FBSyw2RUFBc0M7b0JBQ3pDLE1BQU0sTUFBTSxHQUFHLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTO29CQUNqRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDMUQsTUFBTSxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDM0QsTUFBTSxpQ0FBaUMsR0FBRyxPQUE0QztvQkFFdEYsTUFBTSxjQUFjLEdBQXFCLEVBQUU7b0JBRTNDLElBQUksWUFBWSxHQUFXLElBQUk7b0JBQy9CLElBQUksaUNBQWlDLENBQUMsT0FBTyxFQUFFO3dCQUM3QyxJQUFJLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDaEQsSUFBSSxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dDQUMzRCxZQUFZLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTs2QkFDNUU7NEJBRUQsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0NBQy9ELE1BQU0seUJBQXlCLEdBQUcsaUNBQWlDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQ0FDN0csSUFBSSxDQUFDLG1CQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsY0FBYywwQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxjQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsZ0JBQWdCLE1BQUsseUJBQXlCLENBQUMsRUFBRSxDQUFDLEdBQUU7b0NBQzFILE1BQUs7aUNBQ047NkJBQ0Y7aUNBQU07Z0NBQ0wsTUFBTSxpQkFBaUIsR0FBRyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQ0FDakYsTUFBTSxxQkFBcUIsR0FBRyxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxpQkFBaUIsRUFBRTtnQ0FDcEUsbUVBQW1FO2dDQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxjQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsZ0JBQWdCLE1BQUsscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUU7b0NBQ3BILE1BQUs7aUNBQ047NkJBQ0Y7eUJBQ0Y7d0JBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3pFLElBQUssaUNBQWlDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBdUIsQ0FBQyxPQUFPLEVBQUU7Z0NBQy9FLGNBQWMsQ0FBQyxJQUFJLENBQUMsNkRBQWEsQ0FBRSxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUMxRCxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs2QkFDeEM7eUJBQ0Y7cUJBQ0Y7b0JBRUQsWUFBWSxHQUFHLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7b0JBRTFELE1BQU0sbUJBQW1CLEdBQWdDO3dCQUN2RCxJQUFJLEVBQUUsa0JBQWtCO3dCQUN4QixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsWUFBWSxFQUFFLFlBQVk7d0JBQzFCLFlBQVksRUFBRSxZQUFZO3FCQUMzQjtvQkFFRCxzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3hILE1BQUs7Z0JBQ1AsS0FBSywrREFBd0I7b0JBQzNCLE1BQU0sbUJBQW1CLEdBQUcsT0FBOEI7b0JBQzFELE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUU7b0JBRWxFLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDNUMsTUFBSztxQkFDTjtvQkFFRCxNQUFNLFdBQVcsR0FBOEI7d0JBQzdDLElBQUksRUFBRSxnQkFBZ0I7d0JBQ3RCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO3dCQUNsQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsU0FBUzt3QkFDeEMsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7d0JBQzFDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO3dCQUMxQyxZQUFZLEVBQUUsU0FBUzt3QkFDdkIsV0FBVyxFQUFFLG1CQUFtQixDQUFDLFdBQVc7d0JBQzVDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRO3FCQUM5QztvQkFFRCxNQUFNLHdCQUF3QixHQUE2Qjt3QkFDekQsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLGNBQWMsRUFBRSxnQkFBZ0I7cUJBQ2pDO29CQUNELHNFQUErQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQztvQkFDdkgsTUFBSztnQkFDUCxLQUFLLHlFQUFrQztvQkFDckMsTUFBTSxtQkFBbUIsR0FBRyxPQUF3QztvQkFDcEUscUJBQXFCO29CQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsY0FBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFlBQVksTUFBSyxZQUFZLENBQUMsQ0FBQyxFQUFFO3dCQUM1SixNQUFLO3FCQUNOO29CQUVELFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDO29CQUUxRCxNQUFNLHVCQUF1QixHQUFtQzt3QkFDOUQsSUFBSSxFQUFFLHNCQUFzQjt3QkFDNUIsYUFBYSxFQUFFLG1CQUFtQixDQUFDLGFBQWE7d0JBQ2hELFlBQVksRUFBRSxZQUFZO3dCQUMxQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWMsSUFBSyxFQUErQztxQkFDaEc7b0JBRUQsc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLHVCQUF1QixDQUFDO29CQUM1SCxNQUFLO2dCQUNQLEtBQUssb0VBQTZCO29CQUNoQyxNQUFNLHdCQUF3QixHQUFHLE9BQW1DO29CQUVwRSxJQUFJLHdCQUF3QixDQUFDLFVBQVUsS0FBSyxtRUFBNEIsRUFBRTt3QkFDeEUsTUFBTSxhQUFhLEdBQUcsRUFBRTt3QkFDeEIsd0JBQXdCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTs0QkFDeEQsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO3dCQUNuQyxDQUFDLENBQUM7d0JBRUYsWUFBWSxHQUFHLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7d0JBRTFELE1BQU0saUNBQWlDLEdBQThCOzRCQUNuRSxJQUFJLEVBQUUsZ0JBQWdCOzRCQUN0QixhQUFhLEVBQUUsYUFBYTs0QkFDNUIsWUFBWSxFQUFFLFlBQVk7eUJBQzNCO3dCQUVELHNFQUErQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxnQ0FBZ0MsRUFBRSxpQ0FBaUMsQ0FBQztxQkFDdkk7b0JBRUQsTUFBSzthQUNSO1lBRUQsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBRSxZQUFzQixFQUFFLE9BQW9CO0lBQ3JFLElBQUksYUFBYSxHQUFrQixFQUFFO0lBRXJDLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsSUFBSSxPQUFPLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUMvRyxhQUFhLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSztLQUN0RDtJQUVELElBQUksT0FBTyxFQUFFO1FBQ1gsYUFBYSxDQUFDLE9BQU8sR0FBRyxPQUFPO0tBQ2hDO0lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0MsYUFBYSxHQUFHLElBQUk7S0FDckI7SUFFRCxPQUFPLGFBQWE7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2FjdGlvbi11dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL3pvb20tdG8tZmVhdHVyZS1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIHR5cGUgTWVzc2FnZVR5cGUsIE1lc3NhZ2VDYXJyeURhdGEsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJTVVzZURhdGFTb3VyY2UsIEltbXV0YWJsZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSW1tdXRhYmxlQXJyYXksIHR5cGUgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xyXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXHJcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcclxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG5cclxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXHJcbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXHJcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxyXG5cclxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgaWYgKCFkc0lkKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICBpc01hcERzID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG5cclxuICBpZiAoaXNNYXBEcykge1xyXG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXHJcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXHJcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0pID8/IFtdXHJcbiAgcmV0dXJuIEltbXV0YWJsZShkcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cclxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXHJcbiAgaWYgKGRzUm9vdElkcykge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcclxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xyXG4gIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc1Jvb3RJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCByb290SWRzID0gW11cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcclxuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIEltbXV0YWJsZShtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubWFwKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBsZXQgcmVzdWx0RHNcclxuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgIHJlc3VsdERzID0gZHM/LmdldE1haW5EYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERzID0gZHNcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHREcz8uaWRcclxuICB9KSA/PyBbXSlcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cclxuaW1wb3J0IHtcclxuICBBcHBNb2RlLCBkYXRhU291cmNlVXRpbHMsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEpTQVBJTGF5ZXJNaXhpbiwgZ2VvbWV0cnlVdGlscyxcclxuICBnZXRBcHBTdG9yZSwgdHlwZSBNZXNzYWdlc0pzb24sIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBNZXNzYWdlVHlwZVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBIaWdoTGlnaHRIYW5kbGUsIHR5cGUgTWFwYmFzZVJlc3RvcmVEYXRhIH0gZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXHJcbmltcG9ydCB0eXBlIE1hcEJhc2UgZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXHJcbmltcG9ydCB7IHR5cGUgSUZlYXR1cmUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcclxuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgdHlwZSBKaW11TWFwVmlldywgTGF5ZXJUeXBlcywgdHlwZSBKaW11RmVhdHVyZUxheWVyVmlldywgdHlwZSBKaW11U2NlbmVMYXllclZpZXcsIHR5cGUgSmltdUxheWVyVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld0ZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbmV3RmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbmV3TGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgbmV3RmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKG5ld0ZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybigndGhlIGZlYXR1cmUgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBuZXdMYXllclByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gIH0pXHJcblxyXG4gIGlmIChuZXdMYXllclByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld0xheWVyUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlPzogeyBbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXQgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSBbXVxyXG4gIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMoY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIG1hcEJhc2VWaWV3Lm1hcC5yZW1vdmUobGF5ZXIpXHJcbiAgICAgIHVwZGF0ZVByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAodXBkYXRlUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodXBkYXRlUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRGZWF0dXJlU2V0VG9NYXAgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVTZXQ6IF9fZXNyaS5GZWF0dXJlU2V0LCBsYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBpZiAoZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGxldCBGZWF0dXJlU2V0OiB0eXBlb2YgIF9fZXNyaS5GZWF0dXJlU2V0O1xyXG4gICAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlcztcclxuXHJcbiAgICAgICAgY29uc3QgbGF5ZXJGcm9tRmVhdHVyZVNldCA9IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0ubGF5ZXIgYXMgYW55XHJcbiAgICAgICAgY29uc3QgZmllbGRzSW5GZWF0dXJlbGF5ZXIgPSBbXVxyXG4gICAgICAgIGNvbnN0IGZpZWxkTWFwID0ge31cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IGdldFJlYXNvbmFibGVGaWVsZChsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXSlcclxuICAgICAgICAgIGZpZWxkTWFwW2xheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldLm5hbWVdID0gZmllbGRzSXRlbS5uYW1lXHJcbiAgICAgICAgICBmaWVsZHNJbkZlYXR1cmVsYXllci5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWVsZHNJblBvcHVwVGVtcGxhdGUgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgaWYgKGZpZWxkTWFwW2tleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTWFwW2tleV0sXHJcbiAgICAgICAgICAgICAgbGFiZWw6IGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZWxkc0luUG9wdXBUZW1wbGF0ZS5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VGZWF0dXJlcyA9IFtdXHJcbiAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGVtcEZlYXR1cmUgPSBmZWF0dXJlXHJcbiAgICAgICAgICBpZiAodGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZE1hcFtrZXldXSA9IHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzLmV4YmZpZCA9IGluZGV4XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgICAgICAgIGV4YmZpZDogaW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc291cmNlRmVhdHVyZXMucHVzaCh0ZW1wRmVhdHVyZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgICAgaWQ6IGxheWVySWQsXHJcbiAgICAgICAgICB0aXRsZTogbGF5ZXJGcm9tRmVhdHVyZVNldC50aXRsZSxcclxuICAgICAgICAgIHNvdXJjZTogc291cmNlRmVhdHVyZXMsXHJcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkc0luRmVhdHVyZWxheWVyLFxyXG4gICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdleGJmaWQnLFxyXG4gICAgICAgICAgcmVuZGVyZXI6IGxheWVyRnJvbUZlYXR1cmVTZXQucmVuZGVyZXIsXHJcbiAgICAgICAgICBwb3B1cEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3M6IGZpZWxkc0luUG9wdXBUZW1wbGF0ZVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG1hcEJhc2VWaWV3Lm1hcC5hZGQobGF5ZXIpXHJcblxyXG4gICAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhc29uYWJsZUZpZWxkIChmaWVsZDogX19lc3JpLkZpZWxkKTogX19lc3JpLkZpZWxkIHtcclxuICAvLyB0aGUgZnVuY3Rpb24gaXMgc3VwcG9ydGVkIHRvIG5vcm1hbGl6ZSB0aGUgZmllbGQubmFtZVxyXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWVcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZmllbGROYW1lLnJlcGxhY2UoL1xcLi9nLCAnXycpLnJlcGxhY2UoL1xcKC9nLCAnXycpLnJlcGxhY2UoL1xcKS9nLCAnXycpLFxyXG4gICAgYWxpYXM6IGZpZWxkLmFsaWFzLFxyXG4gICAgdHlwZTogZmllbGQudHlwZVxyXG4gIH0gYXMgYW55XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RGZWF0dXJlIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IF9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IElGZWF0dXJlIHwgSUZlYXR1cmVbXSwgbGF5ZXJJZD86IHN0cmluZyk6IEhpZ2hMaWdodEhhbmRsZSB7XHJcbiAgLy8gSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXNzdW1lIHRoYXQgZmVhdHVyZXMgY29tZSBmcm9tIHRoZSBzYW1lIGxheWVyXHJcbiAgbGV0IGZlYXR1cmVMYXllcklkID0gbGF5ZXJJZFxyXG4gIGxldCBmZWF0dXJlTGF5ZXJWaWV3ID0gbnVsbFxyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuXHJcbiAgLy8gaWYgbGF5ZXJJZCBkb2Vzbid0IGV4aXN0LCB3ZSBnZXQgbGF5ZXJJZCBieSBmZWF0dXJlXHJcbiAgaWYgKCFmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0WzBdIGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldCBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wRmVhdHVyZSkge1xyXG4gICAgICBmZWF0dXJlTGF5ZXJJZCA9IHRlbXBGZWF0dXJlLmxheWVyICYmIHRlbXBGZWF0dXJlLmxheWVyLmlkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZmVhdHVyZUxheWVySWQpIHtcclxuICAgIGNvbnN0IGxheWVyVmlld3MgPSBtYXBCYXNlVmlldy5hbGxMYXllclZpZXdzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpLmxheWVyLmlkID09PSBmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgICAgIGZlYXR1cmVMYXllclZpZXcgPSBsYXllclZpZXdzLmdldEl0ZW1BdChpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXllcklkOiBmZWF0dXJlTGF5ZXJJZCxcclxuICAgICAgICBoYW5kbGU6IGZlYXR1cmVMYXllclZpZXcuaGlnaGxpZ2h0KHRhcmdldClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb1RvVGFyZ2V0SW1tZWRpYXRlbHkgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgX3RhcmdldDogX19lc3JpLkdlb21ldHJ5KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgY29uc3QgZ2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKFtfdGFyZ2V0XSwgdmlld1NSKVxyXG5cclxuICBpZiAoZ2VvbWV0cmllcyAmJiBnZW9tZXRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGdlb21ldHJpZXNbMF1cclxuICAgIHZpZXcuZ29Ubyh0YXJnZXQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnb1RvVmlld3BvaW50SW1tZWRpYXRlbHkgKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgX3ZpZXdwb2ludDogX19lc3JpLlZpZXdwb2ludCk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGNvbnN0IHZpZXdTUiA9IHZpZXcuc3BhdGlhbFJlZmVyZW5jZVxyXG4gIGNvbnN0IHZpZXdwb2ludCA9IGF3YWl0IHByb2plY3RWaWV3cG9pbnQoX3ZpZXdwb2ludCwgdmlld1NSKVxyXG4gIC8vIHZpZXcuZ29Ubyh2aWV3cG9pbnQsIHsgYW5pbWF0ZTogZmFsc2UgfSlcclxuICB2aWV3LnZpZXdwb2ludCA9IHZpZXdwb2ludFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFZpZXdwb2ludCAodmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgc3IxID0gdmlld3BvaW50LnRhcmdldEdlb21ldHJ5Py5zcGF0aWFsUmVmZXJlbmNlXHJcblxyXG4gIGlmIChzcjEgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2Uoc3IxLCB2aWV3U1IpKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3IyID0gdmlld3BvaW50LmNhbWVyYT8ucG9zaXRpb24/LnNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgaWYgKHNyMiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjIsIHZpZXdTUikpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlIChzcjE6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlLCBzcjI6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgaXNTYW1lID0gc3IxLndraWQgPT09IHNyMi53a2lkIHx8IHNyMS5lcXVhbHMoc3IyKVxyXG4gIC8vICBJbiBKUyBBUEkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICBjb25zdCBpc0xpa2UgPSAoc3IxLmlzV2ViTWVyY2F0b3IgfHwgc3IxLmlzV0dTODQpICYmIChzcjIuaXNXZWJNZXJjYXRvciB8fCBzcjIuaXNXR1M4NClcclxuICByZXR1cm4gIWlzU2FtZSAmJiAhaXNMaWtlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0Vmlld3BvaW50IChfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50LCB2aWV3U1I6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuVmlld3BvaW50PiB7XHJcbiAgY29uc3Qgdmlld3BvaW50ID0gX3ZpZXdwb2ludC5jbG9uZSgpXHJcbiAgY29uc3QgdGFyZ2V0R2VvbWV0cnkgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnlcclxuICBjb25zdCBjYW1lcmFQb3NpdG9uID0gdmlld3BvaW50LmNhbWVyYT8ucG9zaXRpb25cclxuXHJcbiAgY29uc3QgdG9Qcm9qZWN0R2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gIGxldCBpc1Byb2plY3RUYXJnZXRHZW9tZXRyeTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgbGV0IGlzUHJvamVjdENhbWVyYVBvc2l0aW9uOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgaWYgKHRhcmdldEdlb21ldHJ5ICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHRhcmdldEdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2UsIHZpZXdTUikpIHtcclxuICAgIGlzUHJvamVjdFRhcmdldEdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKHRhcmdldEdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgaWYgKGNhbWVyYVBvc2l0b24gJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UoY2FtZXJhUG9zaXRvbi5zcGF0aWFsUmVmZXJlbmNlLCB2aWV3U1IpKSB7XHJcbiAgICBpc1Byb2plY3RDYW1lcmFQb3NpdGlvbiA9IHRydWVcclxuICAgIHRvUHJvamVjdEdlb21ldHJpZXMucHVzaChjYW1lcmFQb3NpdG9uKVxyXG4gIH1cclxuXHJcbiAgaWYgKHRvUHJvamVjdEdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgcHJvamVjdGVkR2VvbWV0cmllcyA9IGF3YWl0IHByb2plY3RHZW9tZXRyaWVzKHRvUHJvamVjdEdlb21ldHJpZXMsIHZpZXdTUilcclxuXHJcbiAgICBpZiAoaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkpIHtcclxuICAgICAgdmlld3BvaW50LnRhcmdldEdlb21ldHJ5ID0gcHJvamVjdGVkR2VvbWV0cmllc1swXVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1Byb2plY3RDYW1lcmFQb3NpdGlvbikge1xyXG4gICAgICB2aWV3cG9pbnQuY2FtZXJhLnBvc2l0aW9uID0gcHJvamVjdGVkR2VvbWV0cmllc1twcm9qZWN0ZWRHZW9tZXRyaWVzLmxlbmd0aCAtIDFdIGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZpZXdwb2ludFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFwUGFudG8gKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdlb21ldHJ5IHwgX19lc3JpLkdlb21ldHJ5W10gfFxyXG5fX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBfX2VzcmkuRXh0ZW50KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBwYW5Ub1RhcmdldCA9IHRhcmdldCBhcyBhbnlcclxuICBjb25zdCB0ZW1wQmFzZU1hcFZpZXcgPSBtYXBCYXNlVmlldyBhcyBhbnlcclxuICBpZiAocGFuVG9UYXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmxlbmd0aCA9PT0gMCkgeyBhd2FpdCBQcm9taXNlLnJlc29sdmUoKTsgcmV0dXJuIH1cclxuXHJcbiAgICBpZiAocGFuVG9UYXJnZXRbMF0uZ2VvbWV0cnkpIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnlBcnI6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5Ub1RhcmdldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdlb21ldHJ5QXJyLnB1c2gocGFuVG9UYXJnZXRbaV0uZ2VvbWV0cnkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF3YWl0IGdldEdlb21ldHJpZXNFeHRlbnQoZ2VvbWV0cnlBcnIpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBnZXRHZW9tZXRyaWVzRXh0ZW50KHBhblRvVGFyZ2V0KS50aGVuKChleHRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGV4dGVudC5jZW50ZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChwYW5Ub1RhcmdldC5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZXRtZXRyeSA9IHBhblRvVGFyZ2V0Lmdlb21ldHJ5IGFzIF9fZXNyaS5HZW9tZXRyeVxyXG4gICAgICByZXR1cm4gZ29Ubyh0ZW1wQmFzZU1hcFZpZXcsIGdldENlbnRlclBvaW50KGdldG1ldHJ5KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQocGFuVG9UYXJnZXQpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ29UbyAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBkZWxheSBiZWZvcmUgdXBkYXRpbmcgb2YgdmlldyB0dXJucyB0cnVlLCA0MDBtcyBpcyBhIHRlbXBvcmFyeSBzb2x1dGlvbi5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLy8vIHRoZXJlIGlzIGEgY29uZmxpY3QgZm9yIHBhbmluZyB3aGVuIHRoZSBsYXllciB2aWV3IGlzIHVwZGF0aW5nLCBzdWNoIGFzICdwYW4gdG8nIGFuZCAnZmlsdGVyJy5cclxuICAgICAgLy8vLyB0aGlzIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLCBpdCBjYW4gcmVkdWNlIHRoZSBmcmVxdWVuY3kgb2YgdGhlIHByb2JsZW0gcmF0aGVyIHRoYW4gc29sdmUgaXQgY29tcGxldGVseS5cclxuICAgICAgLy9pZiAodmlldy51cGRhdGluZykge1xyXG4gICAgICAvLyAgY29uc3QgaGFuZGxlciA9IHZpZXcud2F0Y2goJ3VwZGF0aW5nJywgdmFsdWUgPT4ge1xyXG4gICAgICAvLyAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIC8vICAgICAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxyXG4gICAgICAvLyAgICAgIGhhbmRsZXIucmVtb3ZlKClcclxuICAgICAgLy8gICAgfVxyXG4gICAgICAvLyAgfSlcclxuICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAvLyAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiByZXNvbHZlKCkpLmNhdGNoKCgpID0+IHJlamVjdCgpKVxyXG4gICAgICAvL31cclxuICAgICAgdmlldy5nb1RvKHRhcmdldCkudGhlbigoKSA9PiB7IHJlc29sdmUoKSB9KS5jYXRjaCgoKSA9PiB7IHJlamVjdCgpIH0pXHJcbiAgICB9LCA0MDApXHJcbiAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvbWV0cmllc0V4dGVudCAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10pOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcclxuICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXHJcbiAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEV4dGVudDogdHlwZW9mIF9fZXNyaS5FeHRlbnQ7XHJcbiAgICBbRXh0ZW50XSA9IG1vZHVsZXNcclxuXHJcbiAgICBpZiAoIWdlb21ldHJpZXMgfHwgIWdlb21ldHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnVsbEV4dGVudDogX19lc3JpLkV4dGVudCA9IG51bGxcclxuICAgIGxldCBpbmRleFxyXG4gICAgY29uc3QgbnVtR2VvbWV0cmllcyA9IGdlb21ldHJpZXMubGVuZ3RoXHJcblxyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbnVtR2VvbWV0cmllczsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbaW5kZXhdXHJcbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XHJcblxyXG4gICAgICBpZiAoIWV4dGVudCAmJiBnZW9tZXRyeS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRHZW9tZXRyeSA9IGdlb21ldHJ5IGFzIGFueVxyXG5cclxuICAgICAgICBpZiAocG9pbnRHZW9tZXRyeS54ICYmIHBvaW50R2VvbWV0cnkueSkge1xyXG4gICAgICAgICAgZXh0ZW50ID0gbmV3IEV4dGVudCh7XHJcbiAgICAgICAgICAgIHhtYXg6IHBvaW50R2VvbWV0cnkueCxcclxuICAgICAgICAgICAgeG1pbjogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB5bWF4OiBwb2ludEdlb21ldHJ5LnksXHJcbiAgICAgICAgICAgIHltaW46IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgem1heDogcG9pbnRHZW9tZXRyeS56LFxyXG4gICAgICAgICAgICB6bWluOiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZXh0ZW50KSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZ1bGxFeHRlbnQpIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudC51bmlvbihleHRlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVsbEV4dGVudCA9IGV4dGVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZ1bGxFeHRlbnQud2lkdGggPCAwICYmIGZ1bGxFeHRlbnQuaGVpZ2h0IDwgMCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmdWxsRXh0ZW50KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaWx0ZXJGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghYWN0aW9uTGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25MYXllckRhdGFTb3VyY2VJZClcclxuXHJcbiAgaWYgKCFkYXRhU291cmNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG5cclxuICB0cnkge1xyXG4gICAgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkQnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG4gICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgamltdUxheWVyVmlldyBieSBkYXRhU291cmNlJywgZGF0YVNvdXJjZSwgZXJyKVxyXG4gIH1cclxuXHJcbiAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5sYXllciAmJiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllciB8fCBqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikpIHtcclxuICAgIChqaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZXREZWZpbml0aW9uRXhwcmVzc2lvbihxdWVyeVNRTClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RmVhdHVyZXMgKGxheWVyT2JqZWN0LCBxdWVyeVNRTCkge1xyXG4gIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgbGV0IFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5O1xyXG4gICAgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcclxuICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlTUUxcclxuICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXHJcbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgIHJldHVybiBsYXllck9iamVjdC5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICByZXR1cm4gZmVhdHVyZVNldFxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBmbGFzaE9uRmVhdHVyZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11RmVhdHVyZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBmZWF0dXJlTGF5ZXJWaWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcXVlcnlGZWF0dXJlcyhmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZUxheWVyVmlldy5sYXllci5nZW9tZXRyeVR5cGUpXHJcbiAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGxldCB0ZW1wRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdXJsOiBkYXRhU291cmNlVXRpbHMuZ2V0VXJsQnlMYXllcigodGVtcEppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLmxheWVyKVxyXG4gICAgICB9KVxyXG4gICAgICB0ZW1wRmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBxdWVyeUZlYXR1cmVzKHRlbXBGZWF0dXJlTGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZVNldC5mZWF0dXJlc1swXS5nZW9tZXRyeS50eXBlKVxyXG4gICAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmxldCBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBudWxsXHJcbmZ1bmN0aW9uIGZsYXNoT25TY2VuZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11U2NlbmVMYXllclZpZXcpIHtcclxuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XHJcbiAgICBsZXQgc2NlbmVMYXllclZpZXc6IF9fZXNyaS5TY2VuZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcXVlcnlGZWF0dXJlcyhzY2VuZUxheWVyVmlldz8ubGF5ZXI/LmFzc29jaWF0ZWRMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SWRGaWVsZCA9IHNjZW5lTGF5ZXJWaWV3LmxheWVyLm9iamVjdElkRmllbGRcclxuICAgICAgICBjb25zdCBvYmplY3RJZHMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tvYmplY3RJZEZpZWxkXSlcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgY29uc3QgbWF4Rmxhc2hDb3VudCA9IDZcclxuICAgICAgICBsZXQgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICBjb25zdCBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnMgPSBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnNcclxuXHJcbiAgICAgICAgY29uc3QgZmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoaSA8IG1heEZsYXNoQ291bnQpIHtcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGlmIChoaWdobGlnaHRDb2xvcikge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gbnVsbFxyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBbMCwgMCwgMCwgMF0gfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IGhpZ2hsaWdodENvbG9yIH1cclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnNcclxuICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmxhc2hGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghbGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShsYXllckRhdGFTb3VyY2VJZClcclxuXHJcbiAgaWYgKCFkYXRhU291cmNlKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGxldCBqaW11TGF5ZXJWaWV3OiBKaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG5cclxuICB0cnkge1xyXG4gICAgamltdUxheWVyVmlldyA9IGF3YWl0IGppbXVNYXBWaWV3LndoZW5KaW11TGF5ZXJWaWV3TG9hZGVkQnlEYXRhU291cmNlKGRhdGFTb3VyY2UpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gbnVsbFxyXG4gICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgamltdUxheWVyVmlldyBieSBkYXRhU291cmNlJywgZGF0YVNvdXJjZSwgZXJyKVxyXG4gIH1cclxuXHJcbiAgaWYgKGppbXVMYXllclZpZXcgJiYgamltdUxheWVyVmlldy5sYXllcikge1xyXG4gICAgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgZmxhc2hPbkZlYXR1cmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcpXHJcbiAgICB9IGVsc2UgaWYgKGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSB7XHJcbiAgICAgIGZsYXNoT25TY2VuZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11U2NlbmVMYXllclZpZXcpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEZsYXNoIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgc3ltYm9sKSB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9HcmFwaGljJ1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWM7XHJcbiAgICBbR3JhcGhpY10gPSBtb2R1bGVzXHJcblxyXG4gICAgY29uc3QgZmxhc2hGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWF4Rmxhc2hDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gW11cclxuICAgICAgbGV0IGZsYXNoQ291bnQgPSAwXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZW1wR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgIGdlb21ldHJ5OiBmZWF0dXJlc1tpXS5nZW9tZXRyeSxcclxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogZmVhdHVyZXNbaV0uYXR0cmlidXRlc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3JhcGhpY3MucHVzaCh0ZW1wR3JhcGhpYylcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2luZ2xlRmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MuYWRkTWFueShncmFwaGljcylcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLnJlbW92ZU1hbnkoZ3JhcGhpY3MpXHJcbiAgICAgICAgICBmbGFzaENvdW50ID0gZmxhc2hDb3VudCArIDFcclxuICAgICAgICAgIGlmIChmbGFzaENvdW50IDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzaW5nbGVGbGFzaCgpXHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmbGFzaEZlYXR1cmVzKGZlYXR1cmVzLCAzKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsYXNoU3ltYm9sIChnZW9tZXRyeVR5cGU6IHN0cmluZykge1xyXG4gIGlmIChbJ3BvaW50JywgJ211bHRpcG9pbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgc2l6ZTogJzE2cHgnLFxyXG4gICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgICB3aWR0aDogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlsaW5lJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgd2lkdGg6IDMsXHJcbiAgICAgIHN0eWxlOiAnc29saWQnXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlnb24nLCAnZXh0ZW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVGaWxsU3ltYm9sKClcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSxcclxuICAgICAgc3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIG91dGxpbmU6IHsgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVMaW5lU3ltYm9sKClcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsnbWVzaCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdtZXNoLTNkJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBNZXNoU3ltYm9sM0QoKVxyXG4gICAgICBzeW1ib2xMYXllcnM6IFt7XHJcbiAgICAgICAgdHlwZTogJ2ZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IEZpbGxTeW1ib2wzRExheWVyKClcclxuICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdIH1cclxuICAgICAgfV1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENlbnRlclBvaW50IChnZW9tZXRyeTogX19lc3JpLkdlb21ldHJ5KTogX19lc3JpLlBvaW50IHtcclxuICAvLyBwb2ludCB8IG11bHRpcG9pbnQgfCBwb2x5bGluZSB8IHBvbHlnb24gfCBleHRlbnQgfCBtZXNoXHJcbiAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XHJcbiAgICBjYXNlICdwb2ludCc6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcclxuICAgIGNhc2UgJ2V4dGVudCc6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLkV4dGVudCkuY2VudGVyXHJcbiAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWRcclxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUpLmV4dGVudC5jZW50ZXJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSAmJiBnZW9tZXRyeS5leHRlbnQgPyBnZW9tZXRyeS5leHRlbnQuY2VudGVyIDogdW5kZWZpbmVkXHJcbiAgICAvLyB0b2RvXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRmVhdHVyZSAoZmVhdHVyZTogSUZlYXR1cmUgfCBfX2VzcmkuR3JhcGhpYywgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3Rvcik6IF9fZXNyaS5HcmFwaGljIHtcclxuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXHJcbiAgaWYgKChmZWF0dXJlIGFzIGFueSkuY2xvbmUpIHtcclxuICAgIHRlbXBGZWF0dXJlID0gKGZlYXR1cmUgYXMgYW55KS5jbG9uZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBGZWF0dXJlID0gR3JhcGhpYy5mcm9tSlNPTihPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlKSlcclxuICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlLmF0dHJpYnV0ZXMpXHJcbiAgfVxyXG4gIHJldHVybiB0ZW1wRmVhdHVyZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdEdlb21ldHJpZXMgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdLCBzcGF0aWFsUmVmZXJlbmNlOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5W10+IHtcclxuICBpZiAoIWdlb21ldHJpZXMgfHwgZ2VvbWV0cmllcy5sZW5ndGggPT09IDAgfHwgIWdlb21ldHJpZXNbMF0gfHxcclxuICAgIHNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLndraWQgfHwgKHNwYXRpYWxSZWZlcmVuY2UuZXF1YWxzKGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZSkpKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0ICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yKSB7XHJcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nab29tVG9GZWF0dXJlcyAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXI6IGFueSwgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10pOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcclxuICBpZiAobWFwQmFzZVZpZXcgJiYgbWFwQmFzZVZpZXcudHlwZSA9PT0gJzNkJyAmJiBsYXllciAmJiBsYXllci5xdWVyeUZlYXR1cmVzICYmIGZlYXR1cmVzKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgY29uc3QgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgICAgcXVlcnkub2JqZWN0SWRzID0gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW2xheWVyLm9iamVjdElkRmllbGRdKVxyXG4gICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZmVhdHVyZXMgJiYgcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gZmVhdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdC5mZWF0dXJlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzTGl2ZSAoYXBwTW9kZTogQXBwTW9kZSk6IGJvb2xlYW4ge1xyXG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xyXG4gICAgaWYgKGFwcE1vZGUgPT09IEFwcE1vZGUuRGVzaWduKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXllcnNGcm9tRGF0YVNvdXJjZUlkcyAoZGF0YVNvdXJjZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IGxheWVyUHJvbWlzZXMgPSBbXVxyXG4gIGRhdGFTb3VyY2VJZHMuZm9yRWFjaChkYXRhU291cmNlSWQgPT4ge1xyXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkYXRhU291cmNlSWQpIGFzIHVua25vd24gYXMgSlNBUElMYXllck1peGluXHJcbiAgICBsZXQgbGF5ZXJQcm9taXNlXHJcbiAgICBpZiAoZGF0YVNvdXJjZT8ubGF5ZXIpIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGRhdGFTb3VyY2UubGF5ZXIpXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTb3VyY2U/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UpIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gZGF0YVNvdXJjZS5jcmVhdGVKU0FQSUxheWVyQnlEYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxheWVyUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG4gICAgbGF5ZXJQcm9taXNlcy5wdXNoKGxheWVyUHJvbWlzZSlcclxuICB9KVxyXG4gIHJldHVybiBQcm9taXNlLmFsbChsYXllclByb21pc2VzKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SmltdU1hcFZpZXdJZCAod2lkZ2V0SWQ6IHN0cmluZywgZGF0YVNvdXJjZUlkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIElmIGRhdGFTb3VyY2VJZCBpcyBudWxsLCBtYWtlIHN1cmUgaXQgY29udmVydHMgdG8gZW1wdHkgc3RyaW5nLlxyXG4gIGNvbnN0IGRzSWQgPSBkYXRhU291cmNlSWQgfHwgJydcclxuICByZXR1cm4gYCR7d2lkZ2V0SWR9LSR7ZHNJZH1gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBCYXNlUmVzdG9yZURhdGEgKG1hcEluc3RhbmNlOiBNYXBCYXNlKTogTWFwYmFzZVJlc3RvcmVEYXRhIHtcclxuICBjb25zdCB7XHJcbiAgICBtYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZSxcclxuICAgIEdlb21ldHJ5LFxyXG4gICAgSW5pdGlhbFZpZXdQcm9wZXJ0aWVzLFxyXG4gICAgVGlsZUxheWVyLFxyXG4gICAgQmFzZW1hcCxcclxuICAgIE1hcFZpZXcsXHJcbiAgICBTY2VuZVZpZXcsXHJcbiAgICBFeHRlbnQsXHJcbiAgICBWaWV3cG9pbnQsXHJcbiAgICBQb3J0YWxJdGVtLFxyXG4gICAgUG9ydGFsLFxyXG4gICAgV2ViTWFwLFxyXG4gICAgV2ViU2NlbmUsXHJcbiAgICBDb2xvcixcclxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXHJcbiAgICBtYXBDcmVhdGluZ0luZm8sXHJcbiAgICB2aWV3LFxyXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXHJcbiAgICBtYXBEcyxcclxuICAgIGRzTWFuYWdlcixcclxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxyXG4gIH0gPSBtYXBJbnN0YW5jZVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbWFwQ29udGFpbmVyLFxyXG4gICAgc3RhdGUsXHJcblxyXG4gICAgR2VvbWV0cnksXHJcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXHJcbiAgICBUaWxlTGF5ZXIsXHJcbiAgICBCYXNlbWFwLFxyXG4gICAgTWFwVmlldyxcclxuICAgIFNjZW5lVmlldyxcclxuICAgIEV4dGVudCxcclxuICAgIFZpZXdwb2ludCxcclxuICAgIFBvcnRhbEl0ZW0sXHJcbiAgICBQb3J0YWwsXHJcbiAgICBXZWJNYXAsXHJcbiAgICBXZWJTY2VuZSxcclxuICAgIENvbG9yLFxyXG5cclxuICAgIGV4cGVjdGVkRGF0YVNvdXJjZUluZm8sXHJcbiAgICBtYXBDcmVhdGluZ0luZm8sXHJcbiAgICB2aWV3LFxyXG4gICAgbGFzdFVwZGF0ZVZpZXdDb25maWcsXHJcbiAgICBtYXBEcyxcclxuXHJcbiAgICBkc01hbmFnZXIsXHJcbiAgICBpc0ZpcnN0UmVjZWl2ZU1lc3NhZ2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlTWFwQmFzZSAobWFwSW5zdGFuY2U6IE1hcEJhc2UsIHJlc3RvcmVEYXRhOiBNYXBiYXNlUmVzdG9yZURhdGEpOiB2b2lkIHtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdG9yZURhdGEpXHJcblxyXG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgIG1hcEluc3RhbmNlW2tleV0gPSByZXN0b3JlRGF0YVtrZXldXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUd29XaWRnZXRzTXV0dWFsbHlFeHRlbnRDaGFuZ2UgKHdpZGdldElkMTogc3RyaW5nLCB3aWRnZXRJZDI6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIGlmICh3aWRnZXRJZDEgJiYgd2lkZ2V0SWQyKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcclxuXHJcbiAgICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcclxuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWydwYW5UbycsICd6b29tVG9GZWF0dXJlJ11cclxuICAgICAgY29uc3QgbWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5FeHRlbnRDaGFuZ2VcclxuXHJcbiAgICAgIGlmIChpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMSwgd2lkZ2V0SWQyLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSAmJlxyXG4gICAgICAgICBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHdpZGdldElkMiwgd2lkZ2V0SWQxLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNXaWRnZXRTZW5kWm9vbVRvQWN0aW9uVG9Bbm90aGVyIChzZW5kTWVzc2FnZVdpZGdldElkOiBzdHJpbmcsIGFjdGlvbldpZGdldElkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IGJvb2xlYW4ge1xyXG4gIGlmIChzZW5kTWVzc2FnZVdpZGdldElkICYmIGFjdGlvbldpZGdldElkKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlQ29uZmlncyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcubWVzc2FnZUNvbmZpZ3NcclxuXHJcbiAgICBpZiAobWVzc2FnZUNvbmZpZ3MpIHtcclxuICAgICAgY29uc3QgYWN0aW9uTmFtZXM6IHN0cmluZ1tdID0gWyd6b29tVG9GZWF0dXJlJ11cclxuXHJcbiAgICAgIHJldHVybiBpc1dpZGdldFNlbmRBY3Rpb25zVG9Bbm90aGVyKHNlbmRNZXNzYWdlV2lkZ2V0SWQsIGFjdGlvbldpZGdldElkLCBtZXNzYWdlQ29uZmlncywgbWVzc2FnZVR5cGUsIGFjdGlvbk5hbWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIgKFxyXG4gIHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZyxcclxuICBhY3Rpb25XaWRnZXRJZDogc3RyaW5nLFxyXG4gIG1lc3NhZ2VDb25maWdzOiBJbW11dGFibGVPYmplY3Q8TWVzc2FnZXNKc29uPixcclxuICBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsXHJcbiAgYWN0aW9uTmFtZXM6IHN0cmluZ1tdXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgY29uc3QgbWVzc2FnZUpzb25BcnJheSA9IE9iamVjdC52YWx1ZXMobWVzc2FnZUNvbmZpZ3MpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlSnNvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VKc29uID0gbWVzc2FnZUpzb25BcnJheVtpXVxyXG5cclxuICAgICAgaWYgKG1lc3NhZ2VKc29uLndpZGdldElkID09PSBzZW5kTWVzc2FnZVdpZGdldElkICYmIG1lc3NhZ2VKc29uLm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBtZXNzYWdlSnNvbi5hY3Rpb25zXHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWN0aW9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uc1tqXVxyXG5cclxuICAgICAgICAgIGlmIChhY3Rpb24ud2lkZ2V0SWQgPT09IGFjdGlvbldpZGdldElkKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb25OYW1lcy5pbmNsdWRlcyhhY3Rpb24uYWN0aW9uTmFtZSkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbiwgTWVzc2FnZVR5cGUsIHR5cGUgTWVzc2FnZSwgdHlwZSBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgZ2V0QXBwU3RvcmUsIERhdGFTb3VyY2VNYW5hZ2VyLFxyXG4gIHR5cGUgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLCB0eXBlIEV4dGVudENoYW5nZU1lc3NhZ2UsIE11dGFibGVTdG9yZU1hbmFnZXIsIHR5cGUgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2UsIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uLFxyXG4gIHR5cGUgRGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlc0NoYW5nZVR5cGUsIHR5cGUgVXNlRGF0YVNvdXJjZSwgdHlwZSBJbW11dGFibGVBcnJheVxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgdHlwZSBWaWV3UGFkZGluZywgdHlwZSBab29tVG9PcHRpb25zIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGhhbmRsZUZlYXR1cmUgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcnXHJcbmltcG9ydCB7IGdldERzQnlXaWRnZXRJZCB9IGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlWm9vbVRvSW50ZXJuYWxWYWx1ZSB7XHJcbiAgem9vbVRvT3B0aW9uOiBab29tVG9PcHRpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVRvQXJyYXlHcmFwaGljc0ludGVybmFsVmFsdWUgZXh0ZW5kcyBCYXNlWm9vbVRvSW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3pvb20tdG8tYXJyYXktZ3JhcGhpY3MnXHJcbiAgYXJyYXlGZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFpvb21Ub0dyYXBoaWNzSW50ZXJuYWxWYWx1ZSBleHRlbmRzIEJhc2Vab29tVG9JbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAnem9vbS10by1ncmFwaGljcydcclxuICBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXVxyXG4gIGRhdGFTb3VyY2VJZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVRvRXh0ZW50SW50ZXJuYWxWYWx1ZSBleHRlbmRzIEJhc2Vab29tVG9JbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAnem9vbS10by1leHRlbnQnXHJcbiAgZXh0ZW50OiBfX2VzcmkuRXh0ZW50XHJcbiAgdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50XHJcbiAgc3RhdGlvbmFyeTogYm9vbGVhblxyXG4gIGludGVyYWNpdmU6IGJvb2xlYW5cclxuICBwdWJsaXNoVGltZTogbnVtYmVyXHJcbiAgcHVibGlzaFdpZGdldElkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tVG9RdWVyeVBhcmFtc0ludGVybmFsVmFsdWUgZXh0ZW5kcyBCYXNlWm9vbVRvSW50ZXJuYWxWYWx1ZSB7XHJcbiAgdHlwZTogJ3pvb20tdG8tcXVlcnktcGFyYW1zJ1xyXG4gIGRhdGFTb3VyY2VJZHM6IHN0cmluZ1tdXHJcbiAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVRvTGF5ZXJzSW50ZXJuYWxWYWx1ZSBleHRlbmRzIEJhc2Vab29tVG9JbnRlcm5hbFZhbHVlIHtcclxuICB0eXBlOiAnem9vbS10by1sYXllcnMnXHJcbiAgZGF0YVNvdXJjZUlkczogc3RyaW5nW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tVG9GZWF0dXJlQWN0aW9uVmFsdWUge1xyXG4gIHZhbHVlOiBab29tVG9BcnJheUdyYXBoaWNzSW50ZXJuYWxWYWx1ZSB8IFpvb21Ub0dyYXBoaWNzSW50ZXJuYWxWYWx1ZSB8IFpvb21Ub0V4dGVudEludGVybmFsVmFsdWUgfCBab29tVG9RdWVyeVBhcmFtc0ludGVybmFsVmFsdWUgfCBab29tVG9MYXllcnNJbnRlcm5hbFZhbHVlXHJcbiAgcmVsYXRlZFdpZGdldHM6IHN0cmluZ1tdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21Ub0ZlYXR1cmVBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xyXG4gIE5vTG9ja1RyaWdnZXJMYXllcldpZGdldHMgPSBbJ01hcCddXHJcblxyXG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcclxuICAgIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VzQ2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSAmJlxyXG4gICAgICAgIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UgJiZcclxuICAgICAgICBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VEZXNjcmlwdGlvbi53aWRnZXRJZCwgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGlmIChkcy50eXBlID09PSAnV0VCX01BUCcgfHwgZHMudHlwZSA9PT0gJ1dFQl9TQ0VORScpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAhIWRzLmdldERhdGFTb3VyY2VKc29uKCk/Lmdlb21ldHJ5VHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAobWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlIHx8XHJcbiAgICAgICAgICBtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSB8fFxyXG4gICAgICAgICAgbWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuICdtZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGxldCB6b29tVG9PcHRpb246IFpvb21Ub09wdGlvbnMgPSBudWxsXHJcbiAgICAgIGNvbnN0IHZpZXdQYWRkaW5nOiBWaWV3UGFkZGluZyA9IHtcclxuICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICByaWdodDogNTAsXHJcbiAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICBib3R0b206IDUwXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5DcmVhdGVVcGRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXlGZWF0dXJlcyA9IFtdXHJcbiAgICAgICAgICAgIGRhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlLmRhdGFSZWNvcmRTZXRzLmZvckVhY2goZGF0YVJlY29yZFNldCA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGFSZWNvcmRTZXQgJiYgZGF0YVJlY29yZFNldC5yZWNvcmRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFSZWNvcmRTZXQucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoKGRhdGFSZWNvcmRTZXQucmVjb3Jkc1tpXSBhcyBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goaGFuZGxlRmVhdHVyZSgoZGF0YVJlY29yZFNldC5yZWNvcmRzW2ldIGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSwgR3JhcGhpYykpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFycmF5RmVhdHVyZXMucHVzaChmZWF0dXJlcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb24gPSBnZXRab29tVG9PcHRpb25zKGFjdGlvbkNvbmZpZywgdmlld1BhZGRpbmcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB6b29tVG9WYWx1ZTogWm9vbVRvQXJyYXlHcmFwaGljc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3pvb20tdG8tYXJyYXktZ3JhcGhpY3MnLFxyXG4gICAgICAgICAgICAgIGFycmF5RmVhdHVyZXM6IGFycmF5RmVhdHVyZXMsXHJcbiAgICAgICAgICAgICAgem9vbVRvT3B0aW9uOiB6b29tVG9PcHRpb25cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3pvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZS52YWx1ZScsIHpvb21Ub1ZhbHVlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlLndpZGdldElkXVxyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldExhYmVsID0gbWVzc2FnZVdpZGdldEpzb24ubWFuaWZlc3QubGFiZWxcclxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcblxyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0RmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10gPSBbXVxyXG5cclxuICAgICAgICAgIGxldCBkYXRhU291cmNlSWQ6IHN0cmluZyA9IG51bGxcclxuICAgICAgICAgIGlmIChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkcykge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0pIHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkID0gKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UpLmlkXHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAodGhpcy5Ob0xvY2tUcmlnZ2VyTGF5ZXJXaWRnZXRzLmluY2x1ZGVzKG1lc3NhZ2VXaWRnZXRMYWJlbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1haW5EYXRhU291cmNlT2ZTZWxlY3Rpb24gPSBkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXS5kYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKClcclxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uQ29uZmlnPy51c2VEYXRhU291cmNlcz8uc29tZSh1c2VEYXRhU291cmNlID0+IHVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgPT09IG1haW5EYXRhU291cmNlT2ZTZWxlY3Rpb24uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkNoYW5nZURTID0gZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQ2hhbmdlTWFpbkRTID0gc2VsZWN0aW9uQ2hhbmdlRFM/LmdldE1haW5EYXRhU291cmNlKClcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGRzSWQgb2YgbWFpbkRTIGN1cnJlbnRseSwgd2lsbCBzdXBwb3J0IHZpZXcgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiB1c2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkID09PSBzZWxlY3Rpb25DaGFuZ2VNYWluRFMuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1tpXSBhcyBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0RmVhdHVyZXMucHVzaChoYW5kbGVGZWF0dXJlKChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1tpXSBhc1xyXG4gICAgICAgICAgICAgICAgICBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSwgR3JhcGhpYykpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgem9vbVRvT3B0aW9uID0gZ2V0Wm9vbVRvT3B0aW9ucyhhY3Rpb25Db25maWcsIHZpZXdQYWRkaW5nKVxyXG5cclxuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkZlYXR1cmVTZXQ6IFpvb21Ub0dyYXBoaWNzSW50ZXJuYWxWYWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3pvb20tdG8tZ3JhcGhpY3MnLFxyXG4gICAgICAgICAgICBmZWF0dXJlczogc2VsZWN0RmVhdHVyZXMsXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb246IHpvb21Ub09wdGlvblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICd6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWUudmFsdWUnLCBzZWxlY3Rpb25GZWF0dXJlU2V0KVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZTpcclxuICAgICAgICAgIGNvbnN0IGV4dGVudENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIEV4dGVudENoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgIGNvbnN0IHJlbGF0ZWRXaWRnZXRJZHMgPSBleHRlbnRDaGFuZ2VNZXNzYWdlLmdldFJlbGF0ZWRXaWRnZXRJZHMoKVxyXG5cclxuICAgICAgICAgIGlmIChyZWxhdGVkV2lkZ2V0SWRzLmluY2x1ZGVzKHRoaXMud2lkZ2V0SWQpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZXh0ZW50VmFsdWU6IFpvb21Ub0V4dGVudEludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6ICd6b29tLXRvLWV4dGVudCcsXHJcbiAgICAgICAgICAgIGV4dGVudDogZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnQsXHJcbiAgICAgICAgICAgIHZpZXdwb2ludDogZXh0ZW50Q2hhbmdlTWVzc2FnZS52aWV3cG9pbnQsXHJcbiAgICAgICAgICAgIHN0YXRpb25hcnk6IGV4dGVudENoYW5nZU1lc3NhZ2Uuc3RhdGlvbmFyeSxcclxuICAgICAgICAgICAgaW50ZXJhY2l2ZTogZXh0ZW50Q2hhbmdlTWVzc2FnZS5pbnRlcmFjaXZlLFxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb246IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcHVibGlzaFRpbWU6IGV4dGVudENoYW5nZU1lc3NhZ2UucHVibGlzaFRpbWUsXHJcbiAgICAgICAgICAgIHB1Ymxpc2hXaWRnZXRJZDogZXh0ZW50Q2hhbmdlTWVzc2FnZS53aWRnZXRJZFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHpvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZTogWm9vbVRvRmVhdHVyZUFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogZXh0ZW50VmFsdWUsXHJcbiAgICAgICAgICAgIHJlbGF0ZWRXaWRnZXRzOiByZWxhdGVkV2lkZ2V0SWRzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlJywgem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2U6XHJcbiAgICAgICAgICBjb25zdCBmaWx0ZXJDaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhU291cmNlRmlsdGVyQ2hhbmdlTWVzc2FnZVxyXG4gICAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXcuXHJcbiAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gZmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzLnNvbWUoZGF0YVNvdXJjZUlkID0+IHVzZURhdGFTb3VyY2U/LmRhdGFTb3VyY2VJZCA9PT0gZGF0YVNvdXJjZUlkKSkpIHtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB6b29tVG9PcHRpb24gPSBnZXRab29tVG9PcHRpb25zKGFjdGlvbkNvbmZpZywgdmlld1BhZGRpbmcpXHJcblxyXG4gICAgICAgICAgY29uc3QgZmlsdGVyQ2hhbmdlQWN0aW9uVmFsdWU6IFpvb21Ub1F1ZXJ5UGFyYW1zSW50ZXJuYWxWYWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogJ3pvb20tdG8tcXVlcnktcGFyYW1zJyxcclxuICAgICAgICAgICAgZGF0YVNvdXJjZUlkczogZmlsdGVyQ2hhbmdlTWVzc2FnZS5kYXRhU291cmNlSWRzLFxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb246IHpvb21Ub09wdGlvbixcclxuICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM6IGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcyB8fCAoW10gYXMgdW5rbm93biBhcyBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPilcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlLnZhbHVlJywgZmlsdGVyQ2hhbmdlQWN0aW9uVmFsdWUpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRGF0YVNvdXJjZXNDaGFuZ2U6XHJcbiAgICAgICAgICBjb25zdCBkYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFTb3VyY2VzQ2hhbmdlTWVzc2FnZVxyXG5cclxuICAgICAgICAgIGlmIChkYXRhU291cmNlc0NoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gRGF0YVNvdXJjZXNDaGFuZ2VUeXBlLkNyZWF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhU291cmNlSWRzID0gW11cclxuICAgICAgICAgICAgZGF0YVNvdXJjZXNDaGFuZ2VNZXNzYWdlLmRhdGFTb3VyY2VzLmZvckVhY2goZGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkcy5wdXNoKGRhdGFTb3VyY2UuaWQpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb24gPSBnZXRab29tVG9PcHRpb25zKGFjdGlvbkNvbmZpZywgdmlld1BhZGRpbmcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWVGb3JMYXllcnM6IFpvb21Ub0xheWVyc0ludGVybmFsVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ3pvb20tdG8tbGF5ZXJzJyxcclxuICAgICAgICAgICAgICBkYXRhU291cmNlSWRzOiBkYXRhU291cmNlSWRzLFxyXG4gICAgICAgICAgICAgIHpvb21Ub09wdGlvbjogem9vbVRvT3B0aW9uXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICd6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWUudmFsdWUnLCB6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWVGb3JMYXllcnMpXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRab29tVG9PcHRpb25zIChhY3Rpb25Db25maWc6IElNQ29uZmlnLCBwYWRkaW5nOiBWaWV3UGFkZGluZyk6IFpvb21Ub09wdGlvbnMge1xyXG4gIGxldCB6b29tVG9PcHRpb25zOiBab29tVG9PcHRpb25zID0ge31cclxuXHJcbiAgaWYgKGFjdGlvbkNvbmZpZyAmJiBhY3Rpb25Db25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb24gJiYgdHlwZW9mIGFjdGlvbkNvbmZpZy56b29tVG9PcHRpb24uc2NhbGUgPT09ICdudW1iZXInKSB7XHJcbiAgICB6b29tVG9PcHRpb25zLnNjYWxlID0gYWN0aW9uQ29uZmlnLnpvb21Ub09wdGlvbi5zY2FsZVxyXG4gIH1cclxuXHJcbiAgaWYgKHBhZGRpbmcpIHtcclxuICAgIHpvb21Ub09wdGlvbnMucGFkZGluZyA9IHBhZGRpbmdcclxuICB9XHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyh6b29tVG9PcHRpb25zKS5sZW5ndGggPT09IDApIHtcclxuICAgIHpvb21Ub09wdGlvbnMgPSBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gem9vbVRvT3B0aW9uc1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==