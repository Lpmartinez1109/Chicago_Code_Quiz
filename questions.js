questions = [
    {
        title: "Which of the following is not a Chicago sports team?",
        choices: ["Bears", "Wolves", "Sky", "Cardinals"],
        answer: "Cardinals"
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
        choices: ["Comiskey Park", "U.S. Celluar Field", "Guranteed Rate Field", "Wrigley Field"],
        answer: "Guaranteed Rate Field"
    },
    {
        title: "Which of the following are the division rivals for the Chicago Bears?",
        answer: ["Green Bay Packers, Detroit Lions, Minnesota Vikings", "Dallas Cowboys, New York Giants, Philadelphia Eagles", "Atlanta Falcons,  Carliona Panthers, New Orleans Saints", "Los Angeles Rams, San Francisco 49ers, Seattle Seahawks"],
        answer: "Green Bay Packers, Detroit Lions, Minnesota Vikings"
    }

]

var startBtn = document.querySelector("#start-btn");
var nextBtn = document.querySelector("#next-btn");
var questionContain = document.querySelector("#question-container");
var question = document.querySelector("#question")
var answerBtn = document.querySelector("#answer-buttons");

var currentIndex;


startBtn.addEventListener("click",startGame),
nextBtn.addEventListener("click", nextQuestion)

function startGame(){
    startBtn.classList.add("hide");
    currentIndex = 0;
    questionContain.classList.add("hide");
}







