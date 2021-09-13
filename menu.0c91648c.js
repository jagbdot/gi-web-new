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
})({"i0CD":[function(require,module,exports) {
var estado = 0,
    vw = $(window).width();
$("#hamburger").click(function () {
  $('#ul-menu').toggleClass('opacity-0 opacity-1');
  setTimeout(function () {
    $('#ul-menu').toggleClass('z-index-js-0 z-index-js-99');
  }, 600);
  var delay_time = 0;
  $(this).toggleClass('open');
  console.log(estado);

  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x: -320,
      ease: Expo.easeInOut
    });
    $("li").each(function () {
      TweenMax.to($(this), 1.2, {
        x: -420,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x: 0,
      ease: Expo.easeInOut
    });
    $("li").each(function () {
      TweenMax.to($(this), 1, {
        x: vw,
        scaleX: 2.3,
        delay: delay_time,
        ease: Expo.easeInOut
      });
      delay_time += .02;
    });
  }
});
/*
  if (estado === 0) {
    $("#bg-menu-mobile").animate({
      top: 0,
      right: 0
    }, {
      duration: 520,
      easing: "easeInOutStrong"
    });

    $("ul").delay(50).animate({
      top:"50px", 
      left:"40px"
    }, { duration:640, easing:"easeInOutStrong" });

    $("li").each(function() {
      TweenMax.to($(this), 0.7, {"left": "40px", opacity: 1, delay: delay_time, ease: Power2.easeInOut});
      delay_time += 25;
    });
    estado = 1;
  } else {
    // 
    $("#bg-menu-mobile").delay(300).animate({
      top: 0,
      right: "-100%"
    }, {
      duration: 650,
      easing: "easeInOutStrong"
    });

    $("li").each(function() {
      $(this).delay(delay_time).animate({
        "left": "100%",
        opacity: 0
      }, {
        duration: 720,
        easing: "easeInOutStrong"
      });
      delay_time += 20;
    });
    estado = 0;
  }
  console.log(estado);

});
*/
},{}]},{},["i0CD"], null)