class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center; min-height:200px">
          <h2 tabindex="0">Failed to load content!</h2>
          <p tabindex="0">Please refresh to try again.</p>
        </div>
      `;
  }
}

customElements.define('error-message', ErrorMessage);
