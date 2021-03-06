(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define("paypal", [], factory); else if (typeof exports === "object") exports["paypal"] = factory(); else root["paypal"] = factory();
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }({
        0: function(module, exports, __webpack_require__) {
            "use strict";
            var _beacon = __webpack_require__("./src/lib/beacon.js");
            var _util = __webpack_require__("./src/lib/util.js");
            var _namespace = __webpack_require__("./src/namespace.js");
            function isPayPalDomain() {
                return Boolean((window.location.protocol + "//" + window.location.host).match(/^https?:\/\/[a-zA-Z0-9_.-]+\.paypal\.com(:\d+)?$/));
            }
            if (window.paypal && window.paypal.version === "4.0.52") {
                (0, _beacon.checkpoint)("load_again");
                var error = "PayPal Checkout Integration Script already loaded on page";
                if (window.console) {
                    if (window.console.warn) {
                        window.console.warn(error);
                    } else {
                        window.console.log(error);
                    }
                }
                module.exports = module.exports["default"] = window.paypal;
            } else {
                window.pp_uid = window.pp_uid || (0, _util.uniqueID)();
                (0, _beacon.checkpoint)("load");
                try {
                    var isPublic = !isPayPalDomain() && !false;
                    var paypal = isPublic ? __webpack_require__("./src/interface/public.js") : __webpack_require__("./src/interface/paypal.js");
                    module.exports = module.exports["default"] = (0, _namespace.extendPayPalNamespace)(paypal);
                } catch (err) {
                    (0, _beacon.beacon)("bootstrap_error", {
                        message: err ? err.toString() : "undefined",
                        stack: err.stack || err.toString(),
                        errtype: {}.toString.call(err)
                    });
                    throw err;
                }
            }
        },
        "./src/interface/paypal.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.PayPalCheckout = exports.Checkout = exports.version = exports.onPossiblyUnhandledException = exports.isWebView = exports.isEligible = exports.request = exports.USERS = exports.ENV = exports.config = exports.setup = exports.apps = exports.checkout = exports.Button = exports.rest = exports.Promise = exports.PopupOpenError = exports.postRobot = undefined;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            Object.defineProperty(exports, "postRobot", {
                enumerable: true,
                get: function get() {
                    return _interopRequireDefault(_src)["default"];
                }
            });
            var _src2 = __webpack_require__("./node_modules/xcomponent/src/index.js");
            Object.defineProperty(exports, "PopupOpenError", {
                enumerable: true,
                get: function get() {
                    return _src2.PopupOpenError;
                }
            });
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            Object.defineProperty(exports, "Promise", {
                enumerable: true,
                get: function get() {
                    return _promise.SyncPromise;
                }
            });
            var _api = __webpack_require__("./src/api/index.js");
            Object.defineProperty(exports, "rest", {
                enumerable: true,
                get: function get() {
                    return _api.rest;
                }
            });
            var _components = __webpack_require__("./src/components/index.js");
            Object.defineProperty(exports, "Button", {
                enumerable: true,
                get: function get() {
                    return _components.Button;
                }
            });
            var _legacy = __webpack_require__("./src/legacy/index.js");
            Object.defineProperty(exports, "checkout", {
                enumerable: true,
                get: function get() {
                    return _legacy.checkout;
                }
            });
            Object.defineProperty(exports, "apps", {
                enumerable: true,
                get: function get() {
                    return _legacy.apps;
                }
            });
            var _setup = __webpack_require__("./src/setup.js");
            Object.defineProperty(exports, "setup", {
                enumerable: true,
                get: function get() {
                    return _setup.setup;
                }
            });
            var _config = __webpack_require__("./src/config/index.js");
            Object.defineProperty(exports, "config", {
                enumerable: true,
                get: function get() {
                    return _config.config;
                }
            });
            Object.defineProperty(exports, "ENV", {
                enumerable: true,
                get: function get() {
                    return _config.ENV;
                }
            });
            Object.defineProperty(exports, "USERS", {
                enumerable: true,
                get: function get() {
                    return _config.USERS;
                }
            });
            var _lib = __webpack_require__("./src/lib/index.js");
            Object.defineProperty(exports, "request", {
                enumerable: true,
                get: function get() {
                    return _lib.request;
                }
            });
            Object.defineProperty(exports, "isEligible", {
                enumerable: true,
                get: function get() {
                    return _lib.isEligible;
                }
            });
            Object.defineProperty(exports, "isWebView", {
                enumerable: true,
                get: function get() {
                    return _lib.isWebView;
                }
            });
            Object.defineProperty(exports, "Checkout", {
                enumerable: true,
                get: function get() {
                    return _components.Checkout;
                }
            });
            Object.defineProperty(exports, "PayPalCheckout", {
                enumerable: true,
                get: function get() {
                    return _components.Checkout;
                }
            });
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var onPossiblyUnhandledException = exports.onPossiblyUnhandledException = _promise.SyncPromise.onPossiblyUnhandledException;
            var version = exports.version = "4.0.52";
            module.exports["default"] = module.exports;
        },
        "./src/config/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _config = __webpack_require__("./src/config/config.js");
            Object.keys(_config).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _config[key];
                    }
                });
            });
            var _constants = __webpack_require__("./src/config/constants.js");
            Object.keys(_constants).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _constants[key];
                    }
                });
            });
        },
        "./src/config/config.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.config = undefined;
            var _checkoutUris, _billingUris, _buttonUris, _postBridgeUris, _legacyCheckoutUris, _buttonJSUrls;
            var _constants = __webpack_require__("./src/config/constants.js");
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            var config = exports.config = {
                scriptUrl: "//www.paypalobjects.com/api/" + "checkout.lib.js",
                legacyScriptUrl: "//www.paypalobjects.com/api/checkout.js",
                paypal_domain_regex: /^(https?|mock):\/\/[a-zA-Z0-9_.-]+\.paypal\.com(:\d+)?$/,
                version: "4.0.52",
                ppobjects: false,
                cors: true,
                env: false ? _constants.ENV.TEST : _constants.ENV.PRODUCTION,
                state: "paypal_xcomponent",
                locale: {
                    country: "US",
                    lang: "en"
                },
                stage: "msmaster",
                logLevel: "info",
                buttonStyles: {
                    size: [ "tiny", "small", "medium", "large", "responsive" ],
                    label: [ "checkout", "credit" ]
                },
                throttles: {
                    v4_mobile_device: 1e3
                },
                customCountry: false,
                SUPPORTED_AGENTS: {
                    Chrome: 27,
                    IE: 9,
                    MSIE: 9,
                    Firefox: 30,
                    Safari: 5.1,
                    Opera: 23
                },
                _apiStage: "",
                get apiStage() {
                    return config._apiStage || config.stage;
                },
                set apiStage(value) {
                    config._apiStage = value;
                },
                get paypalUrls() {
                    var _ref;
                    return _ref = {}, _defineProperty(_ref, _constants.ENV.LOCAL, "http://localhost.paypal.com:8000"), 
                    _defineProperty(_ref, _constants.ENV.STAGE, "https://www." + config.stage + ".qa.paypal.com"), 
                    _defineProperty(_ref, _constants.ENV.SANDBOX, "https://www.sandbox.paypal.com"), 
                    _defineProperty(_ref, _constants.ENV.PRODUCTION, "https://www.paypal.com"), _defineProperty(_ref, _constants.ENV.TEST, window.location.protocol + "//" + window.location.host), 
                    _ref;
                },
                get paypalDomains() {
                    var _ref2;
                    return _ref2 = {}, _defineProperty(_ref2, _constants.ENV.LOCAL, "http://localhost.paypal.com:8000"), 
                    _defineProperty(_ref2, _constants.ENV.STAGE, "https://www." + config.stage + ".qa.paypal.com"), 
                    _defineProperty(_ref2, _constants.ENV.SANDBOX, "https://www.sandbox.paypal.com"), 
                    _defineProperty(_ref2, _constants.ENV.PRODUCTION, "https://www.paypal.com"), _defineProperty(_ref2, _constants.ENV.TEST, "mock://www.paypal.com"), 
                    _ref2;
                },
                get wwwApiUrls() {
                    var _ref3;
                    return _ref3 = {}, _defineProperty(_ref3, _constants.ENV.LOCAL, "https://www." + config.stage + ".qa.paypal.com"), 
                    _defineProperty(_ref3, _constants.ENV.STAGE, "https://www." + config.stage + ".qa.paypal.com"), 
                    _defineProperty(_ref3, _constants.ENV.SANDBOX, "https://www.sandbox.paypal.com"), 
                    _defineProperty(_ref3, _constants.ENV.PRODUCTION, "https://www.paypal.com"), _defineProperty(_ref3, _constants.ENV.TEST, window.location.protocol + "//" + window.location.host), 
                    _ref3;
                },
                get corsApiUrls() {
                    var _ref4;
                    return _ref4 = {}, _defineProperty(_ref4, _constants.ENV.LOCAL, "https://" + config.apiStage + ".qa.paypal.com:11888"), 
                    _defineProperty(_ref4, _constants.ENV.STAGE, "https://" + config.apiStage + ".qa.paypal.com:11888"), 
                    _defineProperty(_ref4, _constants.ENV.SANDBOX, "https://cors.api.sandbox.paypal.com"), 
                    _defineProperty(_ref4, _constants.ENV.PRODUCTION, "https://cors.api.paypal.com"), 
                    _defineProperty(_ref4, _constants.ENV.TEST, window.location.protocol + "//" + window.location.host), 
                    _ref4;
                },
                get apiUrls() {
                    var _ref5;
                    var domain = window.location.protocol + "//" + window.location.host;
                    var corsApiUrls = config.corsApiUrls;
                    var wwwApiUrls = config.wwwApiUrls;
                    return _ref5 = {}, _defineProperty(_ref5, _constants.ENV.LOCAL, domain === wwwApiUrls.local ? wwwApiUrls.local : corsApiUrls.local), 
                    _defineProperty(_ref5, _constants.ENV.STAGE, domain === wwwApiUrls.stage ? wwwApiUrls.stage : corsApiUrls.stage), 
                    _defineProperty(_ref5, _constants.ENV.SANDBOX, domain === wwwApiUrls.sandbox ? wwwApiUrls.sandbox : corsApiUrls.sandbox), 
                    _defineProperty(_ref5, _constants.ENV.PRODUCTION, domain === wwwApiUrls.production ? wwwApiUrls.production : corsApiUrls.production), 
                    _defineProperty(_ref5, _constants.ENV.TEST, domain === wwwApiUrls.test ? wwwApiUrls.test : corsApiUrls.test), 
                    _ref5;
                },
                checkoutUris: (_checkoutUris = {}, _defineProperty(_checkoutUris, _constants.ENV.LOCAL, "/webapps/hermes?ul=0"), 
                _defineProperty(_checkoutUris, _constants.ENV.STAGE, "/webapps/hermes"), _defineProperty(_checkoutUris, _constants.ENV.SANDBOX, "/checkoutnow"), 
                _defineProperty(_checkoutUris, _constants.ENV.PRODUCTION, "/checkoutnow"), _defineProperty(_checkoutUris, _constants.ENV.TEST, "/base/test/windows/checkout/index.htm?checkouturl=true"), 
                _checkoutUris),
                billingUris: (_billingUris = {}, _defineProperty(_billingUris, _constants.ENV.LOCAL, "/webapps/hermes/agreements?ul=0"), 
                _defineProperty(_billingUris, _constants.ENV.STAGE, "/webapps/hermes/agreements"), 
                _defineProperty(_billingUris, _constants.ENV.SANDBOX, "/agreements/approve"), _defineProperty(_billingUris, _constants.ENV.PRODUCTION, "/agreements/approve"), 
                _defineProperty(_billingUris, _constants.ENV.TEST, "/base/test/windows/checkout/index.htm?billingurl=true"), 
                _billingUris),
                buttonUris: (_buttonUris = {}, _defineProperty(_buttonUris, _constants.ENV.LOCAL, "/webapps/hermes/button"), 
                _defineProperty(_buttonUris, _constants.ENV.STAGE, "/webapps/hermes/button"), _defineProperty(_buttonUris, _constants.ENV.SANDBOX, "/webapps/hermes/button"), 
                _defineProperty(_buttonUris, _constants.ENV.PRODUCTION, "/webapps/hermes/button"), 
                _defineProperty(_buttonUris, _constants.ENV.TEST, "/base/test/windows/button/index.htm"), 
                _buttonUris),
                postBridgeUris: (_postBridgeUris = {}, _defineProperty(_postBridgeUris, _constants.ENV.LOCAL, "/webapps/hermes/component-meta"), 
                _defineProperty(_postBridgeUris, _constants.ENV.STAGE, "/webapps/hermes/component-meta"), 
                _defineProperty(_postBridgeUris, _constants.ENV.SANDBOX, "/webapps/hermes/component-meta"), 
                _defineProperty(_postBridgeUris, _constants.ENV.PRODUCTION, "/webapps/hermes/component-meta"), 
                _defineProperty(_postBridgeUris, _constants.ENV.TEST, "/base/test/windows/component-meta/index.htm"), 
                _postBridgeUris),
                legacyCheckoutUris: (_legacyCheckoutUris = {}, _defineProperty(_legacyCheckoutUris, _constants.ENV.LOCAL, "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true"), 
                _defineProperty(_legacyCheckoutUris, _constants.ENV.STAGE, "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true"), 
                _defineProperty(_legacyCheckoutUris, _constants.ENV.SANDBOX, "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true"), 
                _defineProperty(_legacyCheckoutUris, _constants.ENV.PRODUCTION, "/cgi-bin/webscr?cmd=_express-checkout&xo_node_fallback=true"), 
                _defineProperty(_legacyCheckoutUris, _constants.ENV.TEST, "#fallback"), _legacyCheckoutUris),
                buttonJSUrls: (_buttonJSUrls = {}, _defineProperty(_buttonJSUrls, _constants.ENV.LOCAL, "https://www.paypalobjects.com/api/button.js"), 
                _defineProperty(_buttonJSUrls, _constants.ENV.STAGE, "https://www.paypalobjects.com/api/button.js"), 
                _defineProperty(_buttonJSUrls, _constants.ENV.SANDBOX, "https://www.paypalobjects.com/api/button.js"), 
                _defineProperty(_buttonJSUrls, _constants.ENV.PRODUCTION, "https://www.paypalobjects.com/api/button.js"), 
                _defineProperty(_buttonJSUrls, _constants.ENV.TEST, "/base/test/lib/button.js"), 
                _buttonJSUrls),
                get buttonJSUrl() {
                    return config.buttonJSUrls[config.env];
                },
                loggerUri: "/webapps/hermes/api/logger",
                get postBridgeUri() {
                    return config.postBridgeUris[config.env] + "?xcomponent=1&version=" + (config.ppobjects ? "4" : "4.0.52");
                },
                paymentStandardUri: "/webapps/xorouter?cmd=_s-xclick",
                authApiUri: "/v1/oauth2/token",
                paymentApiUri: "/v1/payments/payment",
                billingApiUri: "/v1/billing-agreements/agreement-tokens",
                experienceApiUri: "/v1/payment-experience/web-profiles",
                get checkoutUrls() {
                    var _ref6;
                    var paypalUrls = config.paypalUrls;
                    return _ref6 = {}, _defineProperty(_ref6, _constants.ENV.LOCAL, "" + paypalUrls.local + config.checkoutUris.local), 
                    _defineProperty(_ref6, _constants.ENV.STAGE, "" + paypalUrls.stage + config.checkoutUris.stage), 
                    _defineProperty(_ref6, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.checkoutUris.sandbox), 
                    _defineProperty(_ref6, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.checkoutUris.production), 
                    _defineProperty(_ref6, _constants.ENV.TEST, "" + paypalUrls.test + config.checkoutUris.test), 
                    _ref6;
                },
                get billingUrls() {
                    var _ref7;
                    var paypalUrls = config.paypalUrls;
                    return _ref7 = {}, _defineProperty(_ref7, _constants.ENV.LOCAL, "" + paypalUrls.local + config.billingUris.local), 
                    _defineProperty(_ref7, _constants.ENV.STAGE, "" + paypalUrls.stage + config.billingUris.stage), 
                    _defineProperty(_ref7, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.billingUris.sandbox), 
                    _defineProperty(_ref7, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.billingUris.production), 
                    _defineProperty(_ref7, _constants.ENV.TEST, "" + paypalUrls.test + config.billingUris.test), 
                    _ref7;
                },
                get buttonUrls() {
                    var _ref8;
                    var paypalUrls = config.paypalUrls;
                    return _ref8 = {}, _defineProperty(_ref8, _constants.ENV.LOCAL, "" + paypalUrls.local + config.buttonUris.local), 
                    _defineProperty(_ref8, _constants.ENV.STAGE, "" + paypalUrls.stage + config.buttonUris.stage), 
                    _defineProperty(_ref8, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.buttonUris.sandbox), 
                    _defineProperty(_ref8, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.buttonUris.production), 
                    _defineProperty(_ref8, _constants.ENV.TEST, "" + paypalUrls.test + config.buttonUris.test), 
                    _ref8;
                },
                get paymentsStandardUrls() {
                    var _ref9;
                    var paypalUrls = config.paypalUrls;
                    return _ref9 = {}, _defineProperty(_ref9, _constants.ENV.LOCAL, "" + paypalUrls.local + config.paymentStandardUri), 
                    _defineProperty(_ref9, _constants.ENV.STAGE, "" + paypalUrls.stage + config.paymentStandardUri), 
                    _defineProperty(_ref9, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.paymentStandardUri), 
                    _defineProperty(_ref9, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.paymentStandardUri), 
                    _defineProperty(_ref9, _constants.ENV.TEST, "" + paypalUrls.test + config.paymentStandardUri), 
                    _ref9;
                },
                get postBridgeUrls() {
                    var _ref10;
                    var paypalUrls = config.paypalUrls;
                    return _ref10 = {}, _defineProperty(_ref10, _constants.ENV.LOCAL, "" + paypalUrls.local + config.postBridgeUri + "&env=local"), 
                    _defineProperty(_ref10, _constants.ENV.STAGE, "" + paypalUrls.stage + config.postBridgeUri + "&env=stage&stage=" + config.stage), 
                    _defineProperty(_ref10, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.postBridgeUri + "&env=sandbox"), 
                    _defineProperty(_ref10, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.postBridgeUri + "&env=production"), 
                    _defineProperty(_ref10, _constants.ENV.TEST, "" + paypalUrls.test + config.postBridgeUri + "&env=test"), 
                    _ref10;
                },
                get legacyCheckoutUrls() {
                    var _ref11;
                    var paypalUrls = config.paypalUrls;
                    return _ref11 = {}, _defineProperty(_ref11, _constants.ENV.LOCAL, "" + paypalUrls.stage + config.legacyCheckoutUris.local), 
                    _defineProperty(_ref11, _constants.ENV.STAGE, "" + paypalUrls.stage + config.legacyCheckoutUris.stage), 
                    _defineProperty(_ref11, _constants.ENV.SANDBOX, "" + paypalUrls.sandbox + config.legacyCheckoutUris.sandbox), 
                    _defineProperty(_ref11, _constants.ENV.PRODUCTION, "" + paypalUrls.production + config.legacyCheckoutUris.production), 
                    _defineProperty(_ref11, _constants.ENV.TEST, "" + paypalUrls.test + config.legacyCheckoutUris.test), 
                    _ref11;
                },
                get authApiUrls() {
                    var _ref12;
                    var apiUrls = config.apiUrls;
                    var authApiUri = config.authApiUri;
                    return _ref12 = {}, _defineProperty(_ref12, _constants.ENV.LOCAL, "" + apiUrls.local + authApiUri), 
                    _defineProperty(_ref12, _constants.ENV.STAGE, "" + apiUrls.stage + authApiUri), 
                    _defineProperty(_ref12, _constants.ENV.SANDBOX, "" + apiUrls.sandbox + authApiUri), 
                    _defineProperty(_ref12, _constants.ENV.PRODUCTION, "" + apiUrls.production + authApiUri), 
                    _defineProperty(_ref12, _constants.ENV.TEST, "" + apiUrls.test + authApiUri), _ref12;
                },
                get paymentApiUrls() {
                    var _ref13;
                    var apiUrls = config.apiUrls;
                    var paymentApiUri = config.paymentApiUri;
                    return _ref13 = {}, _defineProperty(_ref13, _constants.ENV.LOCAL, "" + apiUrls.local + paymentApiUri), 
                    _defineProperty(_ref13, _constants.ENV.STAGE, "" + apiUrls.stage + paymentApiUri), 
                    _defineProperty(_ref13, _constants.ENV.SANDBOX, "" + apiUrls.sandbox + paymentApiUri), 
                    _defineProperty(_ref13, _constants.ENV.PRODUCTION, "" + apiUrls.production + paymentApiUri), 
                    _defineProperty(_ref13, _constants.ENV.TEST, "" + apiUrls.test + paymentApiUri), 
                    _ref13;
                },
                get billingApiUrls() {
                    var _ref14;
                    var apiUrls = config.apiUrls;
                    var billingApiUri = config.billingApiUri;
                    return _ref14 = {}, _defineProperty(_ref14, _constants.ENV.LOCAL, "" + apiUrls.local + billingApiUri), 
                    _defineProperty(_ref14, _constants.ENV.STAGE, "" + apiUrls.stage + billingApiUri), 
                    _defineProperty(_ref14, _constants.ENV.SANDBOX, "" + apiUrls.sandbox + billingApiUri), 
                    _defineProperty(_ref14, _constants.ENV.PRODUCTION, "" + apiUrls.production + billingApiUri), 
                    _defineProperty(_ref14, _constants.ENV.TEST, "" + apiUrls.test + billingApiUri), 
                    _ref14;
                },
                get experienceApiUrls() {
                    var _ref15;
                    var apiUrls = config.apiUrls;
                    var experienceApiUri = config.experienceApiUri;
                    return _ref15 = {}, _defineProperty(_ref15, _constants.ENV.LOCAL, "" + apiUrls.local + experienceApiUri), 
                    _defineProperty(_ref15, _constants.ENV.STAGE, "" + apiUrls.stage + experienceApiUri), 
                    _defineProperty(_ref15, _constants.ENV.SANDBOX, "" + apiUrls.sandbox + experienceApiUri), 
                    _defineProperty(_ref15, _constants.ENV.PRODUCTION, "" + apiUrls.production + experienceApiUri), 
                    _defineProperty(_ref15, _constants.ENV.TEST, "" + apiUrls.test + experienceApiUri), 
                    _ref15;
                },
                _paypalUrl: "",
                get paypalUrl() {
                    return this._paypalUrl || config.paypalUrls[config.env];
                },
                set paypalUrl(value) {
                    this._paypalUrl = value;
                },
                get paypalDomain() {
                    return config.paypalDomains[config.env];
                },
                get corsApiUrl() {
                    return config.corsApiUrls[config.env];
                },
                get wwwApiUrl() {
                    return config.wwwApiUrls[config.env];
                },
                get apiUrl() {
                    var domain = window.location.protocol + "//" + window.location.host;
                    var corsApiUrl = config.corsApiUrl;
                    var wwwApiUrl = config.wwwApiUrl;
                    return domain === wwwApiUrl ? wwwApiUrl : corsApiUrl;
                },
                get checkoutUrl() {
                    return "" + config.paypalUrl + config.checkoutUris[config.env];
                },
                get billingUrl() {
                    return "" + config.paypalUrl + config.billingUris[config.env];
                },
                get buttonUrl() {
                    return "" + config.paypalUrl + config.buttonUris[config.env];
                },
                get legacyCheckoutUrl() {
                    return config.legacyCheckoutUrls[config.env];
                },
                get postBridgeUrl() {
                    return "" + config.paypalUrl + config.postBridgeUri + "&env=" + config.env;
                },
                get postBridgeDomain() {
                    return "" + config.paypalDomain;
                },
                get loggerUrl() {
                    return "" + config.paypalUrl + config.loggerUri;
                },
                get authApiUrl() {
                    return "" + config.apiUrl + config.authApiUri;
                },
                get paymentApiUrl() {
                    return "" + config.apiUrl + config.paymentApiUri;
                },
                get billingApiUrl() {
                    return "" + config.apiUrl + config.billingApiUri;
                },
                get experienceApiUrl() {
                    return "" + config.apiUrl + config.experienceApiUri;
                },
                locales: {
                    AD: [ "zh", "es", "fr", "en" ],
                    AE: [ "ar", "zh", "es", "fr", "en" ],
                    AG: [ "zh", "es", "fr", "en" ],
                    AI: [ "zh", "es", "fr", "en" ],
                    AL: [ "en" ],
                    AM: [ "zh", "es", "fr", "en" ],
                    AN: [ "zh", "es", "fr", "en" ],
                    AO: [ "zh", "es", "fr", "en" ],
                    AR: [ "en", "es" ],
                    AT: [ "de", "en" ],
                    AU: [ "en" ],
                    AW: [ "zh", "es", "fr", "en" ],
                    AZ: [ "zh", "es", "fr", "en" ],
                    BA: [ "en" ],
                    BB: [ "zh", "es", "fr", "en" ],
                    BE: [ "nl", "fr", "en" ],
                    BF: [ "zh", "es", "en", "fr" ],
                    BG: [ "en" ],
                    BH: [ "zh", "es", "fr", "en", "ar" ],
                    BI: [ "zh", "es", "en", "fr" ],
                    BJ: [ "zh", "es", "en", "fr" ],
                    BM: [ "zh", "es", "fr", "en" ],
                    BN: [ "en" ],
                    BO: [ "zh", "fr", "en", "es" ],
                    BR: [ "pt", "en" ],
                    BS: [ "zh", "es", "fr", "en" ],
                    BT: [ "en" ],
                    BW: [ "zh", "es", "fr", "en" ],
                    BY: [ "en" ],
                    BZ: [ "zh", "fr", "en", "es" ],
                    C2: [ "zh", "en" ],
                    CA: [ "fr", "en" ],
                    CD: [ "zh", "es", "en", "fr" ],
                    CG: [ "zh", "es", "fr", "en" ],
                    CH: [ "fr", "en", "de" ],
                    CI: [ "en", "fr" ],
                    CK: [ "zh", "es", "fr", "en" ],
                    CL: [ "zh", "fr", "en", "es" ],
                    CM: [ "en", "fr" ],
                    CN: [ "zh" ],
                    CO: [ "zh", "fr", "en", "es" ],
                    CR: [ "zh", "fr", "en", "es" ],
                    CV: [ "zh", "es", "fr", "en" ],
                    CY: [ "en" ],
                    CZ: [ "zh", "fr", "es", "en" ],
                    DE: [ "en", "de" ],
                    DJ: [ "zh", "es", "en", "fr" ],
                    DK: [ "en", "da" ],
                    DM: [ "zh", "es", "fr", "en" ],
                    DO: [ "zh", "fr", "en", "es" ],
                    DZ: [ "zh", "es", "fr", "en", "ar" ],
                    EC: [ "zh", "fr", "en", "es" ],
                    EE: [ "zh", "ru", "fr", "es", "en" ],
                    EG: [ "zh", "es", "fr", "en", "ar" ],
                    ER: [ "zh", "es", "fr", "en" ],
                    ES: [ "es", "en" ],
                    ET: [ "zh", "es", "fr", "en" ],
                    FI: [ "zh", "fr", "es", "en" ],
                    FJ: [ "zh", "es", "fr", "en" ],
                    FK: [ "zh", "es", "fr", "en" ],
                    FM: [ "en" ],
                    FO: [ "zh", "es", "fr", "en", "da" ],
                    FR: [ "fr", "en" ],
                    GA: [ "zh", "es", "en", "fr" ],
                    GB: [ "fr", "en" ],
                    GD: [ "zh", "es", "fr", "en" ],
                    GE: [ "zh", "es", "fr", "en" ],
                    GF: [ "zh", "es", "fr", "en" ],
                    GI: [ "zh", "es", "fr", "en" ],
                    GL: [ "zh", "es", "fr", "en", "da" ],
                    GM: [ "zh", "es", "fr", "en" ],
                    GN: [ "zh", "es", "en", "fr" ],
                    GP: [ "zh", "es", "fr", "en" ],
                    GR: [ "zh", "fr", "es", "en" ],
                    GT: [ "zh", "fr", "en", "es" ],
                    GW: [ "zh", "es", "fr", "en" ],
                    GY: [ "zh", "es", "fr", "en" ],
                    HK: [ "zh", "en" ],
                    HN: [ "zh", "fr", "en", "es" ],
                    HR: [ "en" ],
                    HU: [ "zh", "fr", "es", "en" ],
                    ID: [ "id", "en" ],
                    IE: [ "zh", "fr", "es", "en" ],
                    IL: [ "he", "en" ],
                    IN: [ "en" ],
                    IS: [ "en" ],
                    IT: [ "it", "en" ],
                    JM: [ "zh", "fr", "en", "es" ],
                    JO: [ "zh", "es", "fr", "en", "ar" ],
                    JP: [ "ja", "en" ],
                    KE: [ "zh", "es", "fr", "en" ],
                    KG: [ "zh", "es", "fr", "en" ],
                    KH: [ "en" ],
                    KI: [ "zh", "es", "fr", "en" ],
                    KM: [ "zh", "es", "en", "fr" ],
                    KN: [ "zh", "es", "fr", "en" ],
                    KR: [ "ko", "en" ],
                    KW: [ "zh", "es", "fr", "en", "ar" ],
                    KY: [ "zh", "es", "fr", "en" ],
                    KZ: [ "zh", "es", "fr", "en" ],
                    LA: [ "en" ],
                    LC: [ "zh", "es", "fr", "en" ],
                    LI: [ "zh", "es", "fr", "en" ],
                    LK: [ "en" ],
                    LS: [ "zh", "es", "fr", "en" ],
                    LT: [ "zh", "ru", "fr", "es", "en" ],
                    LU: [ "zh", "fr", "es", "en", "de" ],
                    LV: [ "zh", "ru", "fr", "es", "en" ],
                    MA: [ "zh", "es", "fr", "en", "ar" ],
                    MC: [ "en", "fr" ],
                    MD: [ "en" ],
                    ME: [ "en" ],
                    MG: [ "zh", "es", "fr", "en" ],
                    MH: [ "zh", "es", "fr", "en" ],
                    MK: [ "en" ],
                    ML: [ "zh", "es", "en", "fr" ],
                    MN: [ "en" ],
                    MQ: [ "zh", "es", "fr", "en" ],
                    MR: [ "zh", "es", "fr", "en" ],
                    MS: [ "zh", "es", "fr", "en" ],
                    MT: [ "en" ],
                    MU: [ "zh", "es", "fr", "en" ],
                    MV: [ "en" ],
                    MW: [ "zh", "es", "fr", "en" ],
                    MX: [ "es", "en" ],
                    MY: [ "en" ],
                    MZ: [ "zh", "es", "fr", "en" ],
                    NA: [ "zh", "es", "fr", "en" ],
                    NC: [ "zh", "es", "fr", "en" ],
                    NE: [ "zh", "es", "en", "fr" ],
                    NF: [ "zh", "es", "fr", "en" ],
                    NG: [ "en" ],
                    NI: [ "zh", "fr", "en", "es" ],
                    NL: [ "nl", "en" ],
                    NO: [ "no", "en" ],
                    NP: [ "en" ],
                    NR: [ "zh", "es", "fr", "en" ],
                    NU: [ "zh", "es", "fr", "en" ],
                    NZ: [ "zh", "fr", "es", "en" ],
                    OM: [ "zh", "es", "fr", "en", "ar" ],
                    PA: [ "zh", "fr", "en", "es" ],
                    PE: [ "zh", "fr", "en", "es" ],
                    PF: [ "zh", "es", "fr", "en" ],
                    PG: [ "zh", "es", "fr", "en" ],
                    PH: [ "en" ],
                    PL: [ "pl", "en" ],
                    PM: [ "zh", "es", "fr", "en" ],
                    PN: [ "zh", "es", "fr", "en" ],
                    PT: [ "pt", "en" ],
                    PW: [ "zh", "es", "fr", "en" ],
                    PY: [ "en", "es" ],
                    QA: [ "ar", "zh", "es", "fr", "en" ],
                    RE: [ "zh", "es", "fr", "en" ],
                    RO: [ "zh", "fr", "es", "en" ],
                    RS: [ "zh", "es", "fr", "en" ],
                    RU: [ "ru", "en" ],
                    RW: [ "zh", "es", "en", "fr" ],
                    SA: [ "zh", "es", "fr", "en", "ar" ],
                    SB: [ "zh", "es", "fr", "en" ],
                    SC: [ "zh", "es", "en", "fr" ],
                    SE: [ "sv", "en" ],
                    SG: [ "en" ],
                    SH: [ "zh", "es", "fr", "en" ],
                    SI: [ "zh", "fr", "es", "en" ],
                    SJ: [ "zh", "es", "fr", "en" ],
                    SK: [ "zh", "fr", "es", "en" ],
                    SL: [ "zh", "es", "fr", "en" ],
                    SM: [ "zh", "es", "fr", "en" ],
                    SN: [ "zh", "es", "en", "fr" ],
                    SO: [ "zh", "es", "fr", "en" ],
                    SR: [ "zh", "es", "fr", "en" ],
                    ST: [ "zh", "es", "fr", "en" ],
                    SV: [ "zh", "fr", "en", "es" ],
                    SZ: [ "zh", "es", "fr", "en" ],
                    TC: [ "zh", "es", "fr", "en" ],
                    TD: [ "zh", "es", "en", "fr" ],
                    TG: [ "zh", "es", "en", "fr" ],
                    TH: [ "th", "en" ],
                    TJ: [ "zh", "es", "fr", "en" ],
                    TM: [ "zh", "es", "fr", "en" ],
                    TN: [ "zh", "es", "fr", "en", "ar" ],
                    TO: [ "en" ],
                    TR: [ "tr", "en" ],
                    TT: [ "zh", "es", "fr", "en" ],
                    TV: [ "zh", "es", "fr", "en" ],
                    TW: [ "zh", "en" ],
                    TZ: [ "zh", "es", "fr", "en" ],
                    UA: [ "zh", "ru", "fr", "es", "en" ],
                    UG: [ "zh", "es", "fr", "en" ],
                    US: [ "zh", "fr", "es", "en" ],
                    UY: [ "zh", "fr", "en", "es" ],
                    VA: [ "zh", "es", "fr", "en" ],
                    VC: [ "zh", "es", "fr", "en" ],
                    VE: [ "zh", "fr", "en", "es" ],
                    VG: [ "zh", "es", "fr", "en" ],
                    VN: [ "en" ],
                    VU: [ "zh", "es", "fr", "en" ],
                    WF: [ "zh", "es", "fr", "en" ],
                    WS: [ "en" ],
                    YE: [ "zh", "es", "fr", "en", "ar" ],
                    YT: [ "zh", "es", "fr", "en" ],
                    ZA: [ "zh", "es", "fr", "en" ],
                    ZM: [ "zh", "es", "fr", "en" ],
                    ZW: [ "en" ]
                }
            };
        },
        "./src/config/constants.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var ENV = exports.ENV = {
                LOCAL: "local",
                STAGE: "stage",
                SANDBOX: "sandbox",
                PRODUCTION: "production",
                TEST: "test"
            };
            var USERS = exports.USERS = {
                ALL: "all",
                REMEMBERED: "remembered"
            };
            var LOG_LEVEL = exports.LOG_LEVEL = {
                DEBUG: "debug",
                INFO: "info",
                WARN: "warn",
                ERROR: "error"
            };
        },
        "./src/lib/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.memoize = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.isPayPalDomain = isPayPalDomain;
            exports.noop = noop;
            exports.once = once;
            exports.uniqueID = uniqueID;
            exports.hashStr = hashStr;
            exports.match = match;
            exports.safeJSON = safeJSON;
            exports.eventEmitter = eventEmitter;
            exports.onKey = onKey;
            exports.awaitKey = awaitKey;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _config = __webpack_require__("./src/config/index.js");
            function isPayPalDomain() {
                return Boolean((window.location.protocol + "//" + window.location.host).match(_config.config.paypal_domain_regex)) || window.mockDomain === "mock://www.paypal.com";
            }
            var memoize = exports.memoize = function memoize(method) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var cache = {};
                return function() {
                    var key = void 0;
                    try {
                        key = JSON.stringify(arguments);
                    } catch (err) {
                        throw new Error("Arguments not serializable -- can not be used to memoize");
                    }
                    if (cache.hasOwnProperty(key)) {
                        return cache[key];
                    }
                    cache[key] = method.apply(this, arguments);
                    if (options.time) {
                        setTimeout(function() {
                            delete cache[key];
                        }, options.time);
                    }
                    return cache[key];
                };
            };
            function noop() {}
            function once(method) {
                var called = false;
                return function() {
                    if (!called) {
                        called = true;
                        return method.apply(this, arguments);
                    }
                };
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
            function hashStr(str) {
                var hash = 0;
                if (str.length === 0) {
                    return hash;
                }
                for (var i = 0; i < str.length; i++) {
                    var chr = str.charCodeAt(i);
                    hash = (hash << 5) - hash + chr;
                    hash |= 0;
                }
                return Math.abs(hash);
            }
            function match(str, pattern) {
                var regmatch = str.match(pattern);
                if (regmatch) {
                    return regmatch[1];
                }
            }
            function safeJSON(item) {
                return JSON.stringify(item, function(key, val) {
                    if (typeof val === "function") {
                        return "<" + (typeof val === "undefined" ? "undefined" : _typeof(val)) + ">";
                    }
                    try {
                        JSON.stringify(val);
                    } catch (err) {
                        return "<" + (typeof val === "undefined" ? "undefined" : _typeof(val)) + ">";
                    }
                    return val;
                });
            }
            function eventEmitter() {
                var listeners = [];
                return {
                    listen: function listen(method) {
                        listeners.push(method);
                        return {
                            cancel: function cancel() {
                                listeners.splice(listeners.indexOf(method), 1);
                            }
                        };
                    },
                    once: function once(method) {
                        var listener = this.listen(function() {
                            method.apply(null, arguments);
                            listener.cancel();
                        });
                    },
                    trigger: function trigger() {
                        for (var _iterator = listeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var listener = _ref;
                            listener.apply(null, arguments);
                        }
                    }
                };
            }
            function onKey(obj, key, callback) {
                if (!obj) {
                    return;
                }
                var value = obj[key];
                if (value) {
                    value = callback(value) || value;
                }
                try {
                    delete obj[key];
                    Object.defineProperty(obj, key, {
                        configurable: true,
                        set: function set(item) {
                            value = item;
                            if (value) {
                                value = callback(value) || value;
                            }
                        },
                        get: function get() {
                            return value;
                        }
                    });
                } catch (err) {}
            }
            function awaitKey(obj, key) {
                return new _promise.SyncPromise(function(resolve) {
                    return onKey(obj, key, resolve);
                });
            }
        },
        "./node_modules/sync-browser-mocks/src/promise.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.patchPromise = patchPromise;
            function trycatch(method, successHandler, errorHandler) {
                var isCalled = false;
                var isSuccess = false;
                var isError = false;
                var err = void 0, res = void 0;
                function flush() {
                    if (isCalled) {
                        if (isError) {
                            return errorHandler(err);
                        } else if (isSuccess) {
                            return successHandler(res);
                        }
                    }
                }
                try {
                    method(function(result) {
                        res = result;
                        isSuccess = true;
                        flush();
                    }, function(error) {
                        err = error;
                        isError = true;
                        flush();
                    });
                } catch (error) {
                    return errorHandler(error);
                }
                isCalled = true;
                flush();
            }
            var possiblyUnhandledPromiseHandlers = [];
            var possiblyUnhandledPromises = [];
            var possiblyUnhandledPromiseTimeout = void 0;
            function addPossiblyUnhandledPromise(promise) {
                possiblyUnhandledPromises.push(promise);
                possiblyUnhandledPromiseTimeout = possiblyUnhandledPromiseTimeout || setTimeout(flushPossiblyUnhandledPromises, 1);
            }
            function flushPossiblyUnhandledPromises() {
                possiblyUnhandledPromiseTimeout = null;
                var promises = possiblyUnhandledPromises;
                possiblyUnhandledPromises = [];
                var _loop = function _loop(i) {
                    var promise = promises[i];
                    if (promise.silentReject) {
                        return "continue";
                    }
                    promise.handlers.push({
                        onError: function onError(err) {
                            if (promise.silentReject) {
                                return;
                            }
                            dispatchError(err);
                        }
                    });
                    promise.dispatch();
                };
                for (var i = 0; i < promises.length; i++) {
                    var _ret = _loop(i);
                    if (_ret === "continue") continue;
                }
            }
            var dispatchedErrors = [];
            function dispatchError(err) {
                if (dispatchedErrors.indexOf(err) !== -1) {
                    return;
                }
                dispatchedErrors.push(err);
                setTimeout(function() {
                    throw err;
                }, 1);
                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) {
                    possiblyUnhandledPromiseHandlers[j](err);
                }
            }
            var toString = {}.toString;
            function isPromise(item) {
                try {
                    if (!item) {
                        return false;
                    }
                    if (window.Window && item instanceof window.Window) {
                        return false;
                    }
                    if (window.constructor && item instanceof window.constructor) {
                        return false;
                    }
                    if (toString) {
                        var name = toString.call(item);
                        if (name === "[object Window]" || name === "[object global]" || name === "[object DOMWindow]") {
                            return false;
                        }
                    }
                    if (item && item.then instanceof Function) {
                        return true;
                    }
                } catch (err) {
                    return false;
                }
                return false;
            }
            var SyncPromise = exports.SyncPromise = function SyncPromise(handler) {
                this.resolved = false;
                this.rejected = false;
                this.silentReject = false;
                this.handlers = [];
                addPossiblyUnhandledPromise(this);
                if (!handler) {
                    return;
                }
                var self = this;
                trycatch(handler, function(res) {
                    return self.resolve(res);
                }, function(err) {
                    return self.reject(err);
                });
            };
            SyncPromise.resolve = function SyncPromiseResolve(value) {
                if (isPromise(value)) {
                    return value;
                }
                return new SyncPromise().resolve(value);
            };
            SyncPromise.reject = function SyncPromiseResolve(error) {
                return new SyncPromise().reject(error);
            };
            SyncPromise.prototype.resolve = function(result) {
                if (this.resolved || this.rejected) {
                    return this;
                }
                if (isPromise(result)) {
                    throw new Error("Can not resolve promise with another promise");
                }
                this.resolved = true;
                this.value = result;
                this.dispatch();
                return this;
            };
            SyncPromise.prototype.reject = function(error) {
                if (this.resolved || this.rejected) {
                    return this;
                }
                if (isPromise(error)) {
                    throw new Error("Can not reject promise with another promise");
                }
                this.rejected = true;
                this.value = error;
                this.dispatch();
                return this;
            };
            SyncPromise.prototype.asyncReject = function(error) {
                this.silentReject = true;
                this.reject(error);
            };
            SyncPromise.prototype.dispatch = function() {
                var _this = this;
                if (!this.resolved && !this.rejected) {
                    return;
                }
                var _loop2 = function _loop2() {
                    var handler = _this.handlers.shift();
                    var result = void 0, error = void 0;
                    try {
                        if (_this.resolved) {
                            result = handler.onSuccess ? handler.onSuccess(_this.value) : _this.value;
                        } else if (_this.rejected) {
                            if (handler.onError) {
                                result = handler.onError(_this.value);
                            } else {
                                error = _this.value;
                            }
                        }
                    } catch (err) {
                        error = err;
                    }
                    if (result === _this) {
                        throw new Error("Can not return a promise from the the then handler of the same promise");
                    }
                    if (!handler.promise) {
                        return "continue";
                    }
                    if (error) {
                        handler.promise.reject(error);
                    } else if (isPromise(result)) {
                        result.then(function(res) {
                            handler.promise.resolve(res);
                        }, function(err) {
                            handler.promise.reject(err);
                        });
                    } else {
                        handler.promise.resolve(result);
                    }
                };
                while (this.handlers.length) {
                    var _ret2 = _loop2();
                    if (_ret2 === "continue") continue;
                }
            };
            SyncPromise.prototype.then = function(onSuccess, onError) {
                if (onSuccess && typeof onSuccess !== "function" && !onSuccess.call) {
                    throw new Error("Promise.then expected a function for success handler");
                }
                if (onError && typeof onError !== "function" && !onError.call) {
                    throw new Error("Promise.then expected a function for error handler");
                }
                var promise = new SyncPromise(null, this);
                this.handlers.push({
                    promise: promise,
                    onSuccess: onSuccess,
                    onError: onError
                });
                this.silentReject = true;
                this.dispatch();
                return promise;
            };
            SyncPromise.prototype["catch"] = function(onError) {
                return this.then(null, onError);
            };
            SyncPromise.prototype["finally"] = function(handler) {
                return this.then(function(result) {
                    return SyncPromise["try"](handler).then(function() {
                        return result;
                    });
                }, function(err) {
                    return SyncPromise["try"](handler).then(function() {
                        throw err;
                    });
                });
            };
            SyncPromise.all = function(promises) {
                var promise = new SyncPromise();
                var count = promises.length;
                var results = [];
                var _loop3 = function _loop3(i) {
                    var prom = isPromise(promises[i]) ? promises[i] : SyncPromise.resolve(promises[i]);
                    prom.then(function(result) {
                        results[i] = result;
                        count -= 1;
                        if (count === 0) {
                            promise.resolve(results);
                        }
                    }, function(err) {
                        promise.reject(err);
                    });
                };
                for (var i = 0; i < promises.length; i++) {
                    _loop3(i);
                }
                if (!count) {
                    promise.resolve(results);
                }
                return promise;
            };
            SyncPromise.onPossiblyUnhandledException = function syncPromiseOnPossiblyUnhandledException(handler) {
                possiblyUnhandledPromiseHandlers.push(handler);
            };
            SyncPromise["try"] = function syncPromiseTry(method) {
                return SyncPromise.resolve().then(method);
            };
            SyncPromise.delay = function syncPromiseDelay(delay) {
                return new SyncPromise(function(resolve) {
                    setTimeout(resolve, delay);
                });
            };
            SyncPromise.hash = function(obj) {
                var results = {};
                var promises = [];
                var _loop4 = function _loop4(key) {
                    if (obj.hasOwnProperty(key)) {
                        promises.push(SyncPromise.resolve(obj[key]).then(function(result) {
                            results[key] = result;
                        }));
                    }
                };
                for (var key in obj) {
                    _loop4(key);
                }
                return SyncPromise.all(promises).then(function() {
                    return results;
                });
            };
            SyncPromise.promisifyCall = function() {
                var args = Array.prototype.slice.call(arguments);
                var method = args.shift();
                if (typeof method !== "function") {
                    throw new Error("Expected promisifyCall to be called with a function");
                }
                return new SyncPromise(function(resolve, reject) {
                    args.push(function(err, result) {
                        return err ? reject(err) : resolve(result);
                    });
                    return method.apply(null, args);
                });
            };
            function patchPromise() {
                window.Promise = SyncPromise;
            }
        },
        "./src/namespace.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.extendPayPalNamespace = extendPayPalNamespace;
            function extendPayPalNamespace(xports) {
                var _arr = [ window.paypal, window.PAYPAL ];
                for (var _i = 0; _i < _arr.length; _i++) {
                    var namespace = _arr[_i];
                    if (!namespace) {
                        continue;
                    }
                    var apps = xports.apps;
                    if (namespace.apps) {
                        apps = _extends({}, namespace.apps, apps);
                    }
                    xports = _extends({}, namespace, xports, {
                        apps: apps
                    });
                }
                window.paypal = xports;
                window.PAYPAL = xports;
                window.ppxo = xports;
                return xports;
            }
        },
        "./src/interface/public.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.version = exports.onPossiblyUnhandledException = exports.isWebView = exports.isEligible = exports.request = exports.USERS = exports.ENV = exports.config = exports.setup = exports.apps = exports.checkout = exports.Button = exports.rest = exports.Promise = exports.PopupOpenError = exports.postRobot = undefined;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            Object.defineProperty(exports, "postRobot", {
                enumerable: true,
                get: function get() {
                    return _interopRequireDefault(_src)["default"];
                }
            });
            var _src2 = __webpack_require__("./node_modules/xcomponent/src/index.js");
            Object.defineProperty(exports, "PopupOpenError", {
                enumerable: true,
                get: function get() {
                    return _src2.PopupOpenError;
                }
            });
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            Object.defineProperty(exports, "Promise", {
                enumerable: true,
                get: function get() {
                    return _promise.SyncPromise;
                }
            });
            var _api = __webpack_require__("./src/api/index.js");
            Object.defineProperty(exports, "rest", {
                enumerable: true,
                get: function get() {
                    return _api.rest;
                }
            });
            var _components = __webpack_require__("./src/components/index.js");
            Object.defineProperty(exports, "Button", {
                enumerable: true,
                get: function get() {
                    return _components.Button;
                }
            });
            var _legacy = __webpack_require__("./src/legacy/index.js");
            Object.defineProperty(exports, "checkout", {
                enumerable: true,
                get: function get() {
                    return _legacy.checkout;
                }
            });
            Object.defineProperty(exports, "apps", {
                enumerable: true,
                get: function get() {
                    return _legacy.apps;
                }
            });
            var _setup = __webpack_require__("./src/setup.js");
            Object.defineProperty(exports, "setup", {
                enumerable: true,
                get: function get() {
                    return _setup.setup;
                }
            });
            var _config = __webpack_require__("./src/config/index.js");
            Object.defineProperty(exports, "config", {
                enumerable: true,
                get: function get() {
                    return _config.config;
                }
            });
            Object.defineProperty(exports, "ENV", {
                enumerable: true,
                get: function get() {
                    return _config.ENV;
                }
            });
            Object.defineProperty(exports, "USERS", {
                enumerable: true,
                get: function get() {
                    return _config.USERS;
                }
            });
            var _lib = __webpack_require__("./src/lib/index.js");
            Object.defineProperty(exports, "request", {
                enumerable: true,
                get: function get() {
                    return _lib.request;
                }
            });
            Object.defineProperty(exports, "isEligible", {
                enumerable: true,
                get: function get() {
                    return _lib.isEligible;
                }
            });
            Object.defineProperty(exports, "isWebView", {
                enumerable: true,
                get: function get() {
                    return _lib.isWebView;
                }
            });
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var onPossiblyUnhandledException = exports.onPossiblyUnhandledException = _promise.SyncPromise.onPossiblyUnhandledException;
            var version = exports.version = "4.0.52";
            module.exports["default"] = module.exports;
        },
        "./node_modules/post-robot/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Promise = undefined;
            exports.init = init;
            exports.reset = reset;
            var _interface = __webpack_require__("./node_modules/post-robot/src/interface/index.js");
            Object.keys(_interface).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _interface[key];
                    }
                });
            });
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            Object.defineProperty(exports, "Promise", {
                enumerable: true,
                get: function get() {
                    return _lib.Promise;
                }
            });
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _bridge = __webpack_require__("./node_modules/post-robot/src/bridge/index.js");
            function init() {
                if (!_global.global.initialized) {
                    (0, _drivers.listenForMessages)();
                    (0, _bridge.openTunnelToOpener)();
                    (0, _lib.initOnReady)();
                    (0, _lib.listenForMethods)();
                }
                _global.global.initialized = true;
            }
            init();
            function reset() {
                return _global.global.clean.all().then(function() {
                    _global.global.initialized = false;
                    return init();
                });
            }
            exports["default"] = module.exports;
        },
        "./node_modules/post-robot/src/interface/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.winutil = exports.util = exports.destroyBridges = exports.openTunnelToOpener = exports.needsBridgeForDomain = exports.needsBridgeForWin = exports.needsBridgeForBrowser = exports.needsBridge = exports.isBridge = exports.linkUrl = exports.openBridge = exports.parent = undefined;
            var _client = __webpack_require__("./node_modules/post-robot/src/interface/client.js");
            Object.keys(_client).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _client[key];
                    }
                });
            });
            var _server = __webpack_require__("./node_modules/post-robot/src/interface/server.js");
            Object.keys(_server).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _server[key];
                    }
                });
            });
            var _config = __webpack_require__("./node_modules/post-robot/src/interface/config.js");
            Object.keys(_config).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _config[key];
                    }
                });
            });
            var _bridge = __webpack_require__("./node_modules/post-robot/src/bridge/index.js");
            Object.defineProperty(exports, "openBridge", {
                enumerable: true,
                get: function get() {
                    return _bridge.openBridge;
                }
            });
            Object.defineProperty(exports, "linkUrl", {
                enumerable: true,
                get: function get() {
                    return _bridge.linkUrl;
                }
            });
            Object.defineProperty(exports, "isBridge", {
                enumerable: true,
                get: function get() {
                    return _bridge.isBridge;
                }
            });
            Object.defineProperty(exports, "needsBridge", {
                enumerable: true,
                get: function get() {
                    return _bridge.needsBridge;
                }
            });
            Object.defineProperty(exports, "needsBridgeForBrowser", {
                enumerable: true,
                get: function get() {
                    return _bridge.needsBridgeForBrowser;
                }
            });
            Object.defineProperty(exports, "needsBridgeForWin", {
                enumerable: true,
                get: function get() {
                    return _bridge.needsBridgeForWin;
                }
            });
            Object.defineProperty(exports, "needsBridgeForDomain", {
                enumerable: true,
                get: function get() {
                    return _bridge.needsBridgeForDomain;
                }
            });
            Object.defineProperty(exports, "openTunnelToOpener", {
                enumerable: true,
                get: function get() {
                    return _bridge.openTunnelToOpener;
                }
            });
            Object.defineProperty(exports, "destroyBridges", {
                enumerable: true,
                get: function get() {
                    return _bridge.destroyBridges;
                }
            });
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            Object.defineProperty(exports, "util", {
                enumerable: true,
                get: function get() {
                    return _util.util;
                }
            });
            var _windows = __webpack_require__("./node_modules/post-robot/src/lib/windows.js");
            var windowUtil = _interopRequireWildcard(_windows);
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            }
            var parent = exports.parent = (0, _windows.getAncestor)();
            var winutil = exports.winutil = windowUtil;
        },
        "./node_modules/post-robot/src/interface/client.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.send = undefined;
            exports.request = request;
            exports.sendToParent = sendToParent;
            exports.client = client;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            function request(options) {
                return _lib.promise.nodeify(new _lib.promise.Promise(function(resolve, reject) {
                    if (!options.name) {
                        throw new Error("Expected options.name");
                    }
                    if (_conf.CONFIG.MOCK_MODE) {
                        options.window = window;
                    } else if (typeof options.window === "string") {
                        var el = document.getElementById(options.window);
                        if (!el) {
                            throw new Error("Expected options.window " + options.window + " to be a valid element id");
                        }
                        if (el.tagName.toLowerCase() !== "iframe") {
                            throw new Error("Expected options.window " + options.window + " to be an iframe");
                        }
                        if (!el.contentWindow) {
                            throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        }
                        options.window = el.contentWindow;
                    } else if (options.window instanceof HTMLElement) {
                        if (options.window.tagName.toLowerCase() !== "iframe") {
                            throw new Error("Expected options.window " + options.window + " to be an iframe");
                        }
                        if (!options.window.contentWindow) {
                            throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        }
                        options.window = options.window.contentWindow;
                    }
                    if (options.window === null) {
                        throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
                    }
                    options.domain = options.domain || "*";
                    var hash = options.name + "_" + _lib.util.uniqueID();
                    _global.global.clean.setItem(_global.global.listeners.response, hash, options);
                    if ((0, _lib.isWindowClosed)(options.window)) {
                        throw new Error("Target window is closed");
                    }
                    var hasResult = false;
                    options.respond = function(err, result) {
                        if (!err) {
                            hasResult = true;
                        }
                        return err ? reject(err) : resolve(result);
                    };
                    return _lib.promise.run(function() {
                        if ((0, _lib.isAncestor)(window, options.window)) {
                            return (0, _lib.onWindowReady)(options.window);
                        }
                    }).then(function() {
                        (0, _drivers.sendMessage)(options.window, {
                            hash: hash,
                            type: _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST,
                            name: options.name,
                            data: options.data,
                            fireAndForget: options.fireAndForget
                        }, options.domain)["catch"](reject);
                        if (options.fireAndForget) {
                            return resolve();
                        }
                        var ackTimeout = _lib.util.intervalTimeout(_conf.CONFIG.ACK_TIMEOUT, 100, function(remaining) {
                            if (options.ack || (0, _lib.isWindowClosed)(options.window)) {
                                return ackTimeout.cancel();
                            }
                            if (!remaining) {
                                return reject(new Error("No ack for postMessage " + options.name + " in " + _conf.CONFIG.ACK_TIMEOUT + "ms"));
                            }
                        });
                        if (options.timeout) {
                            var timeout = _lib.util.intervalTimeout(options.timeout, 100, function(remaining) {
                                if (hasResult || (0, _lib.isWindowClosed)(options.window)) {
                                    return timeout.cancel();
                                }
                                if (!remaining) {
                                    return reject(new Error("Post message response timed out after " + options.timeout + " ms"));
                                }
                            }, options.timeout);
                        }
                    })["catch"](reject);
                }), options.callback);
            }
            function _send(window, name, data, options, callback) {
                if (!callback) {
                    if (!options && typeof data === "function") {
                        callback = data;
                        options = {};
                        data = {};
                    } else if (typeof options === "function") {
                        callback = options;
                        options = {};
                    }
                }
                options = options || {};
                options.window = window;
                options.name = name;
                options.data = data;
                options.callback = callback;
                return request(options);
            }
            exports.send = _send;
            function sendToParent(name, data, options, callback) {
                var win = (0, _lib.getAncestor)();
                if (!win) {
                    return new _lib.promise.Promise(function(resolve, reject) {
                        return reject(new Error("Window does not have a parent"));
                    });
                }
                return _send(win, name, data, options, callback);
            }
            function client() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!options.window) {
                    throw new Error("Expected options.window");
                }
                return {
                    send: function send(name, data, callback) {
                        return _send(options.window, name, data, options, callback);
                    }
                };
            }
        },
        "./node_modules/post-robot/src/conf/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _config = __webpack_require__("./node_modules/post-robot/src/conf/config.js");
            Object.keys(_config).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _config[key];
                    }
                });
            });
            var _constants = __webpack_require__("./node_modules/post-robot/src/conf/constants.js");
            Object.keys(_constants).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _constants[key];
                    }
                });
            });
        },
        "./node_modules/post-robot/src/conf/config.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CONFIG = undefined;
            var _ALLOWED_POST_MESSAGE;
            var _constants = __webpack_require__("./node_modules/post-robot/src/conf/constants.js");
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            var CONFIG = exports.CONFIG = {
                ALLOW_POSTMESSAGE_POPUP: false ? false : true,
                LOG_LEVEL: "info",
                BRIDGE_TIMEOUT: 5e3,
                ACK_TIMEOUT: 1e3,
                LOG_TO_PAGE: false,
                MOCK_MODE: false,
                ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, true), 
                _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.BRIDGE, true), 
                _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.GLOBAL, true), 
                _ALLOWED_POST_MESSAGE)
            };
            if (window.location.href.indexOf(_constants.CONSTANTS.FILE_PROTOCOL) === 0) {
                CONFIG.ALLOW_POSTMESSAGE_POPUP = true;
            }
        },
        "./node_modules/post-robot/src/conf/constants.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var CONSTANTS = exports.CONSTANTS = {
                POST_MESSAGE_TYPE: {
                    REQUEST: "postrobot_message_request",
                    RESPONSE: "postrobot_message_response",
                    ACK: "postrobot_message_ack"
                },
                POST_MESSAGE_ACK: {
                    SUCCESS: "success",
                    ERROR: "error"
                },
                POST_MESSAGE_NAMES: {
                    METHOD: "postrobot_method",
                    READY: "postrobot_ready",
                    OPEN_TUNNEL: "postrobot_open_tunnel"
                },
                WINDOW_TYPES: {
                    FULLPAGE: "fullpage",
                    POPUP: "popup",
                    IFRAME: "iframe"
                },
                WINDOW_PROPS: {
                    POSTROBOT: "__postRobot__"
                },
                SERIALIZATION_TYPES: {
                    METHOD: "postrobot_method",
                    ERROR: "postrobot_error"
                },
                SEND_STRATEGIES: {
                    POST_MESSAGE: "postrobot_post_message",
                    BRIDGE: "postrobot_bridge",
                    GLOBAL: "postrobot_global"
                },
                MOCK_PROTOCOL: "mock:",
                FILE_PROTOCOL: "file:",
                BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
                POSTROBOT_PROXY: "__postrobot_proxy__"
            };
            var POST_MESSAGE_NAMES_LIST = exports.POST_MESSAGE_NAMES_LIST = Object.keys(CONSTANTS.POST_MESSAGE_NAMES).map(function(key) {
                return CONSTANTS.POST_MESSAGE_NAMES[key];
            });
        },
        "./node_modules/post-robot/src/drivers/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _receive = __webpack_require__("./node_modules/post-robot/src/drivers/receive/index.js");
            Object.keys(_receive).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _receive[key];
                    }
                });
            });
            var _send = __webpack_require__("./node_modules/post-robot/src/drivers/send/index.js");
            Object.keys(_send).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _send[key];
                    }
                });
            });
            var _listeners = __webpack_require__("./node_modules/post-robot/src/drivers/listeners.js");
            Object.keys(_listeners).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _listeners[key];
                    }
                });
            });
        },
        "./node_modules/post-robot/src/drivers/receive/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.receiveMessage = receiveMessage;
            exports.messageListener = messageListener;
            exports.listenForMessages = listenForMessages;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _compat = __webpack_require__("./node_modules/post-robot/src/compat/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _types = __webpack_require__("./node_modules/post-robot/src/drivers/receive/types.js");
            _global.global.receivedMessages = _global.global.receivedMessages || [];
            function parseMessage(message) {
                try {
                    message = (0, _lib.jsonParse)(message);
                } catch (err) {
                    return;
                }
                if (!message) {
                    return;
                }
                message = message[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
                if (!message) {
                    return;
                }
                if (!message.type) {
                    return;
                }
                if (!_types.RECEIVE_MESSAGE_TYPES[message.type]) {
                    return;
                }
                return message;
            }
            function receiveMessage(event) {
                if (!window || window.closed) {
                    throw new Error("Message recieved in closed window");
                }
                try {
                    if (!event.source) {
                        return;
                    }
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin, data = event.data;
                var message = parseMessage(data);
                if (!message) {
                    return;
                }
                if (message.sourceDomain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0 || message.sourceDomain.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) === 0) {
                    origin = message.sourceDomain;
                }
                if (_global.global.receivedMessages.indexOf(message.id) === -1) {
                    _global.global.clean.push(_global.global.receivedMessages, message.id);
                } else {
                    return;
                }
                var level = void 0;
                if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK) {
                    level = "debug";
                } else if (message.ack === "error") {
                    level = "error";
                } else {
                    level = "info";
                }
                _lib.log.logLevel(level, [ "\n\n\t", "#receive", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", origin, "\n\n", message ]);
                if ((0, _lib.isWindowClosed)(source)) {
                    return _lib.log.debug("Source window is closed - can not send " + message.type + " " + message.name);
                }
                if (message.data) {
                    message.data = (0, _lib.deserializeMethods)(source, origin, message.data);
                }
                _types.RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
            }
            function messageListener(event) {
                try {
                    event.source;
                } catch (err) {
                    return;
                }
                event = {
                    source: event.source || event.sourceElement,
                    origin: event.origin || event.originalEvent.origin,
                    data: event.data
                };
                try {
                    (0, _compat.emulateIERestrictions)(event.source, window);
                } catch (err) {
                    return;
                }
                receiveMessage(event);
            }
            function listenForMessages() {
                var listener = _lib.util.listen(window, "message", messageListener);
                _global.global.clean.register("listener", function() {
                    listener.cancel();
                });
            }
        },
        "./node_modules/post-robot/src/lib/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _promise = __webpack_require__("./node_modules/post-robot/src/lib/promise.js");
            Object.keys(_promise).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _promise[key];
                    }
                });
            });
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            Object.keys(_util).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _util[key];
                    }
                });
            });
            var _log = __webpack_require__("./node_modules/post-robot/src/lib/log.js");
            Object.keys(_log).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _log[key];
                    }
                });
            });
            var _windows = __webpack_require__("./node_modules/post-robot/src/lib/windows.js");
            Object.keys(_windows).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _windows[key];
                    }
                });
            });
            var _methods = __webpack_require__("./node_modules/post-robot/src/lib/methods.js");
            Object.keys(_methods).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _methods[key];
                    }
                });
            });
            var _tick = __webpack_require__("./node_modules/post-robot/src/lib/tick.js");
            Object.keys(_tick).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _tick[key];
                    }
                });
            });
            var _ready = __webpack_require__("./node_modules/post-robot/src/lib/ready.js");
            Object.keys(_ready).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _ready[key];
                    }
                });
            });
            var _cleanup = __webpack_require__("./node_modules/post-robot/src/lib/cleanup.js");
            Object.keys(_cleanup).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _cleanup[key];
                    }
                });
            });
        },
        "./node_modules/post-robot/src/lib/promise.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.promise = exports.Promise = undefined;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _tick = __webpack_require__("./node_modules/post-robot/src/lib/tick.js");
            var Promise = exports.Promise = _promise.SyncPromise;
            var promise = exports.promise = {
                Promise: Promise,
                run: function run(method) {
                    return Promise.resolve().then(method);
                },
                nextTick: function nextTick(method) {
                    return new Promise(function(resolve, reject) {
                        (0, _tick.nextTick)(function() {
                            return promise.run(method).then(resolve, reject);
                        });
                    });
                },
                method: function method(_method) {
                    return function promiseWrapper() {
                        var _this = this, _arguments = arguments;
                        return Promise.resolve().then(function() {
                            return _method.apply(_this, _arguments);
                        });
                    };
                },
                nodeify: function nodeify(prom, callback) {
                    if (!callback) {
                        return prom;
                    }
                    prom.then(function(result) {
                        callback(null, result);
                    }, function(err) {
                        callback(err);
                    });
                },
                deNodeify: function deNodeify(method) {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }
                    return new Promise(function(resolve, reject) {
                        try {
                            if (args.length < method.length) {
                                return method.apply(undefined, args.concat([ function(err, result) {
                                    return err ? reject(err) : resolve(result);
                                } ]));
                            }
                            return promise.run(function() {
                                return method.apply(undefined, args);
                            }).then(resolve, reject);
                        } catch (err) {
                            return reject(err);
                        }
                    });
                },
                map: function map(items, method) {
                    var results = [];
                    var _loop = function _loop(i) {
                        results.push(promise.run(function() {
                            return method(items[i]);
                        }));
                    };
                    for (var i = 0; i < items.length; i++) {
                        _loop(i);
                    }
                    return Promise.all(results);
                }
            };
        },
        "./node_modules/post-robot/src/lib/tick.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.nextTick = nextTick;
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            var tickMessageName = "__nextTick__postRobot__" + _util.util.uniqueID();
            var queue = [];
            window.addEventListener("message", function(event) {
                if (event.data === tickMessageName) {
                    var method = queue.shift();
                    method.call();
                }
            });
            function nextTick(method) {
                queue.push(method);
                window.postMessage(tickMessageName, "*");
            }
        },
        "./node_modules/post-robot/src/lib/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.util = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var util = exports.util = {
                once: function once(method) {
                    if (!method) {
                        return method;
                    }
                    var called = false;
                    return function onceWrapper() {
                        if (!called) {
                            called = true;
                            return method.apply(this, arguments);
                        }
                    };
                },
                noop: function noop() {},
                safeHasProp: function safeHasProp(obj, name) {
                    try {
                        if (obj[name]) {
                            return true;
                        } else {
                            return false;
                        }
                    } catch (err) {
                        return false;
                    }
                },
                safeGetProp: function safeGetProp(obj, name) {
                    try {
                        return obj[name];
                    } catch (err) {
                        return;
                    }
                },
                listen: function listen(win, event, handler) {
                    if (win.addEventListener) {
                        win.addEventListener(event, handler);
                    } else {
                        win.attachEvent("on" + event, handler);
                    }
                    return {
                        cancel: function cancel() {
                            if (win.removeEventListener) {
                                win.removeEventListener(event, handler);
                            } else {
                                win.detachEvent("on" + event, handler);
                            }
                        }
                    };
                },
                apply: function apply(method, context, args) {
                    if (typeof method.apply === "function") {
                        return method.apply(context, args);
                    }
                    return method(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
                },
                find: function find(collection, method, def) {
                    if (!collection) {
                        return def;
                    }
                    for (var i = 0; i < collection.length; i++) {
                        if (method(collection[i])) {
                            return collection[i];
                        }
                    }
                    return def;
                },
                map: function map(collection, method) {
                    var results = [];
                    for (var i = 0; i < collection.length; i++) {
                        results.push(method(collection[i]));
                    }
                    return results;
                },
                some: function some(collection, method) {
                    method = method || Boolean;
                    for (var i = 0; i < collection.length; i++) {
                        if (method(collection[i])) {
                            return true;
                        }
                    }
                    return false;
                },
                keys: function keys(mapping) {
                    var result = [];
                    for (var key in mapping) {
                        if (mapping.hasOwnProperty(key)) {
                            result.push(key);
                        }
                    }
                    return result;
                },
                values: function values(mapping) {
                    var result = [];
                    for (var key in mapping) {
                        if (mapping.hasOwnProperty(key)) {
                            result.push(mapping[key]);
                        }
                    }
                    return result;
                },
                getByValue: function getByValue(mapping, value) {
                    for (var key in mapping) {
                        if (mapping.hasOwnProperty(key) && mapping[key] === value) {
                            return key;
                        }
                    }
                },
                uniqueID: function uniqueID() {
                    var chars = "0123456789abcdef";
                    return "xxxxxxxxxx".replace(/./g, function() {
                        return chars.charAt(Math.floor(Math.random() * chars.length));
                    });
                },
                memoize: function memoize(method) {
                    var results = {};
                    return function memoized() {
                        var args = JSON.stringify(Array.prototype.slice.call(arguments));
                        if (!results.hasOwnProperty(args)) {
                            results[args] = method.apply(this, arguments);
                        }
                        return results[args];
                    };
                },
                extend: function extend(obj, source) {
                    if (!source) {
                        return obj;
                    }
                    for (var key in source) {
                        if (source.hasOwnProperty(key)) {
                            obj[key] = source[key];
                        }
                    }
                    return obj;
                },
                each: function each(obj, callback) {
                    if (Array.isArray(obj)) {
                        for (var i = 0; i < obj.length; i++) {
                            callback(obj[i], i);
                        }
                    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && obj !== null) {
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                callback(obj[key], key);
                            }
                        }
                    }
                },
                replaceObject: function replaceObject(obj, callback) {
                    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
                    if (depth >= 100) {
                        throw new Error("Self-referential object passed, or object contained too many layers");
                    }
                    var newobj = Array.isArray(obj) ? [] : {};
                    util.each(obj, function(item, key) {
                        var result = callback(item, key);
                        if (result !== undefined) {
                            newobj[key] = result;
                        } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                            newobj[key] = util.replaceObject(item, callback, depth + 1);
                        } else {
                            newobj[key] = item;
                        }
                    });
                    return newobj;
                },
                safeInterval: function safeInterval(method, time) {
                    var timeout = void 0;
                    function runInterval() {
                        timeout = setTimeout(runInterval, time);
                        method.call();
                    }
                    timeout = setTimeout(runInterval, time);
                    return {
                        cancel: function cancel() {
                            clearTimeout(timeout);
                        }
                    };
                },
                intervalTimeout: function intervalTimeout(time, interval, method) {
                    var safeInterval = util.safeInterval(function() {
                        time -= interval;
                        time = time <= 0 ? 0 : time;
                        if (time === 0) {
                            safeInterval.cancel();
                        }
                        method(time);
                    }, interval);
                    return safeInterval;
                },
                getDomain: function getDomain(win) {
                    win = win || window;
                    if (win.mockDomain && win.mockDomain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
                        return win.mockDomain;
                    }
                    if (!win.location.protocol) {
                        throw new Error("Can not read window protocol");
                    }
                    if (win.location.protocol === _conf.CONSTANTS.FILE_PROTOCOL) {
                        return win.location.protocol + "//" + win.location.host;
                    }
                    if (!win.location.host) {
                        throw new Error("Can not read window host");
                    }
                    return win.location.protocol + "//" + win.location.host;
                },
                getDomainFromUrl: function getDomainFromUrl(url) {
                    var domain = void 0;
                    if (url.match(/^(https?|mock|file):\/\//)) {
                        domain = url;
                    } else {
                        return this.getDomain();
                    }
                    domain = domain.split("/").slice(0, 3).join("/");
                    return domain;
                },
                safeGet: function safeGet(obj, prop) {
                    var result = void 0;
                    try {
                        result = obj[prop];
                    } catch (err) {}
                    return result;
                }
            };
        },
        "./node_modules/post-robot/src/lib/log.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.log = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            var _windows = __webpack_require__("./node_modules/post-robot/src/lib/windows.js");
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var LOG_LEVELS = [ "debug", "info", "warn", "error" ];
            if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
                [ "log", "info", "warn", "error" ].forEach(function(method) {
                    console[method] = this.bind(console[method], console);
                }, Function.prototype.call);
            }
            var log = exports.log = {
                clearLogs: function clearLogs() {
                    if (window.console && window.console.clear) {
                        window.console.clear();
                    }
                    if (_conf.CONFIG.LOG_TO_PAGE) {
                        var container = document.getElementById("postRobotLogs");
                        if (container) {
                            container.parentNode.removeChild(container);
                        }
                    }
                },
                writeToPage: function writeToPage(level, args) {
                    setTimeout(function() {
                        var container = document.getElementById("postRobotLogs");
                        if (!container) {
                            container = document.createElement("div");
                            container.id = "postRobotLogs";
                            container.style.cssText = "width: 800px; font-family: monospace; white-space: pre-wrap;";
                            document.body.appendChild(container);
                        }
                        var el = document.createElement("div");
                        var date = new Date().toString().split(" ")[4];
                        var payload = _util.util.map(args, function(item) {
                            if (typeof item === "string") {
                                return item;
                            }
                            if (!item) {
                                return Object.prototype.toString.call(item);
                            }
                            var json = void 0;
                            try {
                                json = (0, _windows.jsonStringify)(item, 0, 2);
                            } catch (e) {
                                json = "[object]";
                            }
                            return "\n\n" + json + "\n\n";
                        }).join(" ");
                        var msg = date + " " + level + " " + payload;
                        el.innerHTML = msg;
                        var color = {
                            log: "#ddd",
                            warn: "orange",
                            error: "red",
                            info: "blue",
                            debug: "#aaa"
                        }[level];
                        el.style.cssText = "margin-top: 10px; color: " + color + ";";
                        if (!container.childNodes.length) {
                            container.appendChild(el);
                        } else {
                            container.insertBefore(el, container.childNodes[0]);
                        }
                    });
                },
                logLevel: function logLevel(level, args) {
                    setTimeout(function() {
                        try {
                            if (LOG_LEVELS.indexOf(level) < LOG_LEVELS.indexOf(_conf.CONFIG.LOG_LEVEL)) {
                                return;
                            }
                            args = Array.prototype.slice.call(args);
                            args.unshift("" + window.location.host + window.location.pathname);
                            args.unshift("::");
                            args.unshift("" + (0, _windows.getWindowType)().toLowerCase());
                            args.unshift("[post-robot]");
                            if (_conf.CONFIG.LOG_TO_PAGE) {
                                log.writeToPage(level, args);
                            }
                            if (!window.console) {
                                return;
                            }
                            if (!window.console[level]) {
                                level = "log";
                            }
                            if (!window.console[level]) {
                                return;
                            }
                            window.console[level].apply(window.console, args);
                        } catch (err) {}
                    }, 1);
                },
                debug: function debug() {
                    log.logLevel("debug", arguments);
                },
                info: function info() {
                    log.logLevel("info", arguments);
                },
                warn: function warn() {
                    log.logLevel("warn", arguments);
                },
                error: function error() {
                    log.logLevel("error", arguments);
                }
            };
        },
        "./node_modules/post-robot/src/lib/windows.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.isSameDomain = isSameDomain;
            exports.getOpener = getOpener;
            exports.getParent = getParent;
            exports.getParents = getParents;
            exports.isAncestorParent = isAncestorParent;
            exports.getFrames = getFrames;
            exports.getAllChildFrames = getAllChildFrames;
            exports.getAllFramesInWindow = getAllFramesInWindow;
            exports.getTop = getTop;
            exports.isWindowClosed = isWindowClosed;
            exports.getUserAgent = getUserAgent;
            exports.getFrameByName = getFrameByName;
            exports.findChildFrameByName = findChildFrameByName;
            exports.findFrameByName = findFrameByName;
            exports.isParent = isParent;
            exports.isOpener = isOpener;
            exports.getAncestor = getAncestor;
            exports.getAncestors = getAncestors;
            exports.isAncestor = isAncestor;
            exports.isPopup = isPopup;
            exports.isIframe = isIframe;
            exports.isFullpage = isFullpage;
            exports.getWindowType = getWindowType;
            exports.isSameTopWindow = isSameTopWindow;
            exports.jsonStringify = jsonStringify;
            exports.jsonParse = jsonParse;
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            _global.global.domainMatches = _global.global.domainMatches || [];
            var domainMatchTimeout = void 0;
            function isSameDomain(win) {
                for (var _iterator = _global.global.domainMatches, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var _match = _ref;
                    if (_match.win === win) {
                        return _match.match;
                    }
                }
                var match = void 0;
                try {
                    if (_util.util.getDomain(window) === _util.util.getDomain(win)) {
                        match = true;
                    } else {
                        match = false;
                    }
                } catch (err) {
                    match = false;
                }
                _global.global.clean.push(_global.global.domainMatches, {
                    win: win,
                    match: match
                });
                if (!domainMatchTimeout) {
                    domainMatchTimeout = setTimeout(function() {
                        _global.global.domainMatches = [];
                        domainMatchTimeout = null;
                    }, 1);
                }
                return match;
            }
            function getOpener(win) {
                if (!win) {
                    return;
                }
                try {
                    return win.opener;
                } catch (err) {
                    return;
                }
            }
            function getParent(win) {
                if (!win) {
                    return;
                }
                try {
                    if (win.parent && win.parent !== win) {
                        return win.parent;
                    }
                } catch (err) {
                    return;
                }
            }
            function getParents(win) {
                var result = [];
                try {
                    while (win.parent !== win) {
                        result.push(win.parent);
                        win = win.parent;
                    }
                } catch (err) {}
                return result;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) {
                    return false;
                }
                var childParent = getParent(child);
                if (childParent) {
                    return childParent === parent;
                }
                if (getParents(child).indexOf(parent) !== -1) {
                    return true;
                }
                return false;
            }
            function getFrames(win) {
                var result = [];
                var frames = void 0;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len = void 0;
                try {
                    len = frames.length;
                } catch (err) {}
                if (len === 0) {
                    return result;
                }
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i2 = 0; _i2 < 100; _i2++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i2];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) {
                        return result;
                    }
                    result.push(_frame);
                }
                return result;
            }
            function getAllChildFrames(win) {
                var result = [];
                for (var _iterator2 = getFrames(win), _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i3 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i3++];
                    } else {
                        _i3 = _iterator2.next();
                        if (_i3.done) break;
                        _ref2 = _i3.value;
                    }
                    var frame = _ref2;
                    result.push(frame);
                    for (var _iterator3 = getAllChildFrames(frame), _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray3) {
                            if (_i4 >= _iterator3.length) break;
                            _ref3 = _iterator3[_i4++];
                        } else {
                            _i4 = _iterator3.next();
                            if (_i4.done) break;
                            _ref3 = _i4.value;
                        }
                        var childFrame = _ref3;
                        result.push(childFrame);
                    }
                }
                return result;
            }
            function getAllFramesInWindow(win) {
                var result = getAllChildFrames(win);
                result.push(win);
                for (var _iterator4 = getParents(win), _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                    var _ref4;
                    if (_isArray4) {
                        if (_i5 >= _iterator4.length) break;
                        _ref4 = _iterator4[_i5++];
                    } else {
                        _i5 = _iterator4.next();
                        if (_i5.done) break;
                        _ref4 = _i5.value;
                    }
                    var parent = _ref4;
                    result.push(parent);
                    for (var _iterator5 = getFrames(parent), _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                        var _ref5;
                        if (_isArray5) {
                            if (_i6 >= _iterator5.length) break;
                            _ref5 = _iterator5[_i6++];
                        } else {
                            _i6 = _iterator5.next();
                            if (_i6.done) break;
                            _ref5 = _i6.value;
                        }
                        var frame = _ref5;
                        if (result.indexOf(frame) === -1) {
                            result.push(frame);
                        }
                    }
                }
                return result;
            }
            function getTop(win) {
                if (!win) {
                    return;
                }
                try {
                    if (win.top) {
                        return win.top;
                    }
                } catch (err) {}
                if (getParent(win) === win) {
                    return win;
                }
                try {
                    if (isAncestorParent(window, win)) {
                        return window.top;
                    }
                } catch (err) {}
                try {
                    if (isAncestorParent(win, window)) {
                        return window.top;
                    }
                } catch (err) {}
                for (var _iterator6 = getAllChildFrames(win), _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
                    var _ref6;
                    if (_isArray6) {
                        if (_i7 >= _iterator6.length) break;
                        _ref6 = _iterator6[_i7++];
                    } else {
                        _i7 = _iterator6.next();
                        if (_i7.done) break;
                        _ref6 = _i7.value;
                    }
                    var frame = _ref6;
                    try {
                        if (frame.top) {
                            return frame.top;
                        }
                    } catch (err) {}
                    if (getParent(frame) === frame) {
                        return frame;
                    }
                }
            }
            function isWindowClosed(win) {
                var allowMock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                try {
                    if (win === window) {
                        return false;
                    }
                } catch (err) {
                    return true;
                }
                try {
                    if (!win) {
                        return true;
                    }
                } catch (err) {
                    return true;
                }
                try {
                    if (win.closed) {
                        return true;
                    }
                } catch (err) {
                    if (err && err.message === "Call was rejected by callee.\r\n") {
                        return false;
                    }
                    return true;
                }
                if (allowMock && isSameDomain(win) && _util.util.safeGet(win, "mockclosed")) {
                    return true;
                }
                return false;
            }
            function getUserAgent(win) {
                win = win || window;
                return win.navigator.mockUserAgent || win.navigator.userAgent;
            }
            function getFrameByName(win, name) {
                var winFrames = getFrames(win);
                for (var _iterator7 = winFrames, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
                    var _ref7;
                    if (_isArray7) {
                        if (_i8 >= _iterator7.length) break;
                        _ref7 = _iterator7[_i8++];
                    } else {
                        _i8 = _iterator7.next();
                        if (_i8.done) break;
                        _ref7 = _i8.value;
                    }
                    var childFrame = _ref7;
                    try {
                        if (isSameDomain(childFrame) && childFrame.name === name && winFrames.indexOf(childFrame) !== -1) {
                            return childFrame;
                        }
                    } catch (err) {}
                }
                try {
                    if (winFrames.indexOf(win.frames[name]) !== -1) {
                        return win.frames[name];
                    }
                } catch (err) {}
                try {
                    if (winFrames.indexOf(win[name]) !== -1) {
                        return win[name];
                    }
                } catch (err) {}
            }
            function findChildFrameByName(win, name) {
                var frame = getFrameByName(win, name);
                if (frame) {
                    return frame;
                }
                for (var _iterator8 = getFrames(win), _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
                    var _ref8;
                    if (_isArray8) {
                        if (_i9 >= _iterator8.length) break;
                        _ref8 = _iterator8[_i9++];
                    } else {
                        _i9 = _iterator8.next();
                        if (_i9.done) break;
                        _ref8 = _i9.value;
                    }
                    var childFrame = _ref8;
                    var namedFrame = findChildFrameByName(childFrame, name);
                    if (namedFrame) {
                        return namedFrame;
                    }
                }
            }
            function findFrameByName(win, name) {
                var frame = void 0;
                frame = getFrameByName(win, name);
                if (frame) {
                    return frame;
                }
                return findChildFrameByName(getTop(win), name);
            }
            function isParent(win, frame) {
                var frameParent = getParent(frame);
                if (frameParent) {
                    return frameParent === win;
                }
                for (var _iterator9 = getFrames(win), _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
                    var _ref9;
                    if (_isArray9) {
                        if (_i10 >= _iterator9.length) break;
                        _ref9 = _iterator9[_i10++];
                    } else {
                        _i10 = _iterator9.next();
                        if (_i10.done) break;
                        _ref9 = _i10.value;
                    }
                    var childFrame = _ref9;
                    if (childFrame === frame) {
                        return true;
                    }
                }
                return false;
            }
            function isOpener(parent, child) {
                return parent === getOpener(child);
            }
            function getAncestor(win) {
                win = win || window;
                var opener = getOpener(win);
                if (opener) {
                    return opener;
                }
                var parent = getParent(win);
                if (parent) {
                    return parent;
                }
            }
            function getAncestors(win) {
                var results = [];
                var ancestor = win;
                while (ancestor) {
                    ancestor = getAncestor(ancestor);
                    if (ancestor) {
                        results.push(ancestor);
                    }
                }
                return results;
            }
            function isAncestor(parent, child) {
                var actualParent = getAncestor(child);
                if (actualParent) {
                    if (actualParent === parent) {
                        return true;
                    }
                    return false;
                }
                if (child === parent) {
                    return false;
                }
                if (getTop(child) === child) {
                    return false;
                }
                for (var _iterator10 = getFrames(parent), _isArray10 = Array.isArray(_iterator10), _i11 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator](); ;) {
                    var _ref10;
                    if (_isArray10) {
                        if (_i11 >= _iterator10.length) break;
                        _ref10 = _iterator10[_i11++];
                    } else {
                        _i11 = _iterator10.next();
                        if (_i11.done) break;
                        _ref10 = _i11.value;
                    }
                    var frame = _ref10;
                    if (frame === child) {
                        return true;
                    }
                }
                return false;
            }
            function isPopup() {
                return Boolean(getOpener(window));
            }
            function isIframe() {
                return Boolean(getParent(window));
            }
            function isFullpage() {
                return Boolean(!isIframe() && !isPopup());
            }
            function getWindowType() {
                if (isPopup()) {
                    return _conf.CONSTANTS.WINDOW_TYPES.POPUP;
                }
                if (isIframe()) {
                    return _conf.CONSTANTS.WINDOW_TYPES.IFRAME;
                }
                return _conf.CONSTANTS.WINDOW_TYPES.FULLPAGE;
            }
            function anyMatch(collection1, collection2) {
                for (var _iterator11 = collection1, _isArray11 = Array.isArray(_iterator11), _i12 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator](); ;) {
                    var _ref11;
                    if (_isArray11) {
                        if (_i12 >= _iterator11.length) break;
                        _ref11 = _iterator11[_i12++];
                    } else {
                        _i12 = _iterator11.next();
                        if (_i12.done) break;
                        _ref11 = _i12.value;
                    }
                    var item1 = _ref11;
                    for (var _iterator12 = collection2, _isArray12 = Array.isArray(_iterator12), _i13 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator](); ;) {
                        var _ref12;
                        if (_isArray12) {
                            if (_i13 >= _iterator12.length) break;
                            _ref12 = _iterator12[_i13++];
                        } else {
                            _i13 = _iterator12.next();
                            if (_i13.done) break;
                            _ref12 = _i13.value;
                        }
                        var item2 = _ref12;
                        if (item1 === item2) {
                            return true;
                        }
                    }
                }
            }
            function isSameTopWindow(win1, win2) {
                var top1 = getTop(win1);
                var top2 = getTop(win2);
                try {
                    if (top1 && top2) {
                        if (top1 === top2) {
                            return true;
                        }
                        return false;
                    }
                } catch (err) {}
                var allFrames1 = getAllFramesInWindow(win1);
                var allFrames2 = getAllFramesInWindow(win2);
                if (anyMatch(allFrames1, allFrames2)) {
                    return true;
                }
                var opener1 = getOpener(top1);
                var opener2 = getOpener(top2);
                if (opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2)) {
                    return false;
                }
                if (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1)) {
                    return false;
                }
            }
            function jsonStringify() {
                var objectToJSON = void 0;
                var arrayToJSON = void 0;
                try {
                    if (JSON.stringify({}) !== "{}") {
                        objectToJSON = Object.prototype.toJSON;
                        delete Object.prototype.toJSON;
                    }
                    if (JSON.stringify({}) !== "{}") {
                        throw new Error("Can not correctly serialize JSON objects");
                    }
                    if (JSON.stringify([]) !== "[]") {
                        arrayToJSON = Array.prototype.toJSON;
                        delete Array.prototype.toJSON;
                    }
                    if (JSON.stringify([]) !== "[]") {
                        throw new Error("Can not correctly serialize JSON objects");
                    }
                } catch (err) {
                    throw new Error("Can not repair JSON.stringify: " + err.message);
                }
                var result = JSON.stringify.apply(this, arguments);
                try {
                    if (objectToJSON) {
                        Object.prototype.toJSON = objectToJSON;
                    }
                    if (arrayToJSON) {
                        Array.prototype.toJSON = arrayToJSON;
                    }
                } catch (err) {
                    throw new Error("Can not repair JSON.stringify: " + err.message);
                }
                return result;
            }
            function jsonParse() {
                return JSON.parse.apply(this, arguments);
            }
        },
        "./node_modules/post-robot/src/global.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.global = undefined;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _cleanup = __webpack_require__("./node_modules/post-robot/src/lib/cleanup.js");
            var global = exports.global = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] || {};
            global.clean = global.clean || (0, _cleanup.cleanup)(global);
            global.registerSelf = function() {};
        },
        "./node_modules/post-robot/src/lib/cleanup.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.cleanup = cleanup;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            function cleanup(obj) {
                var tasks = [];
                return {
                    getters: {
                        array: function array() {
                            return [];
                        },
                        object: function object() {
                            return {};
                        }
                    },
                    set: function set(name, item) {
                        obj[name] = item;
                        this.register(function() {
                            delete obj[name];
                        });
                        return item;
                    },
                    push: function push(collection, item) {
                        collection.push(item);
                        this.register(function() {
                            var index = collection.indexOf(item);
                            if (index !== -1) {
                                collection.splice(index, 1);
                            }
                        });
                        return item;
                    },
                    setItem: function setItem(mapping, key, item) {
                        mapping[key] = item;
                        this.register(function() {
                            delete mapping[key];
                        });
                        return item;
                    },
                    register: function register(name, method) {
                        if (!method) {
                            method = name;
                            name = undefined;
                        }
                        tasks.push({
                            complete: false,
                            name: name,
                            run: function run() {
                                if (this.complete) {
                                    return;
                                }
                                this.complete = true;
                                return method();
                            }
                        });
                    },
                    hasTasks: function hasTasks() {
                        return Boolean(tasks.filter(function(item) {
                            return !item.complete;
                        }).length);
                    },
                    all: function all() {
                        var results = [];
                        while (tasks.length) {
                            results.push(tasks.pop().run());
                        }
                        return _promise.SyncPromise.all(results).then(function() {
                            return;
                        });
                    },
                    run: function run(name) {
                        var results = [];
                        var toClean = [];
                        for (var _iterator = tasks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var item = _ref;
                            if (item.name === name) {
                                toClean.push(item);
                                results.push(item.run());
                            }
                        }
                        for (var _iterator2 = toClean, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref2 = _i2.value;
                            }
                            var _item = _ref2;
                            tasks.splice(tasks.indexOf(_item), 1);
                        }
                        return _promise.SyncPromise.all(results).then(function() {
                            return;
                        });
                    }
                };
            }
        },
        "./node_modules/post-robot/src/lib/methods.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.listenForMethods = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.serializeMethod = serializeMethod;
            exports.serializeMethods = serializeMethods;
            exports.deserializeMethod = deserializeMethod;
            exports.deserializeError = deserializeError;
            exports.deserializeMethods = deserializeMethods;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _util = __webpack_require__("./node_modules/post-robot/src/lib/util.js");
            var _interface = __webpack_require__("./node_modules/post-robot/src/interface/index.js");
            var _log = __webpack_require__("./node_modules/post-robot/src/lib/log.js");
            var _promise = __webpack_require__("./node_modules/post-robot/src/lib/promise.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            _global.global.methods = _global.global.methods || {};
            var listenForMethods = exports.listenForMethods = _util.util.once(function() {
                (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                    window: "*",
                    origin: "*"
                }, function(_ref) {
                    var source = _ref.source, origin = _ref.origin, data = _ref.data;
                    var meth = _global.global.methods[data.id];
                    if (!meth) {
                        throw new Error("Could not find method with id: " + data.id);
                    }
                    if (meth.destination !== source) {
                        throw new Error("Method window does not match");
                    }
                    if (meth.domain && meth.domain !== "*" && origin !== meth.domain) {
                        throw new Error("Method domain " + meth.domain + " does not match origin " + origin);
                    }
                    _log.log.debug("Call local method", data.name, data.args);
                    return _promise.promise.run(function() {
                        return meth.method.apply({
                            source: source,
                            origin: origin,
                            data: data
                        }, data.args);
                    }).then(function(result) {
                        return {
                            result: result,
                            id: data.id,
                            name: data.name
                        };
                    });
                });
            });
            function isSerialized(item, type) {
                return (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null && item.__type__ === type;
            }
            function serializeMethod(destination, domain, method, name) {
                var id = _util.util.uniqueID();
                _global.global.clean.setItem(_global.global.methods, id, {
                    destination: destination,
                    domain: domain,
                    method: method
                });
                return {
                    __type__: _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD,
                    __id__: id,
                    __name__: name
                };
            }
            function serializeError(err) {
                return {
                    __type__: _conf.CONSTANTS.SERIALIZATION_TYPES.ERROR,
                    __message__: err.stack || err.message || err.toString()
                };
            }
            function serializeMethods(destination, domain, obj) {
                return _util.util.replaceObject({
                    obj: obj
                }, function(item, key) {
                    if (typeof item === "function") {
                        return serializeMethod(destination, domain, item, key);
                    }
                    if (item instanceof Error) {
                        return serializeError(item);
                    }
                }).obj;
            }
            function deserializeMethod(source, origin, obj) {
                function wrapper() {
                    var args = Array.prototype.slice.call(arguments);
                    _log.log.debug("Call foreign method", obj.__name__, args);
                    return (0, _interface.send)(source, _conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
                        id: obj.__id__,
                        name: obj.__name__,
                        args: args
                    }, {
                        domain: origin
                    }).then(function(_ref2) {
                        var data = _ref2.data;
                        _log.log.debug("Got foreign method result", obj.__name__, data.result);
                        return data.result;
                    }, function(err) {
                        _log.log.debug("Got foreign method error", err.stack || err.toString());
                        throw err;
                    });
                }
                wrapper.__name__ = obj.__name__;
                wrapper.source = source;
                wrapper.origin = origin;
                return wrapper;
            }
            function deserializeError(source, origin, obj) {
                return new Error(obj.__message__);
            }
            function deserializeMethods(source, origin, obj) {
                return _util.util.replaceObject({
                    obj: obj
                }, function(item, key) {
                    if (isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD)) {
                        return deserializeMethod(source, origin, item);
                    }
                    if (isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.ERROR)) {
                        return deserializeError(source, origin, item);
                    }
                }).obj;
            }
        },
        "./node_modules/post-robot/src/lib/ready.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.initOnReady = initOnReady;
            exports.onWindowReady = onWindowReady;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _windows = __webpack_require__("./node_modules/post-robot/src/lib/windows.js");
            var _interface = __webpack_require__("./node_modules/post-robot/src/interface/index.js");
            var _log = __webpack_require__("./node_modules/post-robot/src/lib/log.js");
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            _global.global.readyPromises = _global.global.readyPromises || [];
            function initOnReady() {
                (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {
                    window: "*",
                    domain: "*"
                }, function(event) {
                    for (var _iterator = _global.global.readyPromises, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var item = _ref;
                        if (item.win === event.source) {
                            item.promise.resolve(event);
                            return;
                        }
                    }
                    _global.global.clean.push(_global.global.readyPromises, {
                        win: event.source,
                        promise: new _promise.SyncPromise().resolve(event)
                    });
                });
                var parent = (0, _windows.getAncestor)();
                if (parent) {
                    (0, _interface.send)(parent, _conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {}, {
                        domain: "*"
                    })["catch"](function(err) {
                        _log.log.debug(err.stack || err.toString());
                    });
                }
            }
            function onWindowReady(win) {
                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5e3;
                var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Window";
                for (var _iterator2 = _global.global.readyPromises, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var item = _ref2;
                    if (item.win === win) {
                        return item.promise;
                    }
                }
                var promise = new _promise.SyncPromise();
                _global.global.clean.push(_global.global.readyPromises, {
                    win: win,
                    promise: promise
                });
                setTimeout(function() {
                    return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
                }, timeout);
                return promise;
            }
        },
        "./node_modules/post-robot/src/compat/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _ie = __webpack_require__("./node_modules/post-robot/src/compat/ie.js");
            Object.keys(_ie).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _ie[key];
                    }
                });
            });
        },
        "./node_modules/post-robot/src/compat/ie.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.emulateIERestrictions = emulateIERestrictions;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            function emulateIERestrictions(sourceWindow, targetWindow) {
                if (!_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP) {
                    if ((0, _lib.isSameTopWindow)(sourceWindow, targetWindow) === false) {
                        throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)");
                    }
                }
            }
        },
        "./node_modules/post-robot/src/drivers/receive/types.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.RECEIVE_MESSAGE_TYPES = undefined;
            var _RECEIVE_MESSAGE_TYPE;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _send = __webpack_require__("./node_modules/post-robot/src/drivers/send/index.js");
            var _listeners = __webpack_require__("./node_modules/post-robot/src/drivers/listeners.js");
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            function matchDomain(domain, origin) {
                if (typeof domain === "string") {
                    return domain === "*" || origin === domain;
                }
                if (Object.prototype.toString.call(domain) === "[object RegExp]") {
                    return origin.match(domain);
                }
                if (Array.isArray(domain)) {
                    return domain.indexOf(origin) !== -1;
                }
                return false;
            }
            var RECEIVE_MESSAGE_TYPES = exports.RECEIVE_MESSAGE_TYPES = (_RECEIVE_MESSAGE_TYPE = {}, 
            _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK, function(source, origin, message) {
                var options = _listeners.listeners.response[message.hash];
                if (!options) {
                    throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                }
                if (!matchDomain(options.domain, origin)) {
                    throw new Error("Ack origin " + origin + " does not match domain " + options.domain);
                }
                options.ack = true;
            }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST, function(source, origin, message) {
                var options = (0, _listeners.getRequestListener)(message.name, source, origin);
                function respond(data) {
                    if (message.fireAndForget || (0, _lib.isWindowClosed)(source)) {
                        return _lib.promise.Promise.resolve();
                    }
                    return (0, _send.sendMessage)(source, _extends({
                        target: message.originalSource,
                        hash: message.hash,
                        name: message.name
                    }, data), origin);
                }
                return _lib.promise.Promise.all([ respond({
                    type: _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK
                }), _lib.promise.run(function() {
                    if (!options) {
                        throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    }
                    if (!matchDomain(options.domain, origin)) {
                        throw new Error("Request origin " + origin + " does not match domain " + options.domain);
                    }
                    var data = message.data;
                    return _lib.promise.deNodeify(options.handler, {
                        source: source,
                        origin: origin,
                        data: data
                    });
                }).then(function(data) {
                    return respond({
                        type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                        ack: _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS,
                        data: data
                    });
                }, function(err) {
                    return respond({
                        type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
                        ack: _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR,
                        error: err.stack ? err.message + "\n" + err.stack : err.toString()
                    });
                }) ])["catch"](function(err) {
                    if (options && options.handleError) {
                        return options.handleError(err);
                    } else {
                        _lib.log.error(err.stack || err.toString());
                    }
                });
            }), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE, function(source, origin, message) {
                var options = _listeners.listeners.response[message.hash];
                if (!options) {
                    throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                }
                if (!matchDomain(options.domain, origin)) {
                    throw new Error("Response origin " + origin + " does not match domain " + options.domain);
                }
                delete _listeners.listeners.response[message.hash];
                if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR) {
                    return options.respond(new Error(message.error));
                } else if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS) {
                    var data = message.data || message.response;
                    return options.respond(null, {
                        source: source,
                        origin: origin,
                        data: data
                    });
                }
            }), _RECEIVE_MESSAGE_TYPE);
        },
        "./node_modules/post-robot/src/drivers/send/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.buildMessage = buildMessage;
            exports.sendMessage = sendMessage;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _strategies = __webpack_require__("./node_modules/post-robot/src/drivers/send/strategies.js");
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            function buildMessage(win, message) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var id = _lib.util.uniqueID();
                var type = (0, _lib.getWindowType)();
                var sourceDomain = _lib.util.getDomain(window);
                return _extends({}, message, options, {
                    sourceDomain: sourceDomain,
                    id: message.id || id,
                    windowType: type
                });
            }
            function sendMessage(win, message, domain) {
                return _lib.promise.run(function() {
                    message = buildMessage(win, message, {
                        data: (0, _lib.serializeMethods)(win, domain, message.data),
                        domain: domain
                    });
                    var level = void 0;
                    if (_conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) !== -1 || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK) {
                        level = "debug";
                    } else if (message.ack === "error") {
                        level = "error";
                    } else {
                        level = "info";
                    }
                    _lib.log.logLevel(level, [ "\n\n\t", "#send", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", domain || "*", "\n\n", message ]);
                    if (_conf.CONFIG.MOCK_MODE) {
                        delete message.target;
                        return window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].postMessage({
                            origin: _lib.util.getDomain(window),
                            source: window,
                            data: (0, _lib.jsonStringify)(message, 0, 2)
                        });
                    }
                    if (win === window) {
                        throw new Error("Attemping to send message to self");
                    }
                    if ((0, _lib.isWindowClosed)(win)) {
                        throw new Error("Window is closed");
                    }
                    _lib.log.debug("Running send message strategies", message);
                    var messages = [];
                    var serializedMessage = (0, _lib.jsonStringify)(_defineProperty({}, _conf.CONSTANTS.WINDOW_PROPS.POSTROBOT, message), 0, 2);
                    return _lib.promise.map(Object.keys(_strategies.SEND_MESSAGE_STRATEGIES), function(strategyName) {
                        return _lib.promise.run(function() {
                            if (!_conf.CONFIG.ALLOWED_POST_MESSAGE_METHODS[strategyName]) {
                                throw new Error("Strategy disallowed: " + strategyName);
                            }
                            return _strategies.SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                        }).then(function() {
                            messages.push(strategyName + ": success");
                            return true;
                        }, function(err) {
                            messages.push(strategyName + ": " + (err.stack || err.toString()) + "\n");
                            return false;
                        });
                    }).then(function(results) {
                        var success = _lib.util.some(results);
                        var status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                        _lib.log.debug(status);
                        if (!success) {
                            throw new Error(status);
                        }
                    });
                });
            }
        },
        "./node_modules/post-robot/src/drivers/send/strategies.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.SEND_MESSAGE_STRATEGIES = undefined;
            var _SEND_MESSAGE_STRATEG;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _compat = __webpack_require__("./node_modules/post-robot/src/compat/index.js");
            var _bridge = __webpack_require__("./node_modules/post-robot/src/bridge/index.js");
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            var SEND_MESSAGE_STRATEGIES = exports.SEND_MESSAGE_STRATEGIES = (_SEND_MESSAGE_STRATEG = {}, 
            _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, function(win, serializedMessage, domain) {
                (0, _compat.emulateIERestrictions)(window, win);
                if (domain && domain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
                    domain = win.location.protocol + "//" + win.location.host;
                }
                if (domain && domain.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) === 0) {
                    domain = "*";
                }
                return win.postMessage(serializedMessage, domain);
            }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.BRIDGE, function(win, serializedMessage, domain) {
                if ((0, _lib.isSameDomain)(win)) {
                    throw new Error("Post message through bridge disabled between same domain windows");
                }
                if ((0, _lib.isSameTopWindow)(window, win) !== false) {
                    throw new Error("Can only use bridge to communicate between two different windows, not between frames");
                }
                return (0, _bridge.sendBridgeMessage)(win, serializedMessage, domain);
            }), _defineProperty(_SEND_MESSAGE_STRATEG, _conf.CONSTANTS.SEND_STRATEGIES.GLOBAL, function(win, serializedMessage, domain) {
                if (!(0, _lib.isSameDomain)(win)) {
                    throw new Error("Post message through global disabled between different domain windows");
                }
                if ((0, _lib.isSameTopWindow)(window, win) !== false) {
                    throw new Error("Can only use global to communicate between two different windows, not between frames");
                }
                var foreignGlobal = win[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
                if (!foreignGlobal) {
                    throw new Error("Can not find postRobot global on foreign window");
                }
                return foreignGlobal.receiveMessage({
                    source: window,
                    origin: domain,
                    data: serializedMessage
                });
            }), _SEND_MESSAGE_STRATEG);
        },
        "./node_modules/post-robot/src/bridge/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _bridge = __webpack_require__("./node_modules/post-robot/src/bridge/bridge.js");
            Object.keys(_bridge).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _bridge[key];
                    }
                });
            });
            var _child = __webpack_require__("./node_modules/post-robot/src/bridge/child.js");
            Object.keys(_child).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _child[key];
                    }
                });
            });
            var _common = __webpack_require__("./node_modules/post-robot/src/bridge/common.js");
            Object.keys(_common).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _common[key];
                    }
                });
            });
            var _parent = __webpack_require__("./node_modules/post-robot/src/bridge/parent.js");
            Object.keys(_parent).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _parent[key];
                    }
                });
            });
        },
        "./node_modules/post-robot/src/bridge/bridge.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _interface = __webpack_require__("./node_modules/post-robot/src/interface/index.js");
            _global.global.openTunnelToParent = function openTunnelToParent(_ref) {
                var name = _ref.name, source = _ref.source, canary = _ref.canary, _sendMessage = _ref.sendMessage;
                var remoteWindow = (0, _lib.getParent)(window);
                if (!remoteWindow) {
                    throw new Error("No parent window found to open tunnel to");
                }
                return (0, _interface.send)(remoteWindow, _conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                    name: name,
                    sendMessage: function sendMessage() {
                        if ((0, _lib.isWindowClosed)(source)) {
                            return;
                        }
                        try {
                            canary();
                        } catch (err) {
                            return;
                        }
                        _sendMessage.apply(this, arguments);
                    }
                }, {
                    domain: "*"
                });
            };
        },
        "./node_modules/post-robot/src/bridge/child.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.openTunnelToOpener = openTunnelToOpener;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            var _common = __webpack_require__("./node_modules/post-robot/src/bridge/common.js");
            function getRemoteBridgeForWindow(win) {
                return _promise.SyncPromise["try"](function() {
                    for (var _iterator = (0, _lib.getFrames)(win), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var _frame = _ref;
                        try {
                            if (_frame && _frame !== window && (0, _lib.isSameDomain)(_frame) && _frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                                return _frame;
                            }
                        } catch (err) {
                            continue;
                        }
                    }
                    try {
                        var frame = (0, _lib.getFrameByName)(win, (0, _common.getBridgeName)(_lib.util.getDomain()));
                        if (!frame) {
                            return;
                        }
                        if ((0, _lib.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                            return frame;
                        }
                        return new _promise.SyncPromise(function(resolve) {
                            var interval = void 0;
                            var timeout = void 0;
                            interval = setInterval(function() {
                                if ((0, _lib.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) {
                                    clearInterval(interval);
                                    clearTimeout(timeout);
                                    return resolve(frame);
                                }
                                setTimeout(function() {
                                    clearInterval(interval);
                                    return resolve();
                                }, 2e3);
                            }, 100);
                        });
                    } catch (err) {
                        return;
                    }
                });
            }
            function openTunnelToOpener() {
                return _promise.SyncPromise["try"](function() {
                    var opener = (0, _lib.getOpener)(window);
                    if (!opener) {
                        return;
                    }
                    if (!(0, _common.needsBridge)({
                        win: opener
                    })) {
                        return;
                    }
                    (0, _common.registerRemoteWindow)(opener);
                    return getRemoteBridgeForWindow(opener).then(function(bridge) {
                        if (!bridge) {
                            return (0, _common.rejectRemoteSendMessage)(opener, new Error("Can not register with opener: no bridge found in opener"));
                        }
                        if (!window.name) {
                            return (0, _common.rejectRemoteSendMessage)(opener, new Error("Can not register with opener: window does not have a name"));
                        }
                        return bridge[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].openTunnelToParent({
                            name: window.name,
                            source: window,
                            canary: function canary() {},
                            sendMessage: function sendMessage(message) {
                                if (!window || window.closed) {
                                    return;
                                }
                                (0, _drivers.receiveMessage)({
                                    data: message,
                                    origin: this.origin,
                                    source: this.source
                                });
                            }
                        }).then(function(_ref2) {
                            var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
                            if (source !== opener) {
                                throw new Error("Source does not match opener");
                            }
                            (0, _common.registerRemoteSendMessage)(source, origin, data.sendMessage);
                        })["catch"](function(err) {
                            (0, _common.rejectRemoteSendMessage)(opener, err);
                            throw err;
                        });
                    });
                });
            }
        },
        "./node_modules/post-robot/src/bridge/common.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.documentBodyReady = undefined;
            exports.needsBridgeForBrowser = needsBridgeForBrowser;
            exports.needsBridgeForWin = needsBridgeForWin;
            exports.needsBridgeForDomain = needsBridgeForDomain;
            exports.needsBridge = needsBridge;
            exports.getBridgeName = getBridgeName;
            exports.isBridge = isBridge;
            exports.registerRemoteWindow = registerRemoteWindow;
            exports.findRemoteWindow = findRemoteWindow;
            exports.registerRemoteSendMessage = registerRemoteSendMessage;
            exports.rejectRemoteSendMessage = rejectRemoteSendMessage;
            exports.sendBridgeMessage = sendBridgeMessage;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            function needsBridgeForBrowser() {
                if ((0, _lib.getUserAgent)(window).match(/MSIE|trident|edge/i)) {
                    return true;
                }
                if (!_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP) {
                    return true;
                }
                return false;
            }
            function needsBridgeForWin(win) {
                if (win && (0, _lib.isSameTopWindow)(window, win)) {
                    return false;
                }
                if (win && (0, _lib.isSameDomain)(win)) {
                    return false;
                }
                return true;
            }
            function needsBridgeForDomain(domain) {
                if (domain && _lib.util.getDomain() === _lib.util.getDomainFromUrl(domain)) {
                    return false;
                }
                return true;
            }
            function needsBridge(_ref) {
                var win = _ref.win, domain = _ref.domain;
                return needsBridgeForBrowser() && needsBridgeForWin(win) && needsBridgeForDomain(domain);
            }
            function getBridgeName(domain) {
                domain = domain || _lib.util.getDomainFromUrl(domain);
                var sanitizedDomain = domain.replace(/[^a-zA-Z0-9]+/g, "_");
                var id = _conf.CONSTANTS.BRIDGE_NAME_PREFIX + "_" + sanitizedDomain;
                return id;
            }
            function isBridge() {
                return window.name && window.name === getBridgeName(_lib.util.getDomain());
            }
            var documentBodyReady = exports.documentBodyReady = new _lib.promise.Promise(function(resolve) {
                if (window.document && window.document.body) {
                    return resolve(window.document.body);
                }
                var interval = setInterval(function() {
                    if (window.document && window.document.body) {
                        clearInterval(interval);
                        return resolve(window.document.body);
                    }
                }, 10);
            });
            _global.global.remoteWindows = _global.global.remoteWindows || [];
            function registerRemoteWindow(win) {
                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _conf.CONFIG.BRIDGE_TIMEOUT;
                var sendMessagePromise = new _lib.promise.Promise();
                _global.global.clean.push(_global.global.remoteWindows, {
                    win: win,
                    sendMessagePromise: sendMessagePromise
                });
            }
            function findRemoteWindow(win) {
                for (var i = 0; i < _global.global.remoteWindows.length; i++) {
                    if (_global.global.remoteWindows[i].win === win) {
                        return _global.global.remoteWindows[i];
                    }
                }
            }
            function registerRemoteSendMessage(win, domain, sendMessage) {
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) {
                    throw new Error("Window not found to register sendMessage to");
                }
                var sendMessageWrapper = function sendMessageWrapper(remoteWin, message, remoteDomain) {
                    if (remoteWin !== win) {
                        throw new Error("Remote window does not match window");
                    }
                    if (remoteDomain !== "*" && remoteDomain !== domain) {
                        throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
                    }
                    sendMessage(message);
                };
                remoteWindow.sendMessagePromise.resolve(sendMessageWrapper);
                remoteWindow.sendMessagePromise = _lib.promise.Promise.resolve(sendMessageWrapper);
            }
            function rejectRemoteSendMessage(win, err) {
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) {
                    throw new Error("Window not found on which to reject sendMessage");
                }
                remoteWindow.sendMessagePromise.asyncReject(err);
            }
            function sendBridgeMessage(win, message, domain) {
                var messagingChild = (0, _lib.isOpener)(window, win);
                var messagingParent = (0, _lib.isOpener)(win, window);
                if (!messagingChild && !messagingParent) {
                    throw new Error("Can only send messages to and from parent and popup windows");
                }
                var remoteWindow = findRemoteWindow(win);
                if (!remoteWindow) {
                    throw new Error("Window not found to send message to");
                }
                return remoteWindow.sendMessagePromise.then(function(sendMessage) {
                    return sendMessage(win, message, domain);
                });
            }
            _global.global.receiveMessage = function(event) {
                return (0, _drivers.receiveMessage)(event);
            };
        },
        "./node_modules/post-robot/src/bridge/parent.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            exports.openBridge = openBridge;
            exports.destroyBridges = destroyBridges;
            exports.linkUrl = linkUrl;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            var _interface = __webpack_require__("./node_modules/post-robot/src/interface/index.js");
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            var _common = __webpack_require__("./node_modules/post-robot/src/bridge/common.js");
            _global.global.bridges = _global.global.bridges || {};
            function listenForRegister(source, domain) {
                (0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
                    source: source,
                    domain: domain
                }, function(_ref) {
                    var origin = _ref.origin, data = _ref.data;
                    if (origin !== domain) {
                        throw new Error("Domain " + domain + " does not match origin " + origin);
                    }
                    if (!data.name) {
                        throw new Error("Register window expected to be passed window name");
                    }
                    if (!data.sendMessage) {
                        throw new Error("Register window expected to be passed sendMessage method");
                    }
                    var winDetails = _global.global.popupWindows[data.name];
                    if (!winDetails) {
                        throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
                    }
                    if (!winDetails.domain) {
                        throw new Error("We do not have a registered domain for window " + data.name);
                    }
                    if (winDetails.domain !== origin) {
                        throw new Error("Message origin " + origin + " does not matched registered window origin " + winDetails.domain);
                    }
                    (0, _common.registerRemoteSendMessage)(winDetails.win, domain, data.sendMessage);
                    return {
                        sendMessage: function sendMessage(message) {
                            if (!window || window.closed) {
                                return;
                            }
                            (0, _drivers.receiveMessage)({
                                data: message,
                                origin: winDetails.domain,
                                source: winDetails.win
                            });
                        }
                    };
                });
            }
            function openBridgeFrame(name, url) {
                _lib.log.debug("Opening bridge:", name, url);
                var iframe = document.createElement("iframe");
                iframe.setAttribute("name", name);
                iframe.setAttribute("id", name);
                iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;");
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("border", "0");
                iframe.setAttribute("scrolling", "no");
                iframe.setAttribute("allowTransparency", "true");
                iframe.setAttribute("tabindex", "-1");
                iframe.setAttribute("hidden", "true");
                iframe.setAttribute("title", "");
                iframe.setAttribute("role", "presentation");
                iframe.src = url;
                return iframe;
            }
            function openBridge(url, domain) {
                domain = domain || _lib.util.getDomainFromUrl(url);
                if (_global.global.bridges[domain]) {
                    return _global.global.bridges[domain];
                }
                return _global.global.clean.setItem(_global.global.bridges, domain, _lib.promise.run(function() {
                    if (_lib.util.getDomain() === domain) {
                        throw new Error("Can not open bridge on the same domain as current domain: " + domain);
                    }
                    var name = (0, _common.getBridgeName)(domain);
                    var frame = (0, _lib.getFrameByName)(window, name);
                    if (frame) {
                        throw new Error("Frame with name " + name + " already exists on page");
                    }
                    var iframe = openBridgeFrame(name, url);
                    return _common.documentBodyReady.then(function(body) {
                        return new _lib.promise.Promise(function(resolve, reject) {
                            setTimeout(resolve, 1);
                        }).then(function() {
                            body.appendChild(iframe);
                            _global.global.clean.register("bridgeFrames", function() {
                                body.removeChild(iframe);
                                delete _global.global.bridges[domain];
                            });
                            var bridge = iframe.contentWindow;
                            listenForRegister(bridge, domain);
                            return new _lib.promise.Promise(function(resolve, reject) {
                                iframe.onload = resolve;
                                iframe.onerror = reject;
                            }).then(function() {
                                return (0, _lib.onWindowReady)(bridge, _conf.CONFIG.BRIDGE_TIMEOUT, "Bridge " + url);
                            }).then(function() {
                                return bridge;
                            });
                        });
                    });
                }));
            }
            function destroyBridges() {
                return _global.global.clean.run("bridgeFrames");
            }
            _global.global.popupWindows = _global.global.popupWindows || {};
            var windowOpen = window.open;
            window.open = function(url, name, options, last) {
                var domain = url;
                if (url && url.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) === 0) {
                    var _url$split = url.split("|");
                    var _url$split2 = _slicedToArray(_url$split, 2);
                    domain = _url$split2[0];
                    url = _url$split2[1];
                }
                if (domain) {
                    domain = _lib.util.getDomainFromUrl(domain);
                }
                var win = windowOpen.call(this, url, name, options, last);
                if (url) {
                    (0, _common.registerRemoteWindow)(win);
                }
                if (name) {
                    _global.global.clean.setItem(_global.global.popupWindows, name, {
                        win: win,
                        domain: domain
                    });
                }
                return win;
            };
            function linkUrl(win, url) {
                for (var _iterator = Object.keys(_global.global.popupWindows), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref2 = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref2 = _i.value;
                    }
                    var name = _ref2;
                    var winOptions = _global.global.popupWindows[name];
                    if (winOptions.win === win) {
                        winOptions.domain = _lib.util.getDomainFromUrl(url);
                        (0, _common.registerRemoteWindow)(win);
                        break;
                    }
                }
            }
        },
        "./node_modules/post-robot/src/drivers/listeners.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.listeners = undefined;
            exports.resetListeners = resetListeners;
            exports.getRequestListener = getRequestListener;
            exports.removeRequestListener = removeRequestListener;
            exports.addRequestListener = addRequestListener;
            var _global = __webpack_require__("./node_modules/post-robot/src/global.js");
            _global.global.listeners = _global.global.listeners || {
                request: [],
                response: []
            };
            var listeners = exports.listeners = _global.global.listeners;
            function resetListeners() {
                _global.global.listeners.request = [];
                _global.global.listeners.response = [];
            }
            function isRegex(item) {
                return Object.prototype.toString.call(item) === "[object RegExp]";
            }
            function matchDomain(domain, origin) {
                if (typeof domain === "string") {
                    if (isRegex(origin)) {
                        return false;
                    }
                    if (Array.isArray(origin)) {
                        return false;
                    }
                    return domain === "*" || origin === domain;
                }
                if (isRegex(domain)) {
                    if (isRegex(origin)) {
                        return domain.toString() === origin.toString();
                    }
                    if (Array.isArray(origin)) {
                        return false;
                    }
                    return origin.match(domain);
                }
                if (Array.isArray(domain)) {
                    if (isRegex(origin)) {
                        return false;
                    }
                    if (Array.isArray(origin)) {
                        return JSON.stringify(domain) === JSON.stringify(origin);
                    }
                    return domain.indexOf(origin) !== -1;
                }
                return false;
            }
            function getRequestListener(name, win, domain) {
                var result = {};
                for (var _iterator = _global.global.listeners.request, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var requestListener = _ref;
                    if (requestListener.name !== name) {
                        continue;
                    }
                    var specifiedWin = requestListener.win && requestListener.win !== "*";
                    var specifiedDomain = requestListener.domain && requestListener.domain !== "*";
                    var matchedWin = specifiedWin && requestListener.win === win;
                    var matchedDomain = specifiedDomain && matchDomain(requestListener.domain, domain);
                    if (specifiedWin && specifiedDomain) {
                        if (matchedWin && matchedDomain) {
                            result.all = result.all || requestListener.options;
                        }
                    } else if (specifiedDomain) {
                        if (matchedDomain) {
                            result.domain = result.domain || requestListener.options;
                        }
                    } else if (specifiedWin) {
                        if (matchedWin) {
                            result.win = result.win || requestListener.options;
                        }
                    } else {
                        result.name = result.name || requestListener.options;
                    }
                }
                return result.all || result.domain || result.win || result.name;
            }
            function removeRequestListener(options) {
                for (var _iterator2 = _global.global.listeners.request, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var listener = _ref2;
                    if (listener.options === options) {
                        _global.global.listeners.request.splice(_global.global.listeners.request.indexOf(listener), 1);
                    }
                }
            }
            function addRequestListener(name, win, domain, options, override) {
                var listener = getRequestListener(name, win, domain);
                if (listener) {
                    if (override) {
                        removeRequestListener(listener);
                    } else {
                        if (win) {
                            throw new Error("Request listener already exists for " + name + " on domain " + domain + " for specified window: " + (listener.win === win));
                        }
                        throw new Error("Request listener already exists for " + name + " on domain " + domain);
                    }
                }
                _global.global.clean.push(_global.global.listeners.request, {
                    name: name,
                    win: win,
                    domain: domain,
                    options: options
                });
            }
        },
        "./node_modules/post-robot/src/interface/server.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.on = undefined;
            exports.listen = listen;
            exports.once = once;
            exports.listener = listener;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            var _lib = __webpack_require__("./node_modules/post-robot/src/lib/index.js");
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            function listen(options) {
                if (!options.name) {
                    throw new Error("Expected options.name");
                }
                options.handler = options.handler || _lib.util.noop;
                options.errorHandler = options.errorHandler || function(err) {
                    throw err;
                };
                if (options.once) {
                    var handler = options.handler;
                    options.handler = _lib.util.once(function() {
                        (0, _drivers.removeRequestListener)(options);
                        return handler.apply(this, arguments);
                    });
                }
                var override = options.override || _conf.CONFIG.MOCK_MODE;
                if (options.source) {
                    options.window = options.source;
                }
                options.domain = options.domain || "*";
                (0, _drivers.addRequestListener)(options.name, options.window, options.domain, options, override);
                options.handleError = function(err) {
                    options.errorHandler(err);
                };
                if (options.window && options.errorOnClose) {
                    var interval = _lib.util.safeInterval(function() {
                        if ((0, _lib.isWindowClosed)(options.window)) {
                            interval.cancel();
                            options.handleError(new Error("Post message target window is closed"));
                        }
                    }, 50);
                }
                return {
                    cancel: function cancel() {
                        (0, _drivers.removeRequestListener)(options);
                    }
                };
            }
            function _on(name, options, handler, errorHandler) {
                if (typeof options === "function") {
                    errorHandler = handler;
                    handler = options;
                    options = {};
                }
                options = options || {};
                options.name = name;
                options.handler = handler || options.handler;
                options.errorHandler = errorHandler || options.errorHandler;
                return listen(options);
            }
            exports.on = _on;
            function once(name, options, handler, errorHandler) {
                if (typeof options === "function") {
                    errorHandler = handler;
                    handler = options;
                    options = {};
                }
                options = options || {};
                options.name = name;
                options.handler = handler || options.handler;
                options.errorHandler = errorHandler || options.errorHandler;
                options.once = true;
                var prom = new _lib.promise.Promise(function(resolve, reject) {
                    options.handler = options.handler || function(event) {
                        return resolve(event);
                    };
                    options.errorHandler = options.errorHandler || reject;
                });
                var myListener = listen(options);
                _lib.util.extend(prom, myListener);
                return prom;
            }
            function listener() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return {
                    on: function on(name, handler, errorHandler) {
                        return _on(name, options, handler, errorHandler);
                    }
                };
            }
        },
        "./node_modules/post-robot/src/interface/config.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CONSTANTS = exports.CONFIG = undefined;
            exports.enableMockMode = enableMockMode;
            exports.disableMockMode = disableMockMode;
            var _conf = __webpack_require__("./node_modules/post-robot/src/conf/index.js");
            Object.defineProperty(exports, "CONFIG", {
                enumerable: true,
                get: function get() {
                    return _conf.CONFIG;
                }
            });
            Object.defineProperty(exports, "CONSTANTS", {
                enumerable: true,
                get: function get() {
                    return _conf.CONSTANTS;
                }
            });
            exports.disable = disable;
            var _drivers = __webpack_require__("./node_modules/post-robot/src/drivers/index.js");
            function enableMockMode() {
                _conf.CONFIG.MOCK_MODE = true;
            }
            function disableMockMode() {
                _conf.CONFIG.MOCK_MODE = false;
            }
            function disable() {
                delete window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
                window.removeEventListener("message", _drivers.messageListener);
            }
        },
        "./node_modules/xcomponent/src/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.destroyAll = exports.getByTag = undefined;
            exports.create = create;
            var _component = __webpack_require__("./node_modules/xcomponent/src/component/index.js");
            Object.defineProperty(exports, "getByTag", {
                enumerable: true,
                get: function get() {
                    return _component.getByTag;
                }
            });
            Object.defineProperty(exports, "destroyAll", {
                enumerable: true,
                get: function get() {
                    return _component.destroyAll;
                }
            });
            var _error = __webpack_require__("./node_modules/xcomponent/src/error.js");
            Object.keys(_error).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _error[key];
                    }
                });
            });
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            var CONSTANTS = _interopRequireWildcard(_constants);
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            }
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function create(options) {
                return new _component.Component(options);
            }
            module.exports.CONSTANTS = CONSTANTS;
            module.exports.postRobot = _src2["default"];
            exports["default"] = module.exports;
        },
        "./node_modules/xcomponent/src/component/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _component = __webpack_require__("./node_modules/xcomponent/src/component/component/index.js");
            Object.keys(_component).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _component[key];
                    }
                });
            });
            var _parent = __webpack_require__("./node_modules/xcomponent/src/component/parent/index.js");
            Object.keys(_parent).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _parent[key];
                    }
                });
            });
            var _child = __webpack_require__("./node_modules/xcomponent/src/component/child/index.js");
            Object.keys(_child).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _child[key];
                    }
                });
            });
        },
        "./node_modules/xcomponent/src/component/component/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Component = exports.components = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            exports.getByTag = getByTag;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _base = __webpack_require__("./node_modules/xcomponent/src/component/base.js");
            var _child = __webpack_require__("./node_modules/xcomponent/src/component/child/index.js");
            var _parent = __webpack_require__("./node_modules/xcomponent/src/component/parent/index.js");
            var _delegate = __webpack_require__("./node_modules/xcomponent/src/component/delegate/index.js");
            var _props = __webpack_require__("./node_modules/xcomponent/src/component/component/props.js");
            var _window = __webpack_require__("./node_modules/xcomponent/src/component/window.js");
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            var _drivers = __webpack_require__("./node_modules/xcomponent/src/component/parent/drivers.js");
            var _validate2 = __webpack_require__("./node_modules/xcomponent/src/component/component/validate.js");
            var _parent2 = __webpack_require__("./node_modules/xcomponent/src/component/component/templates/parent.htm");
            var _parent3 = _interopRequireDefault(_parent2);
            var _component = __webpack_require__("./node_modules/xcomponent/src/component/component/templates/component.htm");
            var _component2 = _interopRequireDefault(_component);
            var _drivers2 = __webpack_require__("./node_modules/xcomponent/src/drivers/index.js");
            var drivers = _interopRequireWildcard(_drivers2);
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            }
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var components = exports.components = {};
            var Component = exports.Component = function(_BaseComponent) {
                _inherits(Component, _BaseComponent);
                function Component() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    _classCallCheck(this, Component);
                    var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, options));
                    _this.validate(options);
                    _this.addProp(options, "tag");
                    _this.addProp(options, "name", _this.tag.replace(/-/g, "_"));
                    _this.props = _extends({}, _props.internalProps, options.props);
                    _this.addProp(options, "dimensions");
                    _this.addProp(options, "scrolling");
                    _this.addProp(options, "version", "latest");
                    _this.addProp(options, "defaultEnv");
                    _this.addProp(options, "envUrls");
                    _this.addProp(options, "buildUrl");
                    _this.addProp(options, "bridgeUrl");
                    _this.addProp(options, "bridgeUrls");
                    _this.addProp(options, "bridgeDomain");
                    _this.addProp(options, "bridgeDomains");
                    _this.addProp(options, "url");
                    _this.addProp(options, "contexts", {});
                    for (var _iterator = _constants.CONTEXT_TYPES_LIST, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var context = _ref;
                        _this.contexts[context] = _this.contexts[context] === undefined ? true : Boolean(_this.contexts[context]);
                    }
                    _this.addProp(options, "defaultContext");
                    _this.addProp(options, "singleton");
                    _this.addProp(options, "autoResize", false);
                    _this.addProp(options, "parentTemplate", _parent3["default"]);
                    _this.addProp(options, "componentTemplate", _component2["default"]);
                    _this.addProp(options, "validateProps");
                    _this.addProp(options, "domain");
                    _this.addProp(options, "domains");
                    _this.addProp(options, "remoteRenderDomain");
                    components[_this.tag] = _this;
                    _this.registerDrivers();
                    _this.registerChild();
                    _this.listenDelegate();
                    return _this;
                }
                _createClass(Component, [ {
                    key: "registerDrivers",
                    value: function registerDrivers() {
                        for (var _iterator2 = Object.keys(drivers), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref2 = _i2.value;
                            }
                            var driverName = _ref2;
                            var driver = drivers[driverName];
                            if (driver.isActive()) {
                                driver.register(this);
                            }
                        }
                    }
                }, {
                    key: "registerChild",
                    value: function registerChild() {
                        if ((0, _window.isXComponentWindow)()) {
                            var componentMeta = (0, _window.getComponentMeta)();
                            if (componentMeta.tag === this.tag) {
                                window.xchild = new _child.ChildComponent(this);
                                window.xprops = window.xchild.props;
                            }
                        }
                    }
                }, {
                    key: "listenDelegate",
                    value: function listenDelegate() {
                        var _this2 = this;
                        if (this.remoteRenderDomain) {
                            _src2["default"].on(_constants.POST_MESSAGE.DELEGATE + "_" + this.name, {
                                domain: this.remoteRenderDomain
                            }, function(_ref3) {
                                var source = _ref3.source, data = _ref3.data;
                                var delegate = _this2.delegate(source, data.options);
                                return {
                                    overrides: delegate.getOverrides(data.context),
                                    destroy: function destroy() {
                                        return delegate.destroy();
                                    }
                                };
                            });
                        }
                    }
                }, {
                    key: "isXComponent",
                    value: function isXComponent() {
                        return (0, _window.isXComponentWindow)();
                    }
                }, {
                    key: "isChild",
                    value: function isChild() {
                        return (0, _window.isXComponentWindow)() && (0, _window.getComponentMeta)().tag === this.tag;
                    }
                }, {
                    key: "parent",
                    value: function parent(options) {
                        return new _parent.ParentComponent(this, null, options);
                    }
                }, {
                    key: "child",
                    value: function child(options) {
                        if (!window.xchild) {
                            throw new Error("Child not instantiated");
                        }
                        if (window.xchild.component !== this) {}
                        if (options && options.onEnter) {
                            options.onEnter.call(window.xchild);
                        }
                        return window.xchild;
                    }
                }, {
                    key: "attach",
                    value: function attach(options) {
                        return this.child(options);
                    }
                }, {
                    key: "init",
                    value: function init(props, context, element) {
                        context = this.getRenderContext(element, context);
                        return new _parent.ParentComponent(this, context, {
                            props: props
                        });
                    }
                }, {
                    key: "delegate",
                    value: function delegate(source) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return new _delegate.DelegateComponent(this, source, options);
                    }
                }, {
                    key: "getRenderContext",
                    value: function getRenderContext(element, context) {
                        var tag = this.tag;
                        var defaultContext = this.defaultContext;
                        var contexts = this.contexts;
                        if (element) {
                            if (context && !_drivers.RENDER_DRIVERS[context].requiresElement) {
                                throw new Error("[" + tag + "] " + context + " context can not be rendered into element");
                            }
                            context = _constants.CONTEXT_TYPES.IFRAME;
                        }
                        if (context) {
                            if (!contexts[context]) {
                                throw new Error("[" + tag + "] " + context + " context not allowed by component");
                            }
                            if (_drivers.RENDER_DRIVERS[context].requiresElement && !element) {
                                throw new Error("[" + tag + "] Must specify element to render to iframe");
                            }
                            return context;
                        }
                        if (defaultContext) {
                            return defaultContext;
                        }
                        var _arr = [ _constants.CONTEXT_TYPES.LIGHTBOX, _constants.CONTEXT_TYPES.POPUP ];
                        for (var _i3 = 0; _i3 < _arr.length; _i3++) {
                            var renderContext = _arr[_i3];
                            if (contexts[renderContext]) {
                                return renderContext;
                            }
                        }
                        throw new Error("[" + tag + "] No context options available for render");
                    }
                }, {
                    key: "render",
                    value: function render(props, element, context) {
                        var _this3 = this;
                        return _promise.SyncPromise["try"](function() {
                            context = _this3.getRenderContext(element, context);
                            return new _parent.ParentComponent(_this3, context, {
                                props: props
                            }).render(element);
                        });
                    }
                }, {
                    key: "renderTo",
                    value: function renderTo(win, props, element, context) {
                        var _this4 = this;
                        return _promise.SyncPromise["try"](function() {
                            context = _this4.getRenderContext(element, context);
                            return new _parent.ParentComponent(_this4, context, {
                                props: props
                            }).renderTo(win, element);
                        });
                    }
                }, {
                    key: "getByTag",
                    value: function getByTag(tag) {
                        return components[tag];
                    }
                }, {
                    key: "validate",
                    value: function validate(options) {
                        return (0, _validate2.validate)(options);
                    }
                }, {
                    key: "log",
                    value: function log(event) {
                        var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        _client2["default"].info("xc_" + this.name + "_" + event, payload);
                    }
                }, {
                    key: "logWarning",
                    value: function logWarning(event, payload) {
                        _client2["default"].warn("xc_" + this.name + "_" + event, payload);
                    }
                }, {
                    key: "logError",
                    value: function logError(event, payload) {
                        _client2["default"].error("xc_" + this.name + "_" + event, payload);
                    }
                } ]);
                return Component;
            }(_base.BaseComponent);
            function getByTag(tag) {
                return components[tag];
            }
            var _loop = function _loop() {
                if (_isArray3) {
                    if (_i4 >= _iterator3.length) return "break";
                    _ref4 = _iterator3[_i4++];
                } else {
                    _i4 = _iterator3.next();
                    if (_i4.done) return "break";
                    _ref4 = _i4.value;
                }
                var context = _ref4;
                var contextName = (0, _lib.capitalizeFirstLetter)(context);
                Component.prototype["render" + contextName] = function(props, element) {
                    return this.render(props, element, context);
                };
                Component.prototype["render" + contextName + "To"] = function(win, props, element) {
                    return this.renderTo(win, props, element, context);
                };
            };
            for (var _iterator3 = _constants.CONTEXT_TYPES_LIST, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                var _ref4;
                var _ret = _loop();
                if (_ret === "break") break;
            }
        },
        "./node_modules/beaver-logger/client/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _logger = __webpack_require__("./node_modules/beaver-logger/client/logger.js");
            Object.keys(_logger).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _logger[key];
                    }
                });
            });
            var _init = __webpack_require__("./node_modules/beaver-logger/client/init.js");
            Object.keys(_init).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _init[key];
                    }
                });
            });
            var _transitions = __webpack_require__("./node_modules/beaver-logger/client/transitions.js");
            Object.keys(_transitions).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _transitions[key];
                    }
                });
            });
            var _builders = __webpack_require__("./node_modules/beaver-logger/client/builders.js");
            Object.keys(_builders).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _builders[key];
                    }
                });
            });
            var _config = __webpack_require__("./node_modules/beaver-logger/client/config.js");
            Object.keys(_config).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _config[key];
                    }
                });
            });
            exports["default"] = module.exports;
        },
        "./node_modules/beaver-logger/client/logger.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.flush = exports.tracking = exports.buffer = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.print = print;
            exports.immediateFlush = immediateFlush;
            exports.log = log;
            exports.prefix = prefix;
            exports.debug = debug;
            exports.info = info;
            exports.warn = warn;
            exports.error = error;
            exports.track = track;
            var _util = __webpack_require__("./node_modules/beaver-logger/client/util.js");
            var _builders = __webpack_require__("./node_modules/beaver-logger/client/builders.js");
            var _config = __webpack_require__("./node_modules/beaver-logger/client/config.js");
            var buffer = exports.buffer = [];
            var tracking = exports.tracking = {};
            if (Function.prototype.bind && window.console && _typeof(console.log) === "object") {
                [ "log", "info", "warn", "error" ].forEach(function(method) {
                    console[method] = this.bind(console[method], console);
                }, Function.prototype.call);
            }
            var loaded = false;
            setTimeout(function() {
                loaded = true;
            }, 1);
            function print(level, event, payload) {
                if (!loaded) {
                    return setTimeout(function() {
                        return print(level, event, payload);
                    }, 1);
                }
                if (!window.console || !window.console.log) {
                    return;
                }
                var logLevel = window.LOG_LEVEL || _config.config.logLevel;
                if (_config.logLevels.indexOf(level) > _config.logLevels.indexOf(logLevel)) {
                    return;
                }
                payload = payload || {};
                var args = [ event ];
                args.push(payload);
                if (payload.error || payload.warning) {
                    args.push("\n\n", payload.error || payload.warning);
                }
                try {
                    if (window.console[level] && window.console[level].apply) {
                        window.console[level].apply(window.console, args);
                    } else if (window.console.log && window.console.log.apply) {
                        window.console.log.apply(window.console, args);
                    }
                } catch (err) {}
            }
            function immediateFlush() {
                var async = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                if (!_config.config.uri) {
                    return;
                }
                var hasBuffer = buffer.length;
                var hasTracking = Object.keys(tracking).length;
                if (!hasBuffer && !hasTracking) {
                    return;
                }
                if (hasTracking) {
                    print("info", "tracking", tracking);
                }
                var meta = {};
                for (var _iterator = _builders.metaBuilders, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var builder = _ref;
                    try {
                        (0, _util.extend)(meta, builder(), false);
                    } catch (err) {
                        console.error("Error in custom meta builder:", err.stack || err.toString());
                    }
                }
                for (var _iterator2 = _builders.trackingBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var _builder = _ref2;
                    try {
                        (0, _util.extend)(tracking, _builder(), false);
                    } catch (err) {
                        console.error("Error in custom tracking builder:", err.stack || err.toString());
                    }
                }
                var headers = {};
                for (var _iterator3 = _builders.headerBuilders, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                    var _ref3;
                    if (_isArray3) {
                        if (_i3 >= _iterator3.length) break;
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) break;
                        _ref3 = _i3.value;
                    }
                    var _builder2 = _ref3;
                    try {
                        (0, _util.extend)(headers, _builder2(), false);
                    } catch (err) {
                        console.error("Error in custom header builder:", err.stack || err.toString());
                    }
                }
                var events = buffer;
                var req = (0, _util.ajax)("post", _config.config.uri, headers, {
                    events: events,
                    meta: meta,
                    tracking: tracking
                }, async);
                exports.buffer = buffer = [];
                exports.tracking = tracking = {};
                return req;
            }
            var _flush = (0, _util.promiseDebounce)(immediateFlush, _config.config.debounceInterval);
            exports.flush = _flush;
            function enqueue(level, event, payload) {
                buffer.push({
                    level: level,
                    event: event,
                    payload: payload
                });
                if (_config.config.autoLog.indexOf(level) > -1) {
                    _flush();
                }
            }
            function log(level, event, payload) {
                if (_config.config.prefix) {
                    event = _config.config.prefix + "_" + event;
                }
                payload = payload || {};
                if (typeof payload === "string") {
                    payload = {
                        message: payload
                    };
                } else if (payload instanceof Error) {
                    payload = {
                        error: payload.stack || payload.toString()
                    };
                }
                payload.timestamp = Date.now();
                for (var _iterator4 = _builders.payloadBuilders, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                    var _ref4;
                    if (_isArray4) {
                        if (_i4 >= _iterator4.length) break;
                        _ref4 = _iterator4[_i4++];
                    } else {
                        _i4 = _iterator4.next();
                        if (_i4.done) break;
                        _ref4 = _i4.value;
                    }
                    var builder = _ref4;
                    try {
                        (0, _util.extend)(payload, builder(), false);
                    } catch (err) {
                        console.error("Error in custom payload builder:", err.stack || err.toString());
                    }
                }
                if (!_config.config.silent) {
                    print(level, event, payload);
                }
                if (buffer.length === _config.config.sizeLimit) {
                    enqueue("info", "logger_max_buffer_length");
                } else if (buffer.length < _config.config.sizeLimit) {
                    enqueue(level, event, payload);
                }
            }
            function prefix(name) {
                return {
                    debug: function debug(event, payload) {
                        return log("debug", name + "_" + event, payload);
                    },
                    info: function info(event, payload) {
                        return log("info", name + "_" + event, payload);
                    },
                    warn: function warn(event, payload) {
                        return log("warn", name + "_" + event, payload);
                    },
                    error: function error(event, payload) {
                        return log("error", name + "_" + event, payload);
                    },
                    flush: function flush() {
                        return _flush();
                    }
                };
            }
            function debug(event, payload) {
                return log("debug", event, payload);
            }
            function info(event, payload) {
                return log("info", event, payload);
            }
            function warn(event, payload) {
                return log("warn", event, payload);
            }
            function error(event, payload) {
                return log("error", event, payload);
            }
            function track(payload) {
                (0, _util.extend)(tracking, payload || {}, false);
            }
        },
        "./node_modules/beaver-logger/client/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.windowReady = undefined;
            exports.extend = extend;
            exports.isSameProtocol = isSameProtocol;
            exports.isSameDomain = isSameDomain;
            exports.ajax = ajax;
            exports.promiseDebounce = promiseDebounce;
            exports.safeInterval = safeInterval;
            exports.uniqueID = uniqueID;
            var _es6PromiseMin = __webpack_require__("./node_modules/es6-promise-min/dist/es6-promise.min.js");
            function extend(dest, src) {
                var over = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                dest = dest || {};
                src = src || {};
                for (var i in src) {
                    if (src.hasOwnProperty(i)) {
                        if (over || !dest.hasOwnProperty(i)) {
                            dest[i] = src[i];
                        }
                    }
                }
                return dest;
            }
            function isSameProtocol(url) {
                return window.location.protocol === url.split("/")[0];
            }
            function isSameDomain(url) {
                var match = url.match(/https?:\/\/[^\/]+/);
                if (!match) {
                    return true;
                }
                return match[0] === window.location.protocol + "//" + window.location.host;
            }
            function ajax(method, url) {
                var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                var async = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                return new _es6PromiseMin.Promise(function(resolve) {
                    var XRequest = window.XMLHttpRequest || window.ActiveXObject;
                    if (window.XDomainRequest && !isSameDomain(url)) {
                        if (!isSameProtocol(url)) {
                            return resolve();
                        }
                        XRequest = window.XDomainRequest;
                    }
                    var req = new XRequest("MSXML2.XMLHTTP.3.0");
                    req.open(method.toUpperCase(), url, async);
                    req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    req.setRequestHeader("Content-type", "application/json");
                    for (var headerName in headers) {
                        if (headers.hasOwnProperty(headerName)) {
                            req.setRequestHeader(headerName, headers[headerName]);
                        }
                    }
                    req.onreadystatechange = function() {
                        if (req.readyState > 3) {
                            resolve();
                        }
                    };
                    req.send(JSON.stringify(data).replace(/&/g, "%26"));
                });
            }
            function promiseDebounce(method, interval) {
                var debounce = {};
                return function() {
                    var args = arguments;
                    if (debounce.timeout) {
                        clearTimeout(debounce.timeout);
                        delete debounce.timeout;
                    }
                    debounce.timeout = setTimeout(function() {
                        var resolver = debounce.resolver;
                        var rejector = debounce.rejector;
                        delete debounce.promise;
                        delete debounce.resolver;
                        delete debounce.rejector;
                        delete debounce.timeout;
                        return _es6PromiseMin.Promise.resolve().then(function() {
                            return method.apply(null, args);
                        }).then(resolver, rejector);
                    }, interval);
                    debounce.promise = debounce.promise || new _es6PromiseMin.Promise(function(resolver, rejector) {
                        debounce.resolver = resolver;
                        debounce.rejector = rejector;
                    });
                    return debounce.promise;
                };
            }
            var windowReady = exports.windowReady = new _es6PromiseMin.Promise(function(resolve) {
                if (document.readyState === "complete") {
                    resolve();
                }
                window.addEventListener("load", resolve);
            });
            function safeInterval(method, time) {
                var timeout = void 0;
                function loop() {
                    timeout = setTimeout(function() {
                        method();
                        loop();
                    }, time);
                }
                loop();
                return {
                    cancel: function cancel() {
                        clearTimeout(timeout);
                    }
                };
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
        },
        "./node_modules/es6-promise-min/dist/es6-promise.min.js": function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function(process, global) {
                "use strict";
                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                /*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.0.1
	 */
                (function() {
                    function r(a, b) {
                        n[l] = a;
                        n[l + 1] = b;
                        l += 2;
                        2 === l && A();
                    }
                    function s(a) {
                        return "function" === typeof a;
                    }
                    function F() {
                        return function() {
                            process.nextTick(t);
                        };
                    }
                    function G() {
                        var a = 0, b = new B(t), c = document.createTextNode("");
                        b.observe(c, {
                            characterData: !0
                        });
                        return function() {
                            c.data = a = ++a % 2;
                        };
                    }
                    function H() {
                        var a = new MessageChannel();
                        a.port1.onmessage = t;
                        return function() {
                            a.port2.postMessage(0);
                        };
                    }
                    function I() {
                        return function() {
                            setTimeout(t, 1);
                        };
                    }
                    function t() {
                        for (var a = 0; a < l; a += 2) {
                            (0, n[a])(n[a + 1]), n[a] = void 0, n[a + 1] = void 0;
                        }
                        l = 0;
                    }
                    function p() {}
                    function J(a, b, c, d) {
                        try {
                            a.call(b, c, d);
                        } catch (e) {
                            return e;
                        }
                    }
                    function K(a, b, c) {
                        r(function(a) {
                            var e = !1, f = J(c, b, function(c) {
                                e || (e = !0, b !== c ? q(a, c) : m(a, c));
                            }, function(b) {
                                e || (e = !0, g(a, b));
                            });
                            !e && f && (e = !0, g(a, f));
                        }, a);
                    }
                    function L(a, b) {
                        1 === b.a ? m(a, b.b) : 2 === a.a ? g(a, b.b) : u(b, void 0, function(b) {
                            q(a, b);
                        }, function(b) {
                            g(a, b);
                        });
                    }
                    function q(a, b) {
                        if (a === b) g(a, new TypeError("You cannot resolve a promise with itself")); else if ("function" === typeof b || "object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
                            if (b.constructor === a.constructor) L(a, b); else {
                                var c;
                                try {
                                    c = b.then;
                                } catch (d) {
                                    v.error = d, c = v;
                                }
                                c === v ? g(a, v.error) : void 0 === c ? m(a, b) : s(c) ? K(a, b, c) : m(a, b);
                            }
                        } else m(a, b);
                    }
                    function M(a) {
                        a.f && a.f(a.b);
                        x(a);
                    }
                    function m(a, b) {
                        void 0 === a.a && (a.b = b, a.a = 1, 0 !== a.e.length && r(x, a));
                    }
                    function g(a, b) {
                        void 0 === a.a && (a.a = 2, a.b = b, r(M, a));
                    }
                    function u(a, b, c, d) {
                        var e = a.e, f = e.length;
                        a.f = null;
                        e[f] = b;
                        e[f + 1] = c;
                        e[f + 2] = d;
                        0 === f && a.a && r(x, a);
                    }
                    function x(a) {
                        var b = a.e, c = a.a;
                        if (0 !== b.length) {
                            for (var d, e, f = a.b, g = 0; g < b.length; g += 3) {
                                d = b[g], e = b[g + c], d ? C(c, d, e, f) : e(f);
                            }
                            a.e.length = 0;
                        }
                    }
                    function D() {
                        this.error = null;
                    }
                    function C(a, b, c, d) {
                        var e = s(c), f, k, h, l;
                        if (e) {
                            try {
                                f = c(d);
                            } catch (n) {
                                y.error = n, f = y;
                            }
                            f === y ? (l = !0, k = f.error, f = null) : h = !0;
                            if (b === f) {
                                g(b, new TypeError("A promises callback cannot return that same promise."));
                                return;
                            }
                        } else f = d, h = !0;
                        void 0 === b.a && (e && h ? q(b, f) : l ? g(b, k) : 1 === a ? m(b, f) : 2 === a && g(b, f));
                    }
                    function N(a, b) {
                        try {
                            b(function(b) {
                                q(a, b);
                            }, function(b) {
                                g(a, b);
                            });
                        } catch (c) {
                            g(a, c);
                        }
                    }
                    function k(a, b, c, d) {
                        this.n = a;
                        this.c = new a(p, d);
                        this.i = c;
                        this.o(b) ? (this.m = b, this.d = this.length = b.length, this.l(), 0 === this.length ? m(this.c, this.b) : (this.length = this.length || 0, 
                        this.k(), 0 === this.d && m(this.c, this.b))) : g(this.c, this.p());
                    }
                    function h(a) {
                        O++;
                        this.b = this.a = void 0;
                        this.e = [];
                        if (p !== a) {
                            if (!s(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                            if (!(this instanceof h)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                            N(this, a);
                        }
                    }
                    var E = Array.isArray ? Array.isArray : function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a);
                    }, l = 0, w = "undefined" !== typeof window ? window : {}, B = w.MutationObserver || w.WebKitMutationObserver, w = "undefined" !== typeof Uint8ClampedArray && "undefined" !== typeof importScripts && "undefined" !== typeof MessageChannel, n = Array(1e3), A;
                    A = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) ? F() : B ? G() : w ? H() : I();
                    var v = new D(), y = new D();
                    k.prototype.o = function(a) {
                        return E(a);
                    };
                    k.prototype.p = function() {
                        return Error("Array Methods must be provided an Array");
                    };
                    k.prototype.l = function() {
                        this.b = Array(this.length);
                    };
                    k.prototype.k = function() {
                        for (var a = this.length, b = this.c, c = this.m, d = 0; void 0 === b.a && d < a; d++) {
                            this.j(c[d], d);
                        }
                    };
                    k.prototype.j = function(a, b) {
                        var c = this.n;
                        "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a ? a.constructor === c && void 0 !== a.a ? (a.f = null, 
                        this.g(a.a, b, a.b)) : this.q(c.resolve(a), b) : (this.d--, this.b[b] = this.h(a));
                    };
                    k.prototype.g = function(a, b, c) {
                        var d = this.c;
                        void 0 === d.a && (this.d--, this.i && 2 === a ? g(d, c) : this.b[b] = this.h(c));
                        0 === this.d && m(d, this.b);
                    };
                    k.prototype.h = function(a) {
                        return a;
                    };
                    k.prototype.q = function(a, b) {
                        var c = this;
                        u(a, void 0, function(a) {
                            c.g(1, b, a);
                        }, function(a) {
                            c.g(2, b, a);
                        });
                    };
                    var O = 0;
                    h.all = function(a, b) {
                        return new k(this, a, !0, b).c;
                    };
                    h.race = function(a, b) {
                        function c(a) {
                            q(e, a);
                        }
                        function d(a) {
                            g(e, a);
                        }
                        var e = new this(p, b);
                        if (!E(a)) return g(e, new TypeError("You must pass an array to race.")), e;
                        for (var f = a.length, h = 0; void 0 === e.a && h < f; h++) {
                            u(this.resolve(a[h]), void 0, c, d);
                        }
                        return e;
                    };
                    h.resolve = function(a, b) {
                        if (a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && a.constructor === this) return a;
                        var c = new this(p, b);
                        q(c, a);
                        return c;
                    };
                    h.reject = function(a, b) {
                        var c = new this(p, b);
                        g(c, a);
                        return c;
                    };
                    h.prototype = {
                        constructor: h,
                        then: function then(a, b) {
                            var c = this.a;
                            if (1 === c && !a || 2 === c && !b) return this;
                            var d = new this.constructor(p), e = this.b;
                            if (c) {
                                var f = arguments[c - 1];
                                r(function() {
                                    C(c, d, f, e);
                                });
                            } else u(this, d, a, b);
                            return d;
                        },
                        catch: function _catch(a) {
                            return this.then(null, a);
                        }
                    };
                    var z = {
                        Promise: h,
                        polyfill: function polyfill() {
                            var a;
                            a = "undefined" !== typeof global ? global : "undefined" !== typeof window && window.document ? window : self;
                            "Promise" in a && "resolve" in a.Promise && "reject" in a.Promise && "all" in a.Promise && "race" in a.Promise && function() {
                                var b;
                                new a.Promise(function(a) {
                                    b = a;
                                });
                                return s(b);
                            }() || (a.Promise = h);
                        }
                    };
                    true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return z;
                    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" !== typeof module && module.exports ? module.exports = z : "undefined" !== typeof this && (this.ES6Promise = z);
                }).call(undefined);
            }).call(exports, __webpack_require__("./node_modules/process/browser.js"), function() {
                return this;
            }());
        },
        "./node_modules/process/browser.js": function(module, exports) {
            "use strict";
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        },
        "./node_modules/beaver-logger/client/builders.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.addPayloadBuilder = addPayloadBuilder;
            exports.addMetaBuilder = addMetaBuilder;
            exports.addTrackingBuilder = addTrackingBuilder;
            exports.addHeaderBuilder = addHeaderBuilder;
            var payloadBuilders = exports.payloadBuilders = [];
            var metaBuilders = exports.metaBuilders = [];
            var trackingBuilders = exports.trackingBuilders = [];
            var headerBuilders = exports.headerBuilders = [];
            function addPayloadBuilder(builder) {
                payloadBuilders.push(builder);
            }
            function addMetaBuilder(builder) {
                metaBuilders.push(builder);
            }
            function addTrackingBuilder(builder) {
                trackingBuilders.push(builder);
            }
            function addHeaderBuilder(builder) {
                headerBuilders.push(builder);
            }
        },
        "./node_modules/beaver-logger/client/config.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var config = exports.config = {
                uri: "",
                prefix: "",
                initial_state_name: "init",
                flushInterval: 10 * 60 * 1e3,
                debounceInterval: 10,
                sizeLimit: 300,
                silent: false,
                heartbeat: true,
                heartbeatConsoleLog: true,
                heartbeatInterval: 5e3,
                heartbeatTooBusy: false,
                heartbeatTooBusyThreshold: 1e4,
                logLevel: "debug",
                autoLog: [ "warn", "error" ],
                logUnload: true,
                logUnloadSync: false,
                logPerformance: true
            };
            var logLevels = exports.logLevels = [ "error", "warn", "info", "debug" ];
        },
        "./node_modules/beaver-logger/client/init.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.init = init;
            var _config = __webpack_require__("./node_modules/beaver-logger/client/config.js");
            var _util = __webpack_require__("./node_modules/beaver-logger/client/util.js");
            var _performance = __webpack_require__("./node_modules/beaver-logger/client/performance.js");
            var _logger = __webpack_require__("./node_modules/beaver-logger/client/logger.js");
            var initiated = false;
            function init(conf) {
                (0, _util.extend)(_config.config, conf || {});
                if (initiated) {
                    return;
                }
                initiated = true;
                if (_config.config.logPerformance) {
                    (0, _performance.initPerformance)();
                }
                if (_config.config.heartbeat) {
                    (0, _performance.initHeartBeat)();
                }
                if (_config.config.logUnload) {
                    var async = !_config.config.logUnloadSync;
                    window.addEventListener("beforeunload", function() {
                        (0, _logger.info)("window_beforeunload");
                        (0, _logger.immediateFlush)(async);
                    });
                    window.addEventListener("unload", function() {
                        (0, _logger.info)("window_unload");
                        (0, _logger.immediateFlush)(async);
                    });
                }
                if (_config.config.flushInterval) {
                    setInterval(_logger.flush, _config.config.flushInterval);
                }
                if (window.beaverLogQueue) {
                    window.beaverLogQueue.forEach(function(payload) {
                        (0, _logger.log)(payload.level, payload.event, payload);
                    });
                    delete window.beaverLogQueue;
                }
            }
        },
        "./node_modules/beaver-logger/client/performance.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.reqTimer = exports.clientTimer = undefined;
            exports.now = now;
            exports.reqStartElapsed = reqStartElapsed;
            exports.initHeartBeat = initHeartBeat;
            exports.initPerformance = initPerformance;
            var _config = __webpack_require__("./node_modules/beaver-logger/client/config.js");
            var _logger = __webpack_require__("./node_modules/beaver-logger/client/logger.js");
            var _builders = __webpack_require__("./node_modules/beaver-logger/client/builders.js");
            var _util = __webpack_require__("./node_modules/beaver-logger/client/util.js");
            var enablePerformance = window && window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0;
            function now() {
                if (enablePerformance) {
                    return performance.now();
                } else {
                    return Date.now();
                }
            }
            function timer(startTime) {
                startTime = startTime !== undefined ? startTime : now();
                return {
                    startTime: startTime,
                    elapsed: function elapsed() {
                        return parseInt(now() - startTime, 10);
                    },
                    reset: function reset() {
                        startTime = now();
                    }
                };
            }
            function reqStartElapsed() {
                if (enablePerformance) {
                    var timing = window.performance.timing;
                    return parseInt(timing.connectEnd - timing.navigationStart, 10);
                }
            }
            var clientTimer = exports.clientTimer = timer();
            var reqTimer = exports.reqTimer = timer(reqStartElapsed());
            function initHeartBeat() {
                var heartBeatTimer = timer();
                var heartbeatCount = 0;
                (0, _util.safeInterval)(function() {
                    if (_config.config.heartbeatMaxThreshold && heartbeatCount > _config.config.heartbeatMaxThreshold) {
                        return;
                    }
                    heartbeatCount += 1;
                    var elapsed = heartBeatTimer.elapsed();
                    var lag = elapsed - _config.config.heartbeatInterval;
                    var heartbeatPayload = {
                        count: heartbeatCount,
                        elapsed: elapsed
                    };
                    if (_config.config.heartbeatTooBusy) {
                        heartbeatPayload.lag = lag;
                        if (lag >= _config.config.heartbeatTooBusyThreshold) {
                            (0, _logger.info)("toobusy", heartbeatPayload, {
                                noConsole: !_config.config.heartbeatConsoleLog
                            });
                        }
                    }
                    (0, _logger.info)("heartbeat", heartbeatPayload, {
                        noConsole: !_config.config.heartbeatConsoleLog
                    });
                }, _config.config.heartbeatInterval);
            }
            function initPerformance() {
                if (!enablePerformance) {
                    return (0, _logger.info)("no_performance_data");
                }
                (0, _builders.addPayloadBuilder)(function() {
                    var payload = {};
                    payload.client_elapsed = clientTimer.elapsed();
                    if (enablePerformance) {
                        payload.req_elapsed = reqTimer.elapsed();
                    }
                    return payload;
                });
                _util.windowReady.then(function() {
                    var keys = [ "connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart" ];
                    var timing = {};
                    keys.forEach(function(key) {
                        timing[key] = parseInt(window.performance.timing[key], 10) || 0;
                    });
                    var offset = timing.connectEnd - timing.navigationStart;
                    if (timing.connectEnd) {
                        Object.keys(timing).forEach(function(name) {
                            var time = timing[name];
                            if (time) {
                                (0, _logger.info)("timing_" + name, {
                                    client_elapsed: parseInt(time - timing.connectEnd - (clientTimer.startTime - offset), 10),
                                    req_elapsed: parseInt(time - timing.connectEnd, 10)
                                });
                            }
                        });
                    }
                    (0, _logger.info)("timing", timing);
                    (0, _logger.info)("memory", window.performance.memory);
                    (0, _logger.info)("navigation", window.performance.navigation);
                    if (window.performance.getEntries) {
                        window.performance.getEntries().forEach(function(resource) {
                            if ([ "link", "script", "img", "css" ].indexOf(resource.initiatorType) > -1) {
                                (0, _logger.info)(resource.initiatorType, resource);
                            }
                        });
                    }
                });
            }
        },
        "./node_modules/beaver-logger/client/transitions.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.startTransition = startTransition;
            exports.endTransition = endTransition;
            exports.transition = transition;
            var _performance = __webpack_require__("./node_modules/beaver-logger/client/performance.js");
            var _logger = __webpack_require__("./node_modules/beaver-logger/client/logger.js");
            var _builders = __webpack_require__("./node_modules/beaver-logger/client/builders.js");
            var _util = __webpack_require__("./node_modules/beaver-logger/client/util.js");
            var _config = __webpack_require__("./node_modules/beaver-logger/client/config.js");
            var windowID = (0, _util.uniqueID)();
            var pageID = (0, _util.uniqueID)();
            var currentState = _config.config.initial_state_name;
            var startTime = void 0;
            function startTransition() {
                startTime = (0, _performance.now)();
            }
            function endTransition(toState) {
                startTime = startTime || (0, _performance.reqStartElapsed)();
                var currentTime = (0, _performance.now)();
                var elapsedTime = void 0;
                if (startTime !== undefined) {
                    elapsedTime = parseInt(currentTime - startTime, 0);
                }
                var transitionName = "transition_" + currentState + "_to_" + toState;
                (0, _logger.info)(transitionName, {
                    duration: elapsedTime
                });
                (0, _logger.track)({
                    transition: transitionName,
                    transition_time: elapsedTime
                });
                (0, _logger.immediateFlush)();
                startTime = currentTime;
                currentState = toState;
                pageID = (0, _util.uniqueID)();
            }
            function transition(toState) {
                startTransition();
                endTransition(toState);
            }
            (0, _builders.addPayloadBuilder)(function() {
                return {
                    windowID: windowID,
                    pageID: pageID
                };
            });
            (0, _builders.addMetaBuilder)(function() {
                return {
                    state: "ui_" + currentState
                };
            });
        },
        "./node_modules/xcomponent/src/component/base.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.BaseComponent = undefined;
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function cleanup(obj) {
                var tasks = [];
                return {
                    set: function set(name, item) {
                        obj[name] = item;
                        this.register(function() {
                            delete obj[name];
                        });
                        return item;
                    },
                    register: function register(name, method) {
                        if (!method) {
                            method = name;
                            name = undefined;
                        }
                        tasks.push({
                            complete: false,
                            name: name,
                            run: function run() {
                                if (this.complete) {
                                    return;
                                }
                                this.complete = true;
                                return method();
                            }
                        });
                    },
                    hasTasks: function hasTasks() {
                        return Boolean(tasks.filter(function(item) {
                            return !item.complete;
                        }).length);
                    },
                    all: function all() {
                        var results = [];
                        while (tasks.length) {
                            results.push(tasks.pop().run());
                        }
                        return _promise.SyncPromise.all(results).then(function() {
                            return;
                        });
                    },
                    run: function run(name) {
                        var results = [];
                        for (var _iterator = tasks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var item = _ref;
                            if (item.name === name) {
                                results.push(item.run());
                            }
                        }
                        return _promise.SyncPromise.all(results).then(function() {
                            return;
                        });
                    }
                };
            }
            var BaseComponent = exports.BaseComponent = function() {
                function BaseComponent() {
                    _classCallCheck(this, BaseComponent);
                    this.clean = cleanup(this);
                }
                _createClass(BaseComponent, [ {
                    key: "addProp",
                    value: function addProp(options, name, def) {
                        (0, _lib.copyProp)(options, this, name, def);
                    }
                }, {
                    key: "tryCatch",
                    value: function tryCatch(method, doOnce) {
                        var self = this;
                        var errored = false;
                        var wrapper = function wrapper() {
                            if (errored) {
                                return;
                            }
                            try {
                                return method.apply(this, arguments);
                            } catch (err) {
                                errored = true;
                                return self.error(err);
                            }
                        };
                        if (doOnce !== false) {
                            wrapper = (0, _lib.once)(wrapper);
                        }
                        return wrapper;
                    }
                }, {
                    key: "listen",
                    value: function listen(win, domain) {
                        var _this = this;
                        if (!win) {
                            throw new Error("[" + this.component.tag + "] window to listen to not set");
                        }
                        if (!domain) {
                            throw new Error("Must pass domain to listen to");
                        }
                        if (!this.listeners) {
                            return;
                        }
                        var listeners = this.listeners();
                        var _loop = function _loop() {
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) return "break";
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) return "break";
                                _ref2 = _i2.value;
                            }
                            var listenerName = _ref2;
                            var name = listenerName.replace(/^xcomponent_/, "");
                            var listener = _src2["default"].on(listenerName, {
                                window: win,
                                domain: domain,
                                errorHandler: function errorHandler(err) {
                                    return _this.error(err);
                                }
                            }, function(_ref3) {
                                var source = _ref3.source, data = _ref3.data;
                                _this.component.log("listener_" + name);
                                return listeners[listenerName].call(_this, source, data);
                            });
                            var errorListener = _src2["default"].on(listenerName, {
                                window: win,
                                errorHandler: function errorHandler(err) {
                                    return _this.error(err);
                                }
                            }, function(_ref4) {
                                var origin = _ref4.origin, data = _ref4.data;
                                _this.component.logError("unexpected_listener_" + name, {
                                    origin: origin,
                                    domain: domain
                                });
                                _this.error(new Error("Unexpected " + name + " message from domain " + origin + " -- expected message from " + domain));
                            });
                            _this.clean.register(function() {
                                listener.cancel();
                                errorListener.cancel();
                            });
                        };
                        for (var _iterator2 = Object.keys(listeners), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            var _ret = _loop();
                            if (_ret === "break") break;
                        }
                    }
                } ]);
                return BaseComponent;
            }();
        },
        "./node_modules/xcomponent/src/lib/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _dom = __webpack_require__("./node_modules/xcomponent/src/lib/dom.js");
            Object.keys(_dom).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _dom[key];
                    }
                });
            });
            var _fn = __webpack_require__("./node_modules/xcomponent/src/lib/fn.js");
            Object.keys(_fn).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _fn[key];
                    }
                });
            });
            var _promise = __webpack_require__("./node_modules/xcomponent/src/lib/promise.js");
            Object.keys(_promise).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _promise[key];
                    }
                });
            });
            var _util = __webpack_require__("./node_modules/xcomponent/src/lib/util.js");
            Object.keys(_util).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _util[key];
                    }
                });
            });
            var _css = __webpack_require__("./node_modules/xcomponent/src/lib/css.js");
            Object.keys(_css).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _css[key];
                    }
                });
            });
        },
        "./node_modules/xcomponent/src/lib/dom.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.parseQuery = exports.documentReady = undefined;
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.getElement = getElement;
            exports.elementReady = elementReady;
            exports.popup = popup;
            exports.iframe = iframe;
            exports.onCloseWindow = onCloseWindow;
            exports.addEventListener = addEventListener;
            exports.scanForJavascript = scanForJavascript;
            exports.createElement = createElement;
            exports.addEventToClass = addEventToClass;
            exports.template = template;
            exports.getQueryParam = getQueryParam;
            exports.getDomain = getDomain;
            exports.getDomainFromUrl = getDomainFromUrl;
            exports.formatQuery = formatQuery;
            exports.extendQuery = extendQuery;
            exports.extendUrl = extendUrl;
            exports.elementStoppedMoving = elementStoppedMoving;
            exports.getOpener = getOpener;
            exports.getParent = getParent;
            exports.getCurrentDimensions = getCurrentDimensions;
            exports.changeStyle = changeStyle;
            exports.setOverflow = setOverflow;
            exports.trackDimensions = trackDimensions;
            exports.onDimensionsChange = onDimensionsChange;
            exports.dimensionsMatchViewport = dimensionsMatchViewport;
            exports.bindEvents = bindEvents;
            exports.setVendorCSS = setVendorCSS;
            exports.animate = animate;
            exports.showElement = showElement;
            exports.hideElement = hideElement;
            exports.showAndAnimate = showAndAnimate;
            exports.animateAndHide = animateAndHide;
            exports.addClass = addClass;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _fn = __webpack_require__("./node_modules/xcomponent/src/lib/fn.js");
            var _util = __webpack_require__("./node_modules/xcomponent/src/lib/util.js");
            var _error = __webpack_require__("./node_modules/xcomponent/src/error.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function isElement(element) {
                if (element instanceof window.Element) {
                    return true;
                }
                if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === "object" && element.nodeType === 1 && _typeof(element.style) === "object" && _typeof(element.ownerDocument) === "object") {
                    return true;
                }
                return false;
            }
            function getElement(id) {
                if (isElement(id)) {
                    return id;
                }
                if (typeof id === "string") {
                    var element = document.getElementById(id);
                    if (element) {
                        return element;
                    }
                    if (document.querySelector) {
                        return document.querySelector(id);
                    }
                }
            }
            var documentReady = exports.documentReady = new _promise.SyncPromise(function(resolve) {
                if (window.document.readyState === "complete") {
                    return resolve(window.document);
                }
                var interval = setInterval(function() {
                    if (window.document.readyState === "complete") {
                        clearInterval(interval);
                        return resolve(window.document);
                    }
                }, 10);
            });
            function elementReady(id) {
                return new _promise.SyncPromise(function(resolve, reject) {
                    var el = getElement(id);
                    if (el) {
                        return resolve(el);
                    }
                    if (window.document.readyState === "complete") {
                        return reject(new Error("Document is ready and element " + id + " does not exist"));
                    }
                    var interval = setInterval(function() {
                        el = getElement(id);
                        if (el) {
                            clearInterval(interval);
                            return resolve(el);
                        }
                        if (window.document.readyState === "complete") {
                            clearInterval(interval);
                            return reject(new Error("Document is ready and element " + id + " does not exist"));
                        }
                    }, 10);
                });
            }
            function popup(url, options) {
                var params = Object.keys(options).map(function(key) {
                    if (options[key]) {
                        return key + "=" + options[key];
                    }
                }).filter(Boolean).join(",");
                var win = window.open(url, options.name, params, true);
                if (_src2["default"].winutil.isWindowClosed(win)) {
                    var err = new _error.PopupOpenError("Can not open popup window - blocked");
                    throw err;
                }
                return win;
            }
            function iframe(url, options, container) {
                container = getElement(container);
                var frame = document.createElement("iframe");
                for (var _iterator = Object.keys(options), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var key = _ref;
                    frame[key] = options[key];
                }
                frame.frameBorder = "0";
                frame.allowTransparency = "true";
                if (container) {
                    container.appendChild(frame);
                }
                return frame;
            }
            function onCloseWindow(win, callback) {
                callback = (0, _fn.once)(callback);
                var interval = void 0;
                var checkWindowClosed = function checkWindowClosed() {
                    if (_src2["default"].winutil.isWindowClosed(win, false)) {
                        clearInterval(interval);
                        return callback();
                    }
                };
                interval = (0, _util.safeInterval)(checkWindowClosed, 50);
                checkWindowClosed();
                return {
                    cancel: function cancel() {
                        interval.cancel();
                        callback = _fn.noop;
                    }
                };
            }
            function addEventListener(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function cancel() {
                        obj.removeEventListener(event, handler);
                    }
                };
            }
            function scanForJavascript(str) {
                if (!str) {
                    return str;
                }
                if (str.match(/<script|on\w+\s*=|javascript:|expression\s*\(|eval\(|new\s*Function/)) {
                    throw new Error("HTML contains potential javascript: " + str);
                }
                return str;
            }
            function createElement() {
                var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                var element = document.createElement(tag);
                if (options.style) {
                    (0, _util.extend)(element.style, options.style);
                }
                if (options.html) {
                    element.innerHTML = options.html;
                }
                if (options["class"]) {
                    element.className = options["class"].join(" ");
                }
                if (options.attributes) {
                    for (var _iterator2 = Object.keys(options.attributes), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref2;
                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref2 = _i2.value;
                        }
                        var key = _ref2;
                        element.setAttribute(key, options.attributes[key]);
                    }
                }
                if (options.styleSheet) {
                    if (element.styleSheet) {
                        element.styleSheet.cssText = options.styleSheet;
                    } else {
                        element.appendChild(document.createTextNode(options.styleSheet));
                    }
                }
                return element;
            }
            function addEventToClass(element, className, eventName, handler) {
                var handlers = [];
                for (var _iterator3 = Array.prototype.slice.call(element.getElementsByClassName(className)), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                    var _ref3;
                    if (_isArray3) {
                        if (_i3 >= _iterator3.length) break;
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) break;
                        _ref3 = _i3.value;
                    }
                    var el = _ref3;
                    var eventHandler = function eventHandler(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        handler();
                    };
                    handlers.push({
                        el: el,
                        eventHandler: eventHandler
                    });
                    el.addEventListener(eventName, eventHandler);
                }
                return {
                    cancel: function cancel() {
                        for (var _iterator4 = handlers, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                            var _ref5;
                            if (_isArray4) {
                                if (_i4 >= _iterator4.length) break;
                                _ref5 = _iterator4[_i4++];
                            } else {
                                _i4 = _iterator4.next();
                                if (_i4.done) break;
                                _ref5 = _i4.value;
                            }
                            var _ref6 = _ref5;
                            var el = _ref6.el, eventHandler = _ref6.eventHandler;
                            el.removeEventListener(eventName, eventHandler);
                        }
                    }
                };
            }
            function template(html, context) {
                return _promise.SyncPromise["try"](function() {
                    if (typeof html === "function") {
                        return html(context || {});
                    }
                    return html.replace(/\{([\w_\.]+)\}/g, function(variable) {
                        return (0, _util.get)(context, variable.slice(1, variable.length - 1), "");
                    });
                }).then(function(result) {
                    if (typeof result !== "string") {
                        throw new Error("Expected template to return string, got " + (typeof result === "undefined" ? "undefined" : _typeof(result)));
                    }
                    return result;
                });
            }
            var parseQuery = exports.parseQuery = (0, _fn.memoize)(function(queryString) {
                var params = {};
                if (!queryString) {
                    return params;
                }
                if (queryString.indexOf("=") === -1) {
                    throw new Error("Can not parse query string params: " + queryString);
                }
                for (var _iterator5 = queryString.split("&"), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                    var _ref7;
                    if (_isArray5) {
                        if (_i5 >= _iterator5.length) break;
                        _ref7 = _iterator5[_i5++];
                    } else {
                        _i5 = _iterator5.next();
                        if (_i5.done) break;
                        _ref7 = _i5.value;
                    }
                    var pair = _ref7;
                    pair = pair.split("=");
                    if (pair[0] && pair[1]) {
                        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                    }
                }
                return params;
            });
            function getQueryParam(name) {
                return parseQuery(window.location.search.slice(1))[name];
            }
            function getDomain(win) {
                win = win || window;
                if (win.mockDomain && win.mockDomain.indexOf("mock://") === 0) {
                    return win.mockDomain;
                }
                return win.location.protocol + "//" + win.location.host;
            }
            function getDomainFromUrl(url) {
                var domain = void 0;
                if (url.match(/^(https?|mock|file):\/\//)) {
                    domain = url;
                } else {
                    return getDomain(window);
                }
                domain = domain.split("/").slice(0, 3).join("/");
                return domain;
            }
            function formatQuery() {
                var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return Object.keys(obj).map(function(key) {
                    return (0, _util.urlEncode)(key) + "=" + (0, _util.urlEncode)(obj[key]);
                }).join("&");
            }
            function extendQuery(originalQuery) {
                var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (!props || !Object.keys(props).length) {
                    return originalQuery;
                }
                return formatQuery(_extends({}, parseQuery(originalQuery), props));
            }
            function extendUrl(url) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var query = options.query || {};
                var hash = options.hash || {};
                var originalUrl = void 0;
                var originalQuery = void 0;
                var originalHash = void 0;
                var _url$split = url.split("#");
                var _url$split2 = _slicedToArray(_url$split, 2);
                originalUrl = _url$split2[0];
                originalHash = _url$split2[1];
                var _originalUrl$split = originalUrl.split("?");
                var _originalUrl$split2 = _slicedToArray(_originalUrl$split, 2);
                originalUrl = _originalUrl$split2[0];
                originalQuery = _originalUrl$split2[1];
                var queryString = extendQuery(originalQuery, query);
                var hashString = extendQuery(originalHash, hash);
                if (queryString) {
                    originalUrl = originalUrl + "?" + queryString;
                }
                if (hashString) {
                    originalUrl = originalUrl + "#" + hashString;
                }
                return originalUrl;
            }
            function elementStoppedMoving(element) {
                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5e3;
                return new _promise.SyncPromise(function(resolve, reject) {
                    element = getElement(element);
                    var start = element.getBoundingClientRect();
                    var interval = void 0;
                    var timer = void 0;
                    interval = setInterval(function() {
                        var end = element.getBoundingClientRect();
                        if (start.top === end.top && start.bottom === end.bottom && start.left === end.left && start.right === end.right && start.width === end.width && start.height === end.height) {
                            clearTimeout(timer);
                            clearInterval(interval);
                            return resolve();
                        }
                        start = end;
                    }, 50);
                    timer = setTimeout(function() {
                        clearInterval(interval);
                        reject(new Error("Timed out waiting for element to stop animating after " + timeout + "ms"));
                    }, timeout);
                });
            }
            function getOpener(win) {
                if (!win) {
                    return;
                }
                try {
                    return win.opener;
                } catch (err) {
                    return;
                }
            }
            function getParent(win) {
                if (!win) {
                    return;
                }
                try {
                    if (win.parent && win.parent !== win) {
                        return win.parent;
                    }
                } catch (err) {
                    return;
                }
            }
            function getCurrentDimensions(el) {
                return {
                    width: el.offsetWidth,
                    height: el.offsetHeight
                };
            }
            function changeStyle(el, styles) {
                return new _promise.SyncPromise(function(resolve) {
                    for (var _iterator6 = Object.keys(styles), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
                        var _ref8;
                        if (_isArray6) {
                            if (_i6 >= _iterator6.length) break;
                            _ref8 = _iterator6[_i6++];
                        } else {
                            _i6 = _iterator6.next();
                            if (_i6.done) break;
                            _ref8 = _i6.value;
                        }
                        var key = _ref8;
                        el.style[key] = styles[key];
                    }
                    setTimeout(resolve, 1);
                });
            }
            function setOverflow(el) {
                var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "auto";
                var _el$style = el.style, overflow = _el$style.overflow, overflowX = _el$style.overflowX, overflowY = _el$style.overflowY;
                el.style.overflow = el.style.overflowX = el.overflowY = value;
                return {
                    reset: function reset() {
                        el.style.overflow = overflow;
                        el.style.overflowX = overflowX;
                        el.style.overflowY = overflowY;
                    }
                };
            }
            function dimensionsDiff(one, two, _ref9) {
                var _ref9$width = _ref9.width, width = _ref9$width === undefined ? true : _ref9$width, _ref9$height = _ref9.height, height = _ref9$height === undefined ? true : _ref9$height, _ref9$threshold = _ref9.threshold, threshold = _ref9$threshold === undefined ? 0 : _ref9$threshold;
                if (width && Math.abs(one.width - two.width) > threshold) {
                    return true;
                }
                if (height && Math.abs(one.height - two.height) > threshold) {
                    return true;
                }
                return false;
            }
            function trackDimensions(el, _ref10) {
                var _ref10$width = _ref10.width, width = _ref10$width === undefined ? true : _ref10$width, _ref10$height = _ref10.height, height = _ref10$height === undefined ? true : _ref10$height, _ref10$threshold = _ref10.threshold, threshold = _ref10$threshold === undefined ? 0 : _ref10$threshold;
                var currentDimensions = getCurrentDimensions(el);
                return {
                    check: function check() {
                        var newDimensions = getCurrentDimensions(el);
                        return {
                            changed: dimensionsDiff(currentDimensions, newDimensions, {
                                width: width,
                                height: height,
                                threshold: threshold
                            }),
                            dimensions: newDimensions
                        };
                    },
                    reset: function reset() {
                        currentDimensions = getCurrentDimensions(el);
                    }
                };
            }
            function onDimensionsChange(el, _ref11) {
                var _ref11$width = _ref11.width, width = _ref11$width === undefined ? true : _ref11$width, _ref11$height = _ref11.height, height = _ref11$height === undefined ? true : _ref11$height, _ref11$delay = _ref11.delay, delay = _ref11$delay === undefined ? 50 : _ref11$delay, _ref11$threshold = _ref11.threshold, threshold = _ref11$threshold === undefined ? 0 : _ref11$threshold;
                return new _promise.SyncPromise(function(resolve) {
                    var tracker = trackDimensions(el, {
                        width: width,
                        height: height,
                        threshold: threshold
                    });
                    var interval = void 0;
                    var resolver = (0, _fn.debounce)(function(dimensions) {
                        clearInterval(interval);
                        return resolve(dimensions);
                    }, delay * 4);
                    interval = setInterval(function() {
                        var _tracker$check = tracker.check(), changed = _tracker$check.changed, dimensions = _tracker$check.dimensions;
                        if (changed) {
                            tracker.reset();
                            return resolver(dimensions);
                        }
                    }, delay);
                });
            }
            function dimensionsMatchViewport(el, _ref12) {
                var width = _ref12.width, height = _ref12.height;
                var dimensions = getCurrentDimensions(el);
                if (width && dimensions.width !== window.innerWidth) {
                    return false;
                }
                if (height && dimensions.height !== window.innerHeight) {
                    return false;
                }
                return true;
            }
            function bindEvents(element, eventNames, handler) {
                handler = (0, _fn.once)(handler);
                for (var _iterator7 = eventNames, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
                    var _ref13;
                    if (_isArray7) {
                        if (_i7 >= _iterator7.length) break;
                        _ref13 = _iterator7[_i7++];
                    } else {
                        _i7 = _iterator7.next();
                        if (_i7.done) break;
                        _ref13 = _i7.value;
                    }
                    var eventName = _ref13;
                    element.addEventListener(eventName, handler);
                }
                return {
                    cancel: (0, _fn.once)(function() {
                        for (var _iterator8 = eventNames, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
                            var _ref14;
                            if (_isArray8) {
                                if (_i8 >= _iterator8.length) break;
                                _ref14 = _iterator8[_i8++];
                            } else {
                                _i8 = _iterator8.next();
                                if (_i8.done) break;
                                _ref14 = _i8.value;
                            }
                            var eventName = _ref14;
                            element.removeEventListener(eventName, handler);
                        }
                    })
                };
            }
            var VENDOR_PREFIXES = [ "webkit", "moz", "ms", "o" ];
            function setVendorCSS(element, name, value) {
                element.style[name] = value;
                var capitalizedName = (0, _util.capitalizeFirstLetter)(name);
                for (var _iterator9 = VENDOR_PREFIXES, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
                    var _ref15;
                    if (_isArray9) {
                        if (_i9 >= _iterator9.length) break;
                        _ref15 = _iterator9[_i9++];
                    } else {
                        _i9 = _iterator9.next();
                        if (_i9.done) break;
                        _ref15 = _i9.value;
                    }
                    var prefix = _ref15;
                    element.style["" + prefix + capitalizedName] = value;
                }
            }
            var CSSRule = window.CSSRule;
            var KEYFRAMES_RULE = CSSRule.KEYFRAMES_RULE || CSSRule.WEBKIT_KEYFRAMES_RULE || CSSRule.MOZ_KEYFRAMES_RULE || CSSRule.O_KEYFRAMES_RULE || CSSRule.MS_KEYFRAMES_RULE;
            function isValidAnimation(element, name) {
                var stylesheets = element.ownerDocument.styleSheets;
                try {
                    for (var i = 0; i < stylesheets.length; i++) {
                        var cssRules = stylesheets[i].cssRules;
                        if (!cssRules) {
                            continue;
                        }
                        for (var j = 0; j < cssRules.length; j++) {
                            var cssRule = cssRules[j];
                            if (!cssRule) {
                                continue;
                            }
                            if (cssRule.type === KEYFRAMES_RULE && cssRule.name === name) {
                                return true;
                            }
                        }
                    }
                } catch (err) {
                    return false;
                }
                return false;
            }
            var ANIMATION_START_EVENTS = [ "animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart" ];
            var ANIMATION_END_EVENTS = [ "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd" ];
            function animate(element, name) {
                var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
                return new _promise.SyncPromise(function(resolve, reject) {
                    element = getElement(element);
                    if (!element || !isValidAnimation(element, name)) {
                        return resolve();
                    }
                    var hasStarted = false;
                    var timer = void 0;
                    var startEvent = bindEvents(element, ANIMATION_START_EVENTS, function(event) {
                        if (event.target !== element || event.animationName !== name) {
                            return;
                        }
                        event.stopPropagation();
                        startEvent.cancel();
                        hasStarted = true;
                        timer = setTimeout(function() {
                            resolve();
                        }, timeout);
                    });
                    var endEvent = bindEvents(element, ANIMATION_END_EVENTS, function(event) {
                        if (event.target !== element || event.animationName !== name) {
                            return;
                        }
                        event.stopPropagation();
                        startEvent.cancel();
                        endEvent.cancel();
                        if (event.animationName !== name) {
                            return reject("Expected animation name to be " + name + ", found " + event.animationName);
                        }
                        clearTimeout(timer);
                        setVendorCSS(element, "animationName", "none");
                        return resolve();
                    });
                    setVendorCSS(element, "animationName", name);
                    setTimeout(function() {
                        setTimeout(function() {
                            if (!hasStarted) {
                                startEvent.cancel();
                                endEvent.cancel();
                                return resolve();
                            }
                        }, 200);
                    }, 200);
                });
            }
            var STYLE = {
                VISIBILITY: {
                    VISIBLE: "visible",
                    HIDDEN: "hidden"
                },
                DISPLAY: {
                    NONE: "none",
                    BLOCK: "block"
                }
            };
            function showElement(element) {
                element.style.display = STYLE.DISPLAY.BLOCK;
            }
            function hideElement(element) {
                element.style.display = STYLE.DISPLAY.NONE;
            }
            function showAndAnimate(element, name) {
                var animation = animate(element, name);
                showElement(element);
                return animation;
            }
            function animateAndHide(element, name) {
                return animate(element, name).then(function() {
                    hideElement(element);
                });
            }
            function addClass(element, name) {
                if (element.classList) {
                    element.classList.add(name);
                } else if (element.className.split(/\s+/).indexOf(name) === -1) {
                    element.className += " " + name;
                }
            }
        },
        "./node_modules/xcomponent/src/lib/fn.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.noop = noop;
            exports.once = once;
            exports.memoize = memoize;
            exports.debounce = debounce;
            var _util = __webpack_require__("./node_modules/xcomponent/src/lib/util.js");
            function noop() {}
            function once(method) {
                var called = false;
                return function() {
                    if (!called) {
                        called = true;
                        return method.apply(this, arguments);
                    }
                };
            }
            function memoize(method) {
                var results = {};
                return function() {
                    var cacheKey = void 0;
                    try {
                        cacheKey = JSON.stringify(Array.prototype.slice.call(arguments), function(key, val) {
                            if (typeof val === "function") {
                                return "xcomponent:memoize[" + (0, _util.getObjectID)(val) + "]";
                            }
                            return val;
                        });
                    } catch (err) {
                        throw new Error("Arguments not serializable -- can not be used to memoize");
                    }
                    if (!results.hasOwnProperty(cacheKey)) {
                        results[cacheKey] = method.apply(this, arguments);
                    }
                    return results[cacheKey];
                };
            }
            function debounce(method) {
                var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                var timeout = void 0;
                return function() {
                    var _this = this, _arguments = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        return method.apply(_this, _arguments);
                    }, time);
                };
            }
        },
        "./node_modules/xcomponent/src/lib/util.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.urlEncode = urlEncode;
            exports.camelToDasherize = camelToDasherize;
            exports.dasherizeToCamel = dasherizeToCamel;
            exports.extend = extend;
            exports.values = values;
            exports.uniqueID = uniqueID;
            exports.stringifyWithFunctions = stringifyWithFunctions;
            exports.safeGet = safeGet;
            exports.capitalizeFirstLetter = capitalizeFirstLetter;
            exports.get = get;
            exports.safeInterval = safeInterval;
            exports.safeTimeout = safeTimeout;
            exports.each = each;
            exports.replaceObject = replaceObject;
            exports.copyProp = copyProp;
            exports.dotify = dotify;
            exports.getObjectID = getObjectID;
            function urlEncode(str) {
                return str.replace(/\?/g, "%3F").replace(/\&/g, "%26").replace(/#/g, "%23");
            }
            function camelToDasherize(string) {
                return string.replace(/([A-Z])/g, function(g) {
                    return "-" + g.toLowerCase();
                });
            }
            function dasherizeToCamel(string) {
                return string.replace(/-([a-z])/g, function(g) {
                    return g[1].toUpperCase();
                });
            }
            function extend(obj, source) {
                if (!source) {
                    return obj;
                }
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        obj[key] = source[key];
                    }
                }
                return obj;
            }
            function values(obj) {
                var results = [];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        results.push(obj[key]);
                    }
                }
                return results;
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                });
            }
            function stringifyWithFunctions(obj) {
                return JSON.stringify(obj, function(key, val) {
                    if (typeof val === "function") {
                        return val.toString();
                    }
                    return val;
                });
            }
            function safeGet(obj, prop) {
                var result = void 0;
                try {
                    result = obj[prop];
                } catch (err) {}
                return result;
            }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
            function get(item, path, def) {
                if (!path) {
                    return def;
                }
                path = path.split(".");
                for (var i = 0; i < path.length; i++) {
                    if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                        item = item[path[i]];
                    } else {
                        return def;
                    }
                }
                return item === undefined ? def : item;
            }
            function safeInterval(method, time) {
                var timeout = void 0;
                function runInterval() {
                    timeout = setTimeout(runInterval, time);
                    method.call();
                }
                timeout = setTimeout(runInterval, time);
                return {
                    cancel: function cancel() {
                        clearTimeout(timeout);
                    }
                };
            }
            function safeTimeout(method, time) {
                var interval = safeInterval(function() {
                    time -= 100;
                    if (time <= 0) {
                        interval.cancel();
                        method();
                    }
                }, 100);
            }
            function each(item, callback) {
                if (!item) {
                    return;
                }
                if (item instanceof Array) {
                    var len = item.length;
                    for (var i = 0; i < len; i++) {
                        callback(item[i], i);
                    }
                } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object") {
                    var keys = Object.keys(item);
                    var _len = keys.length;
                    for (var _i = 0; _i < _len; _i++) {
                        var key = keys[_i];
                        callback(item[key], key);
                    }
                }
            }
            function replaceObject(obj, callback) {
                var parentKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
                var newobj = obj instanceof Array ? [] : {};
                each(obj, function(item, key) {
                    var fullKey = parentKey ? parentKey + "." + key : key;
                    var result = callback(item, key, fullKey);
                    if (result !== undefined) {
                        newobj[key] = result;
                    } else if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
                        newobj[key] = replaceObject(item, callback, fullKey);
                    } else {
                        newobj[key] = item;
                    }
                });
                return newobj;
            }
            function copyProp(source, target, name, def) {
                if (source.hasOwnProperty(name)) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, name);
                    Object.defineProperty(target, name, descriptor);
                } else {
                    target[name] = def;
                }
            }
            function dotify(obj) {
                var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var newobj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                prefix = prefix ? prefix + "." : prefix;
                for (var key in obj) {
                    if (obj[key] && _typeof(obj[key]) === "object") {
                        newobj = dotify(obj[key], "" + prefix + key, newobj);
                    } else {
                        newobj["" + prefix + key] = obj[key];
                    }
                }
                return newobj;
            }
            function WeakMap() {
                this.id = "__weakmap_" + uniqueID() + "__";
            }
            WeakMap.prototype = {
                set: function set(item, value) {
                    if (item === null || item === undefined || (typeof item === "undefined" ? "undefined" : _typeof(item)) !== "object" && typeof item !== "function") {
                        throw new Error("Invalid key for WeakMap");
                    }
                    var entry = item[this.id];
                    if (entry && entry[0] === item) {
                        entry[1] = value;
                    } else {
                        Object.defineProperty(item, this.id, {
                            value: [ item, value ],
                            writable: true
                        });
                    }
                },
                get: function get(item) {
                    var entry = item[this.id];
                    if (entry && entry[0] === item) {
                        return entry[1];
                    }
                },
                delete: function _delete(item) {
                    var entry = item[this.id];
                    if (entry && entry[0] === item) {
                        entry[0] = entry[1] = undefined;
                    }
                },
                has: function has(item) {
                    var entry = item[this.id];
                    return entry && entry[0] === item;
                }
            };
            var objectIDs = new WeakMap();
            function getObjectID(obj) {
                if (obj === null || obj === undefined || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" && typeof obj !== "function") {
                    throw new Error("Invalid object");
                }
                var uid = objectIDs.get(obj);
                if (!uid) {
                    uid = (typeof obj === "undefined" ? "undefined" : _typeof(obj)) + ":" + uniqueID();
                    objectIDs.set(obj, uid);
                }
                return uid;
            }
        },
        "./node_modules/xcomponent/src/error.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.PopupOpenError = PopupOpenError;
            exports.IntegrationError = IntegrationError;
            function PopupOpenError(message) {
                this.message = message;
            }
            PopupOpenError.prototype = Object.create(Error.prototype);
            function IntegrationError(message) {
                this.message = message;
            }
            IntegrationError.prototype = Object.create(Error.prototype);
        },
        "./node_modules/xcomponent/src/lib/promise.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.denodeify = denodeify;
            exports.promisify = promisify;
            exports.getter = getter;
            exports.delay = delay;
            exports.cycle = cycle;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            function denodeify(method) {
                return function() {
                    var self = this;
                    var args = Array.prototype.slice.call(arguments);
                    if (args.length >= method.length) {
                        return _promise.SyncPromise.resolve(method.apply(self, args));
                    }
                    return new _promise.SyncPromise(function(resolve, reject) {
                        args.push(function(err, result) {
                            if (err && !(err instanceof Error)) {
                                throw new Error("Passed non-Error object in callback: [ " + err + " ] -- callbacks should either be called with callback(new Error(...)) or callback(null, result).");
                            }
                            return err ? reject(err) : resolve(result);
                        });
                        return method.apply(self, args);
                    });
                };
            }
            function promisify(method) {
                var prom = _promise.SyncPromise.resolve();
                return function() {
                    var _this = this, _arguments = arguments;
                    return prom.then(function() {
                        return method.apply(_this, _arguments);
                    });
                };
            }
            function getter(method) {
                var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$name = _ref.name, name = _ref$name === undefined ? "property" : _ref$name, _ref$timeout = _ref.timeout, timeout = _ref$timeout === undefined ? 1e4 : _ref$timeout;
                return function() {
                    var _this2 = this;
                    return new _promise.SyncPromise(function(resolve, reject) {
                        var result = method.call(_this2, resolve, reject);
                        if (result && typeof result.then === "function") {
                            return result.then(resolve, reject);
                        }
                        if (result !== undefined) {
                            return resolve(result);
                        }
                        setTimeout(function() {
                            reject("Timed out waiting " + timeout + "ms for " + name + " getter");
                        }, timeout);
                    });
                };
            }
            function delay(time) {
                return new _promise.SyncPromise(function(resolve) {
                    setTimeout(resolve, time);
                });
            }
            function cycle(method) {
                return _promise.SyncPromise["try"](method).then(function() {
                    return cycle(method);
                });
            }
        },
        "./node_modules/xcomponent/src/lib/css.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.isPerc = isPerc;
            exports.isPx = isPx;
            exports.isCSS = isCSS;
            exports.isNum = isNum;
            exports.toNum = toNum;
            exports.toPx = toPx;
            exports.toPerc = toPerc;
            exports.toCSS = toCSS;
            exports.mathCSS = mathCSS;
            function isPerc(str) {
                return typeof str === "string" && /^[0-9]+%$/.test(str);
            }
            function isPx(str) {
                return typeof str === "string" && /^[0-9]+px$/.test(str);
            }
            function isCSS(str) {
                return isPerc(str) || isPx(str);
            }
            function isNum(num) {
                return typeof num === "number";
            }
            function toNum(str) {
                return isNum(str) ? str : parseInt(str.match(/^([0-9]+)(px|%)$/)[1], 10);
            }
            function toPx(num) {
                return toNum(num) + "px";
            }
            function toPerc(num) {
                return toNum(num) + "%";
            }
            function toCSS(num) {
                return isPerc(num) ? num : toPx(num);
            }
            function mathCSS(num, action) {
                return isPerc(num) ? toPerc(action(toNum(num))) : toPx(Math.floor(action(toNum(num))));
            }
        },
        "./node_modules/xcomponent/src/component/child/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ChildComponent = undefined;
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _base = __webpack_require__("./node_modules/xcomponent/src/component/base.js");
            var _window = __webpack_require__("./node_modules/xcomponent/src/component/window.js");
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            var _props = __webpack_require__("./node_modules/xcomponent/src/component/child/props.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var ChildComponent = exports.ChildComponent = function(_BaseComponent) {
                _inherits(ChildComponent, _BaseComponent);
                function ChildComponent(component) {
                    _classCallCheck(this, ChildComponent);
                    var _this = _possibleConstructorReturn(this, (ChildComponent.__proto__ || Object.getPrototypeOf(ChildComponent)).call(this, component));
                    _this.component = component;
                    _this.sendLogsToOpener();
                    _this.component.log("construct_child");
                    _this.onPropHandlers = [];
                    _this.setProps(_this.getInitialProps(), (0, _window.getParentDomain)());
                    _this.component.log("init_child");
                    _this.setWindows();
                    _this.onInit = _this.sendToParent(_constants.POST_MESSAGE.INIT, {
                        exports: _this.exports()
                    }).then(function(_ref) {
                        var origin = _ref.origin, data = _ref.data;
                        _this.context = data.context;
                        window.xprops = _this.props = {};
                        _this.setProps(data.props, origin);
                        _this.watchForResize();
                        return _this;
                    })["catch"](function(err) {
                        _this.error(err);
                        throw err;
                    });
                    return _this;
                }
                _createClass(ChildComponent, [ {
                    key: "init",
                    value: function init() {
                        return this.onInit;
                    }
                }, {
                    key: "onProps",
                    value: function onProps(handler) {
                        this.onPropHandlers.push(handler);
                    }
                }, {
                    key: "getParentComponentWindow",
                    value: function getParentComponentWindow() {
                        return (0, _window.getParentComponentWindow)();
                    }
                }, {
                    key: "getParentRenderWindow",
                    value: function getParentRenderWindow() {
                        return (0, _window.getParentRenderWindow)();
                    }
                }, {
                    key: "getInitialProps",
                    value: function getInitialProps() {
                        var componentMeta = (0, _window.getComponentMeta)();
                        var self = this;
                        if (componentMeta) {
                            var props = componentMeta.props;
                            if (props.type === _constants.INITIAL_PROPS.RAW) {
                                props = props.value;
                            } else if (props.type === _constants.INITIAL_PROPS.UID) {
                                props = (0, _window.getParentComponentWindow)().__xcomponent__.props[componentMeta.uid];
                            } else {
                                throw new Error("Unrecognized props type: " + props.type);
                            }
                            if (!props) {
                                throw new Error("Initial props not found");
                            }
                            return (0, _lib.replaceObject)(props, function(value, key, fullKey) {
                                if (value && value.__type__ === "__function__") {
                                    return function() {
                                        var _this2 = this, _arguments = arguments;
                                        return self.onInit.then(function() {
                                            var original = (0, _lib.get)(self.props, fullKey);
                                            return original.apply(_this2, _arguments);
                                        });
                                    };
                                }
                            });
                        }
                    }
                }, {
                    key: "setProps",
                    value: function setProps() {
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var origin = arguments[1];
                        var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                        window.xprops = this.props = this.props || {};
                        (0, _lib.extend)(this.props, (0, _props.normalizeChildProps)(this.component, props, origin, required));
                        for (var _iterator = this.onPropHandlers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref2;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref2 = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref2 = _i.value;
                            }
                            var handler = _ref2;
                            handler.call(this, this.props);
                        }
                    }
                }, {
                    key: "sendToParent",
                    value: function sendToParent(name, data) {
                        var parentWindow = (0, _window.getParentComponentWindow)();
                        if (!parentWindow) {
                            throw new Error("Can not find parent component window to message");
                        }
                        this.component.log("send_to_parent_" + name);
                        return _src2["default"].send((0, _window.getParentComponentWindow)(), name, data, {
                            domain: (0, _window.getParentDomain)()
                        });
                    }
                }, {
                    key: "setWindows",
                    value: function setWindows() {
                        if (window.__activeXComponent__) {
                            throw new Error("[" + this.component.tag + "] Can not attach multiple components to the same window");
                        }
                        window.__activeXComponent__ = this;
                        if (!(0, _window.getParentComponentWindow)()) {
                            throw new Error("[" + this.component.tag + "] Can not find parent window");
                        }
                        var componentMeta = (0, _window.getComponentMeta)();
                        if (componentMeta.tag !== this.component.tag) {
                            throw new Error("[" + this.component.tag + "] Parent is " + componentMeta.tag + " - can not attach " + this.component.tag);
                        }
                        this.watchForClose();
                    }
                }, {
                    key: "sendLogsToOpener",
                    value: function sendLogsToOpener() {
                        try {
                            var opener = _src2["default"].winutil.getOpener(window);
                            if (!opener || !window.console) {
                                return;
                            }
                            var _loop = function _loop() {
                                if (_isArray2) {
                                    if (_i2 >= _iterator2.length) return "break";
                                    _ref3 = _iterator2[_i2++];
                                } else {
                                    _i2 = _iterator2.next();
                                    if (_i2.done) return "break";
                                    _ref3 = _i2.value;
                                }
                                var frame = _ref3;
                                if (!_src2["default"].winutil.isSameDomain(frame) || !frame.console || frame === window) {
                                    return "continue";
                                }
                                var _arr = [ "log", "debug", "info", "warn", "error" ];
                                var _loop3 = function _loop3() {
                                    var level = _arr[_i3];
                                    var original = window.console[level];
                                    if (!original) {
                                        return "continue";
                                    }
                                    try {
                                        window.console[level] = function() {
                                            try {
                                                return frame.console[level].apply(frame.console, arguments);
                                            } catch (err3) {}
                                            return original.apply(this, arguments);
                                        };
                                    } catch (err2) {}
                                };
                                for (var _i3 = 0; _i3 < _arr.length; _i3++) {
                                    var _ret2 = _loop3();
                                    if (_ret2 === "continue") continue;
                                }
                                return {
                                    v: void 0
                                };
                            };
                            _loop2: for (var _iterator2 = _src2["default"].winutil.getAllFramesInWindow(opener), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                                var _ref3;
                                var _ret = _loop();
                                switch (_ret) {
                                  case "break":
                                    break _loop2;

                                  case "continue":
                                    continue;

                                  default:
                                    if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                                }
                            }
                        } catch (err) {}
                    }
                }, {
                    key: "watchForClose",
                    value: function watchForClose() {
                        var _this3 = this;
                        (0, _lib.onCloseWindow)((0, _window.getParentComponentWindow)(), function() {
                            _this3.component.log("parent_window_closed");
                            if (_this3.context === _constants.CONTEXT_TYPES.POPUP) {
                                return _this3.destroy();
                            }
                        });
                    }
                }, {
                    key: "autoResize",
                    value: function autoResize() {
                        var width = false;
                        var height = false;
                        var autoResize = this.component.autoResize;
                        if ((typeof autoResize === "undefined" ? "undefined" : _typeof(autoResize)) === "object") {
                            width = Boolean(autoResize.width);
                            height = Boolean(autoResize.height);
                        } else if (autoResize) {
                            width = true;
                            height = true;
                        }
                        return {
                            width: width,
                            height: height
                        };
                    }
                }, {
                    key: "watchForResize",
                    value: function watchForResize() {
                        var _this4 = this;
                        var _autoResize = this.autoResize(), width = _autoResize.width, height = _autoResize.height;
                        if (!width && !height) {
                            return;
                        }
                        if (!this.component.dimensions) {
                            return;
                        }
                        if (this.context === _constants.CONTEXT_TYPES.POPUP) {
                            return;
                        }
                        var el = document.documentElement;
                        if (window.navigator.userAgent.match(/MSIE (9|10)\./)) {
                            el = document.body;
                        }
                        return _promise.SyncPromise["try"](function() {
                            if (!(0, _lib.dimensionsMatchViewport)(el, {
                                width: width,
                                height: height
                            })) {
                                return _this4.resizeToElement(el, {
                                    width: width,
                                    height: height
                                });
                            }
                        }).then(function() {
                            return (0, _lib.cycle)(function() {
                                return (0, _lib.onDimensionsChange)(el, {
                                    width: width,
                                    height: height
                                }).then(function(dimensions) {
                                    return _this4.resizeToElement(el, {
                                        width: width,
                                        height: height
                                    });
                                });
                            });
                        });
                    }
                }, {
                    key: "exports",
                    value: function exports() {
                        var self = this;
                        return {
                            updateProps: function updateProps(props) {
                                return self.setProps(props, this.origin, false);
                            },
                            close: function close() {
                                return self.destroy();
                            }
                        };
                    }
                }, {
                    key: "resize",
                    value: function resize(width, height) {
                        var _this5 = this;
                        return _promise.SyncPromise.resolve().then(function() {
                            _this5.component.log("resize", {
                                width: width,
                                height: height
                            });
                            if (_this5.context === _constants.CONTEXT_TYPES.POPUP) {
                                return;
                            }
                            return _this5.sendToParent(_constants.POST_MESSAGE.RESIZE, {
                                width: width,
                                height: height
                            });
                        });
                    }
                }, {
                    key: "resizeToElement",
                    value: function resizeToElement(el, _ref4) {
                        var _this6 = this;
                        var width = _ref4.width, height = _ref4.height;
                        var history = [];
                        var resize = function resize() {
                            return _promise.SyncPromise["try"](function() {
                                var tracker = (0, _lib.trackDimensions)(el, {
                                    width: width,
                                    height: height
                                });
                                var _tracker$check = tracker.check(), dimensions = _tracker$check.dimensions;
                                for (var _iterator3 = history, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                                    var _ref5;
                                    if (_isArray3) {
                                        if (_i4 >= _iterator3.length) break;
                                        _ref5 = _iterator3[_i4++];
                                    } else {
                                        _i4 = _iterator3.next();
                                        if (_i4.done) break;
                                        _ref5 = _i4.value;
                                    }
                                    var size = _ref5;
                                    var widthMatch = !width || size.width === dimensions.width;
                                    var heightMatch = !height || size.height === dimensions.height;
                                    if (widthMatch && heightMatch) {
                                        return;
                                    }
                                }
                                history.push({
                                    width: dimensions.width,
                                    height: dimensions.height
                                });
                                return _this6.resize(width ? dimensions.width : null, height ? dimensions.height : null).then(function() {
                                    if (tracker.check().changed) {
                                        return resize();
                                    }
                                });
                            });
                        };
                        return resize();
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        return this.sendToParent(_constants.POST_MESSAGE.HIDE);
                    }
                }, {
                    key: "show",
                    value: function show() {
                        return this.sendToParent(_constants.POST_MESSAGE.SHOW);
                    }
                }, {
                    key: "userClose",
                    value: function userClose() {
                        return this.close(_constants.CLOSE_REASONS.USER_CLOSED);
                    }
                }, {
                    key: "close",
                    value: function close() {
                        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.CLOSE_REASONS.CHILD_CALL;
                        this.component.log("close_child");
                        this.sendToParent(_constants.POST_MESSAGE.CLOSE, {
                            reason: reason
                        }, {
                            fireAndForget: true
                        });
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        _client2["default"].flush().then(function() {
                            window.close();
                        });
                    }
                }, {
                    key: "focus",
                    value: function focus() {
                        this.component.log("focus");
                        window.focus();
                    }
                }, {
                    key: "error",
                    value: function error(err) {
                        this.component.logError("error", {
                            error: err.stack || err.toString()
                        });
                        return this.sendToParent(_constants.POST_MESSAGE.ERROR, {
                            error: err.stack || err.toString()
                        });
                    }
                } ]);
                return ChildComponent;
            }(_base.BaseComponent);
            if ((0, _window.isXComponentWindow)() && window.console) {
                (function() {
                    var logLevels = _client2["default"].logLevels;
                    var _loop4 = function _loop4() {
                        if (_isArray4) {
                            if (_i5 >= _iterator4.length) return "break";
                            _ref6 = _iterator4[_i5++];
                        } else {
                            _i5 = _iterator4.next();
                            if (_i5.done) return "break";
                            _ref6 = _i5.value;
                        }
                        var level = _ref6;
                        try {
                            var _original = window.console[level];
                            if (!_original || !_original.apply) {
                                return "continue";
                            }
                            window.console[level] = function() {
                                try {
                                    var logLevel = window.LOG_LEVEL;
                                    if (!logLevel || logLevels.indexOf(logLevel) === -1) {
                                        return _original.apply(this, arguments);
                                    }
                                    if (logLevels.indexOf(level) > logLevels.indexOf(logLevel)) {
                                        return;
                                    }
                                    return _original.apply(this, arguments);
                                } catch (err2) {}
                            };
                            if (level === "info") {
                                window.console.log = window.console[level];
                            }
                        } catch (err) {}
                    };
                    _loop5: for (var _iterator4 = logLevels, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                        var _ref6;
                        var _ret4 = _loop4();
                        switch (_ret4) {
                          case "break":
                            break _loop5;

                          case "continue":
                            continue;
                        }
                    }
                })();
            }
        },
        "./node_modules/xcomponent/src/component/window.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getParentRenderWindow = exports.getParentComponentWindow = exports.isXComponentWindow = exports.getComponentMeta = undefined;
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            exports.buildChildWindowName = buildChildWindowName;
            exports.getParentDomain = getParentDomain;
            exports.getPosition = getPosition;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _hiBase = __webpack_require__("./node_modules/hi-base32/src/base32.js");
            var _hiBase2 = _interopRequireDefault(_hiBase);
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function normalize(str) {
                return str && str.replace(/^[^a-z0-9A-Z]+|[^a-z0-9A-Z]+$/g, "").replace(/[^a-z0-9A-Z]+/g, "_");
            }
            function buildChildWindowName(name, version) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                options.id = (0, _lib.uniqueID)();
                options.domain = (0, _lib.getDomain)(window);
                var encodedName = normalize(name);
                var encodedVersion = normalize(version);
                var encodedOptions = _hiBase2["default"].encode(JSON.stringify(options)).replace(/\=/g, "").toLowerCase();
                if (!encodedName) {
                    throw new Error("Invalid name: " + name + " - must contain alphanumeric characters");
                }
                if (!encodedVersion) {
                    throw new Error("Invalid version: " + version + " - must contain alphanumeric characters");
                }
                return [ _constants.XCOMPONENT, encodedName, encodedVersion, encodedOptions ].join("__");
            }
            var getComponentMeta = exports.getComponentMeta = (0, _lib.memoize)(function() {
                if (!window.name) {
                    return;
                }
                var _window$name$split = window.name.split("__"), _window$name$split2 = _slicedToArray(_window$name$split, 4), xcomp = _window$name$split2[0], name = _window$name$split2[1], version = _window$name$split2[2], encodedOptions = _window$name$split2[3];
                if (xcomp !== _constants.XCOMPONENT) {
                    return;
                }
                var componentMeta = void 0;
                try {
                    componentMeta = JSON.parse(_hiBase2["default"].decode(encodedOptions.toUpperCase()));
                } catch (err) {
                    return;
                }
                componentMeta.name = name;
                componentMeta.version = version.replace(/_/g, ".");
                return componentMeta;
            });
            function getParentDomain() {
                return getComponentMeta().domain;
            }
            var isXComponentWindow = exports.isXComponentWindow = (0, _lib.memoize)(function() {
                return Boolean(getComponentMeta());
            });
            var getParentComponentWindow = exports.getParentComponentWindow = (0, _lib.memoize)(function() {
                var componentMeta = getComponentMeta();
                if (!componentMeta) {
                    throw new Error("Can not get parent component window - window not rendered by xcomponent");
                }
                var parentWindow = _src2["default"].winutil.getAncestor(window);
                if (!parentWindow) {
                    throw new Error("Can not find parent window");
                }
                if (componentMeta.parent === _constants.WINDOW_REFERENCES.DIRECT_PARENT) {
                    return parentWindow;
                } else if (componentMeta.parent === _constants.WINDOW_REFERENCES.PARENT_PARENT) {
                    parentWindow = _src2["default"].winutil.getAncestor(parentWindow);
                    if (!parentWindow) {
                        throw new Error("Can not find parent component window");
                    }
                    return parentWindow;
                }
                var parentFrame = _src2["default"].winutil.findFrameByName(parentWindow, componentMeta.parent);
                if (!parentFrame) {
                    throw new Error("Can not find frame with name: " + componentMeta.parent);
                }
                return parentFrame;
            });
            var getParentRenderWindow = exports.getParentRenderWindow = (0, _lib.memoize)(function() {
                var componentMeta = getComponentMeta();
                if (!componentMeta) {
                    throw new Error("Can not get parent component window - window not rendered by xcomponent");
                }
                var parentWindow = _src2["default"].winutil.getAncestor(window);
                if (!parentWindow) {
                    throw new Error("Can not find parent window");
                }
                if (componentMeta.renderParent === _constants.WINDOW_REFERENCES.DIRECT_PARENT) {
                    return parentWindow;
                } else if (componentMeta.renderParent === _constants.WINDOW_REFERENCES.PARENT_PARENT) {
                    parentWindow = _src2["default"].winutil.getAncestor(parentWindow);
                    if (!parentWindow) {
                        throw new Error("Can not find parent render window");
                    }
                    return parentWindow;
                } else if (componentMeta.renderParent === _constants.WINDOW_REFERENCES.PARENT_UID) {
                    parentWindow = getParentComponentWindow()[_constants.__XCOMPONENT__].windows[componentMeta.uid];
                    if (!parentWindow) {
                        throw new Error("Can not find parent render window");
                    }
                    return parentWindow;
                }
                throw new Error("Unrecognized renderParent reference: " + componentMeta.renderParent);
            });
            function getPosition(options) {
                var left = void 0;
                var top = void 0;
                var width = options.width;
                var height = options.height;
                if (window.outerWidth) {
                    left = Math.round((window.outerWidth - width) / 2) + window.screenX;
                    top = Math.round((window.outerHeight - height) / 2) + window.screenY;
                } else if (window.screen.width) {
                    left = Math.round((window.screen.width - width) / 2);
                    top = Math.round((window.screen.height - height) / 2);
                }
                return {
                    x: left,
                    y: top
                };
            }
        },
        "./node_modules/hi-base32/src/base32.js": function(module, exports) {
            (function(global) {
                "use strict";
                (function(root, undefined) {
                    "use strict";
                    var NODE_JS = typeof module != "undefined";
                    if (NODE_JS) {
                        root = global;
                    }
                    var BASE32_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
                    var BASE32_DECODE_CHAR = {
                        A: 0,
                        B: 1,
                        C: 2,
                        D: 3,
                        E: 4,
                        F: 5,
                        G: 6,
                        H: 7,
                        I: 8,
                        J: 9,
                        K: 10,
                        L: 11,
                        M: 12,
                        N: 13,
                        O: 14,
                        P: 15,
                        Q: 16,
                        R: 17,
                        S: 18,
                        T: 19,
                        U: 20,
                        V: 21,
                        W: 22,
                        X: 23,
                        Y: 24,
                        Z: 25,
                        "2": 26,
                        "3": 27,
                        "4": 28,
                        "5": 29,
                        "6": 30,
                        "7": 31
                    };
                    var blocks = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
                    var toUtf8String = function toUtf8String(bytes) {
                        var str = "", length = bytes.length, i = 0, followingChars = 0, b, c;
                        while (i < length) {
                            b = bytes[i++];
                            if (b <= 127) {
                                str += String.fromCharCode(b);
                                continue;
                            } else if (b > 191 && b <= 223) {
                                c = b & 31;
                                followingChars = 1;
                            } else if (b <= 239) {
                                c = b & 15;
                                followingChars = 2;
                            } else if (b <= 247) {
                                c = b & 7;
                                followingChars = 3;
                            } else {
                                throw "not a UTF-8 string";
                            }
                            for (var j = 0; j < followingChars; ++j) {
                                b = bytes[i++];
                                if (b < 128 || b > 191) {
                                    throw "not a UTF-8 string";
                                }
                                c <<= 6;
                                c += b & 63;
                            }
                            if (c >= 55296 && c <= 57343) {
                                throw "not a UTF-8 string";
                            }
                            if (c > 1114111) {
                                throw "not a UTF-8 string";
                            }
                            if (c <= 65535) {
                                str += String.fromCharCode(c);
                            } else {
                                c -= 65536;
                                str += String.fromCharCode((c >> 10) + 55296);
                                str += String.fromCharCode((c & 1023) + 56320);
                            }
                        }
                        return str;
                    };
                    var decodeAsBytes = function decodeAsBytes(base32Str) {
                        base32Str = base32Str.replace(/=/g, "");
                        var v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = base32Str.length;
                        for (var i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
                            bytes[index++] = (v7 << 5 | v8) & 255;
                        }
                        var remain = length - count;
                        if (remain == 2) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                        } else if (remain == 4) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                        } else if (remain == 5) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                        } else if (remain == 7) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
                            bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
                            bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
                            bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
                        }
                        return bytes;
                    };
                    var encodeAscii = function encodeAscii(str) {
                        var v1, v2, v3, v4, v5, base32Str = "", length = str.length;
                        for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
                            v1 = str.charCodeAt(i++);
                            v2 = str.charCodeAt(i++);
                            v3 = str.charCodeAt(i++);
                            v4 = str.charCodeAt(i++);
                            v5 = str.charCodeAt(i++);
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                        }
                        var remain = length - count;
                        if (remain == 1) {
                            v1 = str.charCodeAt(i);
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                        } else if (remain == 2) {
                            v1 = str.charCodeAt(i++);
                            v2 = str.charCodeAt(i);
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                        } else if (remain == 3) {
                            v1 = str.charCodeAt(i++);
                            v2 = str.charCodeAt(i++);
                            v3 = str.charCodeAt(i);
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                        } else if (remain == 4) {
                            v1 = str.charCodeAt(i++);
                            v2 = str.charCodeAt(i++);
                            v3 = str.charCodeAt(i++);
                            v4 = str.charCodeAt(i);
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                        }
                        return base32Str;
                    };
                    var encodeUtf8 = function encodeUtf8(str) {
                        var v1, v2, v3, v4, v5, code, end = false, base32Str = "", index = 0, i, start = 0, bytes = 0, length = str.length;
                        do {
                            blocks[0] = blocks[5];
                            blocks[1] = blocks[6];
                            blocks[2] = blocks[7];
                            for (i = start; index < length && i < 5; ++index) {
                                code = str.charCodeAt(index);
                                if (code < 128) {
                                    blocks[i++] = code;
                                } else if (code < 2048) {
                                    blocks[i++] = 192 | code >> 6;
                                    blocks[i++] = 128 | code & 63;
                                } else if (code < 55296 || code >= 57344) {
                                    blocks[i++] = 224 | code >> 12;
                                    blocks[i++] = 128 | code >> 6 & 63;
                                    blocks[i++] = 128 | code & 63;
                                } else {
                                    code = 65536 + ((code & 1023) << 10 | str.charCodeAt(++index) & 1023);
                                    blocks[i++] = 240 | code >> 18;
                                    blocks[i++] = 128 | code >> 12 & 63;
                                    blocks[i++] = 128 | code >> 6 & 63;
                                    blocks[i++] = 128 | code & 63;
                                }
                            }
                            bytes += i - start;
                            start = i - 5;
                            if (index == length) {
                                ++index;
                            }
                            if (index > length && i < 6) {
                                end = true;
                            }
                            v1 = blocks[0];
                            if (i > 4) {
                                v2 = blocks[1];
                                v3 = blocks[2];
                                v4 = blocks[3];
                                v5 = blocks[4];
                                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                            } else if (i == 1) {
                                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                            } else if (i == 2) {
                                v2 = blocks[1];
                                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                            } else if (i == 3) {
                                v2 = blocks[1];
                                v3 = blocks[2];
                                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                            } else if (i == 4) {
                                v2 = blocks[1];
                                v3 = blocks[2];
                                v4 = blocks[3];
                                base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                            }
                        } while (!end);
                        return base32Str;
                    };
                    var encodeBytes = function encodeBytes(bytes) {
                        var v1, v2, v3, v4, v5, base32Str = "", length = bytes.length;
                        for (var i = 0, count = parseInt(length / 5) * 5; i < count; ) {
                            v1 = bytes[i++];
                            v2 = bytes[i++];
                            v3 = bytes[i++];
                            v4 = bytes[i++];
                            v5 = bytes[i++];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[(v4 << 3 | v5 >>> 5) & 31] + BASE32_ENCODE_CHAR[v5 & 31];
                        }
                        var remain = length - count;
                        if (remain == 1) {
                            v1 = bytes[i];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[v1 << 2 & 31] + "======";
                        } else if (remain == 2) {
                            v1 = bytes[i++];
                            v2 = bytes[i];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[v2 << 4 & 31] + "====";
                        } else if (remain == 3) {
                            v1 = bytes[i++];
                            v2 = bytes[i++];
                            v3 = bytes[i];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[v3 << 1 & 31] + "===";
                        } else if (remain == 4) {
                            v1 = bytes[i++];
                            v2 = bytes[i++];
                            v3 = bytes[i++];
                            v4 = bytes[i];
                            base32Str += BASE32_ENCODE_CHAR[v1 >>> 3] + BASE32_ENCODE_CHAR[(v1 << 2 | v2 >>> 6) & 31] + BASE32_ENCODE_CHAR[v2 >>> 1 & 31] + BASE32_ENCODE_CHAR[(v2 << 4 | v3 >>> 4) & 31] + BASE32_ENCODE_CHAR[(v3 << 1 | v4 >>> 7) & 31] + BASE32_ENCODE_CHAR[v4 >>> 2 & 31] + BASE32_ENCODE_CHAR[v4 << 3 & 31] + "=";
                        }
                        return base32Str;
                    };
                    var encode = function encode(input, asciiOnly) {
                        var notString = typeof input != "string";
                        if (notString && input.constructor == ArrayBuffer) {
                            input = new Uint8Array(input);
                        }
                        if (notString) {
                            return encodeBytes(input);
                        } else if (asciiOnly) {
                            return encodeAscii(input);
                        } else {
                            return encodeUtf8(input);
                        }
                    };
                    var decode = function decode(base32Str, asciiOnly) {
                        if (!asciiOnly) {
                            return toUtf8String(decodeAsBytes(base32Str));
                        }
                        var v1, v2, v3, v4, v5, v6, v7, v8, str = "", length = base32Str.indexOf("=");
                        if (length == -1) {
                            length = base32Str.length;
                        }
                        for (var i = 0, count = length >> 3 << 3; i < count; ) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v8 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255) + String.fromCharCode((v7 << 5 | v8) & 255);
                        }
                        var remain = length - count;
                        if (remain == 2) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255);
                        } else if (remain == 4) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255);
                        } else if (remain == 5) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255);
                        } else if (remain == 7) {
                            v1 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v2 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v3 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v4 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v5 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v6 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            v7 = BASE32_DECODE_CHAR[base32Str.charAt(i++)];
                            str += String.fromCharCode((v1 << 3 | v2 >>> 2) & 255) + String.fromCharCode((v2 << 6 | v3 << 1 | v4 >>> 4) & 255) + String.fromCharCode((v4 << 4 | v5 >>> 1) & 255) + String.fromCharCode((v5 << 7 | v6 << 2 | v7 >>> 3) & 255);
                        }
                        return str;
                    };
                    decode.asBytes = decodeAsBytes;
                    var exports = {
                        encode: encode,
                        decode: decode
                    };
                    if (root.HI_BASE32_TEST) {
                        exports.toUtf8String = toUtf8String;
                    }
                    if (!root.HI_BASE32_TEST && NODE_JS) {
                        module.exports = exports;
                    } else if (root) {
                        root.base32 = exports;
                    }
                })(undefined);
            }).call(exports, function() {
                return this;
            }());
        },
        "./node_modules/xcomponent/src/constants.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DELEGATE = exports.CONTEXT_TYPES_LIST = exports.CLOSE_REASONS = exports.EVENT_NAMES = exports.ANIMATION_NAMES = exports.CLASS_NAMES = exports.CONTEXT_TYPES = exports.PROP_TYPES_LIST = exports.WINDOW_REFERENCES = exports.INITIAL_PROPS = exports.PROP_TYPES = exports.POST_MESSAGE = exports.__XCOMPONENT__ = exports.XCOMPONENT = undefined;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var XCOMPONENT = exports.XCOMPONENT = "xcomponent";
            var __XCOMPONENT__ = exports.__XCOMPONENT__ = "__" + XCOMPONENT + "__";
            var POST_MESSAGE = exports.POST_MESSAGE = {
                INIT: XCOMPONENT + "_init",
                PROPS: XCOMPONENT + "_props",
                PROP_CALLBACK: XCOMPONENT + "_prop_callback",
                CLOSE: XCOMPONENT + "_close",
                REDIRECT: XCOMPONENT + "_redirect",
                RESIZE: XCOMPONENT + "_resize",
                DELEGATE: XCOMPONENT + "_delegate",
                ERROR: XCOMPONENT + "_error",
                HIDE: XCOMPONENT + "_hide",
                SHOW: XCOMPONENT + "_show"
            };
            var PROP_TYPES = exports.PROP_TYPES = {
                STRING: "string",
                OBJECT: "object",
                FUNCTION: "function",
                BOOLEAN: "boolean",
                NUMBER: "number"
            };
            var INITIAL_PROPS = exports.INITIAL_PROPS = {
                RAW: "raw",
                UID: "uid"
            };
            var WINDOW_REFERENCES = exports.WINDOW_REFERENCES = {
                DIRECT_PARENT: "__direct_parent__",
                PARENT_PARENT: "__parent_parent__",
                PARENT_UID: "__parent_uid__"
            };
            var PROP_TYPES_LIST = exports.PROP_TYPES_LIST = (0, _lib.values)(PROP_TYPES);
            var CONTEXT_TYPES = exports.CONTEXT_TYPES = {
                IFRAME: "iframe",
                LIGHTBOX: "lightbox",
                POPUP: "popup"
            };
            var CLASS_NAMES = exports.CLASS_NAMES = {
                XCOMPONENT: "" + XCOMPONENT,
                COMPONENT: XCOMPONENT + "-component",
                CLOSE: XCOMPONENT + "-close",
                FOCUS: XCOMPONENT + "-focus",
                ELEMENT: XCOMPONENT + "-element",
                IFRAME: XCOMPONENT + "-iframe",
                LIGHTBOX: XCOMPONENT + "-lightbox",
                POPUP: XCOMPONENT + "-popup",
                LOADING: XCOMPONENT + "-loading",
                SHOW_CONTAINER: XCOMPONENT + "-show-container",
                SHOW_COMPONENT: XCOMPONENT + "-show-component",
                HIDE_CONTAINER: XCOMPONENT + "-hide-container",
                HIDE_COMPONENT: XCOMPONENT + "-hide-component"
            };
            var ANIMATION_NAMES = exports.ANIMATION_NAMES = {
                SHOW_CONTAINER: XCOMPONENT + "-show-container",
                SHOW_COMPONENT: XCOMPONENT + "-show-component",
                HIDE_CONTAINER: XCOMPONENT + "-hide-container",
                HIDE_COMPONENT: XCOMPONENT + "-hide-component"
            };
            var EVENT_NAMES = exports.EVENT_NAMES = {
                CLICK: "click"
            };
            var CLOSE_REASONS = exports.CLOSE_REASONS = {
                PARENT_CALL: "parent_call",
                CHILD_CALL: "child_call",
                CLOSE_DETECTED: "close_detected",
                USER_CLOSED: "user_closed",
                PARENT_CLOSE_DETECTED: "parent_close_detected"
            };
            var CONTEXT_TYPES_LIST = exports.CONTEXT_TYPES_LIST = (0, _lib.values)(CONTEXT_TYPES);
            var DELEGATE = exports.DELEGATE = {
                CALL_ORIGINAL: "call_original",
                CALL_DELEGATE: "call_delegate"
            };
        },
        "./node_modules/xcomponent/src/component/child/props.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.normalizeChildProps = normalizeChildProps;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            function normalizeChildProps(component, props, origin) {
                var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                var result = {};
                var _loop = function _loop() {
                    if (_isArray) {
                        if (_i >= _iterator.length) return "break";
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) return "break";
                        _ref = _i.value;
                    }
                    var key = _ref;
                    if (!props.hasOwnProperty(key) && !required) {
                        return "continue";
                    }
                    var prop = component.props[key];
                    var value = props[key];
                    if (typeof prop.childDef === "function") {
                        if (!value) {
                            if (prop.getter) {
                                value = function value() {
                                    return Promise.resolve(prop.childDef.call());
                                };
                            } else {
                                value = prop.childDef.call();
                            }
                        } else if (prop.getter) {
                            var val = value;
                            value = function value() {
                                return val.apply(this, arguments).then(function(res) {
                                    return res ? res : prop.childDef.call();
                                });
                            };
                        }
                    }
                    if (value && prop.sameDomain && origin !== (0, _lib.getDomain)(window)) {
                        value = null;
                    }
                    result[key] = value;
                    if (prop.alias && !result[prop.alias]) {
                        result[prop.alias] = value;
                    }
                };
                _loop2: for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    var _ret = _loop();
                    switch (_ret) {
                      case "break":
                        break _loop2;

                      case "continue":
                        continue;
                    }
                }
                return result;
            }
        },
        "./node_modules/xcomponent/src/component/parent/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.ParentComponent = undefined;
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _desc, _value, _class;
            exports.destroyAll = destroyAll;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _base = __webpack_require__("./node_modules/xcomponent/src/component/base.js");
            var _window = __webpack_require__("./node_modules/xcomponent/src/component/window.js");
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            var _drivers = __webpack_require__("./node_modules/xcomponent/src/component/parent/drivers.js");
            var _validate = __webpack_require__("./node_modules/xcomponent/src/component/parent/validate.js");
            var _props = __webpack_require__("./node_modules/xcomponent/src/component/parent/props.js");
            var _parent = __webpack_require__("./node_modules/xcomponent/src/component/component/templates/parent.htm");
            var _parent2 = _interopRequireDefault(_parent);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object["ke" + "ys"](descriptor).forEach(function(key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;
                if ("value" in desc || desc.initializer) {
                    desc.writable = true;
                }
                desc = decorators.slice().reverse().reduce(function(desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);
                if (context && desc.initializer !== void 0) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = undefined;
                }
                if (desc.initializer === void 0) {
                    Object["define" + "Property"](target, property, desc);
                    desc = null;
                }
                return desc;
            }
            var activeComponents = [];
            function memoize(target, name, descriptor) {
                var method = descriptor.value;
                descriptor.value = function() {
                    this.__memoized__ = this.__memoized__ || {};
                    if (!this.__memoized__.hasOwnProperty(name)) {
                        this.__memoized__[name] = method.apply(this, arguments);
                    }
                    return this.__memoized__[name];
                };
            }
            function promise(target, name, descriptor) {
                var method = descriptor.value;
                descriptor.value = function() {
                    var _this = this, _arguments = arguments;
                    return _promise.SyncPromise["try"](function() {
                        return method.apply(_this, _arguments);
                    });
                };
            }
            var global = window[_constants.__XCOMPONENT__] = window[_constants.__XCOMPONENT__] || {};
            global.props = global.props || {};
            global.windows = global.windows || {};
            var ParentComponent = exports.ParentComponent = (_class = function(_BaseComponent) {
                _inherits(ParentComponent, _BaseComponent);
                function ParentComponent(component, context) {
                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    _classCallCheck(this, ParentComponent);
                    var _this2 = _possibleConstructorReturn(this, (ParentComponent.__proto__ || Object.getPrototypeOf(ParentComponent)).call(this, component, options));
                    (0, _validate.validate)(component, options);
                    _this2.rawProps = _extends({}, options.props || {});
                    _this2.component = component;
                    _this2.context = context;
                    _this2.setProps(options.props || {});
                    _this2.childWindowName = _this2.buildChildWindowName({
                        renderTo: window
                    });
                    if (component.singleton && activeComponents.some(function(comp) {
                        return comp.component === component;
                    })) {
                        throw new Error(component.tag + " is a singleton, and an only be instantiated once");
                    }
                    _this2.registerActiveComponent();
                    _this2.component.log("construct_parent");
                    _this2.onInit = new _promise.SyncPromise();
                    _this2.clean.register(function() {
                        _this2.onInit = new _promise.SyncPromise();
                    });
                    _this2.onInit["catch"](function(err) {
                        return _this2.error(err);
                    });
                    return _this2;
                }
                _createClass(ParentComponent, [ {
                    key: "registerActiveComponent",
                    value: function registerActiveComponent() {
                        var _this3 = this;
                        activeComponents.push(this);
                        this.clean.register(function() {
                            activeComponents.splice(activeComponents.indexOf(_this3), 1);
                        });
                    }
                }, {
                    key: "buildChildWindowName",
                    value: function buildChildWindowName() {
                        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$renderTo = _ref.renderTo, renderTo = _ref$renderTo === undefined ? window : _ref$renderTo, _ref$secureProps = _ref.secureProps, secureProps = _ref$secureProps === undefined ? false : _ref$secureProps;
                        var sameWindow = renderTo === window;
                        var isLightbox = this.context === _constants.CONTEXT_TYPES.LIGHTBOX;
                        var uid = (0, _lib.uniqueID)();
                        var tag = this.component.tag;
                        var sProps = this.getSerializedPropsForChild();
                        var defaultParent = isLightbox ? _constants.WINDOW_REFERENCES.PARENT_PARENT : _constants.WINDOW_REFERENCES.DIRECT_PARENT;
                        var parent = sameWindow ? defaultParent : window.name;
                        var renderParent = sameWindow ? defaultParent : _constants.WINDOW_REFERENCES.PARENT_UID;
                        var props = secureProps ? {
                            type: _constants.INITIAL_PROPS.UID
                        } : {
                            type: _constants.INITIAL_PROPS.RAW,
                            value: sProps
                        };
                        if (props.type === _constants.INITIAL_PROPS.UID) {
                            global.props[uid] = sProps;
                        }
                        if (renderParent === _constants.WINDOW_REFERENCES.PARENT_UID) {
                            global.windows[uid] = renderTo;
                        }
                        return (0, _window.buildChildWindowName)(this.component.name, this.component.version, {
                            uid: uid,
                            tag: tag,
                            parent: parent,
                            renderParent: renderParent,
                            props: props
                        });
                    }
                }, {
                    key: "sendToParent",
                    value: function sendToParent(name, data) {
                        var parentWindow = (0, _window.getParentComponentWindow)();
                        if (!parentWindow) {
                            throw new Error("Can not find parent component window to message");
                        }
                        this.component.log("send_to_parent_" + name);
                        return _src2["default"].send((0, _window.getParentComponentWindow)(), name, data, {
                            domain: (0, _window.getParentDomain)()
                        });
                    }
                }, {
                    key: "setProps",
                    value: function setProps() {
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        this.props = this.props || {};
                        props.version = this.component.version;
                        (0, _validate.validateProps)(this.component, props, required);
                        if (this.component.validateProps) {
                            this.component.validateProps(this.component, props, required);
                        }
                        (0, _lib.extend)(this.props, (0, _props.normalizeProps)(this.component, this, props, required));
                    }
                }, {
                    key: "buildUrl",
                    value: function buildUrl() {
                        var _this4 = this;
                        return _promise.SyncPromise.hash({
                            url: this.props.url,
                            query: (0, _props.propsToQuery)(this.component.props, this.props)
                        }).then(function(_ref2) {
                            var url = _ref2.url, query = _ref2.query;
                            if (url && !_this4.getValidDomain(url)) {
                                return url;
                            }
                            return _promise.SyncPromise["try"](function() {
                                if (url) {
                                    return url;
                                } else if (_this4.props.env && _this4.component.envUrls) {
                                    return _this4.component.envUrls[_this4.props.env];
                                } else if (_this4.component.defaultEnv && _this4.component.envUrls) {
                                    return _this4.component.envUrls[_this4.component.defaultEnv];
                                } else if (_this4.component.buildUrl) {
                                    return _this4.component.buildUrl(_this4, _this4.props);
                                } else {
                                    return _this4.component.url;
                                }
                            }).then(function(finalUrl) {
                                query[_constants.XCOMPONENT] = "1";
                                return (0, _lib.extendUrl)(finalUrl, {
                                    query: query
                                });
                            });
                        });
                    }
                }, {
                    key: "getValidDomain",
                    value: function getValidDomain(url) {
                        if (!url) {
                            return;
                        }
                        var domain = (0, _lib.getDomainFromUrl)(url);
                        if (this.component.domain) {
                            if (domain === this.component.domain) {
                                return domain;
                            }
                        }
                        if (this.component.domains) {
                            for (var _iterator = Object.keys(this.component.domains), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                var _ref3;
                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref3 = _iterator[_i++];
                                } else {
                                    _i = _iterator.next();
                                    if (_i.done) break;
                                    _ref3 = _i.value;
                                }
                                var env = _ref3;
                                if (env === "test") {
                                    continue;
                                }
                                if (domain === this.component.domains[env]) {
                                    return domain;
                                }
                            }
                        }
                    }
                }, {
                    key: "getDomain",
                    value: function getDomain() {
                        var _this5 = this;
                        return _promise.SyncPromise["try"](function() {
                            return _this5.props.url;
                        }).then(function(url) {
                            var domain = _this5.getValidDomain(url);
                            if (domain) {
                                return domain;
                            }
                            if (_this5.component.domain) {
                                return _this5.component.domain;
                            }
                            if (_this5.component.domains && _this5.props.env && _this5.component.domains[_this5.props.env]) {
                                return _this5.component.domains[_this5.props.env];
                            }
                            if (_this5.component.envUrls && _this5.props.env && _this5.component.envUrls[_this5.props.env]) {
                                return (0, _lib.getDomainFromUrl)(_this5.component.envUrls[_this5.props.env]);
                            }
                            if (_this5.component.envUrls && _this5.component.defaultEnv && _this5.component.envUrls[_this5.component.defaultEnv]) {
                                return (0, _lib.getDomainFromUrl)(_this5.component.envUrls[_this5.component.defaultEnv]);
                            }
                            if (_this5.component.buildUrl) {
                                return (0, _lib.getDomainFromUrl)(_this5.component.buildUrl(_this5));
                            }
                            if (_this5.component.url) {
                                return (0, _lib.getDomainFromUrl)(_this5.component.url);
                            }
                            throw new Error("Can not determine domain for component");
                        });
                    }
                }, {
                    key: "getBridgeDomain",
                    value: function getBridgeDomain(url) {
                        var _this6 = this;
                        return _promise.SyncPromise["try"](function() {
                            if (_this6.component.bridgeDomain) {
                                return _this6.component.bridgeDomain;
                            }
                            if (_this6.component.bridgeDomains && _this6.props.env && _this6.component.bridgeDomains[_this6.props.env]) {
                                return _this6.component.bridgeDomains[_this6.props.env];
                            }
                            if (url) {
                                return (0, _lib.getDomainFromUrl)(url);
                            }
                            throw new Error("Can not determine domain for bridge");
                        });
                    }
                }, {
                    key: "getPropsForChild",
                    value: function getPropsForChild() {
                        var result = {};
                        for (var _iterator2 = Object.keys(this.props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref4;
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) break;
                                _ref4 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) break;
                                _ref4 = _i2.value;
                            }
                            var key = _ref4;
                            if (this.component.props[key].sendToChild !== false) {
                                result[key] = this.props[key];
                            }
                        }
                        return result;
                    }
                }, {
                    key: "getSerializedPropsForChild",
                    value: function getSerializedPropsForChild() {
                        return (0, _lib.replaceObject)(this.getPropsForChild(), function(value, key, fullKey) {
                            if (value instanceof Function) {
                                return {
                                    __type__: "__function__"
                                };
                            }
                        });
                    }
                }, {
                    key: "updateProps",
                    value: function updateProps() {
                        var _this7 = this;
                        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        var changed = false;
                        for (var _iterator3 = Object.keys(props), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                            var _ref5;
                            if (_isArray3) {
                                if (_i3 >= _iterator3.length) break;
                                _ref5 = _iterator3[_i3++];
                            } else {
                                _i3 = _iterator3.next();
                                if (_i3.done) break;
                                _ref5 = _i3.value;
                            }
                            var key = _ref5;
                            if (props[key] !== this.rawProps[key]) {
                                changed = true;
                                break;
                            }
                        }
                        if (!changed) {
                            return;
                        }
                        this.rawProps = _extends({}, this.rawProps, props);
                        this.setProps(props, false);
                        if (this.propUpdater) {
                            return this.propUpdater;
                        }
                        this.propUpdater = this.onInit.then(function() {
                            delete _this7.propUpdater;
                            return _this7.childExports.updateProps(_this7.getPropsForChild());
                        });
                        return this.propUpdater;
                    }
                }, {
                    key: "openBridge",
                    value: function openBridge() {
                        var _this8 = this;
                        var bridgeUrl = this.component.bridgeUrl;
                        if (!bridgeUrl && this.component.bridgeUrls && this.props.env) {
                            bridgeUrl = this.component.bridgeUrls[this.props.env];
                        }
                        if (!bridgeUrl) {
                            return;
                        }
                        return this.getBridgeDomain(bridgeUrl).then(function(bridgeDomain) {
                            if (_src2["default"].needsBridge({
                                window: _this8.window,
                                domain: bridgeDomain
                            })) {
                                return _src2["default"].openBridge(bridgeUrl, bridgeDomain);
                            }
                        });
                    }
                }, {
                    key: "open",
                    value: function open(element) {
                        this.component.log("open_" + this.context, {
                            element: element,
                            windowName: this.childWindowName
                        });
                        this.driver.open.call(this, element);
                    }
                }, {
                    key: "elementReady",
                    value: function elementReady(element) {
                        return (0, _lib.elementReady)(element).then(_lib.noop);
                    }
                }, {
                    key: "render",
                    value: function render(element) {
                        var _this9 = this;
                        var loadUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                        return this.tryInit(function() {
                            _this9.component.log("render_" + _this9.context, {
                                context: _this9.context,
                                element: element,
                                loadUrl: loadUrl
                            });
                            var tasks = {
                                openContainer: _this9.openContainer(element),
                                getDomain: _this9.getDomain()
                            };
                            tasks.elementReady = _promise.SyncPromise["try"](function() {
                                if (element) {
                                    return _this9.elementReady(element);
                                }
                            });
                            if (_this9.driver.openOnClick) {
                                tasks.open = _this9.open(element, _this9.context);
                            } else {
                                tasks.open = _promise.SyncPromise.all([ tasks.openContainer, tasks.elementReady ]).then(function() {
                                    return _this9.open(element, _this9.context);
                                });
                            }
                            tasks.openBridge = tasks.open.then(function() {
                                return _this9.openBridge(_this9.context);
                            });
                            tasks.showContainer = tasks.openContainer.then(function() {
                                return _this9.showContainer();
                            });
                            tasks.createComponentTemplate = tasks.open.then(function() {
                                return _this9.createComponentTemplate();
                            });
                            tasks.showComponent = tasks.createComponentTemplate.then(function() {
                                return _this9.showComponent();
                            });
                            tasks.linkDomain = _promise.SyncPromise.all([ tasks.getDomain, tasks.open ]).then(function(_ref6) {
                                var _ref7 = _slicedToArray(_ref6, 1), domain = _ref7[0];
                                return _src2["default"].linkUrl(_this9.window, domain);
                            });
                            tasks.listen = _promise.SyncPromise.all([ tasks.getDomain, tasks.open ]).then(function(_ref8) {
                                var _ref9 = _slicedToArray(_ref8, 1), domain = _ref9[0];
                                _this9.listen(_this9.window, domain);
                            });
                            tasks.watchForClose = tasks.open.then(function() {
                                return _this9.watchForClose();
                            });
                            if (loadUrl) {
                                tasks.buildUrl = _this9.buildUrl();
                                tasks.loadUrl = _promise.SyncPromise.all([ tasks.buildUrl, tasks.linkDomain, tasks.listen, tasks.openBridge, tasks.createComponentTemplate ]).then(function(_ref10) {
                                    var _ref11 = _slicedToArray(_ref10, 1), url = _ref11[0];
                                    return _this9.loadUrl(url);
                                });
                                tasks.runTimeout = tasks.loadUrl.then(function() {
                                    return _this9.runTimeout();
                                });
                            }
                            return _promise.SyncPromise.hash(tasks);
                        });
                    }
                }, {
                    key: "validateRenderToParent",
                    value: function validateRenderToParent(element) {
                        var parentWindow = (0, _window.getParentComponentWindow)();
                        if (!parentWindow) {
                            throw new Error("[" + this.component.tag + "] Can not render to parent - no parent exists");
                        }
                        if (!(0, _window.isXComponentWindow)()) {
                            throw new Error("[" + this.component.tag + "] Can not render to parent - not in a child component window");
                        }
                    }
                }, {
                    key: "delegate",
                    value: function delegate(win) {
                        var _this10 = this;
                        this.delegateWindow = win;
                        this.component.log("delegate_" + this.context);
                        this.childWindowName = this.buildChildWindowName({
                            renderTo: win,
                            secureProps: true
                        });
                        var delegate = _src2["default"].send(win, _constants.POST_MESSAGE.DELEGATE + "_" + this.component.name, {
                            context: this.context,
                            options: {
                                context: this.context,
                                childWindowName: this.childWindowName,
                                props: {
                                    uid: this.props.uid,
                                    dimensions: this.props.dimensions,
                                    onClose: this.props.onClose,
                                    onDisplay: this.props.onDisplay
                                },
                                overrides: {
                                    focus: function focus() {
                                        return _this10.focus();
                                    },
                                    userClose: function userClose() {
                                        return _this10.userClose();
                                    },
                                    getDomain: function getDomain() {
                                        return _this10.getDomain();
                                    },
                                    getParentTemplate: function getParentTemplate() {
                                        return _this10.getParentTemplate();
                                    },
                                    getComponentTemplate: function getComponentTemplate() {
                                        return _this10.getComponentTemplate();
                                    }
                                }
                            }
                        }).then(function(_ref12) {
                            var data = _ref12.data;
                            _this10.clean.register(data.destroy);
                            return data;
                        })["catch"](function(err) {
                            throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + err.stack);
                        });
                        var overrides = this.driver.renderToParentOverrides;
                        var _loop = function _loop() {
                            if (_isArray4) {
                                if (_i4 >= _iterator4.length) return "break";
                                _ref13 = _iterator4[_i4++];
                            } else {
                                _i4 = _iterator4.next();
                                if (_i4.done) return "break";
                                _ref13 = _i4.value;
                            }
                            var key = _ref13;
                            var val = overrides[key];
                            if (val === _constants.DELEGATE.CALL_ORIGINAL) {
                                return "continue";
                            }
                            var original = _this10[key];
                            _this10[key] = function() {
                                var _this11 = this, _arguments2 = arguments;
                                return delegate.then(function(data) {
                                    var override = data.overrides[key];
                                    if (val === _constants.DELEGATE.CALL_DELEGATE) {
                                        return override.apply(_this11, _arguments2);
                                    }
                                    if (val instanceof Function) {
                                        return val(original, override).apply(_this11, _arguments2);
                                    }
                                    throw new Error("Expected delgate to be CALL_ORIGINAL, CALL_DELEGATE, or factory method");
                                });
                            };
                        };
                        _loop2: for (var _iterator4 = Object.keys(overrides), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
                            var _ref13;
                            var _ret = _loop();
                            switch (_ret) {
                              case "break":
                                break _loop2;

                              case "continue":
                                continue;
                            }
                        }
                    }
                }, {
                    key: "renderTo",
                    value: function renderTo(win, element, context) {
                        var _this12 = this;
                        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                        return this.tryInit(function() {
                            _this12.context = _this12.context || _this12.component.getRenderContext(element, context);
                            _this12.validateRenderToParent(element, _this12.context);
                            _this12.component.log("render_" + _this12.context + "_to_win", {
                                element: element,
                                context: _this12.context
                            });
                            _this12.delegate(win, _this12.context);
                            return _this12.render(element, _this12.context);
                        });
                    }
                }, {
                    key: "watchForClose",
                    value: function watchForClose() {
                        var _this13 = this;
                        var closeWindowListener = (0, _lib.onCloseWindow)(this.window, function() {
                            _this13.component.log("detect_close_child");
                            if (_this13.driver.errorOnCloseDuringInit) {
                                _this13.onInit.reject(new Error("Detected close during init"));
                            }
                            return _promise.SyncPromise["try"](function() {
                                return _this13.props.onClose(_constants.CLOSE_REASONS.CLOSE_DETECTED);
                            })["finally"](function() {
                                return _this13.destroy();
                            });
                        });
                        this.clean.register("destroyCloseWindowListener", closeWindowListener.cancel);
                        var unloadWindowListener = (0, _lib.addEventListener)(window, "beforeunload", function() {
                            _this13.component.log("navigate_away");
                            _client2["default"].flush();
                            closeWindowListener.cancel();
                            if (_this13.driver.destroyOnUnload) {
                                return _this13.destroyComponent();
                            }
                        });
                        this.clean.register("destroyUnloadWindowListener", unloadWindowListener.cancel);
                    }
                }, {
                    key: "loadUrl",
                    value: function loadUrl(url) {
                        this.component.log("load_url");
                        if (window.location.href.split("#")[0] === url.split("#")[0]) {
                            url = (0, _lib.extendUrl)(url, {
                                query: _defineProperty({}, (0, _lib.uniqueID)(), "1")
                            });
                        }
                        return this.driver.loadUrl.call(this, url);
                    }
                }, {
                    key: "hijack",
                    value: function hijack(targetElement) {
                        targetElement.target = this.childWindowName;
                    }
                }, {
                    key: "runTimeout",
                    value: function runTimeout() {
                        var _this14 = this;
                        if (this.props.timeout) {
                            this.timeout = setTimeout(function() {
                                _this14.component.log("timed_out", {
                                    timeout: _this14.props.timeout
                                });
                                var error = new Error("[" + _this14.component.tag + "] Loading component " + _this14.component.tag + " timed out after " + _this14.props.timeout + " milliseconds");
                                _this14.onInit.reject(error);
                                _this14.props.onTimeout(error);
                            }, this.props.timeout);
                            this.clean.register(function() {
                                clearTimeout(_this14.timeout);
                                delete _this14.timeout;
                            });
                        }
                    }
                }, {
                    key: "listeners",
                    value: function listeners() {
                        var _ref14;
                        return _ref14 = {}, _defineProperty(_ref14, _constants.POST_MESSAGE.INIT, function(source, data) {
                            var _this15 = this;
                            this.childExports = data.exports;
                            this.onInit.resolve(this);
                            if (this.timeout) {
                                clearTimeout(this.timeout);
                            }
                            return this.props.onEnter().then(function() {
                                _client2["default"].flush();
                                return {
                                    props: _this15.getPropsForChild(),
                                    context: _this15.context
                                };
                            });
                        }), _defineProperty(_ref14, _constants.POST_MESSAGE.CLOSE, function(source, data) {
                            this.close(data.reason);
                        }), _defineProperty(_ref14, _constants.POST_MESSAGE.RESIZE, function(source, data) {
                            if (this.driver.allowResize && this.component.autoResize) {
                                return this.resize(data.width, data.height);
                            }
                        }), _defineProperty(_ref14, _constants.POST_MESSAGE.HIDE, function(source, data) {
                            this.hide();
                        }), _defineProperty(_ref14, _constants.POST_MESSAGE.SHOW, function(source, data) {
                            this.show();
                        }), _defineProperty(_ref14, _constants.POST_MESSAGE.ERROR, function(source, data) {
                            this.error(new Error(data.error));
                        }), _ref14;
                    }
                }, {
                    key: "resize",
                    value: function resize(width, height) {
                        this.component.log("resize", {
                            height: height,
                            width: width
                        });
                        this.driver.resize.call(this, width, height);
                        if (this.elementTemplate || this.iframe) {
                            var overflow = void 0;
                            if (this.elementTemplate) {
                                overflow = (0, _lib.setOverflow)(this.elementTemplate, "hidden");
                            }
                            return (0, _lib.elementStoppedMoving)(this.elementTemplate || this.iframe).then(function() {
                                if (overflow) {
                                    overflow.reset();
                                }
                            });
                        }
                    }
                }, {
                    key: "restyle",
                    value: function restyle() {
                        return this.driver.restyle.call(this);
                    }
                }, {
                    key: "hide",
                    value: function hide() {
                        if (this.parentTemplate) {
                            this.parentTemplate.style.display = "none";
                        }
                        if (this.parentTemplateFrame) {
                            this.parentTemplateFrame.style.display = "none";
                        }
                        return this.driver.hide.call(this);
                    }
                }, {
                    key: "show",
                    value: function show() {
                        if (this.parentTemplate) {
                            this.parentTemplate.style.display = "block";
                        }
                        if (this.parentTemplateFrame) {
                            this.parentTemplateFrame.style.display = "block";
                        }
                        return this.driver.show.call(this);
                    }
                }, {
                    key: "userClose",
                    value: function userClose() {
                        return this.close(_constants.CLOSE_REASONS.USER_CLOSED);
                    }
                }, {
                    key: "close",
                    value: function close() {
                        var _this16 = this;
                        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.CLOSE_REASONS.PARENT_CALL;
                        return _promise.SyncPromise["try"](function() {
                            _this16.component.log("close", {
                                reason: reason
                            });
                            return _this16.props.onClose(reason);
                        }).then(function() {
                            return _promise.SyncPromise.all([ _this16.closeComponent(), _this16.closeContainer() ]);
                        }).then(function() {
                            return _this16.destroy();
                        });
                    }
                }, {
                    key: "closeContainer",
                    value: function closeContainer() {
                        var _this17 = this;
                        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.CLOSE_REASONS.PARENT_CALL;
                        return _promise.SyncPromise["try"](function() {
                            return _this17.props.onClose(reason);
                        }).then(function() {
                            return _promise.SyncPromise.all([ _this17.closeComponent(reason), _this17.hideContainer() ]);
                        }).then(function() {
                            return _this17.destroyContainer();
                        });
                    }
                }, {
                    key: "destroyContainer",
                    value: function destroyContainer() {
                        this.clean.run("destroyContainerEvents");
                        this.clean.run("destroyParentTemplate");
                    }
                }, {
                    key: "closeComponent",
                    value: function closeComponent() {
                        var _this18 = this;
                        var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.CLOSE_REASONS.PARENT_CALL;
                        this.clean.run("destroyCloseWindowListener");
                        this.clean.run("destroyUnloadWindowListener");
                        var win = this.window;
                        return _promise.SyncPromise["try"](function() {
                            return _this18.cancelContainerEvents();
                        }).then(function() {
                            return _this18.props.onClose(reason);
                        }).then(function() {
                            return _this18.hideComponent();
                        }).then(function() {
                            return _this18.destroyComponent();
                        }).then(function() {
                            if (_this18.childExports && _this18.context === _constants.CONTEXT_TYPES.POPUP && !_src2["default"].winutil.isWindowClosed(win)) {
                                _this18.childExports.close()["catch"](_lib.noop);
                            }
                        });
                    }
                }, {
                    key: "destroyComponent",
                    value: function destroyComponent() {
                        this.clean.run("destroyCloseWindowListener");
                        this.clean.run("destroyContainerEvents");
                        this.clean.run("destroyWindow");
                    }
                }, {
                    key: "showContainer",
                    value: function showContainer() {
                        if (this.parentTemplate) {
                            (0, _lib.addClass)(this.parentTemplate, _constants.CLASS_NAMES.SHOW_CONTAINER);
                            return (0, _lib.showAndAnimate)(this.parentTemplate, _constants.ANIMATION_NAMES.SHOW_CONTAINER);
                        }
                    }
                }, {
                    key: "showComponent",
                    value: function showComponent() {
                        var _this19 = this;
                        return _promise.SyncPromise["try"](function() {
                            if (_this19.props.onDisplay) {
                                return _this19.props.onDisplay();
                            }
                        }).then(function() {
                            if (_this19.elementTemplate) {
                                (0, _lib.addClass)(_this19.elementTemplate, _constants.CLASS_NAMES.SHOW_COMPONENT);
                                (0, _lib.showAndAnimate)(_this19.elementTemplate, _constants.ANIMATION_NAMES.SHOW_COMPONENT);
                            }
                        });
                    }
                }, {
                    key: "hideContainer",
                    value: function hideContainer() {
                        if (this.parentTemplate) {
                            (0, _lib.addClass)(this.parentTemplate, _constants.CLASS_NAMES.HIDE_CONTAINER);
                            (0, _lib.addClass)(this.parentTemplate, _constants.CLASS_NAMES.LOADING);
                            return (0, _lib.animateAndHide)(this.parentTemplate, _constants.ANIMATION_NAMES.HIDE_CONTAINER);
                        }
                    }
                }, {
                    key: "hideComponent",
                    value: function hideComponent() {
                        if (this.parentTemplate) {
                            (0, _lib.addClass)(this.parentTemplate, _constants.CLASS_NAMES.LOADING);
                        }
                        if (this.elementTemplate) {
                            (0, _lib.addClass)(this.elementTemplate, _constants.CLASS_NAMES.HIDE_COMPONENT);
                            return (0, _lib.animateAndHide)(this.elementTemplate, _constants.ANIMATION_NAMES.HIDE_COMPONENT);
                        }
                    }
                }, {
                    key: "focus",
                    value: function focus() {
                        if (this.window) {
                            this.component.log("focus");
                            this.window.focus();
                        } else {
                            throw new Error("No window to focus");
                        }
                    }
                }, {
                    key: "getComponentTemplate",
                    value: function getComponentTemplate() {
                        return this.component.componentTemplate;
                    }
                }, {
                    key: "createComponentTemplate",
                    value: function createComponentTemplate() {
                        var _this20 = this;
                        return _promise.SyncPromise["try"](function() {
                            return _this20.getComponentTemplate();
                        }).then(function(componentTemplate) {
                            return (0, _lib.template)(componentTemplate, {
                                id: _constants.CLASS_NAMES.XCOMPONENT + "-" + _this20.props.uid,
                                props: _this20.props,
                                CLASS: _constants.CLASS_NAMES,
                                ANIMATION: _constants.ANIMATION_NAMES
                            });
                        }).then(function(html) {
                            try {
                                _this20.window.document.open();
                                _this20.window.document.write(html);
                                _this20.window.document.close();
                            } catch (err) {
                                try {
                                    _this20.window.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                                } catch (err2) {}
                            }
                        });
                    }
                }, {
                    key: "getParentTemplate",
                    value: function getParentTemplate() {
                        return this.component.parentTemplate;
                    }
                }, {
                    key: "openContainer",
                    value: function openContainer(element) {
                        var _this21 = this;
                        return _promise.SyncPromise["try"](function() {
                            return _this21.getParentTemplate();
                        }).then(function(parentTemplate) {
                            if (parentTemplate === _parent2["default"] && _this21.context === _constants.CONTEXT_TYPES.IFRAME) {
                                return;
                            }
                            return (0, _lib.template)(parentTemplate, {
                                id: _constants.CLASS_NAMES.XCOMPONENT + "-" + _this21.props.uid,
                                props: _this21.props,
                                CLASS: _constants.CLASS_NAMES,
                                ANIMATION: _constants.ANIMATION_NAMES
                            }).then(function(html) {
                                var el = void 0;
                                if (element) {
                                    el = (0, _lib.getElement)(element);
                                    if (!el) {
                                        throw new Error("Could not find element: " + element);
                                    }
                                } else {
                                    _this21.parentTemplateFrame = (0, _lib.iframe)(null, {
                                        name: "__lightbox_container__" + (0, _lib.uniqueID)() + "__",
                                        scrolling: "no"
                                    }, document.body);
                                    _this21.parentTemplateFrame.style.display = "block";
                                    _this21.parentTemplateFrame.style.position = "fixed";
                                    _this21.parentTemplateFrame.style.top = "0";
                                    _this21.parentTemplateFrame.style.left = "0";
                                    _this21.parentTemplateFrame.style.width = "100%";
                                    _this21.parentTemplateFrame.style.height = "100%";
                                    _this21.parentTemplateFrame.style.zIndex = "2147483647";
                                    _this21.parentTemplateFrame.contentWindow.document.open();
                                    _this21.parentTemplateFrame.contentWindow.document.write("<body></body>");
                                    _this21.parentTemplateFrame.contentWindow.document.close();
                                    el = _this21.parentTemplateFrame.contentWindow.document.body;
                                }
                                _this21.parentTemplate = (0, _lib.createElement)("div", {
                                    html: html,
                                    attributes: {
                                        id: _constants.CLASS_NAMES.XCOMPONENT + "-" + _this21.props.uid
                                    },
                                    class: [ _constants.CLASS_NAMES.XCOMPONENT, _constants.CLASS_NAMES.XCOMPONENT + "-" + _this21.context ]
                                });
                                (0, _lib.hideElement)(_this21.parentTemplate);
                                el.appendChild(_this21.parentTemplate);
                                if (_this21.driver.renderedIntoParentTemplate) {
                                    _this21.elementTemplate = _this21.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0];
                                    if (!_this21.elementTemplate) {
                                        throw new Error("Could not find element to render component into");
                                    }
                                    (0, _lib.hideElement)(_this21.elementTemplate);
                                }
                                var eventHandlers = [];
                                if (_this21.driver.focusable) {
                                    eventHandlers.push((0, _lib.addEventToClass)(_this21.parentTemplate, _constants.CLASS_NAMES.FOCUS, _constants.EVENT_NAMES.CLICK, function(event) {
                                        return _this21.focus();
                                    }));
                                }
                                eventHandlers.push((0, _lib.addEventToClass)(_this21.parentTemplate, _constants.CLASS_NAMES.CLOSE, _constants.EVENT_NAMES.CLICK, function(event) {
                                    return _this21.userClose();
                                }));
                                _this21.clean.register("destroyContainerEvents", function() {
                                    for (var _iterator5 = eventHandlers, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
                                        var _ref15;
                                        if (_isArray5) {
                                            if (_i5 >= _iterator5.length) break;
                                            _ref15 = _iterator5[_i5++];
                                        } else {
                                            _i5 = _iterator5.next();
                                            if (_i5.done) break;
                                            _ref15 = _i5.value;
                                        }
                                        var eventHandler = _ref15;
                                        eventHandler.cancel();
                                    }
                                });
                                _this21.clean.register("destroyParentTemplate", function() {
                                    if (_this21.parentTemplateFrame) {
                                        _this21.parentTemplateFrame.parentNode.removeChild(_this21.parentTemplateFrame);
                                    }
                                    if (_this21.parentTemplate) {
                                        _this21.parentTemplate.parentNode.removeChild(_this21.parentTemplate);
                                    }
                                    delete _this21.parentTemplateFrame;
                                    delete _this21.parentTemplate;
                                });
                            });
                        });
                    }
                }, {
                    key: "cancelContainerEvents",
                    value: function cancelContainerEvents() {
                        this.clean.run("destroyContainerEvents");
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        var _this22 = this;
                        return _promise.SyncPromise["try"](function() {
                            if (_this22.clean.hasTasks()) {
                                _this22.component.log("destroy");
                                _client2["default"].flush();
                                return _this22.clean.all();
                            }
                        });
                    }
                }, {
                    key: "tryInit",
                    value: function tryInit(method) {
                        var _this23 = this;
                        return _promise.SyncPromise["try"](method)["catch"](function(err) {
                            _this23.onInit.reject(err);
                            throw err;
                        }).then(function() {
                            return _this23.onInit;
                        });
                    }
                }, {
                    key: "error",
                    value: function error(err) {
                        var _this24 = this;
                        this.handledErrors = this.handledErrors || [];
                        if (this.handledErrors.indexOf(err) !== -1) {
                            return;
                        }
                        this.handledErrors.push(err);
                        return _promise.SyncPromise["try"](function() {
                            _this24.component.logError("error", {
                                error: err.stack || err.toString()
                            });
                            _this24.onInit.reject(err);
                            return _this24.props.onError(err);
                        }).then(function() {
                            return _this24.destroy();
                        })["catch"](function(err2) {
                            throw new Error("An error was encountered while handling error:\n\n " + err.stack + "\n\n" + err2.stack);
                        }).then(function() {
                            throw err;
                        });
                    }
                }, {
                    key: "driver",
                    get: function get() {
                        if (!this.context) {
                            throw new Error("Context not set");
                        }
                        return _drivers.RENDER_DRIVERS[this.context];
                    }
                } ]);
                return ParentComponent;
            }(_base.BaseComponent), _applyDecoratedDescriptor(_class.prototype, "getDomain", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "getDomain"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "getBridgeDomain", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "getBridgeDomain"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "updateProps", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "updateProps"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "openBridge", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "openBridge"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "open", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "open"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "render", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "loadUrl", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "loadUrl"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "resize", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "resize"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "close", [ memoize ], Object.getOwnPropertyDescriptor(_class.prototype, "close"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "closeContainer", [ memoize ], Object.getOwnPropertyDescriptor(_class.prototype, "closeContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "destroyContainer", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "destroyContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "closeComponent", [ memoize ], Object.getOwnPropertyDescriptor(_class.prototype, "closeComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "showContainer", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "showContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "showComponent", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "showComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "hideContainer", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "hideContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "hideComponent", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "hideComponent"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "getComponentTemplate", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "getComponentTemplate"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "createComponentTemplate", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "createComponentTemplate"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "getParentTemplate", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "getParentTemplate"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "openContainer", [ memoize, promise ], Object.getOwnPropertyDescriptor(_class.prototype, "openContainer"), _class.prototype), 
            _applyDecoratedDescriptor(_class.prototype, "error", [ promise ], Object.getOwnPropertyDescriptor(_class.prototype, "error"), _class.prototype), 
            _class);
            function destroyAll() {
                var results = [];
                while (activeComponents.length) {
                    results.push(activeComponents[0].destroy());
                }
                return _promise.SyncPromise.all(results);
            }
        },
        "./node_modules/xcomponent/src/component/parent/drivers.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.RENDER_DRIVERS = undefined;
            var _RENDER_DRIVERS;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            var _window = __webpack_require__("./node_modules/xcomponent/src/component/window.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            var RENDER_DRIVERS = exports.RENDER_DRIVERS = (_RENDER_DRIVERS = {}, _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.IFRAME, {
                requiresElement: true,
                renderedIntoParentTemplate: true,
                destroyOnUnload: false,
                allowResize: true,
                openOnClick: false,
                errorOnCloseDuringInit: true,
                open: function open(element) {
                    var _this = this;
                    if (!element) {
                        throw new Error("[" + this.component.tag + "] Must specify element to render to iframe");
                    }
                    if (!(0, _lib.getElement)(element)) {
                        throw new Error("[" + this.component.tag + "] Can not find element " + element);
                    }
                    this.iframe = (0, _lib.iframe)(null, {
                        name: this.childWindowName,
                        scrolling: this.component.scrolling === false ? "no" : "yes"
                    }, this.elementTemplate || element);
                    this.elementTemplate = this.elementTemplate || this.iframe;
                    (0, _lib.hideElement)(this.elementTemplate);
                    var dimensions = this.props.dimensions || this.component.dimensions || {};
                    this.resize(dimensions.width, dimensions.height);
                    this.restyle();
                    this.window = this.iframe.contentWindow;
                    this.clean.register("destroyWindow", function() {
                        _this.window.close();
                        delete _this.window;
                        if (_this.iframe) {
                            if (_this.iframe.parentNode) {
                                _this.iframe.parentNode.removeChild(_this.iframe);
                            }
                            delete _this.iframe;
                        }
                    });
                },
                renderToParentOverrides: {
                    openContainer: _constants.DELEGATE.CALL_DELEGATE,
                    destroyComponent: _constants.DELEGATE.CALL_DELEGATE,
                    destroyContainer: _constants.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: _constants.DELEGATE.CALL_DELEGATE,
                    createComponentTemplate: _constants.DELEGATE.CALL_DELEGATE,
                    elementReady: _constants.DELEGATE.CALL_DELEGATE,
                    showContainer: _constants.DELEGATE.CALL_DELEGATE,
                    showComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hideContainer: _constants.DELEGATE.CALL_DELEGATE,
                    hideComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hide: _constants.DELEGATE.CALL_DELEGATE,
                    show: _constants.DELEGATE.CALL_DELEGATE,
                    resize: _constants.DELEGATE.CALL_DELEGATE,
                    restyle: _constants.DELEGATE.CALL_DELEGATE,
                    loadUrl: _constants.DELEGATE.CALL_DELEGATE,
                    hijackSubmit: _constants.DELEGATE.CALL_DELEGATE,
                    open: function open(original, override) {
                        return function() {
                            var _this2 = this;
                            return override.apply(this, arguments).then(function() {
                                _this2.window = _src2["default"].winutil.findFrameByName((0, _window.getParentComponentWindow)(), _this2.childWindowName);
                                if (!_this2.window) {
                                    throw new Error("Unable to find parent component iframe window");
                                }
                            });
                        };
                    }
                },
                resize: function resize(width, height) {
                    if (width) {
                        this.iframe.style.width = (0, _lib.toCSS)(width);
                    }
                    if (height) {
                        this.iframe.style.height = (0, _lib.toCSS)(height);
                    }
                },
                hide: function hide() {
                    this.iframe.style.display = "none";
                },
                show: function show() {
                    this.iframe.style.display = "block";
                },
                restyle: function restyle() {
                    this.iframe.style.backgroundColor = "transparent";
                },
                loadUrl: function loadUrl(url) {
                    this.iframe.src = url;
                }
            }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.POPUP, {
                focusable: true,
                requiresElement: false,
                renderedIntoParentTemplate: false,
                destroyOnUnload: true,
                allowResize: false,
                openOnClick: true,
                errorOnCloseDuringInit: false,
                open: function open() {
                    var _this3 = this;
                    var _ref = this.props.dimensions || this.component.dimensions || {}, width = _ref.width, height = _ref.height, x = _ref.x, y = _ref.y;
                    width = (0, _lib.isPerc)(width) ? parseInt(window.innerWidth * (0, _lib.toNum)(width) / 100, 10) : (0, 
                    _lib.toNum)(width);
                    height = (0, _lib.isPerc)(height) ? parseInt(window.innerHeight * (0, _lib.toNum)(height) / 100, 10) : (0, 
                    _lib.toNum)(height);
                    var pos = (0, _window.getPosition)({
                        width: width,
                        height: height,
                        x: x,
                        y: y
                    });
                    this.window = (0, _lib.popup)("", {
                        name: this.childWindowName,
                        width: width,
                        height: height,
                        top: pos.y,
                        left: pos.x,
                        location: 1,
                        status: 1,
                        toolbar: 0,
                        menubar: 0,
                        resizable: 1,
                        scrollbars: 1
                    });
                    this.clean.register("destroyWindow", function() {
                        if (_this3.window) {
                            _this3.window.close();
                            delete _this3.window;
                        }
                    });
                    this.resize(width, height);
                },
                resize: function resize(width, height) {
                    if (width && height) {}
                },
                hide: function hide() {
                    throw new Error("Can not hide popup");
                },
                show: function show() {
                    throw new Error("Can not show popup");
                },
                restyle: function restyle() {},
                renderToParentOverrides: {
                    openContainer: _constants.DELEGATE.CALL_DELEGATE,
                    destroyContainer: _constants.DELEGATE.CALL_DELEGATE,
                    elementReady: _constants.DELEGATE.CALL_DELEGATE,
                    showContainer: _constants.DELEGATE.CALL_DELEGATE,
                    showComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hideContainer: _constants.DELEGATE.CALL_DELEGATE,
                    hideComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hide: _constants.DELEGATE.CALL_DELEGATE,
                    show: _constants.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: _constants.DELEGATE.CALL_DELEGATE,
                    open: _constants.DELEGATE.CALL_ORIGINAL,
                    loadUrl: _constants.DELEGATE.CALL_ORIGINAL,
                    createComponentTemplate: _constants.DELEGATE.CALL_ORIGINAL,
                    destroyComponent: _constants.DELEGATE.CALL_ORIGINAL,
                    resize: _constants.DELEGATE.CALL_ORIGINAL,
                    restyle: _constants.DELEGATE.CALL_ORIGINAL
                },
                loadUrl: function loadUrl(url) {
                    this.window.location = url;
                }
            }), _defineProperty(_RENDER_DRIVERS, _constants.CONTEXT_TYPES.LIGHTBOX, {
                requiresElement: false,
                renderedIntoParentTemplate: true,
                destroyOnUnload: false,
                allowResize: true,
                openOnClick: false,
                errorOnCloseDuringInit: true,
                renderToParentOverrides: {
                    openContainer: _constants.DELEGATE.CALL_DELEGATE,
                    destroyComponent: _constants.DELEGATE.CALL_DELEGATE,
                    destroyContainer: _constants.DELEGATE.CALL_DELEGATE,
                    createComponentTemplate: _constants.DELEGATE.CALL_DELEGATE,
                    elementReady: _constants.DELEGATE.CALL_DELEGATE,
                    showContainer: _constants.DELEGATE.CALL_DELEGATE,
                    showComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hideContainer: _constants.DELEGATE.CALL_DELEGATE,
                    hideComponent: _constants.DELEGATE.CALL_DELEGATE,
                    hide: _constants.DELEGATE.CALL_DELEGATE,
                    show: _constants.DELEGATE.CALL_DELEGATE,
                    resize: _constants.DELEGATE.CALL_DELEGATE,
                    restyle: _constants.DELEGATE.CALL_DELEGATE,
                    loadUrl: _constants.DELEGATE.CALL_DELEGATE,
                    cancelContainerEvents: _constants.DELEGATE.CALL_DELEGATE,
                    open: function open(original, override) {
                        return function() {
                            var _this4 = this;
                            return override.apply(this, arguments).then(function() {
                                _this4.window = _src2["default"].winutil.findFrameByName(_this4.delegateWindow, _this4.childWindowName);
                                if (!_this4.window) {
                                    throw new Error("Unable to find parent component iframe window");
                                }
                            });
                        };
                    }
                },
                open: function open() {
                    var element = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || document.body;
                    return RENDER_DRIVERS[_constants.CONTEXT_TYPES.IFRAME].open.call(this, element);
                },
                resize: function resize(width, height) {
                    var container = this.parentTemplate.getElementsByClassName(_constants.CLASS_NAMES.ELEMENT)[0] || this.iframe;
                    if (width) {
                        container.style.width = (0, _lib.toCSS)(width);
                    }
                    if (height) {
                        container.style.height = (0, _lib.toCSS)(height);
                    }
                },
                hide: function hide() {
                    this.iframe.style.display = "none";
                },
                show: function show() {
                    this.iframe.style.display = "block";
                },
                restyle: function restyle() {},
                loadUrl: function loadUrl(url) {
                    this.iframe.src = url;
                }
            }), _RENDER_DRIVERS);
        },
        "./node_modules/xcomponent/src/component/parent/validate.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.validateProp = validateProp;
            exports.validateProps = validateProps;
            exports.validate = validate;
            function validateProp(prop, key, value, props) {
                var required = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                var hasProp = value !== null && value !== undefined && value !== "";
                if (!hasProp) {
                    if (required && prop.required !== false && !prop.hasOwnProperty("def")) {
                        throw new Error("Prop is required: " + key);
                    }
                    return;
                }
                if (value.then && prop.promise) {
                    return;
                }
                if (prop.type === "function") {
                    if (!(value instanceof Function)) {
                        throw new Error("Prop is not of type function: " + key);
                    }
                } else if (prop.type === "string") {
                    if (typeof value !== "string") {
                        if (!(prop.getter && (value instanceof Function || value && value.then))) {
                            throw new Error("Prop is not of type string: " + key);
                        }
                    }
                } else if (prop.type === "object") {
                    try {
                        JSON.stringify(value);
                    } catch (err) {
                        throw new Error("Unable to serialize prop: " + key);
                    }
                } else if (prop.type === "number") {
                    if (isNaN(parseInt(value, 10))) {
                        throw new Error("Prop is not a number: " + key);
                    }
                }
                if (typeof prop.validate === "function") {
                    prop.validate(value, props);
                }
            }
            function validateProps(component, props) {
                var required = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                props = props || {};
                for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var key = _ref;
                    var prop = component.props[key];
                    if (prop.alias && props.hasOwnProperty(prop.alias)) {
                        var value = props[prop.alias];
                        delete props[prop.alias];
                        if (!props[key]) {
                            props[key] = value;
                        }
                    }
                }
                for (var _iterator2 = Object.keys(props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var _key = _ref2;
                    if (!component.props.hasOwnProperty(_key)) {
                        throw new Error("[" + component.tag + "] Invalid prop: " + _key);
                    }
                }
                for (var _iterator3 = Object.keys(component.props), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                    var _ref3;
                    if (_isArray3) {
                        if (_i3 >= _iterator3.length) break;
                        _ref3 = _iterator3[_i3++];
                    } else {
                        _i3 = _iterator3.next();
                        if (_i3.done) break;
                        _ref3 = _i3.value;
                    }
                    var _key2 = _ref3;
                    var _prop = component.props[_key2];
                    var _value = props[_key2];
                    validateProp(_prop, _key2, _value, props, required);
                }
            }
            function validate(component, options) {
                var props = options.props || {};
                if (props.env && component.envUrls && !component.envUrls[props.env]) {
                    throw new Error("Invalid env: " + props.env);
                }
            }
        },
        "./node_modules/xcomponent/src/component/parent/props.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.normalizeProp = normalizeProp;
            exports.normalizeProps = normalizeProps;
            exports.propsToQuery = propsToQuery;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _validate = __webpack_require__("./node_modules/xcomponent/src/component/parent/validate.js");
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            function normalizeProp(component, instance, props, key, value) {
                var prop = component.props[key];
                var hasProp = props.hasOwnProperty(key) && value !== null && value !== undefined && value !== "";
                if (!hasProp && prop.def) {
                    value = prop.def instanceof Function ? prop.def.call(component, props) : prop.def;
                }
                if (!value && prop.alias && props[prop.alias]) {
                    value = props[prop.alias];
                }
                if (prop.decorate) {
                    value = prop.decorate(value);
                }
                if (prop.value) {
                    value = prop.value;
                }
                if (prop.getter) {
                    if (!value) {
                        return;
                    }
                    if (value instanceof Function) {
                        value = value.bind(instance);
                    } else {
                        var val = value;
                        value = function value() {
                            return val || _promise.SyncPromise.resolve(val);
                        };
                    }
                    value = (0, _lib.getter)(value, {
                        name: key,
                        timeout: prop.timeout
                    });
                    var _value = value;
                    value = function value() {
                        component.log("call_getter_" + key);
                        return _value.apply(this, arguments).then(function(result) {
                            component.log("return_getter_" + key);
                            (0, _validate.validateProp)(prop, key, result, props);
                            return result;
                        });
                    };
                    if (prop.memoize) {
                        var _val = (0, _lib.memoize)(value);
                        value = function value() {
                            return _val();
                        };
                    }
                    return value;
                }
                if (prop.type === "boolean") {
                    value = Boolean(value);
                } else if (prop.type === "function") {
                    if (!value) {
                        if (!value && prop.noop) {
                            value = _lib.noop;
                            if (prop.denodeify) {
                                value = (0, _lib.denodeify)(value);
                            }
                            if (prop.promisify) {
                                value = (0, _lib.promisify)(value);
                            }
                        }
                    } else {
                        value = value.bind(instance);
                        if (prop.denodeify) {
                            value = (0, _lib.denodeify)(value);
                        }
                        if (prop.promisify) {
                            value = (0, _lib.promisify)(value);
                        }
                        var original = value;
                        value = function value() {
                            component.log("call_prop_" + key);
                            return original.apply(this, arguments);
                        };
                        if (prop.once) {
                            value = (0, _lib.once)(value);
                        }
                        if (prop.memoize) {
                            value = (0, _lib.memoize)(value);
                        }
                    }
                } else if (prop.type === "string") {} else if (prop.type === "object") {} else if (prop.type === "number") {
                    if (value !== undefined) {
                        value = parseInt(value, 10);
                    }
                }
                return value;
            }
            function normalizeProps(component, instance, props) {
                var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
                props = props || {};
                var result = {};
                for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var key = _ref;
                    if (required || props.hasOwnProperty(key)) {
                        result[key] = normalizeProp(component, instance, props, key, props[key]);
                    }
                }
                return result;
            }
            function propsToQuery(propsDef, props) {
                var params = {};
                return _promise.SyncPromise.all(Object.keys(props).map(function(key) {
                    var prop = propsDef[key];
                    var queryParam = key;
                    if (typeof prop.queryParam === "string") {
                        queryParam = prop.queryParam;
                    }
                    return _promise.SyncPromise.resolve().then(function() {
                        var value = props[key];
                        if (!value) {
                            return;
                        }
                        if (!prop.queryParam) {
                            return;
                        }
                        if (prop.getter) {
                            return value.call().then(function(result) {
                                return result;
                            });
                        }
                        return value;
                    }).then(function(value) {
                        if (!value) {
                            return;
                        }
                        if (typeof prop.queryParam === "function") {
                            queryParam = prop.queryParam(value);
                        }
                        var result = void 0;
                        if (typeof value === "boolean") {
                            result = "1";
                        } else if (typeof value === "string") {
                            result = value.toString();
                        } else if (typeof value === "function") {
                            return;
                        } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                            if (prop.serialization === "json") {
                                result = JSON.stringify(value);
                            } else {
                                result = (0, _lib.dotify)(value, key);
                                for (var dotkey in result) {
                                    params[dotkey] = result[dotkey];
                                }
                                return;
                            }
                        } else if (typeof value === "number") {
                            result = value.toString();
                        }
                        params[queryParam] = result;
                    });
                })).then(function() {
                    return params;
                });
            }
        },
        "./node_modules/xcomponent/src/component/component/templates/parent.htm": function(module, exports) {
            module.exports = '<div class="{CLASS.XCOMPONENT}-overlay {CLASS.FOCUS}">\n    <a href="#{CLASS.CLOSE}" class="{CLASS.CLOSE}"></a>\n\n    <div class="{CLASS.ELEMENT}"></div>\n</div>\n\n<style>\n    #{id} .{CLASS.XCOMPONENT}-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n\n    #{id}.{CLASS.POPUP} .{CLASS.XCOMPONENT}-overlay {\n        cursor: pointer;\n    }\n\n    #{id}.{CLASS.LIGHTBOX} .{CLASS.ELEMENT} {\n        box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.4);\n        position: fixed;\n\n        top: 50%;\n        left: 50%;\n\n        transform: translate3d(-50%, -50%, 0);\n        -webkit-transform: translate3d(-50%, -50%, 0);\n        -moz-transform: translate3d(-50%, -50%, 0);\n        -o-transform: translate3d(-50%, -50%, 0);\n        -ms-transform: translate3d(-50%, -50%, 0);\n    }\n\n    #{id}.{CLASS.LIGHTBOX} iframe {\n        height: 100%;\n        width: 100%;\n    }\n\n    #{id} .{CLASS.CLOSE} {\n        position: absolute;\n        right: 16px;\n        top: 16px;\n        width: 16px;\n        height: 16px;\n        opacity: 0.6;\n    }\n\n    #{id} .{CLASS.CLOSE}:hover {\n        opacity: 1;\n    }\n\n    #{id} .{CLASS.CLOSE}:before, .{CLASS.CLOSE}:after {\n        position: absolute;\n        left: 8px;\n        content: \' \';\n        height: 16px;\n        width: 2px;\n        background-color: white;\n    }\n\n    #{id} .{CLASS.CLOSE}:before {\n        transform: rotate(45deg);\n    }\n\n    #{id} .{CLASS.CLOSE}:after {\n        transform: rotate(-45deg);\n    }\n</style>';
        },
        "./node_modules/xcomponent/src/component/delegate/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.DelegateComponent = undefined;
            var _createClass = function() {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _base = __webpack_require__("./node_modules/xcomponent/src/component/base.js");
            var _parent = __webpack_require__("./node_modules/xcomponent/src/component/parent/index.js");
            var _drivers = __webpack_require__("./node_modules/xcomponent/src/component/parent/drivers.js");
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return call && (typeof call === "object" || typeof call === "function") ? call : self;
            }
            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                }
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }
            var DelegateComponent = exports.DelegateComponent = function(_BaseComponent) {
                _inherits(DelegateComponent, _BaseComponent);
                function DelegateComponent(component, source) {
                    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    _classCallCheck(this, DelegateComponent);
                    var _this = _possibleConstructorReturn(this, (DelegateComponent.__proto__ || Object.getPrototypeOf(DelegateComponent)).call(this, component, options));
                    _this.component = component;
                    _this.source = source;
                    _this.context = options.context;
                    _this.props = options.props;
                    _this.props = {
                        uid: options.props.uid,
                        dimensions: options.props.dimensions,
                        onClose: options.props.onClose,
                        onDisplay: options.props.onDisplay
                    };
                    _this.focus = options.overrides.focus;
                    _this.userClose = options.overrides.userClose;
                    _this.getDomain = options.overrides.getDomain;
                    _this.getParentTemplate = options.overrides.getParentTemplate;
                    _this.getComponentTemplate = options.overrides.getComponentTemplate;
                    var renderToParentOverrides = _drivers.RENDER_DRIVERS[options.context].renderToParentOverrides;
                    for (var _iterator = Object.keys(renderToParentOverrides), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var key = _ref;
                        _this[key] = _parent.ParentComponent.prototype[key];
                    }
                    _this.childWindowName = options.childWindowName;
                    _parent.ParentComponent.prototype.registerActiveComponent.call(_this);
                    _this.watchForClose();
                    return _this;
                }
                _createClass(DelegateComponent, [ {
                    key: "watchForClose",
                    value: function watchForClose() {
                        var _this2 = this;
                        var closeListener = (0, _lib.onCloseWindow)(this.source, function() {
                            return _this2.destroy();
                        });
                        (0, _lib.addEventListener)(window, "beforeunload", closeListener.cancel);
                    }
                }, {
                    key: "getOverrides",
                    value: function getOverrides(context) {
                        var renderToParentOverrides = _drivers.RENDER_DRIVERS[context].renderToParentOverrides;
                        var overrides = {};
                        var self = this;
                        var _loop = function _loop() {
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) return "break";
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) return "break";
                                _ref2 = _i2.value;
                            }
                            var key = _ref2;
                            overrides[key] = function() {
                                return _parent.ParentComponent.prototype[key].apply(self, arguments);
                            };
                        };
                        for (var _iterator2 = Object.keys(renderToParentOverrides), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            var _ret = _loop();
                            if (_ret === "break") break;
                        }
                        return overrides;
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        return this.clean.all();
                    }
                }, {
                    key: "driver",
                    get: function get() {
                        if (!this.context) {
                            throw new Error("Context not set");
                        }
                        return _drivers.RENDER_DRIVERS[this.context];
                    }
                } ]);
                return DelegateComponent;
            }(_base.BaseComponent);
        },
        "./node_modules/xcomponent/src/component/component/props.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.internalProps = undefined;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var internalProps = exports.internalProps = {
                uid: {
                    type: "string",
                    def: function def() {
                        return (0, _lib.uniqueID)();
                    },
                    queryParam: true
                },
                url: {
                    type: "string",
                    required: false,
                    promise: true,
                    sendToChild: false
                },
                env: {
                    type: "string",
                    required: false,
                    queryParam: true,
                    def: function def() {
                        return this.defaultEnv;
                    }
                },
                version: {
                    type: "string",
                    required: false,
                    queryParam: true
                },
                dimensions: {
                    type: "object",
                    required: false
                },
                timeout: {
                    type: "number",
                    required: false
                },
                onDisplay: {
                    type: "function",
                    required: false,
                    noop: true,
                    promisify: true
                },
                onEnter: {
                    type: "function",
                    required: false,
                    noop: true,
                    promisify: true
                },
                onClose: {
                    type: "function",
                    required: false,
                    noop: true,
                    once: true,
                    promisify: true
                },
                onTimeout: {
                    type: "function",
                    required: false,
                    memoize: true,
                    promisify: true,
                    def: function def() {
                        return function(err) {
                            return this.props.onError(err);
                        };
                    }
                },
                onError: {
                    type: "function",
                    required: false,
                    promisify: true,
                    def: function def() {
                        return function() {};
                    },
                    once: true
                }
            };
        },
        "./node_modules/xcomponent/src/component/component/validate.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.validate = validate;
            var _constants = __webpack_require__("./node_modules/xcomponent/src/constants.js");
            function validateProps(options) {
                if (options.props && !(_typeof(options.props) === "object")) {
                    throw new Error("[" + options.tag + "] Expected options.props to be an object");
                }
                if (options.props) {
                    for (var _iterator = Object.keys(options.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var key = _ref;
                        var prop = options.props[key];
                        if (!prop || !((typeof prop === "undefined" ? "undefined" : _typeof(prop)) === "object")) {
                            throw new Error("[" + options.tag + "] Expected options.props." + key + " to be an object");
                        }
                        if (!prop.type) {
                            throw new Error("[" + options.tag + "] Expected prop.type");
                        }
                        if (_constants.PROP_TYPES_LIST.indexOf(prop.type) === -1) {
                            throw new Error("[" + options.tag + "] Expected prop.type to be one of " + _constants.PROP_TYPES_LIST.join(", "));
                        }
                        if (prop.required && prop.def) {
                            throw new Error("[" + options.tag + "] Required prop can not have a default value");
                        }
                    }
                }
            }
            function validate(options) {
                if (!options.tag || !options.tag.match(/^[a-z0-9-]+$/)) {
                    throw new Error("Invalid options.tag: " + options.tag);
                }
                validateProps(options);
                if (options.dimensions) {
                    if (typeof options.dimensions.width !== "number" && typeof options.dimensions.width !== "string") {
                        throw new Error("[" + options.tag + "] Expected options.dimensions.width to be a number or string");
                    }
                    if (typeof options.dimensions.height !== "number" && typeof options.dimensions.height !== "string") {
                        throw new Error("[" + options.tag + "] Expected options.dimensions.height to be a number or string");
                    }
                }
                if (options.contexts) {
                    var anyEnabled = false;
                    for (var _iterator2 = Object.keys(options.contexts), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref2;
                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref2 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref2 = _i2.value;
                        }
                        var context = _ref2;
                        if (_constants.CONTEXT_TYPES_LIST.indexOf(context) === -1) {
                            throw new Error("[" + options.tag + "] Unsupported context type: " + context);
                        }
                        if (options.contexts[context] || options.contexts[context] === undefined) {
                            anyEnabled = true;
                        }
                    }
                    if (!anyEnabled) {
                        throw new Error("[" + options.tag + "] No context type is enabled");
                    }
                    if (options.contexts.iframe !== false) {
                        if (!options.dimensions) {
                            throw new Error("[" + options.tag + "] dimesions.width and dimensions.height required for rendering to iframe");
                        }
                    }
                }
                if (options.defaultContext) {
                    if (_constants.CONTEXT_TYPES_LIST.indexOf(options.defaultContext) === -1) {
                        throw new Error("[" + options.tag + "] Unsupported context type: " + options.defaultContext);
                    }
                    if (options.contexts && !options.contexts[options.defaultContext]) {
                        throw new Error("[" + options.tag + "] Disallowed default context type: " + options.defaultContext);
                    }
                }
                if (options.envUrls) {
                    for (var _iterator3 = Object.keys(options.envUrls), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray3) {
                            if (_i3 >= _iterator3.length) break;
                            _ref3 = _iterator3[_i3++];
                        } else {
                            _i3 = _iterator3.next();
                            if (_i3.done) break;
                            _ref3 = _i3.value;
                        }
                        var env = _ref3;
                        if (!options.envUrls[env]) {
                            throw new Error("[" + options.tag + "] No url specified for env: " + env);
                        }
                    }
                }
                if (options.defaultEnv && !options.envUrls) {
                    throw new Error("[" + options.tag + "] options.envUrls must be set if passing in a defaultEnv");
                }
                if (options.defaultEnv && !options.envUrls[options.defaultEnv]) {
                    throw new Error("[" + options.tag + "] Invalid default env: " + options.defaultEnv);
                }
                if ((!options.url || !(typeof options.url === "string")) && !options.buildUrl) {
                    if (!options.defaultEnv || typeof options.defaultEnv !== "string") {
                        if (options.envUrls) {
                            throw new Error("[" + options.tag + "] Expected options.defaultEnv to be a string");
                        } else {
                            throw new Error("[" + options.tag + "] Expected options.url to be a string");
                        }
                    }
                }
            }
        },
        "./node_modules/xcomponent/src/component/component/templates/component.htm": function(module, exports) {
            module.exports = "";
        },
        "./src/lib/beacon.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.beacon = beacon;
            exports.checkpoint = checkpoint;
            exports.fpti = fpti;
            var _config = __webpack_require__("./src/config/index.js");
            var BEACON_URL = "https://www.paypal.com/webapps/hermes/api/logger";
            function beacon(event) {
                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                try {
                    payload.event = "ppxo_" + event;
                    payload.version = "4.0.52";
                    payload.host = window.location.host;
                    payload.uid = window.pp_uid;
                    var query = [];
                    for (var key in payload) {
                        if (payload.hasOwnProperty(key)) {
                            query.push(encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]));
                        }
                    }
                    query = query.join("&");
                    if (true) {
                        var beaconImage = new window.Image();
                        beaconImage.src = BEACON_URL + "?" + query;
                    }
                    setTimeout(function() {
                        if (_config.config.logLevel === _config.LOG_LEVEL.DEBUG) {
                            if (window.console && window.console.log) {
                                window.console.log("*", event, payload);
                            }
                        }
                    }, 1);
                } catch (err) {}
            }
            var loggedCheckpoints = [];
            function checkpoint(name) {
                var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                try {
                    var version = "4.0.52".replace(/[^0-9]+/g, "_");
                    var checkpointName = version + "_" + name;
                    var logged = loggedCheckpoints.indexOf(checkpointName) !== -1;
                    loggedCheckpoints.push(checkpointName);
                    if (logged) {
                        checkpointName = checkpointName + "_dupe";
                    }
                    return beacon(checkpointName, payload);
                } catch (err) {}
            }
            var FPTI_URL = "https://t.paypal.com/ts";
            function buildPayload() {
                return {
                    v: "checkout.js." + "4.0.52",
                    t: Date.now(),
                    g: new Date().getTimezoneOffset(),
                    flnm: "ec:hermes:",
                    shir: "main_ec_hermes_",
                    pgrp: "main:ec:hermes::incontext-merchant",
                    page: "main:ec:hermes::incontext-merchant",
                    vers: "member:hermes:",
                    qual: "incontext",
                    tmpl: "merchant:incontext"
                };
            }
            function fpti() {
                var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var query = [];
                payload = _extends({}, buildPayload(), payload);
                for (var key in payload) {
                    if (payload.hasOwnProperty(key)) {
                        query.push(encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]));
                    }
                }
                query = query.join("&");
                try {
                    var beaconImage = new window.Image();
                    beaconImage.src = FPTI_URL + "?" + query;
                } catch (err) {}
            }
        },
        "./node_modules/xcomponent/src/drivers/script.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var htmlComponent = exports.htmlComponent = {
                isActive: function isActive() {
                    return true;
                },
                register: function register(component) {
                    function render(element) {
                        if (!element || !element.tagName || element.tagName.toLowerCase() !== "script") {
                            return;
                        }
                        if (!element.attributes.type || element.attributes.type.value !== "application/x-component") {
                            return;
                        }
                        if (!element.attributes["data-component"] || element.attributes["data-component"].value !== component.tag) {
                            return;
                        }
                        component.log("instantiate_script_component");
                        var props = void 0;
                        eval("props = " + element.innerText);
                        var container = document.createElement("div");
                        element.parentNode.replaceChild(container, element);
                        component.render(props, container);
                    }
                    function scan() {
                        var scriptTags = Array.prototype.slice.call(document.getElementsByTagName("script"));
                        for (var _iterator = scriptTags, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var element = _ref;
                            render(element);
                        }
                    }
                    scan();
                    document.addEventListener("DOMContentLoaded", scan);
                    window.addEventListener("load", scan);
                    document.addEventListener("DOMNodeInserted", function(event) {
                        render(event.target);
                    });
                }
            };
        },
        "./node_modules/xcomponent/src/drivers/react.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.react = undefined;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var react = exports.react = {
                isActive: function isActive() {
                    return Boolean(window.React);
                },
                register: function register(component) {
                    component.react = window.React.createClass({
                        render: function render() {
                            return window.React.createElement("div", null);
                        },
                        componentDidMount: function componentDidMount() {
                            component.log("instantiate_react_component");
                            var el = window.ReactDOM.findDOMNode(this);
                            var parent = component.init((0, _lib.extend)({}, this.props), null, el);
                            this.setState({
                                parent: parent
                            });
                            parent.render(el);
                        },
                        componentDidUpdate: function componentDidUpdate() {
                            if (this.state && this.state.parent) {
                                this.state.parent.updateProps((0, _lib.extend)({}, this.props));
                            }
                        }
                    });
                }
            };
        },
        "./node_modules/xcomponent/src/drivers/angular.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.angular = undefined;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var angular = exports.angular = {
                isActive: function isActive() {
                    return Boolean(window.angular);
                },
                register: function register(component) {
                    window.angular.module(component.tag, []).directive((0, _lib.dasherizeToCamel)(component.tag), function() {
                        var scope = {};
                        for (var _iterator = Object.keys(component.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                            var _ref;
                            if (_isArray) {
                                if (_i >= _iterator.length) break;
                                _ref = _iterator[_i++];
                            } else {
                                _i = _iterator.next();
                                if (_i.done) break;
                                _ref = _i.value;
                            }
                            var key = _ref;
                            scope[key] = "=";
                        }
                        return {
                            scope: scope,
                            restrict: "E",
                            controller: function controller($scope, $element) {
                                component.log("instantiate_angular_component");
                                function getProps() {
                                    var instanceProps = {};
                                    for (var _iterator2 = Object.keys(scope), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                                        var _ref2;
                                        if (_isArray2) {
                                            if (_i2 >= _iterator2.length) break;
                                            _ref2 = _iterator2[_i2++];
                                        } else {
                                            _i2 = _iterator2.next();
                                            if (_i2.done) break;
                                            _ref2 = _i2.value;
                                        }
                                        var key = _ref2;
                                        instanceProps[key] = $scope[key];
                                    }
                                    return instanceProps;
                                }
                                var parent = component.init(getProps(), null, $element[0]);
                                parent.render($element[0]);
                                $scope.$watch(function() {
                                    parent.updateProps(getProps());
                                });
                            }
                        };
                    });
                }
            };
        },
        "./node_modules/xcomponent/src/drivers/ember.js": function(module, exports) {
            "use strict";
        },
        "./src/api/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _rest = __webpack_require__("./src/api/rest.js");
            Object.keys(_rest).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _rest[key];
                    }
                });
            });
        },
        "./src/api/rest.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.rest = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.createBillingToken = createBillingToken;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _Base = __webpack_require__("./node_modules/Base64/base64.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _components = __webpack_require__("./src/components/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var proxyRest = {};
            var createAccessToken = (0, _lib.memoize)(function(env, client) {
                _client2["default"].info("rest_api_create_access_token");
                env = env || _config.config.env;
                var clientID = client[env];
                if (!clientID) {
                    throw new Error("Client ID not found for env: " + env);
                }
                if (proxyRest.createAccessToken && !proxyRest.createAccessToken.source.closed) {
                    return proxyRest.createAccessToken(env, client);
                }
                var basicAuth = (0, _Base.btoa)(clientID + ":");
                return (0, _lib.request)({
                    method: "post",
                    url: _config.config.authApiUrls[env],
                    headers: {
                        Authorization: "Basic " + basicAuth
                    },
                    data: {
                        grant_type: "client_credentials"
                    }
                }).then(function(res) {
                    if (res && res.error === "invalid_client") {
                        throw new Error("Auth Api invalid " + env + " client id: " + clientID + ":\n\n" + JSON.stringify(res, null, 4));
                    }
                    if (!res || !res.access_token) {
                        throw new Error("Auth Api response error:\n\n" + JSON.stringify(res, null, 4));
                    }
                    return res.access_token;
                });
            }, {
                time: 10 * 60 * 1e3
            });
            var createExperienceProfile = (0, _lib.memoize)(function(env, client) {
                var experienceDetails = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                _client2["default"].info("rest_api_create_experience_profile");
                env = env || _config.config.env;
                var clientID = client[env];
                if (!clientID) {
                    throw new Error("Client ID not found for env: " + env);
                }
                if (proxyRest.createExperienceProfile && !proxyRest.createExperienceProfile.source.closed) {
                    return proxyRest.createExperienceProfile(env, client, experienceDetails);
                }
                experienceDetails.temporary = true;
                experienceDetails.name = experienceDetails.name ? experienceDetails.name + "_" + Math.random().toString() : Math.random().toString();
                return createAccessToken(env, client).then(function(accessToken) {
                    return (0, _lib.request)({
                        method: "post",
                        url: _config.config.experienceApiUrls[env],
                        headers: {
                            Authorization: "Bearer " + accessToken
                        },
                        json: experienceDetails
                    });
                }).then(function(res) {
                    if (res && res.error) {
                        throw new Error(res.error);
                    }
                    if (!res.id) {
                        throw new Error("No id in experience profile response:\n\n" + JSON.stringify(res, null, 4));
                    }
                    return res.id;
                });
            }, {
                time: 10 * 60 * 1e3
            });
            function createCheckoutToken(env, client, paymentDetails, experienceDetails) {
                _client2["default"].info("rest_api_create_checkout_token");
                env = env || _config.config.env;
                var clientID = client[env];
                if (!clientID) {
                    throw new Error("Client ID not found for env: " + env);
                }
                if (proxyRest.createCheckoutToken && !proxyRest.createCheckoutToken.source.closed) {
                    return proxyRest.createCheckoutToken(env, client, paymentDetails, experienceDetails);
                }
                paymentDetails = _extends({}, paymentDetails);
                paymentDetails.intent = paymentDetails.intent || "sale";
                paymentDetails.redirect_urls = paymentDetails.redirect_urls || {};
                paymentDetails.redirect_urls.return_url = paymentDetails.redirect_urls.return_url || window.location.protocol + "//" + window.location.host;
                paymentDetails.redirect_urls.cancel_url = paymentDetails.redirect_urls.cancel_url || window.location.protocol + "//" + window.location.host;
                paymentDetails.payer = paymentDetails.payer || {};
                paymentDetails.payer.payment_method = paymentDetails.payer.payment_method || "paypal";
                return createAccessToken(env, client).then(function(accessToken) {
                    return _promise.SyncPromise["try"](function() {
                        if (experienceDetails) {
                            return createExperienceProfile(env, client, experienceDetails);
                        }
                    }).then(function(experienceID) {
                        if (experienceID) {
                            paymentDetails.experience_profile_id = experienceID;
                        }
                        return (0, _lib.request)({
                            method: "post",
                            url: _config.config.paymentApiUrls[env],
                            headers: {
                                Authorization: "Bearer " + accessToken
                            },
                            json: paymentDetails
                        });
                    });
                }).then(function(res) {
                    if (res && res.id) {
                        return res.id;
                    }
                    throw new Error("Payment Api response error:\n\n" + JSON.stringify(res, null, 4));
                });
            }
            function createBillingToken(env, client, billingDetails, experienceDetails) {
                _client2["default"].info("rest_api_create_billing_token");
                env = env || _config.config.env;
                var clientID = client[env];
                if (!clientID) {
                    throw new Error("Client ID not found for env: " + env);
                }
                if (proxyRest.createBillingToken && !proxyRest.createBillingToken.source.closed) {
                    return proxyRest.createBillingToken(env, client, billingDetails, experienceDetails);
                }
                billingDetails = _extends({}, billingDetails);
                billingDetails.plan = billingDetails.plan || {};
                billingDetails.plan.merchant_preferences = billingDetails.plan.merchant_preferences || {};
                billingDetails.plan.merchant_preferences.return_url = billingDetails.plan.merchant_preferences.return_url || window.location.protocol + "//" + window.location.host;
                billingDetails.plan.merchant_preferences.cancel_url = billingDetails.plan.merchant_preferences.cancel_url || window.location.protocol + "//" + window.location.host;
                billingDetails.payer = billingDetails.payer || {};
                billingDetails.payer.payment_method = billingDetails.payer.payment_method || "paypal";
                return createAccessToken(env, client).then(function(accessToken) {
                    return _promise.SyncPromise["try"](function() {
                        if (experienceDetails) {
                            return createExperienceProfile(env, client, experienceDetails);
                        }
                    }).then(function(experienceID) {
                        if (experienceID) {
                            billingDetails.experience_profile_id = experienceID;
                        }
                        return (0, _lib.request)({
                            method: "post",
                            url: _config.config.billingApiUrls[env],
                            headers: {
                                Authorization: "Bearer " + accessToken
                            },
                            json: billingDetails
                        });
                    });
                }).then(function(res) {
                    if (res && res.token_id) {
                        return res.token_id;
                    }
                    throw new Error("Billing Api response error:\n\n" + JSON.stringify(res, null, 4));
                });
            }
            var rest = exports.rest = {
                payment: {
                    create: createCheckoutToken
                },
                billingAgreement: {
                    create: createBillingToken
                },
                experience: {
                    create: createExperienceProfile
                }
            };
            var PROXY_REST = "proxy_rest";
            if (_src2["default"].isBridge() || _components.Button.isChild()) {
                _src2["default"].sendToParent(PROXY_REST, {
                    createAccessToken: createAccessToken,
                    createExperienceProfile: createExperienceProfile,
                    createCheckoutToken: createCheckoutToken,
                    createBillingToken: createBillingToken
                })["catch"](function() {});
            } else {
                _src2["default"].on(PROXY_REST, {
                    domain: _config.config.paypal_domain_regex
                }, function(_ref) {
                    var data = _ref.data;
                    proxyRest = data;
                });
            }
        },
        "./node_modules/Base64/base64.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function() {
                var object = true ? exports : self;
                var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                function InvalidCharacterError(message) {
                    this.message = message;
                }
                InvalidCharacterError.prototype = new Error();
                InvalidCharacterError.prototype.name = "InvalidCharacterError";
                object.btoa || (object.btoa = function(input) {
                    var str = String(input);
                    for (var block, charCode, idx = 0, map = chars, output = ""; str.charAt(idx | 0) || (map = "=", 
                    idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                        charCode = str.charCodeAt(idx += 3 / 4);
                        if (charCode > 255) {
                            throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                        }
                        block = block << 8 | charCode;
                    }
                    return output;
                });
                object.atob || (object.atob = function(input) {
                    var str = String(input).replace(/=+$/, "");
                    if (str.length % 4 == 1) {
                        throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
                    }
                    for (var bc = 0, bs, buffer, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, 
                    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
                        buffer = chars.indexOf(buffer);
                    }
                    return output;
                });
            })();
        },
        "./src/lib/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _device = __webpack_require__("./src/lib/device.js");
            Object.keys(_device).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _device[key];
                    }
                });
            });
            var _util = __webpack_require__("./src/lib/util.js");
            Object.keys(_util).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _util[key];
                    }
                });
            });
            var _logger = __webpack_require__("./src/lib/logger.js");
            Object.keys(_logger).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _logger[key];
                    }
                });
            });
            var _eligibility = __webpack_require__("./src/lib/eligibility.js");
            Object.keys(_eligibility).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _eligibility[key];
                    }
                });
            });
            var _errors = __webpack_require__("./src/lib/errors.js");
            Object.keys(_errors).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _errors[key];
                    }
                });
            });
            var _dom = __webpack_require__("./src/lib/dom.js");
            Object.keys(_dom).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _dom[key];
                    }
                });
            });
            var _http = __webpack_require__("./src/lib/http.js");
            Object.keys(_http).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _http[key];
                    }
                });
            });
            var _beacon = __webpack_require__("./src/lib/beacon.js");
            Object.keys(_beacon).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _beacon[key];
                    }
                });
            });
            var _throttle = __webpack_require__("./src/lib/throttle.js");
            Object.keys(_throttle).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _throttle[key];
                    }
                });
            });
        },
        "./src/lib/device.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getUserAgent = getUserAgent;
            exports.isDevice = isDevice;
            exports.isWebView = isWebView;
            exports.getAgent = getAgent;
            exports.isOperaMini = isOperaMini;
            exports.isAndroid = isAndroid;
            exports.isIos = isIos;
            exports.isGoogleSearchApp = isGoogleSearchApp;
            exports.isIosWebview = isIosWebview;
            exports.isAndroidWebview = isAndroidWebview;
            exports.isIE = isIE;
            exports.isIEIntranet = isIEIntranet;
            exports.supportsPopups = supportsPopups;
            function getUserAgent() {
                return window.navigator.mockUserAgent || window.navigator.userAgent;
            }
            function isDevice() {
                var userAgent = getUserAgent();
                if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)) {
                    return true;
                }
                return false;
            }
            function isWebView() {
                var userAgent = getUserAgent();
                return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
            }
            function getAgent(agent) {
                var ua = getUserAgent();
                var tem = void 0;
                var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(M[1])) {
                    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                    return [ "IE", tem[1] || "" ];
                }
                if (M[1] === "Chrome") {
                    tem = ua.match(/\bOPR\/(\d+)/);
                    if (tem) {
                        return [ "Opera", tem[1] ];
                    }
                }
                M = M[2] ? [ M[1], M[2] ] : [ window.navigator.appName, window.navigator.appVersion, "-?" ];
                if (tem = ua.match(/version\/(\d+(\.\d{1,2}))/i)) {
                    M.splice(1, 1, tem[1]);
                }
                return M;
            }
            function isOperaMini() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                return ua.indexOf("Opera Mini") > -1;
            }
            function isAndroid() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                return /Android/.test(ua);
            }
            function isIos() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                return /iPhone|iPod|iPad/.test(ua);
            }
            function isGoogleSearchApp() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                return /\bGSA\b/.test(ua);
            }
            function isIosWebview() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                if (isIos(ua)) {
                    if (isGoogleSearchApp(ua)) {
                        return true;
                    }
                    return /.+AppleWebKit(?!.*Safari)/.test(ua);
                }
                return false;
            }
            function isAndroidWebview() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                if (isAndroid(ua)) {
                    return /Version\/[\d\.]+/.test(ua) && !isOperaMini(ua);
                }
                return false;
            }
            function isIE() {
                return Boolean(window.document.documentMode);
            }
            function isIEIntranet() {
                if (!isIE()) {
                    return false;
                }
                try {
                    var status = window.status;
                    window.status = "testIntranetMode";
                    if (window.status === "testIntranetMode") {
                        window.status = status;
                        return true;
                    }
                    return false;
                } catch (err) {
                    return false;
                }
            }
            function supportsPopups() {
                var ua = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getUserAgent();
                return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua));
            }
        },
        "./src/lib/logger.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.initLogger = initLogger;
            exports.setLogLevel = setLogLevel;
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _config = __webpack_require__("./src/config/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function initLogger() {
                _client2["default"].addPayloadBuilder(function() {
                    return {
                        host: window.location.host,
                        path: window.location.pathname,
                        env: _config.config.env,
                        country: _config.config.locale.country,
                        lang: _config.config.locale.lang,
                        uid: window.pp_uid,
                        ver: "4.0.52"
                    };
                });
                _client2["default"].addMetaBuilder(function() {
                    return {
                        state: _config.config.state
                    };
                });
                _client2["default"].init({
                    uri: _config.config.loggerUrl,
                    heartbeat: false,
                    logPerformance: false,
                    prefix: "ppxo"
                });
            }
            function setLogLevel(logLevel) {
                if (_client2["default"].logLevels.indexOf(logLevel) === -1) {
                    throw new Error("Invalid logLevel: " + logLevel);
                }
                _config.config.logLevel = logLevel;
                _client2["default"].config.logLevel = logLevel;
                _src2["default"].CONFIG.LOG_LEVEL = logLevel;
                window.LOG_LEVEL = logLevel;
            }
        },
        "./src/lib/eligibility.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.isEligible = isEligible;
            var _device = __webpack_require__("./src/lib/device.js");
            var _config = __webpack_require__("./src/config/index.js");
            function isEligible() {
                var currentAgent = (0, _device.getAgent)();
                if ((typeof currentAgent === "undefined" ? "undefined" : _typeof(currentAgent)) === "object" && currentAgent.length === 2) {
                    if (parseFloat(currentAgent[1]) < _config.config.SUPPORTED_AGENTS[currentAgent[0]]) {
                        return false;
                    }
                }
                return !(0, _device.isWebView)();
            }
        },
        "./src/lib/errors.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.checkForCommonErrors = checkForCommonErrors;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _device = __webpack_require__("./src/lib/device.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function warn(err) {
                if (window.console) {
                    if (window.console.warn) {
                        return window.console.warn(err);
                    }
                    if (window.console.log) {
                        return window.console.log(err);
                    }
                }
            }
            function checkForCommonErrors() {
                if (JSON.stringify([]) !== "[]") {
                    if (Array.prototype.toJSON) {
                        warn("Custom Array.prototype.toJSON is causing incorrect json serialization of arrays. This is likely to cause issues. Probable cause is Prototype.js");
                    } else {
                        warn("JSON.stringify is doing incorrect serialization of arrays. This is likely to cause issues.");
                    }
                    _client2["default"].warn("json_stringify_array_broken");
                }
                if (JSON.stringify({}) !== "{}") {
                    warn("JSON.stringify is doing incorrect serialization of objects. This is likely to cause issues.");
                    _client2["default"].warn("json_stringify_object_broken");
                }
                if ((0, _device.isIEIntranet)()) {
                    _client2["default"].warn("ie_intranet_mode");
                }
            }
        },
        "./src/lib/dom.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.parseQuery = undefined;
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            exports.loadScript = loadScript;
            exports.isNodeList = isNodeList;
            exports.isElement = isElement;
            exports.getElement = getElement;
            exports.getElements = getElements;
            exports.onDocumentReady = onDocumentReady;
            exports.getQueryParam = getQueryParam;
            exports.urlWillRedirectPage = urlWillRedirectPage;
            exports.extendUrl = extendUrl;
            exports.redirect = redirect;
            exports.hasMetaViewPort = hasMetaViewPort;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _util = __webpack_require__("./src/lib/util.js");
            var _device = __webpack_require__("./src/lib/device.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function isDocumentReady() {
                return Boolean(document.body) && document.readyState === "complete";
            }
            var documentReady = new _promise.SyncPromise(function(resolve) {
                if (isDocumentReady()) {
                    return resolve();
                }
                var interval = setInterval(function() {
                    if (isDocumentReady()) {
                        clearInterval(interval);
                        return resolve();
                    }
                }, 10);
            });
            var documentBody = documentReady.then(function() {
                return document.body;
            });
            function loadScript(src) {
                var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                return documentBody.then(function(body) {
                    return new _promise.SyncPromise(function(resolve, reject) {
                        var script = document.createElement("script");
                        script.onload = function() {
                            resolve();
                        };
                        script.onreadystatechange = function() {
                            if (this.readyState === "complete" || this.readyState === "loaded") {
                                resolve();
                            }
                        };
                        var scriptLoadError = new Error("script_loading_error");
                        script.onerror = function(event) {
                            return reject(scriptLoadError);
                        };
                        if (timeout) {
                            setTimeout(function() {
                                return reject(new Error("script_loading_timed_out"));
                            }, timeout);
                        }
                        script.setAttribute("src", src);
                        body.appendChild(script);
                    });
                });
            }
            function isNodeList(nodes) {
                var result = Object.prototype.toString.call(nodes);
                if (result === "[object HTMLCollection]" || result === "[object NodeList]") {
                    return true;
                }
                return false;
            }
            function isElement(item) {
                return item instanceof HTMLElement;
            }
            function getElement(item) {
                if (!item) {
                    return;
                }
                if (item instanceof HTMLElement) {
                    return item;
                }
                if (typeof item === "string") {
                    if (document.querySelector) {
                        var result = document.querySelector(item);
                        if (result) {
                            return result;
                        }
                    }
                    return document.getElementById(item);
                }
            }
            function getElements(collection) {
                if (!collection) {
                    return [];
                }
                if (collection instanceof HTMLElement || typeof collection === "string") {
                    var element = getElement(collection);
                    if (element) {
                        return [ element ];
                    }
                    return [];
                }
                if (Array.isArray(collection) || collection instanceof NodeList || collection instanceof HTMLCollection) {
                    var result = [];
                    for (var i = 0; i < collection.length; i++) {
                        var el = getElement(collection[i]);
                        if (el) {
                            result.push(el);
                        }
                    }
                    return result;
                }
                return [];
            }
            function onDocumentReady(method) {
                return documentReady.then(method);
            }
            var parseQuery = exports.parseQuery = (0, _util.memoize)(function(queryString) {
                var params = {};
                if (!queryString) {
                    return params;
                }
                if (queryString.indexOf("=") === -1) {
                    throw new Error("Can not parse query string params: " + queryString);
                }
                for (var _iterator = queryString.split("&"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var pair = _ref;
                    pair = pair.split("=");
                    if (pair[0] && pair[1]) {
                        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                    }
                }
                return params;
            });
            function getQueryParam(name) {
                return parseQuery(window.location.search.slice(1))[name];
            }
            function urlWillRedirectPage(url) {
                if (url.indexOf("#") === -1) {
                    return true;
                }
                if (url.indexOf("#") === 0) {
                    return false;
                }
                if (url.split("#")[0] === window.location.href.split("#")[0]) {
                    return false;
                }
                return true;
            }
            function extendUrl(url) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var hasHash = url.indexOf("#") > 0;
                var _url$split = url.split("#"), _url$split2 = _slicedToArray(_url$split, 2), serverUrl = _url$split2[0], hash = _url$split2[1];
                if (hash && !serverUrl) {
                    var _ref2 = [ "#" + hash, "" ];
                    serverUrl = _ref2[0];
                    hash = _ref2[1];
                }
                var _serverUrl$split = serverUrl.split("?"), _serverUrl$split2 = _slicedToArray(_serverUrl$split, 2), originalUrl = _serverUrl$split2[0], originalQueryString = _serverUrl$split2[1];
                if (originalQueryString) {
                    var originalQuery = parseQuery(originalQueryString);
                    for (var _key in originalQuery) {
                        if (!params.hasOwnProperty(_key)) {
                            params[_key] = originalQuery[_key];
                        }
                    }
                }
                var newQueryString = Object.keys(params).sort().map(function(key) {
                    if (key && params[key]) {
                        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
                    }
                }).filter(Boolean).join("&");
                var newUrl = originalUrl;
                if (newQueryString) {
                    newUrl = newUrl + "?" + newQueryString;
                }
                if (hasHash) {
                    newUrl = newUrl + "#" + (hash || "");
                }
                return newUrl;
            }
            function redirect() {
                var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
                var url = arguments[1];
                return new _promise.SyncPromise(function(resolve) {
                    _client2["default"].info("redirect", {
                        url: url
                    });
                    setTimeout(function() {
                        win.location = url;
                        if (!urlWillRedirectPage(url)) {
                            resolve();
                        }
                    }, 1);
                });
            }
            function hasMetaViewPort() {
                var meta = document.querySelector("meta[name=viewport]");
                if ((0, _device.isDevice)() && window.screen.width < 660 && !meta) {
                    return false;
                }
                return true;
            }
        },
        "./src/lib/http.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.request = request;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var HEADERS = {
                CONTENT_TYPE: "content-type",
                ACCEPT: "accept"
            };
            var headerBuilders = [];
            function request(_ref) {
                var url = _ref.url, _ref$method = _ref.method, method = _ref$method === undefined ? "get" : _ref$method, _ref$headers = _ref.headers, headers = _ref$headers === undefined ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = _ref$win === undefined ? window : _ref$win;
                return new _promise.SyncPromise(function(resolve, reject) {
                    if (json && data || json && body || data && json) {
                        throw new Error("Only options.json or options.data or options.body should be passed");
                    }
                    var normalizedHeaders = {};
                    for (var _iterator = Object.keys(headers), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref2;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref2 = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref2 = _i.value;
                        }
                        var _key2 = _ref2;
                        normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                    }
                    if (json) {
                        normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/json";
                    } else if (data || body) {
                        normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/x-www-form-urlencoded; charset=utf-8";
                    }
                    normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || "application/json";
                    for (var _iterator2 = headerBuilders, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                        var _ref3;
                        if (_isArray2) {
                            if (_i2 >= _iterator2.length) break;
                            _ref3 = _iterator2[_i2++];
                        } else {
                            _i2 = _iterator2.next();
                            if (_i2.done) break;
                            _ref3 = _i2.value;
                        }
                        var headerBuilder = _ref3;
                        var builtHeaders = headerBuilder();
                        for (var _iterator3 = Object.keys(builtHeaders), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
                            var _ref4;
                            if (_isArray3) {
                                if (_i3 >= _iterator3.length) break;
                                _ref4 = _iterator3[_i3++];
                            } else {
                                _i3 = _iterator3.next();
                                if (_i3.done) break;
                                _ref4 = _i3.value;
                            }
                            var _key3 = _ref4;
                            normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                        }
                    }
                    var xhr = new win.XMLHttpRequest();
                    xhr.addEventListener("load", function() {
                        if (!this.status || this.status >= 400) {
                            return reject(this);
                        }
                        var result = void 0;
                        try {
                            result = JSON.parse(this.responseText);
                        } catch (err) {
                            return reject(err);
                        }
                        return resolve(result);
                    }, false);
                    xhr.addEventListener("error", function(evt) {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString()));
                    }, false);
                    xhr.open(method, url, true);
                    for (var _key in normalizedHeaders) {
                        xhr.setRequestHeader(_key, normalizedHeaders[_key]);
                    }
                    if (json) {
                        body = JSON.stringify(json);
                    } else if (data) {
                        body = Object.keys(data).map(function(key) {
                            return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                        }).join("&");
                    }
                    xhr.send(body);
                });
            }
            request.get = function(url) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return request(_extends({
                    method: "get",
                    url: url
                }, options));
            };
            request.post = function(url, data) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return request(_extends({
                    method: "post",
                    url: url,
                    data: data
                }, options));
            };
            request.addHeaderBuilder = function(method) {
                headerBuilders.push(method);
            };
        },
        "./src/lib/throttle.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.getThrottle = getThrottle;
            exports.getReturnToken = getReturnToken;
            var _beacon = __webpack_require__("./src/lib/beacon.js");
            var _util = __webpack_require__("./src/lib/util.js");
            var uids = {};
            function getUID(name, uid) {
                if (!uid) {
                    if (uids[name]) {
                        uid = uids[name];
                    } else {
                        try {
                            if (window.sessionStorage) {
                                uid = window.sessionStorage.getItem("__throttle_uid_" + name + "__");
                            }
                        } catch (err) {}
                    }
                }
                if (!uid) {
                    uid = (0, _util.uniqueID)();
                }
                uids[name] = uid;
                try {
                    if (window.sessionStorage) {
                        window.sessionStorage.setItem("__throttle_uid_" + name + "__", uid);
                    }
                } catch (err) {}
                return uid;
            }
            function getThrottle(name, sample, id) {
                var uid = getUID(name, id);
                var throttle = (0, _util.hashStr)(name + "_" + uid) % 1e4;
                var group = void 0;
                if (throttle < sample) {
                    group = "test";
                } else if (sample >= 5e3 || sample <= throttle && throttle < sample * 2) {
                    group = "control";
                } else {
                    group = "throttle";
                }
                var treatment = name + "_" + group;
                var logged = {};
                return {
                    isEnabled: function isEnabled() {
                        return group === "test";
                    },
                    isDisabled: function isDisabled() {
                        return group !== "test";
                    },
                    getTreatment: function getTreatment() {
                        return treatment;
                    },
                    log: function log(checkpointName) {
                        var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var event = treatment + "_" + checkpointName;
                        if (!logged[checkpointName]) {
                            (0, _beacon.checkpoint)(event, _extends({}, payload, {
                                expuid: uid
                            }));
                            (0, _beacon.fpti)(_extends({}, payload, {
                                expuid: uid,
                                eligibility_reason: event
                            }));
                            logged[checkpointName] = true;
                        }
                        return this;
                    },
                    logStart: function logStart() {
                        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        return this.log("start", payload);
                    },
                    logComplete: function logComplete() {
                        var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        return this.log("complete", payload);
                    }
                };
            }
            function getReturnToken() {
                var token = (0, _util.match)(window.location.href, /token=((EC-)?[A-Z0-9]+)/);
                var payer = (0, _util.match)(window.location.href, /PayerID=([A-Z0-9]+)/);
                if (token && payer) {
                    return token;
                }
            }
        },
        "./src/components/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _button = __webpack_require__("./src/components/button/index.js");
            Object.keys(_button).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _button[key];
                    }
                });
            });
            var _checkout = __webpack_require__("./src/components/checkout/index.js");
            Object.keys(_checkout).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _checkout[key];
                    }
                });
            });
            var _common = __webpack_require__("./src/components/common.js");
            Object.keys(_common).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _common[key];
                    }
                });
            });
        },
        "./src/components/button/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _component = __webpack_require__("./src/components/button/component.js");
            Object.keys(_component).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _component[key];
                    }
                });
            });
        },
        "./src/components/button/component.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Button = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _src = __webpack_require__("./node_modules/xcomponent/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _checkout = __webpack_require__("./src/components/checkout/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _common = __webpack_require__("./src/components/common.js");
            var _parentTemplate = __webpack_require__("./src/components/button/parentTemplate.js");
            var _componentTemplate = __webpack_require__("./src/components/button/componentTemplate.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var Button = exports.Button = _src2["default"].create({
                tag: "paypal-button",
                name: "ppbutton",
                buildUrl: function buildUrl(instance) {
                    var env = instance.props.env || _config.config.env;
                    return _config.config.buttonUrls[env];
                },
                contexts: {
                    iframe: true,
                    lightbox: false,
                    popup: false
                },
                scrolling: false,
                parentTemplate: _parentTemplate.parentTemplate,
                componentTemplate: _componentTemplate.componentTemplate,
                get version() {
                    return _config.config.ppobjects ? "4" : "4.0.52";
                },
                get domains() {
                    return _config.config.paypalDomains;
                },
                props: {
                    env: {
                        type: "string",
                        required: false,
                        queryParam: true,
                        def: function def() {
                            return _config.config.env;
                        },
                        validate: function validate(env) {
                            if (!_config.config.paypalUrls[env]) {
                                throw new Error("Invalid env: " + env);
                            }
                        }
                    },
                    client: {
                        type: "object",
                        required: false,
                        def: function def() {
                            return {};
                        },
                        sendToChild: false,
                        validate: function validate(client, props) {
                            var env = props.env || _config.config.env;
                            if (!client[env]) {
                                throw new Error("Client ID not found for env: " + env);
                            }
                            if (client[env].match(/^(.)\1+$/)) {
                                throw new Error("Invalid client ID: " + client[env]);
                            }
                        }
                    },
                    stage: {
                        type: "string",
                        required: false,
                        queryParam: true,
                        def: function def(props) {
                            var env = props.env || _config.config.env;
                            if (env === _config.ENV.STAGE || env === _config.ENV.LOCAL) {
                                return _config.config.stage;
                            }
                        }
                    },
                    payment: {
                        type: "string",
                        required: true,
                        getter: true,
                        memoize: false,
                        timeout: false ? 500 : 10 * 1e3,
                        alias: "billingAgreement"
                    },
                    commit: {
                        type: "boolean",
                        required: false
                    },
                    onAuth: {
                        type: "function",
                        required: false,
                        decorate: function decorate(original) {
                            return function() {
                                this.onAuth = this.onAuth || new _promise.SyncPromise();
                                this.onAuth.resolve();
                            };
                        }
                    },
                    onRemembered: {
                        type: "function",
                        required: false,
                        decorate: function decorate(original) {
                            return function() {
                                this.onAuth = this.onAuth || new _promise.SyncPromise();
                                this.onAuth.resolve();
                            };
                        }
                    },
                    onDisplay: {
                        type: "function",
                        required: false,
                        decorate: function decorate(original) {
                            return function() {
                                var _this = this, _arguments = arguments;
                                return _promise.SyncPromise["try"](function() {
                                    _this.onAuth = _this.onAuth || new _promise.SyncPromise();
                                    if (_this.props.displayTo === _config.USERS.REMEMBERED) {
                                        return _this.onAuth;
                                    }
                                }).then(function() {
                                    if (original) {
                                        return original.apply(_this, _arguments);
                                    }
                                });
                            };
                        }
                    },
                    onAuthorize: {
                        type: "function",
                        required: true,
                        decorate: function decorate(original) {
                            if (original) {
                                return function(data, actions) {
                                    var redirect = function redirect(win, url) {
                                        return _promise.SyncPromise.all([ (0, _lib.redirect)(win || window.top, url || data.returnUrl), actions.close() ]);
                                    };
                                    return original.call(this, data, _extends({}, actions, {
                                        redirect: redirect
                                    }));
                                };
                            }
                        }
                    },
                    onCancel: {
                        type: "function",
                        required: false,
                        noop: true,
                        decorate: function decorate(original) {
                            if (original) {
                                return function(data, actions) {
                                    var redirect = function redirect(win, url) {
                                        return _promise.SyncPromise.all([ (0, _lib.redirect)(win || window.top, url || data.cancelUrl), actions.close() ]);
                                    };
                                    return original.call(this, data, _extends({}, actions, {
                                        redirect: redirect
                                    }));
                                };
                            }
                        }
                    },
                    onClick: {
                        type: "function",
                        required: false
                    },
                    dimensions: {
                        type: "object",
                        required: false,
                        def: function def(props) {
                            var size = props.style && props.style.size || "small";
                            return {
                                tiny: {
                                    width: "80px",
                                    height: "22px"
                                },
                                small: {
                                    width: "148px",
                                    height: "42px"
                                },
                                medium: {
                                    width: "230px",
                                    height: "48px"
                                },
                                large: {
                                    width: "380px",
                                    height: "60px"
                                },
                                responsive: {
                                    width: "100%",
                                    height: "48px"
                                }
                            }[size];
                        }
                    },
                    locale: {
                        type: "string",
                        required: false,
                        queryParam: "locale.x"
                    },
                    style: {
                        type: "object",
                        required: false,
                        queryParam: true,
                        alias: "buttonStyle",
                        def: function def() {
                            return {
                                color: "gold",
                                shape: "pill",
                                size: "small",
                                label: "checkout"
                            };
                        },
                        validate: function validate(style) {
                            if (style.size && _config.config.buttonStyles.size.indexOf(style.size) === -1) {
                                throw new Error("Invalid button size: " + style.size);
                            }
                            if (style.label && _config.config.buttonStyles.label.indexOf(style.label) === -1) {
                                throw new Error("Invalid button label: " + style.label);
                            }
                            if (style.label === "credit" && style.size === "tiny") {
                                throw new Error("Invalid " + style.label + " button size: " + style.size);
                            }
                            if (style.label === "credit" && style.color) {
                                throw new Error("Custom colors for " + style.label + " button are not supported");
                            }
                        }
                    },
                    displayTo: {
                        type: "string",
                        required: false,
                        def: function def() {
                            return _config.USERS.ALL;
                        }
                    },
                    disableLightbox: {
                        type: "boolean",
                        required: false,
                        def: function def() {
                            return !(0, _lib.hasMetaViewPort)();
                        }
                    },
                    logLevel: {
                        type: "string",
                        required: false,
                        get value() {
                            return _config.config.logLevel;
                        }
                    },
                    popupBridge: {
                        type: "object",
                        required: false,
                        get value() {
                            return {
                                open: (0, _common.getPopupBridgeOpener)(),
                                awaitOpener: _common.awaitPopupBridgeOpener
                            };
                        }
                    },
                    testAction: {
                        type: "string",
                        required: false,
                        def: function def() {
                            return "checkout";
                        }
                    }
                },
                autoResize: {
                    height: true,
                    width: false
                },
                dimensions: {
                    width: "148px",
                    height: "48px"
                }
            });
            if (Button.isChild()) {
                if ((0, _lib.isWebView)()) {
                    _client2["default"].info("force_enable_iframe_webview");
                    (0, _checkout.enableCheckoutIframe)({
                        force: true,
                        time: 30 * 60 * 1e3
                    });
                }
                if (window.xprops.logLevel) {
                    (0, _lib.setLogLevel)(window.xprops.logLevel);
                }
                (0, _common.awaitPopupBridgeOpener)();
            }
        },
        "./src/components/checkout/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _component = __webpack_require__("./src/components/checkout/component.js");
            Object.keys(_component).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _component[key];
                    }
                });
            });
        },
        "./src/components/checkout/component.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Checkout = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.enableCheckoutIframe = enableCheckoutIframe;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _src = __webpack_require__("./node_modules/xcomponent/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _parentTemplate2 = __webpack_require__("./src/components/checkout/parentTemplate.js");
            var _componentTemplate = __webpack_require__("./src/components/checkout/componentTemplate.js");
            var _util = __webpack_require__("./src/components/checkout/util.js");
            var _popupBridge = __webpack_require__("./src/components/checkout/popupBridge.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _common = __webpack_require__("./src/components/common.js");
            var _content = __webpack_require__("./src/components/checkout/content.json");
            var _content2 = _interopRequireDefault(_content);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var content = JSON.parse(_content2["default"]);
            function addHeader(name, value) {
                if (!window.$Api) {
                    return;
                }
                if (window.$Api.addHeader) {
                    return window.$Api.addHeader(name, value);
                }
            }
            var Checkout = exports.Checkout = _src2["default"].create({
                tag: "paypal-checkout",
                name: "ppcheckout",
                buildUrl: function buildUrl(instance, props) {
                    var env = instance.props.env || _config.config.env;
                    return props.payment().then(function(token) {
                        if (!token) {
                            throw new Error("Expected payment id or token to be passed, got " + token);
                        }
                        return (0, _util.determineUrlFromToken)(env, token);
                    });
                },
                remoteRenderDomain: _config.config.paypal_domain_regex,
                get bridgeUrls() {
                    return _config.config.postBridgeUrls;
                },
                get bridgeDomains() {
                    return _config.config.paypalDomains;
                },
                contexts: {
                    iframe: false,
                    lightbox: false,
                    popup: true
                },
                get version() {
                    return _config.config.ppobjects ? "4" : "4.0.52";
                },
                get domains() {
                    return _config.config.paypalDomains;
                },
                componentTemplate: _componentTemplate.componentTemplate,
                parentTemplate: function parentTemplate() {
                    var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    ctx.content = content[_config.config.locale.country][_config.config.locale.lang];
                    return (0, _parentTemplate2.parentTemplate)(ctx);
                },
                props: {
                    env: {
                        type: "string",
                        required: false,
                        queryParam: true,
                        def: function def() {
                            return _config.config.env;
                        },
                        validate: function validate(env) {
                            if (!_config.config.paypalUrls[env]) {
                                throw new Error("Invalid env: " + env);
                            }
                        }
                    },
                    stage: {
                        type: "string",
                        required: false,
                        queryParam: true,
                        def: function def(props) {
                            var env = props.env || _config.config.env;
                            if (env === _config.ENV.STAGE || env === _config.ENV.LOCAL) {
                                return _config.config.stage;
                            }
                        }
                    },
                    locale: {
                        type: "string",
                        required: false,
                        queryParam: "locale.x"
                    },
                    client: {
                        type: "object",
                        required: false,
                        def: function def() {
                            return {};
                        },
                        sendToChild: false,
                        validate: function validate(client, props) {
                            var env = props.env || _config.config.env;
                            if (!client[env]) {
                                throw new Error("Client ID not found for env: " + env);
                            }
                            if (client[env].match(/^(.)\1+$/)) {
                                throw new Error("Invalid client ID: " + client[env]);
                            }
                        }
                    },
                    payment: {
                        type: "string",
                        required: false,
                        getter: true,
                        memoize: true,
                        timeout: false ? 500 : 10 * 1e3,
                        queryParam: function queryParam() {
                            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                            return (0, _util.determineParameterFromToken)(value);
                        },
                        childDef: function childDef() {
                            return (0, _lib.getQueryParam)("token");
                        },
                        alias: "billingAgreement"
                    },
                    commit: {
                        type: "boolean",
                        required: false
                    },
                    onAuthorize: {
                        type: "function",
                        required: true,
                        once: true,
                        decorate: function decorate(original) {
                            if (original) {
                                return function(data) {
                                    var _this = this;
                                    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                    var close = function close() {
                                        return _promise.SyncPromise["try"](function() {
                                            if (actions.close) {
                                                return actions.close();
                                            }
                                        }).then(function() {
                                            return _this.closeComponent();
                                        });
                                    };
                                    var redirect = function redirect(win, url) {
                                        return _promise.SyncPromise.all([ (0, _lib.redirect)(win || window.top, url || data.returnUrl), close() ]);
                                    };
                                    return _promise.SyncPromise["try"](function() {
                                        try {
                                            var isButton = window.location.href.indexOf("/webapps/hermes/button") !== -1;
                                            var isGuest = _this.window.location.href.indexOf("/webapps/xoonboarding") !== -1;
                                            if (isButton && isGuest) {
                                                return (0, _lib.request)({
                                                    win: _this.window,
                                                    method: "get",
                                                    url: "/webapps/hermes/api/auth"
                                                }).then(function(result) {
                                                    if (result && result.data && result.data.access_token) {
                                                        addHeader("x-paypal-internal-euat", result.data.access_token);
                                                    }
                                                })["catch"](function(err2) {});
                                            }
                                        } catch (err) {}
                                    }).then(function() {
                                        return original.call(_this, data, _extends({}, actions, {
                                            close: close,
                                            redirect: redirect
                                        }));
                                    })["finally"](function() {
                                        return _this.close();
                                    });
                                };
                            }
                        }
                    },
                    onAuth: {
                        type: "function",
                        required: false,
                        sameDomain: true
                    },
                    onCancel: {
                        type: "function",
                        required: false,
                        once: true,
                        noop: true,
                        decorate: function decorate(original) {
                            if (original) {
                                return function(data) {
                                    var _this2 = this;
                                    var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                    var close = function close() {
                                        return _promise.SyncPromise["try"](function() {
                                            if (actions.close) {
                                                return actions.close();
                                            }
                                        }).then(function() {
                                            return _this2.closeComponent();
                                        });
                                    };
                                    var redirect = function redirect(win, url) {
                                        return _promise.SyncPromise.all([ (0, _lib.redirect)(win || window.top, url || data.cancelUrl), close() ]);
                                    };
                                    return _promise.SyncPromise["try"](function() {
                                        return original.call(_this2, data, _extends({}, actions, {
                                            close: close,
                                            redirect: redirect
                                        }));
                                    })["finally"](function() {
                                        _this2.close();
                                    });
                                };
                            }
                        }
                    },
                    init: {
                        type: "function",
                        required: false,
                        once: true,
                        decorate: function decorate(original) {
                            return function(data) {
                                this.paymentToken = data.paymentToken;
                                this.cancelUrl = data.cancelUrl;
                                if (original) {
                                    return original.apply(this, arguments);
                                }
                            };
                        }
                    },
                    onClose: {
                        type: "function",
                        required: false,
                        once: true,
                        promisify: true,
                        def: function def() {
                            return function(reason) {
                                var CLOSE_REASONS = _src2["default"].CONSTANTS.CLOSE_REASONS;
                                if (this.props.onCancel && [ CLOSE_REASONS.CLOSE_DETECTED, CLOSE_REASONS.USER_CLOSED ].indexOf(reason) !== -1) {
                                    if (this.paymentToken && this.cancelUrl) {
                                        _client2["default"].info("close_trigger_cancel");
                                        return this.props.onCancel({
                                            paymentToken: this.paymentToken,
                                            cancelUrl: this.cancelUrl
                                        });
                                    } else {
                                        _client2["default"].warn("close_no_token_cancelurl");
                                    }
                                }
                            };
                        }
                    },
                    onError: {
                        type: "function",
                        required: false,
                        promisify: true,
                        noop: true,
                        once: true
                    },
                    fallback: {
                        type: "function",
                        required: false,
                        once: true,
                        def: function def() {
                            return function(url) {
                                _client2["default"].warn("fallback", {
                                    url: url
                                });
                                return window.onLegacyPaymentAuthorize(this.props.onAuthorize);
                            };
                        }
                    },
                    logLevel: {
                        type: "string",
                        required: false,
                        get value() {
                            return _config.config.logLevel;
                        }
                    },
                    popupBridge: {
                        type: "object",
                        required: false,
                        get value() {
                            return {
                                open: (0, _common.getPopupBridgeOpener)(),
                                awaitOpener: _common.awaitPopupBridgeOpener
                            };
                        }
                    },
                    testAction: {
                        type: "string",
                        required: false,
                        def: function def() {
                            return "checkout";
                        }
                    }
                },
                autoResize: {
                    width: false,
                    height: true
                },
                get dimensions() {
                    if ((0, _lib.isDevice)()) {
                        return {
                            width: "100%",
                            height: "100%"
                        };
                    }
                    if (this.contexts.lightbox) {
                        return {
                            width: "450px",
                            height: "300px"
                        };
                    }
                    return {
                        width: "450px",
                        height: "535px"
                    };
                }
            });
            (0, _popupBridge.setupPopupBridgeProxy)(Checkout);
            var enableCheckoutIframeTimeout = void 0;
            function allowCheckoutIframe() {
                if ((0, _lib.isDevice)()) {
                    return false;
                }
                if (!(0, _lib.hasMetaViewPort)()) {
                    return false;
                }
                return true;
            }
            function enableCheckoutIframe() {
                var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref$force = _ref.force, force = _ref$force === undefined ? false : _ref$force, _ref$timeout = _ref.timeout, timeout = _ref$timeout === undefined ? 5 * 60 * 1e3 : _ref$timeout;
                if (!force && !allowCheckoutIframe()) {
                    return;
                }
                Checkout.contexts.lightbox = true;
                Checkout.contexts.iframe = true;
                if (enableCheckoutIframeTimeout) {
                    clearTimeout(enableCheckoutIframeTimeout);
                }
                enableCheckoutIframeTimeout = setTimeout(function() {
                    Checkout.contexts.lightbox = false;
                    Checkout.contexts.iframe = false;
                }, timeout);
            }
            if (Checkout.isChild()) {
                if (window.xprops.logLevel) {
                    (0, _lib.setLogLevel)(window.xprops.logLevel);
                }
                (0, _common.awaitPopupBridgeOpener)();
            }
        },
        "./src/components/checkout/parentTemplate.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var parentTemplate = exports.parentTemplate = function parentTemplate() {
                var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return '\n    \n    <div class="paypal-checkout-overlay ' + ctx.CLASS.FOCUS + '">\n        <a href="#' + ctx.CLASS.CLOSE + '" class="' + ctx.CLASS.CLOSE + '"></a>\n        <div class="paypal-checkout-modal">\n            <div class="paypal-checkout-logo"></div>\n            <div class="paypal-checkout-message">\n                ' + ctx.content.windowMessage + '\n            </div>\n            <div class="paypal-checkout-continue">\n                <a href="#' + ctx.CLASS.FOCUS + '" class="' + ctx.CLASS.FOCUS + '">' + ctx.content["continue"] + '</a>\n            </div>\n            <div class="paypal-checkout-loading">\n                <div class="paypal-spinner"></div>\n            </div>\n        </div>\n    \n        <div class="' + ctx.CLASS.ELEMENT + ' paypal-checkout-lightbox-element"></div>\n    </div>\n    \n    <style>\n    \n        #' + ctx.id + "." + ctx.CLASS.POPUP + ", #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " {\n            position: fixed;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n    \n            -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    \n            animation-fill-mode:forwards;\n            animation-iteration-count: 1;\n    \n            -webkit-animation-fill-mode:forwards;\n            -webkit-animation-iteration-count: 1;\n        }\n    \n        #" + ctx.id + " .paypal-checkout-overlay {\n    \n            position: absolute;\n    \n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n    \n            background-color: black;\n    \n            background-color: rgba(0, 0, 0, 0.8);\n    \n            background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n            background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n            background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n    \n            -webkit-transform: translate3d(0, 0, 0);\n            -moz-transform: translate3d(0, 0, 0);\n            -ms-transform: translate3d(0, 0, 0);\n            -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.POPUP + " .paypal-checkout-overlay {\n            cursor: pointer;\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.POPUP + " .paypal-checkout-overlay {\n            cursor: pointer;\n        }\n    \n        #" + ctx.id + ' .paypal-checkout-overlay .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n            color: #fff;\n            -webkit-box-sizing: border-box;\n            -moz-box-sizing: border-box;\n            -ms-box-sizing: border-box;\n            box-sizing: border-box;\n            width: 350px;\n            top: 50%;\n            left: 50%;\n            position: fixed;\n            margin-left: -165px;\n            margin-top: -80px;\n            cursor: pointer;\n            text-align: center;\n        }\n    \n        #' + ctx.id + "." + ctx.CLASS.LOADING + " .paypal-checkout-message, #" + ctx.id + "." + ctx.CLASS.LOADING + " .paypal-checkout-continue {\n            display: none;\n        }\n    \n        .paypal-checkout-loading {\n            display: none;\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.LOADING + " .paypal-checkout-loading {\n            display: block;\n        }\n    \n        #" + ctx.id + ' .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {\n            background: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite.png") no-repeat -18px -16px;\n            width: 132px;\n            height: 36px;\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n    \n        @media only screen and (-webkit-min-device-pixel-ratio: 2), not all, not all, only screen and (min-resolution: 2dppx), only screen and (min-resolution: 192dpi) {\n            #' + ctx.id + ' .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-logo {\n                background-image: url("https://www.paypalobjects.com/images/checkout/incontext/incontext_mask_sprite_2x.png");\n                background-size: 200px 200px;\n            }\n        }\n    \n        #' + ctx.id + " .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-message, #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-continue {\n            display: none;\n        }\n    \n        #" + ctx.id + " .paypal-checkout-overlay .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            text-decoration: underline;\n            font-weight: bold;\n        }\n    \n        #" + ctx.id + " ." + ctx.CLASS.CLOSE + " {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.LOADING + " ." + ctx.CLASS.CLOSE + " {\n            display: none;\n        }\n    \n        #" + ctx.id + " ." + ctx.CLASS.CLOSE + ":hover {\n            opacity: 1;\n        }\n    \n        #" + ctx.id + " ." + ctx.CLASS.CLOSE + ":before, ." + ctx.CLASS.CLOSE + ":after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n            background-color: white;\n        }\n    \n        #" + ctx.id + " ." + ctx.CLASS.CLOSE + ":before {\n            transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n            -moz-transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            -ms-transform: rotate(45deg);\n        }\n    \n        #" + ctx.id + " ." + ctx.CLASS.CLOSE + ":after {\n            transform: rotate(-45deg);\n            -webkit-transform: rotate(-45deg);\n            -moz-transform: rotate(-45deg);\n            -o-transform: rotate(-45deg);\n            -ms-transform: rotate(-45deg);\n        }\n    \n        #" + ctx.id + " a {\n            color: white;\n        }\n    \n        #" + ctx.id + " .paypal-checkout-lightbox-element {\n            display: none;\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-lightbox-element {\n    \n            display: block;\n    \n            -webkit-transition: all 0.6s ease;\n            -moz-transition: all 0.6s ease;\n            -ms-transition: all 0.6s ease;\n            -o-transition: all 0.6 ease;\n            transition: all 0.6s ease;\n    \n            -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n            -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    \n            position: fixed;\n    \n            top: 50%;\n            left: 50%;\n    \n            transform: translate3d(-50%, -50%, 0);\n            -webkit-transform: translate3d(-50%, -50%, 0);\n            -moz-transform: translate3d(-50%, -50%, 0);\n            -o-transform: translate3d(-50%, -50%, 0);\n            -ms-transform: translate3d(-50%, -50%, 0);\n    \n            max-height: calc(100% - 20px);\n            max-height: -webkit-calc(100% - 20px);\n            max-height: -moz-calc(100% - 20px);\n            max-height: -o-calc(100% - 20px);\n            max-height: -ms-calc(100% - 20px);\n    \n            max-width: calc(100% - 20px);\n            max-width: -webkit-calc(100% - 20px);\n            max-width: -moz-calc(100% - 20px);\n            max-width: -o-calc(100% - 20px);\n            max-width: -ms-calc(100% - 20px);\n    \n            width: 450px;\n            height: 535px;\n    \n            min-width: 450px;\n    \n            background-color: white;\n            border-radius: 10px;\n    \n            overflow: auto;\n            -webkit-overflow-scrolling:touch;\n    \n        }\n    \n        @media screen and (max-width: 450px) {\n    \n            #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-lightbox-element {\n                min-width: calc(100% - 20px);\n                min-width: -webkit-calc(100% - 20px);\n                min-width: -moz-calc(100% - 20px);\n                min-width: -o-calc(100% - 20px);\n                min-width: -ms-calc(100% - 20px);\n            }\n        }\n    \n        @media screen and (min-width: 490px) {\n    \n            #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-lightbox-element {\n                max-width: 450px;\n                max-width: 450px;\n                max-width: 450px;\n                max-width: 450px;\n    \n                max-width: 450px;\n            }\n        }\n    \n        #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-lightbox-element iframe {\n    \n            width: 100%;\n            height: 100%;\n        }\n    \n    \n        /*!\n         * animate.css -http://daneden.me/animate\n         * Version - 3.5.1\n         * Licensed under the MIT license - http://opensource.org/licenses/MIT\n         *\n         * Copyright (c) 2016 Daniel Eden\n         */\n    \n        @-webkit-keyframes " + ctx.ANIMATION.SHOW_COMPONENT + " {\n            from, 60%, 75%, 90%, to {\n                -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            }\n    \n            from {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            60% {\n                opacity: 1;\n                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            75% {\n                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            90% {\n                -webkit-transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            to {\n                -webkit-transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);\n            }\n        }\n    \n        @keyframes " + ctx.ANIMATION.SHOW_COMPONENT + " {\n            from, 60%, 75%, 90%, to {\n                -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n                animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n            }\n    \n            from {\n                display: block;\n                opacity: 0;\n                -webkit-transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 3000px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            60% {\n                opacity: 1;\n                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            75% {\n                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            90% {\n                -webkit-transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -5px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            to {\n                -webkit-transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 0, 0) translate3d(-50%, -50%, 0);\n            }\n        }\n    \n        @-webkit-keyframes " + ctx.ANIMATION.HIDE_COMPONENT + " {\n            20% {\n                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            40%, 45% {\n                opacity: 1;\n                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            to {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);\n            }\n        }\n    \n        @keyframes " + ctx.ANIMATION.HIDE_COMPONENT + " {\n            20% {\n                -webkit-transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 10px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            40%, 45% {\n                opacity: 1;\n                -webkit-transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, -20px, 0) translate3d(-50%, -50%, 0);\n            }\n    \n            to {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);\n                transform: translate3d(0, 2000px, 0) translate3d(-50%, -50%, 0);\n            }\n        }\n    \n        @-webkit-keyframes " + ctx.ANIMATION.SHOW_CONTAINER + " {\n            from {\n                opacity: 0;\n            }\n    \n            to {\n                opacity: 1;\n            }\n        }\n    \n        @keyframes " + ctx.ANIMATION.SHOW_CONTAINER + " {\n            from {\n                opacity: 0;\n            }\n    \n            to {\n                opacity: 1;\n            }\n        }\n    \n        @-webkit-keyframes " + ctx.ANIMATION.HIDE_CONTAINER + " {\n            from {\n                opacity: 1;\n            }\n    \n            50% {\n                opacity: 1;\n            }\n    \n            to {\n                opacity: 0;\n            }\n        }\n    \n        @keyframes " + ctx.ANIMATION.HIDE_CONTAINER + " {\n            from {\n                opacity: 1;\n            }\n    \n            50% {\n                opacity: 1;\n            }\n    \n            to {\n                opacity: 0;\n            }\n        }\n    \n    \n    \n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            -webkit-animation: rotation .7s infinite linear;\n            -moz-animation: rotation .7s infinite linear;\n            -o-animation: rotation .7s infinite linear;\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n    \n        @-webkit-keyframes rotation {\n            from {\n                -webkit-transform: rotate(0deg)\n            }\n            to {\n                -webkit-transform: rotate(359deg)\n            }\n        }\n        @-moz-keyframes rotation {\n            from {\n                -moz-transform: rotate(0deg)\n            }\n            to {\n                -moz-transform: rotate(359deg)\n            }\n        }\n        @-o-keyframes rotation {\n            from {\n                -o-transform: rotate(0deg)\n            }\n            to {\n                -o-transform: rotate(359deg)\n            }\n        }\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    </style>\n    \n    <!--[if IE 9 ]>\n        <style>\n            #" + ctx.id + "." + ctx.CLASS.LIGHTBOX + " .paypal-checkout-lightbox-element {\n    \n                transform: none;\n                -ms-transform: none;\n    \n                transform: translateX(-50%) translateY(-50%);\n                -ms-transform:  translateX(-50%) translateY(-50%);\n            }\n        </style>\n    <![endif]-->\n\n";
            };
        },
        "./src/components/checkout/componentTemplate.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var componentTemplate = exports.componentTemplate = function componentTemplate() {
                var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return '\n\n    <!DOCTYPE html>\n    \n    <head>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n    \n        <title>PayPal</title>\n    \n        <style>\n            body {\n                width: 100%;\n                height: 100%;\n                overflow: hidden;\n                position: fixed;\n                top: 0;\n                left: 0;\n                margin: 0;\n            }\n    \n            .spinner {\n                height: 100%;\n                width: 100%;\n                position: absolute;\n                z-index: 10\n            }\n    \n            .spinner .spinWrap {\n                width: 200px;\n                height: 100px;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                margin-left: -100px;\n                margin-top: -50px\n            }\n    \n            .spinner .loader,\n            .spinner .spinnerImage {\n                height: 100px;\n                width: 100px;\n                position: absolute;\n                top: 0;\n                left: 50%;\n                opacity: 1;\n                filter: alpha(opacity=100)\n            }\n    \n            .spinner .spinnerImage {\n                margin: 28px 0 0 -25px;\n                background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n            }\n    \n            .spinner .loader {\n                margin: 0 0 0 -55px;\n                background-color: transparent;\n                -webkit-animation: rotation .7s infinite linear;\n                -moz-animation: rotation .7s infinite linear;\n                -o-animation: rotation .7s infinite linear;\n                animation: rotation .7s infinite linear;\n                border-left: 5px solid #cbcbca;\n                border-right: 5px solid #cbcbca;\n                border-bottom: 5px solid #cbcbca;\n                border-top: 5px solid #2380be;\n                border-radius: 100%\n            }\n    \n            @-webkit-keyframes rotation {\n                from {\n                    -webkit-transform: rotate(0deg)\n                }\n                to {\n                    -webkit-transform: rotate(359deg)\n                }\n            }\n            @-moz-keyframes rotation {\n                from {\n                    -moz-transform: rotate(0deg)\n                }\n                to {\n                    -moz-transform: rotate(359deg)\n                }\n            }\n            @-o-keyframes rotation {\n                from {\n                    -o-transform: rotate(0deg)\n                }\n                to {\n                    -o-transform: rotate(359deg)\n                }\n            }\n            @keyframes rotation {\n                from {\n                    transform: rotate(0deg)\n                }\n                to {\n                    transform: rotate(359deg)\n                }\n            }\n        </style>\n    \n    </head>\n    \n    <body>\n        <div id="preloaderSpinner" class="preloader spinner">\n            <div class="spinWrap">\n                <p class="spinnerImage"></p>\n                <p class="loader"></p>\n            </div>\n        </div>\n    </body>\n\n';
            };
        },
        "./src/components/checkout/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.determineParameterFromToken = determineParameterFromToken;
            exports.determineUrlFromToken = determineUrlFromToken;
            exports.parseParamsFromUrl = parseParamsFromUrl;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _lib = __webpack_require__("./src/lib/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function determineParameterFromToken(token) {
                return token.indexOf("BA-") === 0 ? "ba_token" : "token";
            }
            function determineUrlFromToken(env, token) {
                if (token.indexOf("BA-") === 0) {
                    _client2["default"].info("url_billing");
                    return _config.config.billingUrls[env];
                }
                if (token.indexOf("PAY-") === 0) {
                    _client2["default"].info("url_payment");
                    return _config.config.checkoutUrls[env];
                }
                if (token.indexOf("EC-") === 0) {
                    _client2["default"].info("url_checkout");
                    return _config.config.checkoutUrls[env];
                }
                _client2["default"].info("url_default");
                return _config.config.checkoutUrls[env];
            }
            function parseParamsFromUrl(url) {
                return {
                    paymentToken: (0, _lib.match)(url, /token=((EC-)?[A-Z0-9]+)/),
                    billingToken: (0, _lib.match)(url, /ba_token=((BA-)?[A-Z0-9]+)/),
                    payerID: (0, _lib.match)(url, /PayerID=([A-Z0-9]+)/),
                    paymentID: (0, _lib.match)(url, /paymentId=((PAY-)?[A-Z0-9]+)/)
                };
            }
        },
        "./src/components/checkout/popupBridge.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setupPopupBridgeProxy = setupPopupBridgeProxy;
            var _lib = __webpack_require__("./node_modules/xcomponent/src/lib/index.js");
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _lib2 = __webpack_require__("./src/lib/index.js");
            var _util = __webpack_require__("./src/components/checkout/util.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _common = __webpack_require__("./src/components/common.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            function ternary(condition, truthyResult, falsyResult) {
                return _promise.SyncPromise.resolve(condition).then(function(result) {
                    return result ? truthyResult : falsyResult;
                });
            }
            function renderThroughPopupBridge(props, openBridge) {
                return _promise.SyncPromise["try"](function() {
                    if (!props.payment && !props.url) {
                        throw new Error("Expected props.payment or props.url to be passed");
                    }
                    if (!props.onAuthorize) {
                        throw new Error("Expected props.onAuthorize to be passed");
                    }
                    if (props.env && !_config.config.checkoutUrls[props.env]) {
                        throw new Error("Invalid props.env: " + props.env);
                    }
                    var env = props.env = props.env || _config.config.env;
                    var getPayment = typeof props.payment === "function" ? props.payment.bind({
                        props: props
                    }) : function() {
                        return props.payment;
                    };
                    var payment = (0, _lib.memoize)((0, _lib.getter)(getPayment));
                    var onAuthorize = (0, _lib.once)(props.onAuthorize);
                    var onCancel = (0, _lib.once)(props.onCancel || _lib.noop);
                    var awaitUrl = ternary(props.url, props.url, payment().then(function(token) {
                        if (token) {
                            var _extendUrl;
                            return (0, _lib2.extendUrl)((0, _util.determineUrlFromToken)(env, token), (_extendUrl = {}, 
                            _defineProperty(_extendUrl, (0, _util.determineParameterFromToken)(token), token), 
                            _defineProperty(_extendUrl, "useraction", props.commit ? "commit" : ""), _defineProperty(_extendUrl, "native_xo", "1"), 
                            _extendUrl));
                        }
                    }));
                    return awaitUrl.then(function(url) {
                        return new _promise.SyncPromise(function(resolve, reject) {
                            openBridge(url, function(err, payload) {
                                if (err) {
                                    return reject(err);
                                }
                                if (!payload) {
                                    return reject(new Error("No payload passed in popupBridge.onComplete"));
                                }
                                var query = payload.queryItems;
                                var data = {
                                    paymentToken: query.token,
                                    billingToken: query.billingToken,
                                    paymentID: query.paymentId,
                                    payerID: query.payerID
                                };
                                var actions = {
                                    close: function close() {}
                                };
                                if (query.opType === "payment") {
                                    data.returnUrl = query.redirect_uri;
                                    actions.redirect = function() {
                                        var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
                                        var redirectUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : data.returnUrl;
                                        return (0, _lib2.redirect)(win, redirectUrl);
                                    };
                                    onAuthorize(data, actions);
                                    resolve();
                                } else if (query.opType === "cancel") {
                                    data.cancelUrl = query.redirect_uri;
                                    actions.redirect = function() {
                                        var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
                                        var redirectUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : data.cancelUrl;
                                        return (0, _lib2.redirect)(win, redirectUrl);
                                    };
                                    onCancel(data, actions);
                                    resolve();
                                } else {
                                    return reject(new Error("Did not find opType in popup bridge returned query params"));
                                }
                            });
                        });
                    });
                });
            }
            function setupPopupBridgeProxy(Checkout) {
                function doRender(props, original) {
                    var openBridge = (0, _common.getPopupBridgeOpener)();
                    return openBridge ? renderThroughPopupBridge(props, openBridge)["catch"](function(err) {
                        _client2["default"].error("popup_bridge_error", {
                            err: err.stack || err.toString()
                        });
                        return original();
                    }) : original();
                }
                var render = Checkout.render;
                Checkout.render = function(props) {
                    var _this = this, _arguments = arguments;
                    return doRender(props, function() {
                        return render.apply(_this, _arguments);
                    });
                };
                var renderTo = Checkout.renderTo;
                Checkout.renderTo = function(win, props) {
                    var _this2 = this, _arguments2 = arguments;
                    return doRender(props, function() {
                        return renderTo.apply(_this2, _arguments2);
                    });
                };
                var init = Checkout.init;
                Checkout.init = function(props) {
                    var instance = init.apply(this, arguments);
                    var _render = instance.render;
                    instance.render = function() {
                        var _this3 = this, _arguments3 = arguments;
                        return doRender(props, function() {
                            return _render.apply(_this3, _arguments3);
                        });
                    };
                    var _renderTo = instance.renderTo;
                    instance.renderTo = function() {
                        var _this4 = this, _arguments4 = arguments;
                        return doRender(props, function() {
                            return _renderTo.apply(_this4, _arguments4);
                        });
                    };
                    return instance;
                };
            }
        },
        "./src/components/common.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getPopupBridgeOpener = getPopupBridgeOpener;
            exports.clearPopupBridgeOpener = clearPopupBridgeOpener;
            exports.awaitPopupBridgeOpener = awaitPopupBridgeOpener;
            var _lib = __webpack_require__("./src/lib/index.js");
            var popupBridgeOpener = void 0;
            function getPopupBridgeOpener() {
                var popupBridge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.popupBridge;
                if (popupBridgeOpener) {
                    return popupBridgeOpener;
                }
                if (popupBridge) {
                    popupBridgeOpener = function popupBridgeOpener(url, callback) {
                        if (!popupBridge) {
                            throw new Error("Popup Bridge not available");
                        }
                        popupBridge.onComplete = callback;
                        popupBridge.open((0, _lib.extendUrl)(url, {
                            redirect_uri: popupBridge.getReturnUrlPrefix()
                        }));
                    };
                    return popupBridgeOpener;
                }
                if (window.xprops && window.xprops.popupBridge && window.xprops.popupBridge.open) {
                    popupBridgeOpener = window.xprops.popupBridge.open;
                    return popupBridgeOpener;
                }
            }
            function clearPopupBridgeOpener() {
                popupBridgeOpener = null;
            }
            function awaitPopupBridgeOpener() {
                if (window.xprops && window.xprops.popupBridge) {
                    return window.xprops.popupBridge.awaitOpener().then(function(opener) {
                        popupBridgeOpener = opener;
                        return opener;
                    });
                }
                return (0, _lib.awaitKey)(window, "popupBridge").then(function(popupBridge) {
                    return getPopupBridgeOpener(popupBridge);
                });
            }
        },
        "./src/components/checkout/content.json": function(module, exports) {
            module.exports = '\n{\n    "AT": {\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZW": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ZA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "YT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "YE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "WS": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "WF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "VU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "VG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "VE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "VC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "VA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "UY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "UG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "TT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "TO": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "TN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "TM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "TD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "TC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "SZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "ST": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "SO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "SM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "SB": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "SA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "RW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "RS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "RE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "QA": {\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        },\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PY": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "PW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "PF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "PA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "OM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "NU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NP": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "NG": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "NE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "NC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MV": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "MU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MT": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "MR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MQ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "ML": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "MK": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "MG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ME": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MD": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MC": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "MA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "LS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LK": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "LI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "LA": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "KW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "KN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "KM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "KI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KH": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "KG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "JO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "JM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "IS": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HR": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "GY": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "GP": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "GM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "GI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "FO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "FM": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "FK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "FJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "ET": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ER": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "EG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "EC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "DZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "DO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "DM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "DJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CY": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CM": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CL": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "CK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CI": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "CG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "BY": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BT": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "BS": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "BN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "BM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BJ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BH": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "BG": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BF": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        }\n    },\n    "BB": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "BA": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AW": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AL": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AG": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "AE": {\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        },\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AD": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "CN": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        }\n    },\n    "GB": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\'ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AR": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        }\n    },\n    "US": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "VN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.  ",\n            "continue": "Continue"\n        }\n    },\n    "UA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TW": {\n        "zh": {\n            "windowMessage": "\\u770B\\u4E0D\\u5230\\u5B89\\u5168\\u9023\\u7DDA\\u7684 PayPal \\u700F\\u89BD\\u5668\\uFF1F\\u6211\\u5011\\u5C07\\u6703\\u91CD\\u65B0\\u555F\\u52D5\\u8996\\u7A97\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7E7C\\u7E8C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TR": {\n        "tr": {\n            "windowMessage": "G\\u00FCvenli PayPal taray\\u0131c\\u0131s\\u0131n\\u0131 g\\u00F6rm\\u00FCyor musunuz? Al\\u0131\\u015Fveri\\u015Finizi tamamlamak i\\u00E7in pencereyi yeniden ba\\u015Flatman\\u0131za yard\\u0131mc\\u0131 olaca\\u011F\\u0131z.\\u00A0 ",\n            "continue": "Devam"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "TH": {\n        "th": {\n            "windowMessage": "\\u0E16\\u0E49\\u0E32\\u0E04\\u0E38\\u0E13\\u0E44\\u0E21\\u0E48\\u0E40\\u0E2B\\u0E47\\u0E19\\u0E40\\u0E1A\\u0E23\\u0E32\\u0E27\\u0E4C\\u0E40\\u0E0B\\u0E2D\\u0E23\\u0E4C\\u0E17\\u0E35\\u0E48\\u0E21\\u0E35\\u0E23\\u0E30\\u0E1A\\u0E1A\\u0E04\\u0E27\\u0E32\\u0E21\\u0E1B\\u0E25\\u0E2D\\u0E14\\u0E20\\u0E31\\u0E22\\u0E02\\u0E2D\\u0E07 PayPal \\u0E40\\u0E23\\u0E32\\u0E08\\u0E30\\u0E0A\\u0E48\\u0E27\\u0E22\\u0E04\\u0E38\\u0E13\\u0E40\\u0E1B\\u0E34\\u0E14\\u0E2B\\u0E19\\u0E49\\u0E32\\u0E15\\u0E48\\u0E32\\u0E07\\u0E2D\\u0E35\\u0E01\\u0E04\\u0E23\\u0E31\\u0E49\\u0E07\\u0E40\\u0E1E\\u0E37\\u0E48\\u0E2D\\u0E0A\\u0E33\\u0E23\\u0E30\\u0E40\\u0E07\\u0E34\\u0E19\\u0E43\\u0E2B\\u0E49\\u0E40\\u0E23\\u0E35\\u0E22\\u0E1A\\u0E23\\u0E49\\u0E2D\\u0E22 ",\n            "continue": "\\u0E14\\u0E33\\u0E40\\u0E19\\u0E34\\u0E19\\u0E01\\u0E32\\u0E23\\u0E15\\u0E48\\u0E2D"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SK": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SG": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "SE": {\n        "sv": {\n            "windowMessage": "Ser du inte den s\\u00E4kra PayPal-webbl\\u00E4saren? Vi hj\\u00E4lper dig att starta om f\\u00F6nstret f\\u00F6r att slutf\\u00F6ra ditt k\\u00F6p. ",\n            "continue": "Forts\\u00E4tt"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "RU": {\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "RO": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PT": {\n        "pt": {\n            "windowMessage": "N\\u00E3o v\\u00EA a indica\\u00E7\\u00E3o de sess\\u00E3o segura PayPal no browser? Vamos ajudar a reabrir a janela para que possa concluir a sua compra.",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PL": {\n        "pl": {\n            "windowMessage": "Nie widzisz bezpiecznej przegl\\u0105darki PayPal? Pomo\\u017Cemy Ci ponownie uruchomi\\u0107 to okno w celu dokonania zakupu.\\u00A0 ",\n            "continue": "Kontynuuj"\n        },\n        "en": {\n            "windowMessage": "You don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "PH": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre paiement.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar su pago.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NO": {\n        "no": {\n            "windowMessage": "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med \\u00E5 starte vinduet p\\u00E5 nytt s\\u00E5 du kan fullf\\u00F8re kj\\u00F8pet.\\u00A0 ",\n            "continue": "Fortsett"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "NL": {\n        "nl": {\n            "windowMessage": "Ziet u geen beveiligde PayPal-browser? We helpen u het venster opnieuw te openen om uw aankoop te voltooien.\\u00A0 ",\n            "continue": "Doorgaan"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MY": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "MX": {\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "LV": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "LU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Das PayPal-Fenster wird nicht angezeigt?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "LT": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "KR": {\n        "ko": {\n            "windowMessage": "\\uBCF4\\uC548 PayPal \\uBE0C\\uB77C\\uC6B0\\uC800\\uAC00 \\uBCF4\\uC774\\uC9C0 \\uC54A\\uC73C\\uC2E0\\uAC00\\uC694? \\uCC3D\\uC744 \\uB2E4\\uC2DC \\uC2E4\\uD589\\uD558\\uC5EC \\uACB0\\uC81C\\uB97C \\uC644\\uB8CC\\uD560 \\uC218 \\uC788\\uB3C4\\uB85D \\uB3C4\\uC640\\uB4DC\\uB9AC\\uACA0\\uC2B5\\uB2C8\\uB2E4.\\u00A0 ",\n            "continue": "\\uACC4\\uC18D"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "JP": {\n        "ja": {\n            "windowMessage": "\\u30BB\\u30AD\\u30E5\\u30A2\\u306A\\u30D6\\u30E9\\u30A6\\u30B6\\u304C\\u8868\\u793A\\u3055\\u308C\\u306A\\u3044\\u5834\\u5408\\u306F\\u3001\\u30A6\\u30A3\\u30F3\\u30C9\\u30A6\\u3092\\u518D\\u8D77\\u52D5\\u3057\\u3066\\u3001\\u652F\\u6255\\u3044\\u3092\\u5B8C\\u4E86\\u3067\\u304D\\u308B\\u3088\\u3046\\u304A\\u624B\\u4F1D\\u3044\\u3044\\u305F\\u3057\\u307E\\u3059\\u3002",\n            "continue": "\\u7D9A\\u884C"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.  ",\n            "continue": "Continue"\n        }\n    },\n    "IT": {\n        "it": {\n            "windowMessage": "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l\'acquisto.\\u00A0 ",\n            "continue": "Continua"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IN": {\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IL": {\n        "he": {\n            "windowMessage": "\\u05DC\\u05D0 \\u05E8\\u05D5\\u05D0\\u05D4 \\u05D0\\u05EA \\u05D3\\u05E4\\u05D3\\u05E4\\u05DF PayPal \\u05D4\\u05DE\\u05D0\\u05D5\\u05D1\\u05D8\\u05D7? \\u05E0\\u05E2\\u05D6\\u05D5\\u05E8 \\u05DC\\u05DA \\u05DC\\u05E4\\u05EA\\u05D5\\u05D7 \\u05DE\\u05D7\\u05D3\\u05E9 \\u05D0\\u05EA \\u05D4\\u05D7\\u05DC\\u05D5\\u05DF \\u05DB\\u05D3\\u05D9 \\u05DC\\u05D4\\u05E9\\u05DC\\u05D9\\u05DD \\u05D0\\u05EA \\u05D4\\u05E7\\u05E0\\u05D9\\u05D9\\u05D4 \\u05E9\\u05DC\\u05DA.\\u00A0 ",\n            "continue": "\\u05D4\\u05DE\\u05E9\\u05DA"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "IE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HU": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ID": {\n        "id": {\n            "windowMessage": "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda.\\u00A0 ",\n            "continue": "Lanjutkan"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "HK": {\n        "zh": {\n            "windowMessage": "\\u770B\\u4E0D\\u5230\\u5B89\\u5168\\u7684 PayPal \\u700F\\u89BD\\u5668\\u8996\\u7A97\\uFF1F\\u6211\\u5011\\u6703\\u52A9\\u4F60\\u91CD\\u65B0\\u958B\\u555F\\u8996\\u7A97\\uFF0C\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002",\n            "continue": "\\u7E7C\\u7E8C"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "GROUP-LATAM": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u770B\\u5230PayPal\\u4ED8\\u6B3E\\u9875\\u9762\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas la page de Paiement PayPal ? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo puede ver la p\\u00E1gina de pago de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the PayPal payment page? We\\u2019ll help you re-launch the window to complete your purchase.",\n            "continue": "Continue"\n        }\n    },\n    "GROUP-EMEA": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "pt": {\n            "windowMessage": "N\\u00E3o v\\u00EA a indica\\u00E7\\u00E3o de sess\\u00E3o segura PayPal no browser? Vamos ajudar a reabrir a janela para que possa concluir a sua compra.",\n            "continue": "Continuar"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        },\n        "ar": {\n            "windowMessage": "\\u0644\\u0627 \\u062A\\u0631\\u0649 \\u0645\\u062A\\u0635\\u0641\\u062D PayPal \\u0627\\u0644\\u0622\\u0645\\u0646\\u061F \\u0633\\u0646\\u0633\\u0627\\u0639\\u062F\\u0643 \\u0641\\u064A \\u0625\\u0639\\u0627\\u062F\\u0629 \\u0641\\u062A\\u062D \\u0627\\u0644\\u0646\\u0627\\u0641\\u0630\\u0629 \\u0644\\u0627\\u0633\\u062A\\u0643\\u0645\\u0627\\u0644 \\u0645\\u0634\\u062A\\u0631\\u064A\\u0627\\u062A\\u0643. \\u00A0 ",\n            "continue": "\\u0645\\u062A\\u0627\\u0628\\u0639\\u0629"\n        }\n    },\n    "GROUP-APAC": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ko": {\n            "windowMessage": "\\uBCF4\\uC548 PayPal \\uBE0C\\uB77C\\uC6B0\\uC800\\uAC00 \\uBCF4\\uC774\\uC9C0 \\uC54A\\uC73C\\uC2E0\\uAC00\\uC694? \\uCC3D\\uC744 \\uB2E4\\uC2DC \\uC2E4\\uD589\\uD558\\uC5EC \\uAD6C\\uB9E4\\uB97C \\uC644\\uB8CC\\uD560 \\uC218 \\uC788\\uB3C4\\uB85D \\uB3C4\\uC640\\uB4DC\\uB9AC\\uACA0\\uC2B5\\uB2C8\\uB2E4. ",\n            "continue": "\\uACC4\\uC18D"\n        },\n        "id": {\n            "windowMessage": "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembelian Anda. ",\n            "continue": "Lanjutkan"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat. ",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\\u2019t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.  ",\n            "continue": "Continue"\n        }\n    },\n    "GR": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "FR": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "ES": {\n        "es": {\n            "windowMessage": "\\u00BFNo ve el s\\u00EDmbolo de navegaci\\u00F3n segura de PayPal? Le ayudaremos a abrir de nuevo la ventana para completar la compra. ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "FI": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "EE": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "ru": {\n            "windowMessage": "\\u041D\\u0435 \\u043E\\u0442\\u043E\\u0431\\u0440\\u0430\\u0436\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u0435\\u0437\\u043E\\u043F\\u0430\\u0441\\u043D\\u0430\\u044F \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 PayPal \\u0432 \\u0431\\u0440\\u0430\\u0443\\u0437\\u0435\\u0440\\u0435? \\u041C\\u044B \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C \\u0432\\u0430\\u043C \\u043F\\u043E\\u0432\\u0442\\u043E\\u0440\\u043D\\u043E \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E, \\u0447\\u0442\\u043E\\u0431\\u044B \\u0437\\u0430\\u0432\\u0435\\u0440\\u0448\\u0438\\u0442\\u044C \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0443.\\u00A0 ",\n            "continue": "\\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u044C"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "DK": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "da": {\n            "windowMessage": "Kan du ikke se PayPals sikre browser? Vi hj\\u00E6lper dig med at genstarte vinduet, s\\u00E5 du kan betale.",\n            "continue": "Forts\\u00E6t"\n        }\n    },\n    "CZ": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u8D2D\\u7269\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "fr": {\n            "windowMessage": "Le navigateur s\\u00E9curis\\u00E9 de PayPal n\'appara\\u00EEt pas\\u00A0? Nous allons vous aider \\u00E0 rouvrir la fen\\u00EAtre pour finaliser votre achat.",\n            "continue": "Continuer"\n        },\n        "es": {\n            "windowMessage": "\\u00BFNo ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda concluir su compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "DE": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "CH": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        },\n        "de": {\n            "windowMessage": "Sie sehen das sichere Browserfenster von PayPal nicht?  k\\u00F6nnen Sie es wieder \\u00F6ffnen und Ihren Einkauf abschlie\\u00DFen.",\n            "continue": "Weiter"\n        }\n    },\n    "CA": {\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 de PayPal\\u00A0? Nous vous aiderons \\u00E0 relancer la fen\\u00EAtre afin d\'effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you relaunch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "C2": {\n        "zh": {\n            "windowMessage": "\\u6CA1\\u6709\\u627E\\u5230\\u5B89\\u5168\\u7684PayPal\\u6D4F\\u89C8\\u5668\\uFF1F\\u6211\\u4EEC\\u5C06\\u5E2E\\u52A9\\u60A8\\u91CD\\u542F\\u7A97\\u53E3\\u4EE5\\u5B8C\\u6210\\u4ED8\\u6B3E\\u3002\\u00A0 ",\n            "continue": "\\u7EE7\\u7EED"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your payment.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BE": {\n        "nl": {\n            "windowMessage": "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien.\\u00A0 ",\n            "continue": "Doorgaan"\n        },\n        "fr": {\n            "windowMessage": "Vous ne voyez pas le navigateur s\\u00E9curis\\u00E9 PayPal\\u00A0? Nous allons vous aider \\u00E0 relancer la fen\\u00EAtre pour effectuer votre achat.\\u00A0 ",\n            "continue": "Continuer"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "BR": {\n        "pt": {\n            "windowMessage": "N\\u00E3o est\\u00E1 vendo o navegador seguro do PayPal? Ajudaremos voc\\u00EA a reabrir a janela para concluir a compra.\\u00A0 ",\n            "continue": "Continuar"\n        },\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\\u2019ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    },\n    "AU": {\n        "en": {\n            "windowMessage": "Don\'t see the secure PayPal browser? We\'ll help you re-launch the window to complete your purchase.\\u00A0 ",\n            "continue": "Continue"\n        }\n    }\n}\n';
        },
        "./src/components/button/parentTemplate.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var parentTemplate = exports.parentTemplate = function parentTemplate() {
                var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return '\n\n    <style>\n        .paypal-button-parent {\n            font-size: 0;\n        }\n        \n        .paypal-button-parent.paypal-button-parent-label-checkout {\n            min-width: 80px;\n        }\n        \n        .paypal-button-parent.paypal-button-parent-label-credit {\n            min-width: 148px;\n        }\n    </style>\n\n    <div class="paypal-button-parent paypal-button-parent-label-' + (ctx.props.style && ctx.props.style.label || "checkout") + " " + ctx.CLASS.ELEMENT + '"></div>\n    \n';
            };
        },
        "./src/components/button/componentTemplate.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var componentTemplate = exports.componentTemplate = function componentTemplate() {
                var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return '\n    \n    <style>\n        html, body {\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            position: fixed;\n            top: 0;\n            left: 0;\n            margin: 0;\n            text-align: center;\n        }\n        .spinner {\n            height: 60vmin;\n            width: 60vmin;\n            margin-top: 20vmin;\n            display: inline-block;\n            z-index: 10;\n        }\n        .spinner .loader {\n            height: 100%;\n            width: 100%;\n    \n            box-sizing: border-box;\n    \n            border-width: 10vmin;\n            border-style: solid;\n            border-color: rgba(0, 0, 0, .2);\n            border-top-color: rgba(33, 128, 192, 0.8);\n            border-radius: 100%;\n    \n            -webkit-animation: rotation .7s infinite linear;\n            -moz-animation: rotation .7s infinite linear;\n            -o-animation: rotation .7s infinite linear;\n            animation: rotation .7s infinite linear;\n    \n        }\n    \n        @-webkit-keyframes rotation {\n            from {\n                -webkit-transform: rotate(0deg)\n            }\n            to {\n                -webkit-transform: rotate(359deg)\n            }\n        }\n        @-moz-keyframes rotation {\n            from {\n                -moz-transform: rotate(0deg)\n            }\n            to {\n                -moz-transform: rotate(359deg)\n            }\n        }\n        @-o-keyframes rotation {\n            from {\n                -o-transform: rotate(0deg)\n            }\n            to {\n                -o-transform: rotate(359deg)\n            }\n        }\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    </style>\n    \n    <div class="spinner">\n        <div id="loader" class="loader"></div>\n    </div>\n        \n';
            };
        },
        "./src/legacy/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _button = __webpack_require__("./src/legacy/button.js");
            Object.keys(_button).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _button[key];
                    }
                });
            });
            var _constants = __webpack_require__("./src/legacy/constants.js");
            Object.keys(_constants).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _constants[key];
                    }
                });
            });
            var _interface = __webpack_require__("./src/legacy/interface.js");
            Object.keys(_interface).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _interface[key];
                    }
                });
            });
            var _ready = __webpack_require__("./src/legacy/ready.js");
            Object.keys(_ready).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _ready[key];
                    }
                });
            });
        },
        "./src/legacy/button.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.renderButtons = renderButtons;
            exports.getHijackTargetElement = getHijackTargetElement;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _constants = __webpack_require__("./src/legacy/constants.js");
            var _common = __webpack_require__("./src/legacy/common.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var $logger = _client2["default"].prefix(_constants.LOG_PREFIX);
            var loadButtonJS = (0, _lib.memoize)(function() {
                $logger.debug("buttonjs_load");
                return (0, _lib.loadScript)(_config.config.buttonJSUrl)["catch"](function(err) {
                    $logger.info("buttonjs_load_error_retry", {
                        error: err.stack || err.toString()
                    });
                    return (0, _lib.loadScript)(_config.config.buttonJSUrl);
                }).then(function(result) {
                    $logger.debug("buttonjs_load_success");
                    return result;
                })["catch"](function(err) {
                    $logger.error("buttonjs_load_error", {
                        error: err.stack || err.toString()
                    });
                    throw err;
                });
            });
            function renderButton(id, container, options, label) {
                if (options.locale) {
                    var _normalizeLocale = (0, _common.normalizeLocale)(options.locale), country = _normalizeLocale.country, lang = _normalizeLocale.lang;
                    options.locale = lang + "_" + country;
                }
                var lc = options.locale || _config.config.locale.lang + "_" + _config.config.locale.country;
                var color = options.color || "gold";
                var shape = options.shape || "pill";
                var size = options.size || "small";
                var type = "button";
                label = label || "checkout";
                $logger.debug("render_button_lc_" + lc);
                $logger.debug("render_button_color_" + color);
                $logger.debug("render_button_shape_" + shape);
                $logger.debug("render_button_size_" + size);
                $logger.debug("render_button_label_" + label);
                var el = window.paypal.button.create(id, {
                    lc: lc,
                    color: color,
                    shape: shape,
                    size: size
                }, {
                    type: type,
                    label: label
                }).el;
                container.appendChild(el);
                try {
                    var visible = Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
                    $logger.info("in_page_button_" + (visible ? "visible" : "not_visible"));
                } catch (err) {}
                return el.childNodes[0];
            }
            function renderButtons(id, options) {
                return loadButtonJS().then(function() {
                    var buttons = [];
                    if (options.buttons instanceof Array) {
                        if (options.container) {
                            for (var _iterator = options.buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                                var _ref;
                                if (_isArray) {
                                    if (_i >= _iterator.length) break;
                                    _ref = _iterator[_i++];
                                } else {
                                    _i = _iterator.next();
                                    if (_i.done) break;
                                    _ref = _i.value;
                                }
                                var button = _ref;
                                if (button.container && button.container !== options.container) {
                                    $logger.warn("mismatched_container_and_button_passed", {
                                        options: options.container,
                                        button: button.container
                                    });
                                }
                            }
                        }
                        var _loop = function _loop() {
                            if (_isArray2) {
                                if (_i2 >= _iterator2.length) return "break";
                                _ref2 = _iterator2[_i2++];
                            } else {
                                _i2 = _iterator2.next();
                                if (_i2.done) return "break";
                                _ref2 = _i2.value;
                            }
                            var button = _ref2;
                            if (button) {
                                button.click = button.click || options.click;
                                button.condition = button.condition || options.condition;
                                if (button.button) {
                                    var buttonEl = (0, _lib.getElement)(button.button);
                                    if (!buttonEl) {
                                        $logger.warn("button_custom_element_not_found", {
                                            button: button.button
                                        });
                                        return "continue";
                                    }
                                    buttons.push({
                                        container: buttonEl,
                                        button: buttonEl,
                                        click: button.click,
                                        condition: button.condition
                                    });
                                } else if (button.container && button.container.length !== 0) {
                                    var buttonContainerElements = (0, _lib.getElements)(button.container);
                                    if (buttonContainerElements.length) {
                                        buttonContainerElements.forEach(function(container) {
                                            if (container.tagName && container.tagName.toLowerCase() === "a") {
                                                $logger.warn("container_a_tag");
                                            }
                                            var buttonEl = renderButton(id, container, button, button.type);
                                            buttons.push({
                                                container: container,
                                                button: buttonEl,
                                                click: button.click,
                                                condition: button.condition
                                            });
                                        });
                                    } else {
                                        $logger.warn("button_container_not_found", {
                                            container: JSON.stringify(button.container)
                                        });
                                    }
                                } else {
                                    $logger.warn("button_container_not_passed", {
                                        button: JSON.stringify(button)
                                    });
                                }
                            }
                        };
                        _loop2: for (var _iterator2 = options.buttons, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                            var _ref2;
                            var _ret = _loop();
                            switch (_ret) {
                              case "break":
                                break _loop2;

                              case "continue":
                                continue;
                            }
                        }
                    } else if (options.container && options.container.length !== 0) {
                        var labels = void 0;
                        if (typeof options.type === "string") {
                            labels = [ options.type ];
                        } else if (options.type instanceof Array) {
                            labels = options.type;
                        } else {
                            labels = [];
                        }
                        var containerElements = (0, _lib.getElements)(options.container);
                        if (containerElements.length) {
                            containerElements.forEach(function(container, i) {
                                if (container.tagName && container.tagName.toLowerCase() === "a") {
                                    $logger.warn("container_a_tag");
                                }
                                var buttonEl = renderButton(id, container, options, labels[i]);
                                buttons.push({
                                    container: container,
                                    button: buttonEl,
                                    click: options.click,
                                    condition: options.condition
                                });
                            });
                        } else {
                            $logger.warn("button_container_not_found", {
                                container: JSON.stringify(options.container)
                            });
                        }
                    }
                    return buttons;
                });
            }
            function getHijackTargetElement(button) {
                var form = button.form;
                if (form) {
                    $logger.debug("target_element_button_form");
                    return form;
                }
                var tagName = button.tagName && button.tagName.toLowerCase();
                if (tagName === "a") {
                    $logger.debug("target_element_link");
                    return button;
                }
                var parentElement = button.parentElement;
                var parentTagName = parentElement && parentElement.tagName && parentElement.tagName.toLowerCase();
                if ((tagName === "img" || tagName === "button") && parentTagName === "a") {
                    $logger.debug("target_element_parent_link");
                    return parentElement;
                }
                var grandparentElement = parentElement && parentElement.parentElement;
                var grandparentTagName = grandparentElement && grandparentElement.tagName && grandparentElement.tagName.toLowerCase();
                if (tagName === "button" && grandparentTagName === "a") {
                    $logger.debug("target_element_grandparent_link");
                    return button.parentElement && button.parentElement.parentElement;
                }
            }
        },
        "./src/legacy/constants.js": function(module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var LOG_PREFIX = exports.LOG_PREFIX = "paypal_legacy";
            var ATTRIBUTES = exports.ATTRIBUTES = {
                BUTTON: "data-paypal-button",
                MERCHANT_ID: "data-paypal-id",
                ENV: "data-env",
                SANDBOX: "data-sandbox"
            };
            var CLASSES = exports.CLASSES = {
                HIDDEN_BUTTON: "paypal-button-hidden"
            };
        },
        "./src/legacy/common.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _slicedToArray = function() {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }
                return function(arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();
            exports.normalizeLocale = normalizeLocale;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _config = __webpack_require__("./src/config/index.js");
            var _constants = __webpack_require__("./src/legacy/constants.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var $logger = _client2["default"].prefix(_constants.LOG_PREFIX);
            var DEFAULT_COUNTRY = "US";
            var DEFAULT_LANG = "en";
            function normalizeLocale(locale) {
                var _locale$split = locale.split("_"), _locale$split2 = _slicedToArray(_locale$split, 2), lang = _locale$split2[0], country = _locale$split2[1];
                if (!country) {
                    if (_config.config.locales[lang]) {
                        country = lang;
                        lang = null;
                    } else {
                        country = DEFAULT_COUNTRY;
                    }
                }
                if (!_config.config.locales[country]) {
                    $logger.warn("invalid_user_country", {
                        country: country
                    });
                    country = DEFAULT_COUNTRY;
                }
                if (!lang) {
                    lang = DEFAULT_LANG;
                }
                if (_config.config.locales[country].indexOf(lang) === -1) {
                    $logger.warn("invalid_user_lang", {
                        lang: lang
                    });
                    if (_config.config.locales[country].indexOf(DEFAULT_LANG) !== -1) {
                        lang = DEFAULT_LANG;
                    } else {
                        lang = _config.config.locales[country][0];
                    }
                }
                return {
                    country: country,
                    lang: lang
                };
            }
        },
        "./src/legacy/interface.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.apps = exports.checkout = undefined;
            var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            };
            exports.reset = reset;
            exports.setup = setup;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _components = __webpack_require__("./src/components/index.js");
            var _eligibility = __webpack_require__("./src/legacy/eligibility.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _compat = __webpack_require__("./src/compat/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _constants = __webpack_require__("./src/legacy/constants.js");
            var _button = __webpack_require__("./src/legacy/button.js");
            var _common = __webpack_require__("./src/legacy/common.js");
            var _util = __webpack_require__("./src/legacy/util.js");
            var _listener = __webpack_require__("./src/legacy/listener.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var $logger = _client2["default"].prefix(_constants.LOG_PREFIX);
            var checkout = exports.checkout = {};
            var apps = exports.apps = {
                checkout: checkout,
                Checkout: checkout
            };
            function reset() {
                $logger.debug("reset");
                checkout.initXO = initXO;
                checkout.startFlow = startFlow;
                checkout.closeFlow = closeFlow;
            }
            checkout.reset = reset;
            Object.defineProperty(checkout, "urlPrefix", {
                get: function get() {
                    return "" + _config.config.checkoutUrl + (_config.config.checkoutUrl.indexOf("?") === -1 ? "?" : "&") + "token=";
                }
            });
            if (window.xchild && !window.paypalCheckout) {
                window.paypalCheckout = window.xchild;
            }
            function matchUrlAndPaymentToken(item) {
                if (!item || !item.trim()) {
                    $logger.error("startflow_no_url_or_token", {
                        item: item
                    });
                    throw new Error("startflow_no_url_or_token");
                }
                var paymentToken = (0, _util.parseToken)(item);
                var url = paymentToken && item === paymentToken ? (0, _lib.extendUrl)(_config.config.checkoutUrl, {
                    token: paymentToken
                }) : item;
                if (url && !url.match(/^https?:\/\/|^\//)) {
                    $logger.warn("startflow_relative_url", {
                        url: url
                    });
                    if (url.toLowerCase().indexOf("ec-") === 0 && paymentToken) {
                        url = "" + _config.config.checkoutUrl + url;
                    }
                }
                if (url && paymentToken) {
                    if (url.indexOf(".paypal.com") !== -1) {
                        $logger.debug("startflow_paypalurl_with_token", {
                            item: item
                        });
                    } else {
                        $logger.debug("startflow_url_with_token", {
                            item: item
                        });
                    }
                } else if (url) {
                    $logger.debug("startflow_url_with_no_token", {
                        item: item
                    });
                } else if (paymentToken) {
                    $logger.debug("startflow_with_token", {
                        item: item
                    });
                }
                return {
                    paymentToken: paymentToken,
                    url: url
                };
            }
            function checkUrlAgainstEnv(url) {
                var paypalUrls = _config.config.paypalUrls;
                for (var _iterator = Object.keys(paypalUrls), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var env = _ref;
                    var paypalUrl = paypalUrls[env];
                    if (env === _config.ENV.TEST) {
                        continue;
                    }
                    if (env !== _config.config.env) {
                        if (url.indexOf(paypalUrl) === 0 || url.indexOf(paypalUrl.replace("//www.", "//")) === 0) {
                            $logger.warn("mismatched_env_startflow_url", {
                                env: _config.config.env,
                                url: url
                            });
                            (0, _util.redirect)(url);
                            throw new Error(url + " is not a " + _config.config.env + " url");
                        }
                    }
                }
            }
            function awaitPaymentTokenAndUrl() {
                var paymentTokenAndUrl = new _promise.SyncPromise(function(resolve, reject) {
                    checkout.initXO = function() {
                        $logger.warn("gettoken_initxo");
                    };
                    checkout.startFlow = (0, _lib.once)(function(item, opts) {
                        $logger.debug("gettoken_startflow", {
                            item: item
                        });
                        var _matchUrlAndPaymentTo = matchUrlAndPaymentToken(item), url = _matchUrlAndPaymentTo.url, paymentToken = _matchUrlAndPaymentTo.paymentToken;
                        checkUrlAgainstEnv(url);
                        return resolve({
                            url: url,
                            paymentToken: paymentToken
                        });
                    });
                });
                var url = paymentTokenAndUrl.then(function(result) {
                    return result.url;
                });
                var paymentToken = paymentTokenAndUrl.then(function(result) {
                    return result.paymentToken;
                });
                return {
                    url: url,
                    paymentToken: paymentToken
                };
            }
            var paypalCheckoutInited = false;
            var closeFlowCalled = false;
            function initPayPalCheckout() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                $logger.info("init_checkout");
                if (paypalCheckoutInited) {
                    $logger.warn("multiple_init_paypal_checkout");
                }
                if (closeFlowCalled) {
                    $logger.debug("init_after_closeflow");
                }
                paypalCheckoutInited = true;
                (0, _lib.checkpoint)("flow_start");
                var paypalCheckout = _components.Checkout.init(_extends({
                    uid: window.pp_uid,
                    onAuthorize: function onAuthorize(data, actions) {
                        $logger.info("payment_authorized");
                        _listener.onAuthorizeListener.trigger(data.paymentToken);
                        (0, _util.logRedirect)(data.returnUrl);
                        return actions.redirect(window);
                    },
                    onCancel: function onCancel(data, actions) {
                        $logger.info("payment_canceled");
                        (0, _util.logRedirect)(data.cancelUrl);
                        return actions.redirect(window);
                    },
                    fallback: function fallback(url) {
                        $logger.error("fallback_handler", {
                            url: url
                        });
                        this.destroy();
                        return (0, _util.redirect)(url);
                    }
                }, props));
                checkout.closeFlow = function(closeUrl) {
                    $logger.warn("closeflow");
                    closeFlowCalled = true;
                    reset();
                    paypalCheckout.destroy();
                    if (closeUrl) {
                        $logger.warn("closeflow_with_url", {
                            closeUrl: closeUrl
                        });
                        return (0, _util.redirect)(closeUrl);
                    }
                };
                return paypalCheckout;
            }
            function renderPayPalCheckout() {
                var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var hijackTarget = arguments[1];
                var urlProp = _promise.SyncPromise.resolve(props.url);
                var paymentToken = new _promise.SyncPromise(function(resolve) {
                    props.init = function(data) {
                        resolve(data.paymentToken);
                    };
                });
                var errorHandler = (0, _lib.once)(function(err) {
                    $logger.error("component_error", {
                        error: err.stack || err.toString()
                    });
                    if (hijackTarget) {
                        $logger.warn("render_error_hijack_revert_target");
                        hijackTarget.removeAttribute("target");
                    }
                    urlProp.then(function(url) {
                        $logger.warn("render_error_redirect_using_url");
                        return (0, _util.redirect)(url);
                    });
                    paymentToken.then(function(token) {
                        _client2["default"].warn("render_error_redirect_using_token");
                        return (0, _util.redirect)((0, _lib.extendUrl)(_config.config.checkoutUrl, {
                            token: token
                        }));
                    });
                });
                props.onError = errorHandler;
                var paypalCheckout = void 0;
                if (hijackTarget) {
                    delete props.url;
                    paypalCheckout = initPayPalCheckout(props);
                    paypalCheckout.hijack(hijackTarget);
                    paypalCheckout.runTimeout();
                    urlProp.then(function(url) {
                        $logger.warn("hijack_then_url_passed");
                        paypalCheckout.loadUrl(url);
                    });
                } else {
                    paypalCheckout = initPayPalCheckout(props);
                }
                var render = paypalCheckout.render(null, !hijackTarget);
                checkout.win = paypalCheckout.window;
                return render["catch"](errorHandler);
            }
            function handleClick(clickHandler, event) {
                $logger.debug("button_click_handler");
                try {
                    clickHandler.call(null, event);
                } catch (err) {
                    $logger.error("click_handler_error", {
                        error: err.stack || err.toString()
                    });
                }
            }
            function handleClickHijack(element) {
                var targetElement = (0, _button.getHijackTargetElement)(element);
                if (!targetElement) {
                    return $logger.error("target_element_not_found");
                }
                $logger.info("init_paypal_checkout_hijack");
                var _awaitPaymentTokenAnd = awaitPaymentTokenAndUrl(), url = _awaitPaymentTokenAnd.url, paymentToken = _awaitPaymentTokenAnd.paymentToken;
                var token = void 0;
                paymentToken.then(function(result) {
                    token = result;
                });
                renderPayPalCheckout({
                    url: url,
                    payment: function payment() {
                        return _promise.SyncPromise.resolve(token);
                    }
                }, targetElement);
            }
            function listenClick(container, button, clickHandler, condition) {
                var element = container.tagName.toLowerCase() === "a" ? container : button;
                (0, _lib.checkpoint)("flow_listenclick");
                var isClick = clickHandler instanceof Function;
                if (element.hasAttribute("data-paypal-click-listener")) {
                    return $logger.warn("button_already_has_paypal_click_listener");
                }
                element.setAttribute("data-paypal-click-listener", "");
                var targetElement = (0, _button.getHijackTargetElement)(element);
                if (targetElement && isClick) {
                    $logger.info("button_link_or_form");
                }
                element.addEventListener("click", function(event) {
                    (0, _lib.checkpoint)("flow_buttonclick");
                    var eligible = (0, _eligibility.isLegacyEligible)();
                    if ((0, _lib.supportsPopups)()) {
                        $logger.debug("click_popups_supported");
                        if (!eligible) {
                            $logger.debug("click_popups_supported_but_ineligible");
                        }
                    } else {
                        $logger.debug("click_popups_not_supported");
                        if (eligible) {
                            $logger.debug("click_popups_not_supported_but_eligible");
                        }
                    }
                    if (!isClick) {
                        if (!eligible) {
                            return $logger.debug("ineligible_listenclick");
                        }
                    }
                    $logger.info("button_click");
                    if (condition instanceof Function) {
                        if (condition.call()) {
                            $logger.info("button_click_condition_enabled");
                        } else {
                            return $logger.info("button_click_condition_disabled");
                        }
                    }
                    if (isClick) {
                        return handleClick(clickHandler, event);
                    } else {
                        return handleClickHijack(element);
                    }
                });
            }
            var setupCalled = false;
            function setup(id) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                (0, _lib.checkpoint)("flow_setup");
                id = id || "merchant";
                $logger.info("setup", {
                    id: id,
                    env: options.environment,
                    options: (0, _lib.safeJSON)(options)
                });
                if (setupCalled) {
                    $logger.debug("setup_called_multiple_times");
                }
                setupCalled = true;
                if (options.environment) {
                    if (options.environment === "live") {
                        options.environment = _config.ENV.PRODUCTION;
                    }
                    if (_config.config.paypalUrls[options.environment]) {
                        _config.config.env = options.environment;
                    } else {
                        options.environment = _config.config.env;
                        $logger.warn("invalid_env", {
                            badenv: options.environment
                        });
                    }
                }
                if (options.locale) {
                    _config.config.locale = (0, _common.normalizeLocale)(options.locale);
                    _config.config.customCountry = true;
                }
                if (options.buttons) {
                    if ((0, _lib.getElements)(options.buttons).length) {
                        options.button = options.buttons;
                        delete options.buttons;
                    }
                }
                if (options.button && options.button.length !== 0) {
                    if (options.container) {
                        $logger.warn("button_and_container_passed", {
                            button: options.button,
                            container: options.container
                        });
                        if (Array.isArray(options.button)) {
                            options.button = options.button.concat(options.container);
                        } else {
                            options.button = [ options.button ].concat(options.container);
                        }
                        delete options.container;
                    }
                    var buttonElements = (0, _lib.getElements)(options.button);
                    if (buttonElements.length) {
                        buttonElements.forEach(function(el) {
                            $logger.info("listen_click_custom_button");
                            listenClick(el, el, options.click, options.condition);
                        });
                    } else {
                        $logger.warn("button_element_not_found", {
                            element: JSON.stringify(options.button)
                        });
                    }
                }
                return _promise.SyncPromise.all([ !(0, _lib.isIEIntranet)() ? (0, _compat.setupPostBridge)(_config.config.env) : null, (0, 
                _button.renderButtons)(id, options).then(function(buttons) {
                    buttons.forEach(function(button) {
                        $logger.info("listen_click_paypal_button");
                        listenClick(button.container, button.button, button.click, button.condition);
                    });
                }) ]);
            }
            checkout.setup = setup;
            function initXO() {
                $logger.debug("initxo");
                if (!(0, _eligibility.isLegacyEligible)()) {
                    return $logger.debug("ineligible_initxo");
                }
                var _awaitPaymentTokenAnd2 = awaitPaymentTokenAndUrl(), url = _awaitPaymentTokenAnd2.url, paymentToken = _awaitPaymentTokenAnd2.paymentToken;
                $logger.info("init_paypal_checkout_initxo");
                renderPayPalCheckout({
                    url: url,
                    payment: paymentToken
                });
            }
            checkout.initXO = initXO;
            function startFlow(item) {
                $logger.debug("startflow", {
                    item: item
                });
                var _matchUrlAndPaymentTo2 = matchUrlAndPaymentToken(item), paymentToken = _matchUrlAndPaymentTo2.paymentToken, url = _matchUrlAndPaymentTo2.url;
                checkUrlAgainstEnv(url);
                if (!(0, _eligibility.isLegacyEligible)()) {
                    $logger.debug("ineligible_startflow_global", {
                        url: url
                    });
                    (0, _util.redirect)(url);
                    return;
                }
                $logger.info("init_paypal_checkout_startflow");
                renderPayPalCheckout({
                    url: url,
                    payment: paymentToken
                });
            }
            checkout.startFlow = startFlow;
            function closeFlow(closeUrl) {
                $logger.warn("closeflow_not_opened");
                if (closeUrl) {
                    $logger.warn("closeflow_with_url", {
                        closeUrl: closeUrl
                    });
                    (0, _util.redirect)(closeUrl);
                    return;
                }
                console.warn("Checkout is not open, can not be closed");
            }
            checkout.closeFlow = closeFlow;
        },
        "./src/legacy/eligibility.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            exports.isUnsupportedIE = isUnsupportedIE;
            exports.isLegacyEligible = isLegacyEligible;
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _listener = __webpack_require__("./src/legacy/listener.js");
            function isUnsupportedIE() {
                return Boolean((0, _lib.getUserAgent)().match(/MSIE (5|6|7|8)\./i));
            }
            var throttle = (0, _lib.getThrottle)("v4_mobile_device", _config.config.throttles.v4_mobile_device);
            function isLegacyEligible() {
                var currentAgent = (0, _lib.getAgent)();
                if ((typeof currentAgent === "undefined" ? "undefined" : _typeof(currentAgent)) === "object" && currentAgent.length === 2) {
                    if (parseFloat(currentAgent[1]) < _config.config.SUPPORTED_AGENTS[currentAgent[0]]) {
                        return false;
                    }
                }
                if ((0, _lib.isWebView)() || isUnsupportedIE() || (0, _lib.isIEIntranet)()) {
                    return false;
                }
                if ((0, _lib.isDevice)()) {
                    throttle.logStart();
                    return throttle.isEnabled();
                }
                return true;
            }
            (function logReturn() {
                if (!(0, _lib.isDevice)()) {
                    return;
                }
                _listener.onAuthorizeListener.once(function(token) {
                    throttle.log("authorize", {
                        fltk: token
                    });
                });
                var token = (0, _lib.getReturnToken)();
                if (token) {
                    throttle.logComplete({
                        fltk: token
                    });
                }
            })();
        },
        "./src/legacy/listener.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.onAuthorizeListener = undefined;
            var _lib = __webpack_require__("./src/lib/index.js");
            var onAuthorizeListener = exports.onAuthorizeListener = (0, _lib.eventEmitter)();
        },
        "./src/compat/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _postBridge = __webpack_require__("./src/compat/postBridge.js");
            Object.keys(_postBridge).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _postBridge[key];
                    }
                });
            });
            var _fallback = __webpack_require__("./src/compat/fallback.js");
            Object.keys(_fallback).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _fallback[key];
                    }
                });
            });
            var _polyfill = __webpack_require__("./src/compat/polyfill.js");
            Object.keys(_polyfill).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _polyfill[key];
                    }
                });
            });
        },
        "./src/compat/postBridge.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setupPostBridge = setupPostBridge;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _components = __webpack_require__("./src/components/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            _src2["default"].on("meta", function(_ref) {
                var source = _ref.source, data = _ref.data;
                if (data.iframeEligible) {
                    (0, _components.enableCheckoutIframe)();
                }
                _client2["default"].info(data.iframeEligible ? "lightbox_eligible_" + data.iframeEligibleReason : "lightbox_ineligible_" + data.iframeEligibleReason);
                if (_config.config.locales[data.locale.country] && !_config.config.customCountry) {
                    _config.config.locale.country = data.locale.country;
                    if (_config.config.locales[data.locale.country].indexOf(data.locale.lang) !== -1) {
                        _config.config.locale.lang = data.locale.lang;
                    } else {
                        _config.config.locale.lang = _config.config.locales[data.locale.country][0];
                    }
                }
            });
            function setupPostBridge(env) {
                return _promise.SyncPromise["try"](function() {
                    var postBridgeUrl = _config.config.postBridgeUrls[env];
                    var postBridgeDomain = _config.config.paypalDomains[env];
                    if (!_src2["default"].needsBridgeForDomain(postBridgeDomain)) {
                        return _client2["default"].debug("post_bridge_not_required", {
                            env: env
                        });
                    }
                    _client2["default"].debug("setup_post_bridge", {
                        env: env
                    });
                    return _src2["default"].openBridge(postBridgeUrl, postBridgeDomain)["catch"](function(err) {
                        if (_src2["default"].needsBridge({
                            domain: postBridgeDomain
                        })) {
                            throw err;
                        } else {
                            _client2["default"].debug("open_post_bridge_transient_failure");
                        }
                    });
                });
            }
        },
        "./src/compat/fallback.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _src = __webpack_require__("./node_modules/post-robot/src/index.js");
            var _src2 = _interopRequireDefault(_src);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function match(str, pattern) {
                var regmatch = str.match(pattern);
                if (regmatch) {
                    return regmatch[1];
                }
            }
            var onAuthorize = void 0;
            if ((0, _lib.isPayPalDomain)()) {
                _src2["default"].on("onLegacyPaymentAuthorize", {
                    window: window.parent
                }, function(_ref) {
                    var data = _ref.data;
                    onAuthorize = data.method;
                });
            }
            window.onLegacyPaymentAuthorize = function(method) {
                onAuthorize = method;
                return _promise.SyncPromise["try"](function() {
                    if (!(0, _lib.isPayPalDomain)()) {
                        return _src2["default"].openBridge(_config.config.postBridgeUrl, _config.config.postBridgeDomain).then(function(postBridge) {
                            return _src2["default"].send(postBridge, "onLegacyPaymentAuthorize", {
                                method: method
                            }, {
                                domain: _config.config.paypalDomain
                            }).then(_lib.noop);
                        });
                    }
                });
            };
            window.watchForLegacyFallback = function(win) {
                var interval = setInterval(function() {
                    try {
                        var isLegacy = win.document.body.innerHTML.indexOf("merchantpaymentweb") !== -1 || win.document.body.innerHTML.indexOf("wapapp") !== -1;
                        if (!isLegacy || win.ppxoWatching || win.closed) {
                            return;
                        }
                        win.ppxoWatching = true;
                        var send = win.XMLHttpRequest.prototype.send;
                        win.XMLHttpRequest.prototype.send = function() {
                            if (this._patched) {
                                return send.apply(this, arguments);
                            }
                            this._patched = true;
                            var self = this;
                            var onload = this.onload;
                            function listener() {
                                if (self.readyState === self.DONE && self.status === 200 && self.responseText) {
                                    try {
                                        var response = JSON.parse(self.responseText.replace("while (1);", ""));
                                        if (response.type === "redirect" && response.url && onAuthorize) {
                                            var url = response.url;
                                            clearInterval(interval);
                                            win.close();
                                            onAuthorize({
                                                returnUrl: url,
                                                paymentToken: match(url, /token=((EC-)?[A-Z0-9]+)/),
                                                billingToken: match(url, /ba_token=((BA-)?[A-Z0-9]+)/),
                                                payerID: match(url, /PayerID=([A-Z0-9]+)/),
                                                paymentID: match(url, /paymentId=((PAY-)?[A-Z0-9]+)/)
                                            });
                                            onAuthorize = null;
                                            if (win.PAYPAL && win.PAYPAL.Checkout && win.PAYPAL.Checkout.XhrResponse && win.PAYPAL.Checkout.XhrResponse.RESPONSE_TYPES) {
                                                Object.defineProperty(win.PAYPAL.Checkout.XhrResponse.RESPONSE_TYPES, "Redirect", {
                                                    value: Math.random().toString()
                                                });
                                            }
                                            if (win.mob && win.mob.Xhr && win.mob.Xhr.prototype._xhrOnReady) {
                                                win.mob.Xhr.prototype._xhrOnReady = _lib.noop;
                                            }
                                        }
                                    } catch (err) {
                                        return;
                                    }
                                }
                                if (onload) {
                                    return onload.apply(this, arguments);
                                }
                            }
                            if (this.onload !== listener) {
                                try {
                                    delete this.onload;
                                    this.onload = listener;
                                    Object.defineProperty(this, "onload", {
                                        get: function get() {
                                            return listener;
                                        },
                                        set: function set(handler) {
                                            onload = handler;
                                        }
                                    });
                                } catch (err) {}
                            }
                            return send.apply(this, arguments);
                        };
                    } catch (err) {}
                }, 100);
            };
            window.onLegacyFallback = window.watchForLegacyFallback;
        },
        "./src/compat/polyfill.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _polyfill = __webpack_require__("./node_modules/es6-symbol/polyfill.js");
            var _polyfill2 = _interopRequireDefault(_polyfill);
            var _array = __webpack_require__("./node_modules/es6-iterator/array.js");
            var _array2 = _interopRequireDefault(_array);
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            if (!window.Symbol) {
                window.Symbol = _polyfill2["default"];
            }
            if (!Array.prototype[_polyfill2["default"].iterator]) {
                Array.prototype[_polyfill2["default"].iterator] = function iterator() {
                    return new _array2["default"](this);
                };
            }
            window.Symbol = _polyfill2["default"];
            if (!window.Promise) {
                window.Promise = _promise.SyncPromise;
            }
        },
        "./node_modules/es6-symbol/polyfill.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var d = __webpack_require__("./node_modules/d/index.js"), validateSymbol = __webpack_require__("./node_modules/es6-symbol/validate-symbol.js"), create = Object.create, defineProperties = Object.defineProperties, defineProperty = Object.defineProperty, objPrototype = Object.prototype, NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null), isNativeSafe;
            if (typeof Symbol === "function") {
                NativeSymbol = Symbol;
                try {
                    String(NativeSymbol());
                    isNativeSafe = true;
                } catch (ignore) {}
            }
            var generateName = function() {
                var created = create(null);
                return function(desc) {
                    var postfix = 0, name, ie11BugWorkaround;
                    while (created[desc + (postfix || "")]) {
                        ++postfix;
                    }
                    desc += postfix || "";
                    created[desc] = true;
                    name = "@@" + desc;
                    defineProperty(objPrototype, name, d.gs(null, function(value) {
                        if (ie11BugWorkaround) return;
                        ie11BugWorkaround = true;
                        defineProperty(this, name, d(value));
                        ie11BugWorkaround = false;
                    }));
                    return name;
                };
            }();
            HiddenSymbol = function _Symbol(description) {
                if (this instanceof HiddenSymbol) throw new TypeError("TypeError: Symbol is not a constructor");
                return SymbolPolyfill(description);
            };
            module.exports = SymbolPolyfill = function _Symbol2(description) {
                var symbol;
                if (this instanceof _Symbol2) throw new TypeError("TypeError: Symbol is not a constructor");
                if (isNativeSafe) return NativeSymbol(description);
                symbol = create(HiddenSymbol.prototype);
                description = description === undefined ? "" : String(description);
                return defineProperties(symbol, {
                    __description__: d("", description),
                    __name__: d("", generateName(description))
                });
            };
            defineProperties(SymbolPolyfill, {
                for: d(function(key) {
                    if (globalSymbols[key]) return globalSymbols[key];
                    return globalSymbols[key] = SymbolPolyfill(String(key));
                }),
                keyFor: d(function(s) {
                    var key;
                    validateSymbol(s);
                    for (key in globalSymbols) {
                        if (globalSymbols[key] === s) return key;
                    }
                }),
                hasInstance: d("", NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill("hasInstance")),
                isConcatSpreadable: d("", NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill("isConcatSpreadable")),
                iterator: d("", NativeSymbol && NativeSymbol.iterator || SymbolPolyfill("iterator")),
                match: d("", NativeSymbol && NativeSymbol.match || SymbolPolyfill("match")),
                replace: d("", NativeSymbol && NativeSymbol.replace || SymbolPolyfill("replace")),
                search: d("", NativeSymbol && NativeSymbol.search || SymbolPolyfill("search")),
                species: d("", NativeSymbol && NativeSymbol.species || SymbolPolyfill("species")),
                split: d("", NativeSymbol && NativeSymbol.split || SymbolPolyfill("split")),
                toPrimitive: d("", NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill("toPrimitive")),
                toStringTag: d("", NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill("toStringTag")),
                unscopables: d("", NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill("unscopables"))
            });
            defineProperties(HiddenSymbol.prototype, {
                constructor: d(SymbolPolyfill),
                toString: d("", function() {
                    return this.__name__;
                })
            });
            defineProperties(SymbolPolyfill.prototype, {
                toString: d(function() {
                    return "Symbol (" + validateSymbol(this).__description__ + ")";
                }),
                valueOf: d(function() {
                    return validateSymbol(this);
                })
            });
            defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d("", function() {
                var symbol = validateSymbol(this);
                if ((typeof symbol === "undefined" ? "undefined" : _typeof(symbol)) === "symbol") return symbol;
                return symbol.toString();
            }));
            defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));
            defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));
            defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));
        },
        "./node_modules/d/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var assign = __webpack_require__("./node_modules/es5-ext/object/assign/index.js"), normalizeOpts = __webpack_require__("./node_modules/es5-ext/object/normalize-options.js"), isCallable = __webpack_require__("./node_modules/es5-ext/object/is-callable.js"), contains = __webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"), d;
            d = module.exports = function(dscr, value) {
                var c, e, w, options, desc;
                if (arguments.length < 2 || typeof dscr !== "string") {
                    options = value;
                    value = dscr;
                    dscr = null;
                } else {
                    options = arguments[2];
                }
                if (dscr == null) {
                    c = w = true;
                    e = false;
                } else {
                    c = contains.call(dscr, "c");
                    e = contains.call(dscr, "e");
                    w = contains.call(dscr, "w");
                }
                desc = {
                    value: value,
                    configurable: c,
                    enumerable: e,
                    writable: w
                };
                return !options ? desc : assign(normalizeOpts(options), desc);
            };
            d.gs = function(dscr, get, set) {
                var c, e, options, desc;
                if (typeof dscr !== "string") {
                    options = set;
                    set = get;
                    get = dscr;
                    dscr = null;
                } else {
                    options = arguments[3];
                }
                if (get == null) {
                    get = undefined;
                } else if (!isCallable(get)) {
                    options = get;
                    get = set = undefined;
                } else if (set == null) {
                    set = undefined;
                } else if (!isCallable(set)) {
                    options = set;
                    set = undefined;
                }
                if (dscr == null) {
                    c = true;
                    e = false;
                } else {
                    c = contains.call(dscr, "c");
                    e = contains.call(dscr, "e");
                }
                desc = {
                    get: get,
                    set: set,
                    configurable: c,
                    enumerable: e
                };
                return !options ? desc : assign(normalizeOpts(options), desc);
            };
        },
        "./node_modules/es5-ext/object/assign/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__("./node_modules/es5-ext/object/assign/shim.js");
        },
        "./node_modules/es5-ext/object/assign/is-implemented.js": function(module, exports) {
            "use strict";
            module.exports = function() {
                var assign = Object.assign, obj;
                if (typeof assign !== "function") return false;
                obj = {
                    foo: "raz"
                };
                assign(obj, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                });
                return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
            };
        },
        "./node_modules/es5-ext/object/assign/shim.js": function(module, exports, __webpack_require__) {
            "use strict";
            var keys = __webpack_require__("./node_modules/es5-ext/object/keys/index.js"), value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js"), max = Math.max;
            module.exports = function(dest, src) {
                var error, i, l = max(arguments.length, 2), assign;
                dest = Object(value(dest));
                assign = function assign(key) {
                    try {
                        dest[key] = src[key];
                    } catch (e) {
                        if (!error) error = e;
                    }
                };
                for (i = 1; i < l; ++i) {
                    src = arguments[i];
                    keys(src).forEach(assign);
                }
                if (error !== undefined) throw error;
                return dest;
            };
        },
        "./node_modules/es5-ext/object/keys/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__("./node_modules/es5-ext/object/keys/shim.js");
        },
        "./node_modules/es5-ext/object/keys/is-implemented.js": function(module, exports) {
            "use strict";
            module.exports = function() {
                try {
                    Object.keys("primitive");
                    return true;
                } catch (e) {
                    return false;
                }
            };
        },
        "./node_modules/es5-ext/object/keys/shim.js": function(module, exports) {
            "use strict";
            var keys = Object.keys;
            module.exports = function(object) {
                return keys(object == null ? object : Object(object));
            };
        },
        "./node_modules/es5-ext/object/valid-value.js": function(module, exports) {
            "use strict";
            module.exports = function(value) {
                if (value == null) throw new TypeError("Cannot use null or undefined");
                return value;
            };
        },
        "./node_modules/es5-ext/object/normalize-options.js": function(module, exports) {
            "use strict";
            var forEach = Array.prototype.forEach, create = Object.create;
            var process = function process(src, obj) {
                var key;
                for (key in src) {
                    obj[key] = src[key];
                }
            };
            module.exports = function(options) {
                var result = create(null);
                forEach.call(arguments, function(options) {
                    if (options == null) return;
                    process(Object(options), result);
                });
                return result;
            };
        },
        "./node_modules/es5-ext/object/is-callable.js": function(module, exports) {
            "use strict";
            module.exports = function(obj) {
                return typeof obj === "function";
            };
        },
        "./node_modules/es5-ext/string/#/contains/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__("./node_modules/es5-ext/string/#/contains/shim.js");
        },
        "./node_modules/es5-ext/string/#/contains/is-implemented.js": function(module, exports) {
            "use strict";
            var str = "razdwatrzy";
            module.exports = function() {
                if (typeof str.contains !== "function") return false;
                return str.contains("dwa") === true && str.contains("foo") === false;
            };
        },
        "./node_modules/es5-ext/string/#/contains/shim.js": function(module, exports) {
            "use strict";
            var indexOf = String.prototype.indexOf;
            module.exports = function(searchString) {
                return indexOf.call(this, searchString, arguments[1]) > -1;
            };
        },
        "./node_modules/es6-symbol/validate-symbol.js": function(module, exports, __webpack_require__) {
            "use strict";
            var isSymbol = __webpack_require__("./node_modules/es6-symbol/is-symbol.js");
            module.exports = function(value) {
                if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
                return value;
            };
        },
        "./node_modules/es6-symbol/is-symbol.js": function(module, exports) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            module.exports = function(x) {
                if (!x) return false;
                if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "symbol") return true;
                if (!x.constructor) return false;
                if (x.constructor.name !== "Symbol") return false;
                return x[x.constructor.toStringTag] === "Symbol";
            };
        },
        "./node_modules/es6-iterator/array.js": function(module, exports, __webpack_require__) {
            "use strict";
            var setPrototypeOf = __webpack_require__("./node_modules/es5-ext/object/set-prototype-of/index.js"), contains = __webpack_require__("./node_modules/es5-ext/string/#/contains/index.js"), d = __webpack_require__("./node_modules/d/index.js"), Iterator = __webpack_require__("./node_modules/es6-iterator/index.js"), defineProperty = Object.defineProperty, ArrayIterator;
            ArrayIterator = module.exports = function(arr, kind) {
                if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
                Iterator.call(this, arr);
                if (!kind) kind = "value"; else if (contains.call(kind, "key+value")) kind = "key+value"; else if (contains.call(kind, "key")) kind = "key"; else kind = "value";
                defineProperty(this, "__kind__", d("", kind));
            };
            if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);
            ArrayIterator.prototype = Object.create(Iterator.prototype, {
                constructor: d(ArrayIterator),
                _resolve: d(function(i) {
                    if (this.__kind__ === "value") return this.__list__[i];
                    if (this.__kind__ === "key+value") return [ i, this.__list__[i] ];
                    return i;
                }),
                toString: d(function() {
                    return "[object Array Iterator]";
                })
            });
        },
        "./node_modules/es5-ext/object/set-prototype-of/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")() ? Object.setPrototypeOf : __webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js");
        },
        "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js": function(module, exports) {
            "use strict";
            var create = Object.create, getPrototypeOf = Object.getPrototypeOf, x = {};
            module.exports = function() {
                var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
                if (typeof setPrototypeOf !== "function") return false;
                return getPrototypeOf(setPrototypeOf(customCreate(null), x)) === x;
            };
        },
        "./node_modules/es5-ext/object/set-prototype-of/shim.js": function(module, exports, __webpack_require__) {
            "use strict";
            var isObject = __webpack_require__("./node_modules/es5-ext/object/is-object.js"), value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js"), isPrototypeOf = Object.prototype.isPrototypeOf, defineProperty = Object.defineProperty, nullDesc = {
                configurable: true,
                enumerable: false,
                writable: true,
                value: undefined
            }, validate;
            validate = function validate(obj, prototype) {
                value(obj);
                if (prototype === null || isObject(prototype)) return obj;
                throw new TypeError("Prototype must be null or an object");
            };
            module.exports = function(status) {
                var fn, set;
                if (!status) return null;
                if (status.level === 2) {
                    if (status.set) {
                        set = status.set;
                        fn = function fn(obj, prototype) {
                            set.call(validate(obj, prototype), prototype);
                            return obj;
                        };
                    } else {
                        fn = function fn(obj, prototype) {
                            validate(obj, prototype).__proto__ = prototype;
                            return obj;
                        };
                    }
                } else {
                    fn = function self(obj, prototype) {
                        var isNullBase;
                        validate(obj, prototype);
                        isNullBase = isPrototypeOf.call(self.nullPolyfill, obj);
                        if (isNullBase) delete self.nullPolyfill.__proto__;
                        if (prototype === null) prototype = self.nullPolyfill;
                        obj.__proto__ = prototype;
                        if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
                        return obj;
                    };
                }
                return Object.defineProperty(fn, "level", {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: status.level
                });
            }(function() {
                var x = Object.create(null), y = {}, set, desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
                if (desc) {
                    try {
                        set = desc.set;
                        set.call(x, y);
                    } catch (ignore) {}
                    if (Object.getPrototypeOf(x) === y) return {
                        set: set,
                        level: 2
                    };
                }
                x.__proto__ = y;
                if (Object.getPrototypeOf(x) === y) return {
                    level: 2
                };
                x = {};
                x.__proto__ = y;
                if (Object.getPrototypeOf(x) === y) return {
                    level: 1
                };
                return false;
            }());
            __webpack_require__("./node_modules/es5-ext/object/create.js");
        },
        "./node_modules/es5-ext/object/is-object.js": function(module, exports) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var map = {
                function: true,
                object: true
            };
            module.exports = function(x) {
                return x != null && map[typeof x === "undefined" ? "undefined" : _typeof(x)] || false;
            };
        },
        "./node_modules/es5-ext/object/create.js": function(module, exports, __webpack_require__) {
            "use strict";
            var create = Object.create, shim;
            if (!__webpack_require__("./node_modules/es5-ext/object/set-prototype-of/is-implemented.js")()) {
                shim = __webpack_require__("./node_modules/es5-ext/object/set-prototype-of/shim.js");
            }
            module.exports = function() {
                var nullObject, props, desc;
                if (!shim) return create;
                if (shim.level !== 1) return create;
                nullObject = {};
                props = {};
                desc = {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: undefined
                };
                Object.getOwnPropertyNames(Object.prototype).forEach(function(name) {
                    if (name === "__proto__") {
                        props[name] = {
                            configurable: true,
                            enumerable: false,
                            writable: true,
                            value: undefined
                        };
                        return;
                    }
                    props[name] = desc;
                });
                Object.defineProperties(nullObject, props);
                Object.defineProperty(shim, "nullPolyfill", {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: nullObject
                });
                return function(prototype, props) {
                    return create(prototype === null ? nullObject : prototype, props);
                };
            }();
        },
        "./node_modules/es6-iterator/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var clear = __webpack_require__("./node_modules/es5-ext/array/#/clear.js"), assign = __webpack_require__("./node_modules/es5-ext/object/assign/index.js"), callable = __webpack_require__("./node_modules/es5-ext/object/valid-callable.js"), value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js"), d = __webpack_require__("./node_modules/d/index.js"), autoBind = __webpack_require__("./node_modules/d/auto-bind.js"), _Symbol = __webpack_require__("./node_modules/es6-symbol/index.js"), defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, _Iterator;
            module.exports = _Iterator = function Iterator(list, context) {
                if (!(this instanceof _Iterator)) return new _Iterator(list, context);
                defineProperties(this, {
                    __list__: d("w", value(list)),
                    __context__: d("w", context),
                    __nextIndex__: d("w", 0)
                });
                if (!context) return;
                callable(context.on);
                context.on("_add", this._onAdd);
                context.on("_delete", this._onDelete);
                context.on("_clear", this._onClear);
            };
            defineProperties(_Iterator.prototype, assign({
                constructor: d(_Iterator),
                _next: d(function() {
                    var i;
                    if (!this.__list__) return;
                    if (this.__redo__) {
                        i = this.__redo__.shift();
                        if (i !== undefined) return i;
                    }
                    if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
                    this._unBind();
                }),
                next: d(function() {
                    return this._createResult(this._next());
                }),
                _createResult: d(function(i) {
                    if (i === undefined) return {
                        done: true,
                        value: undefined
                    };
                    return {
                        done: false,
                        value: this._resolve(i)
                    };
                }),
                _resolve: d(function(i) {
                    return this.__list__[i];
                }),
                _unBind: d(function() {
                    this.__list__ = null;
                    delete this.__redo__;
                    if (!this.__context__) return;
                    this.__context__.off("_add", this._onAdd);
                    this.__context__.off("_delete", this._onDelete);
                    this.__context__.off("_clear", this._onClear);
                    this.__context__ = null;
                }),
                toString: d(function() {
                    return "[object Iterator]";
                })
            }, autoBind({
                _onAdd: d(function(index) {
                    if (index >= this.__nextIndex__) return;
                    ++this.__nextIndex__;
                    if (!this.__redo__) {
                        defineProperty(this, "__redo__", d("c", [ index ]));
                        return;
                    }
                    this.__redo__.forEach(function(redo, i) {
                        if (redo >= index) this.__redo__[i] = ++redo;
                    }, this);
                    this.__redo__.push(index);
                }),
                _onDelete: d(function(index) {
                    var i;
                    if (index >= this.__nextIndex__) return;
                    --this.__nextIndex__;
                    if (!this.__redo__) return;
                    i = this.__redo__.indexOf(index);
                    if (i !== -1) this.__redo__.splice(i, 1);
                    this.__redo__.forEach(function(redo, i) {
                        if (redo > index) this.__redo__[i] = --redo;
                    }, this);
                }),
                _onClear: d(function() {
                    if (this.__redo__) clear.call(this.__redo__);
                    this.__nextIndex__ = 0;
                })
            })));
            defineProperty(_Iterator.prototype, _Symbol.iterator, d(function() {
                return this;
            }));
            defineProperty(_Iterator.prototype, _Symbol.toStringTag, d("", "Iterator"));
        },
        "./node_modules/es5-ext/array/#/clear.js": function(module, exports, __webpack_require__) {
            "use strict";
            var value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js");
            module.exports = function() {
                value(this).length = 0;
                return this;
            };
        },
        "./node_modules/es5-ext/object/valid-callable.js": function(module, exports) {
            "use strict";
            module.exports = function(fn) {
                if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
                return fn;
            };
        },
        "./node_modules/d/auto-bind.js": function(module, exports, __webpack_require__) {
            "use strict";
            var copy = __webpack_require__("./node_modules/es5-ext/object/copy.js"), map = __webpack_require__("./node_modules/es5-ext/object/map.js"), callable = __webpack_require__("./node_modules/es5-ext/object/valid-callable.js"), validValue = __webpack_require__("./node_modules/es5-ext/object/valid-value.js"), bind = Function.prototype.bind, defineProperty = Object.defineProperty, hasOwnProperty = Object.prototype.hasOwnProperty, define;
            define = function define(name, desc, bindTo) {
                var value = validValue(desc) && callable(desc.value), dgs;
                dgs = copy(desc);
                delete dgs.writable;
                delete dgs.value;
                dgs.get = function() {
                    if (hasOwnProperty.call(this, name)) return value;
                    desc.value = bind.call(value, bindTo == null ? this : this[bindTo]);
                    defineProperty(this, name, desc);
                    return this[name];
                };
                return dgs;
            };
            module.exports = function(props) {
                var bindTo = arguments[1];
                return map(props, function(desc, name) {
                    return define(name, desc, bindTo);
                });
            };
        },
        "./node_modules/es5-ext/object/copy.js": function(module, exports, __webpack_require__) {
            "use strict";
            var assign = __webpack_require__("./node_modules/es5-ext/object/assign/index.js"), value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js");
            module.exports = function(obj) {
                var copy = Object(value(obj));
                if (copy !== obj) return copy;
                return assign({}, obj);
            };
        },
        "./node_modules/es5-ext/object/map.js": function(module, exports, __webpack_require__) {
            "use strict";
            var callable = __webpack_require__("./node_modules/es5-ext/object/valid-callable.js"), forEach = __webpack_require__("./node_modules/es5-ext/object/for-each.js"), call = Function.prototype.call;
            module.exports = function(obj, cb) {
                var o = {}, thisArg = arguments[2];
                callable(cb);
                forEach(obj, function(value, key, obj, index) {
                    o[key] = call.call(cb, thisArg, value, key, obj, index);
                });
                return o;
            };
        },
        "./node_modules/es5-ext/object/for-each.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es5-ext/object/_iterate.js")("forEach");
        },
        "./node_modules/es5-ext/object/_iterate.js": function(module, exports, __webpack_require__) {
            "use strict";
            var callable = __webpack_require__("./node_modules/es5-ext/object/valid-callable.js"), value = __webpack_require__("./node_modules/es5-ext/object/valid-value.js"), bind = Function.prototype.bind, call = Function.prototype.call, keys = Object.keys, propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
            module.exports = function(method, defVal) {
                return function(obj, cb) {
                    var list, thisArg = arguments[2], compareFn = arguments[3];
                    obj = Object(value(obj));
                    callable(cb);
                    list = keys(obj);
                    if (compareFn) {
                        list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
                    }
                    if (typeof method !== "function") method = list[method];
                    return call.call(method, list, function(key, index) {
                        if (!propertyIsEnumerable.call(obj, key)) return defVal;
                        return call.call(cb, thisArg, obj[key], key, obj, index);
                    });
                };
            };
        },
        "./node_modules/es6-symbol/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            module.exports = __webpack_require__("./node_modules/es6-symbol/is-implemented.js")() ? Symbol : __webpack_require__("./node_modules/es6-symbol/polyfill.js");
        },
        "./node_modules/es6-symbol/is-implemented.js": function(module, exports) {
            "use strict";
            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            var validTypes = {
                object: true,
                symbol: true
            };
            module.exports = function() {
                var symbol;
                if (typeof Symbol !== "function") return false;
                symbol = Symbol("test symbol");
                try {
                    String(symbol);
                } catch (e) {
                    return false;
                }
                if (!validTypes[_typeof(Symbol.iterator)]) return false;
                if (!validTypes[_typeof(Symbol.toPrimitive)]) return false;
                if (!validTypes[_typeof(Symbol.toStringTag)]) return false;
                return true;
            };
        },
        "./src/legacy/util.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.logRedirect = logRedirect;
            exports.redirect = redirect;
            exports.isToken = isToken;
            exports.parseToken = parseToken;
            exports.hasToken = hasToken;
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _constants = __webpack_require__("./src/legacy/constants.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var $logger = _client2["default"].prefix(_constants.LOG_PREFIX);
            var redirected = false;
            function logRedirect(location) {
                if (redirected) {
                    $logger.warn("multiple_redirects");
                }
                redirected = true;
                if (location && (location.match(/PayerID=/) || location.match(/ba_token=/))) {
                    (0, _lib.checkpoint)("flow_complete");
                }
                $logger.flush();
            }
            function redirect(url) {
                return _promise.SyncPromise["try"](function() {
                    if (!url) {
                        throw new Error("Redirect url undefined");
                    }
                    if (_config.config.env === _config.ENV.TEST && (0, _lib.urlWillRedirectPage)(url)) {
                        return (0, _lib.redirect)(window, "#fullpageRedirect?url=" + url);
                    }
                    logRedirect(url);
                    return (0, _lib.redirect)(window, url);
                });
            }
            function isToken(item) {
                return Boolean(item && item.match(/^(EC-)?[A-Z0-9]{17}$/));
            }
            function parseToken(token) {
                if (!token) {
                    return;
                }
                token = decodeURIComponent(decodeURIComponent(token));
                if (token.match(/^(EC-)?[A-Z0-9]{17}$/)) {
                    return token;
                }
                var match = token.match(/token=((EC-)?[A-Z0-9]{17})/);
                if (match) {
                    return match[1];
                }
                match = token.match(/(EC-[A-Z0-9]{17})/);
                if (match) {
                    return match[1];
                }
            }
            function hasToken(item) {
                return Boolean(parseToken(item));
            }
        },
        "./src/legacy/ready.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _lib = __webpack_require__("./src/lib/index.js");
            var _config = __webpack_require__("./src/config/index.js");
            var _constants = __webpack_require__("./src/legacy/constants.js");
            var _interface = __webpack_require__("./src/legacy/interface.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            var $logger = _client2["default"].prefix(_constants.LOG_PREFIX);
            function invokeReady(method) {
                (0, _lib.onDocumentReady)(function() {
                    $logger.debug("paypal_checkout_ready");
                    setTimeout(function() {
                        if (!window.paypal) {
                            $logger.error("paypal_checkout_ready_no_window_paypal");
                        }
                        method();
                    }, 1);
                });
            }
            (0, _lib.onKey)(window, "paypalCheckoutReady", function(method) {
                if (typeof method === "function") {
                    var oneTimeReady = function oneTimeReady() {
                        if (!method.called) {
                            method.called = true;
                            return method.apply(this, arguments);
                        }
                    };
                    invokeReady(oneTimeReady);
                    return oneTimeReady;
                }
            });
            (0, _lib.onDocumentReady)(function() {
                var buttons = Array.prototype.slice.call(document.querySelectorAll("[" + _constants.ATTRIBUTES.BUTTON + "]"));
                if (buttons && buttons.length) {
                    $logger.debug("data_paypal_button", {
                        number: buttons.length
                    });
                    for (var _iterator = buttons, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                        var _ref;
                        if (_isArray) {
                            if (_i >= _iterator.length) break;
                            _ref = _iterator[_i++];
                        } else {
                            _i = _iterator.next();
                            if (_i.done) break;
                            _ref = _i.value;
                        }
                        var button = _ref;
                        var id = button.getAttribute(_constants.ATTRIBUTES.MERCHANT_ID);
                        var environment = void 0;
                        if (button.hasAttribute(_constants.ATTRIBUTES.ENV)) {
                            environment = button.getAttribute(_constants.ATTRIBUTES.ENV);
                        } else if (button.hasAttribute(_constants.ATTRIBUTES.SANDBOX)) {
                            environment = _config.ENV.SANDBOX;
                        }
                        (0, _interface.setup)(id, {
                            environment: environment,
                            button: button
                        });
                    }
                }
                Array.prototype.slice.call(document.getElementsByClassName(_constants.CLASSES.HIDDEN_BUTTON)).forEach(function(el) {
                    el.className = el.className.replace(_constants.CLASSES.HIDDEN_BUTTON, "");
                });
            });
        },
        "./src/setup.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.setup = setup;
            var _client = __webpack_require__("./node_modules/beaver-logger/client/index.js");
            var _client2 = _interopRequireDefault(_client);
            var _config = __webpack_require__("./src/config/index.js");
            var _lib = __webpack_require__("./src/lib/index.js");
            var _components = __webpack_require__("./src/components/index.js");
            var _compat = __webpack_require__("./src/compat/index.js");
            var _promise = __webpack_require__("./node_modules/sync-browser-mocks/src/promise.js");
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function domainToEnv(domain) {
                for (var _iterator = Object.keys(_config.config.paypalUrls), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
                    var _ref;
                    if (_isArray) {
                        if (_i >= _iterator.length) break;
                        _ref = _iterator[_i++];
                    } else {
                        _i = _iterator.next();
                        if (_i.done) break;
                        _ref = _i.value;
                    }
                    var _env = _ref;
                    if (_config.config.paypalUrls[_env] === domain) {
                        return _env;
                    }
                }
            }
            function setDomainEnv(domain) {
                var currentDomainEnv = domainToEnv(domain);
                if (currentDomainEnv && currentDomainEnv !== "test") {
                    _config.config.env = currentDomainEnv;
                }
            }
            setDomainEnv(window.location.protocol + "//" + window.location.host);
            (0, _lib.initLogger)();
            _promise.SyncPromise.onPossiblyUnhandledException(function(err) {
                (0, _lib.beacon)("unhandled_error", {
                    message: err ? err.toString() : "undefined",
                    stack: err.stack || err.toString(),
                    errtype: {}.toString.call(err)
                });
            });
            function getCurrentScript() {
                var scripts = Array.prototype.slice.call(document.getElementsByTagName("script"));
                for (var _iterator2 = scripts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
                    var _ref2;
                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }
                    var script = _ref2;
                    if (script.src && script.src.replace(/^https?:/, "").split("?")[0] === _config.config.scriptUrl || script.hasAttribute("data-paypal-checkout")) {
                        return script;
                    }
                    if (script.src && script.src.indexOf("paypal.checkout.v4.js") !== -1) {
                        return script;
                    }
                }
                if (document.currentScript) {
                    _client2["default"].debug("current_script_not_recognized", {
                        src: document.currentScript.src
                    });
                }
            }
            var currentScript = getCurrentScript();
            var currentProtocol = window.location.protocol.split(":")[0];
            function setup() {
                var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, env = _ref3.env, stage = _ref3.stage, apiStage = _ref3.apiStage, paypalUrl = _ref3.paypalUrl, state = _ref3.state, ppobjects = _ref3.ppobjects, lightbox = _ref3.lightbox, postBridge = _ref3.postBridge, logLevel = _ref3.logLevel;
                (0, _lib.checkForCommonErrors)();
                if (env) {
                    if (!_config.config.paypalUrls[env]) {
                        throw new Error("Invalid env: " + env);
                    }
                    delete _config.config.env;
                    _config.config.env = env;
                }
                if (stage) {
                    delete _config.config.stage;
                    _config.config.stage = stage;
                    if (!env) {
                        delete _config.config.env;
                        _config.config.env = _config.ENV.STAGE;
                    }
                }
                if (apiStage) {
                    delete _config.config.apiStage;
                    _config.config.apiStage = apiStage;
                }
                if (paypalUrl) {
                    delete _config.config.paypalUrl;
                    _config.config.paypalUrl = paypalUrl;
                    setDomainEnv(_config.config.paypalUrl);
                }
                if (state) {
                    delete _config.config.state;
                    _config.config.state = state;
                }
                if (ppobjects) {
                    _config.config.ppobjects = true;
                }
                if (lightbox) {
                    (0, _components.enableCheckoutIframe)();
                }
                if (postBridge) {
                    (0, _compat.setupPostBridge)(_config.config.env);
                }
                if (logLevel) {
                    (0, _lib.setLogLevel)(logLevel);
                }
                _client2["default"].info("setup_" + _config.config.env);
                _client2["default"].debug("current_protocol_" + currentProtocol);
            }
            if (currentScript) {
                setup({
                    env: currentScript.getAttribute("data-env"),
                    stage: currentScript.getAttribute("data-stage"),
                    apiStage: currentScript.getAttribute("data-api-stage"),
                    paypalUrl: currentScript.getAttribute("data-paypal-url"),
                    state: currentScript.getAttribute("data-state"),
                    lightbox: currentScript.hasAttribute("data-enable-lightbox"),
                    postBridge: currentScript.hasAttribute("data-enable-bridge"),
                    logLevel: currentScript.getAttribute("data-log-level"),
                    ppobjects: true
                });
                var scriptProtocol = currentScript.src.split(":")[0];
                _client2["default"].debug("current_script_protocol_" + scriptProtocol);
                _client2["default"].debug("current_script_" + (currentProtocol === scriptProtocol ? "match" : "mismatch") + "_protocol");
            } else {
                _client2["default"].debug("no_current_script");
                if (document.currentScript) {
                    _client2["default"].debug("current_script_not_recognized", {
                        src: document.currentScript.src
                    });
                }
            }
        },
        "./node_modules/xcomponent/src/drivers/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _script = __webpack_require__("./node_modules/xcomponent/src/drivers/script.js");
            Object.keys(_script).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _script[key];
                    }
                });
            });
            var _react = __webpack_require__("./node_modules/xcomponent/src/drivers/react.js");
            Object.keys(_react).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _react[key];
                    }
                });
            });
            var _angular = __webpack_require__("./node_modules/xcomponent/src/drivers/angular.js");
            Object.keys(_angular).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _angular[key];
                    }
                });
            });
            var _ember = __webpack_require__("./node_modules/xcomponent/src/drivers/ember.js");
            Object.keys(_ember).forEach(function(key) {
                if (key === "default" || key === "__esModule") return;
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: function get() {
                        return _ember[key];
                    }
                });
            });
        }
    });
});


//# sourceMappingURL=checkout.lib.js.map