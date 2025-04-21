import { Funcionario } from "./Funcionario.js";
export class Lider extends Funcionario {
    liderados;
    constructor(nome, idade, salario, liderados) {
        super(nome, idade, salario);
        this.liderados = liderados;
    }
    calcularSalario() {
        return this._salario + this.liderados * 600;
    }
    exibirInfos() {
        return `${super.exibirInfos()} -- Liderados: ${this.liderados}`;
    }
}
