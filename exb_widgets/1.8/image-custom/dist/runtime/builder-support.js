/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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

/***/ "./extensions/widgets/common/image/src/runtime/builder-support.tsx":
/*!*************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/builder-support.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _builder_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/widget */ \"./extensions/widgets/common/image/src/runtime/builder/widget.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ WidgetInBuilder: _builder_widget__WEBPACK_IMPORTED_MODULE_0__[\"default\"] });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvYnVpbGRlci1zdXBwb3J0LnRzeD8yMDI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXaWRnZXRJbkJ1aWxkZXIgZnJvbSAnLi9idWlsZGVyL3dpZGdldCdcblxuZXhwb3J0IGRlZmF1bHQgeyBXaWRnZXRJbkJ1aWxkZXIgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./extensions/widgets/common/image/src/runtime/builder-support.tsx\n");

/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/builder/widget.tsx":
/*!************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/builder/widget.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _BuilderWidget)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-for-builder */ \"jimu-for-builder\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n/* harmony import */ var jimu_ui_basic_imagecrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/basic/imagecrop */ \"jimu-ui/basic/imagecrop\");\n\n\n\n\nclass _BuilderWidget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {\n    constructor(props) {\n        super(props);\n        this.__unmount = false;\n        this.preloadImage = (url) => {\n            this.imgObject = new Image();\n            this.imgObject.src = url;\n            // eslint-disable-next-line\n            const self = this;\n            this.imgObject.onload = (e) => {\n                if (!self.imgObject) {\n                    return;\n                }\n                if (self.__unmount) {\n                    return;\n                }\n                self.setState({\n                    imageWidth: self.imgObject.width,\n                    imageHeight: self.imgObject.height\n                });\n            };\n        };\n        this.getCropZoomInCropTool = (cropParam, widgetWidth, widgetHeight, imageWidth, imageHeight) => {\n            const cropPixel = cropParam && cropParam.cropPixel;\n            const cropZoom = cropParam && cropParam.cropZoom;\n            let relativeZoomInWidget = null;\n            let zoomInCropTool = null;\n            let imageWidthInSvg = null;\n            let imageHeightInSvg = null;\n            if (!cropPixel || !cropZoom) {\n                if (widgetWidth / widgetHeight >= imageWidth / imageHeight) {\n                    imageWidthInSvg = widgetWidth;\n                    imageHeightInSvg = imageHeight / imageWidth * imageWidthInSvg;\n                }\n                else {\n                    imageHeightInSvg = widgetHeight;\n                    imageWidthInSvg = imageWidth / imageHeight * imageHeightInSvg;\n                }\n                relativeZoomInWidget = 1;\n            }\n            else {\n                const cropWindowWidth = cropPixel.width;\n                const cropWindowHeight = cropPixel.height;\n                let scale = null;\n                if (widgetWidth / widgetHeight >= imageWidth / imageHeight) {\n                    imageWidthInSvg = widgetWidth;\n                    imageHeightInSvg = imageHeight / imageWidth * imageWidthInSvg;\n                    if (widgetWidth / widgetHeight >= cropWindowWidth / cropWindowHeight) {\n                        scale = widgetWidth / (cropWindowWidth * cropZoom);\n                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;\n                    }\n                    else {\n                        scale = widgetHeight / (cropWindowHeight * cropZoom);\n                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;\n                    }\n                }\n                else {\n                    imageHeightInSvg = widgetHeight;\n                    imageWidthInSvg = imageWidth / imageHeight * imageHeightInSvg;\n                    if (widgetWidth / widgetHeight >= cropWindowWidth / cropWindowHeight) {\n                        scale = widgetWidth / (cropWindowWidth * cropZoom);\n                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;\n                    }\n                    else {\n                        scale = widgetHeight / (cropWindowHeight * cropZoom);\n                        relativeZoomInWidget = imageHeight * cropZoom * scale / imageHeightInSvg;\n                    }\n                }\n            }\n            zoomInCropTool = imageWidthInSvg * relativeZoomInWidget / imageWidth;\n            return zoomInCropTool;\n        };\n        this.getCropPositonInCropTool = (cropParam, zoomInCropTool) => {\n            const cropPosition = cropParam && cropParam.cropPosition;\n            if (!cropPosition) {\n                return {\n                    x: 0,\n                    y: 0\n                };\n            }\n            return {\n                x: zoomInCropTool * cropPosition.x / cropParam.cropZoom,\n                y: zoomInCropTool * cropPosition.y / cropParam.cropZoom\n            };\n        };\n        this.onCancelCrop = () => {\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(this.props.widgetId, false));\n        };\n        this.onConfirmCrop = (cropParam, imageResourceItemInfo) => {\n            let tempImageParam = this.props.config.functionConfig.imageParam;\n            if (cropParam.cropType === jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Real && imageResourceItemInfo) {\n                tempImageParam = tempImageParam.set('url', imageResourceItemInfo.blobUrl).set('fileFormat', imageResourceItemInfo.fileFormat);\n            }\n            tempImageParam = tempImageParam.set('cropParam', cropParam);\n            if (cropParam.cropPixel) {\n                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(this.props.widgetId, false));\n                let functionConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(this.props.config.functionConfig);\n                functionConfig = functionConfig.set('isCropped', true);\n                functionConfig = functionConfig.set('imageParam', tempImageParam);\n                (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_1__.getAppConfigAction)().editWidgetConfig(this.props.widgetId, this.props.config.set('functionConfig', functionConfig)).exec();\n            }\n        };\n        this.state = {\n            imageWidth: null,\n            imageHeight: null\n        };\n    }\n    componentDidMount() {\n        this.__unmount = false;\n        this.preloadImage(this.props.config.functionConfig.imageParam.originalUrl);\n    }\n    componentWillUnmount() {\n        this.__unmount = true;\n        this.props.onUnmount && this.props.onUnmount();\n    }\n    render() {\n        // open crop tool\n        const clientRect = jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().getStateValue([this.props.widgetId, 'clientRect']);\n        const cropParam = this.props.config.functionConfig.imageParam && this.props.config.functionConfig.imageParam.cropParam;\n        const widgetWidth = this.props.widgetWidth;\n        const widgetHeight = this.props.widgetHeight;\n        if (this.state.imageWidth && this.state.imageHeight) {\n            const zoomInCropTool = this.getCropZoomInCropTool(cropParam, widgetWidth, widgetHeight, this.state.imageWidth, this.state.imageHeight);\n            const cropPositionInCropTool = this.getCropPositonInCropTool(cropParam, zoomInCropTool);\n            const originalUrl = this.props.config.functionConfig.imageParam.originalUrl;\n            return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_imagecrop__WEBPACK_IMPORTED_MODULE_3__.ImageCrop, { crop: cropPositionInCropTool, cropZoom: zoomInCropTool, imageFormat: this.props.config.functionConfig.imageParam.fileFormat, onCancelCrop: this.onCancelCrop, widgetArea: clientRect, cropParam: cropParam, originId: this.props.config.functionConfig.imageParam.originalId, widgetId: this.props.widgetId, image: originalUrl, onConfirmCrop: this.onConfirmCrop, cropType: this.props.config.functionConfig.imageParam.imgSourceType === 'BY_URL' ? jimu_ui__WEBPACK_IMPORTED_MODULE_2__.CropType.Fake : null }));\n        }\n        else {\n            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.createPortal(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", null,\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { className: 'jimu-widget', style: { zIndex: 9999, position: 'fixed', top: 0, left: 0, backgroundColor: 'rgb(0, 0, 0, .5)' } }),\n                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(\"div\", { style: { position: 'absolute', left: '50%', top: '50%', zIndex: 9999 }, className: 'jimu-secondary-loading' })), document && document.getElementsByTagName('body')[0]);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL2J1aWxkZXIvd2lkZ2V0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBaUJBO0FBSUE7QUFDQTtBQUhBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9pbWFnZS9zcmMvcnVudGltZS9idWlsZGVyL3dpZGdldC50c3g/Y2YxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgTXV0YWJsZVN0b3JlTWFuYWdlciwgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMsIEltbXV0YWJsZSwgUmVhY3RET00gfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZydcbmltcG9ydCB7IEltYWdlUmVzb3VyY2VJdGVtSW5mbywgZ2V0QXBwQ29uZmlnQWN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IENyb3BUeXBlLCBDcm9wUGFyYW0sIENyb3BQb3NpdGlvbiB9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBJbWFnZUNyb3AgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2ltYWdlY3JvcCdcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xuICBjb25maWc6IElNQ29uZmlnXG5cbiAgd2lkZ2V0V2lkdGg6IG51bWJlclxuICB3aWRnZXRIZWlnaHQ6IG51bWJlclxuXG4gIG9uVW5tb3VudDogKCkgPT4gdm9pZFxufVxuXG5pbnRlcmZhY2UgT3duU3RhdGVzIHtcbiAgaW1hZ2VXaWR0aDogbnVtYmVyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgX0J1aWxkZXJXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PE93blByb3BzLCBPd25TdGF0ZXM+IHtcbiAgaW1nT2JqZWN0OiBhbnlcbiAgX191bm1vdW50ID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWFnZVdpZHRoOiBudWxsLFxuICAgICAgaW1hZ2VIZWlnaHQ6IG51bGxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxuXG4gICAgdGhpcy5wcmVsb2FkSW1hZ2UodGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5vcmlnaW5hbFVybClcbiAgfVxuXG4gIHByZWxvYWRJbWFnZSA9ICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuaW1nT2JqZWN0ID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmltZ09iamVjdC5zcmMgPSB1cmxcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy5pbWdPYmplY3Qub25sb2FkID0gKGUpID0+IHtcbiAgICAgIGlmICghc2VsZi5pbWdPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLl9fdW5tb3VudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIGltYWdlV2lkdGg6IHNlbGYuaW1nT2JqZWN0LndpZHRoLFxuICAgICAgICBpbWFnZUhlaWdodDogc2VsZi5pbWdPYmplY3QuaGVpZ2h0XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGdldENyb3Bab29tSW5Dcm9wVG9vbCA9IChjcm9wUGFyYW0sIHdpZGdldFdpZHRoLCB3aWRnZXRIZWlnaHQsIGltYWdlV2lkdGg6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgY29uc3QgY3JvcFBpeGVsID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUGl4ZWxcbiAgICBjb25zdCBjcm9wWm9vbSA9IGNyb3BQYXJhbSAmJiBjcm9wUGFyYW0uY3JvcFpvb21cbiAgICBsZXQgcmVsYXRpdmVab29tSW5XaWRnZXQgPSBudWxsXG5cbiAgICBsZXQgem9vbUluQ3JvcFRvb2wgPSBudWxsXG5cbiAgICBsZXQgaW1hZ2VXaWR0aEluU3ZnID0gbnVsbFxuICAgIGxldCBpbWFnZUhlaWdodEluU3ZnID0gbnVsbFxuXG4gICAgaWYgKCFjcm9wUGl4ZWwgfHwgIWNyb3Bab29tKSB7XG4gICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0KSB7XG4gICAgICAgIGltYWdlV2lkdGhJblN2ZyA9IHdpZGdldFdpZHRoXG4gICAgICAgIGltYWdlSGVpZ2h0SW5TdmcgPSBpbWFnZUhlaWdodCAvIGltYWdlV2lkdGggKiBpbWFnZVdpZHRoSW5TdmdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltYWdlSGVpZ2h0SW5TdmcgPSB3aWRnZXRIZWlnaHRcbiAgICAgICAgaW1hZ2VXaWR0aEluU3ZnID0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0ICogaW1hZ2VIZWlnaHRJblN2Z1xuICAgICAgfVxuXG4gICAgICByZWxhdGl2ZVpvb21JbldpZGdldCA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3JvcFdpbmRvd1dpZHRoID0gY3JvcFBpeGVsLndpZHRoXG4gICAgICBjb25zdCBjcm9wV2luZG93SGVpZ2h0ID0gY3JvcFBpeGVsLmhlaWdodFxuXG4gICAgICBsZXQgc2NhbGUgPSBudWxsXG4gICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0KSB7XG4gICAgICAgIGltYWdlV2lkdGhJblN2ZyA9IHdpZGdldFdpZHRoXG4gICAgICAgIGltYWdlSGVpZ2h0SW5TdmcgPSBpbWFnZUhlaWdodCAvIGltYWdlV2lkdGggKiBpbWFnZVdpZHRoSW5TdmdcblxuICAgICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gY3JvcFdpbmRvd1dpZHRoIC8gY3JvcFdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIHNjYWxlID0gd2lkZ2V0V2lkdGggLyAoY3JvcFdpbmRvd1dpZHRoICogY3JvcFpvb20pXG4gICAgICAgICAgcmVsYXRpdmVab29tSW5XaWRnZXQgPSBpbWFnZUhlaWdodCAqIGNyb3Bab29tICogc2NhbGUgLyBpbWFnZUhlaWdodEluU3ZnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NhbGUgPSB3aWRnZXRIZWlnaHQgLyAoY3JvcFdpbmRvd0hlaWdodCAqIGNyb3Bab29tKVxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZUhlaWdodEluU3ZnID0gd2lkZ2V0SGVpZ2h0XG4gICAgICAgIGltYWdlV2lkdGhJblN2ZyA9IGltYWdlV2lkdGggLyBpbWFnZUhlaWdodCAqIGltYWdlSGVpZ2h0SW5TdmdcblxuICAgICAgICBpZiAod2lkZ2V0V2lkdGggLyB3aWRnZXRIZWlnaHQgPj0gY3JvcFdpbmRvd1dpZHRoIC8gY3JvcFdpbmRvd0hlaWdodCkge1xuICAgICAgICAgIHNjYWxlID0gd2lkZ2V0V2lkdGggLyAoY3JvcFdpbmRvd1dpZHRoICogY3JvcFpvb20pXG4gICAgICAgICAgcmVsYXRpdmVab29tSW5XaWRnZXQgPSBpbWFnZUhlaWdodCAqIGNyb3Bab29tICogc2NhbGUgLyBpbWFnZUhlaWdodEluU3ZnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NhbGUgPSB3aWRnZXRIZWlnaHQgLyAoY3JvcFdpbmRvd0hlaWdodCAqIGNyb3Bab29tKVxuICAgICAgICAgIHJlbGF0aXZlWm9vbUluV2lkZ2V0ID0gaW1hZ2VIZWlnaHQgKiBjcm9wWm9vbSAqIHNjYWxlIC8gaW1hZ2VIZWlnaHRJblN2Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgem9vbUluQ3JvcFRvb2wgPSBpbWFnZVdpZHRoSW5TdmcgKiByZWxhdGl2ZVpvb21JbldpZGdldCAvIGltYWdlV2lkdGhcbiAgICByZXR1cm4gem9vbUluQ3JvcFRvb2xcbiAgfVxuXG4gIGdldENyb3BQb3NpdG9uSW5Dcm9wVG9vbCA9IChjcm9wUGFyYW06IENyb3BQYXJhbSwgem9vbUluQ3JvcFRvb2w6IG51bWJlcik6IENyb3BQb3NpdGlvbiA9PiB7XG4gICAgY29uc3QgY3JvcFBvc2l0aW9uID0gY3JvcFBhcmFtICYmIGNyb3BQYXJhbS5jcm9wUG9zaXRpb25cbiAgICBpZiAoIWNyb3BQb3NpdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiB6b29tSW5Dcm9wVG9vbCAqIGNyb3BQb3NpdGlvbi54IC8gY3JvcFBhcmFtLmNyb3Bab29tLFxuICAgICAgeTogem9vbUluQ3JvcFRvb2wgKiBjcm9wUG9zaXRpb24ueSAvIGNyb3BQYXJhbS5jcm9wWm9vbVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsQ3JvcCA9ICgpID0+IHtcbiAgICBnZXRBcHBTdG9yZSgpLmRpc3BhdGNoKGFwcEFjdGlvbnMuc2V0V2lkZ2V0SXNJbmxpbmVFZGl0aW5nU3RhdGUodGhpcy5wcm9wcy53aWRnZXRJZCwgZmFsc2UpKVxuICB9XG5cbiAgb25Db25maXJtQ3JvcCA9IChjcm9wUGFyYW06IENyb3BQYXJhbSwgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvPzogSW1hZ2VSZXNvdXJjZUl0ZW1JbmZvKSA9PiB7XG4gICAgbGV0IHRlbXBJbWFnZVBhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbVxuICAgIGlmIChjcm9wUGFyYW0uY3JvcFR5cGUgPT09IENyb3BUeXBlLlJlYWwgJiYgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvKSB7XG4gICAgICB0ZW1wSW1hZ2VQYXJhbSA9IHRlbXBJbWFnZVBhcmFtLnNldCgndXJsJywgaW1hZ2VSZXNvdXJjZUl0ZW1JbmZvLmJsb2JVcmwpLnNldCgnZmlsZUZvcm1hdCcsIGltYWdlUmVzb3VyY2VJdGVtSW5mby5maWxlRm9ybWF0KVxuICAgIH1cblxuICAgIHRlbXBJbWFnZVBhcmFtID0gdGVtcEltYWdlUGFyYW0uc2V0KCdjcm9wUGFyYW0nLCBjcm9wUGFyYW0pXG5cbiAgICBpZiAoY3JvcFBhcmFtLmNyb3BQaXhlbCkge1xuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLnNldFdpZGdldElzSW5saW5lRWRpdGluZ1N0YXRlKHRoaXMucHJvcHMud2lkZ2V0SWQsIGZhbHNlKSlcblxuICAgICAgbGV0IGZ1bmN0aW9uQ29uZmlnID0gSW1tdXRhYmxlKHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnKVxuICAgICAgZnVuY3Rpb25Db25maWcgPSBmdW5jdGlvbkNvbmZpZy5zZXQoJ2lzQ3JvcHBlZCcsIHRydWUpXG4gICAgICBmdW5jdGlvbkNvbmZpZyA9IGZ1bmN0aW9uQ29uZmlnLnNldCgnaW1hZ2VQYXJhbScsIHRlbXBJbWFnZVBhcmFtKVxuICAgICAgZ2V0QXBwQ29uZmlnQWN0aW9uKCkuZWRpdFdpZGdldENvbmZpZyh0aGlzLnByb3BzLndpZGdldElkLCB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2Z1bmN0aW9uQ29uZmlnJywgZnVuY3Rpb25Db25maWcpKS5leGVjKClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgdGhpcy5fX3VubW91bnQgPSB0cnVlXG4gICAgdGhpcy5wcm9wcy5vblVubW91bnQgJiYgdGhpcy5wcm9wcy5vblVubW91bnQoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICAvLyBvcGVuIGNyb3AgdG9vbFxuICAgIGNvbnN0IGNsaWVudFJlY3QgPSBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0U3RhdGVWYWx1ZShbdGhpcy5wcm9wcy53aWRnZXRJZCwgJ2NsaWVudFJlY3QnXSlcbiAgICBjb25zdCBjcm9wUGFyYW0gPSB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0uY3JvcFBhcmFtXG5cbiAgICBjb25zdCB3aWRnZXRXaWR0aCA9IHRoaXMucHJvcHMud2lkZ2V0V2lkdGhcbiAgICBjb25zdCB3aWRnZXRIZWlnaHQgPSB0aGlzLnByb3BzLndpZGdldEhlaWdodFxuXG4gICAgaWYgKHRoaXMuc3RhdGUuaW1hZ2VXaWR0aCAmJiB0aGlzLnN0YXRlLmltYWdlSGVpZ2h0KSB7XG4gICAgICBjb25zdCB6b29tSW5Dcm9wVG9vbCA9IHRoaXMuZ2V0Q3JvcFpvb21JbkNyb3BUb29sKGNyb3BQYXJhbSwgd2lkZ2V0V2lkdGgsIHdpZGdldEhlaWdodCwgdGhpcy5zdGF0ZS5pbWFnZVdpZHRoLCB0aGlzLnN0YXRlLmltYWdlSGVpZ2h0KVxuICAgICAgY29uc3QgY3JvcFBvc2l0aW9uSW5Dcm9wVG9vbCA9IHRoaXMuZ2V0Q3JvcFBvc2l0b25JbkNyb3BUb29sKGNyb3BQYXJhbSwgem9vbUluQ3JvcFRvb2wpXG4gICAgICBjb25zdCBvcmlnaW5hbFVybCA9IHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0ub3JpZ2luYWxVcmxcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlQ3JvcFxuICAgICAgICAgIGNyb3A9e2Nyb3BQb3NpdGlvbkluQ3JvcFRvb2x9IGNyb3Bab29tPXt6b29tSW5Dcm9wVG9vbH1cbiAgICAgICAgICBpbWFnZUZvcm1hdD17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5maWxlRm9ybWF0fSBvbkNhbmNlbENyb3A9e3RoaXMub25DYW5jZWxDcm9wfSB3aWRnZXRBcmVhPXtjbGllbnRSZWN0fVxuICAgICAgICAgIGNyb3BQYXJhbT17Y3JvcFBhcmFtfSBvcmlnaW5JZD17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5vcmlnaW5hbElkfVxuICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLndpZGdldElkfSBpbWFnZT17b3JpZ2luYWxVcmx9IG9uQ29uZmlybUNyb3A9e3RoaXMub25Db25maXJtQ3JvcH1cbiAgICAgICAgICBjcm9wVHlwZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS5pbWdTb3VyY2VUeXBlID09PSAnQllfVVJMJyA/IENyb3BUeXBlLkZha2UgOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKDxkaXY+PGRpdlxuICAgICAgICBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0J1xuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDk5OTksIHBvc2l0aW9uOiAnZml4ZWQnLCB0b3A6IDAsIGxlZnQ6IDAsIGJhY2tncm91bmRDb2xvcjogJ3JnYigwLCAwLCAwLCAuNSknIH19XG4gICAgICA+XG4gICAgICA8L2Rpdj48ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnNTAlJywgdG9wOiAnNTAlJywgekluZGV4OiA5OTk5IH19IGNsYXNzTmFtZT0namltdS1zZWNvbmRhcnktbG9hZGluZycgLz5cbiAgICAgIDwvZGl2PiwgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSlcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./extensions/widgets/common/image/src/runtime/builder/widget.tsx\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/widgets/common/image/src/runtime/builder-support.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});