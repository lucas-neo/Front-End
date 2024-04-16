
const input = document.getElementById('input');

const lista = document.getElementById('lista');

const botao = document.getElementById('botao');


botao.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerHTML = input.value;
    input.value = ""
    lista.appendChild(li);
});

 