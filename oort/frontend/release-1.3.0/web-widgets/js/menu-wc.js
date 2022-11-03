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
                                <a href="modules/ApplicationModule.html" data-type="entity-link" >ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-99a25db0badffdf7ecd1c79a10f5cdba5f535da47b23b1627fbf661511fbe1e7bfef7b6820639fec20ea8187b6ac662d6f4982a613a9c426f158c7d39944cd98"' : 'data-target="#xs-components-links-module-ApplicationModule-99a25db0badffdf7ecd1c79a10f5cdba5f535da47b23b1627fbf661511fbe1e7bfef7b6820639fec20ea8187b6ac662d6f4982a613a9c426f158c7d39944cd98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-99a25db0badffdf7ecd1c79a10f5cdba5f535da47b23b1627fbf661511fbe1e7bfef7b6820639fec20ea8187b6ac662d6f4982a613a9c426f158c7d39944cd98"' :
                                            'id="xs-components-links-module-ApplicationModule-99a25db0badffdf7ecd1c79a10f5cdba5f535da47b23b1627fbf661511fbe1e7bfef7b6820639fec20ea8187b6ac662d6f4982a613a9c426f158c7d39944cd98"' }>
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
                                            'data-target="#components-links-module-ApplicationWidgetModule-b8fbe898a447623a216ba40087bd206f76c8541505c6f6cc5dd9e3c10636576ed04e9ddcf41264af449a70df3df1bb9a9595d9ebcd3eab79a5e90cea26a809c9"' : 'data-target="#xs-components-links-module-ApplicationWidgetModule-b8fbe898a447623a216ba40087bd206f76c8541505c6f6cc5dd9e3c10636576ed04e9ddcf41264af449a70df3df1bb9a9595d9ebcd3eab79a5e90cea26a809c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationWidgetModule-b8fbe898a447623a216ba40087bd206f76c8541505c6f6cc5dd9e3c10636576ed04e9ddcf41264af449a70df3df1bb9a9595d9ebcd3eab79a5e90cea26a809c9"' :
                                            'id="xs-components-links-module-ApplicationWidgetModule-b8fbe898a447623a216ba40087bd206f76c8541505c6f6cc5dd9e3c10636576ed04e9ddcf41264af449a70df3df1bb9a9595d9ebcd3eab79a5e90cea26a809c9"' }>
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
                                            'data-target="#components-links-module-AppModule-9a37e772068911ab893d4ac42f6db01de435af0d20dd63bc328e1679755c09abfefe08f0b30addf4327dfb7ad5976d8b1c64e30b0f8cbd486478673a629900ca"' : 'data-target="#xs-components-links-module-AppModule-9a37e772068911ab893d4ac42f6db01de435af0d20dd63bc328e1679755c09abfefe08f0b30addf4327dfb7ad5976d8b1c64e30b0f8cbd486478673a629900ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9a37e772068911ab893d4ac42f6db01de435af0d20dd63bc328e1679755c09abfefe08f0b30addf4327dfb7ad5976d8b1c64e30b0f8cbd486478673a629900ca"' :
                                            'id="xs-components-links-module-AppModule-9a37e772068911ab893d4ac42f6db01de435af0d20dd63bc328e1679755c09abfefe08f0b30addf4327dfb7ad5976d8b1c64e30b0f8cbd486478673a629900ca"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-26dc7a8bb9ef7ffcac13b835a25ad7b017c04a53c0c4c170ff24835bded500f4a455e4e67cde29d7c41dc85d1cd725262401ac1c4119b55de21c0cf332956e18"' : 'data-target="#xs-components-links-module-DashboardModule-26dc7a8bb9ef7ffcac13b835a25ad7b017c04a53c0c4c170ff24835bded500f4a455e4e67cde29d7c41dc85d1cd725262401ac1c4119b55de21c0cf332956e18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-26dc7a8bb9ef7ffcac13b835a25ad7b017c04a53c0c4c170ff24835bded500f4a455e4e67cde29d7c41dc85d1cd725262401ac1c4119b55de21c0cf332956e18"' :
                                            'id="xs-components-links-module-DashboardModule-26dc7a8bb9ef7ffcac13b835a25ad7b017c04a53c0c4c170ff24835bded500f4a455e4e67cde29d7c41dc85d1cd725262401ac1c4119b55de21c0cf332956e18"' }>
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
                                            'data-target="#components-links-module-DashboardWidgetModule-9a01488e178e567cc8b2cb78fd4f3771f711175df2bf9ee3c5c937c7ed27cde25f631e910f88d51b3d4537cc3e8fe87d110f8d2d36946cdc7cb740210338ce11"' : 'data-target="#xs-components-links-module-DashboardWidgetModule-9a01488e178e567cc8b2cb78fd4f3771f711175df2bf9ee3c5c937c7ed27cde25f631e910f88d51b3d4537cc3e8fe87d110f8d2d36946cdc7cb740210338ce11"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardWidgetModule-9a01488e178e567cc8b2cb78fd4f3771f711175df2bf9ee3c5c937c7ed27cde25f631e910f88d51b3d4537cc3e8fe87d110f8d2d36946cdc7cb740210338ce11"' :
                                            'id="xs-components-links-module-DashboardWidgetModule-9a01488e178e567cc8b2cb78fd4f3771f711175df2bf9ee3c5c937c7ed27cde25f631e910f88d51b3d4537cc3e8fe87d110f8d2d36946cdc7cb740210338ce11"' }>
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
                                            'data-target="#components-links-module-FormModule-970f2a8401939cda9b33fc865911093d851c774fd56fe7c627892518daf5fa7f1279f90251f1347c45f9e4942c974c82826ce2a980eb71a681b046b08479d23c"' : 'data-target="#xs-components-links-module-FormModule-970f2a8401939cda9b33fc865911093d851c774fd56fe7c627892518daf5fa7f1279f90251f1347c45f9e4942c974c82826ce2a980eb71a681b046b08479d23c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-970f2a8401939cda9b33fc865911093d851c774fd56fe7c627892518daf5fa7f1279f90251f1347c45f9e4942c974c82826ce2a980eb71a681b046b08479d23c"' :
                                            'id="xs-components-links-module-FormModule-970f2a8401939cda9b33fc865911093d851c774fd56fe7c627892518daf5fa7f1279f90251f1347c45f9e4942c974c82826ce2a980eb71a681b046b08479d23c"' }>
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
                                            'data-target="#components-links-module-FormWidgetModule-cf8d3fa746728784eeb9eeb5e93927bf34096af0ec2ff2e767ae2aa6df7cb68f0692a202fd9c7f4570bbdd6d4b430a1a776f3538144ee5475f3c880ce0662b60"' : 'data-target="#xs-components-links-module-FormWidgetModule-cf8d3fa746728784eeb9eeb5e93927bf34096af0ec2ff2e767ae2aa6df7cb68f0692a202fd9c7f4570bbdd6d4b430a1a776f3538144ee5475f3c880ce0662b60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormWidgetModule-cf8d3fa746728784eeb9eeb5e93927bf34096af0ec2ff2e767ae2aa6df7cb68f0692a202fd9c7f4570bbdd6d4b430a1a776f3538144ee5475f3c880ce0662b60"' :
                                            'id="xs-components-links-module-FormWidgetModule-cf8d3fa746728784eeb9eeb5e93927bf34096af0ec2ff2e767ae2aa6df7cb68f0692a202fd9c7f4570bbdd6d4b430a1a776f3538144ee5475f3c880ce0662b60"' }>
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
                                            'data-target="#components-links-module-WorkflowModule-d1c205aa9571206d542afaa3b3c9aee2cf4736e8070c2f540c7df7c87f38a35661344047bdd31e873f4d6cf5bcb186429df7d4dffc62cf579e3fb04a76b92b71"' : 'data-target="#xs-components-links-module-WorkflowModule-d1c205aa9571206d542afaa3b3c9aee2cf4736e8070c2f540c7df7c87f38a35661344047bdd31e873f4d6cf5bcb186429df7d4dffc62cf579e3fb04a76b92b71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowModule-d1c205aa9571206d542afaa3b3c9aee2cf4736e8070c2f540c7df7c87f38a35661344047bdd31e873f4d6cf5bcb186429df7d4dffc62cf579e3fb04a76b92b71"' :
                                            'id="xs-components-links-module-WorkflowModule-d1c205aa9571206d542afaa3b3c9aee2cf4736e8070c2f540c7df7c87f38a35661344047bdd31e873f4d6cf5bcb186429df7d4dffc62cf579e3fb04a76b92b71"' }>
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
                                            'data-target="#components-links-module-WorkflowWidgetModule-9e87448c8fee7de97f2a3421ef9401fc3736e49c02689ada8c8f71bff1e0407d9d7960e6482f50846e3e14ad47c595925df65aa09adf1b48c650d4795e951614"' : 'data-target="#xs-components-links-module-WorkflowWidgetModule-9e87448c8fee7de97f2a3421ef9401fc3736e49c02689ada8c8f71bff1e0407d9d7960e6482f50846e3e14ad47c595925df65aa09adf1b48c650d4795e951614"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkflowWidgetModule-9e87448c8fee7de97f2a3421ef9401fc3736e49c02689ada8c8f71bff1e0407d9d7960e6482f50846e3e14ad47c595925df65aa09adf1b48c650d4795e951614"' :
                                            'id="xs-components-links-module-WorkflowWidgetModule-9e87448c8fee7de97f2a3421ef9401fc3736e49c02689ada8c8f71bff1e0407d9d7960e6482f50846e3e14ad47c595925df65aa09adf1b48c650d4795e951614"' }>
                                            <li class="link">
                                                <a href="components/WorkflowWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkflowWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                    <a href="injectables/AppOverlayContainer.html" data-type="entity-link" >AppOverlayContainer</a>
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