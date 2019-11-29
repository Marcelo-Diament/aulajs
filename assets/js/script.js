window.onload = function() {

    sliderHome = document.getElementById('sliderHome')
    console.log('\nsliderHome: '+sliderHome+'\n')
    sliderHomeInner = sliderHome.children[1]
    console.log('\nsliderHomeInner: '+sliderHomeInner+'\n')
    sliderQuantidade = sliderHomeInner.childElementCount
    console.log('\nsliderQuantidade: '+sliderQuantidade+'\n')
    slides = sliderHomeInner.children
    console.log('\nslides: '+slides+'\n')
    console.log('\nslides[0]: '+slides[0]+'\n')
    imagens = [
        'http://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
        'https://pics.freeartbackgrounds.com/fullhd/Country_Landscape_Background-198.jpg',
        'https://wallpaperplay.com/walls/full/f/1/a/31817.jpg'
    ]
    titulos = ['Título 1', 'Título 2', 'Título 3']
    legendas = ['Legenda 1', 'Legenda 2', 'Legenda 3']

    for(let i = 0; i < sliderQuantidade; i++){
        slides[i].firstElementChild.setAttribute('src', imagens[i])
        slides[i].firstElementChild.setAttribute('alt', titulos[i] + ' | '+ legendas[i])
        slides[i].firstElementChild.nextElementSibling.children[0].innerText = titulos[i]
        slides[i].firstElementChild.nextElementSibling.children[1].innerText = legendas[i]
    }
    
    formulario = document.createElement('form')
    formTitulo = document.createElement('h2')
    formTituloContent = document.createTextNode('FORMULÁRIO')
    formTitulo.appendChild(formTituloContent)
    formulario.appendChild(formTitulo)
    document.querySelector('main').appendChild(formulario)
    formTitulo.style.color = 'red'
    
    tarefa = document.querySelector('#tarefa')
    tarefa.onblur = function(){
        tarefa.innerText == ''
        ? this.style.backgroundColor = 'red'
        : this.style.backgroundColor = 'green'
    }
    

}