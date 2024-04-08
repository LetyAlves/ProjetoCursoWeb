function validarEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (!validarEmail(email)) {
        alert("Email inválido!");
        return;
    }

    if (senha.length < 6) {
        alert("Senha precisa ter no mínimo 6 caracteres!");
        return;
    }
}

function cadastro() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome.length === 0) {
        alert("Nome precisa ser preenchido!");
        return;
    }

    if (!validarEmail(email)) {
        alert("Email inválido!");
        return;
    }
}