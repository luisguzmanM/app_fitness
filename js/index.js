// variables
const form = document.querySelector("#form");
const radioLevel = document.querySelectorAll("input[name='level']");
const muscleSelected = document.querySelector("#muscle-group");
const containerRoutine = document.querySelector("#container-routine");
const container = document.querySelector(".container");
const URL = './js/data.json';

// eventos
form.addEventListener("submit", validateForm);

function validateForm(event){
  event.preventDefault();
  const level = findSelectedLevel();
  const muscle = findSelectedMuscle();
  if (level === '' || level == undefined || muscle === '' || muscle == undefined) {
    showMessage('Please, complete the form');
    return;
  } else {
    createHTML(level, muscle);
  }
}

function findSelectedLevel(){
  let levelUser;
  radioLevel.forEach(element => {
    if(element.checked){
      levelUser = element.value;
    }
  })
  return levelUser;
}

function findSelectedMuscle(){
  let muscle;
  switch (muscleSelected.value) {
    case 'legs':
      muscle = 'legs';
      break;
    case 'arms':
      muscle = 'arms';
      break;
    case 'chest':
      muscle = 'chest';
      break;
    case 'back':
      muscle = 'back';
      break;
    case 'shoulders':
      muscle = 'shoulders';
      break;
    case 'abs':
      muscle = 'abs';
      break;
    default:
      break;
  }
  return muscle;
}

function createHTML(level, muscle){
  console.log(level, muscle);
}

function showMessage(txtMessage){
  const divMsg = document.createElement('div');
  divMsg.className = 'message';
  let txtMsg = document.createTextNode(txtMessage);
  divMsg.appendChild(txtMsg);
  const messageInScreen = document.querySelector(".message");
  if(!messageInScreen){
    container.appendChild(divMsg);
  }
  setTimeout(() => {
    divMsg.remove();
  }, 3000);
}