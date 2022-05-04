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
                                <a href="modules/ConfigDisplayGridFieldsModalModule.html" data-type="entity-link" >ConfigDisplayGridFieldsModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConfigDisplayGridFieldsModalModule-28e2dc914a30bf5e73fc87a209e03f168b436ff1cebf1990035d5d3a3a8ab6b383c3c08858a4450c2797289c5da088187502bbf3570f1dd8d1d1261b3db18c72"' : 'data-target="#xs-components-links-module-ConfigDisplayGridFieldsModalModule-28e2dc914a30bf5e73fc87a209e03f168b436ff1cebf1990035d5d3a3a8ab6b383c3c08858a4450c2797289c5da088187502bbf3570f1dd8d1d1261b3db18c72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConfigDisplayGridFieldsModalModule-28e2dc914a30bf5e73fc87a209e03f168b436ff1cebf1990035d5d3a3a8ab6b383c3c08858a4450c2797289c5da088187502bbf3570f1dd8d1d1261b3db18c72"' :
                                            'id="xs-components-links-module-ConfigDisplayGridFieldsModalModule-28e2dc914a30bf5e73fc87a209e03f168b436ff1cebf1990035d5d3a3a8ab6b383c3c08858a4450c2797289c5da088187502bbf3570f1dd8d1d1261b3db18c72"' }>
                                            <li class="link">
                                                <a href="components/ConfigDisplayGridFieldsModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigDisplayGridFieldsModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeAccessModule.html" data-type="entity-link" >SafeAccessModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeAccessModule-c5fca664b31696f7d17d6b6e15d3490eaac9d0c038ded607ad7da4ad83d1f469684834612ad76148e2e67b4d0734b62e1f761c4b0449d3ca1a3df88c1d7787a5"' : 'data-target="#xs-components-links-module-SafeAccessModule-c5fca664b31696f7d17d6b6e15d3490eaac9d0c038ded607ad7da4ad83d1f469684834612ad76148e2e67b4d0734b62e1f761c4b0449d3ca1a3df88c1d7787a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAccessModule-c5fca664b31696f7d17d6b6e15d3490eaac9d0c038ded607ad7da4ad83d1f469684834612ad76148e2e67b4d0734b62e1f761c4b0449d3ca1a3df88c1d7787a5"' :
                                            'id="xs-components-links-module-SafeAccessModule-c5fca664b31696f7d17d6b6e15d3490eaac9d0c038ded607ad7da4ad83d1f469684834612ad76148e2e67b4d0734b62e1f761c4b0449d3ca1a3df88c1d7787a5"' }>
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
                                            'data-target="#components-links-module-SafeAddUserModule-06a62fe39dc71e64b61d661cd94b323c198c1650d849ccc32e20a201764b7845071f7d04439d34423f23f31a2f66caef3e07d4b0d96b650bb3276f6867fba7a7"' : 'data-target="#xs-components-links-module-SafeAddUserModule-06a62fe39dc71e64b61d661cd94b323c198c1650d849ccc32e20a201764b7845071f7d04439d34423f23f31a2f66caef3e07d4b0d96b650bb3276f6867fba7a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeAddUserModule-06a62fe39dc71e64b61d661cd94b323c198c1650d849ccc32e20a201764b7845071f7d04439d34423f23f31a2f66caef3e07d4b0d96b650bb3276f6867fba7a7"' :
                                            'id="xs-components-links-module-SafeAddUserModule-06a62fe39dc71e64b61d661cd94b323c198c1650d849ccc32e20a201764b7845071f7d04439d34423f23f31a2f66caef3e07d4b0d96b650bb3276f6867fba7a7"' }>
                                            <li class="link">
                                                <a href="components/SafeAddUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeAddUserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeApplicationDropdownModule.html" data-type="entity-link" >SafeApplicationDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeApplicationDropdownModule-e4e2904945addd13b9f8d3b81778df5b6908cd687efa9c8dfd6f483afe7ea6e5ccd8fef87f0dbb50b5417600c7dc4f0113b2e7190874eebbbad0fc78084d9bbd"' : 'data-target="#xs-components-links-module-SafeApplicationDropdownModule-e4e2904945addd13b9f8d3b81778df5b6908cd687efa9c8dfd6f483afe7ea6e5ccd8fef87f0dbb50b5417600c7dc4f0113b2e7190874eebbbad0fc78084d9bbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeApplicationDropdownModule-e4e2904945addd13b9f8d3b81778df5b6908cd687efa9c8dfd6f483afe7ea6e5ccd8fef87f0dbb50b5417600c7dc4f0113b2e7190874eebbbad0fc78084d9bbd"' :
                                            'id="xs-components-links-module-SafeApplicationDropdownModule-e4e2904945addd13b9f8d3b81778df5b6908cd687efa9c8dfd6f483afe7ea6e5ccd8fef87f0dbb50b5417600c7dc4f0113b2e7190874eebbbad0fc78084d9bbd"' }>
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
                                            'data-target="#components-links-module-SafeApplicationsSummaryModule-3deaf49ac8326c155f8ac190aa680d6c8a9f08bab744c8d9382a2484946aa6c8e214aa5ea278e4caf39c1841a9b8518c2ba42b51c41e0fdc519c87c6b7ebe2f9"' : 'data-target="#xs-components-links-module-SafeApplicationsSummaryModule-3deaf49ac8326c155f8ac190aa680d6c8a9f08bab744c8d9382a2484946aa6c8e214aa5ea278e4caf39c1841a9b8518c2ba42b51c41e0fdc519c87c6b7ebe2f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeApplicationsSummaryModule-3deaf49ac8326c155f8ac190aa680d6c8a9f08bab744c8d9382a2484946aa6c8e214aa5ea278e4caf39c1841a9b8518c2ba42b51c41e0fdc519c87c6b7ebe2f9"' :
                                            'id="xs-components-links-module-SafeApplicationsSummaryModule-3deaf49ac8326c155f8ac190aa680d6c8a9f08bab744c8d9382a2484946aa6c8e214aa5ea278e4caf39c1841a9b8518c2ba42b51c41e0fdc519c87c6b7ebe2f9"' }>
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
                                <a href="modules/SafeArrayFilterMenuModule.html" data-type="entity-link" >SafeArrayFilterMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeArrayFilterMenuModule-d795adc3aa9d851cc6e580f47724bb0a5a40f05610fc5b8eb19be5ed09b6ba42e276d7103bfd38a7f60e0f7600866bba652f1f6845d3ee8486aed980683d65b4"' : 'data-target="#xs-components-links-module-SafeArrayFilterMenuModule-d795adc3aa9d851cc6e580f47724bb0a5a40f05610fc5b8eb19be5ed09b6ba42e276d7103bfd38a7f60e0f7600866bba652f1f6845d3ee8486aed980683d65b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeArrayFilterMenuModule-d795adc3aa9d851cc6e580f47724bb0a5a40f05610fc5b8eb19be5ed09b6ba42e276d7103bfd38a7f60e0f7600866bba652f1f6845d3ee8486aed980683d65b4"' :
                                            'id="xs-components-links-module-SafeArrayFilterMenuModule-d795adc3aa9d851cc6e580f47724bb0a5a40f05610fc5b8eb19be5ed09b6ba42e276d7103bfd38a7f60e0f7600866bba652f1f6845d3ee8486aed980683d65b4"' }>
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
                                            'data-target="#components-links-module-SafeArrayFilterModule-87e990af13930f2a1d2412d80ed1d3878b14974d8a9fef751907a35d07bddd4a1aa4c9f9b9818b79884b1adcb308f6a31af35dc525be38bd8b8b00b6ffca8839"' : 'data-target="#xs-components-links-module-SafeArrayFilterModule-87e990af13930f2a1d2412d80ed1d3878b14974d8a9fef751907a35d07bddd4a1aa4c9f9b9818b79884b1adcb308f6a31af35dc525be38bd8b8b00b6ffca8839"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeArrayFilterModule-87e990af13930f2a1d2412d80ed1d3878b14974d8a9fef751907a35d07bddd4a1aa4c9f9b9818b79884b1adcb308f6a31af35dc525be38bd8b8b00b6ffca8839"' :
                                            'id="xs-components-links-module-SafeArrayFilterModule-87e990af13930f2a1d2412d80ed1d3878b14974d8a9fef751907a35d07bddd4a1aa4c9f9b9818b79884b1adcb308f6a31af35dc525be38bd8b8b00b6ffca8839"' }>
                                            <li class="link">
                                                <a href="components/SafeArrayFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeArrayFilterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeBarChartModule.html" data-type="entity-link" >SafeBarChartModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeBarChartModule-854ac3accee222ebedbf79855a8f7be387fc00df2d70306a1a0447395b5255cd6d89dfcb521176930ce19671db7077712fda2139b931779846571fe5b8e267cc"' : 'data-target="#xs-components-links-module-SafeBarChartModule-854ac3accee222ebedbf79855a8f7be387fc00df2d70306a1a0447395b5255cd6d89dfcb521176930ce19671db7077712fda2139b931779846571fe5b8e267cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeBarChartModule-854ac3accee222ebedbf79855a8f7be387fc00df2d70306a1a0447395b5255cd6d89dfcb521176930ce19671db7077712fda2139b931779846571fe5b8e267cc"' :
                                            'id="xs-components-links-module-SafeBarChartModule-854ac3accee222ebedbf79855a8f7be387fc00df2d70306a1a0447395b5255cd6d89dfcb521176930ce19671db7077712fda2139b931779846571fe5b8e267cc"' }>
                                            <li class="link">
                                                <a href="components/SafeBarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeBarChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeButtonModule.html" data-type="entity-link" >SafeButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeButtonModule-56bbf360a27c3609ab961e6e792ba7cf1812989dcecd9b8b4b1c330e78e7989972ebca2ae35666cbfc329fc93b789bf1311011ddbf6fddc1779e90d6e40e4567"' : 'data-target="#xs-components-links-module-SafeButtonModule-56bbf360a27c3609ab961e6e792ba7cf1812989dcecd9b8b4b1c330e78e7989972ebca2ae35666cbfc329fc93b789bf1311011ddbf6fddc1779e90d6e40e4567"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeButtonModule-56bbf360a27c3609ab961e6e792ba7cf1812989dcecd9b8b4b1c330e78e7989972ebca2ae35666cbfc329fc93b789bf1311011ddbf6fddc1779e90d6e40e4567"' :
                                            'id="xs-components-links-module-SafeButtonModule-56bbf360a27c3609ab961e6e792ba7cf1812989dcecd9b8b4b1c330e78e7989972ebca2ae35666cbfc329fc93b789bf1311011ddbf6fddc1779e90d6e40e4567"' }>
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
                                            'data-target="#components-links-module-SafeChartModule-3a8c08fd926f3148dcd321a45b89bbc8d040450243c88af9564d37a8fcf8f629b38e56f7c9a78de54789f152fa872a963e6ed46a602a5d3e3b625185bd4db1ab"' : 'data-target="#xs-components-links-module-SafeChartModule-3a8c08fd926f3148dcd321a45b89bbc8d040450243c88af9564d37a8fcf8f629b38e56f7c9a78de54789f152fa872a963e6ed46a602a5d3e3b625185bd4db1ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChartModule-3a8c08fd926f3148dcd321a45b89bbc8d040450243c88af9564d37a8fcf8f629b38e56f7c9a78de54789f152fa872a963e6ed46a602a5d3e3b625185bd4db1ab"' :
                                            'id="xs-components-links-module-SafeChartModule-3a8c08fd926f3148dcd321a45b89bbc8d040450243c88af9564d37a8fcf8f629b38e56f7c9a78de54789f152fa872a963e6ed46a602a5d3e3b625185bd4db1ab"' }>
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
                                            'data-target="#components-links-module-SafeChartSettingsModule-140b6e3963a2d49d6f5bc169f69f61baa0dd03ad8394d53acb7529e4ad383a1c0f49388b8bef598ccf9d915c6d60a800b4c3c3f50fc89d3cac8992deb3e7279f"' : 'data-target="#xs-components-links-module-SafeChartSettingsModule-140b6e3963a2d49d6f5bc169f69f61baa0dd03ad8394d53acb7529e4ad383a1c0f49388b8bef598ccf9d915c6d60a800b4c3c3f50fc89d3cac8992deb3e7279f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChartSettingsModule-140b6e3963a2d49d6f5bc169f69f61baa0dd03ad8394d53acb7529e4ad383a1c0f49388b8bef598ccf9d915c6d60a800b4c3c3f50fc89d3cac8992deb3e7279f"' :
                                            'id="xs-components-links-module-SafeChartSettingsModule-140b6e3963a2d49d6f5bc169f69f61baa0dd03ad8394d53acb7529e4ad383a1c0f49388b8bef598ccf9d915c6d60a800b4c3c3f50fc89d3cac8992deb3e7279f"' }>
                                            <li class="link">
                                                <a href="components/SafeChartSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeChartSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeChooseRecordModalModule.html" data-type="entity-link" >SafeChooseRecordModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeChooseRecordModalModule-c47d23aa8950beee17250a2f7bf94e28d18b3428ef139a5f12dafb16b0feec18e8e53ed8771dee860ce826ab6fb81ce267af71d10b358ddfe47fcfc1bb2b9a18"' : 'data-target="#xs-components-links-module-SafeChooseRecordModalModule-c47d23aa8950beee17250a2f7bf94e28d18b3428ef139a5f12dafb16b0feec18e8e53ed8771dee860ce826ab6fb81ce267af71d10b358ddfe47fcfc1bb2b9a18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeChooseRecordModalModule-c47d23aa8950beee17250a2f7bf94e28d18b3428ef139a5f12dafb16b0feec18e8e53ed8771dee860ce826ab6fb81ce267af71d10b358ddfe47fcfc1bb2b9a18"' :
                                            'id="xs-components-links-module-SafeChooseRecordModalModule-c47d23aa8950beee17250a2f7bf94e28d18b3428ef139a5f12dafb16b0feec18e8e53ed8771dee860ce826ab6fb81ce267af71d10b358ddfe47fcfc1bb2b9a18"' }>
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
                                            'data-target="#components-links-module-SafeColumnChartModule-40862a84775cb13d7827c71b043915f3ed7a9c5e88689bda42d4675b4ee1c6095d293c65936ef2466ce51d8e5cf0b7b7b0438eb3c828d1eacad01b0176ef88ff"' : 'data-target="#xs-components-links-module-SafeColumnChartModule-40862a84775cb13d7827c71b043915f3ed7a9c5e88689bda42d4675b4ee1c6095d293c65936ef2466ce51d8e5cf0b7b7b0438eb3c828d1eacad01b0176ef88ff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeColumnChartModule-40862a84775cb13d7827c71b043915f3ed7a9c5e88689bda42d4675b4ee1c6095d293c65936ef2466ce51d8e5cf0b7b7b0438eb3c828d1eacad01b0176ef88ff"' :
                                            'id="xs-components-links-module-SafeColumnChartModule-40862a84775cb13d7827c71b043915f3ed7a9c5e88689bda42d4675b4ee1c6095d293c65936ef2466ce51d8e5cf0b7b7b0438eb3c828d1eacad01b0176ef88ff"' }>
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
                                            'data-target="#components-links-module-SafeConfirmModalModule-075fe08b2bed08c26c05b322873eeefe9eee11b74bf770c0472477a5c7c3b7ef546e0acb0d898e02b4670f4838270e44247b83a515c399ab4239e446fdcdad5f"' : 'data-target="#xs-components-links-module-SafeConfirmModalModule-075fe08b2bed08c26c05b322873eeefe9eee11b74bf770c0472477a5c7c3b7ef546e0acb0d898e02b4670f4838270e44247b83a515c399ab4239e446fdcdad5f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeConfirmModalModule-075fe08b2bed08c26c05b322873eeefe9eee11b74bf770c0472477a5c7c3b7ef546e0acb0d898e02b4670f4838270e44247b83a515c399ab4239e446fdcdad5f"' :
                                            'id="xs-components-links-module-SafeConfirmModalModule-075fe08b2bed08c26c05b322873eeefe9eee11b74bf770c0472477a5c7c3b7ef546e0acb0d898e02b4670f4838270e44247b83a515c399ab4239e446fdcdad5f"' }>
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
                                            'data-target="#components-links-module-SafeContentChoiceModule-11afcea6895f5dc6a05fbc9f28351214190aa823586e52fff71d66885735a3f42fa3b25dda059577cb13b5c2edf2d2fed4133d956a12ed5c5ea658cd14f93b3f"' : 'data-target="#xs-components-links-module-SafeContentChoiceModule-11afcea6895f5dc6a05fbc9f28351214190aa823586e52fff71d66885735a3f42fa3b25dda059577cb13b5c2edf2d2fed4133d956a12ed5c5ea658cd14f93b3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeContentChoiceModule-11afcea6895f5dc6a05fbc9f28351214190aa823586e52fff71d66885735a3f42fa3b25dda059577cb13b5c2edf2d2fed4133d956a12ed5c5ea658cd14f93b3f"' :
                                            'id="xs-components-links-module-SafeContentChoiceModule-11afcea6895f5dc6a05fbc9f28351214190aa823586e52fff71d66885735a3f42fa3b25dda059577cb13b5c2edf2d2fed4133d956a12ed5c5ea658cd14f93b3f"' }>
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
                                            'data-target="#components-links-module-SafeConvertModalModule-a5f60712cec900488f1b5650cc2d728872444e783e34a83e51b2968bf1249cab33b75abb05c1ad0fa83ef603315d0b8cd19a1e2c645184abf8735b88e57eb524"' : 'data-target="#xs-components-links-module-SafeConvertModalModule-a5f60712cec900488f1b5650cc2d728872444e783e34a83e51b2968bf1249cab33b75abb05c1ad0fa83ef603315d0b8cd19a1e2c645184abf8735b88e57eb524"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeConvertModalModule-a5f60712cec900488f1b5650cc2d728872444e783e34a83e51b2968bf1249cab33b75abb05c1ad0fa83ef603315d0b8cd19a1e2c645184abf8735b88e57eb524"' :
                                            'id="xs-components-links-module-SafeConvertModalModule-a5f60712cec900488f1b5650cc2d728872444e783e34a83e51b2968bf1249cab33b75abb05c1ad0fa83ef603315d0b8cd19a1e2c645184abf8735b88e57eb524"' }>
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
                                            'data-target="#components-links-module-SafeCoreGridModule-00a8f89bf6bc378b5604e63a23d41c6df4d786796a97fcc9a6c3a668c48653214603b9752eac4b90d6a70d7c4c640e1c00326ca9e98cc11c84aa406fbc42419f"' : 'data-target="#xs-components-links-module-SafeCoreGridModule-00a8f89bf6bc378b5604e63a23d41c6df4d786796a97fcc9a6c3a668c48653214603b9752eac4b90d6a70d7c4c640e1c00326ca9e98cc11c84aa406fbc42419f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeCoreGridModule-00a8f89bf6bc378b5604e63a23d41c6df4d786796a97fcc9a6c3a668c48653214603b9752eac4b90d6a70d7c4c640e1c00326ca9e98cc11c84aa406fbc42419f"' :
                                            'id="xs-components-links-module-SafeCoreGridModule-00a8f89bf6bc378b5604e63a23d41c6df4d786796a97fcc9a6c3a668c48653214603b9752eac4b90d6a70d7c4c640e1c00326ca9e98cc11c84aa406fbc42419f"' }>
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
                                            'data-target="#components-links-module-SafeDonutChartModule-2d82d23eb657c2a3f88ae32bccdbbd7ffaee58a1d5a054c9469cf5d5cfcd3a42c547a571b032a1278f944a85d29226836f6ec78900d14a3d28ba5a0d0195e10a"' : 'data-target="#xs-components-links-module-SafeDonutChartModule-2d82d23eb657c2a3f88ae32bccdbbd7ffaee58a1d5a054c9469cf5d5cfcd3a42c547a571b032a1278f944a85d29226836f6ec78900d14a3d28ba5a0d0195e10a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDonutChartModule-2d82d23eb657c2a3f88ae32bccdbbd7ffaee58a1d5a054c9469cf5d5cfcd3a42c547a571b032a1278f944a85d29226836f6ec78900d14a3d28ba5a0d0195e10a"' :
                                            'id="xs-components-links-module-SafeDonutChartModule-2d82d23eb657c2a3f88ae32bccdbbd7ffaee58a1d5a054c9469cf5d5cfcd3a42c547a571b032a1278f944a85d29226836f6ec78900d14a3d28ba5a0d0195e10a"' }>
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
                                            'data-target="#components-links-module-SafeDropdownFilterMenuModule-ed79c92b276d527f6246486d89be4d1974a1f138033a7d4866bf15b048769620ab52e53626e8b73c03a7137c3a13b794d3a0f0d28df3badb83df4c406e9c4b30"' : 'data-target="#xs-components-links-module-SafeDropdownFilterMenuModule-ed79c92b276d527f6246486d89be4d1974a1f138033a7d4866bf15b048769620ab52e53626e8b73c03a7137c3a13b794d3a0f0d28df3badb83df4c406e9c4b30"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDropdownFilterMenuModule-ed79c92b276d527f6246486d89be4d1974a1f138033a7d4866bf15b048769620ab52e53626e8b73c03a7137c3a13b794d3a0f0d28df3badb83df4c406e9c4b30"' :
                                            'id="xs-components-links-module-SafeDropdownFilterMenuModule-ed79c92b276d527f6246486d89be4d1974a1f138033a7d4866bf15b048769620ab52e53626e8b73c03a7137c3a13b794d3a0f0d28df3badb83df4c406e9c4b30"' }>
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
                                            'data-target="#components-links-module-SafeDropdownFilterModule-a8f9ba6b308225bb9b75be8ed345641b81c0ec4b326b04f49ca8538a7965247a16526eebf78aba00cfd54364bf25db0237f50495e594e4571fb53867bd58ee79"' : 'data-target="#xs-components-links-module-SafeDropdownFilterModule-a8f9ba6b308225bb9b75be8ed345641b81c0ec4b326b04f49ca8538a7965247a16526eebf78aba00cfd54364bf25db0237f50495e594e4571fb53867bd58ee79"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeDropdownFilterModule-a8f9ba6b308225bb9b75be8ed345641b81c0ec4b326b04f49ca8538a7965247a16526eebf78aba00cfd54364bf25db0237f50495e594e4571fb53867bd58ee79"' :
                                            'id="xs-components-links-module-SafeDropdownFilterModule-a8f9ba6b308225bb9b75be8ed345641b81c0ec4b326b04f49ca8538a7965247a16526eebf78aba00cfd54364bf25db0237f50495e594e4571fb53867bd58ee79"' }>
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
                                            'data-target="#components-links-module-SafeEditorModule-a943677db59b0b8fd3a62beb1b51ac9f343d4250f3d7cc9623b1987e22661a824062e0e6824cf1bef548a4516d648febc95920f1865361635e3d657cc42e57de"' : 'data-target="#xs-components-links-module-SafeEditorModule-a943677db59b0b8fd3a62beb1b51ac9f343d4250f3d7cc9623b1987e22661a824062e0e6824cf1bef548a4516d648febc95920f1865361635e3d657cc42e57de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEditorModule-a943677db59b0b8fd3a62beb1b51ac9f343d4250f3d7cc9623b1987e22661a824062e0e6824cf1bef548a4516d648febc95920f1865361635e3d657cc42e57de"' :
                                            'id="xs-components-links-module-SafeEditorModule-a943677db59b0b8fd3a62beb1b51ac9f343d4250f3d7cc9623b1987e22661a824062e0e6824cf1bef548a4516d648febc95920f1865361635e3d657cc42e57de"' }>
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
                                            'data-target="#components-links-module-SafeEditorSettingsModule-86443fd747e24ff28d5e83a71a5c34c75b4cacb904be43a1020b6203495910f6b2a2986f11dc01e157ee827937df17b04db7d9b49d19b4c965d6a24c6ca82f04"' : 'data-target="#xs-components-links-module-SafeEditorSettingsModule-86443fd747e24ff28d5e83a71a5c34c75b4cacb904be43a1020b6203495910f6b2a2986f11dc01e157ee827937df17b04db7d9b49d19b4c965d6a24c6ca82f04"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEditorSettingsModule-86443fd747e24ff28d5e83a71a5c34c75b4cacb904be43a1020b6203495910f6b2a2986f11dc01e157ee827937df17b04db7d9b49d19b4c965d6a24c6ca82f04"' :
                                            'id="xs-components-links-module-SafeEditorSettingsModule-86443fd747e24ff28d5e83a71a5c34c75b4cacb904be43a1020b6203495910f6b2a2986f11dc01e157ee827937df17b04db7d9b49d19b4c965d6a24c6ca82f04"' }>
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
                                            'data-target="#components-links-module-SafeEmailPreviewModule-cd9ed0ae195a367f21277fd99d2a1dc7911f02e889055627137d7a81d246fff49f41fdf57dca544cd5a001c2d6030b83a47dd437001bf47a89eea559c101ed98"' : 'data-target="#xs-components-links-module-SafeEmailPreviewModule-cd9ed0ae195a367f21277fd99d2a1dc7911f02e889055627137d7a81d246fff49f41fdf57dca544cd5a001c2d6030b83a47dd437001bf47a89eea559c101ed98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeEmailPreviewModule-cd9ed0ae195a367f21277fd99d2a1dc7911f02e889055627137d7a81d246fff49f41fdf57dca544cd5a001c2d6030b83a47dd437001bf47a89eea559c101ed98"' :
                                            'id="xs-components-links-module-SafeEmailPreviewModule-cd9ed0ae195a367f21277fd99d2a1dc7911f02e889055627137d7a81d246fff49f41fdf57dca544cd5a001c2d6030b83a47dd437001bf47a89eea559c101ed98"' }>
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
                                            'data-target="#components-links-module-SafeExpandedCommentModule-884abfee6ae74c77746492e4aeca04afba04d20e7f81722fea340d70c403a120d7ce5b87765af79e67e766ee8b76769905e84c23989107aaf2d5ed38086133fd"' : 'data-target="#xs-components-links-module-SafeExpandedCommentModule-884abfee6ae74c77746492e4aeca04afba04d20e7f81722fea340d70c403a120d7ce5b87765af79e67e766ee8b76769905e84c23989107aaf2d5ed38086133fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeExpandedCommentModule-884abfee6ae74c77746492e4aeca04afba04d20e7f81722fea340d70c403a120d7ce5b87765af79e67e766ee8b76769905e84c23989107aaf2d5ed38086133fd"' :
                                            'id="xs-components-links-module-SafeExpandedCommentModule-884abfee6ae74c77746492e4aeca04afba04d20e7f81722fea340d70c403a120d7ce5b87765af79e67e766ee8b76769905e84c23989107aaf2d5ed38086133fd"' }>
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
                                            'data-target="#components-links-module-SafeExportModule-e1db50e79da3404829e377bdfdcff87cd0b432943954439d1d96ed8e12c435be6b49b729e21ff15bf24cb4cb1ed2201cae77f32fd5c909d9d023ce48851f37a6"' : 'data-target="#xs-components-links-module-SafeExportModule-e1db50e79da3404829e377bdfdcff87cd0b432943954439d1d96ed8e12c435be6b49b729e21ff15bf24cb4cb1ed2201cae77f32fd5c909d9d023ce48851f37a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeExportModule-e1db50e79da3404829e377bdfdcff87cd0b432943954439d1d96ed8e12c435be6b49b729e21ff15bf24cb4cb1ed2201cae77f32fd5c909d9d023ce48851f37a6"' :
                                            'id="xs-components-links-module-SafeExportModule-e1db50e79da3404829e377bdfdcff87cd0b432943954439d1d96ed8e12c435be6b49b729e21ff15bf24cb4cb1ed2201cae77f32fd5c909d9d023ce48851f37a6"' }>
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
                                            'data-target="#components-links-module-SafeFormBuilderModule-f7a853b36826a1b54547557b5238ca96a160e38b223f62c524ad77bc62612b5d681f360f40fd3d70e6ba00ae2b8cf175c0fb458c6fd4983bf1dff74da13e22a1"' : 'data-target="#xs-components-links-module-SafeFormBuilderModule-f7a853b36826a1b54547557b5238ca96a160e38b223f62c524ad77bc62612b5d681f360f40fd3d70e6ba00ae2b8cf175c0fb458c6fd4983bf1dff74da13e22a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormBuilderModule-f7a853b36826a1b54547557b5238ca96a160e38b223f62c524ad77bc62612b5d681f360f40fd3d70e6ba00ae2b8cf175c0fb458c6fd4983bf1dff74da13e22a1"' :
                                            'id="xs-components-links-module-SafeFormBuilderModule-f7a853b36826a1b54547557b5238ca96a160e38b223f62c524ad77bc62612b5d681f360f40fd3d70e6ba00ae2b8cf175c0fb458c6fd4983bf1dff74da13e22a1"' }>
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
                                            'data-target="#components-links-module-SafeFormModalModule-97c5cb3a297a9004238cd8b66f388ed2b30e8bf0f07d0803f0c31a153c392b9188c9b4ab845e297fd82831d26ba0a9a076e86c6b3da3cf22d3b2d460c7d76a03"' : 'data-target="#xs-components-links-module-SafeFormModalModule-97c5cb3a297a9004238cd8b66f388ed2b30e8bf0f07d0803f0c31a153c392b9188c9b4ab845e297fd82831d26ba0a9a076e86c6b3da3cf22d3b2d460c7d76a03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormModalModule-97c5cb3a297a9004238cd8b66f388ed2b30e8bf0f07d0803f0c31a153c392b9188c9b4ab845e297fd82831d26ba0a9a076e86c6b3da3cf22d3b2d460c7d76a03"' :
                                            'id="xs-components-links-module-SafeFormModalModule-97c5cb3a297a9004238cd8b66f388ed2b30e8bf0f07d0803f0c31a153c392b9188c9b4ab845e297fd82831d26ba0a9a076e86c6b3da3cf22d3b2d460c7d76a03"' }>
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
                                            'data-target="#components-links-module-SafeFormModule-fc0b61690f1b739b47c22df79d061005329702bbbfc5567e916d3c23fbe79b72ca8e6d5b3d401f0d3abbec244c24ea16e19b007ceb5ea0730643ae7ac0c7cda5"' : 'data-target="#xs-components-links-module-SafeFormModule-fc0b61690f1b739b47c22df79d061005329702bbbfc5567e916d3c23fbe79b72ca8e6d5b3d401f0d3abbec244c24ea16e19b007ceb5ea0730643ae7ac0c7cda5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeFormModule-fc0b61690f1b739b47c22df79d061005329702bbbfc5567e916d3c23fbe79b72ca8e6d5b3d401f0d3abbec244c24ea16e19b007ceb5ea0730643ae7ac0c7cda5"' :
                                            'id="xs-components-links-module-SafeFormModule-fc0b61690f1b739b47c22df79d061005329702bbbfc5567e916d3c23fbe79b72ca8e6d5b3d401f0d3abbec244c24ea16e19b007ceb5ea0730643ae7ac0c7cda5"' }>
                                            <li class="link">
                                                <a href="components/SafeFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeGridModule.html" data-type="entity-link" >SafeGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeGridModule-f16a7b88032bbcd42353827f290f6648b1d02a1c21d8e2edddae80cf53636ae84dbef7d00db40673866b3bd91e4407391262c2c1c877b3816c9d992e2dd776ac"' : 'data-target="#xs-components-links-module-SafeGridModule-f16a7b88032bbcd42353827f290f6648b1d02a1c21d8e2edddae80cf53636ae84dbef7d00db40673866b3bd91e4407391262c2c1c877b3816c9d992e2dd776ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridModule-f16a7b88032bbcd42353827f290f6648b1d02a1c21d8e2edddae80cf53636ae84dbef7d00db40673866b3bd91e4407391262c2c1c877b3816c9d992e2dd776ac"' :
                                            'id="xs-components-links-module-SafeGridModule-f16a7b88032bbcd42353827f290f6648b1d02a1c21d8e2edddae80cf53636ae84dbef7d00db40673866b3bd91e4407391262c2c1c877b3816c9d992e2dd776ac"' }>
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
                                            'data-target="#components-links-module-SafeGridRowActionsModule-d87abbbd80282d04585f671182890ced19534e91b5a1290353aa2531db1176d72f69d9b6a4094ffba4d20231842c41dcefb1f0fdd69c085d66225bd2226441db"' : 'data-target="#xs-components-links-module-SafeGridRowActionsModule-d87abbbd80282d04585f671182890ced19534e91b5a1290353aa2531db1176d72f69d9b6a4094ffba4d20231842c41dcefb1f0fdd69c085d66225bd2226441db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridRowActionsModule-d87abbbd80282d04585f671182890ced19534e91b5a1290353aa2531db1176d72f69d9b6a4094ffba4d20231842c41dcefb1f0fdd69c085d66225bd2226441db"' :
                                            'id="xs-components-links-module-SafeGridRowActionsModule-d87abbbd80282d04585f671182890ced19534e91b5a1290353aa2531db1176d72f69d9b6a4094ffba4d20231842c41dcefb1f0fdd69c085d66225bd2226441db"' }>
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
                                            'data-target="#components-links-module-SafeGridSettingsModule-f1d419ed2ce242489b32644e29669309e517f6da216747e4c12d7e153aabeda04ae04ba24586a85ea8ced90119cedfaa05ad2c55c938910750f0025a716db665"' : 'data-target="#xs-components-links-module-SafeGridSettingsModule-f1d419ed2ce242489b32644e29669309e517f6da216747e4c12d7e153aabeda04ae04ba24586a85ea8ced90119cedfaa05ad2c55c938910750f0025a716db665"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridSettingsModule-f1d419ed2ce242489b32644e29669309e517f6da216747e4c12d7e153aabeda04ae04ba24586a85ea8ced90119cedfaa05ad2c55c938910750f0025a716db665"' :
                                            'id="xs-components-links-module-SafeGridSettingsModule-f1d419ed2ce242489b32644e29669309e517f6da216747e4c12d7e153aabeda04ae04ba24586a85ea8ced90119cedfaa05ad2c55c938910750f0025a716db665"' }>
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
                                            'data-target="#components-links-module-SafeGridToolbarModule-9b91e7e0e059a1bd9e5a10b81ac7482d5530c814dd4406339d49b668ff0254cf540705970ed10186a9e31b889af6f4446237c254e105a9aad3c539ccc63b7ffd"' : 'data-target="#xs-components-links-module-SafeGridToolbarModule-9b91e7e0e059a1bd9e5a10b81ac7482d5530c814dd4406339d49b668ff0254cf540705970ed10186a9e31b889af6f4446237c254e105a9aad3c539ccc63b7ffd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridToolbarModule-9b91e7e0e059a1bd9e5a10b81ac7482d5530c814dd4406339d49b668ff0254cf540705970ed10186a9e31b889af6f4446237c254e105a9aad3c539ccc63b7ffd"' :
                                            'id="xs-components-links-module-SafeGridToolbarModule-9b91e7e0e059a1bd9e5a10b81ac7482d5530c814dd4406339d49b668ff0254cf540705970ed10186a9e31b889af6f4446237c254e105a9aad3c539ccc63b7ffd"' }>
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
                                            'data-target="#components-links-module-SafeGridWidgetModule-ae24ae7fcef71c5ef85021f1ea13ecd25f6433a1629e17982c68c6eb03a8d9dc9445c6b5c55179ef893f3c31ec484d8444c6420b51b276ac773e4b8b1f85863c"' : 'data-target="#xs-components-links-module-SafeGridWidgetModule-ae24ae7fcef71c5ef85021f1ea13ecd25f6433a1629e17982c68c6eb03a8d9dc9445c6b5c55179ef893f3c31ec484d8444c6420b51b276ac773e4b8b1f85863c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeGridWidgetModule-ae24ae7fcef71c5ef85021f1ea13ecd25f6433a1629e17982c68c6eb03a8d9dc9445c6b5c55179ef893f3c31ec484d8444c6420b51b276ac773e4b8b1f85863c"' :
                                            'id="xs-components-links-module-SafeGridWidgetModule-ae24ae7fcef71c5ef85021f1ea13ecd25f6433a1629e17982c68c6eb03a8d9dc9445c6b5c55179ef893f3c31ec484d8444c6420b51b276ac773e4b8b1f85863c"' }>
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
                                            'data-target="#components-links-module-SafeIconModule-f1598a1bfe0fd124ad72ddc4b07b8644da342654587b6f513e5cff16664d078df845df6c0c95c88db06e8f13b6a5b84a380dfdf2f164029f514d0f04326e0cfc"' : 'data-target="#xs-components-links-module-SafeIconModule-f1598a1bfe0fd124ad72ddc4b07b8644da342654587b6f513e5cff16664d078df845df6c0c95c88db06e8f13b6a5b84a380dfdf2f164029f514d0f04326e0cfc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeIconModule-f1598a1bfe0fd124ad72ddc4b07b8644da342654587b6f513e5cff16664d078df845df6c0c95c88db06e8f13b6a5b84a380dfdf2f164029f514d0f04326e0cfc"' :
                                            'id="xs-components-links-module-SafeIconModule-f1598a1bfe0fd124ad72ddc4b07b8644da342654587b6f513e5cff16664d078df845df6c0c95c88db06e8f13b6a5b84a380dfdf2f164029f514d0f04326e0cfc"' }>
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
                                            'data-target="#components-links-module-SafeInviteUsersModule-f4b03a65db90807ce0921859b8283f479147d92039c96e15938fe97d534c0e6f6c10cc433a954cd9cfa639f25f83cb45db9da00695ccbfd805fddb227713fd67"' : 'data-target="#xs-components-links-module-SafeInviteUsersModule-f4b03a65db90807ce0921859b8283f479147d92039c96e15938fe97d534c0e6f6c10cc433a954cd9cfa639f25f83cb45db9da00695ccbfd805fddb227713fd67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeInviteUsersModule-f4b03a65db90807ce0921859b8283f479147d92039c96e15938fe97d534c0e6f6c10cc433a954cd9cfa639f25f83cb45db9da00695ccbfd805fddb227713fd67"' :
                                            'id="xs-components-links-module-SafeInviteUsersModule-f4b03a65db90807ce0921859b8283f479147d92039c96e15938fe97d534c0e6f6c10cc433a954cd9cfa639f25f83cb45db9da00695ccbfd805fddb227713fd67"' }>
                                            <li class="link">
                                                <a href="components/SafeInviteUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeInviteUsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeLayoutModule.html" data-type="entity-link" >SafeLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeLayoutModule-589631c8977f40fdeef7a17175e084a62398c62443749eff0f4dd637fef0a330a20708f8a7571d1c51d988629633dde9ad7796d32d10821a4585ccf66c4f7bd1"' : 'data-target="#xs-components-links-module-SafeLayoutModule-589631c8977f40fdeef7a17175e084a62398c62443749eff0f4dd637fef0a330a20708f8a7571d1c51d988629633dde9ad7796d32d10821a4585ccf66c4f7bd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeLayoutModule-589631c8977f40fdeef7a17175e084a62398c62443749eff0f4dd637fef0a330a20708f8a7571d1c51d988629633dde9ad7796d32d10821a4585ccf66c4f7bd1"' :
                                            'id="xs-components-links-module-SafeLayoutModule-589631c8977f40fdeef7a17175e084a62398c62443749eff0f4dd637fef0a330a20708f8a7571d1c51d988629633dde9ad7796d32d10821a4585ccf66c4f7bd1"' }>
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
                                            'data-target="#components-links-module-SafeLineChartModule-56de1553185bab0dd078a5f921a7481bd59c08727072476f3fe0db81fdbdf0d3be0b250e8199a2dcf0f5a35ac5ee3949c0f47ec62395d823a80eb2e6e16590d6"' : 'data-target="#xs-components-links-module-SafeLineChartModule-56de1553185bab0dd078a5f921a7481bd59c08727072476f3fe0db81fdbdf0d3be0b250e8199a2dcf0f5a35ac5ee3949c0f47ec62395d823a80eb2e6e16590d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeLineChartModule-56de1553185bab0dd078a5f921a7481bd59c08727072476f3fe0db81fdbdf0d3be0b250e8199a2dcf0f5a35ac5ee3949c0f47ec62395d823a80eb2e6e16590d6"' :
                                            'id="xs-components-links-module-SafeLineChartModule-56de1553185bab0dd078a5f921a7481bd59c08727072476f3fe0db81fdbdf0d3be0b250e8199a2dcf0f5a35ac5ee3949c0f47ec62395d823a80eb2e6e16590d6"' }>
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
                                            'data-target="#components-links-module-SafeMapModule-e6a37361899b9361633dc2a2a991ae1165a4e709cf4caa4137409c443c2b4329038c744416692f367df2bda80ea1e6104f19c7ba87b93bb2a5ca2ea5565cccdb"' : 'data-target="#xs-components-links-module-SafeMapModule-e6a37361899b9361633dc2a2a991ae1165a4e709cf4caa4137409c443c2b4329038c744416692f367df2bda80ea1e6104f19c7ba87b93bb2a5ca2ea5565cccdb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeMapModule-e6a37361899b9361633dc2a2a991ae1165a4e709cf4caa4137409c443c2b4329038c744416692f367df2bda80ea1e6104f19c7ba87b93bb2a5ca2ea5565cccdb"' :
                                            'id="xs-components-links-module-SafeMapModule-e6a37361899b9361633dc2a2a991ae1165a4e709cf4caa4137409c443c2b4329038c744416692f367df2bda80ea1e6104f19c7ba87b93bb2a5ca2ea5565cccdb"' }>
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
                                            'data-target="#components-links-module-SafeMapSettingsModule-728e4625611bc5c313a2bf93e31b0b68c36f14a5c5131fbd914b99daa539083ffcac1ecf1a548145273a2844b7bcacdf0ecf6fc56d8e307a181f0de7b755459c"' : 'data-target="#xs-components-links-module-SafeMapSettingsModule-728e4625611bc5c313a2bf93e31b0b68c36f14a5c5131fbd914b99daa539083ffcac1ecf1a548145273a2844b7bcacdf0ecf6fc56d8e307a181f0de7b755459c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeMapSettingsModule-728e4625611bc5c313a2bf93e31b0b68c36f14a5c5131fbd914b99daa539083ffcac1ecf1a548145273a2844b7bcacdf0ecf6fc56d8e307a181f0de7b755459c"' :
                                            'id="xs-components-links-module-SafeMapSettingsModule-728e4625611bc5c313a2bf93e31b0b68c36f14a5c5131fbd914b99daa539083ffcac1ecf1a548145273a2844b7bcacdf0ecf6fc56d8e307a181f0de7b755459c"' }>
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
                                            'data-target="#components-links-module-SafePieChartModule-2ab339e01c05d483d434e2ebaf0cf719fca05d4bb5e372d9ff244b6868d07d9b02de9b7ab02aa92f337d5ad361c779c5c93d8c2a06a695ef576c642cb31ed4b5"' : 'data-target="#xs-components-links-module-SafePieChartModule-2ab339e01c05d483d434e2ebaf0cf719fca05d4bb5e372d9ff244b6868d07d9b02de9b7ab02aa92f337d5ad361c779c5c93d8c2a06a695ef576c642cb31ed4b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePieChartModule-2ab339e01c05d483d434e2ebaf0cf719fca05d4bb5e372d9ff244b6868d07d9b02de9b7ab02aa92f337d5ad361c779c5c93d8c2a06a695ef576c642cb31ed4b5"' :
                                            'id="xs-components-links-module-SafePieChartModule-2ab339e01c05d483d434e2ebaf0cf719fca05d4bb5e372d9ff244b6868d07d9b02de9b7ab02aa92f337d5ad361c779c5c93d8c2a06a695ef576c642cb31ed4b5"' }>
                                            <li class="link">
                                                <a href="components/SafePieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePieChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafePreviousButtonModule.html" data-type="entity-link" >SafePreviousButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafePreviousButtonModule-97bac1b7a94ac63ae77d3831af00d08864068b6de7758f5ef99b06b6e75bc075dbf19e302328fc328ed990453dc9653ac0b9528d34896011b5561ac010281eb4"' : 'data-target="#xs-components-links-module-SafePreviousButtonModule-97bac1b7a94ac63ae77d3831af00d08864068b6de7758f5ef99b06b6e75bc075dbf19e302328fc328ed990453dc9653ac0b9528d34896011b5561ac010281eb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafePreviousButtonModule-97bac1b7a94ac63ae77d3831af00d08864068b6de7758f5ef99b06b6e75bc075dbf19e302328fc328ed990453dc9653ac0b9528d34896011b5561ac010281eb4"' :
                                            'id="xs-components-links-module-SafePreviousButtonModule-97bac1b7a94ac63ae77d3831af00d08864068b6de7758f5ef99b06b6e75bc075dbf19e302328fc328ed990453dc9653ac0b9528d34896011b5561ac010281eb4"' }>
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
                                            'data-target="#components-links-module-SafeProfileModule-a9706c3312d15d2057c3edfdaa25461ddba697e26b5851039c6a7b0645c2d9d1972a0c623d8429f8ff8e988e93971c252bbf45322b338da7986c16858e6e271c"' : 'data-target="#xs-components-links-module-SafeProfileModule-a9706c3312d15d2057c3edfdaa25461ddba697e26b5851039c6a7b0645c2d9d1972a0c623d8429f8ff8e988e93971c252bbf45322b338da7986c16858e6e271c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeProfileModule-a9706c3312d15d2057c3edfdaa25461ddba697e26b5851039c6a7b0645c2d9d1972a0c623d8429f8ff8e988e93971c252bbf45322b338da7986c16858e6e271c"' :
                                            'id="xs-components-links-module-SafeProfileModule-a9706c3312d15d2057c3edfdaa25461ddba697e26b5851039c6a7b0645c2d9d1972a0c623d8429f8ff8e988e93971c252bbf45322b338da7986c16858e6e271c"' }>
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
                                            'data-target="#components-links-module-SafeQueryBuilderModule-5d484a67f7a2890e31b08293378d979b3c6e9a7501940203dfd960d26bc491ed7c69ac09be4626dd37ef1b71e79b738786fe27aed44d28750523c14cc7508ae3"' : 'data-target="#xs-components-links-module-SafeQueryBuilderModule-5d484a67f7a2890e31b08293378d979b3c6e9a7501940203dfd960d26bc491ed7c69ac09be4626dd37ef1b71e79b738786fe27aed44d28750523c14cc7508ae3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeQueryBuilderModule-5d484a67f7a2890e31b08293378d979b3c6e9a7501940203dfd960d26bc491ed7c69ac09be4626dd37ef1b71e79b738786fe27aed44d28750523c14cc7508ae3"' :
                                            'id="xs-components-links-module-SafeQueryBuilderModule-5d484a67f7a2890e31b08293378d979b3c6e9a7501940203dfd960d26bc491ed7c69ac09be4626dd37ef1b71e79b738786fe27aed44d28750523c14cc7508ae3"' }>
                                            <li class="link">
                                                <a href="components/SafeQueryBuilderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeQueryBuilderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabFieldsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabFieldsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SafeTabSortComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTabSortComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeRecordDropdownModule.html" data-type="entity-link" >SafeRecordDropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeRecordDropdownModule-7c5f306d03281d2181772141ab45cee776ae3dd9e62f9d244ab4276a92d368345f542976c15c0a96e092b253a9d2985b274d637fbf831cb345fb4bc11028334d"' : 'data-target="#xs-components-links-module-SafeRecordDropdownModule-7c5f306d03281d2181772141ab45cee776ae3dd9e62f9d244ab4276a92d368345f542976c15c0a96e092b253a9d2985b274d637fbf831cb345fb4bc11028334d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordDropdownModule-7c5f306d03281d2181772141ab45cee776ae3dd9e62f9d244ab4276a92d368345f542976c15c0a96e092b253a9d2985b274d637fbf831cb345fb4bc11028334d"' :
                                            'id="xs-components-links-module-SafeRecordDropdownModule-7c5f306d03281d2181772141ab45cee776ae3dd9e62f9d244ab4276a92d368345f542976c15c0a96e092b253a9d2985b274d637fbf831cb345fb4bc11028334d"' }>
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
                                            'data-target="#components-links-module-SafeRecordHistoryModalModule-1fbf77825504c4d1abc975ef03336b7286887f05ca34d0f413adb57e58b0ca04bfd7c5b22e6c4ff46037384fe682f8880885f6c83ddb736777f11446782002a8"' : 'data-target="#xs-components-links-module-SafeRecordHistoryModalModule-1fbf77825504c4d1abc975ef03336b7286887f05ca34d0f413adb57e58b0ca04bfd7c5b22e6c4ff46037384fe682f8880885f6c83ddb736777f11446782002a8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordHistoryModalModule-1fbf77825504c4d1abc975ef03336b7286887f05ca34d0f413adb57e58b0ca04bfd7c5b22e6c4ff46037384fe682f8880885f6c83ddb736777f11446782002a8"' :
                                            'id="xs-components-links-module-SafeRecordHistoryModalModule-1fbf77825504c4d1abc975ef03336b7286887f05ca34d0f413adb57e58b0ca04bfd7c5b22e6c4ff46037384fe682f8880885f6c83ddb736777f11446782002a8"' }>
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
                                            'data-target="#components-links-module-SafeRecordHistoryModule-7cccb73735e77bc75e97879181f391d3ab478b8071ec234585544ebd23bbf3e9ad8b0ddd2f7ad8ab6af51c10d060cb6747663dbde84f3bebaf14e734a698e8ea"' : 'data-target="#xs-components-links-module-SafeRecordHistoryModule-7cccb73735e77bc75e97879181f391d3ab478b8071ec234585544ebd23bbf3e9ad8b0ddd2f7ad8ab6af51c10d060cb6747663dbde84f3bebaf14e734a698e8ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordHistoryModule-7cccb73735e77bc75e97879181f391d3ab478b8071ec234585544ebd23bbf3e9ad8b0ddd2f7ad8ab6af51c10d060cb6747663dbde84f3bebaf14e734a698e8ea"' :
                                            'id="xs-components-links-module-SafeRecordHistoryModule-7cccb73735e77bc75e97879181f391d3ab478b8071ec234585544ebd23bbf3e9ad8b0ddd2f7ad8ab6af51c10d060cb6747663dbde84f3bebaf14e734a698e8ea"' }>
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
                                            'data-target="#components-links-module-SafeRecordModalModule-618d794c6c14d6ee22a36b2654c8fa003cbdb7d339e20e6cf20cfe1ee125ccdfa7d674ff9febd76e064dd9adf12bc6ec1d05ddf06e87e25f23c68d57c6d7e386"' : 'data-target="#xs-components-links-module-SafeRecordModalModule-618d794c6c14d6ee22a36b2654c8fa003cbdb7d339e20e6cf20cfe1ee125ccdfa7d674ff9febd76e064dd9adf12bc6ec1d05ddf06e87e25f23c68d57c6d7e386"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordModalModule-618d794c6c14d6ee22a36b2654c8fa003cbdb7d339e20e6cf20cfe1ee125ccdfa7d674ff9febd76e064dd9adf12bc6ec1d05ddf06e87e25f23c68d57c6d7e386"' :
                                            'id="xs-components-links-module-SafeRecordModalModule-618d794c6c14d6ee22a36b2654c8fa003cbdb7d339e20e6cf20cfe1ee125ccdfa7d674ff9febd76e064dd9adf12bc6ec1d05ddf06e87e25f23c68d57c6d7e386"' }>
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
                                            'data-target="#components-links-module-SafeRecordSummaryModule-0aee943f3b2d9724215b1dff3e7b0c8d95a381a737838defd4505b28a457523fcea5f8faba3c7bb909b6a8b9faf3c6c0767ae8de65b3068fce638eb8a06b20df"' : 'data-target="#xs-components-links-module-SafeRecordSummaryModule-0aee943f3b2d9724215b1dff3e7b0c8d95a381a737838defd4505b28a457523fcea5f8faba3c7bb909b6a8b9faf3c6c0767ae8de65b3068fce638eb8a06b20df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRecordSummaryModule-0aee943f3b2d9724215b1dff3e7b0c8d95a381a737838defd4505b28a457523fcea5f8faba3c7bb909b6a8b9faf3c6c0767ae8de65b3068fce638eb8a06b20df"' :
                                            'id="xs-components-links-module-SafeRecordSummaryModule-0aee943f3b2d9724215b1dff3e7b0c8d95a381a737838defd4505b28a457523fcea5f8faba3c7bb909b6a8b9faf3c6c0767ae8de65b3068fce638eb8a06b20df"' }>
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
                                            'data-target="#components-links-module-SafeResourceDropdownModule-ff763eb828bb0512cd2c2c671375a4428bb52aa7cefbc027a8f5607e6a62366dd5512283ebcfaf2ed2c14a9e23d077d551ff640bab7d1b607ff04490d9d0bc24"' : 'data-target="#xs-components-links-module-SafeResourceDropdownModule-ff763eb828bb0512cd2c2c671375a4428bb52aa7cefbc027a8f5607e6a62366dd5512283ebcfaf2ed2c14a9e23d077d551ff640bab7d1b607ff04490d9d0bc24"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeResourceDropdownModule-ff763eb828bb0512cd2c2c671375a4428bb52aa7cefbc027a8f5607e6a62366dd5512283ebcfaf2ed2c14a9e23d077d551ff640bab7d1b607ff04490d9d0bc24"' :
                                            'id="xs-components-links-module-SafeResourceDropdownModule-ff763eb828bb0512cd2c2c671375a4428bb52aa7cefbc027a8f5607e6a62366dd5512283ebcfaf2ed2c14a9e23d077d551ff640bab7d1b607ff04490d9d0bc24"' }>
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
                                            'data-target="#components-links-module-SafeRolesModule-eddd2054ab0c1794a9d19efe4093ac2f691935816b8ecbc068a05383eba6487b1eb21e906ceafbc95c25f316a29097deebb3d8a5cc15d7bdc32f7462b628a9d5"' : 'data-target="#xs-components-links-module-SafeRolesModule-eddd2054ab0c1794a9d19efe4093ac2f691935816b8ecbc068a05383eba6487b1eb21e906ceafbc95c25f316a29097deebb3d8a5cc15d7bdc32f7462b628a9d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeRolesModule-eddd2054ab0c1794a9d19efe4093ac2f691935816b8ecbc068a05383eba6487b1eb21e906ceafbc95c25f316a29097deebb3d8a5cc15d7bdc32f7462b628a9d5"' :
                                            'id="xs-components-links-module-SafeRolesModule-eddd2054ab0c1794a9d19efe4093ac2f691935816b8ecbc068a05383eba6487b1eb21e906ceafbc95c25f316a29097deebb3d8a5cc15d7bdc32f7462b628a9d5"' }>
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
                                            'data-target="#components-links-module-SafeSchedulerModule-3c70c78370b782f3e5543c83d35840495a6eb6e7966af1b445e8dc022c075751aac60b3bd0f21b601be49711b70fd39482f4788226e2f6003cdc25237a9d4fd1"' : 'data-target="#xs-components-links-module-SafeSchedulerModule-3c70c78370b782f3e5543c83d35840495a6eb6e7966af1b445e8dc022c075751aac60b3bd0f21b601be49711b70fd39482f4788226e2f6003cdc25237a9d4fd1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSchedulerModule-3c70c78370b782f3e5543c83d35840495a6eb6e7966af1b445e8dc022c075751aac60b3bd0f21b601be49711b70fd39482f4788226e2f6003cdc25237a9d4fd1"' :
                                            'id="xs-components-links-module-SafeSchedulerModule-3c70c78370b782f3e5543c83d35840495a6eb6e7966af1b445e8dc022c075751aac60b3bd0f21b601be49711b70fd39482f4788226e2f6003cdc25237a9d4fd1"' }>
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
                                            'data-target="#components-links-module-SafeSchedulerSettingsModule-d9f7a08d55a57244aa72bd00ca44e2ba1523dfb52a554d17a88e821047f4591353c13b74f503b64bc35622961642a50d1f953db77edca0609ef394cbd7142143"' : 'data-target="#xs-components-links-module-SafeSchedulerSettingsModule-d9f7a08d55a57244aa72bd00ca44e2ba1523dfb52a554d17a88e821047f4591353c13b74f503b64bc35622961642a50d1f953db77edca0609ef394cbd7142143"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSchedulerSettingsModule-d9f7a08d55a57244aa72bd00ca44e2ba1523dfb52a554d17a88e821047f4591353c13b74f503b64bc35622961642a50d1f953db77edca0609ef394cbd7142143"' :
                                            'id="xs-components-links-module-SafeSchedulerSettingsModule-d9f7a08d55a57244aa72bd00ca44e2ba1523dfb52a554d17a88e821047f4591353c13b74f503b64bc35622961642a50d1f953db77edca0609ef394cbd7142143"' }>
                                            <li class="link">
                                                <a href="components/SafeSchedulerSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeSchedulerSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSearchResourceGridModalModule.html" data-type="entity-link" >SafeSearchResourceGridModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSearchResourceGridModalModule-6f386221dd6bd9450c37bebd07321929293d16e0919922937f0fdb73151656a9ac65376715fcb23e161ececee0fdfe688a57e9be31b05142d5c99b205b954518"' : 'data-target="#xs-components-links-module-SafeSearchResourceGridModalModule-6f386221dd6bd9450c37bebd07321929293d16e0919922937f0fdb73151656a9ac65376715fcb23e161ececee0fdfe688a57e9be31b05142d5c99b205b954518"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSearchResourceGridModalModule-6f386221dd6bd9450c37bebd07321929293d16e0919922937f0fdb73151656a9ac65376715fcb23e161ececee0fdfe688a57e9be31b05142d5c99b205b954518"' :
                                            'id="xs-components-links-module-SafeSearchResourceGridModalModule-6f386221dd6bd9450c37bebd07321929293d16e0919922937f0fdb73151656a9ac65376715fcb23e161ececee0fdfe688a57e9be31b05142d5c99b205b954518"' }>
                                            <li class="link">
                                                <a href="components/SafeResourceGridModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeResourceGridModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeSnackbarSpinnerModule.html" data-type="entity-link" >SafeSnackbarSpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeSnackbarSpinnerModule-edd4c0a1b90012b517773ceabbfe2c0d67540a33a0b55a881e6e145f003f5c59ec9f0753cf2693f3813296d025f79a949ff4cc0f923936bf1e31be24b51dd385"' : 'data-target="#xs-components-links-module-SafeSnackbarSpinnerModule-edd4c0a1b90012b517773ceabbfe2c0d67540a33a0b55a881e6e145f003f5c59ec9f0753cf2693f3813296d025f79a949ff4cc0f923936bf1e31be24b51dd385"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSnackbarSpinnerModule-edd4c0a1b90012b517773ceabbfe2c0d67540a33a0b55a881e6e145f003f5c59ec9f0753cf2693f3813296d025f79a949ff4cc0f923936bf1e31be24b51dd385"' :
                                            'id="xs-components-links-module-SafeSnackbarSpinnerModule-edd4c0a1b90012b517773ceabbfe2c0d67540a33a0b55a881e6e145f003f5c59ec9f0753cf2693f3813296d025f79a949ff4cc0f923936bf1e31be24b51dd385"' }>
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
                                            'data-target="#components-links-module-SafeSpinnerModule-857e3de414c25b36e2a1031cc178061ae5f4de7c85fd355af102ef0836884500418df7967da078df7b724906cb13605c2279bfdab61cc8a09bcf40fdd8c472e8"' : 'data-target="#xs-components-links-module-SafeSpinnerModule-857e3de414c25b36e2a1031cc178061ae5f4de7c85fd355af102ef0836884500418df7967da078df7b724906cb13605c2279bfdab61cc8a09bcf40fdd8c472e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeSpinnerModule-857e3de414c25b36e2a1031cc178061ae5f4de7c85fd355af102ef0836884500418df7967da078df7b724906cb13605c2279bfdab61cc8a09bcf40fdd8c472e8"' :
                                            'id="xs-components-links-module-SafeSpinnerModule-857e3de414c25b36e2a1031cc178061ae5f4de7c85fd355af102ef0836884500418df7967da078df7b724906cb13605c2279bfdab61cc8a09bcf40fdd8c472e8"' }>
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
                                            'data-target="#components-links-module-SafeStatusModalModule-9b191b1aef86e9b38f3e60b32e4b9dc59af79c66f8d6b55219fb01f8e8bc5eae7b005bfd989ca6fa67278feb63d4823b7ce834cc25b1da32fb3f3e04c9253cb7"' : 'data-target="#xs-components-links-module-SafeStatusModalModule-9b191b1aef86e9b38f3e60b32e4b9dc59af79c66f8d6b55219fb01f8e8bc5eae7b005bfd989ca6fa67278feb63d4823b7ce834cc25b1da32fb3f3e04c9253cb7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeStatusModalModule-9b191b1aef86e9b38f3e60b32e4b9dc59af79c66f8d6b55219fb01f8e8bc5eae7b005bfd989ca6fa67278feb63d4823b7ce834cc25b1da32fb3f3e04c9253cb7"' :
                                            'id="xs-components-links-module-SafeStatusModalModule-9b191b1aef86e9b38f3e60b32e4b9dc59af79c66f8d6b55219fb01f8e8bc5eae7b005bfd989ca6fa67278feb63d4823b7ce834cc25b1da32fb3f3e04c9253cb7"' }>
                                            <li class="link">
                                                <a href="components/SafeStatusModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeStatusModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SafeUsersModule.html" data-type="entity-link" >SafeUsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SafeUsersModule-8a3e2d9af2983f7b9f811c19358d6b3f4447d3bce56cd896faf857fa001d290474135d4e39bb9b90174af4d458b3e132c2a3b07577cd51df54deaa9d8ef9b3ae"' : 'data-target="#xs-components-links-module-SafeUsersModule-8a3e2d9af2983f7b9f811c19358d6b3f4447d3bce56cd896faf857fa001d290474135d4e39bb9b90174af4d458b3e132c2a3b07577cd51df54deaa9d8ef9b3ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeUsersModule-8a3e2d9af2983f7b9f811c19358d6b3f4447d3bce56cd896faf857fa001d290474135d4e39bb9b90174af4d458b3e132c2a3b07577cd51df54deaa9d8ef9b3ae"' :
                                            'id="xs-components-links-module-SafeUsersModule-8a3e2d9af2983f7b9f811c19358d6b3f4447d3bce56cd896faf857fa001d290474135d4e39bb9b90174af4d458b3e132c2a3b07577cd51df54deaa9d8ef9b3ae"' }>
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
                                            'data-target="#components-links-module-SafeWidgetChoiceModule-c649b2b8da07616151d669335a0560d449332ade221521f32fdb1dd7497f371873348a30e17ed1d5da30f327e3f9c80d2979d574c84491f033f42e31127ccfd5"' : 'data-target="#xs-components-links-module-SafeWidgetChoiceModule-c649b2b8da07616151d669335a0560d449332ade221521f32fdb1dd7497f371873348a30e17ed1d5da30f327e3f9c80d2979d574c84491f033f42e31127ccfd5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetChoiceModule-c649b2b8da07616151d669335a0560d449332ade221521f32fdb1dd7497f371873348a30e17ed1d5da30f327e3f9c80d2979d574c84491f033f42e31127ccfd5"' :
                                            'id="xs-components-links-module-SafeWidgetChoiceModule-c649b2b8da07616151d669335a0560d449332ade221521f32fdb1dd7497f371873348a30e17ed1d5da30f327e3f9c80d2979d574c84491f033f42e31127ccfd5"' }>
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
                                            'data-target="#components-links-module-SafeWidgetGridModule-b4107f21d1882066b21b6768e07a1f2f9570d1c58432b65fc66bbeef4b810d28e665eb20222deec4604a7cdb49ebe823e80e202b3a2db1fd9e5f34fad7ceed37"' : 'data-target="#xs-components-links-module-SafeWidgetGridModule-b4107f21d1882066b21b6768e07a1f2f9570d1c58432b65fc66bbeef4b810d28e665eb20222deec4604a7cdb49ebe823e80e202b3a2db1fd9e5f34fad7ceed37"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetGridModule-b4107f21d1882066b21b6768e07a1f2f9570d1c58432b65fc66bbeef4b810d28e665eb20222deec4604a7cdb49ebe823e80e202b3a2db1fd9e5f34fad7ceed37"' :
                                            'id="xs-components-links-module-SafeWidgetGridModule-b4107f21d1882066b21b6768e07a1f2f9570d1c58432b65fc66bbeef4b810d28e665eb20222deec4604a7cdb49ebe823e80e202b3a2db1fd9e5f34fad7ceed37"' }>
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
                                                <a href="components/SafeTileDisplayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafeTileDisplayComponent</a>
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
                                            'data-target="#components-links-module-SafeWidgetModule-893eda259d9338ce50add7ff0a8fcf59d1191996c1a3efe3544c484962c1b8baa6c48404305f46435ff8f4369c89a1afe36a28b1ec555ab579c72f819154eea8"' : 'data-target="#xs-components-links-module-SafeWidgetModule-893eda259d9338ce50add7ff0a8fcf59d1191996c1a3efe3544c484962c1b8baa6c48404305f46435ff8f4369c89a1afe36a28b1ec555ab579c72f819154eea8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWidgetModule-893eda259d9338ce50add7ff0a8fcf59d1191996c1a3efe3544c484962c1b8baa6c48404305f46435ff8f4369c89a1afe36a28b1ec555ab579c72f819154eea8"' :
                                            'id="xs-components-links-module-SafeWidgetModule-893eda259d9338ce50add7ff0a8fcf59d1191996c1a3efe3544c484962c1b8baa6c48404305f46435ff8f4369c89a1afe36a28b1ec555ab579c72f819154eea8"' }>
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
                                            'data-target="#components-links-module-SafeWorkflowStepperModule-d07aa074393c7df366299104ee88a25ac6de4293ad6ab9cf95f9bbdf31b5db4121bf53a4918101cd54f07e88d395916b9cab2fced2a0ab09d6327f3cc5f7d739"' : 'data-target="#xs-components-links-module-SafeWorkflowStepperModule-d07aa074393c7df366299104ee88a25ac6de4293ad6ab9cf95f9bbdf31b5db4121bf53a4918101cd54f07e88d395916b9cab2fced2a0ab09d6327f3cc5f7d739"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SafeWorkflowStepperModule-d07aa074393c7df366299104ee88a25ac6de4293ad6ab9cf95f9bbdf31b5db4121bf53a4918101cd54f07e88d395916b9cab2fced2a0ab09d6327f3cc5f7d739"' :
                                            'id="xs-components-links-module-SafeWorkflowStepperModule-d07aa074393c7df366299104ee88a25ac6de4293ad6ab9cf95f9bbdf31b5db4121bf53a4918101cd54f07e88d395916b9cab2fced2a0ab09d6327f3cc5f7d739"' }>
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
                                <a href="classes/PermissionsManagement.html" data-type="entity-link" >PermissionsManagement</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pie.html" data-type="entity-link" >Pie</a>
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
                                <a href="interfaces/AddChannelMutationResponse.html" data-type="entity-link" >AddChannelMutationResponse</a>
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
                                <a href="interfaces/AddUser.html" data-type="entity-link" >AddUser</a>
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
                                <a href="interfaces/EditApplicationMutationResponse.html" data-type="entity-link" >EditApplicationMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditChannelMutationResponse.html" data-type="entity-link" >EditChannelMutationResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditDashboardMutationResponse.html" data-type="entity-link" >EditDashboardMutationResponse</a>
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
                                <a href="interfaces/GetRelatedFormsQueryResponse.html" data-type="entity-link" >GetRelatedFormsQueryResponse</a>
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
                                <a href="interfaces/ToggleApplicationLockMutationResponse.html" data-type="entity-link" >ToggleApplicationLockMutationResponse</a>
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