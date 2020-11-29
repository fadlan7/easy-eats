import noData from '../../public/images/heros/noData.jpg';

class NoDataFound extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
        <div style="text-align:center;">
          <h2>No favorites found</h2>
          <p>You have no favorite restaurants yet</p>
            <img src = ${noData} style="  display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;"/>
        </div>
      `;
    }
  }

  customElements.define('no-data-found', NoDataFound);
