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

/***/ "./your-extensions/widgets/list-112/src/runtime/translations/default.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/translations/default.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'List',
    _widgetDescription: 'A widget to display data in a list view.',
    _action_filter_label: 'Filter',
    _layout_REGULAR_label: 'Regular',
    _layout_HOVER_label: 'Hover',
    _layout_SELECTED_label: 'Selected',
    applyTo: 'Apply to {status}',
    listLoading: 'Loading',
    pleaseSelect: 'Please select',
    listNoData: 'No data',
    selectSortFields: 'Select sorting fields',
    clearFilter: 'Clear filter',
    isolate: 'Isolate',
    linkedToAnd: 'Linked to {where1} and {where2}',
    linkedTo: 'Linked to {where}',
    placeHolderTip: 'Please select a list template.',
    showSelected: 'Show selected',
    clearSelected: 'Clear selected',
    listSorting: 'Sorting',
    listSort: 'Sort',
    // guide
    guideStep2Title: 'Template',
    guideStep2Content: 'Click on a template and click start.',
    guideStep3Title: 'Data',
    guideStep3Content: 'Click on select data to add a data source.',
    guideStep4Title: 'Add new data',
    guideStep4Content: 'Click add new data to select a web map.',
    guideStep5Title: 'Select data',
    guideStep5Content: 'Click the feature layer in the select data panel and close the panel.',
    guideStep6Title: 'Data',
    guideStep6Content: 'Specifies the data source, allows you to filter the data and limit the number of features that appear in the list.',
    guideStep7Title: 'Arrangement',
    guideStep7Content: 'Click the expand icon to explore the Arrangement section. In here, it allows you to define the direction, height, spacing, and paging style for your list.',
    guideStep8Title: 'States',
    guideStep8Content: 'Click the expand icon to explore the available States. In this section, it provides a visual representation to communicate the state of the list items. There are three states: regular, selected, and hover. By default, the selected state is always on.',
    guideStep9Title: 'Tools',
    guideStep9Content: 'Click the expand icon to explore the available Tools. In here, you can include search, sort, filter, and show selected tools in your list.',
    guideStep10Title: 'Select image',
    guideStep10Content: 'Click the image widget to configure it in the content panel.',
    guideStep10Title2: 'Image settings',
    guideStep10Content2: 'Allows you to select the image source and other settings for your widget.',
    guideStep11Title: 'Select text',
    guideStep11Content: 'Click the text widget to add attributes in the widget toolbar.',
    guideStep11Title2: 'Text settings',
    guideStep11Content2: 'Provides the configurations and style, including adding dynamic content from the widget toolbar. ',
    guideStep12Title: 'End of tour',
    guideStep12Content: 'Add other widgets to enhance your experience.',
    clearSearch: 'Clear search',
    minimize: 'Minimize',
    topToolBack: 'Back',
    showAllListRecords: 'Show all records',
    listDataActionLabel: '{layer} list selection',
    searchResult: 'Search result',
    describeMessage: 'List item'
});


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

/***/ "./your-extensions/widgets/list-112/src/guide/steps.json":
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/guide/steps.json ***!
  \***************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/guide/guide.tsx ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/basic/guide */ "jimu-ui/basic/guide");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./your-extensions/widgets/list-112/src/runtime/translations/default.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




const { useState, useEffect, useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const MESSAGES = Object.assign({}, _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
const WidgetGuide = (props) => {
    var _a;
    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState((_a = props.stepIndex) !== null && _a !== void 0 ? _a : 0);
    const stepsJson = useMemo(() => {
        var _a, _b;
        const stepsSrc = __webpack_require__(/*! ./steps.json */ "./your-extensions/widgets/list-112/src/guide/steps.json");
        if (((_b = (_a = props.widgetJson) === null || _a === void 0 ? void 0 : _a.manifest) === null || _b === void 0 ? void 0 : _b.name) === 'list') {
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceI18nPlaceholdersInObject(stepsSrc, jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(props.widgetJson.id), MESSAGES);
        }
        return stepsSrc;
    }, [props.widgetJson]);
    const onStepClick = (e, step, index) => {
        if (index === 1) { // template step
            if (e === null || e === void 0 ? void 0 : e.target.classList.contains('btn-primary')) {
                setStepIndex(index + 1);
            }
        }
        else { // other steps
            setStepIndex(index + 1);
        }
    };
    const onStepChange = (data) => {
        const { nextIndex, step, event } = data;
        if (nextIndex === 1) {
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange('right-sidebar', 'collapse', true));
        }
        else if ([5, 6, 7].includes(nextIndex) && event === jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__.EVENTS.STEP_BEFORE) {
            const settingContainerElm = document.querySelector('.jimu-widget-list-setting');
            const targetElm = document.querySelector(step === null || step === void 0 ? void 0 : step.target);
            if (settingContainerElm && targetElm) {
                const scrollTop = targetElm.getBoundingClientRect().top - settingContainerElm.getBoundingClientRect().top;
                settingContainerElm === null || settingContainerElm === void 0 ? void 0 : settingContainerElm.scrollTo({ top: scrollTop > 0 ? scrollTop : 0 });
            }
        }
        props === null || props === void 0 ? void 0 : props.onStepChange(data);
    };
    useEffect(() => {
        setRun(props.run);
    }, [props.run]);
    useEffect(() => {
        setStepIndex(props.stepIndex);
    }, [props.stepIndex]);
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__.Guide, Object.assign({}, props, { run: run, stepIndex: stepIndex, steps: stepsJson.steps, onStepChange: onStepChange, onActionClick: onStepClick })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetGuide);

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLENBQUMsQ0FBQztJQUVyQixPQUFPLENBQ0wsMkRBQUMsc0RBQUssb0JBQ0EsS0FBSyxJQUNULEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFjLEVBQy9CLFlBQVksRUFBRSxZQUFZLEVBQzFCLGFBQWEsRUFBRSxXQUFXLElBQzFCLENBQ0g7QUFDSCxDQUFDO0FBRUQsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9ndWlkZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL2d1aWRlL2d1aWRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnTGlzdCcsXHJcbiAgX3dpZGdldERlc2NyaXB0aW9uOiAnQSB3aWRnZXQgdG8gZGlzcGxheSBkYXRhIGluIGEgbGlzdCB2aWV3LicsXHJcbiAgX2FjdGlvbl9maWx0ZXJfbGFiZWw6ICdGaWx0ZXInLFxyXG4gIF9sYXlvdXRfUkVHVUxBUl9sYWJlbDogJ1JlZ3VsYXInLFxyXG4gIF9sYXlvdXRfSE9WRVJfbGFiZWw6ICdIb3ZlcicsXHJcbiAgX2xheW91dF9TRUxFQ1RFRF9sYWJlbDogJ1NlbGVjdGVkJyxcclxuICBhcHBseVRvOiAnQXBwbHkgdG8ge3N0YXR1c30nLFxyXG4gIGxpc3RMb2FkaW5nOiAnTG9hZGluZycsXHJcbiAgcGxlYXNlU2VsZWN0OiAnUGxlYXNlIHNlbGVjdCcsXHJcbiAgbGlzdE5vRGF0YTogJ05vIGRhdGEnLFxyXG4gIHNlbGVjdFNvcnRGaWVsZHM6ICdTZWxlY3Qgc29ydGluZyBmaWVsZHMnLFxyXG4gIGNsZWFyRmlsdGVyOiAnQ2xlYXIgZmlsdGVyJyxcclxuICBpc29sYXRlOiAnSXNvbGF0ZScsXHJcbiAgbGlua2VkVG9BbmQ6ICdMaW5rZWQgdG8ge3doZXJlMX0gYW5kIHt3aGVyZTJ9JyxcclxuICBsaW5rZWRUbzogJ0xpbmtlZCB0byB7d2hlcmV9JyxcclxuICBwbGFjZUhvbGRlclRpcDogJ1BsZWFzZSBzZWxlY3QgYSBsaXN0IHRlbXBsYXRlLicsXHJcbiAgc2hvd1NlbGVjdGVkOiAnU2hvdyBzZWxlY3RlZCcsXHJcbiAgY2xlYXJTZWxlY3RlZDogJ0NsZWFyIHNlbGVjdGVkJyxcclxuICBsaXN0U29ydGluZzogJ1NvcnRpbmcnLFxyXG4gIGxpc3RTb3J0OiAnU29ydCcsXHJcblxyXG4gIC8vIGd1aWRlXHJcbiAgZ3VpZGVTdGVwMlRpdGxlOiAnVGVtcGxhdGUnLFxyXG4gIGd1aWRlU3RlcDJDb250ZW50OiAnQ2xpY2sgb24gYSB0ZW1wbGF0ZSBhbmQgY2xpY2sgc3RhcnQuJyxcclxuICBndWlkZVN0ZXAzVGl0bGU6ICdEYXRhJyxcclxuICBndWlkZVN0ZXAzQ29udGVudDogJ0NsaWNrIG9uIHNlbGVjdCBkYXRhIHRvIGFkZCBhIGRhdGEgc291cmNlLicsXHJcbiAgZ3VpZGVTdGVwNFRpdGxlOiAnQWRkIG5ldyBkYXRhJyxcclxuICBndWlkZVN0ZXA0Q29udGVudDogJ0NsaWNrIGFkZCBuZXcgZGF0YSB0byBzZWxlY3QgYSB3ZWIgbWFwLicsXHJcbiAgZ3VpZGVTdGVwNVRpdGxlOiAnU2VsZWN0IGRhdGEnLFxyXG4gIGd1aWRlU3RlcDVDb250ZW50OiAnQ2xpY2sgdGhlIGZlYXR1cmUgbGF5ZXIgaW4gdGhlIHNlbGVjdCBkYXRhIHBhbmVsIGFuZCBjbG9zZSB0aGUgcGFuZWwuJyxcclxuICBndWlkZVN0ZXA2VGl0bGU6ICdEYXRhJyxcclxuICBndWlkZVN0ZXA2Q29udGVudDogJ1NwZWNpZmllcyB0aGUgZGF0YSBzb3VyY2UsIGFsbG93cyB5b3UgdG8gZmlsdGVyIHRoZSBkYXRhIGFuZCBsaW1pdCB0aGUgbnVtYmVyIG9mIGZlYXR1cmVzIHRoYXQgYXBwZWFyIGluIHRoZSBsaXN0LicsXHJcbiAgZ3VpZGVTdGVwN1RpdGxlOiAnQXJyYW5nZW1lbnQnLFxyXG4gIGd1aWRlU3RlcDdDb250ZW50OiAnQ2xpY2sgdGhlIGV4cGFuZCBpY29uIHRvIGV4cGxvcmUgdGhlIEFycmFuZ2VtZW50IHNlY3Rpb24uIEluIGhlcmUsIGl0IGFsbG93cyB5b3UgdG8gZGVmaW5lIHRoZSBkaXJlY3Rpb24sIGhlaWdodCwgc3BhY2luZywgYW5kIHBhZ2luZyBzdHlsZSBmb3IgeW91ciBsaXN0LicsXHJcbiAgZ3VpZGVTdGVwOFRpdGxlOiAnU3RhdGVzJyxcclxuICBndWlkZVN0ZXA4Q29udGVudDogJ0NsaWNrIHRoZSBleHBhbmQgaWNvbiB0byBleHBsb3JlIHRoZSBhdmFpbGFibGUgU3RhdGVzLiBJbiB0aGlzIHNlY3Rpb24sIGl0IHByb3ZpZGVzIGEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIHRvIGNvbW11bmljYXRlIHRoZSBzdGF0ZSBvZiB0aGUgbGlzdCBpdGVtcy4gVGhlcmUgYXJlIHRocmVlIHN0YXRlczogcmVndWxhciwgc2VsZWN0ZWQsIGFuZCBob3Zlci4gQnkgZGVmYXVsdCwgdGhlIHNlbGVjdGVkIHN0YXRlIGlzIGFsd2F5cyBvbi4nLFxyXG4gIGd1aWRlU3RlcDlUaXRsZTogJ1Rvb2xzJyxcclxuICBndWlkZVN0ZXA5Q29udGVudDogJ0NsaWNrIHRoZSBleHBhbmQgaWNvbiB0byBleHBsb3JlIHRoZSBhdmFpbGFibGUgVG9vbHMuIEluIGhlcmUsIHlvdSBjYW4gaW5jbHVkZSBzZWFyY2gsIHNvcnQsIGZpbHRlciwgYW5kIHNob3cgc2VsZWN0ZWQgdG9vbHMgaW4geW91ciBsaXN0LicsXHJcbiAgZ3VpZGVTdGVwMTBUaXRsZTogJ1NlbGVjdCBpbWFnZScsXHJcbiAgZ3VpZGVTdGVwMTBDb250ZW50OiAnQ2xpY2sgdGhlIGltYWdlIHdpZGdldCB0byBjb25maWd1cmUgaXQgaW4gdGhlIGNvbnRlbnQgcGFuZWwuJyxcclxuICBndWlkZVN0ZXAxMFRpdGxlMjogJ0ltYWdlIHNldHRpbmdzJyxcclxuICBndWlkZVN0ZXAxMENvbnRlbnQyOiAnQWxsb3dzIHlvdSB0byBzZWxlY3QgdGhlIGltYWdlIHNvdXJjZSBhbmQgb3RoZXIgc2V0dGluZ3MgZm9yIHlvdXIgd2lkZ2V0LicsXHJcbiAgZ3VpZGVTdGVwMTFUaXRsZTogJ1NlbGVjdCB0ZXh0JyxcclxuICBndWlkZVN0ZXAxMUNvbnRlbnQ6ICdDbGljayB0aGUgdGV4dCB3aWRnZXQgdG8gYWRkIGF0dHJpYnV0ZXMgaW4gdGhlIHdpZGdldCB0b29sYmFyLicsXHJcbiAgZ3VpZGVTdGVwMTFUaXRsZTI6ICdUZXh0IHNldHRpbmdzJyxcclxuICBndWlkZVN0ZXAxMUNvbnRlbnQyOiAnUHJvdmlkZXMgdGhlIGNvbmZpZ3VyYXRpb25zIGFuZCBzdHlsZSwgaW5jbHVkaW5nIGFkZGluZyBkeW5hbWljIGNvbnRlbnQgZnJvbSB0aGUgd2lkZ2V0IHRvb2xiYXIuICcsXHJcbiAgZ3VpZGVTdGVwMTJUaXRsZTogJ0VuZCBvZiB0b3VyJyxcclxuICBndWlkZVN0ZXAxMkNvbnRlbnQ6ICdBZGQgb3RoZXIgd2lkZ2V0cyB0byBlbmhhbmNlIHlvdXIgZXhwZXJpZW5jZS4nLFxyXG5cclxuICBjbGVhclNlYXJjaDogJ0NsZWFyIHNlYXJjaCcsXHJcbiAgbWluaW1pemU6ICdNaW5pbWl6ZScsXHJcbiAgdG9wVG9vbEJhY2s6ICdCYWNrJyxcclxuXHJcbiAgc2hvd0FsbExpc3RSZWNvcmRzOiAnU2hvdyBhbGwgcmVjb3JkcycsXHJcbiAgbGlzdERhdGFBY3Rpb25MYWJlbDogJ3tsYXllcn0gbGlzdCBzZWxlY3Rpb24nLFxyXG4gIHNlYXJjaFJlc3VsdDogJ1NlYXJjaCByZXN1bHQnLFxyXG5cclxuICBkZXNjcmliZU1lc3NhZ2U6ICdMaXN0IGl0ZW0nXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYmFzaWNfZ3VpZGVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5pbXBvcnQgeyBSZWFjdCwgdXRpbHMsIGkxOG4sIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBHdWlkZSwgdHlwZSBTdGVwcywgRVZFTlRTLCB0eXBlIEd1aWRlUHJvcHMgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2d1aWRlJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSA9IFJlYWN0XHJcbmNvbnN0IE1FU1NBR0VTID0gT2JqZWN0LmFzc2lnbihcclxuICB7fSxcclxuICBkZWZhdWx0TWVzc2FnZXMsXHJcbiAgamltdVVJRGVmYXVsdE1lc3NhZ2VzXHJcbilcclxuXHJcbmNvbnN0IFdpZGdldEd1aWRlID0gKHByb3BzOiBHdWlkZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3J1biwgc2V0UnVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzdGVwSW5kZXgsIHNldFN0ZXBJbmRleF0gPSB1c2VTdGF0ZShwcm9wcy5zdGVwSW5kZXggPz8gMClcclxuXHJcbiAgY29uc3Qgc3RlcHNKc29uID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBzdGVwc1NyYyA9IHJlcXVpcmUoJy4vc3RlcHMuanNvbicpXHJcbiAgICBpZiAocHJvcHMud2lkZ2V0SnNvbj8ubWFuaWZlc3Q/Lm5hbWUgPT09ICdsaXN0Jykge1xyXG4gICAgICByZXR1cm4gdXRpbHMucmVwbGFjZUkxOG5QbGFjZWhvbGRlcnNJbk9iamVjdChzdGVwc1NyYywgaTE4bi5nZXRJbnRsKHByb3BzLndpZGdldEpzb24uaWQpLCBNRVNTQUdFUylcclxuICAgIH1cclxuICAgIHJldHVybiBzdGVwc1NyY1xyXG4gIH0sIFtwcm9wcy53aWRnZXRKc29uXSlcclxuXHJcbiAgY29uc3Qgb25TdGVwQ2xpY2sgPSAoZSwgc3RlcCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMSkgeyAvLyB0ZW1wbGF0ZSBzdGVwXHJcbiAgICAgIGlmIChlPy50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcHJpbWFyeScpKSB7XHJcbiAgICAgICAgc2V0U3RlcEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHsgLy8gb3RoZXIgc3RlcHNcclxuICAgICAgc2V0U3RlcEluZGV4KGluZGV4ICsgMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3RlcENoYW5nZSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IG5leHRJbmRleCwgc3RlcCwgZXZlbnQgfSA9IGRhdGFcclxuICAgIGlmIChuZXh0SW5kZXggPT09IDEpIHtcclxuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcclxuICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSgncmlnaHQtc2lkZWJhcicsICdjb2xsYXBzZScsIHRydWUpXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSBpZiAoWzUsIDYsIDddLmluY2x1ZGVzKG5leHRJbmRleCkgJiYgZXZlbnQgPT09IEVWRU5UUy5TVEVQX0JFRk9SRSkge1xyXG4gICAgICBjb25zdCBzZXR0aW5nQ29udGFpbmVyRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmppbXUtd2lkZ2V0LWxpc3Qtc2V0dGluZycpXHJcbiAgICAgIGNvbnN0IHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RlcD8udGFyZ2V0KVxyXG4gICAgICBpZiAoc2V0dGluZ0NvbnRhaW5lckVsbSAmJiB0YXJnZXRFbG0pIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0YXJnZXRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gc2V0dGluZ0NvbnRhaW5lckVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICBzZXR0aW5nQ29udGFpbmVyRWxtPy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsVG9wID4gMCA/IHNjcm9sbFRvcCA6IDAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvcHM/Lm9uU3RlcENoYW5nZShkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJ1bihwcm9wcy5ydW4pXHJcbiAgfSwgW3Byb3BzLnJ1bl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGVwSW5kZXgocHJvcHMuc3RlcEluZGV4KVxyXG4gIH0sIFtwcm9wcy5zdGVwSW5kZXhdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEd1aWRlXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgcnVuPXtydW59XHJcbiAgICAgIHN0ZXBJbmRleD17c3RlcEluZGV4fVxyXG4gICAgICBzdGVwcz17c3RlcHNKc29uLnN0ZXBzIGFzIFN0ZXBzfVxyXG4gICAgICBvblN0ZXBDaGFuZ2U9e29uU3RlcENoYW5nZX1cclxuICAgICAgb25BY3Rpb25DbGljaz17b25TdGVwQ2xpY2t9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0R3VpZGVcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9