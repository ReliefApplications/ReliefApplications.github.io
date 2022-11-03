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
                                <a href="modules/AddLayoutModule.html" data-type="entity-link" >AddLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddLayoutModule-c039eaaf3077a8f03ce5d82fbf8b990e26aa593bf73fdba115d64e172677b72d03fd2dea39dc3c0eb914c73bee83642417c6ad6a0af02d2bb2ce574ddb53df5f"' : 'data-target="#xs-components-links-module-AddLayoutModule-c039eaaf3077a8f03ce5d82fbf8b990e26aa593bf73fdba115d64e172677b72d03fd2dea39dc3c0eb914c73bee83642417c6ad6a0af02d2bb2ce574ddb53df5f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddLayoutModule-c039eaaf3077a8f03ce5d82fbf8b990e26aa593bf73fdba115d64e172677b72d03fd2dea39dc3c0eb914c73bee83642417c6ad6a0af02d2bb2ce574ddb53df5f"' :
                                            'id="xs-components-links-module-AddLayoutModule-c039eaaf3077a8f03ce5d82fbf8b990e26aa593bf73fdba115d64e172677b72d03fd2dea39dc3c0eb914c73bee83642417c6ad6a0af02d2bb2ce574ddb53df5f"' }>
                                            <li class="link">
                                                <a href="components/AddLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConfigDisplayGridFieldsModalModule.html" data-type="entity-link" >ConfigDisplayGridFieldsModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigDisplayGridFieldsModalModule-54c7e7506d5fb78057df48313679d84309799e73702165ba3e46b85c9c7bbcfe663a00e3d5f10a294edf37f4b437c2ddad22383075680ce5bde31a17b3d1a84a"' : 'data-target="#xs-components-links-module-ConfigDisplayGridFieldsModalModule-54c7e7506d5fb78057df48313679d84309799e73702165ba3e46b85c9c7bbcfe663a00e3d5f10a294edf37f4b437c2ddad22383075680ce5bde31a17b3d1a84a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigDisplayGridFieldsModalModule-54c7e7506d5fb78057df48313679d84309799e73702165ba3e46b85c9c7bbcfe663a00e3d5f10a294edf37f4b437c2ddad22383075680ce5bde31a17b3d1a84a"' :
                                            'id="xs-components-links-module-ConfigDisplayGridFieldsModalModule-54c7e7506d5fb78057df48313679d84309799e73702165ba3e46b85c9c7bbcfe663a00e3d5f10a294edf37f4b437c2ddad22383075680ce5bde31a17b3d1a84a"' }>
                                            <li class="link">
                                                <a href="components/ConfigDisplayGridFieldsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDisplayGridFieldsModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutsParametersModule.html" data-type="entity-link" >LayoutsParametersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutsParametersModule-dccd3f4f26810b1afbb6aed9e18f39c96a17816a8b2d304e836417d6f79daeabc055652b76b8891b24938628ccc5d5d4cdba936aafb723e8cf408bd5bef8205f"' : 'data-target="#xs-components-links-module-LayoutsParametersModule-dccd3f4f26810b1afbb6aed9e18f39c96a17816a8b2d304e836417d6f79daeabc055652b76b8891b24938628ccc5d5d4cdba936aafb723e8cf408bd5bef8205f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutsParametersModule-dccd3f4f26810b1afbb6aed9e18f39c96a17816a8b2d304e836417d6f79daeabc055652b76b8891b24938628ccc5d5d4cdba936aafb723e8cf408bd5bef8205f"' :
                                            'id="xs-components-links-module-LayoutsParametersModule-dccd3f4f26810b1afbb6aed9e18f39c96a17816a8b2d304e836417d6f79daeabc055652b76b8891b24938628ccc5d5d4cdba936aafb723e8cf408bd5bef8205f"' }>
                                            <li class="link">
                                                <a href="components/LayoutsParametersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutsParametersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeAccessModule.html" data-type="entity-link" >SafeAccessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeAccessModule-ee08e6395873d517a56162fe9fec0c2d35ebcd79af949c69bc6106f2a75412e1f1b34556f8d0b1eb41c4e7dd9cea580c91470787a5e313aeed0e0c6f6914dffe"' : 'data-target="#xs-components-links-module-SafeAccessModule-ee08e6395873d517a56162fe9fec0c2d35ebcd79af949c69bc6106f2a75412e1f1b34556f8d0b1eb41c4e7dd9cea580c91470787a5e313aeed0e0c6f6914dffe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAccessModule-ee08e6395873d517a56162fe9fec0c2d35ebcd79af949c69bc6106f2a75412e1f1b34556f8d0b1eb41c4e7dd9cea580c91470787a5e313aeed0e0c6f6914dffe"' :
                                            'id="xs-components-links-module-SafeAccessModule-ee08e6395873d517a56162fe9fec0c2d35ebcd79af949c69bc6106f2a75412e1f1b34556f8d0b1eb41c4e7dd9cea580c91470787a5e313aeed0e0c6f6914dffe"' }>
                                            <li class="link">
                                                <a href="components/SafeAccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAccessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeEditAccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditAccessComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeAddUserModule.html" data-type="entity-link" >SafeAddUserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeAddUserModule-c20bc5f79de4296b64da6a0db00fbfbbc0e7ced831f87effb92a330b9728285bb884a4dbe523a00444d29aee7118dce2b64b0953b77e6bd92fd065e1fa04b72f"' : 'data-target="#xs-components-links-module-SafeAddUserModule-c20bc5f79de4296b64da6a0db00fbfbbc0e7ced831f87effb92a330b9728285bb884a4dbe523a00444d29aee7118dce2b64b0953b77e6bd92fd065e1fa04b72f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAddUserModule-c20bc5f79de4296b64da6a0db00fbfbbc0e7ced831f87effb92a330b9728285bb884a4dbe523a00444d29aee7118dce2b64b0953b77e6bd92fd065e1fa04b72f"' :
                                            'id="xs-components-links-module-SafeAddUserModule-c20bc5f79de4296b64da6a0db00fbfbbc0e7ced831f87effb92a330b9728285bb884a4dbe523a00444d29aee7118dce2b64b0953b77e6bd92fd065e1fa04b72f"' }>
                                            <li class="link">
                                                <a href="components/SafeAddUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeAggregationBuilderModule.html" data-type="entity-link" >SafeAggregationBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeAggregationBuilderModule-68b693d7dc2f9a229b1703e905c8f6f3a28b68a1cdad6427ac25046546701b7e88f5b466c078181d7696015164c2897a2f6500e3ce3fb16eff8d2942767b50b9"' : 'data-target="#xs-components-links-module-SafeAggregationBuilderModule-68b693d7dc2f9a229b1703e905c8f6f3a28b68a1cdad6427ac25046546701b7e88f5b466c078181d7696015164c2897a2f6500e3ce3fb16eff8d2942767b50b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAggregationBuilderModule-68b693d7dc2f9a229b1703e905c8f6f3a28b68a1cdad6427ac25046546701b7e88f5b466c078181d7696015164c2897a2f6500e3ce3fb16eff8d2942767b50b9"' :
                                            'id="xs-components-links-module-SafeAggregationBuilderModule-68b693d7dc2f9a229b1703e905c8f6f3a28b68a1cdad6427ac25046546701b7e88f5b466c078181d7696015164c2897a2f6500e3ce3fb16eff8d2942767b50b9"' }>
                                            <li class="link">
                                                <a href="components/SafeAggregationBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAggregationBuilderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeApplicationDropdownModule.html" data-type="entity-link" >SafeApplicationDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeApplicationDropdownModule-35ccdb155593521ff9c16efe8c352a7e8e9647dc71a98269bfda9df2fa0686dd3d58e5f1011cb5ce8103cc6c44d2945d60c3783493f8805849fdc853fb226d30"' : 'data-target="#xs-components-links-module-SafeApplicationDropdownModule-35ccdb155593521ff9c16efe8c352a7e8e9647dc71a98269bfda9df2fa0686dd3d58e5f1011cb5ce8103cc6c44d2945d60c3783493f8805849fdc853fb226d30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeApplicationDropdownModule-35ccdb155593521ff9c16efe8c352a7e8e9647dc71a98269bfda9df2fa0686dd3d58e5f1011cb5ce8103cc6c44d2945d60c3783493f8805849fdc853fb226d30"' :
                                            'id="xs-components-links-module-SafeApplicationDropdownModule-35ccdb155593521ff9c16efe8c352a7e8e9647dc71a98269bfda9df2fa0686dd3d58e5f1011cb5ce8103cc6c44d2945d60c3783493f8805849fdc853fb226d30"' }>
                                            <li class="link">
                                                <a href="components/SafeApplicationDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeApplicationDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeApplicationsSummaryModule.html" data-type="entity-link" >SafeApplicationsSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeApplicationsSummaryModule-cd845e0e4137306f339330984bc281b8667c76f74742597debf6df984032ed77394bbd57bdb0f5af3193a8429947aeb146dac2bac8774b2097d24f80edfffff1"' : 'data-target="#xs-components-links-module-SafeApplicationsSummaryModule-cd845e0e4137306f339330984bc281b8667c76f74742597debf6df984032ed77394bbd57bdb0f5af3193a8429947aeb146dac2bac8774b2097d24f80edfffff1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeApplicationsSummaryModule-cd845e0e4137306f339330984bc281b8667c76f74742597debf6df984032ed77394bbd57bdb0f5af3193a8429947aeb146dac2bac8774b2097d24f80edfffff1"' :
                                            'id="xs-components-links-module-SafeApplicationsSummaryModule-cd845e0e4137306f339330984bc281b8667c76f74742597debf6df984032ed77394bbd57bdb0f5af3193a8429947aeb146dac2bac8774b2097d24f80edfffff1"' }>
                                            <li class="link">
                                                <a href="components/SafeAddApplicationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddApplicationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeApplicationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeApplicationSummaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeApplicationsSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeApplicationsSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeApplicationTemplatesModule.html" data-type="entity-link" >SafeApplicationTemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeApplicationTemplatesModule-714cea2c8fa743b4a003cdd58d15374163321cdcc322ab94e246ddf26a16d2d94469ef554e4eb3c11a34e799a4cde6544fe2e991ba800fb2da9a47337fc0722e"' : 'data-target="#xs-components-links-module-SafeApplicationTemplatesModule-714cea2c8fa743b4a003cdd58d15374163321cdcc322ab94e246ddf26a16d2d94469ef554e4eb3c11a34e799a4cde6544fe2e991ba800fb2da9a47337fc0722e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeApplicationTemplatesModule-714cea2c8fa743b4a003cdd58d15374163321cdcc322ab94e246ddf26a16d2d94469ef554e4eb3c11a34e799a4cde6544fe2e991ba800fb2da9a47337fc0722e"' :
                                            'id="xs-components-links-module-SafeApplicationTemplatesModule-714cea2c8fa743b4a003cdd58d15374163321cdcc322ab94e246ddf26a16d2d94469ef554e4eb3c11a34e799a4cde6544fe2e991ba800fb2da9a47337fc0722e"' }>
                                            <li class="link">
                                                <a href="components/SafeApplicationTemplatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeApplicationTemplatesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeApplicationTemplatesRoutingModule.html" data-type="entity-link" >SafeApplicationTemplatesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SafeArrayFilterMenuModule.html" data-type="entity-link" >SafeArrayFilterMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeArrayFilterMenuModule-e546e3c7748d06e19ee2d8cca7d3a81ff01fc9591683f71fa626c5810c9b9059295eb3721c6a65753b385c7f796638875480d6434d781fbc1808df44476ed0ae"' : 'data-target="#xs-components-links-module-SafeArrayFilterMenuModule-e546e3c7748d06e19ee2d8cca7d3a81ff01fc9591683f71fa626c5810c9b9059295eb3721c6a65753b385c7f796638875480d6434d781fbc1808df44476ed0ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeArrayFilterMenuModule-e546e3c7748d06e19ee2d8cca7d3a81ff01fc9591683f71fa626c5810c9b9059295eb3721c6a65753b385c7f796638875480d6434d781fbc1808df44476ed0ae"' :
                                            'id="xs-components-links-module-SafeArrayFilterMenuModule-e546e3c7748d06e19ee2d8cca7d3a81ff01fc9591683f71fa626c5810c9b9059295eb3721c6a65753b385c7f796638875480d6434d781fbc1808df44476ed0ae"' }>
                                            <li class="link">
                                                <a href="components/SafeArrayFilterMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeArrayFilterMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeArrayFilterModule.html" data-type="entity-link" >SafeArrayFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeArrayFilterModule-ef8dc397b8c8de01c4cf4d55822c22128180977792922f8c9ed15a0b28be525aee0cbf2431174f818e8956a5cc76971c9227ec25e4d7c092c0e66e30f28474ea"' : 'data-target="#xs-components-links-module-SafeArrayFilterModule-ef8dc397b8c8de01c4cf4d55822c22128180977792922f8c9ed15a0b28be525aee0cbf2431174f818e8956a5cc76971c9227ec25e4d7c092c0e66e30f28474ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeArrayFilterModule-ef8dc397b8c8de01c4cf4d55822c22128180977792922f8c9ed15a0b28be525aee0cbf2431174f818e8956a5cc76971c9227ec25e4d7c092c0e66e30f28474ea"' :
                                            'id="xs-components-links-module-SafeArrayFilterModule-ef8dc397b8c8de01c4cf4d55822c22128180977792922f8c9ed15a0b28be525aee0cbf2431174f818e8956a5cc76971c9227ec25e4d7c092c0e66e30f28474ea"' }>
                                            <li class="link">
                                                <a href="components/SafeArrayFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeArrayFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeAvatarModule.html" data-type="entity-link" >SafeAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeAvatarModule-9cebac6eb31e3634a199507558382ecc4719b69b3966b2db9ad76752d50998598a77c2433372df14cf4bdecee7b583e424a199464d8574baaa41dc269b0cf8fe"' : 'data-target="#xs-components-links-module-SafeAvatarModule-9cebac6eb31e3634a199507558382ecc4719b69b3966b2db9ad76752d50998598a77c2433372df14cf4bdecee7b583e424a199464d8574baaa41dc269b0cf8fe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAvatarModule-9cebac6eb31e3634a199507558382ecc4719b69b3966b2db9ad76752d50998598a77c2433372df14cf4bdecee7b583e424a199464d8574baaa41dc269b0cf8fe"' :
                                            'id="xs-components-links-module-SafeAvatarModule-9cebac6eb31e3634a199507558382ecc4719b69b3966b2db9ad76752d50998598a77c2433372df14cf4bdecee7b583e424a199464d8574baaa41dc269b0cf8fe"' }>
                                            <li class="link">
                                                <a href="components/SafeAvatarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAvatarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeBadgeModule.html" data-type="entity-link" >SafeBadgeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeBadgeModule-3aaea97effcb5c088fc31d66ba6cf08b7c16474c7c0a9acb33e78ef25317f18810eecf9680ea469eb82e7cd03729d11bd88e19e58cd85987f5d2e1fd8ac42ace"' : 'data-target="#xs-components-links-module-SafeBadgeModule-3aaea97effcb5c088fc31d66ba6cf08b7c16474c7c0a9acb33e78ef25317f18810eecf9680ea469eb82e7cd03729d11bd88e19e58cd85987f5d2e1fd8ac42ace"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeBadgeModule-3aaea97effcb5c088fc31d66ba6cf08b7c16474c7c0a9acb33e78ef25317f18810eecf9680ea469eb82e7cd03729d11bd88e19e58cd85987f5d2e1fd8ac42ace"' :
                                            'id="xs-components-links-module-SafeBadgeModule-3aaea97effcb5c088fc31d66ba6cf08b7c16474c7c0a9acb33e78ef25317f18810eecf9680ea469eb82e7cd03729d11bd88e19e58cd85987f5d2e1fd8ac42ace"' }>
                                            <li class="link">
                                                <a href="components/SafeBadgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeBadgeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeBarChartModule.html" data-type="entity-link" >SafeBarChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeBarChartModule-c579ae251d3e218d29308e9b3f652b2a16d2088df2dd028bbc98a75a863d9ed8ecc2cca35d167cbeefc95670f398f9fe10c44755b90e792f483c54d3504e20a2"' : 'data-target="#xs-components-links-module-SafeBarChartModule-c579ae251d3e218d29308e9b3f652b2a16d2088df2dd028bbc98a75a863d9ed8ecc2cca35d167cbeefc95670f398f9fe10c44755b90e792f483c54d3504e20a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeBarChartModule-c579ae251d3e218d29308e9b3f652b2a16d2088df2dd028bbc98a75a863d9ed8ecc2cca35d167cbeefc95670f398f9fe10c44755b90e792f483c54d3504e20a2"' :
                                            'id="xs-components-links-module-SafeBarChartModule-c579ae251d3e218d29308e9b3f652b2a16d2088df2dd028bbc98a75a863d9ed8ecc2cca35d167cbeefc95670f398f9fe10c44755b90e792f483c54d3504e20a2"' }>
                                            <li class="link">
                                                <a href="components/SafeBarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeBarChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeBreadcrumbModule.html" data-type="entity-link" >SafeBreadcrumbModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeBreadcrumbModule-81ab84534bfd61a28b466445d2455753b23839ab8d115b079100fcafd52668c6b23eb46180da6bd12f6a36f9a28e9469fcaa68a480104f4732a60847b8eb034a"' : 'data-target="#xs-components-links-module-SafeBreadcrumbModule-81ab84534bfd61a28b466445d2455753b23839ab8d115b079100fcafd52668c6b23eb46180da6bd12f6a36f9a28e9469fcaa68a480104f4732a60847b8eb034a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeBreadcrumbModule-81ab84534bfd61a28b466445d2455753b23839ab8d115b079100fcafd52668c6b23eb46180da6bd12f6a36f9a28e9469fcaa68a480104f4732a60847b8eb034a"' :
                                            'id="xs-components-links-module-SafeBreadcrumbModule-81ab84534bfd61a28b466445d2455753b23839ab8d115b079100fcafd52668c6b23eb46180da6bd12f6a36f9a28e9469fcaa68a480104f4732a60847b8eb034a"' }>
                                            <li class="link">
                                                <a href="components/SafeBreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeBreadcrumbComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeButtonModule.html" data-type="entity-link" >SafeButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeButtonModule-771bd812df54316c857460dddec6ac4a78b8d0e4f01597fd12395c15e77b91855ffea2d28f58de24676a7397fa7704cf8198eaeb399a2bd20da787b8dddf4905"' : 'data-target="#xs-components-links-module-SafeButtonModule-771bd812df54316c857460dddec6ac4a78b8d0e4f01597fd12395c15e77b91855ffea2d28f58de24676a7397fa7704cf8198eaeb399a2bd20da787b8dddf4905"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeButtonModule-771bd812df54316c857460dddec6ac4a78b8d0e4f01597fd12395c15e77b91855ffea2d28f58de24676a7397fa7704cf8198eaeb399a2bd20da787b8dddf4905"' :
                                            'id="xs-components-links-module-SafeButtonModule-771bd812df54316c857460dddec6ac4a78b8d0e4f01597fd12395c15e77b91855ffea2d28f58de24676a7397fa7704cf8198eaeb399a2bd20da787b8dddf4905"' }>
                                            <li class="link">
                                                <a href="components/SafeButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeChartModule.html" data-type="entity-link" >SafeChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeChartModule-2028d483298ae04a7e205d844856eef78f16b7a61125dd03b4351003eb172140735b210937184ba94af10603f9430273132aead78cd3fb14197bc3051105e88a"' : 'data-target="#xs-components-links-module-SafeChartModule-2028d483298ae04a7e205d844856eef78f16b7a61125dd03b4351003eb172140735b210937184ba94af10603f9430273132aead78cd3fb14197bc3051105e88a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChartModule-2028d483298ae04a7e205d844856eef78f16b7a61125dd03b4351003eb172140735b210937184ba94af10603f9430273132aead78cd3fb14197bc3051105e88a"' :
                                            'id="xs-components-links-module-SafeChartModule-2028d483298ae04a7e205d844856eef78f16b7a61125dd03b4351003eb172140735b210937184ba94af10603f9430273132aead78cd3fb14197bc3051105e88a"' }>
                                            <li class="link">
                                                <a href="components/SafeChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeChartSettingsModule.html" data-type="entity-link" >SafeChartSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeChartSettingsModule-44f4f09f571651c90cccea6b0c6a4de5944fb607ee994e2987c8d5ff1b117aa8794b380e145e883799b60e5349b65ec8a7df0c9b066e960e69f53af82d135fa0"' : 'data-target="#xs-components-links-module-SafeChartSettingsModule-44f4f09f571651c90cccea6b0c6a4de5944fb607ee994e2987c8d5ff1b117aa8794b380e145e883799b60e5349b65ec8a7df0c9b066e960e69f53af82d135fa0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChartSettingsModule-44f4f09f571651c90cccea6b0c6a4de5944fb607ee994e2987c8d5ff1b117aa8794b380e145e883799b60e5349b65ec8a7df0c9b066e960e69f53af82d135fa0"' :
                                            'id="xs-components-links-module-SafeChartSettingsModule-44f4f09f571651c90cccea6b0c6a4de5944fb607ee994e2987c8d5ff1b117aa8794b380e145e883799b60e5349b65ec8a7df0c9b066e960e69f53af82d135fa0"' }>
                                            <li class="link">
                                                <a href="components/SafeChartSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeChartSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeCheckboxTreeModule.html" data-type="entity-link" >SafeCheckboxTreeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeCheckboxTreeModule-0dc43ac9adc6f38dab9c2375a0c66de0c60ccb4ac9db73bfedf65dbc8114cdade7d504ef5fa7761255d3a9a2214cba403dba992f781cd11506279a620e759d47"' : 'data-target="#xs-components-links-module-SafeCheckboxTreeModule-0dc43ac9adc6f38dab9c2375a0c66de0c60ccb4ac9db73bfedf65dbc8114cdade7d504ef5fa7761255d3a9a2214cba403dba992f781cd11506279a620e759d47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeCheckboxTreeModule-0dc43ac9adc6f38dab9c2375a0c66de0c60ccb4ac9db73bfedf65dbc8114cdade7d504ef5fa7761255d3a9a2214cba403dba992f781cd11506279a620e759d47"' :
                                            'id="xs-components-links-module-SafeCheckboxTreeModule-0dc43ac9adc6f38dab9c2375a0c66de0c60ccb4ac9db73bfedf65dbc8114cdade7d504ef5fa7761255d3a9a2214cba403dba992f781cd11506279a620e759d47"' }>
                                            <li class="link">
                                                <a href="components/SafeCheckboxTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeCheckboxTreeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeChooseRecordModalModule.html" data-type="entity-link" >SafeChooseRecordModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeChooseRecordModalModule-34f208362fcb9005b66e6117bad62007bbef700659dc8eb6a2b3fc7086751387e96dc134410cab47a4aea2baa211fce4616dc3b6952331c043a3f14ac4e05f2c"' : 'data-target="#xs-components-links-module-SafeChooseRecordModalModule-34f208362fcb9005b66e6117bad62007bbef700659dc8eb6a2b3fc7086751387e96dc134410cab47a4aea2baa211fce4616dc3b6952331c043a3f14ac4e05f2c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChooseRecordModalModule-34f208362fcb9005b66e6117bad62007bbef700659dc8eb6a2b3fc7086751387e96dc134410cab47a4aea2baa211fce4616dc3b6952331c043a3f14ac4e05f2c"' :
                                            'id="xs-components-links-module-SafeChooseRecordModalModule-34f208362fcb9005b66e6117bad62007bbef700659dc8eb6a2b3fc7086751387e96dc134410cab47a4aea2baa211fce4616dc3b6952331c043a3f14ac4e05f2c"' }>
                                            <li class="link">
                                                <a href="components/SafeChooseRecordModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeChooseRecordModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeColumnChartModule.html" data-type="entity-link" >SafeColumnChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeColumnChartModule-07ddb7cf56c1d6240dfe8f3e326a0734406132398f339ff7e14fc33aaa1a71a1cf4f4cb263990ba04c8f438a2a1246450d536891f25ccd0d2c7d83327f722854"' : 'data-target="#xs-components-links-module-SafeColumnChartModule-07ddb7cf56c1d6240dfe8f3e326a0734406132398f339ff7e14fc33aaa1a71a1cf4f4cb263990ba04c8f438a2a1246450d536891f25ccd0d2c7d83327f722854"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeColumnChartModule-07ddb7cf56c1d6240dfe8f3e326a0734406132398f339ff7e14fc33aaa1a71a1cf4f4cb263990ba04c8f438a2a1246450d536891f25ccd0d2c7d83327f722854"' :
                                            'id="xs-components-links-module-SafeColumnChartModule-07ddb7cf56c1d6240dfe8f3e326a0734406132398f339ff7e14fc33aaa1a71a1cf4f4cb263990ba04c8f438a2a1246450d536891f25ccd0d2c7d83327f722854"' }>
                                            <li class="link">
                                                <a href="components/SafeColumnChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeColumnChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeConfirmModalModule.html" data-type="entity-link" >SafeConfirmModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeConfirmModalModule-3cbbeb3612267d7b9ae153dbc2b61ad2012ce85d41d5ac89df30d815b2370a566fabac756b3d9ef50c3066ed28df57819b95c18a1bfc33cb3d0a5ab4a85a2f8d"' : 'data-target="#xs-components-links-module-SafeConfirmModalModule-3cbbeb3612267d7b9ae153dbc2b61ad2012ce85d41d5ac89df30d815b2370a566fabac756b3d9ef50c3066ed28df57819b95c18a1bfc33cb3d0a5ab4a85a2f8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeConfirmModalModule-3cbbeb3612267d7b9ae153dbc2b61ad2012ce85d41d5ac89df30d815b2370a566fabac756b3d9ef50c3066ed28df57819b95c18a1bfc33cb3d0a5ab4a85a2f8d"' :
                                            'id="xs-components-links-module-SafeConfirmModalModule-3cbbeb3612267d7b9ae153dbc2b61ad2012ce85d41d5ac89df30d815b2370a566fabac756b3d9ef50c3066ed28df57819b95c18a1bfc33cb3d0a5ab4a85a2f8d"' }>
                                            <li class="link">
                                                <a href="components/SafeConfirmModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeConfirmModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeContentChoiceModule.html" data-type="entity-link" >SafeContentChoiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeContentChoiceModule-f88d842e7ad798c5541cbb28fbd24b14cb51ad259084088f63b1326149c263df104c3c5396f67956efedb64ee1c27a3cd62f97c9fb8df684c212b3ff2ec439f6"' : 'data-target="#xs-components-links-module-SafeContentChoiceModule-f88d842e7ad798c5541cbb28fbd24b14cb51ad259084088f63b1326149c263df104c3c5396f67956efedb64ee1c27a3cd62f97c9fb8df684c212b3ff2ec439f6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeContentChoiceModule-f88d842e7ad798c5541cbb28fbd24b14cb51ad259084088f63b1326149c263df104c3c5396f67956efedb64ee1c27a3cd62f97c9fb8df684c212b3ff2ec439f6"' :
                                            'id="xs-components-links-module-SafeContentChoiceModule-f88d842e7ad798c5541cbb28fbd24b14cb51ad259084088f63b1326149c263df104c3c5396f67956efedb64ee1c27a3cd62f97c9fb8df684c212b3ff2ec439f6"' }>
                                            <li class="link">
                                                <a href="components/SafeContentChoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeContentChoiceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeConvertModalModule.html" data-type="entity-link" >SafeConvertModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeConvertModalModule-511fca082a8c9b1efed2bf7bc4176f2c8345b144a75c86b01b0edb1845b590441191a1620c54c462c320c584dbc04043f0b1e46eb092b2d865981ed10c616ea9"' : 'data-target="#xs-components-links-module-SafeConvertModalModule-511fca082a8c9b1efed2bf7bc4176f2c8345b144a75c86b01b0edb1845b590441191a1620c54c462c320c584dbc04043f0b1e46eb092b2d865981ed10c616ea9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeConvertModalModule-511fca082a8c9b1efed2bf7bc4176f2c8345b144a75c86b01b0edb1845b590441191a1620c54c462c320c584dbc04043f0b1e46eb092b2d865981ed10c616ea9"' :
                                            'id="xs-components-links-module-SafeConvertModalModule-511fca082a8c9b1efed2bf7bc4176f2c8345b144a75c86b01b0edb1845b590441191a1620c54c462c320c584dbc04043f0b1e46eb092b2d865981ed10c616ea9"' }>
                                            <li class="link">
                                                <a href="components/SafeConvertModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeConvertModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeCoreGridModule.html" data-type="entity-link" >SafeCoreGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeCoreGridModule-d7c35db81271b5a523ce5cf49fc4178616067bfdd54500265ca2b411dc8bdfe749e84bfc8fc0eeb3df42cf2e2e5a0087961f2a15d78aef8c45ca8521b5cd4bd5"' : 'data-target="#xs-components-links-module-SafeCoreGridModule-d7c35db81271b5a523ce5cf49fc4178616067bfdd54500265ca2b411dc8bdfe749e84bfc8fc0eeb3df42cf2e2e5a0087961f2a15d78aef8c45ca8521b5cd4bd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeCoreGridModule-d7c35db81271b5a523ce5cf49fc4178616067bfdd54500265ca2b411dc8bdfe749e84bfc8fc0eeb3df42cf2e2e5a0087961f2a15d78aef8c45ca8521b5cd4bd5"' :
                                            'id="xs-components-links-module-SafeCoreGridModule-d7c35db81271b5a523ce5cf49fc4178616067bfdd54500265ca2b411dc8bdfe749e84bfc8fc0eeb3df42cf2e2e5a0087961f2a15d78aef8c45ca8521b5cd4bd5"' }>
                                            <li class="link">
                                                <a href="components/SafeCoreGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeCoreGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeDonutChartModule.html" data-type="entity-link" >SafeDonutChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeDonutChartModule-63c461623b924741c60feecb5a99eb73b06e82f6897b1d6496282fd80d5610ef223cecba25a5f447d80a5b2eb7153d492877fba0a2216c9a87888552bfcad246"' : 'data-target="#xs-components-links-module-SafeDonutChartModule-63c461623b924741c60feecb5a99eb73b06e82f6897b1d6496282fd80d5610ef223cecba25a5f447d80a5b2eb7153d492877fba0a2216c9a87888552bfcad246"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDonutChartModule-63c461623b924741c60feecb5a99eb73b06e82f6897b1d6496282fd80d5610ef223cecba25a5f447d80a5b2eb7153d492877fba0a2216c9a87888552bfcad246"' :
                                            'id="xs-components-links-module-SafeDonutChartModule-63c461623b924741c60feecb5a99eb73b06e82f6897b1d6496282fd80d5610ef223cecba25a5f447d80a5b2eb7153d492877fba0a2216c9a87888552bfcad246"' }>
                                            <li class="link">
                                                <a href="components/SafeDonutChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeDonutChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeDropdownFilterMenuModule.html" data-type="entity-link" >SafeDropdownFilterMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeDropdownFilterMenuModule-9d50906b893f662be89b27e11e13ada2b52282fe04f7b61948cc2a8a046e93a67ea29d18c3ce2c4c53b937214294828b4333dac2b7e0040eb4cea5399fda71fd"' : 'data-target="#xs-components-links-module-SafeDropdownFilterMenuModule-9d50906b893f662be89b27e11e13ada2b52282fe04f7b61948cc2a8a046e93a67ea29d18c3ce2c4c53b937214294828b4333dac2b7e0040eb4cea5399fda71fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDropdownFilterMenuModule-9d50906b893f662be89b27e11e13ada2b52282fe04f7b61948cc2a8a046e93a67ea29d18c3ce2c4c53b937214294828b4333dac2b7e0040eb4cea5399fda71fd"' :
                                            'id="xs-components-links-module-SafeDropdownFilterMenuModule-9d50906b893f662be89b27e11e13ada2b52282fe04f7b61948cc2a8a046e93a67ea29d18c3ce2c4c53b937214294828b4333dac2b7e0040eb4cea5399fda71fd"' }>
                                            <li class="link">
                                                <a href="components/SafeDropdownFilterMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeDropdownFilterMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeDropdownFilterModule.html" data-type="entity-link" >SafeDropdownFilterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeDropdownFilterModule-c29ac420d4c8003de1c6ceec01eba4bb622b76c2a0968e573c2d53232503834e5c0ed03a5fd380236471309794623a1afba1b65121fec41bc807e3949f5436b5"' : 'data-target="#xs-components-links-module-SafeDropdownFilterModule-c29ac420d4c8003de1c6ceec01eba4bb622b76c2a0968e573c2d53232503834e5c0ed03a5fd380236471309794623a1afba1b65121fec41bc807e3949f5436b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDropdownFilterModule-c29ac420d4c8003de1c6ceec01eba4bb622b76c2a0968e573c2d53232503834e5c0ed03a5fd380236471309794623a1afba1b65121fec41bc807e3949f5436b5"' :
                                            'id="xs-components-links-module-SafeDropdownFilterModule-c29ac420d4c8003de1c6ceec01eba4bb622b76c2a0968e573c2d53232503834e5c0ed03a5fd380236471309794623a1afba1b65121fec41bc807e3949f5436b5"' }>
                                            <li class="link">
                                                <a href="components/SafeDropdownFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeDropdownFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeEditorModule.html" data-type="entity-link" >SafeEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeEditorModule-ee3b05a9fad80f0688d202568b0239b7798b14c9232c24fee830856fca6afba8593abb7cdae509c3a138374ed23e854919f59a424dcafdca23c9cd1b26c0174c"' : 'data-target="#xs-components-links-module-SafeEditorModule-ee3b05a9fad80f0688d202568b0239b7798b14c9232c24fee830856fca6afba8593abb7cdae509c3a138374ed23e854919f59a424dcafdca23c9cd1b26c0174c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEditorModule-ee3b05a9fad80f0688d202568b0239b7798b14c9232c24fee830856fca6afba8593abb7cdae509c3a138374ed23e854919f59a424dcafdca23c9cd1b26c0174c"' :
                                            'id="xs-components-links-module-SafeEditorModule-ee3b05a9fad80f0688d202568b0239b7798b14c9232c24fee830856fca6afba8593abb7cdae509c3a138374ed23e854919f59a424dcafdca23c9cd1b26c0174c"' }>
                                            <li class="link">
                                                <a href="components/SafeEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeEditorSettingsModule.html" data-type="entity-link" >SafeEditorSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeEditorSettingsModule-e3b7be1c49bac2f004636e2b25ccf091a91dc98a5805af0951aecf44686f2b2a113170955389f07c080e9bb010ae8b916a10153783f725a6ce9efe4299c95334"' : 'data-target="#xs-components-links-module-SafeEditorSettingsModule-e3b7be1c49bac2f004636e2b25ccf091a91dc98a5805af0951aecf44686f2b2a113170955389f07c080e9bb010ae8b916a10153783f725a6ce9efe4299c95334"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEditorSettingsModule-e3b7be1c49bac2f004636e2b25ccf091a91dc98a5805af0951aecf44686f2b2a113170955389f07c080e9bb010ae8b916a10153783f725a6ce9efe4299c95334"' :
                                            'id="xs-components-links-module-SafeEditorSettingsModule-e3b7be1c49bac2f004636e2b25ccf091a91dc98a5805af0951aecf44686f2b2a113170955389f07c080e9bb010ae8b916a10153783f725a6ce9efe4299c95334"' }>
                                            <li class="link">
                                                <a href="components/SafeEditorSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditorSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeEmailPreviewModule.html" data-type="entity-link" >SafeEmailPreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeEmailPreviewModule-4a6f75dc1556283807051950d3dd0450c7494a4cf861e3ce2541fb420384213b8377a06b51966102e75a1ecc043f639ae4c11115993f19399d3b75b48abe6e84"' : 'data-target="#xs-components-links-module-SafeEmailPreviewModule-4a6f75dc1556283807051950d3dd0450c7494a4cf861e3ce2541fb420384213b8377a06b51966102e75a1ecc043f639ae4c11115993f19399d3b75b48abe6e84"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEmailPreviewModule-4a6f75dc1556283807051950d3dd0450c7494a4cf861e3ce2541fb420384213b8377a06b51966102e75a1ecc043f639ae4c11115993f19399d3b75b48abe6e84"' :
                                            'id="xs-components-links-module-SafeEmailPreviewModule-4a6f75dc1556283807051950d3dd0450c7494a4cf861e3ce2541fb420384213b8377a06b51966102e75a1ecc043f639ae4c11115993f19399d3b75b48abe6e84"' }>
                                            <li class="link">
                                                <a href="components/SafeEmailPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEmailPreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeExpandedCommentModule.html" data-type="entity-link" >SafeExpandedCommentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeExpandedCommentModule-cca55012c5c39060563edaa6ba1212307a24ae61e2a1d15498262d4101ca4982498f0596db43c5575a23132544d11341aee8da85135f85287b461ecc6a90f7f7"' : 'data-target="#xs-components-links-module-SafeExpandedCommentModule-cca55012c5c39060563edaa6ba1212307a24ae61e2a1d15498262d4101ca4982498f0596db43c5575a23132544d11341aee8da85135f85287b461ecc6a90f7f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeExpandedCommentModule-cca55012c5c39060563edaa6ba1212307a24ae61e2a1d15498262d4101ca4982498f0596db43c5575a23132544d11341aee8da85135f85287b461ecc6a90f7f7"' :
                                            'id="xs-components-links-module-SafeExpandedCommentModule-cca55012c5c39060563edaa6ba1212307a24ae61e2a1d15498262d4101ca4982498f0596db43c5575a23132544d11341aee8da85135f85287b461ecc6a90f7f7"' }>
                                            <li class="link">
                                                <a href="components/SafeExpandedCommentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeExpandedCommentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeExportModule.html" data-type="entity-link" >SafeExportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeExportModule-71dd6c3473a7ec87f098d5677774cd74cd1b0f1d594f21d9cc34aa33e1307ef0fbc312feba56df36967f08b8c4509e597a346d73b84816c42dc04ae272b2e353"' : 'data-target="#xs-components-links-module-SafeExportModule-71dd6c3473a7ec87f098d5677774cd74cd1b0f1d594f21d9cc34aa33e1307ef0fbc312feba56df36967f08b8c4509e597a346d73b84816c42dc04ae272b2e353"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeExportModule-71dd6c3473a7ec87f098d5677774cd74cd1b0f1d594f21d9cc34aa33e1307ef0fbc312feba56df36967f08b8c4509e597a346d73b84816c42dc04ae272b2e353"' :
                                            'id="xs-components-links-module-SafeExportModule-71dd6c3473a7ec87f098d5677774cd74cd1b0f1d594f21d9cc34aa33e1307ef0fbc312feba56df36967f08b8c4509e597a346d73b84816c42dc04ae272b2e353"' }>
                                            <li class="link">
                                                <a href="components/SafeExportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeExportComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeFormBuilderModule.html" data-type="entity-link" >SafeFormBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeFormBuilderModule-86885befab82210dec057c9db68c9f8d41ea9b05c814f03f43bc9db3737b35b61dc1fed184ba642ce747c5280253cff982b220f7b7cca92e7459d4cc82fc1a08"' : 'data-target="#xs-components-links-module-SafeFormBuilderModule-86885befab82210dec057c9db68c9f8d41ea9b05c814f03f43bc9db3737b35b61dc1fed184ba642ce747c5280253cff982b220f7b7cca92e7459d4cc82fc1a08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormBuilderModule-86885befab82210dec057c9db68c9f8d41ea9b05c814f03f43bc9db3737b35b61dc1fed184ba642ce747c5280253cff982b220f7b7cca92e7459d4cc82fc1a08"' :
                                            'id="xs-components-links-module-SafeFormBuilderModule-86885befab82210dec057c9db68c9f8d41ea9b05c814f03f43bc9db3737b35b61dc1fed184ba642ce747c5280253cff982b220f7b7cca92e7459d4cc82fc1a08"' }>
                                            <li class="link">
                                                <a href="components/SafeFormBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFormBuilderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeFormModalModule.html" data-type="entity-link" >SafeFormModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeFormModalModule-b60bb4dbeec313d866e6c74216cd274cdb94d4151488f978f730ba2ca82d588820428aede11bd4a9e19fbd73b3309da5388e3abec4070ddffb8954132972337a"' : 'data-target="#xs-components-links-module-SafeFormModalModule-b60bb4dbeec313d866e6c74216cd274cdb94d4151488f978f730ba2ca82d588820428aede11bd4a9e19fbd73b3309da5388e3abec4070ddffb8954132972337a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormModalModule-b60bb4dbeec313d866e6c74216cd274cdb94d4151488f978f730ba2ca82d588820428aede11bd4a9e19fbd73b3309da5388e3abec4070ddffb8954132972337a"' :
                                            'id="xs-components-links-module-SafeFormModalModule-b60bb4dbeec313d866e6c74216cd274cdb94d4151488f978f730ba2ca82d588820428aede11bd4a9e19fbd73b3309da5388e3abec4070ddffb8954132972337a"' }>
                                            <li class="link">
                                                <a href="components/SafeFormModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFormModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeFormModule.html" data-type="entity-link" >SafeFormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeFormModule-66471e9a899a2880c96279fe0c0f099ae89cae2feb4c6886cea11a7b1bdcfbe7829e6f4b5e806c0320ff416831c6e8f16b20c42bd3338d501a3a86d4b38a6ff1"' : 'data-target="#xs-components-links-module-SafeFormModule-66471e9a899a2880c96279fe0c0f099ae89cae2feb4c6886cea11a7b1bdcfbe7829e6f4b5e806c0320ff416831c6e8f16b20c42bd3338d501a3a86d4b38a6ff1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormModule-66471e9a899a2880c96279fe0c0f099ae89cae2feb4c6886cea11a7b1bdcfbe7829e6f4b5e806c0320ff416831c6e8f16b20c42bd3338d501a3a86d4b38a6ff1"' :
                                            'id="xs-components-links-module-SafeFormModule-66471e9a899a2880c96279fe0c0f099ae89cae2feb4c6886cea11a7b1bdcfbe7829e6f4b5e806c0320ff416831c6e8f16b20c42bd3338d501a3a86d4b38a6ff1"' }>
                                            <li class="link">
                                                <a href="components/SafeFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeFormsDropdownModule.html" data-type="entity-link" >SafeFormsDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeFormsDropdownModule-26c7dd59666cd00641a7b0af9d51b0671505ce661e0cbe3379235962a60cf5fda9a1129a789f5531d70e87a92e64dc5e782e100b48a5e39b3ccbc6e2e6e45bd1"' : 'data-target="#xs-components-links-module-SafeFormsDropdownModule-26c7dd59666cd00641a7b0af9d51b0671505ce661e0cbe3379235962a60cf5fda9a1129a789f5531d70e87a92e64dc5e782e100b48a5e39b3ccbc6e2e6e45bd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormsDropdownModule-26c7dd59666cd00641a7b0af9d51b0671505ce661e0cbe3379235962a60cf5fda9a1129a789f5531d70e87a92e64dc5e782e100b48a5e39b3ccbc6e2e6e45bd1"' :
                                            'id="xs-components-links-module-SafeFormsDropdownModule-26c7dd59666cd00641a7b0af9d51b0671505ce661e0cbe3379235962a60cf5fda9a1129a789f5531d70e87a92e64dc5e782e100b48a5e39b3ccbc6e2e6e45bd1"' }>
                                            <li class="link">
                                                <a href="components/SafeFormsDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFormsDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridModule.html" data-type="entity-link" >SafeGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridModule-9a3928a024a718e2c345b7fe694d6e42695ce8e5a70105242aa477e3bc946f4bd6d0d28f8d68e3b9b173223916f5d934b63e2107115b3ce9b3e78fddf529b8ff"' : 'data-target="#xs-components-links-module-SafeGridModule-9a3928a024a718e2c345b7fe694d6e42695ce8e5a70105242aa477e3bc946f4bd6d0d28f8d68e3b9b173223916f5d934b63e2107115b3ce9b3e78fddf529b8ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridModule-9a3928a024a718e2c345b7fe694d6e42695ce8e5a70105242aa477e3bc946f4bd6d0d28f8d68e3b9b173223916f5d934b63e2107115b3ce9b3e78fddf529b8ff"' :
                                            'id="xs-components-links-module-SafeGridModule-9a3928a024a718e2c345b7fe694d6e42695ce8e5a70105242aa477e3bc946f4bd6d0d28f8d68e3b9b173223916f5d934b63e2107115b3ce9b3e78fddf529b8ff"' }>
                                            <li class="link">
                                                <a href="components/SafeGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridRowActionsModule.html" data-type="entity-link" >SafeGridRowActionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridRowActionsModule-f535cce64ff64880e9cb82243d1736a5bb938b7d2705f29443bcbb1e8f6cb02259c7a70907197e99521165a7aabe3aa1605f7bd6e7548a4b1085b4581005d272"' : 'data-target="#xs-components-links-module-SafeGridRowActionsModule-f535cce64ff64880e9cb82243d1736a5bb938b7d2705f29443bcbb1e8f6cb02259c7a70907197e99521165a7aabe3aa1605f7bd6e7548a4b1085b4581005d272"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridRowActionsModule-f535cce64ff64880e9cb82243d1736a5bb938b7d2705f29443bcbb1e8f6cb02259c7a70907197e99521165a7aabe3aa1605f7bd6e7548a4b1085b4581005d272"' :
                                            'id="xs-components-links-module-SafeGridRowActionsModule-f535cce64ff64880e9cb82243d1736a5bb938b7d2705f29443bcbb1e8f6cb02259c7a70907197e99521165a7aabe3aa1605f7bd6e7548a4b1085b4581005d272"' }>
                                            <li class="link">
                                                <a href="components/SafeGridRowActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGridRowActionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridSettingsModule.html" data-type="entity-link" >SafeGridSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridSettingsModule-4c321172cdb8ef789156507923f245d59e6bd5b9a6f9fdc82612cba4c69ec2a7e5840e76683e8a9a9d79a157f6690f1038862c69c93a34152d479d79c71f4e71"' : 'data-target="#xs-components-links-module-SafeGridSettingsModule-4c321172cdb8ef789156507923f245d59e6bd5b9a6f9fdc82612cba4c69ec2a7e5840e76683e8a9a9d79a157f6690f1038862c69c93a34152d479d79c71f4e71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridSettingsModule-4c321172cdb8ef789156507923f245d59e6bd5b9a6f9fdc82612cba4c69ec2a7e5840e76683e8a9a9d79a157f6690f1038862c69c93a34152d479d79c71f4e71"' :
                                            'id="xs-components-links-module-SafeGridSettingsModule-4c321172cdb8ef789156507923f245d59e6bd5b9a6f9fdc82612cba4c69ec2a7e5840e76683e8a9a9d79a157f6690f1038862c69c93a34152d479d79c71f4e71"' }>
                                            <li class="link">
                                                <a href="components/SafeFloatingButtonSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFloatingButtonSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeGridSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGridSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridToolbarModule.html" data-type="entity-link" >SafeGridToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridToolbarModule-68fdfe551996fce6735f8813cf7273efaabe7a6da9318dead50205ee9e3bb8e76aab3a31019cefe0d0fed6edcac2dc82798d6049d7682b7556bcf0c6dc6b0526"' : 'data-target="#xs-components-links-module-SafeGridToolbarModule-68fdfe551996fce6735f8813cf7273efaabe7a6da9318dead50205ee9e3bb8e76aab3a31019cefe0d0fed6edcac2dc82798d6049d7682b7556bcf0c6dc6b0526"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridToolbarModule-68fdfe551996fce6735f8813cf7273efaabe7a6da9318dead50205ee9e3bb8e76aab3a31019cefe0d0fed6edcac2dc82798d6049d7682b7556bcf0c6dc6b0526"' :
                                            'id="xs-components-links-module-SafeGridToolbarModule-68fdfe551996fce6735f8813cf7273efaabe7a6da9318dead50205ee9e3bb8e76aab3a31019cefe0d0fed6edcac2dc82798d6049d7682b7556bcf0c6dc6b0526"' }>
                                            <li class="link">
                                                <a href="components/SafeGridToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGridToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridWidgetModule.html" data-type="entity-link" >SafeGridWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridWidgetModule-2e82acc1e8541cfa79dbbc8f77b63f24b1597002007b13509d8b83ee4f136dd9810f9103fccbac007b646d8bd1d86682d50792e7d1c1b2450dc632e533d1cae7"' : 'data-target="#xs-components-links-module-SafeGridWidgetModule-2e82acc1e8541cfa79dbbc8f77b63f24b1597002007b13509d8b83ee4f136dd9810f9103fccbac007b646d8bd1d86682d50792e7d1c1b2450dc632e533d1cae7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridWidgetModule-2e82acc1e8541cfa79dbbc8f77b63f24b1597002007b13509d8b83ee4f136dd9810f9103fccbac007b646d8bd1d86682d50792e7d1c1b2450dc632e533d1cae7"' :
                                            'id="xs-components-links-module-SafeGridWidgetModule-2e82acc1e8541cfa79dbbc8f77b63f24b1597002007b13509d8b83ee4f136dd9810f9103fccbac007b646d8bd1d86682d50792e7d1c1b2450dc632e533d1cae7"' }>
                                            <li class="link">
                                                <a href="components/EmailTemplateModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailTemplateModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeGridWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGridWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeIconModule.html" data-type="entity-link" >SafeIconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeIconModule-24a03bb4c6a30af225b7fa7ce8ccfe06d767e74a59214f5352def18f4ba9fa1db38dafd284c1702e2b565b598e5b44429eb3dfce0e4405229dd87689a0e5d7ed"' : 'data-target="#xs-components-links-module-SafeIconModule-24a03bb4c6a30af225b7fa7ce8ccfe06d767e74a59214f5352def18f4ba9fa1db38dafd284c1702e2b565b598e5b44429eb3dfce0e4405229dd87689a0e5d7ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeIconModule-24a03bb4c6a30af225b7fa7ce8ccfe06d767e74a59214f5352def18f4ba9fa1db38dafd284c1702e2b565b598e5b44429eb3dfce0e4405229dd87689a0e5d7ed"' :
                                            'id="xs-components-links-module-SafeIconModule-24a03bb4c6a30af225b7fa7ce8ccfe06d767e74a59214f5352def18f4ba9fa1db38dafd284c1702e2b565b598e5b44429eb3dfce0e4405229dd87689a0e5d7ed"' }>
                                            <li class="link">
                                                <a href="components/SafeIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeInviteUsersModule.html" data-type="entity-link" >SafeInviteUsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeInviteUsersModule-2dd46f557d9f347a20468996ea98e2ce35fcf6fda67fece286dfdbd29c8e242f96450e26e5f7803f7823059436d7dd0bf78d6504b7d4780f89f6e586b72e7615"' : 'data-target="#xs-components-links-module-SafeInviteUsersModule-2dd46f557d9f347a20468996ea98e2ce35fcf6fda67fece286dfdbd29c8e242f96450e26e5f7803f7823059436d7dd0bf78d6504b7d4780f89f6e586b72e7615"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeInviteUsersModule-2dd46f557d9f347a20468996ea98e2ce35fcf6fda67fece286dfdbd29c8e242f96450e26e5f7803f7823059436d7dd0bf78d6504b7d4780f89f6e586b72e7615"' :
                                            'id="xs-components-links-module-SafeInviteUsersModule-2dd46f557d9f347a20468996ea98e2ce35fcf6fda67fece286dfdbd29c8e242f96450e26e5f7803f7823059436d7dd0bf78d6504b7d4780f89f6e586b72e7615"' }>
                                            <li class="link">
                                                <a href="components/SafeInviteUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeInviteUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeLayoutModalModule.html" data-type="entity-link" >SafeLayoutModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeLayoutModalModule-a25029f5db0d6d29b23ce9492b6bc8eabf71c014429c21dca388a7ddec6e2e2f33661f006ad874ea8cd543f4ce039d976e7639f9bd3ef0c3cc287cfa2e845ad4"' : 'data-target="#xs-components-links-module-SafeLayoutModalModule-a25029f5db0d6d29b23ce9492b6bc8eabf71c014429c21dca388a7ddec6e2e2f33661f006ad874ea8cd543f4ce039d976e7639f9bd3ef0c3cc287cfa2e845ad4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeLayoutModalModule-a25029f5db0d6d29b23ce9492b6bc8eabf71c014429c21dca388a7ddec6e2e2f33661f006ad874ea8cd543f4ce039d976e7639f9bd3ef0c3cc287cfa2e845ad4"' :
                                            'id="xs-components-links-module-SafeLayoutModalModule-a25029f5db0d6d29b23ce9492b6bc8eabf71c014429c21dca388a7ddec6e2e2f33661f006ad874ea8cd543f4ce039d976e7639f9bd3ef0c3cc287cfa2e845ad4"' }>
                                            <li class="link">
                                                <a href="components/SafeLayoutModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeLayoutModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeLayoutModule.html" data-type="entity-link" >SafeLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeLayoutModule-5c96c91ad92c51e57c514368e737efe9958037102563afdce96e6294529248a92e06397002b69d72cf4e5b5c45be26a7364441623ec133ce8be8188ce8bd0b0d"' : 'data-target="#xs-components-links-module-SafeLayoutModule-5c96c91ad92c51e57c514368e737efe9958037102563afdce96e6294529248a92e06397002b69d72cf4e5b5c45be26a7364441623ec133ce8be8188ce8bd0b0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeLayoutModule-5c96c91ad92c51e57c514368e737efe9958037102563afdce96e6294529248a92e06397002b69d72cf4e5b5c45be26a7364441623ec133ce8be8188ce8bd0b0d"' :
                                            'id="xs-components-links-module-SafeLayoutModule-5c96c91ad92c51e57c514368e737efe9958037102563afdce96e6294529248a92e06397002b69d72cf4e5b5c45be26a7364441623ec133ce8be8188ce8bd0b0d"' }>
                                            <li class="link">
                                                <a href="components/SafeLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeLineChartModule.html" data-type="entity-link" >SafeLineChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeLineChartModule-da81b0dfa772ba5ef36a820251e10fc1a8ac025ca859b921a17aacf0dd1004a8819329ce0d02718a6bde65c54ccd0f13b2dc4e1bda615b8a49e3b99bdb16acd1"' : 'data-target="#xs-components-links-module-SafeLineChartModule-da81b0dfa772ba5ef36a820251e10fc1a8ac025ca859b921a17aacf0dd1004a8819329ce0d02718a6bde65c54ccd0f13b2dc4e1bda615b8a49e3b99bdb16acd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeLineChartModule-da81b0dfa772ba5ef36a820251e10fc1a8ac025ca859b921a17aacf0dd1004a8819329ce0d02718a6bde65c54ccd0f13b2dc4e1bda615b8a49e3b99bdb16acd1"' :
                                            'id="xs-components-links-module-SafeLineChartModule-da81b0dfa772ba5ef36a820251e10fc1a8ac025ca859b921a17aacf0dd1004a8819329ce0d02718a6bde65c54ccd0f13b2dc4e1bda615b8a49e3b99bdb16acd1"' }>
                                            <li class="link">
                                                <a href="components/SafeLineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeLineChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeMapModule.html" data-type="entity-link" >SafeMapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeMapModule-d8cc718e4c20ab21aada45e06d8ef34108fd2685787c5644a6a4ebc7009487d6f16075e52d0a34e5ded60d084744cf41f3b8171643886d0709625780717cc1b8"' : 'data-target="#xs-components-links-module-SafeMapModule-d8cc718e4c20ab21aada45e06d8ef34108fd2685787c5644a6a4ebc7009487d6f16075e52d0a34e5ded60d084744cf41f3b8171643886d0709625780717cc1b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeMapModule-d8cc718e4c20ab21aada45e06d8ef34108fd2685787c5644a6a4ebc7009487d6f16075e52d0a34e5ded60d084744cf41f3b8171643886d0709625780717cc1b8"' :
                                            'id="xs-components-links-module-SafeMapModule-d8cc718e4c20ab21aada45e06d8ef34108fd2685787c5644a6a4ebc7009487d6f16075e52d0a34e5ded60d084744cf41f3b8171643886d0709625780717cc1b8"' }>
                                            <li class="link">
                                                <a href="components/SafeMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeMapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeMapSettingsModule.html" data-type="entity-link" >SafeMapSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeMapSettingsModule-30fd47b6fb70c99b98422f9df10b583496429fc2b16c578cb40fdea01854799b7d367bbea07484b606bb00bd4fe434dea756c4ece8af38476dc346c0efad492c"' : 'data-target="#xs-components-links-module-SafeMapSettingsModule-30fd47b6fb70c99b98422f9df10b583496429fc2b16c578cb40fdea01854799b7d367bbea07484b606bb00bd4fe434dea756c4ece8af38476dc346c0efad492c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeMapSettingsModule-30fd47b6fb70c99b98422f9df10b583496429fc2b16c578cb40fdea01854799b7d367bbea07484b606bb00bd4fe434dea756c4ece8af38476dc346c0efad492c"' :
                                            'id="xs-components-links-module-SafeMapSettingsModule-30fd47b6fb70c99b98422f9df10b583496429fc2b16c578cb40fdea01854799b7d367bbea07484b606bb00bd4fe434dea756c4ece8af38476dc346c0efad492c"' }>
                                            <li class="link">
                                                <a href="components/SafeMapSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeMapSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeModule.html" data-type="entity-link" >SafeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SafePieChartModule.html" data-type="entity-link" >SafePieChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafePieChartModule-aa47af38f110c72becb6db01d679e6690b29625d6592b7b35f2b378f73285c52238ae84b84715a64061264349dedc803062661a2d832348a8c83cc88a84f915f"' : 'data-target="#xs-components-links-module-SafePieChartModule-aa47af38f110c72becb6db01d679e6690b29625d6592b7b35f2b378f73285c52238ae84b84715a64061264349dedc803062661a2d832348a8c83cc88a84f915f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePieChartModule-aa47af38f110c72becb6db01d679e6690b29625d6592b7b35f2b378f73285c52238ae84b84715a64061264349dedc803062661a2d832348a8c83cc88a84f915f"' :
                                            'id="xs-components-links-module-SafePieChartModule-aa47af38f110c72becb6db01d679e6690b29625d6592b7b35f2b378f73285c52238ae84b84715a64061264349dedc803062661a2d832348a8c83cc88a84f915f"' }>
                                            <li class="link">
                                                <a href="components/SafePieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePieChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafePipelineModule.html" data-type="entity-link" >SafePipelineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafePipelineModule-ec96ed87ad34c9052c8ee8c657c422fb42ad2a6b00e0147cac4fc285dda61fbbcedf208c7a5859bb4595ff0784f28874b665a02572cb8dde8f9c0289a602d220"' : 'data-target="#xs-components-links-module-SafePipelineModule-ec96ed87ad34c9052c8ee8c657c422fb42ad2a6b00e0147cac4fc285dda61fbbcedf208c7a5859bb4595ff0784f28874b665a02572cb8dde8f9c0289a602d220"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePipelineModule-ec96ed87ad34c9052c8ee8c657c422fb42ad2a6b00e0147cac4fc285dda61fbbcedf208c7a5859bb4595ff0784f28874b665a02572cb8dde8f9c0289a602d220"' :
                                            'id="xs-components-links-module-SafePipelineModule-ec96ed87ad34c9052c8ee8c657c422fb42ad2a6b00e0147cac4fc285dda61fbbcedf208c7a5859bb4595ff0784f28874b665a02572cb8dde8f9c0289a602d220"' }>
                                            <li class="link">
                                                <a href="components/SafeAddFieldStageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddFieldStageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeExpressionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeExpressionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeFieldDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFieldDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeGroupStageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeGroupStageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafePipelineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipelineComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafePreferencesModalModule.html" data-type="entity-link" >SafePreferencesModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafePreferencesModalModule-c31de0d2abf9a5ff857ee2b16a5fc59cc6203055266e8420e46adc63fac1e9a24913583008fb552702c05042364f5469f482eae254b22f72a7112bcc7b208893"' : 'data-target="#xs-components-links-module-SafePreferencesModalModule-c31de0d2abf9a5ff857ee2b16a5fc59cc6203055266e8420e46adc63fac1e9a24913583008fb552702c05042364f5469f482eae254b22f72a7112bcc7b208893"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePreferencesModalModule-c31de0d2abf9a5ff857ee2b16a5fc59cc6203055266e8420e46adc63fac1e9a24913583008fb552702c05042364f5469f482eae254b22f72a7112bcc7b208893"' :
                                            'id="xs-components-links-module-SafePreferencesModalModule-c31de0d2abf9a5ff857ee2b16a5fc59cc6203055266e8420e46adc63fac1e9a24913583008fb552702c05042364f5469f482eae254b22f72a7112bcc7b208893"' }>
                                            <li class="link">
                                                <a href="components/SafePreferencesModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePreferencesModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafePreviousButtonModule.html" data-type="entity-link" >SafePreviousButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafePreviousButtonModule-a193990afbd41c76cd5279b0058d835487824c35a3ad75968e25cb30445117c45c8956c43aff83693204f6fdbb6fd587ebeb8ca3a1db15f053a65f4d25be3dc2"' : 'data-target="#xs-components-links-module-SafePreviousButtonModule-a193990afbd41c76cd5279b0058d835487824c35a3ad75968e25cb30445117c45c8956c43aff83693204f6fdbb6fd587ebeb8ca3a1db15f053a65f4d25be3dc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePreviousButtonModule-a193990afbd41c76cd5279b0058d835487824c35a3ad75968e25cb30445117c45c8956c43aff83693204f6fdbb6fd587ebeb8ca3a1db15f053a65f4d25be3dc2"' :
                                            'id="xs-components-links-module-SafePreviousButtonModule-a193990afbd41c76cd5279b0058d835487824c35a3ad75968e25cb30445117c45c8956c43aff83693204f6fdbb6fd587ebeb8ca3a1db15f053a65f4d25be3dc2"' }>
                                            <li class="link">
                                                <a href="components/SafePreviousButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePreviousButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeProfileModule.html" data-type="entity-link" >SafeProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeProfileModule-4c517d5693621d315d3e2a2bd31318204b26e0bc7eebf0ffb0c3e2a634bb6a1ca3f2b1404ff792dc3531c4aba76e18204da53e69e94c5bb3bff7e401c4478a4f"' : 'data-target="#xs-components-links-module-SafeProfileModule-4c517d5693621d315d3e2a2bd31318204b26e0bc7eebf0ffb0c3e2a634bb6a1ca3f2b1404ff792dc3531c4aba76e18204da53e69e94c5bb3bff7e401c4478a4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeProfileModule-4c517d5693621d315d3e2a2bd31318204b26e0bc7eebf0ffb0c3e2a634bb6a1ca3f2b1404ff792dc3531c4aba76e18204da53e69e94c5bb3bff7e401c4478a4f"' :
                                            'id="xs-components-links-module-SafeProfileModule-4c517d5693621d315d3e2a2bd31318204b26e0bc7eebf0ffb0c3e2a634bb6a1ca3f2b1404ff792dc3531c4aba76e18204da53e69e94c5bb3bff7e401c4478a4f"' }>
                                            <li class="link">
                                                <a href="components/SafeProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeQueryBuilderModule.html" data-type="entity-link" >SafeQueryBuilderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeQueryBuilderModule-42e10c8ca1d7321ac39d7b25e97ea195b5ab21797bcbc259a6ac76f87f57d4e86a27574311c0a3ff3d0849c8a6074b65f97a9b25f463aa8feb77077f2649e9e9"' : 'data-target="#xs-components-links-module-SafeQueryBuilderModule-42e10c8ca1d7321ac39d7b25e97ea195b5ab21797bcbc259a6ac76f87f57d4e86a27574311c0a3ff3d0849c8a6074b65f97a9b25f463aa8feb77077f2649e9e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeQueryBuilderModule-42e10c8ca1d7321ac39d7b25e97ea195b5ab21797bcbc259a6ac76f87f57d4e86a27574311c0a3ff3d0849c8a6074b65f97a9b25f463aa8feb77077f2649e9e9"' :
                                            'id="xs-components-links-module-SafeQueryBuilderModule-42e10c8ca1d7321ac39d7b25e97ea195b5ab21797bcbc259a6ac76f87f57d4e86a27574311c0a3ff3d0849c8a6074b65f97a9b25f463aa8feb77077f2649e9e9"' }>
                                            <li class="link">
                                                <a href="components/SafeQueryBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeQueryBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeQueryStyleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeQueryStyleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeQueryStyleListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeQueryStyleListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeQueryStylePreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeQueryStylePreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabFieldsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabFieldsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabLayoutPreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabLayoutPreviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabSortComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabSortComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabStyleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabStyleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordDropdownModule.html" data-type="entity-link" >SafeRecordDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordDropdownModule-4a58ed30cd7cd1dfb19d837ef379014665c55cf9f15974835d49cdcc72b3673870bcf03b0b286f35f57a6aac6cac8a640f41ddcfd4954bd1036d9575ea7eb4ed"' : 'data-target="#xs-components-links-module-SafeRecordDropdownModule-4a58ed30cd7cd1dfb19d837ef379014665c55cf9f15974835d49cdcc72b3673870bcf03b0b286f35f57a6aac6cac8a640f41ddcfd4954bd1036d9575ea7eb4ed"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordDropdownModule-4a58ed30cd7cd1dfb19d837ef379014665c55cf9f15974835d49cdcc72b3673870bcf03b0b286f35f57a6aac6cac8a640f41ddcfd4954bd1036d9575ea7eb4ed"' :
                                            'id="xs-components-links-module-SafeRecordDropdownModule-4a58ed30cd7cd1dfb19d837ef379014665c55cf9f15974835d49cdcc72b3673870bcf03b0b286f35f57a6aac6cac8a640f41ddcfd4954bd1036d9575ea7eb4ed"' }>
                                            <li class="link">
                                                <a href="components/SafeRecordDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeRecordDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordHistoryModalModule.html" data-type="entity-link" >SafeRecordHistoryModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordHistoryModalModule-e5356d8c94d390b122e06c9f5e86bd1749ea6438841d78689a51de8b0f1cc3efd2ef34821847782ce561e00aa0f19473b18ae51d43c863210a648ed2ab820ee1"' : 'data-target="#xs-components-links-module-SafeRecordHistoryModalModule-e5356d8c94d390b122e06c9f5e86bd1749ea6438841d78689a51de8b0f1cc3efd2ef34821847782ce561e00aa0f19473b18ae51d43c863210a648ed2ab820ee1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordHistoryModalModule-e5356d8c94d390b122e06c9f5e86bd1749ea6438841d78689a51de8b0f1cc3efd2ef34821847782ce561e00aa0f19473b18ae51d43c863210a648ed2ab820ee1"' :
                                            'id="xs-components-links-module-SafeRecordHistoryModalModule-e5356d8c94d390b122e06c9f5e86bd1749ea6438841d78689a51de8b0f1cc3efd2ef34821847782ce561e00aa0f19473b18ae51d43c863210a648ed2ab820ee1"' }>
                                            <li class="link">
                                                <a href="components/RecordHistoryModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecordHistoryModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordHistoryModule.html" data-type="entity-link" >SafeRecordHistoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordHistoryModule-94a9d5594e1a6aa0e13ae94e5ce76c7910777724c5f0455168d4137e1645c928dfa50dfbccf2025b113169364ddbe9b255fb92066c2b17abb51e98ec4bc5fa48"' : 'data-target="#xs-components-links-module-SafeRecordHistoryModule-94a9d5594e1a6aa0e13ae94e5ce76c7910777724c5f0455168d4137e1645c928dfa50dfbccf2025b113169364ddbe9b255fb92066c2b17abb51e98ec4bc5fa48"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordHistoryModule-94a9d5594e1a6aa0e13ae94e5ce76c7910777724c5f0455168d4137e1645c928dfa50dfbccf2025b113169364ddbe9b255fb92066c2b17abb51e98ec4bc5fa48"' :
                                            'id="xs-components-links-module-SafeRecordHistoryModule-94a9d5594e1a6aa0e13ae94e5ce76c7910777724c5f0455168d4137e1645c928dfa50dfbccf2025b113169364ddbe9b255fb92066c2b17abb51e98ec4bc5fa48"' }>
                                            <li class="link">
                                                <a href="components/SafeRecordHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeRecordHistoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordModalModule.html" data-type="entity-link" >SafeRecordModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordModalModule-70ad10051c01565a7b986d2a08ab40f5f8c8a08851a97dffb656b1d97de93fff6f86881346891c039be30497514bac5f552193e2b018038e1de00bb82ab3eb04"' : 'data-target="#xs-components-links-module-SafeRecordModalModule-70ad10051c01565a7b986d2a08ab40f5f8c8a08851a97dffb656b1d97de93fff6f86881346891c039be30497514bac5f552193e2b018038e1de00bb82ab3eb04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordModalModule-70ad10051c01565a7b986d2a08ab40f5f8c8a08851a97dffb656b1d97de93fff6f86881346891c039be30497514bac5f552193e2b018038e1de00bb82ab3eb04"' :
                                            'id="xs-components-links-module-SafeRecordModalModule-70ad10051c01565a7b986d2a08ab40f5f8c8a08851a97dffb656b1d97de93fff6f86881346891c039be30497514bac5f552193e2b018038e1de00bb82ab3eb04"' }>
                                            <li class="link">
                                                <a href="components/SafeRecordModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeRecordModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordSummaryModule.html" data-type="entity-link" >SafeRecordSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordSummaryModule-56eaabf480d03b50306bbbd81a6333e306de581a78d2e49fa81f43d4e6b26b498c2d8a64d9689345cb1d7e62441c4ec4c5a17a13c8c4d41db2c57a288ab03195"' : 'data-target="#xs-components-links-module-SafeRecordSummaryModule-56eaabf480d03b50306bbbd81a6333e306de581a78d2e49fa81f43d4e6b26b498c2d8a64d9689345cb1d7e62441c4ec4c5a17a13c8c4d41db2c57a288ab03195"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordSummaryModule-56eaabf480d03b50306bbbd81a6333e306de581a78d2e49fa81f43d4e6b26b498c2d8a64d9689345cb1d7e62441c4ec4c5a17a13c8c4d41db2c57a288ab03195"' :
                                            'id="xs-components-links-module-SafeRecordSummaryModule-56eaabf480d03b50306bbbd81a6333e306de581a78d2e49fa81f43d4e6b26b498c2d8a64d9689345cb1d7e62441c4ec4c5a17a13c8c4d41db2c57a288ab03195"' }>
                                            <li class="link">
                                                <a href="components/SafeRecordSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeRecordSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeResourceDropdownModule.html" data-type="entity-link" >SafeResourceDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeResourceDropdownModule-798d38b8ea7a09395e5177a1d30f265fcd8495149e17c71b760e625bd62ba38f0110149a149200ba8b1df9b40c48030309015206d6e4f0c0685224d16ca32543"' : 'data-target="#xs-components-links-module-SafeResourceDropdownModule-798d38b8ea7a09395e5177a1d30f265fcd8495149e17c71b760e625bd62ba38f0110149a149200ba8b1df9b40c48030309015206d6e4f0c0685224d16ca32543"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeResourceDropdownModule-798d38b8ea7a09395e5177a1d30f265fcd8495149e17c71b760e625bd62ba38f0110149a149200ba8b1df9b40c48030309015206d6e4f0c0685224d16ca32543"' :
                                            'id="xs-components-links-module-SafeResourceDropdownModule-798d38b8ea7a09395e5177a1d30f265fcd8495149e17c71b760e625bd62ba38f0110149a149200ba8b1df9b40c48030309015206d6e4f0c0685224d16ca32543"' }>
                                            <li class="link">
                                                <a href="components/SafeResourceDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeResourceDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRolesModule.html" data-type="entity-link" >SafeRolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRolesModule-fd2cbf9e9a4cdd9151c441a41fabaa6044c773793f13e2a49fbc8b3abce963677300c1701bf06e34c5314a7ead2ec49dd5a09d3a8dfe17a5e3b1e3f0f790c37b"' : 'data-target="#xs-components-links-module-SafeRolesModule-fd2cbf9e9a4cdd9151c441a41fabaa6044c773793f13e2a49fbc8b3abce963677300c1701bf06e34c5314a7ead2ec49dd5a09d3a8dfe17a5e3b1e3f0f790c37b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRolesModule-fd2cbf9e9a4cdd9151c441a41fabaa6044c773793f13e2a49fbc8b3abce963677300c1701bf06e34c5314a7ead2ec49dd5a09d3a8dfe17a5e3b1e3f0f790c37b"' :
                                            'id="xs-components-links-module-SafeRolesModule-fd2cbf9e9a4cdd9151c441a41fabaa6044c773793f13e2a49fbc8b3abce963677300c1701bf06e34c5314a7ead2ec49dd5a09d3a8dfe17a5e3b1e3f0f790c37b"' }>
                                            <li class="link">
                                                <a href="components/SafeAddRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeEditRoleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditRoleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeRolesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeRolesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSchedulerModule.html" data-type="entity-link" >SafeSchedulerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSchedulerModule-bd8be4295b5529e8cbf9872975ae048f0e2d0afc799a5a9909ed78261205ee18fc9eff9e69d5969cc230555b2c7cead9f06cf316deb81a658bc2ce1ddde372ef"' : 'data-target="#xs-components-links-module-SafeSchedulerModule-bd8be4295b5529e8cbf9872975ae048f0e2d0afc799a5a9909ed78261205ee18fc9eff9e69d5969cc230555b2c7cead9f06cf316deb81a658bc2ce1ddde372ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSchedulerModule-bd8be4295b5529e8cbf9872975ae048f0e2d0afc799a5a9909ed78261205ee18fc9eff9e69d5969cc230555b2c7cead9f06cf316deb81a658bc2ce1ddde372ef"' :
                                            'id="xs-components-links-module-SafeSchedulerModule-bd8be4295b5529e8cbf9872975ae048f0e2d0afc799a5a9909ed78261205ee18fc9eff9e69d5969cc230555b2c7cead9f06cf316deb81a658bc2ce1ddde372ef"' }>
                                            <li class="link">
                                                <a href="components/SafeSchedulerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSchedulerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSchedulerSettingsModule.html" data-type="entity-link" >SafeSchedulerSettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSchedulerSettingsModule-9910c07163070195ceff1be5f5c738e582724c85e75f8325e79b9787a1c53c8322e29d973bf6706afb8d95353d42da3a57777f2b519531fe5a8f523977617d27"' : 'data-target="#xs-components-links-module-SafeSchedulerSettingsModule-9910c07163070195ceff1be5f5c738e582724c85e75f8325e79b9787a1c53c8322e29d973bf6706afb8d95353d42da3a57777f2b519531fe5a8f523977617d27"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSchedulerSettingsModule-9910c07163070195ceff1be5f5c738e582724c85e75f8325e79b9787a1c53c8322e29d973bf6706afb8d95353d42da3a57777f2b519531fe5a8f523977617d27"' :
                                            'id="xs-components-links-module-SafeSchedulerSettingsModule-9910c07163070195ceff1be5f5c738e582724c85e75f8325e79b9787a1c53c8322e29d973bf6706afb8d95353d42da3a57777f2b519531fe5a8f523977617d27"' }>
                                            <li class="link">
                                                <a href="components/SafeSchedulerSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSchedulerSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSearchMenuModule.html" data-type="entity-link" >SafeSearchMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSearchMenuModule-78f41845c945d6d59edb5f20883ecb7da17018b78e19a6f1c463cac2ba5d8a0569aa3c0004c63e5c3979dec9df6d7bc7dbac7ae22f25a1c91399c88c75ba9e08"' : 'data-target="#xs-components-links-module-SafeSearchMenuModule-78f41845c945d6d59edb5f20883ecb7da17018b78e19a6f1c463cac2ba5d8a0569aa3c0004c63e5c3979dec9df6d7bc7dbac7ae22f25a1c91399c88c75ba9e08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSearchMenuModule-78f41845c945d6d59edb5f20883ecb7da17018b78e19a6f1c463cac2ba5d8a0569aa3c0004c63e5c3979dec9df6d7bc7dbac7ae22f25a1c91399c88c75ba9e08"' :
                                            'id="xs-components-links-module-SafeSearchMenuModule-78f41845c945d6d59edb5f20883ecb7da17018b78e19a6f1c463cac2ba5d8a0569aa3c0004c63e5c3979dec9df6d7bc7dbac7ae22f25a1c91399c88c75ba9e08"' }>
                                            <li class="link">
                                                <a href="components/SafeSearchMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSearchMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSearchResourceGridModalModule.html" data-type="entity-link" >SafeSearchResourceGridModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSearchResourceGridModalModule-b8481f8752626ebdd07b31fe2bf8d45b6a968e9baae66a1a07de465e8a3cb9a019fa3aad26c25f1f58d66716ab83b5daa9d4081ad2706680db36aa106b0aa500"' : 'data-target="#xs-components-links-module-SafeSearchResourceGridModalModule-b8481f8752626ebdd07b31fe2bf8d45b6a968e9baae66a1a07de465e8a3cb9a019fa3aad26c25f1f58d66716ab83b5daa9d4081ad2706680db36aa106b0aa500"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSearchResourceGridModalModule-b8481f8752626ebdd07b31fe2bf8d45b6a968e9baae66a1a07de465e8a3cb9a019fa3aad26c25f1f58d66716ab83b5daa9d4081ad2706680db36aa106b0aa500"' :
                                            'id="xs-components-links-module-SafeSearchResourceGridModalModule-b8481f8752626ebdd07b31fe2bf8d45b6a968e9baae66a1a07de465e8a3cb9a019fa3aad26c25f1f58d66716ab83b5daa9d4081ad2706680db36aa106b0aa500"' }>
                                            <li class="link">
                                                <a href="components/SafeResourceGridModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeResourceGridModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSeriesMappingModule.html" data-type="entity-link" >SafeSeriesMappingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSeriesMappingModule-dd69a66f88c6c0aa26d82ff01c85a9352b82b1021a1207c78921064cad8a2ce1a05d18ba7db7167a64faee1b8dfeec34f8276366fd207eb6d9b1094491dde250"' : 'data-target="#xs-components-links-module-SafeSeriesMappingModule-dd69a66f88c6c0aa26d82ff01c85a9352b82b1021a1207c78921064cad8a2ce1a05d18ba7db7167a64faee1b8dfeec34f8276366fd207eb6d9b1094491dde250"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSeriesMappingModule-dd69a66f88c6c0aa26d82ff01c85a9352b82b1021a1207c78921064cad8a2ce1a05d18ba7db7167a64faee1b8dfeec34f8276366fd207eb6d9b1094491dde250"' :
                                            'id="xs-components-links-module-SafeSeriesMappingModule-dd69a66f88c6c0aa26d82ff01c85a9352b82b1021a1207c78921064cad8a2ce1a05d18ba7db7167a64faee1b8dfeec34f8276366fd207eb6d9b1094491dde250"' }>
                                            <li class="link">
                                                <a href="components/SafeSeriesMappingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSeriesMappingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSnackbarSpinnerModule.html" data-type="entity-link" >SafeSnackbarSpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSnackbarSpinnerModule-176cf5eaba9d6cf7f8f3f3bc6bfb6b3ab6966d3794e7144a2e9e0948dca3000a7fbbc4b24e9dac3006cbfd53f880fcb49b6ac4452294cd927a52ecfc73a64e89"' : 'data-target="#xs-components-links-module-SafeSnackbarSpinnerModule-176cf5eaba9d6cf7f8f3f3bc6bfb6b3ab6966d3794e7144a2e9e0948dca3000a7fbbc4b24e9dac3006cbfd53f880fcb49b6ac4452294cd927a52ecfc73a64e89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSnackbarSpinnerModule-176cf5eaba9d6cf7f8f3f3bc6bfb6b3ab6966d3794e7144a2e9e0948dca3000a7fbbc4b24e9dac3006cbfd53f880fcb49b6ac4452294cd927a52ecfc73a64e89"' :
                                            'id="xs-components-links-module-SafeSnackbarSpinnerModule-176cf5eaba9d6cf7f8f3f3bc6bfb6b3ab6966d3794e7144a2e9e0948dca3000a7fbbc4b24e9dac3006cbfd53f880fcb49b6ac4452294cd927a52ecfc73a64e89"' }>
                                            <li class="link">
                                                <a href="components/SafeSnackbarSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSnackbarSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSpinnerModule.html" data-type="entity-link" >SafeSpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSpinnerModule-8be875be8b4f9e9ec41f1a44c992e4f910d58df2f1751d5d8442e36727cd1b9ee0f47cc77a31c4e1d27ed6f5e0f09822e2676af71af3e39b1dde58632b6174ca"' : 'data-target="#xs-components-links-module-SafeSpinnerModule-8be875be8b4f9e9ec41f1a44c992e4f910d58df2f1751d5d8442e36727cd1b9ee0f47cc77a31c4e1d27ed6f5e0f09822e2676af71af3e39b1dde58632b6174ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSpinnerModule-8be875be8b4f9e9ec41f1a44c992e4f910d58df2f1751d5d8442e36727cd1b9ee0f47cc77a31c4e1d27ed6f5e0f09822e2676af71af3e39b1dde58632b6174ca"' :
                                            'id="xs-components-links-module-SafeSpinnerModule-8be875be8b4f9e9ec41f1a44c992e4f910d58df2f1751d5d8442e36727cd1b9ee0f47cc77a31c4e1d27ed6f5e0f09822e2676af71af3e39b1dde58632b6174ca"' }>
                                            <li class="link">
                                                <a href="components/SafeSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeStatusModalModule.html" data-type="entity-link" >SafeStatusModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeStatusModalModule-20fb0028b52441237893b893e5ef9268eefcdab10c978f4bd1592bb9609e5cc7bb2d3840ae37f089cf710d990465a406fc0f0ca8e13ca2556a481162c03a312e"' : 'data-target="#xs-components-links-module-SafeStatusModalModule-20fb0028b52441237893b893e5ef9268eefcdab10c978f4bd1592bb9609e5cc7bb2d3840ae37f089cf710d990465a406fc0f0ca8e13ca2556a481162c03a312e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeStatusModalModule-20fb0028b52441237893b893e5ef9268eefcdab10c978f4bd1592bb9609e5cc7bb2d3840ae37f089cf710d990465a406fc0f0ca8e13ca2556a481162c03a312e"' :
                                            'id="xs-components-links-module-SafeStatusModalModule-20fb0028b52441237893b893e5ef9268eefcdab10c978f4bd1592bb9609e5cc7bb2d3840ae37f089cf710d990465a406fc0f0ca8e13ca2556a481162c03a312e"' }>
                                            <li class="link">
                                                <a href="components/SafeStatusModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeStatusModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeTagboxModule.html" data-type="entity-link" >SafeTagboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeTagboxModule-e62571810fcfe89152fd35d042db31377b69fa6f377aa96c16c3bfa93d5e84ae132ede08bdc2d04bf53a9117f1f15462741c06b44f2c2a0c84a7a9b187d5b524"' : 'data-target="#xs-components-links-module-SafeTagboxModule-e62571810fcfe89152fd35d042db31377b69fa6f377aa96c16c3bfa93d5e84ae132ede08bdc2d04bf53a9117f1f15462741c06b44f2c2a0c84a7a9b187d5b524"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeTagboxModule-e62571810fcfe89152fd35d042db31377b69fa6f377aa96c16c3bfa93d5e84ae132ede08bdc2d04bf53a9117f1f15462741c06b44f2c2a0c84a7a9b187d5b524"' :
                                            'id="xs-components-links-module-SafeTagboxModule-e62571810fcfe89152fd35d042db31377b69fa6f377aa96c16c3bfa93d5e84ae132ede08bdc2d04bf53a9117f1f15462741c06b44f2c2a0c84a7a9b187d5b524"' }>
                                            <li class="link">
                                                <a href="components/SafeTagboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTagboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeTemplatesModule.html" data-type="entity-link" >SafeTemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeTemplatesModule-3bf5506f6f36da71606fc7ce25b4f4c42406754ba5ad6579a25efb8ac92f2f14f321ca86b32d3919312ccd643cc9c41b5860421eaffcf31c83fe429d0941fc60"' : 'data-target="#xs-components-links-module-SafeTemplatesModule-3bf5506f6f36da71606fc7ce25b4f4c42406754ba5ad6579a25efb8ac92f2f14f321ca86b32d3919312ccd643cc9c41b5860421eaffcf31c83fe429d0941fc60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeTemplatesModule-3bf5506f6f36da71606fc7ce25b4f4c42406754ba5ad6579a25efb8ac92f2f14f321ca86b32d3919312ccd643cc9c41b5860421eaffcf31c83fe429d0941fc60"' :
                                            'id="xs-components-links-module-SafeTemplatesModule-3bf5506f6f36da71606fc7ce25b4f4c42406754ba5ad6579a25efb8ac92f2f14f321ca86b32d3919312ccd643cc9c41b5860421eaffcf31c83fe429d0941fc60"' }>
                                            <li class="link">
                                                <a href="components/SafeEditTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditTemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTemplatesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTemplatesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeUsersModule.html" data-type="entity-link" >SafeUsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeUsersModule-b7d3a92597a2ad77a6505e12491a57c68b0591ceeac59ddf118f58e16c28341adab9fe6ff3085194299639058454163fc1d67973a540e91a604ae1dad711e50b"' : 'data-target="#xs-components-links-module-SafeUsersModule-b7d3a92597a2ad77a6505e12491a57c68b0591ceeac59ddf118f58e16c28341adab9fe6ff3085194299639058454163fc1d67973a540e91a604ae1dad711e50b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeUsersModule-b7d3a92597a2ad77a6505e12491a57c68b0591ceeac59ddf118f58e16c28341adab9fe6ff3085194299639058454163fc1d67973a540e91a604ae1dad711e50b"' :
                                            'id="xs-components-links-module-SafeUsersModule-b7d3a92597a2ad77a6505e12491a57c68b0591ceeac59ddf118f58e16c28341adab9fe6ff3085194299639058454163fc1d67973a540e91a604ae1dad711e50b"' }>
                                            <li class="link">
                                                <a href="components/SafeEditUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeEditUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeWidgetChoiceModule.html" data-type="entity-link" >SafeWidgetChoiceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeWidgetChoiceModule-8aad0d2203e97a17c1c7bd172aafb25b92b3370c6d38feda66a9a32947ea589e45659ac424b236784ccafbe447089ab294356d421d56ad3ab3344e500e627574"' : 'data-target="#xs-components-links-module-SafeWidgetChoiceModule-8aad0d2203e97a17c1c7bd172aafb25b92b3370c6d38feda66a9a32947ea589e45659ac424b236784ccafbe447089ab294356d421d56ad3ab3344e500e627574"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetChoiceModule-8aad0d2203e97a17c1c7bd172aafb25b92b3370c6d38feda66a9a32947ea589e45659ac424b236784ccafbe447089ab294356d421d56ad3ab3344e500e627574"' :
                                            'id="xs-components-links-module-SafeWidgetChoiceModule-8aad0d2203e97a17c1c7bd172aafb25b92b3370c6d38feda66a9a32947ea589e45659ac424b236784ccafbe447089ab294356d421d56ad3ab3344e500e627574"' }>
                                            <li class="link">
                                                <a href="components/SafeWidgetChoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeWidgetChoiceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeWidgetGridModule.html" data-type="entity-link" >SafeWidgetGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeWidgetGridModule-cbc77f3597b4ae8f1b2b1ea23e581487db0744831df7f07bfd1ec41da2be071723bb41e0aff993dc1213e1df6e1cd2740b7afa9322c91b878c1ef1a1e32b3045"' : 'data-target="#xs-components-links-module-SafeWidgetGridModule-cbc77f3597b4ae8f1b2b1ea23e581487db0744831df7f07bfd1ec41da2be071723bb41e0aff993dc1213e1df6e1cd2740b7afa9322c91b878c1ef1a1e32b3045"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetGridModule-cbc77f3597b4ae8f1b2b1ea23e581487db0744831df7f07bfd1ec41da2be071723bb41e0aff993dc1213e1df6e1cd2740b7afa9322c91b878c1ef1a1e32b3045"' :
                                            'id="xs-components-links-module-SafeWidgetGridModule-cbc77f3597b4ae8f1b2b1ea23e581487db0744831df7f07bfd1ec41da2be071723bb41e0aff993dc1213e1df6e1cd2740b7afa9322c91b878c1ef1a1e32b3045"' }>
                                            <li class="link">
                                                <a href="components/SafeExpandedWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeExpandedWidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeFloatingOptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFloatingOptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTileDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTileDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeWidgetGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeWidgetGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeWidgetModule.html" data-type="entity-link" >SafeWidgetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeWidgetModule-52870b1b53a65b9f13dfceccadcbf98ffb5da2e22e25b34288be4577c96b3300b53522a05b22f99f8713a7cafa04829d7b8e34cec34c7940ed7f5446763cba83"' : 'data-target="#xs-components-links-module-SafeWidgetModule-52870b1b53a65b9f13dfceccadcbf98ffb5da2e22e25b34288be4577c96b3300b53522a05b22f99f8713a7cafa04829d7b8e34cec34c7940ed7f5446763cba83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetModule-52870b1b53a65b9f13dfceccadcbf98ffb5da2e22e25b34288be4577c96b3300b53522a05b22f99f8713a7cafa04829d7b8e34cec34c7940ed7f5446763cba83"' :
                                            'id="xs-components-links-module-SafeWidgetModule-52870b1b53a65b9f13dfceccadcbf98ffb5da2e22e25b34288be4577c96b3300b53522a05b22f99f8713a7cafa04829d7b8e34cec34c7940ed7f5446763cba83"' }>
                                            <li class="link">
                                                <a href="components/SafeWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeWidgetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeWorkflowStepperModule.html" data-type="entity-link" >SafeWorkflowStepperModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeWorkflowStepperModule-1319b1a5f107e8b75be603644b36797b5c0223aaeafc93f33928f0ca16774b29f96d67842063b2b331fd657faafe915cae823f1cf73722450805adbbc44404ab"' : 'data-target="#xs-components-links-module-SafeWorkflowStepperModule-1319b1a5f107e8b75be603644b36797b5c0223aaeafc93f33928f0ca16774b29f96d67842063b2b331fd657faafe915cae823f1cf73722450805adbbc44404ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWorkflowStepperModule-1319b1a5f107e8b75be603644b36797b5c0223aaeafc93f33928f0ca16774b29f96d67842063b2b331fd657faafe915cae823f1cf73722450805adbbc44404ab"' :
                                            'id="xs-components-links-module-SafeWorkflowStepperModule-1319b1a5f107e8b75be603644b36797b5c0223aaeafc93f33928f0ca16774b29f96d67842063b2b331fd657faafe915cae823f1cf73722450805adbbc44404ab"' }>
                                            <li class="link">
                                                <a href="components/SafeAddStepComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddStepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeStepComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeStepComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeWorkflowStepperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeWorkflowStepperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StorybookTranslateModule.html" data-type="entity-link" >StorybookTranslateModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Chart.html" data-type="entity-link" >Chart</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChecklistDatabase.html" data-type="entity-link" >ChecklistDatabase</a>
                            </li>
                            <li class="link">
                                <a href="classes/PermissionsManagement.html" data-type="entity-link" >PermissionsManagement</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pie.html" data-type="entity-link" >Pie</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeItemFlatNode.html" data-type="entity-link" >TreeItemFlatNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreeItemNode.html" data-type="entity-link" >TreeItemNode</a>
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
                                    <a href="injectables/AggregationBuilderService.html" data-type="entity-link" >AggregationBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DomService.html" data-type="entity-link" >DomService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KendoTranslationService.html" data-type="entity-link" >KendoTranslationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QueryBuilderService.html" data-type="entity-link" >QueryBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeApiProxyService.html" data-type="entity-link" >SafeApiProxyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeApplicationService.html" data-type="entity-link" >SafeApplicationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeAuthService.html" data-type="entity-link" >SafeAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeDashboardService.html" data-type="entity-link" >SafeDashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeDownloadService.html" data-type="entity-link" >SafeDownloadService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeEmailService.html" data-type="entity-link" >SafeEmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeFormBuilderService.html" data-type="entity-link" >SafeFormBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeFormService.html" data-type="entity-link" >SafeFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeGridLayoutService.html" data-type="entity-link" >SafeGridLayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeGridService.html" data-type="entity-link" >SafeGridService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeLayoutService.html" data-type="entity-link" >SafeLayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeNotificationService.html" data-type="entity-link" >SafeNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeSnackBarService.html" data-type="entity-link" >SafeSnackBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SafeWorkflowService.html" data-type="entity-link" >SafeWorkflowService</a>
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
                                <a href="guards/SafePermissionGuard.html" data-type="entity-link" >SafePermissionGuard</a>
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
                                <a href="interfaces/Account.html" data-type="entity-link" >Account</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddChannelMutationResponse.html" data-type="entity-link" >AddChannelMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddLayoutMutationResponse.html" data-type="entity-link" >AddLayoutMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPageMutationResponse.html" data-type="entity-link" >AddPageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddPositionAttributeCategoryMutationResponse.html" data-type="entity-link" >AddPositionAttributeCategoryMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddRecordMutationResponse.html" data-type="entity-link" >AddRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddRoleMutationResponse.html" data-type="entity-link" >AddRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddRoleToUsersMutationResponse.html" data-type="entity-link" >AddRoleToUsersMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddStepMutationResponse.html" data-type="entity-link" >AddStepMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddSubscriptionMutationResponse.html" data-type="entity-link" >AddSubscriptionMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddTemplateMutationResponse.html" data-type="entity-link" >AddTemplateMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AddUsersMutationResponse.html" data-type="entity-link" >AddUsersMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiConfiguration.html" data-type="entity-link" >ApiConfiguration</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Application.html" data-type="entity-link" >Application</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApplicationEditedSubscriptionResponse.html" data-type="entity-link" >ApplicationEditedSubscriptionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApplicationUnlockedSubscriptionResponse.html" data-type="entity-link" >ApplicationUnlockedSubscriptionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Breadcrumb.html" data-type="entity-link" >Breadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Channel.html" data-type="entity-link" >Channel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChannelDisplay.html" data-type="entity-link" >ChannelDisplay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLegend.html" data-type="entity-link" >ChartLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLegend-1.html" data-type="entity-link" >ChartLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLegend-2.html" data-type="entity-link" >ChartLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLegend-3.html" data-type="entity-link" >ChartLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartLegend-4.html" data-type="entity-link" >ChartLegend</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartSeries.html" data-type="entity-link" >ChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartSeries-1.html" data-type="entity-link" >ChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartSeries-2.html" data-type="entity-link" >ChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartSeries-3.html" data-type="entity-link" >ChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartSeries-4.html" data-type="entity-link" >ChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTitle.html" data-type="entity-link" >ChartTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTitle-1.html" data-type="entity-link" >ChartTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTitle-2.html" data-type="entity-link" >ChartTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTitle-3.html" data-type="entity-link" >ChartTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartTitle-4.html" data-type="entity-link" >ChartTitle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConvertRecordMutationResponse.html" data-type="entity-link" >ConvertRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dashboard.html" data-type="entity-link" >Dashboard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteChannelMutationResponse.html" data-type="entity-link" >DeleteChannelMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/deleteLayoutMutationResponse.html" data-type="entity-link" >deleteLayoutMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePageMutationResponse.html" data-type="entity-link" >DeletePageMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeletePositionAttributeCategoryMutationResponse.html" data-type="entity-link" >DeletePositionAttributeCategoryMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRecordMutationResponse.html" data-type="entity-link" >DeleteRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRecordsMutationResponse.html" data-type="entity-link" >DeleteRecordsMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteRoleMutationResponse.html" data-type="entity-link" >DeleteRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteSubscriptionMutationResponse.html" data-type="entity-link" >DeleteSubscriptionMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteTemplateMutationResponse.html" data-type="entity-link" >DeleteTemplateMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteUsersFromApplicationMutationResponse.html" data-type="entity-link" >DeleteUsersFromApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeleteUsersMutationResponse.html" data-type="entity-link" >DeleteUsersMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-2.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-3.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-4.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-5.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-6.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-7.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-8.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-9.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-10.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-11.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-12.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-13.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-14.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-15.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-16.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-17.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-18.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-19.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-20.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-21.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditApplicationMutationResponse.html" data-type="entity-link" >EditApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditChannelMutationResponse.html" data-type="entity-link" >EditChannelMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditDashboardMutationResponse.html" data-type="entity-link" >EditDashboardMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditLayoutMutationResponse.html" data-type="entity-link" >EditLayoutMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditPositionAttributeCategoryMutationResponse.html" data-type="entity-link" >EditPositionAttributeCategoryMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRecordMutationResponse.html" data-type="entity-link" >EditRecordMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRecordsMutationResponse.html" data-type="entity-link" >EditRecordsMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditRoleMutationResponse.html" data-type="entity-link" >EditRoleMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditSubscriptionMutationResponse.html" data-type="entity-link" >EditSubscriptionMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserMutationResponse.html" data-type="entity-link" >EditUserMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditUserProfileMutationResponse.html" data-type="entity-link" >EditUserProfileMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Form.html" data-type="entity-link" >Form</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationByIdQueryResponse.html" data-type="entity-link" >GetApplicationByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetApplicationsQueryResponse.html" data-type="entity-link" >GetApplicationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetChannelsQueryResponse.html" data-type="entity-link" >GetChannelsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetDashboardByIdQueryResponse.html" data-type="entity-link" >GetDashboardByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormByIdQueryResponse.html" data-type="entity-link" >GetFormByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetFormsQueryResponse.html" data-type="entity-link" >GetFormsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetNotificationsQueryResponse.html" data-type="entity-link" >GetNotificationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetPermissionsQueryResponse.html" data-type="entity-link" >GetPermissionsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetProfileQueryResponse.html" data-type="entity-link" >GetProfileQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetQueryTypes.html" data-type="entity-link" >GetQueryTypes</a>
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
                                <a href="interfaces/GetRolesFromApplicationsQueryResponse.html" data-type="entity-link" >GetRolesFromApplicationsQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetRolesQueryResponse.html" data-type="entity-link" >GetRolesQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetType.html" data-type="entity-link" >GetType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetUsersQueryResponse.html" data-type="entity-link" >GetUsersQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GetWorkflowByIdQueryResponse.html" data-type="entity-link" >GetWorkflowByIdQueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridLayout.html" data-type="entity-link" >GridLayout</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridSettings.html" data-type="entity-link" >GridSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContentType.html" data-type="entity-link" >IContentType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRecord.html" data-type="entity-link" >IRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatus.html" data-type="entity-link" >IStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidgetType.html" data-type="entity-link" >IWidgetType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Layout.html" data-type="entity-link" >Layout</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LayoutPreviewData.html" data-type="entity-link" >LayoutPreviewData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationSubscriptionResponse.html" data-type="entity-link" >NotificationSubscriptionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PositionAttribute.html" data-type="entity-link" >PositionAttribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PositionAttributeCategory.html" data-type="entity-link" >PositionAttributeCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PreferencesDialogData.html" data-type="entity-link" >PreferencesDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublishMutationResponse.html" data-type="entity-link" >PublishMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PublishNotificationMutationResponse.html" data-type="entity-link" >PublishNotificationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PullJob.html" data-type="entity-link" >PullJob</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Record.html" data-type="entity-link" >Record</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecordAddedSubscriptionResponse.html" data-type="entity-link" >RecordAddedSubscriptionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RecordConnection.html" data-type="entity-link" >RecordConnection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Resource.html" data-type="entity-link" >Resource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeeNotificationMutationResponse.html" data-type="entity-link" >SeeNotificationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeeNotificationsMutationResponse.html" data-type="entity-link" >SeeNotificationsMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnackBar.html" data-type="entity-link" >SnackBar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnackBarData.html" data-type="entity-link" >SnackBarData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatusDialogData.html" data-type="entity-link" >StatusDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Step.html" data-type="entity-link" >Step</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subscription.html" data-type="entity-link" >Subscription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToggleApplicationLockMutationResponse.html" data-type="entity-link" >ToggleApplicationLockMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdateTemplateMutationResponse.html" data-type="entity-link" >UpdateTemplateMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadFileMutationResponse.html" data-type="entity-link" >UploadFileMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Version.html" data-type="entity-link" >Version</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Version-1.html" data-type="entity-link" >Version</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Workflow.html" data-type="entity-link" >Workflow</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
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