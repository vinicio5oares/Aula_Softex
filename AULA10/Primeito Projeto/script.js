document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form');
    form.onsubmit = function(event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        nome = capitalizarNomeCompleto(nome);  // Atualizado para capitalizar cada palavra

        const nota1 = parseFloat(document.getElementById('nota1').value);
        if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
            alert('Por favor, insira uma nota válida entre 0 e 10 para Nota 1.');
            return;
        }
        const nota2 = parseFloat(document.getElementById('nota2').value);
        if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
            alert('Por favor, insira uma nota válida entre 0 e 10 para Nota 2.');
            return;
        }
        const nota3 = parseFloat(document.getElementById('nota3').value);
        if (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
            alert('Por favor, insira uma nota válida entre 0 e 10 para Nota 3.');
            return;
        }

        const media = (nota1 + nota2 + nota3) / 3;
        let situacao = '';

        if (media >= 7) {
            situacao = 'Aprovado';
        } else if (media >= 5) {
            situacao = 'Recuperação';
        } else {
            situacao = 'Reprovado';
        }

        const tabelaNotas = document.getElementById('tabelaNotas');
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${nota1.toFixed(2)}</td>
            <td>${nota2.toFixed(2)}</td>
            <td>${nota3.toFixed(2)}</td>
            <td>${media.toFixed(2)}</td>
            <td>${situacao}</td>
        `;
        tabelaNotas.appendChild(novaLinha);

        form.reset();
    };

    const button = document.getElementById('botaoCadastrar');
    button.onclick = function() {
        form.dispatchEvent(new Event('submit'));
    }

    // Função que capitaliza a primeira letra de cada palavra no nome
    function capitalizarNomeCompleto(nome) {
        return nome
            .split(' ')
            .filter(palavra => palavra.length > 0)  // Remove espaços extras
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
            .join(' ');
    }
});
