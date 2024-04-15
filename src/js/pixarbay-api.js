// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

//У разі пошуку за новим ключовим словом значення page потрібно повернути до початкового, оскільки буде пагінація для нової колекції зображень.

export function getPhotos(q, page) {
  const baseUrl = 'https://pixabay.com/api';
  const API_KEY = '43362047-b69de0f8b7d88fd6ec05c5589';

  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

  page++;

  return fetch(`${baseUrl}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
      //   if(res)
    }
    return res.json();
  });
}

////====////

// export function getPhotos(q) {
//   const baseUrl = 'https://pixabay.com/api';
//   const API_KEY = '43362047-b69de0f8b7d88fd6ec05c5589';

//   const params = new URLSearchParams({
//     key: API_KEY,
//     q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });
//   return fetch(`${baseUrl}/?${params}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//       //   if(res)
//     }
//     return res.json();
//   });
// }
