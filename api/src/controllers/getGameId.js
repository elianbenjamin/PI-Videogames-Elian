const axios = require("axios"); 

const { Videogame, Genre } = require("../db");

const getGameId = async (req, res) => {
  const { idVideogame } = req.params;
  const videogameDb = await Videogame.findByPk(idVideogame, { include: Genre });
console.log(videogameDb);
  if (videogameDb) {
    res.send(videogameDb);
  } else {
    const videogameApi = await axios.get(
      `https://api.rawg.io/api/games/${idVideogame}?key=c0b6dc79f407436cbcf3ca1f02d1e6a8`
    );
    res.send(videogameApi.data);
  }
};

module.exports = {
  getGameId,
};

/* const { Videogame } = require("../db");
const axios = require("axios");

const getGameId = async (req, res) => {
  try {
    const { idVideogame } = req.params;

    // Si el ID es numérico, debemos buscarlo en la API
    // !isNan(idVideogame)
    if (idVideogame) {
      const url = `https://api.rawg.io/api/games/${idVideogame}?key=c0b6dc79f407436cbcf3ca1f02d1e6a8`;
      const { data } = await axios(`${url}`);

      if (!data)
        return res
          .status(404)
          .send(
            `No se encontró el videojuego con ID: ${idVideogame} en la API`
          );

      // Asegúrate de mapear correctamente los géneros
      const gameFromApi = {
        ...data,
        genres: data.genres.map((genre) => genre.name),
      };

      return res.status(200).json(gameFromApi);
    } else {
      // Si el ID no es numérico, debemos buscarlo en nuestra base de datos.
      const gameFromDb = await Videogame.findByPk(idVideogame, {
        include: ["Genre"],
      });
      if (!gameFromDb)
      
        return res
          .status(404)
          .send(
            `No se encontró el videojuego con ID: ${idVideogame} en la base de datos`
          );

      return res.status(200).json(gameFromDb);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getGameId,
};

 */

/* const { Videogame } = require("../db");

const getGameId = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getGameId,
}; */
