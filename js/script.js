
let hour = document.querySelector('#hour');


setInterval(() =>{

const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hr = data.getHours();
const min =data.getMinutes();
const sec = data.getSeconds();
    let month;
    let weekDays;

    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }

    const segundos = zeroAEsquerda(sec)
    const minutos = zeroAEsquerda(min)
    const hora = zeroAEsquerda(hr)
    
    switch (mes) {
        case 1:
            month = "Janeiro"
            break;
        case 2:
            month = "Fevereiro"
            break;
        case 3:
            month = "Março"
            break;
        case 4:
            month = "Abril"
            break;
        case 5:
            month = "Maio"
            break;
        case 6:
            month = "Junho"
            break;
        case 7:
            month = "Julho"
            break;
        case 8:
            month = "Agosto"
            break;
        case 9:
            month = "Setembro"
            break;
        case 10:
            month = "Outubro"
            break;
        case 11:
            month = "Novembro"
            break;
        case 12:
            month = "Dezembro"
            break;
    }
    
    switch (diaSemana) {
        case 0:
            weekDays = 'Domingo'
            break;
        case 1:
            weekDays = 'Segunda-Feira'
            break;
        case 2:
            weekDays = 'Terça-Feira'
            break;
        case 3:
            weekDays = 'Quarta-Feira'
            break;
        case 4:
            weekDays = 'Quinta-Feira'
            break;
        case 5:
            weekDays = 'Sexta-Feira'
            break;
        case 6:
            weekDays = 'Sábado'
            break;
        default:
            
            break;
    
    };
    hour.innerHTML = `${weekDays}, ${diaMes} de ${month} de ${ano}, ${hora}:${minutos}:${segundos} `

}, 1000)

console.log(diaSemana, hour.innerHTML, diaMes) 
