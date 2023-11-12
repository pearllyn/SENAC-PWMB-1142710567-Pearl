function mostrarLogin() {
    document.getElementById("container-login").style.display = "flex";
    }
    function fecharLogin() {
    document.getElementById("container-login").style.display = "none";
    }
    function validarEmail(email) {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regexEmail.test(email);
    }
    function validarLogin() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const emailValidacao = document.getElementById("email-validacao");
    const senhaValidacao = document.getElementById("senha-validacao");
    const email = emailInput.value;
    const senha = senhaInput.value;
    if (!validarEmail(email)) {
    emailValidacao.textContent = "Por favor, insira um endereço de email válido.";
    return;
    } else {
    emailValidacao.textContent = "";
    }
    const regexSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexSenha.test(senha)) {
    senhaValidacao.textContent = "";
    alert("Login bem-sucedido!");
    fecharLogin();
    } else {
    senhaValidacao.textContent = "A senha deve ter pelo menos 8 caracteres e incluir letras, números e caracteres especiais.";
    }
    }