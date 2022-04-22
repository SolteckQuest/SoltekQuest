const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnCancelar = document.querySelector(".cancelar-btn");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

//fecha
/*date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;
document.getElementById("current_date-2").innerHTML = day + "/" + month + "/" + year;*/

const User = () => {
    const clave = "aWovspVsoHbXsHt"
    fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/clave/${clave}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (clave) {
        document.getElementById("nameA").innerHTML = clave
    }
    console.log(clave.nombre)
}

window.onload = () => {
    User()
}