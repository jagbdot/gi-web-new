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
})({"Y5og":[function(require,module,exports) {
Vue.component("svgPlayground", {
  template: "#v-svg",
  data: function data() {
    return {
      test: 10,
      filters: [{
        noise1: {
          bf: {
            name: 'BaseFrequency',
            value: 100,
            min: 1,
            max: 10000,
            mult: 1 / 1000
          },
          oc: {
            name: 'Octaves',
            value: 1,
            min: 1,
            max: 10,
            mult: 1
          }
        }
      }, {
        noise2: {
          bf: {
            name: 'BaseFrequency',
            value: 100,
            min: 1,
            max: 10000,
            mult: 1 / 1000
          },
          oc: {
            name: 'Octaves',
            value: 1,
            min: 1,
            max: 10,
            mult: 1
          }
        }
      }],
      filtersAnim: [{
        noise1: {
          bf: {
            name: 'BaseFrequency',
            value: 100,
            min: 1,
            max: 10000,
            mult: 1 / 1000
          },
          oc: {
            name: 'Octaves',
            value: 1,
            min: 1,
            max: 10,
            mult: 1
          }
        }
      }, {
        noise2: {
          bf: {
            name: 'BaseFrequency',
            value: 100,
            min: 1,
            max: 10000,
            mult: 1 / 1000
          },
          oc: {
            name: 'Octaves',
            value: 1,
            min: 1,
            max: 10,
            mult: 1
          }
        }
      }]
    };
  },
  watch: {
    filters: {
      handler: function handler() {
        console.log('update');
        var turb1 = this.$refs.turb1;
        var turb2 = this.$refs.turb2;
        var noise1 = this.filters[0].noise1;
        var noise2 = this.filters[1].noise2;
        turb1.baseFrequencyX.baseVal = noise1.bf.value * noise1.bf.mult;
        turb1.baseFrequencyY.baseVal = noise1.bf.value * noise1.bf.mult;
        turb1.numOctaves.baseVal = noise1.oc.value * noise1.oc.mult;
        turb2.baseFrequencyX.baseVal = noise2.bf.value * noise2.bf.mult;
        turb2.baseFrequencyY.baseVal = noise2.bf.value * noise2.bf.mult;
        turb2.numOctaves.baseVal = noise2.oc.value * noise2.oc.mult;
      },
      deep: true
    }
  }
});
new Vue({
  el: "#app"
});
},{}]},{},["Y5og"], null)