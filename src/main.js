import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './js/render-functions';
import { getPhotos } from './js/pixarbay-api';

import axios from 'axios';

const formElement = document.querySelector('[name="search"]');
const inputElement = document.querySelector('input');
const galleryArea = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;
const btnLoadMore = document.querySelector('.js-button-load');
let searchQuery = null;
let page = 1;

if (!lightbox) {
  lightbox = new SimpleLightbox('.gallery a');
} else {
  lightbox.refresh();
}

const limit = 15;
const totalImages = null;
const lastPage = Math.ceil(totalImages / 15);

formElement.addEventListener('submit', onSubmit);
btnLoadMore.addEventListener('click', loadedMoreImages);

function loadedMoreImages() {
  page += 1;

  getPhotos(searchQuery, page)
    .then(res => {
      galleryArea.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(res.hits)
      );
      const { height: cardHeight } = document
        .querySelector('.gallery')
        .firstElementChild.getBoundingClientRect();

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
      const lastPage = Math.ceil(res.total / 15);
      ///????
      if (lastPage === page) {
        btnLoadMore.classList.add('is-hidden');
        alert("that's all!!!");
        // iziToast;
      }
    })
    .catch(console.log);
}

////----////

////----////

function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.search.value.trim();
  showLoader();
  btnLoadMore.classList.add('is-hidden');
  galleryArea.innerHTML = '';
  page = 1;

  if (!searchQuery) return;

  getPhotos(searchQuery, page) //
    .then(res => {
      if (res.total > 0) {
        iziToast.info({
          position: 'topRight',
          message: `We found ${res.total} images`,
          maxWidth: '432',
        });
      }
      if (res.hits.length === 0) {
        return iziToast.error({
          position: 'topRight',

          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: '432',
          messageColor: '#fafafb',
          color: '#ef4040',
        });
      }

      galleryArea.innerHTML = createGalleryMarkup(res.hits);

      if (res.totalHits > 15) {
        btnLoadMore.classList.remove('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hiddeLoader();
    });
  inputElement.value = '';
}

////----////

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hiddeLoader() {
  loader.classList.add('is-hidden');
}
