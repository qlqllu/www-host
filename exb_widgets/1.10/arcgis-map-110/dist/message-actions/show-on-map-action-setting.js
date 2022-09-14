System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-theme","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
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

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

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
/*!*************************************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/show-on-map-action-setting.tsx ***!
  \*************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./extensions/widgets/arcgis/arcgis-map/src/setting/translations/default.ts");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/** @jsx jsx */







class _ShowOnMapActionSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
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
        this.handleIsUseCustomSymbolOption = (isUseCustomSymbol) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                //config: this.props.config.set('isUseCustomSymbol', isUseCustomSymbol)
                config: this.props.config.set('isUseCustomSymbol', isUseCustomSymbol).set('symbolOption', null)
            });
        };
        this.onSymbolChanged = (symbol, type) => {
            this.props.onSettingChange({
                actionId: this.props.actionId,
                config: this.props.config.setIn(['symbolOption', type], symbol.toJSON())
            });
        };
        this.onSymbolCreated = (symbol, type) => {
            this.defaultSymbolOption = this.defaultSymbolOption.set(type, symbol === null || symbol === void 0 ? void 0 : symbol.toJSON());
            if (!this.props.config.symbolOption &&
                this.defaultSymbolOption.pointSymbol &&
                this.defaultSymbolOption.polylineSymbol &&
                this.defaultSymbolOption.polygonSymbol) {
                this.props.onSettingChange({
                    actionId: this.props.actionId,
                    config: this.props.config.setIn(['symbolOption'], this.defaultSymbolOption)
                });
            }
        };
        this.getInitSymbolFromConfig = (jimuSymbolType) => {
            let symbol;
            const symbolOption = this.props.config.symbolOption;
            if (this.jsonUtils) {
                if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.pointSymbol) ? symbolOption.pointSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('point');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polylineSymbol) ? symbolOption.polylineSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('polyline');
                }
                else if (jimuSymbolType === jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon) {
                    symbol = (symbolOption === null || symbolOption === void 0 ? void 0 : symbolOption.polygonSymbol) ? symbolOption.polygonSymbol : jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.featureUtils.getDefaultSymbol('polygon');
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
        (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.loadArcGISJSAPIModules)([
            'esri/symbols/support/jsonUtils'
        ]).then(modules => {
            [
                this.jsonUtils
            ] = modules;
            this.setState({
                isModulesLoaded: true
            });
        });
        this.props.onSettingChange({
            actionId: this.props.actionId,
            config: this.props.config
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
    `;
    }
    render() {
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: this.getStyle(this.props.theme) },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: this.props.intl.formatMessage({ id: 'symbol', defaultMessage: 'symbol' }) },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => this.handleIsUseCustomSymbolOption(false) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => this.handleIsUseCustomSymbolOption(true) }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onPointSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'pointSymbol'), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'pointSymbol') })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onPolylineSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'polylineSymbol'), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol') })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onPolygonSymbolChanged: (symbol) => this.onSymbolChanged(symbol, 'polygonSymbol'), onCreated: (symbolParam) => this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol') }))))));
    }
}
_ShowOnMapActionSetting.defaultProps = {
    config: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
        isUseCustomSymbol: true
    })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,jimu_theme__WEBPACK_IMPORTED_MODULE_5__.withTheme)(_ShowOnMapActionSetting));

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsV0FBVyxFQUFFLFFBQVE7SUFDckIsY0FBYyxFQUFFLHdEQUF3RDtJQUN4RSxVQUFVLEVBQUUsYUFBYTtJQUN6QixjQUFjLEVBQUUsY0FBYztJQUM5QixTQUFTLEVBQUUsWUFBWTtJQUN2QixVQUFVLEVBQUUscUJBQXFCO0lBQ2pDLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLGNBQWMsRUFBRSxxRUFBcUU7SUFDckYsVUFBVSxFQUFFLFFBQVE7SUFDcEIsYUFBYSxFQUFFLGtDQUFrQztJQUNqRCxhQUFhLEVBQUUsUUFBUTtJQUN2QixTQUFTLEVBQUUsT0FBTztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQix1QkFBdUIsRUFBRSxxQkFBcUI7SUFDOUMscUJBQXFCLEVBQUUsMEJBQTBCO0lBQ2pELG9CQUFvQixFQUFFLGdCQUFnQjtJQUN0Qyx1QkFBdUIsRUFBRSxtQkFBbUI7SUFDNUMsaUJBQWlCLEVBQUUsd0JBQXdCO0lBQzNDLGdCQUFnQixFQUFFLHVCQUF1QjtJQUN6QyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLFdBQVcsRUFBRSxlQUFlO0lBQzVCLGdCQUFnQixFQUFFLG9CQUFvQjtJQUN0QyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxPQUFPLEVBQUUsTUFBTTtJQUNmLFlBQVksRUFBRSxlQUFlO0lBQzdCLFNBQVMsRUFBRSxjQUFjO0lBQ3pCLHdCQUF3QixFQUFFLHVCQUF1QjtJQUNqRCxlQUFlLEVBQUUsWUFBWTtJQUU3QixzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLGlCQUFpQixFQUFFLGFBQWE7SUFDaEMscUJBQXFCLEVBQUUsYUFBYTtJQUNwQyxvQkFBb0IsRUFBRSxZQUFZO0lBQ2xDLHVCQUF1QixFQUFFLDZCQUE2QjtJQUN0RCwyQkFBMkIsRUFBRSx3QkFBd0I7SUFDckQsY0FBYyxFQUFFLE1BQU07SUFDdEIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQiwwQkFBMEIsRUFBRSx3QkFBd0I7SUFDcEQsd0JBQXdCLEVBQUUsaUJBQWlCO0lBQzNDLHVCQUF1QixFQUFFLG1DQUFtQztJQUM1RCxxQkFBcUIsRUFBRSxhQUFhO0lBQ3BDLGtCQUFrQixFQUFFLGFBQWE7SUFDakMsaUJBQWlCLEVBQUUsVUFBVTtJQUM3QixlQUFlLEVBQUUsT0FBTztJQUN4QixrQkFBa0IsRUFBRSxVQUFVO0lBQzlCLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsZ0NBQWdDLEVBQUUsMkJBQTJCO0lBQzdELDBCQUEwQixFQUFFLG9CQUFvQjtJQUNoRCx5QkFBeUIsRUFBRSxZQUFZO0lBQ3ZDLHlCQUF5QixFQUFFLFdBQVc7SUFDdEMsc0JBQXNCLEVBQUUsUUFBUTtJQUNoQyx5QkFBeUIsRUFBRSxjQUFjO0NBQzFDOzs7Ozs7Ozs7OztBQ3RERDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxlQUFlO0FBSUc7QUFDYTtBQUNrRDtBQUNEO0FBQ25CO0FBQ3ZCO0FBQzBDO0FBaUJoRixNQUFNLHVCQUF3QixTQUFRLDBEQUFzRTtJQWUxRyxZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQWZkLGVBQVUsR0FBUTtZQUNoQixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFLEtBQUs7U0FDckI7UUF1REQsa0NBQTZCLEdBQUcsQ0FBQyxpQkFBMEIsRUFBRSxFQUFFO1lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3Qix1RUFBdUU7Z0JBQ3ZFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQzthQUNoRyxDQUFDO1FBQ0osQ0FBQztRQUVELG9CQUFlLEdBQUcsQ0FBQyxNQUFrQixFQUFFLElBQVksRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN6RSxDQUFDO1FBQ0osQ0FBQztRQUVELG9CQUFlLEdBQUcsQ0FBQyxNQUFrQixFQUFFLElBQVksRUFBRSxFQUFFO1lBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsTUFBTSxFQUFFLENBQUM7WUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVk7Z0JBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXO2dCQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYztnQkFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7b0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7b0JBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUM7aUJBQzVFLENBQUM7YUFDSDtRQUNILENBQUM7UUFFRCw0QkFBdUIsR0FBRyxDQUFDLGNBQThCLEVBQWMsRUFBRTtZQUN2RSxJQUFJLE1BQU07WUFDVixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZO1lBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxjQUFjLEtBQUssc0VBQW9CLEVBQUU7b0JBQzNDLE1BQU0sR0FBRyxhQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxzRUFBNkIsQ0FBQyxPQUFPLENBQUM7aUJBQ3ZHO3FCQUFNLElBQUksY0FBYyxLQUFLLHlFQUF1QixFQUFFO29CQUNyRCxNQUFNLEdBQUcsYUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGNBQWMsRUFBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsc0VBQTZCLENBQUMsVUFBVSxDQUFDO2lCQUNoSDtxQkFBTSxJQUFJLGNBQWMsS0FBSyx3RUFBc0IsRUFBRTtvQkFDcEQsTUFBTSxHQUFHLGFBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLHNFQUE2QixDQUFDLFNBQVMsQ0FBQztpQkFDN0c7YUFDRjtZQUNELG1CQUFtQjtZQUNuQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDeEQsQ0FBQztRQTFGQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG9EQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxlQUFlLEVBQUUsS0FBSztTQUN2QjtJQUNILENBQUM7SUFRRCxpQkFBaUI7UUFDZixtRUFBc0IsQ0FBQztZQUNyQixnQ0FBZ0M7U0FDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQjtnQkFDRSxJQUFJLENBQUMsU0FBUzthQUNmLEdBQUcsT0FBTztZQUVYLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1osZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBRSxLQUFxQjtRQUM3QixPQUFPLDBDQUFHOzttQkFFSyxtREFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1EQUFZLENBQUMsRUFBRSxDQUFDLElBQUksbURBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxtREFBWSxDQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7S0FXekY7SUFDSCxDQUFDO0lBOENELE1BQU07UUFDSixPQUFPLENBQ0wsd0RBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsK0NBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzlGLCtDQUFDLDJFQUFVO29CQUNULHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7d0JBQ3RFLHdEQUFLLFNBQVMsRUFBQywyQkFBMkI7NEJBQ3hDLCtDQUFDLDBDQUFLLElBQ0osS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUMzRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUN6RDs0QkFDRiwwREFBTyxTQUFTLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLGtDQUFrQyxFQUFFLGNBQWMsRUFBRSxzR0FBZ0QsRUFBRSxDQUFDLENBQ3RJLENBQ0osQ0FDRixDQUNLO2dCQUNiLCtDQUFDLDJFQUFVO29CQUNULHdEQUFLLFNBQVMsRUFBQyx5REFBeUQ7d0JBQ3RFLHdEQUFLLFNBQVMsRUFBQywyQkFBMkI7NEJBQ3hDLCtDQUFDLDBDQUFLLElBQ0osS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFDMUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsR0FDeEQ7NEJBQ0YsMERBQU8sU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSw0QkFBNEIsRUFBRSxjQUFjLEVBQUUsZ0dBQTBDLEVBQUUsQ0FBQyxDQUMxSCxDQUNKLENBQ0YsQ0FDSztnQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLCtDQUFDLCtFQUFjO29CQUN2RSwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLHFGQUErQixFQUFFLENBQUM7d0JBQzFILCtDQUFDLGdFQUFjLElBQUMsY0FBYyxFQUFFLHNFQUFvQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsc0VBQW9CLENBQUMsRUFDMUQsb0JBQW9CLEVBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUM5RSxTQUFTLEVBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsR0FBSSxDQUNuSTtvQkFDYiwrQ0FBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLHdGQUFrQyxFQUFFLENBQUM7d0JBQ2hJLCtDQUFDLGdFQUFjLElBQUMsY0FBYyxFQUFFLHlFQUF1QixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMseUVBQXVCLENBQUMsRUFDN0QsdUJBQXVCLEVBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLEVBQ3BGLFNBQVMsRUFBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLEdBQUksQ0FDekk7b0JBQ2IsK0NBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSx1RkFBaUMsRUFBRSxDQUFDO3dCQUM5SCwrQ0FBQyxnRUFBYyxJQUFDLGNBQWMsRUFBRSx3RUFBc0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHdFQUFzQixDQUFDLEVBQzVELHNCQUFzQixFQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsRUFDbEYsU0FBUyxFQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEdBQUksQ0FDdkksQ0FDRSxDQUNGLENBQ2IsQ0FDUDtJQUNILENBQUM7O0FBdklNLG9DQUFZLEdBQUc7SUFDcEIsTUFBTSxFQUFFLG9EQUFTLENBQUM7UUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtLQUN4QixDQUFDO0NBQ0g7QUFzSUgsaUVBQWUscURBQVMsQ0FBQyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzL2FyY2dpcy1tYXAvc3JjL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXRoZW1lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL21hcFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL3Nob3ctb24tbWFwLWFjdGlvbi1zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc291cmNlTGFiZWw6ICdTb3VyY2UnLFxyXG4gIHNvdXJjZURlc2NyaXB0OiAnQSB3ZWIgbWFwIG9yIHdlYiBzY2VuZSwgb3IgYW55IGNvbWJpbmF0aW9uIG9mIHRoZSB0d28uJyxcclxuICBpbml0aWFsTWFwOiAnSW5pdGlhbCBtYXAnLFxyXG4gIGluaXRpYWxNYXBWaWV3OiAnSW5pdGlhbCB2aWV3JyxcclxuICBzZWxlY3RNYXA6ICdTZWxlY3QgbWFwJyxcclxuICBzZXRNYXBWaWV3OiAnTW9kaWZ5IGluaXRpYWwgdmlldycsXHJcbiAgZGVmYXVsdFZpZXc6ICdEZWZhdWx0JyxcclxuICBkZWZhdWx0Vmlld1RpcDogJ0luaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1hcCBpbmhlcml0ZWQgZnJvbSB0aGUgd2ViIG1hcCBvciB3ZWIgc2NlbmUnLFxyXG4gIGN1c3RvbVZpZXc6ICdDdXN0b20nLFxyXG4gIGN1c3RvbVZpZXdUaXA6ICdDcmVhdGUgYSBuZXcgcG9zaXRpb24gb2YgdGhlIG1hcCcsXHJcbiAgY3VzdG9tVmlld1NldDogJ01vZGlmeScsXHJcbiAgdG9vbExhYmVsOiAnVG9vbHMnLFxyXG4gIG9wdGlvbnM6ICdPcHRpb25zJyxcclxuICBzZWxlY3Rpb25IaWdobGlnaHRDb2xvcjogJ1NlbGVjdGlvbiBoaWdobGlnaHQnLFxyXG4gIGZlYXR1cmVTZWxlY3Rpb25Db2xvcjogJ0ZlYXR1cmUgc2VsZWN0aW9uIGNvbG9ycycsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodEZpbGw6ICdIaWdobGlnaHQgZmlsbCcsXHJcbiAgZmVhdHVyZUhpZ2hsaWdodE91dGxpbmU6ICdIaWdobGlnaHQgb3V0bGluZScsXHJcbiAgZGlzYWJsZVNjcm9sbFpvb206ICdEaXNhYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBlbmFibGVTY3JvbGxab29tOiAnRW5hYmxlIHNjcm9sbCB6b29taW5nJyxcclxuICBkaXNhYmxlUG9wVXA6ICdEaXNhYmxlIHBvcC11cCcsXHJcbiAgZW5hYmxlUG9wVXA6ICdFbmFibGUgcG9wLXVwJyxcclxuICBzY2VuZVF1YWxpdHlNb2RlOiAnU2NlbmUgcXVhbGl0eSBtb2RlJyxcclxuICBjaG9vc2VBTGF5ZXI6ICdTZWxlY3QgYSBsYXllcicsXHJcbiAgZGF0YVJlbGF0aW9uU2hpcDogJ0RhdGEgcmVsYXRpb25zaGlwJyxcclxuICBtYXBOb25lOiAnbm9uZScsXHJcbiAgbWVzc2FnZUZpZWxkOiAnTWVzc2FnZSBmaWVsZCcsXHJcbiAgbWFwTGF5b3V0OiAnVG9vbHMgbGF5b3V0JyxcclxuICBtYXBMYXlvdXRfTGFyZ2VBbmRNZWRpdW06ICdMYXJnZSBhbmQgbWVkaXVtIHNpemUnLFxyXG4gIG1hcExheW91dF9TbWFsbDogJ1NtYWxsIHNpemUnLFxyXG5cclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcclxuICBtYXBBY3Rpb25fU2V0RGF0YTogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXI6ICdBY3Rpb24gZGF0YScsXHJcbiAgbWFwQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fUmVsYXRlTWVzc2FnZTogJ1RyaWdnZXIgLyBhY3Rpb24gY29ubmVjdGlvbicsXHJcbiAgbWFwQWN0aW9uX1RyaWdnZXJMYXllckZpZWxkOiAnU2VsZWN0IGEgdHJpZ2dlciBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX05vbmU6ICdub25lJyxcclxuICBtYXBBY3Rpb25fRXF1YWxzOiAnZXF1YWxzJyxcclxuICBtYXBBY3Rpb25fQWN0aW9uTGF5ZXJGaWVsZDogJ1NlbGVjdCBhbiBhY3Rpb24gZmllbGQnLFxyXG4gIG1hcEFjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXHJcbiAgbWFwQWN0aW9uX1NldEV4cHJlc3Npb246ICdQbGVhc2Ugc2V0IHlvdXIgZXhwcmVzc2lvbiBmaXJzdC4nLFxyXG4gIG1hcEFjdGlvbl9DaG9vc2VMYXllcjogJ1NlbGVjdCBkYXRhJyxcclxuICBtYXBBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXHJcbiAgbWFwQWN0aW9uX05vTGF5ZXI6ICdObyBkYXRhLicsXHJcbiAgbWFwQWN0aW9uX1BvaW50OiAnUG9pbnQnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5bGluZTogJ1BvbHlsaW5lJyxcclxuICBtYXBBY3Rpb25fUG9seWdvbjogJ1BvbHlnb24nLFxyXG4gIG1hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzOiAnVXNlIGxheWVyIGRlZmluZWQgc3ltYm9scycsXHJcbiAgbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHM6ICdVc2UgY3VzdG9tIHN5bWJvbHMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9ab29tU2NhbGU6ICdab29tIHNjYWxlJyxcclxuICBtYXBab29tVG9BY3Rpb25fQXV0b21hdGljOiAnQXV0b21hdGljJyxcclxuICBtYXBab29tVG9BY3Rpb25fQ3VzdG9tOiAnQ3VzdG9tJyxcclxuICBtYXBab29tVG9BY3Rpb25fVHlwZVNjYWxlOiAnVHlwZSBhIHNjYWxlJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfbWFwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCwgY3NzLCBqc3gsIEFjdGlvblNldHRpbmdQcm9wcywgU2VyaWFsaXplZFN0eWxlcywgSW1tdXRhYmxlT2JqZWN0LFxyXG4gIFRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgSW1tdXRhYmxlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFN5bWJvbFNlbGVjdG9yLCBKaW11U3ltYm9sVHlwZSwgSmltdVN5bWJvbCB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvbWFwJ1xyXG5pbXBvcnQgeyBTZXR0aW5nU2VjdGlvbiwgU2V0dGluZ1JvdyB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3NldHRpbmcvdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJ2ppbXUtdGhlbWUnXHJcbmltcG9ydCB7IFN5bWJvbE9wdGlvbiwgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcywgZmVhdHVyZVV0aWxzIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbnRlcmZhY2UgRXh0cmFQcm9wcyB7XHJcbiAgdGhlbWU/OiBUaGVtZVZhcmlhYmxlc1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGVzIHtcclxuICBpc01vZHVsZXNMb2FkZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcge1xyXG4gIGlzVXNlQ3VzdG9tU3ltYm9sPzogYm9vbGVhblxyXG4gIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jbGFzcyBfU2hvd09uTWFwQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGpzb25VdGlsczogdHlwZW9mIF9fZXNyaS5qc29uVXRpbHNcclxuICBkZWZhdWx0U3ltYm9sT3B0aW9uOiBJbW11dGFibGVPYmplY3Q8U3ltYm9sT3B0aW9uPlxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5qc29uVXRpbHMgPSBudWxsXHJcbiAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24gPSBJbW11dGFibGUoe30pXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc01vZHVsZXNMb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICBpc1VzZUN1c3RvbVN5bWJvbDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9zeW1ib2xzL3N1cHBvcnQvanNvblV0aWxzJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgW1xyXG4gICAgICAgIHRoaXMuanNvblV0aWxzXHJcbiAgICAgIF0gPSBtb2R1bGVzXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc01vZHVsZXNMb2FkZWQ6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBUaGVtZVZhcmlhYmxlcyk6IFNlcmlhbGl6ZWRTdHlsZXMge1xyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgLnNldHRpbmctaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAke3BvbGlzaGVkLnJlbSgxMCl9ICR7cG9saXNoZWQucmVtKDE2KX0gJHtwb2xpc2hlZC5yZW0oMCl9ICR7cG9saXNoZWQucmVtKDE2KX1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAuODtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZUljb246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uID0gKGlzVXNlQ3VzdG9tU3ltYm9sOiBib29sZWFuKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICAvL2NvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdpc1VzZUN1c3RvbVN5bWJvbCcsIGlzVXNlQ3VzdG9tU3ltYm9sKVxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnaXNVc2VDdXN0b21TeW1ib2wnLCBpc1VzZUN1c3RvbVN5bWJvbCkuc2V0KCdzeW1ib2xPcHRpb24nLCBudWxsKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uU3ltYm9sQ2hhbmdlZCA9IChzeW1ib2w6IEppbXVTeW1ib2wsIHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXRJbihbJ3N5bWJvbE9wdGlvbicsIHR5cGVdLCBzeW1ib2wudG9KU09OKCkpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25TeW1ib2xDcmVhdGVkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24gPSB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24uc2V0KHR5cGUsIHN5bWJvbD8udG9KU09OKCkpXHJcbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnLnN5bWJvbE9wdGlvbiAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2x5bGluZVN5bWJvbCAmJlxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5wb2x5Z29uU3ltYm9sKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICBhY3Rpb25JZDogdGhpcy5wcm9wcy5hY3Rpb25JZCxcclxuICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3ltYm9sT3B0aW9uJ10sIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluaXRTeW1ib2xGcm9tQ29uZmlnID0gKGppbXVTeW1ib2xUeXBlOiBKaW11U3ltYm9sVHlwZSk6IEppbXVTeW1ib2wgPT4ge1xyXG4gICAgbGV0IHN5bWJvbFxyXG4gICAgY29uc3Qgc3ltYm9sT3B0aW9uID0gdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uXHJcbiAgICBpZiAodGhpcy5qc29uVXRpbHMpIHtcclxuICAgICAgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2ludCkge1xyXG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9pbnRTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9pbnRTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9pbnQnKVxyXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5bGluZSkge1xyXG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbE9wdGlvbj8ucG9seWxpbmVTeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9seWxpbmVTeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9seWxpbmUnKVxyXG4gICAgICB9IGVsc2UgaWYgKGppbXVTeW1ib2xUeXBlID09PSBKaW11U3ltYm9sVHlwZS5Qb2x5Z29uKSB7XHJcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2x5Z29uU3ltYm9sID8gc3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wgOiBmZWF0dXJlVXRpbHMuZ2V0RGVmYXVsdFN5bWJvbCgncG9seWdvbicpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHJldHVybiBzeW1ib2wgPyB0aGlzLmpzb25VdGlscy5mcm9tSlNPTihzeW1ib2wpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY3NzPXt0aGlzLmdldFN0eWxlKHRoaXMucHJvcHMudGhlbWUpfSA+XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnc3ltYm9sJywgZGVmYXVsdE1lc3NhZ2U6ICdzeW1ib2wnIH0pfT5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9eyF0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLWNlbnRlciBkLWZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVJc1VzZUN1c3RvbVN5bWJvbE9wdGlvbih0cnVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdtLTAgbWwtMicgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHMnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzLm1hcEFjdGlvbl9Vc2VDdXN0b21TeW1ib2xzIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2wgJiYgdGhpcy5qc29uVXRpbHMgJiYgPFNldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2ludCcsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvaW50IH0pfT5cclxuICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvaW50fSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9pbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRTeW1ib2xDaGFuZ2VkPXsgKHN5bWJvbCkgPT4gdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9pbnRTeW1ib2wnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB0aGlzLm9uU3ltYm9sQ3JlYXRlZChzeW1ib2xQYXJhbS5zeW1ib2wsICdwb2ludFN5bWJvbCcpIH0vPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvbHlsaW5lJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9seWxpbmUgfSl9PlxyXG4gICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWxpbmV9IHN5bWJvbD17dGhpcy5nZXRJbml0U3ltYm9sRnJvbUNvbmZpZyhKaW11U3ltYm9sVHlwZS5Qb2x5bGluZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5bGluZVN5bWJvbENoYW5nZWQ9eyAoc3ltYm9sKSA9PiB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlsaW5lU3ltYm9sJykgfS8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUG9seWdvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlnb24gfSl9PlxyXG4gICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWdvbn0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvbHlnb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5Z29uU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHRoaXMub25TeW1ib2xDaGFuZ2VkKHN5bWJvbCwgJ3BvbHlnb25TeW1ib2wnKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZWQ9eyAoc3ltYm9sUGFyYW0pID0+IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlnb25TeW1ib2wnKSB9Lz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj59XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoX1Nob3dPbk1hcEFjdGlvblNldHRpbmcpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==