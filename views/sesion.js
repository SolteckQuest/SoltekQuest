const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnQuest = document.querySelector(".quest-btn"),
    CreateQuest = document.querySelector(".create-quest"),
    Option1 = document.querySelector(".option"),
    MyQuest = document.querySelector(".my-quest"),
    btnMyQuest = document.querySelector(".my-quest-btn"),
    MyQuestOption = document.querySelector(".my-quest-option"),
    MyQuest2 = document.querySelector(".my-quest-2"),
    MyQuestHistorial = document.querySelector(".my-quest-historial"),
    btnMyQuestHistorial = document.querySelector(".historial-btn");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
});

document.addEventListener("click", e =>{
    if(e.target === btnQuest /*|| e.target === btnSignUp*/){
        CreateQuest.classList.toggle("active");
        Option1.classList.toggle("active");
    }
    if(e.target === btnMyQuest /*|| e.target === btnSignUp*/){
        MyQuest.classList.toggle("active");
        Option1.classList.toggle("active");
        MyQuestOption.classList.toggle("active");
    }
    if(e.target === btnMyQuestHistorial /*|| e.target === btnSignUp*/){
        MyQuest2.classList.toggle("active");
        Option1.classList.toggle("active");
        MyQuestHistorial.classList.toggle("active");
    }
});
//Range input
const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)

//fecha
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;
document.getElementById("current_date-2").innerHTML = day + "/" + month + "/" + year;