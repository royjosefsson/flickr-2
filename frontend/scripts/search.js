import displayGallery from './gallery.js';

const resultHeading = document.querySelector('.result-heading');
const gridContainer = document.querySelector('.grid-container');
const searchInput = document.querySelector('.search-input');
const nextButton = document.querySelector('.button__next-page');
const loadingDots = document.querySelector('.loading__dots');

let timeout;
let page = 1;

const eventListeners = {
  input: "input",
  click: "click"
}

const search = async (text, trigger) => {
  loadingDots.style.visibility = 'initial';
  const apiUrl = `http://localhost:3001/v1/search?text=${encodeURIComponent(text)}&page=${page}`;

  let body;

  try {
    const response = await fetch(apiUrl);
    body = await response.json()
  } catch (error) {
    console.log('Error fetching from Flickr API:', error);
    return
  }

  loadingDots.style.visibility = 'hidden';

  if (body.data.length === 0) {
    resultHeading.textContent = `No result for ${text}`
    nextButton.style.display = 'none';
    if (trigger === eventListeners.click) {
      return
    }
    gridContainer.innerHTML = '';
    return
  }
  nextButton.style.display = 'initial';
  resultHeading.textContent = `Result for ${text}`
  displayGallery(body.data, page);
};


searchInput.addEventListener(eventListeners.input, () => {
  clearTimeout(timeout);
  nextButton.style.display = 'none';
  page = 1
  const searchText = searchInput.value.trim();
  if (searchText.length < 2) {
    resultHeading.innerHTML = '';
    gridContainer.innerHTML = '';
    return;
  }
  timeout = setTimeout(() => {
    search(searchText, eventListeners.input);
  }, 500);
});

nextButton.addEventListener(eventListeners.click, () => {
  debugger
  page++;
  nextButton.style.display = 'none';
  const searchText = searchInput.value.trim();
  search(searchText, eventListeners.click);
})