class NoDataFound extends HTMLElement {
  connectedCallback() {
    this.render();
    this.appendChild(createImg('img', Images));
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center;">
          <h2 class="no-data-text" tabindex="0">No favorite restaurants found!</h2>
          <p tabindex="0">You have no favorite restaurants yet</p>
          <img tabindex="0" src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg"
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
