import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryMarkup } from './js/render-functions';
import { getPhotos } from './js/pixarbay-api';

const formElement = document.querySelector('[name="search"]');
const inputElement = document.querySelector('input');
const galleryArea = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox = new SimpleLightbox('.gallery a');
const btnLoadMore = document.querySelector('.js-button-load');
let searchQuery = null;
let page = 1;

formElement.addEventListener('submit', onSubmit);
btnLoadMore.addEventListener('click', loadedMoreImages);

//--

async function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.search.value.trim();
  showLoader();
  btnLoadMore.classList.add('is-hidden');
  galleryArea.innerHTML = '';
  page = 1;

  if (!searchQuery) return;

  try {
    const { hits, totalHits } = await getPhotos(searchQuery, page); //
    if (totalHits > 0) {
      iziToast.info({
        position: 'topRight',
        message: `We found ${totalHits} images`,
        maxWidth: '432',
      });
    }
    if (hits.length === 0) {
      return iziToast.error({
        position: 'topRight',

        message: 'Sorry, there are no images matching your search query. Please try again!',
        maxWidth: '432',
        messageColor: '#fafafb',
        color: '#ef4040',
      });
    }

    galleryArea.innerHTML = createGalleryMarkup(hits);

    lightbox.refresh();

    if (totalHits > 15) {
      btnLoadMore.classList.remove('is-hidden');
    }

    inputElement.value = '';
  } catch (error) {
    console.log(error);

    if (error.response === 401) {
      iziToast.error({
        position: 'topRight',
        message: `You not authorization`,
      });
    }
    if (error.response.status === 404) {
      iziToast.error({
        position: 'topRight',
        message: `Bad request, please try again `,
      });
    }
    if (error.response.status === 500) {
      iziToast.error({
        position: 'topRight',
        message: `Server error`,
      });
    }
  } finally {
    hiddeLoader();
  }
}

// --

async function loadedMoreImages() {
  page += 1;

  try {
    const { hits, totalHits } = await getPhotos(searchQuery, page);
    galleryArea.insertAdjacentHTML('beforeend', createGalleryMarkup(hits));
    lightbox.refresh();

    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lastPage = Math.ceil(totalHits / 15);

    if (lastPage === page) {
      btnLoadMore.classList.add('is-hidden');

      iziToast.info({
        position: 'topRight',
        message: `We're sorry, but you've reached the end of search results`,
        maxWidth: '432',
      });
    }
  } catch (error) {
    console.log(error.response.status);
  } finally {
    hiddeLoader();
  }
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hiddeLoader() {
  loader.classList.add('is-hidden');
}
