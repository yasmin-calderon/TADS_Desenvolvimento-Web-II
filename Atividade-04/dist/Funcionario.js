export class Funcionario {
    _nome;
    _idade;
    _salario;
    static proximoId = 1;
    id;
    constructor(_nome, _idade, _salario) {
        this._nome = _nome;
        this._idade = _idade;
        this._salario = _salario;
        this.id = Funcionario.proximoId++;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    exibirInfos() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Salário: R$${this.calcularSalario().toFixed(2)}`;
    }
}
