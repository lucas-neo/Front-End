function mover(tipo) {
    // Obter referências aos elementos "Velho" e "Novo"
    const velhoElemento = document.getElementById("Velho");
    const novoElemento = document.getElementById("Novo");

    // Verificar se ambos os elementos existem
    if (velhoElemento && novoElemento) {
        // Se o tipo for "velho", trocar os elementos
        if (tipo === "velho") {
            velhoElemento.setAttribute("id", "Novo");
            velhoElemento.setAttribute("onclick", "mover('novo')");
            novoElemento.setAttribute("id", "Velho");
            novoElemento.setAttribute("onclick", "mover('velho')");
            velhoElemento.innerHTML = "";
            novoElemento.innerHTML = "<img src='Peão Branco.png' alt='Peão Preto'>";
        }
    }
}
