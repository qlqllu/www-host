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
/*!**********************************************************************************!*\
  !*** ./extensions/widgets/arcgis/arcgis-map/src/message-actions/flash-action.ts ***!
  \**********************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9kaXN0L21lc3NhZ2UtYWN0aW9ucy9mbGFzaC1hY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0hrQjtBQUlILE1BQU0sV0FBWSxTQUFRLDREQUFxQjtJQUM1RCx3QkFBd0IsQ0FBRSxrQkFBc0M7UUFDOUQsT0FBTyxrQkFBa0IsQ0FBQyxXQUFXLEtBQUssNkVBQXNDO0lBQ2xGLENBQUM7SUFFRCxhQUFhLENBQUUsT0FBZ0I7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELFNBQVMsQ0FBRSxPQUFnQixFQUFFLFlBQXVCO1FBQ2xELFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLDZFQUFzQztnQkFDekMsSUFBSyxPQUE2QyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2RSxNQUFLO2lCQUNOO2dCQUVELElBQUksZ0JBQWdCLEdBQWtELElBQUk7Z0JBQzFFLElBQUksWUFBWSxFQUFFO29CQUNoQixJQUFJLFlBQVksQ0FBQyxvQkFBb0IsSUFBSSxZQUFZLENBQUMsbUJBQW1CLEVBQUU7d0JBQ3pFLElBQUssT0FBNkMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQ2xFLE9BQTZDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxp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QUFTLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQzlGLE1BQUs7U0FDUjtRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxxQkFBcUIsQ0FBRSxFQUFtRDtRQUN4RSxJQUFLLEVBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBUSxFQUE2QixDQUFDLE9BQU87U0FDOUM7YUFBTSxJQUFLLEVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBUSxFQUE2QixDQUFDLEtBQUssQ0FBQyxFQUFFO1NBQy9DO2FBQU07WUFDTCxPQUFPLElBQUk7U0FDWjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUUsS0FBSyxFQUFFLElBQVk7UUFDOUIsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxLQUFLLEdBQUc7U0FDcEI7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxHQUFHLEtBQUssRUFBRTtTQUNsQjthQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksS0FBSyxHQUFHO1NBQ3BCO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2V4dGVuc2lvbnMvd2lkZ2V0cy9hcmNnaXMvYXJjZ2lzLW1hcC9zcmMvbWVzc2FnZS1hY3Rpb25zL2ZsYXNoLWFjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gIEFic3RyYWN0TWVzc2FnZUFjdGlvbiwgTWVzc2FnZVR5cGUsIE1lc3NhZ2UsIEZpZWxkU2NoZW1hLFxyXG4gIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSwgRGF0YVNvdXJjZU1hbmFnZXIsIEZlYXR1cmVRdWVyeURhdGFTb3VyY2UsIEltbXV0YWJsZU9iamVjdCwgZGF0YVNvdXJjZVV0aWxzLCBNdXRhYmxlU3RvcmVNYW5hZ2VyLCBNZXNzYWdlRGVzY3JpcHRpb25cclxufSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IEZlYXR1cmVMYXllckRhdGFTb3VyY2UgfSBmcm9tICdqaW11LWFyY2dpcydcclxuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tICcuLi9tZXNzYWdlLWFjdGlvbnMvZmxhc2gtYWN0aW9uLXNldHRpbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbGFzaEFjdGlvbiBleHRlbmRzIEFic3RyYWN0TWVzc2FnZUFjdGlvbiB7XHJcbiAgZmlsdGVyTWVzc2FnZURlc2NyaXB0aW9uIChtZXNzYWdlRGVzY3JpcHRpb246IE1lc3NhZ2VEZXNjcmlwdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG1lc3NhZ2VEZXNjcmlwdGlvbi5tZXNzYWdlVHlwZSA9PT0gTWVzc2FnZVR5cGUuRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VcclxuICB9XHJcblxyXG4gIGZpbHRlck1lc3NhZ2UgKG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBvbkV4ZWN1dGUgKG1lc3NhZ2U6IE1lc3NhZ2UsIGFjdGlvbkNvbmZpZz86IElNQ29uZmlnKTogUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xyXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5EYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZTpcclxuICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmbGFzaEFjdGlvblZhbHVlOiB7bGF5ZXJEYXRhU291cmNlSWQ6IHN0cmluZywgcXVlcnlTUUw6IHN0cmluZ30gPSBudWxsXHJcbiAgICAgICAgaWYgKGFjdGlvbkNvbmZpZykge1xyXG4gICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZSAmJiBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZSkge1xyXG4gICAgICAgICAgICBpZiAoKG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlKS5yZWNvcmRzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHNbMF0uZGF0YVNvdXJjZS5nZXRNYWluRGF0YVNvdXJjZSgpLmlkICE9PSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsICdmbGFzaEFjdGlvblZhbHVlJywgbnVsbClcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZClcclxuICAgICAgICAgICAgY29uc3QgYWN0aW9uRGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkKVxyXG5cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhU291cmNlICYmIGFjdGlvbkRhdGFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBleGl0XHJcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5lbmFibGVkRGF0YVJlbGF0aW9uU2hpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uRmllbGQ6IEltbXV0YWJsZU9iamVjdDxGaWVsZFNjaGVtYT4gPSBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkICYmXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkNvbmZpZy5tZXNzYWdlVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkID09PSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXMgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZURzU2NoZW1hID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKClcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0SWRKaW11RmllbGROYW1lID0gbWVzc2FnZURzU2NoZW1hICYmIG1lc3NhZ2VEc1NjaGVtYS5maWVsZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtZXNzYWdlRHNTY2hlbWEuZmllbGRzKS5maW5kKGppbXVGaWVsZE5hbWUgPT4gbWVzc2FnZURzU2NoZW1hLmZpZWxkc1tqaW11RmllbGROYW1lXS5lc3JpVHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVPSUQnKVxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlRmllbGQgPSBtZXNzYWdlRHNTY2hlbWEgJiYgbWVzc2FnZURzU2NoZW1hLmZpZWxkcyAmJiBtZXNzYWdlRHNTY2hlbWEuZmllbGRzW29iamVjdElkSmltdUZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uRmllbGQgPSBtZXNzYWdlRmllbGRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHRyaWdnZXIgZHMgaXNuJ3Qgc2FtZSB0byBhY3Rpb24gZHNcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcubWVzc2FnZVVzZURhdGFTb3VyY2UuZmllbGRzWzBdXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbkppbXVGaWVsZE5hbWUgPSBhY3Rpb25Db25maWcuYWN0aW9uVXNlRGF0YVNvdXJjZS5maWVsZHNbMF1cclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkID0gbWVzc2FnZURhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW21lc3NhZ2VKaW11RmllbGROYW1lXVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb25GaWVsZCA9IGFjdGlvbkRhdGFTb3VyY2UuZ2V0U2NoZW1hKCkuZmllbGRzW2FjdGlvbkppbXVGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRmllbGQgJiYgYWN0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUZpZWxkTmFtZSA9IG1lc3NhZ2VGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFR5cGUgPSBtZXNzYWdlRmllbGQudHlwZVxyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcE1lc3NhZ2U6IERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSA9IG1lc3NhZ2UgYXMgRGF0YVJlY29yZHNTZWxlY3Rpb25DaGFuZ2VNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VGaWVsZFZhbHVlcyA9IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBNZXNzYWdlLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRmllbGRWYWx1ZSA9IHRlbXBNZXNzYWdlLnJlY29yZHNbaV0uZ2V0RGF0YSgpW21lc3NhZ2VGaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5pbmNsdWRlcyhgJHt0aGlzLmZvcm1hdFZhbHVlKHRlbXBGaWVsZFZhbHVlLCBtZXNzYWdlRmllbGRUeXBlKX1gKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUZpZWxkVmFsdWVzLnB1c2goYCR7dGhpcy5mb3JtYXRWYWx1ZSh0ZW1wTWVzc2FnZS5yZWNvcmRzW2ldLmdldERhdGEoKVttZXNzYWdlRmllbGROYW1lXSwgbWVzc2FnZUZpZWxkVHlwZSl9YClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gYCR7YWN0aW9uRmllbGQubmFtZX0gSU4gYFxyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VGaWVsZFZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSB3aGVyZVNxbCArIGAoJHttZXNzYWdlRmllbGRWYWx1ZXMuam9pbignLCAnKX0pYFxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gJydcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgobWVzc2FnZSBhcyBEYXRhUmVjb3Jkc1NlbGVjdGlvbkNoYW5nZU1lc3NhZ2UpLnJlY29yZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBtb3JlQWRpdGlvblNRTCA9IGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqID8gZGF0YVNvdXJjZVV0aWxzLmdldEFyY0dJU1NRTChhY3Rpb25Db25maWcuc3FsRXhwck9iaiwgYWN0aW9uRGF0YVNvdXJjZSkuc3FsIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICBpZiAobW9yZUFkaXRpb25TUUwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2hlcmVTcWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gd2hlcmVTcWwgKyAnIEFORCAnICsgbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSBtb3JlQWRpdGlvblNRTFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgICAgICAgICB3aGVyZTogd2hlcmVTcWwsXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFF1ZXJ5ID0gKGFjdGlvbkRhdGFTb3VyY2UgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmdldFJlYWxRdWVyeVBhcmFtcyhxdWVyeSwgJ3F1ZXJ5JylcclxuXHJcbiAgICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogcmVhbFF1ZXJ5ICYmIHJlYWxRdWVyeS53aGVyZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBub3QgdXNlIERhdGFSZWxhdGlvblNoaXBcclxuICAgICAgICAgICAgICAgIGxldCB3aGVyZVNxbCA9ICcnXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChtZXNzYWdlIGFzIERhdGFSZWNvcmRzU2VsZWN0aW9uQ2hhbmdlTWVzc2FnZSkucmVjb3Jkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vcmVBZGl0aW9uU1FMID0gYWN0aW9uQ29uZmlnLnNxbEV4cHJPYmogPyBkYXRhU291cmNlVXRpbHMuZ2V0QXJjR0lTU1FMKGFjdGlvbkNvbmZpZy5zcWxFeHByT2JqLCBhY3Rpb25EYXRhU291cmNlKS5zcWwgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtb3JlQWRpdGlvblNRTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlU3FsID0gbW9yZUFkaXRpb25TUUxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2hlcmVTcWwgPSAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgICBvdXRGaWVsZHM6IFsnKiddLFxyXG4gICAgICAgICAgICAgICAgICB3aGVyZTogd2hlcmVTcWwsXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbFF1ZXJ5ID0gKGFjdGlvbkRhdGFTb3VyY2UgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSB8IEZlYXR1cmVRdWVyeURhdGFTb3VyY2UpLmdldFJlYWxRdWVyeVBhcmFtcyhxdWVyeSwgJ3F1ZXJ5JylcclxuXHJcbiAgICAgICAgICAgICAgICBmbGFzaEFjdGlvblZhbHVlID0ge1xyXG4gICAgICAgICAgICAgICAgICBsYXllckRhdGFTb3VyY2VJZDogYWN0aW9uRGF0YVNvdXJjZSAmJiBhY3Rpb25EYXRhU291cmNlLmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVNRTDogcmVhbFF1ZXJ5ICYmIHJlYWxRdWVyeS53aGVyZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyB3aGVuIGRzIGluc3RhbmNlcyBkb24ndCBleGlzdFxyXG4gICAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZsYXNoQWN0aW9uVmFsdWUgPSBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdGlvbktleSA9IGBmbGFzaEFjdGlvblZhbHVlLSR7Zmxhc2hBY3Rpb25WYWx1ZT8ubGF5ZXJEYXRhU291cmNlSWR9YFxyXG4gICAgICAgIE11dGFibGVTdG9yZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS51cGRhdGVTdGF0ZVZhbHVlKHRoaXMud2lkZ2V0SWQsIGFjdGlvbktleSwgZmxhc2hBY3Rpb25WYWx1ZSlcclxuICAgICAgICBicmVha1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBnZXRMYXllcklkRnJvbUxheWVyRHMgKGRzOiBGZWF0dXJlTGF5ZXJEYXRhU291cmNlIHwgRmVhdHVyZVF1ZXJ5RGF0YVNvdXJjZSkge1xyXG4gICAgaWYgKChkcyBhcyBhbnkpLmxheWVySWQpIHtcclxuICAgICAgcmV0dXJuIChkcyBhcyBGZWF0dXJlUXVlcnlEYXRhU291cmNlKS5sYXllcklkXHJcbiAgICB9IGVsc2UgaWYgKChkcyBhcyBhbnkpLmxheWVyKSB7XHJcbiAgICAgIHJldHVybiAoZHMgYXMgRmVhdHVyZUxheWVyRGF0YVNvdXJjZSkubGF5ZXIuaWRcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtYXRWYWx1ZSAodmFsdWUsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdTVFJJTkcnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfWBcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0RBVEUnKSB7XHJcbiAgICAgIHJldHVybiBgJyR7dmFsdWV9J2BcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9