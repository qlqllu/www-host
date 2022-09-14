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
/*!*************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/pan-to.ts ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PanTo)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _runtime_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/utils */ "./extensions/widgets/arcgis/arcgis-map/src/runtime/utils.ts");
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
        return __awaiter(this, void 0, void 0, function* () {
            const { records } = dataSet;
            // @ts-expect-error
            return records.length > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });
        });
    }
    onExecute(dataSet) {
        return __awaiter(this, void 0, void 0, function* () {
            const { records } = dataSet;
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
                let Graphic = null;
                [Graphic] = modules;
                const featureSet = {
                    features: records.map(record => { var _a; return (_a = (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(record.feature, Graphic)) === null || _a === void 0 ? void 0 : _a.geometry; })
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'panToActionValue.value', featureSet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9wYW4tdG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDbUI7QUFHa0Y7QUFFL0gsU0FBZSxxQkFBcUIsQ0FBRSxXQUE4QyxFQUFFLGtCQUEyRDs7UUFDdEosTUFBTSxnQkFBZ0IsR0FBRyxFQUFFO1FBQzNCLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdEUsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUM7WUFDeEUsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDcEQsT0FBTTthQUNQO1lBQ0QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RixDQUFDLENBQUM7UUFFRixJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsT0FBTyxJQUFJO1NBQ1o7YUFBTTtZQUNMLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNyQztJQUNILENBQUM7Q0FBQTtBQUVNLFNBQWUsa0JBQWtCLENBQUUsV0FBOEMsRUFBRSxzQkFBK0Q7O1FBQ3ZKLE1BQU0sY0FBYyxHQUFHLEVBQUU7UUFDekIsc0JBQXNCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM5RSxNQUFN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Ozs7O0FDTnFHO0FBQ2pEO0FBQ0o7QUFFakMsTUFBTSxLQUFNLFNBQVEseURBQWtCO0lBQzdDLFdBQVcsQ0FBRSxPQUFzQjs7WUFDdkMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU87WUFDM0IsbUJBQW1CO1lBQ25CLE9BQU8sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFDLG1CQUFNLENBQUMsT0FBTywwQ0FBRSxRQUFRLElBQUM7UUFDL0UsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFFLE9BQXNCOztZQUNyQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTztZQUMzQixPQUFPLG1FQUFzQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzdELElBQUksT0FBTyxHQUE4QixJQUFJLENBQUM7Z0JBQzlDLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTztnQkFDbkIsTUFBTSxVQUFVLEdBQUc7b0JBQ2pCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQUMsMEVBQWEsQ0FBRSxNQUE0QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsMENBQUUsUUFBUSxJQUFDO2lCQUN6RztnQkFDRCxzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxDQUFDO2dCQUN2RyxPQUFPLElBQUk7WUFDYixDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL2RhdGEtYWN0aW9ucy9wYW4tdG8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXHJcbmltcG9ydCB7IEFwcE1vZGUsIGRhdGFTb3VyY2VVdGlscyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IE1hcEJhc2UsIHsgSGlnaExpZ2h0SGFuZGxlIH0gZnJvbSAnLi9jb21wb25lbnRzL21hcGJhc2UnXHJcbmltcG9ydCB7IElGZWF0dXJlIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXHJcbmltcG9ydCB7IGdlb21ldHJ5VXRpbHMsIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIEppbXVNYXBWaWV3LCBMYXllclR5cGVzLCBKaW11RmVhdHVyZUxheWVyVmlldywgSmltdVNjZW5lTGF5ZXJWaWV3IH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTmV3RmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWU/OiB7W2xheWVySUQ6IHN0cmluZ106IF9fZXNyaS5GZWF0dXJlU2V0fSk6IFByb21pc2U8YW55PiB7XHJcbiAgY29uc3QgbmV3TGF5ZXJQcm9taXNlcyA9IFtdXHJcbiAgbmV3RmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKG5ld0ZlYXR1cmVTZXRWYWx1ZSkuZm9yRWFjaChsYXllcklkID0+IHtcclxuICAgIGNvbnN0IGxheWVyID0gbWFwQmFzZVZpZXcubWFwLmxheWVycy5maW5kKGxheWVyID0+IGxheWVyLmlkID09PSBsYXllcklkKVxyXG4gICAgaWYgKGxheWVyKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybigndGhlIGZlYXR1cmUgbGF5ZXIgaXMgYWxyZWFkeSBjcmVhdGVkJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBuZXdMYXllclByb21pc2VzLnB1c2goYWRkRmVhdHVyZVNldFRvTWFwKG1hcEJhc2VWaWV3LCBuZXdGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gIH0pXHJcblxyXG4gIGlmIChuZXdMYXllclByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld0xheWVyUHJvbWlzZXMpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlRmVhdHVyZWxheWVyIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlPzoge1tsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldH0pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHVwZGF0ZVByb21pc2VzID0gW11cclxuICBjaGFuZ2VkRmVhdHVyZVNldFZhbHVlICYmIE9iamVjdC5rZXlzKGNoYW5nZWRGZWF0dXJlU2V0VmFsdWUpLmZvckVhY2gobGF5ZXJJZCA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcclxuICAgIGlmIChsYXllcikge1xyXG4gICAgICBtYXBCYXNlVmlldy5tYXAucmVtb3ZlKGxheWVyKVxyXG4gICAgICB1cGRhdGVQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZVtsYXllcklkXSwgbGF5ZXJJZCkpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKHVwZGF0ZVByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVwZGF0ZVByb21pc2VzKVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkRmVhdHVyZVNldFRvTWFwIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlU2V0OiBfX2VzcmkuRmVhdHVyZVNldCwgbGF5ZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbGV0IEZlYXR1cmVTZXQ6IHR5cGVvZiAgX19lc3JpLkZlYXR1cmVTZXQ7XHJcbiAgICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgW0ZlYXR1cmVMYXllcl0gPSBtb2R1bGVzO1xyXG5cclxuICAgICAgICBjb25zdCBsYXllckZyb21GZWF0dXJlU2V0ID0gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5sYXllciBhcyBhbnlcclxuICAgICAgICBjb25zdCBmaWVsZHNJbkZlYXR1cmVsYXllciA9IFtdXHJcbiAgICAgICAgY29uc3QgZmllbGRNYXAgPSB7fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0gZ2V0UmVhc29uYWJsZUZpZWxkKGxheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldKVxyXG4gICAgICAgICAgZmllbGRNYXBbbGF5ZXJGcm9tRmVhdHVyZVNldC5maWVsZHNbaV0ubmFtZV0gPSBmaWVsZHNJdGVtLm5hbWVcclxuICAgICAgICAgIGZpZWxkc0luRmVhdHVyZWxheWVyLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0luUG9wdXBUZW1wbGF0ZSA9IFtdXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmVhdHVyZVNldC5mZWF0dXJlc1swXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICBpZiAoZmllbGRNYXBba2V5XSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNJdGVtID0ge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGRNYXBba2V5XSxcclxuICAgICAgICAgICAgICBsYWJlbDoga2V5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmllbGRzSW5Qb3B1cFRlbXBsYXRlLnB1c2goZmllbGRzSXRlbSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUZlYXR1cmVzID0gW11cclxuICAgICAgICBmZWF0dXJlU2V0LmZlYXR1cmVzLmZvckVhY2goKGZlYXR1cmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRmVhdHVyZSA9IGZlYXR1cmVcclxuICAgICAgICAgIGlmICh0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzW2ZpZWxkTWFwW2tleV1dID0gdGVtcEZlYXR1cmUuYXR0cmlidXRlc1trZXldXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMuZXhiZmlkID0gaW5kZXhcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgZXhiZmlkOiBpbmRleFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzb3VyY2VGZWF0dXJlcy5wdXNoKHRlbXBGZWF0dXJlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgICBpZDogbGF5ZXJJZCxcclxuICAgICAgICAgIHRpdGxlOiBsYXllckZyb21GZWF0dXJlU2V0LnRpdGxlLFxyXG4gICAgICAgICAgc291cmNlOiBzb3VyY2VGZWF0dXJlcyxcclxuICAgICAgICAgIGZpZWxkczogZmllbGRzSW5GZWF0dXJlbGF5ZXIsXHJcbiAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogJ2V4YmZpZCcsXHJcbiAgICAgICAgICByZW5kZXJlcjogbGF5ZXJGcm9tRmVhdHVyZVNldC5yZW5kZXJlcixcclxuICAgICAgICAgIHBvcHVwRW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgIHBvcHVwVGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdpbmZvcm1hdGlvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgdHlwZTogJ2ZpZWxkcycsXHJcbiAgICAgICAgICAgICAgZmllbGRJbmZvczogZmllbGRzSW5Qb3B1cFRlbXBsYXRlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbWFwQmFzZVZpZXcubWFwLmFkZChsYXllcilcclxuXHJcbiAgICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVhc29uYWJsZUZpZWxkIChmaWVsZDogX19lc3JpLkZpZWxkKTogX19lc3JpLkZpZWxkIHtcclxuICAvLyB0aGUgZnVuY3Rpb24gaXMgc3VwcG9ydGVkIHRvIG5vcm1hbGl6ZSB0aGUgZmllbGQubmFtZVxyXG4gIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWVcclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogZmllbGROYW1lLnJlcGxhY2UoL1xcLi9nLCAnXycpLnJlcGxhY2UoL1xcKC9nLCAnXycpLnJlcGxhY2UoL1xcKS9nLCAnXycpLFxyXG4gICAgYWxpYXM6IGZpZWxkLmFsaWFzLFxyXG4gICAgdHlwZTogZmllbGQudHlwZVxyXG4gIH0gYXMgYW55XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RGZWF0dXJlIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCB0YXJnZXQ6IF9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IElGZWF0dXJlIHwgSUZlYXR1cmVbXSwgbGF5ZXJJZD86IHN0cmluZyk6IEhpZ2hMaWdodEhhbmRsZSB7XHJcbiAgLy8gSW4gdGhpcyBmdW5jdGlvbiwgd2UgYXNzdW1lIHRoYXQgZmVhdHVyZXMgY29tZSBmcm9tIHRoZSBzYW1lIGxheWVyXHJcbiAgbGV0IGZlYXR1cmVMYXllcklkID0gbGF5ZXJJZFxyXG4gIGxldCBmZWF0dXJlTGF5ZXJWaWV3ID0gbnVsbFxyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuXHJcbiAgLy8gaWYgbGF5ZXJJZCBkb2Vzbid0IGV4aXN0LCB3ZSBnZXQgbGF5ZXJJZCBieSBmZWF0dXJlXHJcbiAgaWYgKCFmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIHRlbXBGZWF0dXJlID0gdGFyZ2V0WzBdIGFzIF9fZXNyaS5HcmFwaGljXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldCBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wRmVhdHVyZSkge1xyXG4gICAgICBmZWF0dXJlTGF5ZXJJZCA9IHRlbXBGZWF0dXJlLmxheWVyICYmIHRlbXBGZWF0dXJlLmxheWVyLmlkXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZmVhdHVyZUxheWVySWQpIHtcclxuICAgIGNvbnN0IGxheWVyVmlld3MgPSBtYXBCYXNlVmlldy5hbGxMYXllclZpZXdzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxheWVyVmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGxheWVyVmlld3MuZ2V0SXRlbUF0KGkpLmxheWVyLmlkID09PSBmZWF0dXJlTGF5ZXJJZCkge1xyXG4gICAgICAgIGZlYXR1cmVMYXllclZpZXcgPSBsYXllclZpZXdzLmdldEl0ZW1BdChpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXllcklkOiBmZWF0dXJlTGF5ZXJJZCxcclxuICAgICAgICBoYW5kbGU6IGZlYXR1cmVMYXllclZpZXcuaGlnaGxpZ2h0KHRhcmdldClcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYXBQYW50byAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR2VvbWV0cnkgfCBfX2VzcmkuR2VvbWV0cnlbXSB8XHJcbl9fZXNyaS5HcmFwaGljIHwgX19lc3JpLkdyYXBoaWNbXSB8IF9fZXNyaS5FeHRlbnQpOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IHBhblRvVGFyZ2V0ID0gdGFyZ2V0IGFzIGFueVxyXG4gIGNvbnN0IHRlbXBCYXNlTWFwVmlldyA9IG1hcEJhc2VWaWV3IGFzIGFueVxyXG4gIGlmIChwYW5Ub1RhcmdldCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICBpZiAocGFuVG9UYXJnZXQubGVuZ3RoID09PSAwKSByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKClcclxuXHJcbiAgICBpZiAocGFuVG9UYXJnZXRbMF0uZ2VvbWV0cnkpIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnlBcnI6IF9fZXNyaS5HZW9tZXRyeVtdID0gW11cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYW5Ub1RhcmdldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGdlb21ldHJ5QXJyLnB1c2gocGFuVG9UYXJnZXRbaV0uZ2VvbWV0cnkpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhd2FpdCBnZXRHZW9tZXRyaWVzRXh0ZW50KGdlb21ldHJ5QXJyKS50aGVuKChleHRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGVtcEJhc2VNYXBWaWV3LmdvVG8oZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBnZXRHZW9tZXRyaWVzRXh0ZW50KHBhblRvVGFyZ2V0KS50aGVuKChleHRlbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gdGVtcEJhc2VNYXBWaWV3LmdvVG8oZXh0ZW50LmNlbnRlcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdldG1ldHJ5ID0gcGFuVG9UYXJnZXQuZ2VvbWV0cnkgYXMgX19lc3JpLkdlb21ldHJ5XHJcbiAgICAgIHJldHVybiB0ZW1wQmFzZU1hcFZpZXcuZ29UbyhnZXRDZW50ZXJQb2ludChnZXRtZXRyeSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGVtcEJhc2VNYXBWaWV3LmdvVG8oZ2V0Q2VudGVyUG9pbnQocGFuVG9UYXJnZXQpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvbWV0cmllc0V4dGVudCAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10pOiBQcm9taXNlPF9fZXNyaS5FeHRlbnQ+IHtcclxuICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9nZW9tZXRyeS9FeHRlbnQnXHJcbiAgXSkudGhlbihhc3luYyBtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEV4dGVudDogdHlwZW9mIF9fZXNyaS5FeHRlbnQ7XHJcbiAgICBbRXh0ZW50XSA9IG1vZHVsZXNcclxuXHJcbiAgICBpZiAoIWdlb21ldHJpZXMgfHwgIWdlb21ldHJpZXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbClcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZnVsbEV4dGVudDogX19lc3JpLkV4dGVudCA9IG51bGxcclxuICAgIGxldCBpbmRleFxyXG4gICAgY29uc3QgbnVtR2VvbWV0cmllcyA9IGdlb21ldHJpZXMubGVuZ3RoXHJcblxyXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbnVtR2VvbWV0cmllczsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbaW5kZXhdXHJcbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XHJcblxyXG4gICAgICBpZiAoIWV4dGVudCAmJiBnZW9tZXRyeS50eXBlID09PSAncG9pbnQnKSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRHZW9tZXRyeSA9IGdlb21ldHJ5IGFzIGFueVxyXG5cclxuICAgICAgICBpZiAocG9pbnRHZW9tZXRyeS54ICYmIHBvaW50R2VvbWV0cnkueSkge1xyXG4gICAgICAgICAgZXh0ZW50ID0gbmV3IEV4dGVudCh7XHJcbiAgICAgICAgICAgIHhtYXg6IHBvaW50R2VvbWV0cnkueCxcclxuICAgICAgICAgICAgeG1pbjogcG9pbnRHZW9tZXRyeS54LFxyXG4gICAgICAgICAgICB5bWF4OiBwb2ludEdlb21ldHJ5LnksXHJcbiAgICAgICAgICAgIHltaW46IHBvaW50R2VvbWV0cnkueSxcclxuICAgICAgICAgICAgem1heDogcG9pbnRHZW9tZXRyeS56LFxyXG4gICAgICAgICAgICB6bWluOiBwb2ludEdlb21ldHJ5LnosXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHBvaW50R2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZXh0ZW50KSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZ1bGxFeHRlbnQpIHtcclxuICAgICAgICBmdWxsRXh0ZW50ID0gZnVsbEV4dGVudC51bmlvbihleHRlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVsbEV4dGVudCA9IGV4dGVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZ1bGxFeHRlbnQud2lkdGggPCAwICYmIGZ1bGxFeHRlbnQuaGVpZ2h0IDwgMCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmdWxsRXh0ZW50KVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IHZvaWQge1xyXG4gIGlmIChsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBqaW11TWFwVmlldy5qaW11TGF5ZXJWaWV3c1xyXG4gICAgY29uc3QgamltdUxheWVyVmlld0lkcyA9IE9iamVjdC5rZXlzKGppbXVMYXllclZpZXdzKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqaW11TGF5ZXJWaWV3SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wSmltdUxheWVyVmlldyA9IGppbXVMYXllclZpZXdzW2ppbXVMYXllclZpZXdJZHNbaV1dXHJcbiAgICAgIGlmICh0ZW1wSmltdUxheWVyVmlldyAmJiB0ZW1wSmltdUxheWVyVmlldy5sYXllciAmJiB0ZW1wSmltdUxheWVyVmlldy5sYXllckRhdGFTb3VyY2VJZCA9PT0gbGF5ZXJEYXRhU291cmNlSWQgJiZcclxuICAgICAgICAodGVtcEppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIgfHwgdGVtcEppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSkge1xyXG4gICAgICAgICh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykuc2V0TG9jYWxEZWZpbml0aW9uRXhwcmVzc2lvbihxdWVyeVNRTClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlGZWF0dXJlcyAobGF5ZXJPYmplY3QsIHF1ZXJ5U1FMKSB7XHJcbiAgcmV0dXJuIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICBsZXQgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnk7XHJcbiAgICBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgcXVlcnkud2hlcmUgPSBxdWVyeVNRTFxyXG4gICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgcmV0dXJuIGxheWVyT2JqZWN0LnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIHJldHVybiBmZWF0dXJlU2V0XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXNoT25GZWF0dXJlTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVGZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgaWYgKCh0ZW1wSmltdUxheWVyVmlldykudmlldykge1xyXG4gICAgbGV0IGZlYXR1cmVMYXllclZpZXc6IF9fZXNyaS5GZWF0dXJlTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICBpZiAoZmVhdHVyZUxheWVyVmlldykge1xyXG4gICAgICBxdWVyeUZlYXR1cmVzKGZlYXR1cmVMYXllclZpZXcubGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLmdlb21ldHJ5VHlwZSlcclxuICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgbGV0IEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XHJcbiAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlc1xyXG5cclxuICAgICAgbGV0IHRlbXBGZWF0dXJlTGF5ZXIgPSBuZXcgRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IGRhdGFTb3VyY2VVdGlscy5nZXRVcmxCeUxheWVyKCh0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldyB8IEppbXVTY2VuZUxheWVyVmlldykubGF5ZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIHRlbXBGZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHF1ZXJ5RmVhdHVyZXModGVtcEZlYXR1cmVMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBnZXRGbGFzaFN5bWJvbChmZWF0dXJlU2V0LmZlYXR1cmVzWzBdLmdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgICAgIHN0YXJ0Rmxhc2goamltdU1hcFZpZXcudmlldywgZmVhdHVyZVNldC5mZWF0dXJlcywgc3ltYm9sKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxubGV0IHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IG51bGxcclxuZnVuY3Rpb24gZmxhc2hPblNjZW5lTGF5ZXIgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgcXVlcnlTUUw6IHN0cmluZywgdGVtcEppbXVMYXllclZpZXc6IEppbXVTY2VuZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBzY2VuZUxheWVyVmlldzogX19lc3JpLlNjZW5lTGF5ZXJWaWV3ID0gKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBxdWVyeUZlYXR1cmVzKHNjZW5lTGF5ZXJWaWV3Py5sYXllcj8uYXNzb2NpYXRlZExheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBvYmplY3RJZEZpZWxkID0gc2NlbmVMYXllclZpZXcubGF5ZXIub2JqZWN0SWRGaWVsZFxyXG4gICAgICAgIGNvbnN0IG9iamVjdElkcyA9IGZlYXR1cmVTZXQuZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW29iamVjdElkRmllbGRdKVxyXG5cclxuICAgICAgICBsZXQgaSA9IDBcclxuICAgICAgICBjb25zdCBtYXhGbGFzaENvdW50ID0gNlxyXG4gICAgICAgIGxldCBoaWdobGlnaHRDb2xvciA9IFsyNTUsIDI1NSwgMCwgMC44XVxyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9ucyA9IGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9uc1xyXG5cclxuICAgICAgICBjb25zdCBmbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmIChpIDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBudWxsXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IFswLCAwLCAwLCAwXSB9XHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSA9IHNjZW5lTGF5ZXJWaWV3LmhpZ2hsaWdodChvYmplY3RJZHMpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5oaWdobGlnaHRPcHRpb25zID0geyBjb2xvcjogaGlnaGxpZ2h0Q29sb3IgfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IG9yaWdpbmFsSGlnaGxpZ2h0T3B0aW9uc1xyXG4gICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZmxhc2gsIDUwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGFzaEZlYXR1cmVzQnlRdWVyeSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3LCBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nKTogdm9pZCB7XHJcbiAgaWYgKGxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IGppbXVNYXBWaWV3LmppbXVMYXllclZpZXdzXHJcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3SWRzID0gT2JqZWN0LmtleXMoamltdUxheWVyVmlld3MpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGppbXVMYXllclZpZXdJZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHRlbXBKaW11TGF5ZXJWaWV3ID0gamltdUxheWVyVmlld3NbamltdUxheWVyVmlld0lkc1tpXV1cclxuICAgICAgaWYgKHRlbXBKaW11TGF5ZXJWaWV3ICYmIHRlbXBKaW11TGF5ZXJWaWV3LmxheWVyICYmIHRlbXBKaW11TGF5ZXJWaWV3LmxheWVyRGF0YVNvdXJjZUlkID09PSBsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgIGlmICh0ZW1wSmltdUxheWVyVmlldy50eXBlID09PSBMYXllclR5cGVzLkZlYXR1cmVMYXllcikge1xyXG4gICAgICAgICAgZmxhc2hPbkZlYXR1cmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVGZWF0dXJlTGF5ZXJWaWV3KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGVtcEppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5TY2VuZUxheWVyKSB7XHJcbiAgICAgICAgICBmbGFzaE9uU2NlbmVMYXllcihqaW11TWFwVmlldywgcXVlcnlTUUwsIHRlbXBKaW11TGF5ZXJWaWV3IGFzIEppbXVTY2VuZUxheWVyVmlldylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Rmxhc2ggKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBzeW1ib2wpIHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL0dyYXBoaWMnXHJcbiAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgbGV0IEdyYXBoaWM6IHR5cGVvZiBfX2VzcmkuR3JhcGhpYztcclxuICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuXHJcbiAgICBjb25zdCBmbGFzaEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXR1cmVzOiBfX2VzcmkuR3JhcGhpY1tdLCBtYXhGbGFzaENvdW50OiBudW1iZXIpIHtcclxuICAgICAgY29uc3QgZ3JhcGhpY3MgPSBbXVxyXG4gICAgICBsZXQgZmxhc2hDb3VudCA9IDBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlbXBHcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgZ2VvbWV0cnk6IGZlYXR1cmVzW2ldLmdlb21ldHJ5LFxyXG4gICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlc1tpXS5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBncmFwaGljcy5wdXNoKHRlbXBHcmFwaGljKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzaW5nbGVGbGFzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYXBCYXNlVmlldy5ncmFwaGljcy5hZGRNYW55KGdyYXBoaWNzKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MucmVtb3ZlTWFueShncmFwaGljcylcclxuICAgICAgICAgIGZsYXNoQ291bnQgPSBmbGFzaENvdW50ICsgMVxyXG4gICAgICAgICAgaWYgKGZsYXNoQ291bnQgPCBtYXhGbGFzaENvdW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfVxyXG5cclxuICAgICAgc2luZ2xlRmxhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZsYXNoRmVhdHVyZXMoZmVhdHVyZXMsIDMpXHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rmxhc2hTeW1ib2wgKGdlb21ldHJ5VHlwZTogc3RyaW5nKSB7XHJcbiAgaWYgKFsncG9pbnQnLCAnbXVsdGlwb2ludCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdzaW1wbGUtbWFya2VyJyxcclxuICAgICAgc3R5bGU6ICdjaXJjbGUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICBzaXplOiAnMTZweCcsXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWxpbmUnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWxpbmUnLFxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICB3aWR0aDogMyxcclxuICAgICAgc3R5bGU6ICdzb2xpZCdcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsncG9seWdvbicsICdleHRlbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUZpbGxTeW1ib2woKVxyXG4gICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLFxyXG4gICAgICBzdHlsZTogJ3NvbGlkJyxcclxuICAgICAgb3V0bGluZTogeyAvLyBhdXRvY2FzdHMgYXMgbmV3IFNpbXBsZUxpbmVTeW1ib2woKVxyXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0sXHJcbiAgICAgICAgd2lkdGg6IDNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoWydtZXNoJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ21lc2gtM2QnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IE1lc2hTeW1ib2wzRCgpXHJcbiAgICAgIHN5bWJvbExheWVyczogW3tcclxuICAgICAgICB0eXBlOiAnZmlsbCcsIC8vIGF1dG9jYXN0cyBhcyBuZXcgRmlsbFN5bWJvbDNETGF5ZXIoKVxyXG4gICAgICAgIG1hdGVyaWFsOiB7IGNvbG9yOiBbMjU1LCAyNTUsIDAsIDAuOF0gfVxyXG4gICAgICB9XVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQgKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpOiBfX2VzcmkuUG9pbnQge1xyXG4gIC8vIHBvaW50IHwgbXVsdGlwb2ludCB8IHBvbHlsaW5lIHwgcG9seWdvbiB8IGV4dGVudCB8IG1lc2hcclxuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcclxuICAgIGNhc2UgJ3BvaW50JzpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2ludFxyXG4gICAgY2FzZSAnZXh0ZW50JzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuRXh0ZW50KS5jZW50ZXJcclxuICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uKS5jZW50cm9pZFxyXG4gICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICByZXR1cm4gKGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5bGluZSkuZXh0ZW50LmNlbnRlclxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5ICYmIGdlb21ldHJ5LmV4dGVudCA/IGdlb21ldHJ5LmV4dGVudC5jZW50ZXIgOiB1bmRlZmluZWRcclxuICAgIC8vIHRvZG9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVGZWF0dXJlIChmZWF0dXJlOiBJRmVhdHVyZSB8IF9fZXNyaS5HcmFwaGljLCBHcmFwaGljOiBfX2VzcmkuR3JhcGhpY0NvbnN0cnVjdG9yKTogX19lc3JpLkdyYXBoaWMge1xyXG4gIGxldCB0ZW1wRmVhdHVyZSA9IG51bGxcclxuICBpZiAoKGZlYXR1cmUgYXMgYW55KS5jbG9uZSkge1xyXG4gICAgdGVtcEZlYXR1cmUgPSAoZmVhdHVyZSBhcyBhbnkpLmNsb25lKClcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcEZlYXR1cmUgPSBHcmFwaGljLmZyb21KU09OKE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUpKVxyXG4gICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIGZlYXR1cmUuYXR0cmlidXRlcylcclxuICB9XHJcbiAgcmV0dXJuIHRlbXBGZWF0dXJlXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm9qZWN0R2VvbWV0cmllcyAoZ2VvbWV0cmllczogX19lc3JpLkdlb21ldHJ5W10sIHNwYXRpYWxSZWZlcmVuY2U6IF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlKTogUHJvbWlzZTxfX2VzcmkuR2VvbWV0cnlbXT4ge1xyXG4gIGlmICghZ2VvbWV0cmllcyB8fCBnZW9tZXRyaWVzLmxlbmd0aCA9PT0gMCB8fCAhZ2VvbWV0cmllc1swXSB8fFxyXG4gICAgc3BhdGlhbFJlZmVyZW5jZS53a2lkID09PSBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2Uud2tpZCB8fCAoc3BhdGlhbFJlZmVyZW5jZS5lcXVhbHMoZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlKSkpIHtcclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2UgaWYgKHNwYXRpYWxSZWZlcmVuY2UuaXNXZWJNZXJjYXRvciAmJiBnZW9tZXRyaWVzWzBdLnNwYXRpYWxSZWZlcmVuY2UuaXNXR1M4NCkge1xyXG4gICAgLy8gSW4ganMgYXBpIDQueCwgdGhlIHZpZXcgY2FuIGhhbmRsZSBXZWJNZXJjYXRvciBhbmQgV0dTODQgc3BhdGlhbFJlZmVyZW5jZSBhdXRvXHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZ2VvbWV0cnlVdGlscy5wcm9qZWN0VG9TcGF0aWFsUmVmZXJlbmNlKGdlb21ldHJpZXMsIHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1pvb21Ub0ZlYXR1cmVzIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBsYXllcjogYW55LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSk6IFByb21pc2U8X19lc3JpLkdyYXBoaWNbXT4ge1xyXG4gIGlmIChtYXBCYXNlVmlldyAmJiBtYXBCYXNlVmlldy50eXBlID09PSAnM2QnICYmIGxheWVyICYmIGxheWVyLnF1ZXJ5RmVhdHVyZXMgJiYgZmVhdHVyZXMpIHtcclxuICAgIHJldHVybiBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5J1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBjb25zdCBbUXVlcnldID0gbW9kdWxlc1xyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpXHJcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbJyonXVxyXG4gICAgICBxdWVyeS5vYmplY3RJZHMgPSBmZWF0dXJlcy5tYXAoZmVhdHVyZSA9PiBmZWF0dXJlLmF0dHJpYnV0ZXNbbGF5ZXIub2JqZWN0SWRGaWVsZF0pXHJcbiAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5mZWF0dXJlcyAmJiByZXN1bHQuZmVhdHVyZXMubGVuZ3RoID09PSBmZWF0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0LmZlYXR1cmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmVhdHVyZXMpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXNMaXZlIChhcHBNb2RlOiBBcHBNb2RlKTogYm9vbGVhbiB7XHJcbiAgaWYgKHdpbmRvdy5qaW11Q29uZmlnLmlzSW5CdWlsZGVyKSB7XHJcbiAgICBpZiAoYXBwTW9kZSA9PT0gQXBwTW9kZS5EZXNpZ24pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEJhc2VSZXN0b3JlRGF0YSAobWFwSW5zdGFuY2U6IE1hcEJhc2UpOiBhbnkge1xyXG4gIHJldHVybiB7XHJcbiAgICBtYXBDb250YWluZXI6IG1hcEluc3RhbmNlLm1hcENvbnRhaW5lcixcclxuICAgIHN0YXRlOiBtYXBJbnN0YW5jZS5zdGF0ZSxcclxuICAgIE1hcFZpZXc6IG1hcEluc3RhbmNlLk1hcFZpZXcsXHJcbiAgICBTY2VuZVZpZXc6IG1hcEluc3RhbmNlLlNjZW5lVmlldyxcclxuICAgIEV4dGVudDogbWFwSW5zdGFuY2UuRXh0ZW50LFxyXG4gICAgVmlld3BvaW50OiBtYXBJbnN0YW5jZS5WaWV3cG9pbnQsXHJcbiAgICBtYXBWaWV3OiBtYXBJbnN0YW5jZS5tYXBWaWV3LFxyXG4gICAgc2NlbmVWaWV3OiBtYXBJbnN0YW5jZS5zY2VuZVZpZXcsXHJcbiAgICBleHRlbnRXYXRjaDogbWFwSW5zdGFuY2UuZXh0ZW50V2F0Y2gsXHJcbiAgICBmYXRhbEVycm9yV2F0Y2g6IG1hcEluc3RhbmNlLmZhdGFsRXJyb3JXYXRjaCxcclxuICAgIGRzTWFuYWdlcjogbWFwSW5zdGFuY2UuZHNNYW5hZ2VyLFxyXG4gICAgaGlnaExpZ2h0SGFuZGxlczogbWFwSW5zdGFuY2UuaGlnaExpZ2h0SGFuZGxlcyxcclxuICAgIG1hcEJhc2VWaWV3RXZlbnRIYW5kbGVzOiBtYXBJbnN0YW5jZS5tYXBCYXNlVmlld0V2ZW50SGFuZGxlcyxcclxuICAgIENvbG9yOiBtYXBJbnN0YW5jZS5Db2xvcixcclxuICAgIGlzUmVxdWVzdGluZ01hcDogbWFwSW5zdGFuY2UuaXNSZXF1ZXN0aW5nTWFwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZU1hcEJhc2UgKG1hcEluc3RhbmNlOiBNYXBCYXNlLCByZXN0b3JlRGF0YTogYW55KTogdm9pZCB7XHJcbiAgbWFwSW5zdGFuY2UubWFwQ29udGFpbmVyID0gcmVzdG9yZURhdGEubWFwQ29udGFpbmVyXHJcbiAgbWFwSW5zdGFuY2Uuc3RhdGUgPSByZXN0b3JlRGF0YS5zdGF0ZVxyXG4gIG1hcEluc3RhbmNlLk1hcFZpZXcgPSByZXN0b3JlRGF0YS5NYXBWaWV3XHJcbiAgbWFwSW5zdGFuY2UuU2NlbmVWaWV3ID0gcmVzdG9yZURhdGEuU2NlbmVWaWV3XHJcbiAgbWFwSW5zdGFuY2UuRXh0ZW50ID0gcmVzdG9yZURhdGEuRXh0ZW50XHJcbiAgbWFwSW5zdGFuY2UuVmlld3BvaW50ID0gcmVzdG9yZURhdGEuVmlld3BvaW50XHJcbiAgbWFwSW5zdGFuY2UubWFwVmlldyA9IHJlc3RvcmVEYXRhLm1hcFZpZXdcclxuICBtYXBJbnN0YW5jZS5zY2VuZVZpZXcgPSByZXN0b3JlRGF0YS5zY2VuZVZpZXdcclxuICBtYXBJbnN0YW5jZS5leHRlbnRXYXRjaCA9IHJlc3RvcmVEYXRhLmV4dGVudFdhdGNoXHJcbiAgbWFwSW5zdGFuY2UuZmF0YWxFcnJvcldhdGNoID0gcmVzdG9yZURhdGEuZmF0YWxFcnJvcldhdGNoXHJcbiAgbWFwSW5zdGFuY2UuZHNNYW5hZ2VyID0gcmVzdG9yZURhdGEuZHNNYW5hZ2VyXHJcbiAgbWFwSW5zdGFuY2UuaGlnaExpZ2h0SGFuZGxlcyA9IHJlc3RvcmVEYXRhLmhpZ2hMaWdodEhhbmRsZXNcclxuICBtYXBJbnN0YW5jZS5tYXBCYXNlVmlld0V2ZW50SGFuZGxlcyA9IHJlc3RvcmVEYXRhLm1hcEJhc2VWaWV3RXZlbnRIYW5kbGVzXHJcbiAgbWFwSW5zdGFuY2UuQ29sb3IgPSByZXN0b3JlRGF0YS5Db2xvclxyXG4gIG1hcEluc3RhbmNlLmlzUmVxdWVzdGluZ01hcCA9IHJlc3RvcmVEYXRhLmlzUmVxdWVzdGluZ01hcFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFic3RyYWN0RGF0YUFjdGlvbiwgRGF0YVJlY29yZFNldCwgTXV0YWJsZVN0b3JlTWFuYWdlciwgRmVhdHVyZURhdGFSZWNvcmQgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgaGFuZGxlRmVhdHVyZSB9IGZyb20gJy4uL3J1bnRpbWUvdXRpbHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5UbyBleHRlbmRzIEFic3RyYWN0RGF0YUFjdGlvbiB7XHJcbiAgYXN5bmMgaXNTdXBwb3J0ZWQgKGRhdGFTZXQ6IERhdGFSZWNvcmRTZXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IHsgcmVjb3JkcyB9ID0gZGF0YVNldFxyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcmV0dXJuIHJlY29yZHMubGVuZ3RoID4gMCAmJiByZWNvcmRzLnNvbWUocmVjb3JkID0+IHJlY29yZC5mZWF0dXJlPy5nZW9tZXRyeSlcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uRXhlY3V0ZSAoZGF0YVNldDogRGF0YVJlY29yZFNldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuICAgICAgY29uc3QgZmVhdHVyZVNldCA9IHtcclxuICAgICAgICBmZWF0dXJlczogcmVjb3Jkcy5tYXAocmVjb3JkID0+IGhhbmRsZUZlYXR1cmUoKHJlY29yZCBhcyBGZWF0dXJlRGF0YVJlY29yZCkuZmVhdHVyZSwgR3JhcGhpYyk/Lmdlb21ldHJ5KVxyXG4gICAgICB9XHJcbiAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdwYW5Ub0FjdGlvblZhbHVlLnZhbHVlJywgZmVhdHVyZVNldClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==