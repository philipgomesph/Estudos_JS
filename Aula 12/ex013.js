var diaHoje = new Date().getDay();
var dia = diaHoje;
console.log(dia);
// Doming == 0 , segunda == 1 .... sabado == 6
switch(dia){
    case 0:
        console.log("Hoje é Domingo");
        break;
    case 1:
        console.log("Hoje é Segunda");
        break;
    case 2:
        console.log("Hoje é Terça");
        break;
    case 3:
        console.log("Hoje é Quarta");
        break;
    case 4:
        console.log("Hoje é Quinta");
        break;
    case 5:
        console.log("Hoje é Sexta");
            break;
    case 6:
        console.log("Hoje é Sabado");
        break;
    default:
        console.log("Erro de sistema, dia não encontrado");
        break;
}