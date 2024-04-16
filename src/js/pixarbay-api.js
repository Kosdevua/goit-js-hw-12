// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

//У разі пошуку за новим ключовим словом значення page потрібно повернути до початкового, оскільки буде пагінація для нової колекції зображень.

import axios from 'axios';

const API_KEY = '43362047-b69de0f8b7d88fd6ec05c5589';
axios.defaults.baseURL = 'https://pixabay.com/';

export async function getPhotos(q, page) {
  try {
    const searchParams = {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    };
    const { data } = await axios.get(`api/`, searchParams);
    return data;
  } catch (err) {
    console.log(err);
  }
}

// export function getPhotos(q, page) {
//   const API_KEY = '43362047-b69de0f8b7d88fd6ec05c5589';
//   const baseUrl = 'https://pixabay.com/api';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page,
//     per_page: 15,
//   });

//   return fetch(`${baseUrl}/?${params}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//       //   if(res)
//     }
//     return res.json();
//   });
// }
