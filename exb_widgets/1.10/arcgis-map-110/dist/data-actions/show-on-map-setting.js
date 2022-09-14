System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
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

/***/ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/map":
/*!***************************************!*\
  !*** external "jimu-ui/advanced/map" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__;

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
/*!***************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/data-actions/show-on-map-setting.tsx ***!
  \***************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");

//import { TextInput } from 'jimu-ui'





class _ShowOnMapSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.handleIsUseCustomSymbolOption = (isUseCustomSymbol) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.set('isUseCustomSymbol', isUseCustomSymbol).set('symbolOption', null)));
        };
        this.onSymbolCreated = (symbol, type) => {
            this.defaultSymbolOption = this.defaultSymbolOption.set(type, symbol === null || symbol === void 0 ? void 0 : symbol.toJSON());
            if (!this.props.config.symbolOption &&
                this.defaultSymbolOption.pointSymbol &&
                this.defaultSymbolOption.polylineSymbol &&
                this.defaultSymbolOption.polygonSymbol) {
                this.props.onSettingChange(Object.assign({}, this.props.config.set('symbolOption', this.defaultSymbolOption)));
            }
        };
        this.onSymbolChanged = (symbol, type) => {
            this.props.onSettingChange(Object.assign({}, this.props.config.setIn(['symbolOption', type], symbol.toJSON())));
        };
        this.getInitSymbolFromConfig = (jimuSymbolType) => {
            let symbol;
            const symbolOption = this.props.config.symbolOption;
            if (this.jsonUtils) {
                if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.pointSymbol) ? symbolOption.pointSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('point');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polylineSymbol) ? symbolOption.polylineSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polyline');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polygonSymbol) ? symbolOption.polygonSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.featureUtils.getDefaultSymbol('polygon');
                }
            }
            // @ts-expect-error
            return symbol ? this.jsonUtils.fromJSON(symbol) : null;
        };
        this.jsonUtils = null;
        this.defaultSymbolOption = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        this.state = {
            isModulesLoaded: false
        };
    }
    componentDidMount() {
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_5__.loadArcGISJSAPIModules)([
            'esri/symbols/support/jsonUtils'
        ]).then(modules => {
            [this.jsonUtils] = modules;
            this.setState({
                isModulesLoaded: true
            });
        });
        this.props.onSettingChange(Object.assign({}, this.props.config));
    }
    render() {
        const pointLabel = this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point });
        const polylineLabel = this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline });
        const polygonLabel = this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon });
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => this.handleIsUseCustomSymbolOption(false) }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'align-items-center d-flex' },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => this.handleIsUseCustomSymbolOption(true) }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { className: 'pb-0' },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { className: 'd-flex justify-content-around' },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: pointLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'pointSymbol'), onPointSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'pointSymbol') }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, pointLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polylineLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol'), onPolylineSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'polylineSymbol') }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polylineLabel)),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'symbol-selector d-flex flex-column align-items-center w-25', title: polygonLabel },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol'), onPolygonSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'polygonSymbol') }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { className: 'm-0 ml-0 w-100 d-block text-center', style: { cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, polygonLabel)))))));
    }
}
_ShowOnMapSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        isUseCustomSymbol: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.injectIntl)(_ShowOnMapSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L2RhdGEtYWN0aW9ucy9zaG93LW9uLW1hcC1zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtJQUNiLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGNBQWMsRUFBRSx3REFBd0Q7SUFDeEUsVUFBVSxFQUFFLGFBQWE7SUFDekIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUVBQXFFO0lBQ3JGLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsdUJBQXVCLEVBQUUscUJBQXFCO0lBQzlDLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzVDLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixnQkFBZ0IsRUFBRSxvQkFBb0I7SUFDdEMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsT0FBTyxFQUFFLE1BQU07SUFDZixZQUFZLEVBQUUsZUFBZTtJQUM3QixTQUFTLEVBQUUsY0FBYztJQUN6Qix3QkFBd0IsRUFBRSx1QkFBdUI7SUFDakQsZUFBZSxFQUFFLFlBQVk7SUFFN0Isc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxpQkFBaUIsRUFBRSxhQUFhO0lBQ2hDLHFCQUFxQixFQUFFLGFBQWE7SUFDcEMsb0JB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LE1BQU0sRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsd0VBQXNCLENBQUMsRUFDNUQsU0FBUyxFQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQ3RGLHNCQUFzQixFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsR0FBSTs0QkFDOUksc0VBQU8sU0FBUyxFQUFDLG9DQUFvQyxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFDbkosWUFBWSxDQUNQLENBQ0osQ0FDSyxDQUNFLENBQ0YsQ0FDYixDQUNQO0lBQ0gsQ0FBQzs7QUFoSU0sOEJBQVksR0FBRztJQUNwQixNQUFNLEVBQUUsb0RBQVMsQ0FBQztRQUNoQixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCLENBQUM7Q0FDSDtBQStISCxpRUFBZSxxREFBVSxDQUFDLGlCQUFpQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9kYXRhLWFjdGlvbnMvc2hvdy1vbi1tYXAtc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNvdXJjZUxhYmVsOiAnU291cmNlJyxcclxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXHJcbiAgaW5pdGlhbE1hcDogJ0luaXRpYWwgbWFwJyxcclxuICBpbml0aWFsTWFwVmlldzogJ0luaXRpYWwgdmlldycsXHJcbiAgc2VsZWN0TWFwOiAnU2VsZWN0IG1hcCcsXHJcbiAgc2V0TWFwVmlldzogJ01vZGlmeSBpbml0aWFsIHZpZXcnLFxyXG4gIGRlZmF1bHRWaWV3OiAnRGVmYXVsdCcsXHJcbiAgZGVmYXVsdFZpZXdUaXA6ICdJbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBtYXAgaW5oZXJpdGVkIGZyb20gdGhlIHdlYiBtYXAgb3Igd2ViIHNjZW5lJyxcclxuICBjdXN0b21WaWV3OiAnQ3VzdG9tJyxcclxuICBjdXN0b21WaWV3VGlwOiAnQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIG9mIHRoZSBtYXAnLFxyXG4gIGN1c3RvbVZpZXdTZXQ6ICdNb2RpZnknLFxyXG4gIHRvb2xMYWJlbDogJ1Rvb2xzJyxcclxuICBvcHRpb25zOiAnT3B0aW9ucycsXHJcbiAgc2VsZWN0aW9uSGlnaGxpZ2h0Q29sb3I6ICdTZWxlY3Rpb24gaGlnaGxpZ2h0JyxcclxuICBmZWF0dXJlU2VsZWN0aW9uQ29sb3I6ICdGZWF0dXJlIHNlbGVjdGlvbiBjb2xvcnMnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRGaWxsOiAnSGlnaGxpZ2h0IGZpbGwnLFxyXG4gIGZlYXR1cmVIaWdobGlnaHRPdXRsaW5lOiAnSGlnaGxpZ2h0IG91dGxpbmUnLFxyXG4gIGRpc2FibGVTY3JvbGxab29tOiAnRGlzYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZW5hYmxlU2Nyb2xsWm9vbTogJ0VuYWJsZSBzY3JvbGwgem9vbWluZycsXHJcbiAgZGlzYWJsZVBvcFVwOiAnRGlzYWJsZSBwb3AtdXAnLFxyXG4gIGVuYWJsZVBvcFVwOiAnRW5hYmxlIHBvcC11cCcsXHJcbiAgc2NlbmVRdWFsaXR5TW9kZTogJ1NjZW5lIHF1YWxpdHkgbW9kZScsXHJcbiAgY2hvb3NlQUxheWVyOiAnU2VsZWN0IGEgbGF5ZXInLFxyXG4gIGRhdGFSZWxhdGlvblNoaXA6ICdEYXRhIHJlbGF0aW9uc2hpcCcsXHJcbiAgbWFwTm9uZTogJ25vbmUnLFxyXG4gIG1lc3NhZ2VGaWVsZDogJ01lc3NhZ2UgZmllbGQnLFxyXG4gIG1hcExheW91dDogJ1Rvb2xzIGxheW91dCcsXHJcbiAgbWFwTGF5b3V0X0xhcmdlQW5kTWVkaXVtOiAnTGFyZ2UgYW5kIG1lZGl1bSBzaXplJyxcclxuICBtYXBMYXlvdXRfU21hbGw6ICdTbWFsbCBzaXplJyxcclxuXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllcjogJ1RyaWdnZXIgZGF0YScsXHJcbiAgbWFwQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyOiAnQWN0aW9uIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9Db25kaXRpb25zOiAnQ29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXJGaWVsZDogJ1NlbGVjdCBhIHRyaWdnZXIgZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Ob25lOiAnbm9uZScsXHJcbiAgbWFwQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXHJcbiAgbWFwQWN0aW9uX0FjdGlvbkxheWVyRmllbGQ6ICdTZWxlY3QgYW4gYWN0aW9uIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTW9yZUNvbmRpdGlvbnM6ICdNb3JlIGNvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcclxuICBtYXBBY3Rpb25fQ2hvb3NlTGF5ZXI6ICdTZWxlY3QgZGF0YScsXHJcbiAgbWFwQWN0aW9uX0F1dG9CaW5kOiAnQXV0byBib3VuZC4nLFxyXG4gIG1hcEFjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxyXG4gIG1hcEFjdGlvbl9Qb2ludDogJ1BvaW50JyxcclxuICBtYXBBY3Rpb25fUG9seWxpbmU6ICdQb2x5bGluZScsXHJcbiAgbWFwQWN0aW9uX1BvbHlnb246ICdQb2x5Z29uJyxcclxuICBtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9sczogJ1VzZSBsYXllciBkZWZpbmVkIHN5bWJvbHMnLFxyXG4gIG1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzOiAnVXNlIGN1c3RvbSBzeW1ib2xzJyxcclxuICBtYXBab29tVG9BY3Rpb25fWm9vbVNjYWxlOiAnWm9vbSBzY2FsZScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0F1dG9tYXRpYzogJ0F1dG9tYXRpYycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX0N1c3RvbTogJ0N1c3RvbScsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1R5cGVTY2FsZTogJ1R5cGUgYSBzY2FsZSdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9tYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFJlYWN0LCBEYXRhQWN0aW9uU2V0dGluZ1Byb3BzLCBpbmplY3RJbnRsLCBJbW11dGFibGVPYmplY3QsIEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuLy9pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJ1xyXG5cclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBTeW1ib2xTZWxlY3RvciwgSmltdVN5bWJvbFR5cGUsIEppbXVTeW1ib2wgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL21hcCdcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuLi9zZXR0aW5nL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgeyBTeW1ib2xPcHRpb24sIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIGZlYXR1cmVVdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgaXNNb2R1bGVzTG9hZGVkPzogYm9vbGVhblxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlnIHtcclxuICBpc1VzZUN1c3RvbVN5bWJvbD86IGJvb2xlYW5cclxuICBzeW1ib2xPcHRpb24/OiBTeW1ib2xPcHRpb25cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG5cclxuY2xhc3MgX1Nob3dPbk1hcFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PERhdGFBY3Rpb25TZXR0aW5nUHJvcHM8SU1Db25maWc+LCBTdGF0ZXM+IHtcclxuICBqc29uVXRpbHM6IHR5cGVvZiBfX2VzcmkuanNvblV0aWxzXHJcbiAgZGVmYXVsdFN5bWJvbE9wdGlvbjogSW1tdXRhYmxlT2JqZWN0PFN5bWJvbE9wdGlvbj5cclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNvbmZpZzogSW1tdXRhYmxlKHtcclxuICAgICAgaXNVc2VDdXN0b21TeW1ib2w6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5qc29uVXRpbHMgPSBudWxsXHJcbiAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24gPSBJbW11dGFibGUoe30pXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc01vZHVsZXNMb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2Vzcmkvc3ltYm9scy9zdXBwb3J0L2pzb25VdGlscydcclxuICAgIF0pLnRoZW4obW9kdWxlcyA9PiB7XHJcbiAgICAgIFt0aGlzLmpzb25VdGlsc10gPSBtb2R1bGVzXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc01vZHVsZXNMb2FkZWQ6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IC4uLnRoaXMucHJvcHMuY29uZmlnIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVJc1VzZUN1c3RvbVN5bWJvbE9wdGlvbiA9IChpc1VzZUN1c3RvbVN5bWJvbDogYm9vbGVhbikgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoeyAuLi50aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2lzVXNlQ3VzdG9tU3ltYm9sJywgaXNVc2VDdXN0b21TeW1ib2wpLnNldCgnc3ltYm9sT3B0aW9uJywgbnVsbCkgfSlcclxuICB9XHJcblxyXG4gIG9uU3ltYm9sQ3JlYXRlZCA9IChzeW1ib2w6IEppbXVTeW1ib2wsIHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uID0gdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnNldCh0eXBlLCBzeW1ib2w/LnRvSlNPTigpKVxyXG4gICAgaWYgKCF0aGlzLnByb3BzLmNvbmZpZy5zeW1ib2xPcHRpb24gJiZcclxuICAgICAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24ucG9pbnRTeW1ib2wgJiZcclxuICAgICAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24ucG9seWxpbmVTeW1ib2wgJiZcclxuICAgICAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24ucG9seWdvblN5bWJvbCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7IC4uLnRoaXMucHJvcHMuY29uZmlnLnNldCgnc3ltYm9sT3B0aW9uJywgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uKSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TeW1ib2xDaGFuZ2VkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3ltYm9sT3B0aW9uJywgdHlwZV0sIHN5bWJvbC50b0pTT04oKSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRJbml0U3ltYm9sRnJvbUNvbmZpZyA9IChqaW11U3ltYm9sVHlwZTogSmltdVN5bWJvbFR5cGUpOiBKaW11U3ltYm9sID0+IHtcclxuICAgIGxldCBzeW1ib2xcclxuICAgIGNvbnN0IHN5bWJvbE9wdGlvbiA9IHRoaXMucHJvcHMuY29uZmlnLnN5bWJvbE9wdGlvblxyXG4gICAgaWYgKHRoaXMuanNvblV0aWxzKSB7XHJcbiAgICAgIGlmIChqaW11U3ltYm9sVHlwZSA9PT0gSmltdVN5bWJvbFR5cGUuUG9pbnQpIHtcclxuICAgICAgICBzeW1ib2wgPSBzeW1ib2xPcHRpb24/LnBvaW50U3ltYm9sID8gc3ltYm9sT3B0aW9uLnBvaW50U3ltYm9sIDogZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woJ3BvaW50JylcclxuICAgICAgfSBlbHNlIGlmIChqaW11U3ltYm9sVHlwZSA9PT0gSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpIHtcclxuICAgICAgICBzeW1ib2wgPSBzeW1ib2xPcHRpb24/LnBvbHlsaW5lU3ltYm9sID8gc3ltYm9sT3B0aW9uLnBvbHlsaW5lU3ltYm9sIDogZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woJ3BvbHlsaW5lJylcclxuICAgICAgfSBlbHNlIGlmIChqaW11U3ltYm9sVHlwZSA9PT0gSmltdVN5bWJvbFR5cGUuUG9seWdvbikge1xyXG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9seWdvblN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5Z29uU3ltYm9sIDogZmVhdHVyZVV0aWxzLmdldERlZmF1bHRTeW1ib2woJ3BvbHlnb24nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICByZXR1cm4gc3ltYm9sID8gdGhpcy5qc29uVXRpbHMuZnJvbUpTT04oc3ltYm9sKSA6IG51bGxcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBwb2ludExhYmVsID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2ludCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvaW50IH0pXHJcbiAgICBjb25zdCBwb2x5bGluZUxhYmVsID0gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2x5bGluZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlsaW5lIH0pXHJcbiAgICBjb25zdCBwb2x5Z29uTGFiZWwgPSB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvbHlnb24nLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Qb2x5Z29uIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAnPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9eyF0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVJc1VzZUN1c3RvbVN5bWJvbE9wdGlvbih0cnVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtLTAgbWwtMicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2wgJiYgdGhpcy5qc29uVXRpbHMgJiYgPFNldHRpbmdTZWN0aW9uIGNsYXNzTmFtZT0ncGItMCc+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wtc2VsZWN0b3IgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LTI1JyB0aXRsZSA9e3BvaW50TGFiZWx9PlxyXG4gICAgICAgICAgICAgICAgPFN5bWJvbFNlbGVjdG9yIGppbXVTeW1ib2xUeXBlPXtKaW11U3ltYm9sVHlwZS5Qb2ludH0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvaW50KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlZD17IChzeW1ib2xQYXJhbSkgPT4gdGhpcy5vblN5bWJvbENyZWF0ZWQoc3ltYm9sUGFyYW0uc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50U3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHRoaXMub25TeW1ib2xDaGFuZ2VkKHN5bWJvbCwgJ3BvaW50U3ltYm9sJykgfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtLTAgbWwtMCB3LTEwMCBkLWJsb2NrIHRleHQtY2VudGVyJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cG9pbnRMYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N5bWJvbC1zZWxlY3RvciBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHctMjUnIHRpdGxlPXtwb2x5bGluZUxhYmVsfT5cclxuICAgICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWxpbmV9IHN5bWJvbD17dGhpcy5nZXRJbml0U3ltYm9sRnJvbUNvbmZpZyhKaW11U3ltYm9sVHlwZS5Qb2x5bGluZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlsaW5lU3ltYm9sJykgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5bGluZVN5bWJvbENoYW5nZWQ9eyAoc3ltYm9sKSA9PiB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH0vPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbS0wIG1sLTAgdy0xMDAgZC1ibG9jayB0ZXh0LWNlbnRlcicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIG92ZXJmbG93OiAnaGlkZGVuJywgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3BvbHlsaW5lTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzeW1ib2wtc2VsZWN0b3IgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB3LTI1JyB0aXRsZT17cG9seWdvbkxhYmVsfT5cclxuICAgICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWdvbn0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvbHlnb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlnb25TeW1ib2wnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9seWdvblN5bWJvbENoYW5nZWQ9eyAoc3ltYm9sKSA9PiB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5Z29uU3ltYm9sJykgfS8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtLTAgbWwtMCB3LTEwMCBkLWJsb2NrIHRleHQtY2VudGVyJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cG9seWdvbkxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmplY3RJbnRsKF9TaG93T25NYXBTZXR0aW5nKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=