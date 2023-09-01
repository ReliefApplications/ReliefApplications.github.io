"use strict";(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[4362],{"./libs/ui/src/lib/tooltip/tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TooltipComponent=((_class=class TooltipComponent{constructor(){this.hint=""}get resolvePositionCases(){const classes=[];switch(this.position){case"top":classes.push("group flex relative justify-center");break;case"top-left":classes.push("flex items-start justify-start");break;case"top-right":classes.push("flex items-start justify-end");break;case"bottom":classes.push("flex h-100% items-end justify-center");break;case"bottom-left":classes.push("flex items-end justify-start");break;case"bottom-right":classes.push("flex items-end justify-end");break;case"left":classes.push("flex items-center justify-start");break;case"right":classes.push("flex items-center justify-end")}return classes}get resolveButtonCases(){const classes=[];switch(this.position){case"bottom":case"bottom-left":case"bottom-right":classes.push("fixed bottom-0");break;case"right":case"left":classes.push("fixed bottom-2/4")}return classes}}).propDecorators={position:[{type:core.Input}],hint:[{type:core.Input}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-tooltip",template:'\x3c!-- TEST ELEMENT FOR STORYBOOK--\x3e\n<div [ngClass]="resolvePositionCases">\n  <button\n    [ngClass]="resolveButtonCases"\n    [uiTooltip]="hint"\n    class="bg-gray-200 shadow-md hover:shadow-xl hover:bg-gray-300 p-2 rounded-md"\n  >\n    Random content\n  </button>\n</div>\n'})],TooltipComponent)},"./libs/ui/src/lib/tooltip/tooltip.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>TooltipModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let TooltipDirective=((_class=class TooltipDirective{constructor(document,elementRef,renderer){this.document=document,this.elementRef=elementRef,this.renderer=renderer,this.uiTooltip="",this.tooltipDisabled=!1,this.tooltipSeparation=5,this.tooltipClasses=["opacity-70","transition-opacity","delay-300","bg-gray-800","p-2","max-w-xs","whitespace-pre-wrap","text-xs","text-gray-100","rounded-md","absolute","z-[9999]"],this.createTooltipElement()}onMouseEnter(){this.uiTooltip&&!this.tooltipDisabled&&this.showHint()}onMouseLeave(){this.removeHint()}removeHint(){this.document.body.contains(this.elToolTip)&&this.renderer.removeChild(this.document.body,this.elToolTip)}showHint(){this.elToolTip.textContent=this.uiTooltip,this.renderer.addClass(this.elToolTip,"opacity-0"),this.renderer.appendChild(this.document.body,this.elToolTip);const hostPos=this.elementRef.nativeElement.getBoundingClientRect(),tooltipPos=this.elToolTip.getBoundingClientRect();this.renderer.removeClass(this.elToolTip,"opacity-0"),this.renderer.removeChild(this.document.body,this.elToolTip);const top=hostPos.bottom,left=hostPos.left,tooltipWidth=tooltipPos.width,tooltipHeight=tooltipPos.height;let topValue=`${top+this.tooltipSeparation}px`,leftValue=`${left+.5*(hostPos.width-tooltipWidth)}px`;tooltipHeight+top>window.innerHeight&&(topValue=hostPos.top-this.tooltipSeparation-tooltipHeight+"px"),left+.5*(hostPos.width-tooltipWidth)<0&&(leftValue="0px"),tooltipWidth+left>window.innerWidth&&(leftValue=window.innerWidth-tooltipWidth+"px"),this.renderer.setStyle(this.elToolTip,"top",topValue),this.renderer.setStyle(this.elToolTip,"left",leftValue),this.renderer.appendChild(this.document.body,this.elToolTip)}createTooltipElement(){this.elToolTip=this.renderer.createElement("span");for(const cl of this.tooltipClasses)this.renderer.addClass(this.elToolTip,cl)}ngOnDestroy(){this.removeHint()}}).ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]},{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={uiTooltip:[{type:core.Input}],tooltipDisabled:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter"]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},_class);TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiTooltip]"}),(0,tslib_es6.w6)("design:paramtypes",[Document,core.ElementRef,core.Renderer2])],TooltipDirective);var tooltip_component=__webpack_require__("./libs/ui/src/lib/tooltip/tooltip.component.ts");let TooltipModule=class TooltipModule{};TooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[TooltipDirective,tooltip_component.K],imports:[common.CommonModule],exports:[TooltipDirective,tooltip_component.K]})],TooltipModule)},"./libs/ui/src/lib/tooltip/tooltip.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomExample:()=>BottomExample,BottomLeftExample:()=>BottomLeftExample,BottomRightExample:()=>BottomRightExample,LeftExample:()=>LeftExample,LongTextExample:()=>LongTextExample,RightExample:()=>RightExample,TopExample:()=>TopExample,TopLeftExample:()=>TopLeftExample,TopRightExample:()=>TopRightExample,default:()=>tooltip_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tooltip_component=__webpack_require__("./libs/ui/src/lib/tooltip/tooltip.component.ts");var tooltip_module=__webpack_require__("./libs/ui/src/lib/tooltip/tooltip.module.ts");const tooltip_component_stories={title:"Tooltip",component:tooltip_component.K,argTypes:{position:{options:["top","top-left","top-right","right","left","bottom","bottom-left","bottom-right"],control:"select"}},decorators:[(0,dist.moduleMetadata)({imports:[tooltip_module.z]})]},Template=args=>({props:args}),TopExample=Template.bind({});TopExample.args={position:"top",hint:"test"};const TopLeftExample=Template.bind({});TopLeftExample.args={position:"top-left",hint:"test"};const TopRightExample=Template.bind({});TopRightExample.args={position:"top-right",hint:"test"};const BottomExample=Template.bind({});BottomExample.args={position:"bottom",hint:"test"};const BottomLeftExample=Template.bind({});BottomLeftExample.args={position:"bottom-left",hint:"test"};const BottomRightExample=Template.bind({});BottomRightExample.args={position:"bottom-right",hint:"test"};const LeftExample=Template.bind({});LeftExample.args={position:"left",hint:"test"};const RightExample=Template.bind({});RightExample.args={position:"right",hint:"test"};const LongTextExample=Template.bind({});LongTextExample.args={position:"top",hint:"The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ..."}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);