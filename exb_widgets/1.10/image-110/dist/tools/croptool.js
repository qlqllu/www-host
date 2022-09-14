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

/***/ "./jimu-ui/lib/icons/tool-cut.svg":
/*!****************************************!*\
  !*** ./jimu-ui/lib/icons/tool-cut.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 3v9.288L12.288 3H3zm0-1h10.288L15.14.146a.5.5 0 1 1 .708.708L14 2.702V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14H2V3H.5a.5.5 0 0 1 0-1H2V.5a.5.5 0 0 1 1 0V2zm10 1.702L3.702 13H13V3.702z\"></path></svg>"

/***/ }),

/***/ "./extensions/widgets/common/image/src/runtime/translations/default.ts":
/*!*****************************************************************************!*\
  !*** ./extensions/widgets/common/image/src/runtime/translations/default.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Image',
    imageChooseShape: 'Shape',
    imageCrop: 'Crop'
});


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************************!*\
  !*** ./extensions/widgets/common/image/src/tools/croptool.tsx ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CropTool)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _src_runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/runtime/translations/default */ "./extensions/widgets/common/image/src/runtime/translations/default.ts");



class CropTool {
    constructor() {
        this.index = 1;
        this.id = 'image-croptool';
        this.classes = {};
        this.isEmptySource = (config) => {
            if ((!config.functionConfig.imageParam || !config.functionConfig.imageParam.url) && !config.functionConfig.srcExpression) {
                return true;
            }
            else {
                return false;
            }
        };
    }
    getGroupId() {
        return null;
    }
    getTitle() {
        const widgetId = this.widgetId;
        const intl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(widgetId);
        return intl ? intl.formatMessage({ id: 'imageCrop', defaultMessage: _src_runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].imageCrop }) : 'Crop';
    }
    getIcon() {
        return __webpack_require__(/*! jimu-ui/lib/icons/tool-cut.svg */ "./jimu-ui/lib/icons/tool-cut.svg");
    }
    onClick(props) {
        const widgetInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets[props.layoutItem.widgetId];
        const clientRect = {
            bottom: props.clientRect.bottom,
            height: props.clientRect.height,
            left: window.scrollX + props.clientRect.left,
            right: props.clientRect.right,
            top: window.scrollY + props.clientRect.top,
            width: props.clientRect.width
        };
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(props.layoutItem.widgetId, 'clientRect', clientRect);
        if (widgetInfo) {
            const widgetConfig = widgetInfo.config;
            if (widgetConfig.functionConfig.imageParam && widgetConfig.functionConfig.imageParam.url) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.setWidgetIsInlineEditingState(props.layoutItem.widgetId, true));
            }
        }
    }
    visible(props) {
        const widgetInfo = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appConfig.widgets[props.layoutItem.widgetId];
        if (widgetInfo) {
            const widgetConfig = widgetInfo.config;
            if (this.isEmptySource(widgetConfig)) {
                return false;
            }
            if (widgetConfig.functionConfig.srcExpression) {
                // the dynamic src from expression can't support crop
                return false;
            }
            else if (widgetConfig.functionConfig.imageParam && (widgetConfig.functionConfig.imageFillMode === jimu_ui__WEBPACK_IMPORTED_MODULE_1__.ImageFillMode.Fit)) {
                return false;
            }
            else {
                // the static src can support crop
                return true;
            }
        }
        else {
            return false;
        }
    }
    getSettingPanel(props) {
        return null;
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vaW1hZ2UvZGlzdC90b29scy9jcm9wdG9vbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxPQUFPO0lBQ3JCLGdCQUFnQixFQUFFLE9BQU87SUFDekIsU0FBUyxFQUFFLE1BQU07Q0FDbEI7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRIO0FBQ3JGO0FBRTRCO0FBRXBELE1BQU0sUUFBUTtJQUE3QjtRQUNFLFVBQUssR0FBRyxDQUFDO1FBQ1QsT0FBRSxHQUFHLGdCQUFnQjtRQUdyQixZQUFPLEdBQTBELEVBQUU7UUFxQ25FLGtCQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQVcsRUFBRTtZQUMxQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hILE9BQU8sSUFBSTthQUNaO2lCQUFNO2dCQUNMLE9BQU8sS0FBSzthQUNiO1FBQ0gsQ0FBQztJQTJCSCxDQUFDO0lBcEVDLFVBQVU7UUFDUixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzlCLE1BQU0sSUFBSSxHQUFHLG1EQUFZLENBQUMsUUFBUSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsbUZBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQzFHLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxtQkFBTyxDQUFDLHdFQUFnQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLENBQUUsS0FBNkI7UUFDcEMsTUFBTSxVQUFVLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEYsTUFBTSxVQUFVLEdBQVk7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUMvQixNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUM1QyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQzdCLEdBQUcsRUFBRSxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRztZQUMxQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1NBQ25CO1FBRVosc0VBQStCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDO1FBRXZHLElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQWdCO1lBQ2hELElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUN4RixzREFBVyxFQUFFLENBQUMsUUFBUSxDQUFDLCtFQUF3QyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xHO1NBQ0Y7SUFDSCxDQUFDO0lBVUQsT0FBTyxDQUFFLEtBQTZCO1FBQ3BDLE1BQU0sVUFBVSxHQUFHLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3hGLElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQWdCO1lBQ2hELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxLQUFLO2FBQ2I7WUFFRCxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO2dCQUM3QyxxREFBcUQ7Z0JBQ3JELE9BQU8sS0FBSzthQUNiO2lCQUFNLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGFBQWEsS0FBSyxzREFBaUIsQ0FBQyxFQUFFO2dCQUN0SCxPQUFPLEtBQUs7YUFDYjtpQkFBTTtnQkFDTCxrQ0FBa0M7Z0JBQ2xDLE9BQU8sSUFBSTthQUNaO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sS0FBSztTQUNiO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBRSxLQUE2QjtRQUM1QyxPQUFPLElBQUk7SUFDYixDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS11aS9saWIvaWNvbnMvdG9vbC1jdXQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2ltYWdlL3NyYy90b29scy9jcm9wdG9vbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0zIDN2OS4yODhMMTIuMjg4IDNIM3ptMC0xaDEwLjI4OEwxNS4xNC4xNDZhLjUuNSAwIDEgMSAuNzA4LjcwOEwxNCAyLjcwMlYxM2gxLjVhLjUuNSAwIDAgMSAwIDFIMTR2MS41YS41LjUgMCAwIDEtMSAwVjE0SDJWM0guNWEuNS41IDAgMCAxIDAtMUgyVi41YS41LjUgMCAwIDEgMSAwVjJ6bTEwIDEuNzAyTDMuNzAyIDEzSDEzVjMuNzAyelxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0ltYWdlJyxcclxuICBpbWFnZUNob29zZVNoYXBlOiAnU2hhcGUnLFxyXG4gIGltYWdlQ3JvcDogJ0Nyb3AnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBleHRlbnNpb25TcGVjLCBSZWFjdCwgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMsIExheW91dENvbnRleHRUb29sUHJvcHMsIGkxOG4sIE11dGFibGVTdG9yZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEltYWdlRmlsbE1vZGUgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZSBmcm9tICcuLi8uLi9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyb3BUb29sIGltcGxlbWVudHMgZXh0ZW5zaW9uU3BlYy5Db250ZXh0VG9vbEV4dGVuc2lvbiB7XHJcbiAgaW5kZXggPSAxXHJcbiAgaWQgPSAnaW1hZ2UtY3JvcHRvb2wnXHJcbiAgd2lkZ2V0SWQ6IHN0cmluZ1xyXG5cclxuICBjbGFzc2VzOiB7IFt3aWRnZXRJZDogc3RyaW5nXTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8dW5rbm93bj4gfSA9IHt9XHJcblxyXG4gIGdldEdyb3VwSWQgKCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGdldFRpdGxlICgpIHtcclxuICAgIGNvbnN0IHdpZGdldElkID0gdGhpcy53aWRnZXRJZFxyXG4gICAgY29uc3QgaW50bCA9IGkxOG4uZ2V0SW50bCh3aWRnZXRJZClcclxuICAgIHJldHVybiBpbnRsID8gaW50bC5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdpbWFnZUNyb3AnLCBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2UuaW1hZ2VDcm9wIH0pIDogJ0Nyb3AnXHJcbiAgfVxyXG5cclxuICBnZXRJY29uICgpIHtcclxuICAgIHJldHVybiByZXF1aXJlKCdqaW11LXVpL2xpYi9pY29ucy90b29sLWN1dC5zdmcnKVxyXG4gIH1cclxuXHJcbiAgb25DbGljayAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpIHtcclxuICAgIGNvbnN0IHdpZGdldEluZm8gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHNbcHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZF1cclxuICAgIGNvbnN0IGNsaWVudFJlY3Q6IERPTVJlY3QgPSB7XHJcbiAgICAgIGJvdHRvbTogcHJvcHMuY2xpZW50UmVjdC5ib3R0b20sXHJcbiAgICAgIGhlaWdodDogcHJvcHMuY2xpZW50UmVjdC5oZWlnaHQsXHJcbiAgICAgIGxlZnQ6IHdpbmRvdy5zY3JvbGxYICsgcHJvcHMuY2xpZW50UmVjdC5sZWZ0LFxyXG4gICAgICByaWdodDogcHJvcHMuY2xpZW50UmVjdC5yaWdodCxcclxuICAgICAgdG9wOiB3aW5kb3cuc2Nyb2xsWSArIHByb3BzLmNsaWVudFJlY3QudG9wLFxyXG4gICAgICB3aWR0aDogcHJvcHMuY2xpZW50UmVjdC53aWR0aFxyXG4gICAgfSBhcyBET01SZWN0XHJcblxyXG4gICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUocHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZCwgJ2NsaWVudFJlY3QnLCBjbGllbnRSZWN0KVxyXG5cclxuICAgIGlmICh3aWRnZXRJbmZvKSB7XHJcbiAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHdpZGdldEluZm8uY29uZmlnIGFzIENvbmZpZ1xyXG4gICAgICBpZiAod2lkZ2V0Q29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0gJiYgd2lkZ2V0Q29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0udXJsKSB7XHJcbiAgICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLnNldFdpZGdldElzSW5saW5lRWRpdGluZ1N0YXRlKHByb3BzLmxheW91dEl0ZW0ud2lkZ2V0SWQsIHRydWUpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0VtcHR5U291cmNlID0gKGNvbmZpZzogQ29uZmlnKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAoKCFjb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSB8fCAhY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0udXJsKSAmJiAhY29uZmlnLmZ1bmN0aW9uQ29uZmlnLnNyY0V4cHJlc3Npb24pIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmlzaWJsZSAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpIHtcclxuICAgIGNvbnN0IHdpZGdldEluZm8gPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwQ29uZmlnLndpZGdldHNbcHJvcHMubGF5b3V0SXRlbS53aWRnZXRJZF1cclxuICAgIGlmICh3aWRnZXRJbmZvKSB7XHJcbiAgICAgIGNvbnN0IHdpZGdldENvbmZpZyA9IHdpZGdldEluZm8uY29uZmlnIGFzIENvbmZpZ1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5U291cmNlKHdpZGdldENvbmZpZykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5zcmNFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgLy8gdGhlIGR5bmFtaWMgc3JjIGZyb20gZXhwcmVzc2lvbiBjYW4ndCBzdXBwb3J0IGNyb3BcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIGlmICh3aWRnZXRDb25maWcuZnVuY3Rpb25Db25maWcuaW1hZ2VQYXJhbSAmJiAod2lkZ2V0Q29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlRmlsbE1vZGUgPT09IEltYWdlRmlsbE1vZGUuRml0KSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRoZSBzdGF0aWMgc3JjIGNhbiBzdXBwb3J0IGNyb3BcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNldHRpbmdQYW5lbCAocHJvcHM6IExheW91dENvbnRleHRUb29sUHJvcHMpOiBSZWFjdC5Db21wb25lbnRDbGFzczx1bmtub3duPiB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=