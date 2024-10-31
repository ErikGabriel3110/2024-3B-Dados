const url = 'raw'

async function VizualizaInfo() {
    const res = await fetch(url)
    const dados = await res.js()

    const cursos = Object.keys(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    let paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'texto sobre'

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

}

VizualizaInfo()