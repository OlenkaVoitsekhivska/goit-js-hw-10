import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { displayCountryList } from './js/displayCountryList';
import { displayOneCountry } from './js/displayCountryList';
import { debounce } from 'lodash';
import Notiflix from "notiflix";


const DEBOUNCE_DELAY = 300;


const inputRef = document.querySelector('input');
const listRef = document.querySelector('.country-list');
const countryBoxRef = document.querySelector('.country-info');




inputRef.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY))

function handleInput(evt) {
    if (!evt.target.value) {
        countryBoxRef.innerHTML = '';
        listRef.innerHTML = '';
        return;
    }
    else if (evt.target.value) {
        handleSuccess(evt.target.value.trim());
    }
}


function handleSuccess(val) {
    fetchCountries(val).then((data) => {
        if (data.length >= 2 && data.length <= 10) {
            listRef.innerHTML =  displayCountryList(data);      
            countryBoxRef.innerHTML = '';
        }
        else if (data.length === 1) {
            listRef.innerHTML = '';
            countryBoxRef.innerHTML = displayOneCountry(data); 
        }
        else if (data.length > 10) {
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        }
        else if (!data.length) {
            Notiflix.Notify.failure("Oops, there is no country with that name");
        }
   }).catch((err) => new Error(err))
}









