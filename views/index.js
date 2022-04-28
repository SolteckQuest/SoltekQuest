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
    inputToken = document.querySelector(".token"),
    sesionIn = document.querySelector(".my-quest-option"),
    btnBack = document.querySelector(".back-btn"),
    btnConEnc = document.querySelector(".Con-sumit-btn");
var GlobalBand = 1;
var VarialLogin = false;
var VarialClave = false;
var VarialToken = false;
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});


//Botones
document.addEventListener("click", e => {
    if (e.target === btnSignIn) {
        signIn.classList.toggle("active");
        askIn.classList.toggle("active");
        btnIn.classList.toggle("active");
    }
    if (e.target === btnCancel) {
        signIn.classList.toggle("active");
        askIn.classList.toggle("active");
        btnIn.classList.toggle("active");
        VarialToken = false;
    }
});

const btnSend = document.querySelector(".send-btn1"),
    btnCancelSend = document.querySelector(".salir-btn"),
    Conbtn = document.querySelector(".Con-sumit-btn"),
    BtnUserIn = document.querySelector(".btn-user"),
    userIn = document.querySelector(".user-quest"),
    sendIn = document.querySelector(".send"),
    btnSend1 = document.querySelector(".send-btn");


//
document.addEventListener("click", e => {
    if (e.target === btnSend || e.target === btnCancelSend) {
        sendIn.classList.toggle("active");
    }
    const Clavep = document.getElementById("token").value;
    if (e.target === Conbtn) {
        if (Clavep === '') {
            inputToken.classList.toggle("active");
        }
        else {
            if (GlobalBand == 0) {
                BtnUserIn.classList.toggle("active");
                userIn.classList.toggle("active");
                signIn.classList.toggle("active");
                inputToken.classList.toggle("active");
            }
        }
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
        VarialClave = false;
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
        if (clave) {
            VarialClave = true;
            Sesion(clave)
        }
        if (url) {
            VarialToken = true;
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
    }).then(response => response.json())
        .then(data => mostrarDataSesion(data))
        .catch(error => console.log(error))
    mostrarDataSesion()
}

const mostrarDataSesion = (data) => {
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
    }).then(response => response.json())
        .then(data => EncuestadoData(data))
        .catch(error => console.log(error))
    EncuestadoData()
}

const EncuestadoData = (data) => {

    const btn1 = document.querySelector(".rangevalue1");
    const btn2 = document.querySelector(".rangevalue2");
    const btn3 = document.querySelector(".rangevalue3");
    const btn4 = document.querySelector(".rangevalue4");
    const btn5 = document.querySelector(".rangevalue5");
    const btn6 = document.querySelector(".rangevalue6");
    const btn7 = document.querySelector(".rangevalue7");
    const btn8 = document.querySelector(".rangevalue8");
    const btn9 = document.querySelector(".rangevalue9");
    const btn10 = document.querySelector(".rangevalue10");
    var nombre = data.data.nombre;
    var id = data.data._id;

    document.addEventListener("click", e => {
        if (e.target === btn1) {
            renderAnswer(1, id, nombre)
        }
        if (e.target === btn2) {
            renderAnswer(2, id, nombre)
        }
        if (e.target === btn3) {
            renderAnswer(3, id, nombre)
        }
        if (e.target === btn4) {
            renderAnswer(4, id, nombre)
        }
        if (e.target === btn5) {
            renderAnswer(5, id, nombre)
        }
        if (e.target === btn6) {
            renderAnswer(6, id, nombre)
        }
        if (e.target === btn7) {
            renderAnswer(7, id, nombre)
        }
        if (e.target === btn8) {
            renderAnswer(8, id, nombre)
        }
        if (e.target === btn9) {
            renderAnswer(9, id, nombre)
        }
        if (e.target === btn10) {
            renderAnswer(10, id, nombre)
        }
    });
}

//Respondiendo
const renderAnswer = (valorid, url, nombre) => {
    const id = url
    const answer = valorid
    const nameA = nombre
    const DatasQ = { 'nombre': nameA, 'responses': answer, 'encuestaid': id }
    document.addEventListener("submit", e => {
        e.preventDefault()
        fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/respuestas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(DatasQ),

        }).then(res => res.json())
            .then(data => console.log(data))
        alert("Pregunta respondida satisfactoriamente")
        sendIn.classList.toggle("active");
        window.location.href = 'index.html';
    });
   
}

window.onload = () => {
    renderLogin()
    if(VarialClave == true){
        Sesion()
    }
    if(VarialToken == true){
        Encuestado()
        renderAnswer()
    }
}



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

