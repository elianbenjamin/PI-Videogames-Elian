const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const getQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const lowercaseName = name.toLowerCase();

   
    const dbResults = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${lowercaseName}%`
        }
      },
      include: Genre,
    });

   
    const page = 15;
    const apiResults = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=c0b6dc79f407436cbcf3ca1f02d1e6a8&page_size=${page}`,
      {
        params: {
          search: name,
        },
      }
    );

    const combinedResults = [...dbResults, ...apiResults.data.results];

    if (combinedResults.length === 0) {
      res.status(204).json({ message: "No se encontraron videojuegos con ese nombre" });
    } else {
      res.status(200).send(combinedResults);
    }
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};

module.exports = {
  getQuery,
};
