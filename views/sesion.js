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

/*dropdown options*/
const WithOutAns = document.querySelector(".without-ans"),
    OptionMultiple = document.querySelector(".option-multiple"),
    Abierta = document.querySelector(".abierta"),
    Personal = document.querySelector(".personal"),
    AbiertaOp = document.querySelector(".abierta-op"),
    RangeA = document.querySelector(".range"),
    CheckBox = document.querySelector(".checkbox");
/*Botones*/
const BtnSave = document.getElementById("btnsave").disabled=true,
    BtnAdd = document.getElementById("btnadd").disabled=true,
    BtnCancel = document.getElementById("btncancel").disabled=true;
function selectelement(){
    let dropdownnans = document.getElementById("typeanswers");
    let answer = dropdownnans.value;
    if(answer == "abierta" ){
       Abierta.classList.toggle("active");
    }
    if(answer == "multiple"){
        OptionMultiple.classList.toggle("active");
    }
    if(answer == "datosp"){
        Personal.classList.toggle("active");
    }
    if(answer == "multiplea"){
        AbiertaOp.classList.toggle("active");
    }
    if(answer == "calificacion"){
        RangeA.classList.toggle("active");
    }
    if(answer == "verificacion"){
        CheckBox.classList.toggle("active");
    }
}

var elInput = document.querySelector('#rangeid');
if (elInput) {
  var etiqueta = document.querySelector('#valorid');
  if (etiqueta) {
    etiqueta.innerHTML = elInput.value;

    elInput.addEventListener('input', function() {
      etiqueta.innerHTML = elInput.value;
    }, false);
  }
}

//fecha
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;
document.getElementById("current_date-2").innerHTML = day + "/" + month + "/" + year;