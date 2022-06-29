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
                                <a href="modules/ApplicationModule.html" data-type="entity-link" >ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-8918aee6fb42e1a69906056c5bcf9351f89382a180ee36d16e2cb2a5cc7ecb3395b14aef331c44b8d3e23e4b810e5cbf1315a58c9d4715572865704516d04e39"' : 'data-target="#xs-components-links-module-ApplicationModule-8918aee6fb42e1a69906056c5bcf9351f89382a180ee36d16e2cb2a5cc7ecb3395b14aef331c44b8d3e23e4b810e5cbf1315a58c9d4715572865704516d04e39"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-8918aee6fb42e1a69906056c5bcf9351f89382a180ee36d16e2cb2a5cc7ecb3395b14aef331c44b8d3e23e4b810e5cbf1315a58c9d4715572865704516d04e39"' :
                                            'id="xs-components-links-module-ApplicationModule-8918aee6fb42e1a69906056c5bcf9351f89382a180ee36d16e2cb2a5cc7ecb3395b14aef331c44b8d3e23e4b810e5cbf1315a58c9d4715572865704516d04e39"' }>
                                            <li class="link">
                                                <a href="components/ApplicationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationWidgetModule.html" data-type="entity-link" >ApplicationWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationWidgetModule-03fbcddf29033aa83846764ee7bf78dfcc09b48a9e91116d919b285a961ccc0f273137a5160b2ab2133549a8ada1cab765025a4b8d7416dfebac1b6ee65ba5b3"' : 'data-target="#xs-components-links-module-ApplicationWidgetModule-03fbcddf29033aa83846764ee7bf78dfcc09b48a9e91116d919b285a961ccc0f273137a5160b2ab2133549a8ada1cab765025a4b8d7416dfebac1b6ee65ba5b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationWidgetModule-03fbcddf29033aa83846764ee7bf78dfcc09b48a9e91116d919b285a961ccc0f273137a5160b2ab2133549a8ada1cab765025a4b8d7416dfebac1b6ee65ba5b3"' :
                                            'id="xs-components-links-module-ApplicationWidgetModule-03fbcddf29033aa83846764ee7bf78dfcc09b48a9e91116d919b285a961ccc0f273137a5160b2ab2133549a8ada1cab765025a4b8d7416dfebac1b6ee65ba5b3"' }>
                                            <li class="link">
                                                <a href="components/ApplicationWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-91d0636f79dc6e1fb2c55be994ac79b12cd2a88179c53dc34f25b282bc30709d606b98bff8d5b72c3c6ac92c7feb675138caa3bb977786dc78e32df9ce4b913e"' : 'data-target="#xs-components-links-module-AppModule-91d0636f79dc6e1fb2c55be994ac79b12cd2a88179c53dc34f25b282bc30709d606b98bff8d5b72c3c6ac92c7feb675138caa3bb977786dc78e32df9ce4b913e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-91d0636f79dc6e1fb2c55be994ac79b12cd2a88179c53dc34f25b282bc30709d606b98bff8d5b72c3c6ac92c7feb675138caa3bb977786dc78e32df9ce4b913e"' :
                                            'id="xs-components-links-module-AppModule-91d0636f79dc6e1fb2c55be994ac79b12cd2a88179c53dc34f25b282bc30709d606b98bff8d5b72c3c6ac92c7feb675138caa3bb977786dc78e32df9ce4b913e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-098ab2901a21dd1576041826e7916c8f64e5bc97bb66272f8c06ff32089804477cb80b92c3734e1e74b82413f9de2ad079af11f60b182fa31763c65179235c49"' : 'data-target="#xs-components-links-module-DashboardModule-098ab2901a21dd1576041826e7916c8f64e5bc97bb66272f8c06ff32089804477cb80b92c3734e1e74b82413f9de2ad079af11f60b182fa31763c65179235c49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-098ab2901a21dd1576041826e7916c8f64e5bc97bb66272f8c06ff32089804477cb80b92c3734e1e74b82413f9de2ad079af11f60b182fa31763c65179235c49"' :
                                            'id="xs-components-links-module-DashboardModule-098ab2901a21dd1576041826e7916c8f64e5bc97bb66272f8c06ff32089804477cb80b92c3734e1e74b82413f9de2ad079af11f60b182fa31763c65179235c49"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardWidgetModule.html" data-type="entity-link" >DashboardWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardWidgetModule-9dce838bcd8c643c063ccce5faf149253bcf8ff63558f0091f5000f66522096a61b386187cbf2d61db6be228b27bd4fff02f32f1a9081478bb15f9565bb5942e"' : 'data-target="#xs-components-links-module-DashboardWidgetModule-9dce838bcd8c643c063ccce5faf149253bcf8ff63558f0091f5000f66522096a61b386187cbf2d61db6be228b27bd4fff02f32f1a9081478bb15f9565bb5942e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardWidgetModule-9dce838bcd8c643c063ccce5faf149253bcf8ff63558f0091f5000f66522096a61b386187cbf2d61db6be228b27bd4fff02f32f1a9081478bb15f9565bb5942e"' :
                                            'id="xs-components-links-module-DashboardWidgetModule-9dce838bcd8c643c063ccce5faf149253bcf8ff63558f0091f5000f66522096a61b386187cbf2d61db6be228b27bd4fff02f32f1a9081478bb15f9565bb5942e"' }>
                                            <li class="link">
                                                <a href="components/DashboardWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-373ed86d11f1fd19e60554c5210b204c07ddf3905ba9bf8736450dd6bf4b80690800909464014940c497f4b379c3be156f0d9e4687966e0a29a1b60df5592246"' : 'data-target="#xs-components-links-module-FormModule-373ed86d11f1fd19e60554c5210b204c07ddf3905ba9bf8736450dd6bf4b80690800909464014940c497f4b379c3be156f0d9e4687966e0a29a1b60df5592246"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-373ed86d11f1fd19e60554c5210b204c07ddf3905ba9bf8736450dd6bf4b80690800909464014940c497f4b379c3be156f0d9e4687966e0a29a1b60df5592246"' :
                                            'id="xs-components-links-module-FormModule-373ed86d11f1fd19e60554c5210b204c07ddf3905ba9bf8736450dd6bf4b80690800909464014940c497f4b379c3be156f0d9e4687966e0a29a1b60df5592246"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormWidgetModule.html" data-type="entity-link" >FormWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormWidgetModule-e1d595e4ccf757941dbc06f1b63f1b2ec4f9684681ec1ce333435f1cc7150fd94bdb821718118677ec9fee698940d034cabe7563f332aa1ce1efd146e7498921"' : 'data-target="#xs-components-links-module-FormWidgetModule-e1d595e4ccf757941dbc06f1b63f1b2ec4f9684681ec1ce333435f1cc7150fd94bdb821718118677ec9fee698940d034cabe7563f332aa1ce1efd146e7498921"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormWidgetModule-e1d595e4ccf757941dbc06f1b63f1b2ec4f9684681ec1ce333435f1cc7150fd94bdb821718118677ec9fee698940d034cabe7563f332aa1ce1efd146e7498921"' :
                                            'id="xs-components-links-module-FormWidgetModule-e1d595e4ccf757941dbc06f1b63f1b2ec4f9684681ec1ce333435f1cc7150fd94bdb821718118677ec9fee698940d034cabe7563f332aa1ce1efd146e7498921"' }>
                                            <li class="link">
                                                <a href="components/FormWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link" >GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowModule.html" data-type="entity-link" >WorkflowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowModule-44a93ec7553fee847e2721ef3280712c6ee3945e3e9cf4686dca3109eeffc83094cc5504894a2c6935629445a5f38ee1a263efa1badf133bf07096c4ca22d1fe"' : 'data-target="#xs-components-links-module-WorkflowModule-44a93ec7553fee847e2721ef3280712c6ee3945e3e9cf4686dca3109eeffc83094cc5504894a2c6935629445a5f38ee1a263efa1badf133bf07096c4ca22d1fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-44a93ec7553fee847e2721ef3280712c6ee3945e3e9cf4686dca3109eeffc83094cc5504894a2c6935629445a5f38ee1a263efa1badf133bf07096c4ca22d1fe"' :
                                            'id="xs-components-links-module-WorkflowModule-44a93ec7553fee847e2721ef3280712c6ee3945e3e9cf4686dca3109eeffc83094cc5504894a2c6935629445a5f38ee1a263efa1badf133bf07096c4ca22d1fe"' }>
                                            <li class="link">
                                                <a href="components/WorkflowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkflowWidgetModule.html" data-type="entity-link" >WorkflowWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkflowWidgetModule-880527cdd01ba8fe03c56f8af00074b289f53f004f0d7735f55da3e76eced0d83a06e9639a0e67681692ca753beaae915daec9c76f112b29e02f245ee1bc53f5"' : 'data-target="#xs-components-links-module-WorkflowWidgetModule-880527cdd01ba8fe03c56f8af00074b289f53f004f0d7735f55da3e76eced0d83a06e9639a0e67681692ca753beaae915daec9c76f112b29e02f245ee1bc53f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowWidgetModule-880527cdd01ba8fe03c56f8af00074b289f53f004f0d7735f55da3e76eced0d83a06e9639a0e67681692ca753beaae915daec9c76f112b29e02f245ee1bc53f5"' :
                                            'id="xs-components-links-module-WorkflowWidgetModule-880527cdd01ba8fe03c56f8af00074b289f53f004f0d7735f55da3e76eced0d83a06e9639a0e67681692ca753beaae915daec9c76f112b29e02f245ee1bc53f5"' }>
                                            <li class="link">
                                                <a href="components/WorkflowWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="interfaces/Article.html" data-type="entity-link" >Article</a>
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