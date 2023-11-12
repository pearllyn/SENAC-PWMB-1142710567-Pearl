function openForm(itemName) {
document.getElementById("pedido-form").style.display = "block";
document.getElementById("nome-pedido").value = itemName;
}
function closeForm() {
document.getElementById("pedido-form").style.display = "none";
}
function submitForm() {
// guardar dados do formulario
var cliente = document.getElementById("nome-cliente").value;
var quantidade = document.getElementById("quantidade").value;
var observacao = document.getElementById("observacao").value;
var nomePedido = document.getElementById("nome-pedido").value;
var formaPagamento = document.getElementById("formaPagamento").value;
// criar objeto com os dados informados
var pedido = {
cliente: cliente,
quantidade: quantidade,
observacao: observacao,
nomePedido: nomePedido,
formaPagamento: formaPagamento
};
// armazene os dados no localStorage
localStorage.setItem("ultimoPedido", JSON.stringify(pedido));
// exibir um alerta informando que o pedido foi enviado com sucesso
alert("Pedido enviado com sucesso!");
// ir para pagina de pedidos
window.location.href = "pedidos.html";
}