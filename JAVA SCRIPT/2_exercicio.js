/* Esse evento impede que a ação do JS funcione antes do HTML */
window.onload = function () {

    /* escrevi a palavra "getElementById" errada para testar o inspecionar do glogle */
    var objBotao = document.getElenentById("botao");

    objBotao.onclick = function () {
        window.alert("Alô Mundo!")
    }
}