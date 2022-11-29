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
                                            'data-target="#components-links-module-AppModule-075e297c53bb429d3846c73b749f31748aab8bc4d0746c081b37e1bf5c8deb99501f9eeab1a21f6a2a927da645b0652ce383752737a4563b6bdf82e538239a79"' : 'data-target="#xs-components-links-module-AppModule-075e297c53bb429d3846c73b749f31748aab8bc4d0746c081b37e1bf5c8deb99501f9eeab1a21f6a2a927da645b0652ce383752737a4563b6bdf82e538239a79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-075e297c53bb429d3846c73b749f31748aab8bc4d0746c081b37e1bf5c8deb99501f9eeab1a21f6a2a927da645b0652ce383752737a4563b6bdf82e538239a79"' :
                                            'id="xs-components-links-module-AppModule-075e297c53bb429d3846c73b749f31748aab8bc4d0746c081b37e1bf5c8deb99501f9eeab1a21f6a2a927da645b0652ce383752737a4563b6bdf82e538239a79"' }>
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
                                            'data-target="#components-links-module-DashboardModule-5fe1a1e2391af714a687cec07ac7d41776ee1b57b82b15c915627a7b7553d94c8aeb4e23a724ab61c268d9d69c3261b8d40b82fad55f0c9c6b9ed5f03fbf0673"' : 'data-target="#xs-components-links-module-DashboardModule-5fe1a1e2391af714a687cec07ac7d41776ee1b57b82b15c915627a7b7553d94c8aeb4e23a724ab61c268d9d69c3261b8d40b82fad55f0c9c6b9ed5f03fbf0673"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-5fe1a1e2391af714a687cec07ac7d41776ee1b57b82b15c915627a7b7553d94c8aeb4e23a724ab61c268d9d69c3261b8d40b82fad55f0c9c6b9ed5f03fbf0673"' :
                                            'id="xs-components-links-module-DashboardModule-5fe1a1e2391af714a687cec07ac7d41776ee1b57b82b15c915627a7b7553d94c8aeb4e23a724ab61c268d9d69c3261b8d40b82fad55f0c9c6b9ed5f03fbf0673"' }>
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
                                            'data-target="#components-links-module-DashboardModule-c8b64276d94c93d781ce107246907db9d88dc000a797c78e9518c1e8bd0751ca4afbaa6c9bec3d459fbc878e58215263722b880ee33d625b72eb9f372ba4f0e2-1"' : 'data-target="#xs-components-links-module-DashboardModule-c8b64276d94c93d781ce107246907db9d88dc000a797c78e9518c1e8bd0751ca4afbaa6c9bec3d459fbc878e58215263722b880ee33d625b72eb9f372ba4f0e2-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-c8b64276d94c93d781ce107246907db9d88dc000a797c78e9518c1e8bd0751ca4afbaa6c9bec3d459fbc878e58215263722b880ee33d625b72eb9f372ba4f0e2-1"' :
                                            'id="xs-components-links-module-DashboardModule-c8b64276d94c93d781ce107246907db9d88dc000a797c78e9518c1e8bd0751ca4afbaa6c9bec3d459fbc878e58215263722b880ee33d625b72eb9f372ba4f0e2-1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
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
                                            'data-target="#components-links-module-LoginModule-d6f8d4952fe2d5ad1c8d889be9d7136d60c2a53175da073ca3c3e28473a637e46c99ef4edf6fb2799004b29c7d50a96ad1b36c3e25576db9536d41a4901ec02d"' : 'data-target="#xs-components-links-module-LoginModule-d6f8d4952fe2d5ad1c8d889be9d7136d60c2a53175da073ca3c3e28473a637e46c99ef4edf6fb2799004b29c7d50a96ad1b36c3e25576db9536d41a4901ec02d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-d6f8d4952fe2d5ad1c8d889be9d7136d60c2a53175da073ca3c3e28473a637e46c99ef4edf6fb2799004b29c7d50a96ad1b36c3e25576db9536d41a4901ec02d"' :
                                            'id="xs-components-links-module-LoginModule-d6f8d4952fe2d5ad1c8d889be9d7136d60c2a53175da073ca3c3e28473a637e46c99ef4edf6fb2799004b29c7d50a96ad1b36c3e25576db9536d41a4901ec02d"' }>
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
                                <a href="modules/RoleSummaryModule.html" data-type="entity-link" >RoleSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RoleSummaryModule-b12d2e98131e8d506d839512d0194308e3a55c922017ca342ab66af12613c840998a58dcf05f4d0657c12e6637e028a7b996ce8662d668b9e9fde0185efb4ebb"' : 'data-target="#xs-components-links-module-RoleSummaryModule-b12d2e98131e8d506d839512d0194308e3a55c922017ca342ab66af12613c840998a58dcf05f4d0657c12e6637e028a7b996ce8662d668b9e9fde0185efb4ebb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RoleSummaryModule-b12d2e98131e8d506d839512d0194308e3a55c922017ca342ab66af12613c840998a58dcf05f4d0657c12e6637e028a7b996ce8662d668b9e9fde0185efb4ebb"' :
                                            'id="xs-components-links-module-RoleSummaryModule-b12d2e98131e8d506d839512d0194308e3a55c922017ca342ab66af12613c840998a58dcf05f4d0657c12e6637e028a7b996ce8662d668b9e9fde0185efb4ebb"' }>
                                            <li class="link">
                                                <a href="components/RoleSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoleSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoleSummaryRoutingModule.html" data-type="entity-link" >RoleSummaryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShareModule.html" data-type="entity-link" >ShareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShareModule-0df32a18a9e8f7e92e0592c2f2d6d44a2cf24761188f0f126729a4ba694b9f0ce25377e192b35597315824352e0358c9903790e6d266dcd1dfb13fd670cb795f"' : 'data-target="#xs-components-links-module-ShareModule-0df32a18a9e8f7e92e0592c2f2d6d44a2cf24761188f0f126729a4ba694b9f0ce25377e192b35597315824352e0358c9903790e6d266dcd1dfb13fd670cb795f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShareModule-0df32a18a9e8f7e92e0592c2f2d6d44a2cf24761188f0f126729a4ba694b9f0ce25377e192b35597315824352e0358c9903790e6d266dcd1dfb13fd670cb795f"' :
                                            'id="xs-components-links-module-ShareModule-0df32a18a9e8f7e92e0592c2f2d6d44a2cf24761188f0f126729a4ba694b9f0ce25377e192b35597315824352e0358c9903790e6d266dcd1dfb13fd670cb795f"' }>
                                            <li class="link">
                                                <a href="components/ShareComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShareComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShareRoutingModule.html" data-type="entity-link" >ShareRoutingModule</a>
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
                                <a href="modules/UserSummaryModule.html" data-type="entity-link" >UserSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserSummaryModule-42edbb9aa235411d8c318e5758512e7632816b8f31f57818f25535aac9d3e46311a8c7ac2111f3f9821994ed86b0e02b418573a75ccee621f40526cda12b3a29"' : 'data-target="#xs-components-links-module-UserSummaryModule-42edbb9aa235411d8c318e5758512e7632816b8f31f57818f25535aac9d3e46311a8c7ac2111f3f9821994ed86b0e02b418573a75ccee621f40526cda12b3a29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserSummaryModule-42edbb9aa235411d8c318e5758512e7632816b8f31f57818f25535aac9d3e46311a8c7ac2111f3f9821994ed86b0e02b418573a75ccee621f40526cda12b3a29"' :
                                            'id="xs-components-links-module-UserSummaryModule-42edbb9aa235411d8c318e5758512e7632816b8f31f57818f25535aac9d3e46311a8c7ac2111f3f9821994ed86b0e02b418573a75ccee621f40526cda12b3a29"' }>
                                            <li class="link">
                                                <a href="components/UserSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserSummaryRoutingModule.html" data-type="entity-link" >UserSummaryRoutingModule</a>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/DashboardComponent-1.html" data-type="entity-link" >DashboardComponent</a>
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
                                <a href="interfaces/GetShareDashboardByIdQueryResponse.html" data-type="entity-link" >GetShareDashboardByIdQueryResponse</a>
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