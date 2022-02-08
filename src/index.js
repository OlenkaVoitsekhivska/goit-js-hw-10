import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { dataFilter } from './js/dataFilter';
import { markupMaker } from './js/markupMaker';
import { debounce } from 'lodash';
import Notiflix from "notiflix";


const DEBOUNCE_DELAY = 300;

const inputRef = document.querySelector('input');
const container = document.querySelector('.country-info');
const list = document.querySelector('.country-list');

inputRef.addEventListener('input', debounce(eventPreDebounce, DEBOUNCE_DELAY));



function eventPreDebounce(evt) {
    let currentValue = evt.target.value.trim();
    if (currentValue) {
       
        fetchCountries(currentValue)
            .then(data => {
                if (data.length === 1) {
                    fetchCountries(currentValue)
                    .then(dataFilter)
                    .then(markupMaker)
                    .then(list.classList.add('hidden'))
           
                } else if (data.length >= 2 && data.length <= 10) {
                    fetchCountries(currentValue)
                    .then(data => {
                        const mapped = data.map(el => {
                             return `<li class="itemAlign"><img src = ${el.flags['svg']} class="listImg">${el.name['official']}</li>`
                        })
                        .join('')
                        list.innerHTML = mapped;
                        list.classList.remove('hidden');
                    })
                    
                } else if (data.length > 10) {
                    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");

                } else if (!data.ok) {
                    Notiflix.Notify.failure("Oops, there is no country with that name");
                    return Promise.reject(data);
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                container.innerHTML = '';
                list.innerHTML = '';
            })
    }
}








