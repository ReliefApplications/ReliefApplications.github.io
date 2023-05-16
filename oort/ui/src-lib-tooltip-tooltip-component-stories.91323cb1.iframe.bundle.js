"use strict";(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[362],{"./libs/ui/src/lib/tooltip/tooltip.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomExample:()=>BottomExample,BottomLeftExample:()=>BottomLeftExample,BottomRightExample:()=>BottomRightExample,LeftExample:()=>LeftExample,LongTextExample:()=>LongTextExample,RightExample:()=>RightExample,TopExample:()=>TopExample,TopLeftExample:()=>TopLeftExample,TopRightExample:()=>TopRightExample,default:()=>tooltip_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var TooltipExamplesPositions,_class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(TooltipExamplesPositions){TooltipExamplesPositions.TOP="top",TooltipExamplesPositions.TOP_LEFT="top-left",TooltipExamplesPositions.TOP_RIGHT="top-right",TooltipExamplesPositions.RIGHT="right",TooltipExamplesPositions.LEFT="left",TooltipExamplesPositions.BOTTOM="bottom",TooltipExamplesPositions.BOTTOM_LEFT="bottom-left",TooltipExamplesPositions.BOTTOM_RIGHT="bottom-right"}(TooltipExamplesPositions||(TooltipExamplesPositions={}));let TooltipComponent=((_class=class TooltipComponent{constructor(){this.hint="",this.TooltipPositionEnum=TooltipExamplesPositions}get resolvePositionCases(){const classes=[];switch(this.position){case TooltipExamplesPositions.TOP:classes.push("group flex relative justify-center");break;case TooltipExamplesPositions.TOP_LEFT:classes.push("flex items-start justify-start");break;case TooltipExamplesPositions.TOP_RIGHT:classes.push("flex items-start justify-end");break;case TooltipExamplesPositions.BOTTOM:classes.push("flex h-100% items-end justify-center");break;case TooltipExamplesPositions.BOTTOM_LEFT:classes.push("flex items-end justify-start");break;case TooltipExamplesPositions.BOTTOM_RIGHT:classes.push("flex items-end justify-end");break;case TooltipExamplesPositions.LEFT:classes.push("flex items-center justify-start");break;case TooltipExamplesPositions.RIGHT:classes.push("flex items-center justify-end")}return classes}get resolveButtonCases(){const classes=[];switch(this.position){case TooltipExamplesPositions.BOTTOM:case TooltipExamplesPositions.BOTTOM_LEFT:case TooltipExamplesPositions.BOTTOM_RIGHT:classes.push("fixed bottom-0");break;case TooltipExamplesPositions.RIGHT:case TooltipExamplesPositions.LEFT:classes.push("fixed bottom-2/4")}return classes}}).propDecorators={position:[{type:core.Input}],hint:[{type:core.Input}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-tooltip",template:'\x3c!-- TEST ELEMENT FOR STORYBOOK--\x3e\n<div [ngClass]="resolvePositionCases">\n  <button\n    [ngClass]="resolveButtonCases"\n    [uiTooltip]="hint"\n    class="bg-gray-200 shadow-md hover:shadow-xl hover:bg-gray-300 p-2 rounded-md"\n  >\n    Random content\n  </button>\n</div>\n'})],TooltipComponent);var tooltip_directive_class,common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let TooltipDirective=((tooltip_directive_class=class TooltipDirective{constructor(elementRef,renderer){this.elementRef=elementRef,this.renderer=renderer,this.uiTooltip="",this.tooltipDisabled=!1,this.tooltipSeparation=5,this.tooltipClasses=["opacity-70","transition-opacity","delay-300","bg-gray-800","p-2","max-w-xs","whitespace-pre-wrap","text-xs","text-gray-100","rounded-md","absolute","z-[9999]"],this.createTooltipElement()}onMouseEnter(){this.uiTooltip&&!this.tooltipDisabled&&this.showHint()}onMouseLeave(){this.elToolTip&&this.removeHint()}removeHint(){this.renderer.removeChild(document.body,this.elToolTip)}showHint(){this.elToolTip.textContent=this.uiTooltip;const hostPos=this.elementRef.nativeElement.getBoundingClientRect(),tooltipPos=this.elToolTip.getBoundingClientRect(),top=hostPos.bottom,left=hostPos.left,tooltipWidth=tooltipPos.width,tooltipHeight=tooltipPos.height;let topValue=`${top+this.tooltipSeparation}px`,leftValue=`${left}px`;tooltipHeight+top>window.innerHeight&&(topValue=hostPos.top-this.tooltipSeparation-tooltipHeight+"px"),tooltipWidth+left>window.innerWidth&&(leftValue=window.innerWidth-tooltipWidth+"px"),this.renderer.setStyle(this.elToolTip,"top",topValue),this.renderer.setStyle(this.elToolTip,"left",leftValue),this.renderer.appendChild(document.body,this.elToolTip)}createTooltipElement(){this.elToolTip=this.renderer.createElement("span");for(const cl of this.tooltipClasses)this.renderer.addClass(this.elToolTip,cl)}ngOnDestroy(){this.removeHint()}}).ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],tooltip_directive_class.propDecorators={uiTooltip:[{type:core.Input}],tooltipDisabled:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter"]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},tooltip_directive_class);TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiTooltip]"}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef,core.Renderer2])],TooltipDirective);let TooltipModule=class TooltipModule{};TooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[TooltipDirective,TooltipComponent],imports:[common.CommonModule],exports:[TooltipDirective,TooltipComponent]})],TooltipModule);const tooltip_component_stories={title:"Tooltip",component:TooltipComponent,argTypes:{position:{options:TooltipExamplesPositions,control:"select"}},decorators:[(0,dist.moduleMetadata)({imports:[TooltipModule]})]},Template=args=>({props:args}),TopExample=Template.bind({});TopExample.args={position:TooltipExamplesPositions.TOP,hint:"test"};const TopLeftExample=Template.bind({});TopLeftExample.args={position:TooltipExamplesPositions.TOP_LEFT,hint:"test"};const TopRightExample=Template.bind({});TopRightExample.args={position:TooltipExamplesPositions.TOP_RIGHT,hint:"test"};const BottomExample=Template.bind({});BottomExample.args={position:TooltipExamplesPositions.BOTTOM,hint:"test"};const BottomLeftExample=Template.bind({});BottomLeftExample.args={position:TooltipExamplesPositions.BOTTOM_LEFT,hint:"test"};const BottomRightExample=Template.bind({});BottomRightExample.args={position:TooltipExamplesPositions.BOTTOM_RIGHT,hint:"test"};const LeftExample=Template.bind({});LeftExample.args={position:TooltipExamplesPositions.LEFT,hint:"test"};const RightExample=Template.bind({});RightExample.args={position:TooltipExamplesPositions.RIGHT,hint:"test"};const LongTextExample=Template.bind({});LongTextExample.args={position:TooltipExamplesPositions.TOP,hint:"The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ... The Tooltip can either be assigned auto height and width values or specific pixel values. The width and height properties are used to set the outer dimension ..."}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);