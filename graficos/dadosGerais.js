const url = 'https://raw.githubusercontent.com/ErikGabriel3110/2024-API-3B/refs/heads/main/jogos.json'

async function VizualizaInfo() {
    const res = await fetch(url)
    const dados = await res.json()

    const jogos = Object.keys(dados)
    const votos = Object.values(dados)
    const jogoMaisVotado = jogos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    const data = [
        {
            x:jogos,
            y:votos,
            type: 'bar',
        }
    ]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = ` A pesquisa mostra o resultado entre os 10 melhores jogos para pc de 2024. O ${jogoMaisVotado} foi o jogo mais votos, com um total de ${quantidadeDeVoto} `

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    let grafico = document.createElement('div')
    grafico.className ='grafico'
    caixa.appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

VizualizaInfo()
