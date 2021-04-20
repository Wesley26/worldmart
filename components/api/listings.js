import client from './client.js';

const endpoint = '/listings';

const getListings = (a, b, c) => client.get(endpoint);

export default {
    getListings,
}