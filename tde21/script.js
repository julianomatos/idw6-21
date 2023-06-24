function adicionar(){
    const task = document.getElementById('task').value
    const li = document.createElement('li')
    li.textContent = task
    //Verificar se o campo foi preenchido
    const btnRemove = document.createElement('button')
    
    btnRemove.textContent = 'Remover'
    btnRemove.style.marginLeft = '20px'
    btnRemove.type = 'button'
    btnRemove.addEventListener('click', function(){li.remove()})

    const btnConcluir = document.createElement('button')
    btnConcluir.textContent = 'Concluir'
    btnConcluir.style.marginLeft = '20px'
    btnConcluir.type = 'button'
    
    li.appendChild(btnRemove)
    li.appendChild(btnConcluir)

    const pendentes = document.getElementById('pendentes')
    pendentes.appendChild(li)
}