const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const getQuery = async (req, res) => {
  try {
    const { name } = req.query;

    const lowercaseName = name.toLowerCase();
    
    const videogamesDb = await Videogame.findAll({
      where: {
         name: {
          [Op.iLike]: `%${lowercaseName}%`
         }
         },
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
    const apiResults = videogamesApi.data.results;

    if (apiResults.length === 0) {
      
      res.status(200).json({ message: "No se encontraron videojuegos con ese nombre" });
    } else {
      
      res.status(200).send(apiResults);
    }
  } catch (error) {

    res.status(403).json({ error: error.message });
  }
};

module.exports = {
  getQuery,
};