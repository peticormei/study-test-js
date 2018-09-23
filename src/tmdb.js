const tmdb = require('./website');

module.exports = class Tmdb{
    async getInitPage() {
        const html = await tmdb.get('/');
        return html.data;
    }
}