var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name: "Deepak",
    score: 6,
  },

  {
    name: "Rohan",
    score: 4,
  },
]

var questions = [{
  question: "What fake name does Natasha use when she first meets Tony? ",
  answer: "Natalie Rushman"
}, {
  question: "Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice? ",
  answer: "The Stork Club"
}, {
  question: "What's Thor's hammer called? ",
  answer: "Mjolnir"
}, {
  question: "What type of doctor is Stephen Strange? ",
  answer: "Neurosurgeon"
}, {
  question: "When did the MCU start? ",
  answer: "2008"
}, {
  question: "What is the only sentence that Groot can say? ",
  answer: "I am Groot"
}];


// welcome user
function welcome(){
  var userName = readlineSync.question("What's your name? ")
  console.log(chalk.blue("Hey, " + userName))
  console.log("Welcome to MCU quiz😃")
  console.log("Lets start.")
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct!");
    score ++;
  } else {
    console.log("Oops, its a wrong answer!");
  }

  console.log("Current Score: ", score);
  console.log("------------")
}

function game() {
  for (var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

// display score
function showScore(){
  console.log(chalk.underline.bold("Hey your score is: ", score))
  console.log("Check out the high scores, if you want to be there ping me.");
  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome()
game()
showScore()