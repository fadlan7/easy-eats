import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/nav-bar';
import './components/jumbotron';
import './components/footer';
import './components/error-message';
import './components/no-data';
import './components/loading-indicator';
import './views/nav';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.menu-toggle'),
  drawer: document.querySelector('#topnav'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
