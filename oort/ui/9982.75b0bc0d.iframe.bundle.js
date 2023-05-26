/*! For license information please see 9982.75b0bc0d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[9982],{"./node_modules/@angular/cdk/fesm2020/platform.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mq:()=>supportsScrollBehavior,Oy:()=>_isTestEnvironment,_i:()=>getRtlScrollAxisType,ht:()=>_getFocusedElementPierceShadowDom,i$:()=>normalizePassiveListenerOptions,kV:()=>_getShadowRoot,sA:()=>_getEventTarget,t4:()=>Platform});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let hasV8BreakIterator;try{hasV8BreakIterator="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch{hasV8BreakIterator=!1}class Platform{constructor(_platformId){this._platformId=_platformId,this.isBrowser=this._platformId?(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!hasV8BreakIterator)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}Platform.ɵfac=function Platform_Factory(t){return new(t||Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID))},Platform.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({token:Platform,factory:Platform.ɵfac,providedIn:"root"}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,args:[{providedIn:"root"}]}],(function(){return[{type:Object,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]}]}]}),null);class PlatformModule{}PlatformModule.ɵfac=function PlatformModule_Factory(t){return new(t||PlatformModule)},PlatformModule.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({type:PlatformModule}),PlatformModule.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({}),("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,args:[{}]}],null,null);let supportsPassiveEvents,rtlScrollAxisType,scrollBehaviorSupported,shadowDomIsSupported;function normalizePassiveListenerOptions(options){return function supportsPassiveEventListeners(){if(null==supportsPassiveEvents&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>supportsPassiveEvents=!0}))}finally{supportsPassiveEvents=supportsPassiveEvents||!1}return supportsPassiveEvents}()?options:!!options.capture}function supportsScrollBehavior(){if(null==scrollBehaviorSupported){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return scrollBehaviorSupported=!1,scrollBehaviorSupported;if("scrollBehavior"in document.documentElement.style)scrollBehaviorSupported=!0;else{const scrollToFunction=Element.prototype.scrollTo;scrollBehaviorSupported=!!scrollToFunction&&!/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString())}}return scrollBehaviorSupported}function getRtlScrollAxisType(){if("object"!=typeof document||!document)return 0;if(null==rtlScrollAxisType){const scrollContainer=document.createElement("div"),containerStyle=scrollContainer.style;scrollContainer.dir="rtl",containerStyle.width="1px",containerStyle.overflow="auto",containerStyle.visibility="hidden",containerStyle.pointerEvents="none",containerStyle.position="absolute";const content=document.createElement("div"),contentStyle=content.style;contentStyle.width="2px",contentStyle.height="1px",scrollContainer.appendChild(content),document.body.appendChild(scrollContainer),rtlScrollAxisType=0,0===scrollContainer.scrollLeft&&(scrollContainer.scrollLeft=1,rtlScrollAxisType=0===scrollContainer.scrollLeft?1:2),scrollContainer.remove()}return rtlScrollAxisType}function _getShadowRoot(element){if(function _supportsShadowDom(){if(null==shadowDomIsSupported){const head="undefined"!=typeof document?document.head:null;shadowDomIsSupported=!(!head||!head.createShadowRoot&&!head.attachShadow)}return shadowDomIsSupported}()){const rootNode=element.getRootNode?element.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&rootNode instanceof ShadowRoot)return rootNode}return null}function _getFocusedElementPierceShadowDom(){let activeElement="undefined"!=typeof document&&document?document.activeElement:null;for(;activeElement&&activeElement.shadowRoot;){const newActiveElement=activeElement.shadowRoot.activeElement;if(newActiveElement===activeElement)break;activeElement=newActiveElement}return activeElement}function _getEventTarget(event){return event.composedPath?event.composedPath()[0]:event.target}function _isTestEnvironment(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}},"./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>distinctUntilChanged});var _util_identity__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function distinctUntilChanged(comparator,keySelector){return void 0===keySelector&&(keySelector=_util_identity__WEBPACK_IMPORTED_MODULE_0__.y),comparator=null!=comparator?comparator:defaultCompare,(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){var previousKey,first=!0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(value){var currentKey=keySelector(value);!first&&comparator(previousKey,currentKey)||(first=!1,previousKey=currentKey,subscriber.next(value))})))}))}function defaultCompare(a,b){return a===b}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>animationFrameScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),AsyncAction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),animationFrameProvider={schedule:function(callback){var request=requestAnimationFrame,cancel=cancelAnimationFrame,delegate=animationFrameProvider.delegate;delegate&&(request=delegate.requestAnimationFrame,cancel=delegate.cancelAnimationFrame);var handle=request((function(timestamp){cancel=void 0,callback(timestamp)}));return new Subscription.w0((function(){return null==cancel?void 0:cancel(handle)}))},requestAnimationFrame:function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var delegate=animationFrameProvider.delegate;return((null==delegate?void 0:delegate.requestAnimationFrame)||requestAnimationFrame).apply(void 0,(0,tslib_es6.ev)([],(0,tslib_es6.CR)(args)))},cancelAnimationFrame:function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var delegate=animationFrameProvider.delegate;return((null==delegate?void 0:delegate.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,(0,tslib_es6.ev)([],(0,tslib_es6.CR)(args)))},delegate:void 0},AnimationFrameAction=function(_super){function AnimationFrameAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this}return(0,tslib_es6.ZT)(AnimationFrameAction,_super),AnimationFrameAction.prototype.requestAsyncId=function(scheduler,id,delay){return void 0===delay&&(delay=0),null!==delay&&delay>0?_super.prototype.requestAsyncId.call(this,scheduler,id,delay):(scheduler.actions.push(this),scheduler._scheduled||(scheduler._scheduled=animationFrameProvider.requestAnimationFrame((function(){return scheduler.flush(void 0)}))))},AnimationFrameAction.prototype.recycleAsyncId=function(scheduler,id,delay){var _a;if(void 0===delay&&(delay=0),null!=delay?delay>0:this.delay>0)return _super.prototype.recycleAsyncId.call(this,scheduler,id,delay);var actions=scheduler.actions;null!=id&&(null===(_a=actions[actions.length-1])||void 0===_a?void 0:_a.id)!==id&&(animationFrameProvider.cancelAnimationFrame(id),scheduler._scheduled=void 0)},AnimationFrameAction}(AsyncAction.o),animationFrameScheduler=new(function(_super){function AnimationFrameScheduler(){return null!==_super&&_super.apply(this,arguments)||this}return(0,tslib_es6.ZT)(AnimationFrameScheduler,_super),AnimationFrameScheduler.prototype.flush=function(action){this._active=!0;var flushId=this._scheduled;this._scheduled=void 0;var error,actions=this.actions;action=action||actions.shift();do{if(error=action.execute(action.state,action.delay))break}while((action=actions[0])&&action.id===flushId&&actions.shift());if(this._active=!1,error){for(;(action=actions[0])&&action.id===flushId&&actions.shift();)action.unsubscribe();throw error}},AnimationFrameScheduler}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js").v))(AnimationFrameAction)}}]);