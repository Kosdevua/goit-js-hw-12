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
let lightbox;

formElement.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.search.value.trim();

  galleryArea.innerHTML = '';

  if (!searchQuery) return;
  showLoader();

  getPhotos(searchQuery)
    .then(res => {
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

      if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
      } else {
        lightbox.refresh();
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

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hiddeLoader() {
  loader.classList.add('is-hidden');
}
