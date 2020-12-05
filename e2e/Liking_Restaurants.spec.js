const assert = require("assert");

Feature("Liking Restaurants");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

const textError = "No favorite restaurants found!";

Scenario("showing empty liked restaurants", ({ I }) => {
  I.seeElement(".grid");
  I.see(textError, "no-data-found");
});

Scenario("like and unlike one restaurant", async ({ I }) => {
  I.see(textError, "no-data-found");

  I.amOnPage("/");

  I.seeElement(".resto-list a");
  const firstRestaurant = locate(".card-restaurant-link").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".grid");

  const likedRestaurantTitle = await I.grabTextFrom(".card-restaurant-link");
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  //klik restaurant di halaman favorite
  I.click(firstRestaurant);

  //unlike restaurant
  I.seeElement("#likeButton");
  I.click("#likeButton");

  //kembali ke halaman favorite
  I.amOnPage("/#/favorite");
  I.seeElement("no-data-found");

  const unlikeRestaurantTitle = await I.grabTextFrom(".no-data-text");
  assert.strictEqual(unlikeRestaurantTitle, textError);
});

Scenario('Customer review', async ({I})=>{
  I.see(textError, "no-data-found");

  I.amOnPage("/");

  I.seeElement(".resto-list a");
  I.click(locate('.resto-list a').first());

  const textReview = 'Review from E2E Testing!!!';
  I.seeElement('form');
  I.fillField('nama', 'Fadlan');
  I.fillField('review', textReview);
  I.click('.btnSubmit');

  I.see(textReview, '.review-message');
})