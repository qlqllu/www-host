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
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/filter-action.ts ***!
  \*************************************************************************************/
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
                        // Framework makes sure the following data sources are available before call onExecute() method.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9maWx0ZXItYWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNIa0I7QUFJbEIsTUFBTSx3QkFBd0IsR0FBVyxvQkFBb0I7QUFDN0QsTUFBTSx5QkFBeUIsR0FBVyxxQkFBcUI7QUFFaEQsTUFBTSxZQUFhLFNBQVEsNERBQXFCO0lBQS9EOztRQUNtQixrQkFBYSxHQU8xQixFQUFFO0lBeU1SLENBQUM7SUF2TUMsd0JBQXdCLENBQUUsa0JBQXNDO1FBQzlELE9BQU8sa0JBQWtCLENBQUMsV0FBVyxLQUFLLDZFQUFzQztJQUNsRixDQUFDO0lBRUQsYUFBYSxDQUFFLE9BQWdCO1FBQzdCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxjQUFjLENBQUUsV0FBd0IsRUFBRSxlQUF3QjtRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O2dCQUNsRSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFD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QUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNyQixPQUFPLElBQUksS0FBSyxHQUFHO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sR0FBRyxLQUFLLEVBQUU7U0FDbEI7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsT0FBTyxJQUFJLEtBQUssR0FBRztTQUNwQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIHR5cGUgRmllbGRTY2hlbWEsIGxvZGFzaCxcclxuICB0eXBlIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgRGF0YVNvdXJjZU1hbmFnZXIsIHR5cGUgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSwgdHlwZSBJbW11dGFibGVPYmplY3QsIGRhdGFTb3VyY2VVdGlscywgTXV0YWJsZVN0b3JlTWFuYWdlciwgdHlwZSBNZXNzYWdlRGVzY3JpcHRpb25cclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQgeyB0eXBlIElNQ29uZmlnIH0gZnJvbSAnLi4vbWVzc2FnZS1hY3Rpb25zL2ZpbHRlci1hY3Rpb24tc2V0dGluZydcclxuXHJcbmNvbnN0IEZJTFRFUl9BQ1RJT05fS0VZX1BSRUZJWDogc3RyaW5nID0gJ2ZpbHRlckFjdGlvblZhbHVlLSdcclxuY29uc3QgRklMVEVSX01FU1NBR0VfS0VZX1BSRUZJWDogc3RyaW5nID0gJ2ZpbHRlck1lc3NhZ2VWYWx1ZS0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24ge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQWN0aW9uczoge1xyXG4gICAgW2ZpbHRlckFjdGlvbktleTogc3RyaW5nXToge1xyXG4gICAgICBbZmlsdGVyTWVzc2FnZUtleTogc3RyaW5nXToge1xyXG4gICAgICAgIHF1ZXJ5U1FMOiBzdHJpbmdcclxuICAgICAgICBtZXNzYWdlV2lkZ2V0SWQ6IHN0cmluZ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSA9IHt9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2VEZXNjcmlwdGlvbiAobWVzc2FnZURlc2NyaXB0aW9uOiBNZXNzYWdlRGVzY3JpcHRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiBtZXNzYWdlRGVzY3JpcHRpb24ubWVzc2FnZVR5cGUgPT09IE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlXHJcbiAgfVxyXG5cclxuICBmaWx0ZXJNZXNzYWdlIChtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgb25SZW1vdmVMaXN0ZW4gKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSwgbWVzc2FnZVdpZGdldElkPzogc3RyaW5nKSB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmZpbHRlckFjdGlvbnMgfHwge30pLmZvckVhY2goYWN0aW9uS2V5ID0+IHtcclxuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5maWx0ZXJBY3Rpb25zW2FjdGlvbktleV0gfHwge30pLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VLZXkgPSBlbnRyeVswXVxyXG4gICAgICAgIGlmIChlbnRyeVsxXT8ubWVzc2FnZVdpZGdldElkID09PSBtZXNzYWdlV2lkZ2V0SWQpIHtcclxuICAgICAgICAgIGxvZGFzaC5zZXRWYWx1ZSh0aGlzLmZpbHRlckFjdGlvbnMsIGAke2FjdGlvbktleX0uJHttZXNzYWdlS2V5fS5xdWVyeVNRTGAsICcnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgbGF5ZXJEYXRhU291cmNlSWQ6IGFjdGlvbktleS5zbGljZShGSUxURVJfQUNUSU9OX0tFWV9QUkVGSVgubGVuZ3RoKSxcclxuICAgICAgICBxdWVyeVNRTDogdGhpcy5nZXRVbmlvbkFsbEZpbHRlclF1ZXJ5U1FMKGFjdGlvbktleSlcclxuICAgICAgfVxyXG4gICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCBhY3Rpb25LZXksIGZpbHRlckFjdGlvblZhbHVlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxyXG4gICAgICAgIGxldCBmaWx0ZXJBY3Rpb25WYWx1ZTogeyBsYXllckRhdGFTb3VyY2VJZDogc3RyaW5nLCBxdWVyeVNRTDogc3RyaW5nIH0gPSBudWxsXHJcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhU291cmNlLCBhY3Rpb25EYXRhU291cmNlXHJcbiAgICAgICAgaWYgKGFjdGlvbkNvbmZpZykge1xyXG4gICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSAmJiBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpLmlkICE9PSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdmaWx0ZXJBY3Rpb25WYWx1ZScsIG51bGwpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRnJhbWV3b3JrIG1ha2VzIHN1cmUgdGhlIGZvbGxvd2luZyBkYXRhIHNvdXJjZXMgYXJlIGF2YWlsYWJsZSBiZWZvcmUgY2FsbCBvbkV4ZWN1dGUoKSBtZXRob2QuXHJcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgICAgICBhY3Rpb25EYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpXHJcblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGFTb3VyY2UgJiYgYWN0aW9uRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25EYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uQ29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBleGl0XHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgRGF0YVJlbGF0aW9uU2hpcFxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VGaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25GaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gaWYgdHJpZ2dlciBkcyBpcyBzYW1lIHRvIGFjdGlvbiBkc1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRHNTY2hlbWEgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RJZEppbXVGaWVsZE5hbWUgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMpLmZpbmQoamltdUZpZWxkTmFtZSA9PiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzW2ppbXVGaWVsZE5hbWVdLmVzcmlUeXBlID09PSAnZXNyaUZpZWxkVHlwZU9JRCcpXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IG1lc3NhZ2VEc1NjaGVtYSAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHNbb2JqZWN0SWRKaW11RmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IG1lc3NhZ2VGaWVsZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gaWYgdHJpZ2dlciBkcyBpc24ndCBzYW1lIHRvIGFjdGlvbiBkc1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSmltdUZpZWxkTmFtZSA9IGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cclxuICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uSmltdUZpZWxkTmFtZSA9IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1swXVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbbWVzc2FnZUppbXVGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkZpZWxkID0gYWN0aW9uRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbYWN0aW9uSmltdUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZCAmJiBhY3Rpb25GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRmllbGROYW1lID0gbWVzc2FnZUZpZWxkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVHlwZSA9IG1lc3NhZ2VGaWVsZC50eXBlXHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTWVzc2FnZTogRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVmFsdWVzID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcE1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGaWVsZFZhbHVlID0gdGVtcE1lc3NhZ2UucmVjb3Jkc1tpXS5nZXREYXRhKClbbWVzc2FnZUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUZpZWxkVmFsdWVzLmluY2x1ZGVzKGAke3RoaXMuZm9ybWF0VmFsdWUodGVtcEZpZWxkVmFsdWUsIG1lc3NhZ2VGaWVsZFR5cGUpfWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGRWYWx1ZXMucHVzaChgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdLCBtZXNzYWdlRmllbGRUeXBlKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBgJHthY3Rpb25GaWVsZC5uYW1lfSBJTiBgXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUZpZWxkVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IHdoZXJlU3FsICsgYCgke21lc3NhZ2VGaWVsZFZhbHVlcy5qb2luKCcsICcpfSlgXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aGVyZVNxbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArICcgQU5EICcgKyBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IG1vcmVBZGl0aW9uU1FMXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25EYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiB3aGVyZVNxbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3QgdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCB3aGVyZVNxbCA9ICcnXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogd2hlcmVTcWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gd2hlbiBkcyBpbnN0YW5jZXMgZG9uJ3QgZXhpc3RcclxuICAgICAgICAgICAgICBmaWx0ZXJBY3Rpb25WYWx1ZSA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmlsdGVyQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlS2V5ID0gdGhpcy5nZXRGaWx0ZXJNZXNzYWdlS2V5KG1lc3NhZ2Uud2lkZ2V0SWQsIG1lc3NhZ2VEYXRhU291cmNlPy5pZClcclxuICAgICAgICBjb25zdCBhY3Rpb25LZXkgPSB0aGlzLmdldEZpbHRlckFjdGlvbktleShmaWx0ZXJBY3Rpb25WYWx1ZT8ubGF5ZXJEYXRhU291cmNlSWQpXHJcbiAgICAgICAgaWYgKGZpbHRlckFjdGlvblZhbHVlKSB7XHJcbiAgICAgICAgICBsb2Rhc2guc2V0VmFsdWUodGhpcy5maWx0ZXJBY3Rpb25zLCBgJHthY3Rpb25LZXl9LiR7bWVzc2FnZUtleX1gLCB7XHJcbiAgICAgICAgICAgIHF1ZXJ5U1FMOiBmaWx0ZXJBY3Rpb25WYWx1ZT8ucXVlcnlTUUwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VXaWRnZXRJZDogbWVzc2FnZS53aWRnZXRJZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGZpbHRlckFjdGlvblZhbHVlLnF1ZXJ5U1FMID0gdGhpcy5nZXRVbmlvbkFsbEZpbHRlclF1ZXJ5U1FMKGFjdGlvbktleSlcclxuICAgICAgICB9XHJcbiAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYWN0aW9uS2V5LCBmaWx0ZXJBY3Rpb25WYWx1ZSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRVbmlvbkFsbEZpbHRlclF1ZXJ5U1FMIChhY3Rpb25LZXkpIHtcclxuICAgIGxldCB1bmlvblF1ZXJ5U1FMID0gJydcclxuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZmlsdGVyQWN0aW9uc1thY3Rpb25LZXldIHx8IHt9KS5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgLy9jb25zdCBmaWx0ZXJNZXNzYWdlS2V5ID0gZW50cnlbMF1cclxuICAgICAgY29uc3QgcXVlcnlTUUwgPSBlbnRyeVsxXT8ucXVlcnlTUUxcclxuICAgICAgaWYgKHVuaW9uUXVlcnlTUUwgJiYgcXVlcnlTUUwpIHtcclxuICAgICAgICB1bmlvblF1ZXJ5U1FMID0gYCAke3VuaW9uUXVlcnlTUUx9IEFORCAke3F1ZXJ5U1FMfSBgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdW5pb25RdWVyeVNRTCA9IHF1ZXJ5U1FMIHx8IHVuaW9uUXVlcnlTUUxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiB1bmlvblF1ZXJ5U1FMXHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJBY3Rpb25LZXkgKGFjdGlvbkxheWVyRGF0YVNvdXJjZUlkKSB7XHJcbiAgICBjb25zdCBhY3Rpb25LZXkgPSBgJHtGSUxURVJfQUNUSU9OX0tFWV9QUkVGSVh9JHthY3Rpb25MYXllckRhdGFTb3VyY2VJZH1gXHJcbiAgICByZXR1cm4gYWN0aW9uS2V5XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJNZXNzYWdlS2V5IChtZXNzYWdlV2lkZ2V0SWQsIG1lc3NhZ2VMYXllckRhdGFTb3VyY2VJZCkge1xyXG4gICAgY29uc3QgbWVzc2FnZUtleSA9IGAke0ZJTFRFUl9NRVNTQUdFX0tFWV9QUkVGSVh9JHttZXNzYWdlV2lkZ2V0SWR9LSR7bWVzc2FnZUxheWVyRGF0YVNvdXJjZUlkfWBcclxuICAgIHJldHVybiBtZXNzYWdlS2V5XHJcbiAgfVxyXG5cclxuICBnZXRMYXllcklkRnJvbUxheWVyRHMgKGRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkge1xyXG4gICAgaWYgKChkcyBhcyBhbnkpLmxheWVySWQpIHtcclxuICAgICAgcmV0dXJuIChkcyBhcyBGZWF0dXJlUXVlcnlEYXRhU291cmNlKS5sYXllcklkXHJcbiAgICB9IGVsc2UgaWYgKChkcyBhcyBhbnkpLmxheWVyKSB7XHJcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkubGF5ZXIuaWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSAodmFsdWUsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdTVFJJTkcnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfWBcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0RBVEUnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9