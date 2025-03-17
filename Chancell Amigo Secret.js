//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Declaração do array com alguns nomes já inseridos
let amigos = ["Ana", "Julia", "Maria", "Thiago", "Pedro", "Sofia", "Marcos"];

document.addEventListener("DOMContentLoaded", () => {
    atualizarLista(); // Atualiza a lista de amigos ao carregar a página
});

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços em branco extras

    // Validação: o campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona os amigos ao HTML
    amigos.forEach((nome, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${nome}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    // Validação: precisa ter pelo menos um amigo na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
    }

    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<strong>Amigo sorteado:</strong> ${amigoSorteado}`;
}