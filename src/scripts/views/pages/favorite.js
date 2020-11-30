import FavoriteRestaurantIdb from '../../data/idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <my-jumbo></my-jumbo>
    <h2 class="judul">Favorite Restaurant</h2>

    <span class="noDataFound"></span>
    <div class="grid container"></div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('.grid');
    const noData = document.querySelector('.noDataFound');
    const judul = document.querySelector('.judul');

    if (restaurant.length === 0) {
      noData.innerHTML = '<no-data-found></no-data-found>';
      restaurantContainer.style.display = 'none';
      judul.style.display = 'none';
    }
    // eslint-disable-next-line no-shadow
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Favorite;