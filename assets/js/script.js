// window.onload = function() {

// Boas vindas com aplicação de estilo no console (funciona apenas no Chrome e Firefox - dependendo da versão)
console.log(
    '%cSEJA MUITO BEM %cVINDX', 'background:#f15722; color: #fff; font-size: 50px', 'background:yellowgreen; color: #000; font-size: 50px; text-transform: uppercase;'
)

// prompt() é uma função nativa do JS que interage com o usuário através do próprio browser (semelhante ao alert e ao confirm).
// Podemos atrelar o valor inserido no input pelo usuário a uma variável, como no exemplo a seguir:
nome = prompt('Olá!\nQual seu nome?')

if (nome) {
    alert(nome + ', insira as suas tarefas no formulário logo abaixo do banner. Não se esqueça de abrir o console do dev tools!')
}

// Exibindo o nome do usuário (inserido no prompt()) com estilo aplicado ao console novamente
console.log('%c' + nome + '!', 'background:#000; color: #fff; font-size: 50px; text-transform: uppercase;')

// Exibição de imagem - há restrições quanto às propriedades aceitas no console, por isso trataremos mais como texto do que como imagem
console.log('%c ', 'background: url("https://avatars0.githubusercontent.com/u/56034918?s=460&v=4"); background-attachment: fixed; background-position: top; line-height: 120px; font-size: 240px; color: transparent; text-transform: uppercase;')

// Variáveis

// Header
header = document.getElementsByTagName('header')
// console.log('\nheader: '+header+'\n')

// Main
main = document.querySelectorAll('main')[0]
console.log('\nmain: ' + main + '\n')

// Container máximo dos slides (slider)
sliderHome = document.getElementById('sliderHome')
console.log('\nsliderHome: ' + sliderHome + '\n')

// Container dos slides (inner)
sliderHomeInner = sliderHome.children[1]
console.log('\nsliderHomeInner: ' + sliderHomeInner + '\n')

// Carousel Item (array com todos eles)
itensCarousel = document.querySelectorAll('.carousel-item')
console.log('\nitensCarousel: ' + itensCarousel + '\n')

// Quantidade de slides (no HTML)
sliderQuantidade = sliderHomeInner.childElementCount
console.log('\nsliderQuantidade: ' + sliderQuantidade + '\n')

// Array com os slides
slides = sliderHomeInner.children
console.log('\nslides: ' + slides + '\n')
console.log('\nslides[0]: ' + slides[0] + '\n')

// Array com as imagens a serem inseridas nos slides
imagens = [
    'assets/img/banner-topo-01.png',
    'assets/img/banner-topo-02.png',
    'assets/img/banner-topo-03.png'
]

// Array com os títulos dos slides
titulos = ['Título 1', 'Título 2', 'Título 3']

// Arrya com as legendas dos slides
legendas = ['Legenda 1', 'Legenda 2', 'Legenda 3']

// Input para adicionar novas tarefas (form)
novaTarefa = document.querySelector('#novaTarefa')

// Botão para cadastrar novas tarefas (form)
adicionarTarefa = document.querySelector('#adicionarTarefa')

// Tempo
var tempo = 0

// /Variáveis

// Manipulando HTML e CSS

// Inserindo imagens, títulos e legendas aos slides com loop for
for (let i = 0; i < sliderQuantidade; i++) {

    console.log('Rodada dentro do loop for: ' + i)

    // Inserindo o atributo src
    slides[i].firstElementChild.setAttribute('src', imagens[i])

    // Inserindo o atributo alt (usando o título e a legenda)
    slides[i].firstElementChild.setAttribute('alt', titulos[i] + ' | ' + legendas[i])

    // Atrelando estilo ao slide
    slides[i].firstElementChild.style = 'height: 350px; max-height: 350px; width: auto;'

    // Inserindo texto ao container do título
    slides[i].firstElementChild.nextElementSibling.children[0].innerText = titulos[i]

    // Inserindo texto ao container da legenda
    slides[i].firstElementChild.nextElementSibling.children[1].innerText = legendas[i]

}

// Inserindo imagem de fundo ao container do slide con loop forEach
var i = 0
itensCarousel.forEach(element => {

    console.log('Rodada dentro do loop forEach: ' + i)
    i++

    /* Observação Importante: estamos fazendo um caminho 'torto': selecionamos um array de elementos para selecionar o pai deles, que é o mesmo.
    ** Ou seja, poderíamos acessar diretamente o pai e não precisaríamos de um loop. Mas a ideia é mostrar como selecionar o pai e como usra o forEach.
    ** Ah, e o motivo de selecionarmos o pai é para que o fundo fique sempre fixo (e a imagem do slide passe sobre o bg-img). */

    // Repare que estamos acessando a propriedade do estilo e atrelando um valor a ela
    element.parentElement.style.backgroundImage = 'url("assets/img/banner-topo-bg.png")'
    // Atenção: as propriedades são escritas em camelCase (como backgroundColor ao invés de background-color)

    // Outra maneira é acessar apenas o estilo em si (style) e então declarar as propriedades e valores ao elemento selecionado
    element.parentElement.style = 'background-image: url("assets/img/banner-topo-bg.png"); background-position: center; background-attachment: fixed'
    /* Ainda que de formas distintas, por estarmos redeclarando novos valores à mesma propriedade dos mesmos objetos, acabamos por anular
    ** a declaração anterior (do background-image). Por isso estamos declarando novamente. */

});

sessoes = document.querySelectorAll('section')
console.log('\nsessoes: ' + sessoes + '\n')
console.log('\nsessoes.length: ' + sessoes.length + '\n')
var i = 0
while (i < sessoes.length) {
    console.log('Rodada dentro do loop while: ' + i)
    i++
}

// /Manipulando HTML e CSS

// Criando Elementos e Text Nodes

// Criamos um node do tipo elemento (um h3 no caso)
formTitulo = document.createElement('h3')

// Criamos um node do tipo texto (conteúdo puro)
formTituloContent = document.createTextNode('Inclua sua tarefa')

// Incluímos o texto ao h3 com a função nativa appendChild(), que insere o novo elemento como último filho
formTitulo.appendChild(formTituloContent)

/* Também temos a função insertBefore, onde declaramos o método atrelado ao elemento pai e, como parâmetro,
** declaramos o novo elemento e o de referência - antes do qual será inserido o novo elemento) */
document.querySelector('#tarefasForm').parentElement.insertBefore(formTitulo, document.querySelector('#tarefasForm'))

// Incluímos uma cor ao título
formTitulo.style.color = '#f15722'

// /Criando Elementos e Text Nodes

// Funções

const confirmarAdicao = function () {
    adicionar = confirm('Ei!\nVocê vai adicionar a tarefa: "' + novaTarefa.value + '", ok?\n\nTarefa dada é tarefa cumprida!')
    if (adicionar != false) {
        console.log('Vamos adicionar sua tarefa...\n\nPrimeiro, vamos capturar a tarefa (texto):\n')
        console.log('novaTarefa.value: ' + novaTarefa.value + '\n')
        console.log('Agora é só incluirmos dentro de uma nova \<li> na nossa \<ul>:\n')
        novoItem = document.createElement('li')
        novoItem.innerText = novaTarefa.value
        document.querySelector('#tarefasLista').appendChild(novoItem)
        console.log('\nnovoItem = document.createElement(\'li\')\n')
        console.log('\nnovoItem.innerText = novaTarefa.value\n')
        console.log('\ndocument.querySelector(\'#tarefasLista\').appendChild(novoItem)\n')
        console.log('\nE por fim, limpar nosso campo com novaTarefa.value = \'\'')
        novaTarefa.value = ''
    }
}

// /Funções

// Eventos

// addEventListener('tipoDeEvento', função(eventoDisparado)) + preventDefault()
adicionarTarefa.addEventListener('click', function (event) {
    event.preventDefault()
    confirmarAdicao()
})

// setTimeout()
window.setTimeout(() => {
    console.log('Passaram-se 20 segundos desde que o tempo começou a contar.')
    alert('Passaram-se 20 segundos desde que o tempo começou a contar.')
}, 20000)

// setInterval() + Cronometro
cronometro = document.createElement('p')
cronometro.innerText = tempo
main.appendChild(cronometro)
cronometro.style = 'position: absolute; bottom: 10px; right: 10px; padding: 5px 10px; border-radius: 50%; width: 40px; height: 30px; line-height: 17px;text-align: center'
cronometro.classList.add('bg-warning')
cronometro.setAttribute('id', 'cronometro')
contandoTempo = setInterval(function () {
    if (tempo > 99) {
        this.clearInterval()
        console.log('Você está nessa página por mais de 99 segundos. Vamos parar de contar o tempo.')
    } else {
        cronometro.innerText = tempo
        tempo++
    }
}, 1000)

    // /Eventos


// }