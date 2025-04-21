import { IPessoa } from "./IPessoa";

export abstract class Funcionario implements IPessoa {
  private static proximoId: number = 1;
  public readonly id: number;

  constructor(
    protected _nome: string,
    protected _idade: number,
    protected _salario: number
  ) {
    this.id = Funcionario.proximoId++;
  }

  get nome(): string {
    return this._nome
  }

  set nome(novoNome: string) {
    this._nome = novoNome;
  }

  get idade(): number {
    return this._idade;
  }

  exibirInfos(): string {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Salário: R$${this.calcularSalario().toFixed(2)}`;
  }

  abstract calcularSalario(): number;
}