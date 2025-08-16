// Manipulando o DOM
const formulario = document.getElementById("form-input-amigo");
const btnAdd = document.getElementsByClassName("button-add");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  adicionarAmigo();

});

// Lista de amigos à sortear
let listaAmigosSecretos = [];

// Função que valida os dados de input
function validarEntrada(val) {
  return Boolean(val);
}

// Função que adiciona um amigo a lista
function adicionarAmigo() {
  
}
// Função que sorteia um amigo com base na lista de amigos inseridos
