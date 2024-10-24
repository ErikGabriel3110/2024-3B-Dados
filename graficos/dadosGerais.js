const url = 'raw'

async function VizualizaInfo(){
const res = await fetch(url)
const dados = await res.js()

const cursos = Object.keys(dados)
const cursoMaisVotado = cursos[0]
const quantidadeDeVoto = Object.values(dados)[0]

console.log(cursosMaisVotados)
console.log(quantidadeDeVoto)
}

VizualizaInfo()