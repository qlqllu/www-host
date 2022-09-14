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

/***/ "./extensions/widgets/common/list/src/runtime/translations/default.ts":
/*!****************************************************************************!*\
  !*** ./extensions/widgets/common/list/src/runtime/translations/default.ts ***!
  \****************************************************************************/
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
    searchResult: 'Search result'
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************!*\
  !*** ./extensions/widgets/common/list/src/guide/guide.tsx ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_basic_guide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/basic/guide */ "jimu-ui/basic/guide");
/* harmony import */ var _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../runtime/translations/default */ "./extensions/widgets/common/list/src/runtime/translations/default.ts");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");




const { useState, useEffect, useMemo } = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React;
const MESSAGES = Object.assign({}, _runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"], jimu_ui__WEBPACK_IMPORTED_MODULE_3__.defaultMessages);
const WidgetGuide = (props) => {
    var _a;
    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState((_a = props.stepIndex) !== null && _a !== void 0 ? _a : 0);
    const stepsJson = useMemo(() => {
        var _a, _b;
        const stepsSrc = __webpack_require__(/*! ./steps.json */ "./extensions/widgets/common/list/src/guide/steps.json");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vbGlzdC9kaXN0L2d1aWRlL2d1aWRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixZQUFZLEVBQUUsTUFBTTtJQUNwQixrQkFBa0IsRUFBRSwwQ0FBMEM7SUFDOUQsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixxQkFBcUIsRUFBRSxTQUFTO0lBQ2hDLG1CQUFtQixFQUFFLE9BQU87SUFDNUIsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsbUJBQW1CO0lBQzVCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFlBQVksRUFBRSxlQUFlO0lBQzdCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGdCQUFnQixFQUFFLHVCQUF1QjtJQUN6QyxXQUFXLEVBQUUsY0FBYztJQUMzQixPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsaUNBQWlDO0lBQzlDLFFBQVEsRUFBRSxtQkFBbUI7SUFDN0IsY0FBYyxFQUFFLGdDQUFnQztJQUNoRCxZQUFZLEVBQUUsZUFBZTtJQUM3QixhQUFhLEVBQUUsZ0JBQWdCO0lBQy9CLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFFBQVEsRUFBRSxNQUFNO0lBRWhCLFFBQVE7SUFDUixlQUFlLEVBQUUsVUFBVTtJQUMzQixpQkFBaUIsRUFBRSxzQ0FBc0M7SUFDekQsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsNENBQTRDO0lBQy9ELGVBQWUsRUFBRSxjQUFjO0lBQy9CLGlCQUFpQixFQUFFLHlDQUF5QztJQUM1RCxlQUFlLEVBQUUsYUFBYTtJQUM5QixpQkFBaUIsRUFBRSx1RUFBdUU7SUFDMUYsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsb0hBQW9IO0lBQ3ZJLGVBQWUsRUFBRSxhQUFhO0lBQzlCLGlCQUFpQixFQUFFLDRKQUE0SjtJQUMvSyxlQUFlLEVBQUUsUUFBUTtJQUN6QixpQkFBaUIsRUFBRSw0UEFB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LE9BQU8sQ0FDTCwyREFBQyxzREFBSyxvQkFDQSxLQUFLLElBQ1QsR0FBRyxFQUFFLEdBQUcsRUFDUixTQUFTLEVBQUUsU0FBUyxFQUNwQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQWMsRUFDL0IsWUFBWSxFQUFFLFlBQVksRUFDMUIsYUFBYSxFQUFFLFdBQVcsSUFDMUIsQ0FDSDtBQUNILENBQUM7QUFFRCxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9jb21tb24vbGlzdC9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9iYXNpYy9ndWlkZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9saXN0L3NyYy9ndWlkZS9ndWlkZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0xpc3QnLFxyXG4gIF93aWRnZXREZXNjcmlwdGlvbjogJ0Egd2lkZ2V0IHRvIGRpc3BsYXkgZGF0YSBpbiBhIGxpc3Qgdmlldy4nLFxyXG4gIF9hY3Rpb25fZmlsdGVyX2xhYmVsOiAnRmlsdGVyJyxcclxuICBfbGF5b3V0X1JFR1VMQVJfbGFiZWw6ICdSZWd1bGFyJyxcclxuICBfbGF5b3V0X0hPVkVSX2xhYmVsOiAnSG92ZXInLFxyXG4gIF9sYXlvdXRfU0VMRUNURURfbGFiZWw6ICdTZWxlY3RlZCcsXHJcbiAgYXBwbHlUbzogJ0FwcGx5IHRvIHtzdGF0dXN9JyxcclxuICBsaXN0TG9hZGluZzogJ0xvYWRpbmcnLFxyXG4gIHBsZWFzZVNlbGVjdDogJ1BsZWFzZSBzZWxlY3QnLFxyXG4gIGxpc3ROb0RhdGE6ICdObyBkYXRhJyxcclxuICBzZWxlY3RTb3J0RmllbGRzOiAnU2VsZWN0IHNvcnRpbmcgZmllbGRzJyxcclxuICBjbGVhckZpbHRlcjogJ0NsZWFyIGZpbHRlcicsXHJcbiAgaXNvbGF0ZTogJ0lzb2xhdGUnLFxyXG4gIGxpbmtlZFRvQW5kOiAnTGlua2VkIHRvIHt3aGVyZTF9IGFuZCB7d2hlcmUyfScsXHJcbiAgbGlua2VkVG86ICdMaW5rZWQgdG8ge3doZXJlfScsXHJcbiAgcGxhY2VIb2xkZXJUaXA6ICdQbGVhc2Ugc2VsZWN0IGEgbGlzdCB0ZW1wbGF0ZS4nLFxyXG4gIHNob3dTZWxlY3RlZDogJ1Nob3cgc2VsZWN0ZWQnLFxyXG4gIGNsZWFyU2VsZWN0ZWQ6ICdDbGVhciBzZWxlY3RlZCcsXHJcbiAgbGlzdFNvcnRpbmc6ICdTb3J0aW5nJyxcclxuICBsaXN0U29ydDogJ1NvcnQnLFxyXG5cclxuICAvLyBndWlkZVxyXG4gIGd1aWRlU3RlcDJUaXRsZTogJ1RlbXBsYXRlJyxcclxuICBndWlkZVN0ZXAyQ29udGVudDogJ0NsaWNrIG9uIGEgdGVtcGxhdGUgYW5kIGNsaWNrIHN0YXJ0LicsXHJcbiAgZ3VpZGVTdGVwM1RpdGxlOiAnRGF0YScsXHJcbiAgZ3VpZGVTdGVwM0NvbnRlbnQ6ICdDbGljayBvbiBzZWxlY3QgZGF0YSB0byBhZGQgYSBkYXRhIHNvdXJjZS4nLFxyXG4gIGd1aWRlU3RlcDRUaXRsZTogJ0FkZCBuZXcgZGF0YScsXHJcbiAgZ3VpZGVTdGVwNENvbnRlbnQ6ICdDbGljayBhZGQgbmV3IGRhdGEgdG8gc2VsZWN0IGEgd2ViIG1hcC4nLFxyXG4gIGd1aWRlU3RlcDVUaXRsZTogJ1NlbGVjdCBkYXRhJyxcclxuICBndWlkZVN0ZXA1Q29udGVudDogJ0NsaWNrIHRoZSBmZWF0dXJlIGxheWVyIGluIHRoZSBzZWxlY3QgZGF0YSBwYW5lbCBhbmQgY2xvc2UgdGhlIHBhbmVsLicsXHJcbiAgZ3VpZGVTdGVwNlRpdGxlOiAnRGF0YScsXHJcbiAgZ3VpZGVTdGVwNkNvbnRlbnQ6ICdTcGVjaWZpZXMgdGhlIGRhdGEgc291cmNlLCBhbGxvd3MgeW91IHRvIGZpbHRlciB0aGUgZGF0YSBhbmQgbGltaXQgdGhlIG51bWJlciBvZiBmZWF0dXJlcyB0aGF0IGFwcGVhciBpbiB0aGUgbGlzdC4nLFxyXG4gIGd1aWRlU3RlcDdUaXRsZTogJ0FycmFuZ2VtZW50JyxcclxuICBndWlkZVN0ZXA3Q29udGVudDogJ0NsaWNrIHRoZSBleHBhbmQgaWNvbiB0byBleHBsb3JlIHRoZSBBcnJhbmdlbWVudCBzZWN0aW9uLiBJbiBoZXJlLCBpdCBhbGxvd3MgeW91IHRvIGRlZmluZSB0aGUgZGlyZWN0aW9uLCBoZWlnaHQsIHNwYWNpbmcsIGFuZCBwYWdpbmcgc3R5bGUgZm9yIHlvdXIgbGlzdC4nLFxyXG4gIGd1aWRlU3RlcDhUaXRsZTogJ1N0YXRlcycsXHJcbiAgZ3VpZGVTdGVwOENvbnRlbnQ6ICdDbGljayB0aGUgZXhwYW5kIGljb24gdG8gZXhwbG9yZSB0aGUgYXZhaWxhYmxlIFN0YXRlcy4gSW4gdGhpcyBzZWN0aW9uLCBpdCBwcm92aWRlcyBhIHZpc3VhbCByZXByZXNlbnRhdGlvbiB0byBjb21tdW5pY2F0ZSB0aGUgc3RhdGUgb2YgdGhlIGxpc3QgaXRlbXMuIFRoZXJlIGFyZSB0aHJlZSBzdGF0ZXM6IHJlZ3VsYXIsIHNlbGVjdGVkLCBhbmQgaG92ZXIuIEJ5IGRlZmF1bHQsIHRoZSBzZWxlY3RlZCBzdGF0ZSBpcyBhbHdheXMgb24uJyxcclxuICBndWlkZVN0ZXA5VGl0bGU6ICdUb29scycsXHJcbiAgZ3VpZGVTdGVwOUNvbnRlbnQ6ICdDbGljayB0aGUgZXhwYW5kIGljb24gdG8gZXhwbG9yZSB0aGUgYXZhaWxhYmxlIFRvb2xzLiBJbiBoZXJlLCB5b3UgY2FuIGluY2x1ZGUgc2VhcmNoLCBzb3J0LCBmaWx0ZXIsIGFuZCBzaG93IHNlbGVjdGVkIHRvb2xzIGluIHlvdXIgbGlzdC4nLFxyXG4gIGd1aWRlU3RlcDEwVGl0bGU6ICdTZWxlY3QgaW1hZ2UnLFxyXG4gIGd1aWRlU3RlcDEwQ29udGVudDogJ0NsaWNrIHRoZSBpbWFnZSB3aWRnZXQgdG8gY29uZmlndXJlIGl0IGluIHRoZSBjb250ZW50IHBhbmVsLicsXHJcbiAgZ3VpZGVTdGVwMTBUaXRsZTI6ICdJbWFnZSBzZXR0aW5ncycsXHJcbiAgZ3VpZGVTdGVwMTBDb250ZW50MjogJ0FsbG93cyB5b3UgdG8gc2VsZWN0IHRoZSBpbWFnZSBzb3VyY2UgYW5kIG90aGVyIHNldHRpbmdzIGZvciB5b3VyIHdpZGdldC4nLFxyXG4gIGd1aWRlU3RlcDExVGl0bGU6ICdTZWxlY3QgdGV4dCcsXHJcbiAgZ3VpZGVTdGVwMTFDb250ZW50OiAnQ2xpY2sgdGhlIHRleHQgd2lkZ2V0IHRvIGFkZCBhdHRyaWJ1dGVzIGluIHRoZSB3aWRnZXQgdG9vbGJhci4nLFxyXG4gIGd1aWRlU3RlcDExVGl0bGUyOiAnVGV4dCBzZXR0aW5ncycsXHJcbiAgZ3VpZGVTdGVwMTFDb250ZW50MjogJ1Byb3ZpZGVzIHRoZSBjb25maWd1cmF0aW9ucyBhbmQgc3R5bGUsIGluY2x1ZGluZyBhZGRpbmcgZHluYW1pYyBjb250ZW50IGZyb20gdGhlIHdpZGdldCB0b29sYmFyLiAnLFxyXG4gIGd1aWRlU3RlcDEyVGl0bGU6ICdFbmQgb2YgdG91cicsXHJcbiAgZ3VpZGVTdGVwMTJDb250ZW50OiAnQWRkIG90aGVyIHdpZGdldHMgdG8gZW5oYW5jZSB5b3VyIGV4cGVyaWVuY2UuJyxcclxuXHJcbiAgY2xlYXJTZWFyY2g6ICdDbGVhciBzZWFyY2gnLFxyXG4gIG1pbmltaXplOiAnTWluaW1pemUnLFxyXG4gIHRvcFRvb2xCYWNrOiAnQmFjaycsXHJcblxyXG4gIHNob3dBbGxMaXN0UmVjb3JkczogJ1Nob3cgYWxsIHJlY29yZHMnLFxyXG4gIGxpc3REYXRhQWN0aW9uTGFiZWw6ICd7bGF5ZXJ9IGxpc3Qgc2VsZWN0aW9uJyxcclxuICBzZWFyY2hSZXN1bHQ6ICdTZWFyY2ggcmVzdWx0J1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2d1aWRlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IHsgUmVhY3QsIHV0aWxzLCBpMThuLCBnZXRBcHBTdG9yZSwgYXBwQWN0aW9ucyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgR3VpZGUsIFN0ZXBzLCBFVkVOVFMsIEd1aWRlUHJvcHMgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2d1aWRlJ1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4uL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcbmltcG9ydCB7IGRlZmF1bHRNZXNzYWdlcyBhcyBqaW11VUlEZWZhdWx0TWVzc2FnZXMgfSBmcm9tICdqaW11LXVpJ1xyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSA9IFJlYWN0XHJcbmNvbnN0IE1FU1NBR0VTID0gT2JqZWN0LmFzc2lnbihcclxuICB7fSxcclxuICBkZWZhdWx0TWVzc2FnZXMsXHJcbiAgamltdVVJRGVmYXVsdE1lc3NhZ2VzXHJcbilcclxuXHJcbmNvbnN0IFdpZGdldEd1aWRlID0gKHByb3BzOiBHdWlkZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3J1biwgc2V0UnVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzdGVwSW5kZXgsIHNldFN0ZXBJbmRleF0gPSB1c2VTdGF0ZShwcm9wcy5zdGVwSW5kZXggPz8gMClcclxuXHJcbiAgY29uc3Qgc3RlcHNKc29uID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBzdGVwc1NyYyA9IHJlcXVpcmUoJy4vc3RlcHMuanNvbicpXHJcbiAgICBpZiAocHJvcHMud2lkZ2V0SnNvbj8ubWFuaWZlc3Q/Lm5hbWUgPT09ICdsaXN0Jykge1xyXG4gICAgICByZXR1cm4gdXRpbHMucmVwbGFjZUkxOG5QbGFjZWhvbGRlcnNJbk9iamVjdChzdGVwc1NyYywgaTE4bi5nZXRJbnRsKHByb3BzLndpZGdldEpzb24uaWQpLCBNRVNTQUdFUylcclxuICAgIH1cclxuICAgIHJldHVybiBzdGVwc1NyY1xyXG4gIH0sIFtwcm9wcy53aWRnZXRKc29uXSlcclxuXHJcbiAgY29uc3Qgb25TdGVwQ2xpY2sgPSAoZSwgc3RlcCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChpbmRleCA9PT0gMSkgeyAvLyB0ZW1wbGF0ZSBzdGVwXHJcbiAgICAgIGlmIChlPy50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tcHJpbWFyeScpKSB7XHJcbiAgICAgICAgc2V0U3RlcEluZGV4KGluZGV4ICsgMSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHsgLy8gb3RoZXIgc3RlcHNcclxuICAgICAgc2V0U3RlcEluZGV4KGluZGV4ICsgMSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3RlcENoYW5nZSA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7IG5leHRJbmRleCwgc3RlcCwgZXZlbnQgfSA9IGRhdGFcclxuICAgIGlmIChuZXh0SW5kZXggPT09IDEpIHtcclxuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChcclxuICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZSgncmlnaHQtc2lkZWJhcicsICdjb2xsYXBzZScsIHRydWUpXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSBpZiAoWzUsIDYsIDddLmluY2x1ZGVzKG5leHRJbmRleCkgJiYgZXZlbnQgPT09IEVWRU5UUy5TVEVQX0JFRk9SRSkge1xyXG4gICAgICBjb25zdCBzZXR0aW5nQ29udGFpbmVyRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmppbXUtd2lkZ2V0LWxpc3Qtc2V0dGluZycpXHJcbiAgICAgIGNvbnN0IHRhcmdldEVsbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RlcD8udGFyZ2V0KVxyXG4gICAgICBpZiAoc2V0dGluZ0NvbnRhaW5lckVsbSAmJiB0YXJnZXRFbG0pIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0YXJnZXRFbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gc2V0dGluZ0NvbnRhaW5lckVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcclxuICAgICAgICBzZXR0aW5nQ29udGFpbmVyRWxtPy5zY3JvbGxUbyh7IHRvcDogc2Nyb2xsVG9wID4gMCA/IHNjcm9sbFRvcCA6IDAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvcHM/Lm9uU3RlcENoYW5nZShkYXRhKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJ1bihwcm9wcy5ydW4pXHJcbiAgfSwgW3Byb3BzLnJ1bl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGVwSW5kZXgocHJvcHMuc3RlcEluZGV4KVxyXG4gIH0sIFtwcm9wcy5zdGVwSW5kZXhdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEd1aWRlXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgcnVuPXtydW59XHJcbiAgICAgIHN0ZXBJbmRleD17c3RlcEluZGV4fVxyXG4gICAgICBzdGVwcz17c3RlcHNKc29uLnN0ZXBzIGFzIFN0ZXBzfVxyXG4gICAgICBvblN0ZXBDaGFuZ2U9e29uU3RlcENoYW5nZX1cclxuICAgICAgb25BY3Rpb25DbGljaz17b25TdGVwQ2xpY2t9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0R3VpZGVcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9