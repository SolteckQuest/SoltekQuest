let id = `6261f5ed56226a14c653993d`;
const url = `https://36oqqx1tq4.execute-api.us-west-1.amazonaws.com/api/respuestas/enc/${id}`;


fetch(url)
    .then((response) => response.json())
    .then((datas) => {
        crearchart(datas);
        crearchart2(datas);
        mostrarData(datas);
    })
    .catch((error) => console.log(error));

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
    for (let i = 0; i < array.length; i++){
        if (array[i] <= 6) {
            dm = dm + 1;
        } else if (array[i] <= 8) {
            pam  = pam  + 1;
        } else if (array[i] <= 10) {
            prom = prom + 1;
        }
        conMXm= conMXm + 1;
        if(array2[i] != array2[i+1])
        {
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
                label: "Calificacion",
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
    // let array = [];
    // let array2 = [];
    // distractores = 0;
    // pasivos = 0;
    // promotores = 0;
    // contadorMX = 0;
    // for (let i = 0; i < datas.data.length; i++) {

    //     array[i] = datas.data[i].responses;
    //     array2[i] = datas.data[i].createdAt.slice(0, -17);//new Date(.slice(5, -17)
    //     if (array[i] <= 6) {
    //         distractores = distractores + 1;
    //     } else if (array[i] <= 8) {
    //         pasivos = pasivos + 1;
    //     } else if (array[i] <= 10) {
    //         promotores = promotores + 1;
    //     }
    //     contadorMX = contadorMX + 1;
    // }
    // dis = (distractores / contadorMX) * 100;
    // pas = (pasivos / contadorMX) * 100;
    // pro = (promotores / contadorMX) * 100;

    // let meses = [];
    // let valores = [];
    // dm = 3;
    // pam = 2;
    // prom = 6;
    // conMXm = 11;
    // cont1 = 0;
    // cont2 = 0;
    // for (let i = 0; i < array.length; i++){
    //     if (array[i] <= 6) {
    //         dm = dm + 1;
    //     } else if (array[i] <= 8) {
    //         pam  = pam  + 1;
    //     } else if (array[i] <= 10) {
    //         prom = prom + 1;
    //     }
    //     conMXm= conMXm + 1;
    //     if(array2[i] != array2[i+1])
    //     {
    //         meses[cont1] = array2[i];
    //         cont1 = cont1 + 1;

    //         di = (dm / conMXm) * 100;
    //         pa = (pam / conMXm) * 100;
    //         pr = (prom / conMXm) * 100;
    //         N = pr - di;
    //         N = Math.ceil(N);
    //         valores[cont2] = N;
    //         cont2 = cont2 + 1;
    //         dm = 0;
    //         pam = 0;
    //         prom = 0;
    //         conMXm = 0;
    //     }
    // }
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
                    // "rgba(54, 162, 235, 0.2)",
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
