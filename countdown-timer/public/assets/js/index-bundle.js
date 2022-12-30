/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/scss/style.scss":
/*!******************************************!*\
  !*** ./resources/assets/scss/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./resources/assets/js/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./resources/assets/scss/style.scss");


const newYears = "1 Jan 2023";

function countdown(){
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  //何秒残されているか計算。
  const leftSeconds = (newYearDate - currentDate) / 1000;

  //日・時間・分・秒を取得する
  const days = Math.floor( leftSeconds / 3600 / 24);
  const hours = Math.floor( (leftSeconds - days * 3600 * 24) / 60 / 60 );
  const minutes = Math.floor( (leftSeconds - (days * 3600 * 24 + hours * 3600)) / 60);
  const seconds = Math.floor( leftSeconds - (days * 3600 * 24 + hours * 3600 + minutes * 60));

  // console.log(leftSeconds);
  // console.log(days, hours, minutes, seconds);

  return [days, hours, minutes, seconds];
}

// countdown();

function count() {
  setInterval( () => {
    insertTime(countdown());
  }, 1000)
}

count();

function insertTime([days, hours, minutes, seconds]){
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}


})();

/******/ })()
;
//# sourceMappingURL=index-bundle.js.map