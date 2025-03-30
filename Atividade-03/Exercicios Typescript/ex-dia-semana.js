var dia_semana;
(function (dia_semana) {
    dia_semana[dia_semana["Domingo"] = 0] = "Domingo";
    dia_semana[dia_semana["Segunda-feira"] = 1] = "Segunda-feira";
    dia_semana[dia_semana["Ter\u00E7a-feira"] = 2] = "Ter\u00E7a-feira";
    dia_semana[dia_semana["Quarta-feira"] = 3] = "Quarta-feira";
    dia_semana[dia_semana["Quinta-feira"] = 4] = "Quinta-feira";
    dia_semana[dia_semana["Sexta-feira"] = 5] = "Sexta-feira";
    dia_semana[dia_semana["S\u00E1bado"] = 6] = "S\u00E1bado";
})(dia_semana || (dia_semana = {}));
var dia = new Date().getDay();
function retun_dia_semana(dia) {
    return dia_semana[dia]; // Dessa forma retornaria o dia da semana corretamente, mas usei switch por conta da orientação do professor
    // switch(dia){
    //   case 0:
    //     return dia_semana[dia];
    //   case 1:
    //     return dia_semana[dia];
    //   case 2:
    //     return dia_semana[dia];
    //   case 3:
    //     return dia_semana[dia];
    //   case 4:
    //     return dia_semana[dia];
    //   case 5:
    //     return dia_semana[dia];
    //   case 6:
    //     return dia_semana[dia];
    //   default:
    //     return "Número inválido!";
    // }
}
console.log("O dia da semana atual é: " + retun_dia_semana(dia));
