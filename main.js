const form = document.getElementById('form_atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji festejando"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji desapontado"/>';
let atividades = [];
let notas = [];
const notaMinima = parseFloat(prompt("Informe a nota mínima: "));

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizarMedia();
});

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome_atividade');
    const inputNotaAtividade = document.getElementById('nota_atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`)
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMedia(){
    const mediaFinal = calcularMedia();

    document.getElementById('media_final_valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media_final_resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMedia(){
    let somaDasNotas = 0;

    for(let i =0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}