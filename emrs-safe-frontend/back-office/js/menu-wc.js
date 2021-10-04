'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">safe-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddFormModule.html" data-type="entity-link">AddFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddFormModule-438b749d6a326acb1b4dfdb0ed0df496"' : 'data-target="#xs-components-links-module-AddFormModule-438b749d6a326acb1b4dfdb0ed0df496"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddFormModule-438b749d6a326acb1b4dfdb0ed0df496"' :
                                            'id="xs-components-links-module-AddFormModule-438b749d6a326acb1b4dfdb0ed0df496"' }>
                                            <li class="link">
                                                <a href="components/AddFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPageModule.html" data-type="entity-link">AddPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddPageModule-5f001b3e31f83333379eb7bf4b6bb6ac"' : 'data-target="#xs-components-links-module-AddPageModule-5f001b3e31f83333379eb7bf4b6bb6ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddPageModule-5f001b3e31f83333379eb7bf4b6bb6ac"' :
                                            'id="xs-components-links-module-AddPageModule-5f001b3e31f83333379eb7bf4b6bb6ac"' }>
                                            <li class="link">
                                                <a href="components/AddPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPageRoutingModule.html" data-type="entity-link">AddPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AddStepModule.html" data-type="entity-link">AddStepModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddStepModule-6118e733bfba4e7cc7ae453242f96fb1"' : 'data-target="#xs-components-links-module-AddStepModule-6118e733bfba4e7cc7ae453242f96fb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddStepModule-6118e733bfba4e7cc7ae453242f96fb1"' :
                                            'id="xs-components-links-module-AddStepModule-6118e733bfba4e7cc7ae453242f96fb1"' }>
                                            <li class="link">
                                                <a href="components/AddStepComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddStepComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddStepRoutingModule.html" data-type="entity-link">AddStepRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationModule.html" data-type="entity-link">ApiConfigurationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApiConfigurationModule-10d3133e75e88a6ee849c6650903c025"' : 'data-target="#xs-components-links-module-ApiConfigurationModule-10d3133e75e88a6ee849c6650903c025"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApiConfigurationModule-10d3133e75e88a6ee849c6650903c025"' :
                                            'id="xs-components-links-module-ApiConfigurationModule-10d3133e75e88a6ee849c6650903c025"' }>
                                            <li class="link">
                                                <a href="components/ApiConfigurationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApiConfigurationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationRoutingModule.html" data-type="entity-link">ApiConfigurationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationsModule.html" data-type="entity-link">ApiConfigurationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApiConfigurationsModule-d3753f23bc1b58747fac81a9408af4b2"' : 'data-target="#xs-components-links-module-ApiConfigurationsModule-d3753f23bc1b58747fac81a9408af4b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApiConfigurationsModule-d3753f23bc1b58747fac81a9408af4b2"' :
                                            'id="xs-components-links-module-ApiConfigurationsModule-d3753f23bc1b58747fac81a9408af4b2"' }>
                                            <li class="link">
                                                <a href="components/AddApiConfigurationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddApiConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiConfigurationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApiConfigurationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationsRoutingModule.html" data-type="entity-link">ApiConfigurationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationModule.html" data-type="entity-link">ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-e8a5c304d83ea0d1f1ea00fddb2293f8"' : 'data-target="#xs-components-links-module-ApplicationModule-e8a5c304d83ea0d1f1ea00fddb2293f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-e8a5c304d83ea0d1f1ea00fddb2293f8"' :
                                            'id="xs-components-links-module-ApplicationModule-e8a5c304d83ea0d1f1ea00fddb2293f8"' }>
                                            <li class="link">
                                                <a href="components/ApplicationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApplicationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationRoutingModule.html" data-type="entity-link">ApplicationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationsModule.html" data-type="entity-link">ApplicationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationsModule-ca6f9f24ecbdb94d379e612d2be9bd89"' : 'data-target="#xs-components-links-module-ApplicationsModule-ca6f9f24ecbdb94d379e612d2be9bd89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationsModule-ca6f9f24ecbdb94d379e612d2be9bd89"' :
                                            'id="xs-components-links-module-ApplicationsModule-ca6f9f24ecbdb94d379e612d2be9bd89"' }>
                                            <li class="link">
                                                <a href="components/ApplicationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApplicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChoseRoleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChoseRoleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationsRoutingModule.html" data-type="entity-link">ApplicationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationToolbarModule.html" data-type="entity-link">ApplicationToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationToolbarModule-1db6a72e27d91ebce97371e248c59e99"' : 'data-target="#xs-components-links-module-ApplicationToolbarModule-1db6a72e27d91ebce97371e248c59e99"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationToolbarModule-1db6a72e27d91ebce97371e248c59e99"' :
                                            'id="xs-components-links-module-ApplicationToolbarModule-1db6a72e27d91ebce97371e248c59e99"' }>
                                            <li class="link">
                                                <a href="components/ApplicationToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ApplicationToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bdeb2ea2a529626a23e7774aa3978000"' : 'data-target="#xs-components-links-module-AppModule-bdeb2ea2a529626a23e7774aa3978000"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bdeb2ea2a529626a23e7774aa3978000"' :
                                            'id="xs-components-links-module-AppModule-bdeb2ea2a529626a23e7774aa3978000"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppPreviewModule.html" data-type="entity-link">AppPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppPreviewModule-2e4f412f183d22b1897c375308127c94"' : 'data-target="#xs-components-links-module-AppPreviewModule-2e4f412f183d22b1897c375308127c94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppPreviewModule-2e4f412f183d22b1897c375308127c94"' :
                                            'id="xs-components-links-module-AppPreviewModule-2e4f412f183d22b1897c375308127c94"' }>
                                            <li class="link">
                                                <a href="components/AppPreviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppPreviewRoutingModule.html" data-type="entity-link">AppPreviewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsModule.html" data-type="entity-link">ChannelsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChannelsModule-7ac597885549371b7986ba3f812606cf"' : 'data-target="#xs-components-links-module-ChannelsModule-7ac597885549371b7986ba3f812606cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChannelsModule-7ac597885549371b7986ba3f812606cf"' :
                                            'id="xs-components-links-module-ChannelsModule-7ac597885549371b7986ba3f812606cf"' }>
                                            <li class="link">
                                                <a href="components/AddChannelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddChannelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChannelsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditChannelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditChannelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsRoutingModule.html" data-type="entity-link">ChannelsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-4cba971d7034d7379bb29a2cac11fb6c"' : 'data-target="#xs-components-links-module-DashboardModule-4cba971d7034d7379bb29a2cac11fb6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-4cba971d7034d7379bb29a2cac11fb6c"' :
                                            'id="xs-components-links-module-DashboardModule-4cba971d7034d7379bb29a2cac11fb6c"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-4f255293d6f96b0dd65e5e7077520875-1"' : 'data-target="#xs-components-links-module-DashboardModule-4f255293d6f96b0dd65e5e7077520875-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-4f255293d6f96b0dd65e5e7077520875-1"' :
                                            'id="xs-components-links-module-DashboardModule-4f255293d6f96b0dd65e5e7077520875-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShareUrlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShareUrlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-9d4f32bef0025eb125fedb9fdac3d2b4-2"' : 'data-target="#xs-components-links-module-DashboardModule-9d4f32bef0025eb125fedb9fdac3d2b4-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-9d4f32bef0025eb125fedb9fdac3d2b4-2"' :
                                            'id="xs-components-links-module-DashboardModule-9d4f32bef0025eb125fedb9fdac3d2b4-2"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent-2.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link">DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardsModule.html" data-type="entity-link">DashboardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardsModule-7a5be89dc0eff67c64f4d5d18909f839"' : 'data-target="#xs-components-links-module-DashboardsModule-7a5be89dc0eff67c64f4d5d18909f839"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardsModule-7a5be89dc0eff67c64f4d5d18909f839"' :
                                            'id="xs-components-links-module-DashboardsModule-7a5be89dc0eff67c64f4d5d18909f839"' }>
                                            <li class="link">
                                                <a href="components/AddDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardsRoutingModule.html" data-type="entity-link">DashboardsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DuplicateApplicationModule.html" data-type="entity-link">DuplicateApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DuplicateApplicationModule-96e7e75c0fbba74cd18b9456f774ed52"' : 'data-target="#xs-components-links-module-DuplicateApplicationModule-96e7e75c0fbba74cd18b9456f774ed52"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DuplicateApplicationModule-96e7e75c0fbba74cd18b9456f774ed52"' :
                                            'id="xs-components-links-module-DuplicateApplicationModule-96e7e75c0fbba74cd18b9456f774ed52"' }>
                                            <li class="link">
                                                <a href="components/DuplicateApplicationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DuplicateApplicationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormAnswerModule.html" data-type="entity-link">FormAnswerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormAnswerModule-93374a8f3e0b9cf0e277a4ce66954827"' : 'data-target="#xs-components-links-module-FormAnswerModule-93374a8f3e0b9cf0e277a4ce66954827"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormAnswerModule-93374a8f3e0b9cf0e277a4ce66954827"' :
                                            'id="xs-components-links-module-FormAnswerModule-93374a8f3e0b9cf0e277a4ce66954827"' }>
                                            <li class="link">
                                                <a href="components/FormAnswerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormAnswerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormAnswerRoutingModule.html" data-type="entity-link">FormAnswerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormBuilderModule.html" data-type="entity-link">FormBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormBuilderModule-e07d40db56d9cb09711dc13a1070106c"' : 'data-target="#xs-components-links-module-FormBuilderModule-e07d40db56d9cb09711dc13a1070106c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormBuilderModule-e07d40db56d9cb09711dc13a1070106c"' :
                                            'id="xs-components-links-module-FormBuilderModule-e07d40db56d9cb09711dc13a1070106c"' }>
                                            <li class="link">
                                                <a href="components/FormBuilderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormBuilderRoutingModule.html" data-type="entity-link">FormBuilderRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link">FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-93212db93242576902d095e30c105860"' : 'data-target="#xs-components-links-module-FormModule-93212db93242576902d095e30c105860"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-93212db93242576902d095e30c105860"' :
                                            'id="xs-components-links-module-FormModule-93212db93242576902d095e30c105860"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link">FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-4b35fe17e6bfbf5f9b854df0077e62b0-1"' : 'data-target="#xs-components-links-module-FormModule-4b35fe17e6bfbf5f9b854df0077e62b0-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-4b35fe17e6bfbf5f9b854df0077e62b0-1"' :
                                            'id="xs-components-links-module-FormModule-4b35fe17e6bfbf5f9b854df0077e62b0-1"' }>
                                            <li class="link">
                                                <a href="components/FormComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRecordsModule.html" data-type="entity-link">FormRecordsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormRecordsModule-2333335fd672ee286933912fa7b47c94"' : 'data-target="#xs-components-links-module-FormRecordsModule-2333335fd672ee286933912fa7b47c94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormRecordsModule-2333335fd672ee286933912fa7b47c94"' :
                                            'id="xs-components-links-module-FormRecordsModule-2333335fd672ee286933912fa7b47c94"' }>
                                            <li class="link">
                                                <a href="components/FormRecordsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormRecordsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRecordsRoutingModule.html" data-type="entity-link">FormRecordsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link">FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link">FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link">FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormsModule-4aeb5281046865f4e805127eba0216f1"' : 'data-target="#xs-components-links-module-FormsModule-4aeb5281046865f4e805127eba0216f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormsModule-4aeb5281046865f4e805127eba0216f1"' :
                                            'id="xs-components-links-module-FormsModule-4aeb5281046865f4e805127eba0216f1"' }>
                                            <li class="link">
                                                <a href="components/FormsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormsRoutingModule.html" data-type="entity-link">FormsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6"' : 'data-target="#xs-components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6"' :
                                            'id="xs-components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6-1"' : 'data-target="#xs-components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6-1"' :
                                            'id="xs-components-links-module-HomeModule-54e6109ac333446324c1c936c625d2a6-1"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-d9f9d1bbb97ffc37c904d1f0e1638a08"' : 'data-target="#xs-components-links-module-LoginModule-d9f9d1bbb97ffc37c904d1f0e1638a08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-d9f9d1bbb97ffc37c904d1f0e1638a08"' :
                                            'id="xs-components-links-module-LoginModule-d9f9d1bbb97ffc37c904d1f0e1638a08"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PositionAttributesModule.html" data-type="entity-link">PositionAttributesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PositionAttributesModule-0b13d52b3cffc9f42dceec9bfe42fd0a"' : 'data-target="#xs-components-links-module-PositionAttributesModule-0b13d52b3cffc9f42dceec9bfe42fd0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PositionAttributesModule-0b13d52b3cffc9f42dceec9bfe42fd0a"' :
                                            'id="xs-components-links-module-PositionAttributesModule-0b13d52b3cffc9f42dceec9bfe42fd0a"' }>
                                            <li class="link">
                                                <a href="components/PositionAttributesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PositionAttributesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PositionAttributesRoutingModule.html" data-type="entity-link">PositionAttributesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PositionModule.html" data-type="entity-link">PositionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PositionModule-8454f4cc94b171577fb462b3eb38e34a"' : 'data-target="#xs-components-links-module-PositionModule-8454f4cc94b171577fb462b3eb38e34a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PositionModule-8454f4cc94b171577fb462b3eb38e34a"' :
                                            'id="xs-components-links-module-PositionModule-8454f4cc94b171577fb462b3eb38e34a"' }>
                                            <li class="link">
                                                <a href="components/AddPositionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPositionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PositionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PositionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PositionRoutingModule.html" data-type="entity-link">PositionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PreviewToolbarModule.html" data-type="entity-link">PreviewToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreviewToolbarModule-1d8157a142edd7a591e629409afccbf8"' : 'data-target="#xs-components-links-module-PreviewToolbarModule-1d8157a142edd7a591e629409afccbf8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreviewToolbarModule-1d8157a142edd7a591e629409afccbf8"' :
                                            'id="xs-components-links-module-PreviewToolbarModule-1d8157a142edd7a591e629409afccbf8"' }>
                                            <li class="link">
                                                <a href="components/PreviewToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviewToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-d2e11855bece9eebcc1509aa17243c00"' : 'data-target="#xs-components-links-module-ProfileModule-d2e11855bece9eebcc1509aa17243c00"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-d2e11855bece9eebcc1509aa17243c00"' :
                                            'id="xs-components-links-module-ProfileModule-d2e11855bece9eebcc1509aa17243c00"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PullJobsModule.html" data-type="entity-link">PullJobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PullJobsModule-484f6bda053f15dafa864ed4e0d11de0"' : 'data-target="#xs-components-links-module-PullJobsModule-484f6bda053f15dafa864ed4e0d11de0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PullJobsModule-484f6bda053f15dafa864ed4e0d11de0"' :
                                            'id="xs-components-links-module-PullJobsModule-484f6bda053f15dafa864ed4e0d11de0"' }>
                                            <li class="link">
                                                <a href="components/PullJobModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PullJobModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PullJobsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PullJobsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PullJobsRoutingModule.html" data-type="entity-link">PullJobsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceModule.html" data-type="entity-link">ResourceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourceModule-81f76c09a47e1a532257623f0d54844c"' : 'data-target="#xs-components-links-module-ResourceModule-81f76c09a47e1a532257623f0d54844c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourceModule-81f76c09a47e1a532257623f0d54844c"' :
                                            'id="xs-components-links-module-ResourceModule-81f76c09a47e1a532257623f0d54844c"' }>
                                            <li class="link">
                                                <a href="components/ResourceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceRoutingModule.html" data-type="entity-link">ResourceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link">ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourcesModule-3bdee51fc79229fc86db830c923e9774"' : 'data-target="#xs-components-links-module-ResourcesModule-3bdee51fc79229fc86db830c923e9774"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-3bdee51fc79229fc86db830c923e9774"' :
                                            'id="xs-components-links-module-ResourcesModule-3bdee51fc79229fc86db830c923e9774"' }>
                                            <li class="link">
                                                <a href="components/ResourcesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResourcesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesRoutingModule.html" data-type="entity-link">ResourcesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link">RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21"' : 'data-target="#xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21"' :
                                            'id="xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link">RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-1"' : 'data-target="#xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-1"' :
                                            'id="xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-1"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link">RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-2"' : 'data-target="#xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-2"' :
                                            'id="xs-components-links-module-RolesModule-88ec110a0aac99c3a22ae281e3e00f21-2"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent-2.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link">RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link">RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link">RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-29363e4fa0ef87216f6d67ee8da3930c"' : 'data-target="#xs-components-links-module-SettingsModule-29363e4fa0ef87216f6d67ee8da3930c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-29363e4fa0ef87216f6d67ee8da3930c"' :
                                            'id="xs-components-links-module-SettingsModule-29363e4fa0ef87216f6d67ee8da3930c"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link">SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsModule.html" data-type="entity-link">SubscriptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubscriptionsModule-747321de54b0bf270b0baa0249bad815"' : 'data-target="#xs-components-links-module-SubscriptionsModule-747321de54b0bf270b0baa0249bad815"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubscriptionsModule-747321de54b0bf270b0baa0249bad815"' :
                                            'id="xs-components-links-module-SubscriptionsModule-747321de54b0bf270b0baa0249bad815"' }>
                                            <li class="link">
                                                <a href="components/SubscriptionModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscriptionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubscriptionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsRoutingModule.html" data-type="entity-link">SubscriptionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateRecordModule.html" data-type="entity-link">UpdateRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UpdateRecordModule-af98762dc32550488d8219697ec7e467"' : 'data-target="#xs-components-links-module-UpdateRecordModule-af98762dc32550488d8219697ec7e467"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UpdateRecordModule-af98762dc32550488d8219697ec7e467"' :
                                            'id="xs-components-links-module-UpdateRecordModule-af98762dc32550488d8219697ec7e467"' }>
                                            <li class="link">
                                                <a href="components/UpdateRecordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateRecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateRecordRoutingModule.html" data-type="entity-link">UpdateRecordRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-d47e3e430a8b7c9c0178d0d810307a47"' : 'data-target="#xs-components-links-module-UsersModule-d47e3e430a8b7c9c0178d0d810307a47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-d47e3e430a8b7c9c0178d0d810307a47"' :
                                            'id="xs-components-links-module-UsersModule-d47e3e430a8b7c9c0178d0d810307a47"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-35463c757d0f777f311e1f9baec35a01-1"' : 'data-target="#xs-components-links-module-UsersModule-35463c757d0f777f311e1f9baec35a01-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-35463c757d0f777f311e1f9baec35a01-1"' :
                                            'id="xs-components-links-module-UsersModule-35463c757d0f777f311e1f9baec35a01-1"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-e2eb9392f99b80c79821650d33e35989-2"' : 'data-target="#xs-components-links-module-UsersModule-e2eb9392f99b80c79821650d33e35989-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-e2eb9392f99b80c79821650d33e35989-2"' :
                                            'id="xs-components-links-module-UsersModule-e2eb9392f99b80c79821650d33e35989-2"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent-2.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link">UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link">UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link">UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link">WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-5fb999d58bb94695ddb0b066929e93b8"' : 'data-target="#xs-components-links-module-WorkflowModule-5fb999d58bb94695ddb0b066929e93b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-5fb999d58bb94695ddb0b066929e93b8"' :
                                            'id="xs-components-links-module-WorkflowModule-5fb999d58bb94695ddb0b066929e93b8"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link">WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-c1d6d28f0791262136e25c2c3de24e62-1"' : 'data-target="#xs-components-links-module-WorkflowModule-c1d6d28f0791262136e25c2c3de24e62-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-c1d6d28f0791262136e25c2c3de24e62-1"' :
                                            'id="xs-components-links-module-WorkflowModule-c1d6d28f0791262136e25c2c3de24e62-1"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link">WorkflowRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link">WorkflowRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PreviewService.html" data-type="entity-link">PreviewService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessGuard.html" data-type="entity-link">AccessGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link">CanDeactivateGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddApiConfigurationMutationResponse.html" data-type="entity-link">AddApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddApplicationMutationResponse.html" data-type="entity-link">AddApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddDashboardMutationResponse.html" data-type="entity-link">AddDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddFormMutationResponse.html" data-type="entity-link">AddFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPageMutationResponse.html" data-type="entity-link">AddPageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPullJobMutationResponse.html" data-type="entity-link">AddPullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddRoleMutationResponse.html" data-type="entity-link">AddRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CanComponentDeactivate.html" data-type="entity-link">CanComponentDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteApiConfigurationMutationResponse.html" data-type="entity-link">DeleteApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteApplicationMutationResponse.html" data-type="entity-link">DeleteApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteDashboardMutationResponse.html" data-type="entity-link">DeleteDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteFormMutationResponse.html" data-type="entity-link">DeleteFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePageMutationResponse.html" data-type="entity-link">DeletePageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePullJobMutationResponse.html" data-type="entity-link">DeletePullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRecordMutationResponse.html" data-type="entity-link">DeleteRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteResourceMutationResponse.html" data-type="entity-link">DeleteResourceMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRoleMutationResponse.html" data-type="entity-link">DeleteRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteStepMutationResponse.html" data-type="entity-link">DeleteStepMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicateApplicationMutationResponse.html" data-type="entity-link">DuplicateApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditApiConfigurationMutationResponse.html" data-type="entity-link">EditApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditApplicationMutationResponse.html" data-type="entity-link">EditApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditDashboardMutationResponse.html" data-type="entity-link">EditDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditFormMutationResponse.html" data-type="entity-link">EditFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPageMutationResponse.html" data-type="entity-link">EditPageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPullJobMutationResponse.html" data-type="entity-link">EditPullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRecordMutationResponse.html" data-type="entity-link">EditRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditResourceMutationResponse.html" data-type="entity-link">EditResourceMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRoleMutationResponse.html" data-type="entity-link">EditRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditStepMutationResponse.html" data-type="entity-link">EditStepMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserMutationResponse.html" data-type="entity-link">EditUserMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditWorkflowMutationResponse.html" data-type="entity-link">EditWorkflowMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApiConfigurationQueryResponse.html" data-type="entity-link">GetApiConfigurationQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApiConfigurationsQueryResponse.html" data-type="entity-link">GetApiConfigurationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationByIdQueryResponse.html" data-type="entity-link">GetApplicationByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationsQueryResponse.html" data-type="entity-link">GetApplicationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardByIdQueryResponse.html" data-type="entity-link">GetDashboardByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardsQueryResponse.html" data-type="entity-link">GetDashboardsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse.html" data-type="entity-link">GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormsQueryResponse.html" data-type="entity-link">GetFormsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPageByIdQueryResponse.html" data-type="entity-link">GetPageByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPermissionsQueryResponse.html" data-type="entity-link">GetPermissionsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPositionAttributesFromCategoryQueryResponse.html" data-type="entity-link">GetPositionAttributesFromCategoryQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRecordByIdQueryResponse.html" data-type="entity-link">GetRecordByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRecordDetailsQueryResponse.html" data-type="entity-link">GetRecordDetailsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResourceByIdQueryResponse.html" data-type="entity-link">GetResourceByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResourcesQueryResponse.html" data-type="entity-link">GetResourcesQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRolesQueryResponse.html" data-type="entity-link">GetRolesQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRoutingKeysQueryResponse.html" data-type="entity-link">GetRoutingKeysQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetStepByIdQueryResponse.html" data-type="entity-link">GetStepByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUsersQueryResponse.html" data-type="entity-link">GetUsersQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetWorkflowByIdQueryResponse.html" data-type="entity-link">GetWorkflowByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RestoreRecordMutationResponse.html" data-type="entity-link">RestoreRecordMutationResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});