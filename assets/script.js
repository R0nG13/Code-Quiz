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
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;



function startQuiz() {
    
    
    
    
    
    
    
    
    var startScreen = document.getElementById("start");

}





// Timer that counts down from 5
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}


/*function counterRender(){
    if(count > 0){
        counter.innerHTML = testTime;
        timeGauge.style.width = guageProgressUnit * testTime - "px";
        count--;
        }
        else{
            count = 0;
            clearInterval(TIMER);
            scoreRender();
        }
}*/



// Questions section

function renderQuestions(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>"
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}


function progressRender(){
for (var qIndex = 0; qIndex <= lastQuestionIndex; qIndex++) {
    
}
//how do we take time away form the clock if wrong






startBtn.onclick = countdown, renderQuestions;