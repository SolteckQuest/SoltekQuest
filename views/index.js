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
    if (e.target === btnSave || e.target === btnCancel1) {
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

numberInput.addEventListener('input', handleInputChange)



const renderLogin = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        window.location.replace('sesion.html')
    }
}

window.onload = () => {
    renderLogin()
}



