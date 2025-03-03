System.register(["jimu-core","jimu-ui","jimu-ui/advanced/map","jimu-ui/advanced/setting-components","jimu-theme","jimu-arcgis"],(function(o,e){var t={},s={},i={},l={},n={},a={};return{setters:[function(o){t.FormattedMessage=o.FormattedMessage,t.Immutable=o.Immutable,t.React=o.React,t.css=o.css,t.jsx=o.jsx,t.polished=o.polished},function(o){s.Checkbox=o.Checkbox,s.Label=o.Label,s.Radio=o.Radio},function(o){i.JimuSymbolType=o.JimuSymbolType,i.SymbolSelector=o.SymbolSelector},function(o){l.SettingRow=o.SettingRow,l.SettingSection=o.SettingSection},function(o){n.withTheme=o.withTheme},function(o){a.featureUtils=o.featureUtils,a.loadArcGISJSAPIModules=o.loadArcGISJSAPIModules}],execute:function(){o((()=>{var o={62686:o=>{"use strict";o.exports=a},79244:o=>{"use strict";o.exports=t},1888:o=>{"use strict";o.exports=n},14321:o=>{"use strict";o.exports=s},48993:o=>{"use strict";o.exports=i},79298:o=>{"use strict";o.exports=l}},e={};function m(t){var s=e[t];if(void 0!==s)return s.exports;var i=e[t]={exports:{}};return o[t](i,i.exports,m),i.exports}m.d=(o,e)=>{for(var t in e)m.o(e,t)&&!m.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},m.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),m.r=o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},m.p="";var r={};return m.p=window.jimuConfig.baseUrl,(()=>{"use strict";m.r(r),m.d(r,{default:()=>c});var o=m(79244),e=m(14321),t=m(48993),s=m(79298);const i="Point",l="Polyline",n="Polygon",a="Use layer-defined symbols",p="Use custom symbols",y="Set as operational layers";var d=m(1888),u=m(62686);class b extends o.React.PureComponent{constructor(e){super(e),this.modalStyle={position:"absolute",top:"0",bottom:"0",width:"259px",height:"auto",borderRight:"",borderBottom:"",paddingBottom:"1px"},this.onOperationalLayerCheckboxChange=o=>{var e;const t=!!(null===(e=null==o?void 0:o.target)||void 0===e?void 0:e.checked),s=this.props.config.set("isOperationalLayer",t);this.props.onSettingChange({actionId:this.props.actionId,config:s})},this.handleIsUseCustomSymbolOption=o=>{this.props.onSettingChange({actionId:this.props.actionId,config:this.props.config.set("isUseCustomSymbol",o).set("symbolOption",null)})},this.onSymbolChanged=(o,e)=>{this.props.onSettingChange({actionId:this.props.actionId,config:this.props.config.setIn(["symbolOption",e],o.toJSON())})},this.onSymbolCreated=(o,e)=>{this.defaultSymbolOption=this.defaultSymbolOption.set(e,null==o?void 0:o.toJSON()),!this.props.config.symbolOption&&this.defaultSymbolOption.pointSymbol&&this.defaultSymbolOption.polylineSymbol&&this.defaultSymbolOption.polygonSymbol&&this.props.onSettingChange({actionId:this.props.actionId,config:this.props.config.setIn(["symbolOption"],this.defaultSymbolOption)})},this.getInitSymbolFromConfig=o=>{let e;const s=this.props.config.symbolOption;return this.jsonUtils&&(o===t.JimuSymbolType.Point?e=(null==s?void 0:s.pointSymbol)?s.pointSymbol:u.featureUtils.getDefaultSymbol("point"):o===t.JimuSymbolType.Polyline?e=(null==s?void 0:s.polylineSymbol)?s.polylineSymbol:u.featureUtils.getDefaultSymbol("polyline"):o===t.JimuSymbolType.Polygon&&(e=(null==s?void 0:s.polygonSymbol)?s.polygonSymbol:u.featureUtils.getDefaultSymbol("polygon"))),e?this.jsonUtils.fromJSON(e):null},this.jsonUtils=null,this.defaultSymbolOption=(0,o.Immutable)({}),this.state={isModulesLoaded:!1}}componentDidMount(){(0,u.loadArcGISJSAPIModules)(["esri/symbols/support/jsonUtils"]).then((o=>{[this.jsonUtils]=o,this.setState({isModulesLoaded:!0})})),this.props.onSettingChange({actionId:this.props.actionId,config:this.props.config})}getStyle(e){return o.css`
      .setting-header {
        padding: ${o.polished.rem(10)} ${o.polished.rem(16)} ${o.polished.rem(0)} ${o.polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `}render(){var m;const r=!!(null===(m=this.props.config)||void 0===m?void 0:m.isOperationalLayer);return(0,o.jsx)("div",{css:this.getStyle(this.props.theme)},(0,o.jsx)(s.SettingSection,{title:this.props.intl.formatMessage({id:"symbol",defaultMessage:"symbol"})},(0,o.jsx)(s.SettingRow,null,(0,o.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,o.jsx)("div",{className:"align-items-center d-flex"},(0,o.jsx)(e.Radio,{style:{cursor:"pointer"},checked:!this.props.config.isUseCustomSymbol,onChange:()=>{this.handleIsUseCustomSymbolOption(!1)},"aria-labelledby":"useLayerDefinedLabel"}),(0,o.jsx)("label",{id:"useLayerDefinedLabel",className:"m-0 ml-2",style:{cursor:"pointer"}},this.props.intl.formatMessage({id:"mapAction_UseLayerDefinedSymbols",defaultMessage:a}))))),(0,o.jsx)(s.SettingRow,null,(0,o.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,o.jsx)("div",{className:"align-items-center d-flex"},(0,o.jsx)(e.Radio,{style:{cursor:"pointer"},checked:this.props.config.isUseCustomSymbol,onChange:()=>{this.handleIsUseCustomSymbolOption(!0)},"aria-labelledby":"useCustomLabel"}),(0,o.jsx)("label",{id:"useCustomLabel",className:"m-0 ml-2",style:{cursor:"pointer"}},this.props.intl.formatMessage({id:"mapAction_UseCustomSymbols",defaultMessage:p}))))),this.props.config.isUseCustomSymbol&&this.jsonUtils&&(0,o.jsx)(s.SettingSection,null,(0,o.jsx)(s.SettingRow,{label:this.props.intl.formatMessage({id:"mapAction_Point",defaultMessage:i})},(0,o.jsx)(t.SymbolSelector,{jimuSymbolType:t.JimuSymbolType.Point,symbol:this.getInitSymbolFromConfig(t.JimuSymbolType.Point),onPointSymbolChanged:o=>{this.onSymbolChanged(o,"pointSymbol")},onCreated:o=>{this.onSymbolCreated(o.symbol,"pointSymbol")}})),(0,o.jsx)(s.SettingRow,{label:this.props.intl.formatMessage({id:"mapAction_Polyline",defaultMessage:l})},(0,o.jsx)(t.SymbolSelector,{jimuSymbolType:t.JimuSymbolType.Polyline,symbol:this.getInitSymbolFromConfig(t.JimuSymbolType.Polyline),onPolylineSymbolChanged:o=>{this.onSymbolChanged(o,"polylineSymbol")},onCreated:o=>{this.onSymbolCreated(o.symbol,"polylineSymbol")}})),(0,o.jsx)(s.SettingRow,{label:this.props.intl.formatMessage({id:"mapAction_Polygon",defaultMessage:n})},(0,o.jsx)(t.SymbolSelector,{jimuSymbolType:t.JimuSymbolType.Polygon,symbol:this.getInitSymbolFromConfig(t.JimuSymbolType.Polygon),onPolygonSymbolChanged:o=>{this.onSymbolChanged(o,"polygonSymbol")},onCreated:o=>{this.onSymbolCreated(o.symbol,"polygonSymbol")}})))),(0,o.jsx)(s.SettingSection,null,(0,o.jsx)(s.SettingRow,null,(0,o.jsx)(e.Label,null,(0,o.jsx)(e.Checkbox,{checked:r,className:"mr-1",onChange:this.onOperationalLayerCheckboxChange}),(0,o.jsx)(o.FormattedMessage,{id:"mapAction_OperationalLayer",defaultMessage:y})))))}}b.defaultProps={config:(0,o.Immutable)({isUseCustomSymbol:!0,isOperationalLayer:!0})};const c=(0,d.withTheme)(b)})(),r})())}}}));