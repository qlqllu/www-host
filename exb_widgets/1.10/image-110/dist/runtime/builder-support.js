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

/***/ "./extensions/widgets/common/image/src/runtime/builder/widget.tsx":
/*!************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/builder/widget.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/builder-support.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/widget */ "./extensions/widgets/common/image/src/runtime/builder/widget.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ WidgetInBuilder: _builder_widget__WEBPACK_IMPORTED_MODULE_0__["default"] });

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vaW1hZ2UvZGlzdC9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9HO0FBRXhCO0FBQ2pCO0FBQ1I7QUFpQnBDLE1BQU0sY0FBZSxTQUFRLDBEQUF3QztJQUlsRixZQUFhLEtBQUs7UUFDaEIsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUhkLGNBQVMsR0FBRyxLQUFLO1FBaUJqQixpQkFBWSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBRTtZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHO1lBRXhCLDJCQUEyQjtZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixPQUFNO2lCQUNQO2dCQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbEIsT0FBTTtpQkFDUDtnQkFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNaLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7b0JBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07aUJBQ25DLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQztRQUVELDBCQUFxQixHQUFHLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBa0IsRUFBRSxXQUFtQixFQUFVLEVBQUU7WUFDaEgsTUFBTSxTQUFTLEdBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQyxTQUFTO1lBQ2xELE1BQU0sUUFBUSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUTtZQUNoRCxJQUFJLG9CQUFvQixHQUFHLElBQUk7WUFFL0IsSUFBSSxjQUFjLEdBQUcsSUFBSTtZQUV6QixJQUFJLGVBQWUsR0FBRyxJQUFJO1lBQzFCLElBQUksZ0JBQWdCLEdBQUcsSUFBSTtZQUUzQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMzQixJQUFJLFdBQVcsR0FBRyxZQUFZLElBQUksVUFBVSxHQUFHLFdBQVcsRUFBRTtvQkFDMUQsZUFBZSxHQUFHLFdBQVc7b0JBQzdCLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxVQUFVLEdBQUcsZUFBZTtpQkFDOUQ7cUJBQU07b0JBQ0wsZ0JBQWdCLEdBQUcsWUFBWTtvQkFDL0IsZUFBZSxHQUFHLFVBQVUsR0FBRyxXQUFXLEdBQUcsZ0JBQWdCO2lCQUM5RDtnQkFFRCxvQkFBb0IsR0FBRyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQyxLQUFLO2dCQUN2QyxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxNQUFNO2dCQUV6QyxJQUFJLEtBQUssR0FBRyxJQUFJO2dCQUNoQixJQUFJLFdBQVcsR0FBRyxZQUFZLElBQUksVUFBVSxHQUFHLFdBQVcsRUFBRTtvQkFDMUQsZUFBZSxHQUFHLFdBQVc7b0JBQzdCLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxVQUFVLEdBQUcsZUFBZTtvQkFFN0QsSUFBSSxXQUFXLEdBQUcsWUFBWSxJQUFJLGVBQWUsR0FBRyxnQkFBZ0IsRUFBRTt3QkFDcEUsS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7d0JBQ2xELG9CQUFvQixHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLGdCQUFnQjtxQkFDekU7eUJBQU07d0JBQ0wsS0FBSyxHQUFHLFlBQVksR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQzt3QkFDcEQsb0JBQW9CLEdBQUcsV0FBVyxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsZ0JBQWdCO3FCQUN6RTtpQkFDRjtxQkFBTTtvQkFDTCxnQkFBZ0IsR0FBRyxZQUFZO29CQUMvQixlQUFlLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxnQkFBZ0I7b0JBRTdELElBQUksV0FBVyxHQUFHLFlBQVksSUFBSSxlQUFlLEdBQUcsZ0JBQWdCLEVBQUU7d0JBQ3BFLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO3dCQUNsRCxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxnQkFBZ0I7cUJBQ3pFO3lCQUFNO3dCQUNMLEtBQUssR0FBRyxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7d0JBQ3BELG9CQUFvQixHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSyxHQUFHLGdCQUFnQjtxQkFDekU7aUJBQ0Y7YUFDRjtZQUVELGNBQWMsR0FBRyxlQUFlLEdBQUcsb0JBQW9CLEdBQUcsVUFBVTtZQUNwRSxPQUFPLGNBQWM7UUFDdkIsQ0FBQztRQUVELDZCQUF3QixHQUFHLENBQUMsU0FBb0IsRUFBRSxjQUFzQixFQUFnQixFQUFFO1lBQ3hGLE1BQU0sWUFBWSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsWUFBWTtZQUN4RCxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNqQixPQUFPO29CQUNMLENBQUMsRUFBRSxDQUFDO29CQUNKLENBQUMsRUFBRSxDQUFDO2lCQUNMO2FBQ0Y7WUFFRCxPQUFPO2dCQUNMLENBQUMsRUFBRSxjQUFjLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUTtnQkFDdkQsQ0FBQyxFQUFFLGNBQWMsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxRQUFRO2FBQ3hEO1FBQ0gsQ0FBQztRQUVELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsK0VBQXdDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQUVELGtCQUFhLEdBQUcsQ0FBQyxTQUFvQixFQUFFLHFCQUE2QyxFQUFFLEVBQUU7WUFDdEYsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVU7WUFDaEUsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLGtEQUFhLElBQUkscUJBQXFCLEVBQUU7Z0JBQ2pFLGNBQWMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHFCQUFxQixDQUFDLFVBQVUsQ0FBQzthQUM5SDtZQUVELGNBQWMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUM7WUFFM0QsSUFBSSxTQUFTLENBQUMsU0FBUyxFQUFFO2dCQUN2QixzREFBVyxFQUFFLENBQUMsUUFBUSxDQUFDLCtFQUF3QyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUU1RixJQUFJLGNBQWMsR0FBRyxvREFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztnQkFDaEUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztnQkFDdEQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztnQkFDakUsb0VBQWtCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDM0g7UUFDSCxDQUFDO1FBM0hDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixXQUFXLEVBQUUsSUFBSTtTQUNsQjtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFFdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUM1RSxDQUFDO0lBbUhELG9CQUFvQjtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDaEQsQ0FBQztJQUVELE1BQU07UUFDSixpQkFBaUI7UUFDakIsTUFBTSxVQUFVLEdBQUcsc0VBQStCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUztRQUV0SCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVc7UUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZO1FBRTVDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDbkQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQ3RJLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUM7WUFDdkYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBRTNFLE9BQU8sQ0FDTCwyREFBQyw4REFBUyxJQUNSLElBQUksRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUN0RCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFDNUgsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQ3RGLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUNwRixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxrREFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQ3ZHLENBQ0g7U0FDRjthQUFNO1lBQ0wsT0FBTyw0REFBcUIsQ0FBQztnQkFBSyxvRUFDaEMsU0FBUyxFQUFDLGFBQWEsRUFDdkIsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsR0FFNUY7Z0JBQUEsb0VBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBQyx3QkFBd0IsR0FBRyxDQUNsSCxFQUFFLFFBQVEsSUFBSSxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7O0FDN0xEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBRTlDLGlFQUFlLEVBQUUsZUFBZSwyREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL2J1aWxkZXIvd2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9pbWFnZWNyb3BcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvYnVpbGRlci1zdXBwb3J0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgTXV0YWJsZVN0b3JlTWFuYWdlciwgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMsIEltbXV0YWJsZSwgUmVhY3RET00gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBJbWFnZVJlc291cmNlSXRlbUluZm8sIGdldEFwcENvbmZpZ0FjdGlvbiB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7IENyb3BUeXBlLCBDcm9wUGFyYW0sIENyb3BQb3NpdGlvbiB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IEltYWdlQ3JvcCB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvaW1hZ2Vjcm9wJ1xyXG5cclxuaW50ZXJmYWNlIE93blByb3BzIHtcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcbiAgY29uZmlnOiBJTUNvbmZpZ1xyXG5cclxuICB3aWRnZXRXaWR0aDogbnVtYmVyXHJcbiAgd2lkZ2V0SGVpZ2h0OiBudW1iZXJcclxuXHJcbiAgb25Vbm1vdW50OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBPd25TdGF0ZXMge1xyXG4gIGltYWdlV2lkdGg6IG51bWJlclxyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0J1aWxkZXJXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzLCBPd25TdGF0ZXM+IHtcclxuICBpbWdPYmplY3Q6IGFueVxyXG4gIF9fdW5tb3VudCA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VXaWR0aDogbnVsbCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuXHJcbiAgICB0aGlzLnByZWxvYWRJbWFnZSh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLm9yaWdpbmFsVXJsKVxyXG4gIH1cclxuXHJcbiAgcHJlbG9hZEltYWdlID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICB0aGlzLmltZ09iamVjdCA9IG5ldyBJbWFnZSgpXHJcbiAgICB0aGlzLmltZ09iamVjdC5zcmMgPSB1cmxcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXHJcbiAgICB0aGlzLmltZ09iamVjdC5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoIXNlbGYuaW1nT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWxmLl9fdW5tb3VudCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICBpbWFnZVdpZHRoOiBzZWxmLmltZ09iamVjdC53aWR0aCxcclxuICAgICAgICBpbWFnZUhlaWdodDogc2VsZi5pbWdPYmplY3QuaGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDcm9wWm9vbUluQ3JvcFRvb2wgPSAoY3JvcFBhcmFtLCB3aWRnZXRXaWR0aCwgd2lkZ2V0SGVpZ2h0LCBpbWFnZVdpZHRoOiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpOiBudW1iZXIgPT4ge1xyXG4gICAgY29uc3QgY3JvcFBpeGVsID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUGl4ZWxcclxuICAgIGNvbnN0IGNyb3Bab29tID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wWm9vbVxyXG4gICAgbGV0IHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gbnVsbFxyXG5cclxuICAgIGxldCB6b29tSW5Dcm9wVG9vbCA9IG51bGxcclxuXHJcbiAgICBsZXQgaW1hZ2VXaWR0aEluU3ZnID0gbnVsbFxyXG4gICAgbGV0IGltYWdlSGVpZ2h0SW5TdmcgPSBudWxsXHJcblxyXG4gICAgaWYgKCFjcm9wUGl4ZWwgfHwgIWNyb3Bab29tKSB7XHJcbiAgICAgIGlmICh3aWRnZXRXaWR0aCAvIHdpZGdldEhlaWdodCA+PSBpbWFnZVdpZHRoIC8gaW1hZ2VIZWlnaHQpIHtcclxuICAgICAgICBpbWFnZVdpZHRoSW5TdmcgPSB3aWRnZXRXaWR0aFxyXG4gICAgICAgIGltYWdlSGVpZ2h0SW5TdmcgPSBpbWFnZUhlaWdodCAvIGltYWdlV2lkdGggKiBpbWFnZVdpZHRoSW5TdmdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gd2lkZ2V0SGVpZ2h0XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0ICogaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZWxhdGl2ZVpvb21JbldpZGdldCA9IDFcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNyb3BXaW5kb3dXaWR0aCA9IGNyb3BQaXhlbC53aWR0aFxyXG4gICAgICBjb25zdCBjcm9wV2luZG93SGVpZ2h0ID0gY3JvcFBpeGVsLmhlaWdodFxyXG5cclxuICAgICAgbGV0IHNjYWxlID0gbnVsbFxyXG4gICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0KSB7XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gd2lkZ2V0V2lkdGhcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gaW1hZ2VIZWlnaHQgLyBpbWFnZVdpZHRoICogaW1hZ2VXaWR0aEluU3ZnXHJcblxyXG4gICAgICAgIGlmICh3aWRnZXRXaWR0aCAvIHdpZGdldEhlaWdodCA+PSBjcm9wV2luZG93V2lkdGggLyBjcm9wV2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICBzY2FsZSA9IHdpZGdldFdpZHRoIC8gKGNyb3BXaW5kb3dXaWR0aCAqIGNyb3Bab29tKVxyXG4gICAgICAgICAgcmVsYXRpdmVab29tSW5XaWRnZXQgPSBpbWFnZUhlaWdodCAqIGNyb3Bab29tICogc2NhbGUgLyBpbWFnZUhlaWdodEluU3ZnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjYWxlID0gd2lkZ2V0SGVpZ2h0IC8gKGNyb3BXaW5kb3dIZWlnaHQgKiBjcm9wWm9vbSlcclxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gd2lkZ2V0SGVpZ2h0XHJcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0ICogaW1hZ2VIZWlnaHRJblN2Z1xyXG5cclxuICAgICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gY3JvcFdpbmRvd1dpZHRoIC8gY3JvcFdpbmRvd0hlaWdodCkge1xyXG4gICAgICAgICAgc2NhbGUgPSB3aWRnZXRXaWR0aCAvIChjcm9wV2luZG93V2lkdGggKiBjcm9wWm9vbSlcclxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzY2FsZSA9IHdpZGdldEhlaWdodCAvIChjcm9wV2luZG93SGVpZ2h0ICogY3JvcFpvb20pXHJcbiAgICAgICAgICByZWxhdGl2ZVpvb21JbldpZGdldCA9IGltYWdlSGVpZ2h0ICogY3JvcFpvb20gKiBzY2FsZSAvIGltYWdlSGVpZ2h0SW5TdmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB6b29tSW5Dcm9wVG9vbCA9IGltYWdlV2lkdGhJblN2ZyAqIHJlbGF0aXZlWm9vbUluV2lkZ2V0IC8gaW1hZ2VXaWR0aFxyXG4gICAgcmV0dXJuIHpvb21JbkNyb3BUb29sXHJcbiAgfVxyXG5cclxuICBnZXRDcm9wUG9zaXRvbkluQ3JvcFRvb2wgPSAoY3JvcFBhcmFtOiBDcm9wUGFyYW0sIHpvb21JbkNyb3BUb29sOiBudW1iZXIpOiBDcm9wUG9zaXRpb24gPT4ge1xyXG4gICAgY29uc3QgY3JvcFBvc2l0aW9uID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUG9zaXRpb25cclxuICAgIGlmICghY3JvcFBvc2l0aW9uKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiB6b29tSW5Dcm9wVG9vbCAqIGNyb3BQb3NpdGlvbi54IC8gY3JvcFBhcmFtLmNyb3Bab29tLFxyXG4gICAgICB5OiB6b29tSW5Dcm9wVG9vbCAqIGNyb3BQb3NpdGlvbi55IC8gY3JvcFBhcmFtLmNyb3Bab29tXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNhbmNlbENyb3AgPSAoKSA9PiB7XHJcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMuc2V0V2lkZ2V0SXNJbmxpbmVFZGl0aW5nU3RhdGUodGhpcy5wcm9wcy53aWRnZXRJZCwgZmFsc2UpKVxyXG4gIH1cclxuXHJcbiAgb25Db25maXJtQ3JvcCA9IChjcm9wUGFyYW06IENyb3BQYXJhbSwgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvPzogSW1hZ2VSZXNvdXJjZUl0ZW1JbmZvKSA9PiB7XHJcbiAgICBsZXQgdGVtcEltYWdlUGFyYW0gPSB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtXHJcbiAgICBpZiAoY3JvcFBhcmFtLmNyb3BUeXBlID09PSBDcm9wVHlwZS5SZWFsICYmIGltYWdlUmVzb3VyY2VJdGVtSW5mbykge1xyXG4gICAgICB0ZW1wSW1hZ2VQYXJhbSA9IHRlbXBJbWFnZVBhcmFtLnNldCgndXJsJywgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvLmJsb2JVcmwpLnNldCgnZmlsZUZvcm1hdCcsIGltYWdlUmVzb3VyY2VJdGVtSW5mby5maWxlRm9ybWF0KVxyXG4gICAgfVxyXG5cclxuICAgIHRlbXBJbWFnZVBhcmFtID0gdGVtcEltYWdlUGFyYW0uc2V0KCdjcm9wUGFyYW0nLCBjcm9wUGFyYW0pXHJcblxyXG4gICAgaWYgKGNyb3BQYXJhbS5jcm9wUGl4ZWwpIHtcclxuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLnNldFdpZGdldElzSW5saW5lRWRpdGluZ1N0YXRlKHRoaXMucHJvcHMud2lkZ2V0SWQsIGZhbHNlKSlcclxuXHJcbiAgICAgIGxldCBmdW5jdGlvbkNvbmZpZyA9IEltbXV0YWJsZSh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZylcclxuICAgICAgZnVuY3Rpb25Db25maWcgPSBmdW5jdGlvbkNvbmZpZy5zZXQoJ2lzQ3JvcHBlZCcsIHRydWUpXHJcbiAgICAgIGZ1bmN0aW9uQ29uZmlnID0gZnVuY3Rpb25Db25maWcuc2V0KCdpbWFnZVBhcmFtJywgdGVtcEltYWdlUGFyYW0pXHJcbiAgICAgIGdldEFwcENvbmZpZ0FjdGlvbigpLmVkaXRXaWRnZXRDb25maWcodGhpcy5wcm9wcy53aWRnZXRJZCwgdGhpcy5wcm9wcy5jb25maWcuc2V0KCdmdW5jdGlvbkNvbmZpZycsIGZ1bmN0aW9uQ29uZmlnKSkuZXhlYygpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICB0aGlzLl9fdW5tb3VudCA9IHRydWVcclxuICAgIHRoaXMucHJvcHMub25Vbm1vdW50ICYmIHRoaXMucHJvcHMub25Vbm1vdW50KClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICAvLyBvcGVuIGNyb3AgdG9vbFxyXG4gICAgY29uc3QgY2xpZW50UmVjdCA9IE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRTdGF0ZVZhbHVlKFt0aGlzLnByb3BzLndpZGdldElkLCAnY2xpZW50UmVjdCddKVxyXG4gICAgY29uc3QgY3JvcFBhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLmNyb3BQYXJhbVxyXG5cclxuICAgIGNvbnN0IHdpZGdldFdpZHRoID0gdGhpcy5wcm9wcy53aWRnZXRXaWR0aFxyXG4gICAgY29uc3Qgd2lkZ2V0SGVpZ2h0ID0gdGhpcy5wcm9wcy53aWRnZXRIZWlnaHRcclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pbWFnZVdpZHRoICYmIHRoaXMuc3RhdGUuaW1hZ2VIZWlnaHQpIHtcclxuICAgICAgY29uc3Qgem9vbUluQ3JvcFRvb2wgPSB0aGlzLmdldENyb3Bab29tSW5Dcm9wVG9vbChjcm9wUGFyYW0sIHdpZGdldFdpZHRoLCB3aWRnZXRIZWlnaHQsIHRoaXMuc3RhdGUuaW1hZ2VXaWR0aCwgdGhpcy5zdGF0ZS5pbWFnZUhlaWdodClcclxuICAgICAgY29uc3QgY3JvcFBvc2l0aW9uSW5Dcm9wVG9vbCA9IHRoaXMuZ2V0Q3JvcFBvc2l0b25JbkNyb3BUb29sKGNyb3BQYXJhbSwgem9vbUluQ3JvcFRvb2wpXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXJsID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5vcmlnaW5hbFVybFxyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8SW1hZ2VDcm9wXHJcbiAgICAgICAgICBjcm9wPXtjcm9wUG9zaXRpb25JbkNyb3BUb29sfSBjcm9wWm9vbT17em9vbUluQ3JvcFRvb2x9XHJcbiAgICAgICAgICBpbWFnZUZvcm1hdD17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5maWxlRm9ybWF0fSBvbkNhbmNlbENyb3A9e3RoaXMub25DYW5jZWxDcm9wfSB3aWRnZXRBcmVhPXtjbGllbnRSZWN0fVxyXG4gICAgICAgICAgY3JvcFBhcmFtPXtjcm9wUGFyYW19IG9yaWdpbklkPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLm9yaWdpbmFsSWR9XHJcbiAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH0gaW1hZ2U9e29yaWdpbmFsVXJsfSBvbkNvbmZpcm1Dcm9wPXt0aGlzLm9uQ29uZmlybUNyb3B9XHJcbiAgICAgICAgICBjcm9wVHlwZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5pbWdTb3VyY2VUeXBlID09PSAnQllfVVJMJyA/IENyb3BUeXBlLkZha2UgOiBudWxsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoPGRpdj48ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPSdqaW11LXdpZGdldCdcclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDk5OTksIHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAsIGxlZnQ6IDAsIGJhY2tncm91bmRDb2xvcjogJ3JnYigwLCAwLCAwLCAuNSknIH19XHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+PGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogJzUwJScsIHRvcDogJzUwJScsIHpJbmRleDogOTk5OSB9fSBjbGFzc05hbWU9J2ppbXUtc2Vjb25kYXJ5LWxvYWRpbmcnIC8+XHJcbiAgICAgIDwvZGl2PiwgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9iYXNpY19pbWFnZWNyb3BfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXaWRnZXRJbkJ1aWxkZXIgZnJvbSAnLi9idWlsZGVyL3dpZGdldCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgV2lkZ2V0SW5CdWlsZGVyIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9