var ac_main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constants_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(42);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Main = (function () {
    function Main() {
        this.entryPoint = __WEBPACK_IMPORTED_MODULE_0__utils_constants_index__["a" /* htmlTemplates */].Home;
        this.htmlTemplate = null;
        this.rootElement = document.getElementsByTagName(this.rootSelector)[0];
        this.updateSW();
    }
    Object.defineProperty(Main.prototype, "rootSelector", {
        get: function () { return 'APP-ROOT'; },
        enumerable: true,
        configurable: true
    });
    ;
    Main.prototype.updateSW = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshing;
            return __generator(this, function (_a) {
                try {
                    navigator.serviceWorker.addEventListener('controllerchange', function () {
                        if (refreshing)
                            return;
                        window.location.reload();
                        refreshing = true;
                    });
                    navigator.serviceWorker.addEventListener('message', function (msg) { return console.log('msg', msg); });
                    navigator.serviceWorker.getRegistration()
                        .then(function (registration) {
                        if (registration.waiting && registration.waiting.state === 'installed') {
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* updateServiceWorkerToast */])().then(function (clicked) {
                                if (clicked) {
                                    registration.waiting.postMessage({ action: __WEBPACK_IMPORTED_MODULE_0__utils_constants_index__["b" /* skipWaiting */] });
                                }
                            });
                        }
                    });
                }
                catch (error) {
                    alert(error);
                }
                return [2];
            });
        });
    };
    Main.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var response, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.rootElement) {
                            return [2];
                        }
                        return [4, this.fetchHtmlTemplate()];
                    case 1:
                        response = _c.sent();
                        _a = this;
                        _b = __WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* textToHtml */];
                        return [4, response.text()];
                    case 2:
                        _a.htmlTemplate = _b.apply(void 0, [_c.sent()]);
                        setTimeout(function () {
                            _this._setContentAfterLoad();
                        }, 2000);
                        return [2];
                }
            });
        });
    };
    Main.prototype._setContentAfterLoad = function () {
        this._removeLogo();
        this.rootElement.appendChild(this.htmlTemplate);
    };
    Main.prototype._removeLogo = function () {
        document.body.removeChild(document.getElementById('shell'));
    };
    Main.prototype._parseToHtml = function () {
        var parser = new DOMParser();
    };
    Main.prototype.fetchHtmlTemplate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, window.fetch(this.entryPoint)];
            });
        });
    };
    return Main;
}());
window['displayUpdateServiceWorkerToast'] = function (worker) {
    console.log('worker', worker);
};
var main = new Main();
main.init();


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__html_template_const__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__html_template_const__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_worker_actions_const__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__service_worker_actions_const__["a"]; });




/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return htmlTemplates; });
var appFolder = '/app';
var htmlTemplates = {
    Home: appFolder + "/home.html"
};


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return skipWaiting; });
var skipWaiting = 'skipWaiting';


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_utils__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_utils__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_toast__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__toast_toast__["a"]; });




/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = textToHtml;
function textToHtml(text) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(text, 'text/html');
    return htmlDoc.body.childNodes[0];
}


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateServiceWorkerToast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toast_style_scss__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toast_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toast_style_scss__);

function updateServiceWorkerToast() {
    return new Promise(function (res, rej) {
        var toast = document.createElement('div');
        toast.setAttribute('class', 'toast-message');
        toast.setAttribute('id', 'sw--toast-message');
        toast.appendChild(getTextElement());
        var clickCallback = function () {
            toast.remove();
            res(true);
        };
        var buttonEl = getButtonElement(clickCallback);
        toast.appendChild(buttonEl);
        document.getElementsByTagName('app-root')[0].appendChild(toast);
    });
}
function getTextElement() {
    var textEl = document.createElement('h2');
    textEl.innerText = 'Es gibt Neuerungen, bitte neu laden!';
    return textEl;
}
function getButtonElement(clickCallback) {
    var buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'JA';
    buttonEl.addEventListener('click', clickCallback);
    return buttonEl;
}


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);



/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWIxZjZjNmE4YjU5ZTYxNWQxNzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzL2h0bWwtdGVtcGxhdGUuY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy9zZXJ2aWNlLXdvcmtlci1hY3Rpb25zLmNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3RyaW5nLnV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90b2FzdC90b2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdG9hc3QvdG9hc3Quc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEcUU7QUFDQTtBQUNu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QztRQUVwQyxJQUFJLGFBQWEsR0FBRztZQUNoQixLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRCxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQ7SUFDSSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsc0NBQXNDLENBQUM7SUFFMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBRUQsMEJBQTBCLGFBQWE7SUFDbkMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDcEIsQ0FBQzs7Ozs7Ozs7QUNwQ0QseUM7Ozs7Ozs7Ozs7QUNBNEI7Ozs7Ozs7O0FDQTVCLHlDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFiMWY2YzZhOGI1OWU2MTVkMTcwIiwiaW1wb3J0IHsgaHRtbFRlbXBsYXRlcywgc2tpcFdhaXRpbmcgfSBmcm9tICcuL3V0aWxzL2NvbnN0YW50cy9pbmRleCc7XHJcbmltcG9ydCB7IHRleHRUb0h0bWwsIHVwZGF0ZVNlcnZpY2VXb3JrZXJUb2FzdCB9IGZyb20gJy4vdXRpbHMvaW5kZXgnO1xyXG5pbXBvcnQgJy4vc3R5bGVzJztcclxuXHJcbmNsYXNzIE1haW4ge1xyXG4gICAgZ2V0IHJvb3RTZWxlY3RvcigpIHsgcmV0dXJuICdBUFAtUk9PVCc7IH07XHJcbiAgICByb290RWxlbWVudDogRWxlbWVudCB8IE5vZGU7XHJcbiAgICB0YXJnZXRFbGVtZW50OiBFbGVtZW50IHwgTm9kZTtcclxuXHJcbiAgICBlbnRyeVBvaW50OiBzdHJpbmcgPSBodG1sVGVtcGxhdGVzLkhvbWU7XHJcbiAgICBodG1sVGVtcGxhdGU6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0aGlzLnJvb3RTZWxlY3RvcilbMF07XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlU1coKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB1cGRhdGVTVygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcmVmcmVzaGluZztcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignY29udHJvbGxlcmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZWZyZXNoaW5nKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbXNnID0+IGNvbnNvbGUubG9nKCdtc2cnLCBtc2cpKTtcclxuXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RyYXRpb24ud2FpdGluZyAmJiByZWdpc3RyYXRpb24ud2FpdGluZy5zdGF0ZSA9PT0gJ2luc3RhbGxlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VydmljZVdvcmtlclRvYXN0KCkudGhlbihjbGlja2VkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbGlja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uLndhaXRpbmcucG9zdE1lc3NhZ2UoeyBhY3Rpb246IHNraXBXYWl0aW5nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2hIdG1sVGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLmh0bWxUZW1wbGF0ZSA9IHRleHRUb0h0bWwoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Q29udGVudEFmdGVyTG9hZCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXRDb250ZW50QWZ0ZXJMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUxvZ28oKTtcclxuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuaHRtbFRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBfcmVtb3ZlTG9nbygpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGVsbCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBfcGFyc2VUb0h0bWwoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZldGNoSHRtbFRlbXBsYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCh0aGlzLmVudHJ5UG9pbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3dbJ2Rpc3BsYXlVcGRhdGVTZXJ2aWNlV29ya2VyVG9hc3QnXSA9ICh3b3JrZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCd3b3JrZXInLCB3b3JrZXIpO1xyXG59O1xyXG5cclxuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XHJcbm1haW4uaW5pdCgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsImV4cG9ydCAqIGZyb20gJy4vaHRtbC10ZW1wbGF0ZS5jb25zdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZS13b3JrZXItYWN0aW9ucy5jb25zdCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMvaW5kZXgudHMiLCJcclxuY29uc3QgYXBwRm9sZGVyOiBzdHJpbmcgPSAnL2FwcCc7XHJcblxyXG5leHBvcnQgY29uc3QgaHRtbFRlbXBsYXRlcyA9IHtcclxuICAgIEhvbWU6IGAke2FwcEZvbGRlcn0vaG9tZS5odG1sYFxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29uc3RhbnRzL2h0bWwtdGVtcGxhdGUuY29uc3QudHMiLCJleHBvcnQgY29uc3Qgc2tpcFdhaXRpbmc6IHN0cmluZyA9ICdza2lwV2FpdGluZyc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9jb25zdGFudHMvc2VydmljZS13b3JrZXItYWN0aW9ucy5jb25zdC50cyIsIlxyXG5leHBvcnQgKiBmcm9tICcuL3N0cmluZy51dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdG9hc3QvdG9hc3QnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRUb0h0bWwodGV4dDogc3RyaW5nKTogTm9kZSB7XHJcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBjb25zdCBodG1sRG9jID0gIHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGV4dCwgJ3RleHQvaHRtbCcpO1xyXG4gICAgcmV0dXJuIGh0bWxEb2MuYm9keS5jaGlsZE5vZGVzWzBdO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9zdHJpbmcudXRpbHMudHMiLCJpbXBvcnQgJy4vdG9hc3Quc3R5bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VydmljZVdvcmtlclRvYXN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgdG9hc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2FzdC1tZXNzYWdlJyk7XHJcbiAgICAgICAgdG9hc3Quc2V0QXR0cmlidXRlKCdpZCcsICdzdy0tdG9hc3QtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZChnZXRUZXh0RWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvYXN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICByZXModHJ1ZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uRWwgPSBnZXRCdXR0b25FbGVtZW50KGNsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGJ1dHRvbkVsKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2FwcC1yb290JylbMF0uYXBwZW5kQ2hpbGQodG9hc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRleHRFbGVtZW50KCkge1xyXG4gICAgY29uc3QgdGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRleHRFbC5pbm5lclRleHQgPSAnRXMgZ2lidCBOZXVlcnVuZ2VuLCBiaXR0ZSBuZXUgbGFkZW4hJztcclxuXHJcbiAgICByZXR1cm4gdGV4dEVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCdXR0b25FbGVtZW50KGNsaWNrQ2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGJ1dHRvbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FbC5pbm5lckhUTUwgPSAnSkEnO1xyXG4gICAgYnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NhbGxiYWNrKTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uRWw7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvdG9hc3QvdG9hc3QudHMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3V0aWxzL3RvYXN0L3RvYXN0LnN0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGVzL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==