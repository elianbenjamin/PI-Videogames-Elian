const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getQuery = async (req, res) => {
  try {
    const { name } = req.query;

    const videogamesDb = await Videogame.findAll({
      where: { name },
      include: Genre,
    });
    if (videogamesDb.length) {
    
      res.send(videogamesDb);
      return; 
    }

    const page = 15;
    const videogamesApi = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page_size=${page}`,
      {
        params: {
          search: name,
        },
      }
    );
    if (videogamesApi.data.results.length === 0) {
      throw new Error("No videogame found");
    } else {
      res.status(200).send(videogamesApi.data.results);
      return; 
    }
  } catch (error) {
    res.status(403).json({ error: 'El videojuego con ese nombre no fue encontrado' });
  }
};

module.exports = {
  getQuery,
};