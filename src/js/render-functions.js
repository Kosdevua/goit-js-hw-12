//У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

export function createGalleryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallery-item">
          <a href="${image.largeImageURL}" alt="${image.tags}">
              <img src="${image.webformatURL}" >
          </a>
              <div>
              <table>
                  <thead>
                      <tr>
                          <th>Likes</th>
                          <th>Views</th>
                          <th>Comments</th>
                          <th>Downloads</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>${image.likes}</td>
                          <td>${image.views}</td>
                          <td>${image.comments}</td>
                          <td>${image.downloads}</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
         </li>`
    )
    .join('');
}
