System.register(["jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!***********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/filter-action.ts ***!
  \***********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const FILTER_ACTION_KEY_PREFIX = 'filterActionValue-';
const FILTER_MESSAGE_KEY_PREFIX = 'filterMessageValue-';
class FilterAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    constructor() {
        super(...arguments);
        this.filterActions = {};
    }
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
    }
    filterMessage(message) {
        return true;
    }
    onRemoveListen(messageType, messageWidgetId) {
        Object.keys(this.filterActions || {}).forEach(actionKey => {
            Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
                var _a;
                const messageKey = entry[0];
                if (((_a = entry[1]) === null || _a === void 0 ? void 0 : _a.messageWidgetId) === messageWidgetId) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.setValue(this.filterActions, `${actionKey}.${messageKey}.querySQL`, '');
                }
            });
            const filterActionValue = {
                layerDataSourceId: actionKey.slice(FILTER_ACTION_KEY_PREFIX.length),
                querySQL: this.getUnionAllFilterQuerySQL(actionKey)
            };
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue);
        });
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                let filterActionValue = null;
                let messageDataSource, actionDataSource;
                if (actionConfig) {
                    if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
                        if (message.records.length > 0 &&
                            message.records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'filterActionValue', null);
                            break;
                        }
                        messageDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId);
                        actionDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId);
                        if (messageDataSource && actionDataSource) {
                            if (message.records.length <= 0) {
                                // clear filter
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: ''
                                };
                            }
                            else if (actionConfig.enabledDataRelationShip) {
                                // when ds instances exit
                                // use DataRelationShip
                                let messageField = null;
                                let actionField = null;
                                if (actionConfig.messageUseDataSource.mainDataSourceId === actionConfig.actionUseDataSource.mainDataSourceId &&
                                    actionConfig.messageUseDataSource.rootDataSourceId === actionConfig.actionUseDataSource.rootDataSourceId) {
                                    // if trigger ds is same to action ds
                                    const messageDsSchema = messageDataSource.getSchema();
                                    const objectIdJimuFieldName = messageDsSchema && messageDsSchema.fields &&
                                        Object.keys(messageDsSchema.fields).find(jimuFieldName => messageDsSchema.fields[jimuFieldName].esriType === 'esriFieldTypeOID');
                                    messageField = messageDsSchema && messageDsSchema.fields && messageDsSchema.fields[objectIdJimuFieldName];
                                    actionField = messageField;
                                }
                                else {
                                    // if trigger ds isn't same to action ds
                                    const messageJimuFieldName = actionConfig.messageUseDataSource.fields[0];
                                    const actionJimuFieldName = actionConfig.actionUseDataSource.fields[0];
                                    messageField = messageDataSource.getSchema().fields[messageJimuFieldName];
                                    actionField = actionDataSource.getSchema().fields[actionJimuFieldName];
                                }
                                let whereSql = '';
                                if (messageField && actionField) {
                                    const messageFieldName = messageField.name;
                                    const messageFieldType = messageField.type;
                                    const tempMessage = message;
                                    const messageFieldValues = [];
                                    for (let i = 0; i < tempMessage.records.length; i++) {
                                        const tempFieldValue = tempMessage.records[i].getData()[messageFieldName];
                                        if (messageFieldValues.includes(`${this.formatValue(tempFieldValue, messageFieldType)}`)) {
                                            continue;
                                        }
                                        else {
                                            messageFieldValues.push(`${this.formatValue(tempMessage.records[i].getData()[messageFieldName], messageFieldType)}`);
                                        }
                                    }
                                    whereSql = `${actionField.name} IN `;
                                    if (messageFieldValues.length > 0) {
                                        whereSql = whereSql + `(${messageFieldValues.join(', ')})`;
                                    }
                                    else {
                                        whereSql = '';
                                    }
                                }
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        if (whereSql) {
                                            whereSql = whereSql + ' AND ' + moreAditionSQL;
                                        }
                                        else {
                                            whereSql = moreAditionSQL;
                                        }
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: whereSql
                                };
                            }
                            else {
                                // not use DataRelationShip
                                let whereSql = '';
                                if (message.records.length > 0) {
                                    const moreAditionSQL = actionConfig.sqlExprObj ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.dataSourceUtils.getArcGISSQL(actionConfig.sqlExprObj, actionDataSource).sql : null;
                                    if (moreAditionSQL) {
                                        whereSql = moreAditionSQL;
                                    }
                                }
                                else {
                                    whereSql = '';
                                }
                                filterActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: whereSql
                                };
                            }
                        }
                        else {
                            // when ds instances don't exist
                            filterActionValue = null;
                        }
                    }
                    else {
                        filterActionValue = null;
                    }
                }
                const messageKey = this.getFilterMessageKey(message.widgetId, messageDataSource === null || messageDataSource === void 0 ? void 0 : messageDataSource.id);
                const actionKey = this.getFilterActionKey(filterActionValue === null || filterActionValue === void 0 ? void 0 : filterActionValue.layerDataSourceId);
                if (filterActionValue) {
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.lodash.setValue(this.filterActions, `${actionKey}.${messageKey}`, {
                        querySQL: filterActionValue === null || filterActionValue === void 0 ? void 0 : filterActionValue.querySQL,
                        messageWidgetId: message.widgetId
                    });
                    filterActionValue.querySQL = this.getUnionAllFilterQuerySQL(actionKey);
                }
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, filterActionValue);
                break;
        }
        return true;
    }
    getUnionAllFilterQuerySQL(actionKey) {
        let unionQuerySQL = '';
        Object.entries(this.filterActions[actionKey] || {}).forEach(entry => {
            var _a;
            //const filterMessageKey = entry[0]
            const querySQL = (_a = entry[1]) === null || _a === void 0 ? void 0 : _a.querySQL;
            if (unionQuerySQL && querySQL) {
                unionQuerySQL = ` ${unionQuerySQL} AND ${querySQL} `;
            }
            else {
                unionQuerySQL = querySQL || unionQuerySQL;
            }
        });
        return unionQuerySQL;
    }
    getFilterActionKey(actionLayerDataSourceId) {
        const actionKey = `${FILTER_ACTION_KEY_PREFIX}${actionLayerDataSourceId}`;
        return actionKey;
    }
    getFilterMessageKey(messageWidgetId, messageLayerDataSourceId) {
        const messageKey = `${FILTER_MESSAGE_KEY_PREFIX}${messageWidgetId}-${messageLayerDataSourceId}`;
        return messageKey;
    }
    getLayerIdFromLayerDs(ds) {
        if (ds.layerId) {
            return ds.layerId;
        }
        else if (ds.layer) {
            return ds.layer.id;
        }
        else {
            return null;
        }
    }
    formatValue(value, type) {
        if (type === 'STRING') {
            return `'${value}'`;
        }
        else if (type === 'NUMBER') {
            return `${value}`;
        }
        else if (type === 'DATE') {
            return `'${value}'`;
        }
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNIa0I7QUFJbEIsTUFBTSx3QkFBd0IsR0FBVyxvQkFBb0I7QUFDN0QsTUFBTSx5QkFBeUIsR0FBVyxxQkFBcUI7QUFFaEQsTUFBTSxZQUFhLFNBQVEsNERBQXFCO0lBQS9EOztRQUNtQixrQkFBYSxHQU8xQixFQUFFO0lBd01SLENBQUM7SUF0TUMsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELE9BQU8sa0JBQWtCLENBQUMsV0FBVyxLQUFLLDZFQUFzQztJQUNsRixDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxjQUFjLENBQUUsV0FBd0IsRUFBRSxlQUF3QjtRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O2dCQUNsRSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxD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SyxRQUFRLEVBQUU7WUFDckIsT0FBTyxJQUFJLEtBQUssR0FBRztTQUNwQjthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPLEdBQUcsS0FBSyxFQUFFO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxLQUFLLEdBQUc7U0FDcEI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vZXh0ZW5zaW9ucy93aWRnZXRzL2FyY2dpcy9hcmNnaXMtbWFwL3NyYy9tZXNzYWdlLWFjdGlvbnMvZmlsdGVyLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbiwgTWVzc2FnZVR5cGUsIE1lc3NhZ2UsIEZpZWxkU2NoZW1hLCBsb2Rhc2gsXHJcbiAgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlLCBEYXRhU291cmNlTWFuYWdlciwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSwgSW1tdXRhYmxlT2JqZWN0LCBkYXRhU291cmNlVXRpbHMsIE11dGFibGVTdG9yZU1hbmFnZXIsIE1lc3NhZ2VEZXNjcmlwdGlvblxyXG59IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gJy4uL21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLXNldHRpbmcnXHJcblxyXG5jb25zdCBGSUxURVJfQUNUSU9OX0tFWV9QUkVGSVg6IHN0cmluZyA9ICdmaWx0ZXJBY3Rpb25WYWx1ZS0nXHJcbmNvbnN0IEZJTFRFUl9NRVNTQUdFX0tFWV9QUkVGSVg6IHN0cmluZyA9ICdmaWx0ZXJNZXNzYWdlVmFsdWUtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGZpbHRlckFjdGlvbnM6IHtcclxuICAgIFtmaWx0ZXJBY3Rpb25LZXk6IHN0cmluZ106IHtcclxuICAgICAgW2ZpbHRlck1lc3NhZ2VLZXk6IHN0cmluZ106IHtcclxuICAgICAgICBxdWVyeVNRTDogc3RyaW5nXHJcbiAgICAgICAgbWVzc2FnZVdpZGdldElkOiBzdHJpbmdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gPSB7fVxyXG5cclxuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlTGlzdGVuIChtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUsIG1lc3NhZ2VXaWRnZXRJZD86IHN0cmluZykge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5maWx0ZXJBY3Rpb25zIHx8IHt9KS5mb3JFYWNoKGFjdGlvbktleSA9PiB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZmlsdGVyQWN0aW9uc1thY3Rpb25LZXldIHx8IHt9KS5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlS2V5ID0gZW50cnlbMF1cclxuICAgICAgICBpZiAoZW50cnlbMV0/Lm1lc3NhZ2VXaWRnZXRJZCA9PT0gbWVzc2FnZVdpZGdldElkKSB7XHJcbiAgICAgICAgICBsb2Rhc2guc2V0VmFsdWUodGhpcy5maWx0ZXJBY3Rpb25zLCBgJHthY3Rpb25LZXl9LiR7bWVzc2FnZUtleX0ucXVlcnlTUUxgLCAnJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGZpbHRlckFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25LZXkuc2xpY2UoRklMVEVSX0FDVElPTl9LRVlfUFJFRklYLmxlbmd0aCksXHJcbiAgICAgICAgcXVlcnlTUUw6IHRoaXMuZ2V0VW5pb25BbGxGaWx0ZXJRdWVyeVNRTChhY3Rpb25LZXkpXHJcbiAgICAgIH1cclxuICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYWN0aW9uS2V5LCBmaWx0ZXJBY3Rpb25WYWx1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IElNQ29uZmlnKTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcclxuICAgICAgICBsZXQgZmlsdGVyQWN0aW9uVmFsdWU6IHtsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nfSA9IG51bGxcclxuICAgICAgICBsZXQgbWVzc2FnZURhdGFTb3VyY2UsIGFjdGlvbkRhdGFTb3VyY2VcclxuICAgICAgICBpZiAoYWN0aW9uQ29uZmlnKSB7XHJcbiAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlICYmIGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkc1swXS5kYXRhU291cmNlLmdldE1haW5EYXRhU291cmNlKCkuaWQgIT09IGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgJ2ZpbHRlckFjdGlvblZhbHVlJywgbnVsbClcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtZXNzYWdlRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZClcclxuICAgICAgICAgICAgYWN0aW9uRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKVxyXG5cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbkNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBkcyBpbnN0YW5jZXMgZXhpdFxyXG4gICAgICAgICAgICAgICAgLy8gdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXMgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZURzU2NoZW1hID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKClcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0SWRKaW11RmllbGROYW1lID0gbWVzc2FnZURzU2NoZW1hICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlRHNTY2hlbWEuZmllbGRzKS5maW5kKGppbXVGaWVsZE5hbWUgPT4gbWVzc2FnZURzU2NoZW1hLmZpZWxkc1tqaW11RmllbGROYW1lXS5lc3JpVHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVPSUQnKVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzW29iamVjdElkSmltdUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uRmllbGQgPSBtZXNzYWdlRmllbGRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXNuJ3Qgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzWzBdXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW21lc3NhZ2VKaW11RmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IGFjdGlvbkRhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW2FjdGlvbkppbXVGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGQgJiYgYWN0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkTmFtZSA9IG1lc3NhZ2VGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFR5cGUgPSBtZXNzYWdlRmllbGQudHlwZVxyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE1lc3NhZ2U6IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFZhbHVlcyA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBNZXNzYWdlLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmllbGRWYWx1ZSA9IHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5pbmNsdWRlcyhgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBGaWVsZFZhbHVlLCBtZXNzYWdlRmllbGRUeXBlKX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkVmFsdWVzLnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZSh0ZW1wTWVzc2FnZS5yZWNvcmRzW2ldLmdldERhdGEoKVttZXNzYWdlRmllbGROYW1lXSwgbWVzc2FnZUZpZWxkVHlwZSl9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gYCR7YWN0aW9uRmllbGQubmFtZX0gSU4gYFxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArIGAoJHttZXNzYWdlRmllbGRWYWx1ZXMuam9pbignLCAnKX0pYFxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQWRpdGlvblNRTCA9IGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTChhY3Rpb25Db25maWcuc3FsRXhwck9iaiwgYWN0aW9uRGF0YVNvdXJjZSkuc3FsIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2hlcmVTcWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gd2hlcmVTcWwgKyAnIEFORCAnICsgbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogd2hlcmVTcWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbm90IHVzZSBEYXRhUmVsYXRpb25TaGlwXHJcbiAgICAgICAgICAgICAgICBsZXQgd2hlcmVTcWwgPSAnJ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQWRpdGlvblNRTCA9IGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTChhY3Rpb25Db25maWcuc3FsRXhwck9iaiwgYWN0aW9uRGF0YVNvdXJjZSkuc3FsIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IG1vcmVBZGl0aW9uU1FMXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJBY3Rpb25WYWx1ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgbGF5ZXJEYXRhU291cmNlSWQ6IGFjdGlvbkRhdGFTb3VyY2UgJiYgYWN0aW9uRGF0YVNvdXJjZS5pZCxcclxuICAgICAgICAgICAgICAgICAgcXVlcnlTUUw6IHdoZXJlU3FsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHdoZW4gZHMgaW5zdGFuY2VzIGRvbid0IGV4aXN0XHJcbiAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlID0gbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUtleSA9IHRoaXMuZ2V0RmlsdGVyTWVzc2FnZUtleShtZXNzYWdlLndpZGdldElkLCBtZXNzYWdlRGF0YVNvdXJjZT8uaWQpXHJcbiAgICAgICAgY29uc3QgYWN0aW9uS2V5ID0gdGhpcy5nZXRGaWx0ZXJBY3Rpb25LZXkoZmlsdGVyQWN0aW9uVmFsdWU/LmxheWVyRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgIGlmIChmaWx0ZXJBY3Rpb25WYWx1ZSkge1xyXG4gICAgICAgICAgbG9kYXNoLnNldFZhbHVlKHRoaXMuZmlsdGVyQWN0aW9ucywgYCR7YWN0aW9uS2V5fS4ke21lc3NhZ2VLZXl9YCwge1xyXG4gICAgICAgICAgICBxdWVyeVNRTDogZmlsdGVyQWN0aW9uVmFsdWU/LnF1ZXJ5U1FMLFxyXG4gICAgICAgICAgICBtZXNzYWdlV2lkZ2V0SWQ6IG1lc3NhZ2Uud2lkZ2V0SWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBmaWx0ZXJBY3Rpb25WYWx1ZS5xdWVyeVNRTCA9IHRoaXMuZ2V0VW5pb25BbGxGaWx0ZXJRdWVyeVNRTChhY3Rpb25LZXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsIGFjdGlvbktleSwgZmlsdGVyQWN0aW9uVmFsdWUpXHJcbiAgICAgICAgYnJlYWtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2V0VW5pb25BbGxGaWx0ZXJRdWVyeVNRTCAoYWN0aW9uS2V5KSB7XHJcbiAgICBsZXQgdW5pb25RdWVyeVNRTCA9ICcnXHJcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLmZpbHRlckFjdGlvbnNbYWN0aW9uS2V5XSB8fCB7fSkuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgIC8vY29uc3QgZmlsdGVyTWVzc2FnZUtleSA9IGVudHJ5WzBdXHJcbiAgICAgIGNvbnN0IHF1ZXJ5U1FMID0gZW50cnlbMV0/LnF1ZXJ5U1FMXHJcbiAgICAgIGlmICh1bmlvblF1ZXJ5U1FMICYmIHF1ZXJ5U1FMKSB7XHJcbiAgICAgICAgdW5pb25RdWVyeVNRTCA9IGAgJHt1bmlvblF1ZXJ5U1FMfSBBTkQgJHtxdWVyeVNRTH0gYFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVuaW9uUXVlcnlTUUwgPSBxdWVyeVNRTCB8fCB1bmlvblF1ZXJ5U1FMXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdW5pb25RdWVyeVNRTFxyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyQWN0aW9uS2V5IChhY3Rpb25MYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgY29uc3QgYWN0aW9uS2V5ID0gYCR7RklMVEVSX0FDVElPTl9LRVlfUFJFRklYfSR7YWN0aW9uTGF5ZXJEYXRhU291cmNlSWR9YFxyXG4gICAgcmV0dXJuIGFjdGlvbktleVxyXG4gIH1cclxuXHJcbiAgZ2V0RmlsdGVyTWVzc2FnZUtleSAobWVzc2FnZVdpZGdldElkLCBtZXNzYWdlTGF5ZXJEYXRhU291cmNlSWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VLZXkgPSBgJHtGSUxURVJfTUVTU0FHRV9LRVlfUFJFRklYfSR7bWVzc2FnZVdpZGdldElkfS0ke21lc3NhZ2VMYXllckRhdGFTb3VyY2VJZH1gXHJcbiAgICByZXR1cm4gbWVzc2FnZUtleVxyXG4gIH1cclxuXHJcbiAgZ2V0TGF5ZXJJZEZyb21MYXllckRzIChkczogRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpIHtcclxuICAgIGlmICgoZHMgYXMgYW55KS5sYXllcklkKSB7XHJcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkubGF5ZXJJZFxyXG4gICAgfSBlbHNlIGlmICgoZHMgYXMgYW55KS5sYXllcikge1xyXG4gICAgICByZXR1cm4gKGRzIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2UpLmxheWVyLmlkXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0VmFsdWUgKHZhbHVlLCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlID09PSAnU1RSSU5HJykge1xyXG4gICAgICByZXR1cm4gYCcke3ZhbHVlfSdgXHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOVU1CRVInKSB7XHJcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1gXHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdEQVRFJykge1xyXG4gICAgICByZXR1cm4gYCcke3ZhbHVlfSdgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==