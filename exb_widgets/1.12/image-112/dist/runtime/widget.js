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

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z\" clip-rule=\"evenodd\"></path></svg>"

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
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/left.svg */ "./jimu-icons/svg/outlined/directional/left.svg");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__);
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
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
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
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/right.svg */ "./jimu-icons/svg/outlined/directional/right.svg");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__);
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
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./your-extensions/widgets/image-112/src/config.ts":
/*!*********************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/config.ts ***!
  \*********************************************************/
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

/***/ "./your-extensions/widgets/image-112/src/runtime/components/attachment-component.tsx":
/*!*******************************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/components/attachment-component.tsx ***!
  \*******************************************************************************************/
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

/***/ "./your-extensions/widgets/image-112/src/runtime/components/image-gallery.tsx":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/components/image-gallery.tsx ***!
  \************************************************************************************/
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

/***/ "./your-extensions/widgets/image-112/src/runtime/components/record-component.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/components/record-component.tsx ***!
  \***************************************************************************************/
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

/***/ "./your-extensions/widgets/image-112/src/runtime/components/symbol-component.tsx":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/components/symbol-component.tsx ***!
  \***************************************************************************************/
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
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/widget.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/image-112/src/config.ts");
/* harmony import */ var _components_attachment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/attachment-component */ "./your-extensions/widgets/image-112/src/runtime/components/attachment-component.tsx");
/* harmony import */ var _components_symbol_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/symbol-component */ "./your-extensions/widgets/image-112/src/runtime/components/symbol-component.tsx");
/* harmony import */ var _components_record_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/record-component */ "./your-extensions/widgets/image-112/src/runtime/components/record-component.tsx");
/* harmony import */ var _components_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/image-gallery */ "./your-extensions/widgets/image-112/src/runtime/components/image-gallery.tsx");
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
        this.debounceOnResize = jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.debounce((width, height) => { this.onResize(width, height); }, 200);
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
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbWFnZS0xMTIvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRVk7QUFFbEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsMkVBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDRDO0FBRWE7QUFFbkQsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDeEQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsNEVBQUcsSUFBTSxN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LENBQ0UsQ0FFTixDQUNGLENBQ1A7U0FDRjtRQUVELE9BQU8sWUFBWTtJQUNyQixDQUFDOztBQWhoQk0seUJBQWtCLEdBQUcsQ0FBQyxLQUFjLEVBQWMsRUFBRTtJQUN6RCxPQUFPO1FBQ0wsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO0tBQy9CO0FBQ0gsQ0FBQztBQStnQkssU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9sZWZ0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ltYWdlLTExMi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbWFnZS0xMTIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9hdHRhY2htZW50LWNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ltYWdlLTExMi9zcmMvcnVudGltZS9jb21wb25lbnRzL2ltYWdlLWdhbGxlcnkudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbWFnZS0xMTIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9yZWNvcmQtY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW1hZ2UtMTEyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvc3ltYm9sLWNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW1hZ2UtMTEyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiPjxwYXRoIGZpbGw9XFxcIiMwMDBcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExLjM0NyAyLjE0NmEuNDg1LjQ4NSAwIDAgMSAwIC43MDhMNS43NiA4bDUuNTg3IDUuMTQ2YS40ODYuNDg2IDAgMCAxIDAgLjcwOC41MzguNTM4IDAgMCAxLS43MzggMGwtNS45NTYtNS41YS40ODUuNDg1IDAgMCAxIDAtLjcwOGw1Ljk1Ni01LjVhLjUzOC41MzggMCAwIDEgLjczOCAwWlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCI+PHBhdGggZmlsbD1cXFwiIzAwMFxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNC42NTMgMTMuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOEwxMC4yNCA4IDQuNjUzIDIuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOC41MzguNTM4IDAgMCAxIC43MzggMGw1Ljk1NiA1LjVhLjQ4NS40ODUgMCAwIDEgMCAuNzA4bC01Ljk1NiA1LjVhLjUzOC41MzggMCAwIDEtLjczOCAwWlxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUmlnaHRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgdHlwZSBFeHByZXNzaW9uLCB0eXBlIElNVXNlRGF0YVNvdXJjZSwgdHlwZSBJbWFnZURpc3BsYXlRdWFsaXR5TW9kZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBMaW5rUGFyYW0gfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cydcclxuaW1wb3J0IHsgdHlwZSBGb3VyU2lkZXNVbml0LCB0eXBlIEJvcmRlclN0eWxlLCB0eXBlIEJveFNoYWRvd1N0eWxlLCB0eXBlIEltYWdlUGFyYW0sIHR5cGUgSW1hZ2VGaWxsTW9kZSB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnc2VhbWxlc3MtaW1tdXRhYmxlJ1xyXG5cclxuZXhwb3J0IGVudW0gSW1nU291cmNlVHlwZSB7XHJcbiAgQnlVcGxvYWQgPSAnQllVUExPQUQnLFxyXG4gIEJ5U3RhdGljVXJsID0gJ0JZU1RBVElDVVJMJyxcclxuICBCeUR5bmFtaWNVcmwgPSAnQllEWU5BTUlDVVJMJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEeW5hbWljVXJsVHlwZSB7XHJcbiAgRXhwcmVzc2lvbiA9ICdFWFBSRVNTSU9OJyxcclxuICBBdHRhY2htZW50ID0gJ0FUVEFDSE1FTlQnLFxyXG4gIFN5bWJvbCA9ICdTWU1CT0wnXHJcbn1cclxuXHJcbmludGVyZmFjZSBGdW5jdGlvbkNvbmZpZyB7XHJcbiAgYWx0VGV4dDogc3RyaW5nXHJcbiAgdG9vbFRpcDogc3RyaW5nXHJcbiAgYWx0VGV4dFdpdGhBdHRhY2htZW50TmFtZTogYm9vbGVhblxyXG4gIHRvb2xUaXBXaXRoQXR0YWNobWVudE5hbWU6IGJvb2xlYW5cclxuICBzcmNFeHByZXNzaW9uPzogSW1tdXRhYmxlT2JqZWN0PEV4cHJlc3Npb24+XHJcbiAgYWx0VGV4dEV4cHJlc3Npb246IEltbXV0YWJsZU9iamVjdDxFeHByZXNzaW9uPlxyXG4gIHRvb2xUaXBFeHByZXNzaW9uOiBJbW11dGFibGVPYmplY3Q8RXhwcmVzc2lvbj5cclxuICBsaW5rUGFyYW06IExpbmtQYXJhbVxyXG4gIGltYWdlRmlsbE1vZGU/OiBJbWFnZUZpbGxNb2RlXHJcbiAgaW1nU291cmNlVHlwZT86IEltZ1NvdXJjZVR5cGVcclxuICBpbWFnZVBhcmFtPzogSW1tdXRhYmxlT2JqZWN0PEltYWdlUGFyYW0+XHJcbiAgc3ltYm9sU2NhbGU/OiBudW1iZXJcclxuICBkeW5hbWljVXJsVHlwZT86IER5bmFtaWNVcmxUeXBlXHJcbiAgaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0OiBib29sZWFuXHJcbiAgdXNlRGF0YVNvdXJjZUZvck1haW5EYXRhQW5kVmlld1NlbGVjdG9yOiBJTVVzZURhdGFTb3VyY2VcclxuICBpbWFnZURpc3BsYXlRdWFsaXR5TW9kZT86IEltYWdlRGlzcGxheVF1YWxpdHlNb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVDb25maWcge1xyXG4gIG5hbWU/OiBzdHJpbmdcclxuICBzaGFwZT86IHN0cmluZ1xyXG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xyXG4gIGJvcmRlcj86IEJvcmRlclN0eWxlXHJcbiAgYm9yZGVyUmFkaXVzPzogRm91clNpZGVzVW5pdFxyXG4gIGJveFNoYWRvdz86IEJveFNoYWRvd1N0eWxlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2hhcGVTdHlsZSB7XHJcbiAgYm9yZGVyUmFkaXVzPzogRm91clNpZGVzVW5pdFxyXG4gIHRodW1iVXJsPzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcclxuICBmdW5jdGlvbkNvbmZpZzogRnVuY3Rpb25Db25maWdcclxuICBzdHlsZUNvbmZpZzogU3R5bGVDb25maWdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG4iLCJpbXBvcnQgeyB0eXBlIERhdGFSZWNvcmQsIFJlYWN0LCB0eXBlIERhdGFTb3VyY2UsIHR5cGUgQXR0YWNobWVudEluZm8gfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgRmVhdHVyZURhdGFSZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZCB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICByZWNvcmQ6IERhdGFSZWNvcmRcclxuICBhdHRhY2htZW50VHlwZXM/OiBzdHJpbmdbXVxyXG5cclxuICBvbkNoYW5nZT86IChhdHRhY2htZW50SW5mb3M6IEF0dGFjaG1lbnRJbmZvW10pID0+IHZvaWRcclxuICB1bm1vdW50QXR0YWNobWVudEluZm9zQ2hhbmdlPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGF0dGFjaG1lbnRJbmZvczogQXR0YWNobWVudEluZm9bXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgZGF0YVNvdXJjZXM6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogRGF0YVNvdXJjZSB9ID0gbnVsbFxyXG4gIF9fdW5tb3VudCA9IGZhbHNlXHJcbiAgaXNMb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzOiBQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhdHRhY2htZW50SW5mb3M6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuICAgIHRoaXMucmVzb2x2ZUV4cHJlc3Npb25zKHRoaXMucHJvcHMucmVjb3JkKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSB0cnVlXHJcbiAgICB0aGlzLnByb3BzLnVubW91bnRBdHRhY2htZW50SW5mb3NDaGFuZ2UgJiYgdGhpcy5wcm9wcy51bm1vdW50QXR0YWNobWVudEluZm9zQ2hhbmdlKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zaGFsbG93RXF1YWxzKHRoaXMucHJvcHMucmVjb3JkLCBwcmV2UHJvcHMucmVjb3JkKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMucmVzb2x2ZUV4cHJlc3Npb25zKHRoaXMucHJvcHMucmVjb3JkKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2U3RhdGUuYXR0YWNobWVudEluZm9zICE9PSB0aGlzLnN0YXRlLmF0dGFjaG1lbnRJbmZvcykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5hdHRhY2htZW50SW5mb3MpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNvbHZlRXhwcmVzc2lvbnMgPSAocmVjb3JkOiBEYXRhUmVjb3JkKSA9PiB7XHJcbiAgICBpZiAocmVjb3JkKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmQgPSByZWNvcmQgYXMgRmVhdHVyZUxheWVyRGF0YVJlY29yZFxyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWVcclxuICAgICAgZGF0YVJlY29yZCAmJiBkYXRhUmVjb3JkLnF1ZXJ5QXR0YWNobWVudHMgJiYgZGF0YVJlY29yZC5xdWVyeUF0dGFjaG1lbnRzKHRoaXMucHJvcHMuYXR0YWNobWVudFR5cGVzKS50aGVuKChhdHRhY2htZW50SW5mb3MpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYXR0YWNobWVudEluZm9zOiBhdHRhY2htZW50SW5mb3NcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYXR0YWNobWVudEluZm9zOiBudWxsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGVxdWl2YWxlbnQgd2l0aCBhbm90aGVyLCBub3QgcmVjdXJzaXZlbHkuXHJcbiAgICovXHJcbiAgc2hhbGxvd0VxdWFscyA9IChvYmoxOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBvYmoyOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIW9iajEgJiYgIW9iajIpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAob2JqMSAmJiBvYmoyKSB7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqMSkuc29tZShrZXkgPT4gb2JqMVtrZXldICE9PSBvYmoyW2tleV0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCB0eXBlIEF0dGFjaG1lbnRJbmZvIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBJbWFnZVdpdGhQYXJhbSwgdHlwZSBJbWFnZVBhcmFtLCB0eXBlIEltYWdlV2l0aFBhcmFtUHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBMZWZ0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQnXHJcbmltcG9ydCB7IFJpZ2h0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0J1xyXG5cclxuaW50ZXJmYWNlIEltYWdlR2FsbGVyeVByb3BzIGV4dGVuZHMgSW1hZ2VXaXRoUGFyYW1Qcm9wcyB7XHJcbiAgc291cmNlczogQXR0YWNobWVudEluZm9bXVxyXG4gIHRvb2xUaXBXaXRoQXR0YWNobWVudE5hbWU/OiBib29sZWFuXHJcbiAgYWx0VGV4dFdpdGhBdHRhY2htZW50TmFtZT86IGJvb2xlYW5cclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXRlcyB7XHJcbiAgY3VycmVudEluZGV4OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SW1hZ2VHYWxsZXJ5UHJvcHMsIFN0YXRlcz4ge1xyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogSW1hZ2VHYWxsZXJ5UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY3VycmVudEluZGV4OiAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogSW1hZ2VHYWxsZXJ5UHJvcHMsIHByZXZTdGF0ZTogU3RhdGVzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNvdXJjZXMgIT09IHRoaXMucHJvcHMuc291cmNlcykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBjdXJyZW50SW5kZXg6IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJhY2tJbWcgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgcHJlSW5kZXggPSB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA+IDAgPyB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCAtIDEgOiB0aGlzLnByb3BzLnNvdXJjZXMubGVuZ3RoIC0gMVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJbmRleDogcHJlSW5kZXhcclxuICAgIH0pXHJcbiAgICBlPy5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlPy5zdG9wUHJvcGFnYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgZm9yd2FyZEltZyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA8IHRoaXMucHJvcHMuc291cmNlcy5sZW5ndGggLSAxID8gdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggKyAxIDogMFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGN1cnJlbnRJbmRleDogbmV4dEluZGV4XHJcbiAgICB9KVxyXG4gICAgZT8ucHJldmVudERlZmF1bHQoKVxyXG4gICAgZT8uc3RvcFByb3BhZ2F0aW9uKClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBsZXQgdGVtcEltYWdlUGFyYW0gPSB7fSBhcyBhbnlcclxuXHJcbiAgICBjb25zdCB0b29sVGlwID0gdGhpcy5wcm9wcy50b29sVGlwV2l0aEF0dGFjaG1lbnROYW1lID8gKHRoaXMucHJvcHMuc291cmNlcyAmJiB0aGlzLnByb3BzLnNvdXJjZXNbdGhpcy5zdGF0ZS5jdXJyZW50SW5kZXhdICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0ubmFtZSkgOiB0aGlzLnByb3BzLnRvb2xUaXBcclxuICAgIGNvbnN0IGFsdFRleHQgPSB0aGlzLnByb3BzLmFsdFRleHRXaXRoQXR0YWNobWVudE5hbWUgPyAodGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS5uYW1lKSA6IHRoaXMucHJvcHMuYWx0VGV4dFxyXG4gICAgaWYgKCh0aGlzLnByb3BzLmltYWdlUGFyYW0gYXMgYW55KS5zZXQpIHtcclxuICAgICAgdGVtcEltYWdlUGFyYW0gPSAodGhpcy5wcm9wcy5pbWFnZVBhcmFtIGFzIGFueSkuc2V0KCd1cmwnLCAodGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS51cmwpKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGVtcEltYWdlUGFyYW0udXJsID0gdGhpcy5wcm9wcy5zb3VyY2VzICYmIHRoaXMucHJvcHMuc291cmNlc1t0aGlzLnN0YXRlLmN1cnJlbnRJbmRleF0gJiYgdGhpcy5wcm9wcy5zb3VyY2VzW3RoaXMuc3RhdGUuY3VycmVudEluZGV4XS51cmxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgaC0xMDAnPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNvdXJjZXMgJiYgdGhpcy5wcm9wcy5zb3VyY2VzLmxlbmd0aCA+IDEgJiYgPGRpdiB0aXRsZT17dG9vbFRpcH0gY2xhc3NOYW1lPSdzaWxkZXItdG9vbC1jb250YWluZXIgdy0xMDAgaC0xMDAnIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB6SW5kZXg6IDEgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGltYWdlLWdhbGxlcnktYnV0dG9uIG1sLTInXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYmFja0ltZ30gc3R5bGU9e3sgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMZWZ0T3V0bGluZWQgc2l6ZT0ncycvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGltYWdlLWdhbGxlcnktYnV0dG9uIG1yLTInXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZm9yd2FyZEltZ30gc3R5bGU9e3sgdG9wOiAnNTAlJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UmlnaHRPdXRsaW5lZCBzaXplPSdzJy8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlLWdhbGxlcnktY29udGVudCB3LTEwMCBoLTEwMCc+XHJcbiAgICAgICAgICA8SW1hZ2VXaXRoUGFyYW1cclxuICAgICAgICAgICAgaW1hZ2VQYXJhbT17dGVtcEltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbX1cclxuICAgICAgICAgICAgdXNlRmFkZWluIHNpemU9e3RoaXMucHJvcHMuc2l6ZX1cclxuICAgICAgICAgICAgaW1hZ2VGaWxsTW9kZT17dGhpcy5wcm9wcy5pbWFnZUZpbGxNb2RlfVxyXG4gICAgICAgICAgICBpc0F1dG9IZWlnaHQ9e3RoaXMucHJvcHMuaXNBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgICB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgdHlwZSBJbW11dGFibGVBcnJheSwgSW1tdXRhYmxlLCB0eXBlIFVzZURhdGFTb3VyY2UsIHR5cGUgRGF0YVJlY29yZCwgUmVhY3QsIE11bHRpcGxlRGF0YVNvdXJjZUNvbXBvbmVudCxcclxuICB0eXBlIERhdGFTb3VyY2UsIHR5cGUgSU1EYXRhU291cmNlSW5mbywgd2l0aFJlcGVhdGVkRGF0YVNvdXJjZSwgdHlwZSBSZXBlYXRlZERhdGFTb3VyY2UsIENPTlNUQU5UUyxcclxuICBEYXRhU291cmNlTWFuYWdlclxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG4gIHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPlxyXG4gIGlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dD86IGJvb2xlYW5cclxuXHJcbiAgb25SZWNvcmRDaGFuZ2U/OiAocmVjb3JkOiBEYXRhUmVjb3JkKSA9PiB2b2lkXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICByZXBlYXRlZERhdGFTb3VyY2U6IFJlcGVhdGVkRGF0YVNvdXJjZSB8IFJlcGVhdGVkRGF0YVNvdXJjZVtdXHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgaW5mb3M6IHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogSU1EYXRhU291cmNlSW5mbyB9XHJcbn1cclxuXHJcbmNsYXNzIF9SZWNvcmRDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzICYgRXh0cmFQcm9wcywgU3RhdGU+IHtcclxuICBkYXRhU291cmNlczogeyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBEYXRhU291cmNlIH0gPSBudWxsXHJcbiAgX191bm1vdW50ID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IgKHByb3BzOiBQcm9wcyAmIEV4dHJhUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW5mb3M6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuICAgIHRoaXMudXBkYXRlUmVjb3JkKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVJlY29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuZ2V0U2luZ2xlUmVjb3JkKClcclxuICAgIGlmICh0aGlzLnByb3BzLm9uUmVjb3JkQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25SZWNvcmRDaGFuZ2UocmVjb3JkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHM6IFByb3BzICYgRXh0cmFQcm9wcywgcHJldlN0YXRlOiBTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0KSB7XHJcbiAgICAgIGlmICgodGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UgIT09IHByZXZQcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UpIHx8ICh0aGlzLnByb3BzLmlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCAhPT0gcHJldlByb3BzLmlzU2VsZWN0ZWRGcm9tUmVwZWF0ZWREYXRhU291cmNlQ29udGV4dCkpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlY29yZCgpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICE9PSBwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgIXRoaXMuc2hhbGxvd0VxdWFscyh0aGlzLnN0YXRlLmluZm9zLCBwcmV2U3RhdGUuaW5mb3MpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVjb3JkKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hhbGxvd0VxdWFscyA9IChvYmoxOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBvYmoyOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoIW9iajEgJiYgIW9iajIpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSBpZiAob2JqMSAmJiBvYmoyKSB7XHJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAhT2JqZWN0LmtleXMob2JqMSkuc29tZShrZXkgPT4gb2JqMVtrZXldICE9PSBvYmoyW2tleV0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlUmVjb3JkID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IHJlcGVhdGVkRGF0YVNvdXJjZSA9IHRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlXHJcbiAgICAgIGNvbnN0IHJlY29yZCA9IEFycmF5LmlzQXJyYXkocmVwZWF0ZWREYXRhU291cmNlKVxyXG4gICAgICAgID8gKHJlcGVhdGVkRGF0YVNvdXJjZSlbMF0/LnJlY29yZFxyXG4gICAgICAgIDogKHJlcGVhdGVkRGF0YVNvdXJjZSk/LnJlY29yZFxyXG4gICAgICByZXR1cm4gcmVjb3JkXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkc0lkID0gdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25EYXRhVmlldyA9IGRzSWQuc3BsaXQoJy0nKS5yZXZlcnNlKClbMF0gPT09IENPTlNUQU5UUy5TRUxFQ1RJT05fREFUQV9WSUVXX0lEXHJcbiAgICAgIGlmIChpc1NlbGVjdGlvbkRhdGFWaWV3KSB7XHJcbiAgICAgICAgY29uc3QgZHMgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldERhdGFTb3VyY2UoZHNJZClcclxuICAgICAgICBsZXQgcmVjb3JkID0gZHM/LmdldFJlY29yZHMoKVswXVxyXG4gICAgICAgIGlmICghcmVjb3JkKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhVmlld0Zvck5vU2VsZWN0aW9uID0gZHM/LmdldE1haW5EYXRhU291cmNlKCkuZ2V0RGF0YVZpZXcoQ09OU1RBTlRTLkRBVEFfVklFV19JRF9GT1JfTk9fU0VMRUNUSU9OKVxyXG4gICAgICAgICAgcmVjb3JkID0gZGF0YVZpZXdGb3JOb1NlbGVjdGlvbj8uZ2V0UmVjb3JkcygpWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZWNvcmRcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkcyA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKVxyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGRzPy5nZXRSZWNvcmRzKClbMF1cclxuICAgICAgICByZXR1cm4gcmVjb3JkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoZHNzOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IERhdGFTb3VyY2UgfSkgPT4ge1xyXG4gICAgdGhpcy5kYXRhU291cmNlcyA9IGRzc1xyXG5cclxuICAgIGlmIChkc3MpIHtcclxuICAgICAgY29uc3QgaW5mb3MgPSB7fVxyXG5cclxuICAgICAgT2JqZWN0LmtleXMoZHNzKS5mb3JFYWNoKGRzSWQgPT4ge1xyXG4gICAgICAgIGlmIChkc0lkICYmIGRzc1tkc0lkXSkge1xyXG4gICAgICAgICAgaW5mb3NbZHNJZF0gPSBkc3NbZHNJZF0uZ2V0SW5mbygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZm9zIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlID0gKGluZm9zOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IElNRGF0YVNvdXJjZUluZm8gfSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGluZm9zIH0pXHJcbiAgfVxyXG5cclxuICBhZGREYXRhVmlld0Zvck5vU2VsZWN0aW9uID0gKHVzZURhdGFTb3VyY2VzOiBJbW11dGFibGVBcnJheTxVc2VEYXRhU291cmNlPik6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+ID0+IHtcclxuICAgIGxldCBzZWxlY3Rpb25EYXRhVmlld3M6IEltbXV0YWJsZUFycmF5PFVzZURhdGFTb3VyY2U+ID0gSW1tdXRhYmxlKFtdKVxyXG4gICAgaWYgKCF1c2VEYXRhU291cmNlcykge1xyXG4gICAgICByZXR1cm4gc2VsZWN0aW9uRGF0YVZpZXdzXHJcbiAgICB9XHJcbiAgICB1c2VEYXRhU291cmNlcy5mb3JFYWNoKHUgPT4ge1xyXG4gICAgICBpZiAodS5tYWluRGF0YVNvdXJjZUlkICYmICFzZWxlY3Rpb25EYXRhVmlld3Muc29tZShzID0+IHMubWFpbkRhdGFTb3VyY2VJZCA9PT0gdS5tYWluRGF0YVNvdXJjZUlkKSkge1xyXG4gICAgICAgIGNvbnN0IG1haW5EYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKHUubWFpbkRhdGFTb3VyY2VJZClcclxuICAgICAgICBjb25zdCBtYWluRGF0YVNvdXJjZUpzb24gPSBtYWluRGF0YVNvdXJjZSAmJiBtYWluRGF0YVNvdXJjZS5nZXREYXRhU291cmNlSnNvbigpXHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXdGb3JOb1NlbGVjdGlvbiA9IG1haW5EYXRhU291cmNlSnNvbj8uZGF0YVZpZXdzICYmIG1haW5EYXRhU291cmNlSnNvbj8uZGF0YVZpZXdzW0NPTlNUQU5UUy5EQVRBX1ZJRVdfSURfRk9SX05PX1NFTEVDVElPTl1cclxuICAgICAgICBpZiAoZGF0YVZpZXdGb3JOb1NlbGVjdGlvbikge1xyXG4gICAgICAgICAgc2VsZWN0aW9uRGF0YVZpZXdzID0gc2VsZWN0aW9uRGF0YVZpZXdzLmNvbmNhdChcclxuICAgICAgICAgICAgdS5zZXQoJ2RhdGFTb3VyY2VJZCcsIERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVZpZXdEYXRhU291cmNlSWQodS5tYWluRGF0YVNvdXJjZUlkLCBDT05TVEFOVFMuREFUQV9WSUVXX0lEX0ZPUl9OT19TRUxFQ1RJT04pKVxyXG4gICAgICAgICAgICAgIC5zZXQoJ2RhdGFWaWV3SWQnLCBDT05TVEFOVFMuREFUQV9WSUVXX0lEX0ZPUl9OT19TRUxFQ1RJT04pXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25EYXRhVmlld3MuY29uY2F0KHVzZURhdGFTb3VyY2VzKVxyXG4gIH1cclxuXHJcbiAgZ2V0UXVlcmllcyA9ICh1c2VEYXRhU291cmNlczogSW1tdXRhYmxlQXJyYXk8VXNlRGF0YVNvdXJjZT4pID0+IHtcclxuICAgIGNvbnN0IHF1ZXJpZXMgPSB7fVxyXG4gICAgaWYgKCF1c2VEYXRhU291cmNlcykge1xyXG4gICAgICByZXR1cm4gcXVlcmllc1xyXG4gICAgfVxyXG4gICAgdXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1ID0+IHtcclxuICAgICAgLy8gc2V0IGVtcHR5IHF1ZXJ5IHRvIGxvYWQgZGF0YVxyXG4gICAgICBxdWVyaWVzW3UuZGF0YVNvdXJjZUlkXSA9IHt9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBxdWVyaWVzXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgdXNlRGF0YVNvdXJjZXMgPSB0aGlzLmFkZERhdGFWaWV3Rm9yTm9TZWxlY3Rpb24odGhpcy5wcm9wcy51c2VEYXRhU291cmNlcylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXVsdGlwbGVEYXRhU291cmNlQ29tcG9uZW50XHJcbiAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cclxuICAgICAgICBvbkRhdGFTb3VyY2VJbmZvQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUluZm9DaGFuZ2V9XHJcbiAgICAgICAgcXVlcmllcz17dGhpcy5nZXRRdWVyaWVzKHVzZURhdGFTb3VyY2VzKX1cclxuICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy53aWRnZXRJZH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWNvcmRDb21wb25lbnQgPSB3aXRoUmVwZWF0ZWREYXRhU291cmNlKF9SZWNvcmRDb21wb25lbnQpXHJcbiIsImltcG9ydCB7IHR5cGUgRGF0YVJlY29yZCwgUmVhY3QsIHR5cGUgRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBGZWF0dXJlRGF0YVJlY29yZCBhcyBGZWF0dXJlTGF5ZXJEYXRhUmVjb3JkIH0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHJlY29yZDogRGF0YVJlY29yZFxyXG5cclxuICBvbkNoYW5nZT86IChzeW1ib2xFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZFxyXG4gIHVubW91bnRTeW1ib2xFbGVtZW50Q2hhbmdlPzogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIHN5bWJvbEVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2xDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIGRhdGFTb3VyY2VzOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IERhdGFTb3VyY2UgfSA9IG51bGxcclxuICBfX3VubW91bnQgPSBmYWxzZVxyXG4gIGlzTG9hZGluZyA9IGZhbHNlXHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3ltYm9sRWxlbWVudDogbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xyXG4gICAgdGhpcy5fX3VubW91bnQgPSBmYWxzZVxyXG4gICAgdGhpcy5yZXNvbHZlRXhwcmVzc2lvbnModGhpcy5wcm9wcy5yZWNvcmQpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XHJcbiAgICB0aGlzLl9fdW5tb3VudCA9IHRydWVcclxuICAgIHRoaXMucHJvcHMudW5tb3VudFN5bWJvbEVsZW1lbnRDaGFuZ2UgJiYgdGhpcy5wcm9wcy51bm1vdW50U3ltYm9sRWxlbWVudENoYW5nZSgpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgKHByZXZQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuc2hhbGxvd0VxdWFscyh0aGlzLnByb3BzLnJlY29yZCwgcHJldlByb3BzLnJlY29yZClcclxuICAgICkge1xyXG4gICAgICB0aGlzLnJlc29sdmVFeHByZXNzaW9ucyh0aGlzLnByb3BzLnJlY29yZClcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldlN0YXRlLnN5bWJvbEVsZW1lbnQgIT09IHRoaXMuc3RhdGUuc3ltYm9sRWxlbWVudCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5zdGF0ZS5zeW1ib2xFbGVtZW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzb2x2ZUV4cHJlc3Npb25zID0gKHJlY29yZDogRGF0YVJlY29yZCkgPT4ge1xyXG4gICAgaWYgKHJlY29yZCkge1xyXG4gICAgICBjb25zdCBkYXRhUmVjb3JkID0gcmVjb3JkIGFzIEZlYXR1cmVMYXllckRhdGFSZWNvcmRcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlXHJcbiAgICAgIGRhdGFSZWNvcmQgJiYgZGF0YVJlY29yZC5mZXRjaFN5bWJvbFByZXZpZXdIVE1MICYmIGRhdGFSZWNvcmQuZmV0Y2hTeW1ib2xQcmV2aWV3SFRNTCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzeW1ib2xFbGVtZW50OiByZXN1bHRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3ltYm9sRWxlbWVudDogbnVsbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBlcXVpdmFsZW50IHdpdGggYW5vdGhlciwgbm90IHJlY3Vyc2l2ZWx5LlxyXG4gICAqL1xyXG4gIHNoYWxsb3dFcXVhbHMgPSAob2JqMTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgb2JqMjogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKCFvYmoxICYmICFvYmoyKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG9iajEgJiYgb2JqMikge1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXMob2JqMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmoyKS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIU9iamVjdC5rZXlzKG9iajEpLnNvbWUoa2V5ID0+IG9iajFba2V5XSAhPT0gb2JqMltrZXldKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQge1xyXG4gIFJlYWN0LCBJbW11dGFibGUsIExpbmtUeXBlLCB0eXBlIFJlcGVhdGVkRGF0YVNvdXJjZSwgRXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50LCBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUsIHR5cGUgU2l6ZSwgbG9kYXNoLCBnZXRBcHBTdG9yZSxcclxuICBjc3MsIGpzeCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgdHlwZSBEYXRhUmVjb3JkLCBSZWFjdFJlc2l6ZURldGVjdG9yLCB0eXBlIElNRXhwcmVzc2lvbiwgRXhwcmVzc2lvblBhcnRUeXBlLCB0eXBlIExpbmtSZXN1bHQsIHR5cGUgQXR0YWNobWVudEluZm8sIHBvbGlzaGVkLCB0eXBlIElNVXJsUGFyYW1ldGVycywgdHlwZSBJTVN0YXRlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBMaW5rLCBJbWFnZVdpdGhQYXJhbSwgdHlwZSBJbWFnZVBhcmFtLCBJbWFnZUZpbGxNb2RlLCB0eXBlIExpbmtUYXJnZXQsIENyb3BUeXBlIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZywgSW1nU291cmNlVHlwZSwgRHluYW1pY1VybFR5cGUgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F0dGFjaG1lbnQtY29tcG9uZW50J1xyXG5pbXBvcnQgeyBTeW1ib2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3ltYm9sLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgUmVjb3JkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY29yZC1jb21wb25lbnQnXHJcbmltcG9ydCB7IEltYWdlR2FsbGVyeSB9IGZyb20gJy4vY29tcG9uZW50cy9pbWFnZS1nYWxsZXJ5J1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICByZWNvcmQ/OiBEYXRhUmVjb3JkXHJcbiAgaW1hZ2VXaWR0aD86IG51bWJlclxyXG4gIGltYWdlSGVpZ2h0PzogbnVtYmVyXHJcbiAgd2lkZ2V0V2lkdGg/OiBudW1iZXJcclxuICB3aWRnZXRIZWlnaHQ/OiBudW1iZXJcclxuICBjcm9wV2lkZ2V0V2lkdGg/OiBudW1iZXJcclxuICBjcm9wV2lkZ2V0SGVpZ2h0PzogbnVtYmVyXHJcblxyXG4gIHRvb2xUaXA6IHN0cmluZ1xyXG4gIGFsdFRleHQ6IHN0cmluZ1xyXG4gIHNyYzogc3RyaW5nXHJcbiAgbGlua1VybDogc3RyaW5nXHJcbiAgYXR0YWNobWVudEluZm9zOiBBdHRhY2htZW50SW5mb1tdXHJcbiAgc3ltYm9sRWxlbWVudDogSFRNTEVsZW1lbnRcclxuXHJcbiAgc3JjRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbiAgYWx0VGV4dEV4cHJlc3Npb246IElNRXhwcmVzc2lvblxyXG4gIHRvb2xUaXBFeHByZXNzaW9uOiBJTUV4cHJlc3Npb25cclxuICBsaW5rVXJsRXhwcmVzc2lvbjogSU1FeHByZXNzaW9uXHJcbn1cclxuXHJcbmludGVyZmFjZSBFeHRyYVByb3BzIHtcclxuICBxdWVyeU9iamVjdDogSU1VcmxQYXJhbWV0ZXJzXHJcbn1cclxuXHJcbmNvbnN0IGltYWdlV2lkZ2V0U2l6ZU1hcDogeyBba2V5OiBzdHJpbmddOiBTaXplIH0gPSB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4gJiBFeHRyYVByb3BzLCBTdGF0ZT4ge1xyXG4gIGRhdGFTb3VyY2U/OiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXHJcbiAgX191bm1vdW50ID0gZmFsc2VcclxuICBhdHRhY2htZW50VHlwZXMgPSBbJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZicsICdpbWFnZS9ibXAnLCAnaW1hZ2Uvc3ZnK3htbCddXHJcbiAgaXNBdXRvSGVpZ2h0PzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgZGVib3VuY2VPblJlc2l6ZTogKHdpZHRoLCBoZWlnaHQpID0+IHZvaWRcclxuXHJcbiAgc3RhdGljIG1hcEV4dHJhU3RhdGVQcm9wcyA9IChzdGF0ZTogSU1TdGF0ZSk6IEV4dHJhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVlcnlPYmplY3Q6IHN0YXRlLnF1ZXJ5T2JqZWN0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcbiAgICBpZiAoIXVhLmluY2x1ZGVzKCdjaHJvbScpICYmICF1YS5pbmNsdWRlcygnZmlyZWZveCcpICYmIHVhLmluY2x1ZGVzKCdzYWZhcmknKSkge1xyXG4gICAgICB0aGlzLmlzQXV0b0hlaWdodCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlYm91bmNlT25SZXNpemUgPSBsb2Rhc2guZGVib3VuY2UoKHdpZHRoLCBoZWlnaHQpID0+IHsgdGhpcy5vblJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB9LCAyMDApXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcmVjb3JkOiBudWxsLFxyXG4gICAgICB0b29sVGlwOiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy50b29sVGlwIHx8ICcnLFxyXG4gICAgICBhbHRUZXh0OiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5hbHRUZXh0IHx8ICcnLFxyXG4gICAgICBzcmM6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LmltYWdlUGFyYW0/LnVybCB8fCAnJyxcclxuICAgICAgbGlua1VybDogdGhpcy5wcm9wcz8uY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8ubGlua1BhcmFtPy52YWx1ZSB8fCAnJyxcclxuICAgICAgc3JjRXhwcmVzc2lvbjogdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiYgdGhpcy5nZXRTcmNFeHByZXNzaW9uKCksXHJcbiAgICAgIGFsdFRleHRFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldEFsdFRleHRFeHByZXNzaW9uKCksXHJcbiAgICAgIHRvb2xUaXBFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldFRvb2xUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgIGxpbmtVcmxFeHByZXNzaW9uOiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZCAmJiB0aGlzLmdldExpbmtVcmxFeHByZXNzaW9uKCksXHJcbiAgICAgIGF0dGFjaG1lbnRJbmZvczogW10sXHJcbiAgICAgIHN5bWJvbEVsZW1lbnQ6IG51bGwsXHJcbiAgICAgIHdpZGdldFdpZHRoOiBpbWFnZVdpZGdldFNpemVNYXBbdGhpcy5wcm9wcy5pZCArICctJyArIHRoaXMucHJvcHMubGF5b3V0SWRdICYmIGltYWdlV2lkZ2V0U2l6ZU1hcFt0aGlzLnByb3BzLmlkICsgJy0nICsgdGhpcy5wcm9wcy5sYXlvdXRJZF0ud2lkdGgsXHJcbiAgICAgIHdpZGdldEhlaWdodDogaW1hZ2VXaWRnZXRTaXplTWFwW3RoaXMucHJvcHMuaWQgKyAnLScgKyB0aGlzLnByb3BzLmxheW91dElkXSAmJiBpbWFnZVdpZGdldFNpemVNYXBbdGhpcy5wcm9wcy5pZCArICctJyArIHRoaXMucHJvcHMubGF5b3V0SWRdLmhlaWdodCxcclxuICAgICAgY3JvcFdpZGdldFdpZHRoOiBudWxsLFxyXG4gICAgICBjcm9wV2lkZ2V0SGVpZ2h0OiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdHlsZSAoKSB7XHJcbiAgICBjb25zdCBzeW1ib2xTY2FsZSA9IHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnN5bWJvbFNjYWxlXHJcbiAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuc3ltYm9sU2NhbGVcclxuICAgICAgOiAxXHJcblxyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgLndpZGdldC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIC5idG4tbGluayB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlLXN5bWJvbCB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoJHtzeW1ib2xTY2FsZX0sICR7c3ltYm9sU2NhbGV9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2UtZ2FsbGVyeS1idXR0b24ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cG9saXNoZWQucmdiYSh0aGlzLnByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSwgMC41KX07XHJcbiAgICAgIH1cclxuICAgICAgLmltYWdlLWdhbGxlcnktYnV0dG9uOiBob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICAgIH1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzOiBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIHByZXZTdGF0ZTogU3RhdGUpIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWQgJiZcclxuICAgICAgKFxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uZmlnICE9PSBwcmV2UHJvcHMuY29uZmlnIHx8IHByZXZQcm9wcy51c2VEYXRhU291cmNlc0VuYWJsZWRcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNyYzogdGhpcy5wcm9wcz8uY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8uaW1hZ2VQYXJhbT8udXJsIHx8ICcnLFxyXG4gICAgICAgIHRvb2xUaXA6IHRoaXMucHJvcHM/LmNvbmZpZz8uZnVuY3Rpb25Db25maWc/LnRvb2xUaXAsXHJcbiAgICAgICAgYWx0VGV4dDogdGhpcy5wcm9wcz8uY29uZmlnPy5mdW5jdGlvbkNvbmZpZz8uYWx0VGV4dCxcclxuICAgICAgICBsaW5rVXJsOiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5saW5rUGFyYW0/LnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkICYmXHJcbiAgICAgIChcclxuICAgICAgICB0aGlzLnByb3BzLmNvbmZpZyAhPT0gcHJldlByb3BzLmNvbmZpZyB8fCAhcHJldlByb3BzLnVzZURhdGFTb3VyY2VzRW5hYmxlZFxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuY2hlY2tJc1N0YXRpY1NyYyh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWdTb3VyY2VUeXBlKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3JjOiB0aGlzLnByb3BzPy5jb25maWc/LmZ1bmN0aW9uQ29uZmlnPy5pbWFnZVBhcmFtPy51cmwgfHwgJycsXHJcbiAgICAgICAgICB0b29sVGlwRXhwcmVzc2lvbjogdGhpcy5nZXRUb29sVGlwRXhwcmVzc2lvbigpLFxyXG4gICAgICAgICAgYWx0VGV4dEV4cHJlc3Npb246IHRoaXMuZ2V0QWx0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgICAgIGxpbmtVcmxFeHByZXNzaW9uOiB0aGlzLmdldExpbmtVcmxFeHByZXNzaW9uKClcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2UgaWYgKCh0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWdTb3VyY2VUeXBlID09PSBJbWdTb3VyY2VUeXBlLkJ5RHluYW1pY1VybCAmJlxyXG4gICAgICAgICghdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgfHwgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgPT09IER5bmFtaWNVcmxUeXBlLkV4cHJlc3Npb24pKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3JjRXhwcmVzc2lvbjogdGhpcy5nZXRTcmNFeHByZXNzaW9uKCksXHJcbiAgICAgICAgICB0b29sVGlwRXhwcmVzc2lvbjogdGhpcy5nZXRUb29sVGlwRXhwcmVzc2lvbigpLFxyXG4gICAgICAgICAgYWx0VGV4dEV4cHJlc3Npb246IHRoaXMuZ2V0QWx0VGV4dEV4cHJlc3Npb24oKSxcclxuICAgICAgICAgIGxpbmtVcmxFeHByZXNzaW9uOiB0aGlzLmdldExpbmtVcmxFeHByZXNzaW9uKClcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgc3JjOiAnJyxcclxuICAgICAgICAgIHRvb2xUaXBFeHByZXNzaW9uOiB0aGlzLmdldFRvb2xUaXBFeHByZXNzaW9uKCksXHJcbiAgICAgICAgICBhbHRUZXh0RXhwcmVzc2lvbjogdGhpcy5nZXRBbHRUZXh0RXhwcmVzc2lvbigpLFxyXG4gICAgICAgICAgbGlua1VybEV4cHJlc3Npb246IHRoaXMuZ2V0TGlua1VybEV4cHJlc3Npb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcclxuICAgIHRoaXMuX191bm1vdW50ID0gdHJ1ZVxyXG5cclxuICAgIGNvbnN0IHdpZGdldEpzb24gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHNbdGhpcy5wcm9wcy5pZF1cclxuICAgIGlmICghd2lkZ2V0SnNvbikge1xyXG4gICAgICBkZWxldGUgaW1hZ2VXaWRnZXRTaXplTWFwW3RoaXMucHJvcHMuaWQgKyAnLScgKyB0aGlzLnByb3BzLmxheW91dElkXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tJc1N0YXRpY1NyYyA9IChpbWdTb3VyY2VUeXBlOiBJbWdTb3VyY2VUeXBlKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gaW1nU291cmNlVHlwZSA9PT0gSW1nU291cmNlVHlwZS5CeVVwbG9hZCB8fCBpbWdTb3VyY2VUeXBlID09PSBJbWdTb3VyY2VUeXBlLkJ5U3RhdGljVXJsIHx8ICFpbWdTb3VyY2VUeXBlXHJcbiAgfVxyXG5cclxuICBnZXRTcmNFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnNyY0V4cHJlc3Npb24pIHx8XHJcbiAgICAgIEltbXV0YWJsZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFydHM6IFt7XHJcbiAgICAgICAgICB0eXBlOiBFeHByZXNzaW9uUGFydFR5cGUuU3RyaW5nLFxyXG4gICAgICAgICAgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0udXJsfVwiYFxyXG4gICAgICAgIH1dXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRBbHRUZXh0RXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5hbHRUZXh0RXhwcmVzc2lvbikgfHxcclxuICAgICAgSW1tdXRhYmxlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXJ0czogW3tcclxuICAgICAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsXHJcbiAgICAgICAgICBleHA6IGBcIiR7dGhpcy5wcm9wcy5jb25maWcgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmFsdFRleHR9XCJgXHJcbiAgICAgICAgfV1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRvb2xUaXBFeHByZXNzaW9uID0gKCk6IElNRXhwcmVzc2lvbiA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXBFeHByZXNzaW9uKSB8fFxyXG4gICAgSW1tdXRhYmxlKHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHBhcnRzOiBbe1xyXG4gICAgICAgIHR5cGU6IEV4cHJlc3Npb25QYXJ0VHlwZS5TdHJpbmcsXHJcbiAgICAgICAgZXhwOiBgXCIke3RoaXMucHJvcHMuY29uZmlnICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudG9vbFRpcH1cImBcclxuICAgICAgfV1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRMaW5rVXJsRXhwcmVzc2lvbiA9ICgpOiBJTUV4cHJlc3Npb24gPT4ge1xyXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbSAmJlxyXG4gICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5saW5rUGFyYW0gJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtLmV4cHJlc3Npb25cclxuXHJcbiAgICByZXR1cm4gZXhwcmVzc2lvbiB8fCBudWxsXHJcbiAgfVxyXG5cclxuICBvblNyY0V4cFJlc29sdmVDaGFuZ2UgPSByZXN1bHQgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNyYzogKHJlc3VsdC52YWx1ZSA9PT0gJ251bGwnID8gJycgOiByZXN1bHQudmFsdWUpIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQudmFsdWVcclxuICAgICAgaWYgKGVycm9yQ29kZSA9PT0gRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLkZhaWxlZCkge1xyXG4gICAgICAgIHJlcyA9IHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbiAmJiB0aGlzLnN0YXRlLnNyY0V4cHJlc3Npb24ubmFtZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc3JjOiByZXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG9vbFRpcEV4cFJlc29sdmVDaGFuZ2UgPSByZXN1bHQgPT4ge1xyXG4gICAgaWYgKHJlc3VsdC5pc1N1Y2Nlc3NmdWwpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvb2xUaXA6IChyZXN1bHQudmFsdWUgPT09ICdudWxsJyA/ICcnIDogcmVzdWx0LnZhbHVlKSB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHJlczogc3RyaW5nID0gJydcclxuICAgICAgY29uc3QgZXJyb3JDb2RlID0gcmVzdWx0LnZhbHVlXHJcbiAgICAgIGlmIChlcnJvckNvZGUgPT09IEV4cHJlc3Npb25SZXNvbHZlckVycm9yQ29kZS5GYWlsZWQpIHtcclxuICAgICAgICByZXMgPSB0aGlzLnN0YXRlLnNyY0V4cHJlc3Npb24gJiYgdGhpcy5zdGF0ZS5zcmNFeHByZXNzaW9uLm5hbWVcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvb2xUaXA6IHJlcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25BbHRUZXh0RXhwUmVzb2x2ZUNoYW5nZSA9IHJlc3VsdCA9PiB7XHJcbiAgICBpZiAocmVzdWx0LmlzU3VjY2Vzc2Z1bCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWx0VGV4dDogKHJlc3VsdC52YWx1ZSA9PT0gJ251bGwnID8gJycgOiByZXN1bHQudmFsdWUpIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgcmVzOiBzdHJpbmcgPSAnJ1xyXG4gICAgICBjb25zdCBlcnJvckNvZGUgPSByZXN1bHQudmFsdWVcclxuICAgICAgaWYgKGVycm9yQ29kZSA9PT0gRXhwcmVzc2lvblJlc29sdmVyRXJyb3JDb2RlLkZhaWxlZCkge1xyXG4gICAgICAgIHJlcyA9IHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbiAmJiB0aGlzLnN0YXRlLnNyY0V4cHJlc3Npb24ubmFtZVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWx0VGV4dDogcmVzIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxpbmtVcmxFeHBSZXNvbHZlQ2hhbmdlID0gcmVzdWx0ID0+IHtcclxuICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzZnVsKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaW5rVXJsOiByZXN1bHQudmFsdWUgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCByZXM6IHN0cmluZyA9ICcnXHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgICBpZiAoZXJyb3JDb2RlID09PSBFeHByZXNzaW9uUmVzb2x2ZXJFcnJvckNvZGUuRmFpbGVkKSB7XHJcbiAgICAgICAgcmVzID0gdGhpcy5zdGF0ZS5zcmNFeHByZXNzaW9uICYmIHRoaXMuc3RhdGUuc3JjRXhwcmVzc2lvbi5uYW1lXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaW5rVXJsOiByZXMgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQXR0YWNobWVudEluZm9zQ2hhbmdlID0gKGF0dGFjaG1lbnRJbmZvczogQXR0YWNobWVudEluZm9bXSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGF0dGFjaG1lbnRJbmZvczogYXR0YWNobWVudEluZm9zXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdW5tb3VudEF0dGFjaG1lbnRJbmZvc0NoYW5nZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBhdHRhY2htZW50SW5mb3M6IFtdXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25TeW1ib2xFbGVtZW50Q2hhbmdlID0gKHN5bWJvbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3ltYm9sRWxlbWVudDogc3ltYm9sRWxlbWVudFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVubW91bnRTeW1ib2xFbGVtZW50Q2hhbmdlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN5bWJvbEVsZW1lbnQ6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRSZWNvcmRzRnJvbVJlcGVhdGVkRGF0YVNvdXJjZSA9ICgpOiB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IERhdGFSZWNvcmQgfSA9PiB7XHJcbiAgICBjb25zdCBkYXRhU291cmNlSWQgPSB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNbMF0gJiYgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZUlkICYmIHRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlKSB7XHJcbiAgICAgIGlmIChkYXRhU291cmNlSWQgPT09ICh0aGlzLnByb3BzLnJlcGVhdGVkRGF0YVNvdXJjZSBhcyBSZXBlYXRlZERhdGFTb3VyY2UpLmRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9ICh0aGlzLnByb3BzLnJlcGVhdGVkRGF0YVNvdXJjZSBhcyBSZXBlYXRlZERhdGFTb3VyY2UpLnJlY29yZFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgW2RhdGFTb3VyY2VJZF06IHJlY29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGlua1BhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcubGlua1BhcmFtXHJcbiAgICBpZiAobGlua1BhcmFtICYmIGxpbmtQYXJhbS52YWx1ZSAmJiBsaW5rUGFyYW0ubGlua1R5cGUgIT09IExpbmtUeXBlLk5vbmUpIHtcclxuICAgICAgKGV2ZW50IGFzIGFueSkuZXhiRXZlbnRUeXBlID0gJ2xpbmtDbGljaydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUltYWdlTG9hZGVkID0gKGltYWdlV2lkdGg6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGltYWdlV2lkdGg6IGltYWdlV2lkdGgsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiBpbWFnZUhlaWdodFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFdpZGdldFdpZHRoID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUud2lkZ2V0V2lkdGhcclxuICB9XHJcblxyXG4gIGdldFdpZGdldEhlaWdodCA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLndpZGdldEhlaWdodFxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX191bm1vdW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGlmICh3aWR0aCA9PT0gdGhpcy5zdGF0ZS53aWRnZXRXaWR0aCAmJiBoZWlnaHQgPT09IHRoaXMuc3RhdGUud2lkZ2V0SGVpZ2h0KSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2VXaWRnZXRTaXplTWFwW3RoaXMucHJvcHMuaWQgKyAnLScgKyB0aGlzLnByb3BzLmxheW91dElkXSA9IHtcclxuICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgd2lkZ2V0V2lkdGg6IHdpZHRoLFxyXG4gICAgICAgIHdpZGdldEhlaWdodDogaGVpZ2h0XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNyb3BXaWRnZXRSZXNpemUgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuX191bm1vdW50KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2lkdGggJiYgIWhlaWdodCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY3JvcFdpZGdldFdpZHRoOiB3aWR0aCxcclxuICAgICAgY3JvcFdpZGdldEhlaWdodDogaGVpZ2h0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY2xlYXJDcm9wV2lkZ2V0U2l6ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjcm9wV2lkZ2V0V2lkdGg6IG51bGwsXHJcbiAgICAgIGNyb3BXaWRnZXRIZWlnaHQ6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZWNvcmRDaGFuZ2UgPSAocmVjb3JkOiBEYXRhUmVjb3JkKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcmVjb3JkOiByZWNvcmRcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgaXNEYXRhU291cmNlVXNlZCA9IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXNFbmFibGVkXHJcbiAgICBjb25zdCB7IHF1ZXJ5T2JqZWN0IH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHRvb2xUaXAsIGFsdFRleHQsIHNyYyB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGxldCByZW5kZXJSZXN1bHQgPSBudWxsXHJcbiAgICBsZXQgaW1hZ2VDb250ZW50ID0gbnVsbFxyXG5cclxuICAgIGxldCBpbWFnZVBhcmFtID0gdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSA/IHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0gOiBJbW11dGFibGUoe30pXHJcbiAgICBpZiAoaW1hZ2VQYXJhbS5zZXQpIHtcclxuICAgICAgaW1hZ2VQYXJhbSA9IGltYWdlUGFyYW0uc2V0KCd1cmwnLCBzcmMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoaW1hZ2VQYXJhbSBhcyBhbnkpLnVybCA9IHNyY1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyb3BQYXJhbSA9IGltYWdlUGFyYW0gJiYgKGltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbSkuY3JvcFBhcmFtXHJcbiAgICBjb25zdCBpc1VzZVN2Z1JlbmRlciA9IGNyb3BQYXJhbSAmJiAoY3JvcFBhcmFtLmNyb3BUeXBlID09PSBDcm9wVHlwZS5GYWtlIHx8IGNyb3BQYXJhbS5jcm9wU2hhcGUpXHJcblxyXG4gICAgaW1hZ2VDb250ZW50ID0gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0namltdS13aWRnZXQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqaW11LXdpZGdldCB3aWRnZXQtaW1hZ2UgaW1hZ2UtcGFyYW0nIHN0eWxlPXt7IG1pbkhlaWdodDogJzE2cHgnIH19PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlICE9PSBEeW5hbWljVXJsVHlwZS5BdHRhY2htZW50ICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgIT09IER5bmFtaWNVcmxUeXBlLlN5bWJvbCAmJlxyXG4gICAgICAgICAgPEltYWdlV2l0aFBhcmFtXHJcbiAgICAgICAgICAgIGltYWdlUGFyYW09e2ltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbX0gdG9vbFRpcD17dG9vbFRpcH0gYWx0VGV4dD17YWx0VGV4dH0gb25JbWFnZUxvYWRlZD17dGhpcy5oYW5kbGVJbWFnZUxvYWRlZH1cclxuICAgICAgICAgICAgdXNlRmFkZWluIHNpemU9e2lzVXNlU3ZnUmVuZGVyID8geyB3aWR0aDogdGhpcy5zdGF0ZS53aWRnZXRXaWR0aCwgaGVpZ2h0OiB0aGlzLnN0YXRlLndpZGdldEhlaWdodCB9IDogbnVsbH1cclxuICAgICAgICAgICAgaW1hZ2VGaWxsTW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VGaWxsTW9kZX0gaXNBdXRvSGVpZ2h0PXt0aGlzLmlzQXV0b0hlaWdodH1cclxuICAgICAgICAgICAgaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGU9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRGlzcGxheVF1YWxpdHlNb2RlfVxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgPT09IER5bmFtaWNVcmxUeXBlLkF0dGFjaG1lbnQgJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwJz5cclxuICAgICAgICAgICAgICB7aXNEYXRhU291cmNlVXNlZCAmJiA8SW1hZ2VHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICBzb3VyY2VzPXt0aGlzLnN0YXRlLmF0dGFjaG1lbnRJbmZvc30gaW1hZ2VQYXJhbT17aW1hZ2VQYXJhbSBhcyBJbWFnZVBhcmFtfVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VGaWxsTW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VGaWxsTW9kZX1cclxuICAgICAgICAgICAgICAgIHNpemU9e2lzVXNlU3ZnUmVuZGVyID8geyB3aWR0aDogdGhpcy5zdGF0ZS53aWRnZXRXaWR0aCwgaGVpZ2h0OiB0aGlzLnN0YXRlLndpZGdldEhlaWdodCB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgIGlzQXV0b0hlaWdodD17dGhpcy5pc0F1dG9IZWlnaHR9XHJcbiAgICAgICAgICAgICAgICB0b29sVGlwPXt0b29sVGlwfSBhbHRUZXh0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAgICAgYWx0VGV4dFdpdGhBdHRhY2htZW50TmFtZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuYWx0VGV4dFdpdGhBdHRhY2htZW50TmFtZX1cclxuICAgICAgICAgICAgICAgIHRvb2xUaXBXaXRoQXR0YWNobWVudE5hbWU9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnRvb2xUaXBXaXRoQXR0YWNobWVudE5hbWV9XHJcbiAgICAgICAgICAgICAgICB1c2VGYWRlaW5cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZUdhbGxlcnk+fVxyXG4gICAgICAgICAgICAgIHshaXNEYXRhU291cmNlVXNlZCAmJiA8SW1hZ2VXaXRoUGFyYW1cclxuICAgICAgICAgICAgICAgIGltYWdlUGFyYW09e2ltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbX0gdG9vbFRpcD17dG9vbFRpcH0gYWx0VGV4dD17YWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHVzZUZhZGVpbiBzaXplPXtpc1VzZVN2Z1JlbmRlciA/IHsgd2lkdGg6IHRoaXMuc3RhdGUud2lkZ2V0V2lkdGgsIGhlaWdodDogdGhpcy5zdGF0ZS53aWRnZXRIZWlnaHQgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICBpbWFnZUZpbGxNb2RlPXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZUZpbGxNb2RlfSBpc0F1dG9IZWlnaHQ9e3RoaXMuaXNBdXRvSGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGU9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRGlzcGxheVF1YWxpdHlNb2RlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L0ltYWdlV2l0aFBhcmFtPn1cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuU3ltYm9sICYmXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwJz5cclxuICAgICAgICAgICAgICAgIHsoIXRoaXMuc3RhdGUuc3ltYm9sRWxlbWVudCB8fCAhaXNEYXRhU291cmNlVXNlZCkgJiYgPEltYWdlV2l0aFBhcmFtXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlUGFyYW09e2ltYWdlUGFyYW0gYXMgSW1hZ2VQYXJhbX0gdG9vbFRpcD17dG9vbFRpcH0gYWx0VGV4dD17YWx0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgdXNlRmFkZWluIHNpemU9e2lzVXNlU3ZnUmVuZGVyID8geyB3aWR0aDogdGhpcy5zdGF0ZS53aWRnZXRXaWR0aCwgaGVpZ2h0OiB0aGlzLnN0YXRlLndpZGdldEhlaWdodCB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VGaWxsTW9kZT17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VGaWxsTW9kZX0gaXNBdXRvSGVpZ2h0PXt0aGlzLmlzQXV0b0hlaWdodH1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VEaXNwbGF5UXVhbGl0eU1vZGU9e3RoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRGlzcGxheVF1YWxpdHlNb2RlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPC9JbWFnZVdpdGhQYXJhbT59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zeW1ib2xFbGVtZW50ICYmIGlzRGF0YVNvdXJjZVVzZWQgJiYgPGRpdiBjbGFzc05hbWU9J3ctMTAwIGgtMTAwIGltYWdlLXN5bWJvbCcgdGl0bGU9e3Rvb2xUaXB9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5zdGF0ZS5zeW1ib2xFbGVtZW50Lm91dGVySFRNTCB9fSAvPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtpc1VzZVN2Z1JlbmRlciAmJiA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQgb25SZXNpemU9e3RoaXMuZGVib3VuY2VPblJlc2l6ZX0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGxldCB0YXJnZXQ6IExpbmtUYXJnZXRcclxuICAgIGxldCBsaW5rVG86IExpbmtSZXN1bHRcclxuICAgIGNvbnN0IGxpbmtQYXJhbSA9IHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmxpbmtQYXJhbVxyXG4gICAgaWYgKGxpbmtQYXJhbSAmJiBsaW5rUGFyYW0ubGlua1R5cGUpIHtcclxuICAgICAgdGFyZ2V0ID0gbGlua1BhcmFtLm9wZW5UeXBlXHJcbiAgICAgIGxpbmtUbyA9IHtcclxuICAgICAgICBsaW5rVHlwZTogbGlua1BhcmFtLmxpbmtUeXBlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsaW5rUGFyYW0ubGlua1R5cGUgPT09IExpbmtUeXBlLldlYkFkZHJlc3MpIHtcclxuICAgICAgICBsaW5rVG8udmFsdWUgPSB0aGlzLnN0YXRlLmxpbmtVcmxcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaW5rVG8udmFsdWUgPSBsaW5rUGFyYW0udmFsdWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGxpbmtUbyAmJiBsaW5rVG8/LmxpbmtUeXBlICE9PSBMaW5rVHlwZS5Ob25lKSB7XHJcbiAgICAgIHJlbmRlclJlc3VsdCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LWltYWdlLWNvbnRhaW5lciBqaW11LXdpZGdldCc+XHJcbiAgICAgICAgICA8TGluayB0bz17bGlua1RvfSB0YXJnZXQ9e3RhcmdldH0gcXVlcnlPYmplY3Q9e3F1ZXJ5T2JqZWN0fT5cclxuICAgICAgICAgICAge2ltYWdlQ29udGVudH1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVuZGVyUmVzdWx0ID0gaW1hZ2VDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRmlsbE1vZGUgIT09IEltYWdlRmlsbE1vZGUuRml0ICYmIHRoaXMucHJvcHMuaXNJbmxpbmVFZGl0aW5nICYmIHNyYyAmJlxyXG4gICAgICAoIXRoaXMucHJvcHMucmVwZWF0ZWREYXRhU291cmNlIHx8ICh0aGlzLnByb3BzLnJlcGVhdGVkRGF0YVNvdXJjZSAmJiAodGhpcy5wcm9wcy5yZXBlYXRlZERhdGFTb3VyY2UgYXMgUmVwZWF0ZWREYXRhU291cmNlKS5yZWNvcmRJbmRleCA9PT0gMCkpKSB7XHJcbiAgICAgIC8vIG9wZW4gY3JvcCB0b29sXHJcbiAgICAgIGNvbnN0IFdpZGdldEluQnVpbGRlciA9IHRoaXMucHJvcHMuYnVpbGRlclN1cHBvcnRNb2R1bGVzLndpZGdldE1vZHVsZXMuV2lkZ2V0SW5CdWlsZGVyXHJcbiAgICAgIHJlbmRlclJlc3VsdCA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0namltdS13aWRnZXQnPlxyXG4gICAgICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0IG9uUmVzaXplPXt0aGlzLm9uQ3JvcFdpZGdldFJlc2l6ZX0gLz5cclxuICAgICAgICAgIHtyZW5kZXJSZXN1bHR9XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5jcm9wV2lkZ2V0SGVpZ2h0ICYmIHRoaXMuc3RhdGUuY3JvcFdpZGdldFdpZHRoICYmIDxXaWRnZXRJbkJ1aWxkZXJcclxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9IGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9IG9uVW5tb3VudD17KCkgPT4geyB0aGlzLmNsZWFyQ3JvcFdpZGdldFNpemUoKSB9fVxyXG4gICAgICAgICAgICB3aWRnZXRXaWR0aD17dGhpcy5zdGF0ZS5jcm9wV2lkZ2V0V2lkdGh9IHdpZGdldEhlaWdodD17dGhpcy5zdGF0ZS5jcm9wV2lkZ2V0SGVpZ2h0fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9XaWRnZXRJbkJ1aWxkZXI+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW5kZXJSZXN1bHQgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdqaW11LXdpZGdldCcgY3NzPXt0aGlzLmdldFN0eWxlKCl9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHsgdGhpcy5vbkNsaWNrKGV2ZW50IGFzIGFueSkgfX0gb25Ub3VjaEVuZD17KGV2ZW50KSA9PiB7IHRoaXMub25DbGljayhldmVudCBhcyBhbnkpIH19XHJcbiAgICAgICAgPntyZW5kZXJSZXN1bHR9XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRGF0YVNvdXJjZVVzZWQgJiYgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuaW1nU291cmNlVHlwZSA9PT0gSW1nU291cmNlVHlwZS5CeUR5bmFtaWNVcmwgJiZcclxuICAgICAgICAgICAgKCF0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSB8fCB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuRXhwcmVzc2lvbikgJiZcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5nZXRTcmNFeHByZXNzaW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU3JjRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpc0RhdGFTb3VyY2VVc2VkICYmIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8RXhwcmVzc2lvblJlc29sdmVyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfSBleHByZXNzaW9uPXt0aGlzLmdldEFsdFRleHRFeHByZXNzaW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWx0VGV4dEV4cFJlc29sdmVDaGFuZ2V9IHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxFeHByZXNzaW9uUmVzb2x2ZXJDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9IGV4cHJlc3Npb249e3RoaXMuZ2V0VG9vbFRpcEV4cHJlc3Npb24oKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Ub29sVGlwRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEV4cHJlc3Npb25SZXNvbHZlckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc30gZXhwcmVzc2lvbj17dGhpcy5zdGF0ZS5saW5rVXJsRXhwcmVzc2lvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25MaW5rVXJsRXhwUmVzb2x2ZUNoYW5nZX0gd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgLy8gVGhlIG9yaWdpbmFsIGxvZ2ljIGRldGVybWluZXMgd2hldGhlciB0aGUgQXR0YWNobWVudENvbXBvbmVudCBhbmQgU3ltYm9sQ29tcG9uZW50IHdlcmUgcmVuZGVyZWQgYnkgZHluYW1pY1VybFR5cGUsIHRoaXMgY2F1c2VzIGF0dGFjaG1lbnRJbmZvc1xyXG4gICAgICAgICAgICAvLyB0byByZW1haW4gdW5jaGFuZ2VkIHdoZW4gdGhlIGRhdGEgc291cmNlIGNoYW5nZXMgYW5kIHRoZSB0eXBlIGlzIHJlc2V0IHRvIGRlZmF1bHQsIGFuZCB0aGUgb25DaGFuZ2UgZXZlbnQgaXMgbm90IGV4ZWN1dGVkLiBXaGVuIGF0dGFjaG1lbnQgdHlwZVxyXG4gICAgICAgICAgICAvLyBpcyBzZWxlY3RlZCBhZ2FpbiwgaWYgdGhlIG5ldyBkYXRhIGlzIG51bGwsIHRoZW4gYXR0YWNobWVudEluZm9zIGRvZXMgbm90IGNoYW5nZSBpbnRlcm5hbGx5IChudWxsIC0+IG51bGwpLCBzbyBhdHRhY2htZW50SW5mb3MgZG9lcyBub3QgY2hhbmdlLlxyXG4gICAgICAgICAgICAvLyBOb3cgYWRkIHRoZSBtZXRob2QgdG8gcmVzZXQgdGhlIGNvcnJlc3BvbmRpbmcgc3RhdGUgd2hlbiB1bm1vdW50XHJcbiAgICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuQXR0YWNobWVudCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEF0dGFjaG1lbnRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e3RoaXMuc3RhdGUucmVjb3JkfSB1bm1vdW50QXR0YWNobWVudEluZm9zQ2hhbmdlPXt0aGlzLnVubW91bnRBdHRhY2htZW50SW5mb3NDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25BdHRhY2htZW50SW5mb3NDaGFuZ2V9IGF0dGFjaG1lbnRUeXBlcz17dGhpcy5hdHRhY2htZW50VHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaXNEYXRhU291cmNlVXNlZCAmJiB0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5keW5hbWljVXJsVHlwZSA9PT0gRHluYW1pY1VybFR5cGUuU3ltYm9sICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8U3ltYm9sQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkPXt0aGlzLnN0YXRlLnJlY29yZH0gdW5tb3VudFN5bWJvbEVsZW1lbnRDaGFuZ2U9e3RoaXMudW5tb3VudFN5bWJvbEVsZW1lbnRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TeW1ib2xFbGVtZW50Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGlzRGF0YVNvdXJjZVVzZWQgJiYgKHRoaXMucHJvcHMuY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmR5bmFtaWNVcmxUeXBlID09PSBEeW5hbWljVXJsVHlwZS5BdHRhY2htZW50IHx8XHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcuZHluYW1pY1VybFR5cGUgPT09IER5bmFtaWNVcmxUeXBlLlN5bWJvbCkgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxSZWNvcmRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZUZvck1haW5EYXRhQW5kVmlld1NlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IEltbXV0YWJsZShbdGhpcy5wcm9wcy5jb25maWcuZnVuY3Rpb25Db25maWcudXNlRGF0YVNvdXJjZUZvck1haW5EYXRhQW5kVmlld1NlbGVjdG9yIGFzIGFueV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IEltbXV0YWJsZShbXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZEZyb21SZXBlYXRlZERhdGFTb3VyY2VDb250ZXh0PXt0aGlzLnByb3BzLmNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pc1NlbGVjdGVkRnJvbVJlcGVhdGVkRGF0YVNvdXJjZUNvbnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZWNvcmRDaGFuZ2U9e3RoaXMuaGFuZGxlUmVjb3JkQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlclJlc3VsdFxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9