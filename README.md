# 🎁 Challenge Amigo Secreto - ONE \| Alura

Este projeto faz parte do **Challenge de Lógica de Programação - Amigo
Secreto**, proposto pelo curso de **Backend da Oracle Next Education
(ONE)** em parceria com a **Alura**.

🔗 **Acesse o projeto online:** [Amigo Secreto
ONE](https://challenge-amigo-secreto-one-alura.vercel.app/)

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   ✅ Adicionar nomes de amigos a uma lista.\
-   ✅ Validação de entrada para evitar nomes vazios.\
-   ✅ Exibir a lista de amigos em tempo real.\
-   ✅ Exibir mensagens visuais de **erro** ou **sucesso**.\
-   ✅ Realizar o sorteio aleatório de um amigo secreto.\
-   ✅ Resetar automaticamente a lista após o sorteio.

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

-   **index.html** → Estrutura da aplicação (formulário, lista, botão de
    sorteio).\
-   **script.js** → Código principal da lógica da aplicação.\
-   **style.css** → Estilização visual (opcional).

------------------------------------------------------------------------

## 🖥️ Como Usar

1.  Abra o projeto pelo navegador ou acesse diretamente o link
    [aqui](https://challenge-amigo-secreto-one-alura.vercel.app/).\
2.  No campo de texto, insira o nome de um amigo.\
3.  Clique em **Adicionar** para incluir o nome na lista.
    -   Se o campo estiver vazio → será exibida uma **mensagem de
        erro**.\
    -   Se o nome for válido → ele será incluído na lista com **mensagem
        de sucesso**.\
4.  Após cadastrar todos os nomes, clique em **Sortear Amigo**.\
5.  O nome sorteado aparecerá em destaque na tela.\
6.  Depois de 6 segundos, a lista será **resetada automaticamente** para
    um novo sorteio.

------------------------------------------------------------------------

## 🔧 Principais Funções do Código

-   **`validarEntrada(val)`** → Verifica se o valor de entrada não está
    vazio.\
-   **`errorMensagem(section)`** → Mostra uma mensagem de erro
    estilizada.\
-   **`sucessMensagem(section)`** → Mostra uma mensagem de sucesso ao
    adicionar um amigo.\
-   **`exibirLista(array)`** → Renderiza a lista de amigos em tela.\
-   **`adicionarAmigo()`** → Captura o valor do input, valida e adiciona
    à lista.\
-   **`sortearAmigo()`** → Realiza o sorteio e exibe o resultado na
    tela.

------------------------------------------------------------------------

## 📝 Exemplo de Uso

1.  Adicione:

        João
        Maria
        Pedro
        Ana

2.  Clique em **Sortear Amigo**.\

3.  Resultado exibido:

        Seu amigo secreto é Maria

------------------------------------------------------------------------

