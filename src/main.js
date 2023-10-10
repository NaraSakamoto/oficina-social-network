import login from './pages/login/login.js';
import register from './pages/register/register.js';
import feed from './pages/feed/feed.js';

const main = document.querySelector('#root');
console.log(main)
const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    console.log(window.location.hash);
    switch (window.location.hash) {
      case '#login':
        main.appendChild(login());
        break;
      case '#register':
        main.appendChild(register());
        break;
      case '#feed':
        main.appendChild(feed());
        break;
      default:
        main.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  console.log("carregando página...")
  main.appendChild(login());
  init();
});