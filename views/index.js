
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
            EncontrarId(clave)
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
var _id_ = ''
const mostrarDataSesion = (data) => {
    document.getElementById("nameA").innerHTML = data.data.nombre
    document.getElementById("createAt").innerHTML = data.data.createdAt
    window._id_ = IdE(data)
}

function IdE(data) {
    return data.data._id
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

/*GRAFICAS*/
const btnStat = document.querySelector(".btn-stats"),
    GraficasIn = document.querySelector(".graficas"),
    btnRegresar = document.querySelector(".back-btn_graf");

document.addEventListener("click", e => {
    if (e.target === btnStat || e.target === btnRegresar) {
        GraficasIn.classList.toggle("active")
        sesionIn.classList.toggle("active");
        Pofavor()
    }
})
const Pofavor = () => {
    const url = `https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/respuestas/enc/${window._id_}`;


    fetch(url)
        .then((response) => response.json())
        .then((datas) => {
            crearchart(datas);
            crearchart2(datas);
            mostrarData(datas);
        })
        .catch((error) => console.log(error));
}




var crearchart = (datas) => {
    let array = [];
    let array2 = [];
    distractores = 0;
    pasivos = 0;
    promotores = 0;
    contadorMX = 0;
    for (let i = 0; i < datas.data.length; i++) {

        array[i] = datas.data[i].responses;
        array2[i] = datas.data[i].createdAt.slice(0, -17);//new Date(.slice(5, -17)
        if (array[i] <= 6) {
            distractores = distractores + 1;
        } else if (array[i] <= 8) {
            pasivos = pasivos + 1;
        } else if (array[i] <= 10) {
            promotores = promotores + 1;
        }
        contadorMX = contadorMX + 1;
    }
    dis = (distractores / contadorMX) * 100;
    pas = (pasivos / contadorMX) * 100;
    pro = (promotores / contadorMX) * 100;
    NPS = pro - dis;
    NPS = Math.ceil(NPS) + "%";

    let meses = [];
    let valores = [];
    dm = 3;
    pam = 2;
    prom = 6;
    conMXm = 11;
    cont1 = 0;
    cont2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 6) {
            dm = dm + 1;
        } else if (array[i] <= 8) {
            pam = pam + 1;
        } else if (array[i] <= 10) {
            prom = prom + 1;
        }
        conMXm = conMXm + 1;
        if (array2[i] != array2[i + 1]) {
            meses[cont1] = array2[i];
            cont1 = cont1 + 1;

            di = (dm / conMXm) * 100;
            pa = (pam / conMXm) * 100;
            pr = (prom / conMXm) * 100;
            N = pr - di;
            N = Math.ceil(N);
            valores[cont2] = N;
            cont2 = cont2 + 1;
            dm = 0;
            pam = 0;
            prom = 0;
            conMXm = 0;
        }
    }
    const data = {
        labels: meses,
        datasets: [
            {
                label: "NPS",
                data: valores,
                backgroundColor: [
                    "rgba(255, 26, 104, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(0, 0, 0, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 26, 104, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(0, 0, 0, 1)",
                ],
                borderWidth: 2,
            },
        ],

    };

    // config
    const config = {
        type: "line",
        data: data,
        options: {
            resposive: true,
            maintainAspectRatio: false,
            scales: {
                // x: {
                //     type: 'time',
                // //   position: 'top',
                // },
                y: {
                    beginAtZero: true,
                    // grid:{
                    //   color
                    // }
                },
            },
        },
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
};
var crearchart2 = (datas) => {
    let NPS = (pro - dis);
    NPS = Math.ceil(NPS) + "%";
    document.getElementById("porcentaje").innerHTML = NPS;
    const data2 = {
        labels: ["distractores", "pasivos", "promotores"],
        datasets: [
            {
                label: "NPS",
                data: [distractores, pasivos, promotores],
                backgroundColor: [
                    "red",
                    "yellow",
                    "green",
                ],
                borderWidth: 2,
                cutout: '80%'
            },
        ],
    };

    const config2 = {
        type: "doughnut",
        data: data2,
        options: {
            resposive: true,
            maintainAspectRatio: false,
        }
    };
    const myChart = new Chart(document.getElementById("myChart2"), config2);
}

const mostrarData = (data) => {
    body = `<tr><td>${distractores}</td><td>${pasivos}</td><td>${promotores}</td><td>${contadorMX}</td><td>${NPS}</td></tr>`;
    // }
    document.getElementById("data").innerHTML = body;

};

/*END GRAFICAS*/




/*const EncontrarId = (clave) => {
    fetch(`https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/encuestas/clave/${clave}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => EncontarIdAsk(data))
        .catch(error => console.log(error))
    
    console.log(clave);


}

const EncontarIdAsk = (data) => {
    return data.data._id;
}*/

window.onload = () => {
    renderLogin()
    if (VarialClave == true) {
        Sesion()
        EncontrarId()
    }
    if (VarialToken == true) {
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

