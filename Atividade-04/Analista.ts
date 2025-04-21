import { Funcionario } from "./Funcionario.js";

export class Analista extends Funcionario {

  constructor(
    nome: string,
    idade: number,
    salario: number,
    private hardSkills: string
  ){
    super(nome, idade, salario);
  }

  calcularSalario(): number {
      return this._salario * 1.5;
  }

  exibirInfos(): string {
      return `${super.exibirInfos()} -- Hard Skills: ${this.hardSkills}`;
  }
}