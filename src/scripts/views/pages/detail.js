// export default detail;
import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/source";
import { createRestaurantJumbotronTemplate } from "../templates/template-creator";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import { createRestaurantReviewTemplate } from "../templates/template-creator";
import FormReviewInitiator from "../../utils/form-review-initiator";
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/idb';

const Detail = {
  async render() {
    return `
      <div class="jumbotron-detail" role="img" aria-label="jumbotron" title="jumbotron">
      </div>

      <loading-indicator></loading-indicator>
      <div class="detail-container">
        <div class="box detail-resto"></div>

        <div class="box review-resto">
          <h2 class="judul" tabindex="0">Restaurant Review</h2>
          <div class="review-item box"></div>

          <div class="detail-form">
            <h2 class="judul" tabindex="0">Add New Review</h2>
            <div id="formReviewContainer"></div>
          </div>
        </div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const jumboContainer = document.querySelector(".jumbotron-detail");
    const detailContainer = document.querySelector(".detail-resto");
    const reviewContainer = document.querySelector(".review-item");
    const detailForm = document.querySelector(".detail-form");
    const loadingElement = document.querySelector("loading-indicator");
    const container = document.querySelector('.detail-container');

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      jumboContainer.innerHTML = createRestaurantJumbotronTemplate(
        data.restaurant
      );
      detailContainer.innerHTML = createRestaurantDetailTemplate(
        data.restaurant
      );
      reviewContainer.innerHTML = createRestaurantReviewTemplate(
        data.restaurant
      );

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          description: data.restaurant.description,
          pictureId: data.restaurant.pictureId,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
        },
      });

      await FormReviewInitiator.init({
        formReviewContainer: document.querySelector("#formReviewContainer"),
        id: data.restaurant.id,
      });
    } catch (error) {
      console.log(error);
      jumboContainer.innerHTML = "<my-jumbo></my-jumbo>";
      container.innerHTML = "<error-message></error-message>";
      detailContainer.style.display = "none";
      reviewContainer.style.display = "none";
      detailForm.style.display = "none";
    } finally {
      loadingElement.style.display = "none";
    }
  },
};

export default Detail;
