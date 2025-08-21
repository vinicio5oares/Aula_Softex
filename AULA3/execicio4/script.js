// let nome = "Maria"
// document.getElementById("nome").textContent = "ola " + nome + "te desejo minha boas vindas";
function mostrarSaudacao(){
    let nome = document.getElementById("nome").value;
    const paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "ola " + nome + " te desejo minha boas vindas";
}