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

/***/ "./jimu-icons/svg/outlined/editor/cut.svg":
/*!************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/cut.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#000\" fill-rule=\"evenodd\" d=\"M2 .5a.5.5 0 0 1 1 0V2h10.288L15.142.146a.5.5 0 1 1 .707.708L14 2.702V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14H2V3H.5a.5.5 0 0 1 0-1H2V.5ZM3 3v9.288L12.288 3H3Zm10 10H3.702L13 3.702V13Z\" clip-rule=\"evenodd\"></path></svg>"

/***/ }),

/***/ "./your-extensions/widgets/image-112/src/runtime/translations/default.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/runtime/translations/default.ts ***!
  \*******************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/image-112/src/tools/croptool.tsx ***!
  \******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CropTool)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _src_runtime_translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/runtime/translations/default */ "./your-extensions/widgets/image-112/src/runtime/translations/default.ts");
/* harmony import */ var jimu_icons_svg_outlined_editor_cut_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/svg/outlined/editor/cut.svg */ "./jimu-icons/svg/outlined/editor/cut.svg");
/* harmony import */ var jimu_icons_svg_outlined_editor_cut_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jimu_icons_svg_outlined_editor_cut_svg__WEBPACK_IMPORTED_MODULE_3__);




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
        return (jimu_icons_svg_outlined_editor_cut_svg__WEBPACK_IMPORTED_MODULE_3___default());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbWFnZS0xMTIvZGlzdC90b29scy9jcm9wdG9vbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtJQUNiLFlBQVksRUFBRSxPQUFPO0lBQ3JCLGdCQUFnQixFQUFFLE9BQU87SUFDekIsU0FBUyxFQUFFLE1BQU07Q0FDbEI7Ozs7Ozs7Ozs7OztBQ0pEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkk7QUFDcEc7QUFFNEI7QUFDSDtBQUVqRCxNQUFNLFFBQVE7SUFBN0I7UUFDRSxVQUFLLEdBQUcsQ0FBQztRQUNULE9BQUUsR0FBRyxnQkFBZ0I7UUFHckIsWUFBTyxHQUEwRCxFQUFFO1FBcUNuRSxrQkFBYSxHQUFHLENBQUMsTUFBYyxFQUFXLEVBQUU7WUFDMUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFO2dCQUN4SCxPQUFPLElBQUk7YUFDWjtpQkFBTTtnQkFDTCxPQUFPLEtBQUs7YUFDYjtRQUNILENBQUM7SUEyQkgsQ0FBQztJQXBFQyxVQUFVO1FBQ1IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUTtRQUM5QixNQUFNLElBQUksR0FBRyxtREFBWSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLG1GQUF3QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtJQUMxRyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sK0VBQVc7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBRSxLQUE2QjtRQUNwQyxNQUFNLFVBQVUsR0FBRyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN4RixNQUFNLFVBQVUsR0FBWTtZQUMxQixNQUFNLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNO1lBQy9CLE1BQU0sRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU07WUFDL0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQzVDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7WUFDN0IsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQzFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7U0FDbkI7UUFFWixzRUFBK0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7UUFFdkcsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBZ0I7WUFDaEQsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hGLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsK0VBQXdDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbEc7U0FDRjtJQUNILENBQUM7SUFVRCxPQUFPLENBQUUsS0FBNkI7UUFDcEMsTUFBTSxVQUFVLEdBQUcsc0RBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDeEYsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBZ0I7WUFDaEQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLEtBQUs7YUFDYjtZQUVELElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUU7Z0JBQzdDLHFEQUFxRDtnQkFDckQsT0FBTyxLQUFLO2FBQ2I7aUJBQU0sSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsYUFBYSxLQUFLLHNEQUFpQixDQUFDLEVBQUU7Z0JBQ3RILE9BQU8sS0FBSzthQUNiO2lCQUFNO2dCQUNMLGtDQUFrQztnQkFDbEMsT0FBTyxJQUFJO2FBQ1o7U0FDRjthQUFNO1lBQ0wsT0FBTyxLQUFLO1NBQ2I7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFFLEtBQTZCO1FBQzVDLE9BQU8sSUFBSTtJQUNiLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY3V0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW1hZ2UtMTEyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ltYWdlLTExMi9zcmMvdG9vbHMvY3JvcHRvb2wudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIj48cGF0aCBmaWxsPVxcXCIjMDAwXFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yIC41YS41LjUgMCAwIDEgMSAwVjJoMTAuMjg4TDE1LjE0Mi4xNDZhLjUuNSAwIDEgMSAuNzA3LjcwOEwxNCAyLjcwMlYxM2gxLjVhLjUuNSAwIDAgMSAwIDFIMTR2MS41YS41LjUgMCAwIDEtMSAwVjE0SDJWM0guNWEuNS41IDAgMCAxIDAtMUgyVi41Wk0zIDN2OS4yODhMMTIuMjg4IDNIM1ptMTAgMTBIMy43MDJMMTMgMy43MDJWMTNaXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdJbWFnZScsXHJcbiAgaW1hZ2VDaG9vc2VTaGFwZTogJ1NoYXBlJyxcclxuICBpbWFnZUNyb3A6ICdDcm9wJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0eXBlIGV4dGVuc2lvblNwZWMsIHR5cGUgUmVhY3QsIGdldEFwcFN0b3JlLCBhcHBBY3Rpb25zLCB0eXBlIExheW91dENvbnRleHRUb29sUHJvcHMsIGkxOG4sIE11dGFibGVTdG9yZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEltYWdlRmlsbE1vZGUgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgeyB0eXBlIENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlIGZyb20gJy4uLy4uL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5pbXBvcnQgQ3V0T3V0bGluZWQgZnJvbSAnamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2N1dC5zdmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcm9wVG9vbCBpbXBsZW1lbnRzIGV4dGVuc2lvblNwZWMuQ29udGV4dFRvb2xFeHRlbnNpb24ge1xyXG4gIGluZGV4ID0gMVxyXG4gIGlkID0gJ2ltYWdlLWNyb3B0b29sJ1xyXG4gIHdpZGdldElkOiBzdHJpbmdcclxuXHJcbiAgY2xhc3NlczogeyBbd2lkZ2V0SWQ6IHN0cmluZ106IFJlYWN0LkNvbXBvbmVudENsYXNzPHVua25vd24+IH0gPSB7fVxyXG5cclxuICBnZXRHcm91cElkICgpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSAoKSB7XHJcbiAgICBjb25zdCB3aWRnZXRJZCA9IHRoaXMud2lkZ2V0SWRcclxuICAgIGNvbnN0IGludGwgPSBpMThuLmdldEludGwod2lkZ2V0SWQpXHJcbiAgICByZXR1cm4gaW50bCA/IGludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiAnaW1hZ2VDcm9wJywgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlLmltYWdlQ3JvcCB9KSA6ICdDcm9wJ1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbiAoKSB7XHJcbiAgICByZXR1cm4gQ3V0T3V0bGluZWRcclxuICB9XHJcblxyXG4gIG9uQ2xpY2sgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKSB7XHJcbiAgICBjb25zdCB3aWRnZXRJbmZvID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy53aWRnZXRzW3Byb3BzLmxheW91dEl0ZW0ud2lkZ2V0SWRdXHJcbiAgICBjb25zdCBjbGllbnRSZWN0OiBET01SZWN0ID0ge1xyXG4gICAgICBib3R0b206IHByb3BzLmNsaWVudFJlY3QuYm90dG9tLFxyXG4gICAgICBoZWlnaHQ6IHByb3BzLmNsaWVudFJlY3QuaGVpZ2h0LFxyXG4gICAgICBsZWZ0OiB3aW5kb3cuc2Nyb2xsWCArIHByb3BzLmNsaWVudFJlY3QubGVmdCxcclxuICAgICAgcmlnaHQ6IHByb3BzLmNsaWVudFJlY3QucmlnaHQsXHJcbiAgICAgIHRvcDogd2luZG93LnNjcm9sbFkgKyBwcm9wcy5jbGllbnRSZWN0LnRvcCxcclxuICAgICAgd2lkdGg6IHByb3BzLmNsaWVudFJlY3Qud2lkdGhcclxuICAgIH0gYXMgRE9NUmVjdFxyXG5cclxuICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHByb3BzLmxheW91dEl0ZW0ud2lkZ2V0SWQsICdjbGllbnRSZWN0JywgY2xpZW50UmVjdClcclxuXHJcbiAgICBpZiAod2lkZ2V0SW5mbykge1xyXG4gICAgICBjb25zdCB3aWRnZXRDb25maWcgPSB3aWRnZXRJbmZvLmNvbmZpZyBhcyBDb25maWdcclxuICAgICAgaWYgKHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtICYmIHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLnVybCkge1xyXG4gICAgICAgIGdldEFwcFN0b3JlKCkuZGlzcGF0Y2goYXBwQWN0aW9ucy5zZXRXaWRnZXRJc0lubGluZUVkaXRpbmdTdGF0ZShwcm9wcy5sYXlvdXRJdGVtLndpZGdldElkLCB0cnVlKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNFbXB0eVNvdXJjZSA9IChjb25maWc6IENvbmZpZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKCghY29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0gfHwgIWNvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZVBhcmFtLnVybCkgJiYgIWNvbmZpZy5mdW5jdGlvbkNvbmZpZy5zcmNFeHByZXNzaW9uKSB7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpc2libGUgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKSB7XHJcbiAgICBjb25zdCB3aWRnZXRJbmZvID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcENvbmZpZy53aWRnZXRzW3Byb3BzLmxheW91dEl0ZW0ud2lkZ2V0SWRdXHJcbiAgICBpZiAod2lkZ2V0SW5mbykge1xyXG4gICAgICBjb25zdCB3aWRnZXRDb25maWcgPSB3aWRnZXRJbmZvLmNvbmZpZyBhcyBDb25maWdcclxuICAgICAgaWYgKHRoaXMuaXNFbXB0eVNvdXJjZSh3aWRnZXRDb25maWcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh3aWRnZXRDb25maWcuZnVuY3Rpb25Db25maWcuc3JjRXhwcmVzc2lvbikge1xyXG4gICAgICAgIC8vIHRoZSBkeW5hbWljIHNyYyBmcm9tIGV4cHJlc3Npb24gY2FuJ3Qgc3VwcG9ydCBjcm9wXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSBpZiAod2lkZ2V0Q29uZmlnLmZ1bmN0aW9uQ29uZmlnLmltYWdlUGFyYW0gJiYgKHdpZGdldENvbmZpZy5mdW5jdGlvbkNvbmZpZy5pbWFnZUZpbGxNb2RlID09PSBJbWFnZUZpbGxNb2RlLkZpdCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0aGUgc3RhdGljIHNyYyBjYW4gc3VwcG9ydCBjcm9wXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5nUGFuZWwgKHByb3BzOiBMYXlvdXRDb250ZXh0VG9vbFByb3BzKTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8dW5rbm93bj4ge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9