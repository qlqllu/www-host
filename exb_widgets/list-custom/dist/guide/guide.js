/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["jimu-core","jimu-ui/basic/guide","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_guide__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_guide__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_guide__[key] = module[key];
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
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/common/list/src/guide/guide.tsx":
/*!************************************************************!*\
  !*** ./extensions/widgets/common/list/src/guide/guide.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ \"jimu-core\");\n/* harmony import */ var jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/basic/guide */ \"jimu-ui/basic/guide\");\n/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ \"./extensions/widgets/common/list/src/runtime/translations/default.ts\");\n/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ \"jimu-ui\");\n\n\n\n\nconst { useState, useEffect, useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;\nconst MESSAGES = Object.assign({}, _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);\nconst WidgetGuide = (props) => {\n    var _a;\n    const [run, setRun] = useState(false);\n    const [stepIndex, setStepIndex] = useState((_a = props.stepIndex) !== null && _a !== void 0 ? _a : 0);\n    const stepsJson = useMemo(() => {\n        var _a, _b;\n        const stepsSrc = __webpack_require__(/*! ./steps.json */ \"./extensions/widgets/common/list/src/guide/steps.json\");\n        if (((_b = (_a = props.widgetJson) === null || _a === void 0 ? void 0 : _a.manifest) === null || _b === void 0 ? void 0 : _b.name) === 'list') {\n            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceI18nPlaceholdersInObject(stepsSrc, jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(props.widgetJson.id), MESSAGES);\n        }\n        return stepsSrc;\n    }, [props.widgetJson]);\n    const onStepClick = (e, step, index) => {\n        if (index === 1) { // template step\n            if (e === null || e === void 0 ? void 0 : e.target.classList.contains('btn-primary')) {\n                setStepIndex(index + 1);\n            }\n        }\n        else { // other steps\n            setStepIndex(index + 1);\n        }\n    };\n    const onStepChange = (data) => {\n        const { nextIndex, step, event } = data;\n        if (nextIndex === 1) {\n            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange('right-sidebar', 'collapse', true));\n        }\n        else if ([5, 6, 7].includes(nextIndex) && event === jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__.EVENTS.STEP_BEFORE) {\n            const settingContainerElm = document.querySelector('.jimu-widget-list-setting');\n            const targetElm = document.querySelector(step === null || step === void 0 ? void 0 : step.target);\n            if (settingContainerElm && targetElm) {\n                const scrollTop = targetElm.getBoundingClientRect().top - settingContainerElm.getBoundingClientRect().top;\n                settingContainerElm === null || settingContainerElm === void 0 ? void 0 : settingContainerElm.scrollTo({ top: scrollTop > 0 ? scrollTop : 0 });\n            }\n        }\n        props === null || props === void 0 ? void 0 : props.onStepChange(data);\n    };\n    useEffect(() => {\n        setRun(props.run);\n    }, [props.run]);\n    useEffect(() => {\n        setStepIndex(props.stepIndex);\n    }, [props.stepIndex]);\n    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__.Guide, Object.assign({}, props, { run: run, stepIndex: stepIndex, steps: stepsJson.steps, onStepChange: onStepChange, onActionClick: onStepClick })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetGuide);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2xpc3Qvc3JjL2d1aWRlL2d1aWRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2xpc3Qvc3JjL2d1aWRlL2d1aWRlLnRzeD9mYjY0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUmVhY3QsIHV0aWxzLCBpMThuLCBnZXRBcHBTdG9yZSwgYXBwQWN0aW9ucyB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IEd1aWRlLCBTdGVwcywgRVZFTlRTLCBHdWlkZVByb3BzIH0gZnJvbSAnamltdS11aS9iYXNpYy9ndWlkZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdCdcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gPSBSZWFjdFxuY29uc3QgTUVTU0FHRVMgPSBPYmplY3QuYXNzaWduKFxuICB7fSxcbiAgZGVmYXVsdE1lc3NhZ2VzLFxuICBqaW11VUlEZWZhdWx0TWVzc2FnZXNcbilcblxuY29uc3QgV2lkZ2V0R3VpZGUgPSAocHJvcHM6IEd1aWRlUHJvcHMpID0+IHtcbiAgY29uc3QgW3J1biwgc2V0UnVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RlcEluZGV4LCBzZXRTdGVwSW5kZXhdID0gdXNlU3RhdGUocHJvcHMuc3RlcEluZGV4ID8/IDApXG5cbiAgY29uc3Qgc3RlcHNKc29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc3RlcHNTcmMgPSByZXF1aXJlKCcuL3N0ZXBzLmpzb24nKVxuICAgIGlmIChwcm9wcy53aWRnZXRKc29uPy5tYW5pZmVzdD8ubmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gdXRpbHMucmVwbGFjZUkxOG5QbGFjZWhvbGRlcnNJbk9iamVjdChzdGVwc1NyYywgaTE4bi5nZXRJbnRsKHByb3BzLndpZGdldEpzb24uaWQpLCBNRVNTQUdFUylcbiAgICB9XG4gICAgcmV0dXJuIHN0ZXBzU3JjXG4gIH0sIFtwcm9wcy53aWRnZXRKc29uXSlcblxuICBjb25zdCBvblN0ZXBDbGljayA9IChlLCBzdGVwLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMSkgeyAvLyB0ZW1wbGF0ZSBzdGVwXG4gICAgICBpZiAoZT8udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLXByaW1hcnknKSkge1xuICAgICAgICBzZXRTdGVwSW5kZXgoaW5kZXggKyAxKVxuICAgICAgfVxuICAgIH0gZWxzZSB7IC8vIG90aGVyIHN0ZXBzXG4gICAgICBzZXRTdGVwSW5kZXgoaW5kZXggKyAxKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uU3RlcENoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBuZXh0SW5kZXgsIHN0ZXAsIGV2ZW50IH0gPSBkYXRhXG4gICAgaWYgKG5leHRJbmRleCA9PT0gMSkge1xuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcbiAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoJ3JpZ2h0LXNpZGViYXInLCAnY29sbGFwc2UnLCB0cnVlKVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoWzUsIDYsIDddLmluY2x1ZGVzKG5leHRJbmRleCkgJiYgZXZlbnQgPT09IEVWRU5UUy5TVEVQX0JFRk9SRSkge1xuICAgICAgY29uc3Qgc2V0dGluZ0NvbnRhaW5lckVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qaW11LXdpZGdldC1saXN0LXNldHRpbmcnKVxuICAgICAgY29uc3QgdGFyZ2V0RWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdGVwPy50YXJnZXQpXG4gICAgICBpZiAoc2V0dGluZ0NvbnRhaW5lckVsbSAmJiB0YXJnZXRFbG0pIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGFyZ2V0RWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHNldHRpbmdDb250YWluZXJFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgIHNldHRpbmdDb250YWluZXJFbG0/LnNjcm9sbFRvKHsgdG9wOiBzY3JvbGxUb3AgPiAwID8gc2Nyb2xsVG9wIDogMCB9KVxuICAgICAgfVxuICAgIH1cbiAgICBwcm9wcz8ub25TdGVwQ2hhbmdlKGRhdGEpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFJ1bihwcm9wcy5ydW4pXG4gIH0sIFtwcm9wcy5ydW5dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RlcEluZGV4KHByb3BzLnN0ZXBJbmRleClcbiAgfSwgW3Byb3BzLnN0ZXBJbmRleF0pXG5cbiAgcmV0dXJuIChcbiAgICA8R3VpZGVcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHJ1bj17cnVufVxuICAgICAgc3RlcEluZGV4PXtzdGVwSW5kZXh9XG4gICAgICBzdGVwcz17c3RlcHNKc29uLnN0ZXBzIGFzIFN0ZXBzfVxuICAgICAgb25TdGVwQ2hhbmdlPXtvblN0ZXBDaGFuZ2V9XG4gICAgICBvbkFjdGlvbkNsaWNrPXtvblN0ZXBDbGlja31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldEd1aWRlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./extensions/widgets/common/list/src/guide/guide.tsx\n");

/***/ }),

/***/ "./extensions/widgets/common/list/src/runtime/translations/default.ts":
/*!****************************************************************************!*\
  !*** ./extensions/widgets/common/list/src/runtime/translations/default.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    _widgetLabel: 'List',\n    _widgetDescription: 'A widget to display data in a list view.',\n    _action_filter_label: 'Filter',\n    _layout_REGULAR_label: 'Regular',\n    _layout_HOVER_label: 'Hover',\n    _layout_SELECTED_label: 'Selected',\n    applyTo: 'Apply to {status}',\n    listLoading: 'Loading',\n    pleaseSelect: 'Please select',\n    listNoData: 'No data',\n    selectSortFields: 'Select sorting fields',\n    clearFilter: 'Clear filter',\n    isolate: 'Isolate',\n    linkedToAnd: 'Linked to {where1} and {where2}',\n    linkedTo: 'Linked to {where}',\n    placeHolderTip: 'Please select a list template.',\n    showSelected: 'Show selected',\n    clearSelected: 'Clear selected',\n    listSorting: 'Sorting',\n    listSort: 'Sort',\n    // guide\n    guideStep2Title: 'Template',\n    guideStep2Content: 'Click on a template and click start.',\n    guideStep3Title: 'Data',\n    guideStep3Content: 'Click on select data to add a data source.',\n    guideStep4Title: 'Add new data',\n    guideStep4Content: 'Click add new data to select a web map.',\n    guideStep5Title: 'Select data',\n    guideStep5Content: 'Click the feature layer in the select data panel and close the panel.',\n    guideStep6Title: 'Data',\n    guideStep6Content: 'Specifies the data source, allows you to filter the data and limit the number of features that appear in the list.',\n    guideStep7Title: 'Arrangement',\n    guideStep7Content: 'Click the expand icon to explore the Arrangement section. In here, it allows you to define the direction, height, spacing, and paging style for your list.',\n    guideStep8Title: 'States',\n    guideStep8Content: 'Click the expand icon to explore the available States. In this section, it provides a visual representation to communicate the state of the list items. There are three states: regular, selected, and hover. By default, the selected state is always on.',\n    guideStep9Title: 'Tools',\n    guideStep9Content: 'Click the expand icon to explore the available Tools. In here, you can include search, sort, filter, and show selected tools in your list.',\n    guideStep10Title: 'Select image',\n    guideStep10Content: 'Click the image widget to configure it in the content panel.',\n    guideStep10Title2: 'Image settings',\n    guideStep10Content2: 'Allows you to select the image source and other settings for your widget.',\n    guideStep11Title: 'Select text',\n    guideStep11Content: 'Click the text widget to add attributes in the widget toolbar.',\n    guideStep11Title2: 'Text settings',\n    guideStep11Content2: 'Provides the configurations and style, including adding dynamic content from the widget toolbar. ',\n    guideStep12Title: 'End of tour',\n    guideStep12Content: 'Add other widgets to enhance your experience.',\n    clearSearch: 'Clear search',\n    minimize: 'Minimize',\n    topToolBack: 'Back',\n    showAllListRecords: 'Show all records',\n    listDataActionLabel: '{layer} list selection',\n    searchResult: 'Search result'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2xpc3Qvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vbGlzdC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cz84MDBmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnTGlzdCcsXG4gIF93aWRnZXREZXNjcmlwdGlvbjogJ0Egd2lkZ2V0IHRvIGRpc3BsYXkgZGF0YSBpbiBhIGxpc3Qgdmlldy4nLFxuICBfYWN0aW9uX2ZpbHRlcl9sYWJlbDogJ0ZpbHRlcicsXG4gIF9sYXlvdXRfUkVHVUxBUl9sYWJlbDogJ1JlZ3VsYXInLFxuICBfbGF5b3V0X0hPVkVSX2xhYmVsOiAnSG92ZXInLFxuICBfbGF5b3V0X1NFTEVDVEVEX2xhYmVsOiAnU2VsZWN0ZWQnLFxuICBhcHBseVRvOiAnQXBwbHkgdG8ge3N0YXR1c30nLFxuICBsaXN0TG9hZGluZzogJ0xvYWRpbmcnLFxuICBwbGVhc2VTZWxlY3Q6ICdQbGVhc2Ugc2VsZWN0JyxcbiAgbGlzdE5vRGF0YTogJ05vIGRhdGEnLFxuICBzZWxlY3RTb3J0RmllbGRzOiAnU2VsZWN0IHNvcnRpbmcgZmllbGRzJyxcbiAgY2xlYXJGaWx0ZXI6ICdDbGVhciBmaWx0ZXInLFxuICBpc29sYXRlOiAnSXNvbGF0ZScsXG4gIGxpbmtlZFRvQW5kOiAnTGlua2VkIHRvIHt3aGVyZTF9IGFuZCB7d2hlcmUyfScsXG4gIGxpbmtlZFRvOiAnTGlua2VkIHRvIHt3aGVyZX0nLFxuICBwbGFjZUhvbGRlclRpcDogJ1BsZWFzZSBzZWxlY3QgYSBsaXN0IHRlbXBsYXRlLicsXG4gIHNob3dTZWxlY3RlZDogJ1Nob3cgc2VsZWN0ZWQnLFxuICBjbGVhclNlbGVjdGVkOiAnQ2xlYXIgc2VsZWN0ZWQnLFxuICBsaXN0U29ydGluZzogJ1NvcnRpbmcnLFxuICBsaXN0U29ydDogJ1NvcnQnLFxuXG4gIC8vIGd1aWRlXG4gIGd1aWRlU3RlcDJUaXRsZTogJ1RlbXBsYXRlJyxcbiAgZ3VpZGVTdGVwMkNvbnRlbnQ6ICdDbGljayBvbiBhIHRlbXBsYXRlIGFuZCBjbGljayBzdGFydC4nLFxuICBndWlkZVN0ZXAzVGl0bGU6ICdEYXRhJyxcbiAgZ3VpZGVTdGVwM0NvbnRlbnQ6ICdDbGljayBvbiBzZWxlY3QgZGF0YSB0byBhZGQgYSBkYXRhIHNvdXJjZS4nLFxuICBndWlkZVN0ZXA0VGl0bGU6ICdBZGQgbmV3IGRhdGEnLFxuICBndWlkZVN0ZXA0Q29udGVudDogJ0NsaWNrIGFkZCBuZXcgZGF0YSB0byBzZWxlY3QgYSB3ZWIgbWFwLicsXG4gIGd1aWRlU3RlcDVUaXRsZTogJ1NlbGVjdCBkYXRhJyxcbiAgZ3VpZGVTdGVwNUNvbnRlbnQ6ICdDbGljayB0aGUgZmVhdHVyZSBsYXllciBpbiB0aGUgc2VsZWN0IGRhdGEgcGFuZWwgYW5kIGNsb3NlIHRoZSBwYW5lbC4nLFxuICBndWlkZVN0ZXA2VGl0bGU6ICdEYXRhJyxcbiAgZ3VpZGVTdGVwNkNvbnRlbnQ6ICdTcGVjaWZpZXMgdGhlIGRhdGEgc291cmNlLCBhbGxvd3MgeW91IHRvIGZpbHRlciB0aGUgZGF0YSBhbmQgbGltaXQgdGhlIG51bWJlciBvZiBmZWF0dXJlcyB0aGF0IGFwcGVhciBpbiB0aGUgbGlzdC4nLFxuICBndWlkZVN0ZXA3VGl0bGU6ICdBcnJhbmdlbWVudCcsXG4gIGd1aWRlU3RlcDdDb250ZW50OiAnQ2xpY2sgdGhlIGV4cGFuZCBpY29uIHRvIGV4cGxvcmUgdGhlIEFycmFuZ2VtZW50IHNlY3Rpb24uIEluIGhlcmUsIGl0IGFsbG93cyB5b3UgdG8gZGVmaW5lIHRoZSBkaXJlY3Rpb24sIGhlaWdodCwgc3BhY2luZywgYW5kIHBhZ2luZyBzdHlsZSBmb3IgeW91ciBsaXN0LicsXG4gIGd1aWRlU3RlcDhUaXRsZTogJ1N0YXRlcycsXG4gIGd1aWRlU3RlcDhDb250ZW50OiAnQ2xpY2sgdGhlIGV4cGFuZCBpY29uIHRvIGV4cGxvcmUgdGhlIGF2YWlsYWJsZSBTdGF0ZXMuIEluIHRoaXMgc2VjdGlvbiwgaXQgcHJvdmlkZXMgYSB2aXN1YWwgcmVwcmVzZW50YXRpb24gdG8gY29tbXVuaWNhdGUgdGhlIHN0YXRlIG9mIHRoZSBsaXN0IGl0ZW1zLiBUaGVyZSBhcmUgdGhyZWUgc3RhdGVzOiByZWd1bGFyLCBzZWxlY3RlZCwgYW5kIGhvdmVyLiBCeSBkZWZhdWx0LCB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgYWx3YXlzIG9uLicsXG4gIGd1aWRlU3RlcDlUaXRsZTogJ1Rvb2xzJyxcbiAgZ3VpZGVTdGVwOUNvbnRlbnQ6ICdDbGljayB0aGUgZXhwYW5kIGljb24gdG8gZXhwbG9yZSB0aGUgYXZhaWxhYmxlIFRvb2xzLiBJbiBoZXJlLCB5b3UgY2FuIGluY2x1ZGUgc2VhcmNoLCBzb3J0LCBmaWx0ZXIsIGFuZCBzaG93IHNlbGVjdGVkIHRvb2xzIGluIHlvdXIgbGlzdC4nLFxuICBndWlkZVN0ZXAxMFRpdGxlOiAnU2VsZWN0IGltYWdlJyxcbiAgZ3VpZGVTdGVwMTBDb250ZW50OiAnQ2xpY2sgdGhlIGltYWdlIHdpZGdldCB0byBjb25maWd1cmUgaXQgaW4gdGhlIGNvbnRlbnQgcGFuZWwuJyxcbiAgZ3VpZGVTdGVwMTBUaXRsZTI6ICdJbWFnZSBzZXR0aW5ncycsXG4gIGd1aWRlU3RlcDEwQ29udGVudDI6ICdBbGxvd3MgeW91IHRvIHNlbGVjdCB0aGUgaW1hZ2Ugc291cmNlIGFuZCBvdGhlciBzZXR0aW5ncyBmb3IgeW91ciB3aWRnZXQuJyxcbiAgZ3VpZGVTdGVwMTFUaXRsZTogJ1NlbGVjdCB0ZXh0JyxcbiAgZ3VpZGVTdGVwMTFDb250ZW50OiAnQ2xpY2sgdGhlIHRleHQgd2lkZ2V0IHRvIGFkZCBhdHRyaWJ1dGVzIGluIHRoZSB3aWRnZXQgdG9vbGJhci4nLFxuICBndWlkZVN0ZXAxMVRpdGxlMjogJ1RleHQgc2V0dGluZ3MnLFxuICBndWlkZVN0ZXAxMUNvbnRlbnQyOiAnUHJvdmlkZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGFuZCBzdHlsZSwgaW5jbHVkaW5nIGFkZGluZyBkeW5hbWljIGNvbnRlbnQgZnJvbSB0aGUgd2lkZ2V0IHRvb2xiYXIuICcsXG4gIGd1aWRlU3RlcDEyVGl0bGU6ICdFbmQgb2YgdG91cicsXG4gIGd1aWRlU3RlcDEyQ29udGVudDogJ0FkZCBvdGhlciB3aWRnZXRzIHRvIGVuaGFuY2UgeW91ciBleHBlcmllbmNlLicsXG5cbiAgY2xlYXJTZWFyY2g6ICdDbGVhciBzZWFyY2gnLFxuICBtaW5pbWl6ZTogJ01pbmltaXplJyxcbiAgdG9wVG9vbEJhY2s6ICdCYWNrJyxcblxuICBzaG93QWxsTGlzdFJlY29yZHM6ICdTaG93IGFsbCByZWNvcmRzJyxcbiAgbGlzdERhdGFBY3Rpb25MYWJlbDogJ3tsYXllcn0gbGlzdCBzZWxlY3Rpb24nLFxuICBzZWFyY2hSZXN1bHQ6ICdTZWFyY2ggcmVzdWx0J1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./extensions/widgets/common/list/src/runtime/translations/default.ts\n");

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

/***/ "jimu-ui/basic/guide":
/*!**************************************!*\
  !*** external "jimu-ui/basic/guide" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_guide__;

/***/ }),

/***/ "./extensions/widgets/common/list/src/guide/steps.json":
/*!*************************************************************!*\
  !*** ./extensions/widgets/common/list/src/guide/steps.json ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"steps":[{"injectedGuide":"insert-widget","widgetName":"list"},{"title":"${guideStep2Title}","content":{"text":"${guideStep2Content}"},"placement":"left","target":".jimu-widget-list-setting .jimu-widget-setting--section","spotlightClicks":true,"requiredAction":{"type":"click"}},{"injectedGuide":"ds-selection"},{"title":"${guideStep6Title}","content":"${guideStep6Content}","placement":"left","target":".list-list-setting .jimu-widget-setting--section"},{"title":"${guideStep7Title}","content":"${guideStep7Content}","placement":"left-end","target":".list-list-setting div:nth-child(2).jimu-widget-setting--section","spotlightClicks":true},{"title":"${states}","content":"${guideStep8Content}","placement":"left-end","target":".list-list-setting div:nth-child(3).jimu-widget-setting--section","spotlightClicks":true},{"title":"${guideStep9Title}","content":"${guideStep9Content}","placement":"left-end","target":".list-list-setting div:nth-child(4).jimu-widget-setting--section","spotlightClicks":true},{"title":"${guideStep10Title}","content":"${guideStep10Content}","placement":"bottom","target":".widget-list .list-group-item:first-child .widget-image","targetPrefix":"widgetId","targetInCanvas":true,"spotlightClicks":true},{"title":"${guideStep10Title2}","content":"${guideStep10Content2}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-content"},{"title":"${guideStep11Title}","content":"${guideStep11Content}","placement":"right","target":".widget-list .list-group-item:first-child .widget-text","targetPrefix":"widgetId","targetInCanvas":true,"spotlightClicks":true},{"title":"${guideStep11Title2}","content":"${guideStep11Content2}","placement":"left","target":"[data-widgetid=\'dynamic-setting\'] .widget-setting-tab:not([data-is-parent=\'true\'])  .tab-content"},{"title":"${guideStep12Title}","content":"${guideStep12Content}","placement":"center","target":"[data-widgetid=\'app-loader\']"}]}');

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
/******/ 	var __webpack_exports__ = __webpack_require__("./extensions/widgets/common/list/src/guide/guide.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});