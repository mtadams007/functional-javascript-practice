// #1

let calculator = (operation, a, b) => {
  if (operation === "add"){
    return a + b;
  } else if (operation === "subtract"){
    return a - b;
  } else if (operation === "multiply"){
    return a * b;
  } else if (operation === "divide"){
    return a / b;
  } else {
    return ("Invalid operator");
  }
}

// #2

let points = 0;

let ask = (question, answer) => {
  userAnswer = prompt(question);
  if (userAnswer === answer){
    points++;
  }
}
var questions = ["Was Kim born in 1985?", "Will Rob get out of jail?", "Does North seem happy?", "Kanye released 'Heartless' in 2008?"]

var answers = ["yes","no","no","yes"]

let askLots = (questionArray, answerArray) => {
  for (let i = 0; i < questionArray.length; i++) {
    ask(questionArray[i],answerArray[i]);
  }
}
let whichKardashian = () => {
  if (points === 0){
    alert("I'm sorry, you are Kim");
  } else if (points === 1) {
    alert("I'm sorry, you are Rob");
  } else if (points === 2) {
    alert("I'm sorry, you are Khloe");
  } else if (points === 3) {
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
