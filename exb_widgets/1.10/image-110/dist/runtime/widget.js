System.register(["jimu-core","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/directional/left.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/left.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/image/src/config.ts":
/*!*******************************************************!*\
  !*** ./extensions/widgets/common/image/src/config.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicUrlType": () => (/* binding */ DynamicUrlType),
/* harmony export */   "ImgSourceType": () => (/* binding */ ImgSourceType)
/* harmony export */ });
var ImgSourceType;
(function (ImgSourceType) {
    ImgSourceType["ByUpload"] = "BYUPLOAD";
    ImgSourceType["ByStaticUrl"] = "BYSTATICURL";
    ImgSourceType["ByDynamicUrl"] = "BYDYNAMICURL";
})(ImgSourceType || (ImgSourceType = {}));
var DynamicUrlType;
(function (DynamicUrlType) {
    DynamicUrlType["Expression"] = "EXPRESSION";
    DynamicUrlType["Attachment"] = "ATTACHMENT";
    DynamicUrlType["Symbol"] = "SYMBOL";
})(DynamicUrlType || (DynamicUrlType = {}));


/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/components/attachment-component.tsx":
/*!*****************************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/components/attachment-component.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttachmentComponent": () => (/* binding */ AttachmentComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class AttachmentComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.dataSources = null;
        this.__unmount = false;
        this.isLoading = false;
        this.resolveExpressions = (record) => {
            if (record) {
                const dataRecord = record;
                this.isLoading = true;
                dataRecord && dataRecord.queryAttachments && dataRecord.queryAttachments(this.props.attachmentTypes).then((attachmentInfos) => {
                    if (this.isLoading) {
                        this.isLoading = false;
                        this.setState({
                            attachmentInfos: attachmentInfos
                        });
                    }
                }, () => {
                    this.isLoading = false;
                });
            }
            else {
                this.isLoading = false;
                this.setState({
                    attachmentInfos: null
                });
            }
        };
        /**
         * Determine if an object is equivalent with another, not recursively.
         */
        this.shallowEquals = (obj1, obj2) => {
            if (!obj1 && !obj2) {
                return true;
            }
            else if (obj1 && obj2) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                else {
                    return !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);
                }
            }
            else {
                return false;
            }
        };
        this.state = {
            attachmentInfos: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        this.resolveExpressions(this.props.record);
    }
    componentWillUnmount() {
        this.__unmount = true;
        this.props.unmountAttachmentInfosChange && this.props.unmountAttachmentInfosChange();
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.shallowEquals(this.props.record, prevProps.record)) {
            this.resolveExpressions(this.props.record);
        }
        if (prevState.attachmentInfos !== this.state.attachmentInfos) {
            this.props.onChange && this.props.onChange(this.state.attachmentInfos);
        }
    }
    render() {
        return null;
    }
}


/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/components/image-gallery.tsx":
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/components/image-gallery.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageGallery": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/directional/left */ "./jimu-icons/outlined/directional/left.tsx");
/* harmony import */ var jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/directional/right */ "./jimu-icons/outlined/directional/right.tsx");




class ImageGallery extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.backImg = (e) => {
            const preIndex = this.state.currentIndex > 0 ? this.state.currentIndex - 1 : this.props.sources.length - 1;
            this.setState({
                currentIndex: preIndex
            });
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        };
        this.forwardImg = (e) => {
            const nextIndex = this.state.currentIndex < this.props.sources.length - 1 ? this.state.currentIndex + 1 : 0;
            this.setState({
                currentIndex: nextIndex
            });
            e === null || e === void 0 ? void 0 : e.preventDefault();
            e === null || e === void 0 ? void 0 : e.stopPropagation();
        };
        this.state = {
            currentIndex: 0
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.sources !== this.props.sources) {
            this.setState({
                currentIndex: 0
            });
        }
    }
    render() {
        let tempImageParam = {};
        const toolTip = this.props.toolTipWithAttachmentName ? (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].name) : this.props.toolTip;
        const altText = this.props.altTextWithAttachmentName ? (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].name) : this.props.altText;
        if (this.props.imageParam.set) {
            tempImageParam = this.props.imageParam.set('url', (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].url));
        }
        else {
            tempImageParam.url = this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].url;
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'w-100 h-100' },
            this.props.sources && this.props.sources.length > 1 && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { title: toolTip, className: 'silder-tool-container w-100 h-100', style: { position: 'absolute', zIndex: 1 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-center align-items-center image-gallery-button ml-2', onClick: this.backImg, style: { top: '50%', transform: 'translateY(-50%)', position: 'absolute', left: 0 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_2__.LeftOutlined, { size: 's' })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'd-flex justify-content-center align-items-center image-gallery-button mr-2', onClick: this.forwardImg, style: { top: '50%', transform: 'translateY(-50%)', position: 'absolute', right: 0 } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, { size: 's' }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'image-gallery-content w-100 h-100' },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageWithParam, { imageParam: tempImageParam, useFadein: true, size: this.props.size, imageFillMode: this.props.imageFillMode, isAutoHeight: this.props.isAutoHeight, toolTip: toolTip, altText: altText }))));
    }
}


/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/components/record-component.tsx":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/components/record-component.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordComponent": () => (/* binding */ RecordComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class _RecordComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.dataSources = null;
        this.__unmount = false;
        this.updateRecord = () => {
            const record = this.getSingleRecord();
            if (this.props.onRecordChange) {
                this.props.onRecordChange(record);
            }
        };
        this.shallowEquals = (obj1, obj2) => {
            if (!obj1 && !obj2) {
                return true;
            }
            else if (obj1 && obj2) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                else {
                    return !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);
                }
            }
            else {
                return false;
            }
        };
        this.getSingleRecord = () => {
            var _a, _b;
            if (this.props.isSelectedFromRepeatedDataSourceContext) {
                const repeatedDataSource = this.props.repeatedDataSource;
                const record = Array.isArray(repeatedDataSource)
                    ? (_a = (repeatedDataSource)[0]) === null || _a === void 0 ? void 0 : _a.record
                    : (_b = (repeatedDataSource)) === null || _b === void 0 ? void 0 : _b.record;
                return record;
            }
            else {
                if (!this.props.useDataSources || this.props.useDataSources.length === 0) {
                    return null;
                }
                const dsId = this.props.useDataSources[0].dataSourceId;
                const isSelectionDataView = dsId.split('-').reverse()[0] === jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.SELECTION_DATA_VIEW_ID;
                if (isSelectionDataView) {
                    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
                    let record = ds === null || ds === void 0 ? void 0 : ds.getRecords()[0];
                    if (!record) {
                        const dataViewForNoSelection = ds === null || ds === void 0 ? void 0 : ds.getMainDataSource().getDataView(jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION);
                        record = dataViewForNoSelection === null || dataViewForNoSelection === void 0 ? void 0 : dataViewForNoSelection.getRecords()[0];
                    }
                    return record;
                }
                else {
                    const ds = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(dsId);
                    const record = ds === null || ds === void 0 ? void 0 : ds.getRecords()[0];
                    return record;
                }
            }
        };
        this.onDataSourceCreated = (dss) => {
            this.dataSources = dss;
            if (dss) {
                const infos = {};
                Object.keys(dss).forEach(dsId => {
                    if (dsId && dss[dsId]) {
                        infos[dsId] = dss[dsId].getInfo();
                    }
                });
                this.setState({ infos });
            }
        };
        this.onDataSourceInfoChange = (infos) => {
            this.setState({ infos });
        };
        this.addDataViewForNoSelection = (useDataSources) => {
            let selectionDataViews = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]);
            if (!useDataSources) {
                return selectionDataViews;
            }
            useDataSources.forEach(u => {
                if (u.mainDataSourceId && !selectionDataViews.some(s => s.mainDataSourceId === u.mainDataSourceId)) {
                    const mainDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(u.mainDataSourceId);
                    const mainDataSourceJson = mainDataSource && mainDataSource.getDataSourceJson();
                    const dataViewForNoSelection = (mainDataSourceJson === null || mainDataSourceJson === void 0 ? void 0 : mainDataSourceJson.dataViews) && (mainDataSourceJson === null || mainDataSourceJson === void 0 ? void 0 : mainDataSourceJson.dataViews[jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION]);
                    if (dataViewForNoSelection) {
                        selectionDataViews = selectionDataViews.concat(u.set('dataSourceId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataViewDataSourceId(u.mainDataSourceId, jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION))
                            .set('dataViewId', jimu_core__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION));
                    }
                }
            });
            return selectionDataViews.concat(useDataSources);
        };
        this.getQueries = (useDataSources) => {
            const queries = {};
            if (!useDataSources) {
                return queries;
            }
            useDataSources.forEach(u => {
                // set empty query to load data
                queries[u.dataSourceId] = {};
            });
            return queries;
        };
        this.state = {
            infos: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        this.updateRecord();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.isSelectedFromRepeatedDataSourceContext) {
            if ((this.props.repeatedDataSource !== prevProps.repeatedDataSource) || (this.props.isSelectedFromRepeatedDataSourceContext !== prevProps.isSelectedFromRepeatedDataSourceContext)) {
                this.updateRecord();
            }
        }
        else {
            if (this.props.useDataSources !== prevProps.useDataSources || !this.shallowEquals(this.state.infos, prevState.infos)) {
                this.updateRecord();
            }
        }
    }
    render() {
        const useDataSources = this.addDataViewForNoSelection(this.props.useDataSources);
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.MultipleDataSourceComponent, { useDataSources: useDataSources, onDataSourceCreated: this.onDataSourceCreated, onDataSourceInfoChange: this.onDataSourceInfoChange, queries: this.getQueries(useDataSources), widgetId: this.props.widgetId }));
    }
}
const RecordComponent = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.withRepeatedDataSource)(_RecordComponent);


/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/components/symbol-component.tsx":
/*!*************************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/components/symbol-component.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SymbolComponent": () => (/* binding */ SymbolComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class SymbolComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.dataSources = null;
        this.__unmount = false;
        this.isLoading = false;
        this.resolveExpressions = (record) => {
            if (record) {
                const dataRecord = record;
                this.isLoading = true;
                dataRecord && dataRecord.fetchSymbolPreviewHTML && dataRecord.fetchSymbolPreviewHTML().then((result) => {
                    if (this.isLoading) {
                        this.isLoading = false;
                        this.setState({
                            symbolElement: result
                        });
                    }
                }, () => {
                    this.isLoading = false;
                });
            }
            else {
                this.isLoading = false;
                this.setState({
                    symbolElement: null
                });
            }
        };
        /**
         * Determine if an object is equivalent with another, not recursively.
         */
        this.shallowEquals = (obj1, obj2) => {
            if (!obj1 && !obj2) {
                return true;
            }
            else if (obj1 && obj2) {
                if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                    return false;
                }
                else {
                    return !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);
                }
            }
            else {
                return false;
            }
        };
        this.state = {
            symbolElement: null
        };
    }
    componentDidMount() {
        this.__unmount = false;
        this.resolveExpressions(this.props.record);
    }
    componentWillUnmount() {
        this.__unmount = true;
        this.props.unmountSymbolElementChange && this.props.unmountSymbolElementChange();
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.shallowEquals(this.props.record, prevProps.record)) {
            this.resolveExpressions(this.props.record);
        }
        if (prevState.symbolElement !== this.state.symbolElement) {
            this.props.onChange && this.props.onChange(this.state.symbolElement);
        }
    }
    render() {
        return null;
    }
}


/***/ }),

/***/ "./jimu-icons/outlined/directional/left.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/left.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftOutlined": () => (/* binding */ LeftOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/directional/left.svg */ "./jimu-icons/svg/outlined/directional/left.svg");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const LeftOutlined = (props) => {
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/right.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/directional/right.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightOutlined": () => (/* binding */ RightOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/outlined/directional/right.svg */ "./jimu-icons/svg/outlined/directional/right.svg");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_2__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const RightOutlined = (props) => {
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_2___default()) }, others));
};


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/widget.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./extensions/widgets/common/image/src/config.ts");
/* harmony import */ var _components_attachment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attachment-component */ "./extensions/widgets/common/image/src/runtime/components/attachment-component.tsx");
/* harmony import */ var _components_symbol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/symbol-component */ "./extensions/widgets/common/image/src/runtime/components/symbol-component.tsx");
/* harmony import */ var _components_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/record-component */ "./extensions/widgets/common/image/src/runtime/components/record-component.tsx");
/* harmony import */ var _components_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/image-gallery */ "./extensions/widgets/common/image/src/runtime/components/image-gallery.tsx");
/** @jsx jsx */







const imageWidgetSizeMap = {};
class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        super(props);
        this.__unmount = false;
        this.attachmentTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/bmp', 'image/svg+xml'];
        this.isAutoHeight = false;
        this.checkIsStaticSrc = (imgSourceType) => {
            return imgSourceType === _config__WEBPACK_IMPORTED_MODULE_2__.ImgSourceType.ByUpload || imgSourceType === _config__WEBPACK_IMPORTED_MODULE_2__.ImgSourceType.ByStaticUrl || !imgSourceType;
        };
        this.getSrcExpression = () => {
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.srcExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{
                            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
                            exp: `"${this.props.config &&
                                this.props.config.functionConfig && this.props.config.functionConfig.imageParam && this.props.config.functionConfig.imageParam.url}"`
                        }]
                });
        };
        this.getAltTextExpression = () => {
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.altTextExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{
                            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
                            exp: `"${this.props.config &&
                                this.props.config.functionConfig && this.props.config.functionConfig.altText}"`
                        }]
                });
        };
        this.getToolTipExpression = () => {
            return (this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.toolTipExpression) ||
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({
                    name: '',
                    parts: [{
                            type: jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionPartType.String,
                            exp: `"${this.props.config &&
                                this.props.config.functionConfig && this.props.config.functionConfig.toolTip}"`
                        }]
                });
        };
        this.getLinkUrlExpression = () => {
            const expression = this.props.config && this.props.config.functionConfig && this.props.config.functionConfig.linkParam &&
                this.props.config.functionConfig.linkParam && this.props.config.functionConfig.linkParam.expression;
            return expression || null;
        };
        this.onSrcExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ src: (result.value === 'null' ? '' : result.value) });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.srcExpression && this.state.srcExpression.name;
                }
                this.setState({ src: res });
            }
        };
        this.onToolTipExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ toolTip: (result.value === 'null' ? '' : result.value) });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.srcExpression && this.state.srcExpression.name;
                }
                this.setState({ toolTip: res });
            }
        };
        this.onAltTextExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ altText: (result.value === 'null' ? '' : result.value) });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.srcExpression && this.state.srcExpression.name;
                }
                this.setState({ altText: res });
            }
        };
        this.onLinkUrlExpResolveChange = result => {
            if (result.isSuccessful) {
                this.setState({ linkUrl: result.value });
            }
            else {
                let res = '';
                const errorCode = result.value;
                if (errorCode === jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverErrorCode.Failed) {
                    res = this.state.srcExpression && this.state.srcExpression.name;
                }
                this.setState({ linkUrl: res });
            }
        };
        this.onAttachmentInfosChange = (attachmentInfos) => {
            this.setState({
                attachmentInfos: attachmentInfos
            });
        };
        this.unmountAttachmentInfosChange = () => {
            this.setState({
                attachmentInfos: []
            });
        };
        this.onSymbolElementChange = (symbolElement) => {
            this.setState({
                symbolElement: symbolElement
            });
        };
        this.unmountSymbolElementChange = () => {
            this.setState({
                symbolElement: null
            });
        };
        this.getRecordsFromRepeatedDataSource = () => {
            const dataSourceId = this.props.useDataSources && this.props.useDataSources[0] && this.props.useDataSources[0].dataSourceId;
            if (dataSourceId && this.props.repeatedDataSource) {
                if (dataSourceId === this.props.repeatedDataSource.dataSourceId) {
                    const record = this.props.repeatedDataSource.record;
                    return {
                        [dataSourceId]: record
                    };
                }
            }
            return null;
        };
        this.onClick = (event) => {
            const linkParam = this.props.config.functionConfig.linkParam;
            if (linkParam && linkParam.value && linkParam.linkType !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None) {
                event.exbEventType = 'linkClick';
            }
        };
        this.handleImageLoaded = (imageWidth, imageHeight) => {
            this.setState({
                imageWidth: imageWidth,
                imageHeight: imageHeight
            });
        };
        this.getWidgetWidth = () => {
            return this.state.widgetWidth;
        };
        this.getWidgetHeight = () => {
            return this.state.widgetHeight;
        };
        this.onResize = (width, height) => {
            if (this.__unmount) {
                return;
            }
            if (!width && !height) {
                return;
            }
            // eslint-disable-next-line
            if (width === this.state.widgetWidth && height === this.state.widgetHeight) {
            }
            else {
                imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] = {
                    width: width,
                    height: height
                };
                this.setState({
                    widgetWidth: width,
                    widgetHeight: height
                });
            }
        };
        this.onCropWidgetResize = (width, height) => {
            if (this.__unmount) {
                return;
            }
            if (!width && !height) {
                return;
            }
            this.setState({
                cropWidgetWidth: width,
                cropWidgetHeight: height
            });
        };
        this.clearCropWidgetSize = () => {
            this.setState({
                cropWidgetWidth: null,
                cropWidgetHeight: null
            });
        };
        this.handleRecordChange = (record) => {
            this.setState({
                record: record
            });
        };
        const ua = navigator.userAgent.toLowerCase();
        if (!ua.includes('chrom') && !ua.includes('firefox') && ua.includes('safari')) {
            this.isAutoHeight = true;
        }
        this.debounceOnResize = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce((width, height) => this.onResize(width, height), 200);
        this.state = {
            record: null,
            toolTip: ((_c = (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.functionConfig) === null || _c === void 0 ? void 0 : _c.toolTip) || '',
            altText: ((_f = (_e = (_d = this.props) === null || _d === void 0 ? void 0 : _d.config) === null || _e === void 0 ? void 0 : _e.functionConfig) === null || _f === void 0 ? void 0 : _f.altText) || '',
            src: ((_k = (_j = (_h = (_g = this.props) === null || _g === void 0 ? void 0 : _g.config) === null || _h === void 0 ? void 0 : _h.functionConfig) === null || _j === void 0 ? void 0 : _j.imageParam) === null || _k === void 0 ? void 0 : _k.url) || '',
            linkUrl: ((_p = (_o = (_m = (_l = this.props) === null || _l === void 0 ? void 0 : _l.config) === null || _m === void 0 ? void 0 : _m.functionConfig) === null || _o === void 0 ? void 0 : _o.linkParam) === null || _p === void 0 ? void 0 : _p.value) || '',
            srcExpression: this.props.useDataSourcesEnabled && this.getSrcExpression(),
            altTextExpression: this.props.useDataSourcesEnabled && this.getAltTextExpression(),
            toolTipExpression: this.props.useDataSourcesEnabled && this.getToolTipExpression(),
            linkUrlExpression: this.props.useDataSourcesEnabled && this.getLinkUrlExpression(),
            attachmentInfos: [],
            symbolElement: null,
            widgetWidth: imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] && imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId].width,
            widgetHeight: imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId] && imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId].height,
            cropWidgetWidth: null,
            cropWidgetHeight: null
        };
    }
    getStyle() {
        const symbolScale = this.props.config.functionConfig.symbolScale
            ? this.props.config.functionConfig.symbolScale
            : 1;
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      .widget-image-container {
        .btn-link {
          padding: 0;
          width: 100%;
          height: 100%;
          outline-offset: -2px;
        }
      }
      .image-symbol {
        svg {
          transform: scale(${symbolScale}, ${symbolScale})
        }
      }
      .image-gallery-button {
        cursor: pointer;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        background-color: ${jimu_core__WEBPACK_IMPORTED_MODULE_0__.polished.rgba(this.props.theme.colors.white, 0.5)};
      }
      .image-gallery-button: hover {
        background-color: ${this.props.theme.colors.white};
      }
    `;
    }
    componentDidMount() {
        this.__unmount = false;
    }
    componentDidUpdate(prevProps, prevState) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        if (!this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || prevProps.useDataSourcesEnabled)) {
            this.setState({
                src: ((_d = (_c = (_b = (_a = this.props) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.functionConfig) === null || _c === void 0 ? void 0 : _c.imageParam) === null || _d === void 0 ? void 0 : _d.url) || '',
                toolTip: (_g = (_f = (_e = this.props) === null || _e === void 0 ? void 0 : _e.config) === null || _f === void 0 ? void 0 : _f.functionConfig) === null || _g === void 0 ? void 0 : _g.toolTip,
                altText: (_k = (_j = (_h = this.props) === null || _h === void 0 ? void 0 : _h.config) === null || _j === void 0 ? void 0 : _j.functionConfig) === null || _k === void 0 ? void 0 : _k.altText,
                linkUrl: (_p = (_o = (_m = (_l = this.props) === null || _l === void 0 ? void 0 : _l.config) === null || _m === void 0 ? void 0 : _m.functionConfig) === null || _o === void 0 ? void 0 : _o.linkParam) === null || _p === void 0 ? void 0 : _p.value
            });
        }
        if (this.props.useDataSourcesEnabled &&
            (this.props.config !== prevProps.config || !prevProps.useDataSourcesEnabled)) {
            if (this.checkIsStaticSrc(this.props.config.functionConfig.imgSourceType)) {
                this.setState({
                    src: ((_t = (_s = (_r = (_q = this.props) === null || _q === void 0 ? void 0 : _q.config) === null || _r === void 0 ? void 0 : _r.functionConfig) === null || _s === void 0 ? void 0 : _s.imageParam) === null || _t === void 0 ? void 0 : _t.url) || '',
                    toolTipExpression: this.getToolTipExpression(),
                    altTextExpression: this.getAltTextExpression(),
                    linkUrlExpression: this.getLinkUrlExpression()
                });
            }
            else if ((this.props.config.functionConfig.imgSourceType === _config__WEBPACK_IMPORTED_MODULE_2__.ImgSourceType.ByDynamicUrl &&
                (!this.props.config.functionConfig.dynamicUrlType || this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Expression))) {
                this.setState({
                    srcExpression: this.getSrcExpression(),
                    toolTipExpression: this.getToolTipExpression(),
                    altTextExpression: this.getAltTextExpression(),
                    linkUrlExpression: this.getLinkUrlExpression()
                });
            }
            else {
                this.setState({
                    src: '',
                    toolTipExpression: this.getToolTipExpression(),
                    altTextExpression: this.getAltTextExpression(),
                    linkUrlExpression: this.getLinkUrlExpression()
                });
            }
        }
    }
    componentWillUnmount() {
        this.__unmount = true;
        const widgetJson = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets[this.props.id];
        if (!widgetJson) {
            delete imageWidgetSizeMap[this.props.id + '-' + this.props.layoutId];
        }
    }
    render() {
        const isDataSourceUsed = this.props.useDataSourcesEnabled;
        const { queryObject } = this.props;
        const { toolTip, altText, src } = this.state;
        let renderResult = null;
        let imageContent = null;
        let imageParam = this.props.config.functionConfig.imageParam ? this.props.config.functionConfig.imageParam : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)({});
        if (imageParam.set) {
            imageParam = imageParam.set('url', src);
        }
        else {
            imageParam.url = src;
        }
        const cropParam = imageParam && imageParam.cropParam;
        const isUseSvgRender = cropParam && (cropParam.cropType === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.CropType.Fake || cropParam.cropShape);
        imageContent = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget' },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget widget-image image-param', style: { minHeight: '16px' } },
                this.props.config.functionConfig.dynamicUrlType !== _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Attachment &&
                    this.props.config.functionConfig.dynamicUrlType !== _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Symbol &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageWithParam, { imageParam: imageParam, toolTip: toolTip, altText: altText, onImageLoaded: this.handleImageLoaded, useFadein: true, size: isUseSvgRender ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null, imageFillMode: this.props.config.functionConfig.imageFillMode, isAutoHeight: this.isAutoHeight, imageDisplayQualityMode: this.props.config.functionConfig.imageDisplayQualityMode }),
                this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Attachment &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100' },
                        isDataSourceUsed && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_image_gallery__WEBPACK_IMPORTED_MODULE_6__.ImageGallery, { sources: this.state.attachmentInfos, imageParam: imageParam, imageFillMode: this.props.config.functionConfig.imageFillMode, size: isUseSvgRender ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null, isAutoHeight: this.isAutoHeight, toolTip: toolTip, altText: altText, altTextWithAttachmentName: this.props.config.functionConfig.altTextWithAttachmentName, toolTipWithAttachmentName: this.props.config.functionConfig.toolTipWithAttachmentName, useFadein: true }),
                        !isDataSourceUsed && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageWithParam, { imageParam: imageParam, toolTip: toolTip, altText: altText, useFadein: true, size: isUseSvgRender ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null, imageFillMode: this.props.config.functionConfig.imageFillMode, isAutoHeight: this.isAutoHeight, imageDisplayQualityMode: this.props.config.functionConfig.imageDisplayQualityMode })),
                this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Symbol &&
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100' },
                        (!this.state.symbolElement || !isDataSourceUsed) && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageWithParam, { imageParam: imageParam, toolTip: toolTip, altText: altText, useFadein: true, size: isUseSvgRender ? { width: this.state.widgetWidth, height: this.state.widgetHeight } : null, imageFillMode: this.props.config.functionConfig.imageFillMode, isAutoHeight: this.isAutoHeight, imageDisplayQualityMode: this.props.config.functionConfig.imageDisplayQualityMode }),
                        this.state.symbolElement && isDataSourceUsed && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'w-100 h-100 image-symbol', title: toolTip, dangerouslySetInnerHTML: { __html: this.state.symbolElement.outerHTML } })),
                isUseSvgRender && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: this.debounceOnResize }))));
        let target;
        let linkTo;
        const linkParam = this.props.config.functionConfig.linkParam;
        if (linkParam && linkParam.linkType) {
            target = linkParam.openType;
            linkTo = {
                linkType: linkParam.linkType
            };
            if (linkParam.linkType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.WebAddress) {
                linkTo.value = this.state.linkUrl;
            }
            else {
                linkTo.value = linkParam.value;
            }
        }
        if (linkTo && (linkTo === null || linkTo === void 0 ? void 0 : linkTo.linkType) !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.LinkType.None) {
            renderResult = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'widget-image-container jimu-widget' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Link, { to: linkTo, target: target, queryObject: queryObject }, imageContent)));
        }
        else {
            renderResult = imageContent;
        }
        if (this.props.config.functionConfig.imageFillMode !== jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageFillMode.Fit && this.props.isInlineEditing && src &&
            (!this.props.repeatedDataSource || (this.props.repeatedDataSource && this.props.repeatedDataSource.recordIndex === 0))) {
            // open crop tool
            const WidgetInBuilder = this.props.builderSupportModules.widgetModules.WidgetInBuilder;
            renderResult = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ReactResizeDetector, { handleWidth: true, handleHeight: true, onResize: this.onCropWidgetResize }),
                renderResult,
                this.state.cropWidgetHeight && this.state.cropWidgetWidth && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(WidgetInBuilder, { widgetId: this.props.id, config: this.props.config, onUnmount: () => { this.clearCropWidgetSize(); }, widgetWidth: this.state.cropWidgetWidth, widgetHeight: this.state.cropWidgetHeight })));
        }
        else {
            renderResult = ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: 'jimu-widget', css: this.getStyle(), onClick: (event) => { this.onClick(event); }, onTouchEnd: (event) => { this.onClick(event); } },
                renderResult,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: 'none' } },
                    isDataSourceUsed && this.props.config.functionConfig.imgSourceType === _config__WEBPACK_IMPORTED_MODULE_2__.ImgSourceType.ByDynamicUrl &&
                        (!this.props.config.functionConfig.dynamicUrlType || this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Expression) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.getSrcExpression(), onChange: this.onSrcExpResolveChange, widgetId: this.props.id })),
                    isDataSourceUsed && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.getAltTextExpression(), onChange: this.onAltTextExpResolveChange, widgetId: this.props.id }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.getToolTipExpression(), onChange: this.onToolTipExpResolveChange, widgetId: this.props.id }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.ExpressionResolverComponent, { useDataSources: this.props.useDataSources, expression: this.state.linkUrlExpression, onChange: this.onLinkUrlExpResolveChange, widgetId: this.props.id })),
                    // The original logic determines whether the AttachmentComponent and SymbolComponent were rendered by dynamicUrlType, this causes attachmentInfos
                    // to remain unchanged when the data source changes and the type is reset to default, and the onChange event is not executed. When attachment type
                    // is selected again, if the new data is null, then attachmentInfos does not change internally (null -> null), so attachmentInfos does not change.
                    // Now add the method to reset the corresponding state when unmount
                    isDataSourceUsed && this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Attachment &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_attachment_component__WEBPACK_IMPORTED_MODULE_3__.AttachmentComponent, { record: this.state.record, unmountAttachmentInfosChange: this.unmountAttachmentInfosChange, onChange: this.onAttachmentInfosChange, attachmentTypes: this.attachmentTypes })),
                    isDataSourceUsed && this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Symbol &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_symbol_component__WEBPACK_IMPORTED_MODULE_4__.SymbolComponent, { record: this.state.record, unmountSymbolElementChange: this.unmountSymbolElementChange, onChange: this.onSymbolElementChange })),
                    isDataSourceUsed && (this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Attachment ||
                        this.props.config.functionConfig.dynamicUrlType === _config__WEBPACK_IMPORTED_MODULE_2__.DynamicUrlType.Symbol) &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_record_component__WEBPACK_IMPORTED_MODULE_5__.RecordComponent, { widgetId: this.props.id, useDataSources: this.props.config.functionConfig.useDataSourceForMainDataAndViewSelector
                                    ? (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([this.props.config.functionConfig.useDataSourceForMainDataAndViewSelector])
                                    : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)([]), isSelectedFromRepeatedDataSourceContext: this.props.config.functionConfig.isSelectedFromRepeatedDataSourceContext, onRecordChange: this.handleRecordChange })))));
        }
        return renderResult;
    }
}
Widget.mapExtraStateProps = (state) => {
    return {
        queryObject: state.queryObject
    };
};

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vaW1hZ2UvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCO0lBQ3JCLDRDQUEyQjtJQUMzQiw4Q0FBNkI7QUFDL0IsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsSUFBWSxjQUlYO0FBSkQsV0FBWSxjQUFjO0lBQ3hCLDJDQUF5QjtJQUN6QiwyQ0FBeUI7SUFDekIsbUNBQWlCO0FBQ25CLENBQUMsRUFKVyxjQUFjLEtBQWQsY0FBYyxRQUl6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmd0U7QUFlbEUsTUFBTSxtQkFBb0IsU0FBUSwwREFBaUM7SUFLeEUsWUFBYSxLQUFZO1FBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFMZCxnQkFBVyxHQUEyQyxJQUFJO1FBQzFELGNBQVMsR0FBRyxLQUFLO1FBQ2pCLGNBQVMsR0FBRyxLQUFLO1FBK0JqQix1QkFBa0IsR0FBRyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtZQUMxQyxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLFVBQVUsR0FBRyxNQUFnQztnQkFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJO2dCQUNyQixVQUFVLElBQUksVUFBVSxDQUFDLGdCQUFnQixJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFFO29CQUM1SCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSzt3QkFFdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDWixlQUFlLEVBQUUsZUFBZTt5QkFDakMsQ0FBQztxQkFDSDtnQkFDSCxDQUFDLEVB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dXRsaW5lZC9kaXJlY3Rpb25hbC9sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9hdHRhY2htZW50LWNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9pbWFnZS9zcmMvcnVudGltZS9jb21wb25lbnRzL3JlY29yZC1jb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvc3ltYm9sLWNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vaW1hZ2Uvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMS4zNDcgMi4xNDZhLjQ4NS40ODUgMCAwIDEgMCAuNzA4TDUuNzYgOGw1LjU4NyA1LjE0NmEuNDg2LjQ4NiAwIDAgMSAwIC43MDguNTM4LjUzOCAwIDAgMS0uNzM4IDBsLTUuOTU2LTUuNWEuNDg1LjQ4NSAwIDAgMSAwLS43MDhsNS45NTYtNS41YS41MzguNTM4IDAgMCAxIC43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQuNjUzIDEzLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDhMMTAuMjQgOCA0LjY1MyAyLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDguNTM4LjUzOCAwIDAgMSAuNzM4IDBsNS45NTYgNS41YS40ODUuNDg1IDAgMCAxIDAgLjcwOGwtNS45NTYgNS41YS41MzguNTM4IDAgMCAxLS43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IEV4cHJlc3Npb24sIElNVXNlRGF0YVNvdXJjZSwgSW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGUgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IExpbmtQYXJhbSB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBGb3VyU2lkZXNVbml0LCBCb3JkZXJTdHlsZSwgQm94U2hhZG93U3R5bGUsIEltYWdlUGFyYW0sIEltYWdlRmlsbE1vZGUgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBJbW11dGFibGVPYmplY3QgfSBmcm9tICdzZWFtbGVzcy1pbW11dGFibGUnXHJcblxyXG5leHBvcnQgZW51bSBJbWdTb3VyY2VUeXBlIHtcclxuICBCeVVwbG9hZCA9ICdCWVVQTE9BRCcsXHJcbiAgQnlTdGF0aWNVcmwgPSAnQllTVEFUSUNVUkwnLFxyXG4gIEJ5RHluYW1pY1VybCA9ICdCWURZTkFNSUNVUkwnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIER5bmFtaWNVcmxUeXBlIHtcclxuICBFeHByZXNzaW9uID0gJ0VYUFJFU1NJT04nLFxyXG4gIEF0dGFjaG1lbnQgPSAnQVRUQUNITUVOVCcsXHJcbiAgU3ltYm9sID0gJ1NZTUJPTCdcclxufVxyXG5cclxuaW50ZXJmYWNlIEZ1bmN0aW9uQ29uZmlnIHtcclxuICBhbHRUZXh0OiBzdHJpbmdcclxuICB0b29sVGlwOiBzdHJpbmdcclxuICBhbHRUZXh0V2l0aEF0dGFjaG1lbnROYW1lOiBib29sZWFuXHJcbiAgdG9vbFRpcFdpdGhBdHRhY2htZW50TmFtZTogYm9vbGVhblxyXG4gIHNyY0V4cHJlc3Npb24/OiBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj5cclxuICBhbHRUZXh0RXhwcmVzc2lvbjogSW1tdXRhYmxlT2JqZWN0PEV4cHJlc3Npb24+XHJcbiAgdG9vbFRpcEV4cHJlc3Npb246IEltbXV0YWJsZU9iamVjdDxFeHByZXNzaW9uPlxyXG4gIGxpbmtQYXJhbTogTGlua1BhcmFtXHJcbiAgaW1hZ2VGaWxsTW9kZT86IEltYWdlRmlsbE1vZGVcclxuICBpbWdTb3VyY2VUeXBlPzogSW1nU291cmNlVHlwZVxyXG4gIGltYWdlUGFyYW0/OiBJbW11dGFibGVPYmplY3Q8SW1hZ2VQYXJhbT5cclxuICBzeW1ib2xTY2FsZT86IG51bWJlclxyXG4gIGR5bmFtaWNVcmxUeXBlPzogRHluYW1pY1VybFR5cGVcclxuICBpc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQ6IGJvb2xlYW5cclxuICB1c2VEYXRhU291cmNlRm9yTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3I6IElNVXNlRGF0YVNvdXJjZVxyXG4gIGltYWdlRGlzcGxheVF1YWxpdHlNb2RlPzogSW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHlsZUNvbmZpZyB7XHJcbiAgbmFtZT86IHN0cmluZ1xyXG4gIHNoYXBlPzogc3RyaW5nXHJcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nXHJcbiAgYm9yZGVyPzogQm9yZGVyU3R5bGVcclxuICBib3JkZXJSYWRpdXM/OiBGb3VyU2lkZXNVbml0XHJcbiAgYm94U2hhZG93PzogQm94U2hhZG93U3R5bGVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaGFwZVN0eWxlIHtcclxuICBib3JkZXJSYWRpdXM/OiBGb3VyU2lkZXNVbml0XHJcbiAgdGh1bWJVcmw/OiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWd7XHJcbiAgZnVuY3Rpb25Db25maWc6IEZ1bmN0aW9uQ29uZmlnXHJcbiAgc3R5bGVDb25maWc6IFN0eWxlQ29uZmlnXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuIiwiaW1wb3J0IHsgRGF0YVJlY29yZCwgUmVhY3QsIERhdGFTb3VyY2UsIEF0dGFjaG1lbnRJbmZvIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBGZWF0dXJlRGF0YVJlY29yZCBhcyBGZWF0dXJlTGF5ZXJEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHN7XHJcbiAgcmVjb3JkOiBEYXRhUmVjb3JkXHJcbiAgYXR0YWNobWVudFR5cGVzPzogc3RyaW5nW11cclxuXHJcbiAgb25DaGFuZ2U/OiAoYXR0YWNobWVudEluZm9zOiBBdHRhY2htZW50SW5mb1tdKSA9PiB2b2lkXHJcbiAgdW5tb3VudEF0dGFjaG1lbnRJbmZvc0NoYW5nZT86ICgpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRle1xyXG4gIGF0dGFjaG1lbnRJbmZvczogQXR0YWNobWVudEluZm9bXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgZGF0YVNvdXJjZXM6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogRGF0YVNvdXJjZSB9ID0gbnVsbFxyXG4gIF9fdW5tb3VudCA9IGZhbHNlXHJcbiAgaXNMb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhdHRhY2htZW50SW5mb3M6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuICAgIHRoaXMucmVzb2x2ZUV4cHJlc3Npb25zKHRoaXMucHJvcHMucmVjb3JkKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSB0cnVlXHJcbiAgICB0aGlzLnByb3BzLnVubW91bnRBdHRhY2htZW50SW5mb3NDaGFuZ2UgJiYgdGhpcy5wcm9wcy51bm1vdW50QXR0YWNobWVudEluZm9zQ2hhbmdlKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zaGFsbG93RXF1YWxzKHRoaXMucHJvcHMucmVjb3JkLCBwcmV2UHJvcHMucmVjb3JkKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVzb2x2ZUV4cHJlc3Npb25zKHRoaXMucHJvcHMucmVjb3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2U3RhdGUuYXR0YWNobWVudEluZm9zICE9PSB0aGlzLnN0YXRlLmF0dGFjaG1lbnRJbmZvcykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5hdHRhY2htZW50SW5mb3MpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNvbHZlRXhwcmVzc2lvbnMgPSAocmVjb3JkOiBEYXRhUmVjb3JkKSA9PiB7XHJcbiAgICBpZiAocmVjb3JkKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmQgPSByZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZFxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcclxuICAgICAgZGF0YVJlY29yZCAmJiBkYXRhUmVjb3JkLnF1ZXJ5QXR0YWNobWVudHMgJiYgZGF0YVJlY29yZC5xdWVyeUF0dGFjaG1lbnRzKHRoaXMucHJvcHMuYXR0YWNobWVudFR5cGVzKS50aGVuKChhdHRhY2htZW50SW5mb3MpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYXR0YWNobWVudEluZm9zOiBhdHRhY2htZW50SW5mb3NcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXR0YWNobWVudEluZm9zOiBudWxsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGVxdWl2YWxlbnQgd2l0aCBhbm90aGVyLCBub3QgcmVjdXJzaXZlbHkuXHJcbiAgICovXHJcbiAgc2hhbGxvd0VxdWFscyA9IChvYmoxOiB7W2tleTogc3RyaW5nXTogYW55fSwgb2JqMjoge1trZXk6IHN0cmluZ106IGFueX0pOiBib29sZWFuID0+IHtcclxuICAgIGlmICghb2JqMSAmJiAhb2JqMikge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChvYmoxICYmIG9iajIpIHtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKG9iajEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqMikubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmoxKS5zb21lKGtleSA9PiBvYmoxW2tleV0gIT09IG9iajJba2V5XSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIEF0dGFjaG1lbnRJbmZvIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBJbWFnZVdpdGhQYXJhbSwgSW1hZ2VQYXJhbSwgSW1hZ2VXaXRoUGFyYW1Qcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IExlZnRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdCdcclxuaW1wb3J0IHsgUmlnaHRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQnXHJcblxyXG5pbnRlcmZhY2UgSW1hZ2VHYWxsZXJ5UHJvcHMgZXh0ZW5kcyBJbWFnZVdpdGhQYXJhbVByb3Bze1xyXG4gIHNvdXJjZXM6IEF0dGFjaG1lbnRJbmZvW11cclxuICB0b29sVGlwV2l0aEF0dGFjaG1lbnROYW1lPzogYm9vbGVhblxyXG4gIGFsdFRleHRXaXRoQXR0YWNobWVudE5hbWU/OiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZXN7XHJcbiAgY3VycmVudEluZGV4OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SW1hZ2VHYWxsZXJ5UHJvcHMsIFN0YXRlcz4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogSW1hZ2VHYWxsZXJ5UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudEluZGV4OiAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogSW1hZ2VHYWxsZXJ5UHJvcHMsIHByZXZTdGF0ZTogU3RhdGVzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNvdXJjZXMgIT09IHRoaXMucHJvcHMuc291cmNlcykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50SW5kZXg6IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhY2tJbWcgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgcHJlSW5kZXggPSB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA+IDAgPyB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCAtIDEgOiB0aGlzLnByb3BzLnNvdXJjZXMubGVuZ3RoIC0gMVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJbmRleDogcHJlSW5kZXhcclxuICAgIH0pXHJcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlPy5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgZm9yd2FyZEltZyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA8IHRoaXMucHJvcHMuc291cmNlcy5sZW5ndGggLSAxID8gdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggKyAxIDogMFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJbmRleDogbmV4dEluZGV4XHJcbiAgICB9KVxyXG4gICAgZT8ucHJldmVudERlZmF1bHQoKVxyXG4gICAgZT8uc3RvcFByb3BhZ2F0aW9uKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBsZXQgdGVtcEltYWdlUGFyYW0gPSB7fSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCB0b29sVGlwID0gdGhpcy5wcm9wcy50b29sVGlwV2l0aEF0dGFjaG1lbnROYW1lID8gKHRoaXMucHJvcHMuc291cmNlcyAmJiB0aGlzLnByb3BzLnNvdXJjZXNbdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXhdICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0ubmFtZSkgOiB0aGlzLnByb3BzLnRvb2xUaXBcclxuICAgIGNvbnN0IGFsdFRleHQgPSB0aGlzLnByb3BzLmFsdFRleHRXaXRoQXR0YWNobWVudE5hbWUgPyAodGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS5uYW1lKSA6IHRoaXMucHJvcHMuYWx0VGV4dFxyXG4gICAgaWYgKCh0aGlzLnByb3BzLmltYWdlUGFyYW0gYXMgYW55KS5zZXQpIHtcclxuICAgICAgdGVtcEltYWdlUGFyYW0gPSAodGhpcy5wcm9wcy5pbWFnZVBhcmFtIGFzIGFueSkuc2V0KCd1cmwnLCAodGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS51cmwpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcEltYWdlUGFyYW0udXJsID0gdGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS51cmxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNvdXJjZXMgJiYgdGhpcy5wcm9wcy5zb3VyY2VzLmxlbmd0aCA+IDEgJiYgPGRpdiB0aXRsZT17dG9vbFRpcH0gY2xhc3NOYW1lPSdzaWxkZXItdG9vbC1jb250YWluZXIgdy0xMDAgaC0xMDAnIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDEgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGltYWdlLWdhbGxlcnktYnV0dG9uIG1sLTInXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYmFja0ltZ30gc3R5bGU9e3sgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMZWZ0T3V0bGluZWQgc2l6ZT0ncycvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGltYWdlLWdhbGxlcnktYnV0dG9uIG1yLTInXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZm9yd2FyZEltZ30gc3R5bGU9e3sgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UmlnaHRPdXRsaW5lZCBzaXplPSdzJy8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWdhbGxlcnktY29udGVudCB3LTEwMCBoLTEwMCc+XHJcbiAgICAgICAgICA8SW1hZ2VXaXRoUGFyYW1cclxuICAgICAgICAgICAgaW1hZ2VQYXJhbT17dGVtcEltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbX1cclxuICAgICAgICAgICAgdXNlRmFkZWluIHNpemU9e3RoaXMucHJvcHMuc2l6ZX1cclxuICAgICAgICAgICAgaW1hZ2VGaWxsTW9kZT17dGhpcy5wcm9wcy5pbWFnZUZpbGxNb2RlfVxyXG4gICAgICAgICAgICBpc0F1dG9IZWlnaHQ9e3RoaXMucHJvcHMuaXNBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgICB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgSW1tdXRhYmxlQXJyYXksIEltbXV0YWJsZSwgVXNlRGF0YVNvdXJjZSwgRGF0YVJlY29yZCwgUmVhY3QsIE11bHRpcGxlRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICBEYXRhU291cmNlLCBJTURhdGFTb3VyY2VJbmZvLCB3aXRoUmVwZWF0ZWREYXRhU291cmNlLCBSZXBlYXRlZERhdGFTb3VyY2UsIENPTlNUQU5UUyxcclxuICBEYXRhU291cmNlTWFuYWdlclxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICB3aWRnZXRJZDogc3RyaW5nXHJcbiAgdXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+XHJcbiAgaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0PzogYm9vbGVhblxyXG5cclxuICBvblJlY29yZENoYW5nZT86IChyZWNvcmQ6IERhdGFSZWNvcmQpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIEV4dHJhUHJvcHN7XHJcbiAgcmVwZWF0ZWREYXRhU291cmNlOiBSZXBlYXRlZERhdGFTb3VyY2UgfCBSZXBlYXRlZERhdGFTb3VyY2VbXVxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGV7XHJcbiAgaW5mb3M6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogSU1EYXRhU291cmNlSW5mbyB9XHJcbn1cclxuXHJcbmNsYXNzIF9SZWNvcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcclxuICBkYXRhU291cmNlczogeyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBEYXRhU291cmNlIH0gPSBudWxsXHJcbiAgX191bm1vdW50ID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzOiBQcm9wcyAmIEV4dHJhUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5mb3M6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuICAgIHRoaXMudXBkYXRlUmVjb3JkKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlY29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2luZ2xlUmVjb3JkKClcclxuICAgIGlmICh0aGlzLnByb3BzLm9uUmVjb3JkQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25SZWNvcmRDaGFuZ2UocmVjb3JkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IFByb3BzICYgRXh0cmFQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0KSB7XHJcbiAgICAgIGlmICgodGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UgIT09IHByZXZQcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UpIHx8ICh0aGlzLnByb3BzLmlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCAhPT0gcHJldlByb3BzLmlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlY29yZCgpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICE9PSBwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgIXRoaXMuc2hhbGxvd0VxdWFscyh0aGlzLnN0YXRlLmluZm9zLCBwcmV2U3RhdGUuaW5mb3MpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVjb3JkKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hhbGxvd0VxdWFscyA9IChvYmoxOiB7W2tleTogc3RyaW5nXTogYW55fSwgb2JqMjoge1trZXk6IHN0cmluZ106IGFueX0pOiBib29sZWFuID0+IHtcclxuICAgIGlmICghb2JqMSAmJiAhb2JqMikge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChvYmoxICYmIG9iajIpIHtcclxuICAgICAgaWYgKE9iamVjdC5rZXlzKG9iajEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMob2JqMikubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICFPYmplY3Qua2V5cyhvYmoxKS5zb21lKGtleSA9PiBvYmoxW2tleV0gIT09IG9iajJba2V5XSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTaW5nbGVSZWNvcmQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQpIHtcclxuICAgICAgY29uc3QgcmVwZWF0ZWREYXRhU291cmNlID0gdGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2VcclxuICAgICAgY29uc3QgcmVjb3JkID0gQXJyYXkuaXNBcnJheShyZXBlYXRlZERhdGFTb3VyY2UpXHJcbiAgICAgICAgPyAocmVwZWF0ZWREYXRhU291cmNlKVswXT8ucmVjb3JkXHJcbiAgICAgICAgOiAocmVwZWF0ZWREYXRhU291cmNlKT8ucmVjb3JkXHJcbiAgICAgIHJldHVybiByZWNvcmRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyB8fCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGRzSWQgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG4gICAgICBjb25zdCBpc1NlbGVjdGlvbkRhdGFWaWV3ID0gZHNJZC5zcGxpdCgnLScpLnJldmVyc2UoKVswXSA9PT0gQ09OU1RBTlRTLlNFTEVDVElPTl9EQVRBX1ZJRVdfSURcclxuICAgICAgaWYgKGlzU2VsZWN0aW9uRGF0YVZpZXcpIHtcclxuICAgICAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKVxyXG4gICAgICAgIGxldCByZWNvcmQgPSBkcz8uZ2V0UmVjb3JkcygpWzBdXHJcbiAgICAgICAgaWYgKCFyZWNvcmQpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGFWaWV3Rm9yTm9TZWxlY3Rpb24gPSBkcz8uZ2V0TWFpbkRhdGFTb3VyY2UoKS5nZXREYXRhVmlldyhDT05TVEFOVFMuREFUQV9WSUVXX0lEX0ZPUl9OT19TRUxFQ1RJT04pXHJcbiAgICAgICAgICByZWNvcmQgPSBkYXRhVmlld0Zvck5vU2VsZWN0aW9uPy5nZXRSZWNvcmRzKClbMF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlY29yZFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGRzID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzSWQpXHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gZHM/LmdldFJlY29yZHMoKVswXVxyXG4gICAgICAgIHJldHVybiByZWNvcmRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRhU291cmNlQ3JlYXRlZCA9IChkc3M6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogRGF0YVNvdXJjZSB9KSA9PiB7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2VzID0gZHNzXHJcblxyXG4gICAgaWYgKGRzcykge1xyXG4gICAgICBjb25zdCBpbmZvcyA9IHt9XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhkc3MpLmZvckVhY2goZHNJZCA9PiB7XHJcbiAgICAgICAgaWYgKGRzSWQgJiYgZHNzW2RzSWRdKSB7XHJcbiAgICAgICAgICBpbmZvc1tkc0lkXSA9IGRzc1tkc0lkXS5nZXRJbmZvKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5mb3MgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2UgPSAoaW5mb3M6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogSU1EYXRhU291cmNlSW5mbyB9KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5mb3MgfSlcclxuICB9XHJcblxyXG4gIGFkZERhdGFWaWV3Rm9yTm9TZWxlY3Rpb24gPSAodXNlRGF0YVNvdXJjZXM6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+KTogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4gPT4ge1xyXG4gICAgbGV0IHNlbGVjdGlvbkRhdGFWaWV3czogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4gPSBJbW11dGFibGUoW10pXHJcbiAgICBpZiAoIXVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHJldHVybiBzZWxlY3Rpb25EYXRhVmlld3NcclxuICAgIH1cclxuICAgIHVzZURhdGFTb3VyY2VzLmZvckVhY2godSA9PiB7XHJcbiAgICAgIGlmICh1Lm1haW5EYXRhU291cmNlSWQgJiYgIXNlbGVjdGlvbkRhdGFWaWV3cy5zb21lKHMgPT4gcy5tYWluRGF0YVNvdXJjZUlkID09PSB1Lm1haW5EYXRhU291cmNlSWQpKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkRhdGFTb3VyY2UgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UodS5tYWluRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGNvbnN0IG1haW5EYXRhU291cmNlSnNvbiA9IG1haW5EYXRhU291cmNlICYmIG1haW5EYXRhU291cmNlLmdldERhdGFTb3VyY2VKc29uKClcclxuICAgICAgICBjb25zdCBkYXRhVmlld0Zvck5vU2VsZWN0aW9uID0gbWFpbkRhdGFTb3VyY2VKc29uPy5kYXRhVmlld3MgJiYgbWFpbkRhdGFTb3VyY2VKc29uPy5kYXRhVmlld3NbQ09OU1RBTlRTLkRBVEFfVklFV19JRF9GT1JfTk9fU0VMRUNUSU9OXVxyXG4gICAgICAgIGlmIChkYXRhVmlld0Zvck5vU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICBzZWxlY3Rpb25EYXRhVmlld3MgPSBzZWxlY3Rpb25EYXRhVmlld3MuY29uY2F0KFxyXG4gICAgICAgICAgICB1LnNldCgnZGF0YVNvdXJjZUlkJywgRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhVmlld0RhdGFTb3VyY2VJZCh1Lm1haW5EYXRhU291cmNlSWQsIENPTlNUQU5UUy5EQVRBX1ZJRVdfSURfRk9SX05PX1NFTEVDVElPTikpXHJcbiAgICAgICAgICAgICAgLnNldCgnZGF0YVZpZXdJZCcsIENPTlNUQU5UUy5EQVRBX1ZJRVdfSURfRk9SX05PX1NFTEVDVElPTilcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbkRhdGFWaWV3cy5jb25jYXQodXNlRGF0YVNvdXJjZXMpXHJcbiAgfVxyXG5cclxuICBnZXRRdWVyaWVzID0gKHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPikgPT4ge1xyXG4gICAgY29uc3QgcXVlcmllcyA9IHt9XHJcbiAgICBpZiAoIXVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgIHJldHVybiBxdWVyaWVzXHJcbiAgICB9XHJcbiAgICB1c2VEYXRhU291cmNlcy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICAvLyBzZXQgZW1wdHkgcXVlcnkgdG8gbG9hZCBkYXRhXHJcbiAgICAgIHF1ZXJpZXNbdS5kYXRhU291cmNlSWRdID0ge31cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHF1ZXJpZXNcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB1c2VEYXRhU291cmNlcyA9IHRoaXMuYWRkRGF0YVZpZXdGb3JOb1NlbGVjdGlvbih0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNdWx0aXBsZURhdGFTb3VyY2VDb21wb25lbnRcclxuICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XHJcbiAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlSW5mb0NoYW5nZX1cclxuICAgICAgICBxdWVyaWVzPXt0aGlzLmdldFF1ZXJpZXModXNlRGF0YVNvdXJjZXMpfVxyXG4gICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLndpZGdldElkfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlY29yZENvbXBvbmVudCA9IHdpdGhSZXBlYXRlZERhdGFTb3VyY2UoX1JlY29yZENvbXBvbmVudClcclxuIiwiaW1wb3J0IHsgRGF0YVJlY29yZCwgUmVhY3QsIERhdGFTb3VyY2UgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEZlYXR1cmVEYXRhUmVjb3JkIGFzIEZlYXR1cmVMYXllckRhdGFSZWNvcmQgfSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICByZWNvcmQ6IERhdGFSZWNvcmRcclxuXHJcbiAgb25DaGFuZ2U/OiAoc3ltYm9sRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHZvaWRcclxuICB1bm1vdW50U3ltYm9sRWxlbWVudENoYW5nZT86ICgpID0+IHZvaWRcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRle1xyXG4gIHN5bWJvbEVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2xDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGRhdGFTb3VyY2VzOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IERhdGFTb3VyY2UgfSA9IG51bGxcclxuICBfX3VubW91bnQgPSBmYWxzZVxyXG4gIGlzTG9hZGluZyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3ltYm9sRWxlbWVudDogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxyXG4gICAgdGhpcy5yZXNvbHZlRXhwcmVzc2lvbnModGhpcy5wcm9wcy5yZWNvcmQpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICB0aGlzLl9fdW5tb3VudCA9IHRydWVcclxuICAgIHRoaXMucHJvcHMudW5tb3VudFN5bWJvbEVsZW1lbnRDaGFuZ2UgJiYgdGhpcy5wcm9wcy51bm1vdW50U3ltYm9sRWxlbWVudENoYW5nZSgpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuc2hhbGxvd0VxdWFscyh0aGlzLnByb3BzLnJlY29yZCwgcHJldlByb3BzLnJlY29yZClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlc29sdmVFeHByZXNzaW9ucyh0aGlzLnByb3BzLnJlY29yZClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldlN0YXRlLnN5bWJvbEVsZW1lbnQgIT09IHRoaXMuc3RhdGUuc3ltYm9sRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5zeW1ib2xFbGVtZW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZUV4cHJlc3Npb25zID0gKHJlY29yZDogRGF0YVJlY29yZCkgPT4ge1xyXG4gICAgaWYgKHJlY29yZCkge1xyXG4gICAgICBjb25zdCBkYXRhUmVjb3JkID0gcmVjb3JkIGFzIEZlYXR1cmVMYXllckRhdGFSZWNvcmRcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgIGRhdGFSZWNvcmQgJiYgZGF0YVJlY29yZC5mZXRjaFN5bWJvbFByZXZpZXdIVE1MICYmIGRhdGFSZWNvcmQuZmV0Y2hTeW1ib2xQcmV2aWV3SFRNTCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzeW1ib2xFbGVtZW50OiByZXN1bHRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3ltYm9sRWxlbWVudDogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBlcXVpdmFsZW50IHdpdGggYW5vdGhlciwgbm90IHJlY3Vyc2l2ZWx5LlxyXG4gICAqL1xyXG4gIHNoYWxsb3dFcXVhbHMgPSAob2JqMToge1trZXk6IHN0cmluZ106IGFueX0sIG9iajI6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIW9iajEgJiYgIW9iajIpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAob2JqMSAmJiBvYmoyKSB7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqMSkuc29tZShrZXkgPT4gb2JqMVtrZXldICE9PSBvYmoyW2tleV0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBTVkcsIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IFNWRywgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUmlnaHRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsIEltbXV0YWJsZSwgTGlua1R5cGUsIFJlcGVhdGVkRGF0YVNvdXJjZSwgRXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50LCBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUsIFNpemUsIGxvZGFzaCwgZ2V0QXBwU3RvcmUsXHJcbiAgY3NzLCBqc3gsIEFsbFdpZGdldFByb3BzLCBEYXRhUmVjb3JkLCBSZWFjdFJlc2l6ZURldGVjdG9yLCBJTUV4cHJlc3Npb24sIEV4cHJlc3Npb25QYXJ0VHlwZSwgTGlua1Jlc3VsdCwgQXR0YWNobWVudEluZm8sIHBvbGlzaGVkLCBJTVVybFBhcmFtZXRlcnMsIElNU3RhdGVcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IExpbmssIEltYWdlV2l0aFBhcmFtLCBJbWFnZVBhcmFtLCBJbWFnZUZpbGxNb2RlLCBMaW5rVGFyZ2V0LCBDcm9wVHlwZSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IElNQ29uZmlnLCBJbWdTb3VyY2VUeXBlLCBEeW5hbWljVXJsVHlwZSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F0dGFjaG1lbnQtY29tcG9uZW50J1xyXG5pbXBvcnQgeyBTeW1ib2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3ltYm9sLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgUmVjb3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY29yZC1jb21wb25lbnQnXHJcbmltcG9ydCB7IEltYWdlR2FsbGVyeSB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5J1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICByZWNvcmQ/OiBEYXRhUmVjb3JkXHJcbiAgaW1hZ2VXaWR0aD86IG51bWJlclxyXG4gIGltYWdlSGVpZ2h0PzogbnVtYmVyXHJcbiAgd2lkZ2V0V2lkdGg/OiBudW1iZXJcclxuICB3aWRnZXRIZWlnaHQ/OiBudW1iZXJcclxuICBjcm9wV2lkZ2V0V2lkdGg/OiBudW1iZXJcclxuICBjcm9wV2lkZ2V0SGVpZ2h0PzogbnVtYmVyXHJcblxyXG4gIHRvb2xUaXA6IHN0cmluZ1xyXG4gIGFsdFRleHQ6IHN0cmluZ1xyXG4gIHNyYzogc3RyaW5nXHJcbiAgbGlua1VybDogc3RyaW5nXHJcbiAgYXR0YWNobWVudEluZm9zOiBBdHRhY2htZW50SW5mb1tdXHJcbiAgc3ltYm9sRWxlbWVudDogSFRNTEVsZW1lbnRcclxuXHJcbiAgc3JjRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgYWx0VGV4dEV4cHJlc3Npb246IElNRXhwcmVzc2lvblxyXG4gIHRvb2xUaXBFeHByZXNzaW9uOiBJTUV4cHJlc3Npb25cclxuICBsaW5rVXJsRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3Bze1xyXG4gIHF1ZXJ5T2JqZWN0OiBJTVVybFBhcmFtZXRlcnNcclxufVxyXG5cclxuY29uc3QgaW1hZ2VXaWRnZXRTaXplTWFwOiB7W2tleTogc3RyaW5nXTogU2l6ZX0gPSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xyXG4gIGRhdGFTb3VyY2U/OiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXHJcbiAgX191bm1vdW50ID0gZmFsc2VcclxuICBhdHRhY2htZW50VHlwZXMgPSBbJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZicsICdpbWFnZS9ibXAnLCAnaW1hZ2Uvc3ZnK3htbCddXHJcbiAgaXNBdXRvSGVpZ2h0PzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgZGVib3VuY2VPblJlc2l6ZTogKHdpZHRoLCBoZWlnaHQpID0+IHZvaWRcclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSk6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICBpZiAoIXVhLmluY2x1ZGVzKCdjaHJvbScpICYmICF1YS5pbmNsdWRlcygnZmlyZWZveCcpICYmIHVhLmluY2x1ZGVzKCdzYWZhcmknKSkge1xyXG4gICAgICB0aGlzLmlzQXV0b0hlaWdodCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlYm91bmNlT25SZXNpemUgPSBsb2Rhc2guZGVib3VuY2UoKHdpZHRoLCBoZWlnaHQpID0+IHRoaXMub25SZXNpemUod2lkdGgsIGhlaWdodCksIDIwMClcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICByZWNvcmQ6IG51bGwsXHJcbiAgICAgIHRvb2xUaXA6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXAgfHwgJycsXHJcbiAgICAgIGFsdFRleHQ6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmFsdFRleHQgfHwgJycsXHJcbiAgICAgIHNyYzogdGhpcy5wcm9wcz8uY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8uaW1hZ2VQYXJhbT8udXJsIHx8ICcnLFxyXG4gICAgICBsaW5rVXJsOiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5saW5rUGFyYW0/LnZhbHVlIHx8ICcnLFxyXG4gICAgICBzcmNFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldFNyY0V4cHJlc3Npb24oKSxcclxuICAgICAgYWx0VGV4dEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0QWx0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgdG9vbFRpcEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0VG9vbFRpcEV4cHJlc3Npb24oKSxcclxuICAgICAgbGlua1VybEV4cHJlc3Npb246IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmIHRoaXMuZ2V0TGlua1VybEV4cHJlc3Npb24oKSxcclxuICAgICAgYXR0YWNobWVudEluZm9zOiBbXSxcclxuICAgICAgc3ltYm9sRWxlbWVudDogbnVsbCxcclxuICAgICAgd2lkZ2V0V2lkdGg6IGltYWdlV2lkZ2V0U2l6ZU1hcFt0aGlzLnByb3BzLmlkICsgJy0nICsgdGhpcy5wcm9wcy5sYXlvdXRJZF0gJiYgaW1hZ2VXaWRnZXRTaXplTWFwW3RoaXMucHJvcHMuaWQgKyAnLScgKyB0aGlzLnByb3BzLmxheW91dElkXS53aWR0aCxcclxuICAgICAgd2lkZ2V0SGVpZ2h0OiBpbWFnZVdpZGdldFNpemVNYXBbdGhpcy5wcm9wcy5pZCArICctJyArIHRoaXMucHJvcHMubGF5b3V0SWRdICYmIGltYWdlV2lkZ2V0U2l6ZU1hcFt0aGlzLnByb3BzLmlkICsgJy0nICsgdGhpcy5wcm9wcy5sYXlvdXRJZF0uaGVpZ2h0LFxyXG4gICAgICBjcm9wV2lkZ2V0V2lkdGg6IG51bGwsXHJcbiAgICAgIGNyb3BXaWRnZXRIZWlnaHQ6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0eWxlICgpIHtcclxuICAgIGNvbnN0IHN5bWJvbFNjYWxlID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuc3ltYm9sU2NhbGVcclxuICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5zeW1ib2xTY2FsZVxyXG4gICAgICA6IDFcclxuXHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgICAud2lkZ2V0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmJ0bi1saW5rIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2Utc3ltYm9sIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgke3N5bWJvbFNjYWxlfSwgJHtzeW1ib2xTY2FsZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1nYWxsZXJ5LWJ1dHRvbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwb2xpc2hlZC5yZ2JhKHRoaXMucHJvcHMudGhlbWUuY29sb3JzLndoaXRlLCAwLjUpfTtcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2UtZ2FsbGVyeS1idXR0b246IGhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMucHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJlxyXG4gICAgICAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcgIT09IHByZXZQcm9wcy5jb25maWcgfHwgcHJldlByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3JjOiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5pbWFnZVBhcmFtPy51cmwgfHwgJycsXHJcbiAgICAgICAgdG9vbFRpcDogdGhpcy5wcm9wcz8uY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8udG9vbFRpcCxcclxuICAgICAgICBhbHRUZXh0OiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5hbHRUZXh0LFxyXG4gICAgICAgIGxpbmtVcmw6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmxpbmtQYXJhbT8udmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiZcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnICE9PSBwcmV2UHJvcHMuY29uZmlnIHx8ICFwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICAgIClcclxuICAgICkge1xyXG4gICAgICBpZiAodGhpcy5jaGVja0lzU3RhdGljU3JjKHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltZ1NvdXJjZVR5cGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzcmM6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmltYWdlUGFyYW0/LnVybCB8fCAnJyxcclxuICAgICAgICAgIHRvb2xUaXBFeHByZXNzaW9uOiB0aGlzLmdldFRvb2xUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgICAgICBhbHRUZXh0RXhwcmVzc2lvbjogdGhpcy5nZXRBbHRUZXh0RXhwcmVzc2lvbigpLFxyXG4gICAgICAgICAgbGlua1VybEV4cHJlc3Npb246IHRoaXMuZ2V0TGlua1VybEV4cHJlc3Npb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSBpZiAoKHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltZ1NvdXJjZVR5cGUgPT09IEltZ1NvdXJjZVR5cGUuQnlEeW5hbWljVXJsICYmXHJcbiAgICAgICAgKCF0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSB8fCB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuRXhwcmVzc2lvbikpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzcmNFeHByZXNzaW9uOiB0aGlzLmdldFNyY0V4cHJlc3Npb24oKSxcclxuICAgICAgICAgIHRvb2xUaXBFeHByZXNzaW9uOiB0aGlzLmdldFRvb2xUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgICAgICBhbHRUZXh0RXhwcmVzc2lvbjogdGhpcy5nZXRBbHRUZXh0RXhwcmVzc2lvbigpLFxyXG4gICAgICAgICAgbGlua1VybEV4cHJlc3Npb246IHRoaXMuZ2V0TGlua1VybEV4cHJlc3Npb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBzcmM6ICcnLFxyXG4gICAgICAgICAgdG9vbFRpcEV4cHJlc3Npb246IHRoaXMuZ2V0VG9vbFRpcEV4cHJlc3Npb24oKSxcclxuICAgICAgICAgIGFsdFRleHRFeHByZXNzaW9uOiB0aGlzLmdldEFsdFRleHRFeHByZXNzaW9uKCksXHJcbiAgICAgICAgICBsaW5rVXJsRXhwcmVzc2lvbjogdGhpcy5nZXRMaW5rVXJsRXhwcmVzc2lvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSB0cnVlXHJcblxyXG4gICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBDb25maWcud2lkZ2V0c1t0aGlzLnByb3BzLmlkXVxyXG4gICAgaWYgKCF3aWRnZXRKc29uKSB7XHJcbiAgICAgIGRlbGV0ZSBpbWFnZVdpZGdldFNpemVNYXBbdGhpcy5wcm9wcy5pZCArICctJyArIHRoaXMucHJvcHMubGF5b3V0SWRdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0lzU3RhdGljU3JjID0gKGltZ1NvdXJjZVR5cGU6IEltZ1NvdXJjZVR5cGUpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBpbWdTb3VyY2VUeXBlID09PSBJbWdTb3VyY2VUeXBlLkJ5VXBsb2FkIHx8IGltZ1NvdXJjZVR5cGUgPT09IEltZ1NvdXJjZVR5cGUuQnlTdGF0aWNVcmwgfHwgIWltZ1NvdXJjZVR5cGVcclxuICB9XHJcblxyXG4gIGdldFNyY0V4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuc3JjRXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3tcclxuICAgICAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsXHJcbiAgICAgICAgICBleHA6IGBcIiR7dGhpcy5wcm9wcy5jb25maWcgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbS51cmx9XCJgXHJcbiAgICAgICAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldEFsdFRleHRFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmFsdFRleHRFeHByZXNzaW9uKSB8fFxyXG4gICAgICBJbW11dGFibGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhcnRzOiBbe1xyXG4gICAgICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZyxcclxuICAgICAgICAgIGV4cDogYFwiJHt0aGlzLnByb3BzLmNvbmZpZyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuYWx0VGV4dH1cImBcclxuICAgICAgICB9XVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9vbFRpcEV4cHJlc3Npb24gPSAoKTogSU1FeHByZXNzaW9uID0+IHtcclxuICAgIHJldHVybiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcEV4cHJlc3Npb24pIHx8XHJcbiAgICBJbW11dGFibGUoe1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcGFydHM6IFt7XHJcbiAgICAgICAgdHlwZTogRXhwcmVzc2lvblBhcnRUeXBlLlN0cmluZyxcclxuICAgICAgICBleHA6IGBcIiR7dGhpcy5wcm9wcy5jb25maWcgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy50b29sVGlwfVwiYFxyXG4gICAgICB9XVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExpbmtVcmxFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtICYmXHJcbiAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbSAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0uZXhwcmVzc2lvblxyXG5cclxuICAgIHJldHVybiBleHByZXNzaW9uIHx8IG51bGxcclxuICB9XHJcblxyXG4gIG9uU3JjRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiAocmVzdWx0LnZhbHVlID09PSAnbnVsbCcgPyAnJyA6IHJlc3VsdC52YWx1ZSkgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS5zcmNFeHByZXNzaW9uICYmIHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzcmM6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub29sVGlwRXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogKHJlc3VsdC52YWx1ZSA9PT0gJ251bGwnID8gJycgOiByZXN1bHQudmFsdWUpIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQudmFsdWVcclxuICAgICAgaWYgKGVycm9yQ29kZSA9PT0gRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLkZhaWxlZCkge1xyXG4gICAgICAgIHJlcyA9IHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbiAmJiB0aGlzLnN0YXRlLnNyY0V4cHJlc3Npb24ubmFtZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbFRpcDogcmVzIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkFsdFRleHRFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbHRUZXh0OiAocmVzdWx0LnZhbHVlID09PSAnbnVsbCcgPyAnJyA6IHJlc3VsdC52YWx1ZSkgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS5zcmNFeHByZXNzaW9uICYmIHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbHRUZXh0OiByZXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTGlua1VybEV4cFJlc29sdmVDaGFuZ2UgPSByZXN1bHQgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmtVcmw6IHJlc3VsdC52YWx1ZSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlczogc3RyaW5nID0gJydcclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gcmVzdWx0LnZhbHVlXHJcbiAgICAgIGlmIChlcnJvckNvZGUgPT09IEV4cHJlc3Npb25SZXNvbHZlckVycm9yQ29kZS5GYWlsZWQpIHtcclxuICAgICAgICByZXMgPSB0aGlzLnN0YXRlLnNyY0V4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS5zcmNFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpbmtVcmw6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BdHRhY2htZW50SW5mb3NDaGFuZ2UgPSAoYXR0YWNobWVudEluZm9zOiBBdHRhY2htZW50SW5mb1tdKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYXR0YWNobWVudEluZm9zOiBhdHRhY2htZW50SW5mb3NcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1bm1vdW50QXR0YWNobWVudEluZm9zQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGF0dGFjaG1lbnRJbmZvczogW11cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvblN5bWJvbEVsZW1lbnRDaGFuZ2UgPSAoc3ltYm9sRWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzeW1ib2xFbGVtZW50OiBzeW1ib2xFbGVtZW50XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdW5tb3VudFN5bWJvbEVsZW1lbnRDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3ltYm9sRWxlbWVudDogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFJlY29yZHNGcm9tUmVwZWF0ZWREYXRhU291cmNlID0gKCk6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogRGF0YVJlY29yZCB9ID0+IHtcclxuICAgIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXSAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmRhdGFTb3VyY2VJZFxyXG5cclxuICAgIGlmIChkYXRhU291cmNlSWQgJiYgdGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UpIHtcclxuICAgICAgaWYgKGRhdGFTb3VyY2VJZCA9PT0gKHRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlIGFzIFJlcGVhdGVkRGF0YVNvdXJjZSkuZGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gKHRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlIGFzIFJlcGVhdGVkRGF0YVNvdXJjZSkucmVjb3JkXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBbZGF0YVNvdXJjZUlkXTogcmVjb3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIG9uQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsaW5rUGFyYW0gPSB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW1cclxuICAgIGlmIChsaW5rUGFyYW0gJiYgbGlua1BhcmFtLnZhbHVlICYmIGxpbmtQYXJhbS5saW5rVHlwZSAhPT0gTGlua1R5cGUuTm9uZSkge1xyXG4gICAgICAoZXZlbnQgYXMgYW55KS5leGJFdmVudFR5cGUgPSAnbGlua0NsaWNrJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW1hZ2VMb2FkZWQgPSAoaW1hZ2VXaWR0aDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaW1hZ2VXaWR0aDogaW1hZ2VXaWR0aCxcclxuICAgICAgaW1hZ2VIZWlnaHQ6IGltYWdlSGVpZ2h0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkZ2V0V2lkdGggPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS53aWRnZXRXaWR0aFxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkZ2V0SGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUud2lkZ2V0SGVpZ2h0XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBpZiAodGhpcy5fX3VubW91bnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgaWYgKHdpZHRoID09PSB0aGlzLnN0YXRlLndpZGdldFdpZHRoICYmIGhlaWdodCA9PT0gdGhpcy5zdGF0ZS53aWRnZXRIZWlnaHQpIHtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbWFnZVdpZGdldFNpemVNYXBbdGhpcy5wcm9wcy5pZCArICctJyArIHRoaXMucHJvcHMubGF5b3V0SWRdID0ge1xyXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB3aWRnZXRXaWR0aDogd2lkdGgsXHJcbiAgICAgICAgd2lkZ2V0SGVpZ2h0OiBoZWlnaHRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ3JvcFdpZGdldFJlc2l6ZSA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBpZiAodGhpcy5fX3VubW91bnQpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjcm9wV2lkZ2V0V2lkdGg6IHdpZHRoLFxyXG4gICAgICBjcm9wV2lkZ2V0SGVpZ2h0OiBoZWlnaHRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjbGVhckNyb3BXaWRnZXRTaXplID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNyb3BXaWRnZXRXaWR0aDogbnVsbCxcclxuICAgICAgY3JvcFdpZGdldEhlaWdodDogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlY29yZENoYW5nZSA9IChyZWNvcmQ6IERhdGFSZWNvcmQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICByZWNvcmQ6IHJlY29yZFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBpc0RhdGFTb3VyY2VVc2VkID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgIGNvbnN0IHsgcXVlcnlPYmplY3QgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHsgdG9vbFRpcCwgYWx0VGV4dCwgc3JjIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgbGV0IHJlbmRlclJlc3VsdCA9IG51bGxcclxuICAgIGxldCBpbWFnZUNvbnRlbnQgPSBudWxsXHJcblxyXG4gICAgbGV0IGltYWdlUGFyYW0gPSB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtID8gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSA6IEltbXV0YWJsZSh7fSlcclxuICAgIGlmIChpbWFnZVBhcmFtLnNldCkge1xyXG4gICAgICBpbWFnZVBhcmFtID0gaW1hZ2VQYXJhbS5zZXQoJ3VybCcsIHNyYylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChpbWFnZVBhcmFtIGFzIGFueSkudXJsID0gc3JjXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JvcFBhcmFtID0gaW1hZ2VQYXJhbSAmJiAoaW1hZ2VQYXJhbSBhcyBJbWFnZVBhcmFtKS5jcm9wUGFyYW1cclxuICAgIGNvbnN0IGlzVXNlU3ZnUmVuZGVyID0gY3JvcFBhcmFtICYmIChjcm9wUGFyYW0uY3JvcFR5cGUgPT09IENyb3BUeXBlLkZha2UgfHwgY3JvcFBhcmFtLmNyb3BTaGFwZSlcclxuXHJcbiAgICBpbWFnZUNvbnRlbnQgPSAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdqaW11LXdpZGdldCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0IHdpZGdldC1pbWFnZSBpbWFnZS1wYXJhbScgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTZweCcgfX0+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgIT09IER5bmFtaWNVcmxUeXBlLkF0dGFjaG1lbnQgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSAhPT0gRHluYW1pY1VybFR5cGUuU3ltYm9sICYmXHJcbiAgICAgICAgICA8SW1hZ2VXaXRoUGFyYW1cclxuICAgICAgICAgICAgaW1hZ2VQYXJhbT17aW1hZ2VQYXJhbSBhcyBJbWFnZVBhcmFtfSB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fSBvbkltYWdlTG9hZGVkPXt0aGlzLmhhbmRsZUltYWdlTG9hZGVkfVxyXG4gICAgICAgICAgICB1c2VGYWRlaW4gc2l6ZT17aXNVc2VTdmdSZW5kZXIgPyB7IHdpZHRoOiB0aGlzLnN0YXRlLndpZGdldFdpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUud2lkZ2V0SGVpZ2h0IH0gOiBudWxsfVxyXG4gICAgICAgICAgICBpbWFnZUZpbGxNb2RlPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZUZpbGxNb2RlfSBpc0F1dG9IZWlnaHQ9e3RoaXMuaXNBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgICBpbWFnZURpc3BsYXlRdWFsaXR5TW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGV9XHJcbiAgICAgICAgICAvPn1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuQXR0YWNobWVudCAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxyXG4gICAgICAgICAgICAgIHtpc0RhdGFTb3VyY2VVc2VkICYmIDxJbWFnZUdhbGxlcnlcclxuICAgICAgICAgICAgICAgIHNvdXJjZXM9e3RoaXMuc3RhdGUuYXR0YWNobWVudEluZm9zfSBpbWFnZVBhcmFtPXtpbWFnZVBhcmFtIGFzIEltYWdlUGFyYW19XHJcbiAgICAgICAgICAgICAgICBpbWFnZUZpbGxNb2RlPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZUZpbGxNb2RlfVxyXG4gICAgICAgICAgICAgICAgc2l6ZT17aXNVc2VTdmdSZW5kZXIgPyB7IHdpZHRoOiB0aGlzLnN0YXRlLndpZGdldFdpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUud2lkZ2V0SGVpZ2h0IH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgaXNBdXRvSGVpZ2h0PXt0aGlzLmlzQXV0b0hlaWdodH1cclxuICAgICAgICAgICAgICAgIHRvb2xUaXA9e3Rvb2xUaXB9IGFsdFRleHQ9e2FsdFRleHR9XHJcbiAgICAgICAgICAgICAgICBhbHRUZXh0V2l0aEF0dGFjaG1lbnROYW1lPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5hbHRUZXh0V2l0aEF0dGFjaG1lbnROYW1lfVxyXG4gICAgICAgICAgICAgICAgdG9vbFRpcFdpdGhBdHRhY2htZW50TmFtZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcFdpdGhBdHRhY2htZW50TmFtZX1cclxuICAgICAgICAgICAgICAgIHVzZUZhZGVpblxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L0ltYWdlR2FsbGVyeT59XHJcbiAgICAgICAgICAgICAgeyFpc0RhdGFTb3VyY2VVc2VkICYmIDxJbWFnZVdpdGhQYXJhbVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VQYXJhbT17aW1hZ2VQYXJhbSBhcyBJbWFnZVBhcmFtfSB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAgICAgdXNlRmFkZWluIHNpemU9e2lzVXNlU3ZnUmVuZGVyID8geyB3aWR0aDogdGhpcy5zdGF0ZS53aWRnZXRXaWR0aCwgaGVpZ2h0OiB0aGlzLnN0YXRlLndpZGdldEhlaWdodCB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGltYWdlRmlsbE1vZGU9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRmlsbE1vZGV9IGlzQXV0b0hlaWdodD17dGhpcy5pc0F1dG9IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBpbWFnZURpc3BsYXlRdWFsaXR5TW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VXaXRoUGFyYW0+fVxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlID09PSBEeW5hbWljVXJsVHlwZS5TeW1ib2wgJiZcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxyXG4gICAgICAgICAgICAgICAgeyghdGhpcy5zdGF0ZS5zeW1ib2xFbGVtZW50IHx8ICFpc0RhdGFTb3VyY2VVc2VkKSAmJiA8SW1hZ2VXaXRoUGFyYW1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VQYXJhbT17aW1hZ2VQYXJhbSBhcyBJbWFnZVBhcmFtfSB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICB1c2VGYWRlaW4gc2l6ZT17aXNVc2VTdmdSZW5kZXIgPyB7IHdpZHRoOiB0aGlzLnN0YXRlLndpZGdldFdpZHRoLCBoZWlnaHQ6IHRoaXMuc3RhdGUud2lkZ2V0SGVpZ2h0IH0gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZUZpbGxNb2RlPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZUZpbGxNb2RlfSBpc0F1dG9IZWlnaHQ9e3RoaXMuaXNBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZURpc3BsYXlRdWFsaXR5TW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8L0ltYWdlV2l0aFBhcmFtPn1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN5bWJvbEVsZW1lbnQgJiYgaXNEYXRhU291cmNlVXNlZCAmJiA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAgaW1hZ2Utc3ltYm9sJyB0aXRsZT17dG9vbFRpcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnN0YXRlLnN5bWJvbEVsZW1lbnQub3V0ZXJIVE1MIH19IC8+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge2lzVXNlU3ZnUmVuZGVyICYmIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodCBvblJlc2l6ZT17dGhpcy5kZWJvdW5jZU9uUmVzaXplfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgbGV0IHRhcmdldDogTGlua1RhcmdldFxyXG4gICAgbGV0IGxpbmtUbzogTGlua1Jlc3VsdFxyXG4gICAgY29uc3QgbGlua1BhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtXHJcbiAgICBpZiAobGlua1BhcmFtICYmIGxpbmtQYXJhbS5saW5rVHlwZSkge1xyXG4gICAgICB0YXJnZXQgPSBsaW5rUGFyYW0ub3BlblR5cGVcclxuICAgICAgbGlua1RvID0ge1xyXG4gICAgICAgIGxpbmtUeXBlOiBsaW5rUGFyYW0ubGlua1R5cGVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxpbmtQYXJhbS5saW5rVHlwZSA9PT0gTGlua1R5cGUuV2ViQWRkcmVzcykge1xyXG4gICAgICAgIGxpbmtUby52YWx1ZSA9IHRoaXMuc3RhdGUubGlua1VybFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpbmtUby52YWx1ZSA9IGxpbmtQYXJhbS52YWx1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGlua1RvICYmIGxpbmtUbz8ubGlua1R5cGUgIT09IExpbmtUeXBlLk5vbmUpIHtcclxuICAgICAgcmVuZGVyUmVzdWx0ID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aWRnZXQtaW1hZ2UtY29udGFpbmVyIGppbXUtd2lkZ2V0Jz5cclxuICAgICAgICAgIDxMaW5rIHRvPXtsaW5rVG99IHRhcmdldD17dGFyZ2V0fSBxdWVyeU9iamVjdD17cXVlcnlPYmplY3R9PlxyXG4gICAgICAgICAgICB7aW1hZ2VDb250ZW50fVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW5kZXJSZXN1bHQgPSBpbWFnZUNvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VGaWxsTW9kZSAhPT0gSW1hZ2VGaWxsTW9kZS5GaXQgJiYgdGhpcy5wcm9wcy5pc0lubGluZUVkaXRpbmcgJiYgc3JjICYmXHJcbiAgICAgICghdGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UgfHwgKHRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlICYmICh0aGlzLnByb3BzLnJlcGVhdGVkRGF0YVNvdXJjZSBhcyBSZXBlYXRlZERhdGFTb3VyY2UpLnJlY29yZEluZGV4ID09PSAwKSkpIHtcclxuICAgICAgLy8gb3BlbiBjcm9wIHRvb2xcclxuICAgICAgY29uc3QgV2lkZ2V0SW5CdWlsZGVyID0gdGhpcy5wcm9wcy5idWlsZGVyU3VwcG9ydE1vZHVsZXMud2lkZ2V0TW9kdWxlcy5XaWRnZXRJbkJ1aWxkZXJcclxuICAgICAgcmVuZGVyUmVzdWx0ID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqaW11LXdpZGdldCc+XHJcbiAgICAgICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQgb25SZXNpemU9e3RoaXMub25Dcm9wV2lkZ2V0UmVzaXplfSAvPlxyXG4gICAgICAgICAge3JlbmRlclJlc3VsdH1cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmNyb3BXaWRnZXRIZWlnaHQgJiYgdGhpcy5zdGF0ZS5jcm9wV2lkZ2V0V2lkdGggJiYgPFdpZGdldEluQnVpbGRlclxyXG4gICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH0gY29uZmlnPXt0aGlzLnByb3BzLmNvbmZpZ30gb25Vbm1vdW50PXsoKSA9PiB7IHRoaXMuY2xlYXJDcm9wV2lkZ2V0U2l6ZSgpIH19XHJcbiAgICAgICAgICAgIHdpZGdldFdpZHRoPXt0aGlzLnN0YXRlLmNyb3BXaWRnZXRXaWR0aH0gd2lkZ2V0SGVpZ2h0PXt0aGlzLnN0YXRlLmNyb3BXaWRnZXRIZWlnaHR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L1dpZGdldEluQnVpbGRlcj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlbmRlclJlc3VsdCA9IChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2ppbXUtd2lkZ2V0JyBjc3M9e3RoaXMuZ2V0U3R5bGUoKX1cclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4geyB0aGlzLm9uQ2xpY2soZXZlbnQgYXMgYW55KSB9fSBvblRvdWNoRW5kPXsoZXZlbnQpID0+IHsgdGhpcy5vbkNsaWNrKGV2ZW50IGFzIGFueSkgfX1cclxuICAgICAgICA+e3JlbmRlclJlc3VsdH1cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWdTb3VyY2VUeXBlID09PSBJbWdTb3VyY2VUeXBlLkJ5RHluYW1pY1VybCAmJlxyXG4gICAgICAgICAgICAoIXRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlIHx8IHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlID09PSBEeW5hbWljVXJsVHlwZS5FeHByZXNzaW9uKSAmJlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLmdldFNyY0V4cHJlc3Npb24oKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TcmNFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRGF0YVNvdXJjZVVzZWQgJiYgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuZ2V0QWx0VGV4dEV4cHJlc3Npb24oKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BbHRUZXh0RXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5nZXRUb29sVGlwRXhwcmVzc2lvbigpfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRvb2xUaXBFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLnN0YXRlLmxpbmtVcmxFeHByZXNzaW9ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkxpbmtVcmxFeHBSZXNvbHZlQ2hhbmdlfSB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBUaGUgb3JpZ2luYWwgbG9naWMgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBBdHRhY2htZW50Q29tcG9uZW50IGFuZCBTeW1ib2xDb21wb25lbnQgd2VyZSByZW5kZXJlZCBieSBkeW5hbWljVXJsVHlwZSwgdGhpcyBjYXVzZXMgYXR0YWNobWVudEluZm9zXHJcbiAgICAgICAgICAgIC8vIHRvIHJlbWFpbiB1bmNoYW5nZWQgd2hlbiB0aGUgZGF0YSBzb3VyY2UgY2hhbmdlcyBhbmQgdGhlIHR5cGUgaXMgcmVzZXQgdG8gZGVmYXVsdCwgYW5kIHRoZSBvbkNoYW5nZSBldmVudCBpcyBub3QgZXhlY3V0ZWQuIFdoZW4gYXR0YWNobWVudCB0eXBlXHJcbiAgICAgICAgICAgIC8vIGlzIHNlbGVjdGVkIGFnYWluLCBpZiB0aGUgbmV3IGRhdGEgaXMgbnVsbCwgdGhlbiBhdHRhY2htZW50SW5mb3MgZG9lcyBub3QgY2hhbmdlIGludGVybmFsbHkgKG51bGwgLT4gbnVsbCksIHNvIGF0dGFjaG1lbnRJbmZvcyBkb2VzIG5vdCBjaGFuZ2UuXHJcbiAgICAgICAgICAgIC8vIE5vdyBhZGQgdGhlIG1ldGhvZCB0byByZXNldCB0aGUgY29ycmVzcG9uZGluZyBzdGF0ZSB3aGVuIHVubW91bnRcclxuICAgICAgICAgICAgICBpc0RhdGFTb3VyY2VVc2VkICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlID09PSBEeW5hbWljVXJsVHlwZS5BdHRhY2htZW50ICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QXR0YWNobWVudENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZD17dGhpcy5zdGF0ZS5yZWNvcmR9IHVubW91bnRBdHRhY2htZW50SW5mb3NDaGFuZ2U9e3RoaXMudW5tb3VudEF0dGFjaG1lbnRJbmZvc0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkF0dGFjaG1lbnRJbmZvc0NoYW5nZX0gYXR0YWNobWVudFR5cGVzPXt0aGlzLmF0dGFjaG1lbnRUeXBlc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc0RhdGFTb3VyY2VVc2VkICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlID09PSBEeW5hbWljVXJsVHlwZS5TeW1ib2wgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxTeW1ib2xDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e3RoaXMuc3RhdGUucmVjb3JkfSB1bm1vdW50U3ltYm9sRWxlbWVudENoYW5nZT17dGhpcy51bm1vdW50U3ltYm9sRWxlbWVudENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN5bWJvbEVsZW1lbnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJiAodGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgPT09IER5bmFtaWNVcmxUeXBlLkF0dGFjaG1lbnQgfHxcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuU3ltYm9sKSAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFJlY29yZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy51c2VEYXRhU291cmNlRm9yTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgID8gSW1tdXRhYmxlKFt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy51c2VEYXRhU291cmNlRm9yTWFpbkRhdGFBbmRWaWV3U2VsZWN0b3IgYXMgYW55XSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogSW1tdXRhYmxlKFtdKX1cclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHQ9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvblJlY29yZENoYW5nZT17dGhpcy5oYW5kbGVSZWNvcmRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVuZGVyUmVzdWx0XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==