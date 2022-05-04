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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2805ef4babc087b4da61d87689d3bf5f6b2cbacdb9c6c617f096c9f095ed2e0b95e4c7133dbfe234975649687be5bb02b8a9373bda48ecd55b064e33daee4fd6"' : 'data-target="#xs-components-links-module-AppModule-2805ef4babc087b4da61d87689d3bf5f6b2cbacdb9c6c617f096c9f095ed2e0b95e4c7133dbfe234975649687be5bb02b8a9373bda48ecd55b064e33daee4fd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2805ef4babc087b4da61d87689d3bf5f6b2cbacdb9c6c617f096c9f095ed2e0b95e4c7133dbfe234975649687be5bb02b8a9373bda48ecd55b064e33daee4fd6"' :
                                            'id="xs-components-links-module-AppModule-2805ef4babc087b4da61d87689d3bf5f6b2cbacdb9c6c617f096c9f095ed2e0b95e4c7133dbfe234975649687be5bb02b8a9373bda48ecd55b064e33daee4fd6"' }>
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
                                            'data-target="#components-links-module-DashboardModule-5d99488650e41c28138c520be96eadf4b0b3875902be2632d59600bdf75491c7e3cf1c677dbd526281573283819e1c5f967cb3308f5108e7c399476f9ccb4b6c-1"' : 'data-target="#xs-components-links-module-DashboardModule-5d99488650e41c28138c520be96eadf4b0b3875902be2632d59600bdf75491c7e3cf1c677dbd526281573283819e1c5f967cb3308f5108e7c399476f9ccb4b6c-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-5d99488650e41c28138c520be96eadf4b0b3875902be2632d59600bdf75491c7e3cf1c677dbd526281573283819e1c5f967cb3308f5108e7c399476f9ccb4b6c-1"' :
                                            'id="xs-components-links-module-DashboardModule-5d99488650e41c28138c520be96eadf4b0b3875902be2632d59600bdf75491c7e3cf1c677dbd526281573283819e1c5f967cb3308f5108e7c399476f9ccb4b6c-1"' }>
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
                                <a href="modules/FormRoutingModule.html" data-type="entity-link" >FormRoutingModule</a>
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
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RolesModule-d00259872bef430c7f21e79596210cd148fb4763ef071468d6fcb9b59f8904bd4d104bb3932d73611ccb5ce66ada88a72cc987c27775fcde8742aa8c69dd3afe"' : 'data-target="#xs-components-links-module-RolesModule-d00259872bef430c7f21e79596210cd148fb4763ef071468d6fcb9b59f8904bd4d104bb3932d73611ccb5ce66ada88a72cc987c27775fcde8742aa8c69dd3afe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RolesModule-d00259872bef430c7f21e79596210cd148fb4763ef071468d6fcb9b59f8904bd4d104bb3932d73611ccb5ce66ada88a72cc987c27775fcde8742aa8c69dd3afe"' :
                                            'id="xs-components-links-module-RolesModule-d00259872bef430c7f21e79596210cd148fb4763ef071468d6fcb9b59f8904bd4d104bb3932d73611ccb5ce66ada88a72cc987c27775fcde8742aa8c69dd3afe"' }>
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
                                            'data-target="#components-links-module-UsersModule-e14a5c54c6ca35aba4ac9962b3041d4bbc9b040105dca71fbe164d418c819db1e40ff1d9fbd16be9f677f94f9e302fd88cfc9cc965081dcfb9ba04e45d1b51cf"' : 'data-target="#xs-components-links-module-UsersModule-e14a5c54c6ca35aba4ac9962b3041d4bbc9b040105dca71fbe164d418c819db1e40ff1d9fbd16be9f677f94f9e302fd88cfc9cc965081dcfb9ba04e45d1b51cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-e14a5c54c6ca35aba4ac9962b3041d4bbc9b040105dca71fbe164d418c819db1e40ff1d9fbd16be9f677f94f9e302fd88cfc9cc965081dcfb9ba04e45d1b51cf"' :
                                            'id="xs-components-links-module-UsersModule-e14a5c54c6ca35aba4ac9962b3041d4bbc9b040105dca71fbe164d418c819db1e40ff1d9fbd16be9f677f94f9e302fd88cfc9cc965081dcfb9ba04e45d1b51cf"' }>
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
                                <a href="modules/WorkflowRoutingModule.html" data-type="entity-link" >WorkflowRoutingModule</a>
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
                                <a href="interfaces/AddRoleMutationResponse.html" data-type="entity-link" >AddRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRoleMutationResponse.html" data-type="entity-link" >EditRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserMutationResponse.html" data-type="entity-link" >EditUserMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationByIdQueryResponse.html" data-type="entity-link" >GetApplicationByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardByIdQueryResponse.html" data-type="entity-link" >GetDashboardByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse.html" data-type="entity-link" >GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPageByIdQueryResponse.html" data-type="entity-link" >GetPageByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPermissionsQueryResponse.html" data-type="entity-link" >GetPermissionsQueryResponse</a>
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