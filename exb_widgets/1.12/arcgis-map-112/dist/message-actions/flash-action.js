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
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/arcgis-map-112/src/message-actions/flash-action.ts ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FlashAction)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class FlashAction extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.AbstractMessageAction {
    filterMessageDescription(messageDescription) {
        return messageDescription.messageType === jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange;
    }
    filterMessage(message) {
        return true;
    }
    onExecute(message, actionConfig) {
        switch (message.type) {
            case jimu_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.DataRecordsSelectionChange:
                if (message.records.length === 0) {
                    break;
                }
                let flashActionValue = null;
                if (actionConfig) {
                    if (actionConfig.messageUseDataSource && actionConfig.actionUseDataSource) {
                        if (message.records.length > 0 &&
                            message.records[0].dataSource.getMainDataSource().id !== actionConfig.messageUseDataSource.mainDataSourceId) {
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, 'flashActionValue', null);
                            break;
                        }
                        // Framework makes sure the following data sources are available before call onExecute() method.
                        const messageDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.messageUseDataSource.mainDataSourceId);
                        const actionDataSource = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance().getDataSource(actionConfig.actionUseDataSource.mainDataSourceId);
                        if (messageDataSource && actionDataSource) {
                            // when ds instances exit
                            if (actionConfig.enabledDataRelationShip) {
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
                                const query = {
                                    outFields: ['*'],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
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
                                const query = {
                                    outFields: ['*'],
                                    where: whereSql,
                                    returnGeometry: true
                                };
                                const realQuery = actionDataSource.getRealQueryParams(query, 'query');
                                flashActionValue = {
                                    layerDataSourceId: actionDataSource && actionDataSource.id,
                                    querySQL: realQuery && realQuery.where
                                };
                            }
                        }
                        else {
                            // when ds instances don't exist
                            flashActionValue = null;
                        }
                    }
                    else {
                        flashActionValue = null;
                    }
                }
                const actionKey = `flashActionValue-${flashActionValue === null || flashActionValue === void 0 ? void 0 : flashActionValue.layerDataSourceId}`;
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.MutableStoreManager.getInstance().updateStateValue(this.widgetId, actionKey, flashActionValue);
                break;
        }
        return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMtbWFwLTExMi9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUlILE1BQU0sV0FBWSxTQUFRLDREQUFxQjtJQUM1RCx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssNkVBQXNDO0lBQ2xGLENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELFNBQVMsQ0FBRSxPQUFnQixFQUFFLFlBQXVCO1FBQ2xELFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLDZFQUFzQztnQkFDekMsSUFBSyxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2RSxNQUFLO2lCQUNOO2dCQUVELElBQUksZ0JBQWdCLEdBQW9ELElBQUk7Z0JBQzVFLElBQUksWUFBWSxFQUFFO29CQUNoQixJQUFJLFlBQVksQ0FBQyxvQkFBb0IsSUFBSSxZQUFZLENBQUMsbUJBQW1CLEVBQUU7d0JBQ3pFLElBQUssT0FBNkMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQ2xFLE9BQTZDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFB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UUFBUSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDOUYsTUFBSztTQUNSO1FBRUQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHFCQUFxQixDQUFFLEVBQW1EO1FBQ3hFLElBQUssRUFBVSxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFRLEVBQTZCLENBQUMsT0FBTztTQUM5QzthQUFNLElBQUssRUFBVSxDQUFDLEtBQUssRUFBRTtZQUM1QixPQUFRLEVBQTZCLENBQUMsS0FBSyxDQUFDLEVBQUU7U0FDL0M7YUFBTTtZQUNMLE9BQU8sSUFBSTtTQUNaO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBRSxLQUFLLEVBQUUsSUFBWTtRQUM5QixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsT0FBTyxJQUFJLEtBQUssR0FBRztTQUNwQjthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixPQUFPLEdBQUcsS0FBSyxFQUFFO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxLQUFLLEdBQUc7U0FDcEI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYXJjZ2lzLW1hcC0xMTIvc3JjL21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcclxuICBBYnN0cmFjdE1lc3NhZ2VBY3Rpb24sIE1lc3NhZ2VUeXBlLCB0eXBlIE1lc3NhZ2UsIHR5cGUgRmllbGRTY2hlbWEsXHJcbiAgdHlwZSBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UsIERhdGFTb3VyY2VNYW5hZ2VyLCB0eXBlIEZlYXR1cmVRdWVyeURhdGFTb3VyY2UsIHR5cGUgSW1tdXRhYmxlT2JqZWN0LCBkYXRhU291cmNlVXRpbHMsIE11dGFibGVTdG9yZU1hbmFnZXIsIHR5cGUgTWVzc2FnZURlc2NyaXB0aW9uXHJcbn0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgdHlwZSBJTUNvbmZpZyB9IGZyb20gJy4uL21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24tc2V0dGluZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RNZXNzYWdlQWN0aW9uIHtcclxuICBmaWx0ZXJNZXNzYWdlRGVzY3JpcHRpb24gKG1lc3NhZ2VEZXNjcmlwdGlvbjogTWVzc2FnZURlc2NyaXB0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gbWVzc2FnZURlc2NyaXB0aW9uLm1lc3NhZ2VUeXBlID09PSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyTWVzc2FnZSAobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIG9uRXhlY3V0ZSAobWVzc2FnZTogTWVzc2FnZSwgYWN0aW9uQ29uZmlnPzogSU1Db25maWcpOiBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XHJcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLkRhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlOlxyXG4gICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZsYXNoQWN0aW9uVmFsdWU6IHsgbGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZyB9ID0gbnVsbFxyXG4gICAgICAgIGlmIChhY3Rpb25Db25maWcpIHtcclxuICAgICAgICAgIGlmIChhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UgJiYgYWN0aW9uQ29uZmlnLmFjdGlvblVzZURhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzWzBdLmRhdGFTb3VyY2UuZ2V0TWFpbkRhdGFTb3VyY2UoKS5pZCAhPT0gYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgICBNdXRhYmxlU3RvcmVNYW5hZ2VyLmdldEluc3RhbmNlKCkudXBkYXRlU3RhdGVWYWx1ZSh0aGlzLndpZGdldElkLCAnZmxhc2hBY3Rpb25WYWx1ZScsIG51bGwpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRnJhbWV3b3JrIG1ha2VzIHN1cmUgdGhlIGZvbGxvd2luZyBkYXRhIHNvdXJjZXMgYXJlIGF2YWlsYWJsZSBiZWZvcmUgY2FsbCBvbkV4ZWN1dGUoKSBtZXRob2QuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKVxyXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25EYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQpXHJcblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGFTb3VyY2UgJiYgYWN0aW9uRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgIC8vIHdoZW4gZHMgaW5zdGFuY2VzIGV4aXRcclxuICAgICAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLmVuYWJsZWREYXRhUmVsYXRpb25TaGlwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgRGF0YVJlbGF0aW9uU2hpcFxyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VGaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25GaWVsZDogSW1tdXRhYmxlT2JqZWN0PEZpZWxkU2NoZW1hPiA9IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLm1haW5EYXRhU291cmNlSWQgJiZcclxuICAgICAgICAgICAgICAgICAgYWN0aW9uQ29uZmlnLm1lc3NhZ2VVc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQgPT09IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gaWYgdHJpZ2dlciBkcyBpcyBzYW1lIHRvIGFjdGlvbiBkc1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRHNTY2hlbWEgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3RJZEppbXVGaWVsZE5hbWUgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMpLmZpbmQoamltdUZpZWxkTmFtZSA9PiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzW2ppbXVGaWVsZE5hbWVdLmVzcmlUeXBlID09PSAnZXNyaUZpZWxkVHlwZU9JRCcpXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2VGaWVsZCA9IG1lc3NhZ2VEc1NjaGVtYSAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHNbb2JqZWN0SWRKaW11RmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IG1lc3NhZ2VGaWVsZFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gaWYgdHJpZ2dlciBkcyBpc24ndCBzYW1lIHRvIGFjdGlvbiBkc1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlSmltdUZpZWxkTmFtZSA9IGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cclxuICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uSmltdUZpZWxkTmFtZSA9IGFjdGlvbkNvbmZpZy5hY3Rpb25Vc2VEYXRhU291cmNlLmZpZWxkc1swXVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbbWVzc2FnZUppbXVGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkZpZWxkID0gYWN0aW9uRGF0YVNvdXJjZS5nZXRTY2hlbWEoKS5maWVsZHNbYWN0aW9uSmltdUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZCAmJiBhY3Rpb25GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRmllbGROYW1lID0gbWVzc2FnZUZpZWxkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVHlwZSA9IG1lc3NhZ2VGaWVsZC50eXBlXHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wTWVzc2FnZTogRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlID0gbWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkVmFsdWVzID0gW11cclxuXHJcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcE1lc3NhZ2UucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGaWVsZFZhbHVlID0gdGVtcE1lc3NhZ2UucmVjb3Jkc1tpXS5nZXREYXRhKClbbWVzc2FnZUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUZpZWxkVmFsdWVzLmluY2x1ZGVzKGAke3RoaXMuZm9ybWF0VmFsdWUodGVtcEZpZWxkVmFsdWUsIG1lc3NhZ2VGaWVsZFR5cGUpfWApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGRWYWx1ZXMucHVzaChgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdLCBtZXNzYWdlRmllbGRUeXBlKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBgJHthY3Rpb25GaWVsZC5uYW1lfSBJTiBgXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUZpZWxkVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IHdoZXJlU3FsICsgYCgke21lc3NhZ2VGaWVsZFZhbHVlcy5qb2luKCcsICcpfSlgXHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aGVyZVNxbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArICcgQU5EICcgKyBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9IG1vcmVBZGl0aW9uU1FMXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlOiB3aGVyZVNxbCxcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFsUXVlcnkgPSAoYWN0aW9uRGF0YVNvdXJjZSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkuZ2V0UmVhbFF1ZXJ5UGFyYW1zKHF1ZXJ5LCAncXVlcnknKVxyXG5cclxuICAgICAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25EYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiByZWFsUXVlcnkgJiYgcmVhbFF1ZXJ5LndoZXJlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5vdCB1c2UgRGF0YVJlbGF0aW9uU2hpcFxyXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbW9yZUFkaXRpb25TUUwgPSBhY3Rpb25Db25maWcuc3FsRXhwck9iaiA/IGRhdGFTb3VyY2VVdGlscy5nZXRBcmNHSVNTUUwoYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmosIGFjdGlvbkRhdGFTb3VyY2UpLnNxbCA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgaWYgKG1vcmVBZGl0aW9uU1FMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3aGVyZVNxbCA9ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgIG91dEZpZWxkczogWycqJ10sXHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlOiB3aGVyZVNxbCxcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFsUXVlcnkgPSAoYWN0aW9uRGF0YVNvdXJjZSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkuZ2V0UmVhbFF1ZXJ5UGFyYW1zKHF1ZXJ5LCAncXVlcnknKVxyXG5cclxuICAgICAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSB7XHJcbiAgICAgICAgICAgICAgICAgIGxheWVyRGF0YVNvdXJjZUlkOiBhY3Rpb25EYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5U1FMOiByZWFsUXVlcnkgJiYgcmVhbFF1ZXJ5LndoZXJlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHdoZW4gZHMgaW5zdGFuY2VzIGRvbid0IGV4aXN0XHJcbiAgICAgICAgICAgICAgZmxhc2hBY3Rpb25WYWx1ZSA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZmxhc2hBY3Rpb25WYWx1ZSA9IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWN0aW9uS2V5ID0gYGZsYXNoQWN0aW9uVmFsdWUtJHtmbGFzaEFjdGlvblZhbHVlPy5sYXllckRhdGFTb3VyY2VJZH1gXHJcbiAgICAgICAgTXV0YWJsZVN0b3JlTWFuYWdlci5nZXRJbnN0YW5jZSgpLnVwZGF0ZVN0YXRlVmFsdWUodGhpcy53aWRnZXRJZCwgYWN0aW9uS2V5LCBmbGFzaEFjdGlvblZhbHVlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGdldExheWVySWRGcm9tTGF5ZXJEcyAoZHM6IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfCBGZWF0dXJlUXVlcnlEYXRhU291cmNlKSB7XHJcbiAgICBpZiAoKGRzIGFzIGFueSkubGF5ZXJJZCkge1xyXG4gICAgICByZXR1cm4gKGRzIGFzIEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmxheWVySWRcclxuICAgIH0gZWxzZSBpZiAoKGRzIGFzIGFueSkubGF5ZXIpIHtcclxuICAgICAgcmV0dXJuIChkcyBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlKS5sYXllci5pZFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFZhbHVlICh2YWx1ZSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ1NUUklORycpIHtcclxuICAgICAgcmV0dXJuIGAnJHt2YWx1ZX0nYFxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnTlVNQkVSJykge1xyXG4gICAgICByZXR1cm4gYCR7dmFsdWV9YFxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnREFURScpIHtcclxuICAgICAgcmV0dXJuIGAnJHt2YWx1ZX0nYFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=