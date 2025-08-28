document.addEventListener("DOMContentLoaded",() => {

    let notasAlunos = [
        [8,7,6], //Aluno1
        [6,8,5],  //Aluno2
        [7,8,5],  //Aluno3
        [5,6,7]   //Aluno4
    ];

    const tabela = document.querySelector("#tabelaNotas tbody");

    for (let i = 0; i < notasAlunos.length; i++ ) {
        let linha = document.createElement("tr") ;


        // nome aluno
        let celAluno = document.createElement("td");
        celAluno.textContent = `Aluno ${i+1}`;
        linha.appendChild(celAluno);

        // Nota e soma
        let soma = 0;
        for (let j = 0; j < notasAlunos[i].length; j++) {
            let celNota = document.createElement("td");
            celNota.textContent = notasAlunos[i][j];
            linha.appendChild(celNota);
            soma += notasAlunos[i][j];
        }

        // Media

        let media = soma / notasAlunos[i].length;
        let celMedia = document.createElement("td");
        celMedia.textContent = media.toFixed(2);
        linha.appendChild(celMedia);
        tabela.appendChild(linha);
     

        let celSituacao = document.createElement("td");
        if (media >= 7) {
            celSituacao.textContent = "Aprovado";
            celSituacao.className ="aprovado";
        }
        else{
            celSituacao.textContent ="Reprovado";
            celSituacao.className = "reprovado";
        }
        linha.appendChild(celSituacao);
    }
});