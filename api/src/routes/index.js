const { Router } = require('express');
const { getGame } = require('../controllers/getGame');
const { getGameId } = require('../controllers/getGameId');
const { getQuery } = require('../controllers/getQuery');
const { postGame } = require('../controllers/postGame');
const { getGenre } = require('../controllers/getGenre');




// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', getGame) 
router.get('/videogames/name', getQuery) 
router.get('/videogames/:idVideogame', getGameId)
router.post('/videogames', postGame)
router.get('/genres', getGenre)



module.exports = router;
