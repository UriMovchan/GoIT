const BASE_URL = 'https://restcountries.eu/rest/v2/';

export default {
    getCountry(data) {
        let url = BASE_URL
            url += data.path ? data.path : '';
            url += data.param ? data.param : '';
        return fetch(url)
        .then(response => {
            if (!response.ok) throw response;
            return response.json()
        })
    }
}