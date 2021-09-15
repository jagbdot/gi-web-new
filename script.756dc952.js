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
})({"uwRY":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MathUtils = {
  lerp: function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  },
  distance: function distance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
  }
};

var getMousePos = function getMousePos(e) {
  var posx = 0;
  var posy = 0;
  if (!e) e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + docEl.scrollLeft;
    posy = e.clientY + document.body.scrollTop + docEl.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
};

var mousePos = lastMousePos = cacheMousePos = {
  x: 0,
  y: 0
};
window.addEventListener('mousemove', function (e) {
  return mousePos = getMousePos(e);
});

var getMouseDistance = function getMouseDistance() {
  return MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
};

var Image = /*#__PURE__*/function () {
  function Image(el) {
    _classCallCheck(this, Image);

    this.DOM = {
      el: el
    };
    this.defaultStyle = {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 0
    };
    this.getRect();
    this.initEvents();
  }

  _createClass(Image, [{
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      window.addEventListener('resize', function () {
        return _this.resize();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    }
  }, {
    key: "getRect",
    value: function getRect() {
      this.rect = this.DOM.el.getBoundingClientRect();
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0;
    }
  }]);

  return Image;
}();

var ImageTrail = /*#__PURE__*/function () {
  function ImageTrail() {
    var _this2 = this;

    _classCallCheck(this, ImageTrail);

    this.DOM = {
      content: document.querySelector('.contents')
    };
    this.images = [];

    _toConsumableArray(this.DOM.content.querySelectorAll('img')).forEach(function (img) {
      return _this2.images.push(new Image(img));
    });

    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.threshold = 100;
    requestAnimationFrame(function () {
      return _this2.render();
    });
  }

  _createClass(ImageTrail, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var distance = getMouseDistance();
      cacheMousePos.x = MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1);
      cacheMousePos.y = MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1);

      if (distance > this.threshold) {
        this.showNextImage();
        ++this.zIndexVal;
        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
        lastMousePos = mousePos;
      }

      var isIdle = true;

      var _iterator = _createForOfIteratorHelper(this.images),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var img = _step.value;

          if (img.isActive()) {
            isIdle = false;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (isIdle && this.zIndexVal !== 1) {
        this.zIndexVal = 1;
      }

      requestAnimationFrame(function () {
        return _this3.render();
      });
    }
  }, {
    key: "showNextImage",
    value: function showNextImage() {
      var img = this.images[this.imgPosition];
      gsap.killTweensOf(img.DOM.el);
      gsap.timeline().set(img.DOM.el, {
        startAt: {
          opacity: 0,
          scale: 1
        },
        opacity: 1,
        scale: 1,
        zIndex: this.zIndexVal,
        x: cacheMousePos.x - img.rect.width / 2,
        y: cacheMousePos.y - img.rect.height / 2
      }, 0).to(img.DOM.el, 0.9, {
        ease: Expo.easeOut,
        x: mousePos.x - img.rect.width / 2,
        y: mousePos.y - img.rect.height / 2
      }, 0).to(img.DOM.el, 1, {
        ease: Power1.easeOut,
        opacity: 0
      }, 0.4).to(img.DOM.el, 1, {
        ease: Quint.easeOut,
        scale: 0.2
      }, 0.4);
    }
  }]);

  return ImageTrail;
}();

new ImageTrail();
},{}]},{},["uwRY"], null)