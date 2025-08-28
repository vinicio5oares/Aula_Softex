function somar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultadoSoma').innerText = "Resultado da soma: " + resultado;
}
function subtrair() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2;
    document.getElementById('resultadoSub').innerText = "Resultado da subtração: " + resultado;
}
function dividir(){
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        const resultado = num1 / num2;
        document.getElementById('resultadoDiv').innerText = "Resultado da divisão: " + resultado;
    } else {
        document.getElementById('resultadoDiv').innerText = "Erro: Divisão por zero não é permitida.";
    }
}
function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultadoMul').innerText = "Resultado da multiplicação: " + resultado;
}
function calcular() {
    somar();
    subtrair();
    dividir();
    multiplicar();
}