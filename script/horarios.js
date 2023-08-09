let data = new Date();
let diaSemana = data.getDay();
let diaMes = data.getDate();


const listaDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const listaMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let mes = data.getMonth();

console.log(getMesString(mes));
console.log(getDiaString(diaSemana));

function getMesString(mes){
    return listaMes[data.getMonth(mes)];
}

function getDiaString(dia){
    return listaDias[data.getDay(dia)];
}

const agenda = await fetch('../script/agenda.json').then((response) => response.json());

const horarios = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

var disponiveis = agenda['disponiveis'];

const agendaDiv = document.getElementById("agenda");


function gerarHorarios(){
    for(var h=0; h < horarios.length; h++){
        var horaDiv = document.createElement('button');
        var hora = horarios[h];
        if (disponiveis[h] == 's'){
            horaDiv.classList.add('horario-disponivel');
            
        }else{
            horaDiv.classList.add('horario-indisponivel');
            horaDiv.disabled = true;
        }
        horaDiv.id = `horario${h + 1}`;
        horaDiv.innerHTML = hora;
        agendaDiv.appendChild(horaDiv);
    }   
}

gerarHorarios();



