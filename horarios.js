console.log("funfando conecção...");

const agenda = await fetch('agenda.json').then((response) => response.json());

console.log(agenda);

const horarios = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "13:00","13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

var disponiveis = agenda['disponiveis'];
console.log(disponiveis);

const agendaDiv = document.getElementById("agenda");

function gerarHorarios(){
    for(var h=0; h < horarios.length; h++){
        var horaDiv = document.createElement('button');
        var hora = horarios[h];
        if (disponiveis[h] == 's'){
            horaDiv.classList.add('horario-disponivel');
            console.log("Horario disponivel");
            console.log(hora);
        }else{
            horaDiv.classList.add('horario-indisponivel');
            horaDiv.disabled = true;
            console.log("Horario indisponivel");
            console.log(hora);
        }
        horaDiv.id = `horario${h + 1}`;
        horaDiv.innerHTML = hora;
        agendaDiv.appendChild(horaDiv);
    }   
}

gerarHorarios();



