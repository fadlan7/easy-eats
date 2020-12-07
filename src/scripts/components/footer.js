class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <footer class="fixed_footer footer">
            <div class="footer_content">
                <p tabindex="0">Created by <strong>Fadlan Sayyidul Anam</strong></p>
                <hr>
                <span tabindex="0">&copy; 2020</span> <b tabindex="0">Easy <span>Eats</span><b>
            </div>
          </footer>
          `;
  }
}

customElements.define('my-footer', MyFooter);
