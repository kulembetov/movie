// Список карточек с фильмами

const listCards = document.querySelector('.cards__list');

// Нахождение шаблона карточки
const templateCard = listCards.querySelector('#cards-template').content;

// Функция создания карточек
function createCard(link, title, description) {
  const cardsClone = templateCard.querySelector('.cards__item').cloneNode(true);
  const cardMovieImage = cardsClone.querySelector('.cards__movie');
  const cardLink = cardsClone.querySelector('.cards__link');
  const cardTitle = cardsClone.querySelector('.cards__title');
  const cardDescription = cardsClone.querySelector('.cards__description');

  cardMovieImage.src = link;
  cardMovieImage.alt = title;
  cardTitle.textContent = title;
  cardDescription.textContent = description;
  cardLink.src = link;

  return cardsClone;
}

// Добавление в DOM

function addCard() {
  initialCards.forEach(function (item) {
    listCards.append(createCard(item.link, item.title, item.description));
  });
}

addCard()

// Переключение классов при переключение языков

const languageSwither = document.querySelectorAll('.header__language');

languageSwither.forEach((languageSwitherItem) => languageSwitherItem.addEventListener('click', (e) => languageSwitherItem.classList.toggle('header__language_active')));
