const quizData = [
    {
        quection: "How old is kasun?",
        a: "24",
        b: "25",
        c: "26",
        d: "27",
        correct: "c"
    },
    {
        quection: "What is most used programming language in 2023?",
        a: "java",
        b: "c",
        c: "python",
        d: "javaScript",
        correct: "d"
    },
    {
        quection: "Who is the president of Sri Lanka?",
        a: "Mahinda Rajapaksha",
        b: "Gotabaya Rajapaksha",
        c: "Basil Rajapaksha",
        d: "Namal Rajapaksha",
        correct: "b"
    },
    {
        quection: "What is the HTML stand for?",
        a: "Hypertec meckup language",
        b: "Cascading style sheet",
        c: "Jason Object Notation",
        d: "Helicopter Terminal Motorboats",
        correct: "a"
    },
    {
        quection: "What year was javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "non of the above",
        correct: "b"
    },
    {
        quection: "What is the legislative capital city of Sri Lanka?",
        a: "Narahenpita",
        b: "Sri Jayawardanapura Kotte",
        c: "Kandy",
        d: "Golle",
        correct: "b"
    },
    {
        quection: "What is the longest river in Sri Lanka?",
        a: "Kalani",
        b: "Kalu Gaga",
        c: "Mahaweli",
        d: "Walawe",
        correct: "c"
    },
    {
        quection: "How many districts are there in Sri Lanka?",
        a: "25",
        b: "28",
        c: "23",
        d: "29",
        correct: "a"
    },
    {
        quection: "What is the tallest mountain in Sri Lanka?",
        a: "Single Tree",
        b: "Theodora Hill",
        c: "Namunukula",
        d: "Pidurutalagala",
        correct: "d"
    },
    {
        quection: "What is the currency of Sri Lanka?",
        a: "Pound",
        b: "Rupiah",
        c: "Rupee",
        d: "Escudo",
        correct: "c"
    }
]

const quectionEl = document.getElementById('quection');
const answerEl = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuection = 0;
let score = 0;


loadQuiz();
function loadQuiz() {
    deselectAnswer();

    const currentQiuz = quizData[currentQuection];

    quectionEl.innerHTML = currentQiuz.quection;
    a_text.innerHTML = currentQiuz.a;
    b_text.innerHTML = currentQiuz.b;
    c_text.innerHTML = currentQiuz.c;
    d_text.innerHTML = currentQiuz.d;    
}



function getSelected() { 
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;      
        }
    })
    return answer;
}


function deselectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })

}


submitBtn.addEventListener("click", () => {
    //check to seethe answer
    const answer = getSelected();
    //console.log(answer);

    if (answer){
        if (answer === quizData[currentQuection].correct){
            score++;
        }

        currentQuection++;

        if (currentQuection < quizData.length) {
            loadQuiz();
        } else {
            //To show the result
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} quections</h2>
                                <button onclick="location.reload()">Reload</button>`;
            
            
        }
    } 
})