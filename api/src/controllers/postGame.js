/* const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  
  try {  
    const { name, description, platforms, background_image, released, rating, genres } = req.body;
    console.log('genres de req.body', genres)
    
    const existingGenres = await Genre.findAll({ where: { name: genres } });
    
    const createdVideogame = await Videogame.create({
      name, description, platforms, background_image, released, rating, 
    });
    console.log('verificando generos', createdVideogame)

    await createdVideogame.addGenres(existingGenres);
    
    res.status(201).json(createdVideogame);
  } catch (error) {
    res.status(400).json({ error: 'Faltan datos en la creacion del videogames'});
  }
};

module.exports = {
  postGame,
}; */

const { Videogame, Genre } = require('../db');

const postGame = async (req, res) => {
  try {
    const { name, description, platforms, background_image, released, rating, genres } = req.body;
    console.log('genres de req.body', genres)
    // Consulta los géneros existentes en la base de datos por nombre
    const existingGenres = await Genre.findAll({ where: { name: genres } });

    // Crea el videojuego sin asignar los géneros por ahora
    const createdVideogame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    });
    console.log('verificando generos', createdVideogame)
    // Asigna los géneros al videojuego
    await createdVideogame.addGenres(existingGenres);

    res.status(201).json(createdVideogame);
  } catch (error) {
    res.status(400).json({ error: 'Faltan datos en la creación del videojuego' });
  }
};

module.exports = {
  postGame,
};
