/* @flow */

import { SyncPromise } from 'sync-browser-mocks/src/promise';
import $logger from 'beaver-logger/client';
import xcomponent from 'xcomponent/src';

import { parentTemplate } from './parentTemplate';
import { componentTemplate } from './componentTemplate';

import { determineParameterFromToken, determineUrlFromToken } from './util';
import { setupPopupBridgeProxy } from './popupBridge';

import { isDevice, request, getQueryParam, redirect as redir, hasMetaViewPort, setLogLevel } from '../../lib';
import { config, ENV } from '../../config';

import { getPopupBridgeOpener, awaitPopupBridgeOpener } from '../common';

import contentJSON from './content.json';
let content = JSON.parse(contentJSON);


function addHeader(name, value) : void {

    if (!window.$Api) {
        return;
    }

    if (window.$Api.addHeader) {
        return window.$Api.addHeader(name, value);
    }
}

export let Checkout = xcomponent.create({

    tag: 'paypal-checkout',
    name: 'ppcheckout',

    buildUrl(instance, props) : string | SyncPromise<string> {
        let env = instance.props.env || config.env;

        return props.payment().then(token => {
            if (!token) {
                throw new Error(`Expected payment id or token to be passed, got ${token}`);
            }

            return determineUrlFromToken(env, token);
        });
    },

    remoteRenderDomain: config.paypal_domain_regex,

    get bridgeUrls() : Object {
        return config.postBridgeUrls;
    },

    get bridgeDomains() : Object {
        return config.paypalDomains;
    },

    contexts: {
        iframe: false,
        lightbox: false,
        popup: true
    },

    get version() : string {
        return config.ppobjects ? __FILE_VERSION__ : __MINOR_VERSION__;
    },

    get domains() : Object {
        return config.paypalDomains;
    },

    componentTemplate,
    parentTemplate(ctx = {}) : string {

        ctx.content = content[config.locale.country][config.locale.lang];
        return parentTemplate(ctx);
    },

    props: {

        env: {
            type: 'string',
            required: false,
            queryParam: true,

            def() : string {
                return config.env;
            },

            validate(env) {
                if (!config.paypalUrls[env]) {
                    throw new Error(`Invalid env: ${env}`);
                }
            }
        },

        stage: {
            type: 'string',
            required: false,
            queryParam: true,

            def(props) : ?string {
                let env = props.env || config.env;

                if (env === ENV.STAGE || env === ENV.LOCAL) {
                    return config.stage;
                }
            }
        },

        locale: {
            type: 'string',
            required: false,
            queryParam: 'locale.x'
        },


        client: {
            type: 'object',
            required: false,
            def() : Object {
                return {};
            },
            sendToChild: false,

            validate(client, props) {
                let env = props.env || config.env;

                if (!client[env]) {
                    throw new Error(`Client ID not found for env: ${env}`);
                }

                if (client[env].match(/^(.)\1+$/)) {
                    throw new Error(`Invalid client ID: ${client[env]}`);
                }
            }
        },

        payment: {
            type: 'string',
            required: false,
            getter: true,
            memoize: true,
            timeout: __TEST__ ? 500 : 10 * 1000,
            queryParam(value = '') : string {
                return determineParameterFromToken(value);
            },
            childDef() : ?string {
                return getQueryParam('token');
            },
            alias: 'billingAgreement'
        },

        commit: {
            type: 'boolean',
            required: false
        },

        onAuthorize: {
            type: 'function',
            required: true,
            once: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions = {}) : SyncPromise<void> {

                        let close = () => {
                            return SyncPromise.try(() => {
                                if (actions.close) {
                                    return actions.close();
                                }
                            }).then(() => {
                                return this.closeComponent();
                            });
                        };

                        let redirect = (win, url) => {
                            return SyncPromise.all([
                                redir(win || window.top, url || data.returnUrl),
                                close()
                            ]);
                        };

                        return SyncPromise.try(() => {

                            try {
                                let isButton = window.location.href.indexOf('/webapps/hermes/button') !== -1;
                                let isGuest  = this.window.location.href.indexOf('/webapps/xoonboarding') !== -1;

                                if (isButton && isGuest) {
                                    return request({
                                        win: this.window,
                                        method: 'get',
                                        url: '/webapps/hermes/api/auth'
                                    }).then(result => {
                                        if (result && result.data && result.data.access_token) {
                                            addHeader('x-paypal-internal-euat', result.data.access_token);
                                        }
                                    }).catch(err2 => {
                                        // pass
                                    });
                                }

                            } catch (err) {
                                // pass
                            }

                        }).then(() => {
                            return original.call(this, data, { ...actions, close, redirect });
                        }).finally(() => {
                            return this.close();
                        });
                    };
                }
            }
        },

        onAuth: {
            type: 'function',
            required: false,
            sameDomain: true
        },

        onCancel: {
            type: 'function',
            required: false,
            once: true,
            noop: true,

            decorate(original) : ?Function {
                if (original) {
                    return function(data, actions = {}) : SyncPromise<void> {

                        let close = () => {
                            return SyncPromise.try(() => {
                                if (actions.close) {
                                    return actions.close();
                                }
                            }).then(() => {
                                return this.closeComponent();
                            });
                        };

                        let redirect = (win, url) => {
                            return SyncPromise.all([
                                redir(win || window.top, url || data.cancelUrl),
                                close()
                            ]);
                        };

                        return SyncPromise.try(() => {
                            return original.call(this, data, { ...actions, close, redirect });
                        }).finally(() => {
                            this.close();
                        });
                    };
                }
            }
        },

        init: {
            type: 'function',
            required: false,
            once: true,

            decorate(original) : Function {
                return function(data) : void {

                    this.paymentToken = data.paymentToken;
                    this.cancelUrl    = data.cancelUrl;

                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
        },

        onClose: {
            type: 'function',
            required: false,
            once: true,
            promisify: true,

            def() : Function {
                return function(reason) : void {
                    let CLOSE_REASONS = xcomponent.CONSTANTS.CLOSE_REASONS;

                    if (this.props.onCancel && [ CLOSE_REASONS.CLOSE_DETECTED, CLOSE_REASONS.USER_CLOSED ].indexOf(reason) !== -1) {

                        if (this.paymentToken && this.cancelUrl) {

                            $logger.info(`close_trigger_cancel`);

                            return this.props.onCancel({
                                paymentToken: this.paymentToken,
                                cancelUrl:    this.cancelUrl
                            });

                        } else {

                            $logger.warn(`close_no_token_cancelurl`);
                        }
                    }
                };
            }
        },

        onError: {
            type: 'function',
            required: false,
            promisify: true,
            noop: true,
            once: true
        },

        fallback: {
            type: 'function',
            required: false,
            once: true,

            def() : Function {
                return function(url) : SyncPromise<void> {
                    $logger.warn('fallback', { url });
                    return window.onLegacyPaymentAuthorize(this.props.onAuthorize);
                };
            }
        },

        logLevel: {
            type: 'string',
            required: false,
            get value() : string {
                return config.logLevel;
            }
        },

        popupBridge: {
            type: 'object',
            required: false,
            get value() : Object {
                return {
                    open: getPopupBridgeOpener(),
                    awaitOpener: awaitPopupBridgeOpener
                };
            }
        },

        testAction: {
            type: 'string',
            required: false,
            def() : string {
                return 'checkout';
            }
        }
    },

    autoResize: {
        width: false,
        height: true
    },

    get dimensions() : { width : string | number, height : string | number } {

        if (isDevice()) {
            return {
                width: '100%',
                height: '100%'
            };
        }

        if (this.contexts.lightbox) {
            return {
                width: '450px',
                height: '300px'
            };
        }

        return {
            width: '450px',
            height: '535px'
        };
    }
});

setupPopupBridgeProxy(Checkout);

let enableCheckoutIframeTimeout;

function allowCheckoutIframe() : boolean {

    if (isDevice()) {
        return false;
    }

    if (!hasMetaViewPort()) {
        return false;
    }

    return true;
}

export function enableCheckoutIframe({ force = false, timeout = 5 * 60 * 1000 } : { force? : boolean, timeout? : number } = {}) {

    if (!force && !allowCheckoutIframe()) {
        return;
    }

    Checkout.contexts.lightbox = true;
    Checkout.contexts.iframe = true;

    if (enableCheckoutIframeTimeout) {
        clearTimeout(enableCheckoutIframeTimeout);
    }

    enableCheckoutIframeTimeout = setTimeout(() => {
        Checkout.contexts.lightbox = false;
        Checkout.contexts.iframe = false;
    }, timeout);
}

if (Checkout.isChild()) {
    
    if (window.xprops.logLevel) {
        setLogLevel(window.xprops.logLevel);
    }

    awaitPopupBridgeOpener();
}
