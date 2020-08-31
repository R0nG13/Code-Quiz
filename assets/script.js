var startBtn =  document.getElementById("start")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var counter = document.getElementById("counter")

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

var progress = document.getElementById("progress")
var scoreContainer = document.getElementById("ScoreContainer")

var questions = [
    {
    question : "Commonly used data types DO NOT Include:",
    choiceA : "A strings",
    choiceB : "B booleans",
    choiceC : "C alerts",
    choiceD : "D numbers",
    correct : "C"
    },

    {
    question : "The condition in an if / else statement is enclosed with _____.",
    choiceA : "A quotes",
    choiceB : "B curly brackets",
    choiceC : "C parenthesis",
    choiceD : "D square brackets",
    correct : "C"
    },
    
    {
    question : "Commonly used data types DO NOT Include:",
    choiceA : "1. strings",
    choiceB : "2. booleans",
    choiceC : "3. alerts",
    choiceD : "4. numbers",
    correct : "C"
    },

    {
    question : "Commonly used data types DO NOT Include:",
    choiceA : "1. strings",
    choiceB : "2. booleans",
    choiceC : "3. alerts",
    choiceD : "4. numbers",
    correct : "C"
    },
    {
    question : "Commonly used data types DO NOT Include:",
    choiceA : "strings",
    choiceB : "2. booleans",
    choiceC : "3. alerts",
    choiceD : "4. numbers",
    correct : "C"
    }
]
var lastQuestionIndex = 4;
var runningQuestionIndex = 0;

var count = 60;
var timer;

//start function to call timer and quiz
function startQuiz() {
    
    var startScreen = document.getElementById("start");
    startScreen.style.display = "none";
    quiz.style.display = "block";
    renderQuestions();
    timer = setInterval(countdown, 1000);
    counter.textContent = count;
 
}

// Timer that counts down from 5
function countdown() {
  count--;
  counter.textContent = count;
  if (count == 0) {
      gameOver()
   }
  }

 
  function renderQuestions(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
} 

function checkAnswer(answer){
    if(answer !== questions[runningQuestionIndex].correct){
    count -= 10;
    
        if (count <= 0) {
        gameOver();
        }
        counter.textContent = count;
        answerText.textContent = "Incorrect!"
    }
    else{
        answerText.textContent = "Correct!"
    }
    if(runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestions();
    }
    else{
    gameOver();
    }
}

function gameOver() {

    clearInterval(timer);
    quiz.style.display = "none";
    Over.style.display = "block";
    score.textContent = count;

}

function saveScore() {
    

}




  
  
  
 


startBtn.addEventListener("click", startQuiz);