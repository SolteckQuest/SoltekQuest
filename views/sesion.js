const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const btnCancelar = document.querySelector(".cancelar-btn");


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});

//fecha
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;
document.getElementById("current_date-2").innerHTML = day + "/" + month + "/" + year;

