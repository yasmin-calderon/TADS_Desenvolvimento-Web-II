import { Analista } from "./Analista.js";
import { Lider } from "./Lider.js";
// Tipos
const TIPO_ANALISTA = "analista";
const TIPO_LIDER = "lider";
const funcionarios = [];
const form = document.getElementById("cadastro-funcionario");
const listaFuncionarios = document.getElementById("lista_funcionarios");
const tipoFuncionario = document.getElementById("tipo_funcionario");
const hard_skills = document.getElementById("hard_skills");
const liderados = document.getElementById("liderados");
// Atualiza campos visíveis com base no tipo selecionado
function atualizarCampos() {
    const tipo = tipoFuncionario.value;
    const isAnalista = tipo === TIPO_ANALISTA;
    hard_skills.type = isAnalista ? "text" : "hidden";
    liderados.type = isAnalista ? "hidden" : "number";
}
// Cria funcionário com base nos dados do form
function criarFuncionario(data) {
    const nome = data.get("nome");
    const idade = Number(data.get("idade"));
    const salario = Number(data.get("salario"));
    const tipo = data.get("tipo_funcionario");
    if (tipo === TIPO_ANALISTA) {
        const hardSkills = data.get("hard_skills");
        return new Analista(nome, idade, salario, hardSkills);
    }
    else {
        const lideradosQtd = Number(data.get("liderados"));
        return new Lider(nome, idade, salario, lideradosQtd);
    }
}
// Renderiza lista de funcionários
function exibirFuncionarios() {
    listaFuncionarios.innerHTML = "";
    funcionarios.forEach(funcionario => {
        const li = document.createElement("li");
        li.textContent = funcionario.exibirInfos();
        listaFuncionarios.appendChild(li);
    });
}
// Inicia o comportamento da página
function init() {
    atualizarCampos(); // ao carregar a página
    tipoFuncionario.addEventListener("change", atualizarCampos);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const novoFuncionario = criarFuncionario(data);
        funcionarios.push(novoFuncionario);
        exibirFuncionarios();
        form.reset();
        atualizarCampos(); // pra resetar os campos visíveis corretamente
    });
}
window.addEventListener("DOMContentLoaded", init);
