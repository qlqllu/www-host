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
/*!**************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/zoom-to.ts ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomTo)
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



class ZoomTo extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDataAction {
    isSupported(dataSet) {
        return __awaiter(this, void 0, void 0, function* () {
            const { records } = dataSet;
            // @ts-expect-error
            return records.length > 0 && records.some(record => { var _a; return (_a = record.feature) === null || _a === void 0 ? void 0 : _a.geometry; });
        });
    }
    onExecute(dataSet) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)(['esri/Graphic']).then(modules => {
                var _a, _b;
                let Graphic = null;
                [Graphic] = modules;
                const featureSet = {
                    features: dataSet.records.map(record => (0,_runtime_utils__WEBPACK_IMPORTED_MODULE_2__.handleFeature)(record.feature, Graphic)),
                    // @ts-expect-error
                    layerId: ((_b = (_a = dataSet.dataSource) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id) || null,
                    zoomToOption: {},
                    type: 'zoom-to-graphics'
                };
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'zoomToFeatureActionValue.value', featureSet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy96b29tLXRvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ21CO0FBR2tGO0FBRS9ILFNBQWUscUJBQXFCLENBQUUsV0FBOEMsRUFBRSxrQkFBMkQ7O1FBQ3RKLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRTtRQUMzQixrQkFBa0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDO1lBQ3hFLElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUM7Z0JBQ3BELE9BQU07YUFDUDtZQUNELGdCQUFnQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUYsQ0FBQyxDQUFDO1FBRUYsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLE9BQU8sSUFBSTtTQUNaO2FBQU07WUFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7U0FDckM7SUFDSCxDQUFDO0NBQUE7QUFFTSxTQUFlLGtCQUFrQixDQUFFLFdBQThDLEVBQUUsc0JBQStEOztRQUN2SixNQUFNLGNBQWMsR0FBRyxFQUFFO1FBQ3pCLHNCQUFzQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUUsTUFB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Ozs7OztBQ05xRztBQUNqRDtBQUNKO0FBRWpDLE1BQU0sTUFBTyxTQUFRLHlEQUFrQjtJQUM5QyxXQUFXLENBQUUsT0FBc0I7O1lBQ3ZDLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPO1lBQzNCLG1CQUFtQjtZQUNuQixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBQyxtQkFBTSxDQUFDLE9BQU8sMENBQUUsUUFBUSxJQUFDO1FBQy9FLENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBRSxPQUFzQjs7WUFDckMsT0FBTyxtRUFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztnQkFDN0QsSUFBSSxPQUFPLEdBQThCLElBQUksQ0FBQztnQkFDOUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPO2dCQUNuQixNQUFNLFVBQVUsR0FBRztvQkFDakIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsNkRBQWEsQ0FBRSxNQUE0QixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEcsbUJBQW1CO29CQUNuQixPQUFPLEVBQUUsb0JBQU8sQ0FBQyxVQUFVLDBDQUFFLEtBQUssMENBQUUsRUFBRSxLQUFJLElBQUk7b0JBQzlDLFlBQVksRUFBRSxFQUFFO29CQUNoQixJQUFJLEVBQUUsa0JBQWtCO2lCQUN6QjtnQkFDRCxzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLEVBQUUsVUFBVSxDQUFDO2dCQUMvRyxPQUFPLElBQUk7WUFDYixDQUFDLENBQUM7UUFDSixDQUFDO0tBQUE7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3J1bnRpbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL2RhdGEtYWN0aW9ucy96b29tLXRvLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xyXG5pbXBvcnQgeyBBcHBNb2RlLCBkYXRhU291cmNlVXRpbHMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCBNYXBCYXNlLCB7IEhpZ2hMaWdodEhhbmRsZSB9IGZyb20gJy4vY29tcG9uZW50cy9tYXBiYXNlJ1xyXG5pbXBvcnQgeyBJRmVhdHVyZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xyXG5pbXBvcnQgeyBnZW9tZXRyeVV0aWxzLCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLCBKaW11TWFwVmlldywgTGF5ZXJUeXBlcywgSmltdUZlYXR1cmVMYXllclZpZXcsIEppbXVTY2VuZUxheWVyVmlldyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld0ZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbmV3RmVhdHVyZVNldFZhbHVlPzoge1tsYXllcklEOiBzdHJpbmddOiBfX2VzcmkuRmVhdHVyZVNldH0pOiBQcm9taXNlPGFueT4ge1xyXG4gIGNvbnN0IG5ld0xheWVyUHJvbWlzZXMgPSBbXVxyXG4gIG5ld0ZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhuZXdGZWF0dXJlU2V0VmFsdWUpLmZvckVhY2gobGF5ZXJJZCA9PiB7XHJcbiAgICBjb25zdCBsYXllciA9IG1hcEJhc2VWaWV3Lm1hcC5sYXllcnMuZmluZChsYXllciA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZClcclxuICAgIGlmIChsYXllcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ3RoZSBmZWF0dXJlIGxheWVyIGlzIGFscmVhZHkgY3JlYXRlZCcpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbmV3TGF5ZXJQcm9taXNlcy5wdXNoKGFkZEZlYXR1cmVTZXRUb01hcChtYXBCYXNlVmlldywgbmV3RmVhdHVyZVNldFZhbHVlW2xheWVySWRdLCBsYXllcklkKSlcclxuICB9KVxyXG5cclxuICBpZiAobmV3TGF5ZXJQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChuZXdMYXllclByb21pc2VzKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUZlYXR1cmVsYXllciAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZT86IHtbbGF5ZXJJRDogc3RyaW5nXTogX19lc3JpLkZlYXR1cmVTZXR9KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB1cGRhdGVQcm9taXNlcyA9IFtdXHJcbiAgY2hhbmdlZEZlYXR1cmVTZXRWYWx1ZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VkRmVhdHVyZVNldFZhbHVlKS5mb3JFYWNoKGxheWVySWQgPT4ge1xyXG4gICAgY29uc3QgbGF5ZXIgPSBtYXBCYXNlVmlldy5tYXAubGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQpXHJcbiAgICBpZiAobGF5ZXIpIHtcclxuICAgICAgbWFwQmFzZVZpZXcubWFwLnJlbW92ZShsYXllcilcclxuICAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChhZGRGZWF0dXJlU2V0VG9NYXAobWFwQmFzZVZpZXcsIGNoYW5nZWRGZWF0dXJlU2V0VmFsdWVbbGF5ZXJJZF0sIGxheWVySWQpKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh1cGRhdGVQcm9taXNlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcylcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEZlYXR1cmVTZXRUb01hcCAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgZmVhdHVyZVNldDogX19lc3JpLkZlYXR1cmVTZXQsIGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShudWxsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGxldCBGZWF0dXJlU2V0OiB0eXBlb2YgIF9fZXNyaS5GZWF0dXJlU2V0O1xyXG4gICAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgIFtGZWF0dXJlTGF5ZXJdID0gbW9kdWxlcztcclxuXHJcbiAgICAgICAgY29uc3QgbGF5ZXJGcm9tRmVhdHVyZVNldCA9IGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0ubGF5ZXIgYXMgYW55XHJcbiAgICAgICAgY29uc3QgZmllbGRzSW5GZWF0dXJlbGF5ZXIgPSBbXVxyXG4gICAgICAgIGNvbnN0IGZpZWxkTWFwID0ge31cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IGdldFJlYXNvbmFibGVGaWVsZChsYXllckZyb21GZWF0dXJlU2V0LmZpZWxkc1tpXSlcclxuICAgICAgICAgIGZpZWxkTWFwW2xheWVyRnJvbUZlYXR1cmVTZXQuZmllbGRzW2ldLm5hbWVdID0gZmllbGRzSXRlbS5uYW1lXHJcbiAgICAgICAgICBmaWVsZHNJbkZlYXR1cmVsYXllci5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmaWVsZHNJblBvcHVwVGVtcGxhdGUgPSBbXVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZlYXR1cmVTZXQuZmVhdHVyZXNbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgaWYgKGZpZWxkTWFwW2tleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzSXRlbSA9IHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTWFwW2tleV0sXHJcbiAgICAgICAgICAgICAgbGFiZWw6IGtleVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpZWxkc0luUG9wdXBUZW1wbGF0ZS5wdXNoKGZpZWxkc0l0ZW0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2VGZWF0dXJlcyA9IFtdXHJcbiAgICAgICAgZmVhdHVyZVNldC5mZWF0dXJlcy5mb3JFYWNoKChmZWF0dXJlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGVtcEZlYXR1cmUgPSBmZWF0dXJlXHJcbiAgICAgICAgICBpZiAodGVtcEZlYXR1cmUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgdGVtcEZlYXR1cmUuYXR0cmlidXRlc1tmaWVsZE1hcFtrZXldXSA9IHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXNba2V5XVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzLmV4YmZpZCA9IGluZGV4XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wRmVhdHVyZS5hdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgICAgICAgIGV4YmZpZDogaW5kZXhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc291cmNlRmVhdHVyZXMucHVzaCh0ZW1wRmVhdHVyZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgICAgaWQ6IGxheWVySWQsXHJcbiAgICAgICAgICB0aXRsZTogbGF5ZXJGcm9tRmVhdHVyZVNldC50aXRsZSxcclxuICAgICAgICAgIHNvdXJjZTogc291cmNlRmVhdHVyZXMsXHJcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkc0luRmVhdHVyZWxheWVyLFxyXG4gICAgICAgICAgb3V0RmllbGRzOiBbJyonXSxcclxuICAgICAgICAgIG9iamVjdElkRmllbGQ6ICdleGJmaWQnLFxyXG4gICAgICAgICAgcmVuZGVyZXI6IGxheWVyRnJvbUZlYXR1cmVTZXQucmVuZGVyZXIsXHJcbiAgICAgICAgICBwb3B1cEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICBwb3B1cFRlbXBsYXRlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnaW5mb3JtYXRpb24nLFxyXG4gICAgICAgICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgICAgICAgIHR5cGU6ICdmaWVsZHMnLFxyXG4gICAgICAgICAgICAgIGZpZWxkSW5mb3M6IGZpZWxkc0luUG9wdXBUZW1wbGF0ZVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIG1hcEJhc2VWaWV3Lm1hcC5hZGQobGF5ZXIpXHJcblxyXG4gICAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUobnVsbClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlYXNvbmFibGVGaWVsZCAoZmllbGQ6IF9fZXNyaS5GaWVsZCk6IF9fZXNyaS5GaWVsZCB7XHJcbiAgLy8gdGhlIGZ1bmN0aW9uIGlzIHN1cHBvcnRlZCB0byBub3JtYWxpemUgdGhlIGZpZWxkLm5hbWVcclxuICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IGZpZWxkTmFtZS5yZXBsYWNlKC9cXC4vZywgJ18nKS5yZXBsYWNlKC9cXCgvZywgJ18nKS5yZXBsYWNlKC9cXCkvZywgJ18nKSxcclxuICAgIGFsaWFzOiBmaWVsZC5hbGlhcyxcclxuICAgIHR5cGU6IGZpZWxkLnR5cGVcclxuICB9IGFzIGFueVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0RmVhdHVyZSAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgdGFyZ2V0OiBfX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBJRmVhdHVyZSB8IElGZWF0dXJlW10sIGxheWVySWQ/OiBzdHJpbmcpOiBIaWdoTGlnaHRIYW5kbGUge1xyXG4gIC8vIEluIHRoaXMgZnVuY3Rpb24sIHdlIGFzc3VtZSB0aGF0IGZlYXR1cmVzIGNvbWUgZnJvbSB0aGUgc2FtZSBsYXllclxyXG4gIGxldCBmZWF0dXJlTGF5ZXJJZCA9IGxheWVySWRcclxuICBsZXQgZmVhdHVyZUxheWVyVmlldyA9IG51bGxcclxuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXHJcblxyXG4gIC8vIGlmIGxheWVySWQgZG9lc24ndCBleGlzdCwgd2UgZ2V0IGxheWVySWQgYnkgZmVhdHVyZVxyXG4gIGlmICghZmVhdHVyZUxheWVySWQpIHtcclxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICB0ZW1wRmVhdHVyZSA9IHRhcmdldFswXSBhcyBfX2VzcmkuR3JhcGhpY1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcEZlYXR1cmUgPSB0YXJnZXQgYXMgX19lc3JpLkdyYXBoaWNcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcEZlYXR1cmUpIHtcclxuICAgICAgZmVhdHVyZUxheWVySWQgPSB0ZW1wRmVhdHVyZS5sYXllciAmJiB0ZW1wRmVhdHVyZS5sYXllci5pZFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGZlYXR1cmVMYXllcklkKSB7XHJcbiAgICBjb25zdCBsYXllclZpZXdzID0gbWFwQmFzZVZpZXcuYWxsTGF5ZXJWaWV3c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllclZpZXdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChsYXllclZpZXdzLmdldEl0ZW1BdChpKS5sYXllci5pZCA9PT0gZmVhdHVyZUxheWVySWQpIHtcclxuICAgICAgICBmZWF0dXJlTGF5ZXJWaWV3ID0gbGF5ZXJWaWV3cy5nZXRJdGVtQXQoaSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmZWF0dXJlTGF5ZXJWaWV3KSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF5ZXJJZDogZmVhdHVyZUxheWVySWQsXHJcbiAgICAgICAgaGFuZGxlOiBmZWF0dXJlTGF5ZXJWaWV3LmhpZ2hsaWdodCh0YXJnZXQpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFwUGFudG8gKG1hcEJhc2VWaWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsIHRhcmdldDogX19lc3JpLkdlb21ldHJ5IHwgX19lc3JpLkdlb21ldHJ5W10gfFxyXG5fX2VzcmkuR3JhcGhpYyB8IF9fZXNyaS5HcmFwaGljW10gfCBfX2VzcmkuRXh0ZW50KTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCBwYW5Ub1RhcmdldCA9IHRhcmdldCBhcyBhbnlcclxuICBjb25zdCB0ZW1wQmFzZU1hcFZpZXcgPSBtYXBCYXNlVmlldyBhcyBhbnlcclxuICBpZiAocGFuVG9UYXJnZXQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgaWYgKHBhblRvVGFyZ2V0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSgpXHJcblxyXG4gICAgaWYgKHBhblRvVGFyZ2V0WzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgIGNvbnN0IGdlb21ldHJ5QXJyOiBfX2VzcmkuR2VvbWV0cnlbXSA9IFtdXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFuVG9UYXJnZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBnZW9tZXRyeUFyci5wdXNoKHBhblRvVGFyZ2V0W2ldLmdlb21ldHJ5KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXdhaXQgZ2V0R2VvbWV0cmllc0V4dGVudChnZW9tZXRyeUFycikudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBCYXNlTWFwVmlldy5nb1RvKGV4dGVudC5jZW50ZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZ2V0R2VvbWV0cmllc0V4dGVudChwYW5Ub1RhcmdldCkudGhlbigoZXh0ZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBCYXNlTWFwVmlldy5nb1RvKGV4dGVudC5jZW50ZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChwYW5Ub1RhcmdldC5nZW9tZXRyeSkge1xyXG4gICAgICBjb25zdCBnZXRtZXRyeSA9IHBhblRvVGFyZ2V0Lmdlb21ldHJ5IGFzIF9fZXNyaS5HZW9tZXRyeVxyXG4gICAgICByZXR1cm4gdGVtcEJhc2VNYXBWaWV3LmdvVG8oZ2V0Q2VudGVyUG9pbnQoZ2V0bWV0cnkpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRlbXBCYXNlTWFwVmlldy5nb1RvKGdldENlbnRlclBvaW50KHBhblRvVGFyZ2V0KSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEdlb21ldHJpZXNFeHRlbnQgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdKTogUHJvbWlzZTxfX2VzcmkuRXh0ZW50PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgJ2VzcmkvZ2VvbWV0cnkvRXh0ZW50J1xyXG4gIF0pLnRoZW4oYXN5bmMgbW9kdWxlcyA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxldCBFeHRlbnQ6IHR5cGVvZiBfX2VzcmkuRXh0ZW50O1xyXG4gICAgW0V4dGVudF0gPSBtb2R1bGVzXHJcblxyXG4gICAgaWYgKCFnZW9tZXRyaWVzIHx8ICFnZW9tZXRyaWVzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZ1bGxFeHRlbnQ6IF9fZXNyaS5FeHRlbnQgPSBudWxsXHJcbiAgICBsZXQgaW5kZXhcclxuICAgIGNvbnN0IG51bUdlb21ldHJpZXMgPSBnZW9tZXRyaWVzLmxlbmd0aFxyXG5cclxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IG51bUdlb21ldHJpZXM7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzW2luZGV4XVxyXG4gICAgICBpZiAoIWdlb21ldHJ5KSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGV4dGVudCA9IGdlb21ldHJ5LmV4dGVudFxyXG5cclxuICAgICAgaWYgKCFleHRlbnQgJiYgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvaW50Jykge1xyXG4gICAgICAgIGNvbnN0IHBvaW50R2VvbWV0cnkgPSBnZW9tZXRyeSBhcyBhbnlcclxuXHJcbiAgICAgICAgaWYgKHBvaW50R2VvbWV0cnkueCAmJiBwb2ludEdlb21ldHJ5LnkpIHtcclxuICAgICAgICAgIGV4dGVudCA9IG5ldyBFeHRlbnQoe1xyXG4gICAgICAgICAgICB4bWF4OiBwb2ludEdlb21ldHJ5LngsXHJcbiAgICAgICAgICAgIHhtaW46IHBvaW50R2VvbWV0cnkueCxcclxuICAgICAgICAgICAgeW1heDogcG9pbnRHZW9tZXRyeS55LFxyXG4gICAgICAgICAgICB5bWluOiBwb2ludEdlb21ldHJ5LnksXHJcbiAgICAgICAgICAgIHptYXg6IHBvaW50R2VvbWV0cnkueixcclxuICAgICAgICAgICAgem1pbjogcG9pbnRHZW9tZXRyeS56LFxyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiBwb2ludEdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWV4dGVudCkge1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmdWxsRXh0ZW50KSB7XHJcbiAgICAgICAgZnVsbEV4dGVudCA9IGZ1bGxFeHRlbnQudW5pb24oZXh0ZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZ1bGxFeHRlbnQgPSBleHRlbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmdWxsRXh0ZW50LndpZHRoIDwgMCAmJiBmdWxsRXh0ZW50LmhlaWdodCA8IDApIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZnVsbEV4dGVudClcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRmVhdHVyZXNCeVF1ZXJ5IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIGxheWVyRGF0YVNvdXJjZUlkOiBzdHJpbmcsIHF1ZXJ5U1FMOiBzdHJpbmcpOiB2b2lkIHtcclxuICBpZiAobGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gamltdU1hcFZpZXcuamltdUxheWVyVmlld3NcclxuICAgIGNvbnN0IGppbXVMYXllclZpZXdJZHMgPSBPYmplY3Qua2V5cyhqaW11TGF5ZXJWaWV3cylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgamltdUxheWVyVmlld0lkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgdGVtcEppbXVMYXllclZpZXcgPSBqaW11TGF5ZXJWaWV3c1tqaW11TGF5ZXJWaWV3SWRzW2ldXVxyXG4gICAgICBpZiAodGVtcEppbXVMYXllclZpZXcgJiYgdGVtcEppbXVMYXllclZpZXcubGF5ZXIgJiYgdGVtcEppbXVMYXllclZpZXcubGF5ZXJEYXRhU291cmNlSWQgPT09IGxheWVyRGF0YVNvdXJjZUlkICYmXHJcbiAgICAgICAgKHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuRmVhdHVyZUxheWVyIHx8IHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikpIHtcclxuICAgICAgICAodGVtcEppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLnNldExvY2FsRGVmaW5pdGlvbkV4cHJlc3Npb24ocXVlcnlTUUwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RmVhdHVyZXMgKGxheWVyT2JqZWN0LCBxdWVyeVNRTCkge1xyXG4gIHJldHVybiBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICBdKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgbGV0IFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5O1xyXG4gICAgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KClcclxuICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlTUUxcclxuICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFsnKiddXHJcbiAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgIHJldHVybiBsYXllck9iamVjdC5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICByZXR1cm4gZmVhdHVyZVNldFxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBmbGFzaE9uRmVhdHVyZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11RmVhdHVyZUxheWVyVmlldykge1xyXG4gIGlmICgodGVtcEppbXVMYXllclZpZXcpLnZpZXcpIHtcclxuICAgIGxldCBmZWF0dXJlTGF5ZXJWaWV3OiBfX2VzcmkuRmVhdHVyZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgaWYgKGZlYXR1cmVMYXllclZpZXcpIHtcclxuICAgICAgcXVlcnlGZWF0dXJlcyhmZWF0dXJlTGF5ZXJWaWV3LmxheWVyLCBxdWVyeVNRTCkudGhlbihmZWF0dXJlU2V0ID0+IHtcclxuICAgICAgICBpZiAoZmVhdHVyZVNldCAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZUxheWVyVmlldy5sYXllci5nZW9tZXRyeVR5cGUpXHJcbiAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcidcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIGxldCBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyO1xyXG4gICAgICBbRmVhdHVyZUxheWVyXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGxldCB0ZW1wRmVhdHVyZUxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdXJsOiBkYXRhU291cmNlVXRpbHMuZ2V0VXJsQnlMYXllcigodGVtcEppbXVMYXllclZpZXcgYXMgSmltdUZlYXR1cmVMYXllclZpZXcgfCBKaW11U2NlbmVMYXllclZpZXcpLmxheWVyKVxyXG4gICAgICB9KVxyXG4gICAgICB0ZW1wRmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICBxdWVyeUZlYXR1cmVzKHRlbXBGZWF0dXJlTGF5ZXIsIHF1ZXJ5U1FMKS50aGVuKGZlYXR1cmVTZXQgPT4ge1xyXG4gICAgICAgICAgaWYgKGZlYXR1cmVTZXQgJiYgZmVhdHVyZVNldC5mZWF0dXJlcyAmJiBmZWF0dXJlU2V0LmZlYXR1cmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gZ2V0Rmxhc2hTeW1ib2woZmVhdHVyZVNldC5mZWF0dXJlc1swXS5nZW9tZXRyeS50eXBlKVxyXG4gICAgICAgICAgICBzdGFydEZsYXNoKGppbXVNYXBWaWV3LnZpZXcsIGZlYXR1cmVTZXQuZmVhdHVyZXMsIHN5bWJvbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmxldCBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBudWxsXHJcbmZ1bmN0aW9uIGZsYXNoT25TY2VuZUxheWVyIChqaW11TWFwVmlldzogSmltdU1hcFZpZXcsIHF1ZXJ5U1FMOiBzdHJpbmcsIHRlbXBKaW11TGF5ZXJWaWV3OiBKaW11U2NlbmVMYXllclZpZXcpIHtcclxuICBpZiAoKHRlbXBKaW11TGF5ZXJWaWV3KS52aWV3KSB7XHJcbiAgICBsZXQgc2NlbmVMYXllclZpZXc6IF9fZXNyaS5TY2VuZUxheWVyVmlldyA9ICh0ZW1wSmltdUxheWVyVmlldykudmlld1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcXVlcnlGZWF0dXJlcyhzY2VuZUxheWVyVmlldz8ubGF5ZXI/LmFzc29jaWF0ZWRMYXllciwgcXVlcnlTUUwpLnRoZW4oZmVhdHVyZVNldCA9PiB7XHJcbiAgICAgIGlmIChmZWF0dXJlU2V0ICYmIGZlYXR1cmVTZXQuZmVhdHVyZXMgJiYgZmVhdHVyZVNldC5mZWF0dXJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0SWRGaWVsZCA9IHNjZW5lTGF5ZXJWaWV3LmxheWVyLm9iamVjdElkRmllbGRcclxuICAgICAgICBjb25zdCBvYmplY3RJZHMgPSBmZWF0dXJlU2V0LmZlYXR1cmVzLm1hcChmZWF0dXJlID0+IGZlYXR1cmUuYXR0cmlidXRlc1tvYmplY3RJZEZpZWxkXSlcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwXHJcbiAgICAgICAgY29uc3QgbWF4Rmxhc2hDb3VudCA9IDZcclxuICAgICAgICBsZXQgaGlnaGxpZ2h0Q29sb3IgPSBbMjU1LCAyNTUsIDAsIDAuOF1cclxuICAgICAgICBjb25zdCBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnMgPSBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnNcclxuXHJcbiAgICAgICAgY29uc3QgZmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoaSA8IG1heEZsYXNoQ291bnQpIHtcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGlmIChoaWdobGlnaHRDb2xvcikge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gbnVsbFxyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSB7IGNvbG9yOiBbMCwgMCwgMCwgMF0gfVxyXG4gICAgICAgICAgICAgIHNjZW5lSGlnaHRsaWdodEhhbmRsZSAmJiBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUucmVtb3ZlKClcclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgPSBzY2VuZUxheWVyVmlldy5oaWdobGlnaHQob2JqZWN0SWRzKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodENvbG9yID0gWzI1NSwgMjU1LCAwLCAwLjhdXHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcuaGlnaGxpZ2h0T3B0aW9ucyA9IHsgY29sb3I6IGhpZ2hsaWdodENvbG9yIH1cclxuICAgICAgICAgICAgICBzY2VuZUhpZ2h0bGlnaHRIYW5kbGUgJiYgc2NlbmVIaWdodGxpZ2h0SGFuZGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlID0gc2NlbmVMYXllclZpZXcuaGlnaGxpZ2h0KG9iamVjdElkcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBqaW11TWFwVmlldy52aWV3LmhpZ2hsaWdodE9wdGlvbnMgPSBvcmlnaW5hbEhpZ2hsaWdodE9wdGlvbnNcclxuICAgICAgICAgICAgc2NlbmVIaWdodGxpZ2h0SGFuZGxlICYmIHNjZW5lSGlnaHRsaWdodEhhbmRsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KGZsYXNoLCA1MDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhc2hGZWF0dXJlc0J5UXVlcnkgKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldywgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyk6IHZvaWQge1xyXG4gIGlmIChsYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBqaW11TWFwVmlldy5qaW11TGF5ZXJWaWV3c1xyXG4gICAgY29uc3QgamltdUxheWVyVmlld0lkcyA9IE9iamVjdC5rZXlzKGppbXVMYXllclZpZXdzKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqaW11TGF5ZXJWaWV3SWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCB0ZW1wSmltdUxheWVyVmlldyA9IGppbXVMYXllclZpZXdzW2ppbXVMYXllclZpZXdJZHNbaV1dXHJcbiAgICAgIGlmICh0ZW1wSmltdUxheWVyVmlldyAmJiB0ZW1wSmltdUxheWVyVmlldy5sYXllciAmJiB0ZW1wSmltdUxheWVyVmlldy5sYXllckRhdGFTb3VyY2VJZCA9PT0gbGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgICAgICBpZiAodGVtcEppbXVMYXllclZpZXcudHlwZSA9PT0gTGF5ZXJUeXBlcy5GZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgICAgIGZsYXNoT25GZWF0dXJlTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCB0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11RmVhdHVyZUxheWVyVmlldylcclxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBKaW11TGF5ZXJWaWV3LnR5cGUgPT09IExheWVyVHlwZXMuU2NlbmVMYXllcikge1xyXG4gICAgICAgICAgZmxhc2hPblNjZW5lTGF5ZXIoamltdU1hcFZpZXcsIHF1ZXJ5U1FMLCB0ZW1wSmltdUxheWVyVmlldyBhcyBKaW11U2NlbmVMYXllclZpZXcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEZsYXNoIChtYXBCYXNlVmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LCBmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgc3ltYm9sKSB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAnZXNyaS9HcmFwaGljJ1xyXG4gIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGxldCBHcmFwaGljOiB0eXBlb2YgX19lc3JpLkdyYXBoaWM7XHJcbiAgICBbR3JhcGhpY10gPSBtb2R1bGVzXHJcblxyXG4gICAgY29uc3QgZmxhc2hGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0dXJlczogX19lc3JpLkdyYXBoaWNbXSwgbWF4Rmxhc2hDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IGdyYXBoaWNzID0gW11cclxuICAgICAgbGV0IGZsYXNoQ291bnQgPSAwXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZW1wR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgIGdlb21ldHJ5OiBmZWF0dXJlc1tpXS5nZW9tZXRyeSxcclxuICAgICAgICAgIHN5bWJvbDogc3ltYm9sLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogZmVhdHVyZXNbaV0uYXR0cmlidXRlc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZ3JhcGhpY3MucHVzaCh0ZW1wR3JhcGhpYylcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2luZ2xlRmxhc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFwQmFzZVZpZXcuZ3JhcGhpY3MuYWRkTWFueShncmFwaGljcylcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1hcEJhc2VWaWV3LmdyYXBoaWNzLnJlbW92ZU1hbnkoZ3JhcGhpY3MpXHJcbiAgICAgICAgICBmbGFzaENvdW50ID0gZmxhc2hDb3VudCArIDFcclxuICAgICAgICAgIGlmIChmbGFzaENvdW50IDwgbWF4Rmxhc2hDb3VudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzaW5nbGVGbGFzaCgpXHJcbiAgICAgICAgICAgIH0sIDUwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNpbmdsZUZsYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmbGFzaEZlYXR1cmVzKGZlYXR1cmVzLCAzKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZsYXNoU3ltYm9sIChnZW9tZXRyeVR5cGU6IHN0cmluZykge1xyXG4gIGlmIChbJ3BvaW50JywgJ211bHRpcG9pbnQnXS5pbmNsdWRlcyhnZW9tZXRyeVR5cGUpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiAnc2ltcGxlLW1hcmtlcicsXHJcbiAgICAgIHN0eWxlOiAnY2lyY2xlJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgc2l6ZTogJzE2cHgnLFxyXG4gICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgICB3aWR0aDogM1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlsaW5lJ10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1saW5lJyxcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC44XSxcclxuICAgICAgd2lkdGg6IDMsXHJcbiAgICAgIHN0eWxlOiAnc29saWQnXHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChbJ3BvbHlnb24nLCAnZXh0ZW50J10uaW5jbHVkZXMoZ2VvbWV0cnlUeXBlKSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVGaWxsU3ltYm9sKClcclxuICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSxcclxuICAgICAgc3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIG91dGxpbmU6IHsgLy8gYXV0b2Nhc3RzIGFzIG5ldyBTaW1wbGVMaW5lU3ltYm9sKClcclxuICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdLFxyXG4gICAgICAgIHdpZHRoOiAzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2UgaWYgKFsnbWVzaCddLmluY2x1ZGVzKGdlb21ldHJ5VHlwZSkpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6ICdtZXNoLTNkJywgLy8gYXV0b2Nhc3RzIGFzIG5ldyBNZXNoU3ltYm9sM0QoKVxyXG4gICAgICBzeW1ib2xMYXllcnM6IFt7XHJcbiAgICAgICAgdHlwZTogJ2ZpbGwnLCAvLyBhdXRvY2FzdHMgYXMgbmV3IEZpbGxTeW1ib2wzRExheWVyKClcclxuICAgICAgICBtYXRlcmlhbDogeyBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjhdIH1cclxuICAgICAgfV1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENlbnRlclBvaW50IChnZW9tZXRyeTogX19lc3JpLkdlb21ldHJ5KTogX19lc3JpLlBvaW50IHtcclxuICAvLyBwb2ludCB8IG11bHRpcG9pbnQgfCBwb2x5bGluZSB8IHBvbHlnb24gfCBleHRlbnQgfCBtZXNoXHJcbiAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XHJcbiAgICBjYXNlICdwb2ludCc6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSBhcyBfX2VzcmkuUG9pbnRcclxuICAgIGNhc2UgJ2V4dGVudCc6XHJcbiAgICAgIHJldHVybiAoZ2VvbWV0cnkgYXMgX19lc3JpLkV4dGVudCkuY2VudGVyXHJcbiAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvbikuY2VudHJvaWRcclxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgcmV0dXJuIChnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWxpbmUpLmV4dGVudC5jZW50ZXJcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBnZW9tZXRyeSAmJiBnZW9tZXRyeS5leHRlbnQgPyBnZW9tZXRyeS5leHRlbnQuY2VudGVyIDogdW5kZWZpbmVkXHJcbiAgICAvLyB0b2RvXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRmVhdHVyZSAoZmVhdHVyZTogSUZlYXR1cmUgfCBfX2VzcmkuR3JhcGhpYywgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3Rvcik6IF9fZXNyaS5HcmFwaGljIHtcclxuICBsZXQgdGVtcEZlYXR1cmUgPSBudWxsXHJcbiAgaWYgKChmZWF0dXJlIGFzIGFueSkuY2xvbmUpIHtcclxuICAgIHRlbXBGZWF0dXJlID0gKGZlYXR1cmUgYXMgYW55KS5jbG9uZSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBGZWF0dXJlID0gR3JhcGhpYy5mcm9tSlNPTihPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlKSlcclxuICAgIHRlbXBGZWF0dXJlLmF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBmZWF0dXJlLmF0dHJpYnV0ZXMpXHJcbiAgfVxyXG4gIHJldHVybiB0ZW1wRmVhdHVyZVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvamVjdEdlb21ldHJpZXMgKGdlb21ldHJpZXM6IF9fZXNyaS5HZW9tZXRyeVtdLCBzcGF0aWFsUmVmZXJlbmNlOiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZSk6IFByb21pc2U8X19lc3JpLkdlb21ldHJ5W10+IHtcclxuICBpZiAoIWdlb21ldHJpZXMgfHwgZ2VvbWV0cmllcy5sZW5ndGggPT09IDAgfHwgIWdlb21ldHJpZXNbMF0gfHxcclxuICAgIHNwYXRpYWxSZWZlcmVuY2Uud2tpZCA9PT0gZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLndraWQgfHwgKHNwYXRpYWxSZWZlcmVuY2UuZXF1YWxzKGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZSkpKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGdlb21ldHJpZXMpXHJcbiAgfSBlbHNlIGlmIChzcGF0aWFsUmVmZXJlbmNlLmlzV2ViTWVyY2F0b3IgJiYgZ2VvbWV0cmllc1swXS5zcGF0aWFsUmVmZXJlbmNlLmlzV0dTODQpIHtcclxuICAgIC8vIEluIGpzIGFwaSA0LngsIHRoZSB2aWV3IGNhbiBoYW5kbGUgV2ViTWVyY2F0b3IgYW5kIFdHUzg0IHNwYXRpYWxSZWZlcmVuY2UgYXV0b1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZW9tZXRyaWVzKVxyXG4gIH0gZWxzZSBpZiAoc3BhdGlhbFJlZmVyZW5jZS5pc1dHUzg0ICYmIGdlb21ldHJpZXNbMF0uc3BhdGlhbFJlZmVyZW5jZS5pc1dlYk1lcmNhdG9yKSB7XHJcbiAgICAvLyBJbiBqcyBhcGkgNC54LCB0aGUgdmlldyBjYW4gaGFuZGxlIFdlYk1lcmNhdG9yIGFuZCBXR1M4NCBzcGF0aWFsUmVmZXJlbmNlIGF1dG9cclxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2VvbWV0cmllcylcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdlb21ldHJ5VXRpbHMucHJvamVjdFRvU3BhdGlhbFJlZmVyZW5jZShnZW9tZXRyaWVzLCBzcGF0aWFsUmVmZXJlbmNlKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3Nab29tVG9GZWF0dXJlcyAobWFwQmFzZVZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldywgbGF5ZXI6IGFueSwgZmVhdHVyZXM6IF9fZXNyaS5HcmFwaGljW10pOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljW10+IHtcclxuICBpZiAobWFwQmFzZVZpZXcgJiYgbWFwQmFzZVZpZXcudHlwZSA9PT0gJzNkJyAmJiBsYXllciAmJiBsYXllci5xdWVyeUZlYXR1cmVzICYmIGZlYXR1cmVzKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgY29uc3QgW1F1ZXJ5XSA9IG1vZHVsZXNcclxuICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKVxyXG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgcXVlcnkub3V0RmllbGRzID0gWycqJ11cclxuICAgICAgcXVlcnkub2JqZWN0SWRzID0gZmVhdHVyZXMubWFwKGZlYXR1cmUgPT4gZmVhdHVyZS5hdHRyaWJ1dGVzW2xheWVyLm9iamVjdElkRmllbGRdKVxyXG4gICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZmVhdHVyZXMgJiYgcmVzdWx0LmZlYXR1cmVzLmxlbmd0aCA9PT0gZmVhdHVyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdC5mZWF0dXJlcylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZlYXR1cmVzKVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShmZWF0dXJlcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lzTGl2ZSAoYXBwTW9kZTogQXBwTW9kZSk6IGJvb2xlYW4ge1xyXG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0luQnVpbGRlcikge1xyXG4gICAgaWYgKGFwcE1vZGUgPT09IEFwcE1vZGUuRGVzaWduKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXBCYXNlUmVzdG9yZURhdGEgKG1hcEluc3RhbmNlOiBNYXBCYXNlKTogYW55IHtcclxuICByZXR1cm4ge1xyXG4gICAgbWFwQ29udGFpbmVyOiBtYXBJbnN0YW5jZS5tYXBDb250YWluZXIsXHJcbiAgICBzdGF0ZTogbWFwSW5zdGFuY2Uuc3RhdGUsXHJcbiAgICBNYXBWaWV3OiBtYXBJbnN0YW5jZS5NYXBWaWV3LFxyXG4gICAgU2NlbmVWaWV3OiBtYXBJbnN0YW5jZS5TY2VuZVZpZXcsXHJcbiAgICBFeHRlbnQ6IG1hcEluc3RhbmNlLkV4dGVudCxcclxuICAgIFZpZXdwb2ludDogbWFwSW5zdGFuY2UuVmlld3BvaW50LFxyXG4gICAgbWFwVmlldzogbWFwSW5zdGFuY2UubWFwVmlldyxcclxuICAgIHNjZW5lVmlldzogbWFwSW5zdGFuY2Uuc2NlbmVWaWV3LFxyXG4gICAgZXh0ZW50V2F0Y2g6IG1hcEluc3RhbmNlLmV4dGVudFdhdGNoLFxyXG4gICAgZmF0YWxFcnJvcldhdGNoOiBtYXBJbnN0YW5jZS5mYXRhbEVycm9yV2F0Y2gsXHJcbiAgICBkc01hbmFnZXI6IG1hcEluc3RhbmNlLmRzTWFuYWdlcixcclxuICAgIGhpZ2hMaWdodEhhbmRsZXM6IG1hcEluc3RhbmNlLmhpZ2hMaWdodEhhbmRsZXMsXHJcbiAgICBtYXBCYXNlVmlld0V2ZW50SGFuZGxlczogbWFwSW5zdGFuY2UubWFwQmFzZVZpZXdFdmVudEhhbmRsZXMsXHJcbiAgICBDb2xvcjogbWFwSW5zdGFuY2UuQ29sb3IsXHJcbiAgICBpc1JlcXVlc3RpbmdNYXA6IG1hcEluc3RhbmNlLmlzUmVxdWVzdGluZ01hcFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3RvcmVNYXBCYXNlIChtYXBJbnN0YW5jZTogTWFwQmFzZSwgcmVzdG9yZURhdGE6IGFueSk6IHZvaWQge1xyXG4gIG1hcEluc3RhbmNlLm1hcENvbnRhaW5lciA9IHJlc3RvcmVEYXRhLm1hcENvbnRhaW5lclxyXG4gIG1hcEluc3RhbmNlLnN0YXRlID0gcmVzdG9yZURhdGEuc3RhdGVcclxuICBtYXBJbnN0YW5jZS5NYXBWaWV3ID0gcmVzdG9yZURhdGEuTWFwVmlld1xyXG4gIG1hcEluc3RhbmNlLlNjZW5lVmlldyA9IHJlc3RvcmVEYXRhLlNjZW5lVmlld1xyXG4gIG1hcEluc3RhbmNlLkV4dGVudCA9IHJlc3RvcmVEYXRhLkV4dGVudFxyXG4gIG1hcEluc3RhbmNlLlZpZXdwb2ludCA9IHJlc3RvcmVEYXRhLlZpZXdwb2ludFxyXG4gIG1hcEluc3RhbmNlLm1hcFZpZXcgPSByZXN0b3JlRGF0YS5tYXBWaWV3XHJcbiAgbWFwSW5zdGFuY2Uuc2NlbmVWaWV3ID0gcmVzdG9yZURhdGEuc2NlbmVWaWV3XHJcbiAgbWFwSW5zdGFuY2UuZXh0ZW50V2F0Y2ggPSByZXN0b3JlRGF0YS5leHRlbnRXYXRjaFxyXG4gIG1hcEluc3RhbmNlLmZhdGFsRXJyb3JXYXRjaCA9IHJlc3RvcmVEYXRhLmZhdGFsRXJyb3JXYXRjaFxyXG4gIG1hcEluc3RhbmNlLmRzTWFuYWdlciA9IHJlc3RvcmVEYXRhLmRzTWFuYWdlclxyXG4gIG1hcEluc3RhbmNlLmhpZ2hMaWdodEhhbmRsZXMgPSByZXN0b3JlRGF0YS5oaWdoTGlnaHRIYW5kbGVzXHJcbiAgbWFwSW5zdGFuY2UubWFwQmFzZVZpZXdFdmVudEhhbmRsZXMgPSByZXN0b3JlRGF0YS5tYXBCYXNlVmlld0V2ZW50SGFuZGxlc1xyXG4gIG1hcEluc3RhbmNlLkNvbG9yID0gcmVzdG9yZURhdGEuQ29sb3JcclxuICBtYXBJbnN0YW5jZS5pc1JlcXVlc3RpbmdNYXAgPSByZXN0b3JlRGF0YS5pc1JlcXVlc3RpbmdNYXBcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBYnN0cmFjdERhdGFBY3Rpb24sIERhdGFSZWNvcmRTZXQsIE11dGFibGVTdG9yZU1hbmFnZXIsIEZlYXR1cmVEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBsb2FkQXJjR0lTSlNBUElNb2R1bGVzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7IGhhbmRsZUZlYXR1cmUgfSBmcm9tICcuLi9ydW50aW1lL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbVRvIGV4dGVuZHMgQWJzdHJhY3REYXRhQWN0aW9uIHtcclxuICBhc3luYyBpc1N1cHBvcnRlZCAoZGF0YVNldDogRGF0YVJlY29yZFNldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSBkYXRhU2V0XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICByZXR1cm4gcmVjb3Jkcy5sZW5ndGggPiAwICYmIHJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmZlYXR1cmU/Lmdlb21ldHJ5KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25FeGVjdXRlIChkYXRhU2V0OiBEYXRhUmVjb3JkU2V0KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbJ2VzcmkvR3JhcGhpYyddKS50aGVuKG1vZHVsZXMgPT4ge1xyXG4gICAgICBsZXQgR3JhcGhpYzogX19lc3JpLkdyYXBoaWNDb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgIFtHcmFwaGljXSA9IG1vZHVsZXNcclxuICAgICAgY29uc3QgZmVhdHVyZVNldCA9IHtcclxuICAgICAgICBmZWF0dXJlczogZGF0YVNldC5yZWNvcmRzLm1hcChyZWNvcmQgPT4gaGFuZGxlRmVhdHVyZSgocmVjb3JkIGFzIEZlYXR1cmVEYXRhUmVjb3JkKS5mZWF0dXJlLCBHcmFwaGljKSksXHJcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICAgIGxheWVySWQ6IGRhdGFTZXQuZGF0YVNvdXJjZT8ubGF5ZXI/LmlkIHx8IG51bGwsXHJcbiAgICAgICAgem9vbVRvT3B0aW9uOiB7fSxcclxuICAgICAgICB0eXBlOiAnem9vbS10by1ncmFwaGljcydcclxuICAgICAgfVxyXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnem9vbVRvRmVhdHVyZUFjdGlvblZhbHVlLnZhbHVlJywgZmVhdHVyZVNldClcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==