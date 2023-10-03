const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getGame = async (_req, res) => {
  try {
    const limit = 60;

    const [videogamesDb, videogamesApi] = await Promise.all([
      Videogame.findAll({ include:  Genre }),
      axios.get(
        `https://api.rawg.io/api/games?key=91fecabb447e4d87bd14d72b6901ca7c&page_size=${limit}`
      ),
    ]);

    const allVideogames = [
      ...videogamesDb,
      ...videogamesApi.data.results.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) 
         || [],
        background_image: allVideogame.background_image,
        released: allVideogame.released,
        rating: allVideogame.rating,
        genres: allVideogame.genres?.map((genre) => genre.name) || [],
      })),
    ];
    return res.send(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGame,
};

/* const axios = require('axios');
const { Videogame } = require('../db');

const getGame = async (req, res) => {
  try {
    // Definimos la cantidad de videojuegos que queremos obtener de la API
    const numberOfGames = 30;

    // Realizamos la petición a la API de RAWG
    const response = await axios.get(`https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page_size=${numberOfGames}`);

    // Obtenemos los videojuegos desde la respuesta de la API
    const gamesData = response.data.results;

    // Mapeamos los videojuegos para crear un arreglo de objetos que se ajusten a nuestro modelo
    let gamesToDb = gamesData.map(game => ({
      id: game.id,
      name: game.name,
      description: game.description,
      platforms: game.platforms.map(platform => platform.platform.name),
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
    }));

    // Guardamos los videojuegos en la base de datos
    for(let game of gamesToDb) {
      await Videogame.findOrCreate({
        where: { id: game.id },
        defaults: game
      });
    }

    // Enviar una respuesta exitosa
    res.status(200).json({ message: "Videogames successfully stored in DB." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was a problem with the request." });
  }
};

module.exports = {
  getGame,
}; */
