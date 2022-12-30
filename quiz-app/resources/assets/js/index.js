import '../scss/style.css';
import celebrate from './_particle.js';

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
                        celebrate();

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
