let item = document.getElementById("item");
let categoria = document.getElementById("tipo");
let listacompras = document.getElementById("listacompras")
let btnAdproduto = document.getElementById("additem");

btnAdproduto.addEventListener("click", function() {
    let textoInserido = item.value.trim();
    if (textoInserido == "") {
        console.log("Por favor meu caro, digite algo aqui");
    } else {
        let elemento = document.createElement("li");
let nomeProduto = document.createElement("p");
let categoriaProduto = document.createElement("span");

        let compra = {
            nomeDoProduto: item.value,
            categoriaDoProduto: categoria.value
        }
        
        nomeProduto.textContent = compra.nomeDoProduto;
        categoriaProduto.textContent = compra.categoriaDoProduto;
        elemento.appendChild(nomeProduto);
        elemento.appendChild(categoriaProduto);
        listacompras.appendChild(elemento);
        alert("Produto adicionado com sucesso!");
    }
})