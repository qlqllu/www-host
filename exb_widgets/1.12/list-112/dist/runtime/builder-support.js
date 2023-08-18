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

/***/ "./your-extensions/widgets/list-112/src/common-builder-support.tsx":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/common-builder-support.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleResizeCard": () => (/* binding */ handleResizeCard),
/* harmony export */   "selectSelf": () => (/* binding */ selectSelf)
/* harmony export */ });
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./your-extensions/widgets/list-112/src/config.ts");




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

/***/ "./your-extensions/widgets/list-112/src/config.ts":
/*!********************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/config.ts ***!
  \********************************************************/
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
/* harmony export */   "SCROLL_BAR_WIDTH": () => (/* binding */ SCROLL_BAR_WIDTH),
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
const SCROLL_BAR_WIDTH = 8;
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

/***/ "./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx":
/*!*********************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx ***!
  \*********************************************************************************/
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
        this.MyDropdownButton = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton;
        this.MyDropdownMenu = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu;
        this.MyDropdownItem = withBuilderStyle
            ? withBuilderStyle(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem)
            : jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem;
    }
    render() {
        const { items, toggleContent, caret, toggleType, toggleArrow, menuContent, appMode, modifiers, toggleIsIcon, theme, isDropDownOpen, size, appendToBody, toggleTitle, direction, menuCss, className, showActive, activeLabel, fluid } = this.props;
        let { isOpen } = this.state;
        isOpen = isDropDownOpen === undefined ? isOpen : isDropDownOpen;
        const { MyDropdown, MyDropdownButton, MyDropdownMenu, MyDropdownItem } = this;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdown, { size: size, toggle: this.onDropDownToggle, direction: direction, fluid: fluid, isOpen: isOpen && appMode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design, className: `my-dropdown ${className}`, css: this.getStyle() },
            toggleContent && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownButton, { icon: toggleIsIcon, title: toggleTitle, size: size, type: toggleType, caret: caret, className: 'list-toggle-button', arrow: toggleArrow }, toggleContent && toggleContent(theme))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownMenu, { appendToBody: appendToBody, modifiers: modifiers, css: menuCss && menuCss(theme) }, menuContent
                ? menuContent(theme)
                : items &&
                    items.asMutable().map((item, i) => {
                        return (!item.hide && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyDropdownItem, { key: i, className: 'no-user-select', title: item.label, active: showActive && item.label === activeLabel, onClick: evt => { this.onItemClick(evt, item); } }, item.label)));
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
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/list-112/src/runtime/builder-support.tsx ***!
  \**************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_core_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core/dnd */ "jimu-core/dnd");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _common_builder_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-builder-support */ "./your-extensions/widgets/list-112/src/common-builder-support.tsx");
/* harmony import */ var jimu_layouts_layout_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-layouts/layout-runtime */ "jimu-layouts/layout-runtime");
/* harmony import */ var jimu_for_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-for-builder */ "jimu-for-builder");
/* harmony import */ var jimu_layouts_layout_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-layouts/layout-builder */ "jimu-layouts/layout-builder");
/* harmony import */ var _components_my_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-dropdown */ "./your-extensions/widgets/list-112/src/runtime/components/my-dropdown.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9saXN0LTExMi9kaXN0L3J1bnRpbWUvYnVpbGRlci1zdXBwb3J0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXlCO0FBQzREO0FBQzVCO0FBQ1Q7QUFFekMsU0FBUyxVQUFVLENBQUUsS0FBSyxFQUFFLFFBQWtCO0lBQ25ELE1BQU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxHQUFHLEtBQUs7SUFDL0MsTUFBTSxTQUFTLEdBQUcsb0VBQWtCLEVBQUUsQ0FBQyxTQUFTO0lBQ2hELE1BQU0sV0FBVyxHQUFHLHVHQUE4QyxDQUNoRSxTQUFTLEVBQ1QsRUFBRSxFQUNGLDREQUFxQixFQUNyQixlQUFlLENBQ2hCO0lBQ0QsSUFBSSxXQUFXLEVBQUU7UUFDZixJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sUUFBUSxHQUFHLGtHQUF5QyxDQUN4RCxTQUFTLEVBQ1QsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FDeEI7WUFDRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsSUFDRSxVQUFVO29CQUNWLFVBQVUsQ0FBQyxRQUFRO29CQUNuQixVQUFVLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFDbkM7b0JBQ0EsTUFBTSxhQUFhLEdBQ2pCLHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZO3dCQUNyQyxzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ3BELHNEQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFB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LDhHQUFxRCxDQUNqRSxTQUFTLEVBQ1QsVUFBVSxFQUNWLEVBQUUsRUFDRixzREFBVyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUN6QztTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsRUFBRTtZQUNoQixXQUFXLENBQUMsSUFBSSxDQUNkLEdBQUcsOEdBQXFELENBQ3RELFNBQVMsRUFDVCxVQUFVLEVBQ1YsRUFBRSxFQUNGLDREQUFxQixDQUN0QixDQUNGO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FDZCxHQUFHLDhHQUFxRCxDQUN0RCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEVBQUUsRUFDRiw2REFBc0IsQ0FDdkIsQ0FDRjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQ2QsR0FBRyw4R0FBcUQsQ0FDdEQsU0FBUyxFQUNULFVBQVUsRUFDVixFQUFFLEVBQ0YsNERBQXFCLENBQ3RCLENBQ0Y7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQUVELGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvbGlzdC0xMTIvc3JjL2NvbW1vbi1idWlsZGVyLXN1cHBvcnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9saXN0LTExMi9zcmMvcnVudGltZS9jb21wb25lbnRzL215LWRyb3Bkb3duLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL2RuZFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1mb3ItYnVpbGRlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1sYXlvdXRzL2xheW91dC1idWlsZGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWxheW91dHMvbGF5b3V0LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdGhlbWVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2xpc3QtMTEyL3NyYy9ydW50aW1lL2J1aWxkZXItc3VwcG9ydC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBnZXRBcHBDb25maWdBY3Rpb24sXHJcbiAgdHlwZSBBcHBDb25maWdBY3Rpb24sXHJcbiAgYnVpbGRlckFwcFN5bmNcclxufSBmcm9tICdqaW11LWZvci1idWlsZGVyJ1xyXG5pbXBvcnQgeyB0eXBlIElNQXBwQ29uZmlnLCBMYXlvdXRJdGVtVHlwZSwgZ2V0QXBwU3RvcmUsIGFwcEFjdGlvbnMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHNlYXJjaFV0aWxzIH0gZnJvbSAnamltdS1sYXlvdXRzL2xheW91dC1ydW50aW1lJ1xyXG5pbXBvcnQgeyBTdGF0dXMsIHR5cGUgSU1Db25maWcgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RTZWxmIChwcm9wcywgZnJvbVBhZ2U/OiBib29sZWFuKSB7XHJcbiAgY29uc3QgeyBpZCwgZGlzcGF0Y2gsIGJyb3dzZXJTaXplTW9kZSB9ID0gcHJvcHNcclxuICBjb25zdCBhcHBDb25maWcgPSBnZXRBcHBDb25maWdBY3Rpb24oKS5hcHBDb25maWdcclxuICBjb25zdCBsYXlvdXRJbmZvcyA9IHNlYXJjaFV0aWxzLmdldENvbnRlbnRMYXlvdXRJbmZvc0luT25lU2l6ZU1vZGUoXHJcbiAgICBhcHBDb25maWcsXHJcbiAgICBpZCxcclxuICAgIExheW91dEl0ZW1UeXBlLldpZGdldCxcclxuICAgIGJyb3dzZXJTaXplTW9kZVxyXG4gIClcclxuICBpZiAobGF5b3V0SW5mb3MpIHtcclxuICAgIGlmIChsYXlvdXRJbmZvcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IHdpZGdldElkID0gc2VhcmNoVXRpbHMuZ2V0V2lkZ2V0SWRUaGF0VXNlVGhlTGF5b3V0SWQoXHJcbiAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgIGxheW91dEluZm9zWzBdLmxheW91dElkXHJcbiAgICAgIClcclxuICAgICAgaWYgKHdpZGdldElkKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0SnNvbiA9IGFwcENvbmZpZy53aWRnZXRzW3dpZGdldElkXVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHdpZGdldEpzb24gJiZcclxuICAgICAgICAgIHdpZGdldEpzb24ubWFuaWZlc3QgJiZcclxuICAgICAgICAgIHdpZGdldEpzb24ubWFuaWZlc3QubmFtZSAmJlxyXG4gICAgICAgICAgd2lkZ2V0SnNvbi5tYW5pZmVzdC5uYW1lID09PSAnbGlzdCdcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0dXMgPVxyXG4gICAgICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlICYmXHJcbiAgICAgICAgICAgIGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS53aWRnZXRzU3RhdGVbd2lkZ2V0SnNvbi5pZF0gJiZcclxuICAgICAgICAgICAgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZVt3aWRnZXRKc29uLmlkXS5idWlsZGVyU3RhdHVzXHJcbiAgICAgICAgICBpZiAoY3VycmVudFN0YXR1cykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGF5b3V0SWQgPSBzZWFyY2hVdGlscy5maW5kTGF5b3V0SWQoXHJcbiAgICAgICAgICAgICAgd2lkZ2V0SnNvbi5sYXlvdXRzW2N1cnJlbnRTdGF0dXNdLFxyXG4gICAgICAgICAgICAgIGJyb3dzZXJTaXplTW9kZSxcclxuICAgICAgICAgICAgICBhcHBDb25maWcubWFpblNpemVNb2RlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgbGF5b3V0SW5mbyA9IGxheW91dEluZm9zLmZpbmQoXHJcbiAgICAgICAgICAgICAgbEluZm8gPT4gbEluZm8ubGF5b3V0SWQgPT09IGN1cnJlbnRMYXlvdXRJZFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmIChmcm9tUGFnZSkge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuc2VsZWN0aW9uQ2hhbmdlZChsYXlvdXRJbmZvKSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBidWlsZGVyQXBwU3luYy5wdWJsaXNoQ2hhbmdlU2VsZWN0aW9uVG9BcHAobGF5b3V0SW5mbylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsYXlvdXRJbmZvcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChmcm9tUGFnZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKGFwcEFjdGlvbnMuc2VsZWN0aW9uQ2hhbmdlZChsYXlvdXRJbmZvc1swXSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnVpbGRlckFwcFN5bmMucHVibGlzaENoYW5nZVNlbGVjdGlvblRvQXBwKGxheW91dEluZm9zWzBdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzaXplQ2FyZCAoXHJcbiAgcHJvcHMsXHJcbiAgbmV3Q2FyZFNpemUsXHJcbiAgd2lkZ2V0Q29uZmlnOiBJTUNvbmZpZyxcclxuICBpc1RvcDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGlzTGVmdDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gIGlzRW5kOiBib29sZWFuID0gZmFsc2UsXHJcbiAgYXBwQ29uZmlnOiBJTUFwcENvbmZpZyA9IHVuZGVmaW5lZFxyXG4pOiBBcHBDb25maWdBY3Rpb24ge1xyXG4gIGNvbnN0IHsgaWQsIGJyb3dzZXJTaXplTW9kZSB9ID0gcHJvcHNcclxuICBpZiAoIWFwcENvbmZpZykge1xyXG4gICAgYXBwQ29uZmlnID0gZ2V0QXBwQ29uZmlnQWN0aW9uKCkuYXBwQ29uZmlnXHJcbiAgfVxyXG4gIGNvbnN0IGFjdGlvbiA9IGdldEFwcENvbmZpZ0FjdGlvbihhcHBDb25maWcpXHJcblxyXG4gIGFjdGlvbi5lZGl0V2lkZ2V0Q29uZmlnKFxyXG4gICAgaWQsXHJcbiAgICB3aWRnZXRDb25maWdcclxuICAgICAgLnNldEluKFxyXG4gICAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuUmVndWxhciwgJ2NhcmRTaXplJywgYnJvd3NlclNpemVNb2RlXSxcclxuICAgICAgICBuZXdDYXJkU2l6ZVxyXG4gICAgICApXHJcbiAgICAgIC5zZXRJbihcclxuICAgICAgICBbJ2NhcmRDb25maWdzJywgU3RhdHVzLkhvdmVyLCAnY2FyZFNpemUnLCBicm93c2VyU2l6ZU1vZGVdLFxyXG4gICAgICAgIG5ld0NhcmRTaXplXHJcbiAgICAgIClcclxuICAgICAgLnNldEluKFxyXG4gICAgICAgIFsnY2FyZENvbmZpZ3MnLCBTdGF0dXMuU2VsZWN0ZWQsICdjYXJkU2l6ZScsIGJyb3dzZXJTaXplTW9kZV0sXHJcbiAgICAgICAgbmV3Q2FyZFNpemVcclxuICAgICAgKVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGFjdGlvblxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaGFuZGxlUmVzaXplQ2FyZEZvclN0eWxlQ2hhbmdlKGlkLCBjb25maWcsIGFwcENvbmZpZzogSU1BcHBDb25maWcgPSB1bmRlZmluZWQpOiBBcHBDb25maWdBY3Rpb257XHJcbi8vICAgY29uc3Qgc3BhY2UgPSBjb25maWcuc3BhY2U7XHJcbi8vICAgY29uc3QgbmV3Q2FyZFNpemUgPSBjb25maWcuY2FyZFNpemU7XHJcbi8vICAgY29uc3QgbGF5b3V0SW5mb3MgPSBhcHBDb25maWdVdGlscy5nZXRDb250ZW50TGF5b3V0SW5mb3NJbk9uZVNpemVNb2RlKGFwcENvbmZpZywgaWQsIExheW91dEl0ZW1UeXBlLldpZGdldCwgYnJvd3NlclNpemVNb2RlKTtcclxuLy8gICBsZXQgbGF5b3V0SW5mbyA9IHVuZGVmaW5lZDtcclxuLy8gICBpZihsYXlvdXRJbmZvcyl7XHJcbi8vICAgICBpZihsYXlvdXRJbmZvcy5sZW5ndGggPiAxKXtcclxuLy8gICAgICAgY29uc3Qgd2lkZ2V0SWQgPSBhcHBDb25maWdVdGlscy5nZXRXaWRnZXRJZFRoYXRVc2VUaGVMYXlvdXRJZChhcHBDb25maWcsIGxheW91dEluZm9zWzBdLmxheW91dElkKTtcclxuLy8gICAgICAgaWYod2lkZ2V0SWQpe1xyXG4vLyAgICAgICAgIGNvbnN0IHdpZGdldEpzb24gPSBhcHBDb25maWcud2lkZ2V0c1t3aWRnZXRJZF07XHJcbi8vICAgICAgICAgaWYod2lkZ2V0SnNvbiAmJiB3aWRnZXRKc29uLm1hbmlmZXN0ICYmIHdpZGdldEpzb24ubWFuaWZlc3QubmFtZSAmJiB3aWRnZXRKc29uLm1hbmlmZXN0Lm5hbWUgPT09ICdsaXN0Jyl7XHJcbi8vICAgICAgICAgICBjb25zdCBjdXJyZW50U3RhdHVzID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLndpZGdldHNTdGF0ZSAmJiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3dpZGdldEpzb24uaWRdICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkud2lkZ2V0c1N0YXRlW3dpZGdldEpzb24uaWRdWydidWlsZGVyU3RhdHVzJ107XHJcbi8vICAgICAgICAgICBpZihjdXJyZW50U3RhdHVzKXtcclxuLy8gICAgICAgICAgICAgY29uc3QgY3VycmVudExheW91dElkID0gdXRpbHMuZmluZExheW91dElkKHdpZGdldEpzb24ubGF5b3V0c1tjdXJyZW50U3RhdHVzXSwgZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmJyb3dzZXJTaXplTW9kZSwgYXBwQ29uZmlnLm1haW5TaXplTW9kZSk7XHJcbi8vICAgICAgICAgICAgIGxheW91dEluZm8gPSBsYXlvdXRJbmZvcy5maW5kKGxJbmZvID0+IGxJbmZvLmxheW91dElkID09PSBjdXJyZW50TGF5b3V0SWQpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfWVsc2UgaWYobGF5b3V0SW5mb3MubGVuZ3RoID4gMCl7XHJcbi8vICAgICAgIGxheW91dEluZm8gPSBsYXlvdXRJbmZvc1swXTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgaWYoIWxheW91dEluZm8pe1xyXG4vLyAgICAgcmV0dXJuO1xyXG4vLyAgIH1cclxuLy8gICBjb25zdCBsYXlvdXRJdGVtID0gYXBwQ29uZmlnLmxheW91dHNbbGF5b3V0SW5mby5sYXlvdXRJZF0uY29udGVudCAmJiBhcHBDb25maWcubGF5b3V0c1tsYXlvdXRJbmZvLmxheW91dElkXS5jb250ZW50W2xheW91dEluZm8ubGF5b3V0SXRlbUlkXTtcclxuLy8gICBpZighbGF5b3V0SXRlbSlyZXR1cm47XHJcbi8vICAgY29uc3QgYWN0aW9uID0gZ2V0QXBwQ29uZmlnQWN0aW9uKGFwcENvbmZpZyk7XHJcbi8vICAgaWYobGF5b3V0SXRlbSl7XHJcbi8vICAgICBsZXQgYmJveCA9IEltbXV0YWJsZShsYXlvdXRJdGVtLmJib3ggfHwge30pO1xyXG5cclxuLy8gICAgIGlmKGNvbmZpZy5kaXJlY3Rpb24gPT09IERpcmVjdGlvblR5cGUuVmVydGljYWwpe1xyXG4vLyAgICAgICBiYm94ID0gYmJveC5zZXQoJ3dpZHRoJywgYCR7bmV3Q2FyZFNpemUud2lkdGggKyBMSVNUX0NBUkRfUEFERElORyAqIDJ9cHhgKTtcclxuLy8gICAgICAgYmJveCA9IGJib3guc2V0KCdoZWlnaHQnLCBgJHtuZXdDYXJkU2l6ZS5oZWlnaHQgKiAyICsgc3BhY2UgKiAyICsgTElTVF9DQVJEX1BBRERJTkd9cHhgKTtcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICBiYm94ID0gYmJveC5zZXQoJ3dpZHRoJywgYCR7bmV3Q2FyZFNpemUud2lkdGggKiAyICsgc3BhY2UgKiAyICArIExJU1RfQ0FSRF9QQURESU5HfXB4YCk7XHJcbi8vICAgICAgIGJib3ggPSBiYm94LnNldCgnaGVpZ2h0JywgYCR7bmV3Q2FyZFNpemUuaGVpZ2h0ICsgTElTVF9DQVJEX1BBRERJTkcgKiAyfXB4YCk7XHJcbi8vICAgICB9XHJcbi8vICAgICBhY3Rpb24uZWRpdExheW91dEl0ZW1CQm94KGxheW91dEluZm8sIGJib3gpXHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBhY3Rpb247XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIF9nZXROdW1iZXJGcm9tU3R5bGUoc3R5bGU6IHN0cmluZyl7XHJcbi8vICAgc3R5bGUgPSAoc3R5bGUgJiYgc3R5bGUudG9TdHJpbmcoKSkgfHwgJyc7XHJcbi8vICAgY29uc3QgcmVtSW5kZXggPSBzdHlsZSAmJiBzdHlsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3JlbScpO1xyXG4vLyAgIGNvbnN0IHB4SW5kZXggPSBzdHlsZSAmJiBzdHlsZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3B4Jyk7XHJcbi8vICAgaWYocmVtSW5kZXggPiAtMSl7XHJcbi8vICAgICBzdHlsZSA9IHN0eWxlLnN1YnN0cigwLCByZW1JbmRleCk7XHJcbi8vICAgfWVsc2UgaWYocHhJbmRleCA+IC0xKXtcclxuLy8gICAgIHN0eWxlID0gc3R5bGUuc3Vic3RyaW5nKDAsIHB4SW5kZXgpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gcGFyc2VJbnQoc3R5bGUpO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSAnc2VhbWxlc3MtaW1tdXRhYmxlJ1xyXG5pbXBvcnQge1xyXG4gIHR5cGUgSW1hZ2VQcm9wcyxcclxuICB0eXBlIEZpbGxUeXBlLFxyXG4gIHR5cGUgSW1hZ2VQYXJhbSxcclxuICB0eXBlIEJvcmRlclN0eWxlLFxyXG4gIHR5cGUgRm91clNpZGVzVW5pdCxcclxuICB0eXBlIEJveFNoYWRvd1N0eWxlLFxyXG4gIHR5cGUgTGluZWFyVW5pdCxcclxuICB0eXBlIFRleHRBbGlnblZhbHVlXHJcbn0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgdHlwZSBTcWxFeHByZXNzaW9uIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIHR5cGUgU29ydFNldHRpbmdPcHRpb24sXHJcbiAgdHlwZSBJTUxpbmtQYXJhbVxyXG59IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJ1xyXG5cclxuLy8gVE9ETzogbW92ZSB0byBjb3JlXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbmV4cG9ydCBpbnRlcmZhY2UgZ290b1Byb3BzIHtcclxuICB2aWV3czogc3RyaW5nW11cclxufVxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxyXG5leHBvcnQgaW50ZXJmYWNlIGdvdG9BY3Rpb24ge1xyXG4gIGdvdG86IGdvdG9Qcm9wc1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xyXG4gIHN1Z2dlc3Rpb25IdG1sOiBzdHJpbmcgfCBFbGVtZW50XHJcbiAgc3VnZ2VzdGlvbjogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUX0NBUkRfUEFERElORyA9IDBcclxuZXhwb3J0IGNvbnN0IExJU1RfQ0FSRF9NSU5fU0laRSA9IDIwXHJcbmV4cG9ydCBjb25zdCBEU19UT09MX0ggPSA0MlxyXG5leHBvcnQgY29uc3QgQk9UVE9NX1RPT0xfSCA9IDQwXHJcbmV4cG9ydCBjb25zdCBDT01NT05fUEFERElORyA9IDBcclxuZXhwb3J0IGNvbnN0IERTX1RPT0xfQk9UVE9NX1BBRERJTkcgPSAxNFxyXG5leHBvcnQgY29uc3QgQk9UVE9NX1RPT0xfVE9QX1BBRERJTkcgPSAxNFxyXG5leHBvcnQgY29uc3QgTElTVF9UT09MX01JTl9TSVpFX05PX0RBVEFfQUNUSU9OID0gMTc1XHJcbmV4cG9ydCBjb25zdCBMSVNUX1RPT0xfTUlOX1NJWkVfREFUQV9BQ1RJT04gPSAyMjBcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FSRF9TSVpFID0gMjAwXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NQQUNFID0gMTBcclxuZXhwb3J0IGNvbnN0IFNDUk9MTF9CQVJfV0lEVEggPSA4XHJcblxyXG5leHBvcnQgZW51bSBTZXR0aW5nQ29sbGFwc2VUeXBlIHtcclxuICBOb25lID0gJ05PTkUnLFxyXG4gIEFycmFuZ2VtZW50ID0gJ0FSUkFOR0VNRU5UJyxcclxuICBTdGF0ZXMgPSAnU1RBVEVTJyxcclxuICBUb29scyA9ICdUT09MUydcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpZGdldEhlYWRlclRpdGxlIHtcclxuICB0ZXh0OiBzdHJpbmdcclxuICAvLyBBZGQgY29sb3IsIHNpemUsIGFsaWdubWVudCwgZXRjLlxyXG4gIC8vIEFkZCBhbiBvcHRpb24gdG8gYmluZCB0ZXh0IHRvIGEgZmllbGRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaWRnZXRIZWFkZXIge1xyXG4gIHRpdGxlOiBJbW11dGFibGVPYmplY3Q8V2lkZ2V0SGVhZGVyVGl0bGU+XHJcbiAgLy8gVE9ETzpcclxuICAvLyBBZGQgXCJhY3Rpb25cIiBzdWNoIGFzIGZpbHRlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3REaXZTaXplIHtcclxuICBjbGllbnRXaWR0aDogbnVtYmVyXHJcbiAgY2xpZW50SGVpZ2h0OiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpZGdldFN0eWxlIHtcclxuICBpZDogc3RyaW5nXHJcbn1cclxuLy8gRU5EOiBUT0RPXHJcblxyXG5pbnRlcmZhY2UgTGlzdEl0ZW1Db21wb25lbnQge1xyXG4gIGZpZWxkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbVRpdGxlQ29tcG9uZW50IGV4dGVuZHMgTGlzdEl0ZW1Db21wb25lbnQge31cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbURlc2NyaXB0aW9uQ29tcG9uZW50IGV4dGVuZHMgTGlzdEl0ZW1Db21wb25lbnQge31cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0SXRlbVNlbGVjdGlvbk1vZGVDb21wb25lbnQgZXh0ZW5kcyBMaXN0SXRlbUNvbXBvbmVudCB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIExpc3RJdGVtSW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMaXN0SXRlbUNvbXBvbmVudCwgSW1hZ2VQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGVudW0gTGlzdExheW91dCB7XHJcbiAgQVVUTyA9ICdBdXRvJyxcclxuICBDVVNUT00gPSAnQ3VzdG9tJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZWxlY3Rpb25Nb2RlVHlwZSB7XHJcbiAgTm9uZSA9ICdOT05FJyxcclxuICBTaW5nbGUgPSAnU0lOR0xFJyxcclxuICBNdWx0aXBsZSA9ICdNVUxUSVBMRSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFnZVN0eWxlIHtcclxuICBTY3JvbGwgPSAnU0NST0xMJyxcclxuICBNdWx0aVBhZ2UgPSAnTVVMVElQQUdFJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbGlnblR5cGUge1xyXG4gIFN0YXJ0ID0gJ0ZMRVgtU1RBUlQnLFxyXG4gIENlbnRlciA9ICdDRU5URVInLFxyXG4gIEVuZCA9ICdGTEVYLUVORCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uVHlwZSB7XHJcbiAgSG9yaXpvbiA9ICdIT1JJWk9OJyxcclxuICBWZXJ0aWNhbCA9ICdWRVJUSUNBTCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTGlzdExheW91dFR5cGUge1xyXG4gIFJvdyA9ICdST1cnLFxyXG4gIENvbHVtbiA9ICdDT0xVTU4nLFxyXG4gIEdSSUQgPSAnR1JJRCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUGFnZVRyYW5zaXRvblR5cGUge1xyXG4gIEdsaWRlID0gJ0dMSURFJyxcclxuICBGYWRlID0gJ0ZBREUnLFxyXG4gIEZsb2F0ID0gJ0ZMT0FUJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBIb3ZlclR5cGUge1xyXG4gIEhvdmVyMCA9ICdIT1ZFUjAnLFxyXG4gIEhvdmVyMSA9ICdIT1ZFUjEnLFxyXG4gIEhvdmVyMiA9ICdIT1ZFUjInLFxyXG4gIEhvdmVyMyA9ICdIT1ZFUjMnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNlbGVjdGVkU3R5bGUge1xyXG4gIFN0eWxlMCA9ICdTVFlMRTAnLFxyXG4gIFN0eWxlMSA9ICdTVFlMRTEnLFxyXG4gIFN0eWxlMiA9ICdTVFlMRTInLFxyXG4gIFN0eWxlMyA9ICdTVFlMRTMnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEl0ZW1TdHlsZSB7XHJcbiAgU3R5bGUwID0gJ1NUWUxFMCcsXHJcbiAgU3R5bGUxID0gJ1NUWUxFMScsXHJcbiAgU3R5bGUyID0gJ1NUWUxFMicsXHJcbiAgU3R5bGUzID0gJ1NUWUxFMycsXHJcbiAgU3R5bGU0ID0gJ1NUWUxFNCcsXHJcbiAgU3R5bGU1ID0gJ1NUWUxFNScsXHJcbiAgU3R5bGU2ID0gJ1NUWUxFNicsXHJcbiAgU3R5bGU3ID0gJ1NUWUxFNycsXHJcbiAgU3R5bGU4ID0gJ1NUWUxFOCcsXHJcbiAgU3R5bGU5ID0gJ1NUWUxFOSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU3RhdHVzIHtcclxuICBSZWd1bGFyID0gJ1JFR1VMQVInLFxyXG4gIFNlbGVjdGVkID0gJ1NFTEVDVEVEJyxcclxuICBIb3ZlciA9ICdIT1ZFUidcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkU2l6ZSB7XHJcbiAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcclxuICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudFNpemUge1xyXG4gIGhlaWdodDogbnVtYmVyXHJcbiAgd2lkdGg6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRTaXplVW5pdCB7XHJcbiAgaGVpZ2h0OiBMaW5lYXJVbml0XHJcbiAgd2lkdGg6IExpbmVhclVuaXRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VDYXJkU2l6ZSB7XHJcbiAgW2RldmljZU1vZGU6IHN0cmluZ106IENhcmRTaXplXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FyZEJhY2tncm91bmRTdHlsZSB7XHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgY29sb3I6IHN0cmluZ1xyXG4gICAgZmlsbFR5cGU6IEZpbGxUeXBlXHJcbiAgICBpbWFnZTogSW1hZ2VQYXJhbVxyXG4gIH1cclxuICBib3JkZXI6IEJvcmRlclN0eWxlXHJcbiAgYm9yZGVyUmFkaXVzOiBGb3VyU2lkZXNVbml0XHJcbiAgYm94U2hhZG93OiBCb3hTaGFkb3dTdHlsZVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRDb25maWcge1xyXG4gIGJhY2tncm91bmRTdHlsZT86IENhcmRCYWNrZ3JvdW5kU3R5bGVcclxuICBlbmFibGU/OiBib29sZWFuXHJcbiAgc2VsZWN0aW9uTW9kZT86IFNlbGVjdGlvbk1vZGVUeXBlXHJcbiAgY2FyZFNpemU/OiBEZXZpY2VDYXJkU2l6ZVxyXG4gIGxpc3RMYXlvdXQ/OiBMaXN0TGF5b3V0XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ2FyZENvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDYXJkQ29uZmlnPlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xyXG4gIHBhZ2VUcmFuc2l0aW9uPzogUGFnZVRyYW5zaXRvblR5cGVcclxuICBob3ZlclR5cGU/OiBIb3ZlclR5cGVcclxuICBzZWxlY3RlZFN0eWxlPzogU2VsZWN0ZWRTdHlsZVxyXG4gIGRpZmZlcmVudE9kZEV2ZW4/OiBib29sZWFuXHJcbiAgaXRlbVN0eWxlPzogSXRlbVN0eWxlXHJcbiAgaXNDaGVja0VtcHR5VGVtcGxhdGU/OiBib29sZWFuXHJcbiAgaXNJdGVtU3R5bGVDb25maXJtPzogYm9vbGVhblxyXG4gIGRpcmVjdGlvbj86IERpcmVjdGlvblR5cGVcclxuICBhbGlnblR5cGU/OiBBbGlnblR5cGVcclxuICBzcGFjZT86IG51bWJlclxyXG4gIGhvcml6b250YWxTcGFjZT86IG51bWJlclxyXG4gIHZlcnRpY2FsU3BhY2U/OiBudW1iZXJcclxuICBpdGVtc1BlclBhZ2U/OiBudW1iZXJcclxuICBwYWdlU3R5bGU/OiBQYWdlU3R5bGVcclxuICBzY3JvbGxCYXJPcGVuPzogYm9vbGVhblxyXG4gIG5hdmlnYXRvck9wZW4/OiBib29sZWFuXHJcbiAgc2Nyb2xsU3RlcD86IG51bWJlclxyXG4gIHN0eWxlPzogSW1tdXRhYmxlT2JqZWN0PFdpZGdldFN0eWxlPlxyXG4gIGlzSW5pdGlhbGVkPzogYm9vbGVhblxyXG4gIGxvY2tJdGVtUmF0aW8/OiBib29sZWFuXHJcbiAgc2hvd1NlbGVjdGVkT25seU9wZW4/OiBib29sZWFuXHJcbiAgc2hvd0NsZWFyU2VsZWN0ZWQ/OiBib29sZWFuXHJcbiAgZ3JpZEFsaWdubWVudD86IFRleHRBbGlnblZhbHVlXHJcblxyXG4gIC8vIGxpbmtcclxuICBsaW5rUGFyYW0/OiBJTUxpbmtQYXJhbVxyXG5cclxuICAvLyBzZWFyY2hcclxuICBzZWFyY2hPcGVuPzogYm9vbGVhblxyXG4gIHNlYXJjaEZpZWxkcz86IHN0cmluZ1xyXG4gIHNlYXJjaEV4YWN0PzogYm9vbGVhblxyXG4gIC8vIGZpbHRlclxyXG4gIGZpbHRlck9wZW4/OiBib29sZWFuXHJcbiAgZmlsdGVyPzogU3FsRXhwcmVzc2lvblxyXG4gIC8vIHNvcnRcclxuICBzb3J0T3Blbj86IGJvb2xlYW5cclxuICBzb3J0cz86IFNvcnRTZXR0aW5nT3B0aW9uW11cclxuXHJcbiAgLy8gY2FyZCBiYWNrZ3JvdW5kXHJcbiAgY2FyZENvbmZpZ3M/OiBJbW11dGFibGVPYmplY3Q8eyBbc3RhdHVzOiBzdHJpbmddOiBDYXJkQ29uZmlnIH0+XHJcbiAgc2VhcmNoSGludD86IHN0cmluZ1xyXG5cclxuICBpc1Nob3dBdXRvUmVmcmVzaD86IGJvb2xlYW5cclxuICBub0RhdGFNZXNzYWdlPzogc3RyaW5nXHJcbiAgbGF5b3V0VHlwZT86IExpc3RMYXlvdXRUeXBlXHJcbiAga2VlcEFzcGVjdFJhdGlvPzogYm9vbGVhblxyXG4gIGdyaWRJdGVtU2l6ZVJhdGlvPzogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz5cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAganN4LFxyXG4gIHR5cGUgSW1tdXRhYmxlQXJyYXksXHJcbiAgdHlwZSBTZXJpYWxpemVkU3R5bGVzLFxyXG4gIHR5cGUgSU1UaGVtZVZhcmlhYmxlcyxcclxuICBBcHBNb2RlLFxyXG4gIGNzc1xyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBEcm9wZG93bkJ1dHRvbixcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG4gIHR5cGUgRGlyZWN0aW9uLFxyXG4gIHR5cGUgTW9kaWZpZXJzXHJcbn0gZnJvbSAnamltdS11aSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlEcm9wRG93bkl0ZW0ge1xyXG4gIGxhYmVsOiBzdHJpbmdcclxuICBldmVudDogKGV2dCwgaXRlbT86IE15RHJvcERvd25JdGVtKSA9PiB2b2lkXHJcbiAgaGlkZT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeURyb3Bkb3duUHJvcHMge1xyXG4gIGFwcE1vZGU6IEFwcE1vZGVcclxuICB0aGVtZT86IElNVGhlbWVWYXJpYWJsZXNcclxuICB0b2dnbGVUaXRsZT86IHN0cmluZ1xyXG4gIHRvZ2dsZUlzSWNvbj86IGJvb2xlYW5cclxuICB0b2dnbGVUeXBlPzogc3RyaW5nXHJcbiAgdG9nZ2xlQXJyb3c/OiBib29sZWFuXHJcbiAgaXRlbXM/OiBJbW11dGFibGVBcnJheTxNeURyb3BEb3duSXRlbT5cclxuICBmbHVpZD86IGJvb2xlYW5cclxuICBzaXplPzogc3RyaW5nXHJcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhblxyXG4gIGNhcmV0PzogYm9vbGVhblxyXG4gIG1vZGlmaWVycz86IE1vZGlmaWVyc1xyXG4gIGlzRHJvcERvd25PcGVuPzogYm9vbGVhblxyXG4gIGRpcmVjdGlvbj86IERpcmVjdGlvblxyXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gIHdpdGhCdWlsZGVyU3R5bGU/OiBhbnlcclxuICBzaG93QWN0aXZlPzogYm9vbGVhblxyXG4gIGFjdGl2ZUxhYmVsPzogc3RyaW5nXHJcbiAgbWVudUNzcz86ICh0aGVtZTogSU1UaGVtZVZhcmlhYmxlcykgPT4gU2VyaWFsaXplZFN0eWxlc1xyXG4gIG1lbnVDb250ZW50PzogKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKSA9PiBhbnlcclxuICB0b2dnbGVDb250ZW50PzogKHRoZW1lOiBJTVRoZW1lVmFyaWFibGVzKSA9PiBhbnlcclxuICBvbkRyb3BEb3duT3BlbkNoYW5nZT86IChpc09wZW46IGJvb2xlYW4pID0+IHZvaWRcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURyb3BEb3duIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuTXlEcm9wZG93blByb3BzLFxyXG57IGlzT3BlbjogYm9vbGVhbiB9XHJcbj4ge1xyXG4gIE15RHJvcGRvd246IGFueVxyXG4gIE15RHJvcGRvd25CdXR0b246IGFueVxyXG4gIE15RHJvcGRvd25NZW51OiBhbnlcclxuICBNeURyb3Bkb3duSXRlbTogYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc09wZW46IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHdpdGhCdWlsZGVyU3R5bGUgfSA9IHByb3BzXHJcbiAgICB0aGlzLk15RHJvcGRvd24gPSB3aXRoQnVpbGRlclN0eWxlID8gd2l0aEJ1aWxkZXJTdHlsZShEcm9wZG93bikgOiBEcm9wZG93blxyXG4gICAgdGhpcy5NeURyb3Bkb3duQnV0dG9uID0gd2l0aEJ1aWxkZXJTdHlsZVxyXG4gICAgICA/IHdpdGhCdWlsZGVyU3R5bGUoRHJvcGRvd25CdXR0b24pXHJcbiAgICAgIDogRHJvcGRvd25CdXR0b25cclxuICAgIHRoaXMuTXlEcm9wZG93bk1lbnUgPSB3aXRoQnVpbGRlclN0eWxlXHJcbiAgICAgID8gd2l0aEJ1aWxkZXJTdHlsZShEcm9wZG93bk1lbnUpXHJcbiAgICAgIDogRHJvcGRvd25NZW51XHJcbiAgICB0aGlzLk15RHJvcGRvd25JdGVtID0gd2l0aEJ1aWxkZXJTdHlsZVxyXG4gICAgICA/IHdpdGhCdWlsZGVyU3R5bGUoRHJvcGRvd25JdGVtKVxyXG4gICAgICA6IERyb3Bkb3duSXRlbVxyXG4gIH1cclxuXHJcbiAgb25Ecm9wRG93blRvZ2dsZSA9IGV2dCA9PiB7XHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICBjb25zdCB7IGlzRHJvcERvd25PcGVuLCBvbkRyb3BEb3duT3BlbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKGlzRHJvcERvd25PcGVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb25Ecm9wRG93bk9wZW5DaGFuZ2UgJiYgb25Ecm9wRG93bk9wZW5DaGFuZ2UoIWlzRHJvcERvd25PcGVuKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGVcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIWlzT3BlbiB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2sgPSAoZXZ0LCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCB7IGlzRHJvcERvd25PcGVuLCBvbkRyb3BEb3duT3BlbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgaWYgKGlzRHJvcERvd25PcGVuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb25Ecm9wRG93bk9wZW5DaGFuZ2UgJiYgb25Ecm9wRG93bk9wZW5DaGFuZ2UoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gICAgaXRlbS5ldmVudChldnQsIGl0ZW0pXHJcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2dC5uYXRpdmVFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgb25Ecm9wRG93bk1vdXNlQ2xpY2sgPSBldnQgPT4ge1xyXG4gICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldnQubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcclxuICB9XHJcblxyXG4gIGdldFN0eWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIGNzc2BcclxuICAgICAgJiBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLmxpc3QtdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnM/LnBhbGV0dGU/LmxpZ2h0Py5bNTAwXX07XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICY6aG92ZXIsICZbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnM/LnBhbGV0dGU/LmxpZ2h0Py5bODAwXX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBpdGVtcyxcclxuICAgICAgdG9nZ2xlQ29udGVudCxcclxuICAgICAgY2FyZXQsXHJcbiAgICAgIHRvZ2dsZVR5cGUsXHJcbiAgICAgIHRvZ2dsZUFycm93LFxyXG4gICAgICBtZW51Q29udGVudCxcclxuICAgICAgYXBwTW9kZSxcclxuICAgICAgbW9kaWZpZXJzLFxyXG4gICAgICB0b2dnbGVJc0ljb24sXHJcbiAgICAgIHRoZW1lLFxyXG4gICAgICBpc0Ryb3BEb3duT3BlbixcclxuICAgICAgc2l6ZSxcclxuICAgICAgYXBwZW5kVG9Cb2R5LFxyXG4gICAgICB0b2dnbGVUaXRsZSxcclxuICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICBtZW51Q3NzLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIHNob3dBY3RpdmUsXHJcbiAgICAgIGFjdGl2ZUxhYmVsLFxyXG4gICAgICBmbHVpZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGxldCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgaXNPcGVuID0gaXNEcm9wRG93bk9wZW4gPT09IHVuZGVmaW5lZCA/IGlzT3BlbiA6IGlzRHJvcERvd25PcGVuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIE15RHJvcGRvd24sXHJcbiAgICAgIE15RHJvcGRvd25CdXR0b24sXHJcbiAgICAgIE15RHJvcGRvd25NZW51LFxyXG4gICAgICBNeURyb3Bkb3duSXRlbVxyXG4gICAgfSA9IHRoaXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNeURyb3Bkb3duXHJcbiAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICB0b2dnbGU9e3RoaXMub25Ecm9wRG93blRvZ2dsZX1cclxuICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cclxuICAgICAgICBmbHVpZD17Zmx1aWR9XHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW4gJiYgYXBwTW9kZSAhPT0gQXBwTW9kZS5EZXNpZ259XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbXktZHJvcGRvd24gJHtjbGFzc05hbWV9YH1cclxuICAgICAgICBjc3M9e3RoaXMuZ2V0U3R5bGUoKX1cclxuICAgICAgPlxyXG4gICAgICAgIHt0b2dnbGVDb250ZW50ICYmIChcclxuICAgICAgICAgIDxNeURyb3Bkb3duQnV0dG9uXHJcbiAgICAgICAgICAgIGljb249e3RvZ2dsZUlzSWNvbn1cclxuICAgICAgICAgICAgdGl0bGU9e3RvZ2dsZVRpdGxlfVxyXG4gICAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgICB0eXBlPXt0b2dnbGVUeXBlfVxyXG4gICAgICAgICAgICBjYXJldD17Y2FyZXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlzdC10b2dnbGUtYnV0dG9uJ1xyXG4gICAgICAgICAgICBhcnJvdz17dG9nZ2xlQXJyb3d9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0b2dnbGVDb250ZW50ICYmIHRvZ2dsZUNvbnRlbnQodGhlbWUpfVxyXG4gICAgICAgICAgPC9NeURyb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPE15RHJvcGRvd25NZW51XHJcbiAgICAgICAgICBhcHBlbmRUb0JvZHk9e2FwcGVuZFRvQm9keX1cclxuICAgICAgICAgIG1vZGlmaWVycz17bW9kaWZpZXJzfVxyXG4gICAgICAgICAgY3NzPXttZW51Q3NzICYmIG1lbnVDc3ModGhlbWUpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHttZW51Q29udGVudFxyXG4gICAgICAgICAgICA/IG1lbnVDb250ZW50KHRoZW1lKVxyXG4gICAgICAgICAgICA6IGl0ZW1zICYmXHJcbiAgICAgICAgICAgICAgaXRlbXMuYXNNdXRhYmxlKCkubWFwKChpdGVtOiBNeURyb3BEb3duSXRlbSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAhaXRlbS5oaWRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TXlEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbm8tdXNlci1zZWxlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2hvd0FjdGl2ZSAmJiBpdGVtLmxhYmVsID09PSBhY3RpdmVMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2dCA9PiB7IHRoaXMub25JdGVtQ2xpY2soZXZ0LCBpdGVtKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTXlEcm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L015RHJvcGRvd25NZW51PlxyXG4gICAgICA8L015RHJvcGRvd24+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX2RuZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2Zvcl9idWlsZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfbGF5b3V0c19sYXlvdXRfYnVpbGRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2xheW91dHNfbGF5b3V0X3J1bnRpbWVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV90aGVtZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIHR5cGUgTGF5b3V0SW5mbyxcclxuICBnZXRBcHBTdG9yZSxcclxuICBSZWFjdCxcclxuICBCcm93c2VyU2l6ZU1vZGVcclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IGludGVyYWN0IH0gZnJvbSAnamltdS1jb3JlL2RuZCdcclxuaW1wb3J0IHsgQnV0dG9uR3JvdXAsIEJ1dHRvbiwgUG9wcGVyIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHtcclxuICBoYW5kbGVSZXNpemVDYXJkIGFzIGNvbW1vbkhhbmRsUmVzaXplQ2FyZCxcclxuICBzZWxlY3RTZWxmIGFzIGNvbW1vblNlbGVjdFNlbGZcclxufSBmcm9tICcuLi9jb21tb24tYnVpbGRlci1zdXBwb3J0J1xyXG5pbXBvcnQgeyBzZWFyY2hVdGlscyB9IGZyb20gJ2ppbXUtbGF5b3V0cy9sYXlvdXQtcnVudGltZSdcclxuaW1wb3J0IHsgZ2V0QXBwQ29uZmlnQWN0aW9uIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHtcclxuICBHTE9CQUxfRFJBR0dJTkdfQ0xBU1NfTkFNRSxcclxuICBHTE9CQUxfUkVTSVpJTkdfQ0xBU1NfTkFNRSxcclxuICBHTE9CQUxfSDVfRFJBR0dJTkdfQ0xBU1NfTkFNRVxyXG59IGZyb20gJ2ppbXUtbGF5b3V0cy9sYXlvdXQtYnVpbGRlcidcclxuaW1wb3J0IE15RHJvcERvd24sIHsgdHlwZSBNeURyb3Bkb3duUHJvcHMgfSBmcm9tICcuL2NvbXBvbmVudHMvbXktZHJvcGRvd24nXHJcbmltcG9ydCB7IHdpdGhCdWlsZGVyU3R5bGVzLCB3aXRoQnVpbGRlclRoZW1lIH0gZnJvbSAnamltdS10aGVtZSdcclxuXHJcbmNvbnN0IHdpZGdldE1vZHVsZXMgPSB7XHJcbiAgQnV0dG9uR3JvdXA6IEJ1dHRvbkdyb3VwLFxyXG4gIGludGVyYWN0OiBpbnRlcmFjdCxcclxuICBzZWFyY2hVdGlsczogc2VhcmNoVXRpbHMsXHJcbiAgZ2V0QXBwQ29uZmlnQWN0aW9uOiBnZXRBcHBDb25maWdBY3Rpb24sXHJcbiAgR0xPQkFMX0RSQUdHSU5HX0NMQVNTX05BTUU6IEdMT0JBTF9EUkFHR0lOR19DTEFTU19OQU1FLFxyXG4gIEdMT0JBTF9SRVNJWklOR19DTEFTU19OQU1FOiBHTE9CQUxfUkVTSVpJTkdfQ0xBU1NfTkFNRSxcclxuICBHTE9CQUxfSDVfRFJBR0dJTkdfQ0xBU1NfTkFNRTogR0xPQkFMX0g1X0RSQUdHSU5HX0NMQVNTX05BTUUsXHJcbiAgd2l0aEJ1aWxkZXJTdHlsZTogd2l0aEJ1aWxkZXJTdHlsZXMsXHJcbiAgd2l0aEJ1aWxkZXJUaGVtZTogd2l0aEJ1aWxkZXJUaGVtZSxcclxuICBCdWlsZGVyRHJvcERvd246IHdpdGhCdWlsZGVyVGhlbWUoKHByb3BzOiBNeURyb3Bkb3duUHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8TXlEcm9wRG93biB7Li4ucHJvcHN9IHdpdGhCdWlsZGVyU3R5bGU9e3dpdGhCdWlsZGVyU3R5bGVzfSAvPlxyXG4gIH0pLFxyXG4gIEJ1aWxkZXJQb3BwZXI6IHdpdGhCdWlsZGVyVGhlbWUoUG9wcGVyKSxcclxuICBCdWlsZGVyQnV0dG9uOiB3aXRoQnVpbGRlclRoZW1lKEJ1dHRvbiksXHJcblxyXG4gIGhhbmRsZVJlc2l6ZUNhcmQ6IChcclxuICAgIHByb3BzLFxyXG4gICAgbmV3Q2FyZFNpemUsXHJcbiAgICBpc1RvcDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgaXNMZWZ0OiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBpc0VuZDogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgaXNSZXBsYWNlOiBib29sZWFuID0gZmFsc2VcclxuICApID0+IHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGNvbW1vbkhhbmRsUmVzaXplQ2FyZChcclxuICAgICAgcHJvcHMsXHJcbiAgICAgIG5ld0NhcmRTaXplLFxyXG4gICAgICBwcm9wcy5jb25maWcsXHJcbiAgICAgIGlzVG9wLFxyXG4gICAgICBpc0xlZnQsXHJcbiAgICAgIGlzRW5kXHJcbiAgICApXHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGFjdGlvbi5leGVjKGlzUmVwbGFjZSlcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBzZWxlY3RTZWxmOiBwcm9wcyA9PiB7XHJcbiAgICBjb21tb25TZWxlY3RTZWxmKHByb3BzLCB0cnVlKVxyXG4gIH0sXHJcblxyXG4gIHNlbGVjdGlvbkluTGlzdDogKFxyXG4gICAgbGF5b3V0SW5mbzogTGF5b3V0SW5mbyxcclxuICAgIGlkOiBzdHJpbmcsXHJcbiAgICBhcHBDb25maWc6IGFueSxcclxuICAgIHVzZUN1cnJlbnRTaXplTW9kZTogYm9vbGVhbiA9IHRydWVcclxuICApID0+IHtcclxuICAgIGlmICghbGF5b3V0SW5mbyB8fCAhbGF5b3V0SW5mby5sYXlvdXRJdGVtSWQgfHwgIWxheW91dEluZm8ubGF5b3V0SWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBsZXQgbGF5b3V0SXRlbXNcclxuICAgIGlmICh1c2VDdXJyZW50U2l6ZU1vZGUpIHtcclxuICAgICAgbGF5b3V0SXRlbXMgPSBzZWFyY2hVdGlscy5nZXRSZWxhdGVkTGF5b3V0SXRlbXNJbldpZGdldEJ5TGF5b3V0SW5mbyhcclxuICAgICAgICBhcHBDb25maWcsXHJcbiAgICAgICAgbGF5b3V0SW5mbyxcclxuICAgICAgICBpZCxcclxuICAgICAgICBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYnJvd3NlclNpemVNb2RlXHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxheW91dEl0ZW1zID0gW11cclxuICAgICAgbGF5b3V0SXRlbXMucHVzaChcclxuICAgICAgICAuLi5zZWFyY2hVdGlscy5nZXRSZWxhdGVkTGF5b3V0SXRlbXNJbldpZGdldEJ5TGF5b3V0SW5mbyhcclxuICAgICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICAgIGxheW91dEluZm8sXHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIEJyb3dzZXJTaXplTW9kZS5MYXJnZVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICBsYXlvdXRJdGVtcy5wdXNoKFxyXG4gICAgICAgIC4uLnNlYXJjaFV0aWxzLmdldFJlbGF0ZWRMYXlvdXRJdGVtc0luV2lkZ2V0QnlMYXlvdXRJbmZvKFxyXG4gICAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgICAgbGF5b3V0SW5mbyxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgQnJvd3NlclNpemVNb2RlLk1lZGl1bVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgICBsYXlvdXRJdGVtcy5wdXNoKFxyXG4gICAgICAgIC4uLnNlYXJjaFV0aWxzLmdldFJlbGF0ZWRMYXlvdXRJdGVtc0luV2lkZ2V0QnlMYXlvdXRJbmZvKFxyXG4gICAgICAgICAgYXBwQ29uZmlnLFxyXG4gICAgICAgICAgbGF5b3V0SW5mbyxcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgQnJvd3NlclNpemVNb2RlLlNtYWxsXHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGF5b3V0SXRlbXMubGVuZ3RoID4gMFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2lkZ2V0TW9kdWxlc1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=