let ruta = 'login'
let user = {}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

//Botones
const btnSave = document.querySelector(".save-btn"),
    btnCancel = document.querySelector(".cancelar-btn1"),
    askIn = document.querySelector(".create-quest"),
    SaveIn = document.querySelector(".save"),
    btnIn = document.querySelector(".btn");

document.addEventListener("click", e => {
    if (e.target === btnSave || e.target === btnCancel1) {
            SaveIn.classList.toggle("active");
            var rString = randomString(15, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            document.getElementById("link-user").innerHTML =  rString;
            var rString1 = randomString(15, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            document.getElementById("clave-user").innerHTML = rString1;
    }
    if (e.target === btnCancel) {
        SaveIn.classList.toggle("active");
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



function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


const RegisterAsk = () => {
    const saveForm = document.getElementById('form-save')
    saveForm.onsubmit = (e) => {
        e.preventDefault()
        const enlace = document.getElementById('link-user').value
        const clave = document.getElementById('clave-user').value
        const ask = 'pregunta'
        const nameA = document.getElementById('nameA').value
        fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'nombre': nameA, 'questions': ask, 'url': enlace, 'clave': clave })

        })
        alert("Pregunta creada")
        SaveIn.classList.toggle("active");
        window.location.href = 'index.html';
    }
}

window.onload = () => {
    RegisterAsk()
}