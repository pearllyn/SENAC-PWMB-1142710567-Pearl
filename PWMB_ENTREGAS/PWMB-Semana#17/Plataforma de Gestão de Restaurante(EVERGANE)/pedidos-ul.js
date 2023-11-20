// pegar os dados do último pedido do localStorage
var ultimoPedido = localStorage.getItem("ultimoPedido");
if (ultimoPedido) {
var pedidoObj = JSON.parse(ultimoPedido);
// cria um elemento li para cada informação do pedido
var listaPedidos = document.getElementById("lista-pedidos");
for (var key in pedidoObj) {
var li = document.createElement("li");
li.textContent = key + ": " + pedidoObj[key];
listaPedidos.appendChild(li);
}
// adiciona uma mensagem de agradecimento
var mensagemAgradecimento = document.createElement("p");
mensagemAgradecimento.textContent = "Obrigado pelo seu pedido!";
mensagemAgradecimento.className = "agradecimento-msg";  // Adiciona uma classe CSS
listaPedidos.insertBefore(mensagemAgradecimento, listaPedidos.firstChild);
} else {
// Se não tiver último pedido, exibe uma mensagem padrão
var listaPedidos = document.getElementById("lista-pedidos");
listaPedidos.innerHTML = 'Nenhum pedido foi realizado.';
}