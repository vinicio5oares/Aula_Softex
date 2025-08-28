function saudacao() {
    var nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerText = "Olá, " + nome + "! Seja bem-vindo ao meu site!";
}

document.addEventListener("DOMContentLoaded", function() {
    const tbn = document.getElementById("tbnSaudar");
    const out = document.getElementById("out");
    const input = document.getElementById("nome");
    tbn.addEventListener('click',() => {
        const nome = input.value.trim();
        const alvo = nome || 'Visitante';
        out.textContent = saudacao(alvo);
    });

});