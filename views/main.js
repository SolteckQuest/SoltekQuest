let ruta = 'login'
let user = {}
/*const inicializaDatos = () => {
    fetch('')
    .then(response => response.json())
    .then(data =>{
        mealsState = data
        const mealsList = document.getElementById('')
        const submit = document.getElementById('')
        const listItems = data.map(renderItem)
        mealsList.remove(mealsList.firstElementChild)
        listItems.foreach(element => mealsList.appendChild(element))
        submit.removeAttribute('disabled')
        fetch('')
        .then(response => response.json())
        .then(ordersData => {
            const ordersList = document.getElementById('')
            const listOrders = ordersData.map(orderData => renderOrders(orderData, data))
            ordersList.removeChild(ordersList.firstElementChild)
            listOrders.foreach(element => ordersList.appendChild(element))
        })
    })
}*/

const renderApp = () => {
    const token = localStorage.getItem('token')
    user = JSON.parse(localStorage.getItem('user'))
    if(token){
        //renderSesion()
    }
    renderLogin()
    renderRegister()
}

const renderSesion = () => {
    window.location.replace('sesion.html')
}

const renderLogin = () => {
    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}) 
        }).then(x => x.json())
            .then(respuesta =>{
                localStorage.setItem('token', respuesta.token)
                ruta = 'sesion'
            })
            const token = localStorage.getItem('token')
            if (email && password){
                renderSesion()
                console.log(token)
            }
            /*
            .then(token =>{
                fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/auth/login',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application-json',
                        authorization: token,
                    },
                })
            })
            .then(x => x.json())
            .then(fetchedUser => {
                localStorage.setItem('user', JSON.stringify(fetchedUser));
                user = fetchedUser;
                renderSesion();
            })*/
    }
}

const renderRegister = () =>{
    const loginForm = document.getElementById('register-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault()
        const email = document.getElementById('email_in').value
        const password = document.getElementById('password_in').value
        const name = document.getElementById('name').value
        const lastname = document.getElementById('lastname').value
        const nameuser = document.getElementById('nameuser').value
        fetch('https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'nombre':name, 'apellido':lastname, email, password, 'alias':nameuser}) 
        })
    }
}

window.onload = () => {
    renderApp()
}