import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/nav-bar';
import './components/jumbotron';
import './components/footer';
import './components/error-message';
import './views/nav';
import App from './views/app';


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
});
