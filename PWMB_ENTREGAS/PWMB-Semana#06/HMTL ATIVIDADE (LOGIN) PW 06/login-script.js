function exibirFormularioLogin() {
var modalLogin = document.getElementById('modal-login');
modalLogin.style.display = 'flex';
}
function esconderFormularioLogin() {
var modalLogin = document.getElementById('modal-login');
modalLogin.style.display = 'none';
}
function validarLogin() {
var nomeUsuario = document.getElementById('nome-usuario').value;
var senha = document.getElementById('senha').value;
var nomeUsuarioMock = 'evergane';
var senhaMock = 'evergane123';
if (nomeUsuario === nomeUsuarioMock && senha === senhaMock) {
var mensagemBemVindo = document.getElementById('mensagem-bem-vindo');
mensagemBemVindo.innerHTML = 'Bem-vindo, ' + nomeUsuario + '!';
mensagemBemVindo.style.display = 'block';
} else {
alert('Nome de usuário ou senha incorretos. Tente novamente.');
}
// Esconder o a caixa de login após o login
esconderFormularioLogin();
}
function tratarTeclaPressionada(event) {
if (event.keyCode === 13) {
validarLogin();
}
}