import RestaurantSource from '../../data/source';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const Home = {

  async render() {
    return `
      <my-jumbo></my-jumbo>
      <h2 class="judul">Home Page</h2>

      <span class="errorr"></span>
      <loading-indicator></loading-indicator>
      <div class="resto-item-container" style="width: 100%; ">
        <div class="grid">${createSkeletonRestaurantTemplate(20)}</div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.grid');
    const errorr = document.querySelector('.errorr');
    const loadingElement = document.querySelector('loading-indicator');
    const judul = document.querySelector('.judul');
    restaurantContainer.innerHTML = '';

    try {
      const restaurants = await RestaurantSource.listRestaurant();

      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
      errorr.innerHTML = '<error-message></error-message>';
      judul.style.display = 'none';
    } finally {
      loadingElement.style.display = 'none';
    }
  },
};

export default Home;
