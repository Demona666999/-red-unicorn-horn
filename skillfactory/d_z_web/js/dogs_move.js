const loadBtn = document.querySelector('.gallery__button');
const galleryContainer = document.querySelector('.gallery__list');
const loader = document.querySelector('.gallery__loader');

async function fetchImages() {
  try {
    loader.style.display = 'block';
    galleryContainer.innerHTML = ''; 

    const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
    const data = await response.json();

    data.message.forEach((imgUrl) => {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = 'Пёсик';
      img.classList.add('gallery__image');
      galleryContainer.appendChild(img);
    });
  } catch (error) {
    console.error('Ошибка загрузки:', error);
  } finally {
    loader.style.display = 'none';
  }
}


loadBtn.addEventListener('click', fetchImages);