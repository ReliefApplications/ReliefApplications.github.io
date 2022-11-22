var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"projects/back-office/src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","children":[{"kind":"module","children":[],"module":"AuthModule"}]},{"path":"","children":[{"path":"","loadChildren":"./dashboard/dashboard.module#DashboardModule","canActivate":["AccessGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/dashboard/dashboard-routing.module.ts","module":"DashboardRoutingModule","children":[{"path":"","component":"DashboardComponent"}],"kind":"module"}],"module":"DashboardModule"}]},{"path":"applications","children":[{"path":":id","loadChildren":"./application/application.module#ApplicationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/application-routing.module.ts","module":"ApplicationRoutingModule","children":[{"path":"","component":"ApplicationComponent","children":[{"path":"","loadChildren":"./pages/home/home.module#HomeModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/home/home-routing.module.ts","module":"HomeRoutingModule","children":[{"path":"","component":"HomeComponent"}],"kind":"module"}],"module":"HomeModule"}]},{"path":"add-page","loadChildren":"./pages/add-page/add-page.module#AddPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/add-page/add-page-routing.module.ts","module":"AddPageRoutingModule","children":[{"path":"","component":"AddPageComponent"}],"kind":"module"}],"module":"AddPageModule"}]},{"path":"settings","children":[{"path":"edit","loadChildren":"./pages/settings/settings.module#SettingsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/settings/settings-routing.module.ts","module":"SettingsRoutingModule","children":[{"path":"","component":"SettingsComponent"}],"kind":"module"}],"module":"SettingsModule"}]},{"path":"roles","children":[{"path":"","loadChildren":"./pages/roles/roles.module#RolesModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/roles/roles-routing.module.ts","module":"RolesRoutingModule","children":[{"path":"","component":"RolesComponent"}],"kind":"module"}],"module":"RolesModule"}]},{"path":":id","loadChildren":"./pages/role-summary/role-summary.module#RoleSummaryModule","data":{"breadcrumb":{"alias":"@role"}},"children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/role-summary/role-summary-routing.module.ts","module":"RoleSummaryRoutingModule","children":[{"path":"","component":"RoleSummaryComponent"}],"kind":"module"}],"module":"RoleSummaryModule"}]}],"data":{"breadcrumb":{"key":"common.role.few"}}},{"path":"users","children":[{"path":"","loadChildren":"./pages/users/users.module#UsersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/users/users-routing.module.ts","module":"UsersRoutingModule","children":[{"path":"","component":"UsersComponent"}],"kind":"module"}],"module":"UsersModule"}]},{"path":":id","loadChildren":"./pages/user-summary/user-summary.module#UserSummaryModule","data":{"breadcrumb":{"alias":"@user"}},"children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/user-summary/user-summary-routing.module.ts","module":"UserSummaryRoutingModule","children":[{"path":"","component":"UserSummaryComponent"}],"kind":"module"}],"module":"UserSummaryModule"}]}],"data":{"breadcrumb":{"key":"common.user.few"}}},{"path":"position","children":[{"path":"","loadChildren":"./pages/position/position.module#PositionModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/position/position-routing.module.ts","module":"PositionRoutingModule","children":[{"path":"","component":"PositionComponent"}],"kind":"module"}],"module":"PositionModule"}]},{"path":":id","loadChildren":"./pages/position-attributes/position-attributes.module#PositionAttributesModule","data":{"breadcrumb":{"alias":"@attribute"}},"children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/position-attributes/position-attributes-routing.module.ts","module":"PositionAttributesRoutingModule","children":[{"path":"","component":"PositionAttributesComponent"}],"kind":"module"}],"module":"PositionAttributesModule"}]}],"data":{"breadcrumb":{"key":"common.attribute.few"}}},{"path":"channels","loadChildren":"./pages/channels/channels.module#ChannelsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/channels/channels-routing.module.ts","module":"ChannelsRoutingModule","children":[{"path":"","component":"ChannelsComponent"}],"kind":"module"}],"module":"ChannelsModule"}]},{"path":"subscriptions","loadChildren":"./pages/subscriptions/subscriptions.module#SubscriptionsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/application/pages/subscriptions/subscriptions-routing.module.ts","module":"SubscriptionsRoutingModule","children":[{"path":"","component":"SubscriptionsComponent"}],"kind":"module"}],"module":"SubscriptionsModule"}]},{"path":"templates","loadChildren":"@safe/builder#SafeApplicationTemplatesModule"},{"path":"distribution-lists","loadChildren":"@safe/builder#SafeApplicationDistributionListsModule"}]},{"path":"dashboard/:id","loadChildren":"../dashboard/pages/dashboard/dashboard.module#DashboardModule","children":[{"kind":"module","children":[],"module":"DashboardModule"}]},{"path":"workflow/:id","loadChildren":"./pages/workflow/workflow.module#WorkflowModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/workflow/workflow-routing.module.ts","module":"WorkflowRoutingModule","children":[{"path":"","component":"WorkflowComponent","children":[{"path":"dashboard/:id","loadChildren":"../dashboard/dashboard.module#DashboardModule","children":[{"kind":"module","children":[],"module":"DashboardModule"}]},{"path":"form/:id","loadChildren":"../form/form.module#FormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/pages/form/form-routing.module.ts","module":"FormRoutingModule","children":[{"path":"","component":"FormComponent"}],"kind":"module"}],"module":"FormModule"}]}]}],"kind":"module"}],"module":"WorkflowModule"}]},{"path":"form/:id","children":[{"path":"","loadChildren":"./pages/form/form.module#FormModule","children":[{"kind":"module","children":[],"module":"FormModule"}]},{"path":"builder/:id","loadChildren":"../dashboard/pages/form-builder/form-builder.module#FormBuilderModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/dashboard/pages/form-builder/form-builder-routing.module.ts","module":"FormBuilderRoutingModule","children":[{"path":"","component":"FormBuilderComponent","canDeactivate":["CanDeactivateGuard"]}],"kind":"module"}],"module":"FormBuilderModule"}]}]}]}],"kind":"module"}],"module":"ApplicationModule"}]}],"canActivate":["AccessGuard"]},{"path":"app-preview","children":[{"path":":id","loadChildren":"./app-preview/app-preview.module#AppPreviewModule","children":[{"kind":"module","children":[{"name":"routes","filename":"projects/back-office/src/app/app-preview/app-preview-routing.module.ts","module":"AppPreviewRoutingModule","children":[{"path":"","component":"AppPreviewComponent","children":[{"path":"dashboard/:id","loadChildren":"./pages/dashboard/dashboard.module#DashboardModule","children":[{"kind":"module","children":[],"module":"DashboardModule"}]},{"path":"form/:id","loadChildren":"./pages/form/form.module#FormModule","children":[{"kind":"module","children":[],"module":"FormModule"}]},{"path":"workflow/:id","loadChildren":"./pages/workflow/workflow.module#WorkflowModule","children":[{"kind":"module","children":[],"module":"WorkflowModule"}]},{"path":"settings","children":[{"path":"roles","children":[{"path":"","loadChildren":"./pages/roles/roles.module#RolesModule","children":[{"kind":"module","children":[],"module":"RolesModule"}]},{"path":":id","loadChildren":"./pages/role-summary/role-summary.module#RoleSummaryModule","data":{"breadcrumb":{"alias":"@role"}},"children":[{"kind":"module","children":[],"module":"RoleSummaryModule"}]}],"data":{"breadcrumb":{"key":"common.role.few"}}},{"path":"users","children":[{"path":"","loadChildren":"./pages/users/users.module#UsersModule","children":[{"kind":"module","children":[],"module":"UsersModule"}]},{"path":":id","loadChildren":"./pages/user-summary/user-summary.module#UserSummaryModule","data":{"breadcrumb":{"alias":"@user"}},"children":[{"kind":"module","children":[],"module":"UserSummaryModule"}]}],"data":{"breadcrumb":{"key":"common.user.few"}}},{"path":"templates","loadChildren":"@safe/builder#SafeApplicationTemplatesModule"},{"path":"distribution-lists","loadChildren":"@safe/builder#SafeApplicationDistributionListsModule"}]}]}],"kind":"module"}],"module":"AppPreviewModule"}]}],"canActivate":["AccessGuard"]}],"canActivate":["AuthGuard"]},{"path":"**","redirectTo":"applications","pathMatch":"full"}],"kind":"module"}]}
