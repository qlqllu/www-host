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

/***/ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/show-on-map-action-setting.tsx ***!
  \***************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/map */ "jimu-ui/advanced/map");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setting/translations/default */ "./your-extensions/widgets/arcgis-map-112/src/setting/translations/default.ts");
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
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: !this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(false); }, "aria-labelledby": 'useLayerDefinedLabel' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { id: 'useLayerDefinedLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseLayerDefinedSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseLayerDefinedSymbols }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'd-flex justify-content-between w-100 align-items-center' },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'align-items-center d-flex' },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Radio, { style: { cursor: 'pointer' }, checked: this.props.config.isUseCustomSymbol, onChange: () => { this.handleIsUseCustomSymbolOption(true); }, "aria-labelledby": 'useCustomLabel' }),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { id: 'useCustomLabel', className: 'm-0 ml-2', style: { cursor: 'pointer' } }, this.props.intl.formatMessage({ id: 'mapAction_UseCustomSymbols', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_UseCustomSymbols }))))),
                this.props.config.isUseCustomSymbol && this.jsonUtils && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Point', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Point }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Point), onPointSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'pointSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'pointSymbol'); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polyline', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polyline }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polyline), onPolylineSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polylineSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polylineSymbol'); } })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: this.props.intl.formatMessage({ id: 'mapAction_Polygon', defaultMessage: _setting_translations_default__WEBPACK_IMPORTED_MODULE_4__["default"].mapAction_Polygon }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.SymbolSelector, { jimuSymbolType: jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon, symbol: this.getInitSymbolFromConfig(jimu_ui_advanced_map__WEBPACK_IMPORTED_MODULE_2__.JimuSymbolType.Polygon), onPolygonSymbolChanged: (symbol) => { this.onSymbolChanged(symbol, 'polygonSymbol'); }, onCreated: (symbolParam) => { this.onSymbolCreated(symbolParam.symbol, 'polygonSymbol'); } }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsV0FBVyxFQUFFLFFBQVE7SUFDckIsY0FBYyxFQUFFLHdEQUF3RDtJQUN4RSxrQkFBa0IsRUFBRSx3RkFBd0Y7SUFDNUcsVUFBVSxFQUFFLGFBQWE7SUFDekIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxXQUFXLEVBQUUsU0FBUztJQUN0QixjQUFjLEVBQUUscUVBQXFFO0lBQ3JGLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLE9BQU87SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsdUJBQXVCLEVBQUUscUJBQXFCO0lBQzlDLHFCQUFxQixFQUFFLDBCQUEwQjtJQUNqRCxvQkFBb0IsRUFBRSxnQkFBZ0I7SUFDdEMsdUJBQXVCLEVBQUUsbUJBQW1CO0lBQzVDLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxnQkFBZ0IsRUFBRSx1QkFBdUI7SUFDekMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixXQUFXLEVBQUUsZUFBZTtJQUM1QixnQkFBZ0IsRUFBRSxvQkFBb0I7SUFDdEMsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsT0FBTyxFQUFFLE1BQU07SUFDZixZQUFZLEVBQUUsZUFBZTtJQUM3QixTQUFTLEVBQUUsY0FBYztJQUN6Qix3QkFBd0IsRUFBRSx1QkFBdUI7SUFDakQsZUFBZSxFQUFFLFlBQVk7SUFFN0Isc0JBQXNCLEVBQUUsY0FBYztJQUN0QyxpQkFBaUIsRUFB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Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvbWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL21lc3NhZ2UtYWN0aW9ucy9zaG93LW9uLW1hcC1hY3Rpb24tc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNvdXJjZUxhYmVsOiAnU291cmNlJyxcclxuICBzb3VyY2VEZXNjcmlwdDogJ0Egd2ViIG1hcCBvciB3ZWIgc2NlbmUsIG9yIGFueSBjb21iaW5hdGlvbiBvZiB0aGUgdHdvLicsXHJcbiAgc2VsZWN0VGhpcmRNYXBIaW50OiAnUGxlYXNlIHVuc2VsZWN0IGEgbWFwIG9yIHNjZW5lIGJlZm9yZSB5b3UgY2hvb3NlIGFub3RoZXIgb25lLiBVcCB0byB0d28gYXJlIHN1cHBvcnRlZC4nLFxyXG4gIGluaXRpYWxNYXA6ICdJbml0aWFsIG1hcCcsXHJcbiAgaW5pdGlhbE1hcFZpZXc6ICdJbml0aWFsIHZpZXcnLFxyXG4gIHNlbGVjdE1hcDogJ1NlbGVjdCBtYXAnLFxyXG4gIHNldE1hcFZpZXc6ICdNb2RpZnkgaW5pdGlhbCB2aWV3JyxcclxuICBkZWZhdWx0VmlldzogJ0RlZmF1bHQnLFxyXG4gIGRlZmF1bHRWaWV3VGlwOiAnSW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFwIGluaGVyaXRlZCBmcm9tIHRoZSB3ZWIgbWFwIG9yIHdlYiBzY2VuZScsXHJcbiAgY3VzdG9tVmlldzogJ0N1c3RvbScsXHJcbiAgY3VzdG9tVmlld1RpcDogJ0NyZWF0ZSBhIG5ldyBwb3NpdGlvbiBvZiB0aGUgbWFwJyxcclxuICBjdXN0b21WaWV3U2V0OiAnTW9kaWZ5JyxcclxuICB0b29sTGFiZWw6ICdUb29scycsXHJcbiAgb3B0aW9uczogJ09wdGlvbnMnLFxyXG4gIHNlbGVjdGlvbkhpZ2hsaWdodENvbG9yOiAnU2VsZWN0aW9uIGhpZ2hsaWdodCcsXHJcbiAgZmVhdHVyZVNlbGVjdGlvbkNvbG9yOiAnRmVhdHVyZSBzZWxlY3Rpb24gY29sb3JzJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0RmlsbDogJ0hpZ2hsaWdodCBmaWxsJyxcclxuICBmZWF0dXJlSGlnaGxpZ2h0T3V0bGluZTogJ0hpZ2hsaWdodCBvdXRsaW5lJyxcclxuICBkaXNhYmxlU2Nyb2xsWm9vbTogJ0Rpc2FibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGVuYWJsZVNjcm9sbFpvb206ICdFbmFibGUgc2Nyb2xsIHpvb21pbmcnLFxyXG4gIGRpc2FibGVQb3BVcDogJ0Rpc2FibGUgcG9wLXVwJyxcclxuICBlbmFibGVQb3BVcDogJ0VuYWJsZSBwb3AtdXAnLFxyXG4gIHNjZW5lUXVhbGl0eU1vZGU6ICdTY2VuZSBxdWFsaXR5IG1vZGUnLFxyXG4gIGNob29zZUFMYXllcjogJ1NlbGVjdCBhIGxheWVyJyxcclxuICBkYXRhUmVsYXRpb25TaGlwOiAnRGF0YSByZWxhdGlvbnNoaXAnLFxyXG4gIG1hcE5vbmU6ICdub25lJyxcclxuICBtZXNzYWdlRmllbGQ6ICdNZXNzYWdlIGZpZWxkJyxcclxuICBtYXBMYXlvdXQ6ICdUb29scyBsYXlvdXQnLFxyXG4gIG1hcExheW91dF9MYXJnZUFuZE1lZGl1bTogJ0xhcmdlIGFuZCBtZWRpdW0gc2l6ZScsXHJcbiAgbWFwTGF5b3V0X1NtYWxsOiAnU21hbGwgc2l6ZScsXHJcblxyXG4gIG1hcEFjdGlvbl9UcmlnZ2VyTGF5ZXI6ICdUcmlnZ2VyIGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9TZXREYXRhOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcclxuICBtYXBBY3Rpb25fQ29uZGl0aW9uczogJ0NvbmRpdGlvbnMnLFxyXG4gIG1hcEFjdGlvbl9SZWxhdGVNZXNzYWdlOiAnVHJpZ2dlciAvIGFjdGlvbiBjb25uZWN0aW9uJyxcclxuICBtYXBBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcclxuICBtYXBBY3Rpb25fTm9uZTogJ25vbmUnLFxyXG4gIG1hcEFjdGlvbl9FcXVhbHM6ICdlcXVhbHMnLFxyXG4gIG1hcEFjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXHJcbiAgbWFwQWN0aW9uX01vcmVDb25kaXRpb25zOiAnTW9yZSBjb25kaXRpb25zJyxcclxuICBtYXBBY3Rpb25fU2V0RXhwcmVzc2lvbjogJ1BsZWFzZSBzZXQgeW91ciBleHByZXNzaW9uIGZpcnN0LicsXHJcbiAgbWFwQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxyXG4gIG1hcEFjdGlvbl9BdXRvQmluZDogJ0F1dG8gYm91bmQuJyxcclxuICBtYXBBY3Rpb25fTm9MYXllcjogJ05vIGRhdGEuJyxcclxuICBtYXBBY3Rpb25fUG9pbnQ6ICdQb2ludCcsXHJcbiAgbWFwQWN0aW9uX1BvbHlsaW5lOiAnUG9seWxpbmUnLFxyXG4gIG1hcEFjdGlvbl9Qb2x5Z29uOiAnUG9seWdvbicsXHJcbiAgbWFwQWN0aW9uX1VzZUxheWVyRGVmaW5lZFN5bWJvbHM6ICdVc2UgbGF5ZXItZGVmaW5lZCBzeW1ib2xzJyxcclxuICBtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9sczogJ1VzZSBjdXN0b20gc3ltYm9scycsXHJcbiAgbWFwWm9vbVRvQWN0aW9uX1pvb21TY2FsZTogJ1pvb20gc2NhbGUnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9BdXRvbWF0aWM6ICdBdXRvbWF0aWMnLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9DdXN0b206ICdDdXN0b20nLFxyXG4gIG1hcFpvb21Ub0FjdGlvbl9UeXBlU2NhbGU6ICdUeXBlIGEgc2NhbGUnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3RoZW1lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9tYXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9zZXR0aW5nX2NvbXBvbmVudHNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBjc3MsIGpzeCwgdHlwZSBBY3Rpb25TZXR0aW5nUHJvcHMsIHR5cGUgU2VyaWFsaXplZFN0eWxlcywgdHlwZSBJbW11dGFibGVPYmplY3QsXHJcbiAgdHlwZSBJTVRoZW1lVmFyaWFibGVzLCBwb2xpc2hlZCwgSW1tdXRhYmxlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IFN5bWJvbFNlbGVjdG9yLCBKaW11U3ltYm9sVHlwZSwgdHlwZSBKaW11U3ltYm9sIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9tYXAnXHJcbmltcG9ydCB7IFNldHRpbmdTZWN0aW9uLCBTZXR0aW5nUm93IH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuaW1wb3J0IHsgdHlwZSBTeW1ib2xPcHRpb24sIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsIGZlYXR1cmVVdGlscyB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHMge1xyXG4gIHRoZW1lPzogSU1UaGVtZVZhcmlhYmxlc1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGVzIHtcclxuICBpc01vZHVsZXNMb2FkZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBDb25maWcge1xyXG4gIGlzVXNlQ3VzdG9tU3ltYm9sPzogYm9vbGVhblxyXG4gIHN5bWJvbE9wdGlvbj86IFN5bWJvbE9wdGlvblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+XHJcblxyXG5jbGFzcyBfU2hvd09uTWFwQWN0aW9uU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWN0aW9uU2V0dGluZ1Byb3BzPElNQ29uZmlnPiAmIEV4dHJhUHJvcHMsIFN0YXRlcz4ge1xyXG4gIG1vZGFsU3R5bGU6IGFueSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBib3R0b206ICcwJyxcclxuICAgIHdpZHRoOiAnMjU5cHgnLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBib3JkZXJSaWdodDogJycsXHJcbiAgICBib3JkZXJCb3R0b206ICcnLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogJzFweCdcclxuICB9XHJcblxyXG4gIGpzb25VdGlsczogdHlwZW9mIF9fZXNyaS5qc29uVXRpbHNcclxuICBkZWZhdWx0U3ltYm9sT3B0aW9uOiBJbW11dGFibGVPYmplY3Q8U3ltYm9sT3B0aW9uPlxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5qc29uVXRpbHMgPSBudWxsXHJcbiAgICB0aGlzLmRlZmF1bHRTeW1ib2xPcHRpb24gPSBJbW11dGFibGUoe30pXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc01vZHVsZXNMb2FkZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29uZmlnOiBJbW11dGFibGUoe1xyXG4gICAgICBpc1VzZUN1c3RvbVN5bWJvbDogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9zeW1ib2xzL3N1cHBvcnQvanNvblV0aWxzJ1xyXG4gICAgXSkudGhlbihtb2R1bGVzID0+IHtcclxuICAgICAgW1xyXG4gICAgICAgIHRoaXMuanNvblV0aWxzXHJcbiAgICAgIF0gPSBtb2R1bGVzXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpc01vZHVsZXNMb2FkZWQ6IHRydWVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUgKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKTogU2VyaWFsaXplZFN0eWxlcyB7XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAuc2V0dGluZy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6ICR7cG9saXNoZWQucmVtKDEwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfSAke3BvbGlzaGVkLnJlbSgwKX0gJHtwb2xpc2hlZC5yZW0oMTYpfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGVsZXRlSWNvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24gPSAoaXNVc2VDdXN0b21TeW1ib2w6IGJvb2xlYW4pID0+IHtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgYWN0aW9uSWQ6IHRoaXMucHJvcHMuYWN0aW9uSWQsXHJcbiAgICAgIC8vY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2lzVXNlQ3VzdG9tU3ltYm9sJywgaXNVc2VDdXN0b21TeW1ib2wpXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdpc1VzZUN1c3RvbVN5bWJvbCcsIGlzVXNlQ3VzdG9tU3ltYm9sKS5zZXQoJ3N5bWJvbE9wdGlvbicsIG51bGwpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25TeW1ib2xDaGFuZ2VkID0gKHN5bWJvbDogSmltdVN5bWJvbCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldEluKFsnc3ltYm9sT3B0aW9uJywgdHlwZV0sIHN5bWJvbC50b0pTT04oKSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblN5bWJvbENyZWF0ZWQgPSAoc3ltYm9sOiBKaW11U3ltYm9sLCB0eXBlOiBzdHJpbmcpID0+IHtcclxuICAgIHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbiA9IHRoaXMuZGVmYXVsdFN5bWJvbE9wdGlvbi5zZXQodHlwZSwgc3ltYm9sPy50b0pTT04oKSlcclxuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcuc3ltYm9sT3B0aW9uICYmXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnBvaW50U3ltYm9sICYmXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnBvbHlsaW5lU3ltYm9sICYmXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uLnBvbHlnb25TeW1ib2wpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgIGFjdGlvbklkOiB0aGlzLnByb3BzLmFjdGlvbklkLFxyXG4gICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0SW4oWydzeW1ib2xPcHRpb24nXSwgdGhpcy5kZWZhdWx0U3ltYm9sT3B0aW9uKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5pdFN5bWJvbEZyb21Db25maWcgPSAoamltdVN5bWJvbFR5cGU6IEppbXVTeW1ib2xUeXBlKTogSmltdVN5bWJvbCA9PiB7XHJcbiAgICBsZXQgc3ltYm9sXHJcbiAgICBjb25zdCBzeW1ib2xPcHRpb24gPSB0aGlzLnByb3BzLmNvbmZpZy5zeW1ib2xPcHRpb25cclxuICAgIGlmICh0aGlzLmpzb25VdGlscykge1xyXG4gICAgICBpZiAoamltdVN5bWJvbFR5cGUgPT09IEppbXVTeW1ib2xUeXBlLlBvaW50KSB7XHJcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2ludFN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2ludFN5bWJvbCA6IGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCdwb2ludCcpXHJcbiAgICAgIH0gZWxzZSBpZiAoamltdVN5bWJvbFR5cGUgPT09IEppbXVTeW1ib2xUeXBlLlBvbHlsaW5lKSB7XHJcbiAgICAgICAgc3ltYm9sID0gc3ltYm9sT3B0aW9uPy5wb2x5bGluZVN5bWJvbCA/IHN5bWJvbE9wdGlvbi5wb2x5bGluZVN5bWJvbCA6IGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCdwb2x5bGluZScpXHJcbiAgICAgIH0gZWxzZSBpZiAoamltdVN5bWJvbFR5cGUgPT09IEppbXVTeW1ib2xUeXBlLlBvbHlnb24pIHtcclxuICAgICAgICBzeW1ib2wgPSBzeW1ib2xPcHRpb24/LnBvbHlnb25TeW1ib2wgPyBzeW1ib2xPcHRpb24ucG9seWdvblN5bWJvbCA6IGZlYXR1cmVVdGlscy5nZXREZWZhdWx0U3ltYm9sKCdwb2x5Z29uJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcmV0dXJuIHN5bWJvbCA/IHRoaXMuanNvblV0aWxzLmZyb21KU09OKHN5bWJvbCkgOiBudWxsXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjc3M9e3RoaXMuZ2V0U3R5bGUodGhpcy5wcm9wcy50aGVtZSl9ID5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdzeW1ib2wnLCBkZWZhdWx0TWVzc2FnZTogJ3N5bWJvbCcgfSl9PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17IXRoaXMucHJvcHMuY29uZmlnLmlzVXNlQ3VzdG9tU3ltYm9sfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4geyB0aGlzLmhhbmRsZUlzVXNlQ3VzdG9tU3ltYm9sT3B0aW9uKGZhbHNlKSB9fVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J3VzZUxheWVyRGVmaW5lZExhYmVsJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBpZD0ndXNlTGF5ZXJEZWZpbmVkTGFiZWwnIGNsYXNzTmFtZT0nbS0wIG1sLTInIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Vc2VMYXllckRlZmluZWRTeW1ib2xzJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fVXNlTGF5ZXJEZWZpbmVkU3ltYm9scyB9KX1cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWcuaXNVc2VDdXN0b21TeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7IHRoaXMuaGFuZGxlSXNVc2VDdXN0b21TeW1ib2xPcHRpb24odHJ1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSd1c2VDdXN0b21MYWJlbCdcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9J3VzZUN1c3RvbUxhYmVsJyBjbGFzc05hbWU9J20tMCBtbC0yJyBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fVXNlQ3VzdG9tU3ltYm9scycsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1VzZUN1c3RvbVN5bWJvbHMgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5pc1VzZUN1c3RvbVN5bWJvbCAmJiB0aGlzLmpzb25VdGlscyAmJiA8U2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nUm93IGxhYmVsPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnbWFwQWN0aW9uX1BvaW50JywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5tYXBBY3Rpb25fUG9pbnQgfSl9PlxyXG4gICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9pbnR9IHN5bWJvbD17dGhpcy5nZXRJbml0U3ltYm9sRnJvbUNvbmZpZyhKaW11U3ltYm9sVHlwZS5Qb2ludCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludFN5bWJvbENoYW5nZWQ9eyAoc3ltYm9sKSA9PiB7IHRoaXMub25TeW1ib2xDaGFuZ2VkKHN5bWJvbCwgJ3BvaW50U3ltYm9sJykgfSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvaW50U3ltYm9sJykgfSB9Lz5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogJ21hcEFjdGlvbl9Qb2x5bGluZScsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlsaW5lIH0pfT5cclxuICAgICAgICAgICAgICA8U3ltYm9sU2VsZWN0b3IgamltdVN5bWJvbFR5cGU9e0ppbXVTeW1ib2xUeXBlLlBvbHlsaW5lfSBzeW1ib2w9e3RoaXMuZ2V0SW5pdFN5bWJvbEZyb21Db25maWcoSmltdVN5bWJvbFR5cGUuUG9seWxpbmUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9seWxpbmVTeW1ib2xDaGFuZ2VkPXsgKHN5bWJvbCkgPT4geyB0aGlzLm9uU3ltYm9sQ2hhbmdlZChzeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlZD17IChzeW1ib2xQYXJhbSkgPT4geyB0aGlzLm9uU3ltYm9sQ3JlYXRlZChzeW1ib2xQYXJhbS5zeW1ib2wsICdwb2x5bGluZVN5bWJvbCcpIH0gfS8+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e3RoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdtYXBBY3Rpb25fUG9seWdvbicsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXMubWFwQWN0aW9uX1BvbHlnb24gfSl9PlxyXG4gICAgICAgICAgICAgIDxTeW1ib2xTZWxlY3RvciBqaW11U3ltYm9sVHlwZT17SmltdVN5bWJvbFR5cGUuUG9seWdvbn0gc3ltYm9sPXt0aGlzLmdldEluaXRTeW1ib2xGcm9tQ29uZmlnKEppbXVTeW1ib2xUeXBlLlBvbHlnb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2x5Z29uU3ltYm9sQ2hhbmdlZD17IChzeW1ib2wpID0+IHsgdGhpcy5vblN5bWJvbENoYW5nZWQoc3ltYm9sLCAncG9seWdvblN5bWJvbCcpIH0gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVkPXsgKHN5bWJvbFBhcmFtKSA9PiB7IHRoaXMub25TeW1ib2xDcmVhdGVkKHN5bWJvbFBhcmFtLnN5bWJvbCwgJ3BvbHlnb25TeW1ib2wnKSB9IH0vPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPn1cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShfU2hvd09uTWFwQWN0aW9uU2V0dGluZylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9