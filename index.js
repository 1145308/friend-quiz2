var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("May i know your name ? ")
console.log("Welcome " + userName + " to this quiz")
console.log("lets test how much you know your friend");
console.log("")

function play(question, answer) {
  var userName = readlineSync.question(question);
  if (userName === answer) {
    console.log("you are correct");
    score = score + 1;
  }
  else {
    console.log("you are wrong");
  }
  console.log("Current score : " + score)
  console.log("---------")
}

play('What is My name ? ', 'sangeeta');
play('What is My age ? ', '23');
play('Where do i live ? ', 'yamunanagar');
play('What is My Favourite food ? ', 'junk');
play('Where do i work ? ', 'infosys');


var questionOne = {
  question: "What is my fav outdoor game ? ",
  answer: "badminton",

}

var questionTwo = {
  question: "My besti ? ",
  answer: "vandu"
}
var ques = []
var Question = [questionOne, questionTwo]
for (i = 0; i < Question.length; i++) {

  play(Question[i].question, Question[i].answer)
  //play(Question[i].question)
}
var ques = "what is your fav colour ? ";
console.log(ques);

var answ = ["1.Blue", "2.Black", "3.Pink"]
for (i = 0; i < answ.length; i++) {
  console.log(answ[i])

}

var userName = readlineSync.question("")
function letsPlay(ans) {

  if (userName === ans) {
    console.log("correct")
    score = score + 1;
  }
  else {
    console.log("wrong")
    console.log("Current score : " + score)
    console.log("---------")
  }
}
letsPlay('Black')

console.log("Your score is : " + score)