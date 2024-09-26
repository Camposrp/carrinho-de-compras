let carrinho = [];

function adicionarProduto() {
    let produto = document.getElementById("produto").value;

    if (produto !== "") {
        carrinho.push(produto);
        document.getElementById("produto").value = "";

        exibirCarrinho();
    } else {
        alert("Por favor, insira um produto.");
    }
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    exibirCarrinho();
}

function exibirCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    lista.innerHTML = "";
    
    carrinho.forEach(function(produto, index){
        lista.innerHTML += `<li>${produto} <button onclick="removerProduto(${index})">Remover</button></li>`;
    });
}