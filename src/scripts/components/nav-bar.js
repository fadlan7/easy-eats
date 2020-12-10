class MyNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <nav class="nav-container container">
            <a href="#/" class="home-link">
                <div class="logo">
                    <img class="lazyload" alt="logo" data-src="./icon/icon-384x384.png">
                </div>
            </a>
            <button type="button" class="menu-toggle" aria-label="Open navigation menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="nav-menu">
                <ul class="nav-links">
                    <li class="nav-link"><a href="#/">Home</a></li>
                    <li class="nav-link"><a href="#/favorite">Favorite</a></li>
                    <li class="nav-link"><a href="https://github.com/fadlan7" target="_blank" rel="noopener">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define('nav-bar', MyNav);
