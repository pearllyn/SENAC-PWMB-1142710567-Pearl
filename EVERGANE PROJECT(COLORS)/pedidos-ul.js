// Recupera o último pedido do localStorage
var ultimoPedido = localStorage.getItem("ultimoPedido");
if (ultimoPedido) {
    var pedidoObj = JSON.parse(ultimoPedido);

    // Cria um elemento li para cada informação do pedido
    var listaPedidos = document.getElementById("lista-pedidos");
    for (var key in pedidoObj) {
        var li = document.createElement("li");
        li.textContent = key + ": " + pedidoObj[key];
        listaPedidos.appendChild(li);
    }
} 