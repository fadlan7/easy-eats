import imageserror from '../../public/images/heros/imageserror.png';

class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align:center;">
          <h2 tabindex="0">Failed to load content!</h2>
          <p tabindex="0">Please refresh to try again.</p>
            <img src = ${imageserror} style="  display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;"/>
        </div>
      `;
  }
}

customElements.define('error-message', ErrorMessage);
