var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var highScore = {
    name : "Fazil",
    score : 5
  };

var userName = readlineSync.question("May I know your name: ");
console.log(chalk.blue.bold("Hello " + userName.toUpperCase() + " 👋"));
console.log(chalk.blue.bold("Welcome to HOW WELL DO YOU KNOW FAZIL "));
console.log("                                          ");

function play(question, answerOption, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answerOption){
    console.log("Your answer is : " + answer);
    console.log(chalk.bgGreen("You are right 😍"));
    score++;
    console.log(chalk.green("Current score: " + score));
  }else if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.bgGreen("You are right 😍"));
      score++;
      console.log(chalk.green("Current score: " + score));
    } 
    else {
      console.log(chalk.bgRed("You are wrong😥"));
      console.log(chalk.green("Correct answer is " + answerOption + " : " + answer));
      console.log(chalk.red("Currnet score: " + score));
      }

  console.log("------------------");
}


var questions = [
  {
  question : ` Where do I live? 
  a : Chennai
  b : Karur
  c : Pallapatti
  Enter the Answer/Option : `,
  answerOption : "c",
  answer : "Pallapatti"
  }, 
  {
  question : `How old am I?
  a : 19
  b : 20
  c : 21 
  Enter the Answer/Option : `,
  answerOption : "c",
  answer : "21"
  }, 
  {
  question : `What would I play often?
  a : Football
  b : Cricket
  c : Tennis 
  Enter the Answer/Option : `,
  answerOption : "b",
  answer : "Cricket"
  }, 
  {
  question : `What do I like to eat? 
  a : Nan with panner butter masala
  b : Masala Paneer Tikka Wrap
  c : Mutton Briyani 
  Enter the Answer/Option : `,
  answerOption : "b",
  answer : "Masala Paneer Tikka Wrap"
  }, 
  {
  question : "Do I know to driva a car (Yes/No) ? ",
  answerOption : "",
  answer : "Yes"
  }
];

for(i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answerOption, currentQuestion.answer);
}

if(score === 5){
  console.log(chalk.bgCyan.bold("YAY! Your final score is " + score));
  console.log("                         ");
  console.log(chalk.bgCyan.bold("You have levelled the high score 🔥"));
} else {
  console.log(chalk.bgCyan.bold("Your final score is " + score));
  console.log("                                           ");
  console.log(chalk.bgMagenta("Check out the high score:"));
  console.log(chalk.blue("Name : " + highScore.name));
  console.log(chalk.blue("Name : " + highScore.score));
  console.log(chalk.bgMagenta("If you beat this score 👆 send me a screenshot"))
}
