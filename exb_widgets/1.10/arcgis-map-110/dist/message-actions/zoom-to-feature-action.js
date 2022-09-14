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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts":
/*!*******************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIsLive": () => (/* binding */ checkIsLive),
/* harmony export */   "createNewFeaturelayer": () => (/* binding */ createNewFeaturelayer),
/* harmony export */   "filterFeaturesByQuery": () => (/* binding */ filterFeaturesByQuery),
/* harmony export */   "flashFeaturesByQuery": () => (/* binding */ flashFeaturesByQuery),
/* harmony export */   "getMapBaseRestoreData": () => (/* binding */ getMapBaseRestoreData),
/* harmony export */   "handleFeature": () => (/* binding */ handleFeature),
/* harmony export */   "mapPanto": () => (/* binding */ mapPanto),
/* harmony export */   "processZoomToFeatures": () => (/* binding */ processZoomToFeatures),
/* harmony export */   "projectGeometries": () => (/* binding */ projectGeometries),
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
                    return resolve(null);
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
                        return resolve(null);
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
function mapPanto(mapBaseView, target) {
    return __awaiter(this, void 0, void 0, function* () {
        const panToTarget = target;
        const tempBaseMapView = mapBaseView;
        if (panToTarget instanceof Array) {
            if (panToTarget.length === 0)
                return yield Promise.resolve();
            if (panToTarget[0].geometry) {
                const geometryArr = [];
                for (let i = 0; i < panToTarget.length; i++) {
                    geometryArr.push(panToTarget[i].geometry);
                }
                return yield getGeometriesExtent(geometryArr).then((extent) => {
                    return tempBaseMapView.goTo(extent.center);
                });
            }
            else {
                return getGeometriesExtent(panToTarget).then((extent) => {
                    return tempBaseMapView.goTo(extent.center);
                });
            }
        }
        else {
            if (panToTarget.geometry) {
                const getmetry = panToTarget.geometry;
                return tempBaseMapView.goTo(getCenterPoint(getmetry));
            }
            else {
                return tempBaseMapView.goTo(getCenterPoint(panToTarget));
            }
        }
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
function filterFeaturesByQuery(jimuMapView, layerDataSourceId, querySQL) {
    if (layerDataSourceId) {
        const jimuLayerViews = jimuMapView.jimuLayerViews;
        const jimuLayerViewIds = Object.keys(jimuLayerViews);
        for (let i = 0; i < jimuLayerViewIds.length; i++) {
            let tempJimuLayerView = jimuLayerViews[jimuLayerViewIds[i]];
            if (tempJimuLayerView && tempJimuLayerView.layer && tempJimuLayerView.layerDataSourceId === layerDataSourceId &&
                (tempJimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer || tempJimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer)) {
                tempJimuLayerView.setLocalDefinitionExpression(querySQL);
            }
        }
    }
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
    if (layerDataSourceId) {
        const jimuLayerViews = jimuMapView.jimuLayerViews;
        const jimuLayerViewIds = Object.keys(jimuLayerViews);
        for (let i = 0; i < jimuLayerViewIds.length; i++) {
            let tempJimuLayerView = jimuLayerViews[jimuLayerViewIds[i]];
            if (tempJimuLayerView && tempJimuLayerView.layer && tempJimuLayerView.layerDataSourceId === layerDataSourceId) {
                if (tempJimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.FeatureLayer) {
                    flashOnFeatureLayer(jimuMapView, querySQL, tempJimuLayerView);
                }
                else if (tempJimuLayerView.type === jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.LayerTypes.SceneLayer) {
                    flashOnSceneLayer(jimuMapView, querySQL, tempJimuLayerView);
                }
            }
        }
    }
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
            return yield jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.geometryUtils.projectToSpatialReference(geometries, spatialReference);
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
function getMapBaseRestoreData(mapInstance) {
    return {
        mapContainer: mapInstance.mapContainer,
        state: mapInstance.state,
        MapView: mapInstance.MapView,
        SceneView: mapInstance.SceneView,
        Extent: mapInstance.Extent,
        Viewpoint: mapInstance.Viewpoint,
        mapView: mapInstance.mapView,
        sceneView: mapInstance.sceneView,
        extentWatch: mapInstance.extentWatch,
        fatalErrorWatch: mapInstance.fatalErrorWatch,
        dsManager: mapInstance.dsManager,
        highLightHandles: mapInstance.highLightHandles,
        mapBaseViewEventHandles: mapInstance.mapBaseViewEventHandles,
        Color: mapInstance.Color,
        isRequestingMap: mapInstance.isRequestingMap
    };
}
function restoreMapBase(mapInstance, restoreData) {
    mapInstance.mapContainer = restoreData.mapContainer;
    mapInstance.state = restoreData.state;
    mapInstance.MapView = restoreData.MapView;
    mapInstance.SceneView = restoreData.SceneView;
    mapInstance.Extent = restoreData.Extent;
    mapInstance.Viewpoint = restoreData.Viewpoint;
    mapInstance.mapView = restoreData.mapView;
    mapInstance.sceneView = restoreData.sceneView;
    mapInstance.extentWatch = restoreData.extentWatch;
    mapInstance.fatalErrorWatch = restoreData.fatalErrorWatch;
    mapInstance.dsManager = restoreData.dsManager;
    mapInstance.highLightHandles = restoreData.highLightHandles;
    mapInstance.mapBaseViewEventHandles = restoreData.mapBaseViewEventHandles;
    mapInstance.Color = restoreData.Color;
    mapInstance.isRequestingMap = restoreData.isRequestingMap;
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
/*!********************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/zoom-to-feature-action.ts ***!
  \********************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomToFeatureAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts");
/* harmony import */ var _action_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-utils */ "./extensions/widgets/arcgis/arcgis-map/src/message-actions/action-utils.ts");




class ZoomToFeatureAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.NoLockTriggerLayerWidgets = ['Map'];
    }
    filterMessageDescription(messageDescription) {
        if (messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange) {
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
            switch (message.type) {
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordSetChange:
                    const dataRecordSetChangeMessage = message;
                    if (dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Create ||
                        dataRecordSetChangeMessage.changeType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.RecordSetChangeType.Update) {
                        let newFeatureSet = {};
                        if (dataRecordSetChangeMessage.dataRecordSet && dataRecordSetChangeMessage.dataRecordSet.records) {
                            const features = [];
                            for (let i = 0; i < dataRecordSetChangeMessage.dataRecordSet.records.length; i++) {
                                if (dataRecordSetChangeMessage.dataRecordSet.records[i].feature) {
                                    features.push((0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(dataRecordSetChangeMessage.dataRecordSet.records[i].feature, Graphic));
                                }
                            }
                            newFeatureSet = {
                                features: features,
                                zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
                                type: 'zoom-to-graphics'
                            };
                        }
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', newFeatureSet);
                    }
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                    const config = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig;
                    const messageWidgetJson = config.widgets[message.widgetId];
                    const messageWidgetLabel = messageWidgetJson.manifest.label;
                    const dataRecordsSelectionChangeMessage = message;
                    let selectionFeatureSet = {};
                    const selectFeatures = [];
                    let layerId = null;
                    if (dataRecordsSelectionChangeMessage.records) {
                        if (dataRecordsSelectionChangeMessage.records[0]) {
                            if (dataRecordsSelectionChangeMessage.records[0].dataSource.layer) {
                                layerId = dataRecordsSelectionChangeMessage.records[0].dataSource.layer.id;
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
                    selectionFeatureSet = {
                        features: selectFeatures,
                        layerId: layerId,
                        zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
                        type: 'zoom-to-graphics'
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', selectionFeatureSet);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.ExtentChange:
                    const extentChangeMessage = message;
                    if (extentChangeMessage.getRelatedWidgetIds().includes(this.widgetId)) {
                        break;
                    }
                    const extentValue = {
                        features: [extentChangeMessage.extent],
                        type: 'zoom-to-extent'
                    };
                    const zoomToFeatureActionValue = {
                        value: extentValue,
                        relatedWidgets: extentChangeMessage.getRelatedWidgetIds()
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue', zoomToFeatureActionValue);
                    break;
                case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataSourceFilterChange:
                    const filterChangeMessage = message;
                    const filterChangeDS = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(filterChangeMessage.dataSourceId);
                    //const filterChangeMainDS = filterChangeDS?.getMainDataSource()
                    // support data view.
                    if (!actionConfig.useDataSources.some(useDataSource => (useDataSource === null || useDataSource === void 0 ? void 0 : useDataSource.dataSourceId) === filterChangeDS.id)) {
                        break;
                    }
                    const filterChangeActionValue = {
                        dataSourceId: filterChangeMessage.dataSourceId,
                        zoomToOption: actionConfig && actionConfig.isUseCustomZoomToOption && actionConfig.zoomToOption.scale ? actionConfig.zoomToOption : null,
                        useDataSources: actionConfig.useDataSources || [],
                        type: 'zoom-to-query-params'
                    };
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', filterChangeActionValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrSztBQUMvRztBQUU1QyxTQUFTLHNCQUFzQixDQUFFLEdBQVcsRUFBRSxXQUF3QjtJQUMzRSxNQUFNLGdCQUFnQixHQUFHLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7SUFDeEUsT0FBTyxnQkFBZ0IsS0FBSyx3RUFBaUM7QUFDL0QsQ0FBQztBQUVNLFNBQVMsNkJBQTZCLENBQUUsR0FBVyxFQUFFLFdBQXdCOztJQUNsRixNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxlQUFlO0lBQzdELElBQUksZ0JBQWdCLEdBQUcscUVBQThCO0lBQ3JELGVBQWUsYUFBZixlQUFlLHVCQUFmLGVBQWUsQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxzQkFBc0IsR0FBRyxFQUFTO1FBQ3hDLElBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsZ0JBQWdCLEtBQUksdUJBQXNCLGFBQXRCLHNCQUFzQix1QkFBdEIsc0JBQXNCLENBQUUsV0FBVyxNQUFLLFdBQVcsRUFBRTtZQUNuRyxnQkFBZ0IsR0FBRyxzQkFBc0IsYUFBdEIsc0JBQXNCLHVCQUF0QixzQkFBc0IsQ0FBRSxnQkFBZ0I7U0FDNUQ7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLGdCQUFnQjtBQUN6QixDQUFDO0FBT00sU0FBUyxvQkFBb0IsQ0FBRSxZQUFxRCxFQUFFLGVBQXVCLEVBQUUsV0FBd0I7SUFDNUksTUFBTSxNQUFNLEdBQUcsWUFBWSxFQUFFO0lBQzdCLDJEQUEyRDtJQUUzRCxJQUFJLGFBQWEsR0FBb0IsSUFBSTtJQUN6QyxNQUFNLGNBQWMsR0FBc0IsRUFBRTtJQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtRQUMvQixNQUFNLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO1FBQ2pGLDZHQUE2RztRQUM3RyxJQUFJLDJCQUEyQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNuRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELElBQUksaUJBQWlCO2dCQUNyQixJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxxRUFBNEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyx1RUFBOEIsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xILGlCQUFpQixHQUFHLElBQUk7aUJBQ3pCO3FCQUFNO29CQUNMLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7d0JBQzVCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTt3QkFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjt3QkFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO3FCQUM3QixDQUFDO29CQUNGLElBQUksQ0FBQyxhQUFhLEVBQUU7d0JBQ2xCLGFBQWEsR0FBRyxpQkFBaUI7cUJBQ2xDO29CQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7aUJBQ3ZDO1lBQ0gsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtTQUFNO1FBQ0wsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUMvRixJQUFJLFlBQVksQ0FBQyxjQUFjLEVBQUU7WUFDL0IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFDLE1BQU0saUJBQWlCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUM7Z0JBQ3BGLGlCQUFpQixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDN0QsQ0FBQyxDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU87UUFDTCxhQUFhLEVBQUUsYUFBYTtRQUM1QixjQUFjLEVBQUUsY0FBYztLQUMvQjtBQUNILENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUFFLGVBQXVCLEVBQUUsZ0JBQTBELEVBQUUsV0FBd0I7O0lBQzNJLE1BQU0sTUFBTSxHQUFHLFlBQVksRUFBRTtJQUM3QixvREFBb0Q7SUFDcEQsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQztJQUNqRixJQUFJLGlCQUFpQixHQUFHLElBQUk7SUFDNUIsSUFBSSxPQUFPLEdBQUcsS0FBSztJQUVuQixNQUFNLElBQUksR0FBRywyQkFBMkIsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO0lBQ3pILElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUk7S0FDWjtJQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHFFQUE0QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLHVFQUE4QixDQUFDLENBQUMsRUFBRTtRQUNsSCxPQUFPLEdBQUcsSUFBSTtLQUNmO0lBRUQsTUFBTSxHQUFHLEdBQUcsb0VBQTZCLEVBQUU7SUFDM0MsTUFBTSw0QkFBNEIsR0FBRyxlQUFHLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQywwQ0FBRSxpQkFBaUIsRUFBRSwwQ0FBRSxrQkFBa0I7SUFFOUgsSUFBSSxPQUFPLEVBQUU7UUFDWCx3QkFBd0I7UUFDeEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELElBQUksMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFO29CQUNyRixVQUFVLEdBQUcsSUFBSTtvQkFDakIsTUFBSztpQkFDTjthQUNGO1NBQ0Y7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLGlCQUFpQixHQUFHLGdCQUFnQjtTQUNyQzthQUFNO1lBQ0wsaUJBQWlCLEdBQUcsSUFBSTtTQUN6QjtLQUNGO1NBQU07UUFDTCxrQkFBa0I7UUFDbEIsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLDJCQUEyQixFQUFFO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRywyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNELE1BQU0sa0JBQWtCLEdBQUcsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsYUFBaEIsZ0JBQWdCLHVCQUFoQixnQkFBZ0IsQ0FBRSxZQUFZO2dCQUM3SCxNQUFNLHNCQUFzQixHQUFHLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxpQ0FBMkIsQ0FBQyxDQUFDLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGlDQUEyQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxZQUFZO2dCQUM3SixvQkFBb0I7Z0JBQ3BCLElBQUksc0JBQXNCLEtBQUssa0JBQWtCLEVBQUU7b0JBQ2pELFVBQVUsR0FBRyxJQUFJO29CQUNqQixNQUFLO2lCQUNOO2FBQ0Y7U0FDRjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsaUJBQWlCLEdBQUcsZ0JBQWdCO1NBQ3JDO2FBQU07WUFDTCxJQUFJLDJCQUEyQixJQUFJLDJCQUEyQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzNFLGlCQUFpQixHQUFHLG9EQUFTLENBQUM7b0JBQzVCLFlBQVksRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUN6RCxnQkFBZ0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7b0JBQ2pFLGdCQUFnQixFQUFFLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtpQkFDbEUsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLGlCQUFpQixHQUFHLElBQUk7YUFDekI7U0FDRjtLQUNGO0lBRUQsT0FBTyxpQkFBaUI7QUFDMUIsQ0FBQztBQUVNLFNBQVMsb0JBQW9CLENBQUUsUUFBZ0IsRUFBRSxhQUF1RCxFQUFFLGNBQXVELEVBQUUsV0FBd0I7O0lBQ2hNLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRTtJQUNoQyxNQUFNLFVBQVUsR0FBRyxlQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRyxRQUFRLENBQUM7SUFDakQsSUFBSSxVQUFVLEdBQUcsS0FBSztJQUN0QixNQUFNLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7SUFDbEQsbUlBQW1JO0lBQ25JLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsMEdBQTBHO0lBQzFHLHFCQUFxQjtJQUNyQixHQUFHO0lBRUgsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsTUFBTSxNQUFLLENBQUMsRUFBRTtRQUN6QyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7S0FDbEU7SUFFRCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLGdCQUFnQixHQUFHO1FBQ3ZCLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLGNBQWMsRUFBRSxjQUFjLElBQUksRUFBRTtRQUNwQyxhQUFhLEVBQUUsU0FBUztRQUN4QixTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUVELE9BQU8sZ0JBQWdCO0FBQ3pCLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBRSxHQUFXLEVBQUUsV0FBd0I7O0lBQ3BFLE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUN4RSxNQUFNLFNBQVMsR0FBRyxZQUFZLEVBQUU7SUFDaEMsTUFBTSxVQUFVLEdBQUcsZUFBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLE9BQU8sMENBQUcsR0FBRyxDQUFDO0lBQzVDLE1BQU0sY0FBYyxHQUFHLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxjQUFjLEtBQUksb0RBQVMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsTUFBTSxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLENBQUMsSUFBSSxvREFBUyxDQUFDLEVBQUUsQ0FBQztJQUMvRixNQUFNLGNBQWMsR0FBRyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sQ0FBQyxpQkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNySCxRQUFRLGdCQUFnQixFQUFFO1FBQ3hCLEtBQUssd0VBQWlDO1lBQ3BDLE9BQU8saUJBQWlCO1FBQzFCLEtBQUsscUVBQThCO1lBQ2pDLE9BQU8sY0FBYztRQUN2QixLQUFLLHNFQUErQjtZQUNsQyxPQUFPLG9EQUFTLENBQUMsY0FBYyxDQUFDO0tBQ25DO0FBQ0gsQ0FBQztBQUVNLFNBQVMscUJBQXFCLENBQUUsaUJBQWlCOztJQUN0RCxNQUFNLEVBQUUsR0FBRyx1QkFBaUIsYUFBakIsaUJBQWlCLHVCQUFqQixpQkFBaUIsQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkMsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsZ0JBQWdCLEVBQUUsSUFBSTtTQUN2QjtJQUNILENBQUMsQ0FBQyxtQ0FBSSxFQUFFO0lBQ1IsT0FBTyxvREFBUyxDQUFDLEVBQUUsQ0FBQztBQUN0QixDQUFDO0FBRU0sU0FBUyxnQkFBZ0IsQ0FBRSxVQUF3QixFQUFFLFdBQXdCLEVBQUUsU0FBaUM7SUFDckgsTUFBTSxnQkFBZ0IsR0FBRyw2QkFBNkIsQ0FBQyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQztJQUNuRixNQUFNLFFBQVEsR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsaUJBQWlCLEtBQUksRUFBRTtJQUNwRCxNQUFNLEtBQUssR0FBRyxXQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYyxLQUFJLEVBQUU7SUFDOUMsSUFBSSxTQUFTLEVBQUU7UUFDYixPQUFPLEtBQUs7S0FDYjtJQUNELFFBQVEsZ0JBQWdCLEVBQUU7UUFDeEIsS0FBSyx3RUFBaUM7WUFDcEMsT0FBTyxTQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDL0IsS0FBSyxxRUFBOEI7WUFDakMsT0FBTyxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsTUFBTSxNQUFLLENBQUM7UUFDNUIsS0FBSyxzRUFBK0I7WUFDbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtZQUMvQyxPQUFPLFFBQVEsS0FBSyxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQztBQUVELFNBQVMsWUFBWTs7SUFDbkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0VBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSwwQ0FBRSxpQkFBaUIsMENBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyw0REFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLDBDQUFFLFNBQVM7QUFDbkksQ0FBQztBQUVELFNBQVMsc0JBQXNCLENBQUUsR0FBVzs7SUFDMUMsTUFBTSxTQUFTLEdBQUcsWUFBWSxFQUFFO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLGVBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO0lBQzNDLGdCQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsY0FBYywwQ0FBRSxPQUFPLENBQUMsQ0FBQyxLQUErQyxFQUFFLEVBQUU7UUFDdEYsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1FBQ2hELElBQUksR0FBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLElBQUksTUFBSyxxRUFBNEIsSUFBSSxHQUFFLGFBQUYsRUFBRSx1QkFBRixFQUFFLENBQUUsSUFBSSxNQUFLLHVFQUE4QixFQUFFLEVBQUUsYUFBYTtZQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDakM7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFFLEdBQVcsRUFBRSxXQUF3Qjs7SUFDaEUsTUFBTSwyQkFBMkIsR0FBRyxlQUFlLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQztJQUNyRSxPQUFPLG9EQUFTLENBQUMsaUNBQTJCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBK0MsRUFBRSxFQUFFO1FBQ25HLE1BQU0sR0FBRyxHQUFHLG9FQUE2QixFQUFFO1FBQzNDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztRQUNoRCxJQUFJLFFBQVE7UUFDWixJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLG9CQUFvQjtZQUNwQixRQUFRLEdBQUcsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLGlCQUFpQixFQUFFO1NBQ25DO2FBQU07WUFDTCxRQUFRLEdBQUcsRUFBRTtTQUNkO1FBQ0QsT0FBTyxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsRUFBRTtJQUNyQixDQUFDLENBQUMsbUNBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pQRCxpQ0FBaUM7QUFDbUI7QUFHa0Y7QUFFL0gsU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLGtCQUEyRDs7UUFDdEosTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO1FBQzNCLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFDeEUsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDcEQsT0FBTTthQUNQO1lBQ0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RixDQUFDLENBQUM7UUFFRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJO1NBQ1o7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQUUsV0FBOEMsRUFBRSxzQkFBK0Q7O1FBQ3ZKLE1BQU0sY0FBYyxHQUFHLEVBQUU7UUFDekIsc0JBQXNCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM5RSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQztZQUN4RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQy9GO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUk7U0FDWjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztTQUNuQztJQUNILENBQUM7Q0FBQTtBQUVELFNBQWUsa0JBQWtCLENBQUUsV0FBOEMsRUFBRSxVQUE2QixFQUFFLE9BQWU7O1FBQy9ILE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxPQUFPLG1FQUFzQixDQUFDO2dCQUM1QiwwQkFBMEI7YUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsNkNBQTZDO29CQUM3QyxJQUFJLFlBQXdDLENBQUM7b0JBQzdDLDJCQUEyQjtvQkFDM0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUM7b0JBRXpCLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFZO29CQUMvRCxNQUFNLG9CQUFvQixHQUFHLEVBQUU7b0JBQy9CLE1BQU0sUUFBUSxHQUFHLEVBQUU7b0JBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMxRCxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUk7d0JBQzlELG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7cUJBQ3RDO29CQUVELE1BQU0scUJBQXFCLEdBQUcsRUFBRTtvQkFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRTt3QkFDbkQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2pCLE1BQU0sVUFBVSxHQUFHO2dDQUNqQixTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQ0FDeEIsS0FBSyxFQUFFLEdBQUc7NkJBQ1g7NEJBQ0QscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzt5QkFDdkM7cUJBQ0Y7b0JBRUQsTUFBTSxjQUFjLEdBQUcsRUFBRTtvQkFDekIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7d0JBQzdDLE1BQU0sV0FBVyxHQUFHLE9BQU87d0JBQzNCLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTs0QkFDMUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO2dDQUN4QyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDOzZCQUNwRTs0QkFFRCxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLO3lCQUN0Qzs2QkFBTTs0QkFDTCxXQUFXLENBQUMsVUFBVSxHQUFHO2dDQUN2QixNQUFNLEVBQUUsS0FBSzs2QkFDZDt5QkFDRjt3QkFDRCxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDO29CQUVGLE1BQU0sS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDO3dCQUM3QixFQUFFLEVBQUUsT0FBTzt3QkFDWCxLQUFLLEVBQUUsbUJBQW1CLENBQUMsS0FBSzt3QkFDaEMsTUFBTSxFQUFFLGNBQWM7d0JBQ3RCLE1BQU0sRUFBRSxvQkFBb0I7d0JBQzVCLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQzt3QkFDaEIsYUFBYSxFQUFFLFFBQVE7d0JBQ3ZCLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRO3dCQUN0QyxZQUFZLEVBQUUsSUFBSTt3QkFDbEIsYUFBYSxFQUFFOzRCQUNiLEtBQUssRUFBRSxhQUFhOzRCQUNwQixPQUFPLEVBQUUsQ0FBQztvQ0FDUixJQUFJLEVBQUUsUUFBUTtvQ0FDZCxVQUFVLEVBQUUscUJBQXFCO2lDQUNsQyxDQUFDO3lCQUNIO3FCQUNGLENBQUM7b0JBRUYsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUUxQixLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxFQUFFO3dCQUNuQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3RCLENBQUMsQ0FBQztpQkFDSDtZQUNILENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQUVELFNBQVMsa0JBQWtCLENBQUUsS0FBbUI7SUFDOUMsd0RBQXdEO0lBQ3hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJO0lBQzVCLE9BQU87UUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztRQUMzRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0tBQ1Y7QUFDVixDQUFDO0FBRU0sU0FBUyxhQUFhLENBQUUsV0FBOEMsRUFBRSxNQUFpRSxFQUFFLE9BQWdCO0lBQ2hLLHFFQUFxRTtJQUNyRSxJQUFJLGNBQWMsR0FBRyxPQUFPO0lBQzVCLElBQUksZ0JBQWdCLEdBQUcsSUFBSTtJQUMzQixJQUFJLFdBQVcsR0FBRyxJQUFJO0lBRXRCLHNEQUFzRDtJQUN0RCxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ25CLElBQUksTUFBTSxZQUFZLEtBQUssRUFBRTtZQUMzQixXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBbUI7U0FDMUM7YUFBTTtZQUNMLFdBQVcsR0FBRyxNQUF3QjtTQUN2QztRQUVELElBQUksV0FBVyxFQUFFO1lBQ2YsY0FBYyxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQzNEO0tBQ0Y7SUFFRCxJQUFJLGNBQWMsRUFBRTtRQUNsQixNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYTtRQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxjQUFjLEVBQUU7Z0JBQ3ZELGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7UUFFRCxJQUFJLGdCQUFnQixFQUFFO1lBQ3BCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQzNDO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBSTtTQUNaO0tBQ0Y7QUFDSCxDQUFDO0FBRU0sU0FBZSxRQUFRLENBQUUsV0FBOEMsRUFBRSxNQUMvQjs7UUFDL0MsTUFBTSxXQUFXLEdBQUcsTUFBYTtRQUNqQyxNQUFNLGVBQWUsR0FBRyxXQUFrQjtRQUMxQyxJQUFJLFdBQVcsWUFBWSxLQUFLLEVBQUU7WUFDaEMsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQUUsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFFNUQsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUMzQixNQUFNLFdBQVcsR0FBc0IsRUFBRTtnQkFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztpQkFDMUM7Z0JBRUQsT0FBTyxNQUFNLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUM1RCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDdEQsT0FBTyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzVDLENBQUMsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQTJCO2dCQUN4RCxPQUFPLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekQ7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQWUsbUJBQW1CLENBQUUsVUFBNkI7O1FBQy9ELE9BQU8sTUFBTSxtRUFBc0IsQ0FBQztZQUNsQyxzQkFBc0I7U0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFNLE9BQU8sRUFBQyxFQUFFO1lBQ3RCLDJCQUEyQjtZQUMzQixJQUFJLE1BQTRCLENBQUM7WUFDakMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPO1lBRWxCLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNyQyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDbkM7WUFFRCxJQUFJLFVBQVUsR0FBa0IsSUFBSTtZQUNwQyxJQUFJLEtBQUs7WUFDVCxNQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsTUFBTTtZQUV2QyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDOUMsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixTQUFRO2lCQUNUO2dCQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNO2dCQUU1QixJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO29CQUN4QyxNQUFNLGFBQWEsR0FBRyxRQUFlO29CQUVyQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRTt3QkFDdEMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDOzRCQUNsQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixnQkFBZ0IsRUFBRSxhQUFhLENBQUMsZ0JBQWdCO3lCQUNqRCxDQUFDO3FCQUNIO2lCQUNGO2dCQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ1gsU0FBUTtpQkFDVDtnQkFFRCxJQUFJLFVBQVUsRUFBRTtvQkFDZCxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNMLFVBQVUsR0FBRyxNQUFNO2lCQUNwQjthQUNGO1lBRUQsSUFBSSxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakQsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ25DO1lBRUQsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQzFDLENBQUMsRUFBQztJQUNKLENBQUM7Q0FBQTtBQUVNLFNBQVMscUJBQXFCLENBQUUsV0FBd0IsRUFBRSxpQkFBeUIsRUFBRSxRQUFnQjtJQUMxRyxJQUFJLGlCQUFpQixFQUFFO1FBQ3JCLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjO1FBQ2pELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxpQkFBaUIsS0FBSyxpQkFBaUI7Z0JBQzNHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLGdFQUF1QixJQUFJLGlCQUFpQixDQUFDLElBQUksS0FBSyw4REFBcUIsQ0FBQyxFQUFFO2dCQUN6RyxpQkFBK0QsQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLENBQUM7YUFDeEc7U0FDRjtLQUNGO0FBQ0gsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFFLFdBQVcsRUFBRSxRQUFRO0lBQzNDLE9BQU8sbUVBQXNCLENBQUM7UUFDNUIseUJBQXlCO0tBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxLQUEwQixDQUFDO1FBQy9CLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN6QixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVE7UUFDdEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7UUFDM0IsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4RCxPQUFPLFVBQVU7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLGlCQUF1QztJQUMvRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDeEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZFLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO29CQUNsRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDMUQ7WUFDSCxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtTQUFNO1FBQ0wsbUVBQXNCLENBQUM7WUFDckIsMEJBQTBCO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxZQUF3QyxDQUFDO1lBQzdDLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTztZQUV4QixJQUFJLGdCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDO2dCQUN0QyxHQUFHLEVBQUUsb0VBQTZCLENBQUUsaUJBQStELENBQUMsS0FBSyxDQUFDO2FBQzNHLENBQUM7WUFDRixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbkUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7cUJBQzFEO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELElBQUkscUJBQXFCLEdBQUcsSUFBSTtBQUNoQyxTQUFTLGlCQUFpQixDQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBcUM7O0lBQzNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM1QixJQUFJLGNBQWMsR0FBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDcEUsbUJBQW1CO1FBQ25CLGFBQWEsQ0FBQyxvQkFBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLEtBQUssMENBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNoRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkUsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxhQUFhO2dCQUN4RCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXZGLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxhQUFhLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sd0JBQXdCLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBRWxFLE1BQU0sS0FBSyxHQUFHO29CQUNaLElBQUksQ0FBQyxHQUFHLGFBQWEsRUFBRTt3QkFDckIsQ0FBQyxFQUFFO3dCQUNILElBQUksY0FBYyxFQUFFOzRCQUNsQixjQUFjLEdBQUcsSUFBSTs0QkFDckIsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzNELHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRTs0QkFDdkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7eUJBQzVEOzZCQUFNOzRCQUNMLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs0QkFDbkMsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTs0QkFDN0QscUJBQXFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFOzRCQUN2RCxxQkFBcUIsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt5QkFDNUQ7d0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7cUJBQ3ZCO3lCQUFNO3dCQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCO3dCQUM1RCxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7cUJBQ3hEO2dCQUNILENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7QUFFTSxTQUFTLG9CQUFvQixDQUFFLFdBQXdCLEVBQUUsaUJBQXlCLEVBQUUsUUFBZ0I7SUFDekcsSUFBSSxpQkFBaUIsRUFBRTtRQUNyQixNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYztRQUNqRCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxpQkFBaUIsR0FBRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLEtBQUssaUJBQWlCLEVBQUU7Z0JBQzdHLElBQUksaUJBQWlCLENBQUMsSUFBSSxLQUFLLGdFQUF1QixFQUFFO29CQUN0RCxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGlCQUF5QyxDQUFDO2lCQUN0RjtxQkFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksS0FBSyw4REFBcUIsRUFBRTtvQkFDM0QsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBdUMsQ0FBQztpQkFDbEY7YUFDRjtTQUNGO0tBQ0Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUUsV0FBOEMsRUFBRSxRQUEwQixFQUFFLE1BQU07SUFDckcsbUVBQXNCLENBQUM7UUFDckIsY0FBYztLQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEIsMkJBQTJCO1FBQzNCLElBQUksT0FBOEIsQ0FBQztRQUNuQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU87UUFFbkIsTUFBTSxhQUFhLEdBQUcsVUFBVSxRQUEwQixFQUFFLGFBQXFCO1lBQy9FLE1BQU0sUUFBUSxHQUFHLEVBQUU7WUFDbkIsSUFBSSxVQUFVLEdBQUcsQ0FBQztZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUM7b0JBQzlCLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDOUIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO2lCQUNuQyxDQUFDO2dCQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNCO1lBRUQsTUFBTSxXQUFXLEdBQUc7Z0JBQ2xCLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDdEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLFVBQVUsR0FBRyxVQUFVLEdBQUcsQ0FBQztvQkFDM0IsSUFBSSxVQUFVLEdBQUcsYUFBYSxFQUFFO3dCQUM5QixVQUFVLENBQUMsR0FBRyxFQUFFOzRCQUNkLFdBQVcsRUFBRTt3QkFDZixDQUFDLEVBQUUsR0FBRyxDQUFDO3FCQUNSO2dCQUNILENBQUMsRUFBRSxHQUFHLENBQUM7WUFDVCxDQUFDO1lBRUQsV0FBVyxFQUFFO1FBQ2YsQ0FBQztRQUVELGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBRSxZQUFvQjtJQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNsRCxPQUFPO1lBQ0wsSUFBSSxFQUFFLGVBQWU7WUFDckIsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0Y7S0FDRjtTQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDOUMsT0FBTztZQUNMLElBQUksRUFBRSxhQUFhO1lBQ25CLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUN6QixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxPQUFPO1NBQ2Y7S0FDRjtTQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQ3ZELE9BQU87WUFDTCxJQUFJLEVBQUUsYUFBYTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN6QixLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0Y7S0FDRjtTQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDMUMsT0FBTztZQUNMLElBQUksRUFBRSxTQUFTO1lBQ2YsWUFBWSxFQUFFLENBQUM7b0JBQ2IsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7aUJBQ3hDLENBQUM7U0FDSDtLQUNGO1NBQU07UUFDTCxPQUFPLElBQUk7S0FDWjtBQUNILENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBRSxRQUF5QjtJQUNoRCwwREFBMEQ7SUFDMUQsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3JCLEtBQUssT0FBTztZQUNWLE9BQU8sUUFBd0I7UUFDakMsS0FBSyxRQUFRO1lBQ1gsT0FBUSxRQUEwQixDQUFDLE1BQU07UUFDM0MsS0FBSyxTQUFTO1lBQ1osT0FBUSxRQUEyQixDQUFDLFFBQVE7UUFDOUMsS0FBSyxVQUFVO1lBQ2IsT0FBUSxRQUE0QixDQUFDLE1BQU0sQ0FBQyxNQUFNO1FBQ3BEO1lBQ0UsT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDekUsT0FBTztLQUNSO0FBQ0gsQ0FBQztBQUVNLFNBQVMsYUFBYSxDQUFFLE9BQWtDLEVBQUUsT0FBa0M7SUFDbkcsSUFBSSxXQUFXLEdBQUcsSUFBSTtJQUN0QixJQUFLLE9BQWUsQ0FBQyxLQUFLLEVBQUU7UUFDMUIsV0FBVyxHQUFJLE9BQWUsQ0FBQyxLQUFLLEVBQUU7S0FDdkM7U0FBTTtRQUNMLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELFdBQVcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUMvRDtJQUNELE9BQU8sV0FBVztBQUNwQixDQUFDO0FBRU0sU0FBZSxpQkFBaUIsQ0FBRSxVQUE2QixFQUFFLGdCQUF5Qzs7UUFDL0csSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUQsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRTtZQUM1SCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDekM7YUFBTSxJQUFJLGdCQUFnQixDQUFDLGFBQWEsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQ25GLGlGQUFpRjtZQUNqRixPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDekM7YUFBTSxJQUFJLGdCQUFnQixDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO1lBQ25GLGlGQUFpRjtZQUNqRixPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU8sTUFBTSxnRkFBdUMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7U0FDbkY7SUFDSCxDQUFDO0NBQUE7QUFFTSxTQUFlLHFCQUFxQixDQUFFLFdBQThDLEVBQUUsS0FBVSxFQUFFLFFBQTBCOztRQUNqSSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxRQUFRLEVBQUU7WUFDeEYsT0FBTyxNQUFNLG1FQUFzQixDQUFDO2dCQUNsQyx5QkFBeUI7YUFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTztnQkFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ3pCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSTtnQkFDM0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xGLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTyxNQUFNLEVBQUUsRUFBRTtvQkFDdEQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO3dCQUMzRSxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3FCQUM5Qzt5QkFBTTt3QkFDTCxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7cUJBQ3ZDO2dCQUNILENBQUMsR0FBRSxHQUFTLEVBQUU7b0JBQ1osT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO2dCQUN4QyxDQUFDLEVBQUM7WUFDSixDQUFDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBUyxXQUFXLENBQUUsT0FBZ0I7SUFDM0MsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtRQUNqQyxJQUFJLE9BQU8sS0FBSyxxREFBYyxFQUFFO1lBQzlCLE9BQU8sS0FBSztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUk7U0FDWjtLQUNGO1NBQU07UUFDTCxPQUFPLElBQUk7S0FDWjtBQUNILENBQUM7QUFFTSxTQUFTLHFCQUFxQixDQUFFLFdBQW9CO0lBQ3pELE9BQU87UUFDTCxZQUFZLEVBQUUsV0FBVyxDQUFDLFlBQVk7UUFDdEMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxLQUFLO1FBQ3hCLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTztRQUM1QixTQUFTLEVBQUUsV0FBVyxDQUFDLFNBQVM7UUFDaEMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNO1FBQzFCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztRQUNoQyxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU87UUFDNUIsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTO1FBQ2hDLFdBQVcsRUFBRSxXQUFXLENBQUMsV0FBVztRQUNwQyxlQUFlLEVBQUUsV0FBVyxDQUFDLGVBQWU7UUFDNUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxTQUFTO1FBQ2hDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxnQkFBZ0I7UUFDOUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLHVCQUF1QjtRQUM1RCxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7UUFDeEIsZUFBZSxFQUFFLFdBQVcsQ0FBQyxlQUFlO0tBQzdDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsY0FBYyxDQUFFLFdBQW9CLEVBQUUsV0FBZ0I7SUFDcEUsV0FBVyxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWTtJQUNuRCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLO0lBQ3JDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU87SUFDekMsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUztJQUM3QyxXQUFXLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNO0lBQ3ZDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVM7SUFDN0MsV0FBVyxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTztJQUN6QyxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTO0lBQzdDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVc7SUFDakQsV0FBVyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsZUFBZTtJQUN6RCxXQUFXLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTO0lBQzdDLFdBQVcsQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCO0lBQzNELFdBQVcsQ0FBQyx1QkFBdUIsR0FBRyxXQUFXLENBQUMsdUJBQXVCO0lBQ3pFLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUs7SUFDckMsV0FBVyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsZUFBZTtBQUMzRCxDQUFDOzs7Ozs7Ozs7OztBQ3JrQkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUNrQztBQUNKO0FBRUE7QUFFakMsTUFBTSxtQkFBb0IsU0FBUSw0REFBcUI7SUFBdEU7O1FBQ0UsOEJBQXlCLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUEwSnJDLENBQUM7SUF4SkMsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELElBQUksa0JBQWtCLENBQUMsV0FBVyxLQUFLLCtEQUF3QixFQUFFO1lBQy9ELE9BQU8sSUFBSTtTQUNaO2FBQU0sSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssc0VBQStCO1lBQ3pFLGtCQUFrQixDQUFDLFdBQVcsS0FBSyw2RUFBc0M7WUFDekUsa0JBQWtCLENBQUMsV0FBVyxLQUFLLHlFQUFrQyxFQUFFO1lBQ3pFLE9BQU8sS0FBSztTQUNiO2FBQU07WUFDTCxNQUFNLGlCQUFpQixHQUFHLG9FQUE2QixFQUFFO1lBQ3pELE1BQU0sMkJBQTJCLEdBQUcsOERBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ2hILE9BQU8sMkJBQTJCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFOztnQkFDdEQsTUFBTSxFQUFFLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3RFLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ3BELE9BQU8sSUFBSTtpQkFDWjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsQ0FBQyxTQUFFLENBQUMsaUJBQWlCLEVBQUUsMENBQUUsWUFBWTtpQkFDOUM7WUFDSCxDQUFDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHNCQUFzQixDQUFFLFdBQXdCLEVBQUUsZUFBd0I7UUFDeEUsSUFBSSxXQUFXLEtBQUssNkVBQXNDO1lBQ3BELFdBQVcsS0FBSyxzRUFBK0I7WUFDL0MsV0FBVyxLQUFLLHlFQUFrQyxFQUFFO1lBQ3hELE9BQU8sZ0RBQWdEO1NBQ3hEO2FBQU07WUFDTCxPQUFPLElBQUk7U0FDWjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUUsT0FBZ0IsRUFBRSxZQUF1QjtRQUNsRCxPQUFPLG1FQUFzQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7O1lBQzdELElBQUksT0FBTyxHQUE4QixJQUFJLENBQUM7WUFDOUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO1lBRW5CLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSyxzRUFBK0I7b0JBQ2xDLE1BQU0sMEJBQTBCLEdBQUcsT0FBcUM7b0JBQ3hFLElBQUksMEJBQTBCLENBQUMsVUFBVSxLQUFLLGlFQUEwQjt3QkFDdEUsMEJBQTBCLENBQUMsVUFBVSxLQUFLLGlFQUEwQixFQUFFO3dCQUN0RSxJQUFJLGFBQWEsR0FBRyxFQUFFO3dCQUN0QixJQUFJLDBCQUEwQixDQUFDLGFBQWEsSUFBSSwwQkFBMEIsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFOzRCQUNoRyxNQUFNLFFBQVEsR0FBRyxFQUFFOzRCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsMEJBQTBCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2hGLElBQUssMEJBQTBCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQXVCLENBQUMsT0FBTyxFQUFFO29DQUN0RixRQUFRLENBQUMsSUFBSSxDQUFDLDZEQUFhLENBQUUsMEJBQTBCLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzNELENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lDQUN4Qzs2QkFDRjs0QkFFRCxhQUFhLEdBQUc7Z0NBQ2QsUUFBUSxFQUFFLFFBQVE7Z0NBQ2xCLFlBQVksRUFBRSxZQUFZLElBQUksWUFBWSxDQUFDLHVCQUF1QixJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJO2dDQUN4SSxJQUFJLEVBQUUsa0JBQWtCOzZCQUN6Qjt5QkFDRjt3QkFFRCxzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsYUFBYSxDQUFDO3FCQUNuSDtvQkFDRCxNQUFLO2dCQUNQLEtBQUssNkVBQXNDO29CQUN6QyxNQUFNLE1BQU0sR0FBRyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUztvQkFDakQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQzFELE1BQU0sa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQzNELE1BQU0saUNBQWlDLEdBQUcsT0FBNEM7b0JBRXRGLElBQUksbUJBQW1CLEdBQUcsRUFBRTtvQkFDNUIsTUFBTSxjQUFjLEdBQUcsRUFBRTtvQkFFekIsSUFBSSxPQUFPLEdBQUcsSUFBSTtvQkFDbEIsSUFBSSxpQ0FBaUMsQ0FBQyxPQUFPLEVBQUU7d0JBQzdDLElBQUksaUNBQWlDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUNoRCxJQUFLLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFrQixDQUFDLEtBQUssRUFBRTtnQ0FDMUUsT0FBTyxHQUFJLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFrQixDQUFDLEtBQUssQ0FBQyxFQUFFOzZCQUNwRjs0QkFFRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtnQ0FDL0QsTUFBTSx5QkFBeUIsR0FBRyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFO2dDQUM3RyxJQUFJLENBQUMsbUJBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxjQUFjLDBDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGNBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxnQkFBZ0IsTUFBSyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsR0FBRTtvQ0FDMUgsTUFBSztpQ0FDTjs2QkFDRjtpQ0FBTTtnQ0FDTCxNQUFNLGlCQUFpQixHQUFHLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO2dDQUNqRixNQUFNLHFCQUFxQixHQUFHLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLGlCQUFpQixFQUFFO2dDQUNwRSxtRUFBbUU7Z0NBQ25FLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGNBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxnQkFBZ0IsTUFBSyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQ0FDcEgsTUFBSztpQ0FDTjs2QkFDRjt5QkFDRjt3QkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUNBQWlDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDekUsSUFBSyxpQ0FBaUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUF1QixDQUFDLE9BQU8sRUFBRTtnQ0FDL0UsY0FBYyxDQUFDLElBQUksQ0FBQyw2REFBYSxDQUFFLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQzFELENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzZCQUN4Qzt5QkFDRjtxQkFDRjtvQkFFRCxtQkFBbUIsR0FBRzt3QkFDcEIsUUFBUSxFQUFFLGNBQWM7d0JBQ3hCLE9BQU8sRUFBRSxPQUFPO3dCQUNoQixZQUFZLEVBQUUsWUFBWSxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTt3QkFDeEksSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7b0JBRUQsc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLG1CQUFtQixDQUFDO29CQUN4SCxNQUFLO2dCQUNQLEtBQUssK0RBQXdCO29CQUMzQixNQUFNLG1CQUFtQixHQUFHLE9BQThCO29CQUMxRCxJQUFJLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDckUsTUFBSztxQkFDTjtvQkFFRCxNQUFNLFdBQVcsR0FBRzt3QkFDbEIsUUFBUSxFQUFFLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDO3dCQUN0QyxJQUFJLEVBQUUsZ0JBQWdCO3FCQUN2QjtvQkFFRCxNQUFNLHdCQUF3QixHQUFHO3dCQUMvQixLQUFLLEVBQUUsV0FBVzt3QkFDbEIsY0FBYyxFQUFFLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFO3FCQUMxRDtvQkFDRCxzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7b0JBQ3ZILE1BQUs7Z0JBQ1AsS0FBSyx5RUFBa0M7b0JBQ3JDLE1BQU0sbUJBQW1CLEdBQUcsT0FBd0M7b0JBQ3BFLE1BQU0sY0FBYyxHQUFHLG9FQUE2QixFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQztvQkFDdEcsZ0VBQWdFO29CQUNoRSxxQkFBcUI7b0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGNBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxZQUFZLE1BQUssY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUN6RyxNQUFLO3FCQUNOO29CQUNELE1BQU0sdUJBQXVCLEdBQUc7d0JBQzlCLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxZQUFZO3dCQUM5QyxZQUFZLEVBQUUsWUFBWSxJQUFJLFlBQVksQ0FBQyx1QkFBdUIsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSTt3QkFDeEksY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjLElBQUksRUFBRTt3QkFDakQsSUFBSSxFQUFFLHNCQUFzQjtxQkFDN0I7b0JBRUQsc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxFQUFFLHVCQUF1QixDQUFDO29CQUM1SCxNQUFLO2FBQ1I7WUFFRCxPQUFPLElBQUk7UUFDYixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvYWN0aW9uLXV0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL21lc3NhZ2UtYWN0aW9ucy96b29tLXRvLWZlYXR1cmUtYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFwcFN0b3JlLCBNZXNzYWdlVHlwZSwgTWVzc2FnZUNhcnJ5RGF0YSwgVXNlRGF0YVNvdXJjZSwgSU1Vc2VEYXRhU291cmNlLCBJbW11dGFibGUsIERhdGFTb3VyY2VNYW5hZ2VyLCBJbW11dGFibGVBcnJheSwgSU1XaWRnZXRKc29uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBBcmNHSVNEYXRhU291cmNlVHlwZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZU91dHB1dERhdGFTb3VyY2VzICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWVzc2FnZUNhcnJ5RGF0YSA9IGdldE1lc3NhZ2VDYXJyeURhdGFCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGEgPT09IE1lc3NhZ2VDYXJyeURhdGEuT3V0cHV0RGF0YVNvdXJjZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQgKHdJZDogc3RyaW5nLCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpOiBNZXNzYWdlQ2FycnlEYXRhIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgcHVibGlzaE1lc3NhZ2VzID0gd2lkZ2V0SnNvbj8ubWFuaWZlc3Q/LnB1Ymxpc2hNZXNzYWdlc1xyXG4gIGxldCBtZXNzYWdlQ2FycnlEYXRhID0gTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlXHJcbiAgcHVibGlzaE1lc3NhZ2VzPy5mb3JFYWNoKGVsID0+IHtcclxuICAgIGNvbnN0IHB1Ymxpc2hNZXNzYWdlUHJvcGVydHkgPSBlbCBhcyBhbnlcclxuICAgIGlmIChwdWJsaXNoTWVzc2FnZVByb3BlcnR5Py5tZXNzYWdlQ2FycnlEYXRhICYmIHB1Ymxpc2hNZXNzYWdlUHJvcGVydHk/Lm1lc3NhZ2VUeXBlID09PSBtZXNzYWdlVHlwZSkge1xyXG4gICAgICBtZXNzYWdlQ2FycnlEYXRhID0gcHVibGlzaE1lc3NhZ2VQcm9wZXJ0eT8ubWVzc2FnZUNhcnJ5RGF0YVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIG1lc3NhZ2VDYXJyeURhdGFcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25Db25maWcge1xyXG4gIHVzZURhdGFTb3VyY2U6IFVzZURhdGFTb3VyY2VcclxuICB1c2VEYXRhU291cmNlcz86IFVzZURhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdXRBY3Rpb25Db25maWcgKGFjdGlvbkNvbmZpZzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxBY3Rpb25Db25maWc+LCBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgY29uZmlnID0gZ2V0QXBwQ29uZmlnKClcclxuICAvL2NvbnN0IG1lc3NhZ2VXaWRnZXRKc29uID0gY29uZmlnLndpZGdldHNbbWVzc2FnZVdpZGdldElkXVxyXG5cclxuICBsZXQgdXNlRGF0YVNvdXJjZTogSU1Vc2VEYXRhU291cmNlID0gbnVsbFxyXG4gIGNvbnN0IHVzZURhdGFTb3VyY2VzOiBJTVVzZURhdGFTb3VyY2VbXSA9IFtdXHJcbiAgaWYgKCFhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VXaWRnZXRJZCwgbWVzc2FnZVR5cGUpXHJcbiAgICAvL2lmIChtZXNzYWdlV2lkZ2V0SnNvbiAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcyAmJiBtZXNzYWdlV2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmZvckVhY2goKHVzZURTLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRzSnNvbiA9IGNvbmZpZy5kYXRhU291cmNlc1t1c2VEUy5kYXRhU291cmNlSWRdXHJcbiAgICAgICAgbGV0IHRlbXBVc2VEYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICAgICAgICB0ZW1wVXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgPSBJbW11dGFibGUoe1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IHVzZURTLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogdXNlRFMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogdXNlRFMucm9vdERhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgZGF0YVZpZXdJZDogdXNlRFMuZGF0YVZpZXdJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGlmICghdXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlID0gdGVtcFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVzZURhdGFTb3VyY2VzLnB1c2godGVtcFVzZURhdGFTb3VyY2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VEYXRhU291cmNlID0gY2hlY2tPdXRVc2VEYXRhU291cmNlKG1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2UsIG1lc3NhZ2VUeXBlKVxyXG4gICAgaWYgKGFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBhY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEUyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFVzZURhdGFTb3VyY2UgPSBjaGVja091dFVzZURhdGFTb3VyY2UobWVzc2FnZVdpZGdldElkLCB1c2VEUywgbWVzc2FnZVR5cGUpXHJcbiAgICAgICAgdGVtcFVzZURhdGFTb3VyY2UgJiYgdXNlRGF0YVNvdXJjZXMucHVzaCh0ZW1wVXNlRGF0YVNvdXJjZSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VEYXRhU291cmNlOiB1c2VEYXRhU291cmNlLFxyXG4gICAgdXNlRGF0YVNvdXJjZXM6IHVzZURhdGFTb3VyY2VzXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja091dFVzZURhdGFTb3VyY2UgKG1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLCBvbGRVc2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBjb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIC8vY29uc3Qgd2lkZ2V0SnNvbiA9IGNvbmZpZy53aWRnZXRzW21lc3NhZ2VXaWRnZXRJZF1cclxuICBjb25zdCBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgPSBnZXREc0J5V2lkZ2V0SWQobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBsZXQgaW5pdFVzZURhdGFTb3VyY2UgPSBudWxsXHJcbiAgbGV0IGlzTWFwRHMgPSBmYWxzZVxyXG5cclxuICBjb25zdCBkc0lkID0gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzICYmIG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXSAmJiBtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXHJcbiAgaWYgKCFkc0lkKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNKc29uID0gY29uZmlnLmRhdGFTb3VyY2VzW2RzSWRdXHJcbiAgaWYgKGRzSnNvbiAmJiAoKGRzSnNvbi50eXBlID09PSBBcmNHSVNEYXRhU291cmNlVHlwZXMuV2ViTWFwKSB8fCAoZHNKc29uLnR5cGUgPT09IEFyY0dJU0RhdGFTb3VyY2VUeXBlcy5XZWJTY2VuZSkpKSB7XHJcbiAgICBpc01hcERzID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gIGNvbnN0IGlzb2xkVXNlRGF0YVNvdXJjZUlzT3V0cHV0RHMgPSBkc00uZ2V0RGF0YVNvdXJjZShvbGRVc2VEYXRhU291cmNlLmRhdGFTb3VyY2VJZCk/LmdldERhdGFTb3VyY2VKc29uKCk/LmlzT3V0cHV0RnJvbVdpZGdldFxyXG5cclxuICBpZiAoaXNNYXBEcykge1xyXG4gICAgLy8gd2VibWFwIG9yIHdlYnNjZW5lIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXS5kYXRhU291cmNlSWQgPT09IG9sZFVzZURhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgaXNVc2VPbGREcyA9IHRydWVcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVXNlT2xkRHMpIHtcclxuICAgICAgaW5pdFVzZURhdGFTb3VyY2UgPSBvbGRVc2VEYXRhU291cmNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gZmVhdHVyZWxheWVyIGRzXHJcbiAgICBsZXQgaXNVc2VPbGREcyA9IGZhbHNlXHJcbiAgICBpZiAobWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkVXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG9sZFVzZURhdGFTb3VyY2U/Lm1haW5EYXRhU291cmNlSWQgOiBvbGRVc2VEYXRhU291cmNlPy5kYXRhU291cmNlSWRcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlRGF0YVNvdXJjZUlkID0gaXNvbGRVc2VEYXRhU291cmNlSXNPdXRwdXREcyA/IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8ubWFpbkRhdGFTb3VyY2VJZCA6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1tpXT8uZGF0YVNvdXJjZUlkXHJcbiAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXdcclxuICAgICAgICBpZiAoY3VycmVudFVzZURhdGFTb3VyY2VJZCA9PT0gb2xkVXNlRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICBpc1VzZU9sZERzID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNVc2VPbGREcykge1xyXG4gICAgICBpbml0VXNlRGF0YVNvdXJjZSA9IG9sZFVzZURhdGFTb3VyY2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMgJiYgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gSW1tdXRhYmxlKHtcclxuICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IG1lc3NhZ2VXaWRnZXRVc2VEYXRhU291cmNlc1swXS5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzWzBdLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluaXRVc2VEYXRhU291cmNlID0gbnVsbFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5pdFVzZURhdGFTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZURhdGFTb3VyY2VJbmZvICh3aWRnZXRJZDogc3RyaW5nLCB1c2VEYXRhU291cmNlOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+LCB1c2VEYXRhU291cmNlczogSW1tdXRhYmxlLkltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+LCBtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3aWRnZXRJZF1cclxuICBsZXQgaXNSZWFkT25seSA9IGZhbHNlXHJcbiAgY29uc3QgZHNSb290SWRzID0gZ2V0RHNSb290SWRzQnlXaWRnZXRJZCh3aWRnZXRJZClcclxuICAvL2lmIChkc1Jvb3RJZHMgJiYgZHNSb290SWRzLmxlbmd0aCA9PT0gMCAmJiAod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLnVzZURhdGFTb3VyY2VzICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxKSkge1xyXG4gIC8vICBpc1JlYWRPbmx5ID0gdHJ1ZVxyXG4gIC8vfVxyXG5cclxuICAvL2lmICghZHNSb290SWRzICYmICh3aWRnZXRKc29uICYmIHdpZGdldEpzb24udXNlRGF0YVNvdXJjZXMgJiYgd2lkZ2V0SnNvbi51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDEpKSB7XHJcbiAgLy8gIGlzUmVhZE9ubHkgPSB0cnVlXHJcbiAgLy99XHJcblxyXG4gIGlmICghZHNSb290SWRzIHx8IGRzUm9vdElkcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICBpc1JlYWRPbmx5ID0gY2hlY2tJc09ubHlPbmVEcyh3aWRnZXRKc29uLCBtZXNzYWdlVHlwZSwgZHNSb290SWRzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZnJvbURzSWRzID0gZHNSb290SWRzID8gdW5kZWZpbmVkIDogZ2V0RHNJZHNCeVdpZGdldElkKHdpZGdldElkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBkc1NlbGVjdG9yU291cmNlID0ge1xyXG4gICAgaXNSZWFkT25seTogaXNSZWFkT25seSxcclxuICAgIHVzZURhdGFTb3VyY2U6IHVzZURhdGFTb3VyY2UsXHJcbiAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXMgfHwgW10sXHJcbiAgICBmcm9tUm9vdERzSWRzOiBkc1Jvb3RJZHMsXHJcbiAgICBmcm9tRHNJZHM6IGZyb21Ec0lkc1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRzU2VsZWN0b3JTb3VyY2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERzQnlXaWRnZXRJZCAod0lkOiBzdHJpbmcsIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSk6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+IHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod0lkLCBtZXNzYWdlVHlwZSlcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWcoKVxyXG4gIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWc/LndpZGdldHM/Llt3SWRdXHJcbiAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB3aWRnZXRKc29uPy51c2VEYXRhU291cmNlcyB8fCBJbW11dGFibGUoW10pXHJcbiAgY29uc3Qgb3V0cHV0RGF0YVNvdXJjZXMgPSBpbml0T3V0cHV0RGF0YVNvdXJjZXMod2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMpIHx8IEltbXV0YWJsZShbXSlcclxuICBjb25zdCBib3RoRGF0YXNvdXJjZSA9IHVzZURhdGFTb3VyY2VzPy5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pLmNvbmNhdChvdXRwdXREYXRhU291cmNlcz8uYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSlcclxuICBzd2l0Y2ggKG1lc3NhZ2VDYXJyeURhdGEpIHtcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5PdXRwdXREYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gb3V0cHV0RGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Vc2VEYXRhU291cmNlOlxyXG4gICAgICByZXR1cm4gdXNlRGF0YVNvdXJjZXNcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIEltbXV0YWJsZShib3RoRGF0YXNvdXJjZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T3V0cHV0RGF0YVNvdXJjZXMgKG91dHB1dERhdGFTb3VyY2VzKTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4ge1xyXG4gIGNvbnN0IGRzID0gb3V0cHV0RGF0YVNvdXJjZXM/Lm1hcChkc0lkID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZHNJZCxcclxuICAgICAgcm9vdERhdGFTb3VyY2VJZDogbnVsbFxyXG4gICAgfVxyXG4gIH0pID8/IFtdXHJcbiAgcmV0dXJuIEltbXV0YWJsZShkcylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNPbmx5T25lRHMgKHdpZGdldEpzb246IElNV2lkZ2V0SnNvbiwgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlLCBkc1Jvb3RJZHM6IEltbXV0YWJsZUFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcclxuICBjb25zdCBtZXNzYWdlQ2FycnlEYXRhID0gZ2V0TWVzc2FnZUNhcnJ5RGF0YUJ5V2lkZ2V0SWQod2lkZ2V0SnNvbj8uaWQsIG1lc3NhZ2VUeXBlKVxyXG4gIGNvbnN0IG91dHB1dERzID0gd2lkZ2V0SnNvbj8ub3V0cHV0RGF0YVNvdXJjZXMgfHwgW11cclxuICBjb25zdCB1c2VEcyA9IHdpZGdldEpzb24/LnVzZURhdGFTb3VyY2VzIHx8IFtdXHJcbiAgaWYgKGRzUm9vdElkcykge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHN3aXRjaCAobWVzc2FnZUNhcnJ5RGF0YSkge1xyXG4gICAgY2FzZSBNZXNzYWdlQ2FycnlEYXRhLk91dHB1dERhdGFTb3VyY2U6XHJcbiAgICAgIHJldHVybiBvdXRwdXREcz8ubGVuZ3RoID09PSAxXHJcbiAgICBjYXNlIE1lc3NhZ2VDYXJyeURhdGEuVXNlRGF0YVNvdXJjZTpcclxuICAgICAgcmV0dXJuIHVzZURzPy5sZW5ndGggPT09IDFcclxuICAgIGNhc2UgTWVzc2FnZUNhcnJ5RGF0YS5Cb3RoRGF0YVNvdXJjZTpcclxuICAgICAgY29uc3QgZHNMZW5ndGggPSBvdXRwdXREcy5sZW5ndGggKyB1c2VEcy5sZW5ndGhcclxuICAgICAgcmV0dXJuIGRzTGVuZ3RoID09PSAxXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHBDb25maWcgKCkge1xyXG4gIHJldHVybiB3aW5kb3cuamltdUNvbmZpZy5pc0J1aWxkZXIgPyBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcFN0YXRlSW5CdWlsZGVyPy5hcHBDb25maWcgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk/LmFwcENvbmZpZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREc1Jvb3RJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGFwcENvbmZpZyA9IGdldEFwcENvbmZpZygpXHJcbiAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZz8ud2lkZ2V0cz8uW3dJZF1cclxuICBjb25zdCByb290SWRzID0gW11cclxuICBjb25zdCBkc00gPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXHJcbiAgd2lkZ2V0SnNvbj8udXNlRGF0YVNvdXJjZXM/LmZvckVhY2goKHVzZURTOiBJbW11dGFibGUuSW1tdXRhYmxlT2JqZWN0PFVzZURhdGFTb3VyY2U+KSA9PiB7XHJcbiAgICBjb25zdCBkcyA9IGRzTS5nZXREYXRhU291cmNlKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIGlmIChkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYk1hcCB8fCBkcz8udHlwZSA9PT0gQXJjR0lTRGF0YVNvdXJjZVR5cGVzLldlYlNjZW5lKSB7IC8vIGlzIHJvb3QgZHNcclxuICAgICAgcm9vdElkcy5wdXNoKHVzZURTLmRhdGFTb3VyY2VJZClcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiByb290SWRzLmxlbmd0aCA+IDAgPyBJbW11dGFibGUocm9vdElkcykgOiB1bmRlZmluZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RHNJZHNCeVdpZGdldElkICh3SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKSB7XHJcbiAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKHdJZCwgbWVzc2FnZVR5cGUpXHJcbiAgcmV0dXJuIEltbXV0YWJsZShtZXNzYWdlV2lkZ2V0VXNlRGF0YVNvdXJjZXMubWFwKCh1c2VEUzogSW1tdXRhYmxlLkltbXV0YWJsZU9iamVjdDxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgZHNNID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxyXG4gICAgY29uc3QgZHMgPSBkc00uZ2V0RGF0YVNvdXJjZSh1c2VEUy5kYXRhU291cmNlSWQpXHJcbiAgICBsZXQgcmVzdWx0RHNcclxuICAgIGlmIChkcyAmJiBkcy5pc0RhdGFWaWV3KSB7XHJcbiAgICAgIC8vIHN1cHBvcnQgZGF0YSB2aWV3XHJcbiAgICAgIHJlc3VsdERzID0gZHM/LmdldE1haW5EYXRhU291cmNlKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc3VsdERzID0gZHNcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHREcz8uaWRcclxuICB9KSA/PyBbXSlcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cclxuaW1wb3J0IHsgQXBwTW9kZSwgZGF0YVNvdXJjZVV0aWxzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgTWFwQmFzZSwgeyBIaWdoTGlnaHRIYW5kbGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHsgSUZlYXR1cmUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcclxuaW1wb3J0IHsgZ2VvbWV0cnlVdGlscywgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgSmltdU1hcFZpZXcsIExheWVyVHlwZXMsIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCBKaW11U2NlbmVMYXllclZpZXcgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZT86IHtbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXR9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cclxuICBuZXdGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMobmV3RmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKCd0aGUgZmVhdHVyZSBsYXllciBpcyBhbHJlYWR5IGNyZWF0ZWQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG5ld0xheWVyUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgfSlcclxuXHJcbiAgaWYgKG5ld0xheWVyUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3TGF5ZXJQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWU/OiB7W2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0fSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgdXBkYXRlUHJvbWlzZXMgPSBbXVxyXG4gIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMoY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIG1hcEJhc2VWaWV3Lm1hcC5yZW1vdmUobGF5ZXIpXHJcbiAgICAgIHVwZGF0ZVByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAodXBkYXRlUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodXBkYXRlUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRGZWF0dXJlU2V0VG9NYXAgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVTZXQ6IF9fZXNyaS5GZWF0dXJlU2V0LCBsYXllcklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBpZiAoZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBsZXQgRmVhdHVyZVNldDogdHlwZW9mICBfX2VzcmkuRmVhdHVyZVNldDtcclxuICAgICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyRnJvbUZlYXR1cmVTZXQgPSBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmxheWVyIGFzIGFueVxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luRmVhdHVyZWxheWVyID0gW11cclxuICAgICAgICBjb25zdCBmaWVsZE1hcCA9IHt9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGZpZWxkc0l0ZW0gPSBnZXRSZWFzb25hYmxlRmllbGQobGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0pXHJcbiAgICAgICAgICBmaWVsZE1hcFtsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXS5uYW1lXSA9IGZpZWxkc0l0ZW0ubmFtZVxyXG4gICAgICAgICAgZmllbGRzSW5GZWF0dXJlbGF5ZXIucHVzaChmaWVsZHNJdGVtKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZmllbGRzSW5Qb3B1cFRlbXBsYXRlID0gW11cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgIGlmIChmaWVsZE1hcFtrZXldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc0l0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE1hcFtrZXldLFxyXG4gICAgICAgICAgICAgIGxhYmVsOiBrZXlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWVsZHNJblBvcHVwVGVtcGxhdGUucHVzaChmaWVsZHNJdGVtKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc291cmNlRmVhdHVyZXMgPSBbXVxyXG4gICAgICAgIGZlYXR1cmVTZXQuZmVhdHVyZXMuZm9yRWFjaCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRlbXBGZWF0dXJlID0gZmVhdHVyZVxyXG4gICAgICAgICAgaWYgKHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNbZmllbGRNYXBba2V5XV0gPSB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2tleV1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcy5leGJmaWQgPSBpbmRleFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IHtcclxuICAgICAgICAgICAgICBleGJmaWQ6IGluZGV4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNvdXJjZUZlYXR1cmVzLnB1c2godGVtcEZlYXR1cmUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICAgIGlkOiBsYXllcklkLFxyXG4gICAgICAgICAgdGl0bGU6IGxheWVyRnJvbUZlYXR1cmVTZXQudGl0bGUsXHJcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZUZlYXR1cmVzLFxyXG4gICAgICAgICAgZmllbGRzOiBmaWVsZHNJbkZlYXR1cmVsYXllcixcclxuICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgICBvYmplY3RJZEZpZWxkOiAnZXhiZmlkJyxcclxuICAgICAgICAgIHJlbmRlcmVyOiBsYXllckZyb21GZWF0dXJlU2V0LnJlbmRlcmVyLFxyXG4gICAgICAgICAgcG9wdXBFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgcG9wdXBUZW1wbGF0ZToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ2luZm9ybWF0aW9uJyxcclxuICAgICAgICAgICAgY29udGVudDogW3tcclxuICAgICAgICAgICAgICB0eXBlOiAnZmllbGRzJyxcclxuICAgICAgICAgICAgICBmaWVsZEluZm9zOiBmaWVsZHNJblBvcHVwVGVtcGxhdGVcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBtYXBCYXNlVmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFzb25hYmxlRmllbGQgKGZpZWxkOiBfX2VzcmkuRmllbGQpOiBfX2VzcmkuRmllbGQge1xyXG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXHJcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXHJcbiAgICBhbGlhczogZmllbGQuYWxpYXMsXHJcbiAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgfSBhcyBhbnlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcclxuICAvLyBJbiB0aGlzIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBmZWF0dXJlcyBjb21lIGZyb20gdGhlIHNhbWUgbGF5ZXJcclxuICBsZXQgZmVhdHVyZUxheWVySWQgPSBsYXllcklkXHJcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG5cclxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcclxuICBpZiAoIWZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0IGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBGZWF0dXJlKSB7XHJcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgY29uc3QgbGF5ZXJWaWV3cyA9IG1hcEJhc2VWaWV3LmFsbExheWVyVmlld3NcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSkubGF5ZXIuaWQgPT09IGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICAgICAgZmVhdHVyZUxheWVyVmlldyA9IGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxheWVySWQ6IGZlYXR1cmVMYXllcklkLFxyXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcFBhbnRvIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IF9fZXNyaS5HZW9tZXRyeSB8IF9fZXNyaS5HZW9tZXRyeVtdIHxcclxuX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgX19lc3JpLkV4dGVudCk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgcGFuVG9UYXJnZXQgPSB0YXJnZXQgYXMgYW55XHJcbiAgY29uc3QgdGVtcEJhc2VNYXBWaWV3ID0gbWFwQmFzZVZpZXcgYXMgYW55XHJcbiAgaWYgKHBhblRvVGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgIGlmIChwYW5Ub1RhcmdldC5sZW5ndGggPT09IDApIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoKVxyXG5cclxuICAgIGlmIChwYW5Ub1RhcmdldFswXS5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhblRvVGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ2VvbWV0cnlBcnIucHVzaChwYW5Ub1RhcmdldFtpXS5nZW9tZXRyeSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF3YWl0IGdldEdlb21ldHJpZXNFeHRlbnQoZ2VvbWV0cnlBcnIpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFzZU1hcFZpZXcuZ29UbyhleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFzZU1hcFZpZXcuZ29UbyhleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQuZ2VvbWV0cnkpIHtcclxuICAgICAgY29uc3QgZ2V0bWV0cnkgPSBwYW5Ub1RhcmdldC5nZW9tZXRyeSBhcyBfX2VzcmkuR2VvbWV0cnlcclxuICAgICAgcmV0dXJuIHRlbXBCYXNlTWFwVmlldy5nb1RvKGdldENlbnRlclBvaW50KGdldG1ldHJ5KSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0ZW1wQmFzZU1hcFZpZXcuZ29UbyhnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9tZXRyaWVzRXh0ZW50IChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSk6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xyXG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcclxuICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudDtcclxuICAgIFtFeHRlbnRdID0gbW9kdWxlc1xyXG5cclxuICAgIGlmICghZ2VvbWV0cmllcyB8fCAhZ2VvbWV0cmllcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmdWxsRXh0ZW50OiBfX2VzcmkuRXh0ZW50ID0gbnVsbFxyXG4gICAgbGV0IGluZGV4XHJcbiAgICBjb25zdCBudW1HZW9tZXRyaWVzID0gZ2VvbWV0cmllcy5sZW5ndGhcclxuXHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF1cclxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuXHJcbiAgICAgIGlmICghZXh0ZW50ICYmIGdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XHJcblxyXG4gICAgICAgIGlmIChwb2ludEdlb21ldHJ5LnggJiYgcG9pbnRHZW9tZXRyeS55KSB7XHJcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcclxuICAgICAgICAgICAgeG1heDogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB4bWluOiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgeW1pbjogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB6bWF4OiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFleHRlbnQpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZnVsbEV4dGVudCkge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBmdWxsRXh0ZW50LnVuaW9uKGV4dGVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZXh0ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnVsbEV4dGVudC53aWR0aCA8IDAgJiYgZnVsbEV4dGVudC5oZWlnaHQgPCAwKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogdm9pZCB7XHJcbiAgaWYgKGxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IGppbXVNYXBWaWV3LmppbXVMYXllclZpZXdzXHJcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3SWRzID0gT2JqZWN0LmtleXMoamltdUxheWVyVmlld3MpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbXVMYXllclZpZXdJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXBKaW11TGF5ZXJWaWV3ID0gamltdUxheWVyVmlld3NbamltdUxheWVyVmlld0lkc1tpXV1cclxuICAgICAgaWYgKHRlbXBKaW11TGF5ZXJWaWV3ICYmIHRlbXBKaW11TGF5ZXJWaWV3LmxheWVyICYmIHRlbXBKaW11TGF5ZXJWaWV3LmxheWVyRGF0YVNvdXJjZUlkID09PSBsYXllckRhdGFTb3VyY2VJZCAmJlxyXG4gICAgICAgICh0ZW1wSmltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllciB8fCB0ZW1wSmltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpKSB7XHJcbiAgICAgICAgKHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5zZXRMb2NhbERlZmluaXRpb25FeHByZXNzaW9uKHF1ZXJ5U1FMKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUZlYXR1cmVzIChsYXllck9iamVjdCwgcXVlcnlTUUwpIHtcclxuICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIGxldCBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeTtcclxuICAgIFtRdWVyeV0gPSBtb2R1bGVzXHJcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5U1FMXHJcbiAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxyXG4gICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICByZXR1cm4gbGF5ZXJPYmplY3QucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgcmV0dXJuIGZlYXR1cmVTZXRcclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhc2hPbkZlYXR1cmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdUZlYXR1cmVMYXllclZpZXcpIHtcclxuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XHJcbiAgICBsZXQgZmVhdHVyZUxheWVyVmlldzogX19lc3JpLkZlYXR1cmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcclxuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgICAgIHF1ZXJ5RmVhdHVyZXMoZmVhdHVyZUxheWVyVmlldy5sYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVMYXllclZpZXcubGF5ZXIuZ2VvbWV0cnlUeXBlKVxyXG4gICAgICAgICAgc3RhcnRGbGFzaChqaW11TWFwVmlldy52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBzeW1ib2wpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInXHJcbiAgICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllcjtcclxuICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzXHJcblxyXG4gICAgICBsZXQgdGVtcEZlYXR1cmVMYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogZGF0YVNvdXJjZVV0aWxzLmdldFVybEJ5TGF5ZXIoKHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3IHwgSmltdVNjZW5lTGF5ZXJWaWV3KS5sYXllcilcclxuICAgICAgfSlcclxuICAgICAgdGVtcEZlYXR1cmVMYXllci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcXVlcnlGZWF0dXJlcyh0ZW1wRmVhdHVyZUxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGdldEZsYXNoU3ltYm9sKGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICAgICAgc3RhcnRGbGFzaChqaW11TWFwVmlldy52aWV3LCBmZWF0dXJlU2V0LmZlYXR1cmVzLCBzeW1ib2wpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5sZXQgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gbnVsbFxyXG5mdW5jdGlvbiBmbGFzaE9uU2NlbmVMYXllciAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBxdWVyeVNRTDogc3RyaW5nLCB0ZW1wSmltdUxheWVyVmlldzogSmltdVNjZW5lTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IHNjZW5lTGF5ZXJWaWV3OiBfX2VzcmkuU2NlbmVMYXllclZpZXcgPSAodGVtcEppbXVMYXllclZpZXcpLnZpZXdcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHF1ZXJ5RmVhdHVyZXMoc2NlbmVMYXllclZpZXc/LmxheWVyPy5hc3NvY2lhdGVkTGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdElkRmllbGQgPSBzY2VuZUxheWVyVmlldy5sYXllci5vYmplY3RJZEZpZWxkXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SWRzID0gZmVhdHVyZVNldC5mZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbb2JqZWN0SWRGaWVsZF0pXHJcblxyXG4gICAgICAgIGxldCBpID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEZsYXNoQ291bnQgPSA2XHJcbiAgICAgICAgbGV0IGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zID0gamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zXHJcblxyXG4gICAgICAgIGNvbnN0IGZsYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKGkgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0Q29sb3IpIHtcclxuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IG51bGxcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogWzAsIDAsIDAsIDBdIH1cclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBoaWdobGlnaHRDb2xvciB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0gb3JpZ2luYWxIaWdobGlnaHRPcHRpb25zXHJcbiAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChmbGFzaCwgNTAwKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXNoRmVhdHVyZXNCeVF1ZXJ5IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcpOiB2b2lkIHtcclxuICBpZiAobGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gamltdU1hcFZpZXcuamltdUxheWVyVmlld3NcclxuICAgIGNvbnN0IGppbXVMYXllclZpZXdJZHMgPSBPYmplY3Qua2V5cyhqaW11TGF5ZXJWaWV3cylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgamltdUxheWVyVmlld0lkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcEppbXVMYXllclZpZXcgPSBqaW11TGF5ZXJWaWV3c1tqaW11TGF5ZXJWaWV3SWRzW2ldXVxyXG4gICAgICBpZiAodGVtcEppbXVMYXllclZpZXcgJiYgdGVtcEppbXVMYXllclZpZXcubGF5ZXIgJiYgdGVtcEppbXVMYXllclZpZXcubGF5ZXJEYXRhU291cmNlSWQgPT09IGxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgaWYgKHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyKSB7XHJcbiAgICAgICAgICBmbGFzaE9uRmVhdHVyZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgdGVtcEppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcpXHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wSmltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcclxuICAgICAgICAgIGZsYXNoT25TY2VuZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgdGVtcEppbXVMYXllclZpZXcgYXMgSmltdVNjZW5lTGF5ZXJWaWV3KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRGbGFzaCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIHN5bWJvbCkge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvR3JhcGhpYydcclxuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgR3JhcGhpYzogdHlwZW9mIF9fZXNyaS5HcmFwaGljO1xyXG4gICAgW0dyYXBoaWNdID0gbW9kdWxlc1xyXG5cclxuICAgIGNvbnN0IGZsYXNoRmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10sIG1heEZsYXNoQ291bnQ6IG51bWJlcikge1xyXG4gICAgICBjb25zdCBncmFwaGljcyA9IFtdXHJcbiAgICAgIGxldCBmbGFzaENvdW50ID0gMFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcEdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICBnZW9tZXRyeTogZmVhdHVyZXNbaV0uZ2VvbWV0cnksXHJcbiAgICAgICAgICBzeW1ib2w6IHN5bWJvbCxcclxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGZlYXR1cmVzW2ldLmF0dHJpYnV0ZXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIGdyYXBoaWNzLnB1c2godGVtcEdyYXBoaWMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpbmdsZUZsYXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLmFkZE1hbnkoZ3JhcGhpY3MpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5yZW1vdmVNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgICAgZmxhc2hDb3VudCA9IGZsYXNoQ291bnQgKyAxXHJcbiAgICAgICAgICBpZiAoZmxhc2hDb3VudCA8IG1heEZsYXNoQ291bnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzaW5nbGVGbGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZmxhc2hGZWF0dXJlcyhmZWF0dXJlcywgMylcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGbGFzaFN5bWJvbCAoZ2VvbWV0cnlUeXBlOiBzdHJpbmcpIHtcclxuICBpZiAoWydwb2ludCcsICdtdWx0aXBvaW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1tYXJrZXInLFxyXG4gICAgICBzdHlsZTogJ2NpcmNsZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgIHNpemU6ICcxNnB4JyxcclxuICAgICAgb3V0bGluZToge1xyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydwb2x5bGluZSddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbGluZScsXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgIHdpZHRoOiAzLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJ1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydwb2x5Z29uJywgJ2V4dGVudCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlRmlsbFN5bWJvbCgpXHJcbiAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuNV0sXHJcbiAgICAgIHN0eWxlOiAnc29saWQnLFxyXG4gICAgICBvdXRsaW5lOiB7IC8vIGF1dG9jYXN0cyBhcyBuZXcgU2ltcGxlTGluZVN5bWJvbCgpXHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgICB3aWR0aDogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ21lc2gnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnbWVzaC0zZCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgTWVzaFN5bWJvbDNEKClcclxuICAgICAgc3ltYm9sTGF5ZXJzOiBbe1xyXG4gICAgICAgIHR5cGU6ICdmaWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBGaWxsU3ltYm9sM0RMYXllcigpXHJcbiAgICAgICAgbWF0ZXJpYWw6IHsgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSB9XHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDZW50ZXJQb2ludCAoZ2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSk6IF9fZXNyaS5Qb2ludCB7XHJcbiAgLy8gcG9pbnQgfCBtdWx0aXBvaW50IHwgcG9seWxpbmUgfCBwb2x5Z29uIHwgZXh0ZW50IHwgbWVzaFxyXG4gIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xyXG4gICAgY2FzZSAncG9pbnQnOlxyXG4gICAgICByZXR1cm4gZ2VvbWV0cnkgYXMgX19lc3JpLlBvaW50XHJcbiAgICBjYXNlICdleHRlbnQnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5FeHRlbnQpLmNlbnRlclxyXG4gICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlnb24pLmNlbnRyb2lkXHJcbiAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLlBvbHlsaW5lKS5leHRlbnQuY2VudGVyXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZ2VvbWV0cnkgJiYgZ2VvbWV0cnkuZXh0ZW50ID8gZ2VvbWV0cnkuZXh0ZW50LmNlbnRlciA6IHVuZGVmaW5lZFxyXG4gICAgLy8gdG9kb1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUZlYXR1cmUgKGZlYXR1cmU6IElGZWF0dXJlIHwgX19lc3JpLkdyYXBoaWMsIEdyYXBoaWM6IF9fZXNyaS5HcmFwaGljQ29uc3RydWN0b3IpOiBfX2VzcmkuR3JhcGhpYyB7XHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG4gIGlmICgoZmVhdHVyZSBhcyBhbnkpLmNsb25lKSB7XHJcbiAgICB0ZW1wRmVhdHVyZSA9IChmZWF0dXJlIGFzIGFueSkuY2xvbmUoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wRmVhdHVyZSA9IEdyYXBoaWMuZnJvbUpTT04oT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZSkpXHJcbiAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZmVhdHVyZS5hdHRyaWJ1dGVzKVxyXG4gIH1cclxuICByZXR1cm4gdGVtcEZlYXR1cmVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RHZW9tZXRyaWVzIChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSwgc3BhdGlhbFJlZmVyZW5jZTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5HZW9tZXRyeVtdPiB7XHJcbiAgaWYgKCFnZW9tZXRyaWVzIHx8IGdlb21ldHJpZXMubGVuZ3RoID09PSAwIHx8ICFnZW9tZXRyaWVzWzBdIHx8XHJcbiAgICBzcGF0aWFsUmVmZXJlbmNlLndraWQgPT09IGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS53a2lkIHx8IChzcGF0aWFsUmVmZXJlbmNlLmVxdWFscyhnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UpKSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0KSB7XHJcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvcikge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBhd2FpdCBnZW9tZXRyeVV0aWxzLnByb2plY3RUb1NwYXRpYWxSZWZlcmVuY2UoZ2VvbWV0cmllcywgc3BhdGlhbFJlZmVyZW5jZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9jZXNzWm9vbVRvRmVhdHVyZXMgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGxheWVyOiBhbnksIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpY1tdPiB7XHJcbiAgaWYgKG1hcEJhc2VWaWV3ICYmIG1hcEJhc2VWaWV3LnR5cGUgPT09ICczZCcgJiYgbGF5ZXIgJiYgbGF5ZXIucXVlcnlGZWF0dXJlcyAmJiBmZWF0dXJlcykge1xyXG4gICAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtRdWVyeV0gPSBtb2R1bGVzXHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXHJcbiAgICAgIHF1ZXJ5Lm9iamVjdElkcyA9IGZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tsYXllci5vYmplY3RJZEZpZWxkXSlcclxuICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmZlYXR1cmVzICYmIHJlc3VsdC5mZWF0dXJlcy5sZW5ndGggPT09IGZlYXR1cmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQuZmVhdHVyZXMpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJc0xpdmUgKGFwcE1vZGU6IEFwcE1vZGUpOiBib29sZWFuIHtcclxuICBpZiAod2luZG93LmppbXVDb25maWcuaXNJbkJ1aWxkZXIpIHtcclxuICAgIGlmIChhcHBNb2RlID09PSBBcHBNb2RlLkRlc2lnbikge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwQmFzZVJlc3RvcmVEYXRhIChtYXBJbnN0YW5jZTogTWFwQmFzZSk6IGFueSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1hcENvbnRhaW5lcjogbWFwSW5zdGFuY2UubWFwQ29udGFpbmVyLFxyXG4gICAgc3RhdGU6IG1hcEluc3RhbmNlLnN0YXRlLFxyXG4gICAgTWFwVmlldzogbWFwSW5zdGFuY2UuTWFwVmlldyxcclxuICAgIFNjZW5lVmlldzogbWFwSW5zdGFuY2UuU2NlbmVWaWV3LFxyXG4gICAgRXh0ZW50OiBtYXBJbnN0YW5jZS5FeHRlbnQsXHJcbiAgICBWaWV3cG9pbnQ6IG1hcEluc3RhbmNlLlZpZXdwb2ludCxcclxuICAgIG1hcFZpZXc6IG1hcEluc3RhbmNlLm1hcFZpZXcsXHJcbiAgICBzY2VuZVZpZXc6IG1hcEluc3RhbmNlLnNjZW5lVmlldyxcclxuICAgIGV4dGVudFdhdGNoOiBtYXBJbnN0YW5jZS5leHRlbnRXYXRjaCxcclxuICAgIGZhdGFsRXJyb3JXYXRjaDogbWFwSW5zdGFuY2UuZmF0YWxFcnJvcldhdGNoLFxyXG4gICAgZHNNYW5hZ2VyOiBtYXBJbnN0YW5jZS5kc01hbmFnZXIsXHJcbiAgICBoaWdoTGlnaHRIYW5kbGVzOiBtYXBJbnN0YW5jZS5oaWdoTGlnaHRIYW5kbGVzLFxyXG4gICAgbWFwQmFzZVZpZXdFdmVudEhhbmRsZXM6IG1hcEluc3RhbmNlLm1hcEJhc2VWaWV3RXZlbnRIYW5kbGVzLFxyXG4gICAgQ29sb3I6IG1hcEluc3RhbmNlLkNvbG9yLFxyXG4gICAgaXNSZXF1ZXN0aW5nTWFwOiBtYXBJbnN0YW5jZS5pc1JlcXVlc3RpbmdNYXBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlTWFwQmFzZSAobWFwSW5zdGFuY2U6IE1hcEJhc2UsIHJlc3RvcmVEYXRhOiBhbnkpOiB2b2lkIHtcclxuICBtYXBJbnN0YW5jZS5tYXBDb250YWluZXIgPSByZXN0b3JlRGF0YS5tYXBDb250YWluZXJcclxuICBtYXBJbnN0YW5jZS5zdGF0ZSA9IHJlc3RvcmVEYXRhLnN0YXRlXHJcbiAgbWFwSW5zdGFuY2UuTWFwVmlldyA9IHJlc3RvcmVEYXRhLk1hcFZpZXdcclxuICBtYXBJbnN0YW5jZS5TY2VuZVZpZXcgPSByZXN0b3JlRGF0YS5TY2VuZVZpZXdcclxuICBtYXBJbnN0YW5jZS5FeHRlbnQgPSByZXN0b3JlRGF0YS5FeHRlbnRcclxuICBtYXBJbnN0YW5jZS5WaWV3cG9pbnQgPSByZXN0b3JlRGF0YS5WaWV3cG9pbnRcclxuICBtYXBJbnN0YW5jZS5tYXBWaWV3ID0gcmVzdG9yZURhdGEubWFwVmlld1xyXG4gIG1hcEluc3RhbmNlLnNjZW5lVmlldyA9IHJlc3RvcmVEYXRhLnNjZW5lVmlld1xyXG4gIG1hcEluc3RhbmNlLmV4dGVudFdhdGNoID0gcmVzdG9yZURhdGEuZXh0ZW50V2F0Y2hcclxuICBtYXBJbnN0YW5jZS5mYXRhbEVycm9yV2F0Y2ggPSByZXN0b3JlRGF0YS5mYXRhbEVycm9yV2F0Y2hcclxuICBtYXBJbnN0YW5jZS5kc01hbmFnZXIgPSByZXN0b3JlRGF0YS5kc01hbmFnZXJcclxuICBtYXBJbnN0YW5jZS5oaWdoTGlnaHRIYW5kbGVzID0gcmVzdG9yZURhdGEuaGlnaExpZ2h0SGFuZGxlc1xyXG4gIG1hcEluc3RhbmNlLm1hcEJhc2VWaWV3RXZlbnRIYW5kbGVzID0gcmVzdG9yZURhdGEubWFwQmFzZVZpZXdFdmVudEhhbmRsZXNcclxuICBtYXBJbnN0YW5jZS5Db2xvciA9IHJlc3RvcmVEYXRhLkNvbG9yXHJcbiAgbWFwSW5zdGFuY2UuaXNSZXF1ZXN0aW5nTWFwID0gcmVzdG9yZURhdGEuaXNSZXF1ZXN0aW5nTWFwXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCBNZXNzYWdlLCBEYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZSwgUmVjb3JkU2V0Q2hhbmdlVHlwZSwgZ2V0QXBwU3RvcmUsIERhdGFTb3VyY2VNYW5hZ2VyLFxyXG4gIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgRmVhdHVyZURhdGFSZWNvcmQsIEV4dGVudENoYW5nZU1lc3NhZ2UsIE11dGFibGVTdG9yZU1hbmFnZXIsIERhdGFTb3VyY2VGaWx0ZXJDaGFuZ2VNZXNzYWdlLCBNZXNzYWdlRGVzY3JpcHRpb25cclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgaGFuZGxlRmVhdHVyZSB9IGZyb20gJy4uL3J1bnRpbWUvdXRpbHMnXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi96b29tLXRvLWZlYXR1cmUtYWN0aW9uLXNldHRpbmcnXHJcbmltcG9ydCB7IGdldERzQnlXaWRnZXRJZCB9IGZyb20gJy4vYWN0aW9uLXV0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVRvRmVhdHVyZUFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgTm9Mb2NrVHJpZ2dlckxheWVyV2lkZ2V0cyA9IFsnTWFwJ11cclxuXHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSAmJlxyXG4gICAgICAgIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSAhPT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2UgJiZcclxuICAgICAgICBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgIT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRhU291cmNlTWFuYWdlciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcclxuICAgICAgY29uc3QgbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzID0gZ2V0RHNCeVdpZGdldElkKG1lc3NhZ2VEZXNjcmlwdGlvbi53aWRnZXRJZCwgbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlKVxyXG4gICAgICByZXR1cm4gbWVzc2FnZVdpZGdldFVzZURhdGFTb3VyY2VzLnNvbWUodXNlRGF0YVNvdXJjZSA9PiB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBkYXRhU291cmNlTWFuYWdlci5nZXREYXRhU291cmNlKHVzZURhdGFTb3VyY2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGlmIChkcy50eXBlID09PSAnV0VCX01BUCcgfHwgZHMudHlwZSA9PT0gJ1dFQl9TQ0VORScpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAhIWRzLmdldERhdGFTb3VyY2VKc29uKCk/Lmdlb21ldHJ5VHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nQ29tcG9uZW50VXJpIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAobWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlIHx8XHJcbiAgICAgICAgICBtZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZFNldENoYW5nZSB8fFxyXG4gICAgICAgICAgbWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFTb3VyY2VGaWx0ZXJDaGFuZ2UpIHtcclxuICAgICAgcmV0dXJuICdtZXNzYWdlLWFjdGlvbnMvem9vbS10by1mZWF0dXJlLWFjdGlvbi1zZXR0aW5nJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3JkU2V0Q2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UgPSBtZXNzYWdlIGFzIERhdGFSZWNvcmRTZXRDaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5DcmVhdGUgfHxcclxuICAgICAgICAgICAgZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuY2hhbmdlVHlwZSA9PT0gUmVjb3JkU2V0Q2hhbmdlVHlwZS5VcGRhdGUpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0ZlYXR1cmVTZXQgPSB7fVxyXG4gICAgICAgICAgICBpZiAoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuZGF0YVJlY29yZFNldCAmJiBkYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZS5kYXRhUmVjb3JkU2V0LnJlY29yZHMpIHtcclxuICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IFtdXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUmVjb3JkU2V0Q2hhbmdlTWVzc2FnZS5kYXRhUmVjb3JkU2V0LnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICgoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuZGF0YVJlY29yZFNldC5yZWNvcmRzW2ldIGFzIEZlYXR1cmVEYXRhUmVjb3JkKS5mZWF0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goaGFuZGxlRmVhdHVyZSgoZGF0YVJlY29yZFNldENoYW5nZU1lc3NhZ2UuZGF0YVJlY29yZFNldC5yZWNvcmRzW2ldIGFzXHJcbiAgICAgICAgICAgICAgICAgICAgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUsIEdyYXBoaWMpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgbmV3RmVhdHVyZVNldCA9IHtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcclxuICAgICAgICAgICAgICAgIHpvb21Ub09wdGlvbjogYWN0aW9uQ29uZmlnICYmIGFjdGlvbkNvbmZpZy5pc1VzZUN1c3RvbVpvb21Ub09wdGlvbiAmJiBhY3Rpb25Db25maWcuem9vbVRvT3B0aW9uLnNjYWxlID8gYWN0aW9uQ29uZmlnLnpvb21Ub09wdGlvbiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnem9vbS10by1ncmFwaGljcydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICd6b29tVG9GZWF0dXJlQWN0aW9uVmFsdWUudmFsdWUnLCBuZXdGZWF0dXJlU2V0KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZ1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldEpzb24gPSBjb25maWcud2lkZ2V0c1ttZXNzYWdlLndpZGdldElkXVxyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZVdpZGdldExhYmVsID0gbWVzc2FnZVdpZGdldEpzb24ubWFuaWZlc3QubGFiZWxcclxuICAgICAgICAgIGNvbnN0IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcblxyXG4gICAgICAgICAgbGV0IHNlbGVjdGlvbkZlYXR1cmVTZXQgPSB7fVxyXG4gICAgICAgICAgY29uc3Qgc2VsZWN0RmVhdHVyZXMgPSBbXVxyXG5cclxuICAgICAgICAgIGxldCBsYXllcklkID0gbnVsbFxyXG4gICAgICAgICAgaWYgKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkc1swXSkge1xyXG4gICAgICAgICAgICAgIGlmICgoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZSBhcyBhbnkpLmxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBsYXllcklkID0gKGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UgYXMgYW55KS5sYXllci5pZFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuTm9Mb2NrVHJpZ2dlckxheWVyV2lkZ2V0cy5pbmNsdWRlcyhtZXNzYWdlV2lkZ2V0TGFiZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYWluRGF0YVNvdXJjZU9mU2VsZWN0aW9uID0gZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZz8udXNlRGF0YVNvdXJjZXM/LnNvbWUodXNlRGF0YVNvdXJjZSA9PiB1c2VEYXRhU291cmNlPy5tYWluRGF0YVNvdXJjZUlkID09PSBtYWluRGF0YVNvdXJjZU9mU2VsZWN0aW9uLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25DaGFuZ2VEUyA9IGRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZS5yZWNvcmRzWzBdLmRhdGFTb3VyY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkNoYW5nZU1haW5EUyA9IHNlbGVjdGlvbkNoYW5nZURTPy5nZXRNYWluRGF0YVNvdXJjZSgpXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBkc0lkIG9mIG1haW5EUyBjdXJyZW50bHksIHdpbGwgc3VwcG9ydCB2aWV3IGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gdXNlRGF0YVNvdXJjZT8ubWFpbkRhdGFTb3VyY2VJZCA9PT0gc2VsZWN0aW9uQ2hhbmdlTWFpbkRTLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmICgoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbaV0gYXMgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdEZlYXR1cmVzLnB1c2goaGFuZGxlRmVhdHVyZSgoZGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLnJlY29yZHNbaV0gYXNcclxuICAgICAgICAgICAgICAgICAgRmVhdHVyZURhdGFSZWNvcmQpLmZlYXR1cmUsIEdyYXBoaWMpKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlbGVjdGlvbkZlYXR1cmVTZXQgPSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBzZWxlY3RGZWF0dXJlcyxcclxuICAgICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcclxuICAgICAgICAgICAgem9vbVRvT3B0aW9uOiBhY3Rpb25Db25maWcgJiYgYWN0aW9uQ29uZmlnLmlzVXNlQ3VzdG9tWm9vbVRvT3B0aW9uICYmIGFjdGlvbkNvbmZpZy56b29tVG9PcHRpb24uc2NhbGUgPyBhY3Rpb25Db25maWcuem9vbVRvT3B0aW9uIDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogJ3pvb20tdG8tZ3JhcGhpY3MnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3pvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZS52YWx1ZScsIHNlbGVjdGlvbkZlYXR1cmVTZXQpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXh0ZW50Q2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgZXh0ZW50Q2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRXh0ZW50Q2hhbmdlTWVzc2FnZVxyXG4gICAgICAgICAgaWYgKGV4dGVudENoYW5nZU1lc3NhZ2UuZ2V0UmVsYXRlZFdpZGdldElkcygpLmluY2x1ZGVzKHRoaXMud2lkZ2V0SWQpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZXh0ZW50VmFsdWUgPSB7XHJcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbZXh0ZW50Q2hhbmdlTWVzc2FnZS5leHRlbnRdLFxyXG4gICAgICAgICAgICB0eXBlOiAnem9vbS10by1leHRlbnQnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3Qgem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogZXh0ZW50VmFsdWUsXHJcbiAgICAgICAgICAgIHJlbGF0ZWRXaWRnZXRzOiBleHRlbnRDaGFuZ2VNZXNzYWdlLmdldFJlbGF0ZWRXaWRnZXRJZHMoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3pvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZScsIHpvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhU291cmNlRmlsdGVyQ2hhbmdlOlxyXG4gICAgICAgICAgY29uc3QgZmlsdGVyQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVNvdXJjZUZpbHRlckNoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZURTID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGZpbHRlckNoYW5nZU1lc3NhZ2UuZGF0YVNvdXJjZUlkKVxyXG4gICAgICAgICAgLy9jb25zdCBmaWx0ZXJDaGFuZ2VNYWluRFMgPSBmaWx0ZXJDaGFuZ2VEUz8uZ2V0TWFpbkRhdGFTb3VyY2UoKVxyXG4gICAgICAgICAgLy8gc3VwcG9ydCBkYXRhIHZpZXcuXHJcbiAgICAgICAgICBpZiAoIWFjdGlvbkNvbmZpZy51c2VEYXRhU291cmNlcy5zb21lKHVzZURhdGFTb3VyY2UgPT4gdXNlRGF0YVNvdXJjZT8uZGF0YVNvdXJjZUlkID09PSBmaWx0ZXJDaGFuZ2VEUy5pZCkpIHtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGZpbHRlckNoYW5nZUFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICBkYXRhU291cmNlSWQ6IGZpbHRlckNoYW5nZU1lc3NhZ2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICB6b29tVG9PcHRpb246IGFjdGlvbkNvbmZpZyAmJiBhY3Rpb25Db25maWcuaXNVc2VDdXN0b21ab29tVG9PcHRpb24gJiYgYWN0aW9uQ29uZmlnLnpvb21Ub09wdGlvbi5zY2FsZSA/IGFjdGlvbkNvbmZpZy56b29tVG9PcHRpb24gOiBudWxsLFxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlczogYWN0aW9uQ29uZmlnLnVzZURhdGFTb3VyY2VzIHx8IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiAnem9vbS10by1xdWVyeS1wYXJhbXMnXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ3pvb21Ub0ZlYXR1cmVBY3Rpb25WYWx1ZS52YWx1ZScsIGZpbHRlckNoYW5nZUFjdGlvblZhbHVlKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==