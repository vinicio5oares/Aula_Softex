document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");

    btn.addEventListener("click",() => {
        let N1 = Number(document.getElementById("N1").value);
        let N2 = Number(document.getElementById("N2").value);
        
        if (isNaN(N1) || isNaN(N2)) {
            alert("Digite dois valores validos");
            return;
        }

        document.getElementById("soma").textContent = N1 + N2;
        document.getElementById("subtracao").textContent = N1 - N2;
        document.getElementById("multiplicacao").textContent = N1 * N2;
        document.getElementById("divisao").textContent = N2 !== 0 ? (N1/N2).toFixed(2): "Divisão por zero";
        document.getElementById("resto").textContent = N2 !== 0 ? N1%N2: "Não aplicavel";

        



    });
});