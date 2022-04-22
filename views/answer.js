const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible");
});
//Respondiendo
const renderAnswer = () => {
    const saveQuestion = document.getElementById('save-question')
    saveQuestion.onsubmit = (e) => {
        e.preventDefault()
        const id = "6261f5ed56226a14c653993d"
        const answer = 10
        const nameA = "PruebaG"
        fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/respuestas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'nombre': 'Prueba token', 'responses': 10, 'encuestaid': "6262032556226a14c65399b8"})

        })
        
        window.location.href = 'index.html';
    }
    
}

window.onload = () =>{
    renderAnswer()
}