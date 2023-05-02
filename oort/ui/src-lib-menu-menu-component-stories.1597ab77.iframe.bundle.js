(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[227],{"./libs/ui/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var ButtonIconPosition,_class,button_componentngResource=__webpack_require__("./libs/ui/src/lib/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");!function(ButtonIconPosition){ButtonIconPosition.PREFIX="prefix",ButtonIconPosition.SUFFIX="suffix"}(ButtonIconPosition||(ButtonIconPosition={}));let ButtonComponent=((_class=class ButtonComponent{constructor(){this.icon="",this.iconPosition=ButtonIconPosition.PREFIX,this.buttonIconPosition=ButtonIconPosition,this.action=()=>{}}triggerAction(){this.action&&this.action()}}).propDecorators={icon:[{type:core.Input}],iconPosition:[{type:core.Input}],action:[{type:core.Input}]},_class);ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-button",template:'<button\n  (click)="triggerAction()"\n  type="button"\n  class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"\n>\n  <ng-template #prefixIconTmpl></ng-template>\n  <ng-content></ng-content>\n  <ng-template #suffixIconTmpl></ng-template>\n</button>\n\n<ng-container\n  *ngIf="\n    iconPosition === buttonIconPosition.PREFIX;\n    then prefixIconTmpl;\n    else suffixIconTmpl\n  "\n>\n  <ng-container *ngIf="icon">\n    <svg\n      class="-ml-0.5 h-5 w-5"\n      viewBox="0 0 20 20"\n      fill="currentColor"\n      aria-hidden="true"\n    >\n      <path\n        fill-rule="evenodd"\n        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"\n        clip-rule="evenodd"\n      />\n    </svg>\n  </ng-container>\n</ng-container>\n',styles:[button_componentngResource_default()]})],ButtonComponent)},"./libs/ui/src/lib/button/button.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>ButtonModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/button/button.component.ts");let ButtonModule=class ButtonModule{};ButtonModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_button_component__WEBPACK_IMPORTED_MODULE_0__.r],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_button_component__WEBPACK_IMPORTED_MODULE_0__.r]})],ButtonModule)},"./libs/ui/src/lib/divider/divider.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>DividerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,divider_componentngResource=__webpack_require__("./libs/ui/src/lib/divider/divider.component.scss?ngResource"),divider_componentngResource_default=__webpack_require__.n(divider_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),divider_orientation_enum=__webpack_require__("./libs/ui/src/lib/divider/enums/divider-orientation.enum.ts"),divider_position_enum=__webpack_require__("./libs/ui/src/lib/divider/enums/divider-position.enum.ts");let DividerComponent=((_class=class DividerComponent{constructor(){this.orientation=divider_orientation_enum.W.HORIZONTAL,this.position=divider_position_enum.$.CENTER,this.dividerPositions=divider_position_enum.$,this.dividerOrientations=divider_orientation_enum.W}}).propDecorators={orientation:[{type:core.Input}],text:[{type:core.Input}],position:[{type:core.Input}]},_class);DividerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-divider",template:'<div\n  class="divider-container"\n  [ngClass]="{\n    \'items-center\': orientation === dividerOrientations.HORIZONTAL,\n    \'vertical-right\': position === dividerPositions.RIGHT,\n    \'vertical-left\': position === dividerPositions.LEFT\n  }"\n>\n  <div\n    [ngClass]="{\n      \'orientation-horizontal\': orientation === dividerOrientations.HORIZONTAL,\n      \'orientation-vertical\': orientation === dividerOrientations.VERTICAL\n    }"\n  >\n    \x3c!-- DIVIDER --\x3e\n    <div\n      class="inset-0 flex items-center"\n      aria-hidden="true"\n      [ngClass]="{\n        horizontal: orientation === dividerOrientations.HORIZONTAL,\n        vertical: orientation === dividerOrientations.VERTICAL\n      }"\n    >\n      <div\n        class="border-t border-gray-300"\n        [ngClass]="{\n          \'w-full\': orientation === dividerOrientations.HORIZONTAL,\n          \'h-full\': orientation === dividerOrientations.VERTICAL\n        }"\n      ></div>\n    </div>\n    \x3c!-- TEXT --\x3e\n    <div\n      class="flex whitespace-nowrap"\n      [ngClass]="{\n        \'position-center\':\n          position === dividerPositions.CENTER &&\n          orientation !== dividerOrientations.VERTICAL,\n        \'position-left\':\n          position === dividerPositions.LEFT &&\n          orientation !== dividerOrientations.VERTICAL,\n        \'position-right\':\n          position === dividerPositions.RIGHT &&\n          orientation !== dividerOrientations.VERTICAL,\n        \'vertical-center\': orientation === dividerOrientations.VERTICAL\n      }"\n    >\n      <span *ngIf="text" class="bg-white px-2 text-sm text-gray-500">\n        {{ text }}\n      </span>\n    </div>\n  </div>\n</div>\n',styles:[divider_componentngResource_default()]})],DividerComponent)},"./libs/ui/src/lib/divider/divider.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>DividerModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_divider_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/divider/divider.component.ts");let DividerModule=class DividerModule{};DividerModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_divider_component__WEBPACK_IMPORTED_MODULE_0__.X],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_divider_component__WEBPACK_IMPORTED_MODULE_0__.X]})],DividerModule)},"./libs/ui/src/lib/divider/enums/divider-orientation.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var DividerOrientation;__webpack_require__.d(__webpack_exports__,{W:()=>DividerOrientation}),function(DividerOrientation){DividerOrientation.VERTICAL="vertical",DividerOrientation.HORIZONTAL="horizontal"}(DividerOrientation||(DividerOrientation={}))},"./libs/ui/src/lib/divider/enums/divider-position.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var DividerPosition;__webpack_require__.d(__webpack_exports__,{$:()=>DividerPosition}),function(DividerPosition){DividerPosition.RIGHT="right",DividerPosition.CENTER="center",DividerPosition.LEFT="left"}(DividerPosition||(DividerPosition={}))},"./libs/ui/src/lib/menu/menu.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LeftBottomCornerMenu:()=>LeftBottomCornerMenu,LeftTopCornerMenu:()=>LeftTopCornerMenu,RightBottomCornerMenu:()=>RightBottomCornerMenu,RightTopCornerMenu:()=>RightTopCornerMenu,default:()=>menu_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let MenuComponent=((_class=class MenuComponent{constructor(){this.closed=new core.EventEmitter}}).propDecorators={templateRef:[{type:core.ViewChild,args:[core.TemplateRef]}],closed:[{type:core.Output}]},_class);MenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-menu",template:'<ng-template>\n  <div\n    class="z-10 opacity-0 translate-y-1 transition-all ease-in-out duration-150 flex w-screen max-w-min"\n  >\n    <div\n      (click)="closed.emit()"\n      class="w-56 shrink bg-white text-sm font-normal leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5"\n    >\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n'})],MenuComponent);var menu_directive_class,merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),portal=__webpack_require__("./node_modules/@angular/cdk/fesm2020/portal.mjs"),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs");let MenuTriggerForDirective=(menu_directive_class=class MenuTriggerForDirective{constructor(viewContainerRef,elementRef,renderer,overlay){this.viewContainerRef=viewContainerRef,this.elementRef=elementRef,this.renderer=renderer,this.overlay=overlay,this.isMenuOpen=!1}toggleDropdown(){this.isMenuOpen?this.destroyMenu():this.openMenu()}setOverlayOriginPosition(){const isBottomEdge=window.innerHeight-this.elementRef.nativeElement.getBoundingClientRect().top<200,isRightEdge=window.innerWidth-this.elementRef.nativeElement.getBoundingClientRect().right<200;return[{originX:isRightEdge?"end":"start",originY:isBottomEdge?"top":"bottom",overlayX:isRightEdge?"end":"start",overlayY:isBottomEdge?"bottom":"top",offsetX:0,offsetY:0}]}openMenu(){this.isMenuOpen=!0;const overlayOriginPosition=this.setOverlayOriginPosition();this.overlayRef=this.overlay.create({hasBackdrop:!0,backdropClass:"cdk-overlay-transparent-backdrop",scrollStrategy:this.overlay.scrollStrategies.close(),positionStrategy:this.overlay.position().flexibleConnectedTo(this.elementRef).withPositions(overlayOriginPosition)});const templatePortal=new portal.UE(this.menuPanel.templateRef,this.viewContainerRef);this.overlayRef.attach(templatePortal),setTimeout((()=>{this.applyMenuDisplayAnimation(!0)}),0),this.menuClosingActionsSubscription=this.menuClosingActions().subscribe((()=>this.destroyMenu()))}menuClosingActions(){const backdropClick$=this.overlayRef.backdropClick(),detachment$=this.overlayRef.detachments(),dropdownClosed=this.menuPanel.closed;return(0,merge.T)(backdropClick$,detachment$,dropdownClosed)}destroyMenu(){this.overlayRef&&this.isMenuOpen&&(this.menuClosingActionsSubscription.unsubscribe(),this.isMenuOpen=!1,this.applyMenuDisplayAnimation(!1),setTimeout((()=>{this.overlayRef.detach()}),100))}applyMenuDisplayAnimation(toDisplay){const menuList=this.overlayRef.overlayElement.querySelector("div");toDisplay?(this.renderer.addClass(menuList,"translate-y-0"),this.renderer.addClass(menuList,"opacity-100")):(this.renderer.removeClass(menuList,"translate-y-0"),this.renderer.removeClass(menuList,"opacity-100"))}},menu_directive_class.ctorParameters=()=>[{type:core.ViewContainerRef},{type:core.ElementRef},{type:core.Renderer2},{type:overlay.aV}],menu_directive_class.propDecorators={menuPanel:[{type:core.Input,args:["uiMenuTriggerFor"]}],toggleDropdown:[{type:core.HostListener,args:["click"]}]},menu_directive_class);MenuTriggerForDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiMenuTriggerFor]"}),(0,tslib_es6.w6)("design:paramtypes",[core.ViewContainerRef,core.ElementRef,core.Renderer2,overlay.aV])],MenuTriggerForDirective);var divider_module=__webpack_require__("./libs/ui/src/lib/divider/divider.module.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),button_module=__webpack_require__("./libs/ui/src/lib/button/button.module.ts");const menu_component_stories={title:"Menu",component:MenuComponent,decorators:[(0,dist.moduleMetadata)({declarations:[MenuTriggerForDirective],imports:[common.CommonModule,animations.BrowserAnimationsModule,divider_module.x,button_module.h]})]},clickEvent=name=>window.alert(`You pressed the ${name} button!`),menuItemsTemplate='<ui-menu #menu>\n  <div (click)="clickEvent(\'First\')" class="py-2 px-3 cursor-pointer text-primary hover:bg-primary-400 hover:text-white">Button 1</div>\n  <ui-divider></ui-divider>\n  <div (click)="clickEvent(\'Second\')" class="py-2 px-3 cursor-pointer text-primary hover:bg-primary-400 hover:text-white">Button 2</div>\n  <ui-divider></ui-divider>\n  <div (click)="clickEvent(\'Third\')" class="py-2 px-3 cursor-pointer text-primary hover:bg-primary-400 hover:text-white">Button 3</div>\n  </ui-menu>',LeftTopCornerMenu=(args=>({component:MenuComponent,template:`\n    <div class="flex justify-start">\n    <ui-button [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate}`,props:{...args,clickEvent}})).bind({}),LeftBottomCornerMenu=(args=>({component:MenuComponent,template:`\n    <div style="height: calc(100vh - 50px)" class="flex items-end">\n    <ui-button  [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate} `,props:{...args,clickEvent}})).bind({}),RightTopCornerMenu=(args=>({component:MenuComponent,template:`\n    <div class="flex justify-end">\n    <ui-button [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div>\n    ${menuItemsTemplate} `,props:{...args,clickEvent}})).bind({}),RightBottomCornerMenu=(args=>({component:MenuComponent,template:`\n    <div style="height: calc(100vh - 50px)" class="flex justify-end items-end">\n    <ui-button  [uiMenuTriggerFor]="menu">Open menu</ui-button>\n    </div> \n    ${menuItemsTemplate}`,props:{...args,clickEvent}})).bind({})},"./libs/ui/src/lib/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/lib/divider/divider.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".divider-container {\n\n    display: flex;\n\n    justify-content: center\n}\n\n.orientation-horizontal {\n\n    position: relative;\n\n    width: 100%\n}\n\n.orientation-vertical {\n\n    position: absolute;\n\n    height: 100%;\n\n    width: 1px;\n\n    border-left-width: 1px;\n\n    --tw-border-opacity: 1;\n\n    border-color: rgb(229 231 235 / var(--tw-border-opacity))\n}\n\n.horizontal {\n\n    position: absolute\n}\n\n.vertical {\n\n    position: relative\n}\n\n.position-center {\n\n    position: relative;\n\n    justify-content: center\n}\n\n.position-left {\n\n    position: relative;\n\n    justify-content: flex-start\n}\n\n.position-right {\n\n    position: relative;\n\n    justify-content: flex-end\n}\n\n.vertical-center {\n\n    position: absolute;\n\n    left: 50%;\n\n    top: 50%;\n\n    --tw-translate-x: -50%;\n\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\n}\n\n.vertical-right {\n\n    justify-content: flex-end\n}\n\n.vertical-left {\n\n    justify-content: flex-start\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);