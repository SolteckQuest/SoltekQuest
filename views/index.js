const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

const btnSignIn = document.querySelector(".sign-in-btn"),
    btnSignUp = document.querySelector(".sign-up-btn"),
    signUp = document.querySelector(".sign-up"),
    signIn = document.querySelector(".sign-in"),
    btnForgotPass = document.querySelector(".forgot-password-btn"),
    btnSignIn2 = document.querySelector(".sign-in-btn-2"),
    forgotPass = document.querySelector(".forgot-password");


navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu-visible");
});

document.addEventListener("click", e =>{
    if(e.target === btnSignIn || e.target === btnSignUp){
        signIn.classList.toggle("active");
        signUp.classList.toggle("active");
    }
});

document.addEventListener("click", e =>{
    if(e.target === btnForgotPass || e.target === btnSignIn2){
        signIn.classList.toggle("active");
        forgotPass.classList.toggle("active");
    }
});
