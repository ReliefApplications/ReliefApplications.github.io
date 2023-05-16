(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[387],{"./libs/ui/src/lib/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,icon_componentngResource=__webpack_require__("./libs/ui/src/lib/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),variant_enum=__webpack_require__("./libs/ui/src/lib/shared/variant.enum.ts"),category_enum=__webpack_require__("./libs/ui/src/lib/shared/category.enum.ts");let IconComponent=((_class=class IconComponent{constructor(){this.icon="",this.category=category_enum.W.PRIMARY,this.variant=variant_enum.$.DEFAULT,this.size=24}get fontSize(){return this.size+"px"}get iconVariantAndCategory(){const classes=[];return classes.push(this.category===category_enum.W.SECONDARY||this.variant===variant_enum.$.LIGHT?"icon-light":this.variant===variant_enum.$.PRIMARY?"icon-primary":this.variant===variant_enum.$.SUCCESS?"icon-success":this.variant===variant_enum.$.GREY?"icon-grey":this.variant===variant_enum.$.DANGER?"icon-danger":""),classes}}).propDecorators={icon:[{type:core.Input}],category:[{type:core.Input}],variant:[{type:core.Input}],size:[{type:core.Input}]},_class);IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-icon",template:'<ng-container *ngIf="icon.endsWith(\'_outline\'); else angularMaterialIconTmpl">\n  <span\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons-outlined inline-flex align-middle"\n  >\n    {{ icon }}\n  </span>\n</ng-container>\n\x3c!--@TODO Are we using Angular Material Icons?--\x3e\n<ng-template #angularMaterialIconTmpl>\n  <i\n    [ngClass]="iconVariantAndCategory"\n    [ngStyle]="{\n      height: fontSize,\n      width: fontSize,\n      \'line-height\': fontSize,\n      \'font-size\': fontSize\n    }"\n    class="material-icons inline-flex align-middle"\n    >{{ icon }}</i\n  >\n</ng-template>\n',styles:[icon_componentngResource_default()]})],IconComponent)},"./libs/ui/src/lib/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/icon/icon.component.ts");let IconModule=class IconModule{};IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_icon_component__WEBPACK_IMPORTED_MODULE_0__.o]})],IconModule)},"./libs/ui/src/lib/shared/category.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Category;__webpack_require__.d(__webpack_exports__,{W:()=>Category}),function(Category){Category.PRIMARY="primary",Category.SECONDARY="secondary",Category.TERTIARY="tertiary"}(Category||(Category={}))},"./libs/ui/src/lib/shared/variant.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var Variant;__webpack_require__.d(__webpack_exports__,{$:()=>Variant}),function(Variant){Variant.DEFAULT="default",Variant.PRIMARY="primary",Variant.SUCCESS="success",Variant.DANGER="danger",Variant.GREY="grey",Variant.LIGHT="light"}(Variant||(Variant={}))},"./libs/ui/src/lib/toggle/enums/toggle-type.enum.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var ToggleType;__webpack_require__.d(__webpack_exports__,{_:()=>ToggleType}),function(ToggleType){ToggleType.SIMPLE="simple",ToggleType.SHORT="short"}(ToggleType||(ToggleType={}))},"./libs/ui/src/lib/toggle/toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,toggle_componentngResource=__webpack_require__("./libs/ui/src/lib/toggle/toggle.component.scss?ngResource"),toggle_componentngResource_default=__webpack_require__.n(toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),toggle_type_enum=__webpack_require__("./libs/ui/src/lib/toggle/enums/toggle-type.enum.ts"),variant_enum=__webpack_require__("./libs/ui/src/lib/shared/variant.enum.ts");const CONTROL_VALUE_ACCESSOR={provide:__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs").JU,useExisting:(0,core.forwardRef)((()=>ToggleComponent)),multi:!0};let ToggleComponent=((_class=class ToggleComponent{constructor(){this.type=toggle_type_enum._.SHORT,this.labelPosition="right",this.variant=variant_enum.$.PRIMARY,this.toggleTypes=toggle_type_enum._,this.toggleVariant=variant_enum.$,this.value=!1,this.disabled=!1,this.valueChange=new core.EventEmitter}get toggleClasses(){const classes=[];return classes.push(this.disabled?"opacity-70":""),classes.push("left"===this.labelPosition?"ml-3":"mr-3"),classes.push("left"===this.labelPosition?"order-2":"order-1"),classes.push("focus-"+this.variant),this.type===this.toggleTypes.SIMPLE?(classes.push("button-simple"),this.value?classes.push("toggle-"+this.variant):classes.push("bg-gray-200")):classes.push("button-short"),classes}get shortToggleClasses(){const classes=[];return this.value?classes.push("toggle-"+this.variant):classes.push("bg-gray-200"),classes}onSelect(){this.value=!this.value,this.onTouch&&this.onChange&&(this.onTouch(),this.onChange(this.value)),this.valueChange.emit(this.value)}writeValue(value){this.value=value}registerOnChange(fn){this.onChange=fn}registerOnTouched(fn){this.onTouch=fn}setDisabledState(isDisabled){this.disabled=isDisabled}}).propDecorators={type:[{type:core.Input}],icon:[{type:core.Input}],labelPosition:[{type:core.Input}],variant:[{type:core.Input}]},_class);ToggleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-toggle",template:'<div class="flex items-center">\n  \x3c!-- TOGGLE --\x3e\n  <button\n    type="button"\n    role="switch"\n    aria-labelledby="toggle-label"\n    aria-describedby="toggle-description"\n    [attr.aria-checked]="value"\n    [disabled]="disabled"\n    class="toggle-button"\n    [ngClass]="toggleClasses"\n    (click)="onSelect()"\n  >\n    <span\n      aria-hidden="true"\n      [ngClass]="{\n        \'span-simple\': type === toggleTypes.SIMPLE,\n        \'span-short\': type === toggleTypes.SHORT,\n        \'translate-x-0\': !value && type === toggleTypes.SIMPLE,\n        \'translate-x-5\': value && type === toggleTypes.SIMPLE\n      }"\n      class="pointer-events-none"\n    >\n      \x3c!-- ICON --\x3e\n      <ng-container *ngIf="icon">\n        <ng-container *ngTemplateOutlet="iconTemplate"></ng-container>\n      </ng-container>\n    </span>\n\n    <ng-container *ngIf="type === toggleTypes.SHORT">\n      <ng-container *ngTemplateOutlet="shortToggleTemplate"></ng-container>\n    </ng-container>\n  </button>\n  \x3c!-- LABEL --\x3e\n  <div\n    [ngClass]="{\n      \'order-2\': labelPosition === \'right\',\n      \'order-1\': labelPosition === \'left\'\n    }"\n    class="text-sm"\n  >\n    <span\n      class="flex font-medium leading-6 text-gray-900 flex-wrap whitespace-pre-wrap"\n    >\n      \x3c!-- TEXT --\x3e\n      <ng-content select="label"></ng-content>\n    </span>\n    \x3c!-- DESCRIPTION --\x3e\n    <p class="m-0 font-normal text-gray-500">\n      <ng-content select="description"></ng-content>\n    </p>\n  </div>\n</div>\n\n<ng-template #shortToggleTemplate>\n  <span aria-hidden="true" [ngClass]="shortToggleClasses" class="short-color">\n  </span>\n  <span\n    aria-hidden="true"\n    [ngClass]="{ \'translate-x-0\': !value, \'translate-x-5\': value }"\n    class="short-translate"\n  >\n  </span>\n</ng-template>\n\n<ng-template #iconTemplate>\n  \x3c!-- ICON FOR SIMPLE TOGGLES --\x3e\n  <span class="icon" aria-hidden="true">\n    <ui-icon\n      [icon]="value ? icon.enableIcon : icon.disableIcon"\n      [size]="12"\n    ></ui-icon>\n  </span>\n</ng-template>\n',providers:[CONTROL_VALUE_ACCESSOR],styles:[toggle_componentngResource_default()]})],ToggleComponent)},"./libs/ui/src/lib/toggle/toggle.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>ToggleModule});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_toggle_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/src/lib/toggle/toggle.component.ts"),_icon_icon_module__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts");let ToggleModule=class ToggleModule{};ToggleModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({declarations:[_toggle_component__WEBPACK_IMPORTED_MODULE_0__.n],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_icon_icon_module__WEBPACK_IMPORTED_MODULE_1__.Q],exports:[_toggle_component__WEBPACK_IMPORTED_MODULE_0__.n]})],ToggleModule)},"./libs/ui/src/storybook-translate.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>StorybookTranslateModule});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_common_http__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngx-translate/http-loader/fesm2020/ngx-translate-http-loader.mjs");let StorybookTranslateModule=((_class=class StorybookTranslateModule{constructor(translateService){translateService.setDefaultLang("en"),translateService.use("en")}}).ctorParameters=()=>[{type:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.sK}],_class);StorybookTranslateModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.JF,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.aw.forRoot({loader:{provide:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.Zw,useFactory:http=>new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.w(http),deps:[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.eN]}})],exports:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.aw]}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.w6)("design:paramtypes",[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.sK])],StorybookTranslateModule)},"./libs/ui/src/lib/table/table.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table,default:()=>table_component_stories});var _class,dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),table=__webpack_require__("./node_modules/@angular/cdk/fesm2020/table.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");let TableHeaderSortDirective=((_class=class TableHeaderSortDirective{constructor(el,renderer){this.el=el,this.renderer=renderer,this.uiTableHeaderSort="",this.descSortIcon="↧",this.ascSortIcon="↥",this.activeSort=new BehaviorSubject.X(null)}onClick(){let sortDirection="";""===this.sortIndicatorElement.textContent?(this.sortIndicatorElement.textContent=this.ascSortIcon,sortDirection="asc"):this.sortIndicatorElement.textContent===this.ascSortIcon?(this.sortIndicatorElement.textContent=this.descSortIcon,sortDirection="desc"):this.sortIndicatorElement.textContent===this.descSortIcon&&(this.sortIndicatorElement.textContent=""),this.activeSort.next({active:this.uiTableHeaderSort,sortDirection})}ngAfterViewInit(){this.renderer.addClass(this.el.nativeElement,"cursor-pointer"),this.sortIndicatorElement=this.renderer.createElement("span"),this.renderer.addClass(this.sortIndicatorElement,"inline-block"),this.renderer.addClass(this.sortIndicatorElement,"pl-1"),this.renderer.addClass(this.sortIndicatorElement,"min-w-[11px]"),this.sortIndicatorElement.textContent="",this.renderer.appendChild(this.el.nativeElement,this.sortIndicatorElement)}}).ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],_class.propDecorators={uiTableHeaderSort:[{type:core.Input}],onClick:[{type:core.HostListener,args:["click"]}]},_class);TableHeaderSortDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiTableHeaderSort]"}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef,core.Renderer2])],TableHeaderSortDirective);var table_wrapper_directive_class,Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");let TableWrapperDirective=(table_wrapper_directive_class=class TableWrapperDirective{constructor(el,renderer){if(this.el=el,this.renderer=renderer,this.sortChange=new core.EventEmitter,this.tableWrapperClasses=["overflow-hidden","shadow","border","py-2","sm:rounded-lg"],this.tableClasses=["min-w-full","divide-y","divide-gray-300"],this.tableHeaderClasses=["capitalize","py-3.5","pl-4","pr-3","text-left","text-sm","font-medium","text-gray-900"],this.tableBodyClasses=["divide-y","divide-gray-200","bg-white"],this.tableRowClasses=["whitespace-nowrap","py-4","pl-4","pr-3","text-sm","font-normal","text-gray-900"],this.destroy$=new Subject.x,!(this.el.nativeElement instanceof HTMLTableElement))throw new Error("Directive could only be applied to an HTMLTableElement");this.tableClasses.forEach((tClass=>{this.renderer.addClass(this.el.nativeElement,tClass)}));const tableWrapperElement=this.renderer.createElement("div");this.tableWrapperClasses.forEach((twClass=>{this.renderer.addClass(tableWrapperElement,twClass)})),this.renderer.appendChild(this.el.nativeElement.parentElement,tableWrapperElement),this.renderer.appendChild(tableWrapperElement,this.el.nativeElement)}ngAfterContentInit(){const tableHeaders=this.el.nativeElement.querySelectorAll("th"),tableData=this.el.nativeElement.querySelectorAll("td"),tableBody=this.el.nativeElement.querySelector("tbody");this.tableBodyClasses.forEach((tbClass=>{this.renderer.addClass(tableBody,tbClass)})),tableHeaders.forEach((th=>{this.tableHeaderClasses.forEach((hClass=>{this.renderer.addClass(th,hClass)}))})),tableData.forEach((tr=>{this.tableRowClasses.forEach((rClass=>{this.renderer.addClass(tr,rClass)}))}))}ngAfterViewInit(){this.sortableColumns.changes.pipe((0,startWith.O)(this.sortableColumns),(0,takeUntil.R)(this.destroy$)).subscribe({next:()=>{this.sortableColumns.length&&this.initializeSortListeners()}})}initializeSortListeners(){const sortListeners=[];this.sortableColumns.forEach((sColumn=>{sortListeners.push(sColumn.activeSort.asObservable().pipe((0,filter.h)((sortData=>!!sortData))))})),(0,merge.T)(...sortListeners).pipe((0,takeUntil.R)(this.destroy$)).subscribe({next:sortData=>{this.sortableColumns.forEach((sColumn=>{sColumn.uiTableHeaderSort!==sortData.active&&(sColumn.sortIndicatorElement.textContent="")})),this.sortChange.emit(sortData)}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}},table_wrapper_directive_class.ctorParameters=()=>[{type:core.ElementRef},{type:core.Renderer2}],table_wrapper_directive_class.propDecorators={sortChange:[{type:core.Output}],sortableColumns:[{type:core.ContentChildren,args:[TableHeaderSortDirective,{descendants:!0}]}]},table_wrapper_directive_class);TableWrapperDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[uiTableWrapper]"}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef,core.Renderer2])],TableWrapperDirective);let TableModule=class TableModule{};TableModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[TableWrapperDirective,TableHeaderSortDirective],imports:[common.CommonModule,table.HT],exports:[TableWrapperDirective,table.HT,TableHeaderSortDirective]})],TableModule);var storybook_translate_module=__webpack_require__("./libs/ui/src/storybook-translate.module.ts"),toggle_module=__webpack_require__("./libs/ui/src/lib/toggle/toggle.module.ts");const table_component_stories={title:"Table",decorators:[(0,dist.moduleMetadata)({imports:[TableModule,storybook_translate_module.l,toggle_module.v]})]},tableData=[{name:"Name 1",email:{value:"email@email.com"},phone:{value:"111111111"},cityVal:"City 1",isValid:!1,id:"1"},{name:"Name 3",email:{value:"email@email.com"},phone:{value:"333333333"},cityVal:"City 3",isValid:!0,id:"3"},{name:"Name 2",email:{value:"email@email.com"},phone:{value:"222222222"},cityVal:"City 2",isValid:!0,id:"2"},{name:"Name 4",email:{value:"email@email.com"},phone:{value:"444444444"},cityVal:"City 4",isValid:!1,id:"4"},{name:"Name 5",email:{value:"email@email.com"},phone:{value:"555555555"},cityVal:"City 5",isValid:!1,id:"5"},{name:"Name 6",email:{value:"email@email.com"},phone:{value:"666666666"},cityVal:"City 6",isValid:!0,id:"6"},{name:"Name 1",email:{value:"email@email.com"},phone:{value:"111111111"},cityVal:"City 1",isValid:!1,id:"1"},{name:"Name 3",email:{value:"email@email.com"},phone:{value:"333333333"},cityVal:"City 3",isValid:!0,id:"3"},{name:"Name 2",email:{value:"email@email.com"},phone:{value:"222222222"},cityVal:"City 2",isValid:!0,id:"2"},{name:"Name 4",email:{value:"email@email.com"},phone:{value:"444444444"},cityVal:"City 4",isValid:!1,id:"4"},{name:"Name 5",email:{value:"email@email.com"},phone:{value:"555555555"},cityVal:"City 5",isValid:!1,id:"5"},{name:"Name 6",email:{value:"email@email.com"},phone:{value:"666666666"},cityVal:"City 6",isValid:!0,id:"6"},{name:"Name 1",email:{value:"email@email.com"},phone:{value:"111111111"},cityVal:"City 1",isValid:!1,id:"1"},{name:"Name 3",email:{value:"email@email.com"},phone:{value:"333333333"},cityVal:"City 3",isValid:!0,id:"3"},{name:"Name 2",email:{value:"email@email.com"},phone:{value:"222222222"},cityVal:"City 2",isValid:!0,id:"2"},{name:"Name 4",email:{value:"email@email.com"},phone:{value:"444444444"},cityVal:"City 4",isValid:!1,id:"4"},{name:"Name 5",email:{value:"email@email.com"},phone:{value:"555555555"},cityVal:"City 5",isValid:!1,id:"5"},{name:"Name 6",email:{value:"email@email.com"},phone:{value:"666666666"},cityVal:"City 6",isValid:!0,id:"6"}],sortTableByKey=column=>{console.log(column)},columnDefinitionArray=["name","email","phone","city","active","selected","id"],Table=(args=>({template:'\n    \x3c!--TABLE CONTENT--\x3e\n<table\n  cdk-table\n  uiTableWrapper\n  (sortChange)="sortTableByKey($event)"\n  [dataSource]="pagedTableData"\n>\n  <ng-container cdkColumnDef="name">\n    <th\n    uiTableHeaderSort="name"\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      name\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      {{ element.name }}\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="email">\n    <th\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      email\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      {{ element.email.value }}\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="phone">\n    <th\n    uiTableHeaderSort="phone"\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      phone\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      {{ element.phone.value }}\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="city">\n    <th\n    uiTableHeaderSort="cityVal"\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      city\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      {{ element.cityVal }}\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="active">\n    <th\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      active\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n    <div class="flex items-center justify-end gap-x-2 sm:justify-start">\n    <div [ngClass]="{\'text-rose-400 bg-rose-400/10\': !element.isValid, \'text-green-400 bg-green-400/10\': element.isValid}" class="flex-none rounded-full p-1">\n      <div class="h-1.5 w-1.5 rounded-full bg-current"></div>\n    </div>\n    <div class="text-neutral sm:block">{{element.isValid ? \'Completed\' : \'Error\' }}</div>\n  </div>\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="selected">\n    <th\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      selected\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      <ui-toggle></ui-toggle>\n    </td>\n  </ng-container>\n\n  <ng-container cdkColumnDef="id">\n    <th\n      cdk-header-cell\n      *cdkHeaderCellDef\n      scope="col"\n      \n    >\n      id\n    </th>\n    <td cdk-cell *cdkCellDef="let element">\n      {{ element.id }}\n    </td>\n  </ng-container>\n  <tr cdk-header-row *cdkHeaderRowDef="columnDefinitionArray"></tr>\n  <tr cdk-row *cdkRowDef="let row; columns: columnDefinitionArray"></tr>\n</table>',props:{...args,pagedTableData:tableData.filter(((el,index)=>index<10)),sortTableByKey,columnDefinitionArray}})).bind({})},"./libs/ui/src/lib/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".icon-primary {\n  --tw-text-opacity: 1;\n  color: rgb(var(--primary-400) / var(--tw-text-opacity));\n}\n\n.icon-danger {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\n\n.icon-success {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity));\n}\n\n.icon-light {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.icon-grey {\n  --tw-text-opacity: 1;\n  color: rgb(163 163 163 / var(--tw-text-opacity));\n}\n\n.material-icons-outlined {\n  overflow: hidden;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/src/lib/toggle/toggle.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".toggle-button {\n    position: relative;\n    display: inline-flex;\n    flex-shrink: 0;\n    border-radius: 9999px\n}\n.toggle-button:focus {\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(var(--primary-600) / var(--tw-ring-opacity));\n    --tw-ring-offset-width: 2px\n}\n.toggle-button:not(:disabled) {\n    cursor: pointer\n}\n\n.button-simple {\n    height: 1.5rem;\n    width: 2.75rem;\n    border-width: 2px;\n    border-color: transparent;\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n.button-short {\n    height: 1.25rem;\n    width: 2.5rem;\n    align-items: center;\n    justify-content: center\n}\n\n.span-simple {\n    display: inline-block;\n    height: 1.25rem;\n    width: 1.25rem;\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n.span-short {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    border-radius: 0.375rem\n}\n\n.short-color {\n    pointer-events: none;\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    height: 1rem;\n    width: 2.25rem;\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n.short-translate {\n    pointer-events: none;\n    position: absolute;\n    left: 0px;\n    display: inline-block;\n    height: 1.25rem;\n    width: 1.25rem;\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    border-radius: 9999px;\n    border-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n    transition-property: transform;\n    transition-duration: 200ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)\n}\n\n.icon {\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    display: flex;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\n}\n\n.toggle-default {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity))\n}\n\n.focus-default:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity))\n}\n\n.toggle-primary {\n    --tw-bg-opacity: 1;\n    background-color: rgb(var(--primary-400) / var(--tw-bg-opacity))\n}\n\n.focus-primary:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(var(--primary-600) / var(--tw-ring-opacity))\n}\n\n.toggle-success {\n    --tw-bg-opacity: 1;\n    background-color: rgb(74 222 128 / var(--tw-bg-opacity))\n}\n\n.focus-success:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(22 163 74 / var(--tw-ring-opacity))\n}\n\n.toggle-danger {\n    --tw-bg-opacity: 1;\n    background-color: rgb(248 113 113 / var(--tw-bg-opacity))\n}\n\n.focus-danger:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(220 38 38 / var(--tw-ring-opacity))\n}\n\n.toggle-grey {\n    --tw-bg-opacity: 1;\n    background-color: rgb(156 163 175 / var(--tw-bg-opacity))\n}\n\n.focus-grey:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))\n}\n\n.toggle-light {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity))\n}\n\n.focus-light:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity))\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);