// Manipulando o DOM
const formulario = document.getElementById("form-input-amigo");
let listarEmTela = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const btnSortear = document.getElementById("button-draw");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  adicionarAmigo();
});

btnSortear.addEventListener("click", function (evento) {
  evento.preventDefault();
  sortearAmigo();
});

// Lista de amigos à sortear
let listaAmigosSecretos = [];

// Verificando os dados de input
function validarEntrada(val) {
  return Boolean(val);
}

// Manipulação de strings

function errorMensagem(section) {
  // Adiciona um icone e limpa mensagens antigas
  section.innerHTML = `
  <img width="24" height="24"
  src="https://img.icons8.com/material-outlined/24/error--v1.png" 
  alt="error--v1"/>`;

  const p = document.createElement("p");
  p.textContent = "Informe um nome válido.";
  section.append(p);

  // adiciona a classe para exibir
  section.classList.add("show");
  section.style.background =
    "linear-gradient(90deg, #e7a7f0ff 0%, #a178e4ff 100%)";

  // remove automaticamente depois de 3 segundos
  setTimeout(() => {
    section.classList.remove("show");
  }, 3000);
}

function sucessMensagem(section) {
  // Adiciona um icone e limpa mensagens antigas
  section.innerHTML = `<img width="24" height="24"
  src="https://img.icons8.com/material-sharp/24/checkmark--v1.png"
  alt="checkmark--v1"/>`;

  const p = document.createElement("p");
  p.textContent = "Amigo adicionado à lista.";
  section.append(p);

  section.classList.add("show");
  section.style.background = "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)";

  setTimeout(() => {
    section.classList.remove("show");
  }, 3000);
}

// Adiciona um amigo a lista
function adicionarAmigo() {
  let inputUser = document.getElementById("amigo");
  let status = validarEntrada(inputUser.value);

  if (status) {
    const novoAmigo = inputUser.value;
    listaAmigosSecretos.push(novoAmigo);

    let msgTag = document.getElementById("message");
    sucessMensagem(msgTag);
  } else {
    let msgTag = document.getElementById("message");
    errorMensagem(msgTag);
  }

  inputUser.value = "";
  inputUser.focus();
}

// Sorteia um amigo com base na lista de amigos inseridos
function sortearAmigo() {
  const comprimentoLista = listaAmigosSecretos.length;
 
  if (comprimentoLista) {
    const amigoSecreto = parseInt(Math.random() * comprimentoLista -1);
    const nomeAmigo = listaAmigosSecretos[amigoSecreto];
    console.log(`Seu amigo secreto é ${nomeAmigo}`);
  } else {
    console.log('Não há elementos na lista')
  }
}
