(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[104],{"./libs/ui/src/lib/avatar/avatar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>AvatarComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,avatar_componentngResource=__webpack_require__("./libs/ui/src/lib/avatar/avatar.component.scss?ngResource"),avatar_componentngResource_default=__webpack_require__.n(avatar_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let AvatarComponent=((_class=class AvatarComponent{constructor(){this.size="medium",this.variant="primary",this.image="",this.shape="circle",this.initials=""}}).propDecorators={size:[{type:core.Input}],variant:[{type:core.Input}],image:[{type:core.Input}],shape:[{type:core.Input}],initials:[{type:core.Input}]},_class);AvatarComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-avatar",template:"<span\n  [ngClass]=\"{\n    'avatar-small': size === 'small',\n    'avatar-medium': size === 'medium',\n    'avatar-large': size === 'large',\n    'avatar-circle': shape === 'circle',\n    'avatar-rectangle': shape === 'rectangle',\n    'avatar-initials': initials !== '',\n    'avatar-not-initials': initials === '',\n    'bg-white': variant !== 'secondary',\n    'bg-gray-500': variant === 'secondary',\n    'avatar-tertiary-border': variant === 'tertiary'\n  }\"\n  class=\"overflow-hidden ring-2 ring-transparent\"\n>\n  <ng-container *ngIf=\"image; else noIconTmpl\">\n    <img\n      [ngClass]=\"{\n        'avatar-circle': shape === 'circle',\n        'avatar-rectangle': shape === 'rectangle'\n      }\"\n      class=\"inline-block h-full w-full\"\n      src=\"{{ image }}\"\n      alt=\"\"\n    />\n  </ng-container>\n  <ng-template #noIconTmpl>\n    <ng-container *ngIf=\"initials !== ''\">\n      <span\n        [ngClass]=\"{\n          'avatar-primary-text': variant === 'primary',\n          'avatar-secondary-text': variant === 'secondary',\n          'avatar-tertiary-text': variant === 'tertiary'\n        }\"\n        class=\"text-base font-medium leading-none\"\n      >\n        {{ initials }}</span\n      >\n    </ng-container>\n\n    <ng-container *ngIf=\"initials === ''\">\n      <svg\n        class=\"h-full w-full text-gray-300\"\n        fill=\"currentColor\"\n        viewBox=\"0 0 24 24\"\n      >\n        <path\n          d=\"M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z\"\n        />\n      </svg>\n    </ng-container>\n  </ng-template>\n</span>\n",styles:[avatar_componentngResource_default()]})],AvatarComponent)},"./libs/ui/src/lib/avatar/avatar.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>AvatarModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_avatar_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/avatar/avatar.component.ts");let AvatarModule=class AvatarModule{};AvatarModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_avatar_component__WEBPACK_IMPORTED_MODULE_0__.A],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_avatar_component__WEBPACK_IMPORTED_MODULE_0__.A]})],AvatarModule)},"./libs/ui/src/lib/avatar/types/avatar-shape.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>avatarShapes});const avatarShapes=["circle","rectangle"]},"./libs/ui/src/lib/types/category.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>categories});const categories=["primary","secondary","tertiary"]},"./libs/ui/src/lib/types/size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>sizes});const sizes=["small","medium","large"]},"./libs/ui/src/lib/avatar-group/avatar-group.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>avatar_group_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,avatar_group_componentngResource=__webpack_require__("./libs/ui/src/lib/avatar-group/avatar-group.component.scss?ngResource"),avatar_group_componentngResource_default=__webpack_require__.n(avatar_group_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),avatar_component=__webpack_require__("./libs/ui/src/lib/avatar/avatar.component.ts");let AvatarGroupComponent=(_class=class AvatarGroupComponent{constructor(renderer,el){this.renderer=renderer,this.el=el,this.size="medium",this.shape="circle",this.stack="top",this.limit=5}ngAfterViewInit(){if("top"===this.stack){const avatars=this.el.nativeElement.querySelectorAll("ui-avatar"),total_avatars=avatars.length;Array.from(avatars).forEach(((avatar,index)=>{this.renderer.setStyle(avatar,"z-index",""+(total_avatars-index))}))}}},_class.ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],_class.propDecorators={size:[{type:core.Input}],shape:[{type:core.Input}],stack:[{type:core.Input}],limit:[{type:core.Input}],avatars:[{type:core.ContentChildren,args:[avatar_component.A]}]},_class);AvatarGroupComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-avatar-group",template:'<div\n  class="flex -space-x-2 overflow-hidden"\n  [ngClass]="{ isolate: stack === \'top\' }"\n>\n  \x3c!-- Reinject avatars in the group --\x3e\n  <ui-avatar\n    *ngFor="let avatar of avatars.toArray().slice(0, limit)"\n    [image]="avatar.image"\n    [initials]="avatar.initials"\n    [variant]="avatar.variant"\n    [shape]="shape"\n    [size]="size"\n  ></ui-avatar>\n  \x3c!-- Display remaining avatars, based on limit --\x3e\n  <ui-avatar\n    *ngIf="avatars.toArray().slice(limit).length > 0"\n    [size]="size"\n    variant="secondary"\n    [shape]="shape"\n    [initials]="\'+\' + avatars.toArray().slice(limit).length.toString()"\n  >\n  </ui-avatar>\n</div>\n',styles:[avatar_group_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.Renderer2,core.ElementRef])],AvatarGroupComponent);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),avatar_module=__webpack_require__("./libs/ui/src/lib/avatar/avatar.module.ts");let AvatarGroupModule=class AvatarGroupModule{};AvatarGroupModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[AvatarGroupComponent],imports:[common.CommonModule,avatar_module.F],exports:[AvatarGroupComponent,avatar_module.F]})],AvatarGroupModule);var avatar_shape=__webpack_require__("./libs/ui/src/lib/avatar/types/avatar-shape.ts"),size=__webpack_require__("./libs/ui/src/lib/types/size.ts"),category=__webpack_require__("./libs/ui/src/lib/types/category.ts");const avatars=[{size:"large",variant:"tertiary",image:"",shape:"circle",initials:"JL"},{size:"large",variant:"tertiary",image:"https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",shape:"circle",initials:"PM"},{size:"large",variant:"secondary",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",shape:"circle",initials:""},{size:"large",variant:"secondary",image:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",shape:"rectangle",initials:""}],avatar_group_component_stories={title:"Avatar Group",component:AvatarGroupComponent,argTypes:{shape:{options:avatar_shape.p,control:"select"},variant:{options:category.b,control:"select"},size:{options:size.J,control:"select"},limit:{control:"number"}},decorators:[(0,dist.moduleMetadata)({imports:[AvatarGroupModule]})],render:args=>{let avatarGroupContent="";for(const avatar of avatars)avatarGroupContent+=`<ui-avatar variant=${avatar.variant} image="${avatar.image}" shape=${avatar.shape} initials=${avatar.initials}></ui-avatar>`;return{props:args,template:`<ui-avatar-group shape=${args.shape} size=${args.size} limit=${args.limit}>${avatarGroupContent}\n      </ui-avatar-group>`}}},Default={args:{}}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const core_client_1=__webpack_require__("@storybook/core-client"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,core_client_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/src/lib/avatar-group/avatar-group.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/lib/avatar/avatar.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".avatar-small {\n\n    height: 1.5rem;\n\n    width: 1.5rem\n}\n\n.avatar-medium {\n\n    height: 2.5rem;\n\n    width: 2.5rem\n}\n\n.avatar-large {\n\n    height: 3.5rem;\n\n    width: 3.5rem\n}\n\n.avatar-circle {\n\n    border-radius: 9999px\n}\n\n.avatar-rectangle {\n\n    border-radius: 0.375rem\n}\n\n.avatar-initials {\n\n    display: inline-flex;\n\n    align-items: center;\n\n    justify-content: center\n}\n\n.avatar-not-initials {\n\n    display: block\n}\n\n.avatar-secondary-background {\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(107 114 128 / var(--tw-bg-opacity))\n}\n\n.avatar-primary-text {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(107 114 128 / var(--tw-text-opacity))\n}\n\n.avatar-secondary-text {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(255 255 255 / var(--tw-text-opacity))\n}\n\n.avatar-tertiary-text {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(107 114 128 / var(--tw-text-opacity))\n}\n\n.avatar-tertiary-border {\n\n    border-width: 2px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(107 114 128 / var(--tw-border-opacity))\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);