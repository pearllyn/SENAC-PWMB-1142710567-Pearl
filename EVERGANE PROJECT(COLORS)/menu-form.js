function openForm(itemName) {
    document.getElementById("pedido-form").style.display = "block";
    document.getElementById("nome-pedido").value = itemName;
}

function closeForm() {
    document.getElementById("pedido-form").style.display = "none";
}

function submitForm() {
    // Obtenha os dados do formulário
    var cliente = document.getElementById("nome-cliente").value;
    var quantidade = document.getElementById("quantidade").value;
    var observacao = document.getElementById("observacao").value;
    var nomePedido = document.getElementById("nome-pedido").value;
    var endereco = document.getElementById("endereco").value;
    var cep = document.getElementById("cep").value;
    var formaPagamento = document.getElementById("formaPagamento").value;

    // Crie um objeto com os dados
    var pedido = {
        cliente: cliente,
        quantidade: quantidade,
        observacao: observacao,
        nomePedido: nomePedido,
        endereco: endereco,
        cep: cep,
        formaPagamento: formaPagamento
    };

    // Armazene os dados no localStorage
    localStorage.setItem("ultimoPedido", JSON.stringify(pedido));

    // Exiba um alerta informando que o pedido foi enviado com sucesso
    alert("Pedido enviado com sucesso!");

    // Redirecione para a página de pedidos
    window.location.href = "pedidos.html";
}