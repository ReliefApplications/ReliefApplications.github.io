(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[8477],{"./libs/ui/src/storybook-translate.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>StorybookTranslateModule});var _class,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_common_http__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2020/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ngx-translate/http-loader/fesm2020/ngx-translate-http-loader.mjs");let StorybookTranslateModule=((_class=class StorybookTranslateModule{constructor(translateService){translateService.setDefaultLang("en"),translateService.use("en")}}).ctorParameters=()=>[{type:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.sK}],_class);StorybookTranslateModule=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({imports:[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.JF,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.aw.forRoot({loader:{provide:_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.Zw,useFactory:http=>new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.w(http),deps:[_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.eN]}})],exports:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.aw]}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.w6)("design:paramtypes",[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.sK])],StorybookTranslateModule)},"./libs/ui/src/lib/paginator/paginator.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Paginator:()=>Paginator,default:()=>paginator_component_stories});var external_STORYBOOK_MODULE_ADDONS_=__webpack_require__("@storybook/addons"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs"),progress_kendo_angular_pager=__webpack_require__("./node_modules/@progress/kendo-angular-pager/fesm2020/progress-kendo-angular-pager.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,paginator_componentngResource=__webpack_require__("./libs/ui/src/lib/paginator/paginator.component.scss?ngResource"),paginator_componentngResource_default=__webpack_require__.n(paginator_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");let PaginatorComponent=((_class=class PaginatorComponent{constructor(){this.disabled=!1,this.totalItems=0,this.pageSize=10,this.pageSizeOptions=[5,10,15],this.ariaLabel="",this.pageChange=new core.EventEmitter,this.paginatorId=(0,v4.Z)(),this.skip=0,this.currentPageIndex=0}onPageChange(event){const currentPage=(event.skip+event.take)/event.take-1;this.skip=event.skip,this.pageSize=event.take,this.pageChange.emit({pageSize:this.pageSize,skip:this.skip,totalItems:this.totalItems,pageIndex:currentPage,previousPageIndex:this.currentPageIndex}),this.currentPageIndex=currentPage}}).propDecorators={disabled:[{type:core.Input}],totalItems:[{type:core.Input}],pageSize:[{type:core.Input}],pageSizeOptions:[{type:core.Input}],ariaLabel:[{type:core.Input}],pageChange:[{type:core.Output}]},_class);PaginatorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"ui-paginator",template:'\x3c!-- PAGINATOR CONTENT--\x3e\n<div class="w-full relative">\n  <div\n    [ngClass]="{ \'z-0\': !disabled, \'z-10\': disabled }"\n    class="absolute inset-0 bg-white opacity-50"\n  ></div>\n  <kendo-datapager\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-controls]="paginatorId"\n    [style.width.%]="100"\n    [pageSize]="pageSize"\n    [skip]="skip"\n    [total]="totalItems"\n    (pageChange)="onPageChange($event)"\n  >\n    <ng-template\n      kendoDataPagerTemplate\n      let-totalPages="totalPages"\n      let-currentPage="currentPage"\n    >\n      <kendo-datapager-messages\n        page="{{ \'components.paginator.page\' | translate }}"\n        of="{{ \'components.paginator.of\' | translate }}"\n        items="{{ \'components.paginator.items\' | translate }}"\n        itemsPerPage="{{ \'components.paginator.itemsPerPage\' | translate }}"\n      >\n      </kendo-datapager-messages>\n      <kendo-datapager-info class="text-neutral-400"></kendo-datapager-info>\n      <kendo-datapager-page-sizes\n        class="text-neutral-400"\n        [pageSizes]="pageSizeOptions"\n      ></kendo-datapager-page-sizes>\n      <div class="k-pager-numbers-wrap">\n        <kendo-datapager-prev-buttons></kendo-datapager-prev-buttons>\n        <kendo-datapager-numeric-buttons\n          [buttonCount]="3"\n        ></kendo-datapager-numeric-buttons>\n        <kendo-datapager-next-buttons></kendo-datapager-next-buttons>\n      </div>\n    </ng-template>\n  </kendo-datapager>\n</div>\n',styles:[paginator_componentngResource_default()]})],PaginatorComponent);var storybook_translate_module=__webpack_require__("./libs/ui/src/storybook-translate.module.ts");const paginator_component_stories={title:"Paginator",component:PaginatorComponent,argTypes:{disabled:{defaultValue:!1,type:"boolean"}},decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,progress_kendo_angular_pager.UF,storybook_translate_module.l,animations.BrowserAnimationsModule]})]},itemsArray=[...Array(100).keys()];let pagedItems=itemsArray.filter((value=>value<10));const pageChange=event=>{console.log("UIPageChangeEvent: ",event),pagedItems=[...itemsArray.slice(event.skip,event.skip+event.pageSize)],external_STORYBOOK_MODULE_ADDONS_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.FORCE_RE_RENDER)},Paginator=(args=>({component:PaginatorComponent,template:`\n    <div class="overflow-y-auto max-h-70">\n      <ng-container *ngFor="let item of pagedItems">\n        <p>{{item}}</p>\n      </ng-container>\n    </div>\n    <ui-paginator [disabled]="${args.disabled}" (pageChange)="pageChange($event)" [totalItems]="itemsArray.length" ></ui-paginator>\n        `,props:{...args,itemsArray,pagedItems,pageChange}})).bind({})},"./libs/ui/src/lib/paginator/paginator.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host kendo-datapager {\n  justify-content: flex-end;\n  border-left-width: 0px;\n  border-bottom-width: 0px;\n  border-right-width: 0px;\n  border-top-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n:host ::ng-deep kendo-datapager-info {\n  flex-grow: 0;\n}\n\n:host ::ng-deep div.k-pager-numbers-wrap {\n  order: 2;\n}\n\n:host ::ng-deep .k-pager {\n  border-width: 0px;\n}\n\n:host ::ng-deep .k-pager:focus {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);