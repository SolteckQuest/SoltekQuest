const navToggle = document.querySelector(".nav-toggle");

const btnSend = document.querySelector(".send-btn1"),
    btnCancel = document.querySelector(".cancelar-btn"),
    btnCancelSend = document.querySelector(".salir-btn"),
    userIn = document.querySelector(".user-quest"),
    askIn = document.querySelector(".send"),
    btnIn = document.querySelector(".btn-user");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

//
document.addEventListener("click", e => {
    if (e.target === btnSend || e.target === btnCancelSend) {
        askIn.classList.toggle("active");
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
