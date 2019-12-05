window.onload = function() {

    // Variáveis

        // Header
        header = document.getElementsByTagName('header')
        console.log('\nheader: '+header+'\n')

        // Container máximo dos slides (slider)
        sliderHome = document.getElementById('sliderHome')
        console.log('\nsliderHome: '+sliderHome+'\n')

        // Container dos slides (inner)
        sliderHomeInner = sliderHome.children[1]
        console.log('\nsliderHomeInner: '+sliderHomeInner+'\n')

        // Carousel Item (array com todos eles)
        itensCarousel = document.querySelectorAll('.carousel-item')
        console.log('\nitensCarousel: '+itensCarousel+'\n')
        
        // Quantidade de slides (no HTML)
        sliderQuantidade = sliderHomeInner.childElementCount
        console.log('\nsliderQuantidade: '+sliderQuantidade+'\n')

        // Array com os slides
        slides = sliderHomeInner.children
        console.log('\nslides: '+slides+'\n')
        console.log('\nslides[0]: '+slides[0]+'\n')

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
    
    // /Variáveis

    // Manipulando HTML

        // Inserindo imagens, títulos e legendas aos slides com loop for
        for(let i = 0; i < sliderQuantidade; i++){
            
            // Inserindo o atributo src
            slides[i].firstElementChild.setAttribute('src', imagens[i])
            
            // Inserindo o atributo alt (usando o título e a legenda)
            slides[i].firstElementChild.setAttribute('alt', titulos[i] + ' | '+ legendas[i])

            // Atrelando estilo ao slide
            slides[i].firstElementChild.style = 'height: 350px; max-height: 350px; width: auto;'

            // Inserindo texto ao container do título
            slides[i].firstElementChild.nextElementSibling.children[0].innerText = titulos[i]

            // Inserindo texto ao container da legenda
            slides[i].firstElementChild.nextElementSibling.children[1].innerText = legendas[i]

        }
        
        
        // Inserindo imagem de fundo ao container do slide con loop forEach
        itensCarousel.forEach(element => {

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

        
    // formulario = document.createElement('form')
    // formTitulo = document.createElement('h2')
    // formTituloContent = document.createTextNode('FORMULÁRIO')
    // formTitulo.appendChild(formTituloContent)
    // formulario.appendChild(formTitulo)
    // document.querySelector('main').appendChild(formulario)
    // formTitulo.style.color = 'red'
    
    // tarefa = document.querySelector('#tarefa')
    // tarefa.onblur = function(){
    //     tarefa.innerText == ''
    //     ? this.style.backgroundColor = 'red'
    //     : this.style.backgroundColor = 'green'
    // }
    

}