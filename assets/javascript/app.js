//This array holds the questions
let questions = [
    {
        question:"The letter 'e' is the most common letter in the English language.",
        choice1: "true",
        choice2: "false",
        correctAnswer: "A",


    },
    {
        question:"In logic, the converse and inverse of a statement represent different statements, and are not necessarily logically equivalent.",
        choice1: "true",
        choice2: "false",
        correctAnswer: "B",


    },
    {
        question:"In mathematics, there is only one infinity; performing algebraic operations on it does not make it a different quantity.",
        choice1: "true",
        choice2: "false",
        correctAnswer: "B"


    },
    {
        question:"Zero is both an even number and an odd number.",
        choice1: "true",
        choice2: "false",
        correctAnswer: "B"


    },
    {
        question:"In the English language, it is never grammatically correct to start a sentence with (because).",
        choice1: "true",
        choice2: "false",
        correctAnswer: "B"


    }
];
//get elements by id ...this method returns the element that has the id attribute 
const startTrivia = document.getElementById("startTrivia");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choice1 = document.getElementById("A");
const choice2 = document.getElementById("B");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("score");

let lastQuestion = questions.length - 1;
let currentQuestion = 0;
let count = 0;
let score = 0;
const timePerQuestion = 10;
let TIMER;



function renderQuestion(){
    let q = questions[currentQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
   
}
//add event listener for when user clicks start trivia
$("button").click(startGame);

//this fucntion starts the trivia game after "start trivia" button has been pressed
function startGame(){
    $("#startTrivia").css("display", "none");
    renderQuestion();
    $("#quiz").css("display", "block");

   renderCounter();
   TIMER = setInterval(renderCounter,1000);
    
}


function renderCounter(){
    if(count <= timePerQuestion){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        
        if(currentQuestion < lastQuestion){
            currentQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            displayScore();
        }
    }
}

function checkAnswer(answer){
    if(answer == questions[currentQuestion].correctAnswer){
        counter.innerHTML += "<p> correct </p>";
        score++
        //print correct
       
    }
    else{
        //print wrong
        counter.innerHTML += "<p> wrong </p>";
    }
    count = 0;
    if(currentQuestion < lastQuestion){
        currentQuestion++;
        renderQuestion();
        
    }
    else{
       
        clearInterval(TIMER);
        displayScore();
    }
}
function displayScore(){
    scoreDiv.style.display = "block";
    
   
    const scorePerCent = Math.round(100 * score/questions.length);
    
   
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}