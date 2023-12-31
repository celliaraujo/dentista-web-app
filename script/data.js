let data = new Date();
let anoAtual = data.getFullYear();
let diaSemana = data.getDay();
let diaMes = data.getDate();
let mes = data.getMonth();


const listaDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

const listaMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const calendarioDiv = document.getElementById("calendario");

function montarBaseCalendario() {
    const topoDiv = document.createElement('div');
    topoDiv.className = "topo";
    const mesDiv = document.createElement('div');
    mesDiv.innerHTML = getMesString(mes);
    mesDiv.classList.add("mes");
    if(mes == data.getMonth()){
        let setaDirDiv = document.createElement('div');
        setaDirDiv.classList.add('seta-dir');
        setaDirDiv.innerHTML = ">";
        topoDiv.appendChild(mesDiv);
        topoDiv.appendChild(setaDirDiv);
    }else{
        let setaEsqDiv = document.createElement('div');
        setaEsqDiv.classList.add('seta-esq');
        setaEsqDiv.innerHTML = "<";
        topoDiv.appendChild(setaEsqDiv);
        topoDiv.appendChild(mesDiv);        
    }
    const diasSemUl = document.createElement('ul');
    listaDias.forEach(dia => {
        const diaSemLi = document.createElement('li');
        diaSemLi.innerHTML = dia;
        diaSemLi.classList.add("dia-semana");
        diasSemUl.appendChild(diaSemLi);

    });
    
    calendarioDiv.appendChild(topoDiv);
    calendarioDiv.appendChild(diasSemUl);
}

function diasNoMes(mes, ano) {
    var data = new Date(ano, mes + 1, 0);
    return data.getDate();
}
console.log(`O mês de ${getMesString(mes)} tem ${diasNoMes(mes, anoAtual)} dias.`);


function montarCalendario() {
    //let mesSize = diasNoMes(mes, anoAtual);
    let mesSize = 5 * 7;
    let totalDias = diasNoMes(mes, anoAtual);
    let diaDoMes = 1 - primeiroDiaMes(mes, anoAtual);

    while (mesSize > 0) {
        let semanUl = document.createElement('ul');
        for (var dia = 0; dia < 7; dia++) {
            //criando o li para cada item da semana
            let diaLi = document.createElement('li');

            if (diaDoMes > 0 && diaDoMes <= totalDias) {
                diaLi.classList.add('dia-valido');
                if (mes == data.getMonth()) {
                    if (diaDoMes >= diaMes) {
                        diaLi.classList.add('dia');
                        diaLi.classList.add('selecionavel');
                    }
                }else if(mes >= data.getMonth()){
                    diaLi.classList.add('dia');
                    diaLi.classList.add('selecionavel');
                }
                diaLi.innerHTML = diaDoMes;
            } else {
                diaLi.classList.add('dia-invalido');

                var novaData = new Date();

                novaData.setDate(novaData.getDate() - (diaMes - diaDoMes));

                diaLi.innerHTML = novaData.getDate();
                diaLi.classList.add('outro-mes');

                if (diaDoMes > totalDias) {
                    diaLi.classList.add('selecionavel');
                }


                console.log(`${novaData}`);
            }


            if (dia == 0) {
                if (!diaLi.classList.contains('outro-mes')) {
                    diaLi.classList.add('domingo');
                    diaLi.classList.remove('selecionavel');
                }

            }

            semanUl.appendChild(diaLi);
            diaDoMes++;
            mesSize--;
        }
        const mesDiv = document.querySelector('.calendario');
        mesDiv.appendChild(semanUl);
    }
}

function mesSeguinte() {
    calendarioDiv.innerHTML = "";
    mes++;
    montarBaseCalendario();
    montarCalendario();
}

function mesAtual() {
    calendarioDiv.innerHTML = "";
    mes--;
    montarBaseCalendario();
    montarCalendario();
}


function primeiroDiaMes(mes, ano) {
    let dataPDM = new Date(ano, mes, 1);
    let primeiroDia = dataPDM.getDay();
    return primeiroDia;
}

montarBaseCalendario();
montarCalendario();

function getMesString(mes) {
    return listaMes[mes];
}

function getDiaString(dia) {
    return listaDias[dia];
}

mesSeguinte();