// var readlineSync = require("readline-sync");
import readlineSync from "readline-sync";

import chalk from "chalk";
let username = readlineSync.question("May I know your name?\n");
console.log("You are welcome! " + username + " Let's play quiz how well you know about me");

let score =0;
let userAns1 = readlineSync.question("Which is my birthday month?\n");
if(userAns1 === "January"){
  console.log(chalk.green("Correct"));
  score++;
}else{
  console.log(chalk.red("Incorrect,January is my birthdaymonth"));
}

let userAns2 = readlineSync.question("Which is my home town?\n");
if(userAns2==="Benipatti"){
  console.log(chalk.green("Correct"));
  score++;
}else{
  console.log(chalk.red("Incorrect,Benipatti is my hometown"));
}

let userAns3 = readlineSync.question("Which programming language I am currently learning?\n");
if(userAns3==="javaScript"){
  console.log(chalk.green("Correct"));
  score++;
}else{
  console.log(chalk.red("Incorrect,I am learning javaScript"));
}

let userAns4 = readlineSync.question("Which type of company I am working on my skills to join?\n");
if(userAns4==="Startups"){
  console.log(chalk.green("Correct"));
  score++;
}else{
  console.log(chalk.red("Incorrect, Startups correct ans"));
}

let userAns5 = readlineSync.question("Am I above 20 years?\n");
if(userAns5==="yes"){
  console.log(chalk.green("Correct"));
  score++;
}else{
  console.log(chalk.red("Incorrect,I am above 20 years old."));
}
if(score === 5){
  console.log(chalk.yellow("You know me well! " + "Your score is " + score));
}else{
  console.log("You Scored: " + score);

}

