const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnQuest = document.querySelector(".quest-btn"),
    CreateQuest = document.querySelector(".create-quest"),
    Option1 = document.querySelector(".option");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
});

document.addEventListener("click", e =>{
    if(e.target === btnQuest /*|| e.target === btnSignUp*/){
        CreateQuest.classList.toggle("active");
        Option1.classList.toggle("active");
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