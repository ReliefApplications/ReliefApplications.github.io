(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[2915],{"./libs/ui/src/lib/tooltip/tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>TooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let TooltipComponent=((_class=class TooltipComponent{constructor(){this.hint=""}get resolvePositionCases(){const classes=[];switch(this.position){case"top":classes.push("group flex relative justify-center");break;case"top-left":classes.push("flex items-start justify-start");break;case"top-right":classes.push("flex items-start justify-end");break;case"bottom":classes.push("flex h-100% items-end justify-center");break;case"bottom-left":classes.push("flex items-end justify-start");break;case"bottom-right":classes.push("flex items-end justify-end");break;case"left":classes.push("flex items-center justify-start");break;case"right":classes.push("flex items-center justify-end")}return classes}get resolveButtonCases(){const classes=[];switch(this.position){case"bottom":case"bottom-left":case"bottom-right":classes.push("fixed bottom-0");break;case"right":case"left":classes.push("fixed bottom-2/4")}return classes}}).propDecorators={position:[{type:core.Input}],hint:[{type:core.Input}]},_class);TooltipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-tooltip",template:'\x3c!-- TEST ELEMENT FOR STORYBOOK--\x3e\n<div [ngClass]="resolvePositionCases">\n  <button\n    [ngClass]="resolveButtonCases"\n    [uiTooltip]="hint"\n    class="bg-gray-200 shadow-md hover:shadow-xl hover:bg-gray-300 p-2 rounded-md"\n  >\n    Random content\n  </button>\n</div>\n'})],TooltipComponent)},"./libs/ui/src/lib/tooltip/tooltip.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>TooltipModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");let TooltipDirective=((_class=class TooltipDirective{constructor(document,elementRef,renderer){this.document=document,this.elementRef=elementRef,this.renderer=renderer,this.uiTooltip="",this.tooltipDisabled=!1,this.tooltipSeparation=5,this.tooltipClasses=["opacity-70","transition-opacity","delay-300","bg-gray-800","p-2","max-w-xs","whitespace-pre-wrap","text-xs","text-gray-100","rounded-md","absolute","z-[9999]"],this.createTooltipElement()}onMouseEnter(){this.uiTooltip&&!this.tooltipDisabled&&this.showHint()}onMouseLeave(){this.removeHint()}removeHint(){this.document.body.contains(this.elToolTip)&&this.renderer.removeChild(this.document.body,this.elToolTip)}showHint(){this.elToolTip.textContent=this.uiTooltip,this.renderer.addClass(this.elToolTip,"opacity-0"),this.renderer.appendChild(this.document.body,this.elToolTip);const hostPos=this.elementRef.nativeElement.getBoundingClientRect(),tooltipPos=this.elToolTip.getBoundingClientRect();this.renderer.removeClass(this.elToolTip,"opacity-0"),this.renderer.removeChild(this.document.body,this.elToolTip);const top=hostPos.bottom,left=hostPos.left,tooltipWidth=tooltipPos.width,tooltipHeight=tooltipPos.height;let topValue=`${top+this.tooltipSeparation}px`,leftValue=`${left+.5*(hostPos.width-tooltipWidth)}px`;tooltipHeight+top>window.innerHeight&&(topValue=hostPos.top-this.tooltipSeparation-tooltipHeight+"px"),left+.5*(hostPos.width-tooltipWidth)<0&&(leftValue="0px"),tooltipWidth+left>window.innerWidth&&(leftValue=window.innerWidth-tooltipWidth+"px"),this.renderer.setStyle(this.elToolTip,"top",topValue),this.renderer.setStyle(this.elToolTip,"left",leftValue),this.renderer.appendChild(this.document.body,this.elToolTip)}createTooltipElement(){this.elToolTip=this.renderer.createElement("span");for(const cl of this.tooltipClasses)this.renderer.addClass(this.elToolTip,cl)}ngOnDestroy(){this.removeHint()}}).ctorParameters=()=>[{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]},{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={uiTooltip:[{type:core.Input}],tooltipDisabled:[{type:core.Input}],onMouseEnter:[{type:core.HostListener,args:["mouseenter"]}],onMouseLeave:[{type:core.HostListener,args:["mouseleave"]}]},_class);TooltipDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiTooltip]"}),(0,tslib_es6.w6)("design:paramtypes",[Document,core.ElementRef,core.Renderer2])],TooltipDirective);var tooltip_component=__webpack_require__("./libs/ui/src/lib/tooltip/tooltip.component.ts");let TooltipModule=class TooltipModule{};TooltipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[TooltipDirective,tooltip_component.K],imports:[common.CommonModule],exports:[TooltipDirective,tooltip_component.K]})],TooltipModule)},"./libs/ui/src/lib/dialog/dialog.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>dialog_component_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),dialog=__webpack_require__("./node_modules/@angular/cdk/fesm2020/dialog.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");var _class,dialog_componentngResource=__webpack_require__("./libs/ui/src/lib/dialog/dialog.component.scss?ngResource"),dialog_componentngResource_default=__webpack_require__.n(dialog_componentngResource);let DialogComponent=((_class=class DialogComponent{constructor(dialogRef){this.dialogRef=dialogRef,this.closable=!1,this.padding=!0,this.onClose=()=>{this.dialogRef.close()}}ngOnInit(){switch(this.size){case"fullscreen":this.dialogRef.addPanelClass("fullscreen-dialog");break;case"small":this.dialogRef.updateSize("300px");break;case"medium":this.dialogRef.updateSize("700px");break;case"big":this.dialogRef.updateSize("100vw","98%");break;default:this.dialogRef.removePanelClass("fullscreen-dialog")}this.padding||this.dialogRef.addPanelClass("no-padding-dialog")}ngOnChanges(){switch(this.size){case"fullscreen":this.dialogRef.addPanelClass("fullscreen-dialog");break;case"small":this.dialogRef.updateSize("300px");break;case"medium":this.dialogRef.updateSize("700px");break;case"big":this.dialogRef.updateSize("100vw","98%");break;default:this.dialogRef.removePanelClass("fullscreen-dialog")}this.padding||this.dialogRef.addPanelClass("no-padding-dialog")}}).ctorParameters=()=>[{type:dialog.zj}],_class.propDecorators={closable:[{type:core.Input}],padding:[{type:core.Input}],size:[{type:core.Input}],onClose:[{type:core.Input}]},_class);var dialog_close_directive_class;DialogComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-dialog",template:'<ui-button\n  *ngIf="closable"\n  class="absolute z-10 right-1.5 top-1.5"\n  [isIcon]="true"\n  icon="close"\n  [variant]="\'danger\'"\n  [uiTooltip]="\'common.close\' | translate"\n  (click)="onClose()"\n>\n</ui-button>\n<div class="flex flex-col h-full overflow-hidden">\n  \x3c!-- Dialog header --\x3e\n  <ng-content select="header"></ng-content>\n  \x3c!-- Dialog content --\x3e\n  <div class="flex-1 overflow-auto">\n    <ng-content select="content"></ng-content>\n  </div>\n  \x3c!-- Dialog footer --\x3e\n  <div\n    class="py-2 flex flex-wrap min-h-[52px] items-center box-content -mb-4 justify-end gap-2 empty:hidden"\n  >\n    <ng-content select="actions"></ng-content>\n  </div>\n</div>\n',styles:[dialog_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[dialog.zj])],DialogComponent);let DialogCloseDirective=((dialog_close_directive_class=class DialogCloseDirective{constructor(dialogRef){this.dialogRef=dialogRef}onClose(){this.dialogRef.close(this.uiDialogClose)}}).ctorParameters=()=>[{type:dialog.zj}],dialog_close_directive_class.propDecorators={uiDialogClose:[{type:core.Input}],onClose:[{type:core.HostListener,args:["click",["$event"]]}]},dialog_close_directive_class);DialogCloseDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiDialogClose]"}),(0,tslib_es6.w6)("design:paramtypes",[dialog.zj])],DialogCloseDirective);var ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),tooltip_module=__webpack_require__("./libs/ui/src/lib/tooltip/tooltip.module.ts"),button_module=__webpack_require__("./libs/ui/src/lib/button/button.module.ts");let DialogModule=class DialogModule{};DialogModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[DialogComponent,DialogCloseDirective],imports:[common.CommonModule,dialog.Su,ngx_translate_core.aw,button_module.h,tooltip_module.z],exports:[DialogComponent,DialogCloseDirective,ngx_translate_core.aw]})],DialogModule);var Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");var dialog_component_stories_class,_class2;let LaunchDialogComponent=((dialog_component_stories_class=class LaunchDialogComponent{constructor(_dialog){this._dialog=_dialog,this.animal="",this.size="medium",this.destroy$=new Subject.x}openDialog(){this._dialog.open(EditDialogComponent,{data:{animal:this.animal,size:this.size}}).closed.pipe((0,takeUntil.R)(this.destroy$)).subscribe((result=>{console.log(`Dialog result: ${result}`)}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}).ctorParameters=()=>[{type:dialog.Vq}],dialog_component_stories_class.propDecorators={animal:[{type:core.Input}],size:[{type:core.Input}]},dialog_component_stories_class);LaunchDialogComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-dialog-launcher",template:'\n    <button\n      type="button"\n      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"\n      (click)="openDialog()"\n    >\n      Open dialog\n    </button>\n  '}),(0,tslib_es6.w6)("design:paramtypes",[dialog.Vq])],LaunchDialogComponent);let EditDialogComponent=((_class2=class EditDialogComponent{constructor(dialogRef,data){this.dialogRef=dialogRef,this.data=data}}).ctorParameters=()=>[{type:dialog.zj},{type:void 0,decorators:[{type:core.Inject,args:[dialog.Kt]}]}],_class2);EditDialogComponent=(0,tslib_es6.gn)([(0,core.Component)({standalone:!0,imports:[common.CommonModule,DialogModule],selector:"ui-edit-dialog",template:'\n    <ui-dialog [size]="data.size">\n      <ng-container ngProjectAs="header">\n        <div\n          class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"\n        >\n          <svg\n            class="h-6 w-6 text-green-600"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke-width="1.5"\n            stroke="currentColor"\n            aria-hidden="true"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M4.5 12.75l6 6 9-13.5"\n            />\n          </svg>\n        </div>\n      </ng-container>\n      <ng-container ngProjectAs="content">\n        <div class="flex flex-col h-full">\n          <div class="my-auto text-center">\n            <h3\n              class="text-base font-semibold leading-6 text-gray-900"\n              id="modal-title"\n            >\n              Payment successful\n            </h3>\n            <div class="mt-2">\n              <p class="text-sm text-gray-500">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Consequatur amet labore.\n              </p>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <ng-container ngProjectAs="actions">\n        <br />\n        <button\n          type="button"\n          class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"\n          [uiDialogClose]="data.animal"\n        >\n          Go back\n        </button>\n      </ng-container>\n    </ui-dialog>\n  '}),(0,tslib_es6.w6)("design:paramtypes",[dialog.zj,Object])],EditDialogComponent);const dialog_component_stories={title:"Dialog",component:LaunchDialogComponent,decorators:[(0,dist.moduleMetadata)({declarations:[LaunchDialogComponent],imports:[common.CommonModule,DialogModule]})],argTypes:{size:{options:["fullscreen","small","medium","big"],control:{type:"select"}}}},Default=(args=>({props:args})).bind({});Default.args={animal:"panda",size:"small"}},"./libs/ui/src/lib/dialog/dialog.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  max-width: 100% !important;\n  max-height: 90vh;\n  position: relative;\n  display: block;\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  text-align: left;\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}@media (min-width: 640px) {:host {\n    width: 100%;\n    max-width: 32rem;\n    padding: 1.5rem;\n  }\n}\n@media (max-width: 640px) {\n  :host {\n    padding: 1rem !important;\n  }\n}\n\n::ng-deep button {\n  box-shadow: none !important;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);