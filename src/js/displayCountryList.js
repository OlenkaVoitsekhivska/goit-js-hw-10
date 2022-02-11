export function displayCountryList(data) {
   const listMarkup=  data.map((el) => {
      return `
      <li class = "list-group">
      <img src = ${el.flags.svg} alt = "${el.name.official} flag" class = "list-group-item">
      <p>${el.name.official}</p>
      </li>
      `
   })
   .join('');
   return listMarkup;
}

export function displayOneCountry(data) {
   const onesieMarkup = data.map((el) => {
      return `
      <div class = "list-group fontUp"> <img src = ${el.flags.svg} alt = "${el.name.official} flag">
      <p>${el.name.official}</p> </div>
      <p class = "category-wrapper"><span class = "category">Capital: </span>${el.capital}</p>
      <p class = "category-wrapper"><span class = "category">Population: </span>${el.population}</p>
      <p class = "category-wrapper"><span class = "category">Languages: </span>${Object.values(el.languages)}</p>
      `
   })
   .join('');
   return onesieMarkup;
}

