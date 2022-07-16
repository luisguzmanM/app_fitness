// variables
const form = document.querySelector("#form");
const radioLevel = document.querySelectorAll("input[name='level']");
const muscleSelected = document.querySelector("#muscle-group");
const containerRoutine = document.querySelector("#container-routine");
const container = document.querySelector(".container");

// eventos
form.addEventListener("submit", validateForm);

function validateForm(event){
  event.preventDefault();
  const level = findSelectedLevel();
  if (level === '' || level == undefined || muscleSelected.value === '' || muscleSelected.value == undefined) {
    console.log('Please, complete the form');
    showMessage('Please, complete the form');
    return;
  } 
  findMucleSelected();
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

function findMucleSelected(){
  let muscle;
  switch (muscleSelected.value) {
    case 'legs':
      console.log('legs');
      muscle = 'legs';
      break;
    case 'arms':
      console.log('arms');
      muscle = 'arms';
      break;
    case 'chest':
      console.log('chest');
      muscle = 'chest';
      break;
    case 'back':
      console.log('back');
      muscle = 'back';
      break;
    case 'shoulders':
      console.log('shoulders');
      muscle = 'shoulders';
      break;
    case 'abs':
      console.log('abs');
      muscle = 'abs';
      break;
    default:
      break;
  }
  return muscle;
}

function showRoutine(){
  const level = findSelectedLevel();
  const muscle = findMucleSelected();
}