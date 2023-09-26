const   axios  = require("axios");
const { Videogame,Genre } = require("../db");




const getGame = async (_req, res) => {
  try {
    const videogamesDb = await Videogame.findAll({ include: Genre });
    console.log('soy la bases de datosss', videogamesDb);
    const videogamesApi = await axios.get('https://api.rawg.io/api/games?key=c0b6dc79f407436cbcf3ca1f02d1e6a8');
    console.log('soy la APIIIII', videogamesApi);

    const allVideogames = [...videogamesDb, ...videogamesApi.data.results];
    res.send(allVideogames);

  } catch (error) {
    res.status(400).json({error:error.message})
  }
};

module.exports = {
  getGame,
};