const { Router } = require('express');
const { rutaGames, rutaGamesId, genresDB, postGame } = require('../controllers/videogames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/videogames',rutaGames)
router.get("/videogame/:id",rutaGamesId);
router.get('/genres',genresDB)
router.post('/postgame',postGame)

module.exports = router;
