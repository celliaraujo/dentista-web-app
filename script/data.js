let data = new Date();
let diaSemana = data.getDay();
let diaMes = data.getDate();
let mes = data.getMonth();


const listaDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const listaMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const calendarioDiv = document.getElementById("calendario");

function montaCalendario(){
    const mesDiv = document.createElement('div');
    mesDiv.innerHTML = getMesString(mes);
    mesDiv.classList.add("mes");
    const diasSemUl = document.createElement('ul');
    listaDias.forEach(dia => {
        const diaSemLi = document.createElement('li');
        diaSemLi.innerHTML = dia;
        diaSemLi.classList.add("dia-semana");
        diasSemUl.appendChild(diaSemLi);       
        
    });
    calendarioDiv.appendChild(mesDiv);
    calendarioDiv.appendChild(diasSemUl);
}

montaCalendario();

function getMesString(mes){
    return listaMes[data.getMonth(mes)];
}

function getDiaString(dia){
    return listaDias[data.getDay(dia)];
}

console.log(getMesString(mes));
console.log(getDiaString(diaSemana));