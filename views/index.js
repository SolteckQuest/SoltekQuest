let ruta = 'login'
let user = {}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnSignIn = document.querySelector(".ask-sumit-btn"),
    btnCancel = document.querySelector(".cancelar-btn"),
    btnSave = document.querySelector(".save-btn"),
    btnCancel1 = document.querySelector(".cancelar-btn1"),
    signIn = document.querySelector(".sign-in"),
    askIn = document.querySelector(".create-quest"),
    SaveIn = document.querySelector(".save"),
    btnIn = document.querySelector(".btn");
const btnVi = document.querySelector(".vi-sumit-btn"),
    inputClave = document.querySelector(".clave"),
    sesionIn = document.querySelector(".my-quest-option"),
    btnBack = document.querySelector(".back-btn");
var GlobalBand = 1;
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});


//Botones
document.addEventListener("click", e => {
    if (e.target === btnSignIn || e.target === btnCancel) {
        signIn.classList.toggle("active");
        askIn.classList.toggle("active");
        btnIn.classList.toggle("active");
    }
});

document.addEventListener("click", e => {
    const Clave = document.getElementById('clave').value;
    if (e.target === btnVi) {
        if (Clave === '') {
            inputClave.classList.toggle("active");
        }
        else {
            if (GlobalBand == 0) {
                sesionIn.classList.toggle("active");
                signIn.classList.toggle("active");
                inputClave.classList.toggle("active");
            }
        }
    }
    if (e.target === btnBack) {
        sesionIn.classList.toggle("active");
        signIn.classList.toggle("active");
        GlobalBand = 1
    }
});

//Validaciones
const renderLogin = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const clave = document.getElementById('clave').value
        fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/clave/${clave}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const url = document.getElementById('token').value
        fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/url/${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        GlobalBand = 0
        if(clave){
            Sesion(clave)
        }
        if(url){
            Encuestado(url)
        }
    }
}
//Sesion
const Sesion = (clave) => {
    fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/clave/${clave}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then (response => response.json())
    .then (data => mostrarDataSesion(data))
    .catch(error => console.log(error))
    mostrarDataSesion()
}

const mostrarDataSesion = (data) =>{
    document.getElementById("nameA").innerHTML = data.data.nombre
    document.getElementById("createAt").innerHTML = data.data.createdAt
}
//Encuestado
const Encuestado = (url) => {
    fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/url/${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then (response => response.json())
    .then (data => mostrarDataEncuestado(data))
    .catch(error => console.log(error))
    mostrarDataEncuestado()
}

const mostrarDataEncuestado = (data) =>{
    document.getElementById("id-pregunta-user").innerHTML = data.data.questions
}


window.onload = () => {
    renderLogin()
    Sesion()
    Encuestado()
}

const btnSend = document.querySelector(".send-btn1"),
    btnCancelSend = document.querySelector(".salir-btn"),
    Conbtn = document.querySelector(".Con-sumit-btn"),
    BtnUserIn = document.querySelector(".btn-user"),
    userIn = document.querySelector(".user-quest"),
    sendIn = document.querySelector(".send");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

//
document.addEventListener("click", e => {
    if (e.target === btnSend || e.target === btnCancelSend) {
        sendIn.classList.toggle("active");
    }
    if(e.target === Conbtn){
        BtnUserIn.classList.toggle("active");
        userIn.classList.toggle("active");
        signIn.classList.toggle("active");
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

