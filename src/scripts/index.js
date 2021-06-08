import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const data = require('../DATA.json');

const displayRestaurants = () => {
    const elements = data.restaurants.map(restaurant => {
        return `<div class="restaurant-item">
            <p class="restaurant-item__city" aria-label="restaurant city ${restaurant.city}">${restaurant.city}</p>
            <img class="restaurant-item__image" src="${restaurant.pictureId}" aria-label="restaurant image ${restaurant.name}" alt="${restaurant.name}">
            <div class="restaurant-item__text-wrapper">
                <p class="restaurant-item__rating" aria-label="rating ${restaurant.rating}"><i class="rating-icon fas fa-star"></i> ${restaurant.rating}</p>
                <p class="restaurant-item__name" aria-label="restaurant name ${restaurant.name}">${restaurant.name}</p>
                <p class="restaurant-item__description" aria-label="restaurant description ${restaurant.description}">${restaurant.description}</p>
            </div>
        </div>`;
    });

    document.querySelector('.restaurants').innerHTML = elements.join(' ');
}

const hideNavMenu = () => {
    document.querySelector('.nav-menu-mobile').classList.add('hidden');
}

const showNavMenu = () => {
    document.querySelector('.nav-menu-mobile').classList.remove('hidden');
}

const isHidden = (element) => {
    return element.classList.contains('hidden');
}

const navButtonClickHandler = () => {
    const navMenuMobileElement = document.querySelector('.nav-menu-mobile');
    if (isHidden(navMenuMobileElement)) {
        showNavMenu();
    } else {
        hideNavMenu();
    }
}

const navMenuitemClickHandler = () => {
    const navMenuMobileElement = document.querySelector('.nav-menu-mobile');
    if (!isHidden(navMenuMobileElement)) {
        hideNavMenu();
    }
}

document.querySelector('.btn-nav').addEventListener('click', navButtonClickHandler);
document.querySelectorAll('.nav-menu-mobile__item').forEach(element => {
    element.addEventListener('click', navMenuitemClickHandler);
});

displayRestaurants();