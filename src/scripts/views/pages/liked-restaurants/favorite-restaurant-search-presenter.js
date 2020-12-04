class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById("query");
    this._queryElement.addEventListener("change", (event) => {
      //   console.log(event);
      this._searchRestaurants(event.target.value);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestaurants();
    }
    // const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(this.latestQuery);

    this._showFoundRestaurants(foundRestaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }

  // _showFoundRestaurants(restaurants) {
  //   const html = restaurants.reduce(
  //     (carry, restaurant) =>
  //       carry.concat(
  //         `<li class="restaurant"><span class="restaurant__title">${
  //           restaurant.title || "-"
  //         }</span></li>`
  //       ),
  //     ""
  //   );

  //   document.querySelector(".restaurants").innerHTML = html;

  //   document
  //     .getElementById("restaurant-search-container")
  //     .dispatchEvent(new Event("restaurants:searched:updated"));
  // }

  _showFoundRestaurants(restaurants) {
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }
}

export default FavoriteRestaurantSearchPresenter;
