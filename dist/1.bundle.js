(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 22:
/***/ (function(module, exports) {

/* eslint-disable no-plusplus */
var topnav = document.getElementById('topnav');
var topnavToggle = topnav.querySelector('.menu-toggle');

function openMobileNavbar() {
  topnav.classList.add('opened');
  topnavToggle.setAttribute('aria-label', 'Close navigation menu.');
}

function closeMobileNavbar() {
  topnav.classList.remove('opened');
  topnavToggle.setAttribute('aria-label', 'Open navigation menu.');
}

topnavToggle.addEventListener('click', function () {
  if (topnav.classList.contains('opened')) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});
var topnavMenu = topnav.querySelector('.nav-menu');
var topnavLinks = topnav.querySelector('.nav-links');
topnavLinks.addEventListener('click', function (clickEvent) {
  clickEvent.stopPropagation();
});
topnavMenu.addEventListener('click', closeMobileNavbar);
var nav = document.getElementById('topnav');
var aTag = nav.getElementsByTagName('a');
var medQuery = window.matchMedia('(max-width:576px)');
var barMenu = nav.querySelector('.menu-toggle');
var logo = nav.querySelector('.logo');
var i;
logo.style.background = '#fff';

for (i = 0; i < aTag.length; i++) {
  aTag[i].style.color = '#fff';
}

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    nav.style.background = '#fff';
    nav.style.boxShadow = '0 6px 5px -2px gray';
    logo.style.background = 'transparent';
    barMenu.style.background = '#000';

    for (i = 0; i < aTag.length; i++) {
      aTag[i].style.color = '#000';
    }
  } else {
    nav.style.background = 'transparent';
    nav.style.boxShadow = 'none';
    barMenu.style.background = 'transparent';

    if (medQuery.matches) {
      for (i = 0; i < aTag.length; i++) {
        aTag[i].style.color = '#000';
      }
    } else {
      logo.style.background = '#fff';

      for (i = 0; i < aTag.length; i++) {
        aTag[i].style.color = '#fff';
      }
    }
  }
};

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var workbox;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 5;
              break;
            }

            workbox = new workbox_window__WEBPACK_IMPORTED_MODULE_0__[/* Workbox */ "a"]('./sw.js');
            _context.next = 4;
            return workbox.register();

          case 4:
            return _context.abrupt("return");

          case 5:
            console.log('Service worker not supported in this browser');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = (swRegister);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ var drawer_initiator = (DrawerInitiator);
// CONCATENATED MODULE: ./src/scripts/routes/url-parser.js
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ var url_parser = (UrlParser);
// EXTERNAL MODULE: ./src/scripts/data/source.js
var source = __webpack_require__(2);

// EXTERNAL MODULE: ./src/scripts/global/api-endpoint.js
var api_endpoint = __webpack_require__(1);

// CONCATENATED MODULE: ./src/scripts/views/templates/template-creator.js


var template_creator_createRestaurantItemTemplate = function createRestaurantItemTemplate(restaurant) {
  return "\n      <article class=\"resto-list\" tabindex=\"0\">\n      <a href=\"/#/detail/".concat(restaurant.id, "\" aria-label=\"").concat(restaurant.name, "\" style=\"color: inherit; font: inherit; text-decoration: none;\">\n          <img class=\"lazyload\" data-src=").concat(api_endpoint["a" /* default */].IMG_RESTAURANT_SMALL, "/").concat(restaurant.pictureId, " alt=").concat(restaurant.name, " crossorigin=\"anonymous\" />\n          <div class=\"text-block\">\n            <span tabindex=\"0\" aria-label=\"rating\" style=\"font-size: 24px; vertical-align: middle;\">&starf;</span>\n            <span tabindex=\"0\">").concat(restaurant.rating, "</span>\n          </div>\n        <div class=\"text\">\n          <a href=\"/#/detail/").concat(restaurant.id, "\" class=\"card-restaurant-link\" style=\"color:black\">\n              <h3 style=\"white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\">").concat(restaurant.name, "</h3>\n          </a>\n          <p tabindex=\"0\">").concat(restaurant.description, "</p>\n        </div>\n        <hr>\n        <div class=\"card-footer\">\n          <img tabindex=\"0\" aria-label=\"location\" style=\"width: 24px;margin: 0; vertical-align: middle; height: 24px;\" src=\"./icon/pin.png\" />\n          <span tabindex=\"0\">").concat(restaurant.city, "</span>\n        </div>\n\n      </a>\n      </article>\n    ");
};

var createSkeletonRestaurantTemplate = function createSkeletonRestaurantTemplate(count) {
  var template = "";

  for (var i = 0; i < count; i++) {
    template += "\n      <article class=\"resto-list\" tabindex=\"0\">\n        <div class=\"resto-image\">\n          <img class=\"lazyload\" data-src=\"./images/placeholder-large.jpg\"\n          srcset=\"./images/placeholder-small.jpg 480w, ./images/placeholder-large.jpg 800w\"\n          sizes=\"(max-width: 600px) 480px, 800px\"\n          alt=\"skeleton image\" crossorigin=\"anonymous\" />\n          <div class=\"text-block\">\n            <span tabindex=\"0\" aria-label=\"rating\" style=\"font-size: 24px; vertical-align: middle;\">&starf;</span>\n            <span tabindex=\"0\">4</span>\n          </div>\n        </div>\n        <div class=\"text\">\n          <a class=\"card-restaurant-link\" style=\"color:black\">\n              <h3>Restaurant Name</h3>\n          </a>\n          <p tabindex=\"0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, enim.</p>\n        </div>\n        <hr>\n        <div class=\"card-footer\">\n            <img tabindex=\"0\" aria-label=\"location\" style=\"width: 24px;margin: 0; vertical-align: middle; height: 24px;\" src=\"./icon/pin.png\" />\n            <tabindex=\"0\">Restaurant City</tabindex=>\n        </div>\n      </article>\n        ";
  }

  return template;
};

var template_creator_createRestaurantJumbotronTemplate = function createRestaurantJumbotronTemplate(restaurant) {
  return "\n    <div id=\"black\"></div>\n    <div class=\"jumbotron-inner-detail\">\n      <h1 class=\"jumbotron-slogan-detail\" tabindex=\"0\">".concat(restaurant.name, "</h1>\n\n      <div class=\"jumbotron-desc\">\n        <p tabindex=\"0\">").concat(restaurant.description, "</p>\n      </div>\n    </div>\n    <img class=\"lazyload\" data-src=").concat(api_endpoint["a" /* default */].IMG_RESTAURANT_LARGE, "/").concat(restaurant.pictureId, " alt=").concat(restaurant.name, " crossorigin=\"anonymous\"/>\n");
};

var createRestaurantDetailTemplate = function createRestaurantDetailTemplate(restaurant) {
  return "\n\n    <h2 class=\"judul\" tabindex=\"0\">Restaurant Details</h2>\n      <div class=\"resto-detail-1\">\n        <div class=\"resto-detail-part1\">\n          <table>\n            <tbody>\n              <tr>\n                <td><span class=\"material-icons\">storefront</span></td>\n                <td><h3 class=\"title-restaurant\" tabindex=\"0\">".concat(restaurant.name, "</h3></td>\n              </tr>\n              <tr>\n                <td><span class=\"material-icons\">location_on</span></td>\n                <td tabindex=\"0\">").concat(restaurant.address, ", ").concat(restaurant.city, "</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\"resto-detail-part2\">\n          <div id=\"rating\" aria-label=\"Rating: ").concat(restaurant.rating, "\" tabindex=\"0\">\n          <span class=\"text\">").concat(restaurant.rating, "</span>\n          <div class=\"star\" style=\"--rating: ").concat(restaurant.rating, ";\" id=\"star\" data-rating=\"").concat(restaurant.rating, "\">\u2605\u2605\u2605\u2605\u2605</div>\n          </div>\n        </div>\n      </div>\n\n      <div>\n        <p tabindex=\"0\">").concat(restaurant.description, "</p>\n\n        <h3 tabindex=\"0\">Categories</h3>\n          ").concat(restaurant.categories.map(function (categori) {
    return "\n            <span class=\"category-name\" tabindex=\"0\">".concat(categori.name, "</span>\n          ");
  }).join(""), "\n\n        <h3 tabindex=\"0\">Foods</h3>\n        ").concat(restaurant.menus.foods.map(function (food) {
    return "\n          <span class=\"food-name\" tabindex=\"0\">".concat(food.name, "</span>\n        ");
  }), "\n\n        <h3 tabindex=\"0\">Drinks</h3>\n        ").concat(restaurant.menus.drinks.map(function (drink) {
    return "\n          <span class=\"drink-name\" tabindex=\"0\">".concat(drink.name, "</span>\n        ");
  }), "\n\n    </div>\n\n");
};

var createRestaurantReviewTemplate = function createRestaurantReviewTemplate(restaurant) {
  return "\n      ".concat(restaurant.customerReviews.map(function (review) {
    return "\n          <div class=\"review-card\">\n            <span class=\"material-icons\" style=\"margin-right:10px\">\n            account_circle\n            </span>\n            <div class=\"review-content\">\n              <div class=\"review-name\" tabindex=\"0\">\n              ".concat(review.name, "\n              </div>\n              <div class=\"review-date\" tabindex=\"0\">\n              ").concat(review.date, "\n              </div>\n              <div class=\"review-message\" tabindex=\"0\">\n              ").concat(review.review, "\n              </div>\n            </div>\n          </div>\n        ");
  }).join(""), "\n");
};

var createFormReviewTemplate = function createFormReviewTemplate() {
  return "\n  <form>\n    <input type=\"text\" aria-label=\"Type your name here\" name=\"nama\" class=\"inputName\" id=\"inputName\" placeholder=\"Type your name\">\n    <textarea name=\"review\" aria-label=\"Type your review here\" class=\"inputReview\" id=\"inputReview\" placeholder=\"Type your review\"></textarea>\n    <button type=\"submit\" class=\"btnSubmit\">Add review</button>\n  </form>\n";
};

var createLikeButtonTemplate = function createLikeButtonTemplate() {
  return "\n  <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n     <span class=\"material-icons\">favorite_border</span>\n  </button>\n";
};

var createLikedButtonTemplate = function createLikedButtonTemplate() {
  return "\n  <button aria-label=\"unlike this restaurant\" id=\"likeButton\" class=\"like\">\n    <span class=\"material-icons\">favorite</span>\n  </button>\n";
};


// CONCATENATED MODULE: ./src/scripts/views/pages/home.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Home = {
  render: function render() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <my-jumbo></my-jumbo>\n      <h2 class=\"judul\">Home Page</h2>\n\n      <span class=\"errorr\"></span>\n      <loading-indicator></loading-indicator>\n      <div class=\"resto-item-container\" style=\"width: 100%; \">\n        <div class=\"grid\">".concat(createSkeletonRestaurantTemplate(20), "</div>\n      </div>\n    "));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurantContainer, errorr, loadingElement, judul, restaurants;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              restaurantContainer = document.querySelector('.grid');
              errorr = document.querySelector('.errorr');
              loadingElement = document.querySelector('loading-indicator');
              judul = document.querySelector('.judul');
              restaurantContainer.innerHTML = '';
              _context2.prev = 5;
              _context2.next = 8;
              return source["a" /* default */].listRestaurant();

            case 8:
              restaurants = _context2.sent;
              restaurants.forEach(function (restaurant) {
                restaurantContainer.innerHTML += template_creator_createRestaurantItemTemplate(restaurant);
              });
              _context2.next = 17;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](5);
              console.log(_context2.t0);
              errorr.innerHTML = '<error-message></error-message>';
              judul.style.display = 'none';

            case 17:
              _context2.prev = 17;
              loadingElement.style.display = 'none';
              return _context2.finish(17);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 12, 17, 20]]);
    }))();
  }
};
/* harmony default export */ var home = (Home);
// EXTERNAL MODULE: ./src/scripts/data/idb.js
var idb = __webpack_require__(4);

// CONCATENATED MODULE: ./src/scripts/views/pages/favorite.js
function favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var Favorite = {
  render: function render() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n    <my-jumbo></my-jumbo>\n    <h2 class=\"judul\">Favorite Restaurant</h2>\n\n    <span class=\"noDataFound\"></span>\n    <div class=\"grid container\"></div>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favorite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurant, restaurantContainer, noData, judul;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return idb["a" /* default */].getAllRestaurant();

            case 2:
              restaurant = _context2.sent;
              restaurantContainer = document.querySelector('.grid');
              noData = document.querySelector('.noDataFound');
              judul = document.querySelector('.judul');

              if (restaurant.length === 0) {
                judul.style.display = 'none';
                noData.innerHTML = '<no-data-found></no-data-found>';
              }

              restaurant.forEach(function (restaurant) {
                restaurantContainer.innerHTML += template_creator_createRestaurantItemTemplate(restaurant);
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ var favorite = (Favorite);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(3);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);

// CONCATENATED MODULE: ./src/scripts/utils/form-review-initiator.js
function form_review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function form_review_initiator_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { form_review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { form_review_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var FormReviewInitiator = {
  init: function init(_ref) {
    var _this = this;

    return form_review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var formReviewContainer, id;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formReviewContainer = _ref.formReviewContainer, id = _ref.id;
              _this._formReviewContainer = formReviewContainer;
              _this._id = id;
              _context.next = 5;
              return _this._renderForm();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderForm: function _renderForm() {
    var _this2 = this;

    return form_review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var btnSubmit;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this2._formReviewContainer.innerHTML = createFormReviewTemplate();
              btnSubmit = document.querySelector('.btnSubmit');
              btnSubmit.addEventListener('click', /*#__PURE__*/function () {
                var _ref2 = form_review_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                  var inputName, inputReview, form, reviewData;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          e.preventDefault();
                          inputName = document.querySelector('.inputName');
                          inputReview = document.querySelector('.inputReview');
                          form = document.querySelector('form');
                          reviewData = {
                            id: _this2._id,
                            name: inputName.value,
                            review: inputReview.value
                          };

                          if (!(inputName.value === '' && inputReview.value === '')) {
                            _context2.next = 9;
                            break;
                          }

                          sweetalert2_all_default.a.fire('Oops..', 'Name and Review can\'t be empty!', 'warning');
                          _context2.next = 22;
                          break;

                        case 9:
                          if (!(inputName.value === '')) {
                            _context2.next = 13;
                            break;
                          }

                          sweetalert2_all_default.a.fire('Oops..', 'Name can\'t be empty!', 'warning');
                          _context2.next = 22;
                          break;

                        case 13:
                          if (!(inputReview.value === '')) {
                            _context2.next = 17;
                            break;
                          }

                          sweetalert2_all_default.a.fire('Oops..', 'Review can\'t be empty!', 'warning');
                          _context2.next = 22;
                          break;

                        case 17:
                          _context2.next = 19;
                          return source["a" /* default */].reviewRestaurant(reviewData);

                        case 19:
                          form.reset();

                          _this2._renderReview(reviewData.name, reviewData.review);

                          sweetalert2_all_default.a.fire({
                            icon: 'success',
                            title: 'Your review has been submitted',
                            showConfirmButton: false,
                            timer: 1500
                          });

                        case 22:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderReview: function _renderReview(name, review) {
    var reviewContainer = document.querySelector('.review-item');
    var date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    var dataReview = "\n      <div class=\"review-card\">\n        <span class=\"material-icons\" style=\"margin-right:10px\">\n        account_circle\n        </span>\n        <div class=\"review-content\">\n          <div class=\"review-name\">\n          ".concat(name, "\n          </div>\n          <div class=\"review-date\">\n          ").concat(date, "\n          </div>\n          <div class=\"review-message\">\n          ").concat(review, "\n          </div>\n        </div>\n      </div>\n    ");
    reviewContainer.innerHTML += dataReview;
  }
};
/* harmony default export */ var form_review_initiator = (FormReviewInitiator);
// CONCATENATED MODULE: ./src/scripts/utils/like-button-presenter.js
function like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function like_button_presenter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { like_button_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurants, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurants = _ref.favoriteRestaurants, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._restaurant = restaurant;
              _this._favoriteRestaurants = favoriteRestaurants;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    var _this3 = this;

    return like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurants.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurants.putRestaurant(_this4._restaurant);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/like_button_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurants.deleteRestaurant(_this5._restaurant.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ var like_button_presenter = (LikeButtonPresenter);
// CONCATENATED MODULE: ./src/scripts/views/pages/detail.js
function detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function detail_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var Detail = {
  render: function render() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n      <div class=\"jumbotron-detail\" role=\"img\" aria-label=\"jumbotron\" title=\"jumbotron\">\n      </div>\n\n      <loading-indicator></loading-indicator>\n      <div style=\"width: 100%\">\n        <div class=\"detail-container\">\n          <div class=\"detail-resto-wrapper\"></div>\n\n          <div class=\"review-resto\">\n            <div class=\"review-container\">\n              <h2 class=\"judul\" tabindex=\"0\">Restaurant Review</h2>\n              <div class=\"review-item\"></div>\n            </div>\n\n            <div class=\"detail-form\">\n              <h2 class=\"judul\" tabindex=\"0\">Add New Review</h2>\n              <div id=\"formReviewContainer\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"likeButtonContainer\"></div>\n    ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, jumboContainer, detailContainer, reviewContainer, detailForm, loadingElement, container, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = url_parser.parseActiveUrlWithoutCombiner();
              jumboContainer = document.querySelector('.jumbotron-detail');
              detailContainer = document.querySelector('.detail-resto-wrapper');
              reviewContainer = document.querySelector('.review-item');
              detailForm = document.querySelector('.detail-form');
              loadingElement = document.querySelector('loading-indicator');
              container = document.querySelector('.detail-container');
              _context2.prev = 7;
              _context2.next = 10;
              return source["a" /* default */].detailRestaurant(url.id);

            case 10:
              data = _context2.sent;
              jumboContainer.innerHTML = template_creator_createRestaurantJumbotronTemplate(data.restaurant);
              detailContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);
              reviewContainer.innerHTML = createRestaurantReviewTemplate(data.restaurant);
              _context2.next = 16;
              return like_button_presenter.init({
                likeButtonContainer: document.querySelector('#likeButtonContainer'),
                favoriteRestaurants: idb["a" /* default */],
                restaurant: {
                  id: data.restaurant.id,
                  name: data.restaurant.name,
                  description: data.restaurant.description,
                  pictureId: data.restaurant.pictureId,
                  city: data.restaurant.city,
                  rating: data.restaurant.rating
                }
              });

            case 16:
              _context2.next = 18;
              return form_review_initiator.init({
                formReviewContainer: document.querySelector('#formReviewContainer'),
                id: data.restaurant.id
              });

            case 18:
              _context2.next = 28;
              break;

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2["catch"](7);
              console.log(_context2.t0);
              jumboContainer.innerHTML = '<my-jumbo></my-jumbo>';
              container.innerHTML = '<error-message></error-message>';
              detailContainer.style.display = 'none';
              reviewContainer.style.display = 'none';
              detailForm.style.display = 'none';

            case 28:
              _context2.prev = 28;
              loadingElement.style.display = 'none';
              return _context2.finish(28);

            case 31:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[7, 20, 28, 31]]);
    }))();
  }
};
/* harmony default export */ var detail = (Detail);
// CONCATENATED MODULE: ./src/scripts/routes/routes.js



var routes = {
  '/': home,
  // default page
  '/home': home,
  '/favorite': favorite,
  '/detail/:id': detail
};
/* harmony default export */ var routes_routes = (routes);
// CONCATENATED MODULE: ./src/scripts/views/app.js
function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var app_App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;

    _classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      drawer_initiator.init({
        button: this._button,
        drawer: this._drawer,
        content: this._content
      }); // kita bisa menginisiasikan komponen lain bila ada
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = url_parser.parseActiveUrlWithCombiner();
                page = routes_routes[url];
                _context.next = 4;
                return page.render();

              case 4:
                this._content.innerHTML = _context.sent;
                _context.next = 7;
                return page.afterRender();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ var app = __webpack_exports__["a"] = (app_App);

/***/ })

}]);