/* const axios= require("axios");
const { Videogame, Genre } = require("../db");


const getQuery = async (req, res) => {
  try {
    const { name } = req.query;
    const videogamesDb = await Videogame.findAll({ where: { name } , include: Genre });
    
    if (videogamesDb.length) {
        res.send(videogamesDb);
    } else {
        const videogamesApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=c0b6dc79f407436cbcf3ca1f02d1e6a8`);
        videogamesApi.data.results.length 
            ? res.send(videogamesApi.data.results) 
            : res.send({ error: "Videojuego no encontrado" });
    }
  } catch (error) {
    res.status(400).json({error: error.message})  
  }
};

module.exports = {
  getQuery,
};
 */
 const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getQuery = async (req, res) => {
  try {
    const query = req.query.name;

    // Primero, buscamos en la base de datos
    const dbGames = await Videogame.findAll({
      where: {
        name: {
          // Realizamos una búsqueda insensible a mayúsculas/minúsculas
          [Op.iLike]: `%${query}%`,
        },
      },
      limit: 15, // Limitamos a los primeros 15 resultados
      include: [
        // Puedes incluir relaciones, como Genre, si es necesario
        {
          model: Genre,
          attributes: ["name"],
        },
      ],
    });

    // Luego, consultamos la API externa (ajusta la URL a tu API)
    const apiResponse = await axios.get(
      `https://api.rawg.io/api/games?name=${query}&key=c0b6dc79f407436cbcf3ca1f02d1e6a8`
    );

    const apiGames = apiResponse.data;

    // Combinamos los resultados de la base de datos y la API
    const combinedGames = dbGames.concat(apiGames);

    if (combinedGames.length === 0) {
      return res.status(404).json({ message: "No se encontraron videojuegos." });
    }

    res.json(combinedGames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

module.exports = {
  getQuery,
}; 
/* const getQuery= async (req, res) => {
  const { name } = req.query
  try {
    let arrVideogames
    if (name) {
      arrVideogames = await getVideogamesByName(name)
    } else {
      arrVideogames = await getAllVideogames()
    }
    res.status(200).json({
      ok: true,
      arrVideogames
    })
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: error.message
    })
  }
}
module.exports = {getQuery} */