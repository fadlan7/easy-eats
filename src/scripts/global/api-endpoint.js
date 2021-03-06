import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  IMG_RESTAURANT: `${CONFIG.BASE_URL}/images/medium`,
  IMG_RESTAURANT_SMALL: `${CONFIG.BASE_URL}/images/small`,
  IMG_RESTAURANT_LARGE: `${CONFIG.BASE_URL}/images/large`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  REVIEW_RESTAURANT: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
