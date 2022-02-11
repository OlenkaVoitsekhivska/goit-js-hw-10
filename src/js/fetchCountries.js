function fetchCountries(countryName){
   return fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,languages,capital,flags,population`).then(res=>res.json())
}

export {fetchCountries};