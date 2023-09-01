(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[6111],{"./libs/ui/src/lib/sidenav/sidenav.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OverlaySidenav:()=>OverlaySidenav,PushSidenav:()=>PushSidenav,default:()=>sidenav_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,sidenav_container_componentngResource=__webpack_require__("./libs/ui/src/lib/sidenav/sidenav-container.component.scss?ngResource"),sidenav_container_componentngResource_default=__webpack_require__.n(sidenav_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2020/router.mjs");let SidenavDirective=((_class=class SidenavDirective{constructor(el,renderer){this.el=el,this.renderer=renderer,this.opened=!0,this.visible=!0,this.mode="side",this.position="start",this.openedChange=new core.EventEmitter,this.toggleUsed=!1}ngOnInit(){this.clickOutsideListener=this.renderer.listen(window,"click",(event=>{this.toggleUsed||!this.opened||this.el.nativeElement.contains(event.target)||"over"!==this.mode||(this.opened=!1,this.openedChange.emit(this.opened))}))}ngOnChanges(change){this.opened=change.opened?.currentValue??!1,this.openedChange.emit(this.opened)}toggle(){this.toggleUsed=!0,setTimeout((()=>{this.opened=!this.opened,this.openedChange.emit(this.opened),this.toggleUsed=!1}),0)}ngOnDestroy(){this.clickOutsideListener&&this.clickOutsideListener()}}).ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={opened:[{type:core.Input}],visible:[{type:core.Input}],mode:[{type:core.Input}],position:[{type:core.Input}],openedChange:[{type:core.Output}]},_class);SidenavDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiSidenavDirective]",exportAs:"uiSidenavDirective"}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef,core.Renderer2])],SidenavDirective);var sidenav_container_component_class,Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js");let SidenavContainerComponent=((sidenav_container_component_class=class SidenavContainerComponent{constructor(renderer,cdr,el,router){this.renderer=renderer,this.cdr=cdr,this.el=el,this.router=router,this.showSidenav=[],this.mode=[],this.position=[],this.visible=[],this.destroy$=new Subject.x,this.animationClasses=["transition-all","duration-500","ease-in-out"]}get height(){return`${this.el.nativeElement.offsetHeight}px`}ngAfterViewInit(){this.router.events.pipe((0,filter.h)((event=>event instanceof router.m2)),(0,takeUntil.R)(this.destroy$)).subscribe((()=>{this.contentWrapper.nativeElement.scroll({top:0,left:0,behavior:"smooth"})})),this.uiSidenavDirective.forEach(((sidenavDirective,index)=>{this.showSidenav[index]=sidenavDirective.opened,this.mode[index]=sidenavDirective.mode,this.position[index]=sidenavDirective.position,this.cdr.detectChanges(),this.renderer.appendChild(this.sidenav.get(index).nativeElement.querySelector("div"),sidenavDirective.el.nativeElement),sidenavDirective.openedChange.pipe((0,takeUntil.R)(this.destroy$)).subscribe((opened=>{this.showSidenav[index]=opened,this.mode[index]=sidenavDirective.mode}))})),setTimeout((()=>{this.setTransitionForContent()}),0)}resolveSidenavClasses(index){const classes=[];return"start"===this.position[index]&&(classes.push("data-[sidenav-show='false']:-translate-x-full"),classes.push("data-[sidenav-show='false']:w-0"),classes.push("z-[999]"),classes.push("w-60"),classes.push("border-r"),classes.push("border-gray-200")),"over"===this.mode[index]&&(classes.push("h-full"),classes.push("left-0"),classes.push("top-0"),classes.push("fixed")),"end"===this.position[index]&&(classes.push("absolute"),classes.push("right-0"),classes.push("data-[sidenav-show='false']:translate-x-full"),classes.push("z-[997]"),classes.push("shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)]")),classes}setTransitionForContent(){this.animationClasses.forEach((aClass=>{this.renderer.addClass(this.contentContainer.nativeElement,aClass),this.sidenav.forEach((side=>{this.renderer.addClass(side.nativeElement,aClass)}))}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ChangeDetectorRef},{type:core.ElementRef},{type:router.F0}],sidenav_container_component_class.propDecorators={uiSidenavDirective:[{type:core.ContentChildren,args:[SidenavDirective]}],contentContainer:[{type:core.ViewChild,args:["contentContainer"]}],sidenav:[{type:core.ViewChildren,args:["sidenav"]}],contentWrapper:[{type:core.ViewChild,args:["contentWrapper"]}]},sidenav_container_component_class);SidenavContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-sidenav-container",template:'\x3c!-- Never set as relative, while we use kendo tile layouts for widget grid\n  todo(2.1.x): check if h-full should be removed --\x3e\n<div\n  [ngClass]="{ flex: mode[0] === \'side\' }"\n  class="w-full h-full overflow-y-auto"\n>\n  \x3c!-- SIDENAV CONTENT --\x3e\n  <ng-container *ngFor="let sidenav of uiSidenavDirective; let i = index">\n    <div\n      #sidenav\n      class="will-change-transform overflow-y-auto bg-white translate-x-0"\n      [attr.data-sidenav-show]="showSidenav[i]"\n      [ngClass]="resolveSidenavClasses(i)"\n      [style.height]="height"\n    >\n      <div class="flex flex-col h-full"></div>\n    </div>\n  </ng-container>\n  \x3c!-- CONTENT --\x3e\n  <div class="flex-1 overflow-y-auto" #contentContainer>\n    <div\n      [ngClass]="{\n        \'visible bg-black opacity-50\': showSidenav[0] && mode[0] === \'over\',\n        \'invisible bg-transparent\': !showSidenav[0] || mode[0] === \'side\'\n      }"\n      class="block w-full overflow-y-auto min-h-full transition-visibility duration-500 transition-all ease-in-out absolute inset-0 pointer-events-none z-[998]"\n    ></div>\n    <div class="py-[32px] overflow-y-auto h-full px-[24px]" #contentWrapper>\n      <ng-content select="content"></ng-content>\n    </div>\n  </div>\n</div>\n',styles:[sidenav_container_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.Renderer2,core.ChangeDetectorRef,core.ElementRef,router.F0])],SidenavContainerComponent);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let SidenavContainerModule=class SidenavContainerModule{};SidenavContainerModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[SidenavDirective,SidenavContainerComponent],imports:[common.CommonModule],exports:[SidenavDirective,SidenavContainerComponent]})],SidenavContainerModule);var button_module=__webpack_require__("./libs/ui/src/lib/button/button.module.ts");const sidenav_component_stories={title:"Sidenav",component:SidenavContainerComponent,argTypes:{showSidenav:{control:"boolean"}},decorators:[(0,dist.moduleMetadata)({imports:[SidenavContainerModule,button_module.h]})]},PushSidenav=(args=>(args.showSidenav=[!0],{component:SidenavContainerComponent,template:'\n      <ui-sidenav-container>\n        <ng-container ngProjectAs="content">\n        <ui-button (click)="nav.toggle()">Toggle sidenav</ui-button>\n          <p class="mt-3">Main content</p>\n        </ng-container>\n        <div\n          uiSidenavDirective\n          #nav="uiSidenavDirective"\n          [(opened)]="showSidenav"\n          ngProjectAs="sidenavContent"\n        >\n          <div *ngFor="let i of [].constructor(25)">Sidenav Content</div>\n        </div>\n      </ui-sidenav-container>\n    ',props:{...args}})).bind({}),OverlaySidenav=(args=>(args.showSidenav=[!0],{component:SidenavContainerComponent,template:'\n      <ui-sidenav-container>\n        <ng-container ngProjectAs="content">\n        <div class="flex flex-col">\n        <ui-button class="mx-auto" (click)="nav.toggle()">Toggle sidenav</ui-button>\n          <p class="mt-3 mx-auto">Main content</p>\n          </div>\n        </ng-container>\n        <div\n          uiSidenavDirective\n          #nav="uiSidenavDirective"\n          [(opened)]="showSidenav"\n          [mode]="\'over\'"\n          ngProjectAs="sidenavContent"\n        >\n          <div *ngFor="let i of [].constructor(25)">Sidenav Content</div>\n        </div>\n      </ui-sidenav-container>\n    ',props:{...args}})).bind({})},"./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>BehaviorSubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),BehaviorSubject=function(_super){function BehaviorSubject(_value){var _this=_super.call(this)||this;return _this._value=_value,_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ZT)(BehaviorSubject,_super),Object.defineProperty(BehaviorSubject.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),BehaviorSubject.prototype._subscribe=function(subscriber){var subscription=_super.prototype._subscribe.call(this,subscriber);return!subscription.closed&&subscriber.next(this._value),subscription},BehaviorSubject.prototype.getValue=function(){var hasError=this.hasError,thrownError=this.thrownError,_value=this._value;if(hasError)throw thrownError;return this._throwIfClosed(),_value},BehaviorSubject.prototype.next=function(value){_super.prototype.next.call(this,this._value=value)},BehaviorSubject}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js").x)},"./node_modules/rxjs/dist/esm5/internal/observable/defer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>defer});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function defer(observableFactory){return new _Observable__WEBPACK_IMPORTED_MODULE_0__.y((function(subscriber){(0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Xf)(observableFactory()).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/concatMap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>concatMap});var _mergeMap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function concatMap(project,resultSelector){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(resultSelector)?(0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.z)(project,resultSelector,1):(0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__.z)(project,1)}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Xf)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.Z)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./libs/ui/src/lib/sidenav/sidenav-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);