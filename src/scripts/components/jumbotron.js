class Jumbotron extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <div class="jumbotron" role="img" aria-label="jumbotron" title="jumbotron">
          <div id="black"></div>
          <div class="jumbotron-inner">
              <h1 class="jumbotron-slogan" tabindex="0">Find Your Favorite Restaurants.</h1>
          </div>
        </div>
    `;
    }
  }

  customElements.define("my-jumbo", Jumbotron);
