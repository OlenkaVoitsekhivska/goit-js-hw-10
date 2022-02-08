import flagName from '../templates/flagName.hbs';

const container = document.querySelector('.country-info');

function markupMaker(official, capitCity, population, lingos, svg) {
    const countryCard = flagName(official, capitCity, population,lingos, svg);
    container.innerHTML = countryCard;
}

export {markupMaker}