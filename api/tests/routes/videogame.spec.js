/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: 'A classic platformer game',
  platforms: ['Nintendo Switch', 'Nintendo 3DS'],
  background_image: 'URL de la imagen',
  released: '2023-10-09', 
  rating: 4.5,  
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});


describe('GET /videogames?search=Super Mario', () => {
  it('should get 200 and return videogames with "Super Mario" in the name', () =>
    agent.get('/videogames?search=Super%20Mario')
      .expect(200)
      .expect((res) => {
        // Verificar que los resultados contengan "Super Mario" en el nombre
        const hasSuperMario = res.body.some((game) => game.name.includes('Super Mario'));
        expect(hasSuperMario).to.be.true;
      })
  );
});


