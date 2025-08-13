let item = document.getElementById("item");
let categoria = document.getElementById("tipo");
let quantidade = document.getElementById("quantity");
let unidade = document.getElementById("unity");
let listacompras = document.getElementById("listacompras")
let btnAdproduto = document.getElementById("additem");

btnAdproduto.addEventListener("click", function() {
    let textoInserido = item.value.trim();
    if (textoInserido == "") {
        alert("Por favor meu caro, digite algo aqui");
    } else {
        let elemento = document.createElement("li");
let nomeProduto = document.createElement("p");
let categoriaProduto = document.createElement("span");
let quantidadeProduto = document.createElement("p");
let unidadeProduto = document.createElement("p");

        let compra = {
            idDoProduto: Date.now(),
            nomeDoProduto: item.value,
            categoriaDoProduto: categoria.value,
            quantidadeDoProduto: quantidade.value,
            unidadeDoProduto: unidade.value
        }
        
        nomeProduto.textContent = compra.nomeDoProduto;
        categoriaProduto.textContent = compra.categoriaDoProduto;
        quantidadeProduto.textContent = compra.quantidadeDoProduto;
        unidadeProduto.textContent = compra.unidadeDoProduto;

        elemento.appendChild(nomeProduto);
        elemento.appendChild(categoriaProduto);
        elemento.appendChild(quantidadeProduto);
        elemento.appendChild(unidadeProduto);
        listacompras.appendChild(elemento);
        alert("Produto adicionado com sucesso!");
    }
})