// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

export function getPhotos(q) {
  const baseUrl = 'https://pixabay.com/api';
  const API_KEY = '43362047-b69de0f8b7d88fd6ec05c5589';

  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${baseUrl}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
      //   if(res)
    }
    return res.json();
  });
}
