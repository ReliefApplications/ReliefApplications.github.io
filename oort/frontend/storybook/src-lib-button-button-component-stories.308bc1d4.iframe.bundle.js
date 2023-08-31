"use strict";(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[687],{"./libs/ui/src/lib/types/category.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>categories});const categories=["primary","secondary","tertiary"]},"./libs/ui/src/lib/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>sizes});const sizes=["small","medium","large"]},"./libs/ui/src/lib/types/variant.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>variants});const variants=["default","primary","success","danger","grey","light","warning"]},"./libs/ui/src/lib/button/button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,Tertiary:()=>Tertiary,VariantsList:()=>VariantsList,default:()=>button_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),button_component=__webpack_require__("./libs/ui/src/lib/button/button.component.ts"),button_module=__webpack_require__("./libs/ui/src/lib/button/button.module.ts"),category=__webpack_require__("./libs/ui/src/lib/types/category.ts"),size=__webpack_require__("./libs/ui/src/lib/types/size.ts"),variant=__webpack_require__("./libs/ui/src/lib/types/variant.ts");var icon_module=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts"),spinner_module=__webpack_require__("./libs/ui/src/lib/spinner/spinner.module.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");const button_component_stories={title:"Button",component:button_component.r,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,button_module.h,icon_module.Q,spinner_module.F]}),(0,dist.componentWrapperDecorator)((story=>`<div class="h-96">${story=story.replace(/></,">Button label<")}</div>`))],argTypes:{size:{options:size.J,control:{type:"select"}}}},individualBtnArgs={category:{options:category.b,control:{type:"select"}},variant:{options:variant.o,control:{type:"select"},defaultValue:"default"},iconPosition:{options:["prefix","suffix"],control:{type:"select"},defaultValue:"prefix"},icon:{control:"text",defaultValue:""},isIcon:{control:{type:"boolean"},defaultValue:!1},loading:{control:{type:"boolean"},defaultValue:!1},disabled:{control:{type:"boolean"},defaultValue:!1}},testClick=()=>window.alert("Should not show if disabled!!"),Template=args=>({template:`\n      <ui-button\n        (click)="testClick()"\n        [disabled]="${args.disabled}"\n        icon="${args.icon}"\n        iconPosition="${args.iconPosition}"\n        [loading]="${args.loading}"\n        [isIcon]="${args.isIcon}"\n        [size]="'${args.size}'"\n        [variant]="'${args.variant}'"\n        [category]="'${args.category}'"\n      >\n        ${args.label}\n      </ui-button>\n    `,props:{...args,testClick}}),Primary=Template.bind({});Primary.argTypes={...individualBtnArgs},Primary.args={label:"Primary button",category:"primary",variant:"default",size:"medium",icon:""};const Secondary=Template.bind({});Secondary.argTypes={...individualBtnArgs},Secondary.args={label:"Secondary button",category:"secondary",variant:"default",size:"medium",icon:""};const Tertiary=Template.bind({});Tertiary.argTypes={...individualBtnArgs},Tertiary.args={label:"Tertiary button",category:"tertiary",variant:"default",size:"medium",icon:""};const configurations=[{title:"Default",items:category.b.map((category=>({variant:"default",category,text:"default"})))},{title:"Primary",items:category.b.map((category=>({variant:"primary",category,text:"primary"})))},{title:"Success",items:category.b.map((category=>({variant:"success",category,text:"success"})))},{title:"Danger",items:category.b.map((category=>({variant:"danger",category,text:"danger"})))},{title:"Grey",items:category.b.map((category=>({variant:"grey",category,text:"grey"})))},{title:"Light",items:category.b.map((category=>({variant:"light",category,text:"light"})))},{title:"Warning",items:category.b.map((category=>({variant:"warning",category,text:"warning"})))},{title:"Disabled",items:category.b.map((category=>({variant:"primary",category,text:"disabled",disabled:!0})))}],VariantsList=(args=>({template:`\n      <h1 class="text-lg mb-4">Grouped by variant</h1>\n      <div class="flex flex-wrap gap-4">\n        <div class="border rounded-lg" *ngFor="let variant of configurations">\n          <h2 class="w-full text-center border-b py-2">{{variant.title}}</h2>\n          <div class="flex gap-2 p-4">\n            <ui-button\n              *ngFor="let btn of variant.items"\n              [variant]="btn.variant"\n              [category]="btn.category"\n              [disabled]="btn.disabled"\n              [title]="btn.category"\n              [size]="'${args.size}'"\n            >\n              {{btn.text}}\n            </ui-button>\n          </div>\n        </div>\n      </div>\n    `,props:{configurations}})).bind({});VariantsList.args={size:"medium"}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{module.exports=function(i){return i[1]}}}]);