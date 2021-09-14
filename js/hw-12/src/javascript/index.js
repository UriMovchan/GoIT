import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import alert from './pnotfy';
 
let countrySearchListTpl = require("../template/country_search_list.hbs");
let countryInfoTpl = require("../template/country_info.hbs");

const countrySearch = document.querySelector('.countrySearch');
const countryInfo = document.querySelector('.countryInfo');

const searchCountryByName = debounce((param) => {
    if (param) {
        fetchCountries.getCountry({
            path: 'name/',
            param: param
        }).then(country => { 
            if (country.length > 10) {
                countrySearch.classList.add('hidden');
                alert({
                    text: 'Too many matches found. Please enter a more specific query',
                    place: 'countries-form'
                }); 
             } else if (param.toLowerCase() === country[0].name.toLowerCase()) { 
                countrySearch.classList.add('hidden');

                countryInfo.innerHTML = countryInfoTpl({ country });
             } else {
                countrySearch.classList.remove('hidden');
                countrySearch.innerHTML = countrySearchListTpl({ country });
            } 
        })
            .catch((error) => console.log(error.status));
    } else {
        countrySearch.classList.add('hidden');
    } 
}, 250)



document.getElementById('input-country').addEventListener('input', function () {
    searchCountryByName(this.value);
})


