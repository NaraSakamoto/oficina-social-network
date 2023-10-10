import { cadastrar } from '../../firebase/firebaseAuth.js';

export default () => {
    const container = document.createElement("section");

    const template = `
        <form class="formCadastro">
            <h1>Cadastro</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">E-mail</label>
            <input id="email" type="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label for="password">Senha</label>
            <input id="password" type="password" placeholder="Digite seu e-mail" />
            <input id="submitbtn" type="submit" value="Cadastrar" class="btn" />
        </form>`;

    container.innerHTML = template;

    const submitBtn = container.querySelector("#submitbtn");
    submitBtn.addEventListener('click', () => {
        const email = container.querySelector("#email").value;
        const senha = container.querySelector("#password").value;

        cadastrar(email, senha)
        .then(() => {
            //redirecionar a pessoa para o feed,
        })
        .catch(() => {
            alert("Erro ao cadastrar usuário!");
        })
    });

    return container;
}