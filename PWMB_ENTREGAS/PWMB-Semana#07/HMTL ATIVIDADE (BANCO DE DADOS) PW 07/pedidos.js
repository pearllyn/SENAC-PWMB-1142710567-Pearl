let pedidos = [];
// adicionar um novo pedido
function adicionarPedido() {
const selecao = document.querySelector('input[name="item"]:checked').value;
const quantidade = document.getElementById("quantidade").value;
const observacao = document.getElementById("observacao").value;
const nome = document.getElementById("nome-pedido").value;
const endereco = document.getElementById("endereco").value;
const cep = document.getElementById("cep").value;
const formaPagamento = document.getElementById("formaPagamento").value;
const novoPedido = {
id: pedidos.length + 1,
selecao,
quantidade,
observacao,
nome,
endereco,
cep,
formaPagamento,
situacao: "Em andamento",
};
pedidos.push(novoPedido);
// Limpar o formulário após adicionar o pedido
document.getElementById("pedido-form").reset();
exibirPedidos();
}
// exibir os pedidos na lista 
function exibirPedidos() {
const listaPedidos = document.getElementById("lista-pedidos");
listaPedidos.innerHTML = "";
pedidos.forEach((pedido) => {
const listItem = document.createElement("li");
listItem.innerHTML = `
<strong>ID do Pedido:</strong> ${pedido.id}<br>
<strong>Seleção do Pedido:</strong> ${pedido.selecao}<br>
<strong>Quantidade:</strong> ${pedido.quantidade}<br>
<strong>Observação:</strong> ${pedido.observacao}<br>
<strong>Nome do Cliente:</strong> ${pedido.nome}<br>
<strong>Endereço:</strong> ${pedido.endereco}<br>
<strong>CEP:</strong> ${pedido.cep}<br>
<strong>Forma de Pagamento:</strong> ${pedido.formaPagamento}<br>
<strong>Situação do Pedido:</strong> ${pedido.situacao}<br><br>
`;
listaPedidos.appendChild(listItem);
});
}
// Event listener para o formulário
document.getElementById("pedido-form").addEventListener("submit", function (e) {
e.preventDefault(); 
adicionarPedido();
});
// mostrar o formulário quando o item for seleçionado
const itemRadioButtons = document.querySelectorAll('input[name="item"]');
itemRadioButtons.forEach((radioButton) => {
radioButton.addEventListener("change", function () {
const formularioPedido = document.getElementById("pedido-form");
formularioPedido.style.display = "block";
});
});