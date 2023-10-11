import { lerPosts } from '../../firebase/firestore.js';
 
export default () => {
    const container = document.createElement('section');
    const template = `
            <h1>Olá! Fique por dentro das pérolas que rolaram no Checkout!</h1>
            <button id="mostrar">Mostrar</button>
            `;

    container.innerHTML = template;

    const mostrarBtn = container.querySelector("#mostrar");
    mostrarBtn.addEventListener('click', () => {
      lerPosts();
    });


    return container;
};