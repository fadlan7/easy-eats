class NoDataFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center;">
          <h2 class="no-data-text" tabindex="0">No favorite restaurants found!</h2>
          <p tabindex="0">You have no favorite restaurants yet</p>
          <img class="lazyload" data-src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg"
            tabindex="0"
            style="display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 320px;
            width: 100%;" alt="error image" />
        </div>
      `;
  }
}

customElements.define('no-data-found', NoDataFound);
