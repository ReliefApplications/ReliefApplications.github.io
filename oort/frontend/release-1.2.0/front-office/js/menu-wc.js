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
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' : 'data-target="#xs-components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' :
                                            'id="xs-components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' : 'data-target="#xs-components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' :
                                            'id="xs-components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' }>
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
                                            'data-target="#components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' : 'data-target="#xs-components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' :
                                            'id="xs-components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
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
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' : 'data-target="#xs-components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' :
                                            'id="xs-components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormRoutingModule.html" data-type="entity-link" >FormRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link" >GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' : 'data-target="#xs-components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' :
                                            'id="xs-components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' }>
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
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' : 'data-target="#xs-components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' :
                                            'id="xs-components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' }>
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
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' : 'data-target="#xs-components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' :
                                            'id="xs-components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' }>
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
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' : 'data-target="#xs-components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' :
                                            'id="xs-components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link" >WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' : 'data-target="#xs-components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' :
                                            'id="xs-components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link" >WorkflowRoutingModule</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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
                                <a href="interfaces/GetDashboardByIdQueryResponse.html" data-type="entity-link" >GetDashboardByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse.html" data-type="entity-link" >GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse-1.html" data-type="entity-link" >GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPageByIdQueryResponse.html" data-type="entity-link" >GetPageByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPageByIdQueryResponse-1.html" data-type="entity-link" >GetPageByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetStepByIdQueryResponse.html" data-type="entity-link" >GetStepByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetStepByIdQueryResponse-1.html" data-type="entity-link" >GetStepByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetWorkflowByIdQueryResponse.html" data-type="entity-link" >GetWorkflowByIdQueryResponse</a>
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