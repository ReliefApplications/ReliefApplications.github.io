(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[5227],{"./libs/ui/src/lib/divider/divider.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>DividerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,divider_componentngResource=__webpack_require__("./libs/ui/src/lib/divider/divider.component.scss?ngResource"),divider_componentngResource_default=__webpack_require__.n(divider_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let DividerComponent=((_class=class DividerComponent{constructor(){this.orientation="horizontal",this.position="center"}}).propDecorators={orientation:[{type:core.Input}],text:[{type:core.Input}],position:[{type:core.Input}]},_class);DividerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-divider",template:"<div\n  class=\"divider-container\"\n  [ngClass]=\"{\n    'items-center': orientation === 'horizontal',\n    'vertical-right': position === 'right',\n    'vertical-left': position === 'left'\n  }\"\n>\n  <div\n    [ngClass]=\"{\n      'orientation-horizontal': orientation === 'horizontal',\n      'orientation-vertical': orientation === 'vertical'\n    }\"\n  >\n    \x3c!-- DIVIDER --\x3e\n    <div\n      class=\"inset-0 flex items-center\"\n      aria-hidden=\"true\"\n      [ngClass]=\"{\n        horizontal: orientation === 'horizontal',\n        vertical: orientation === 'vertical'\n      }\"\n    >\n      <div\n        class=\"border-t border-gray-300\"\n        [ngClass]=\"{\n          'w-full': orientation === 'horizontal',\n          'h-full': orientation === 'vertical'\n        }\"\n      ></div>\n    </div>\n    \x3c!-- TEXT --\x3e\n    <div\n      class=\"flex whitespace-nowrap\"\n      [ngClass]=\"{\n        'position-center': position === 'center' && orientation !== 'vertical',\n        'position-left': position === 'left' && orientation !== 'vertical',\n        'position-right': position === 'right' && orientation !== 'vertical',\n        'vertical-center': orientation === 'vertical'\n      }\"\n    >\n      <span *ngIf=\"text\" class=\"bg-[#FAFAFA] px-2 text-sm text-gray-500\">\n        {{ text }}\n      </span>\n    </div>\n  </div>\n</div>\n",styles:[divider_componentngResource_default()]})],DividerComponent)},"./libs/ui/src/lib/divider/divider.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>DividerModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_divider_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/divider/divider.component.ts");let DividerModule=class DividerModule{};DividerModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_divider_component__WEBPACK_IMPORTED_MODULE_0__.X],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_divider_component__WEBPACK_IMPORTED_MODULE_0__.X]})],DividerModule)},"./libs/ui/src/lib/menu/menu.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LeftBottomCornerMenu:()=>LeftBottomCornerMenu,LeftTopCornerMenu:()=>LeftTopCornerMenu,RightBottomCornerMenu:()=>RightBottomCornerMenu,RightTopCornerMenu:()=>RightTopCornerMenu,default:()=>menu_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let MenuComponent=((_class=class MenuComponent{constructor(){this.closed=new core.EventEmitter}}).propDecorators={templateRef:[{type:core.ViewChild,args:[core.TemplateRef]}],closed:[{type:core.Output}]},_class);MenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-menu",template:'<ng-template>\n  <div\n    class="z-10 opacity-0 translate-y-1 transition-all ease-in-out duration-150 flex w-screen max-w-min"\n  >\n    <div\n      (click)="closed.emit()"\n      class="w-56 shrink bg-white text-sm font-normal leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5 flex flex-col rounded-lg overflow-hidden"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n'})],MenuComponent);var menu_directive_class,divider_module=__webpack_require__("./libs/ui/src/lib/divider/divider.module.ts"),button_module=__webpack_require__("./libs/ui/src/lib/button/button.module.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),portal=__webpack_require__("./node_modules/@angular/cdk/fesm2020/portal.mjs"),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs");let MenuTriggerForDirective=(menu_directive_class=class MenuTriggerForDirective{constructor(viewContainerRef,elementRef,renderer,overlay){this.viewContainerRef=viewContainerRef,this.elementRef=elementRef,this.renderer=renderer,this.overlay=overlay,this.isMenuOpen=!1}toggleDropdown(){this.isMenuOpen?this.destroyMenu():this.openMenu()}setOverlayOriginPosition(){const isBottomEdge=window.innerHeight-this.elementRef.nativeElement.getBoundingClientRect().top<200,isRightEdge=window.innerWidth-this.elementRef.nativeElement.getBoundingClientRect().right<200;return[{originX:isRightEdge?"end":"start",originY:isBottomEdge?"top":"bottom",overlayX:isRightEdge?"end":"start",overlayY:isBottomEdge?"bottom":"top",offsetX:0,offsetY:0}]}openMenu(){this.isMenuOpen=!0;const overlayOriginPosition=this.setOverlayOriginPosition();this.overlayRef=this.overlay.create({hasBackdrop:!0,backdropClass:"cdk-overlay-transparent-backdrop",scrollStrategy:this.overlay.scrollStrategies.close(),positionStrategy:this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions(overlayOriginPosition)});const templatePortal=new portal.UE(this.menuPanel.templateRef,this.viewContainerRef);this.overlayRef.attach(templatePortal),setTimeout((()=>{this.applyMenuDisplayAnimation(!0)}),0),this.menuClosingActionsSubscription=this.menuClosingActions().subscribe((()=>this.destroyMenu()))}menuClosingActions(){const backdropClick$=this.overlayRef.backdropClick(),detachment$=this.overlayRef.detachments(),dropdownClosed=this.menuPanel.closed;return(0,merge.T)(backdropClick$,detachment$,dropdownClosed)}destroyMenu(){this.overlayRef&&this.isMenuOpen&&(this.menuClosingActionsSubscription.unsubscribe(),this.isMenuOpen=!1,this.applyMenuDisplayAnimation(!1),setTimeout((()=>{this.overlayRef.detach()}),100))}applyMenuDisplayAnimation(toDisplay){const menuList=this.overlayRef.overlayElement.querySelector("div");toDisplay?(this.renderer.addClass(menuList,"translate-y-0"),this.renderer.addClass(menuList,"opacity-100")):(this.renderer.removeClass(menuList,"translate-y-0"),this.renderer.removeClass(menuList,"opacity-100"))}},menu_directive_class.ctorParameters=()=>[{type:core.ViewContainerRef},{type:core.ElementRef},{type:core.Renderer2},{type:overlay.aV}],menu_directive_class.propDecorators={menuPanel:[{type:core.Input,args:["uiMenuTriggerFor"]}],toggleDropdown:[{type:core.HostListener,args:["click"]}]},menu_directive_class);var menu_item_directive_class;MenuTriggerForDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiMenuTriggerFor]"}),(0,tslib_es6.w6)("design:paramtypes",[core.ViewContainerRef,core.ElementRef,core.Renderer2,overlay.aV])],MenuTriggerForDirective);let MenuItemDirective=((menu_item_directive_class=class MenuItemDirective{constructor(renderer,el){this.renderer=renderer;"flex flex-row gap-4 py-2 px-3 cursor-pointer hover:bg-gray-50".split(" ").forEach((className=>{this.renderer.addClass(el.nativeElement,className)}))}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],menu_item_directive_class);MenuItemDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiMenuItem]"}),(0,tslib_es6.w6)("design:paramtypes",[core.Renderer2,core.ElementRef])],MenuItemDirective);let MenuModule=class MenuModule{};MenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[MenuComponent,MenuTriggerForDirective,MenuItemDirective],imports:[common.CommonModule],exports:[MenuComponent,MenuTriggerForDirective,MenuItemDirective]})],MenuModule);const menu_component_stories={title:"Menu",component:MenuComponent,decorators:[(0,dist.moduleMetadata)({imports:[animations.BrowserAnimationsModule,divider_module.x,button_module.h,MenuModule]})]},clickEvent=name=>window.alert(`You pressed the ${name} button!`),menuItemsTemplate="<ui-menu #menu>\n  <div uiMenuItem (click)=\"clickEvent('First')\">Button 1</div>\n  <ui-divider></ui-divider>\n  <div uiMenuItem (click)=\"clickEvent('Second')\">Button 2</div>\n  <ui-divider></ui-divider>\n  <div uiMenuItem (click)=\"clickEvent('Third')\">Button 3</div>\n  </ui-menu>",LeftTopCornerMenu=(args=>({component:MenuComponent,template:`\n    <div class="flex justify-start">\n    <ui-button [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate}`,props:{...args,clickEvent}})).bind({}),LeftBottomCornerMenu=(args=>({component:MenuComponent,template:`\n    <div style="height: calc(100vh - 50px)" class="flex items-end">\n    <ui-button  [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate} `,props:{...args,clickEvent}})).bind({}),RightTopCornerMenu=(args=>({component:MenuComponent,template:`\n    <div class="flex justify-end">\n    <ui-button [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate} `,props:{...args,clickEvent}})).bind({}),RightBottomCornerMenu=(args=>({component:MenuComponent,template:`\n    <div style="height: calc(100vh - 50px)" class="flex justify-end items-end">\n    <ui-button  [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div> \n    ${menuItemsTemplate}`,props:{...args,clickEvent}})).bind({})},"./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>ReplaySubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_Subject__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.l);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ZT)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(_Subject__WEBPACK_IMPORTED_MODULE_2__.x)},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/observable/of.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{of:()=>of});var _util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_from__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function of(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(args);return(0,_from__WEBPACK_IMPORTED_MODULE_1__.D)(args,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/operators/filter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>filter});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function filter(predicate,thisArg){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var index=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){return predicate.call(thisArg,value,index++)&&subscriber.next(value)})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.B)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.t(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>switchMap});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function switchMap(project,resultSelector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var innerSubscriber=null,index=0,isComplete=!1,checkComplete=function(){return isComplete&&!innerSubscriber&&subscriber.complete()};source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){null==innerSubscriber||innerSubscriber.unsubscribe();var innerIndex=0,outerIndex=index++;(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Xf)(project(value,outerIndex)).subscribe(innerSubscriber=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(innerValue){return subscriber.next(resultSelector?resultSelector(value,innerValue,outerIndex,innerIndex++):innerValue)}),(function(){innerSubscriber=null,checkComplete()})))}),(function(){isComplete=!0,checkComplete()})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/take.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>take});var _observable_empty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function take(count){return count<=0?function(){return _observable_empty__WEBPACK_IMPORTED_MODULE_0__.E}:(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){var seen=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(value){++seen<=count&&(subscriber.next(value),count<=seen&&subscriber.complete())})))}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>dateTimestampProvider});var dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0}},"./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>isObservable});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_isFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function isObservable(obj){return!!obj&&(obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.y||(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.m)(obj.lift)&&(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.m)(obj.subscribe))}},"./libs/ui/src/lib/divider/divider.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".divider-container {\n\n    display: flex;\n\n    justify-content: center\n}\n\n.orientation-horizontal {\n\n    position: relative;\n\n    width: 100%\n}\n\n.orientation-vertical {\n\n    position: absolute;\n\n    height: 100%;\n\n    width: 1px;\n\n    border-left-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(229 231 235 / var(--tw-border-opacity))\n}\n\n.horizontal {\n\n    position: absolute\n}\n\n.vertical {\n\n    position: relative\n}\n\n.position-center {\n\n    position: relative;\n\n    justify-content: center\n}\n\n.position-left {\n\n    position: relative;\n\n    justify-content: flex-start\n}\n\n.position-right {\n\n    position: relative;\n\n    justify-content: flex-end\n}\n\n.vertical-center {\n\n    position: absolute;\n\n    left: 50%;\n\n    top: 50%;\n\n    --tw-translate-x: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n\n.vertical-right {\n\n    justify-content: flex-end\n}\n\n.vertical-left {\n\n    justify-content: flex-start\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);