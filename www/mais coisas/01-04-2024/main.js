
function conversao(){
    let cel = document.getElementById('temp');
    if (cel.value != ""){
        let temp = parseFloat(cel.value);

        let res = ((temp)*9/5) +32;

    }

    document.getElementById('saida').innerHTML = res;
}