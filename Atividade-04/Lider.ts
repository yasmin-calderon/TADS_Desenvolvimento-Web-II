import { Funcionario } from "./Funcionario.js";

export class Lider extends Funcionario {

  constructor(
    nome: string,
    idade: number,
    salario: number,
    private liderados: number
  ){
    super(nome, idade, salario);
  }

  calcularSalario(): number {
      return this._salario + this.liderados * 600;
  }

  exibirInfos(): string {
    return `${super.exibirInfos()} -- Liderados: ${this.liderados}`;
}

}