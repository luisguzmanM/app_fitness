import {routines} from  './db.js';

// variables
const form = document.querySelector("#form");
const conEquipo = document.querySelector("#con-equipo");
const sinEquipo = document.querySelector("#sin-equipo");
const levelOne = document.querySelector("#principiante");
const levelTwo = document.querySelector("#intermedio");
const levelThree = document.querySelector("#avanzado");

// eventos
form.addEventListener('submit', selectTrainingType);

// funciones
function selectTrainingType(e) {
  e.preventDefault();
  let availableRoutine;

  if(conEquipo.checked === true){
    availableRoutine = routines.conEquipos;
  } else {
    availableRoutine = routines.sinEquipos;
  }
  selectYourLevel(availableRoutine);
}

function selectYourLevel(availableRoutine) {
  let routineLevel;
  if(levelOne.checked === true){
    routineLevel = availableRoutine.principiante;    
  } else if(levelTwo.checked === true) {
    routineLevel = availableRoutine.intermedio;
  } else {
    routineLevel = availableRoutine.avanzado;
  }
  selectMuscle(routineLevel);
}

function selectMuscle(routineLevel){
  const muscleSelected = document.querySelector("#muscle-group").value;
  selectRoutine(muscleSelected, routineLevel);  
}

function selectRoutine(muscleSelected, routineLevel){
  let routine;
  switch (muscleSelected) {
    case "legs":
      routine = routineLevel.pierna;
      break;
    case "arms": 
      routine = routineLevel.brazos;
      break;
    case "chest":
      routine = routineLevel.pectorales;
      break;
    case "back":
      routine = routineLevel.espalda;
      break;
    case "shoulders":
      routine = routineLevel.hombros;
      break;
    default:
      break;
  }
  showRoutine(routine);
}

function showRoutine(param){

  limpiarHTML();

  const list = document.querySelector("#container-routine");
  let arrayRoutine = [];
  for(let item in param){
    const { nombre, series, equipo, repeticiones, descanso, gif } = param[item];
    const routineHTML = `
      <h3>${nombre}</h3>
      <p>Series: ${series}</p>
      <p>Repeticiones: ${repeticiones}</p>
      <p>Descanso: ${descanso}</p>
      <img src="${gif}">
    `;
    arrayRoutine.push(routineHTML);
  }
  arrayRoutine.forEach( e => {
    list.innerHTML += e;
  })
}

function limpiarHTML(){
  document.querySelector("#container-routine").innerHTML = '';
}