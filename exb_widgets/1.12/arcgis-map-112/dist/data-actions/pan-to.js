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
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/data-actions/pan-to.ts ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanTo)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./your-extensions/widgets/arcgis-map-112/src/runtime/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class PanTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    isSupported(dataSet) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { records } = dataSet;
            const dataSource = dataSet.dataSource;
            if (!dataSource || dataSource.getStatus() === jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceStatus.NotReady) {
                return false;
            }
            if (records.length > 0 && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo) && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo())) {
                // pan to graphics
                return true;
            }
            else if (((_a = dataSet.records) === null || _a === void 0 ? void 0 : _a.length) === 0 &&
                !!((_b = dataSet.dataSource) === null || _b === void 0 ? void 0 : _b.createJSAPILayerByDataSource) &&
                (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo) && (dataSource === null || dataSource === void 0 ? void 0 : dataSource.supportSpatialInfo())) {
                // pan to layer
                return true;
            }
            else {
                return false;
            }
        });
    }
    onExecute(dataSet) {
        return __awaiter(this, void 0, void 0, function* () {
            const { records } = dataSet;
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
                var _a;
                let Graphic = null;
                [Graphic] = modules;
                let panToActionValue = null;
                const geometries = records.map(record => { var _a; return (_a = (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(record.feature, Graphic)) === null || _a === void 0 ? void 0 : _a.geometry; });
                if ((geometries === null || geometries === void 0 ? void 0 : geometries.length) > 0) {
                    panToActionValue = {
                        type: 'pan-to-geometries',
                        geometries
                    };
                }
                else {
                    panToActionValue = {
                        type: 'pan-to-layer',
                        dataSourceId: ((_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.id) || null
                    };
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', panToActionValue);
                return true;
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L2RhdGEtYWN0aW9ucy9wYW4tdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFJZjtBQUl3STtBQUVuSixTQUFlLHFCQUFxQixDQUFFLFdBQThDLEVBQUUsa0JBQTZEOztRQUN4SixNQUFNLGdCQUFnQixHQUFHLEVBQUU7UUFDM0Isa0JBQWtCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0RSxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQztZQUN4RSxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNwRCxPQUFNO2FBQ1A7WUFDRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlGLENBQUMsQ0FBQztRQUVGLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxPQUFPLElBQUk7U0FDWjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSxrQkFBa0IsQ0FBRSxXQUE4QyxFQUFFLHNCQUFpRTs7UUFDekosTUFBTSxjQUFjLEdBQUcsRUFBRTtRQUN6QixzQkFBc0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDO1lBQ3hFLElBQUksS0FBSyxFQUFFO2dCQUNULFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsY0FBYyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDL0Y7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSTtTQUNaO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztDQUFBO0FBRUQsU0FBZSxrQkFBa0IsQ0FBRSxXQUE4QyxFQUFFLFVBQTZCLEVBQUUsT0FBZTs7UUFDL0gsT0FBTyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLE9BQU8sbUVBQXNCLENBQUM7Z0JBQzVCLDBCQUEwQjthQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNoQixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDZDtxQkFBTTtvQkFDTCw2Q0FBNkM7b0JBQzdDLElBQUksWUFBd0MsQ0FBQztvQkFDN0MsMkJBQTJCO29CQUMzQixDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQztvQkFFekIsTUFBTSxtQkFBbUIsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQVk7b0JBQy9ELE1BQU0sb0JBQW9CLEdBQUcsRUFBRTtvQkFDL0IsTUFBTSxRQUFRLEdBQUcsRUFBRTtvQkFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzFELE1BQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSTt3QkFDOUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDdEM7b0JBRUQsTUFBTSxxQkFBcUIsR0FBRyxFQUFFO29CQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUNuRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDakIsTUFBTSxVQUFVLEdBQUc7Z0NBQ2pCLFNBQVMsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO2dDQUN4QixLQUFLLEVBQUUsR0FBRzs2QkFDWDs0QkFDRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3lCQUN2QztxQkFDRjtvQkFFRCxNQUFNLGNBQWMsR0FBRyxFQUFFO29CQUN6QixVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTt3QkFDN0MsTUFBTSxXQUFXLEdBQUcsT0FBTzt3QkFDM0IsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFOzRCQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxVQUFVLEVBQUU7Z0NBQ3hDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7NkJBQ3BFOzRCQUVELFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUs7eUJBQ3RDOzZCQUFNOzRCQUNMLFdBQVcsQ0FBQyxVQUFVLEdBQUc7Z0NBQ3ZCLE1BQU0sRUFBRSxLQUFLOzZCQUNkO3lCQUNGO3dCQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNsQyxDQUFDLENBQUM7b0JBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUM7d0JBQzdCLEVBQUUsRUFBRSxPQUFPO3dCQUNYLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO3dCQUNoQyxNQUFNLEVBQUUsY0FBYzt3QkFDdEIsTUFBTSxFQUFFLG9CQUFvQjt3QkFDNUIsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO3dCQUNoQixhQUFhLEVBQUUsUUFBUTt3QkFDdkIsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFFBQVE7d0JBQ3RDLFlBQVksRUFBRSxJQUFJO3dCQUNsQixhQUFhLEVBQUU7NEJBQ2IsS0FBSyxFQUFFLGFBQWE7NEJBQ3BCLE9BQU8sRUFBRSxDQUFDO29DQUNSLElBQUksRUFBRSxRQUFRO29DQUNkLFVBQVUsRUFBRSxxQkFBcUI7aUNBQ2xDLENBQUM7eUJBQ0g7cUJBQ0YsQ0FBQztvQkFFRixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBRTFCLEtBQUssQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDO2lCQUNIO1lBQ0gsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsU0FBUyxrQkFBa0IsQ0FBRSxLQUFtQjtJQUM5Qyx3REFBd0Q7SUFDeEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDNUIsT0FBTztRQUNMLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzNFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztRQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7S0FDVjtBQUNWLENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBRSxXQUE4QyxFQUFFLE1BQWlFLEVBQUUsT0FBZ0I7SUFDaEsscUVBQXFFO0lBQ3JFLElBQUksY0FBYyxHQUFHLE9BQU87SUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJO0lBQzNCLElBQUksV0FBVyxHQUFHLElBQUk7SUFFdEIsc0RBQXNEO0lBQ3RELElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDbkIsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFO1lBQzNCLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFtQjtTQUMxQzthQUFNO1lBQ0wsV0FBVyxHQUFHLE1BQXdCO1NBQ3ZDO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDZixjQUFjLEdBQUcsV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDM0Q7S0FDRjtJQUVELElBQUksY0FBYyxFQUFFO1FBQ2xCLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxhQUFhO1FBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLGNBQWMsRUFBRTtnQkFDdkQsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUVELElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsT0FBTztnQkFDTCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDM0M7U0FDRjthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtBQUNILENBQUM7QUFFTSxTQUFlLHFCQUFxQixDQUFFLElBQXVDLEVBQUUsT0FBd0I7O1FBQzVHLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7UUFDcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUU3RCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSx3QkFBd0IsQ0FBRSxJQUF1QyxFQUFFLFVBQTRCOztRQUNuSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztRQUM1RCwyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO0lBQzVCLENBQUM7Q0FBQTtBQUVNLFNBQVMsc0JBQXNCLENBQUUsU0FBMkIsRUFBRSxNQUErQjs7SUFDbEcsTUFBTSxHQUFHLEdBQUcsZUFBUyxDQUFDLGNBQWMsMENBQUUsZ0JBQWdCO0lBRXRELElBQUksR0FBRyxJQUFJLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNyRCxPQUFPLElBQUk7S0FDWjtJQUVELE1BQU0sR0FBRyxHQUFHLHFCQUFTLENBQUMsTUFBTSwwQ0FBRSxRQUFRLDBDQUFFLGdCQUFnQjtJQUV4RCxJQUFJLEdBQUcsSUFBSSw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDckQsT0FBTyxJQUFJO0tBQ1o7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRU0sU0FBUyw2QkFBNkIsQ0FBRSxHQUE0QixFQUFFLEdBQTRCO0lBQ3ZHLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUN2RCxrRkFBa0Y7SUFDbEYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN2RixPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTTtBQUMzQixDQUFDO0FBRU0sU0FBZSxnQkFBZ0IsQ0FBRSxVQUE0QixFQUFFLE1BQStCOzs7UUFDbkcsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRTtRQUNwQyxNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYztRQUMvQyxNQUFNLGFBQWEsR0FBRyxlQUFTLENBQUMsTUFBTSwwQ0FBRSxRQUFRO1FBRWhELE1BQU0sbUJBQW1CLEdBQXNCLEVBQUU7UUFDakQsSUFBSSx1QkFBdUIsR0FBWSxLQUFLO1FBQzVDLElBQUksdUJBQXVCLEdBQVksS0FBSztRQUU1QyxJQUFJLGNBQWMsSUFBSSw2QkFBNkIsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDNUYsdUJBQXVCLEdBQUcsSUFBSTtZQUM5QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxhQUFhLElBQUksNkJBQTZCLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFGLHVCQUF1QixHQUFHLElBQUk7WUFDOUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN4QztRQUVELElBQUksbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxNQUFNLG1CQUFtQixHQUFHLE1BQU0saUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDO1lBRWhGLElBQUksdUJBQXVCLEVBQUU7Z0JBQzNCLFNBQVMsQ0FBQyxjQUFjLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBRUQsSUFBSSx1QkFBdUIsRUFBRTtnQkFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBaUI7YUFDaEc7U0FDRjtRQUVELE9BQU8sU0FBUzs7Q0FDakI7QUFFTSxTQUFlLFFBQVEsQ0FBRSxXQUE4QyxFQUFFLE1BQy9COztRQUMvQyxNQUFNLFdBQVcsR0FBRyxNQUFhO1FBQ2pDLE1BQU0sZUFBZSxHQUFHLFdBQWtCO1FBQzFDLElBQUksV0FBVyxZQUFZLEtBQUssRUFBRTtZQUNoQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUFFLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUFDLE9BQU07YUFBRTtZQUVqRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLE1BQU0sV0FBVyxHQUFzQixFQUFFO2dCQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0MsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO2lCQUMxQztnQkFFRCxNQUFNLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO29CQUNyRCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtvQkFDdEQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLENBQUMsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQTJCO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUQ7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQWUsSUFBSSxDQUFFLElBQXVDLEVBQUUsTUFBVzs7UUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQywyRUFBMkU7WUFDM0UsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxtR0FBbUc7Z0JBQ25HLDhHQUE4RztnQkFDOUcsc0JBQXNCO2dCQUN0QixxREFBcUQ7Z0JBQ3JELG1CQUFtQjtnQkFDbkIscUVBQXFFO2dCQUNyRSx3QkFBd0I7Z0JBQ3hCLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGlFQUFpRTtnQkFDakUsR0FBRztnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDVCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxTQUFlLG1CQUFtQixDQUFFLFVBQTZCOztRQUMvRCxPQUFPLE1BQU0sbUVBQXNCLENBQUM7WUFDbEMsc0JBQXNCO1NBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTSxPQUFPLEVBQUMsRUFBRTtZQUN0QiwyQkFBMkI7WUFDM0IsSUFBSSxNQUE0QixDQUFDO1lBQ2pDLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTztZQUVsQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ25DO1lBRUQsSUFBSSxVQUFVLEdBQWtCLElBQUk7WUFDcEMsSUFBSSxLQUFLO1lBQ1QsTUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU07WUFFdkMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzlDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsU0FBUTtpQkFDVDtnQkFFRCxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtnQkFFNUIsSUFBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDeEMsTUFBTSxhQUFhLEdBQUcsUUFBZTtvQkFFckMsSUFBSSxhQUFhLENBQUMsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUU7d0JBQ3RDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQzs0QkFDbEIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7NEJBQ3JCLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQzs0QkFDckIsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLGdCQUFnQjt5QkFDakQsQ0FBQztxQkFDSDtpQkFDRjtnQkFFRCxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLFNBQVE7aUJBQ1Q7Z0JBRUQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUN0QztxQkFBTTtvQkFDTCxVQUFVLEdBQUcsTUFBTTtpQkFDcEI7YUFDRjtZQUVELElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNuQztZQUVELE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxDQUFDLEVBQUM7SUFDSixDQUFDO0NBQUE7QUFFTSxTQUFlLHFCQUFxQixDQUFFLFdBQXdCLEVBQUUsdUJBQStCLEVBQUUsUUFBZ0I7O1FBQ3RILElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM1QixPQUFNO1NBQ1A7UUFFRCxNQUFNLFVBQVUsR0FBRyxvRUFBNkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztRQUV6RixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTTtTQUNQO1FBRUQsSUFBSSxhQUFhLEdBQWtCLElBQUk7UUFFdkMsSUFBSTtZQUNGLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUM7U0FDbEY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWEsR0FBRyxJQUFJO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztTQUN6RTtRQUVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLGdFQUF1QixJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssOERBQXFCLENBQUMsRUFBRTtZQUMzSSxhQUEyRCxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztTQUMvRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQVMsYUFBYSxDQUFFLFdBQVcsRUFBRSxRQUFRO0lBQzNDLE9BQU8sbUVBQXNCLENBQUM7UUFDNUIseUJBQXlCO0tBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxLQUEwQixDQUFDO1FBQy9CLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTztRQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN6QixLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVE7UUFDdEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7UUFDM0IsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4RCxPQUFPLFVBQVU7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUUsV0FBd0IsRUFBRSxRQUFnQixFQUFFLGlCQUF1QztJQUMvRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBNEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDeEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDaEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZFLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO29CQUNsRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDMUQ7WUFDSCxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtTQUFNO1FBQ0wsbUVBQXNCLENBQUM7WUFDckIsMEJBQTBCO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEIsSUFBSSxZQUF3QyxDQUFDO1lBQzdDLENBQUMsWUFBWSxDQUFDLEdBQUcsT0FBTztZQUV4QixJQUFJLGdCQUFnQixHQUFHLElBQUksWUFBWSxDQUFDO2dCQUN0QyxHQUFHLEVBQUUsb0VBQTZCLENBQUUsaUJBQStELENBQUMsS0FBSyxDQUFDO2FBQzNHLENBQUM7WUFDRixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNoQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDdkUsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt3QkFDbkUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7cUJBQzFEO2dCQUNILENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQztBQUVELElBQUkscUJBQXFCLEdBQUcsSUFBSTtBQUNoQyxTQUFTLGlCQUFpQixDQUFFLFdBQXdCLEVBQUUsUUFBZ0IsRUFBRSxpQkFBcUM7O0lBQzNHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUM1QixJQUFJLGNBQWMsR0FBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUk7UUFDcEUsbUJBQW1CO1FBQ25CLGFBQWEsQ0FBQyxvQkFBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLEtBQUssMENBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNoRixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkUsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxhQUFhO2dCQUN4RCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBRXZGLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsTUFBTSxhQUFhLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3ZDLE1BQU0sd0JBQXdCLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBRWxFLE1BQU0sS0FBSyxHQUFHO29CQUNaLElBQUksQ0FBQyxHQUFHLGFBQWEsRUFBRTt3QkFDckIsQ0FBQyxFQUFFO3dCQUNILElBQUksY0FBYyxFQUFFOzRCQUNsQixjQUFjLEdBQUcsSUFBSTs0QkFDckIsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQzNELHFCQUFxQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sRUFBRTs0QkFDdkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7eUJBQzVEOzZCQUFNOzRCQUNMLGNBQWMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs0QkFDbkMsbUJBQW1COzRCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTs0QkFDN0QscUJBQXFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxFQUFFOzRCQUN2RCxxQkFBcUIsR0FBRyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQzt5QkFDNUQ7d0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7cUJBQ3ZCO3lCQUFNO3dCQUNMLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCO3dCQUM1RCxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7cUJBQ3hEO2dCQUNILENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7YUFDdkI7UUFDSCxDQUFDLENBQUM7S0FDSDtBQUNILENBQUM7QUFFTSxTQUFlLG9CQUFvQixDQUFFLFdBQXdCLEVBQUUsaUJBQXlCLEVBQUUsUUFBZ0I7O1FBQy9HLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixPQUFNO1NBQ1A7UUFFRCxNQUFNLFVBQVUsR0FBRyxvRUFBNkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUVuRixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTTtTQUNQO1FBRUQsSUFBSSxhQUFhLEdBQWtCLElBQUk7UUFFdkMsSUFBSTtZQUNGLGFBQWEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUM7U0FDbEY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLGFBQWEsR0FBRyxJQUFJO1lBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQztTQUN6RTtRQUVELElBQUksYUFBYSxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDeEMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLGdFQUF1QixFQUFFO2dCQUNsRCxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQXFDLENBQUM7YUFDbEY7aUJBQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLDhEQUFxQixFQUFFO2dCQUN2RCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQW1DLENBQUM7YUFDOUU7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUVELFNBQVMsVUFBVSxDQUFFLFdBQThDLEVBQUUsUUFBMEIsRUFBRSxNQUFNO0lBQ3JHLG1FQUFzQixDQUFDO1FBQ3JCLGNBQWM7S0FDZixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ2hCLDJCQUEyQjtRQUMzQixJQUFJLE9BQThCLENBQUM7UUFDbkMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO1FBRW5CLE1BQU0sYUFBYSxHQUFHLFVBQVUsUUFBMEIsRUFBRSxhQUFxQjtZQUMvRSxNQUFNLFFBQVEsR0FBRyxFQUFFO1lBQ25CLElBQUksVUFBVSxHQUFHLENBQUM7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDO29CQUM5QixRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQzlCLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtpQkFDbkMsQ0FBQztnQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMzQjtZQUVELE1BQU0sV0FBVyxHQUFHO2dCQUNsQixXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN6QyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUM7b0JBQzNCLElBQUksVUFBVSxHQUFHLGFBQWEsRUFBRTt3QkFDOUIsVUFBVSxDQUFDLEdBQUcsRUFBRTs0QkFDZCxXQUFXLEVBQUU7d0JBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztxQkFDUjtnQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1QsQ0FBQztZQUVELFdBQVcsRUFBRTtRQUNmLENBQUM7UUFFRCxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUUsWUFBb0I7SUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbEQsT0FBTztZQUNMLElBQUksRUFBRSxlQUFlO1lBQ3JCLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGO0tBQ0Y7U0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzlDLE9BQU87WUFDTCxJQUFJLEVBQUUsYUFBYTtZQUNuQixLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDekIsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTztTQUNmO0tBQ0Y7U0FBTSxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUN2RCxPQUFPO1lBQ0wsSUFBSSxFQUFFLGFBQWE7WUFDbkIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDekIsS0FBSyxFQUFFLENBQUM7YUFDVDtTQUNGO0tBQ0Y7U0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzFDLE9BQU87WUFDTCxJQUFJLEVBQUUsU0FBUztZQUNmLFlBQVksRUFBRSxDQUFDO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2lCQUN4QyxDQUFDO1NBQ0g7S0FDRjtTQUFNO1FBQ0wsT0FBTyxJQUFJO0tBQ1o7QUFDSCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUUsUUFBeUI7SUFDaEQsMERBQTBEO0lBQzFELFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtRQUNyQixLQUFLLE9BQU87WUFDVixPQUFPLFFBQXdCO1FBQ2pDLEtBQUssUUFBUTtZQUNYLE9BQVEsUUFBMEIsQ0FBQyxNQUFNO1FBQzNDLEtBQUssU0FBUztZQUNaLE9BQVEsUUFBMkIsQ0FBQyxRQUFRO1FBQzlDLEtBQUssVUFBVTtZQUNiLE9BQVEsUUFBNEIsQ0FBQyxNQUFNLENBQUMsTUFBTTtRQUNwRDtZQUNFLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ3pFLE9BQU87S0FDUjtBQUNILENBQUM7QUFFTSxTQUFTLGFBQWEsQ0FBRSxPQUFrQyxFQUFFLE9BQWtDO0lBQ25HLElBQUksV0FBVyxHQUFHLElBQUk7SUFDdEIsSUFBSyxPQUFlLENBQUMsS0FBSyxFQUFFO1FBQzFCLFdBQVcsR0FBSSxPQUFlLENBQUMsS0FBSyxFQUFFO0tBQ3ZDO1NBQU07UUFDTCxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxXQUFXLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDL0Q7SUFDRCxPQUFPLFdBQVc7QUFDcEIsQ0FBQztBQUVNLFNBQWUsaUJBQWlCLENBQUUsVUFBNkIsRUFBRSxnQkFBeUM7O1FBQy9HLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzFELGdCQUFnQixDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUU7WUFDNUgsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUNuRixpRkFBaUY7WUFDakYsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtZQUNuRixpRkFBaUY7WUFDakYsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLE1BQU0sOEVBQXVDLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1NBQ25GO0lBQ0gsQ0FBQztDQUFBO0FBRU0sU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLEtBQVUsRUFBRSxRQUEwQjs7UUFDakksSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksUUFBUSxFQUFFO1lBQ3hGLE9BQU8sTUFBTSxtRUFBc0IsQ0FBQztnQkFDbEMseUJBQXlCO2FBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU87Z0JBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUN6QixLQUFLLENBQUMsY0FBYyxHQUFHLElBQUk7Z0JBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRixPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sTUFBTSxFQUFFLEVBQUU7b0JBQ3RELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTt3QkFDM0UsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztxQkFDOUM7eUJBQU07d0JBQ0wsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3FCQUN2QztnQkFDSCxDQUFDLEdBQUUsR0FBUyxFQUFFO29CQUNaLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDeEMsQ0FBQyxFQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUN2QztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQVMsV0FBVyxDQUFFLE9BQWdCO0lBQzNDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7UUFDakMsSUFBSSxPQUFPLEtBQUsscURBQWMsRUFBRTtZQUM5QixPQUFPLEtBQUs7U0FDYjthQUFNO1lBQ0wsT0FBTyxJQUFJO1NBQ1o7S0FDRjtTQUFNO1FBQ0wsT0FBTyxJQUFJO0tBQ1o7QUFDSCxDQUFDO0FBRU0sU0FBUywwQkFBMEIsQ0FBRSxhQUF1QjtJQUNqRSxNQUFNLGFBQWEsR0FBRyxFQUFFO0lBQ3hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDbkMsTUFBTSxVQUFVLEdBQUcsb0VBQTZCLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUErQjtRQUM1RyxJQUFJLFlBQVk7UUFDaEIsSUFBSSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsS0FBSyxFQUFFO1lBQ3JCLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDakQ7YUFBTSxJQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSw0QkFBNEIsRUFBRTtZQUNuRCxZQUFZLEdBQUcsVUFBVSxDQUFDLDRCQUE0QixFQUFFO1NBQ3pEO2FBQU07WUFDTCxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDckM7UUFDRCxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ25DLENBQUM7QUFFTSxTQUFTLGdCQUFnQixDQUFFLFFBQWdCLEVBQUUsWUFBb0I7SUFDdEUsa0VBQWtFO0lBQ2xFLE1BQU0sSUFBSSxHQUFHLFlBQVksSUFBSSxFQUFFO0lBQy9CLE9BQU8sR0FBRyxRQUFRLElBQUksSUFBSSxFQUFFO0FBQzlCLENBQUM7QUFFTSxTQUFTLHFCQUFxQixDQUFFLFdBQW9CO0lBQ3pELE1BQU0sRUFDSixZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixxQkFBcUIsRUFDckIsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsU0FBUyxFQUNULE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLElBQUksRUFDSixvQkFBb0IsRUFDcEIsS0FBSyxFQUNMLFNBQVMsRUFDVCxxQkFBcUIsRUFDdEIsR0FBRyxXQUFXO0lBRWYsT0FBTztRQUNMLFlBQVk7UUFDWixLQUFLO1FBRUwsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1QsT0FBTztRQUNQLE9BQU87UUFDUCxTQUFTO1FBQ1QsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsTUFBTTtRQUNOLE1BQU07UUFDTixRQUFRO1FBQ1IsS0FBSztRQUVMLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsSUFBSTtRQUNKLG9CQUFvQjtRQUNwQixLQUFLO1FBRUwsU0FBUztRQUNULHFCQUFxQjtLQUN0QjtBQUNILENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBRSxXQUFvQixFQUFFLFdBQStCO0lBQ25GLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBRXJDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQztBQUVNLFNBQVMsZ0NBQWdDLENBQUUsU0FBaUIsRUFBRSxTQUFpQjtJQUNwRixJQUFJLFNBQVMsSUFBSSxTQUFTLEVBQUU7UUFDMUIsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sV0FBVyxHQUFhLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztZQUN4RCxNQUFNLFdBQVcsR0FBRywrREFBd0I7WUFFNUMsSUFBSSw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO2dCQUM3Riw0QkFBNEIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQy9GLE9BQU8sSUFBSTthQUNaO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxTQUFTLGlDQUFpQyxDQUFFLG1CQUEyQixFQUFFLGNBQXNCLEVBQUUsV0FBd0I7SUFDOUgsSUFBSSxtQkFBbUIsSUFBSSxjQUFjLEVBQUU7UUFDekMsTUFBTSxjQUFjLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjO1FBRXhFLElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sV0FBVyxHQUFhLENBQUMsZUFBZSxDQUFDO1lBRS9DLE9BQU8sNEJBQTRCLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO1NBQ25IO0tBQ0Y7SUFFRCxPQUFPLEtBQUs7QUFDZCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FDbkMsbUJBQTJCLEVBQzNCLGNBQXNCLEVBQ3RCLGNBQTZDLEVBQzdDLFdBQXdCLEVBQ3hCLFdBQXFCO0lBRXJCLElBQUksY0FBYyxFQUFFO1FBQ2xCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFFdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFFdkMsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLG1CQUFtQixJQUFJLFdBQVcsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFO2dCQUMzRixNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTztnQkFFbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBRXpCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxjQUFjLEVBQUU7d0JBQ3RDLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUU7NEJBQzNDLE9BQU8sSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sS0FBSztBQUNkLENBQUM7Ozs7Ozs7Ozs7O0FDL3lCRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0s7QUFDcEg7QUFDSjtBQUdqQyxNQUFNLEtBQU0sU0FBUSx5REFBa0I7SUFDN0MsV0FBVyxDQUFFLE9BQXNCOzs7WUFDdkMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87WUFDM0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQTBDO1lBQ3JFLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLGdFQUF5QixFQUFFO2dCQUN2RSxPQUFPLEtBQUs7YUFDYjtZQUNELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUksVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGtCQUFrQixNQUFJLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxrQkFBa0IsRUFBRSxHQUFFO2dCQUM1RixrQkFBa0I7Z0JBQ2xCLE9BQU8sSUFBSTthQUNaO2lCQUFNLElBQUksY0FBTyxDQUFDLE9BQU8sMENBQUUsTUFBTSxNQUFLLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxPQUFDLE9BQU8sQ0FBQyxVQUF5QywwQ0FBRSw0QkFBNEI7aUJBQ2xGLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxrQkFBa0IsTUFBSSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsa0JBQWtCLEVBQUUsR0FBRTtnQkFDN0UsZUFBZTtnQkFDZixPQUFPLElBQUk7YUFDWjtpQkFBTTtnQkFDTCxPQUFPLEtBQUs7YUFDYjs7S0FDRjtJQUVLLFNBQVMsQ0FBRSxPQUFzQjs7WUFDckMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87WUFDM0IsT0FBTyxtRUFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztnQkFDN0QsSUFBSSxPQUFPLEdBQThCLElBQUksQ0FBQztnQkFDOUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO2dCQUNuQixJQUFJLGdCQUFnQixHQUEyRCxJQUFJO2dCQUNuRixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQUMsMEVBQWEsQ0FBRSxNQUE0QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsMENBQUUsUUFBUSxJQUFDO2dCQUVqSCxJQUFJLFdBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxNQUFNLElBQUcsQ0FBQyxFQUFFO29CQUMxQixnQkFBZ0IsR0FBRzt3QkFDakIsSUFBSSxFQUFFLG1CQUFtQjt3QkFDekIsVUFBVTtxQkFDWDtpQkFDRjtxQkFBTTtvQkFDTCxnQkFBZ0IsR0FBRzt3QkFDakIsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFlBQVksRUFBRSxjQUFPLENBQUMsVUFBVSwwQ0FBRSxFQUFFLEtBQUksSUFBSTtxQkFDN0M7aUJBQ0Y7Z0JBQ0Qsc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO2dCQUM3RyxPQUFPLElBQUk7WUFDYixDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvcnVudGltZS91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy1tYXAtMTEyL3NyYy9kYXRhLWFjdGlvbnMvcGFuLXRvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xyXG5pbXBvcnQge1xyXG4gIEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscywgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgSlNBUElMYXllck1peGluLCBnZW9tZXRyeVV0aWxzLFxyXG4gIGdldEFwcFN0b3JlLCB0eXBlIE1lc3NhZ2VzSnNvbiwgdHlwZSBJbW11dGFibGVPYmplY3QsIE1lc3NhZ2VUeXBlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEhpZ2hMaWdodEhhbmRsZSwgdHlwZSBNYXBiYXNlUmVzdG9yZURhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHR5cGUgTWFwQmFzZSBmcm9tICcuL2NvbXBvbmVudHMvbWFwYmFzZSdcclxuaW1wb3J0IHsgdHlwZSBJRmVhdHVyZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCB0eXBlIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCB0eXBlIEppbXVGZWF0dXJlTGF5ZXJWaWV3LCB0eXBlIEppbXVTY2VuZUxheWVyVmlldywgdHlwZSBKaW11TGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3RmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBuZXdMYXllclByb21pc2VzID0gW11cclxuICBuZXdGZWF0dXJlU2V0VmFsdWUgJiYgT2JqZWN0LmtleXMobmV3RmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgY29uc29sZS53YXJuKCd0aGUgZmVhdHVyZSBsYXllciBpcyBhbHJlYWR5IGNyZWF0ZWQnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIG5ld0xheWVyUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIG5ld0ZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgfSlcclxuXHJcbiAgaWYgKG5ld0xheWVyUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3TGF5ZXJQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVGZWF0dXJlbGF5ZXIgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWU/OiB7IFtsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldCB9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXHJcbiAgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VkRmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgbWFwQmFzZVZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEZlYXR1cmVTZXRUb01hcCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZVNldDogX19lc3JpLkZlYXR1cmVTZXQsIGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XHJcbiAgICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xyXG5cclxuICAgICAgICBjb25zdCBsYXllckZyb21GZWF0dXJlU2V0ID0gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5sYXllciBhcyBhbnlcclxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXHJcbiAgICAgICAgY29uc3QgZmllbGRNYXAgPSB7fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0gZ2V0UmVhc29uYWJsZUZpZWxkKGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldKVxyXG4gICAgICAgICAgZmllbGRNYXBbbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0ubmFtZV0gPSBmaWVsZHNJdGVtLm5hbWVcclxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGRNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGRNYXBba2V5XSxcclxuICAgICAgICAgICAgICBsYWJlbDoga2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzSW5Qb3B1cFRlbXBsYXRlLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUZlYXR1cmVzID0gW11cclxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmVcclxuICAgICAgICAgIGlmICh0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkTWFwW2tleV1dID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMuZXhiZmlkID0gaW5kZXhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgZXhiZmlkOiBpbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzb3VyY2VGZWF0dXJlcy5wdXNoKHRlbXBGZWF0dXJlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICBpZDogbGF5ZXJJZCxcclxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxyXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VGZWF0dXJlcyxcclxuICAgICAgICAgIGZpZWxkczogZmllbGRzSW5GZWF0dXJlbGF5ZXIsXHJcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ2V4YmZpZCcsXHJcbiAgICAgICAgICByZW5kZXJlcjogbGF5ZXJGcm9tRmVhdHVyZVNldC5yZW5kZXJlcixcclxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpZWxkcycsXHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvczogZmllbGRzSW5Qb3B1cFRlbXBsYXRlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWFwQmFzZVZpZXcubWFwLmFkZChsYXllcilcclxuXHJcbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWFzb25hYmxlRmllbGQgKGZpZWxkOiBfX2VzcmkuRmllbGQpOiBfX2VzcmkuRmllbGQge1xyXG4gIC8vIHRoZSBmdW5jdGlvbiBpcyBzdXBwb3J0ZWQgdG8gbm9ybWFsaXplIHRoZSBmaWVsZC5uYW1lXHJcbiAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBmaWVsZE5hbWUucmVwbGFjZSgvXFwuL2csICdfJykucmVwbGFjZSgvXFwoL2csICdfJykucmVwbGFjZSgvXFwpL2csICdfJyksXHJcbiAgICBhbGlhczogZmllbGQuYWxpYXMsXHJcbiAgICB0eXBlOiBmaWVsZC50eXBlXHJcbiAgfSBhcyBhbnlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEZlYXR1cmUgKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdyYXBoaWMgfCBfX2VzcmkuR3JhcGhpY1tdIHwgSUZlYXR1cmUgfCBJRmVhdHVyZVtdLCBsYXllcklkPzogc3RyaW5nKTogSGlnaExpZ2h0SGFuZGxlIHtcclxuICAvLyBJbiB0aGlzIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBmZWF0dXJlcyBjb21lIGZyb20gdGhlIHNhbWUgbGF5ZXJcclxuICBsZXQgZmVhdHVyZUxheWVySWQgPSBsYXllcklkXHJcbiAgbGV0IGZlYXR1cmVMYXllclZpZXcgPSBudWxsXHJcbiAgbGV0IHRlbXBGZWF0dXJlID0gbnVsbFxyXG5cclxuICAvLyBpZiBsYXllcklkIGRvZXNuJ3QgZXhpc3QsIHdlIGdldCBsYXllcklkIGJ5IGZlYXR1cmVcclxuICBpZiAoIWZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXRbMF0gYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0IGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBGZWF0dXJlKSB7XHJcbiAgICAgIGZlYXR1cmVMYXllcklkID0gdGVtcEZlYXR1cmUubGF5ZXIgJiYgdGVtcEZlYXR1cmUubGF5ZXIuaWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgY29uc3QgbGF5ZXJWaWV3cyA9IG1hcEJhc2VWaWV3LmFsbExheWVyVmlld3NcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF5ZXJWaWV3cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAobGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSkubGF5ZXIuaWQgPT09IGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICAgICAgZmVhdHVyZUxheWVyVmlldyA9IGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxheWVySWQ6IGZlYXR1cmVMYXllcklkLFxyXG4gICAgICAgIGhhbmRsZTogZmVhdHVyZUxheWVyVmlldy5oaWdobGlnaHQodGFyZ2V0KVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9UYXJnZXRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICBjb25zdCB2aWV3U1IgPSB2aWV3LnNwYXRpYWxSZWZlcmVuY2VcclxuICBjb25zdCBnZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXMoW190YXJnZXRdLCB2aWV3U1IpXHJcblxyXG4gIGlmIChnZW9tZXRyaWVzICYmIGdlb21ldHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZ2VvbWV0cmllc1swXVxyXG4gICAgdmlldy5nb1RvKHRhcmdldCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9WaWV3cG9pbnRJbW1lZGlhdGVseSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBfdmlld3BvaW50OiBfX2VzcmkuVmlld3BvaW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3Qgdmlld1NSID0gdmlldy5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgY29uc3Qgdmlld3BvaW50ID0gYXdhaXQgcHJvamVjdFZpZXdwb2ludChfdmlld3BvaW50LCB2aWV3U1IpXHJcbiAgLy8gdmlldy5nb1RvKHZpZXdwb2ludCwgeyBhbmltYXRlOiBmYWxzZSB9KVxyXG4gIHZpZXcudmlld3BvaW50ID0gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05lZWRQcm9qZWN0Vmlld3BvaW50ICh2aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBzcjEgPSB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnk/LnNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgaWYgKHNyMSAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShzcjEsIHZpZXdTUikpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBjb25zdCBzcjIgPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvbj8uc3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBpZiAoc3IyICYmIGlzTmVlZFByb2plY3RTcGF0aWFsUmVmZXJlbmNlKHNyMiwgdmlld1NSKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UgKHNyMTogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UsIHNyMjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBib29sZWFuIHtcclxuICBjb25zdCBpc1NhbWUgPSBzcjEud2tpZCA9PT0gc3IyLndraWQgfHwgc3IxLmVxdWFscyhzcjIpXHJcbiAgLy8gIEluIEpTIEFQSSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gIGNvbnN0IGlzTGlrZSA9IChzcjEuaXNXZWJNZXJjYXRvciB8fCBzcjEuaXNXR1M4NCkgJiYgKHNyMi5pc1dlYk1lcmNhdG9yIHx8IHNyMi5pc1dHUzg0KVxyXG4gIHJldHVybiAhaXNTYW1lICYmICFpc0xpa2VcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2plY3RWaWV3cG9pbnQgKF92aWV3cG9pbnQ6IF9fZXNyaS5WaWV3cG9pbnQsIHZpZXdTUjogX19lc3JpLlNwYXRpYWxSZWZlcmVuY2UpOiBQcm9taXNlPF9fZXNyaS5WaWV3cG9pbnQ+IHtcclxuICBjb25zdCB2aWV3cG9pbnQgPSBfdmlld3BvaW50LmNsb25lKClcclxuICBjb25zdCB0YXJnZXRHZW9tZXRyeSA9IHZpZXdwb2ludC50YXJnZXRHZW9tZXRyeVxyXG4gIGNvbnN0IGNhbWVyYVBvc2l0b24gPSB2aWV3cG9pbnQuY2FtZXJhPy5wb3NpdGlvblxyXG5cclxuICBjb25zdCB0b1Byb2plY3RHZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgbGV0IGlzUHJvamVjdFRhcmdldEdlb21ldHJ5OiBib29sZWFuID0gZmFsc2VcclxuICBsZXQgaXNQcm9qZWN0Q2FtZXJhUG9zaXRpb246IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICBpZiAodGFyZ2V0R2VvbWV0cnkgJiYgaXNOZWVkUHJvamVjdFNwYXRpYWxSZWZlcmVuY2UodGFyZ2V0R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSwgdmlld1NSKSkge1xyXG4gICAgaXNQcm9qZWN0VGFyZ2V0R2VvbWV0cnkgPSB0cnVlXHJcbiAgICB0b1Byb2plY3RHZW9tZXRyaWVzLnB1c2godGFyZ2V0R2VvbWV0cnkpXHJcbiAgfVxyXG5cclxuICBpZiAoY2FtZXJhUG9zaXRvbiAmJiBpc05lZWRQcm9qZWN0U3BhdGlhbFJlZmVyZW5jZShjYW1lcmFQb3NpdG9uLnNwYXRpYWxSZWZlcmVuY2UsIHZpZXdTUikpIHtcclxuICAgIGlzUHJvamVjdENhbWVyYVBvc2l0aW9uID0gdHJ1ZVxyXG4gICAgdG9Qcm9qZWN0R2VvbWV0cmllcy5wdXNoKGNhbWVyYVBvc2l0b24pXHJcbiAgfVxyXG5cclxuICBpZiAodG9Qcm9qZWN0R2VvbWV0cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ZWRHZW9tZXRyaWVzID0gYXdhaXQgcHJvamVjdEdlb21ldHJpZXModG9Qcm9qZWN0R2VvbWV0cmllcywgdmlld1NSKVxyXG5cclxuICAgIGlmIChpc1Byb2plY3RUYXJnZXRHZW9tZXRyeSkge1xyXG4gICAgICB2aWV3cG9pbnQudGFyZ2V0R2VvbWV0cnkgPSBwcm9qZWN0ZWRHZW9tZXRyaWVzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzUHJvamVjdENhbWVyYVBvc2l0aW9uKSB7XHJcbiAgICAgIHZpZXdwb2ludC5jYW1lcmEucG9zaXRpb24gPSBwcm9qZWN0ZWRHZW9tZXRyaWVzW3Byb2plY3RlZEdlb21ldHJpZXMubGVuZ3RoIC0gMV0gYXMgX19lc3JpLlBvaW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmlld3BvaW50XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXBQYW50byAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkgfCBfX2VzcmkuR2VvbWV0cnlbXSB8XHJcbl9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IF9fZXNyaS5FeHRlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxyXG4gIGNvbnN0IHRlbXBCYXNlTWFwVmlldyA9IG1hcEJhc2VWaWV3IGFzIGFueVxyXG4gIGlmIChwYW5Ub1RhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSB7IGF3YWl0IFByb21pc2UucmVzb2x2ZSgpOyByZXR1cm4gfVxyXG5cclxuICAgIGlmIChwYW5Ub1RhcmdldFswXS5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeUFycjogX19lc3JpLkdlb21ldHJ5W10gPSBbXVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhblRvVGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ2VvbWV0cnlBcnIucHVzaChwYW5Ub1RhcmdldFtpXS5nZW9tZXRyeSlcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgZ2V0R2VvbWV0cmllc0V4dGVudChnZW9tZXRyeUFycikudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBleHRlbnQuY2VudGVyKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdldEdlb21ldHJpZXNFeHRlbnQocGFuVG9UYXJnZXQpLnRoZW4oKGV4dGVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XHJcbiAgICAgIHJldHVybiBnb1RvKHRlbXBCYXNlTWFwVmlldywgZ2V0Q2VudGVyUG9pbnQoZ2V0bWV0cnkpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGdvVG8odGVtcEJhc2VNYXBWaWV3LCBnZXRDZW50ZXJQb2ludChwYW5Ub1RhcmdldCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIGRlbGF5IGJlZm9yZSB1cGRhdGluZyBvZiB2aWV3IHR1cm5zIHRydWUsIDQwMG1zIGlzIGEgdGVtcG9yYXJ5IHNvbHV0aW9uLlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vLy8gdGhlcmUgaXMgYSBjb25mbGljdCBmb3IgcGFuaW5nIHdoZW4gdGhlIGxheWVyIHZpZXcgaXMgdXBkYXRpbmcsIHN1Y2ggYXMgJ3BhbiB0bycgYW5kICdmaWx0ZXInLlxyXG4gICAgICAvLy8vIHRoaXMgaXMgYSB0ZW1wb3Jhcnkgc29sdXRpb24sIGl0IGNhbiByZWR1Y2UgdGhlIGZyZXF1ZW5jeSBvZiB0aGUgcHJvYmxlbSByYXRoZXIgdGhhbiBzb2x2ZSBpdCBjb21wbGV0ZWx5LlxyXG4gICAgICAvL2lmICh2aWV3LnVwZGF0aW5nKSB7XHJcbiAgICAgIC8vICBjb25zdCBoYW5kbGVyID0gdmlldy53YXRjaCgndXBkYXRpbmcnLCB2YWx1ZSA9PiB7XHJcbiAgICAgIC8vICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgLy8gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vICAgICAgaGFuZGxlci5yZW1vdmUoKVxyXG4gICAgICAvLyAgICB9XHJcbiAgICAgIC8vICB9KVxyXG4gICAgICAvL30gZWxzZSB7XHJcbiAgICAgIC8vICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHJlc29sdmUoKSkuY2F0Y2goKCkgPT4gcmVqZWN0KCkpXHJcbiAgICAgIC8vfVxyXG4gICAgICB2aWV3LmdvVG8odGFyZ2V0KS50aGVuKCgpID0+IHsgcmVzb2x2ZSgpIH0pLmNhdGNoKCgpID0+IHsgcmVqZWN0KCkgfSlcclxuICAgIH0sIDQwMClcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9tZXRyaWVzRXh0ZW50IChnZW9tZXRyaWVzOiBfX2VzcmkuR2VvbWV0cnlbXSk6IFByb21pc2U8X19lc3JpLkV4dGVudD4ge1xyXG4gIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL2dlb21ldHJ5L0V4dGVudCdcclxuICBdKS50aGVuKGFzeW5jIG1vZHVsZXMgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBsZXQgRXh0ZW50OiB0eXBlb2YgX19lc3JpLkV4dGVudDtcclxuICAgIFtFeHRlbnRdID0gbW9kdWxlc1xyXG5cclxuICAgIGlmICghZ2VvbWV0cmllcyB8fCAhZ2VvbWV0cmllcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBmdWxsRXh0ZW50OiBfX2VzcmkuRXh0ZW50ID0gbnVsbFxyXG4gICAgbGV0IGluZGV4XHJcbiAgICBjb25zdCBudW1HZW9tZXRyaWVzID0gZ2VvbWV0cmllcy5sZW5ndGhcclxuXHJcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBudW1HZW9tZXRyaWVzOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpbmRleF1cclxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuXHJcbiAgICAgIGlmICghZXh0ZW50ICYmIGdlb21ldHJ5LnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgICAgICBjb25zdCBwb2ludEdlb21ldHJ5ID0gZ2VvbWV0cnkgYXMgYW55XHJcblxyXG4gICAgICAgIGlmIChwb2ludEdlb21ldHJ5LnggJiYgcG9pbnRHZW9tZXRyeS55KSB7XHJcbiAgICAgICAgICBleHRlbnQgPSBuZXcgRXh0ZW50KHtcclxuICAgICAgICAgICAgeG1heDogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB4bWluOiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHltYXg6IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgeW1pbjogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB6bWF4OiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHptaW46IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogcG9pbnRHZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFleHRlbnQpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZnVsbEV4dGVudCkge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBmdWxsRXh0ZW50LnVuaW9uKGV4dGVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZXh0ZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnVsbEV4dGVudC53aWR0aCA8IDAgJiYgZnVsbEV4dGVudC5oZWlnaHQgPCAwKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZ1bGxFeHRlbnQpXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZpbHRlckZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBhY3Rpb25MYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFhY3Rpb25MYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyICYmIChqaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IGppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xyXG4gICAgKGppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLnNldERlZmluaXRpb25FeHByZXNzaW9uKHF1ZXJ5U1FMKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlGZWF0dXJlcyAobGF5ZXJPYmplY3QsIHF1ZXJ5U1FMKSB7XHJcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XHJcbiAgICBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxyXG4gICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIHJldHVybiBmZWF0dXJlU2V0XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IGZlYXR1cmVMYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICBxdWVyeUZlYXR1cmVzKGZlYXR1cmVMYXllclZpZXcubGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcclxuICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xyXG5cclxuICAgICAgbGV0IHRlbXBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRlbXBGZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxubGV0IHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IG51bGxcclxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBzY2VuZUxheWVyVmlldzogX19lc3JpLlNjZW5lTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBxdWVyeUZlYXR1cmVzKHNjZW5lTGF5ZXJWaWV3Py5sYXllcj8uYXNzb2NpYXRlZExheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxyXG4gICAgICAgIGNvbnN0IG9iamVjdElkcyA9IGZlYXR1cmVTZXQuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdKVxyXG5cclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBjb25zdCBtYXhGbGFzaENvdW50ID0gNlxyXG4gICAgICAgIGxldCBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xyXG5cclxuICAgICAgICBjb25zdCBmbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IFswLCAwLCAwLCAwXSB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogaGlnaGxpZ2h0Q29sb3IgfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9uc1xyXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKCFsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGxheWVyRGF0YVNvdXJjZUlkKVxyXG5cclxuICBpZiAoIWRhdGFTb3VyY2UpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgbGV0IGppbXVMYXllclZpZXc6IEppbXVMYXllclZpZXcgPSBudWxsXHJcblxyXG4gIHRyeSB7XHJcbiAgICBqaW11TGF5ZXJWaWV3ID0gYXdhaXQgamltdU1hcFZpZXcud2hlbkppbXVMYXllclZpZXdMb2FkZWRCeURhdGFTb3VyY2UoZGF0YVNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGppbXVMYXllclZpZXcgPSBudWxsXHJcbiAgICBjb25zb2xlLmVycm9yKCdjYW5cXCd0IGdldCBqaW11TGF5ZXJWaWV3IGJ5IGRhdGFTb3VyY2UnLCBkYXRhU291cmNlLCBlcnIpXHJcbiAgfVxyXG5cclxuICBpZiAoamltdUxheWVyVmlldyAmJiBqaW11TGF5ZXJWaWV3LmxheWVyKSB7XHJcbiAgICBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xyXG4gICAgICBmbGFzaE9uRmVhdHVyZUxheWVyKGppbXVNYXBWaWV3LCBxdWVyeVNRTCwgamltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldylcclxuICAgIH0gZWxzZSBpZiAoamltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLlNjZW5lTGF5ZXIpIHtcclxuICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCBqaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Rmxhc2ggKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBzeW1ib2wpIHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL0dyYXBoaWMnXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYztcclxuICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICBjb25zdCBmbGFzaEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBtYXhGbGFzaENvdW50OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXVxyXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlbXBHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxyXG4gICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlc1tpXS5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBncmFwaGljcy5wdXNoKHRlbXBHcmFwaGljKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaW5nbGVGbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5hZGRNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MucmVtb3ZlTWFueShncmFwaGljcylcclxuICAgICAgICAgIGZsYXNoQ291bnQgPSBmbGFzaENvdW50ICsgMVxyXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfVxyXG5cclxuICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZsYXNoRmVhdHVyZXMoZmVhdHVyZXMsIDMpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XHJcbiAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICBzaXplOiAnMTZweCcsXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWxpbmUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICB3aWR0aDogMyxcclxuICAgICAgc3R5bGU6ICdzb2xpZCdcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcclxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydtZXNoJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ21lc2gtM2QnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IE1lc2hTeW1ib2wzRCgpXHJcbiAgICAgIHN5bWJvbExheWVyczogW3tcclxuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxyXG4gICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0gfVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xyXG4gIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcclxuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcclxuICAgIGNhc2UgJ3BvaW50JzpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgY2FzZSAnZXh0ZW50JzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcclxuICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZFxyXG4gICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcclxuICAgIC8vIHRvZG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGZWF0dXJlIChmZWF0dXJlOiBJRmVhdHVyZSB8IF9fZXNyaS5HcmFwaGljLCBHcmFwaGljOiBfX2VzcmkuR3JhcGhpY0NvbnN0cnVjdG9yKTogX19lc3JpLkdyYXBoaWMge1xyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuICBpZiAoKGZlYXR1cmUgYXMgYW55KS5jbG9uZSkge1xyXG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcEZlYXR1cmUgPSBHcmFwaGljLmZyb21KU09OKE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUpKVxyXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcclxuICB9XHJcbiAgcmV0dXJuIHRlbXBGZWF0dXJlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0R2VvbWV0cmllcyAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10sIHNwYXRpYWxSZWZlcmVuY2U6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuR2VvbWV0cnlbXT4ge1xyXG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZS53a2lkID09PSBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2Uud2tpZCB8fCAoc3BhdGlhbFJlZmVyZW5jZS5lcXVhbHMoZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlKSkpIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VvbWV0cnlVdGlscy5wcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKGdlb21ldHJpZXMsIHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1pvb21Ub0ZlYXR1cmVzIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBsYXllcjogYW55LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSk6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xyXG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcclxuICAgIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxyXG4gICAgICBxdWVyeS5vYmplY3RJZHMgPSBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbbGF5ZXIub2JqZWN0SWRGaWVsZF0pXHJcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWF0dXJlcyAmJiByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSBmZWF0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0LmZlYXR1cmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XHJcbiAgICBpZiAoYXBwTW9kZSA9PT0gQXBwTW9kZS5EZXNpZ24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExheWVyc0Zyb21EYXRhU291cmNlSWRzIChkYXRhU291cmNlSWRzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgZGF0YVNvdXJjZUlkcy5mb3JFYWNoKGRhdGFTb3VyY2VJZCA9PiB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRhdGFTb3VyY2VJZCkgYXMgdW5rbm93biBhcyBKU0FQSUxheWVyTWl4aW5cclxuICAgIGxldCBsYXllclByb21pc2VcclxuICAgIGlmIChkYXRhU291cmNlPy5sYXllcikge1xyXG4gICAgICBsYXllclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZGF0YVNvdXJjZS5sYXllcilcclxuICAgIH0gZWxzZSBpZiAoZGF0YVNvdXJjZT8uY3JlYXRlSlNBUElMYXllckJ5RGF0YVNvdXJjZSkge1xyXG4gICAgICBsYXllclByb21pc2UgPSBkYXRhU291cmNlLmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF5ZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcbiAgICBsYXllclByb21pc2VzLnB1c2gobGF5ZXJQcm9taXNlKVxyXG4gIH0pXHJcbiAgcmV0dXJuIFByb21pc2UuYWxsKGxheWVyUHJvbWlzZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRKaW11TWFwVmlld0lkICh3aWRnZXRJZDogc3RyaW5nLCBkYXRhU291cmNlSWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gSWYgZGF0YVNvdXJjZUlkIGlzIG51bGwsIG1ha2Ugc3VyZSBpdCBjb252ZXJ0cyB0byBlbXB0eSBzdHJpbmcuXHJcbiAgY29uc3QgZHNJZCA9IGRhdGFTb3VyY2VJZCB8fCAnJ1xyXG4gIHJldHVybiBgJHt3aWRnZXRJZH0tJHtkc0lkfWBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEJhc2VSZXN0b3JlRGF0YSAobWFwSW5zdGFuY2U6IE1hcEJhc2UpOiBNYXBiYXNlUmVzdG9yZURhdGEge1xyXG4gIGNvbnN0IHtcclxuICAgIG1hcENvbnRhaW5lcixcclxuICAgIHN0YXRlLFxyXG4gICAgR2VvbWV0cnksXHJcbiAgICBJbml0aWFsVmlld1Byb3BlcnRpZXMsXHJcbiAgICBUaWxlTGF5ZXIsXHJcbiAgICBCYXNlbWFwLFxyXG4gICAgTWFwVmlldyxcclxuICAgIFNjZW5lVmlldyxcclxuICAgIEV4dGVudCxcclxuICAgIFZpZXdwb2ludCxcclxuICAgIFBvcnRhbEl0ZW0sXHJcbiAgICBQb3J0YWwsXHJcbiAgICBXZWJNYXAsXHJcbiAgICBXZWJTY2VuZSxcclxuICAgIENvbG9yLFxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG4gICAgZHNNYW5hZ2VyLFxyXG4gICAgaXNGaXJzdFJlY2VpdmVNZXNzYWdlXHJcbiAgfSA9IG1hcEluc3RhbmNlXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZSxcclxuXHJcbiAgICBHZW9tZXRyeSxcclxuICAgIEluaXRpYWxWaWV3UHJvcGVydGllcyxcclxuICAgIFRpbGVMYXllcixcclxuICAgIEJhc2VtYXAsXHJcbiAgICBNYXBWaWV3LFxyXG4gICAgU2NlbmVWaWV3LFxyXG4gICAgRXh0ZW50LFxyXG4gICAgVmlld3BvaW50LFxyXG4gICAgUG9ydGFsSXRlbSxcclxuICAgIFBvcnRhbCxcclxuICAgIFdlYk1hcCxcclxuICAgIFdlYlNjZW5lLFxyXG4gICAgQ29sb3IsXHJcblxyXG4gICAgZXhwZWN0ZWREYXRhU291cmNlSW5mbyxcclxuICAgIG1hcENyZWF0aW5nSW5mbyxcclxuICAgIHZpZXcsXHJcbiAgICBsYXN0VXBkYXRlVmlld0NvbmZpZyxcclxuICAgIG1hcERzLFxyXG5cclxuICAgIGRzTWFuYWdlcixcclxuICAgIGlzRmlyc3RSZWNlaXZlTWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IE1hcGJhc2VSZXN0b3JlRGF0YSk6IHZvaWQge1xyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN0b3JlRGF0YSlcclxuXHJcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgbWFwSW5zdGFuY2Vba2V5XSA9IHJlc3RvcmVEYXRhW2tleV1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1R3b1dpZGdldHNNdXR1YWxseUV4dGVudENoYW5nZSAod2lkZ2V0SWQxOiBzdHJpbmcsIHdpZGdldElkMjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpZGdldElkMSAmJiB3aWRnZXRJZDIpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3BhblRvJywgJ3pvb21Ub0ZlYXR1cmUnXVxyXG4gICAgICBjb25zdCBtZXNzYWdlVHlwZSA9IE1lc3NhZ2VUeXBlLkV4dGVudENoYW5nZVxyXG5cclxuICAgICAgaWYgKGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQxLCB3aWRnZXRJZDIsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpICYmXHJcbiAgICAgICAgIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIod2lkZ2V0SWQyLCB3aWRnZXRJZDEsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1dpZGdldFNlbmRab29tVG9BY3Rpb25Ub0Fub3RoZXIgKHNlbmRNZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZywgYWN0aW9uV2lkZ2V0SWQ6IHN0cmluZywgbWVzc2FnZVR5cGU6IE1lc3NhZ2VUeXBlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb25maWdzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy5tZXNzYWdlQ29uZmlnc1xyXG5cclxuICAgIGlmIChtZXNzYWdlQ29uZmlncykge1xyXG4gICAgICBjb25zdCBhY3Rpb25OYW1lczogc3RyaW5nW10gPSBbJ3pvb21Ub0ZlYXR1cmUnXVxyXG5cclxuICAgICAgcmV0dXJuIGlzV2lkZ2V0U2VuZEFjdGlvbnNUb0Fub3RoZXIoc2VuZE1lc3NhZ2VXaWRnZXRJZCwgYWN0aW9uV2lkZ2V0SWQsIG1lc3NhZ2VDb25maWdzLCBtZXNzYWdlVHlwZSwgYWN0aW9uTmFtZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaWRnZXRTZW5kQWN0aW9uc1RvQW5vdGhlciAoXHJcbiAgc2VuZE1lc3NhZ2VXaWRnZXRJZDogc3RyaW5nLFxyXG4gIGFjdGlvbldpZGdldElkOiBzdHJpbmcsXHJcbiAgbWVzc2FnZUNvbmZpZ3M6IEltbXV0YWJsZU9iamVjdDxNZXNzYWdlc0pzb24+LFxyXG4gIG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSxcclxuICBhY3Rpb25OYW1lczogc3RyaW5nW11cclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKG1lc3NhZ2VDb25maWdzKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlSnNvbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhtZXNzYWdlQ29uZmlncylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VKc29uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbWVzc2FnZUpzb24gPSBtZXNzYWdlSnNvbkFycmF5W2ldXHJcblxyXG4gICAgICBpZiAobWVzc2FnZUpzb24ud2lkZ2V0SWQgPT09IHNlbmRNZXNzYWdlV2lkZ2V0SWQgJiYgbWVzc2FnZUpzb24ubWVzc2FnZVR5cGUgPT09IG1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG1lc3NhZ2VKc29uLmFjdGlvbnNcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhY3Rpb25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25zW2pdXHJcblxyXG4gICAgICAgICAgaWYgKGFjdGlvbi53aWRnZXRJZCA9PT0gYWN0aW9uV2lkZ2V0SWQpIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbk5hbWVzLmluY2x1ZGVzKGFjdGlvbi5hY3Rpb25OYW1lKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFic3RyYWN0RGF0YUFjdGlvbiwgdHlwZSBEYXRhUmVjb3JkU2V0LCBEYXRhU291cmNlU3RhdHVzLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLCB0eXBlIEZlYXR1cmVEYXRhUmVjb3JkLCB0eXBlIEpTQVBJTGF5ZXJNaXhpbiwgdHlwZSBEYXRhU291cmNlIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGhhbmRsZUZlYXR1cmUgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xyXG5pbXBvcnQgeyB0eXBlIFBhblRvR2VvbWV0cmllc0ludGVybmFsVmFsdWUsIHR5cGUgUGFuVG9MYXllckludGVybmFsVmFsdWUgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvcGFuLXRvLWFjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhblRvIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldDogRGF0YVJlY29yZFNldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICBjb25zdCBkYXRhU291cmNlID0gZGF0YVNldC5kYXRhU291cmNlIGFzIERhdGFTb3VyY2UgJiBKU0FQSUxheWVyTWl4aW5cclxuICAgIGlmICghZGF0YVNvdXJjZSB8fCBkYXRhU291cmNlLmdldFN0YXR1cygpID09PSBEYXRhU291cmNlU3RhdHVzLk5vdFJlYWR5KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYgKHJlY29yZHMubGVuZ3RoID4gMCAmJiBkYXRhU291cmNlPy5zdXBwb3J0U3BhdGlhbEluZm8gJiYgZGF0YVNvdXJjZT8uc3VwcG9ydFNwYXRpYWxJbmZvKCkpIHtcclxuICAgICAgLy8gcGFuIHRvIGdyYXBoaWNzXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKGRhdGFTZXQucmVjb3Jkcz8ubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICEhKGRhdGFTZXQuZGF0YVNvdXJjZSBhcyB1bmtub3duIGFzIEpTQVBJTGF5ZXJNaXhpbik/LmNyZWF0ZUpTQVBJTGF5ZXJCeURhdGFTb3VyY2UgJiZcclxuICAgICAgICAgICAgICAgZGF0YVNvdXJjZT8uc3VwcG9ydFNwYXRpYWxJbmZvICYmIGRhdGFTb3VyY2U/LnN1cHBvcnRTcGF0aWFsSW5mbygpKSB7XHJcbiAgICAgIC8vIHBhbiB0byBsYXllclxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkV4ZWN1dGUgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHsgcmVjb3JkcyB9ID0gZGF0YVNldFxyXG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoWydlc3JpL0dyYXBoaWMnXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEdyYXBoaWM6IF9fZXNyaS5HcmFwaGljQ29uc3RydWN0b3IgPSBudWxsO1xyXG4gICAgICBbR3JhcGhpY10gPSBtb2R1bGVzXHJcbiAgICAgIGxldCBwYW5Ub0FjdGlvblZhbHVlOiBQYW5Ub0dlb21ldHJpZXNJbnRlcm5hbFZhbHVlIHwgUGFuVG9MYXllckludGVybmFsVmFsdWUgPSBudWxsXHJcbiAgICAgIGNvbnN0IGdlb21ldHJpZXMgPSByZWNvcmRzLm1hcChyZWNvcmQgPT4gaGFuZGxlRmVhdHVyZSgocmVjb3JkIGFzIEZlYXR1cmVEYXRhUmVjb3JkKS5mZWF0dXJlLCBHcmFwaGljKT8uZ2VvbWV0cnkpXHJcblxyXG4gICAgICBpZiAoZ2VvbWV0cmllcz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHBhblRvQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICB0eXBlOiAncGFuLXRvLWdlb21ldHJpZXMnLFxyXG4gICAgICAgICAgZ2VvbWV0cmllc1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYW5Ub0FjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3Bhbi10by1sYXllcicsXHJcbiAgICAgICAgICBkYXRhU291cmNlSWQ6IGRhdGFTZXQuZGF0YVNvdXJjZT8uaWQgfHwgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAncGFuVG9BY3Rpb25WYWx1ZS52YWx1ZScsIHBhblRvQWN0aW9uVmFsdWUpXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=