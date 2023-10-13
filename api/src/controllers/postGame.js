const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  try {
    const { name, description, platforms, background_image, released, rating, genres } = req.body;

    // Consulta si ya existe un videojuego con el mismo nombre
    const existingVideogame = await Videogame.findOne({ where: { name } });

    if (existingVideogame) {
      // Si el videojuego ya existe, actualiza los géneros asociados
      const existingGenres = await Genre.findAll({ where: { name: genres } });

      await existingVideogame.setGenres(existingGenres);

      return res.status(200).json(existingVideogame);
    }

    // Si el videojuego no existe, crea un nuevo videojuego
    const createdVideogame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    });

    // Consulta los géneros existentes en la base de datos por nombre
    const existingGenres = await Genre.findAll({ where: { name: genres } });

    // Asigna los géneros al videojuego
    await createdVideogame.addGenres(existingGenres);

    return res.status(201).json(createdVideogame);
  } catch (error) {
    return res.status(400).json({ error: 'Data is missing in the creation of the video game.' });
  }
};

module.exports = {
  postGame,
};
