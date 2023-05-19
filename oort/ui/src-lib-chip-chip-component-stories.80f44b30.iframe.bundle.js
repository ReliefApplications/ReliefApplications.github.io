/*! For license information please see src-lib-chip-chip-component-stories.80f44b30.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[377],{"./node_modules/@angular/cdk/fesm2020/keycodes.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JU:()=>SHIFT,K5:()=>ENTER,MW:()=>META,OC:()=>COMMA,Vb:()=>hasModifierKey,b2:()=>MAC_META,hY:()=>ESCAPE,jx:()=>CONTROL,zL:()=>ALT});const ENTER=13,SHIFT=16,CONTROL=17,ALT=18,ESCAPE=27,META=91,COMMA=188,MAC_META=224;function hasModifierKey(event,...modifiers){return modifiers.length?modifiers.some((modifier=>event[modifier])):event.altKey||event.shiftKey||event.ctrlKey||event.metaKey}},"./libs/ui/src/lib/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,icon_componentngResource=__webpack_require__("./libs/ui/src/lib/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),variant_enum=__webpack_require__("./libs/ui/src/lib/shared/variant.enum.ts"),category_enum=__webpack_require__("./libs/ui/src/lib/shared/category.enum.ts");let IconComponent=((_class=class IconComponent{constructor(){this.icon="",this.category=category_enum.W.PRIMARY,this.variant=variant_enum.$.DEFAULT,this.size=24}get fontSize(){return this.size+"px"}get iconVariantAndCategory(){const classes=[];return classes.push(this.category===category_enum.W.SECONDARY||this.variant===variant_enum.$.LIGHT?"icon-light":this.variant===variant_enum.$.PRIMARY?"icon-primary":this.variant===variant_enum.$.SUCCESS?"icon-success":this.variant===variant_enum.$.GREY?"icon-grey":this.variant===variant_enum.$.DANGER?"icon-danger":""),classes}}).propDecorators={icon:[{type:core.Input}],category:[{type:core.Input}],variant:[{type:core.Input}],size:[{type:core.Input}]},_class);IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-icon",template:'<ng-container *ngIf="icon.endsWith(\'_outline\'); else angularMaterialIconTmpl">\n  <span\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons-outlined inline-flex align-middle"\n  >\n    {{ icon }}\n  </span>\n</ng-container>\n\x3c!--@TODO Are we using Angular Material Icons?--\x3e\n<ng-template #angularMaterialIconTmpl>\n  <i\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons inline-flex align-middle"\n    >{{ icon }}</i\n  >\n</ng-template>\n',styles:[icon_componentngResource_default()]})],IconComponent)},"./libs/ui/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/icon/icon.component.ts");let IconModule=class IconModule{};IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o]})],IconModule)},"./libs/ui/src/lib/shared/category.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Category;__webpack_require__.d(__webpack_exports__,{W:()=>Category}),function(Category){Category.PRIMARY="primary",Category.SECONDARY="secondary",Category.TERTIARY="tertiary"}(Category||(Category={}))},"./libs/ui/src/lib/shared/variant.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Variant;__webpack_require__.d(__webpack_exports__,{$:()=>Variant}),function(Variant){Variant.DEFAULT="default",Variant.PRIMARY="primary",Variant.SUCCESS="success",Variant.DANGER="danger",Variant.GREY="grey",Variant.LIGHT="light"}(Variant||(Variant={}))},"./libs/ui/src/lib/chip/chip.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChipVariants:()=>ChipVariants,ChipWithInput:()=>ChipWithInput,default:()=>chip_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,chip_componentngResource=__webpack_require__("./libs/ui/src/lib/chip/chip.component.scss?ngResource"),chip_componentngResource_default=__webpack_require__.n(chip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),variant_enum=__webpack_require__("./libs/ui/src/lib/shared/variant.enum.ts");let ChipComponent=((_class=class ChipComponent{constructor(){this.value="",this.removable=!1,this.variant=variant_enum.$.DEFAULT,this.disabled=!1,this.removed=new core.EventEmitter,this.chipVariant=variant_enum.$}get chipClasses(){const classes=[];if(this.disabled)classes.push("opacity-40 bg-gray-200 text-gray-400 pointer-events-none");else switch(classes.push("cursor-pointer"),this.variant){case this.chipVariant.DEFAULT:classes.push("bg-gray-300 hover:bg-gray-400 text-gray-500");break;case this.chipVariant.PRIMARY:classes.push("bg-primary-100 hover:bg-primary-200 text-primary-400");break;case this.chipVariant.SUCCESS:classes.push("bg-green-100 hover:bg-green-200 text-green-400");break;case this.chipVariant.DANGER:classes.push("bg-red-100 hover:bg-red-200 text-red-400")}return classes}onClick(event){if(this.disabled)return;const chip=event.currentTarget;chip.style.transform="scale(0.95)",setTimeout((()=>chip.style.transform="scale(1)"),200)}}).propDecorators={value:[{type:core.Input}],removable:[{type:core.Input}],variant:[{type:core.Input}],disabled:[{type:core.Input}],removed:[{type:core.Output}]},_class);ChipComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-chip",template:'<div\n  class="will-change-transform inline-flex items-center gap-x-1.5 px-2 py-1 text-xs font-medium justify-between rounded-[16px]"\n  [ngClass]="chipClasses"\n  (click)="onClick($event)"\n  [attr.value]="value"\n>\n  \x3c!-- CONTENT --\x3e\n  <ng-content></ng-content>\n\n  \x3c!-- REMOVE BUTTON ICON --\x3e\n  <ui-icon\n    *ngIf="removable && !disabled"\n    [icon]="\'close\'"\n    [variant]="variant"\n    [size]="12"\n    (click)="removed.emit()"\n    class="cursor-pointer"\n  ></ui-icon>\n</div>\n',styles:[chip_componentngResource_default()]})],ChipComponent);var chip_list_directive_class,ChipListDirective_1,common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let ChipListDirective=((chip_list_directive_class=class ChipListDirective{constructor(cdr){this.cdr=cdr,this.destroy$=new Subject.x,this.value=[],this.disabled=!1}ngAfterContentInit(){this.currentChipList.changes.pipe((0,startWith.O)(this.currentChipList),(0,filter.h)((()=>!this.disabled)),(0,takeUntil.R)(this.destroy$)).subscribe({next:chips=>{const currentValues=chips.toArray().map((chip=>chip.value));this.writeValue(currentValues),this.onTouch&&this.onChange&&(this.onTouch(),this.onChange(this.value)),this.cdr.detectChanges()}})}writeValue(value){this.value=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouch=fn}setDisabledState(isDisabled){this.disabled=isDisabled}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}).ctorParameters=()=>[{type:core.ChangeDetectorRef}],chip_list_directive_class.propDecorators={uiChipList:[{type:core.Input}],currentChipList:[{type:core.ContentChildren,args:[ChipComponent]}]},ChipListDirective_1=chip_list_directive_class);var chip_input_directive_class;ChipListDirective=ChipListDirective_1=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiChipList]",providers:[{provide:fesm2020_forms.JU,useExisting:(0,core.forwardRef)((()=>ChipListDirective_1)),multi:!0}]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],ChipListDirective);let ChipInputDirective=((chip_input_directive_class=class ChipInputDirective{constructor(renderer,elementRef){this.renderer=renderer,this.elementRef=elementRef,this.chipInputSeparatorKeyCodes=[],this.chipTokenEnd=new core.EventEmitter,this.wrapperDivClasses=["border-solid","rounded-md","border","border-gray-200","p-1","gap-1","flex","w-full","flex-wrap"]}ngAfterContentInit(){this.setWrapperDiv(),this.inputListener=this.renderer.listen(this.elementRef.nativeElement,"keydown",(event=>{const inputValue=this.elementRef.nativeElement.value;if(this.chipInputSeparatorKeyCodes.includes(event.keyCode)){if(event.preventDefault(),inputValue.trim()){const newChip=inputValue.replace(new RegExp(event.keyCode),"");this.chipTokenEnd.emit(newChip)}this.elementRef.nativeElement.value=""}}))}setWrapperDiv(){const wrapper=this.renderer.createElement("div"),parent=this.elementRef.nativeElement.parentNode;this.renderer.insertBefore(parent,wrapper,this.elementRef.nativeElement),this.renderer.appendChild(wrapper,this.chipList),this.renderer.appendChild(wrapper,this.elementRef.nativeElement),this.renderer.addClass(this.chipList,"flex"),this.renderer.addClass(this.chipList,"flex-wrap"),this.renderer.addClass(this.chipList,"gap-1"),this.wrapperDivClasses.forEach((divClass=>{this.renderer.addClass(wrapper,divClass)}))}ngOnDestroy(){this.inputListener&&this.inputListener()}}).ctorParameters=()=>[{type:core.Renderer2},{type:core.ElementRef}],chip_input_directive_class.propDecorators={chipList:[{type:core.Input,args:["uiChipListFor"]}],chipInputSeparatorKeyCodes:[{type:core.Input}],chipTokenEnd:[{type:core.Output}]},chip_input_directive_class);ChipInputDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiChipListFor]"}),(0,tslib_es6.w6)("design:paramtypes",[core.Renderer2,core.ElementRef])],ChipInputDirective);var icon_module=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts");let ChipModule=class ChipModule{};ChipModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ChipComponent,ChipListDirective,ChipInputDirective],imports:[common.CommonModule,icon_module.Q],exports:[ChipComponent,ChipListDirective,ChipInputDirective]})],ChipModule);var keycodes=__webpack_require__("./node_modules/@angular/cdk/fesm2020/keycodes.mjs");const chip_component_stories={title:"Chip",component:ChipComponent,argTypes:{variant:{defaultValue:variant_enum.$.DEFAULT,options:Object.values(variant_enum.$),control:{type:"select"}},removable:{defaultValue:!1,type:"boolean"},disabled:{defaultValue:!1,type:"boolean"}},decorators:[(0,dist.moduleMetadata)({imports:[ChipModule,fesm2020_forms.UX]})]};let statuses=["Active","Pending","Archived"];const formControl=new fesm2020_forms.NI,removeStatus=index=>{statuses.splice(index,1)},addChipsFromInput=chips=>{chips instanceof Array?statuses=statuses.concat([...chips]):statuses.push(chips),formControl.setValue(statuses)},separatorKeysCodes=[keycodes.K5,keycodes.OC],ChipVariants=(args=>({component:ChipComponent,template:`\n      <div class="flex gap-1">\n        <ui-chip [variant]="'${variant_enum.$.DEFAULT}'" [removable]="true"> Default </ui-chip>\n        <ui-chip [variant]="'${variant_enum.$.PRIMARY}'" [removable]="true"> Primary </ui-chip>\n        <ui-chip [variant]="'${variant_enum.$.SUCCESS}'" [removable]="true"> Success </ui-chip>\n        <ui-chip [variant]="'${variant_enum.$.DANGER}'" [removable]="true"> Danger </ui-chip>\n        <ui-chip [variant]="'${variant_enum.$.DANGER}'" [removable]="true" [disabled]="true"> Disabled </ui-chip>\n      </div>\n    `,props:{...args}})).bind({}),ChipWithInput=(args=>({component:ChipComponent,template:`\n      <div uiChipList [formControl]="formControl" #chipList>\n        <ui-chip\n          [removable]="${args.removable}"\n          [disabled]="${args.disabled}"\n          [variant]="'${args.variant}'"\n          [value]="status"\n          *ngFor="let status of statuses; let i = index"\n          (removed)="removeStatus(i)"\n        >\n          {{ status }}\n        </ui-chip>\n      </div>\n      <input\n        placeholder="New status..."\n        [uiChipListFor]="chipList"\n        [chipInputSeparatorKeyCodes]="separatorKeysCodes"\n        (chipTokenEnd)="addChipsFromInput($event)"\n        >\n        <br>\n        <p>value: <span *ngFor="let val of formControl.value;let last = last">{{val}} <span *ngIf="!last">, </span></span></p>\n        <p>touched: {{formControl.touched}}</p>\n        `,props:{...args,statuses,formControl,removeStatus,addChipsFromInput,separatorKeysCodes}})).bind({});ChipWithInput.args={removable:!0,variant:variant_enum.$.DEFAULT,disabled:!1}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/filter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>filter});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function filter(predicate,thisArg){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var index=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){return predicate.call(thisArg,value,index++)&&subscriber.next(value)})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Xf)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.Z)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./libs/ui/src/lib/chip/chip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/lib/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".icon-primary {\n  --tw-text-opacity: 1;\n  color: rgb(var(--primary-400) / var(--tw-text-opacity));\n}\n\n.icon-danger {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\n\n.icon-success {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity));\n}\n\n.icon-light {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.icon-grey {\n  --tw-text-opacity: 1;\n  color: rgb(163 163 163 / var(--tw-text-opacity));\n}\n\n.material-icons-outlined {\n  overflow: hidden;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);