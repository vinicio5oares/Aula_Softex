function calcularDobro() {
    const numero = document.getElementById('numero').value;
    const dobro = numero * 2;
    document.getElementById('resultado').innerText = "O dobro de " + numero + " é " + dobro;
}

// document.addEventListener("DOMContentLoaded", function() {
//    const btn = document.getElementById("btnCalcular");

// });

// btn.addEventListener("click", () => {
//     const valor = Number (document.getElementById('numero').value);
//     if (isNaN (valor)){
//         calcularDobro();
//         return;
//     }
//     else{
//         alert("Por favor, insira um número válido.");
//     }
// });