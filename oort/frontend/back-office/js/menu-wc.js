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
                    <a href="index.html" data-type="index-link">oort-front documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                                <a href="modules/AddFormModule.html" data-type="entity-link" >AddFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddFormModule-b676770b62bdfcc4a18aa3334cfad83636355ec4f13e35cc107bcdf36f7925518ab4aa3bd7a7a05ea4d477bdc36e84bfaeff0ab9aa99eaf73e0782ab6c7e9eb5"' : 'data-target="#xs-components-links-module-AddFormModule-b676770b62bdfcc4a18aa3334cfad83636355ec4f13e35cc107bcdf36f7925518ab4aa3bd7a7a05ea4d477bdc36e84bfaeff0ab9aa99eaf73e0782ab6c7e9eb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddFormModule-b676770b62bdfcc4a18aa3334cfad83636355ec4f13e35cc107bcdf36f7925518ab4aa3bd7a7a05ea4d477bdc36e84bfaeff0ab9aa99eaf73e0782ab6c7e9eb5"' :
                                            'id="xs-components-links-module-AddFormModule-b676770b62bdfcc4a18aa3334cfad83636355ec4f13e35cc107bcdf36f7925518ab4aa3bd7a7a05ea4d477bdc36e84bfaeff0ab9aa99eaf73e0782ab6c7e9eb5"' }>
                                            <li class="link">
                                                <a href="components/AddFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPageModule.html" data-type="entity-link" >AddPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddPageModule-a15ca5733a9c89ce000bb82cc23f90620a35840072ae452e491c49e3db8edded7b9085ec81931bc9a086d5cef45f779cacf4278c368c49d7a489339bc6ced741"' : 'data-target="#xs-components-links-module-AddPageModule-a15ca5733a9c89ce000bb82cc23f90620a35840072ae452e491c49e3db8edded7b9085ec81931bc9a086d5cef45f779cacf4278c368c49d7a489339bc6ced741"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddPageModule-a15ca5733a9c89ce000bb82cc23f90620a35840072ae452e491c49e3db8edded7b9085ec81931bc9a086d5cef45f779cacf4278c368c49d7a489339bc6ced741"' :
                                            'id="xs-components-links-module-AddPageModule-a15ca5733a9c89ce000bb82cc23f90620a35840072ae452e491c49e3db8edded7b9085ec81931bc9a086d5cef45f779cacf4278c368c49d7a489339bc6ced741"' }>
                                            <li class="link">
                                                <a href="components/AddPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddPageRoutingModule.html" data-type="entity-link" >AddPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AddStepModule.html" data-type="entity-link" >AddStepModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddStepModule-f78080e43cc41402578ce1cdb567dd6616cabe65cf1abe1ef59b818dbd8be5054c6016aa719a65b92e4d4e72dbf6360c9fab77b57de11284b16c6259f12eb0a3"' : 'data-target="#xs-components-links-module-AddStepModule-f78080e43cc41402578ce1cdb567dd6616cabe65cf1abe1ef59b818dbd8be5054c6016aa719a65b92e4d4e72dbf6360c9fab77b57de11284b16c6259f12eb0a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddStepModule-f78080e43cc41402578ce1cdb567dd6616cabe65cf1abe1ef59b818dbd8be5054c6016aa719a65b92e4d4e72dbf6360c9fab77b57de11284b16c6259f12eb0a3"' :
                                            'id="xs-components-links-module-AddStepModule-f78080e43cc41402578ce1cdb567dd6616cabe65cf1abe1ef59b818dbd8be5054c6016aa719a65b92e4d4e72dbf6360c9fab77b57de11284b16c6259f12eb0a3"' }>
                                            <li class="link">
                                                <a href="components/AddStepComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddStepComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddStepRoutingModule.html" data-type="entity-link" >AddStepRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationModule.html" data-type="entity-link" >ApiConfigurationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApiConfigurationModule-00cc7b3378d137da70184931d3db3bc6565991c9fbc5ab3eefa8f93fe09d3ac04040e6322ee329ac64125200a06f32e3894e1b8b6fb35753d8df7f955a4e33ad"' : 'data-target="#xs-components-links-module-ApiConfigurationModule-00cc7b3378d137da70184931d3db3bc6565991c9fbc5ab3eefa8f93fe09d3ac04040e6322ee329ac64125200a06f32e3894e1b8b6fb35753d8df7f955a4e33ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApiConfigurationModule-00cc7b3378d137da70184931d3db3bc6565991c9fbc5ab3eefa8f93fe09d3ac04040e6322ee329ac64125200a06f32e3894e1b8b6fb35753d8df7f955a4e33ad"' :
                                            'id="xs-components-links-module-ApiConfigurationModule-00cc7b3378d137da70184931d3db3bc6565991c9fbc5ab3eefa8f93fe09d3ac04040e6322ee329ac64125200a06f32e3894e1b8b6fb35753d8df7f955a4e33ad"' }>
                                            <li class="link">
                                                <a href="components/ApiConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiConfigurationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationRoutingModule.html" data-type="entity-link" >ApiConfigurationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationsModule.html" data-type="entity-link" >ApiConfigurationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApiConfigurationsModule-17b0aba081ded36abfdb480edaf1f4630f88436be1b8f1f002c7664c4d0fb52f4911713af4fbd0c6ef91e741617fdf046364f69e827d67e45465b03cd6246d47"' : 'data-target="#xs-components-links-module-ApiConfigurationsModule-17b0aba081ded36abfdb480edaf1f4630f88436be1b8f1f002c7664c4d0fb52f4911713af4fbd0c6ef91e741617fdf046364f69e827d67e45465b03cd6246d47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApiConfigurationsModule-17b0aba081ded36abfdb480edaf1f4630f88436be1b8f1f002c7664c4d0fb52f4911713af4fbd0c6ef91e741617fdf046364f69e827d67e45465b03cd6246d47"' :
                                            'id="xs-components-links-module-ApiConfigurationsModule-17b0aba081ded36abfdb480edaf1f4630f88436be1b8f1f002c7664c4d0fb52f4911713af4fbd0c6ef91e741617fdf046364f69e827d67e45465b03cd6246d47"' }>
                                            <li class="link">
                                                <a href="components/AddApiConfigurationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddApiConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiConfigurationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiConfigurationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApiConfigurationsRoutingModule.html" data-type="entity-link" >ApiConfigurationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationModule.html" data-type="entity-link" >ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-6842b02c5729acc4890bcd8061b3cf289c35c25ae97dd3511dbc3b12ccac1e520d7bb2d1a2584530e59f9e7d78fd7c2566b0762c9a401bb39e4c6da23854a8d8"' : 'data-target="#xs-components-links-module-ApplicationModule-6842b02c5729acc4890bcd8061b3cf289c35c25ae97dd3511dbc3b12ccac1e520d7bb2d1a2584530e59f9e7d78fd7c2566b0762c9a401bb39e4c6da23854a8d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-6842b02c5729acc4890bcd8061b3cf289c35c25ae97dd3511dbc3b12ccac1e520d7bb2d1a2584530e59f9e7d78fd7c2566b0762c9a401bb39e4c6da23854a8d8"' :
                                            'id="xs-components-links-module-ApplicationModule-6842b02c5729acc4890bcd8061b3cf289c35c25ae97dd3511dbc3b12ccac1e520d7bb2d1a2584530e59f9e7d78fd7c2566b0762c9a401bb39e4c6da23854a8d8"' }>
                                            <li class="link">
                                                <a href="components/ApplicationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationRoutingModule.html" data-type="entity-link" >ApplicationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationsModule.html" data-type="entity-link" >ApplicationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationsModule-d5195144da2acbbe63451918b2b6a1d50ff30e5f65f10b8a0a4d13506e0e4c203c598e321cf6ad8244d3ca265f09674546a5c45e51b684982ebff33ac76acb01"' : 'data-target="#xs-components-links-module-ApplicationsModule-d5195144da2acbbe63451918b2b6a1d50ff30e5f65f10b8a0a4d13506e0e4c203c598e321cf6ad8244d3ca265f09674546a5c45e51b684982ebff33ac76acb01"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationsModule-d5195144da2acbbe63451918b2b6a1d50ff30e5f65f10b8a0a4d13506e0e4c203c598e321cf6ad8244d3ca265f09674546a5c45e51b684982ebff33ac76acb01"' :
                                            'id="xs-components-links-module-ApplicationsModule-d5195144da2acbbe63451918b2b6a1d50ff30e5f65f10b8a0a4d13506e0e4c203c598e321cf6ad8244d3ca265f09674546a5c45e51b684982ebff33ac76acb01"' }>
                                            <li class="link">
                                                <a href="components/ApplicationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChoseRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChoseRoleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationsRoutingModule.html" data-type="entity-link" >ApplicationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationToolbarModule.html" data-type="entity-link" >ApplicationToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationToolbarModule-f4df26087e60a55b05ed27ce2acb5ec1953e2d500b01f85778c3e1aa9432c3d18b798c1d458d688bbd5609e80ff02aa61d653679361943d1808c3a856f73e9c1"' : 'data-target="#xs-components-links-module-ApplicationToolbarModule-f4df26087e60a55b05ed27ce2acb5ec1953e2d500b01f85778c3e1aa9432c3d18b798c1d458d688bbd5609e80ff02aa61d653679361943d1808c3a856f73e9c1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationToolbarModule-f4df26087e60a55b05ed27ce2acb5ec1953e2d500b01f85778c3e1aa9432c3d18b798c1d458d688bbd5609e80ff02aa61d653679361943d1808c3a856f73e9c1"' :
                                            'id="xs-components-links-module-ApplicationToolbarModule-f4df26087e60a55b05ed27ce2acb5ec1953e2d500b01f85778c3e1aa9432c3d18b798c1d458d688bbd5609e80ff02aa61d653679361943d1808c3a856f73e9c1"' }>
                                            <li class="link">
                                                <a href="components/ApplicationToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-01d846ab9ce3ca5282bf7c0b209038ac41ec6444fbd936e64ddf1b319014c16b97731cd114cbc9cee7bc536dd3ec4546134b8e9c1f14f9e2c226990cbf350ed0"' : 'data-target="#xs-components-links-module-AppModule-01d846ab9ce3ca5282bf7c0b209038ac41ec6444fbd936e64ddf1b319014c16b97731cd114cbc9cee7bc536dd3ec4546134b8e9c1f14f9e2c226990cbf350ed0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-01d846ab9ce3ca5282bf7c0b209038ac41ec6444fbd936e64ddf1b319014c16b97731cd114cbc9cee7bc536dd3ec4546134b8e9c1f14f9e2c226990cbf350ed0"' :
                                            'id="xs-components-links-module-AppModule-01d846ab9ce3ca5282bf7c0b209038ac41ec6444fbd936e64ddf1b319014c16b97731cd114cbc9cee7bc536dd3ec4546134b8e9c1f14f9e2c226990cbf350ed0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppPreviewModule.html" data-type="entity-link" >AppPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppPreviewModule-52eab3881724c6437d48d87c54a7331e9b3410e4acf743b32a960e91a127c2c4bea390e64a7bd654ffbc7c45b9c70c4321591aad27aaa3db99f2bbed3065e135"' : 'data-target="#xs-components-links-module-AppPreviewModule-52eab3881724c6437d48d87c54a7331e9b3410e4acf743b32a960e91a127c2c4bea390e64a7bd654ffbc7c45b9c70c4321591aad27aaa3db99f2bbed3065e135"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppPreviewModule-52eab3881724c6437d48d87c54a7331e9b3410e4acf743b32a960e91a127c2c4bea390e64a7bd654ffbc7c45b9c70c4321591aad27aaa3db99f2bbed3065e135"' :
                                            'id="xs-components-links-module-AppPreviewModule-52eab3881724c6437d48d87c54a7331e9b3410e4acf743b32a960e91a127c2c4bea390e64a7bd654ffbc7c45b9c70c4321591aad27aaa3db99f2bbed3065e135"' }>
                                            <li class="link">
                                                <a href="components/AppPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppPreviewRoutingModule.html" data-type="entity-link" >AppPreviewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsModule.html" data-type="entity-link" >ChannelsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChannelsModule-9f5c4aa0fd14fce6c80bee600d041d40cd1670d9bd25c0f366a4e9f5812bc7523edab535180848a1c54c6cf6ec19be95640a1c0836c87a753875b482fdf06808"' : 'data-target="#xs-components-links-module-ChannelsModule-9f5c4aa0fd14fce6c80bee600d041d40cd1670d9bd25c0f366a4e9f5812bc7523edab535180848a1c54c6cf6ec19be95640a1c0836c87a753875b482fdf06808"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChannelsModule-9f5c4aa0fd14fce6c80bee600d041d40cd1670d9bd25c0f366a4e9f5812bc7523edab535180848a1c54c6cf6ec19be95640a1c0836c87a753875b482fdf06808"' :
                                            'id="xs-components-links-module-ChannelsModule-9f5c4aa0fd14fce6c80bee600d041d40cd1670d9bd25c0f366a4e9f5812bc7523edab535180848a1c54c6cf6ec19be95640a1c0836c87a753875b482fdf06808"' }>
                                            <li class="link">
                                                <a href="components/AddChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddChannelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChannelsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChannelsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditChannelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditChannelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChannelsRoutingModule.html" data-type="entity-link" >ChannelsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-6f5f4b3a97b41ee26b4d32e67806971f7428bf9deec8ac736fe167fd862f03b57b9bcd3ce18a74ec22e636cf6f2c3fa0cc8df5e735e4c2efdb7775ae0d98c007"' : 'data-target="#xs-components-links-module-DashboardModule-6f5f4b3a97b41ee26b4d32e67806971f7428bf9deec8ac736fe167fd862f03b57b9bcd3ce18a74ec22e636cf6f2c3fa0cc8df5e735e4c2efdb7775ae0d98c007"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-6f5f4b3a97b41ee26b4d32e67806971f7428bf9deec8ac736fe167fd862f03b57b9bcd3ce18a74ec22e636cf6f2c3fa0cc8df5e735e4c2efdb7775ae0d98c007"' :
                                            'id="xs-components-links-module-DashboardModule-6f5f4b3a97b41ee26b4d32e67806971f7428bf9deec8ac736fe167fd862f03b57b9bcd3ce18a74ec22e636cf6f2c3fa0cc8df5e735e4c2efdb7775ae0d98c007"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-a0bad3ffafb265a2d42642bd66863df2eaae591f342b40f8be34ef256ebe95d8ba0575078fead866fa40639824d23ecd66a0fa0d281747758c3b9bb1a2f85e00-1"' : 'data-target="#xs-components-links-module-DashboardModule-a0bad3ffafb265a2d42642bd66863df2eaae591f342b40f8be34ef256ebe95d8ba0575078fead866fa40639824d23ecd66a0fa0d281747758c3b9bb1a2f85e00-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-a0bad3ffafb265a2d42642bd66863df2eaae591f342b40f8be34ef256ebe95d8ba0575078fead866fa40639824d23ecd66a0fa0d281747758c3b9bb1a2f85e00-1"' :
                                            'id="xs-components-links-module-DashboardModule-a0bad3ffafb265a2d42642bd66863df2eaae591f342b40f8be34ef256ebe95d8ba0575078fead866fa40639824d23ecd66a0fa0d281747758c3b9bb1a2f85e00-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-f77eb8b843567c8177f70b69f99d1fe1d8b13b88ee746ba05ea823573038b9cb95d35e97fe0d88150865a673304de55ca6656e2b28041efd0c7e3e77b50bb8fd-2"' : 'data-target="#xs-components-links-module-DashboardModule-f77eb8b843567c8177f70b69f99d1fe1d8b13b88ee746ba05ea823573038b9cb95d35e97fe0d88150865a673304de55ca6656e2b28041efd0c7e3e77b50bb8fd-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-f77eb8b843567c8177f70b69f99d1fe1d8b13b88ee746ba05ea823573038b9cb95d35e97fe0d88150865a673304de55ca6656e2b28041efd0c7e3e77b50bb8fd-2"' :
                                            'id="xs-components-links-module-DashboardModule-f77eb8b843567c8177f70b69f99d1fe1d8b13b88ee746ba05ea823573038b9cb95d35e97fe0d88150865a673304de55ca6656e2b28041efd0c7e3e77b50bb8fd-2"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShareUrlComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareUrlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardsModule.html" data-type="entity-link" >DashboardsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardsModule-3e72fb4e9bf5ef8b2a8bc2031addf98b8ddf0b8b09192bed9cdd6d67cb4348e4cf6e90d598bb17d1717389b314050212df647540cb6ef4dcefdf212b02162036"' : 'data-target="#xs-components-links-module-DashboardsModule-3e72fb4e9bf5ef8b2a8bc2031addf98b8ddf0b8b09192bed9cdd6d67cb4348e4cf6e90d598bb17d1717389b314050212df647540cb6ef4dcefdf212b02162036"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardsModule-3e72fb4e9bf5ef8b2a8bc2031addf98b8ddf0b8b09192bed9cdd6d67cb4348e4cf6e90d598bb17d1717389b314050212df647540cb6ef4dcefdf212b02162036"' :
                                            'id="xs-components-links-module-DashboardsModule-3e72fb4e9bf5ef8b2a8bc2031addf98b8ddf0b8b09192bed9cdd6d67cb4348e4cf6e90d598bb17d1717389b314050212df647540cb6ef4dcefdf212b02162036"' }>
                                            <li class="link">
                                                <a href="components/AddDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardsRoutingModule.html" data-type="entity-link" >DashboardsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DuplicateApplicationModule.html" data-type="entity-link" >DuplicateApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DuplicateApplicationModule-72421fde939d70327c3cd26ba91165137f92ab496425195b7a54ee0967913cdc6338d2ec452139952e6c5d0e5070e20ce70450fe5974fea0f98cb348570cea23"' : 'data-target="#xs-components-links-module-DuplicateApplicationModule-72421fde939d70327c3cd26ba91165137f92ab496425195b7a54ee0967913cdc6338d2ec452139952e6c5d0e5070e20ce70450fe5974fea0f98cb348570cea23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DuplicateApplicationModule-72421fde939d70327c3cd26ba91165137f92ab496425195b7a54ee0967913cdc6338d2ec452139952e6c5d0e5070e20ce70450fe5974fea0f98cb348570cea23"' :
                                            'id="xs-components-links-module-DuplicateApplicationModule-72421fde939d70327c3cd26ba91165137f92ab496425195b7a54ee0967913cdc6338d2ec452139952e6c5d0e5070e20ce70450fe5974fea0f98cb348570cea23"' }>
                                            <li class="link">
                                                <a href="components/DuplicateApplicationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DuplicateApplicationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormAnswerModule.html" data-type="entity-link" >FormAnswerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormAnswerModule-4040a98a7ca5ccfa73a405cb121e46f7b832b05b87919459418fa502dd065beb9f4eef384c61ab8f622e992d99ed54b31b0c6055f16da582c8625bb7338dd4c0"' : 'data-target="#xs-components-links-module-FormAnswerModule-4040a98a7ca5ccfa73a405cb121e46f7b832b05b87919459418fa502dd065beb9f4eef384c61ab8f622e992d99ed54b31b0c6055f16da582c8625bb7338dd4c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormAnswerModule-4040a98a7ca5ccfa73a405cb121e46f7b832b05b87919459418fa502dd065beb9f4eef384c61ab8f622e992d99ed54b31b0c6055f16da582c8625bb7338dd4c0"' :
                                            'id="xs-components-links-module-FormAnswerModule-4040a98a7ca5ccfa73a405cb121e46f7b832b05b87919459418fa502dd065beb9f4eef384c61ab8f622e992d99ed54b31b0c6055f16da582c8625bb7338dd4c0"' }>
                                            <li class="link">
                                                <a href="components/FormAnswerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormAnswerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormAnswerRoutingModule.html" data-type="entity-link" >FormAnswerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormBuilderModule.html" data-type="entity-link" >FormBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormBuilderModule-5fdd30024c98be0f3bfe98b5cc4edea98efe53fa21260967403db9d1dfb792696bf981061ed0a9d2b826f29dd66312c55a8a8c13a77f93d93379f548451f0410"' : 'data-target="#xs-components-links-module-FormBuilderModule-5fdd30024c98be0f3bfe98b5cc4edea98efe53fa21260967403db9d1dfb792696bf981061ed0a9d2b826f29dd66312c55a8a8c13a77f93d93379f548451f0410"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormBuilderModule-5fdd30024c98be0f3bfe98b5cc4edea98efe53fa21260967403db9d1dfb792696bf981061ed0a9d2b826f29dd66312c55a8a8c13a77f93d93379f548451f0410"' :
                                            'id="xs-components-links-module-FormBuilderModule-5fdd30024c98be0f3bfe98b5cc4edea98efe53fa21260967403db9d1dfb792696bf981061ed0a9d2b826f29dd66312c55a8a8c13a77f93d93379f548451f0410"' }>
                                            <li class="link">
                                                <a href="components/FormBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormBuilderRoutingModule.html" data-type="entity-link" >FormBuilderRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-cf67a350161814361523db0ef5c5879da3489286af7e66657c9efc4bd5232949c9927b1ed542932360dc52e8504f044c9209e23eade33973b86d53d380cc515e"' : 'data-target="#xs-components-links-module-FormModule-cf67a350161814361523db0ef5c5879da3489286af7e66657c9efc4bd5232949c9927b1ed542932360dc52e8504f044c9209e23eade33973b86d53d380cc515e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-cf67a350161814361523db0ef5c5879da3489286af7e66657c9efc4bd5232949c9927b1ed542932360dc52e8504f044c9209e23eade33973b86d53d380cc515e"' :
                                            'id="xs-components-links-module-FormModule-cf67a350161814361523db0ef5c5879da3489286af7e66657c9efc4bd5232949c9927b1ed542932360dc52e8504f044c9209e23eade33973b86d53d380cc515e"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-c288cb3decd5b1daae7eeaf854141615d6a9985f4ae0c46d4e11d39ec7300f08957c90046f10edc6b38ba7c8aa9841f19de851064181c9bfd934ba82c5f37b56-1"' : 'data-target="#xs-components-links-module-FormModule-c288cb3decd5b1daae7eeaf854141615d6a9985f4ae0c46d4e11d39ec7300f08957c90046f10edc6b38ba7c8aa9841f19de851064181c9bfd934ba82c5f37b56-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-c288cb3decd5b1daae7eeaf854141615d6a9985f4ae0c46d4e11d39ec7300f08957c90046f10edc6b38ba7c8aa9841f19de851064181c9bfd934ba82c5f37b56-1"' :
                                            'id="xs-components-links-module-FormModule-c288cb3decd5b1daae7eeaf854141615d6a9985f4ae0c46d4e11d39ec7300f08957c90046f10edc6b38ba7c8aa9841f19de851064181c9bfd934ba82c5f37b56-1"' }>
                                            <li class="link">
                                                <a href="components/FormComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRecordsModule.html" data-type="entity-link" >FormRecordsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormRecordsModule-aeef5450aa1e3994427d06536378b7c1b54ac95974d4fc99099fbd13a068d7e5ef3d65587f0cda486082024ae13c0740f3584efa50ebe4dfd8a47086e1584cfb"' : 'data-target="#xs-components-links-module-FormRecordsModule-aeef5450aa1e3994427d06536378b7c1b54ac95974d4fc99099fbd13a068d7e5ef3d65587f0cda486082024ae13c0740f3584efa50ebe4dfd8a47086e1584cfb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormRecordsModule-aeef5450aa1e3994427d06536378b7c1b54ac95974d4fc99099fbd13a068d7e5ef3d65587f0cda486082024ae13c0740f3584efa50ebe4dfd8a47086e1584cfb"' :
                                            'id="xs-components-links-module-FormRecordsModule-aeef5450aa1e3994427d06536378b7c1b54ac95974d4fc99099fbd13a068d7e5ef3d65587f0cda486082024ae13c0740f3584efa50ebe4dfd8a47086e1584cfb"' }>
                                            <li class="link">
                                                <a href="components/FormRecordsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormRecordsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRecordsRoutingModule.html" data-type="entity-link" >FormRecordsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link" >FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link" >FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link" >FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormsModule-e2291b50238eb0ead7ba17c32a8b4baef3f528e74d675d19e81212bcbb5fb928bdc442dea676d95b6c2eb4a0191a4a48a087788683d68859680f2ba118fdb983"' : 'data-target="#xs-components-links-module-FormsModule-e2291b50238eb0ead7ba17c32a8b4baef3f528e74d675d19e81212bcbb5fb928bdc442dea676d95b6c2eb4a0191a4a48a087788683d68859680f2ba118fdb983"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormsModule-e2291b50238eb0ead7ba17c32a8b4baef3f528e74d675d19e81212bcbb5fb928bdc442dea676d95b6c2eb4a0191a4a48a087788683d68859680f2ba118fdb983"' :
                                            'id="xs-components-links-module-FormsModule-e2291b50238eb0ead7ba17c32a8b4baef3f528e74d675d19e81212bcbb5fb928bdc442dea676d95b6c2eb4a0191a4a48a087788683d68859680f2ba118fdb983"' }>
                                            <li class="link">
                                                <a href="components/FormsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormsRoutingModule.html" data-type="entity-link" >FormsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299"' : 'data-target="#xs-components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299"' :
                                            'id="xs-components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link" >HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299-1"' : 'data-target="#xs-components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299-1"' :
                                            'id="xs-components-links-module-HomeModule-a8d73ca4cbb7af967f03b9e5ae3a1f13bcaa8f07868d4bd03e8c2eeb5e9fb9c8dd1ae23273c1af39bc405dbbdb5f71c3bc9a8e54cf7cf76222a4866318719299-1"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link" >HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-9e4b08b8ca367ae00f0d1209fb97800ab30d192e50738a2c8076b340f2b96a89bfb4e89207a11dd1e0fd4b08a7175fb2d264cd939b302d2f0eab496f72b44a2a"' : 'data-target="#xs-components-links-module-LoginModule-9e4b08b8ca367ae00f0d1209fb97800ab30d192e50738a2c8076b340f2b96a89bfb4e89207a11dd1e0fd4b08a7175fb2d264cd939b302d2f0eab496f72b44a2a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-9e4b08b8ca367ae00f0d1209fb97800ab30d192e50738a2c8076b340f2b96a89bfb4e89207a11dd1e0fd4b08a7175fb2d264cd939b302d2f0eab496f72b44a2a"' :
                                            'id="xs-components-links-module-LoginModule-9e4b08b8ca367ae00f0d1209fb97800ab30d192e50738a2c8076b340f2b96a89bfb4e89207a11dd1e0fd4b08a7175fb2d264cd939b302d2f0eab496f72b44a2a"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PositionAttributesModule.html" data-type="entity-link" >PositionAttributesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PositionAttributesModule-a10e74b266f8a7a6573c5bfcc64becc467d316c8c0a0a15c4ddc8709691d90524afa476a8459c1b778b1acc306f534ee2112423c15620ea1b48b2af233814aad"' : 'data-target="#xs-components-links-module-PositionAttributesModule-a10e74b266f8a7a6573c5bfcc64becc467d316c8c0a0a15c4ddc8709691d90524afa476a8459c1b778b1acc306f534ee2112423c15620ea1b48b2af233814aad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PositionAttributesModule-a10e74b266f8a7a6573c5bfcc64becc467d316c8c0a0a15c4ddc8709691d90524afa476a8459c1b778b1acc306f534ee2112423c15620ea1b48b2af233814aad"' :
                                            'id="xs-components-links-module-PositionAttributesModule-a10e74b266f8a7a6573c5bfcc64becc467d316c8c0a0a15c4ddc8709691d90524afa476a8459c1b778b1acc306f534ee2112423c15620ea1b48b2af233814aad"' }>
                                            <li class="link">
                                                <a href="components/PositionAttributesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PositionAttributesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PositionAttributesRoutingModule.html" data-type="entity-link" >PositionAttributesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PositionModule.html" data-type="entity-link" >PositionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PositionModule-402dc1c8560e3fa9b838abbc262972dd6a7c3305231035d552b9886172240dee22cdc7e50ad9e51b5267264e57c85cf6473a20cea0983cc90ca10093eaf91e72"' : 'data-target="#xs-components-links-module-PositionModule-402dc1c8560e3fa9b838abbc262972dd6a7c3305231035d552b9886172240dee22cdc7e50ad9e51b5267264e57c85cf6473a20cea0983cc90ca10093eaf91e72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PositionModule-402dc1c8560e3fa9b838abbc262972dd6a7c3305231035d552b9886172240dee22cdc7e50ad9e51b5267264e57c85cf6473a20cea0983cc90ca10093eaf91e72"' :
                                            'id="xs-components-links-module-PositionModule-402dc1c8560e3fa9b838abbc262972dd6a7c3305231035d552b9886172240dee22cdc7e50ad9e51b5267264e57c85cf6473a20cea0983cc90ca10093eaf91e72"' }>
                                            <li class="link">
                                                <a href="components/AddPositionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPositionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PositionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PositionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PositionRoutingModule.html" data-type="entity-link" >PositionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PreviewToolbarModule.html" data-type="entity-link" >PreviewToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreviewToolbarModule-f206212682af9154b47771a49c2b4949129db8e00d38520e17eee932c11b876b0d631e24e146208d88db426c5c1abf54bf97f928009e7e372dda1539810d31ee"' : 'data-target="#xs-components-links-module-PreviewToolbarModule-f206212682af9154b47771a49c2b4949129db8e00d38520e17eee932c11b876b0d631e24e146208d88db426c5c1abf54bf97f928009e7e372dda1539810d31ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreviewToolbarModule-f206212682af9154b47771a49c2b4949129db8e00d38520e17eee932c11b876b0d631e24e146208d88db426c5c1abf54bf97f928009e7e372dda1539810d31ee"' :
                                            'id="xs-components-links-module-PreviewToolbarModule-f206212682af9154b47771a49c2b4949129db8e00d38520e17eee932c11b876b0d631e24e146208d88db426c5c1abf54bf97f928009e7e372dda1539810d31ee"' }>
                                            <li class="link">
                                                <a href="components/PreviewToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviewToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-1af99f46a1bb3fb12004bf23669da5152d0006c9b9dcadf22ce60bf5356ef533cec47e4d0add7959246e84aefc8fcf3a80521479d1ede89c6422de9eeab5819f"' : 'data-target="#xs-components-links-module-ProfileModule-1af99f46a1bb3fb12004bf23669da5152d0006c9b9dcadf22ce60bf5356ef533cec47e4d0add7959246e84aefc8fcf3a80521479d1ede89c6422de9eeab5819f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-1af99f46a1bb3fb12004bf23669da5152d0006c9b9dcadf22ce60bf5356ef533cec47e4d0add7959246e84aefc8fcf3a80521479d1ede89c6422de9eeab5819f"' :
                                            'id="xs-components-links-module-ProfileModule-1af99f46a1bb3fb12004bf23669da5152d0006c9b9dcadf22ce60bf5356ef533cec47e4d0add7959246e84aefc8fcf3a80521479d1ede89c6422de9eeab5819f"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link" >ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PullJobsModule.html" data-type="entity-link" >PullJobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PullJobsModule-9963df22f66c6dab2afac5cd12f72f74b306e47448e275bc05235836e7fd93f85b936c7c221ec67ac3a1ee7f5c2c107b3338b5cdf4e7983fc0c58c14801add37"' : 'data-target="#xs-components-links-module-PullJobsModule-9963df22f66c6dab2afac5cd12f72f74b306e47448e275bc05235836e7fd93f85b936c7c221ec67ac3a1ee7f5c2c107b3338b5cdf4e7983fc0c58c14801add37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PullJobsModule-9963df22f66c6dab2afac5cd12f72f74b306e47448e275bc05235836e7fd93f85b936c7c221ec67ac3a1ee7f5c2c107b3338b5cdf4e7983fc0c58c14801add37"' :
                                            'id="xs-components-links-module-PullJobsModule-9963df22f66c6dab2afac5cd12f72f74b306e47448e275bc05235836e7fd93f85b936c7c221ec67ac3a1ee7f5c2c107b3338b5cdf4e7983fc0c58c14801add37"' }>
                                            <li class="link">
                                                <a href="components/PullJobModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullJobModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PullJobsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PullJobsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PullJobsRoutingModule.html" data-type="entity-link" >PullJobsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceModule.html" data-type="entity-link" >ResourceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourceModule-7ffcccce43892e447b4fde6654983cf00da64be83e17874a7329482750acb7252ec1f8002599741274b92e0fa969d716f2d2e7f9bdb344a42a36bd49773af2a5"' : 'data-target="#xs-components-links-module-ResourceModule-7ffcccce43892e447b4fde6654983cf00da64be83e17874a7329482750acb7252ec1f8002599741274b92e0fa969d716f2d2e7f9bdb344a42a36bd49773af2a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourceModule-7ffcccce43892e447b4fde6654983cf00da64be83e17874a7329482750acb7252ec1f8002599741274b92e0fa969d716f2d2e7f9bdb344a42a36bd49773af2a5"' :
                                            'id="xs-components-links-module-ResourceModule-7ffcccce43892e447b4fde6654983cf00da64be83e17874a7329482750acb7252ec1f8002599741274b92e0fa969d716f2d2e7f9bdb344a42a36bd49773af2a5"' }>
                                            <li class="link">
                                                <a href="components/ResourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourceRoutingModule.html" data-type="entity-link" >ResourceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link" >ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourcesModule-3fa050a2c48ddd2914561369159b6f1478e7582ff6adbf28db0f246d7870b3683866949698183b46aff5683e24ce650fafba30b905364a40e4c886f204c32031"' : 'data-target="#xs-components-links-module-ResourcesModule-3fa050a2c48ddd2914561369159b6f1478e7582ff6adbf28db0f246d7870b3683866949698183b46aff5683e24ce650fafba30b905364a40e4c886f204c32031"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-3fa050a2c48ddd2914561369159b6f1478e7582ff6adbf28db0f246d7870b3683866949698183b46aff5683e24ce650fafba30b905364a40e4c886f204c32031"' :
                                            'id="xs-components-links-module-ResourcesModule-3fa050a2c48ddd2914561369159b6f1478e7582ff6adbf28db0f246d7870b3683866949698183b46aff5683e24ce650fafba30b905364a40e4c886f204c32031"' }>
                                            <li class="link">
                                                <a href="components/FilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResourcesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResourcesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesRoutingModule.html" data-type="entity-link" >ResourcesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac"' : 'data-target="#xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac"' :
                                            'id="xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-1"' : 'data-target="#xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-1"' :
                                            'id="xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-1"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-2"' : 'data-target="#xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-2"' :
                                            'id="xs-components-links-module-RolesModule-e304a960bf587d2ef86c24b29e1bf06798ebf4cbb593c3fd3e30e0a34aaa8e832d9b8f0dcdd946957a0da31771976a8f25394a606c41d617ce34ee824549e7ac-2"' }>
                                            <li class="link">
                                                <a href="components/RolesComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link" >RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link" >RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RolesRoutingModule.html" data-type="entity-link" >RolesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-31748847ac2fdb3bb57451f8fc17717ee77897591b6168e4b4a18988972e51a6393ac182de83071cac445a34619ba1596d2f78bc70c1f57ebe006d3c4b083b1b"' : 'data-target="#xs-components-links-module-SettingsModule-31748847ac2fdb3bb57451f8fc17717ee77897591b6168e4b4a18988972e51a6393ac182de83071cac445a34619ba1596d2f78bc70c1f57ebe006d3c4b083b1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-31748847ac2fdb3bb57451f8fc17717ee77897591b6168e4b4a18988972e51a6393ac182de83071cac445a34619ba1596d2f78bc70c1f57ebe006d3c4b083b1b"' :
                                            'id="xs-components-links-module-SettingsModule-31748847ac2fdb3bb57451f8fc17717ee77897591b6168e4b4a18988972e51a6393ac182de83071cac445a34619ba1596d2f78bc70c1f57ebe006d3c4b083b1b"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsModule.html" data-type="entity-link" >SubscriptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubscriptionsModule-5769d3f3d425a66ba10228fb0b76fe44660b4c56bcd788088285e58edf234e5ae8266d5d98285efb0a09ea3d19eb7135900a8a539723711ced5f4fbf1c2c1dff"' : 'data-target="#xs-components-links-module-SubscriptionsModule-5769d3f3d425a66ba10228fb0b76fe44660b4c56bcd788088285e58edf234e5ae8266d5d98285efb0a09ea3d19eb7135900a8a539723711ced5f4fbf1c2c1dff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubscriptionsModule-5769d3f3d425a66ba10228fb0b76fe44660b4c56bcd788088285e58edf234e5ae8266d5d98285efb0a09ea3d19eb7135900a8a539723711ced5f4fbf1c2c1dff"' :
                                            'id="xs-components-links-module-SubscriptionsModule-5769d3f3d425a66ba10228fb0b76fe44660b4c56bcd788088285e58edf234e5ae8266d5d98285efb0a09ea3d19eb7135900a8a539723711ced5f4fbf1c2c1dff"' }>
                                            <li class="link">
                                                <a href="components/SubscriptionModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriptionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscriptionsRoutingModule.html" data-type="entity-link" >SubscriptionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateRecordModule.html" data-type="entity-link" >UpdateRecordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UpdateRecordModule-ce14f48fabfc3060dfec33bae7956b5e765b0686cf79a2650196e59de1a4b574559221a443f37f964246d429168db70676f81df8518664159a792af9171a8938"' : 'data-target="#xs-components-links-module-UpdateRecordModule-ce14f48fabfc3060dfec33bae7956b5e765b0686cf79a2650196e59de1a4b574559221a443f37f964246d429168db70676f81df8518664159a792af9171a8938"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UpdateRecordModule-ce14f48fabfc3060dfec33bae7956b5e765b0686cf79a2650196e59de1a4b574559221a443f37f964246d429168db70676f81df8518664159a792af9171a8938"' :
                                            'id="xs-components-links-module-UpdateRecordModule-ce14f48fabfc3060dfec33bae7956b5e765b0686cf79a2650196e59de1a4b574559221a443f37f964246d429168db70676f81df8518664159a792af9171a8938"' }>
                                            <li class="link">
                                                <a href="components/UpdateRecordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateRecordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UpdateRecordRoutingModule.html" data-type="entity-link" >UpdateRecordRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-4525cd85d91b27ab3fdb867fe1abb52e376b04e9ceeec1682d7438106aa7ba363724d27d06d05c79019ec76c9bfadbe5afa0e44c295953d919d0b016d0c5ed5e"' : 'data-target="#xs-components-links-module-UsersModule-4525cd85d91b27ab3fdb867fe1abb52e376b04e9ceeec1682d7438106aa7ba363724d27d06d05c79019ec76c9bfadbe5afa0e44c295953d919d0b016d0c5ed5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-4525cd85d91b27ab3fdb867fe1abb52e376b04e9ceeec1682d7438106aa7ba363724d27d06d05c79019ec76c9bfadbe5afa0e44c295953d919d0b016d0c5ed5e"' :
                                            'id="xs-components-links-module-UsersModule-4525cd85d91b27ab3fdb867fe1abb52e376b04e9ceeec1682d7438106aa7ba363724d27d06d05c79019ec76c9bfadbe5afa0e44c295953d919d0b016d0c5ed5e"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-cc5bf1c64397a447adf5c55b422a67cc8d4e4af4974bb4a17452501188c68446c0d0bc1a5c2ee1c6a4bc16b7697e7a3770debe323ecaf98d771e8752068f2046-1"' : 'data-target="#xs-components-links-module-UsersModule-cc5bf1c64397a447adf5c55b422a67cc8d4e4af4974bb4a17452501188c68446c0d0bc1a5c2ee1c6a4bc16b7697e7a3770debe323ecaf98d771e8752068f2046-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-cc5bf1c64397a447adf5c55b422a67cc8d4e4af4974bb4a17452501188c68446c0d0bc1a5c2ee1c6a4bc16b7697e7a3770debe323ecaf98d771e8752068f2046-1"' :
                                            'id="xs-components-links-module-UsersModule-cc5bf1c64397a447adf5c55b422a67cc8d4e4af4974bb4a17452501188c68446c0d0bc1a5c2ee1c6a4bc16b7697e7a3770debe323ecaf98d771e8752068f2046-1"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-f4d3f2edeac77e704358c3b580c3feb58624c99a5b9bbf6e901a8c6f3aba13856494de6858f82e029c2768533a120689fb8dc440e16fd633c2a24383dcf15bcd-2"' : 'data-target="#xs-components-links-module-UsersModule-f4d3f2edeac77e704358c3b580c3feb58624c99a5b9bbf6e901a8c6f3aba13856494de6858f82e029c2768533a120689fb8dc440e16fd633c2a24383dcf15bcd-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-f4d3f2edeac77e704358c3b580c3feb58624c99a5b9bbf6e901a8c6f3aba13856494de6858f82e029c2768533a120689fb8dc440e16fd633c2a24383dcf15bcd-2"' :
                                            'id="xs-components-links-module-UsersModule-f4d3f2edeac77e704358c3b580c3feb58624c99a5b9bbf6e901a8c6f3aba13856494de6858f82e029c2768533a120689fb8dc440e16fd633c2a24383dcf15bcd-2"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link" >WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-e4d6e3061c187bbc0226682bb73c9bbc20c53b27662e5ef23657301b65ca1c6ff65b1a2737a042ddd803b43b0697d5c9416e5811e2b557ba5d96d4cccc0b4308"' : 'data-target="#xs-components-links-module-WorkflowModule-e4d6e3061c187bbc0226682bb73c9bbc20c53b27662e5ef23657301b65ca1c6ff65b1a2737a042ddd803b43b0697d5c9416e5811e2b557ba5d96d4cccc0b4308"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-e4d6e3061c187bbc0226682bb73c9bbc20c53b27662e5ef23657301b65ca1c6ff65b1a2737a042ddd803b43b0697d5c9416e5811e2b557ba5d96d4cccc0b4308"' :
                                            'id="xs-components-links-module-WorkflowModule-e4d6e3061c187bbc0226682bb73c9bbc20c53b27662e5ef23657301b65ca1c6ff65b1a2737a042ddd803b43b0697d5c9416e5811e2b557ba5d96d4cccc0b4308"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link" >WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-5580cd7d5da8b0988e6db6fa7ce59416694bfb76ce997df22fdb4a8fee1083220d96f742e7dd70bb1b0465163051721eb90c48f4edae884f34dd1be440b4db5b-1"' : 'data-target="#xs-components-links-module-WorkflowModule-5580cd7d5da8b0988e6db6fa7ce59416694bfb76ce997df22fdb4a8fee1083220d96f742e7dd70bb1b0465163051721eb90c48f4edae884f34dd1be440b4db5b-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-5580cd7d5da8b0988e6db6fa7ce59416694bfb76ce997df22fdb4a8fee1083220d96f742e7dd70bb1b0465163051721eb90c48f4edae884f34dd1be440b4db5b-1"' :
                                            'id="xs-components-links-module-WorkflowModule-5580cd7d5da8b0988e6db6fa7ce59416694bfb76ce997df22fdb4a8fee1083220d96f742e7dd70bb1b0465163051721eb90c48f4edae884f34dd1be440b4db5b-1"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link" >WorkflowRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link" >WorkflowRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/FilterComponent-1.html" data-type="entity-link" >FilterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterComponent-2.html" data-type="entity-link" >FilterComponent</a>
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
                                    <a href="injectables/PreviewService.html" data-type="entity-link" >PreviewService</a>
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
                                <a href="guards/AccessGuard.html" data-type="entity-link" >AccessGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/CanDeactivateGuard.html" data-type="entity-link" >CanDeactivateGuard</a>
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
                                <a href="interfaces/AddApiConfigurationMutationResponse.html" data-type="entity-link" >AddApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddApplicationMutationResponse.html" data-type="entity-link" >AddApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddDashboardMutationResponse.html" data-type="entity-link" >AddDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddFormMutationResponse.html" data-type="entity-link" >AddFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPageMutationResponse.html" data-type="entity-link" >AddPageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPullJobMutationResponse.html" data-type="entity-link" >AddPullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddRoleMutationResponse.html" data-type="entity-link" >AddRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CanComponentDeactivate.html" data-type="entity-link" >CanComponentDeactivate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteApiConfigurationMutationResponse.html" data-type="entity-link" >DeleteApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteApplicationMutationResponse.html" data-type="entity-link" >DeleteApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteDashboardMutationResponse.html" data-type="entity-link" >DeleteDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteFormMutationResponse.html" data-type="entity-link" >DeleteFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePageMutationResponse.html" data-type="entity-link" >DeletePageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePullJobMutationResponse.html" data-type="entity-link" >DeletePullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRecordMutationResponse.html" data-type="entity-link" >DeleteRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteResourceMutationResponse.html" data-type="entity-link" >DeleteResourceMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRoleMutationResponse.html" data-type="entity-link" >DeleteRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteStepMutationResponse.html" data-type="entity-link" >DeleteStepMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DuplicateApplicationMutationResponse.html" data-type="entity-link" >DuplicateApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditApiConfigurationMutationResponse.html" data-type="entity-link" >EditApiConfigurationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditApplicationMutationResponse.html" data-type="entity-link" >EditApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditDashboardMutationResponse.html" data-type="entity-link" >EditDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditFormMutationResponse.html" data-type="entity-link" >EditFormMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPageMutationResponse.html" data-type="entity-link" >EditPageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPullJobMutationResponse.html" data-type="entity-link" >EditPullJobMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRecordMutationResponse.html" data-type="entity-link" >EditRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditResourceMutationResponse.html" data-type="entity-link" >EditResourceMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRoleMutationResponse.html" data-type="entity-link" >EditRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditStepMutationResponse.html" data-type="entity-link" >EditStepMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserMutationResponse.html" data-type="entity-link" >EditUserMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditWorkflowMutationResponse.html" data-type="entity-link" >EditWorkflowMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApiConfigurationQueryResponse.html" data-type="entity-link" >GetApiConfigurationQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApiConfigurationsQueryResponse.html" data-type="entity-link" >GetApiConfigurationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationByIdQueryResponse.html" data-type="entity-link" >GetApplicationByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationsQueryResponse.html" data-type="entity-link" >GetApplicationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardByIdQueryResponse.html" data-type="entity-link" >GetDashboardByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardsQueryResponse.html" data-type="entity-link" >GetDashboardsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse.html" data-type="entity-link" >GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormRecordsQueryResponse.html" data-type="entity-link" >GetFormRecordsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormsQueryResponse.html" data-type="entity-link" >GetFormsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPageByIdQueryResponse.html" data-type="entity-link" >GetPageByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPermissionsQueryResponse.html" data-type="entity-link" >GetPermissionsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPositionAttributesFromCategoryQueryResponse.html" data-type="entity-link" >GetPositionAttributesFromCategoryQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPullJobsQueryResponse.html" data-type="entity-link" >GetPullJobsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRecordByIdQueryResponse.html" data-type="entity-link" >GetRecordByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRecordDetailsQueryResponse.html" data-type="entity-link" >GetRecordDetailsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResourceByIdQueryResponse.html" data-type="entity-link" >GetResourceByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResourceRecordsQueryResponse.html" data-type="entity-link" >GetResourceRecordsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetResourcesQueryResponse.html" data-type="entity-link" >GetResourcesQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRolesQueryResponse.html" data-type="entity-link" >GetRolesQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRoutingKeysQueryResponse.html" data-type="entity-link" >GetRoutingKeysQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetStepByIdQueryResponse.html" data-type="entity-link" >GetStepByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUsersQueryResponse.html" data-type="entity-link" >GetUsersQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetWorkflowByIdQueryResponse.html" data-type="entity-link" >GetWorkflowByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RestoreRecordMutationResponse.html" data-type="entity-link" >RestoreRecordMutationResponse</a>
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