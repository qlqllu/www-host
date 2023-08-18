System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/basic/imagecrop"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_imagecrop__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_imagecrop__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_imagecrop__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/image-112/src/runtime/builder/widget.tsx":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/builder/widget.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ _BuilderWidget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_imagecrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/imagecrop */ "jimu-ui/basic/imagecrop");




class _BuilderWidget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.__unmount = false;
        this.preloadImage = (url) => {
            this.imgObject = new Image();
            this.imgObject.src = url;
            // eslint-disable-next-line
            const self = this;
            this.imgObject.onload = (e) => {
                if (!self.imgObject) {
                    return;
                }
                if (self.__unmount) {
                    return;
                }
                self.setState({
                    imageWidth: self.imgObject.width,
                    imageHeight: self.imgObject.height
                });
            };
        };
        this.getCropZoomInCropTool = (cropParam, widgetWidth, widgetHeight, imageWidth, imageHeight) => {
            const cropPixel = cropParam && cropParam.cropPixel;
            const cropZoom = cropParam && cropParam.cropZoom;
            let relativeZoomInWidget = null;
            let zoomInCropTool = null;
            let imageWidthInSvg = null;
            let imageHeightInSvg = null;
            if (!cropPixel || !cropZoom) {
                if (widgetWidth / widgetHeight >= imageWidth / imageHeight) {
                    imageWidthInSvg = widgetWidth;
                    imageHeightInSvg = imageHeight / imageWidth * imageWidthInSvg;
                }
                else {
                    imageHeightInSvg = widgetHeight;
                    imageWidthInSvg = imageWidth / imageHeight * imageHeightInSvg;
                }
                relativeZoomInWidget = 1;
            }
            else {
                const cropWindowWidth = cropPixel.width;
                const cropWindowHeight = cropPixel.height;
                let scale = null;
                if (widgetWidth / widgetHeight >= imageWidth / imageHeight) {
                    imageWidthInSvg = widgetWidth;
                    imageHeightInSvg = imageHeight / imageWidth * imageWidthInSvg;
                    if (widgetWidth / widgetHeight >= cropWindowWidth / cropWindowHeight) {
                        scale = widgetWidth / (cropWindowWidth * cropZoom);
                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;
                    }
                    else {
                        scale = widgetHeight / (cropWindowHeight * cropZoom);
                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;
                    }
                }
                else {
                    imageHeightInSvg = widgetHeight;
                    imageWidthInSvg = imageWidth / imageHeight * imageHeightInSvg;
                    if (widgetWidth / widgetHeight >= cropWindowWidth / cropWindowHeight) {
                        scale = widgetWidth / (cropWindowWidth * cropZoom);
                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;
                    }
                    else {
                        scale = widgetHeight / (cropWindowHeight * cropZoom);
                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;
                    }
                }
            }
            zoomInCropTool = imageWidthInSvg * relativeZoomInWidget / imageWidth;
            return zoomInCropTool;
        };
        this.getCropPositonInCropTool = (cropParam, zoomInCropTool) => {
            const cropPosition = cropParam && cropParam.cropPosition;
            if (!cropPosition) {
                return {
                    x: 0,
                    y: 0
                };
            }
            return {
                x: zoomInCropTool * cropPosition.x / cropParam.cropZoom,
                y: zoomInCropTool * cropPosition.y / cropParam.cropZoom
            };
        };
        this.onCancelCrop = () => {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(this.props.widgetId, false));
        };
        this.onConfirmCrop = (cropParam, imageResourceItemInfo) => {
            let tempImageParam = this.props.config.functionConfig.imageParam;
            if (cropParam.cropType === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Real && imageResourceItemInfo) {
                tempImageParam = tempImageParam.set('url', imageResourceItemInfo.blobUrl).set('fileFormat', imageResourceItemInfo.fileFormat);
            }
            tempImageParam = tempImageParam.set('cropParam', cropParam);
            if (cropParam.cropPixel) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(this.props.widgetId, false));
                let functionConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.config.functionConfig);
                functionConfig = functionConfig.set('isCropped', true);
                functionConfig = functionConfig.set('imageParam', tempImageParam);
                (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)().editWidgetConfig(this.props.widgetId, this.props.config.set('functionConfig', functionConfig)).exec();
            }
        };
        this.state = {
            imageWidth: null,
            imageHeight: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        this.preloadImage(this.props.config.functionConfig.imageParam.originalUrl);
    }
    componentWillUnmount() {
        this.__unmount = true;
        this.props.onUnmount && this.props.onUnmount();
    }
    render() {
        // open crop tool
        const clientRect = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.props.widgetId, 'clientRect']);
        const cropParam = this.props.config.functionConfig.imageParam && this.props.config.functionConfig.imageParam.cropParam;
        const widgetWidth = this.props.widgetWidth;
        const widgetHeight = this.props.widgetHeight;
        if (this.state.imageWidth && this.state.imageHeight) {
            const zoomInCropTool = this.getCropZoomInCropTool(cropParam, widgetWidth, widgetHeight, this.state.imageWidth, this.state.imageHeight);
            const cropPositionInCropTool = this.getCropPositonInCropTool(cropParam, zoomInCropTool);
            const originalUrl = this.props.config.functionConfig.imageParam.originalUrl;
            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_imagecrop__WEBPACK_IMPORTED_MODULE_3__.ImageCrop, { crop: cropPositionInCropTool, cropZoom: zoomInCropTool, imageFormat: this.props.config.functionConfig.imageParam.fileFormat, onCancelCrop: this.onCancelCrop, widgetArea: clientRect, cropParam: cropParam, originId: this.props.config.functionConfig.imageParam.originalId, widgetId: this.props.widgetId, image: originalUrl, onConfirmCrop: this.onConfirmCrop, cropType: this.props.config.functionConfig.imageParam.imgSourceType === 'BY_URL' ? jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Fake : null }));
        }
        else {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.createPortal(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'jimu-widget', style: { zIndex: 9999, position: 'fixed', top: 0, left: 0, backgroundColor: 'rgb(0, 0, 0, .5)' } }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { position: 'absolute', left: '50%', top: '50%', zIndex: 9999 }, className: 'jimu-secondary-loading' })), document && document.getElementsByTagName('body')[0]);
        }
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/basic/imagecrop":
/*!******************************************!*\
  !*** external "jimu-ui/basic/imagecrop" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_imagecrop__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/builder-support.tsx ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/widget */ "./your-extensions/widgets/image-112/src/runtime/builder/widget.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ WidgetInBuilder: _builder_widget__WEBPACK_IMPORTED_MODULE_0__["default"] });

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbWFnZS0xMTIvZGlzdC9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRztBQUVuQjtBQUNaO0FBQ2xCO0FBaUJwQyxNQUFNLGNBQWUsU0FBUSwwREFBd0M7SUFJbEYsWUFBYSxLQUFLO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFIZCxjQUFTLEdBQUcsS0FBSztRQWlCakIsaUJBQVksR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRztZQUV4QiwyQkFBMkI7WUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsT0FBTTtpQkFDUDtnQkFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2xCLE9BQU07aUJBQ1A7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQkFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO29CQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNO2lCQUNuQyxDQUFDO1lBQ0osQ0FBQztRQUNILENBQUM7UUFFRCwwQkFBcUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQWtCLEVBQUUsV0FBbUIsRUFBVSxFQUFFO1lBQ2hILE1BQU0sU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUztZQUNsRCxNQUFNLFFBQVEsR0FBRyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVE7WUFDaEQsSUFBSSxvQkFBb0Is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QUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDL0xuRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUU5QyxpRUFBZSxFQUFFLGVBQWUsMkRBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW1hZ2UtMTEyL3NyYy9ydW50aW1lL2J1aWxkZXIvd2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9pbWFnZWNyb3BcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW1hZ2UtMTEyL3NyYy9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3QsIE11dGFibGVTdG9yZU1hbmFnZXIsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zLCBJbW11dGFibGUsIFJlYWN0RE9NIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyB0eXBlIEltYWdlUmVzb3VyY2VJdGVtSW5mbywgZ2V0QXBwQ29uZmlnQWN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgQ3JvcFR5cGUsIHR5cGUgQ3JvcFBhcmFtLCB0eXBlIENyb3BQb3NpdGlvbiB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IEltYWdlQ3JvcCB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvaW1hZ2Vjcm9wJ1xyXG5cclxuaW50ZXJmYWNlIE93blByb3BzIHtcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcbiAgY29uZmlnOiBJTUNvbmZpZ1xyXG5cclxuICB3aWRnZXRXaWR0aDogbnVtYmVyXHJcbiAgd2lkZ2V0SGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgb25Vbm1vdW50OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBPd25TdGF0ZXMge1xyXG4gIGltYWdlV2lkdGg6IG51bWJlclxyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0J1aWxkZXJXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzLCBPd25TdGF0ZXM+IHtcclxuICBpbWdPYmplY3Q6IGFueVxyXG4gIF9fdW5tb3VudCA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VXaWR0aDogbnVsbCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnByZWxvYWRJbWFnZSh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLm9yaWdpbmFsVXJsKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZEltYWdlID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLmltZ09iamVjdCA9IG5ldyBJbWFnZSgpXHJcbiAgICB0aGlzLmltZ09iamVjdC5zcmMgPSB1cmxcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXHJcbiAgICB0aGlzLmltZ09iamVjdC5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlbGYuaW1nT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWxmLl9fdW5tb3VudCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZVdpZHRoOiBzZWxmLmltZ09iamVjdC53aWR0aCxcclxuICAgICAgICBpbWFnZUhlaWdodDogc2VsZi5pbWdPYmplY3QuaGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wWm9vbUluQ3JvcFRvb2wgPSAoY3JvcFBhcmFtLCB3aWRnZXRXaWR0aCwgd2lkZ2V0SGVpZ2h0LCBpbWFnZVdpZHRoOiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgY3JvcFBpeGVsID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUGl4ZWxcclxuICAgIGNvbnN0IGNyb3Bab29tID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wWm9vbVxyXG4gICAgbGV0IHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gbnVsbFxyXG5cclxuICAgIGxldCB6b29tSW5Dcm9wVG9vbCA9IG51bGxcclxuXHJcbiAgICBsZXQgaW1hZ2VXaWR0aEluU3ZnID0gbnVsbFxyXG4gICAgbGV0IGltYWdlSGVpZ2h0SW5TdmcgPSBudWxsXHJcblxyXG4gICAgaWYgKCFjcm9wUGl4ZWwgfHwgIWNyb3Bab29tKSB7XHJcbiAgICAgIGlmICh3aWRnZXRXaWR0aCAvIHdpZGdldEhlaWdodCA+PSBpbWFnZVdpZHRoIC8gaW1hZ2VIZWlnaHQpIHtcclxuICAgICAgICBpbWFnZVdpZHRoSW5TdmcgPSB3aWRnZXRXaWR0aFxyXG4gICAgICAgIGltYWdlSGVpZ2h0SW5TdmcgPSBpbWFnZUhlaWdodCAvIGltYWdlV2lkdGggKiBpbWFnZVdpZHRoSW5TdmdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gd2lkZ2V0SGVpZ2h0XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0ICogaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZWxhdGl2ZVpvb21JbldpZGdldCA9IDFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNyb3BXaW5kb3dXaWR0aCA9IGNyb3BQaXhlbC53aWR0aFxyXG4gICAgICBjb25zdCBjcm9wV2luZG93SGVpZ2h0ID0gY3JvcFBpeGVsLmhlaWdodFxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gbnVsbFxyXG4gICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0KSB7XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gd2lkZ2V0V2lkdGhcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gaW1hZ2VIZWlnaHQgLyBpbWFnZVdpZHRoICogaW1hZ2VXaWR0aEluU3ZnXHJcblxyXG4gICAgICAgIGlmICh3aWRnZXRXaWR0aCAvIHdpZGdldEhlaWdodCA+PSBjcm9wV2luZG93V2lkdGggLyBjcm9wV2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICBzY2FsZSA9IHdpZGdldFdpZHRoIC8gKGNyb3BXaW5kb3dXaWR0aCAqIGNyb3Bab29tKVxyXG4gICAgICAgICAgcmVsYXRpdmVab29tSW5XaWRnZXQgPSBpbWFnZUhlaWdodCAqIGNyb3Bab29tICogc2NhbGUgLyBpbWFnZUhlaWdodEluU3ZnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjYWxlID0gd2lkZ2V0SGVpZ2h0IC8gKGNyb3BXaW5kb3dIZWlnaHQgKiBjcm9wWm9vbSlcclxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gd2lkZ2V0SGVpZ2h0XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0ICogaW1hZ2VIZWlnaHRJblN2Z1xyXG5cclxuICAgICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gY3JvcFdpbmRvd1dpZHRoIC8gY3JvcFdpbmRvd0hlaWdodCkge1xyXG4gICAgICAgICAgc2NhbGUgPSB3aWRnZXRXaWR0aCAvIChjcm9wV2luZG93V2lkdGggKiBjcm9wWm9vbSlcclxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY2FsZSA9IHdpZGdldEhlaWdodCAvIChjcm9wV2luZG93SGVpZ2h0ICogY3JvcFpvb20pXHJcbiAgICAgICAgICByZWxhdGl2ZVpvb21JbldpZGdldCA9IGltYWdlSGVpZ2h0ICogY3JvcFpvb20gKiBzY2FsZSAvIGltYWdlSGVpZ2h0SW5TdmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB6b29tSW5Dcm9wVG9vbCA9IGltYWdlV2lkdGhJblN2ZyAqIHJlbGF0aXZlWm9vbUluV2lkZ2V0IC8gaW1hZ2VXaWR0aFxyXG4gICAgcmV0dXJuIHpvb21JbkNyb3BUb29sXHJcbiAgfVxyXG5cclxuICBnZXRDcm9wUG9zaXRvbkluQ3JvcFRvb2wgPSAoY3JvcFBhcmFtOiBDcm9wUGFyYW0sIHpvb21JbkNyb3BUb29sOiBudW1iZXIpOiBDcm9wUG9zaXRpb24gPT4ge1xyXG4gICAgY29uc3QgY3JvcFBvc2l0aW9uID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUG9zaXRpb25cclxuICAgIGlmICghY3JvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB6b29tSW5Dcm9wVG9vbCAqIGNyb3BQb3NpdGlvbi54IC8gY3JvcFBhcmFtLmNyb3Bab29tLFxyXG4gICAgICB5OiB6b29tSW5Dcm9wVG9vbCAqIGNyb3BQb3NpdGlvbi55IC8gY3JvcFBhcmFtLmNyb3Bab29tXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbENyb3AgPSAoKSA9PiB7XHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMuc2V0V2lkZ2V0SXNJbmxpbmVFZGl0aW5nU3RhdGUodGhpcy5wcm9wcy53aWRnZXRJZCwgZmFsc2UpKVxyXG4gIH1cclxuXHJcbiAgb25Db25maXJtQ3JvcCA9IChjcm9wUGFyYW06IENyb3BQYXJhbSwgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvPzogSW1hZ2VSZXNvdXJjZUl0ZW1JbmZvKSA9PiB7XHJcbiAgICBsZXQgdGVtcEltYWdlUGFyYW0gPSB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtXHJcbiAgICBpZiAoY3JvcFBhcmFtLmNyb3BUeXBlID09PSBDcm9wVHlwZS5SZWFsICYmIGltYWdlUmVzb3VyY2VJdGVtSW5mbykge1xyXG4gICAgICB0ZW1wSW1hZ2VQYXJhbSA9IHRlbXBJbWFnZVBhcmFtLnNldCgndXJsJywgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvLmJsb2JVcmwpLnNldCgnZmlsZUZvcm1hdCcsIGltYWdlUmVzb3VyY2VJdGVtSW5mby5maWxlRm9ybWF0KVxyXG4gICAgfVxyXG5cclxuICAgIHRlbXBJbWFnZVBhcmFtID0gdGVtcEltYWdlUGFyYW0uc2V0KCdjcm9wUGFyYW0nLCBjcm9wUGFyYW0pXHJcblxyXG4gICAgaWYgKGNyb3BQYXJhbS5jcm9wUGl4ZWwpIHtcclxuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLnNldFdpZGdldElzSW5saW5lRWRpdGluZ1N0YXRlKHRoaXMucHJvcHMud2lkZ2V0SWQsIGZhbHNlKSlcclxuXHJcbiAgICAgIGxldCBmdW5jdGlvbkNvbmZpZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZylcclxuICAgICAgZnVuY3Rpb25Db25maWcgPSBmdW5jdGlvbkNvbmZpZy5zZXQoJ2lzQ3JvcHBlZCcsIHRydWUpXHJcbiAgICAgIGZ1bmN0aW9uQ29uZmlnID0gZnVuY3Rpb25Db25maWcuc2V0KCdpbWFnZVBhcmFtJywgdGVtcEltYWdlUGFyYW0pXHJcbiAgICAgIGdldEFwcENvbmZpZ0FjdGlvbigpLmVkaXRXaWRnZXRDb25maWcodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuc2V0KCdmdW5jdGlvbkNvbmZpZycsIGZ1bmN0aW9uQ29uZmlnKSkuZXhlYygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICB0aGlzLl9fdW5tb3VudCA9IHRydWVcclxuICAgIHRoaXMucHJvcHMub25Vbm1vdW50ICYmIHRoaXMucHJvcHMub25Vbm1vdW50KClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICAvLyBvcGVuIGNyb3AgdG9vbFxyXG4gICAgY29uc3QgY2xpZW50UmVjdCA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLnByb3BzLndpZGdldElkLCAnY2xpZW50UmVjdCddKVxyXG4gICAgY29uc3QgY3JvcFBhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLmNyb3BQYXJhbVxyXG5cclxuICAgIGNvbnN0IHdpZGdldFdpZHRoID0gdGhpcy5wcm9wcy53aWRnZXRXaWR0aFxyXG4gICAgY29uc3Qgd2lkZ2V0SGVpZ2h0ID0gdGhpcy5wcm9wcy53aWRnZXRIZWlnaHRcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pbWFnZVdpZHRoICYmIHRoaXMuc3RhdGUuaW1hZ2VIZWlnaHQpIHtcclxuICAgICAgY29uc3Qgem9vbUluQ3JvcFRvb2wgPSB0aGlzLmdldENyb3Bab29tSW5Dcm9wVG9vbChjcm9wUGFyYW0sIHdpZGdldFdpZHRoLCB3aWRnZXRIZWlnaHQsIHRoaXMuc3RhdGUuaW1hZ2VXaWR0aCwgdGhpcy5zdGF0ZS5pbWFnZUhlaWdodClcclxuICAgICAgY29uc3QgY3JvcFBvc2l0aW9uSW5Dcm9wVG9vbCA9IHRoaXMuZ2V0Q3JvcFBvc2l0b25JbkNyb3BUb29sKGNyb3BQYXJhbSwgem9vbUluQ3JvcFRvb2wpXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXJsID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5vcmlnaW5hbFVybFxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8SW1hZ2VDcm9wXHJcbiAgICAgICAgICBjcm9wPXtjcm9wUG9zaXRpb25JbkNyb3BUb29sfSBjcm9wWm9vbT17em9vbUluQ3JvcFRvb2x9XHJcbiAgICAgICAgICBpbWFnZUZvcm1hdD17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5maWxlRm9ybWF0fSBvbkNhbmNlbENyb3A9e3RoaXMub25DYW5jZWxDcm9wfSB3aWRnZXRBcmVhPXtjbGllbnRSZWN0fVxyXG4gICAgICAgICAgY3JvcFBhcmFtPXtjcm9wUGFyYW19IG9yaWdpbklkPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLm9yaWdpbmFsSWR9XHJcbiAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH0gaW1hZ2U9e29yaWdpbmFsVXJsfSBvbkNvbmZpcm1Dcm9wPXt0aGlzLm9uQ29uZmlybUNyb3B9XHJcbiAgICAgICAgICBjcm9wVHlwZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5pbWdTb3VyY2VUeXBlID09PSAnQllfVVJMJyA/IENyb3BUeXBlLkZha2UgOiBudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoPGRpdj48ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPSdqaW11LXdpZGdldCdcclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDk5OTksIHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAsIGxlZnQ6IDAsIGJhY2tncm91bmRDb2xvcjogJ3JnYigwLCAwLCAwLCAuNSknIH19XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzUwJScsIHRvcDogJzUwJScsIHpJbmRleDogOTk5OSB9fSBjbGFzc05hbWU9J2ppbXUtc2Vjb25kYXJ5LWxvYWRpbmcnIC8+XHJcbiAgICAgIDwvZGl2PiwgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfaW1hZ2Vjcm9wX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCBXaWRnZXRJbkJ1aWxkZXIgZnJvbSAnLi9idWlsZGVyL3dpZGdldCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgV2lkZ2V0SW5CdWlsZGVyIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9