(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[5212],{"./libs/ui/src/lib/autocomplete/autocomplete.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>AutocompleteModule});var _class,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");let AutocompleteDirective=((_class=class AutocompleteDirective{constructor(control,el,renderer){this.el=el,this.renderer=renderer,this.opened=new core.EventEmitter,this.closed=new core.EventEmitter,this.optionSelected=new core.EventEmitter,this.destroy$=new Subject.x,this.getOptionValue=option=>this.autocompleteDisplayKey?option.value[this.autocompleteDisplayKey]:option.value,this.getNotGroupOptionList=()=>this.autocompletePanel.options.filter((option=>!option.isGroup)),this.getGroupOptionList=()=>this.autocompletePanel.options.filter((option=>option.isGroup)),this.control=control,this.inputElement=el.nativeElement}onClick(){this.autocompletePanel.openPanel||(this.highLightSelectedOption(),this.openAutocompletePanel())}ngOnInit(){this.outsideClickListener=this.renderer.listen("window","click",(ev=>{this.autocompletePanel.openPanel&&!this.el.nativeElement.contains(ev.target)&&this.closeAutocompletePanel()})),this.inputEventListener=this.renderer.listen(this.inputElement,"input",(event=>{this.selectedOption&&!(0,lodash.isEqual)(this.getOptionValue({value:this.selectedOption}),this.inputElement.value)&&(this.selectedOption=null,this.highLightSelectedOption()),this.filterAutocompleteOptions(event.target.value)}))}ngAfterContentInit(){if(this.control?.control?.value){this.selectedOption=this.control.control.value;const optionToInputValue=this.getOptionValue({value:this.selectedOption});this.renderer.setProperty(this.inputElement,"value",optionToInputValue),this.highLightSelectedOption()}this.setAutocompletePanel()}openAutocompletePanel(){this.autocompletePanel.openPanel=!0,this.opened.emit()}closeAutocompletePanel(){this.autocompletePanel.openPanel=!1,this.closed.emit()}setAutocompletePanel(){const searchText=this.inputElement.value;this.setAutocompletePanelItemsListener(),this.filterAutocompleteOptions(searchText)}setAutocompletePanelItemsListener(){this.highLightSelectedOption(),this.getNotGroupOptionList().forEach((option=>{option.itemClick.pipe((0,takeUntil.R)(this.destroy$)).subscribe({next:isSelected=>{const optionToInputValue=isSelected?this.getOptionValue(option):"";this.selectedOption=isSelected?option.value:null,this.control?.control&&this.control.control.setValue(this.selectedOption),this.renderer.setProperty(this.inputElement,"value",optionToInputValue),this.optionSelected.emit(this.selectedOption),this.filterAutocompleteOptions(optionToInputValue)}})}))}highLightSelectedOption(){this.getNotGroupOptionList().forEach((option=>{(0,lodash.isEqual)(this.selectedOption,option.value)?option.selected=!0:option.selected=!1}))}filterAutocompleteOptions(searchText){this.getNotGroupOptionList().forEach((option=>{this.getOptionValue(option).toLowerCase().includes(searchText.toLowerCase())?option.display=!0:option.display=!1})),this.getGroupOptionList().forEach((option=>{option.options.toArray().every((option=>!option.display))?option.display=!1:option.display=!0}))}ngOnDestroy(){this.inputEventListener&&this.inputEventListener(),this.outsideClickListener&&this.outsideClickListener(),this.destroy$.next(),this.destroy$.complete()}}).ctorParameters=()=>[{type:fesm2020_forms.a5,decorators:[{type:core.Self},{type:core.Optional}]},{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={autocompletePanel:[{type:core.Input,args:["uiAutocomplete"]}],autocompleteDisplayKey:[{type:core.Input}],opened:[{type:core.Output}],closed:[{type:core.Output}],optionSelected:[{type:core.Output}],onClick:[{type:core.HostListener,args:["click"]}]},_class);AutocompleteDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiAutocomplete]"}),(0,tslib_es6.w6)("design:paramtypes",[fesm2020_forms.a5,core.ElementRef,core.Renderer2])],AutocompleteDirective);var autocomplete_component=__webpack_require__("./libs/ui/src/lib/autocomplete/autocomplete.component.ts");let AutocompleteModule=class AutocompleteModule{};AutocompleteModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[AutocompleteDirective,autocomplete_component.Y],imports:[common.CommonModule],exports:[AutocompleteDirective,autocomplete_component.Y]})],AutocompleteModule)},"./libs/ui/src/lib/option/option.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>OptionModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_option_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/option/option.component.ts");let OptionModule=class OptionModule{};OptionModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_option_component__WEBPACK_IMPORTED_MODULE_0__.x],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_option_component__WEBPACK_IMPORTED_MODULE_0__.x]})],OptionModule)},"./libs/ui/src/lib/select-menu/components/select-option.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>SelectOptionModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_select_option_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/select-menu/components/select-option.component.ts");let SelectOptionModule=class SelectOptionModule{};SelectOptionModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_select_option_component__WEBPACK_IMPORTED_MODULE_0__.Z],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_select_option_component__WEBPACK_IMPORTED_MODULE_0__.Z]})],SelectOptionModule)},"./libs/ui/src/lib/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,spinner_componentngResource=__webpack_require__("./libs/ui/src/lib/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let SpinnerComponent=((_class=class SpinnerComponent{constructor(){this.size="large",this.variant="default",this.category="primary"}get resolveSpinnerClasses(){const classes=[];return classes.push("spinner-"+this.size),classes.push("secondary"===this.category||"light"===this.variant?"spinner-light":"default"===this.variant||"primary"===this.variant?"spinner-primary":"danger"==this.variant?"spinner-danger":"grey"===this.variant?"spinner-grey":"spinner-success"),classes}}).propDecorators={size:[{type:core.Input}],variant:[{type:core.Input}],category:[{type:core.Input}]},_class);SpinnerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-spinner",template:'<div role="status" class="overflow-hidden">\n  <svg\n    aria-hidden="true"\n    [ngClass]="resolveSpinnerClasses"\n    class="animate-spin text-gray-300"\n    viewBox="0 0 100 101"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"\n      fill="currentColor"\n    />\n    <path\n      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"\n      fill="currentFill"\n    />\n  </svg>\n  <span class="sr-only">Loading...</span>\n</div>\n',styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./libs/ui/src/lib/spinner/spinner.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>SpinnerModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_spinner_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/spinner/spinner.component.ts");let SpinnerModule=class SpinnerModule{};SpinnerModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_spinner_component__WEBPACK_IMPORTED_MODULE_0__.O],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_spinner_component__WEBPACK_IMPORTED_MODULE_0__.O]})],SpinnerModule)},"./libs/ui/src/lib/form-wrapper/form-wrapper.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OutlineFalse:()=>OutlineFalse,OutlineFalseAutocomplete:()=>OutlineFalseAutocomplete,OutlineFalseSelect:()=>OutlineFalseSelect,OutlineTrue:()=>OutlineTrue,OutlineTrueAutocomplete:()=>OutlineTrueAutocomplete,OutlineTrueSelect:()=>OutlineTrueSelect,default:()=>form_wrapper_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),form_wrapper_directive=__webpack_require__("./libs/ui/src/lib/form-wrapper/form-wrapper.directive.ts"),prefix_directive=__webpack_require__("./libs/ui/src/lib/form-wrapper/prefix.directive.ts"),suffix_directive=__webpack_require__("./libs/ui/src/lib/form-wrapper/suffix.directive.ts");let FormWrapperModule=class FormWrapperModule{};FormWrapperModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[form_wrapper_directive.I,prefix_directive.p,suffix_directive.M],imports:[common.CommonModule],exports:[form_wrapper_directive.I,prefix_directive.p,suffix_directive.M]})],FormWrapperModule);var icon_module=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts"),spinner_module=__webpack_require__("./libs/ui/src/lib/spinner/spinner.module.ts"),fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),select_menu_component=__webpack_require__("./libs/ui/src/lib/select-menu/select-menu.component.ts"),select_option_module=__webpack_require__("./libs/ui/src/lib/select-menu/components/select-option.module.ts");let SelectMenuModule=class SelectMenuModule{};SelectMenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[select_menu_component.d],imports:[common.CommonModule,fesm2020_forms.UX,select_option_module.l],exports:[select_menu_component.d,select_option_module.l]})],SelectMenuModule);var autocomplete_module=__webpack_require__("./libs/ui/src/lib/autocomplete/autocomplete.module.ts"),option_module=__webpack_require__("./libs/ui/src/lib/option/option.module.ts");const form_wrapper_component_stories={title:"Form Wrapper",decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,FormWrapperModule,icon_module.Q,spinner_module.F,SelectMenuModule,autocomplete_module.I,option_module.c]})]},options=["french","spanish","english","japanese","javanese","chinese"],Template=args=>({template:`<div uiFormFieldDirective [outline]="${args.outline}">\n    <label>Phone Number</label>\n    <input type="text" name="account-number" id="account-number" placeholder="000-00-0000"/>\n    <ui-spinner [size]="'medium'" uiSuffix></ui-spinner>\n    <ui-icon icon="search" uiPrefix></ui-icon>\n  </div>`,props:{...args}}),TemplateSelect=args=>({template:`<div uiFormFieldDirective [outline]="${args.outline}">\n    <label>Choose language</label>\n    <ui-select-menu \n      [multiselect]="false"\n      [disabled]="false">\n        <ui-select-option *ngFor="let option of options" [value]="option">\n          {{option}}\n        </ui-select-option>\n    </ui-select-menu>\n    <ui-spinner [size]="'medium'" uiSuffix></ui-spinner>\n    <ui-icon icon="search" uiPrefix></ui-icon>\n  </div>`,props:{...args,options}}),TemplateAutocomplete=args=>({template:`<div uiFormFieldDirective [outline]="${args.outline}">\n    <label>Choose language</label>\n    <input\n    type="text"\n    placeholder="Select a value"\n    [uiAutocomplete]="auto"\n    (optionSelected)="selectedOption($event)"\n  >\n  <ui-autocomplete #auto>\n  <ui-option *ngFor="let option of options" [value]="option">\n    {{option}}\n    <ng-container ngProjectsAs="icon">\n    <ui-icon\n      [icon]="'edit'"\n      [size]="18"\n    ></ui-icon>\n    </ng-container>\n  </ui-option>\n  </ui-autocomplete>\n    <ui-spinner [size]="'medium'" uiSuffix></ui-spinner>\n    <ui-icon icon="search" uiPrefix></ui-icon>\n  </div>`,props:{...args,options}}),OutlineFalseAutocomplete=TemplateAutocomplete.bind({});OutlineFalseAutocomplete.args={outline:!1};const OutlineTrueAutocomplete=TemplateAutocomplete.bind({});OutlineTrueAutocomplete.args={outline:!0};const OutlineFalseSelect=TemplateSelect.bind({});OutlineFalseSelect.args={outline:!1};const OutlineTrueSelect=TemplateSelect.bind({});OutlineTrueSelect.args={outline:!0};const OutlineFalse=Template.bind({});OutlineFalse.args={outline:!1};const OutlineTrue=Template.bind({});OutlineTrue.args={outline:!0}},"./libs/ui/src/lib/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  justify-content: center;\n}\n\n.spinner-small {\n  height: 1rem;\n  width: 1rem;\n}\n\n.spinner-medium {\n  height: 1.25rem;\n  width: 1.25rem;\n}\n\n.spinner-large {\n  height: 3rem;\n  width: 3rem;\n}\n\n.spinner-primary {\n  fill: rgb(var(--primary-400) / 1);\n}\n\n.spinner-success {\n  fill: #4ade80;\n}\n\n.spinner-danger {\n  fill: #f87171;\n}\n\n.spinner-grey {\n  fill: #a3a3a3;\n}\n\n.spinner-light {\n  fill: #fff;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);