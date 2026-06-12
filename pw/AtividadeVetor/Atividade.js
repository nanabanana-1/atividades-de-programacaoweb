// questao 1
let alunos = [];
const buttonAdicionar = document.getElementById("buttonAdicionar");
buttonAdicionar.addEventListener("click", adicionarAluno);
function mostrarAlunos() {
    const lista = document.getElementById("listaAlunos");
    lista.innerHTML = "";
    for (let i = 0; i < alunos.length; i++) {
        lista.innerHTML += "<li>" + alunos[i] + "</li>";
    }    document.getElementById("quantidadeAlunos").textContent = alunos.length;
}

function adicionarAluno() {
    let nomeAluno = document.getElementById("nomeAluno").value.trim();
    if (nomeAluno === "") {
        return;
    }
    alunos.push(nomeAluno);
    document.getElementById("nomeAluno").value = "";
    mostrarAlunos();
}

//quiestao 2

const listaNotas = [7.5, 8.0, 6.5, 9.0, 10.0];
const mediaNotas = document.getElementById("mediaNotas");

const listaNotasElement = document.getElementById("listaNotas");
listaNotasElement.innerHTML = listaNotas.map(nota => `<li>${nota}</li>`).join("");

function calcularMedia() {
    const soma = listaNotas.reduce((acc, nota) => acc + nota, 0);
    const mediaCalculada = soma / listaNotas.length;
    mediaNotas.textContent = `${mediaCalculada.toFixed(2)}`;
}

calcularMedia();

//questao 3
const produtos = ["arroz", "feijão", "macarrão", "leite", "café"];
const buttonPesquisar = document.getElementById("buttonPesquisar");
const nomeProduto = document.getElementById("nomeProduto");
const resultadoPesquisa = document.getElementById("resultadoPesquisa");

buttonPesquisar.addEventListener("click", pesquisarProduto);

function pesquisarProduto() {
    const produtoDigitado = nomeProduto.value.trim();
    if (produtoDigitado === "") {
        return;
    }
    if (produtos.includes(produtoDigitado)) {
        resultadoPesquisa.textContent = "Produto encontrado";
    } else {
        resultadoPesquisa.textContent = "Produto não encontrado";
    }
}

//questao 4
const vetororiginal = [10, 5, 8, 10, 3, 5, 7, 8];
const vetorSemRepeticao = [...new Set(vetororiginal)];
const quantidadeRemovidos = vetororiginal.length - vetorSemRepeticao.length;

document.getElementById("vetorOriginal").textContent = vetororiginal.join(", ");
document.getElementById("vetorSemRepeticao").textContent = vetorSemRepeticao.join(", ");
document.getElementById("quantidadeRemovidos").textContent = quantidadeRemovidos;