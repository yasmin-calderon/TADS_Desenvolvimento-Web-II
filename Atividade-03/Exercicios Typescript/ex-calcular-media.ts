function calcular_media(...numeros:number[]) {
  let soma:number = 0;

  for (let numero of numeros) {
    soma+= numero;
  }

  const media:number = soma/numeros.length; 
  return media;
}

console.log("A média dos números é: "+ calcular_media(10, 20, 50, 100, 2));