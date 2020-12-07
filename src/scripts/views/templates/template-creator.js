import API_ENDPOINT from "../../global/api-endpoint";

const createRestaurantItemTemplate = (restaurant) => `
      <article class="resto-list" tabindex="0">
      <a href="/#/detail/${restaurant.id}" aria-label="${restaurant.name}" style="color: inherit; font: inherit; text-decoration: none;">
          <img class="lazyload" data-src=${API_ENDPOINT.IMG_RESTAURANT_SMALL}/${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
          <div class="text-block">
            <span tabindex="0" aria-label="rating" style="font-size: 24px; vertical-align: middle;">&starf;</span>
            <span tabindex="0">${restaurant.rating}</span>
          </div>
        <div class="text">
          <a href="/#/detail/${restaurant.id}" class="card-restaurant-link" style="color:black">
              <h3>${restaurant.name}</h3>
          </a>
          <p tabindex="0">${restaurant.description}</p>
        </div>
        <hr>
        <div class="card-footer">
          <span tabindex="0" aria-label="location" style="font-size: 24px; vertical-align: middle;">&#x1F4CD;</span>
            <span tabindex="0">${restaurant.city}</span>
        </div>

      </a>
      </article>
    `;

const createSkeletonRestaurantTemplate = (count) => {
  let template = "";

  for (let i = 0; i < count; i++) {
    template += `
      <article class="resto-list" tabindex="0">
        <div class="resto-image">
          <img class="lazyload" data-src="./images/placeholder-large.jpg"
          srcset="./images/placeholder-small.jpg 480w, ./images/placeholder-large.jpg 800w"
          sizes="(max-width: 600px) 480px, 800px"
          alt="skeleton image" crossorigin="anonymous" />
          <div class="text-block">
            <span tabindex="0" aria-label="rating" style="font-size: 24px; vertical-align: middle;">&starf;</span>
            <span tabindex="0">4</span>
          </div>
        </div>
        <div class="text">
          <a class="card-restaurant-link" style="color:black">
              <h3>Restaurant Name</h3>
          </a>
          <p tabindex="0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, enim.</p>
        </div>
        <hr>
        <div class="card-footer">
            <span tabindex="0" aria-label="location" style="font-size: 24px; vertical-align: middle;">&#x1F4CD;</span>
            <tabindex="0">Restaurant City</tabindex=>
        </div>
      </article>
        `;
  }
  return template;
};

const createRestaurantJumbotronTemplate = (restaurant) => `
    <div id="black"></div>
    <div class="jumbotron-inner-detail">
      <h1 class="jumbotron-slogan-detail" tabindex="0">${restaurant.name}</h1>

      <div class="jumbotron-desc">
        <p tabindex="0">${restaurant.description}</p>
      </div>
    </div>
    <img class="lazyload" data-src=${API_ENDPOINT.IMG_RESTAURANT_LARGE}/${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous"/>
`;

const createRestaurantDetailTemplate = (restaurant) => `

    <h2 class="judul" tabindex="0">Restaurant Details</h2>
      <div class="resto-detail-1">
        <div class="resto-detail-part1">
          <table>
            <tbody>
              <tr>
                <td><span class="material-icons">storefront</span></td>
                <td><h3 class="title-restaurant" tabindex="0">${
                  restaurant.name
                }</h3></td>
              </tr>
              <tr>
                <td><span class="material-icons">location_on</span></td>
                <td tabindex="0">${restaurant.address}, ${restaurant.city}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="resto-detail-part2">
          <div id="rating" aria-label="Rating: ${
            restaurant.rating
          }" tabindex="0">
          <span class="text">${restaurant.rating}</span>
          <div class="star" style="--rating: ${
            restaurant.rating
          };" id="star" data-rating="${restaurant.rating}">★★★★★</div>
          </div>
        </div>
      </div>

      <div style="padding:10px">
        <p tabindex="0">${restaurant.description}</p>

        <h3 tabindex="0">Categories</h3>
          ${restaurant.categories
            .map(
              (categori) => `
            <span class="category-name" tabindex="0">${categori.name}</span>
          `
            )
            .join("")}

        <h3 tabindex="0">Foods</h3>
        ${restaurant.menus.foods.map(
          (food) => `
          <span class="food-name" tabindex="0">${food.name}</span>
        `
        )}

        <h3 tabindex="0">Drinks</h3>
        ${restaurant.menus.drinks.map(
          (drink) => `
          <span class="drink-name" tabindex="0">${drink.name}</span>
        `
        )}

    </div>

`;

const createRestaurantReviewTemplate = (restaurant) => `
      ${restaurant.customerReviews
        .map(
          (review) => `
          <div class="review-card">
            <span class="material-icons" style="margin-right:10px">
            account_circle
            </span>
            <div class="review-content">
              <div class="review-name" tabindex="0">
              ${review.name}
              </div>
              <div class="review-date" tabindex="0">
              ${review.date}
              </div>
              <div class="review-message" tabindex="0">
              ${review.review}
              </div>
            </div>
          </div>
        `
        )
        .join("")}
`;

const createFormReviewTemplate = () => `
  <form>
    <input type="text" aria-label="Type your name here" name="nama" class="inputName" id="inputName" placeholder="Type your name">
    <textarea name="review" aria-label="Type your review here" class="inputReview" id="inputReview" placeholder="Type your review"></textarea>
    <button type="submit" class="btnSubmit">Add review</button>
  </form>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <span class="material-icons">favorite_border</span>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <span class="material-icons">favorite</span>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantJumbotronTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createFormReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
