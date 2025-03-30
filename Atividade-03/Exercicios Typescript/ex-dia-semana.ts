enum dia_semana {
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
}

const dia:number = new Date().getDay();

function retun_dia_semana (dia:number) {
  // return dia_semana[dia]; // Dessa forma retornaria o dia da semana corretamente, mas usei switch por conta da orientação do professor

  switch(dia){
    case 0:
      return dia_semana[dia];
    case 1:
      return dia_semana[dia];
    case 2:
      return dia_semana[dia];
    case 3:
      return dia_semana[dia];
    case 4:
      return dia_semana[dia];
    case 5:
      return dia_semana[dia];
    case 6:
      return dia_semana[dia];
    default:
      return "Número inválido!";
  }
}

console.log("O dia da semana atual é: " + retun_dia_semana(dia));