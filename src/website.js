const axios = require('axios');

module.exports = axios.create({
    baseURL: 'http://tmdb.org'
});