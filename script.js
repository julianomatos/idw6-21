const titulo = document.getElementById('titulo')
titulo.style.color = 'blue'
titulo.style.fontSize = '50px'
//titulo.innerText = 'DOM'
titulo.innerHTML = 'Manipulando <br> o DOM' // Insere tag html no texto.
titulo.style.textAlign = 'center'

const paragrafos = document.getElementsByTagName('p')
paragrafos[0].innerText = 'Parágrafo 1'
paragrafos[0].style.fontWeight = 'bold'
paragrafos[1].innerText = 'Parágrafo 2'
paragrafos[2].innerText = 'Parágrafo 3'

for (let i = 0; i < paragrafos.length; i++){
    paragrafos[i].style.color = 'green'
}

const p1 = document.querySelector('section p')
p1.style.fontSize = '36px'
p1.innerText = 'Novo Parágrafo'

const p2 = document.querySelectorAll('section p')
p2[1].innerText = 'Segundo paragrafo da section.'

const link = document.querySelector('a')
link.textContent = 'Site do Google'
link.href = 'https://google.com'
link.target = '_blank'

function trocaImagem(){
    const img = document.querySelector('img')
    img.src = 'js2.jpeg'
}
function voltaImagem(){
    const img = document.querySelector('img')
    img.src = 'js1.png'
}

const minhaHeader = document.querySelector('header')
minhaHeader.style.backgroundColor = 'black'
minhaHeader.style.color = 'white'
minhaHeader.style.width = '50%'
minhaHeader.style.padding = '5%'
minhaHeader.style.margin = '0 auto'


const btn = document.createElement('button')
btn.textContent = 'Salvar'
btn.type = 'button'
btn.style.marginTop = '20px'

minhaHeader.appendChild(btn)
const img = document.querySelector('img')
//img.remove()

function adicionar(){
    const club = document.getElementById('club').value //Pega valor do input
    const li = document.createElement('li') //Criando um novo elemento
    li.textContent = club //Atribui o valor no novo elemento
    if(club != ''){
        const listaTimes = document.getElementById('listaTimes') //Selecionando elemento pai
        listaTimes.appendChild(li) //Adicionando elemento
    }else{
        alert('Digite o nome do Time.')
    }
    document.getElementById('club').value = '' //Limpando campo
    document.getElementById('club').focus()  //Colocando o foco no campo
}