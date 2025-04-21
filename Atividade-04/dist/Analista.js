import { Funcionario } from "./Funcionario.js";
export class Analista extends Funcionario {
    hardSkills;
    constructor(nome, idade, salario, hardSkills) {
        super(nome, idade, salario);
        this.hardSkills = hardSkills;
    }
    calcularSalario() {
        return this._salario * 1.5;
    }
    exibirInfos() {
        return `${super.exibirInfos()} -- Hard Skills: ${this.hardSkills}`;
    }
}
