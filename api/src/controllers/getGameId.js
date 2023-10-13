const { Videogame,Genre } = require("../db");
const axios = require("axios");

// Función que remueve los tags HTML
const stripHtmlTags = (str) => {
  if ((str===null) || (str === ''))
    return false;
  else
    str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

const getGameId = async (req, res) => {
  try {
    const { idVideogame } = req.params;

    let types = 'number';
    if(isNaN(idVideogame)){
      types='uuid'
    }


    if (types === 'number') {
      const url = `https://api.rawg.io/api/games/${idVideogame}?key=c0b6dc79f407436cbcf3ca1f02d1e6a8`;
      const { data } = await axios(`${url}`);
     
      if (!data.name) {
        return res.status(404).send(`No se encontró el videojuego con ID: ${idVideogame} en la API`);
      }
      const players = {
        id: data.id,
        name: data.name,
        description: stripHtmlTags(data.description),
        platforms: data.platforms.map((plat)=>{
          return plat.platform.name
        }),
        background_image: data.background_image,
        released: data.released,
        rating: data.rating,
        genres: data.genres.map((gen)=>{
          return gen.name
        })
      }
      return res.status(200).json(players);
    } else {
      const gameFromDb = await Videogame.findByPk(idVideogame, {
        include: 
                {
                model: Genre,
                as: 'genres',
                attributes: ['id', 'name'],
                through: { 
                    attributes: []
                },
                order: [
                    ['ASC']
                ],
            },
      });

      if (gameFromDb) {
        
        const genres = gameFromDb.genres.map((gen) => {
          return gen.name;
        });
  
        const gameData = {
          id: gameFromDb.id,
          name: gameFromDb.name,
          description: gameFromDb.description,
          platforms: gameFromDb.platforms,
          background_image: gameFromDb.background_image,
          released: gameFromDb.released,
          rating: gameFromDb.rating,
          genres: genres,
        };
  
        return res.status(200).json(gameData);
      }
    }
  } catch (error) {
    return res.status(400).json({error:'el ID no existe bro'})
  }
};

module.exports = {
  getGameId,
};


