// Manipulando o DOM
const formulario = document.getElementById("form-input-amigo");
let listarEmTela = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  adicionarAmigo();

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

  // remove automaticamente depois de 3 segundos
  setTimeout(() => {
    section.classList.remove("show");
  }, 3000);
}



// Adiciona um amigo a lista
function adicionarAmigo() {
  let inputUser = document.getElementById("amigo").value;
  let status = validarEntrada(inputUser);

  if (status) {
    const novoAmigo = inputUser;
    listaAmigosSecretos.push(novoAmigo);
    console.log(listaAmigosSecretos);
  } else {
    let msgTag = document.getElementById("message");
    errorMensagem(msgTag);
  }
}

// Função que sorteia um amigo com base na lista de amigos inseridos
