System.register(["jimu-core","jimu-core/dnd","jimu-ui","jimu-for-builder","jimu-layouts/layout-runtime","jimu-layouts/layout-builder","jimu-theme"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core_dnd__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_builder__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_theme__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core_dnd__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_builder__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_theme__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core_dnd__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_builder__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_theme__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./extensions/widgets/common/list/src/common-builder-support.tsx":
/*!***********************************************************************!*\
  !*** ./extensions/widgets/common/list/src/common-builder-support.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleResizeCard": () => (/* binding */ handleResizeCard),
/* harmony export */   "selectSelf": () => (/* binding */ selectSelf)
/* harmony export */ });
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./extensions/widgets/common/list/src/config.ts");




function selectSelf(props, fromPage) {
    const { id, dispatch, browserSizeMode } = props;
    const appConfig = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)().appConfig;
    const layoutInfos = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getContentLayoutInfosInOneSizeMode(appConfig, id, jimu_core__WEBPACK_IMPORTED_MODULE_1__.LayoutItemType.Widget, browserSizeMode);
    if (layoutInfos) {
        if (layoutInfos.length > 1) {
            const widgetId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.getWidgetIdThatUseTheLayoutId(appConfig, layoutInfos[0].layoutId);
            if (widgetId) {
                const widgetJson = appConfig.widgets[widgetId];
                if (widgetJson &&
                    widgetJson.manifest &&
                    widgetJson.manifest.name &&
                    widgetJson.manifest.name === 'list') {
                    const currentStatus = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState[widgetJson.id] &&
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().widgetsState[widgetJson.id].builderStatus;
                    if (currentStatus) {
                        const currentLayoutId = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__.searchUtils.findLayoutId(widgetJson.layouts[currentStatus], browserSizeMode, appConfig.mainSizeMode);
                        const layoutInfo = layoutInfos.find(lInfo => lInfo.layoutId === currentLayoutId);
                        if (fromPage) {
                            dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.selectionChanged(layoutInfo));
                        }
                        else {
                            jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.builderAppSync.publishChangeSelectionToApp(layoutInfo);
                        }
                    }
                }
            }
        }
        else if (layoutInfos.length > 0) {
            if (fromPage) {
                dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_1__.appActions.selectionChanged(layoutInfos[0]));
            }
            else {
                jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.builderAppSync.publishChangeSelectionToApp(layoutInfos[0]);
            }
        }
    }
}
function handleResizeCard(props, newCardSize, widgetConfig, isTop = false, isLeft = false, isEnd = false, appConfig = undefined) {
    const { id, browserSizeMode } = props;
    if (!appConfig) {
        appConfig = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)().appConfig;
    }
    const action = (0,jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__.getAppConfigAction)(appConfig);
    action.editWidgetConfig(id, widgetConfig
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Regular, 'cardSize', browserSizeMode], newCardSize)
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Hover, 'cardSize', browserSizeMode], newCardSize)
        .setIn(['cardConfigs', _config__WEBPACK_IMPORTED_MODULE_3__.Status.Selected, 'cardSize', browserSizeMode], newCardSize));
    return action;
}
// export function handleResizeCardForStyleChange(id, config, appConfig: IMAppConfig = undefined): AppConfigAction{
//   const space = config.space;
//   const newCardSize = config.cardSize;
//   const layoutInfos = appConfigUtils.getContentLayoutInfosInOneSizeMode(appConfig, id, LayoutItemType.Widget, browserSizeMode);
//   let layoutInfo = undefined;
//   if(layoutInfos){
//     if(layoutInfos.length > 1){
//       const widgetId = appConfigUtils.getWidgetIdThatUseTheLayoutId(appConfig, layoutInfos[0].layoutId);
//       if(widgetId){
//         const widgetJson = appConfig.widgets[widgetId];
//         if(widgetJson && widgetJson.manifest && widgetJson.manifest.name && widgetJson.manifest.name === 'list'){
//           const currentStatus = getAppStore().getState().widgetsState && getAppStore().getState().widgetsState[widgetJson.id] &&
//                                   getAppStore().getState().widgetsState[widgetJson.id]['builderStatus'];
//           if(currentStatus){
//             const currentLayoutId = utils.findLayoutId(widgetJson.layouts[currentStatus], getAppStore().getState().browserSizeMode, appConfig.mainSizeMode);
//             layoutInfo = layoutInfos.find(lInfo => lInfo.layoutId === currentLayoutId);
//           }
//         }
//       }
//     }else if(layoutInfos.length > 0){
//       layoutInfo = layoutInfos[0];
//     }
//   }
//   if(!layoutInfo){
//     return;
//   }
//   const layoutItem = appConfig.layouts[layoutInfo.layoutId].content && appConfig.layouts[layoutInfo.layoutId].content[layoutInfo.layoutItemId];
//   if(!layoutItem)return;
//   const action = getAppConfigAction(appConfig);
//   if(layoutItem){
//     let bbox = Immutable(layoutItem.bbox || {});
//     if(config.direction === DirectionType.Vertical){
//       bbox = bbox.set('width', `${newCardSize.width + LIST_CARD_PADDING * 2}px`);
//       bbox = bbox.set('height', `${newCardSize.height * 2 + space * 2 + LIST_CARD_PADDING}px`);
//     }else{
//       bbox = bbox.set('width', `${newCardSize.width * 2 + space * 2  + LIST_CARD_PADDING}px`);
//       bbox = bbox.set('height', `${newCardSize.height + LIST_CARD_PADDING * 2}px`);
//     }
//     action.editLayoutItemBBox(layoutInfo, bbox)
//   }
//   return action;
// }
// function _getNumberFromStyle(style: string){
//   style = (style && style.toString()) || '';
//   const remIndex = style && style.toLowerCase().indexOf('rem');
//   const pxIndex = style && style.toLowerCase().indexOf('px');
//   if(remIndex > -1){
//     style = style.substr(0, remIndex);
//   }else if(pxIndex > -1){
//     style = style.substring(0, pxIndex);
//   }
//   return parseInt(style);
// }


/***/ }),

/***/ "./extensions/widgets/common/list/src/config.ts":
/*!******************************************************!*\
  !*** ./extensions/widgets/common/list/src/config.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignType": () => (/* binding */ AlignType),
/* harmony export */   "BOTTOM_TOOL_H": () => (/* binding */ BOTTOM_TOOL_H),
/* harmony export */   "BOTTOM_TOOL_TOP_PADDING": () => (/* binding */ BOTTOM_TOOL_TOP_PADDING),
/* harmony export */   "COMMON_PADDING": () => (/* binding */ COMMON_PADDING),
/* harmony export */   "DEFAULT_CARD_SIZE": () => (/* binding */ DEFAULT_CARD_SIZE),
/* harmony export */   "DEFAULT_SPACE": () => (/* binding */ DEFAULT_SPACE),
/* harmony export */   "DS_TOOL_BOTTOM_PADDING": () => (/* binding */ DS_TOOL_BOTTOM_PADDING),
/* harmony export */   "DS_TOOL_H": () => (/* binding */ DS_TOOL_H),
/* harmony export */   "DirectionType": () => (/* binding */ DirectionType),
/* harmony export */   "HoverType": () => (/* binding */ HoverType),
/* harmony export */   "ItemStyle": () => (/* binding */ ItemStyle),
/* harmony export */   "LIST_CARD_MIN_SIZE": () => (/* binding */ LIST_CARD_MIN_SIZE),
/* harmony export */   "LIST_CARD_PADDING": () => (/* binding */ LIST_CARD_PADDING),
/* harmony export */   "LIST_TOOL_MIN_SIZE_DATA_ACTION": () => (/* binding */ LIST_TOOL_MIN_SIZE_DATA_ACTION),
/* harmony export */   "LIST_TOOL_MIN_SIZE_NO_DATA_ACTION": () => (/* binding */ LIST_TOOL_MIN_SIZE_NO_DATA_ACTION),
/* harmony export */   "ListLayout": () => (/* binding */ ListLayout),
/* harmony export */   "ListLayoutType": () => (/* binding */ ListLayoutType),
/* harmony export */   "PageStyle": () => (/* binding */ PageStyle),
/* harmony export */   "PageTransitonType": () => (/* binding */ PageTransitonType),
/* harmony export */   "SelectedStyle": () => (/* binding */ SelectedStyle),
/* harmony export */   "SelectionModeType": () => (/* binding */ SelectionModeType),
/* harmony export */   "SettingCollapseType": () => (/* binding */ SettingCollapseType),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
const LIST_CARD_PADDING = 0;
const LIST_CARD_MIN_SIZE = 20;
const DS_TOOL_H = 42;
const BOTTOM_TOOL_H = 40;
const COMMON_PADDING = 0;
const DS_TOOL_BOTTOM_PADDING = 14;
const BOTTOM_TOOL_TOP_PADDING = 14;
const LIST_TOOL_MIN_SIZE_NO_DATA_ACTION = 175;
const LIST_TOOL_MIN_SIZE_DATA_ACTION = 220;
const DEFAULT_CARD_SIZE = 200;
const DEFAULT_SPACE = 10;
var SettingCollapseType;
(function (SettingCollapseType) {
    SettingCollapseType["None"] = "NONE";
    SettingCollapseType["Arrangement"] = "ARRANGEMENT";
    SettingCollapseType["States"] = "STATES";
    SettingCollapseType["Tools"] = "TOOLS";
})(SettingCollapseType || (SettingCollapseType = {}));
var ListLayout;
(function (ListLayout) {
    ListLayout["AUTO"] = "Auto";
    ListLayout["CUSTOM"] = "Custom";
})(ListLayout || (ListLayout = {}));
var SelectionModeType;
(function (SelectionModeType) {
    SelectionModeType["None"] = "NONE";
    SelectionModeType["Single"] = "SINGLE";
    SelectionModeType["Multiple"] = "MULTIPLE";
})(SelectionModeType || (SelectionModeType = {}));
var PageStyle;
(function (PageStyle) {
    PageStyle["Scroll"] = "SCROLL";
    PageStyle["MultiPage"] = "MULTIPAGE";
})(PageStyle || (PageStyle = {}));
var AlignType;
(function (AlignType) {
    AlignType["Start"] = "FLEX-START";
    AlignType["Center"] = "CENTER";
    AlignType["End"] = "FLEX-END";
})(AlignType || (AlignType = {}));
var DirectionType;
(function (DirectionType) {
    DirectionType["Horizon"] = "HORIZON";
    DirectionType["Vertical"] = "VERTICAL";
})(DirectionType || (DirectionType = {}));
var ListLayoutType;
(function (ListLayoutType) {
    ListLayoutType["Row"] = "ROW";
    ListLayoutType["Column"] = "COLUMN";
    ListLayoutType["GRID"] = "GRID";
})(ListLayoutType || (ListLayoutType = {}));
var PageTransitonType;
(function (PageTransitonType) {
    PageTransitonType["Glide"] = "GLIDE";
    PageTransitonType["Fade"] = "FADE";
    PageTransitonType["Float"] = "FLOAT";
})(PageTransitonType || (PageTransitonType = {}));
var HoverType;
(function (HoverType) {
    HoverType["Hover0"] = "HOVER0";
    HoverType["Hover1"] = "HOVER1";
    HoverType["Hover2"] = "HOVER2";
    HoverType["Hover3"] = "HOVER3";
})(HoverType || (HoverType = {}));
var SelectedStyle;
(function (SelectedStyle) {
    SelectedStyle["Style0"] = "STYLE0";
    SelectedStyle["Style1"] = "STYLE1";
    SelectedStyle["Style2"] = "STYLE2";
    SelectedStyle["Style3"] = "STYLE3";
})(SelectedStyle || (SelectedStyle = {}));
var ItemStyle;
(function (ItemStyle) {
    ItemStyle["Style0"] = "STYLE0";
    ItemStyle["Style1"] = "STYLE1";
    ItemStyle["Style2"] = "STYLE2";
    ItemStyle["Style3"] = "STYLE3";
    ItemStyle["Style4"] = "STYLE4";
    ItemStyle["Style5"] = "STYLE5";
    ItemStyle["Style6"] = "STYLE6";
    ItemStyle["Style7"] = "STYLE7";
    ItemStyle["Style8"] = "STYLE8";
    ItemStyle["Style9"] = "STYLE9";
})(ItemStyle || (ItemStyle = {}));
var Status;
(function (Status) {
    Status["Regular"] = "REGULAR";
    Status["Selected"] = "SELECTED";
    Status["Hover"] = "HOVER";
})(Status || (Status = {}));


/***/ }),

/***/ "./extensions/widgets/common/list/src/runtime/components/my-dropdown.tsx":
/*!*******************************************************************************!*\
  !*** ./extensions/widgets/common/list/src/runtime/components/my-dropdown.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDropDown)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/** @jsx jsx */


class MyDropDown extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.onDropDownToggle = evt => {
            evt.stopPropagation();
            const { isDropDownOpen, onDropDownOpenChange } = this.props;
            if (isDropDownOpen !== undefined) {
                onDropDownOpenChange && onDropDownOpenChange(!isDropDownOpen);
            }
            else {
                const { isOpen } = this.state;
                this.setState({ isOpen: !isOpen });
            }
        };
        this.onItemClick = (evt, item) => {
            const { isDropDownOpen, onDropDownOpenChange } = this.props;
            if (isDropDownOpen !== undefined) {
                onDropDownOpenChange && onDropDownOpenChange(false);
            }
            else {
                this.setState({ isOpen: false });
            }
            item.event(evt, item);
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.onDropDownMouseClick = evt => {
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
        };
        this.getStyle = () => {
            var _a, _b, _c, _d, _e, _f;
            const { theme } = this.props;
            return jimu_core__WEBPACK_IMPORTED_MODULE_0__.css `
      & button {
        padding: 0;
      }
      .list-toggle-button {
        background: ${(_c = (_b = (_a = theme.colors) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.light) === null || _c === void 0 ? void 0 : _c[500]};
        border: none;
        &:hover, &[aria-expanded="true"] {
          background: ${(_f = (_e = (_d = theme.colors) === null || _d === void 0 ? void 0 : _d.palette) === null || _e === void 0 ? void 0 : _e.light) === null || _f === void 0 ? void 0 : _f[800]};
        }
      }
    `;
        };
        this.state = {
            isOpen: false
        };
        const { withBuilderStyle } = props;
        this.MyDropdown = withBuilderStyle ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown) : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown;
        this.MyDropdownToggle = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownToggle;
        this.MyDropdownMenu = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu;
        this.MyDropdownItem = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem;
    }
    render() {
        const { items, toggleContent, caret, toggleType, menuContent, appMode, modifiers, toggleIsIcon, theme, isDropDownOpen, size, appendToBody, toggleTitle, direction, menuCss, className, showActive, activeLabel, fluid } = this.props;
        let { isOpen } = this.state;
        isOpen = isDropDownOpen === undefined ? isOpen : isDropDownOpen;
        const { MyDropdown, MyDropdownToggle, MyDropdownMenu, MyDropdownItem } = this;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdown, { size: size, toggle: this.onDropDownToggle, direction: direction, fluid: fluid, isOpen: isOpen && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design, className: `my-dropdown ${className}`, css: this.getStyle() },
            toggleContent && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownToggle, { icon: toggleIsIcon, title: toggleTitle, size: size, type: toggleType, caret: caret, className: 'list-toggle-button' }, toggleContent && toggleContent(theme))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownMenu, { appendToBody: appendToBody, modifiers: modifiers, css: menuCss && menuCss(theme) }, menuContent
                ? menuContent(theme)
                : items &&
                    items.asMutable().map((item, i) => {
                        return (!item.hide && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownItem, { key: i, className: 'no-user-select', title: item.label, active: showActive && item.label === activeLabel, onClick: evt => this.onItemClick(evt, item) }, item.label)));
                    }))));
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

/***/ "jimu-core/dnd":
/*!********************************!*\
  !*** external "jimu-core/dnd" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core_dnd__;

/***/ }),

/***/ "jimu-for-builder":
/*!***********************************!*\
  !*** external "jimu-for-builder" ***!
  \***********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder__;

/***/ }),

/***/ "jimu-layouts/layout-builder":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-builder" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_builder__;

/***/ }),

/***/ "jimu-layouts/layout-runtime":
/*!**********************************************!*\
  !*** external "jimu-layouts/layout-runtime" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_layouts_layout_runtime__;

/***/ }),

/***/ "jimu-theme":
/*!*****************************!*\
  !*** external "jimu-theme" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_theme__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************!*\
  !*** ./extensions/widgets/common/list/src/runtime/builder-support.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_core_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core/dnd */ "jimu-core/dnd");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _common_builder_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-builder-support */ "./extensions/widgets/common/list/src/common-builder-support.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_layouts_layout_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-layouts/layout-builder */ "jimu-layouts/layout-builder");
/* harmony import */ var _components_my_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-dropdown */ "./extensions/widgets/common/list/src/runtime/components/my-dropdown.tsx");
/* harmony import */ var jimu_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jimu-theme */ "jimu-theme");









const widgetModules = {
    ButtonGroup: jimu_ui__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup,
    interact: jimu_core_dnd__WEBPACK_IMPORTED_MODULE_1__.interact,
    searchUtils: jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__.searchUtils,
    getAppConfigAction: jimu_for_builder__WEBPACK_IMPORTED_MODULE_5__.getAppConfigAction,
    GLOBAL_DRAGGING_CLASS_NAME: jimu_layouts_layout_builder__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_DRAGGING_CLASS_NAME,
    GLOBAL_RESIZING_CLASS_NAME: jimu_layouts_layout_builder__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_RESIZING_CLASS_NAME,
    GLOBAL_H5_DRAGGING_CLASS_NAME: jimu_layouts_layout_builder__WEBPACK_IMPORTED_MODULE_6__.GLOBAL_H5_DRAGGING_CLASS_NAME,
    withBuilderStyle: jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderStyles,
    withBuilderTheme: jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderTheme,
    BuilderDropDown: (0,jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderTheme)((props) => {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_my_dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, { withBuilderStyle: jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderStyles }));
    }),
    BuilderPopper: (0,jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderTheme)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Popper),
    BuilderButton: (0,jimu_theme__WEBPACK_IMPORTED_MODULE_8__.withBuilderTheme)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button),
    handleResizeCard: (props, newCardSize, isTop = false, isLeft = false, isEnd = false, isReplace = false) => {
        const action = (0,_common_builder_support__WEBPACK_IMPORTED_MODULE_3__.handleResizeCard)(props, newCardSize, props.config, isTop, isLeft, isEnd);
        if (action) {
            action.exec(isReplace);
        }
    },
    selectSelf: props => {
        (0,_common_builder_support__WEBPACK_IMPORTED_MODULE_3__.selectSelf)(props, true);
    },
    selectionInList: (layoutInfo, id, appConfig, useCurrentSizeMode = true) => {
        if (!layoutInfo || !layoutInfo.layoutItemId || !layoutInfo.layoutId) {
            return false;
        }
        let layoutItems;
        if (useCurrentSizeMode) {
            layoutItems = jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, layoutInfo, id, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().browserSizeMode);
        }
        else {
            layoutItems = [];
            layoutItems.push(...jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, layoutInfo, id, jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Large));
            layoutItems.push(...jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, layoutInfo, id, jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Medium));
            layoutItems.push(...jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(appConfig, layoutInfo, id, jimu_core__WEBPACK_IMPORTED_MODULE_0__.BrowserSizeMode.Small));
        }
        return layoutItems.length > 0;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (widgetModules);

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jb21tb24vbGlzdC9kaXN0L3J1bnRpbWUvYnVpbGRlci1zdXBwb3J0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXlCO0FBQ3VEO0FBQ3ZCO0FBQ2Q7QUFFcEMsU0FBUyxVQUFVLENBQUUsS0FBSyxFQUFFLFFBQWtCO0lBQ25ELE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7SUFDL0MsTUFBTSxTQUFTLEdBQUcsb0VBQWtCLEVBQUUsQ0FBQyxTQUFTO0lBQ2hELE1BQU0sV0FBVyxHQUFHLHVHQUE4QyxDQUNoRSxTQUFTLEVBQ1QsRUFBRSxFQUNGLDREQUFxQixFQUNyQixlQUFlLENBQ2hCO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sUUFBUSxHQUFHLGtHQUF5QyxDQUN4RCxTQUFTLEVBQ1QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDeEI7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsSUFDRSxVQUFVO29CQUNWLFVBQVUsQ0FBQyxRQUFRO29CQUNuQixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDbkM7b0JBQ0EsTUFBTSxhQUFhLEdBQ2pCLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZO3dCQUNyQyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ3BELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMs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QUUsQ0FBQyxlQUFlLENBQ3pDO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxFQUFFO1lBQ2hCLFdBQVcsQ0FBQyxJQUFJLENBQ2QsR0FBRyw4R0FBcUQsQ0FDdEQsU0FBUyxFQUNULFVBQVUsRUFDVixFQUFFLEVBQ0YsNERBQXFCLENBQ3RCLENBQ0Y7WUFDRCxXQUFXLENBQUMsSUFBSSxDQUNkLEdBQUcsOEdBQXFELENBQ3RELFNBQVMsRUFDVCxVQUFVLEVBQ1YsRUFBRSxFQUNGLDZEQUFzQixDQUN2QixDQUNGO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FDZCxHQUFHLDhHQUFxRCxDQUN0RCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEVBQUUsRUFDRiw0REFBcUIsQ0FDdEIsQ0FDRjtTQUNGO1FBQ0QsT0FBTyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBRUQsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2xpc3Qvc3JjL2NvbW1vbi1idWlsZGVyLXN1cHBvcnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9leHRlbnNpb25zL3dpZGdldHMvY29tbW9uL2xpc3Qvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9saXN0L3NyYy9ydW50aW1lL2NvbXBvbmVudHMvbXktZHJvcGRvd24udHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvZG5kXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWZvci1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWxheW91dHMvbGF5b3V0LWJ1aWxkZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS10aGVtZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2NvbW1vbi9saXN0L3NyYy9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRBcHBDb25maWdBY3Rpb24sXHJcbiAgQXBwQ29uZmlnQWN0aW9uLFxyXG4gIGJ1aWxkZXJBcHBTeW5jXHJcbn0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgSU1BcHBDb25maWcsIExheW91dEl0ZW1UeXBlLCBnZXRBcHBTdG9yZSwgYXBwQWN0aW9ucyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgc2VhcmNoVXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXHJcbmltcG9ydCB7IFN0YXR1cywgSU1Db25maWcgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RTZWxmIChwcm9wcywgZnJvbVBhZ2U/OiBib29sZWFuKSB7XHJcbiAgY29uc3QgeyBpZCwgZGlzcGF0Y2gsIGJyb3dzZXJTaXplTW9kZSB9ID0gcHJvcHNcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWdBY3Rpb24oKS5hcHBDb25maWdcclxuICBjb25zdCBsYXlvdXRJbmZvcyA9IHNlYXJjaFV0aWxzLmdldENvbnRlbnRMYXlvdXRJbmZvc0luT25lU2l6ZU1vZGUoXHJcbiAgICBhcHBDb25maWcsXHJcbiAgICBpZCxcclxuICAgIExheW91dEl0ZW1UeXBlLldpZGdldCxcclxuICAgIGJyb3dzZXJTaXplTW9kZVxyXG4gIClcclxuICBpZiAobGF5b3V0SW5mb3MpIHtcclxuICAgIGlmIChsYXlvdXRJbmZvcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IHdpZGdldElkID0gc2VhcmNoVXRpbHMuZ2V0V2lkZ2V0SWRUaGF0VXNlVGhlTGF5b3V0SWQoXHJcbiAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgIGxheW91dEluZm9zWzBdLmxheW91dElkXHJcbiAgICAgIClcclxuICAgICAgaWYgKHdpZGdldElkKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZy53aWRnZXRzW3dpZGdldElkXVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHdpZGdldEpzb24gJiZcclxuICAgICAgICAgIHdpZGdldEpzb24ubWFuaWZlc3QgJiZcclxuICAgICAgICAgIHdpZGdldEpzb24ubWFuaWZlc3QubmFtZSAmJlxyXG4gICAgICAgICAgd2lkZ2V0SnNvbi5tYW5pZmVzdC5uYW1lID09PSAnbGlzdCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPVxyXG4gICAgICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlICYmXHJcbiAgICAgICAgICAgIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS53aWRnZXRzU3RhdGVbd2lkZ2V0SnNvbi5pZF0gJiZcclxuICAgICAgICAgICAgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZVt3aWRnZXRKc29uLmlkXS5idWlsZGVyU3RhdHVzXHJcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGF5b3V0SWQgPSBzZWFyY2hVdGlscy5maW5kTGF5b3V0SWQoXHJcbiAgICAgICAgICAgICAgd2lkZ2V0SnNvbi5sYXlvdXRzW2N1cnJlbnRTdGF0dXNdLFxyXG4gICAgICAgICAgICAgIGJyb3dzZXJTaXplTW9kZSxcclxuICAgICAgICAgICAgICBhcHBDb25maWcubWFpblNpemVNb2RlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgbGF5b3V0SW5mbyA9IGxheW91dEluZm9zLmZpbmQoXHJcbiAgICAgICAgICAgICAgbEluZm8gPT4gbEluZm8ubGF5b3V0SWQgPT09IGN1cnJlbnRMYXlvdXRJZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmIChmcm9tUGFnZSkge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuc2VsZWN0aW9uQ2hhbmdlZChsYXlvdXRJbmZvKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBidWlsZGVyQXBwU3luYy5wdWJsaXNoQ2hhbmdlU2VsZWN0aW9uVG9BcHAobGF5b3V0SW5mbylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsYXlvdXRJbmZvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChmcm9tUGFnZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuc2VsZWN0aW9uQ2hhbmdlZChsYXlvdXRJbmZvc1swXSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVNlbGVjdGlvblRvQXBwKGxheW91dEluZm9zWzBdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzaXplQ2FyZCAoXHJcbiAgcHJvcHMsXHJcbiAgbmV3Q2FyZFNpemUsXHJcbiAgd2lkZ2V0Q29uZmlnOiBJTUNvbmZpZyxcclxuICBpc1RvcDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGlzTGVmdDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGlzRW5kOiBib29sZWFuID0gZmFsc2UsXHJcbiAgYXBwQ29uZmlnOiBJTUFwcENvbmZpZyA9IHVuZGVmaW5lZFxyXG4pOiBBcHBDb25maWdBY3Rpb24ge1xyXG4gIGNvbnN0IHsgaWQsIGJyb3dzZXJTaXplTW9kZSB9ID0gcHJvcHNcclxuICBpZiAoIWFwcENvbmZpZykge1xyXG4gICAgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnQWN0aW9uKCkuYXBwQ29uZmlnXHJcbiAgfVxyXG4gIGNvbnN0IGFjdGlvbiA9IGdldEFwcENvbmZpZ0FjdGlvbihhcHBDb25maWcpXHJcblxyXG4gIGFjdGlvbi5lZGl0V2lkZ2V0Q29uZmlnKFxyXG4gICAgaWQsXHJcbiAgICB3aWRnZXRDb25maWdcclxuICAgICAgLnNldEluKFxyXG4gICAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuUmVndWxhciwgJ2NhcmRTaXplJywgYnJvd3NlclNpemVNb2RlXSxcclxuICAgICAgICBuZXdDYXJkU2l6ZVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRJbihcclxuICAgICAgICBbJ2NhcmRDb25maWdzJywgU3RhdHVzLkhvdmVyLCAnY2FyZFNpemUnLCBicm93c2VyU2l6ZU1vZGVdLFxyXG4gICAgICAgIG5ld0NhcmRTaXplXHJcbiAgICAgIClcclxuICAgICAgLnNldEluKFxyXG4gICAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuU2VsZWN0ZWQsICdjYXJkU2l6ZScsIGJyb3dzZXJTaXplTW9kZV0sXHJcbiAgICAgICAgbmV3Q2FyZFNpemVcclxuICAgICAgKVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGFjdGlvblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzaXplQ2FyZEZvclN0eWxlQ2hhbmdlKGlkLCBjb25maWcsIGFwcENvbmZpZzogSU1BcHBDb25maWcgPSB1bmRlZmluZWQpOiBBcHBDb25maWdBY3Rpb257XHJcbi8vICAgY29uc3Qgc3BhY2UgPSBjb25maWcuc3BhY2U7XHJcbi8vICAgY29uc3QgbmV3Q2FyZFNpemUgPSBjb25maWcuY2FyZFNpemU7XHJcbi8vICAgY29uc3QgbGF5b3V0SW5mb3MgPSBhcHBDb25maWdVdGlscy5nZXRDb250ZW50TGF5b3V0SW5mb3NJbk9uZVNpemVNb2RlKGFwcENvbmZpZywgaWQsIExheW91dEl0ZW1UeXBlLldpZGdldCwgYnJvd3NlclNpemVNb2RlKTtcclxuLy8gICBsZXQgbGF5b3V0SW5mbyA9IHVuZGVmaW5lZDtcclxuLy8gICBpZihsYXlvdXRJbmZvcyl7XHJcbi8vICAgICBpZihsYXlvdXRJbmZvcy5sZW5ndGggPiAxKXtcclxuLy8gICAgICAgY29uc3Qgd2lkZ2V0SWQgPSBhcHBDb25maWdVdGlscy5nZXRXaWRnZXRJZFRoYXRVc2VUaGVMYXlvdXRJZChhcHBDb25maWcsIGxheW91dEluZm9zWzBdLmxheW91dElkKTtcclxuLy8gICAgICAgaWYod2lkZ2V0SWQpe1xyXG4vLyAgICAgICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWcud2lkZ2V0c1t3aWRnZXRJZF07XHJcbi8vICAgICAgICAgaWYod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLm1hbmlmZXN0ICYmIHdpZGdldEpzb24ubWFuaWZlc3QubmFtZSAmJiB3aWRnZXRKc29uLm1hbmlmZXN0Lm5hbWUgPT09ICdsaXN0Jyl7XHJcbi8vICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZSAmJiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3dpZGdldEpzb24uaWRdICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3dpZGdldEpzb24uaWRdWydidWlsZGVyU3RhdHVzJ107XHJcbi8vICAgICAgICAgICBpZihjdXJyZW50U3RhdHVzKXtcclxuLy8gICAgICAgICAgICAgY29uc3QgY3VycmVudExheW91dElkID0gdXRpbHMuZmluZExheW91dElkKHdpZGdldEpzb24ubGF5b3V0c1tjdXJyZW50U3RhdHVzXSwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmJyb3dzZXJTaXplTW9kZSwgYXBwQ29uZmlnLm1haW5TaXplTW9kZSk7XHJcbi8vICAgICAgICAgICAgIGxheW91dEluZm8gPSBsYXlvdXRJbmZvcy5maW5kKGxJbmZvID0+IGxJbmZvLmxheW91dElkID09PSBjdXJyZW50TGF5b3V0SWQpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfWVsc2UgaWYobGF5b3V0SW5mb3MubGVuZ3RoID4gMCl7XHJcbi8vICAgICAgIGxheW91dEluZm8gPSBsYXlvdXRJbmZvc1swXTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgaWYoIWxheW91dEluZm8pe1xyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIH1cclxuLy8gICBjb25zdCBsYXlvdXRJdGVtID0gYXBwQ29uZmlnLmxheW91dHNbbGF5b3V0SW5mby5sYXlvdXRJZF0uY29udGVudCAmJiBhcHBDb25maWcubGF5b3V0c1tsYXlvdXRJbmZvLmxheW91dElkXS5jb250ZW50W2xheW91dEluZm8ubGF5b3V0SXRlbUlkXTtcclxuLy8gICBpZighbGF5b3V0SXRlbSlyZXR1cm47XHJcbi8vICAgY29uc3QgYWN0aW9uID0gZ2V0QXBwQ29uZmlnQWN0aW9uKGFwcENvbmZpZyk7XHJcbi8vICAgaWYobGF5b3V0SXRlbSl7XHJcbi8vICAgICBsZXQgYmJveCA9IEltbXV0YWJsZShsYXlvdXRJdGVtLmJib3ggfHwge30pO1xyXG5cclxuLy8gICAgIGlmKGNvbmZpZy5kaXJlY3Rpb24gPT09IERpcmVjdGlvblR5cGUuVmVydGljYWwpe1xyXG4vLyAgICAgICBiYm94ID0gYmJveC5zZXQoJ3dpZHRoJywgYCR7bmV3Q2FyZFNpemUud2lkdGggKyBMSVNUX0NBUkRfUEFERElORyAqIDJ9cHhgKTtcclxuLy8gICAgICAgYmJveCA9IGJib3guc2V0KCdoZWlnaHQnLCBgJHtuZXdDYXJkU2l6ZS5oZWlnaHQgKiAyICsgc3BhY2UgKiAyICsgTElTVF9DQVJEX1BBRERJTkd9cHhgKTtcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICBiYm94ID0gYmJveC5zZXQoJ3dpZHRoJywgYCR7bmV3Q2FyZFNpemUud2lkdGggKiAyICsgc3BhY2UgKiAyICArIExJU1RfQ0FSRF9QQURESU5HfXB4YCk7XHJcbi8vICAgICAgIGJib3ggPSBiYm94LnNldCgnaGVpZ2h0JywgYCR7bmV3Q2FyZFNpemUuaGVpZ2h0ICsgTElTVF9DQVJEX1BBRERJTkcgKiAyfXB4YCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBhY3Rpb24uZWRpdExheW91dEl0ZW1CQm94KGxheW91dEluZm8sIGJib3gpXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBhY3Rpb247XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIF9nZXROdW1iZXJGcm9tU3R5bGUoc3R5bGU6IHN0cmluZyl7XHJcbi8vICAgc3R5bGUgPSAoc3R5bGUgJiYgc3R5bGUudG9TdHJpbmcoKSkgfHwgJyc7XHJcbi8vICAgY29uc3QgcmVtSW5kZXggPSBzdHlsZSAmJiBzdHlsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3JlbScpO1xyXG4vLyAgIGNvbnN0IHB4SW5kZXggPSBzdHlsZSAmJiBzdHlsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3B4Jyk7XHJcbi8vICAgaWYocmVtSW5kZXggPiAtMSl7XHJcbi8vICAgICBzdHlsZSA9IHN0eWxlLnN1YnN0cigwLCByZW1JbmRleCk7XHJcbi8vICAgfWVsc2UgaWYocHhJbmRleCA+IC0xKXtcclxuLy8gICAgIHN0eWxlID0gc3R5bGUuc3Vic3RyaW5nKDAsIHB4SW5kZXgpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gcGFyc2VJbnQoc3R5bGUpO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IEltbXV0YWJsZU9iamVjdCB9IGZyb20gJ3NlYW1sZXNzLWltbXV0YWJsZSdcclxuaW1wb3J0IHtcclxuICBJbWFnZVByb3BzLFxyXG4gIEZpbGxUeXBlLFxyXG4gIEltYWdlUGFyYW0sXHJcbiAgQm9yZGVyU3R5bGUsXHJcbiAgRm91clNpZGVzVW5pdCxcclxuICBCb3hTaGFkb3dTdHlsZSxcclxuICBMaW5lYXJVbml0LFxyXG4gIFRleHRBbGlnblZhbHVlXHJcbn0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgU3FsRXhwcmVzc2lvbiB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBTb3J0U2V0dGluZ09wdGlvbixcclxuICBJTUxpbmtQYXJhbVxyXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5cclxuLy8gVE9ETzogbW92ZSB0byBjb3JlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ290b1Byb3BzIHtcclxuICB2aWV3czogc3RyaW5nW11cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvdG9BY3Rpb24ge1xyXG4gIGdvdG86IGdvdG9Qcm9wc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xyXG4gIHN1Z2dlc3Rpb25IdG1sOiBzdHJpbmcgfCBFbGVtZW50XHJcbiAgc3VnZ2VzdGlvbjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX0NBUkRfUEFERElORyA9IDBcclxuZXhwb3J0IGNvbnN0IExJU1RfQ0FSRF9NSU5fU0laRSA9IDIwXHJcbmV4cG9ydCBjb25zdCBEU19UT09MX0ggPSA0MlxyXG5leHBvcnQgY29uc3QgQk9UVE9NX1RPT0xfSCA9IDQwXHJcbmV4cG9ydCBjb25zdCBDT01NT05fUEFERElORyA9IDBcclxuZXhwb3J0IGNvbnN0IERTX1RPT0xfQk9UVE9NX1BBRERJTkcgPSAxNFxyXG5leHBvcnQgY29uc3QgQk9UVE9NX1RPT0xfVE9QX1BBRERJTkcgPSAxNFxyXG5leHBvcnQgY29uc3QgTElTVF9UT09MX01JTl9TSVpFX05PX0RBVEFfQUNUSU9OID0gMTc1XHJcbmV4cG9ydCBjb25zdCBMSVNUX1RPT0xfTUlOX1NJWkVfREFUQV9BQ1RJT04gPSAyMjBcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FSRF9TSVpFID0gMjAwXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NQQUNFID0gMTBcclxuXHJcbmV4cG9ydCBlbnVtIFNldHRpbmdDb2xsYXBzZVR5cGUge1xyXG4gIE5vbmUgPSAnTk9ORScsXHJcbiAgQXJyYW5nZW1lbnQgPSAnQVJSQU5HRU1FTlQnLFxyXG4gIFN0YXRlcyA9ICdTVEFURVMnLFxyXG4gIFRvb2xzID0gJ1RPT0xTJ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2lkZ2V0SGVhZGVyVGl0bGUge1xyXG4gIHRleHQ6IHN0cmluZ1xyXG4gIC8vIEFkZCBjb2xvciwgc2l6ZSwgYWxpZ25tZW50LCBldGMuXHJcbiAgLy8gQWRkIGFuIG9wdGlvbiB0byBiaW5kIHRleHQgdG8gYSBmaWVsZFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpZGdldEhlYWRlciB7XHJcbiAgdGl0bGU6IEltbXV0YWJsZU9iamVjdDxXaWRnZXRIZWFkZXJUaXRsZT5cclxuICAvLyBUT0RPOlxyXG4gIC8vIEFkZCBcImFjdGlvblwiIHN1Y2ggYXMgZmlsdGVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdERpdlNpemUge1xyXG4gIGNsaWVudFdpZHRoOiBudW1iZXJcclxuICBjbGllbnRIZWlnaHQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgV2lkZ2V0U3R5bGUge1xyXG4gIGlkOiBzdHJpbmdcclxufVxyXG4vLyBFTkQ6IFRPRE9cclxuXHJcbmludGVyZmFjZSBMaXN0SXRlbUNvbXBvbmVudCB7XHJcbiAgZmllbGQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RJdGVtVGl0bGVDb21wb25lbnQgZXh0ZW5kcyBMaXN0SXRlbUNvbXBvbmVudCB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RJdGVtRGVzY3JpcHRpb25Db21wb25lbnQgZXh0ZW5kcyBMaXN0SXRlbUNvbXBvbmVudCB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RJdGVtU2VsZWN0aW9uTW9kZUNvbXBvbmVudCBleHRlbmRzIExpc3RJdGVtQ29tcG9uZW50IHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlzdEl0ZW1JbWFnZUNvbXBvbmVudCBleHRlbmRzIExpc3RJdGVtQ29tcG9uZW50LCBJbWFnZVByb3BzIHt9XHJcblxyXG5leHBvcnQgZW51bSBMaXN0TGF5b3V0IHtcclxuICBBVVRPID0gJ0F1dG8nLFxyXG4gIENVU1RPTSA9ICdDdXN0b20nXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNlbGVjdGlvbk1vZGVUeXBlIHtcclxuICBOb25lID0gJ05PTkUnLFxyXG4gIFNpbmdsZSA9ICdTSU5HTEUnLFxyXG4gIE11bHRpcGxlID0gJ01VTFRJUExFJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYWdlU3R5bGUge1xyXG4gIFNjcm9sbCA9ICdTQ1JPTEwnLFxyXG4gIE11bHRpUGFnZSA9ICdNVUxUSVBBR0UnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFsaWduVHlwZSB7XHJcbiAgU3RhcnQgPSAnRkxFWC1TVEFSVCcsXHJcbiAgQ2VudGVyID0gJ0NFTlRFUicsXHJcbiAgRW5kID0gJ0ZMRVgtRU5EJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb25UeXBlIHtcclxuICBIb3Jpem9uID0gJ0hPUklaT04nLFxyXG4gIFZlcnRpY2FsID0gJ1ZFUlRJQ0FMJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBMaXN0TGF5b3V0VHlwZSB7XHJcbiAgUm93ID0gJ1JPVycsXHJcbiAgQ29sdW1uID0gJ0NPTFVNTicsXHJcbiAgR1JJRCA9ICdHUklEJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBQYWdlVHJhbnNpdG9uVHlwZSB7XHJcbiAgR2xpZGUgPSAnR0xJREUnLFxyXG4gIEZhZGUgPSAnRkFERScsXHJcbiAgRmxvYXQgPSAnRkxPQVQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEhvdmVyVHlwZSB7XHJcbiAgSG92ZXIwID0gJ0hPVkVSMCcsXHJcbiAgSG92ZXIxID0gJ0hPVkVSMScsXHJcbiAgSG92ZXIyID0gJ0hPVkVSMicsXHJcbiAgSG92ZXIzID0gJ0hPVkVSMydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2VsZWN0ZWRTdHlsZSB7XHJcbiAgU3R5bGUwID0gJ1NUWUxFMCcsXHJcbiAgU3R5bGUxID0gJ1NUWUxFMScsXHJcbiAgU3R5bGUyID0gJ1NUWUxFMicsXHJcbiAgU3R5bGUzID0gJ1NUWUxFMydcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSXRlbVN0eWxlIHtcclxuICBTdHlsZTAgPSAnU1RZTEUwJyxcclxuICBTdHlsZTEgPSAnU1RZTEUxJyxcclxuICBTdHlsZTIgPSAnU1RZTEUyJyxcclxuICBTdHlsZTMgPSAnU1RZTEUzJyxcclxuICBTdHlsZTQgPSAnU1RZTEU0JyxcclxuICBTdHlsZTUgPSAnU1RZTEU1JyxcclxuICBTdHlsZTYgPSAnU1RZTEU2JyxcclxuICBTdHlsZTcgPSAnU1RZTEU3JyxcclxuICBTdHlsZTggPSAnU1RZTEU4JyxcclxuICBTdHlsZTkgPSAnU1RZTEU5J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTdGF0dXMge1xyXG4gIFJlZ3VsYXIgPSAnUkVHVUxBUicsXHJcbiAgU2VsZWN0ZWQgPSAnU0VMRUNURUQnLFxyXG4gIEhvdmVyID0gJ0hPVkVSJ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRTaXplIHtcclxuICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xyXG4gIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbGVtZW50U2l6ZSB7XHJcbiAgaGVpZ2h0OiBudW1iZXJcclxuICB3aWR0aDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFNpemVVbml0IHtcclxuICBoZWlnaHQ6IExpbmVhclVuaXRcclxuICB3aWR0aDogTGluZWFyVW5pdFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERldmljZUNhcmRTaXplIHtcclxuICBbZGV2aWNlTW9kZTogc3RyaW5nXTogQ2FyZFNpemVcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkQmFja2dyb3VuZFN0eWxlIHtcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBjb2xvcjogc3RyaW5nXHJcbiAgICBmaWxsVHlwZTogRmlsbFR5cGVcclxuICAgIGltYWdlOiBJbWFnZVBhcmFtXHJcbiAgfVxyXG4gIGJvcmRlcjogQm9yZGVyU3R5bGVcclxuICBib3JkZXJSYWRpdXM6IEZvdXJTaWRlc1VuaXRcclxuICBib3hTaGFkb3c6IEJveFNoYWRvd1N0eWxlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZENvbmZpZyB7XHJcbiAgYmFja2dyb3VuZFN0eWxlPzogQ2FyZEJhY2tncm91bmRTdHlsZVxyXG4gIGVuYWJsZT86IGJvb2xlYW5cclxuICBzZWxlY3Rpb25Nb2RlPzogU2VsZWN0aW9uTW9kZVR5cGVcclxuICBjYXJkU2l6ZT86IERldmljZUNhcmRTaXplXHJcbiAgbGlzdExheW91dD86IExpc3RMYXlvdXRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1DYXJkQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENhcmRDb25maWc+XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgcGFnZVRyYW5zaXRpb24/OiBQYWdlVHJhbnNpdG9uVHlwZVxyXG4gIGhvdmVyVHlwZT86IEhvdmVyVHlwZVxyXG4gIHNlbGVjdGVkU3R5bGU/OiBTZWxlY3RlZFN0eWxlXHJcbiAgZGlmZmVyZW50T2RkRXZlbj86IGJvb2xlYW5cclxuICBpdGVtU3R5bGU/OiBJdGVtU3R5bGVcclxuICBpc0NoZWNrRW1wdHlUZW1wbGF0ZT86IGJvb2xlYW5cclxuICBpc0l0ZW1TdHlsZUNvbmZpcm0/OiBib29sZWFuXHJcbiAgZGlyZWN0aW9uPzogRGlyZWN0aW9uVHlwZVxyXG4gIGFsaWduVHlwZT86IEFsaWduVHlwZVxyXG4gIHNwYWNlPzogbnVtYmVyXHJcbiAgaG9yaXpvbnRhbFNwYWNlPzogbnVtYmVyXHJcbiAgdmVydGljYWxTcGFjZT86IG51bWJlclxyXG4gIGl0ZW1zUGVyUGFnZT86IG51bWJlclxyXG4gIHBhZ2VTdHlsZT86IFBhZ2VTdHlsZVxyXG4gIHNjcm9sbEJhck9wZW4/OiBib29sZWFuXHJcbiAgbmF2aWdhdG9yT3Blbj86IGJvb2xlYW5cclxuICBzY3JvbGxTdGVwPzogbnVtYmVyXHJcbiAgc3R5bGU/OiBJbW11dGFibGVPYmplY3Q8V2lkZ2V0U3R5bGU+XHJcbiAgaXNJbml0aWFsZWQ/OiBib29sZWFuXHJcbiAgbG9ja0l0ZW1SYXRpbz86IGJvb2xlYW5cclxuICBzaG93U2VsZWN0ZWRPbmx5T3Blbj86IGJvb2xlYW5cclxuICBzaG93Q2xlYXJTZWxlY3RlZD86IGJvb2xlYW5cclxuICBncmlkQWxpZ25tZW50PzogVGV4dEFsaWduVmFsdWVcclxuXHJcbiAgLy8gbGlua1xyXG4gIGxpbmtQYXJhbT86IElNTGlua1BhcmFtXHJcblxyXG4gIC8vIHNlYXJjaFxyXG4gIHNlYXJjaE9wZW4/OiBib29sZWFuXHJcbiAgc2VhcmNoRmllbGRzPzogc3RyaW5nXHJcbiAgc2VhcmNoRXhhY3Q/OiBib29sZWFuXHJcbiAgLy8gZmlsdGVyXHJcbiAgZmlsdGVyT3Blbj86IGJvb2xlYW5cclxuICBmaWx0ZXI/OiBTcWxFeHByZXNzaW9uXHJcbiAgLy8gc29ydFxyXG4gIHNvcnRPcGVuPzogYm9vbGVhblxyXG4gIHNvcnRzPzogU29ydFNldHRpbmdPcHRpb25bXVxyXG5cclxuICAvLyBjYXJkIGJhY2tncm91bmRcclxuICBjYXJkQ29uZmlncz86IEltbXV0YWJsZU9iamVjdDx7IFtzdGF0dXM6IHN0cmluZ106IENhcmRDb25maWcgfT5cclxuICBzZWFyY2hIaW50Pzogc3RyaW5nXHJcblxyXG4gIGlzU2hvd0F1dG9SZWZyZXNoPzogYm9vbGVhblxyXG4gIG5vRGF0YU1lc3NhZ2U/OiBzdHJpbmdcclxuICBsYXlvdXRUeXBlPzogTGlzdExheW91dFR5cGVcclxuICBrZWVwQXNwZWN0UmF0aW8/OiBib29sZWFuXHJcbiAgZ3JpZEl0ZW1TaXplUmF0aW8/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSU1Db25maWcgPSBJbW11dGFibGVPYmplY3Q8Q29uZmlnPlxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBSZWFjdCxcclxuICBqc3gsXHJcbiAgSW1tdXRhYmxlQXJyYXksXHJcbiAgU2VyaWFsaXplZFN0eWxlcyxcclxuICBJTVRoZW1lVmFyaWFibGVzLFxyXG4gIEFwcE1vZGUsXHJcbiAgY3NzXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgRGlyZWN0aW9uLFxyXG4gIE1vZGlmaWVyc1xyXG59IGZyb20gJ2ppbXUtdWknXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15RHJvcERvd25JdGVtIHtcclxuICBsYWJlbDogc3RyaW5nXHJcbiAgZXZlbnQ6IChldnQsIGl0ZW0/OiBNeURyb3BEb3duSXRlbSkgPT4gdm9pZFxyXG4gIGhpZGU/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlEcm9wZG93blByb3BzIHtcclxuICBhcHBNb2RlOiBBcHBNb2RlXHJcbiAgdGhlbWU/OiBJTVRoZW1lVmFyaWFibGVzXHJcbiAgdG9nZ2xlVGl0bGU/OiBzdHJpbmdcclxuICB0b2dnbGVJc0ljb24/OiBib29sZWFuXHJcbiAgdG9nZ2xlVHlwZT86IHN0cmluZ1xyXG4gIGl0ZW1zPzogSW1tdXRhYmxlQXJyYXk8TXlEcm9wRG93bkl0ZW0+XHJcbiAgZmx1aWQ/OiBib29sZWFuXHJcbiAgc2l6ZT86IHN0cmluZ1xyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW5cclxuICBjYXJldD86IGJvb2xlYW5cclxuICBtb2RpZmllcnM/OiBNb2RpZmllcnNcclxuICBpc0Ryb3BEb3duT3Blbj86IGJvb2xlYW5cclxuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb25cclxuICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICB3aXRoQnVpbGRlclN0eWxlPzogYW55XHJcbiAgc2hvd0FjdGl2ZT86IGJvb2xlYW5cclxuICBhY3RpdmVMYWJlbD86IHN0cmluZ1xyXG4gIG1lbnVDc3M/OiAodGhlbWU6IElNVGhlbWVWYXJpYWJsZXMpID0+IFNlcmlhbGl6ZWRTdHlsZXNcclxuICBtZW51Q29udGVudD86ICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcykgPT4gYW55XHJcbiAgdG9nZ2xlQ29udGVudD86ICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcykgPT4gYW55XHJcbiAgb25Ecm9wRG93bk9wZW5DaGFuZ2U/OiAoaXNPcGVuOiBib29sZWFuKSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEcm9wRG93biBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbk15RHJvcGRvd25Qcm9wcyxcclxueyBpc09wZW46IGJvb2xlYW4gfVxyXG4+IHtcclxuICBNeURyb3Bkb3duOiBhbnlcclxuICBNeURyb3Bkb3duVG9nZ2xlOiBhbnlcclxuICBNeURyb3Bkb3duTWVudTogYW55XHJcbiAgTXlEcm9wZG93bkl0ZW06IGFueVxyXG5cclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNPcGVuOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyB3aXRoQnVpbGRlclN0eWxlIH0gPSBwcm9wc1xyXG4gICAgdGhpcy5NeURyb3Bkb3duID0gd2l0aEJ1aWxkZXJTdHlsZSA/IHdpdGhCdWlsZGVyU3R5bGUoRHJvcGRvd24pIDogRHJvcGRvd25cclxuICAgIHRoaXMuTXlEcm9wZG93blRvZ2dsZSA9IHdpdGhCdWlsZGVyU3R5bGVcclxuICAgICAgPyB3aXRoQnVpbGRlclN0eWxlKERyb3Bkb3duVG9nZ2xlKVxyXG4gICAgICA6IERyb3Bkb3duVG9nZ2xlXHJcbiAgICB0aGlzLk15RHJvcGRvd25NZW51ID0gd2l0aEJ1aWxkZXJTdHlsZVxyXG4gICAgICA/IHdpdGhCdWlsZGVyU3R5bGUoRHJvcGRvd25NZW51KVxyXG4gICAgICA6IERyb3Bkb3duTWVudVxyXG4gICAgdGhpcy5NeURyb3Bkb3duSXRlbSA9IHdpdGhCdWlsZGVyU3R5bGVcclxuICAgICAgPyB3aXRoQnVpbGRlclN0eWxlKERyb3Bkb3duSXRlbSlcclxuICAgICAgOiBEcm9wZG93bkl0ZW1cclxuICB9XHJcblxyXG4gIG9uRHJvcERvd25Ub2dnbGUgPSBldnQgPT4ge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcblxyXG4gICAgY29uc3QgeyBpc0Ryb3BEb3duT3Blbiwgb25Ecm9wRG93bk9wZW5DaGFuZ2UgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmIChpc0Ryb3BEb3duT3BlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9uRHJvcERvd25PcGVuQ2hhbmdlICYmIG9uRHJvcERvd25PcGVuQ2hhbmdlKCFpc0Ryb3BEb3duT3BlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46ICFpc09wZW4gfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrID0gKGV2dCwgaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgeyBpc0Ryb3BEb3duT3Blbiwgb25Ecm9wRG93bk9wZW5DaGFuZ2UgfSA9IHRoaXMucHJvcHNcclxuICAgIGlmIChpc0Ryb3BEb3duT3BlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9uRHJvcERvd25PcGVuQ2hhbmdlICYmIG9uRHJvcERvd25PcGVuQ2hhbmdlKGZhbHNlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSlcclxuICAgIH1cclxuICAgIGl0ZW0uZXZlbnQoZXZ0LCBpdGVtKVxyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldnQubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICB9XHJcblxyXG4gIG9uRHJvcERvd25Nb3VzZUNsaWNrID0gZXZ0ID0+IHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZ0Lm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG5cclxuICBnZXRTdHlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiBjc3NgXHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0LXRvZ2dsZS1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzPy5wYWxldHRlPy5saWdodD8uWzUwMF19O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAmOmhvdmVyLCAmW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzPy5wYWxldHRlPy5saWdodD8uWzgwMF19O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaXRlbXMsXHJcbiAgICAgIHRvZ2dsZUNvbnRlbnQsXHJcbiAgICAgIGNhcmV0LFxyXG4gICAgICB0b2dnbGVUeXBlLFxyXG4gICAgICBtZW51Q29udGVudCxcclxuICAgICAgYXBwTW9kZSxcclxuICAgICAgbW9kaWZpZXJzLFxyXG4gICAgICB0b2dnbGVJc0ljb24sXHJcbiAgICAgIHRoZW1lLFxyXG4gICAgICBpc0Ryb3BEb3duT3BlbixcclxuICAgICAgc2l6ZSxcclxuICAgICAgYXBwZW5kVG9Cb2R5LFxyXG4gICAgICB0b2dnbGVUaXRsZSxcclxuICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICBtZW51Q3NzLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIHNob3dBY3RpdmUsXHJcbiAgICAgIGFjdGl2ZUxhYmVsLFxyXG4gICAgICBmbHVpZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaXNPcGVuID0gaXNEcm9wRG93bk9wZW4gPT09IHVuZGVmaW5lZCA/IGlzT3BlbiA6IGlzRHJvcERvd25PcGVuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIE15RHJvcGRvd24sXHJcbiAgICAgIE15RHJvcGRvd25Ub2dnbGUsXHJcbiAgICAgIE15RHJvcGRvd25NZW51LFxyXG4gICAgICBNeURyb3Bkb3duSXRlbVxyXG4gICAgfSA9IHRoaXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNeURyb3Bkb3duXHJcbiAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICB0b2dnbGU9e3RoaXMub25Ecm9wRG93blRvZ2dsZX1cclxuICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cclxuICAgICAgICBmbHVpZD17Zmx1aWR9XHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW4gJiYgYXBwTW9kZSAhPT0gQXBwTW9kZS5EZXNpZ259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbXktZHJvcGRvd24gJHtjbGFzc05hbWV9YH1cclxuICAgICAgICBjc3M9e3RoaXMuZ2V0U3R5bGUoKX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b2dnbGVDb250ZW50ICYmIChcclxuICAgICAgICAgIDxNeURyb3Bkb3duVG9nZ2xlXHJcbiAgICAgICAgICAgIGljb249e3RvZ2dsZUlzSWNvbn1cclxuICAgICAgICAgICAgdGl0bGU9e3RvZ2dsZVRpdGxlfVxyXG4gICAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgICB0eXBlPXt0b2dnbGVUeXBlfVxyXG4gICAgICAgICAgICBjYXJldD17Y2FyZXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlzdC10b2dnbGUtYnV0dG9uJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dG9nZ2xlQ29udGVudCAmJiB0b2dnbGVDb250ZW50KHRoZW1lKX1cclxuICAgICAgICAgIDwvTXlEcm9wZG93blRvZ2dsZT5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxNeURyb3Bkb3duTWVudVxyXG4gICAgICAgICAgYXBwZW5kVG9Cb2R5PXthcHBlbmRUb0JvZHl9XHJcbiAgICAgICAgICBtb2RpZmllcnM9e21vZGlmaWVyc31cclxuICAgICAgICAgIGNzcz17bWVudUNzcyAmJiBtZW51Q3NzKHRoZW1lKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVudUNvbnRlbnRcclxuICAgICAgICAgICAgPyBtZW51Q29udGVudCh0aGVtZSlcclxuICAgICAgICAgICAgOiBpdGVtcyAmJlxyXG4gICAgICAgICAgICAgIGl0ZW1zLmFzTXV0YWJsZSgpLm1hcCgoaXRlbTogTXlEcm9wRG93bkl0ZW0sIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgIWl0ZW0uaGlkZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE15RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25vLXVzZXItc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3Nob3dBY3RpdmUgJiYgaXRlbS5sYWJlbCA9PT0gYWN0aXZlTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldnQgPT4gdGhpcy5vbkl0ZW1DbGljayhldnQsIGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTXlEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L015RHJvcGRvd25NZW51PlxyXG4gICAgICA8L015RHJvcGRvd24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX2RuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfbGF5b3V0c19sYXlvdXRfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIExheW91dEluZm8sXHJcbiAgZ2V0QXBwU3RvcmUsXHJcbiAgUmVhY3QsXHJcbiAgQnJvd3NlclNpemVNb2RlXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyBpbnRlcmFjdCB9IGZyb20gJ2ppbXUtY29yZS9kbmQnXHJcbmltcG9ydCB7IEJ1dHRvbkdyb3VwLCBCdXR0b24sIFBvcHBlciB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCB7XHJcbiAgaGFuZGxlUmVzaXplQ2FyZCBhcyBjb21tb25IYW5kbFJlc2l6ZUNhcmQsXHJcbiAgc2VsZWN0U2VsZiBhcyBjb21tb25TZWxlY3RTZWxmXHJcbn0gZnJvbSAnLi4vY29tbW9uLWJ1aWxkZXItc3VwcG9ydCdcclxuaW1wb3J0IHsgc2VhcmNoVXRpbHMgfSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWUnXHJcbmltcG9ydCB7IGdldEFwcENvbmZpZ0FjdGlvbiB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInXHJcbmltcG9ydCB7XHJcbiAgR0xPQkFMX0RSQUdHSU5HX0NMQVNTX05BTUUsXHJcbiAgR0xPQkFMX1JFU0laSU5HX0NMQVNTX05BTUUsXHJcbiAgR0xPQkFMX0g1X0RSQUdHSU5HX0NMQVNTX05BTUVcclxufSBmcm9tICdqaW11LWxheW91dHMvbGF5b3V0LWJ1aWxkZXInXHJcbmltcG9ydCBNeURyb3BEb3duLCB7IE15RHJvcGRvd25Qcm9wcyB9IGZyb20gJy4vY29tcG9uZW50cy9teS1kcm9wZG93bidcclxuaW1wb3J0IHsgd2l0aEJ1aWxkZXJTdHlsZXMsIHdpdGhCdWlsZGVyVGhlbWUgfSBmcm9tICdqaW11LXRoZW1lJ1xyXG5cclxuY29uc3Qgd2lkZ2V0TW9kdWxlcyA9IHtcclxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXHJcbiAgaW50ZXJhY3Q6IGludGVyYWN0LFxyXG4gIHNlYXJjaFV0aWxzOiBzZWFyY2hVdGlscyxcclxuICBnZXRBcHBDb25maWdBY3Rpb246IGdldEFwcENvbmZpZ0FjdGlvbixcclxuICBHTE9CQUxfRFJBR0dJTkdfQ0xBU1NfTkFNRTogR0xPQkFMX0RSQUdHSU5HX0NMQVNTX05BTUUsXHJcbiAgR0xPQkFMX1JFU0laSU5HX0NMQVNTX05BTUU6IEdMT0JBTF9SRVNJWklOR19DTEFTU19OQU1FLFxyXG4gIEdMT0JBTF9INV9EUkFHR0lOR19DTEFTU19OQU1FOiBHTE9CQUxfSDVfRFJBR0dJTkdfQ0xBU1NfTkFNRSxcclxuICB3aXRoQnVpbGRlclN0eWxlOiB3aXRoQnVpbGRlclN0eWxlcyxcclxuICB3aXRoQnVpbGRlclRoZW1lOiB3aXRoQnVpbGRlclRoZW1lLFxyXG4gIEJ1aWxkZXJEcm9wRG93bjogd2l0aEJ1aWxkZXJUaGVtZSgocHJvcHM6IE15RHJvcGRvd25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxNeURyb3BEb3duIHsuLi5wcm9wc30gd2l0aEJ1aWxkZXJTdHlsZT17d2l0aEJ1aWxkZXJTdHlsZXN9IC8+XHJcbiAgfSksXHJcbiAgQnVpbGRlclBvcHBlcjogd2l0aEJ1aWxkZXJUaGVtZShQb3BwZXIpLFxyXG4gIEJ1aWxkZXJCdXR0b246IHdpdGhCdWlsZGVyVGhlbWUoQnV0dG9uKSxcclxuXHJcbiAgaGFuZGxlUmVzaXplQ2FyZDogKFxyXG4gICAgcHJvcHMsXHJcbiAgICBuZXdDYXJkU2l6ZSxcclxuICAgIGlzVG9wOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBpc0xlZnQ6IGJvb2xlYW4gPSBmYWxzZSxcclxuICAgIGlzRW5kOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBpc1JlcGxhY2U6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgYWN0aW9uID0gY29tbW9uSGFuZGxSZXNpemVDYXJkKFxyXG4gICAgICBwcm9wcyxcclxuICAgICAgbmV3Q2FyZFNpemUsXHJcbiAgICAgIHByb3BzLmNvbmZpZyxcclxuICAgICAgaXNUb3AsXHJcbiAgICAgIGlzTGVmdCxcclxuICAgICAgaXNFbmRcclxuICAgIClcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgYWN0aW9uLmV4ZWMoaXNSZXBsYWNlKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdFNlbGY6IHByb3BzID0+IHtcclxuICAgIGNvbW1vblNlbGVjdFNlbGYocHJvcHMsIHRydWUpXHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0aW9uSW5MaXN0OiAoXHJcbiAgICBsYXlvdXRJbmZvOiBMYXlvdXRJbmZvLFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIGFwcENvbmZpZzogYW55LFxyXG4gICAgdXNlQ3VycmVudFNpemVNb2RlOiBib29sZWFuID0gdHJ1ZVxyXG4gICkgPT4ge1xyXG4gICAgaWYgKCFsYXlvdXRJbmZvIHx8ICFsYXlvdXRJbmZvLmxheW91dEl0ZW1JZCB8fCAhbGF5b3V0SW5mby5sYXlvdXRJZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGxldCBsYXlvdXRJdGVtc1xyXG4gICAgaWYgKHVzZUN1cnJlbnRTaXplTW9kZSkge1xyXG4gICAgICBsYXlvdXRJdGVtcyA9IHNlYXJjaFV0aWxzLmdldFJlbGF0ZWRMYXlvdXRJdGVtc0luV2lkZ2V0QnlMYXlvdXRJbmZvKFxyXG4gICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICBsYXlvdXRJbmZvLFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5icm93c2VyU2l6ZU1vZGVcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGF5b3V0SXRlbXMgPSBbXVxyXG4gICAgICBsYXlvdXRJdGVtcy5wdXNoKFxyXG4gICAgICAgIC4uLnNlYXJjaFV0aWxzLmdldFJlbGF0ZWRMYXlvdXRJdGVtc0luV2lkZ2V0QnlMYXlvdXRJbmZvKFxyXG4gICAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgICAgbGF5b3V0SW5mbyxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgQnJvd3NlclNpemVNb2RlLkxhcmdlXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIGxheW91dEl0ZW1zLnB1c2goXHJcbiAgICAgICAgLi4uc2VhcmNoVXRpbHMuZ2V0UmVsYXRlZExheW91dEl0ZW1zSW5XaWRnZXRCeUxheW91dEluZm8oXHJcbiAgICAgICAgICBhcHBDb25maWcsXHJcbiAgICAgICAgICBsYXlvdXRJbmZvLFxyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBCcm93c2VyU2l6ZU1vZGUuTWVkaXVtXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICAgIGxheW91dEl0ZW1zLnB1c2goXHJcbiAgICAgICAgLi4uc2VhcmNoVXRpbHMuZ2V0UmVsYXRlZExheW91dEl0ZW1zSW5XaWRnZXRCeUxheW91dEluZm8oXHJcbiAgICAgICAgICBhcHBDb25maWcsXHJcbiAgICAgICAgICBsYXlvdXRJbmZvLFxyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICBCcm93c2VyU2l6ZU1vZGUuU21hbGxcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiBsYXlvdXRJdGVtcy5sZW5ndGggPiAwXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aWRnZXRNb2R1bGVzXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==