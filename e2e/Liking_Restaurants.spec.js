const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement(".grid");
  I.see("No favorite restaurants found!", "no-data-found");
});

Scenario("like and unlike one restaurant", async ({ I }) => {
    //Like restaurant
  I.see("No favorite restaurants found!", "no-data-found");

  I.amOnPage("/");

  I.seeElement(".card-restaurant-link");
  const firstRestaurant = locate(".card-restaurant-link").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".grid");

  const likedRestaurantTitle = await I.grabTextFrom(".card-restaurant-link");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  //unlike restaurant
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".grid");
});
