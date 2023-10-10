export default () => {
    const container = document.createElement('section');
    const template = `
            <h1>Olá! Fique por dentro das pérolas que rolaram no Checkout!</h1>
            `;

    container.innerHTML = template;

    return container;
};