"use strict";(self.webpackChunkoort_front=self.webpackChunkoort_front||[]).push([[225],{"./libs/ui/src/lib/date/date-range/date-range.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomDateRange:()=>BottomDateRange,DateRange:()=>DateRange,default:()=>date_range_component_stories});var fesm2020_forms=__webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),date_range_component=__webpack_require__("./libs/ui/src/lib/date/date-range/date-range.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),progress_kendo_angular_intl=__webpack_require__("./node_modules/@progress/kendo-angular-intl/fesm2020/progress-kendo-angular-intl.mjs"),progress_kendo_angular_dateinputs=__webpack_require__("./node_modules/@progress/kendo-angular-dateinputs/fesm2020/progress-kendo-angular-dateinputs.mjs"),progress_kendo_angular_label=__webpack_require__("./node_modules/@progress/kendo-angular-label/fesm2020/progress-kendo-angular-label.mjs"),progress_kendo_angular_buttons=__webpack_require__("./node_modules/@progress/kendo-angular-buttons/fesm2020/progress-kendo-angular-buttons.mjs"),icon_module=__webpack_require__("./libs/ui/src/lib/icon/icon.module.ts"),date_picker_directive=__webpack_require__("./libs/ui/src/lib/date/date-picker.directive.ts"),date_wrapper_directive=__webpack_require__("./libs/ui/src/lib/date/date-wrapper.directive.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs");let DateRangeModule=class DateRangeModule{};DateRangeModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[date_range_component.S,date_picker_directive.C,date_wrapper_directive.X],imports:[common.CommonModule,progress_kendo_angular_buttons.Fq,progress_kendo_angular_intl.o0,progress_kendo_angular_dateinputs.nf,progress_kendo_angular_label.r3,icon_module.Q,ngx_translate_core.aw],exports:[date_range_component.S,date_picker_directive.C,date_wrapper_directive.X]})],DateRangeModule);var storybook_translate_module=__webpack_require__("./libs/ui/src/storybook-translate.module.ts");const date_range_component_stories={title:"Date Range",component:date_range_component.S,decorators:[(0,dist.moduleMetadata)({imports:[DateRangeModule,storybook_translate_module.l,fesm2020_forms.UX]})]},today=new Date,afterTomorrow=new Date,formControlStart=new fesm2020_forms.NI(today),formControlEnd=new fesm2020_forms.NI(afterTomorrow.setDate(today.getDate()+2)),DateRange=(args=>({component:date_range_component.S,template:'\n    <div [uiDateWrapper]="calendar">\n    <input [uiDatePicker] [formControl]="formControlStart" [label]="\'Select a start date\'"/>\n    <input [uiDatePicker] [formControl]="formControlEnd" [label]="\'Select a end date\'"/>\n      <ui-date-range #calendar>\n      </ui-date-range> \n      </div>\n      <br>\n      <p>start value: {{formControlStart.value}}</p>\n      <p>end value: {{formControlEnd.value}}</p>',props:{...args,formControlStart,formControlEnd}})).bind({}),BottomDateRange=(args=>({component:date_range_component.S,template:'\n    <div class="absolute">\n    <p>start value: {{formControlStart.value}}</p>\n    <p>end value: {{formControlEnd.value}}</p>\n    </div>\n    <div class="flex flex-col h-screen justify-end">\n    <div [uiDateWrapper]="calendar">\n    <input [uiDatePicker] [formControl]="formControlStart" [label]="\'Select a start date\'"/>\n    <input [uiDatePicker] [formControl]="formControlEnd" [label]="\'Select a end date\'"/>\n      <ui-date-range #calendar>\n      </ui-date-range> \n      </div>\n      </div>\n      ',props:{...args,formControlStart,formControlEnd}})).bind({})}}]);