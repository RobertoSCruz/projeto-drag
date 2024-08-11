//alert ("oi")
//- Passo 1 - Dar um Jeito de Pegar o elemento HTML dos Botões.
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

//- Passo 2 - Dar um jeito de identificar o clique do Usuario.
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //-Passo 3 - Desmarcar o Botão selecionado anteriormente
        desativarBotaoSelecionado();

        //- Passo 4 - marcar o botão clicando como se estivesse selecionado
        mostrarBotaoSelecionado(botao);

        //- Passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        //- Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);

        //- Passo 7 - Esconder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivas();

        //-Passo 8 - mostrar a informação do dragão referente ao botão clicando
        mostrarInformacoes(indice);
    });
});

function mostrarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
