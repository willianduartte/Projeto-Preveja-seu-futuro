const respostaElement = document.querySelector('#resposta')
const pergunta = document.getElementById('pergunta')
const askButton = document.getElementById('askButton')
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

const fazerPergunta = () => {
  respostaElement.style.opacity = 1
  if (pergunta.value == '') {
    alert('Digite sua pergunta!')
    return
  }
  askButton.setAttribute('disabled', true)
  const perguntaHTML = `<div>${pergunta.value}</div>`
  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)
  respostaElement.innerHTML = perguntaHTML + respostas[numeroAleatorio]

  setTimeout(() => {
    respostaElement.style.opacity = 0
    askButton.removeAttribute('disabled')
  }, 2500)
}
