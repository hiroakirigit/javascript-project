/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/scss/style.css":
/*!*****************************************!*\
  !*** ./resources/assets/scss/style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/assets/js/_particle.js":
/*!******************************************!*\
  !*** ./resources/assets/js/_particle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ celebrate)
/* harmony export */ });
function celebrate(){
  // console.log('hihi');
  particlesJS("particles-js",{
    "particles":{
      "number":{
        "value":125,//この数値を変更すると紙吹雪の数が増減できる
        "density":{
          "enable":false,
          "value_area":400
        }
      },
      "color": {
          "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298"]//紙吹雪の色の数を増やすことが出来る
      },
      "shape":{
        "type":"polygon",//形状はpolygonを指定
        "stroke":{
          "width":0,
        },
        "polygon":{
          "nb_sides":5//多角形の角の数
        }
        },
        "opacity":{
          "value":1,
          "random":false,
          "anim":{
            "enable":true,
            "speed":20,
            "opacity_min":0,
            "sync":false
          }
        },
        "size":{
          "value":5.305992965476349,
          "random":true,//サイズをランダムに
          "anim":{
            "enable":true,
            "speed":1.345709068776642,
            "size_min":0.8,
            "sync":false
          }
        },
        "line_linked":{
          "enable":false,
        },
        "move":{
          "enable":true,
        "speed":10,//この数値を小さくするとゆっくりな動きになる
        "direction":"bottom",//下に向かって落ちる
        "random":false,//動きはランダムにならないように
        "straight":false,//動きをとどめない
        "out_mode":"out",//画面の外に出るように描写
        "bounce":false,//跳ね返りなし
          "attract":{
            "enable":false,
            "rotateX":600,
            "rotateY":1200
          }
        }
      },
      "interactivity":{
        "detect_on":"canvas",
        "events":{
          "onhover":{
            "enable":false,
          },
          "onclick":{
            "enable":false,
          },
          "resize":true
        },
      },
      "retina_detect":true
    });

};


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.css */ "./resources/assets/scss/style.css");
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_particle.js */ "./resources/assets/js/_particle.js");



const quizData = [
  {
      question: "Which is not Frontend language?",
      a: "C++",
      b: "Vue",
      c: "React",
      d: "SCSS",
      correct: "a",
  },
  {
      question: "What is the most used programming language in 2022?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
  },
  {
      question: "Which command is commonly used when you want to check branch's HEAD log?",
      a: "git rebase",
      b: "git reflog",
      c: "git merge",
      d: "git checkout",
      correct: "b",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

function insertQuiz(){
  if(quizData[currentQuiz] !== undefined){
      quiz.innerText = quizData[currentQuiz].question;
      a_text.innerText = quizData[currentQuiz].a;
      b_text.innerText = quizData[currentQuiz].b;
      c_text.innerText = quizData[currentQuiz].c;
      d_text.innerText = quizData[currentQuiz].d;

      currentQuiz++;

      document.querySelectorAll('input[name="answer"]').forEach((t)=>{
        t.checked = false;
      })
  }else{
    return;
  }

}
insertQuiz()

function getSelected() {
    let currentSelected = document.querySelector('input[name="answer"]:checked');
    return currentSelected;
}


submitBtn.addEventListener('click', () => {
    if( getSelected() !== null){
        const answer = getSelected().getAttribute('id').toString();
        console.log(`${answer}`, currentQuiz);
        if(answer === quizData[currentQuiz-1].correct){
            //正解の場合の処理
            function showCorrect(){
                return new Promise( (resolve,reject) => {
                    resolve();
                } );
            }
            if(currentQuiz == quizData.length){
                showCorrect()
                .then(()=>{
                    document.querySelector('.correct').classList.add('is-active');
                })
                .then(()=>{
                    setTimeout(()=>{
                        insertQuiz();
                        document.querySelector('.correct').classList.remove('is-active');
                    }, 2000)
                })
                .then(()=>{
                    setTimeout(()=>{
                        document.querySelector('.quiz-finished').classList.add('is-active');
                        // document.getElementById('particles-js').classList.add('is-active');
                        (0,_particle_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

                    }, 2000);

                })

            }else{
                showCorrect()
                .then(()=>{
                    document.querySelector('.correct').classList.add('is-active');
                })
                .then(()=>{
                    setTimeout(()=>{
                        insertQuiz();
                        document.querySelector('.correct').classList.remove('is-active');
                    }, 2000)
                });

            }
        }else{
            //不正解の場合の処理
            function showIncorrect(){
                return new Promise( (resolve, reject) => {
                    resolve();
                } )
            }
            showIncorrect()
            .then(()=>{document.querySelector('.incorrect').classList.add('is-active');})
            .then(()=>{
                setTimeout(()=>{
                    document.querySelector('.incorrect').classList.remove('is-active');
                }, 2000)
            })

        }
    }else{
        alert("'You don't select any choices  select");
    }

});

})();

/******/ })()
;
//# sourceMappingURL=index-bundle.js.map