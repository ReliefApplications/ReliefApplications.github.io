(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[4968],{"./libs/ui/src/lib/autocomplete/autocomplete.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>AutocompleteComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),option_component=__webpack_require__("./libs/ui/src/lib/autocomplete/components/option.component.ts");let AutocompleteComponent=((_class=class AutocompleteComponent{constructor(){this.openPanel=!1}}).propDecorators={templateRef:[{type:core.ViewChild,args:[core.TemplateRef]}],options:[{type:core.ContentChildren,args:[option_component.x,{descendants:!0}]}]},_class);AutocompleteComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-autocomplete",template:'<ng-template>\n  <div class="relative w-full max-w-sm">\n    <ul\n      id="autocompleteList"\n      class="z-10 block max-h-60 w-full overflow-auto mt-2 rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"\n    >\n      <ng-content></ng-content>\n    </ul>\n  </div>\n</ng-template>\n'})],AutocompleteComponent)},"./libs/ui/src/lib/autocomplete/autocomplete.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>AutocompleteModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),autocomplete_component=__webpack_require__("./libs/ui/src/lib/autocomplete/autocomplete.component.ts"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2020/overlay.mjs"),portal=__webpack_require__("./node_modules/@angular/cdk/fesm2020/portal.mjs");let AutocompleteDirective=(_class=class AutocompleteDirective{constructor(control,el,renderer,viewContainerRef,overlay,document){this.el=el,this.renderer=renderer,this.viewContainerRef=viewContainerRef,this.overlay=overlay,this.document=document,this.scrollStrategy="close",this.opened=new core.EventEmitter,this.closed=new core.EventEmitter,this.optionSelected=new core.EventEmitter,this.destroy$=new Subject.x,this.getOptionValue=option=>this.autocompleteDisplayKey?option.value[this.autocompleteDisplayKey]:option.value,this.getNotGroupOptionList=()=>this.autocompletePanel.options?this.autocompletePanel.options.filter((option=>!option.isGroup)):[],this.getGroupOptionList=()=>this.autocompletePanel.options?this.autocompletePanel.options.filter((option=>option.isGroup)):[],this.control=control,this.inputElement=el.nativeElement}onClick(){this.autocompletePanel.openPanel||this.openAutocompletePanel()}ngOnInit(){this.inputEventListener=this.renderer.listen(this.inputElement,"input",(event=>{this.updateListAndSelectedOption(event.target.value)})),this.control?.control?this.value=this.control.control.value:this.inputElement?.value&&(this.value=this.inputElement.value)}ngAfterContentInit(){this.control?.control&&this.control.control.valueChanges.pipe((0,takeUntil.R)(this.destroy$)).subscribe({next:value=>{this.updateListAndSelectedOption(value)}}),this.clickOutsideListener=this.renderer.listen(window,"click",(event=>{this.inputElement.contains(event.target)||this.document.getElementById("autocompleteList")?.contains(event.target)||this.closeAutocompletePanel()}))}highLightSelectedOption(){this.getNotGroupOptionList().forEach((option=>{(0,lodash.isEqual)(this.value,option.value)?option.selected=!0:option.selected=!1}))}filterAutocompleteOptions(searchText){this.getNotGroupOptionList().forEach((option=>{(option.label&&""!==option.label?option.label:this.getOptionValue(option)).toLowerCase().includes(searchText.toLowerCase())?option.display=!0:option.display=!1})),this.getGroupOptionList().forEach((option=>{const checkValue=option.label&&""!==option.label?option.label:this.getOptionValue(option),childOptions=option.options.toArray();checkValue.toLowerCase().includes(searchText.toLowerCase())?(option.display=!0,childOptions.forEach((option=>option.display=!0))):childOptions.every((option=>!option.display))?option.display=!1:option.display=!0}))}updateListAndSelectedOption(value){this.value&&!(0,lodash.isEqual)(this.getOptionValue({value:this.value}),this.inputElement.value)&&(this.value=null,this.highLightSelectedOption()),this.autocompletePanel.openPanel&&this.filterAutocompleteOptions(value)}openAutocompletePanel(){this.autocompletePanel.openPanel=!0,""!==this.inputElement.value&&this.inputElement.value&&this.highLightSelectedOption(),this.filterAutocompleteOptions(this.inputElement.value),this.overlayRef=this.overlay.create({hasBackdrop:!1,scrollStrategy:"close"===this.scrollStrategy?this.overlay.scrollStrategies.close():this.overlay.scrollStrategies.block(),positionStrategy:this.overlay.position().flexibleConnectedTo(this.inputElement.parentElement??this.inputElement).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top",offsetX:0,offsetY:0}]),minWidth:this.inputElement.parentElement?.clientWidth&&0!==this.inputElement.parentElement?.clientWidth?this.inputElement.parentElement?.clientWidth:this.inputElement.clientWidth});const templatePortal=new portal.UE(this.autocompletePanel.templateRef,this.viewContainerRef);this.overlayRef.attach(templatePortal),setTimeout((()=>{this.applyAutocompleteDisplayAnimation(!0)}),0),this.autocompleteClosingActionsSubscription=this.autocompleteClosingActions().subscribe((()=>this.closeAutocompletePanel())),this.selectOptionListener&&this.selectOptionListener(),this.selectOptionListener=this.renderer.listen(this.document.getElementById("autocompleteList"),"click",(event=>{if(!JSON.parse(event.target.getAttribute("data-is-group"))){const optionValue=JSON.parse(event.target.getAttribute("data-value")),isSelected=JSON.parse(event.target.getAttribute("data-selected"));this.value=isSelected?optionValue:null,this.control?.control&&this.control.control.setValue(this.value,{emitEvent:!1}),this.inputElement.value=event.target.getAttribute("data-label")||this.value,this.optionSelected.emit(this.value),this.closeAutocompletePanel()}})),this.opened.emit()}closeAutocompletePanel(){this.overlayRef&&this.autocompletePanel.openPanel&&(this.autocompleteClosingActionsSubscription.unsubscribe(),this.autocompletePanel.openPanel=!1,this.closed.emit(),this.applyAutocompleteDisplayAnimation(!1),setTimeout((()=>{this.overlayRef.detach()}),100))}autocompleteClosingActions(){const detachment$=this.overlayRef.detachments();return(0,merge.T)(detachment$)}applyAutocompleteDisplayAnimation(toDisplay){const autocompleteList=this.overlayRef.overlayElement.querySelector("div");toDisplay?(this.renderer.addClass(autocompleteList,"translate-y-0"),this.renderer.addClass(autocompleteList,"opacity-100")):(this.renderer.removeClass(autocompleteList,"translate-y-0"),this.renderer.removeClass(autocompleteList,"opacity-100"))}ngOnDestroy(){this.inputEventListener&&this.inputEventListener(),this.selectOptionListener&&this.selectOptionListener(),this.clickOutsideListener&&this.clickOutsideListener(),this.destroy$.next(),this.destroy$.complete()}},_class.ctorParameters=()=>[{type:fesm2020_forms.a5,decorators:[{type:core.Self},{type:core.Optional}]},{type:core.ElementRef},{type:core.Renderer2},{type:core.ViewContainerRef},{type:overlay.aV},{type:Document,decorators:[{type:core.Inject,args:[common.DOCUMENT]}]}],_class.propDecorators={autocompletePanel:[{type:core.Input,args:["uiAutocomplete"]}],autocompleteDisplayKey:[{type:core.Input}],scrollStrategy:[{type:core.Input}],opened:[{type:core.Output}],closed:[{type:core.Output}],optionSelected:[{type:core.Output}],onClick:[{type:core.HostListener,args:["click"]}]},_class);AutocompleteDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiAutocomplete]"}),(0,tslib_es6.w6)("design:paramtypes",[fesm2020_forms.a5,core.ElementRef,core.Renderer2,core.ViewContainerRef,overlay.aV,Document])],AutocompleteDirective);var option_component=__webpack_require__("./libs/ui/src/lib/autocomplete/components/option.component.ts");let OptionModule=class OptionModule{};OptionModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[option_component.x],imports:[common.CommonModule],exports:[option_component.x]})],OptionModule);let AutocompleteModule=class AutocompleteModule{};AutocompleteModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[AutocompleteDirective,autocomplete_component.Y],imports:[common.CommonModule,OptionModule],exports:[AutocompleteDirective,autocomplete_component.Y,OptionModule]})],AutocompleteModule)},"./libs/ui/src/lib/autocomplete/components/option.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>OptionComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,OptionComponent_1,option_componentngResource=__webpack_require__("./libs/ui/src/lib/autocomplete/components/option.component.scss?ngResource"),option_componentngResource_default=__webpack_require__.n(option_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let OptionComponent=((_class=class OptionComponent{constructor(){this.label="",this.isGroup=!1,this.selected=!1,this.display=!0}get getValue(){return this.value?JSON.stringify(this.value):""}}).propDecorators={value:[{type:core.Input}],label:[{type:core.Input}],isGroup:[{type:core.Input}],options:[{type:core.ContentChildren,args:[(0,core.forwardRef)((()=>OptionComponent_1))]}]},OptionComponent_1=_class);OptionComponent=OptionComponent_1=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-option",template:'<li\n  *ngIf="display"\n  [attr.data-label]="label"\n  [attr.data-value]="getValue"\n  [attr.data-selected]="selected"\n  [attr.data-is-group]="isGroup"\n  [ngClass]="{\n    \'bg-primary-300 text-white\': !isGroup && selected,\n    \'cursor-pointer hover:bg-primary-200 hover:text-white gap-2 flex items-center text-gray-900\':\n      !isGroup,\n    \'text-gray-500 pb-2\': isGroup\n  }"\n  class="px-2 py-1 relative pl-2 w-full justify-between"\n  (click)="selected = !selected"\n>\n  <ng-content></ng-content>\n  <ng-content select="icon"></ng-content>\n</li>\n',styles:[option_componentngResource_default()]})],OptionComponent)},"./libs/ui/src/lib/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,icon_componentngResource=__webpack_require__("./libs/ui/src/lib/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let IconComponent=((_class=class IconComponent{constructor(){this.icon="",this.category="primary",this.variant="default",this.size=24,this.isOutlined=!1}get fontSize(){return this.size+"px"}get iconVariantAndCategory(){const classes=[];return classes.push("secondary"===this.category||"light"===this.variant?"icon-light":"primary"===this.variant?"icon-primary":"success"===this.variant?"icon-success":"grey"===this.variant?"icon-grey":"danger"===this.variant?"icon-danger":"warning"===this.variant?"icon-warning":""),classes}}).propDecorators={icon:[{type:core.Input}],category:[{type:core.Input}],variant:[{type:core.Input}],size:[{type:core.Input}],isOutlined:[{type:core.Input}]},_class);IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-icon",template:'<ng-container *ngIf="isOutlined; else angularMaterialIconTmpl">\n  <span\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons-outlined material-symbols-outlined inline-flex align-middle"\n  >\n    {{ icon }}\n  </span>\n</ng-container>\n<ng-template #angularMaterialIconTmpl>\n  <i\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons inline-flex align-middle"\n    >{{ icon }}</i\n  >\n</ng-template>\n',styles:[icon_componentngResource_default()]})],IconComponent)},"./libs/ui/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/icon/icon.component.ts");let IconModule=class IconModule{};IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o]})],IconModule)},"./libs/ui/src/lib/autocomplete/autocomplete.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormAutocomplete:()=>FormAutocomplete,GroupedAutocompletePanel:()=>GroupedAutocompletePanel,SimpleAutocompletePanel:()=>SimpleAutocompletePanel,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/src/lib/autocomplete/autocomplete.module.ts"),_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/src/lib/autocomplete/autocomplete.component.ts"),_icon_icon_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs");const SIMPLE_OPTIONS=[{label:"A"},{label:"a B"},{label:"C"},{label:"D"}],GROUPED_OPTIONS=[{optionName:"A",channels:[{optionName:"option A 1"}]},{optionName:"B",channels:[{optionName:"B 1"},{optionName:"b"}]},{optionName:"C"},{optionName:"D",channels:[{optionName:"D 1"},{optionName:"D two"},{optionName:"D a b"}]}],__WEBPACK_DEFAULT_EXPORT__={title:"Autocomplete",component:_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.Y,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_autocomplete_module__WEBPACK_IMPORTED_MODULE_1__.I,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UX,_icon_icon_module__WEBPACK_IMPORTED_MODULE_3__.Q]})]},openedAutocompletePanel=()=>{console.log("Opened autocomplete panel event")},closesAutocompletePanel=()=>{console.log("Closed autocomplete panel event")},selectedOption=option=>{console.log("Option selected: ",option)},formControl=new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NI,SimpleAutocompletePanel=(args=>({component:_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__.Y,template:'\n      <input\n        type="text"\n        placeholder="Select a value"\n        [uiAutocomplete]="auto"\n        [autocompleteDisplayKey]="\'label\'"\n        (opened)="openedAutocompletePanel()"\n        (closed)="closesAutocompletePanel()"\n        (optionSelected)="selectedOption($event)"\n        class="relative w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset sm:leading-6 focus:ring-2 focus:ring-inset"\n      >\n      <ui-autocomplete #auto>\n      <ui-option *ngFor="let option of SIMPLE_OPTIONS" [value]="option">\n        {{option.label}}\n        <ng-container ngProjectsAs="icon">\n        <ui-icon\n          icon="edit"\n          [size]="18"\n        ></ui-icon>\n        </ng-container>\n      </ui-option>\n      <ui-autocomplete>\n    ',props:{...args,SIMPLE_OPTIONS,openedAutocompletePanel,closesAutocompletePanel,selectedOption}})).bind({}),GroupedAutocompletePanel=(args=>({template:'\n    <input\n    type="text"\n    placeholder="Select a value"\n    [uiAutocomplete]="auto"\n    [autocompleteDisplayKey]="\'optionName\'"\n    (opened)="openedAutocompletePanel()"\n    (closed)="closesAutocompletePanel()"\n    (optionSelected)="selectedOption($event)"\n    class="relative w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset sm:leading-6 focus:ring-2 focus:ring-inset"\n  >\n  <ui-autocomplete #auto>\n  <ui-option [isGroup]="true" *ngFor="let option of GROUPED_OPTIONS">\n    {{option.optionName}}\n    <ui-option *ngFor="let child of option.channels" [value]="child">\n    {{child.optionName}}\n    <ng-container ngProjectsAs="icon">\n    <ui-icon\n      icon="edit"\n      [size]="18"\n    ></ui-icon>\n    </ng-container>\n  </ui-option>\n  </ui-option>\n  <ui-autocomplete>\n    ',props:{...args,GROUPED_OPTIONS,openedAutocompletePanel,closesAutocompletePanel,selectedOption}})).bind({}),FormAutocomplete=(args=>(formControl.setValue(SIMPLE_OPTIONS[2]),{template:'\n    <input\n    type="text"\n    placeholder="Select a value"\n    [formControl]="formControl"\n    [uiAutocomplete]="auto"\n    [autocompleteDisplayKey]="\'label\'"\n    (opened)="openedAutocompletePanel()"\n    (closed)="closesAutocompletePanel()"\n    (optionSelected)="selectedOption($event)"\n    class="relative w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset sm:leading-6 focus:ring-2 focus:ring-inset"\n  >\n  <ui-autocomplete #auto>\n  <ui-option *ngFor="let option of SIMPLE_OPTIONS" [value]="option">\n    {{option.label}}\n    <ng-container ngProjectsAs="icon">\n    <ui-icon\n      icon="edit"\n      [size]="18"\n    ></ui-icon>\n    </ng-container>\n  </ui-option>\n  </ui-autocomplete>\n      <br>\n      <p>value: {{formControl.value | json}}</p>\n      <p>touched: {{formControl.touched}}</p>\n    ',props:{...args,SIMPLE_OPTIONS,formControl,openedAutocompletePanel,closesAutocompletePanel,selectedOption}})).bind({})},"./libs/ui/src/lib/autocomplete/components/option.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/lib/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".icon-primary {\n  --tw-text-opacity: 1;\n  color: rgb(var(--primary-400) / var(--tw-text-opacity));\n}\n\n.icon-danger {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\n\n.icon-success {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity));\n}\n\n.icon-warning {\n  --tw-text-opacity: 1;\n  color: rgb(250 204 21 / var(--tw-text-opacity));\n}\n\n.icon-light {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.icon-grey {\n  --tw-text-opacity: 1;\n  color: rgb(163 163 163 / var(--tw-text-opacity));\n}\n\n.material-icons-outlined {\n  overflow: hidden;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);