/* Esse evento impede que a ação do JS funcione antes do HTML */
window.onload = function () {

    /* Caso o java script encontre a palavra "botão no arquivo HTML ele vai atribuir a variavel "objBotao" */
    var objBotao = document.getElementById("botao");

    objBotao.onclick = function () {
        window.alert("Alô Mundo!")
    }
}