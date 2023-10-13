const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getGame = async (_req, res) => {
  try {
    const limit = 25;

    const pages = [1, 2, 3, 4]; 
    const videogamesDbPromise = Videogame.findAll({   
        include: {
            model: Genre,
            as: 'genres',
            attributes: ['name'],
            through: {
                attributes: []
            },
            order: [
                ['ASC']
            ],
        },
    });
      
    const apiPromises = pages.map(page =>
        axios.get(`https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page=${page}&page_size=${limit}`)
    );

    
    const allData = await Promise.all([videogamesDbPromise, ...apiPromises]);

    const videogamesDb = allData[0]; 
    const apiResults = allData.slice(1); 

    const dbGenres = videogamesDb.map((game) => ({
      ...game.toJSON(),
      genres: game.genres.map((genre) => genre.name),
    }));

    
    const allApiVideogames = apiResults.flatMap(({ data: { results }}) => 
      results.map((game) => ({
        id: game.id,
        name: game.name,
        description: game?.description || "No description available",
        platforms: game.platforms?.map((platform) => platform.platform.name) || [],
        background_image: game.background_image,
        released: game.released,
        rating: game.rating,
        genres: game.genres?.map((genre) => genre.name) || [],
      }))
    );

    const allVideogames = [
      ...dbGenres,
      ...allApiVideogames,  
    ];
    
    return res.send(allVideogames); 
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGame,
};
