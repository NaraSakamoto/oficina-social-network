import { login } from '../../firebase/firebaseAuth.js'

export default () => {
    const container = document.createElement('section');
    const template = `
        <form class="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label for="email">E-mail</label>
            <input id="email" type="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label for="password">Senha</label>
            <input id="password" type="password" placeholder="Digite sua senha" />
            <input id="submitbtn" type="submit" value="Acessar" class="btn" />
            <input id="registerbtn" type="submit" value="Cadastrar" class="btn" />
        </form>`;

    container.innerHTML = template;

    const submitBtn = container.querySelector("#submitbtn");
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const email = container.querySelector("#email").value;
        const senha = container.querySelector("#password").value;

        login(email, senha)
        .then(() => {
            //ir para o feed
            alert("Login efetuado com sucesso!!!")
            window.location.hash = '#feed';
        })
        .catch((error) => {
            //erro na tela
            console.log(error)
            alert("Erro ao logar!");
        })
    });

    const registerbtn = container.querySelector("#registerbtn");
    registerbtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.hash = '#register';
    });

    return container;
};