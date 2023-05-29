const gridContainer = document.querySelector('.grid-container');
const pageSize = 20;

const displayGallery = (images, page) => {
  const startIndex = (page - 1) * pageSize;

  images.forEach((image, i) => {
    const galleryItem = document.createElement('article');
    galleryItem.tabIndex = (startIndex + i) + 10
    galleryItem.classList.add('grid-container__card');


    const p = document.createElement('p');
    p.textContent = image.title
    const img = document.createElement('img');
    img.src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    img.alt = image.title;
    img.loading = "lazy";
    img.classList.add('grid-container__card__img');


    galleryItem.appendChild(p);
    galleryItem.appendChild(img);
    gridContainer.appendChild(galleryItem);
  });
};

export default displayGallery;