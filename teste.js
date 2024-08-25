document.addEventListener('DOMContentLoaded', async function () {
    event.preventDefault();

    const jwtToken = localStorage.getItem('jwt');

    const formData = new FormData();
    formData.append('jwt', jwtToken)

    const response = await fetch('https://api-login-vitorugz.azurewebsites.net/whois/', {
        method: 'POST',
        headers: { 'Authorization': 'Basic dml0b3J1Z3o6bWVuaW5vX2JveTEz' },
        body: formData,
    });

    const data = await response.json();
    const mensagem = `Olá ${data['username']}, seja bem-vindo(a)!!`;
    const mensagem2 = `Você esta logado usando o e-mail ${data['email']}`;

    if (response.ok) {
        document.getElementById('saudacao').innerText = mensagem;
        document.getElementById('message').innerText = mensagem2;
    } else {
        document.getElementById('message').textContent = data['Erro'];
        document.getElementById('message').style.color = 'red';
    }
});

document.getElementById('logout').addEventListener('click', async function () {
    localStorage.removeItem('jwt');
    window.location.replace("./index.html");
});