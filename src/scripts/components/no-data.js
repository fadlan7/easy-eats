class NoDataFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center; min-height:200px">
          <h2 class="no-data-text" tabindex="0">No favorite restaurants found!</h2>
          <p tabindex="0">You have no favorite restaurants yet</p>
        </div>
      `;
  }
}

customElements.define('no-data-found', NoDataFound);
