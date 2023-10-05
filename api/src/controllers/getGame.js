const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getGame = async (_req, res) => {
  try {
    const limit = 100;

    const [videogamesDb,videogamesApiFirstPage, videogamesApiSecondPage, videogamesApiThirdPage] = await Promise.all([
      Videogame.findAll({   include: {
        model: Genre,
        as: 'genres',
        attributes: ['name'],
        through: {
          attributes: []
        },
        order: [
          ['ASC']
        ],
      }, }),
      axios.get(
        `https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page_size=${limit}`
      ),
      axios.get(`https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page=2&page_size=${limit}`
      ),
      axios.get(`https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page=3`
      )
      
    ]);
    const dbGenres = videogamesDb.map((game) => ({
      ...game.toJSON(),
      genres: game.genres.map((genre) => genre.name),
    }));


    const allVideogames = [
      ...dbGenres,
      ...videogamesApiFirstPage.data.results.map((allVideogame) => ({
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
      ...dbGenres,
      ...videogamesApiSecondPage.data.results.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) || [],
        background_image: allVideogame.background_image,
        released: allVideogame.released,
        rating: allVideogame.rating,
        genres: allVideogame.genres?.map((genre) => genre.name) || [],
      
      })),
      ...dbGenres,
      ...videogamesApiThirdPage.data.results.map((allVideogame) => ({
        id: allVideogame.id,
        name: allVideogame.name,
        description: allVideogame?.description || "No description available",
        platforms:
          allVideogame.platforms?.map((platform) => platform.platform.name) || [],
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


