const moxios = require('moxios');
const website = require('../src/website')
const Tmdb = require('../src/tmdb');
const assert = require('assert');
const nock = require('nock');

describe('Mock Axios', () => {
    beforeEach(() => {
        moxios.install(website);
    });

    afterEach(() => {
        moxios.uninstall(website);
    });

    it('First test suit', async () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({ status: 200, response: 'teste' });
        });

        const tmdb = new Tmdb();
        const result = await tmdb.getInitPage();
        
        assert.equal(result, 'teste');
    });

    it('First test suit', async () => {
        moxios.stubRequest('http://tmdb.org/', {
            status: 200,
            response: 'teste',
        });

        const tmdb = new Tmdb();
        const result = await tmdb.getInitPage();
        
        assert.equal(result, 'teste');  
    });
});

describe('Nock', () => {
    it('teste 1', async () => {
        nock('http://tmdb.org').get('/').reply(200, 'wrong');

        const tmdb = new Tmdb();
        const result = await tmdb.getInitPage();
        
        assert.equal(result, 'teste');  
    });
});