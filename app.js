// Manipulando o DOM
const formulario = document.getElementById('form-input-amigo');
const btnAdd = document.getElementsByClassName('button-add');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const inputUser = document.getElementById('amigo').value;

  validarEntrada(inputUser);
})



// Lista de amigos à sortear
let listaAmigosSecretos = [];


// Função que valida os dados de input
function validarEntrada(val) {
  
}

// Função que adiciona um amigo a lista
function adicionarAmigo() {

}
// Função que sorteia um amigo com base na lista de amigos inseridos