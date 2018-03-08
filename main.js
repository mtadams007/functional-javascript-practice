// #1

let calculator = (operation, a, b) => {
  let operation2 = operation.toUpperCase();
  if (operation2 === "ADD"){
    return a + b;
  } else if (operation2 === "SUBTRACT"){
    return a - b;
  } else if (operation2 === "MULTIPLY"){
    return a * b;
  } else if (operation2 === "DIVIDE"){
    return a / b;
  } else {
    return ("Invalid operator");
  }
}

// #2

let points = 0;

let ask = (question, answer) => {
  userAnswer = prompt(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    points++;
  }
}
var questions = ["Was Kim born in 1985?", "Will Rob get out of jail?", "Does North seem happy?", "Kanye released 'Heartless' in 2008?"]

var answers = ["yes","no","no","yes"]

let askLots = (questionArray, answerArray) => {
  for (let i = 0; i < questionArray.length; i++) {
    ask(questionArray[i],answerArray[i]);
  }
  console.log(points);
}
let whichKardashian = () => {
  if (points%5 === 0){
    alert("I'm sorry, you are Kim");
  } else if (points%5 === 1) {
    alert("I'm sorry, you are Rob");
  } else if (points%5 === 2) {
    alert("I'm sorry, you are Khloe");
  } else if (points%5 === 3) {
    alert("I'm sorry, you are Kourtney");
  } else {
    alert("I'm sorry, you are North");
  }
}

let whichKard = (questionArray, answerArray) => {
  for (let i = 0; i < questionArray.length; i++) {
    ask(questionArray[i],answerArray[i]);
  }
  return whichKardashian();
}

whichKard(questions,answers);

// Danielle's trivia game
//
// var questions = [
//     "Was Kim born in 1985?",
//     "Will Rob get out of jail?",
//     "Does North seem happy?",
//     "Kanye released 'Heartless' in 2008?",
//     "Was Kim's first husband's name Justin?",
//     "Is Khloe the oldest Kardashian sister?"
// ]
// var answers = [
//     "yes",
//     "no",
//     "no",
//     "yes",
//     "no",
//     "no"
// ]
// function ask(question, answer, player_number) {
//     var userGuess = prompt(player_number + ": " + question + " (yes/no)");
//     if (userGuess == answer) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// function getWinner(player_one_score, player_two_score) {
//     if (player_one_score > player_two_score) {
//         console.log("Player 1 is the loser!");
//         console.log(" .. er um I mean Winner!");
//     } else if (player_one_score < player_two_score) {
//         console.log("Player 2 needs a new hobby!");
//         console.log(" Oops, I mean Player 2 wins!");
//     } else {
//         console.log("Tie Game!");
//     }
// }
// function game() {
//     let p1Score = 0;
//     let p2Score = 0;
//     let p1Turn = true;
//
//     // start game
//     console.log("Welcome to Kardashian Trivia!");
//
//     for (let i = 0; i < questions.length; i++ ) {
//         if (p1Turn) {
//             p1Score += ask(questions[i], answers[i], "Player 1");
//         } else {
//             p2Score += ask(questions[i], answers[i], "Player 2");
//         }
//         console.log("Player 1:", p1Score, "Player 2:", p2Score);
//         p1Turn = !p1Turn;
//     }
//
//     // game over, print winner
//     getWinner(p1Score, p2Score);
//
// }
// game();
