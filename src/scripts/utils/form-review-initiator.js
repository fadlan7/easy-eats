import Swal from 'sweetalert2';
import RestaurantSource from '../data/source';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();

    const btnSubmit = document.querySelector('.btnSubmit');

    btnSubmit.addEventListener('click', async (e) => {
      e.preventDefault();

      const inputName = document.querySelector('.inputName');
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '' && inputReview.value === ''){
        Swal.fire(
          'Oops..',
          'Name and Review can\'t be empty!',
          'warning'
        )
      }
      else if (inputName.value === '') {
        Swal.fire(
          'Oops..',
          'Name can\'t be empty!',
          'warning'
        )
      } else if (inputReview.value === '') {
        Swal.fire(
          'Oops..',
          'Review can\'t be empty!',
          'warning'
        )
      } else {
        await RestaurantSource.reviewRestaurant(reviewData);
        form.reset();
        this._renderReview(reviewData.name, reviewData.review);
        Swal.fire({
          icon:'success',
          title:'Your review has been submitted',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  },

  _renderReview(name, review) {
    const reviewContainer = document.querySelector('.review-item');
    const date = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataReview = `
      <div class="review-card">
        <span class="material-icons" style="margin-right:10px">
        account_circle
        </span>
        <div class="review-content">
          <div class="review-name">
          ${name}
          </div>
          <div class="review-date">
          ${date}
          </div>
          <div class="review-message">
          ${review}
          </div>
        </div>
      </div>
    `;

    reviewContainer.innerHTML += dataReview;
  },
};

export default FormReviewInitiator;
