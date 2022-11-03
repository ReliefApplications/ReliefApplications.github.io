'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">oort-front documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"todo.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>TODO\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' : 'data-target="#xs-components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"' : 'id="xs-components-links-module-AppModule-3c486e93a9d82396ee274b21eeb5798477ff37eaa109fd11f9ce21b1a4367e42d69057e73f171866a09b5836aaf6a579fc465c912cc4fa1a8bc54950ee5c91da"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthRoutingModule.html\" data-type=\"entity-link\" >AuthRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardModule.html\" data-type=\"entity-link\" >DashboardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' : 'data-target="#xs-components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"' : 'id="xs-components-links-module-DashboardModule-45b29c0d9e6aad8a3144889463ac7a4b252a9badddfab0e2c27c03ebe00f374a2ce946068a02c4dd352398f5c8fcb5d358fbf4d1c6e82bef3b431e2be9d06b36"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DashboardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DashboardComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardModule.html\" data-type=\"entity-link\" >DashboardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' : 'data-target="#xs-components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"' : 'id="xs-components-links-module-DashboardModule-05342096d9e0b3f8e3c297ee61f2a9e56e252bd3d7bc123c6247d1f88d66dba2b3bcf70c931bb61e4ea9a88037fb94095a52f5f6ed378f49f05481dba4a012ed-1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DashboardComponent-1.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DashboardComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardRoutingModule.html\" data-type=\"entity-link\" >DashboardRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardRoutingModule.html\" data-type=\"entity-link\" >DashboardRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FormModule.html\" data-type=\"entity-link\" >FormModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' : 'data-target="#xs-components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"' : 'id="xs-components-links-module-FormModule-d081b3174b19f0745de58ae6af57c1b81496264a53575cc56ba993a8ce77a7b8a1ba3ffebeb0a8021bb5e2e7ba6ca3f390b419ac5af2303eb457a9425f8d170d"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/FormRoutingModule.html\" data-type=\"entity-link\" >FormRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/GraphQLModule.html\" data-type=\"entity-link\" >GraphQLModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginModule.html\" data-type=\"entity-link\" >LoginModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' : 'data-target="#xs-components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"' : 'id="xs-components-links-module-LoginModule-2faeaa34f1809b2d83f8c4486947e8d6a0873f35924aabe07aa08d0d7ce7410307b615365f5666f348abd2856f2c71ec5e2c09022752a08a4cbd94c7abb23010"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LoginRoutingModule.html\" data-type=\"entity-link\" >LoginRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProfileModule.html\" data-type=\"entity-link\" >ProfileModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' : 'data-target="#xs-components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"' : 'id="xs-components-links-module-ProfileModule-71980cdbeb55ccc22457509f468ed58cf65ae2607117595bbb55f75b0400a9a6fa29389214a0be8a25a0e43eee50f9f88f121519806ae05546c933fcbc2888d1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ProfileRoutingModule.html\" data-type=\"entity-link\" >ProfileRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RolesModule.html\" data-type=\"entity-link\" >RolesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' : 'data-target="#xs-components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"' : 'id="xs-components-links-module-RolesModule-05aa646b6a4db9122ff2ce8aa0cebea0ff4096aeb8b0f99b3b9f49c5f3dcf08b988e8710df4bc58216f5c66730ca358b0af35cc45b037b704bbc8633bf4f7b7f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RolesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RolesComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RolesRoutingModule.html\" data-type=\"entity-link\" >RolesRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' : 'data-target="#xs-components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"' : 'id="xs-components-links-module-UsersModule-7089086e8b83eb21627e060bf021a92ff42d712dd2a96e7bbbbf45a384c16e8b11900ef70c3587d11c8f8ad4eed88d69f8a16ebd03d8352cc731aa9797ba0794"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/UsersComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersRoutingModule.html\" data-type=\"entity-link\" >UsersRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/WorkflowModule.html\" data-type=\"entity-link\" >WorkflowModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' : 'data-target="#xs-components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"' : 'id="xs-components-links-module-WorkflowModule-423cf36a361bcbce83d1fd2af2c8fcaac8067385fbc66504ad9e6f602272f5084f55f85d71d642067b5ef33aae655944563b11a64f70317db5beee97a1210dc7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/WorkflowComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >WorkflowComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/WorkflowRoutingModule.html\" data-type=\"entity-link\" >WorkflowRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AccessGuard.html\" data-type=\"entity-link\" >AccessGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetDashboardByIdQueryResponse.html\" data-type=\"entity-link\" >GetDashboardByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetFormByIdQueryResponse.html\" data-type=\"entity-link\" >GetFormByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetFormByIdQueryResponse-1.html\" data-type=\"entity-link\" >GetFormByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetPageByIdQueryResponse.html\" data-type=\"entity-link\" >GetPageByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetPageByIdQueryResponse-1.html\" data-type=\"entity-link\" >GetPageByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetStepByIdQueryResponse.html\" data-type=\"entity-link\" >GetStepByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetStepByIdQueryResponse-1.html\" data-type=\"entity-link\" >GetStepByIdQueryResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GetWorkflowByIdQueryResponse.html\" data-type=\"entity-link\" >GetWorkflowByIdQueryResponse</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));