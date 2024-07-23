const form = document.getElementById('form-teste')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numero1 = document.getElementById('numero-um').value
    const numero2 = document.getElementById('numero-dois').value
    const messageElement = document.getElementById('message')

    if (Number(numero1) < Number(numero2)){
        messageElement.textContent = `Correto: Numero ${numero2} é maior que o numero ${numero1}.`
        messageElement.style.color = '#fff'
        messageElement.style.display = 'block'
        messageElement.style.backgroundColor = 'rgb(95, 196, 0)'
    }

    else if (Number(numero1) == Number(numero2)){
        messageElement.textContent = `Invalido: Os numeros ${numero1} e ${numero2} são iguais`
        messageElement.style.color = '#fff'
        messageElement.style.display = 'block'
        messageElement.style.backgroundColor = 'rgb(92, 92, 92)'
    } 
    
    else{
        messageElement.textContent = `Inválido: Numero ${numero2} deve ser maior que o numero ${numero1}.`
        messageElement.style.color = 'black'
        messageElement.style.display = 'block'
        messageElement.style.backgroundColor = 'red'
    }
})

console.log(form)


