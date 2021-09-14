import { ajax } from './library';

const TOKEN = '?key=21234453-285b94d8962b2b6d6c9bd2490';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = async (request = '') => {
    const query = `${BASE_URL}${TOKEN}${request}`;

    try {
        return await ajax(query);
    } catch (e) {
        console.log(e);
    }
}

export { getImages }