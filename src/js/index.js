/*

OBJETIVO 1 - quando o usário clicar no botao de "veja trailer", devemos abrir a modal com o video do trailer
- PASSO 1 - pegar o elemento que representa o botão na tela usando o js.
- PASSO 2 - identificar quando o usuário clicar no botão.
- PASSO 3 - pegar o elemento da modal no js.
- PASSO 4 - abrir a modal na tela.

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
- PASSO 1 - pegar o elemento de fechar a modal usando o js.
- PASSO 3 - identificar quando o usuário clicar no X.
- PASSO 3 - fechar a modal.



//a variavel pode ser const, var ou let
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal"); //OBJETIVO 2 - PASSO 1
const video = document.getElementById("video");

//- PASSO 3 - pegar o elemento da modal no js.
const modal = document.querySelector("modal");
const linkDoVideo = video.src;

// - PASSO 2 - identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
    //PASSO 4 - abrir a modal na tela 
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
}); // console.log("clicou no botão veja o trailer"); quando clicar no botao trailer, executar alguma ação (basicamente é isso oq faz essa seta), pra voce ver isso é so inspecionar a pagina e ir na aba "console"

//PASSO 2
botaoFecharModal.addEventListener("click", () => {
    //PASSO 3
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});



//console.log(document.querySelector(".botao-trailer"));
*/
 
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});