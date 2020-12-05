class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center;">
          <h2 tabindex="0">Failed to load content!</h2>
          <p tabindex="0">Please refresh to try again.</p>
            <img class="lazyload" data-src = "https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg"
              tabindex="0"
              style="display: block;
              margin-left: auto;
              margin-right: auto;
              max-width: 320px;
              width: 100%;" alt="error image"/>
        </div>
      `;
  }
}

customElements.define('error-message', ErrorMessage);
