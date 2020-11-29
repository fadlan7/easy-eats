const Favorite = {
  async render() {
    return `
      <my-jumbo></my-jumbo>
      <h2 class="judul">Favorite Restaurant</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
