var quizContainer = document.getElementById("quiz-container");
var resultsContainer = document.getElementById("results");
// var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");
var questionCounter = 0
var correct = 0;
var incorrect = 0;
var time = document.querySelector(".time");
var timeLeft = 60;

var myQuestions = [
  {
    title: "Which of the following is not a Chicago sports team?",
    choices: ["Chicago Bears", "Chicago Wolves", "Chicago Sky", "Chicago Cardinals"],
    answer: "Chicago Cardinals"
  },
  {
    title: "What is the name of the player known as 'Sweetness'?",
    choices: ["Devin Hester", "Walter Payton", "William Perry", "Gale Sayers"],
    answer: "Walter Payton"
  },
  {
    title: "What year did the Cubs finally end their championship drought?",
    choices: ["2015", "2010", "2019", "2016"],
    answer: "2016"
  },
  {
    title: "How many Stanley cups have Chicago Blackhawks won?",
    choices: ["6", "4", "2", "16"],
    answer: "6"
  },
  {
    title: "Which of the following is not one of Michael Jordan's nicknames?",
    choices: ["His Airness", "MJ", "Air Jordan", "Magic Jordan"],
    answer: "Magic Jordan"
  },
  {
    title: "What is the name of the ballpark where to Chicago White Sox play?",
    choices: ["Comiskey Park", "U.S. Celluar Field", "Guaranteed Rate Field", "Wrigley Field"],
    answer: "Guaranteed Rate Field"
  },
  {
    title: "Which of the following are the division rivals for the Chicago Bears?",
    choices: ["Green Bay Packers, Detroit Lions, Minnesota Vikings", "Dallas Cowboys, New York Giants, Philadelphia Eagles", "Atlanta Falcons,  Carliona Panthers, New Orleans Saints", "Los Angeles Rams, San Francisco 49ers, Seattle Seahawks"],
    answer: "Green Bay Packers, Detroit Lions, Minnesota Vikings"
  },

]

function renderQuestion() {
  var $body = document.querySelector('body');

  $body.innerHTML = '';
  var title = document.createElement('h1');
  title.textContent = myQuestions[questionCounter].title;
  $body.appendChild(title)
  for (var i = 0; i < myQuestions[questionCounter].choices.length; i++) {
      var $btn = document.createElement('button'); 
      $btn.textContent = myQuestions[questionCounter].choices[i];
      $btn.setAttribute('data-correct', myQuestions[questionCounter].answer);
      $btn.onclick = results;
      $body.appendChild($btn)
      console.log($btn)

  }

};
function timer(){
  var timerCountDown = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left";

    if (secondsLeft === 0) {
        time.textContent = "0 seconds left";
        clearInterval(timerCountDown);
        endQuiz()
    }

}, 1000);
}

function results(event) {
  console.log(event)
  if (event.target.dataset.correct === event.target.innerText) {
      // alert('correct answer');
      correct++;
  } else {
      // alert('incorrect');
      incorrect++
  }
  questionCounter++;
  if (questionCounter < myQuestions.length) {
  renderQuestion();
  } else {
      endGame();
  }
  // console.log(event.target.dataset.correct)
  // if (event.target.dataset.correct == "true") {
  //     alert('i am true')
  // }


}
function endGame() {
  alert('the score is ' + correct + ' correct and ' + incorrect + ' incorrect')
  quizContainer.classList.add("hide")
    // alert("working")
    endCont.classList.remove("hide")
    endCont.innerHTML += "End of Quiz <br> <br> Your Score: " + score + "<br>"
    endCont.innerHTML += "<br> Enter your initials: <br>"
    endCont.innerHTML += "<input id='input' type='text'> <button class='btn submit'>Submit</button>";
    var submit = document.querySelector(".submit")
    submit.onclick = highScores
}
// var btnEvent = document.querySelectorAll('button');
// btnEvent.addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('ive been clicked').
// })

// $(document).on('click', 'button', function() {

// })
renderQuestion();
// })
// function showResults() {
//   var 



