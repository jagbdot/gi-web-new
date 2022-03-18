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
})({"g1uU":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

console.clear();
var element = document.querySelector(".cursor-2");
var goal = document.querySelector(".goal");
var theframe = document.querySelector(".theframe");

var Cursor = /*#__PURE__*/function () {
  function Cursor(el, goal, theframe) {
    _classCallCheck(this, Cursor);

    this.el = el; // this.goal = goal;
    // this.theframe = theframe;
    // this.triggerDistance = this.goal.getBoundingClientRect().width;

    this.bind();
  }

  _createClass(Cursor, [{
    key: "bind",
    value: function bind() {
      document.addEventListener("mousemove", this.move.bind(this), false);
    }
  }, {
    key: "move",
    value: function move(e) {
      var _this = this;

      var cursorPosition = {
        left: e.clientX,
        top: e.clientY
      };
      document.querySelectorAll(".goal").forEach(function (single) {
        var triggerDistance = single.getBoundingClientRect().width;
        var goalPosition = {
          left: single.getBoundingClientRect().left + single.getBoundingClientRect().width / 8,
          top: single.getBoundingClientRect().top + single.getBoundingClientRect().height / 8
        };
        var distance = {
          x: goalPosition.left - cursorPosition.left,
          y: goalPosition.top - cursorPosition.top
        };
        var angle = Math.atan2(distance.x, distance.y);
        var hypotenuse = Math.sqrt(distance.x * distance.x + distance.y * distance.y);

        if (hypotenuse < triggerDistance) {
          // Nikhil - look at this code to adjust the round cursor area sizing
          TweenMax.to(_this.el, 0.2, {
            left: goalPosition.left - Math.sin(angle) * hypotenuse / 2,
            top: goalPosition.top - Math.cos(angle) * hypotenuse / 2,
            height: single.clientHeight,
            width: single.clientWidth
          });
          TweenMax.to(single.querySelector(".theframe"), 0.2, {
            x: -(Math.sin(angle) * hypotenuse / 6),
            y: -(Math.cos(angle) * hypotenuse / 6)
          });
        } else {
          TweenMax.to(_this.el, 0.2, {
            left: cursorPosition.left,
            top: cursorPosition.top,
            height: "12px",
            width: "12px"
          });
          TweenMax.to(single.querySelector(".theframe"), 0.2, {
            x: 0,
            y: 0
          });
        }
      }); //     const goalPosition = {
      //       left:
      //         this.goal.getBoundingClientRect().left +
      //         this.goal.getBoundingClientRect().width / 2,
      //       top:
      //         this.goal.getBoundingClientRect().top +
      //         this.goal.getBoundingClientRect().height / 2
      //     };
      //     const distance = {
      //       x: goalPosition.left - cursorPosition.left,
      //       y: goalPosition.top - cursorPosition.top
      //     };
      //     const angle = Math.atan2(distance.x, distance.y);
      //     const hypotenuse = Math.sqrt(
      //       distance.x * distance.x + distance.y * distance.y
      //     );
      //     if (hypotenuse < this.triggerDistance) {
      //       TweenMax.to(this.el, 0.2, {
      //         left: goalPosition.left - (Math.sin(angle) * hypotenuse) / 2,
      //         top: goalPosition.top - (Math.cos(angle) * hypotenuse) / 2,
      //         height: goal.clientHeight,
      //         width: goal.clientWidth
      //       });
      //       TweenMax.to(document.querySelector(".theframe"), 0.2, {
      //         x: -((Math.sin(angle) * hypotenuse) / 2),
      //         y: -((Math.cos(angle) * hypotenuse) / 2)
      //       });
      //     } else {
      //       TweenMax.to(this.el, 0.2, {
      //         left: cursorPosition.left,
      //         top: cursorPosition.top,
      //         height: "12px",
      //         width: "12px"
      //       });
      //       TweenMax.to(document.querySelector(".theframe"), 0.2, {
      //         x: 0,
      //         y: 0
      //       });
      //     }
    }
  }]);

  return Cursor;
}();

var cursor = new Cursor(element, goal);
},{}]},{},["g1uU"], null)