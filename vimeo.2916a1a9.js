// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"EX8f":[function(require,module,exports) {
var Froogaloop = function () {
  function e(a) {
    return new e.fn.init(a);
  }

  function g(a, c, b) {
    if (!b.contentWindow.postMessage) return !1;
    a = JSON.stringify({
      method: a,
      value: c
    });
    b.contentWindow.postMessage(a, h);
  }

  function l(a) {
    var c, b;

    try {
      c = JSON.parse(a.data), b = c.event || c.method;
    } catch (e) {}

    "ready" != b || k || (k = !0);
    if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
    "*" === h && (h = a.origin);
    a = c.value;
    var m = c.data,
        f = "" === f ? null : c.player_id;
    c = f ? d[f][b] : d[b];
    b = [];
    if (!c) return !1;
    void 0 !== a && b.push(a);
    m && b.push(m);
    f && b.push(f);
    return 0 < b.length ? c.apply(null, b) : c.call();
  }

  function n(a, c, b) {
    b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c;
  }

  var d = {},
      k = !1,
      h = "*";
  e.fn = e.prototype = {
    element: null,
    init: function init(a) {
      "string" === typeof a && (a = document.getElementById(a));
      this.element = a;
      return this;
    },
    api: function api(a, c) {
      if (!this.element || !a) return !1;
      var b = this.element,
          d = "" !== b.id ? b.id : null,
          e = c && c.constructor && c.call && c.apply ? null : c,
          f = c && c.constructor && c.call && c.apply ? c : null;
      f && n(a, f, d);
      g(a, e, b);
      return this;
    },
    addEvent: function addEvent(a, c) {
      if (!this.element) return !1;
      var b = this.element,
          d = "" !== b.id ? b.id : null;
      n(a, c, d);
      "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
      return this;
    },
    removeEvent: function removeEvent(a) {
      if (!this.element) return !1;
      var c = this.element,
          b = "" !== c.id ? c.id : null;

      a: {
        if (b && d[b]) {
          if (!d[b][a]) {
            b = !1;
            break a;
          }

          d[b][a] = null;
        } else {
          if (!d[a]) {
            b = !1;
            break a;
          }

          d[a] = null;
        }

        b = !0;
      }

      "ready" != a && b && g("removeEventListener", a, c);
    }
  };
  e.fn.init.prototype = e.fn;
  window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
  return window.Froogaloop = window.$f = e;
}();

var iframe = $('#vimeo-player')[0];
var player = $f(iframe);
$('.play').hide();
$('.unmute').hide();
$('.stop').click(function () {
  player.api('pause');
  $('.play').toggle();
  $('.stop').hide();
});
$('.play').click(function () {
  player.api('play');
  $('.stop').toggle();
  $('.play').hide();
});
$('.mute').click(function () {
  player.api('setVolume', 0);
  $('.unmute').toggle();
  $('.mute').hide();
});
$('.unmute').click(function () {
  player.api('setVolume', 1);
  $('.mute').toggle();
  $('.unmute').hide();
});
},{}]},{},["EX8f"], null)