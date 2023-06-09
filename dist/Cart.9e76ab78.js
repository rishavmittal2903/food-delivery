// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("285922ae70b07ef1");
var ErrorOverlay = require("350d2f178f93a8d1");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"285922ae70b07ef1":"786KC","350d2f178f93a8d1":"1dldy"}],"k8hhB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dedb1c3c9e76ab78";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h8J3U":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ad24 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ad24.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reactRedux = require("8d0592f6f9b183a7");
var _cartSlice = require("d0c1f4bcbd4441c6");
var _CartItems = _interopRequireDefault(require("bd720fa4f53e6e59"));
var _Checkout = _interopRequireDefault(require("b6944752a23d6417"));
var _jsxRuntime = require("4cdaae89c17d52d0");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Cart = ()=>{
    const dispatch = (0, _reactRedux.useDispatch)();
    const totalQuantity = (0, _reactRedux.useSelector)((store)=>store.cart.cartTotalQuantity);
    const cartItems = (0, _reactRedux.useSelector)((store)=>store.cart.items);
    const handleClearCart = ()=>{
        dispatch((0, _cartSlice.clearCart)());
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "my-2 mx-4 flex justify-center flex-1 flex-wrap sm:flex-nowrap",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "w-full sm:w-[50%]",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "my-4 flex justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                                className: "text-center font-bold text-xl font-serif sm:text-3xl",
                                children: [
                                    "Cart Items - ",
                                    totalQuantity
                                ]
                            }),
                            Object.keys(cartItems).length > 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                                className: "bg-lime-500 p-2 ml-2 text-white rounded-md",
                                onClick: ()=>handleClearCart(),
                                children: "Clear Cart"
                            })
                        ]
                    }),
                    Object.keys(cartItems).length > 0 && /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        "data-testid": "cart-items",
                        className: "flex flex-col",
                        children: Object.values(cartItems).map((item)=>/*#__PURE__*/ (0, _jsxRuntime.jsx)(_CartItems.default, {
                                ...item
                            }, item.id))
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)(_Checkout.default, {})
        ]
    });
};
_c = Cart;
var _default = Cart;
exports.default = _default;
var _c;
$RefreshReg$(_c, "Cart");

  $parcel$ReactRefreshHelpers$ad24.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"8d0592f6f9b183a7":"bdVon","d0c1f4bcbd4441c6":"5RXlr","bd720fa4f53e6e59":"fu7yu","b6944752a23d6417":"h7e9o","4cdaae89c17d52d0":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"fu7yu":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1824 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1824.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reactRedux = require("ddd7c050dba8929");
var _cartSlice = require("660520b374cb9a69");
var _constants = require("b5bb3fba1f96bdb0");
var _jsxRuntime = require("b5c19f7adfd6fdc8");
const CartItems = (props)=>{
    var _cartItems$id2;
    const { id , name , price , defaultPrice , imageId , isVeg  } = props;
    const dispatch = (0, _reactRedux.useDispatch)();
    const cartItems = (0, _reactRedux.useSelector)((store)=>store.cart.items);
    const handleAddItem = (item)=>{
        dispatch((0, _cartSlice.addItem)(item));
        dispatch((0, _cartSlice.getTotalAmount)());
    };
    const handleRemoveItem = (item)=>{
        dispatch((0, _cartSlice.removeItem)(item));
        dispatch((0, _cartSlice.getTotalAmount)());
    };
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "flex justify-between mb-6 p-4 rounded-md border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s]",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "w-[calc(100%_-_140px)]",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: isVeg ? "flex justify-center items-center w-4 h-4 border-2 border-green-600" : "flex justify-center items-center w-4 h-4 border-2 border-red-600",
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                            className: isVeg ? "w-2 h-2 rounded-full bg-green-600" : "w-2 h-2 rounded-full bg-red-600"
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "mt-2 font-bold text-base",
                        children: name
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "mt-2 font-mono",
                        children: [
                            "₹",
                            (price || defaultPrice) / 100
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                className: "ml-2 w-[118px] h-[120px] relative",
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                        className: "w-[118px] h-24",
                        children: imageId === "" ? /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                            loading: "lazy",
                            className: "w-[118px] h-24 rounded-lg object-cover",
                            src: "https://t3.ftcdn.net/jpg/00/70/49/52/360_F_70495270_2aJc2punK2LJVhMCU7zxJdjRaKBS6wjy.jpg"
                        }) : /*#__PURE__*/ (0, _jsxRuntime.jsx)("img", {
                            loading: "lazy",
                            className: "w-[118px] h-24 rounded-lg object-cover",
                            src: _constants.MENU_IMG_CDN_URL + imageId
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                        className: "absolute top-[72px] left-[50%] w-24 h-9 translate-x-[-50%] flex items-center justify-around bg-lime-500 hover:bg-lime-600 rounded text-sm text-white font-bold",
                        children: [
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                                className: "p-2",
                                onClick: ()=>{
                                    var _cartItems$id;
                                    return ((_cartItems$id = cartItems[id]) === null || _cartItems$id === void 0 ? void 0 : _cartItems$id.quantity) && handleRemoveItem({
                                        ...props
                                    });
                                },
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: "-"
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: ((_cartItems$id2 = cartItems[id]) === null || _cartItems$id2 === void 0 ? void 0 : _cartItems$id2.quantity) || 0
                                })
                            }),
                            /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                                className: "p-2 z-30",
                                onClick: ()=>handleAddItem({
                                        ...props
                                    }),
                                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                                    children: "+"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
_c = CartItems;
var _default = CartItems;
exports.default = _default;
var _c;
$RefreshReg$(_c, "CartItems");

  $parcel$ReactRefreshHelpers$1824.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"ddd7c050dba8929":"bdVon","660520b374cb9a69":"5RXlr","b5bb3fba1f96bdb0":"3huJa","b5c19f7adfd6fdc8":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"h7e9o":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$769c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$769c.prelude(module);

try {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reactRedux = require("2b2bd8bfb9fabfca");
var _jsxRuntime = require("866a15b5bfaaeab0");
const CheckOut = ()=>{
    const cartAmount = (0, _reactRedux.useSelector)((store)=>store.cart.cartTotalAmount);
    return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
        className: "w-[350px] h-[300px] flex flex-col justify-between p-6 bg-slate-100 border-2 border-[#e7e9ed] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] sm:mt-[72px] sm:ml-8",
        children: [
            /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                        className: "text-2xl text-black-800 font-bold",
                        children: "Order Summary"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                        className: "text-base mt-2 font-semibold",
                        children: [
                            "Price - ₹",
                            cartAmount / 100
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsx)("h1", {
                        className: "text-base mt-2 font-semibold",
                        children: "Delivery Charges - Free"
                    }),
                    /*#__PURE__*/ (0, _jsxRuntime.jsxs)("h1", {
                        className: "text-base mt-2 font-semibold",
                        children: [
                            "Subtotal - ₹",
                            cartAmount / 100
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("button", {
                    className: "flex justify-center w-full p-2 uppercase rounded-lg bg-lime-500 mt-2 hover:bg-lime-600",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("span", {
                        className: "font-medium text-white p-1",
                        children: "Proceed to Checkout"
                    })
                })
            })
        ]
    });
};
_c = CheckOut;
var _default = CheckOut;
exports.default = _default;
var _c;
$RefreshReg$(_c, "CheckOut");

  $parcel$ReactRefreshHelpers$769c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"2b2bd8bfb9fabfca":"bdVon","866a15b5bfaaeab0":"6AEwr","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","k8hhB"], null, "parcelRequire8396")

//# sourceMappingURL=Cart.9e76ab78.js.map
