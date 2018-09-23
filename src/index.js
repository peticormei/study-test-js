const Tmdb = require('./tmdb');

const test = async () => {
    const scraper = new Tmdb();
    const html = await scraper.getInitPage();
    console.log(html);
}

test();