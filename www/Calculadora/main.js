function somar(){
    let A = document.getElementById('inputA').value;
    let B = document.getElementById('inputB').value;

    let X = parseFloat(A);
    let Y = parseFloat(B);

    let r = X + Y;
    document.getElementById('r').innerHTML = "Resultado = " + r;
}
function subtrair(){
    let A = document.getElementById('inputA').value;
    let B = document.getElementById('inputB').value;

    let X = parseFloat(A);
    let Y = parseFloat(B);

    let r = X - Y;
    document.getElementById('r').innerHTML = "Resultado = " + r;

}
function divisao(){
    let A = document.getElementById('inputA').value;
    let B = document.getElementById('inputB').value;

    let X = parseFloat(A);
    let Y = parseFloat(B);

    let r = X / Y;
    

    if(Y === 0){
        document.getElementById('r').innerHTML = "Não pode.";
    }
    document.getElementById('r').innerHTML = "Resultado = " + r;


}
function multp(){
    let A = document.getElementById('inputA').value;
    let B = document.getElementById('inputB').value;

    let X = parseFloat(A);
    let Y = parseFloat(B);

    let r = X * Y;
    document.getElementById('r').innerHTML = "Resultado = " + r;

}

function op(valor){
    document.getElementById('inputA').value += valor;
}
function limpar(){
    document.getElementById('inputA').value ="";
}
function calcular(){
    //eval é uma função que calcula expressão matemrica
    let resultado = eval(document.getElementById('inputA').value)
    document.getElementById('inputA').value = resultado;
}