function calcular_media() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var soma = 0;
    for (var _a = 0, numeros_1 = numeros; _a < numeros_1.length; _a++) {
        var numero = numeros_1[_a];
        soma += numero;
    }
    for (var _b = 0, numeros_2 = numeros; _b < numeros_2.length; _b++) {
        var numero = numeros_2[_b];
        console.log("Imprimindo numeros do array: " + numero);
    }
    var media = soma / numeros.length;
    return media;
}
console.log("A média dos números é: " + calcular_media(10, 20, 50, 100, 2));
