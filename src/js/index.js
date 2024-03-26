/*o que precisamos dazer? - quando clicar no botão do personagem na lista temos que
marca o botão como selecionado e mostra o personagem correspondente

Objetivo 1-quando clicar no botão do personagem na lista, marca o botão como selecionado
passos 1 -pefar os botõs no js pra poder verificar quando o usuário clicar em cima de um deles
passo 2 - adicionar a classe "selecionado" no botão que o usuário clicar
passo 3 - verificar se já existe um botão selecionado,se sim ,devemos remover a seleção dele

objetivo 2- quando clicar no botão do personagem mostrar as informações do personagem
passo 1 - pegar os personagens no js pra poder mostrar ou escoder ele  
passo 2 - adcionar a classa "selecionado" no personagem que o usuário selecionou
passo 3 - verificar se já existe um parsonagem selecionado,se sim,devemos remover a seleção dele */

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBorao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});
function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBorao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

